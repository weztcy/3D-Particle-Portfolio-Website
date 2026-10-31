"use client";

import React, { useState, useMemo } from "react";
import {
  Activity,
  BrainCircuit,
  BarChart3,
  Cpu,
  Play,
  Sparkles,
  CheckCircle2,
  Sliders,
  Database,
  RefreshCw,
} from "lucide-react";
import {
  RAG_SANDBOX_SCENARIOS,
  ParticleFormation,
} from "@/data";

interface InteractiveLabSectionProps {
  onSelectFormation: (mode: ParticleFormation) => void;
  onTriggerPulse: () => void;
}

export default function InteractiveLabSection({
  onSelectFormation,
  onTriggerPulse,
}: InteractiveLabSectionProps) {
  const [activeTab, setActiveTab] = useState<"rag" | "ml" | "data">("rag");

  // --- TAB 1: RAG SIMULATOR STATE ---
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [isSimulatingRag, setIsSimulatingRag] = useState(false);
  const currentScenario = RAG_SANDBOX_SCENARIOS[selectedScenarioIdx];

  const handleRunRagScenario = (idx: number) => {
    setSelectedScenarioIdx(idx);
    setIsSimulatingRag(true);
    onSelectFormation("neural");
    onTriggerPulse();
    setTimeout(() => {
      setIsSimulatingRag(false);
    }, 450);
  };

  // --- TAB 2: ML HYPERPARAMETER LAB STATE ---
  const [learningRate, setLearningRate] = useState<number>(0.0012);
  const [loraRank, setLoraRank] = useState<number>(32);
  const [dropout, setDropout] = useState<number>(0.12);
  const [optimizer, setOptimizer] = useState<"AdamW-8bit" | "Lion" | "Sophia">(
    "AdamW-8bit"
  );

  // Compute simulated training & validation loss curves (20 epochs)
  const mlSimulation = useMemo(() => {
    const epochs = Array.from({ length: 20 }, (_, i) => i + 1);
    const optBonus =
      optimizer === "Sophia" ? 0.04 : optimizer === "AdamW-8bit" ? 0.025 : 0.015;
    const lrFactor = Math.abs(learningRate - 0.0015) * 180;
    const rankBonus = Math.min(loraRank / 64, 1) * 0.035;

    const trainCurve: number[] = [];
    const valCurve: number[] = [];

    epochs.forEach((ep) => {
      const progress = ep / 20;
      const baseDecay = 1.85 * Math.exp(-3.1 * progress) + 0.18;
      const tLoss = Math.max(
        0.09,
        baseDecay - rankBonus - optBonus + lrFactor * 0.12
      );
      const overfitPenalty =
        dropout < 0.1 && ep > 12 ? (0.1 - dropout) * (ep - 12) * 0.16 : 0;
      const vLoss = Math.max(
        0.12,
        tLoss + 0.06 + overfitPenalty + Math.sin(ep * 1.3) * 0.015
      );
      trainCurve.push(Number(tLoss.toFixed(3)));
      valCurve.push(Number(vLoss.toFixed(3)));
    });

    const finalValLoss = valCurve[valCurve.length - 1];
    const rocAuc = Math.min(0.996, Math.max(0.89, 1.015 - finalValLoss * 0.18));
    const f1Score = Math.min(0.988, Math.max(0.85, rocAuc - 0.014));
    const vramGb = (6.4 + (loraRank / 16) * 1.8).toFixed(1);

    return {
      epochs,
      trainCurve,
      valCurve,
      rocAuc: rocAuc.toFixed(3),
      f1Score: (f1Score * 100).toFixed(1) + "%",
      vramGb: `${vramGb} GB`,
      finalValLoss: finalValLoss.toFixed(3),
    };
  }, [learningRate, loraRank, dropout, optimizer]);

  // --- TAB 3: DATA ANALYTICS & FORECAST TELEMETRY STATE ---
  const [forecastHorizon, setForecastHorizon] = useState<30 | 90 | 180>(90);
  const [showConfidenceBand, setShowConfidenceBand] = useState(true);
  const [showAnomalies, setShowAnomalies] = useState(true);

  const dataTelemetrySeries = useMemo(() => {
    const pointsCount = 24;
    const factor = forecastHorizon === 30 ? 1.0 : forecastHorizon === 90 ? 1.25 : 1.55;
    return Array.from({ length: pointsCount }, (_, idx) => {
      const t = idx / (pointsCount - 1);
      const trend = 42 + t * 38 * factor;
      const seasonal = Math.sin(idx * 0.75) * 8.5 + Math.cos(idx * 0.4) * 4.2;
      const value = Math.round((trend + seasonal) * 10) / 10;
      const ciSpread = (idx > 15 ? (idx - 15) * 1.9 + 5 : 4.2) * factor * 0.65;
      const isAnomaly = idx === 7 || idx === 16;
      return {
        idx,
        dayLabel: `D-${idx * Math.round(forecastHorizon / 24)}`,
        value: isAnomaly ? value + 11.5 : value,
        upper: value + ciSpread,
        lower: Math.max(10, value - ciSpread),
        isForecast: idx >= 16,
        isAnomaly,
      };
    });
  }, [forecastHorizon]);

  return (
    <section
      id="interactive-lab"
      className="relative py-28 px-4 sm:px-6 lg:px-10 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400">
              <span>[ 03 // INTERACTIVE AI, ML & DATA SANDBOX ]</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Live Neural & Telemetry{" "}
              <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Playground.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Test-drive my interactive systems engineering sandboxes: from
              Hybrid Graph-RAG retrieval orchestration to deep learning hyperparameter
              tuning and probabilistic causal analytics telemetry.
            </p>
          </div>

          {/* 3-Module Switcher */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-[#0C0F17]/85 backdrop-blur-xl p-1.5">
            <button
              onClick={() => {
                setActiveTab("rag");
                onSelectFormation("neural");
                onTriggerPulse();
              }}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all ${
                activeTab === "rag"
                  ? "bg-sky-400/20 text-sky-300 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <BrainCircuit className="h-4 w-4 text-sky-400" />
              <span>01. Agentic RAG</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("ml");
                onSelectFormation("clusters");
                onTriggerPulse();
              }}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all ${
                activeTab === "ml"
                  ? "bg-indigo-400/20 text-indigo-300 border border-indigo-400/40 shadow-[0_0_20px_rgba(129,140,248,0.2)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Sliders className="h-4 w-4 text-indigo-400" />
              <span>02. ML Hyper-Tuner</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("data");
                onSelectFormation("helix");
                onTriggerPulse();
              }}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all ${
                activeTab === "data"
                  ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 shadow-[0_0_20px_rgba(52,211,153,0.2)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <BarChart3 className="h-4 w-4 text-emerald-400" />
              <span>03. Causal Forecast</span>
            </button>
          </div>
        </div>

        {/* Sandbox Main Container */}
        <div className="rounded-3xl border border-white/10 bg-[#0C0F17]/80 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.75)]">
          {/* MODULE 1: AGENTIC GRAPH-RAG SIMULATOR */}
          {activeTab === "rag" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Scenario Selector & Pipeline Telemetry */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-sky-400 mb-1">
                    SELECT ENTERPRISE QUERY VECTOR
                  </div>
                  <p className="text-xs text-slate-400">
                    Select an enterprise query scenario to simulate hybrid
                    retrieval (Qdrant Dense + SPLADE + Neo4j Subgraph):
                  </p>
                </div>

                <div className="space-y-2.5">
                  {RAG_SANDBOX_SCENARIOS.map((scen, idx) => {
                    const isSelected = idx === selectedScenarioIdx;
                    return (
                      <button
                        key={scen.id}
                        onClick={() => handleRunRagScenario(idx)}
                        className={`w-full rounded-2xl border p-4 text-left transition-all ${
                          isSelected
                            ? "border-sky-400/60 bg-sky-400/10 shadow-[0_0_24px_rgba(56,189,248,0.15)]"
                            : "border-white/10 bg-black/40 hover:border-white/25"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-mono text-[11px] font-semibold text-sky-400">
                            {scen.intent}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded bg-emerald-400/15 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                            <Play className="h-2.5 w-2.5" />
                            {scen.latencyMs}ms
                          </span>
                        </div>
                        <div className="font-display text-sm font-semibold text-white mb-1">
                          {scen.label}
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-2 font-mono">
                          &ldquo;{scen.query}&rdquo;
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Live Inference Telemetry Box */}
                <div className="grid grid-cols-3 gap-2.5 rounded-2xl border border-white/10 bg-black/50 p-4 font-mono">
                  <div>
                    <div className="text-[10px] text-slate-500">TTFT P95</div>
                    <div className="text-lg font-bold text-sky-400 tabular-nums mt-0.5">
                      {currentScenario.latencyMs}ms
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">THROUGHPUT</div>
                    <div className="text-lg font-bold text-indigo-400 tabular-nums mt-0.5">
                      {currentScenario.tokensPerSec} tok/s
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">FAITHFULNESS</div>
                    <div className="text-lg font-bold text-emerald-400 tabular-nums mt-0.5">
                      {currentScenario.faithfulness}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Retrieved Vector Chunks & Grounded Synthesis */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div
                  className={`space-y-4 transition-opacity duration-300 ${
                    isSimulatingRag ? "opacity-40" : "opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Database className="h-4 w-4 text-sky-400" />
                      TOP-3 RERANKED VECTOR & GRAPH SPANS
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400">
                      BGE-Reranker-Large // TensorRT FP16
                    </span>
                  </div>

                  {/* Retrieved Chunks */}
                  <div className="space-y-2.5">
                    {currentScenario.retrievedChunks.map((chunk, cIdx) => (
                      <div
                        key={cIdx}
                        className="rounded-xl border border-white/[0.08] bg-black/45 p-3.5"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1 font-mono text-[11px]">
                          <span className="text-sky-300 truncate">
                            {chunk.source}
                          </span>
                          <span className="shrink-0 rounded bg-sky-400/15 border border-sky-400/30 px-2 py-0.5 text-sky-300 tabular-nums">
                            Cosine: {chunk.score}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-mono leading-relaxed">
                          {chunk.snippet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Grounded LLM Synthesis Output */}
                  <div className="rounded-2xl border border-emerald-400/30 bg-emerald-950/15 p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400">
                        <Sparkles className="h-4 w-4" />
                        GROUNDED SYNTHESIS // VERIFIED CITATIONS
                      </span>
                      <span className="font-mono text-[10px] text-emerald-300/80 uppercase">
                        Zero Hallucination Guardrail Passed
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {currentScenario.synthesizedAnswer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 2: NEURAL HYPERPARAMETER & LOSS EXPLORER */}
          {activeTab === "ml" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Controls (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-indigo-400 mb-1">
                    HYPERPARAMETER & LORA CONFIGURATION
                  </div>
                  <p className="text-xs text-slate-400">
                    Adjust training hyperparameters below to observe real-time impacts
                    on loss convergence trajectories, generalization bounds, and ROC-AUC:
                  </p>
                </div>

                <div className="space-y-4 rounded-2xl border border-white/10 bg-black/40 p-5">
                  {/* Learning Rate */}
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1.5">
                      <span className="text-slate-300">LEARNING RATE (η)</span>
                      <span className="text-sky-400 tabular-nums">
                        {learningRate.toFixed(4)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0.0002}
                      max={0.004}
                      step={0.0002}
                      value={learningRate}
                      onChange={(e) =>
                        setLearningRate(parseFloat(e.target.value))
                      }
                      className="w-full accent-sky-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* LoRA Rank */}
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1.5">
                      <span className="text-slate-300">
                        ADAPTER RANK (LoRA r)
                      </span>
                      <span className="text-indigo-400 tabular-nums">
                        r = {loraRank}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={8}
                      max={128}
                      step={8}
                      value={loraRank}
                      onChange={(e) => setLoraRank(parseInt(e.target.value))}
                      className="w-full accent-indigo-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Dropout Regularization */}
                  <div>
                    <div className="flex justify-between font-mono text-xs mb-1.5">
                      <span className="text-slate-300">
                        DROPOUT REGULARIZATION
                      </span>
                      <span className="text-emerald-400 tabular-nums">
                        {dropout.toFixed(2)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0.0}
                      max={0.35}
                      step={0.02}
                      value={dropout}
                      onChange={(e) => setDropout(parseFloat(e.target.value))}
                      className="w-full accent-emerald-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Optimizer Switch */}
                  <div>
                    <div className="font-mono text-xs text-slate-300 mb-2">
                      OPTIMIZER ENGINE
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {(["AdamW-8bit", "Sophia", "Lion"] as const).map(
                        (opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setOptimizer(opt);
                              onTriggerPulse();
                            }}
                            className={`rounded-lg border py-2 font-mono text-xs transition-all ${
                              optimizer === opt
                                ? "border-indigo-400 bg-indigo-500/20 text-white"
                                : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Live Model Metrics Readout */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono">
                  <div className="rounded-xl border border-white/10 bg-black/50 p-3">
                    <div className="text-[10px] text-slate-500">ROC-AUC</div>
                    <div className="text-base font-bold text-emerald-400 tabular-nums mt-0.5">
                      {mlSimulation.rocAuc}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/50 p-3">
                    <div className="text-[10px] text-slate-500">F1-SCORE</div>
                    <div className="text-base font-bold text-sky-400 tabular-nums mt-0.5">
                      {mlSimulation.f1Score}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/50 p-3">
                    <div className="text-[10px] text-slate-500">VAL LOSS</div>
                    <div className="text-base font-bold text-indigo-400 tabular-nums mt-0.5">
                      {mlSimulation.finalValLoss}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/50 p-3">
                    <div className="text-[10px] text-slate-500">GPU VRAM</div>
                    <div className="text-base font-bold text-amber-400 tabular-nums mt-0.5">
                      {mlSimulation.vramGb}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Interactive SVG Loss Landscape Chart (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/10 bg-black/45 p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="font-mono text-xs text-slate-300 font-semibold">
                      CONVERGENCE TELEMETRY // 20 EPOCHS
                    </div>
                    <div className="font-mono text-[11px] text-slate-500">
                      Cross-Entropy Loss vs. Validation Generalization Gap
                    </div>
                  </div>
                  <div className="flex items-center gap-4 font-mono text-xs">
                    <span className="flex items-center gap-1.5 text-sky-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                      Train Loss
                    </span>
                    <span className="flex items-center gap-1.5 text-indigo-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
                      Val Loss
                    </span>
                  </div>
                </div>

                {/* SVG Line Chart */}
                <div className="relative w-full h-64 sm:h-72">
                  <svg
                    viewBox="0 0 600 240"
                    className="w-full h-full overflow-visible"
                  >
                    {/* Horizontal Grid Lines */}
                    {[0.2, 0.6, 1.0, 1.4, 1.8].map((val, i) => {
                      const y = 210 - (val / 2.0) * 185;
                      return (
                        <g key={i}>
                          <line
                            x1="40"
                            y1={y}
                            x2="580"
                            y2={y}
                            stroke="rgba(255,255,255,0.06)"
                            strokeDasharray="4 4"
                          />
                          <text
                            x="8"
                            y={y + 4}
                            fill="#64748b"
                            fontSize="10"
                            fontFamily="monospace"
                          >
                            {val.toFixed(1)}
                          </text>
                        </g>
                      );
                    })}

                    {/* Train Curve Polyline */}
                    <polyline
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="3"
                      points={mlSimulation.trainCurve
                        .map((v, idx) => {
                          const x = 40 + (idx / 19) * 540;
                          const y = 210 - (Math.min(v, 2.0) / 2.0) * 185;
                          return `${x},${y}`;
                        })
                        .join(" ")}
                    />

                    {/* Validation Curve Polyline */}
                    <polyline
                      fill="none"
                      stroke="#818CF8"
                      strokeWidth="3"
                      strokeDasharray="6 3"
                      points={mlSimulation.valCurve
                        .map((v, idx) => {
                          const x = 40 + (idx / 19) * 540;
                          const y = 210 - (Math.min(v, 2.0) / 2.0) * 185;
                          return `${x},${y}`;
                        })
                        .join(" ")}
                    />

                    {/* Data Nodes */}
                    {mlSimulation.trainCurve.map((v, idx) => {
                      const x = 40 + (idx / 19) * 540;
                      const y = 210 - (Math.min(v, 2.0) / 2.0) * 185;
                      return (
                        <circle
                          key={`t-${idx}`}
                          cx={x}
                          cy={y}
                          r="3.5"
                          fill="#38BDF8"
                        />
                      );
                    })}
                    {mlSimulation.valCurve.map((v, idx) => {
                      const x = 40 + (idx / 19) * 540;
                      const y = 210 - (Math.min(v, 2.0) / 2.0) * 185;
                      return (
                        <circle
                          key={`v-${idx}`}
                          cx={x}
                          cy={y}
                          r="3.5"
                          fill="#818CF8"
                        />
                      );
                    })}
                  </svg>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 font-mono text-[11px] text-slate-400">
                  <span>
                    STATUS:{" "}
                    {dropout < 0.08
                      ? "⚠️ Mild Overfitting Detected (Increase Dropout)"
                      : "✅ Optimal Generalization Envelope"}
                  </span>
                  <span className="text-sky-400">PyTorch 2.6 // CUDA FP16</span>
                </div>
              </div>
            </div>
          )}

          {/* MODULE 3: CAUSAL OLAP & FORECASTING TELEMETRY */}
          {activeTab === "data" && (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                    POLARIS TELEMETRY // BAYESIAN DEMAND & ANOMALY ENGINE
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Explore probabilistic time-series forecasting and real-time
                    Z-Score anomaly detection telemetry:
                  </p>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex rounded-xl border border-white/10 bg-black/40 p-1 font-mono text-xs">
                    {([30, 90, 180] as const).map((h) => (
                      <button
                        key={h}
                        onClick={() => {
                          setForecastHorizon(h);
                          onTriggerPulse();
                        }}
                        className={`rounded-lg px-3 py-1 transition-all ${
                          forecastHorizon === h
                            ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/40"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {h}D Horizon
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowConfidenceBand(!showConfidenceBand)}
                    className={`rounded-xl border px-3 py-1.5 font-mono text-xs transition-all ${
                      showConfidenceBand
                        ? "border-sky-400/40 bg-sky-400/15 text-sky-300"
                        : "border-white/10 bg-black/40 text-slate-400"
                    }`}
                  >
                    95% Credible Band
                  </button>

                  <button
                    onClick={() => setShowAnomalies(!showAnomalies)}
                    className={`rounded-xl border px-3 py-1.5 font-mono text-xs transition-all ${
                      showAnomalies
                        ? "border-amber-400/40 bg-amber-400/15 text-amber-300"
                        : "border-white/10 bg-black/40 text-slate-400"
                    }`}
                  >
                    Anomaly Flags
                  </button>
                </div>
              </div>

              {/* SVG Time-Series & Confidence Band Chart */}
              <div className="rounded-2xl border border-white/10 bg-black/45 p-5">
                <div className="h-64 sm:h-72 w-full">
                  <svg
                    viewBox="0 0 720 240"
                    className="w-full h-full overflow-visible"
                  >
                    {/* Confidence Band Polygon */}
                    {showConfidenceBand && (
                      <polygon
                        fill="rgba(52, 211, 153, 0.12)"
                        points={[
                          ...dataTelemetrySeries.map((pt, i) => {
                            const x = 35 + (i / 23) * 665;
                            const y = 215 - (pt.upper / 140) * 190;
                            return `${x},${y}`;
                          }),
                          ...[...dataTelemetrySeries]
                            .reverse()
                            .map((pt, revIdx) => {
                              const i = 23 - revIdx;
                              const x = 35 + (i / 23) * 665;
                              const y = 215 - (pt.lower / 140) * 190;
                              return `${x},${y}`;
                            }),
                        ].join(" ")}
                      />
                    )}

                    {/* Forecast Horizon Divider */}
                    <line
                      x1={35 + (16 / 23) * 665}
                      y1="15"
                      x2={35 + (16 / 23) * 665}
                      y2="215"
                      stroke="#38BDF8"
                      strokeDasharray="4 4"
                      strokeWidth="1.5"
                    />
                    <text
                      x={35 + (16 / 23) * 665 + 8}
                      y="28"
                      fill="#38BDF8"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      FORECAST HORIZON ({forecastHorizon}D) →
                    </text>

                    {/* Main Telemetry Line */}
                    <polyline
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="3"
                      points={dataTelemetrySeries
                        .map((pt, i) => {
                          const x = 35 + (i / 23) * 665;
                          const y = 215 - (pt.value / 140) * 190;
                          return `${x},${y}`;
                        })
                        .join(" ")}
                    />

                    {/* Nodes & Anomaly Markers */}
                    {dataTelemetrySeries.map((pt, i) => {
                      const x = 35 + (i / 23) * 665;
                      const y = 215 - (pt.value / 140) * 190;
                      return (
                        <g key={i}>
                          <circle
                            cx={x}
                            cy={y}
                            r={pt.isAnomaly && showAnomalies ? 6 : 3.5}
                            fill={
                              pt.isAnomaly && showAnomalies
                                ? "#F59E0B"
                                : pt.isForecast
                                ? "#38BDF8"
                                : "#34D399"
                            }
                          />
                          {pt.isAnomaly && showAnomalies && (
                            <text
                              x={x - 28}
                              y={y - 12}
                              fill="#F59E0B"
                              fontSize="10"
                              fontFamily="monospace"
                            >
                              +3.4σ SPIKE
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 mt-2 border-t border-white/10 font-mono">
                  <div>
                    <div className="text-[10px] text-slate-500">
                      CAUSAL UPLIFT (CATE)
                    </div>
                    <div className="text-sm font-bold text-emerald-400">
                      +24.8% (p &lt; 0.0001)
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">
                      FORECAST WMAPE
                    </div>
                    <div className="text-sm font-bold text-sky-400">
                      3.12% Error Rate
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">
                      OLAP ENGINE
                    </div>
                    <div className="text-sm font-bold text-indigo-400">
                      ClickHouse + DuckDB
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500">
                      ANOMALIES FLAGGED
                    </div>
                    <div className="text-sm font-bold text-amber-400">
                      2 Verified Spikes
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

