"use client";

import React, { useState } from "react";
import {
  Activity,
  Cpu,
  Layers,
  Minimize2,
  Maximize2,
  Sparkles,
  Sliders,
  Zap,
} from "lucide-react";
import { ParticleFormation } from "@/data";
import { TelemetryData } from "@/components/canvas/SynapticParticleCanvas";

interface ParticleControllerHUDProps {
  formationMode: ParticleFormation;
  onSelectFormation: (mode: ParticleFormation) => void;
  isScrollSync?: boolean;
  onToggleScrollSync?: () => void;
  turbulence: number;
  onChangeTurbulence: (val: number) => void;
  onTriggerPulse: () => void;
  telemetry: TelemetryData;
}

const FORMATION_OPTIONS: {
  id: ParticleFormation;
  label: string;
  code: string;
  desc: string;
}[] = [
  {
    id: "auto",
    label: "Scroll Sync",
    code: "AUTO",
    desc: "Morphs automatically per section",
  },
  {
    id: "wave",
    label: "Harmonic Wave",
    code: "M-01",
    desc: "3D sinusoidal tensor field",
  },
  {
    id: "helix",
    label: "Pipeline Helix",
    code: "M-02",
    desc: "Dual-strand feature stream",
  },
  {
    id: "neural",
    label: "Neural Torus",
    code: "M-03",
    desc: "Multi-layer attention manifold",
  },
  {
    id: "clusters",
    label: "Latent UMAP",
    code: "M-04",
    desc: "High-dimensional data clusters",
  },
  {
    id: "sphere",
    label: "Singularity",
    code: "M-05",
    desc: "Fibonacci geodesic convergence",
  },
];

export default function ParticleControllerHUD({
  formationMode,
  onSelectFormation,
  isScrollSync = true,
  onToggleScrollSync,
  turbulence,
  onChangeTurbulence,
  onTriggerPulse,
  telemetry,
}: ParticleControllerHUDProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end max-w-[calc(100vw-24px)]">
      {isExpanded ? (
        <div className="w-[calc(100vw-24px)] max-w-[330px] sm:w-[350px] sm:max-w-none rounded-2xl border border-white/10 bg-[#0C0F17]/90 backdrop-blur-xl p-3.5 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.75)] transition-all duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 sm:pb-3 mb-2.5 sm:mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-slate-200 truncate">
                WEBGL PARTICLE ENGINE // v3.4
              </span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-white/5 hover:text-white transition-colors shrink-0"
              aria-label="Minimize 3D Engine HUD"
            >
              <Minimize2 className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Live Telemetry Readout */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 rounded-xl bg-black/40 border border-white/5 p-2 sm:p-2.5 font-mono text-[10px] sm:text-[11px]">
            <div>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-500">
                FRAME RATE
              </div>
              <div className="text-emerald-400 font-semibold tabular-nums flex items-center gap-1 mt-0.5">
                <Activity className="h-3 w-3 shrink-0" />
                {telemetry.fps} FPS
              </div>
            </div>
            <div>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-500">
                NODES
              </div>
              <div className="text-sky-400 font-semibold tabular-nums mt-0.5">
                {telemetry.particleCount.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-500">
                ACTIVE STATE
              </div>
              <div className="text-indigo-400 font-semibold uppercase mt-0.5 truncate">
                {telemetry.activeFormation}
              </div>
            </div>
          </div>

          {/* Formation Selector */}
          <div className="mb-3">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Layers className="h-3 w-3 text-sky-400" />
                3D Point-Cloud Topology
              </span>
              {/* Dedicated Scroll Sync Status & Manual Toggle Switch */}
              <button
                type="button"
                onClick={onToggleScrollSync}
                className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold transition-all cursor-pointer ${
                  isScrollSync
                    ? "bg-emerald-400/15 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/25 shadow-[0_0_10px_rgba(52,211,153,0.15)]"
                    : "bg-amber-400/15 border border-amber-400/40 text-amber-300 hover:bg-amber-400/25"
                }`}
                title={
                  isScrollSync
                    ? "Click to manually turn OFF scroll sync (lock formation)"
                    : "Click to turn ON scroll sync (auto morph per section)"
                }
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isScrollSync ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                  }`}
                />
                <span>{isScrollSync ? "SCROLL SYNC: ON" : "SCROLL SYNC: OFF"}</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {FORMATION_OPTIONS.map((opt) => {
                const isSelected =
                  opt.id === "auto"
                    ? isScrollSync
                    : telemetry.activeFormation === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      if (opt.id === "auto") {
                        if (onToggleScrollSync) {
                          onToggleScrollSync();
                        } else {
                          onSelectFormation("auto");
                        }
                      } else {
                        onSelectFormation(opt.id);
                      }
                    }}
                    className={`group flex flex-col items-start rounded-lg border px-2 sm:px-2.5 py-1.5 text-left transition-all cursor-pointer ${
                      isSelected
                        ? "border-sky-400/60 bg-sky-400/10 text-white shadow-[0_0_15px_rgba(56,189,248,0.18)]"
                        : "border-white/5 bg-white/[0.02] text-slate-400 hover:border-white/15 hover:bg-white/[0.05] hover:text-slate-200"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-mono text-[9px] sm:text-[10px] font-semibold tracking-wider text-sky-400">
                        {opt.code}
                      </span>
                      {isSelected && (
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      )}
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium mt-0.5 truncate w-full">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Harmonic Turbulence Slider */}
          <div className="mb-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono mb-1.5">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Sliders className="h-3 w-3 text-indigo-400" />
                FIELD TURBULENCE
              </span>
              <span className="text-sky-400 tabular-nums">
                {turbulence.toFixed(1)}x
              </span>
            </div>
            <input
              type="range"
              min={0.1}
              max={2.4}
              step={0.1}
              value={turbulence}
              onChange={(e) => onChangeTurbulence(parseFloat(e.target.value))}
              className="w-full accent-sky-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Cursor XYZ + Shockwave Button */}
          <div className="flex items-center justify-between gap-2">
            <div className="font-mono text-[9px] sm:text-[10px] text-slate-500 tabular-nums truncate">
              XYZ: [{telemetry.cursorX}, {telemetry.cursorY}]
            </div>
            <button
              onClick={onTriggerPulse}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-sky-500/20 to-indigo-500/20 border border-sky-400/40 px-2.5 sm:px-3 py-1.5 font-mono text-[10px] sm:text-[11px] font-medium text-sky-300 hover:border-sky-400 hover:bg-sky-400/25 hover:text-white transition-all active:scale-95 shrink-0"
            >
              <Zap className="h-3.5 w-3.5 text-sky-400" />
              Synaptic Pulse
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onTriggerPulse}
            title="Trigger 3D Synaptic Shockwave"
            className="flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-[#0C0F17]/85 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 font-mono text-[10px] sm:text-[11px] text-sky-300 shadow-lg hover:border-sky-400/60 hover:bg-sky-400/15 hover:text-white transition-all active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            <span className="hidden sm:inline">Pulse Wave</span>
          </button>

          <button
            onClick={() => setIsExpanded(true)}
            className="group flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/10 bg-[#0C0F17]/85 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-[10px] sm:text-[11px] text-slate-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:border-sky-400/40 hover:text-white transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <Cpu className="h-3.5 w-3.5 text-sky-400" />
            <span className="uppercase tracking-wider">
              3D: {telemetry.activeFormation}
            </span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="text-emerald-400 tabular-nums hidden md:inline">
              {telemetry.fps} FPS
            </span>
            <Maximize2 className="h-3 w-3 text-slate-400 group-hover:text-sky-400 transition-colors" />
          </button>
        </div>
      )}
    </div>
  );
}

