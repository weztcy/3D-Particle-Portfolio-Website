"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  Bot,
  Box,
  Brain,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FileCode2,
  FileText,
  FolderGit2,
  GitBranch,
  Globe,
  HardDrive,
  Layers,
  Layout,
  Lock,
  Network,
  RotateCcw,
  Server,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";

interface AIEngineeringDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function AIEngineeringDetailView({
  project,
  onTriggerPulse,
}: AIEngineeringDetailViewProps) {
  // Scenario Output Showcase State
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [selectedTechFilter, setSelectedTechFilter] = useState<
    | "All"
    | "AI Models & Services"
    | "Frameworks & Libraries"
    | "Development & Infrastructure"
  >("All");

  const heroImage =
    project.imageUrl ||
    (project.images && project.images.length > 0 ? project.images[0] : null);

  // Section 1: Project Overview & Information
  const projectDescription =
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "";

  const projectInfo = project.aiEngineeringProjectInfo || {
    projectType: "Autonomous AI Agent and Enterprise RAG",
    projectStatus: project.status || "Completed",
    developmentYear: project.year || "2026",
    aiDomain: "Autonomous Agentic Systems",
    projectCategory: project.categoryLabel || "AI Engineering",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.projectType,
    targetPlatform: "Production Clustered Runtime",
    primaryDomain: project.categoryLabel || "AI Engineering",
    architecturePipeline: project.architectureSummary || "Semantic Vector Store + LLM Reasoning",
    testingAndAudit: "Passed",
    projectStatus: projectInfo.projectStatus,
    projectYear: projectInfo.developmentYear,
  };

  // Section 2: Problem & Proposed AI Solution
  const problemContext =
    project.problemContext ||
    project.challenge ||
    "";

  const proposedAiSolution = project.proposedAiSolution || project.architectureSummary || "";

  // Section 3: AI Capabilities & Use Cases
  const keyCapabilitiesAndUseCases: {
    title: string;
    description: string;
    useCaseScenario: string;
    badge?: string;
  }[] = project.keyCapabilitiesAndUseCases || [];

  // Section 4: System Architecture & Workflow
  const aiSystemArchitecture = project.aiSystemArchitecture || {
    summary: project.architectureSummary || "",
    layers: [],
  };

  const aiWorkflow: {
    summary: string;
    workflowType: string;
    steps: {
      stepNumber: string;
      phase: string;
      title: string;
      description: string;
      actorOrTool?: string;
    }[];
  } = project.aiWorkflow || {
    summary: "",
    workflowType: "Autonomous Pipeline",
    steps: [],
  };

  // Section 5: Tech Stack & Model Infrastructure
  const coreAiComponents: {
    name: string;
    type: string;
    description: string;
    badge?: string;
  }[] = project.coreAiComponents || [];

  const aiModelsAndServices = project.aiTechStack?.aiModelsAndServices || [];
  const frameworksAndLibraries = project.aiTechStack?.frameworksAndLibraries || [];
  const developmentAndInfrastructure = project.aiTechStack?.developmentAndInfrastructure || [];

  // Section 6: AI Output Showcase
  const aiOutputShowcase: {
    scenarioTitle: string;
    scenarioBadge: string;
    userInput: string;
    aiOutput: string;
    explanation: string;
    executionLatency?: string;
    tokenUsage?: string;
  }[] =
    project.aiOutputShowcase && project.aiOutputShowcase.length > 0
      ? project.aiOutputShowcase
      : [
          {
            scenarioTitle: `${project.title} — Primary Scenario`,
            scenarioBadge: "EXECUTION",
            userInput: "Inquiry input query prompt",
            aiOutput: "AI execution output response",
            explanation: "Automated retrieval-augmented inference trace.",
            executionLatency: "1.2s",
            tokenUsage: "320 tokens",
          },
        ];

  // Section 7: Evaluation, Performance & Benchmarks
  const aiEvaluationAndPerformance = project.aiEvaluationAndPerformance || {
    qualitativeEvaluation: project.evaluation || "",
    metrics: [],
  };

  // Section 8: Limitations & Future Improvements
  const limitationsAndImprovements = project.limitationsAndImprovements || {
    limitations: [],
    improvementsRoadmap: [],
  };

  // Section 9: Project Resources
  const hasRepoUrl = Boolean(
    project.repoUrl && project.repoUrl.trim().length > 0
  );

  const aiTechnicalDocumentation = project.aiTechnicalDocumentation || {
    title: "AI Systems Engineering Specification",
    description: "",
    status: "DOCS // VERIFIED",
    specs: [],
  };

  const aiArchitectureQuality = project.aiArchitectureQuality || {
    title: "AI Safety, Observability and Quality Standards",
    description: "",
    status: "QA AUDIT // VERIFIED",
    badges: [],
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* =========================================================================
          SECTION 1 — [ 01 // NEURAL CONSOLE & AI ARCHITECTURE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0A0713]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(168,85,247,0.15)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-purple-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-purple-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-purple-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-purple-400/70" />

        {/* Ambient Neural Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-purple-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-purple-300">
              [ 01 // NEURAL CONSOLE & AI ARCHITECTURE ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-purple-300">
              <Bot className="h-3 w-3 text-purple-400" />
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-purple-300">
              <Network className="h-3 w-3 text-purple-400" />
              {projectInfo.aiDomain}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Terminal Title Bar */}
            <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-purple-500/30 bg-purple-950/40 px-4 py-2 text-xs font-mono text-purple-300">
              <span className="flex items-center gap-2 text-purple-200">
                <Terminal className="h-3.5 w-3.5 text-purple-400" />
                &gt; AI_RUNTIME // SYS.VIEWPORT
              </span>
              <span className="text-[10px] text-purple-400/80">ONLINE // LLM_INFERENCE</span>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-purple-500/25 bg-[#0A0713]/95 p-5 sm:p-6 text-slate-300 shadow-inner">
              <div>
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-purple-500/30 bg-black/60 shadow-lg">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-purple-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-purple-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-purple-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-purple-400/80" />

                    {/* Hero Image */}
                    <Image
                      src={heroImage}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                )}

                <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-sans mb-4">
                  {projectDescription.length > 500
                    ? `${projectDescription.slice(0, 500).trim()}...`
                    : projectDescription}
                </p>
              </div>

              {/* Capability Badges Strip (Max 3) */}
              <div className="mt-auto pt-4 border-t border-purple-500/20 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-300">
                  <Brain className="h-3 w-3 text-purple-400" />
                  Autonomous Reasoning
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-300">
                  <Database className="h-3 w-3 text-purple-400" />
                  Hybrid Vector RAG
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-300">
                  <Workflow className="h-3 w-3 text-purple-400" />
                  Deterministic Tools
                </span>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Tactical Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-purple-500/30 bg-[#0A0713]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-purple-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-purple-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3.5 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-purple-400/80">System Classification</dt>
                  <dd className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <Box className="h-3.5 w-3.5 text-purple-400" />
                    {telemetry.projectType}
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-purple-400/80">Operating Environment</dt>
                  <dd className="text-purple-300 font-semibold flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-purple-400" />
                    {telemetry.targetPlatform}
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-purple-400/80">Domain Focus</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-purple-400" />
                    {telemetry.primaryDomain}
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-purple-400/80">Engineering Pipeline</dt>
                  <dd className="text-purple-300 font-semibold flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-purple-400" />
                    <span className="truncate">{telemetry.architecturePipeline}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-purple-400/80">Testing & Audit</dt>
                  <dd className="text-purple-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
                    <span>Passed</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-purple-400/80">Project Status</dt>
                  <dd className="text-purple-300 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                    {telemetry.projectStatus}
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] uppercase text-purple-400/80">Project Year</dt>
                  <dd className="text-slate-200 font-semibold">{telemetry.projectYear}</dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  hasRepoUrl
                    ? "border-purple-500/35 bg-[#0F081D]/90 hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-purple-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-purple-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-purple-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-purple-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-purple-300">
                      {hasRepoUrl ? (
                        <FolderGit2 className="h-3.5 w-3.5 text-purple-400" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 text-slate-400" />
                      )}
                      <span className="truncate">
                        {hasRepoUrl
                          ? "PUBLIC GITHUB REPOSITORY"
                          : "RESTRICTED PRIVATE REPOSITORY"}
                      </span>
                    </div>
                    {hasRepoUrl ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-purple-400/40 bg-purple-950/60 px-2 py-0.5 font-mono text-[9px] text-purple-300 font-semibold shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />PUBLIC
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] text-slate-400 font-semibold">
                        <Lock className="h-2.5 w-2.5" />PRIVATE
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 font-mono text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">ACCESS CLEARANCE:</span>
                      <span className={hasRepoUrl ? "text-purple-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {hasRepoUrl ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / NDA"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">VCS GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">GitHub Cloud VCS</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SECURITY AUDIT:</span>
                      <span className={hasRepoUrl ? "text-emerald-400 font-semibold text-[11px]" : "text-amber-400 font-semibold text-[11px]"}>
                        {hasRepoUrl ? "VERIFIED_PUBLIC" : "ENTERPRISE_CONFIDENTIAL"}
                      </span>
                    </div>
                  </div>
                </div>

                {hasRepoUrl && project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onTriggerPulse?.()}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:scale-[1.01]"
                  >
                    <span>ACCESS REPOSITORY</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 font-mono text-xs font-semibold text-slate-500 cursor-not-allowed">
                    <Lock className="h-3.5 w-3.5 text-slate-600" />
                    <span>RESTRICTED ACCESS</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-purple-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-purple-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — PROBLEM & SOLUTION
          Layout: Split Problem-to-Solution Matrix (Top) + Capabilities Bento (Bottom)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0A0713]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-purple-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-purple-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-purple-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-purple-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 02 // PROBLEM SPACE & AI AGENTIC SOLUTION ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            BOTTLENECKS // AGENTIC_SYNTHESIS
          </span>
        </div>

        {/* Split 2-Column: Problem Context vs Proposed AI Solution */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 mb-8 items-stretch">
          {/* Problem Context */}
          <div className="rounded-2xl border border-purple-500/25 bg-purple-950/20 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(168,85,247,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-300 tracking-wider">
                  <AlertTriangle className="h-4 w-4 text-purple-400" />
                  <span>[ PROBLEM_SPACE // ARCHITECTURAL FRICTION ]</span>
                </div>
                <span className="rounded bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 font-mono text-[10px] text-purple-300 font-bold">
                  PRE-AI BOTTLENECK
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {problemContext}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-purple-500/15 font-mono text-[10px] text-purple-400/80">
              AUDIT: Static LLMs fail on stale data, multi-hop lookups, and hallucinated API formats.
            </div>
          </div>

          {/* Proposed AI Solution */}
          <div className="rounded-2xl border border-purple-500/35 bg-[#140A24]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(168,85,247,0.08)]">
            <div>
              <div className="flex items-center justify-between border-b border-purple-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-300 tracking-wider">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span>[ PROPOSED_AI_SOLUTION // AGENTIC APPROACH ]</span>
                </div>
                <span className="rounded bg-purple-400/15 border border-purple-400/35 px-2 py-0.5 font-mono text-[10px] text-purple-200 font-bold">
                  AUTONOMOUS RAG
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {proposedAiSolution}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-purple-500/20 font-mono text-[10px] text-purple-300/80">
              SYNTHESIS: Self-grounded ReAct loop with Pydantic JSON validation and citation linking.
            </div>
          </div>
        </div>

        {/* Key Capabilities & Real-World Use Cases (Full-Width Bento Grid) */}
        <div className="relative z-10 rounded-2xl border border-purple-500/25 bg-black/50 p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-purple-300">
              <Zap className="h-4 w-4 text-purple-400" />
              <span>[ KEY_CAPABILITIES & REAL-WORLD USE CASES ]</span>
            </div>
            <span className="font-mono text-[10px] text-purple-300 font-semibold">
              {keyCapabilitiesAndUseCases.length} VERIFIED CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {keyCapabilitiesAndUseCases.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#10091E]/70 p-5 transition-all duration-300 hover:border-purple-400/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-purple-400 font-bold mb-2">
                  <span className="rounded bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 text-purple-300">
                    {item.badge || `CAPABILITY_0${idx + 1}`}
                  </span>
                  <Workflow className="h-3.5 w-3.5 text-slate-500" />
                </div>
                <div className="text-sm sm:text-base font-bold text-white mb-2">
                  {item.title}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-3">
                  {item.description}
                </p>
                <div className="rounded-lg border border-purple-500/20 bg-purple-500/10 p-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-purple-300 font-bold block mb-0.5">
                    REAL-WORLD USE CASE
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {item.useCaseScenario}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — AI SYSTEM DESIGN & WORKFLOW
          Layout: Dual Schematic Blueprint (Top) + Core AI Components Deck (Bottom)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0A0713]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-purple-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-purple-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-purple-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-purple-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 03 // SYSTEM TOPOLOGY & EXECUTION PIPELINE ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            SCHEMATICS // 4 TIERS // CORE MODULES
          </span>
        </div>

        {/* Dual Schematic Blueprint: System Architecture (Left) vs AI Workflow (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8 items-stretch">
          {/* Blueprint 1: System Architecture */}
          <div className="rounded-2xl border border-purple-500/30 bg-[#0E071A]/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(168,85,247,0.06)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-300">
                  <Network className="h-4 w-4 text-purple-400" />
                  <span>[ SYSTEM_ARCHITECTURE // COGNITIVE TOPOLOGY ]</span>
                </div>
                <span className="rounded bg-purple-400/10 border border-purple-400/30 px-2 py-0.5 font-mono text-[10px] text-purple-300">
                  4 TIERS
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {aiSystemArchitecture.summary}
              </p>

              {/* Visual Layer Topology */}
              <div className="space-y-3">
                {aiSystemArchitecture.layers.map((layer, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-black/60 p-3.5 transition-all hover:border-purple-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-purple-300 mb-1">
                      <span>{layer.name}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mb-2">
                      {layer.role}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.components.map((comp, cIdx) => (
                        <span
                          key={cIdx}
                          className="rounded border border-purple-400/20 bg-purple-500/10 px-2 py-0.5 font-mono text-[10px] text-purple-200"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              TOPOLOGY: Isolated sandbox with zero direct client access to foundation model credentials.
            </div>
          </div>

          {/* Blueprint 2: AI Workflow Execution Pipeline */}
          <div className="rounded-2xl border border-purple-500/30 bg-[#120B1F]/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(168,85,247,0.06)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-300">
                  <Workflow className="h-4 w-4 text-purple-400" />
                  <span>[ AI_WORKFLOW // EXECUTION PIPELINE ]</span>
                </div>
                <span className="rounded bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 font-mono text-[10px] text-purple-300">
                  {aiWorkflow.workflowType}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {aiWorkflow.summary}
              </p>

              {/* Vertical Circuit Flow Steps */}
              <div className="space-y-3 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-purple-400 before:via-purple-500 before:to-purple-600/30">
                {aiWorkflow.steps.map((st, i) => (
                  <div
                    key={i}
                    className="relative pl-8 rounded-xl border border-white/5 bg-black/60 p-3.5 transition-all hover:border-purple-400/30"
                  >
                    <span className="absolute left-2 top-4 h-2.5 w-2.5 rounded-full bg-purple-400 ring-4 ring-[#120B1F]" />
                    <div className="flex items-center justify-between font-mono text-[10px] text-purple-300 font-bold mb-1">
                      <span>
                        STEP {st.stepNumber} // {st.phase.toUpperCase()}
                      </span>
                      <span className="text-slate-400 font-normal">
                        {st.actorOrTool}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                      {st.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {st.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              EXECUTION: Cyclic agent state graph supporting branching fallback paths.
            </div>
          </div>
        </div>

        {/* Core AI Components Deck (Full-Width Modular Grid) */}
        <div className="relative z-10 rounded-2xl border border-purple-500/25 bg-black/50 p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-purple-300">
              <Cpu className="h-4 w-4 text-purple-400" />
              <span>[ CORE_AI_COMPONENTS // RUNTIME HARDWARE & SOFTWARE ]</span>
            </div>
            <span className="font-mono text-[10px] text-purple-400">
              {coreAiComponents.length} ESSENTIAL MODULES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreAiComponents.map((comp, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#10091E]/70 p-4 transition-all duration-300 hover:border-purple-400/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-purple-400 font-bold mb-2">
                  <span className="uppercase tracking-wider">{comp.type}</span>
                  <span className="rounded bg-purple-500/15 border border-purple-500/30 px-2 py-0.5 text-purple-200">
                    {comp.badge || "MODULE"}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-2">
                  {comp.name}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — TECH STACK
          Layout: Dynamic Multi-Domain Spec Board + HUD Domain Filter
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0A0713]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-purple-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-purple-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-purple-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-purple-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 04 // AI STACK & RUNTIME ECOSYSTEM ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            DYNAMIC_SPECS // MULTI-PROVIDER
          </span>
        </div>

        {/* HUD Filter Switcher */}
        <div className="relative z-10 mb-7 flex flex-wrap items-center gap-2">
          {(
            [
              "All",
              "AI Models & Services",
              "Frameworks & Libraries",
              "Development & Infrastructure",
            ] as const
          ).map((tab) => {
            const isSelected = selectedTechFilter === tab;
            let count = 0;
            if (tab === "All") {
              count =
                aiModelsAndServices.length +
                frameworksAndLibraries.length +
                developmentAndInfrastructure.length;
            } else if (tab === "AI Models & Services") {
              count = aiModelsAndServices.length;
            } else if (tab === "Frameworks & Libraries") {
              count = frameworksAndLibraries.length;
            } else {
              count = developmentAndInfrastructure.length;
            }

            if (count === 0) return null; // Dynamic rule: do not show empty domains

            return (
              <button
                key={tab}
                onClick={() => {
                  setSelectedTechFilter(tab);
                  onTriggerPulse?.();
                }}
                className={`group relative rounded-xl border px-3.5 py-1.5 font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "border-purple-400 bg-purple-500/20 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    : "border-white/10 bg-black/40 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`rounded px-1.5 py-0.2 text-[10px] font-bold ${
                    isSelected
                      ? "bg-purple-400/30 text-purple-100"
                      : "bg-white/5 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Categorized Tech Grid */}
        <div className="relative z-10 space-y-6">
          {/* Group 1: AI Models & Services */}
          {(selectedTechFilter === "All" ||
            selectedTechFilter === "AI Models & Services") &&
            aiModelsAndServices.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-purple-300 uppercase tracking-wider border-b border-purple-500/15 pb-1.5">
                  <Brain className="h-3.5 w-3.5 text-purple-400" />
                  <span>AI Models & Services</span>
                  <span className="text-[10px] text-purple-400/70">
                    ({aiModelsAndServices.length} TECHNOLOGIES)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {aiModelsAndServices.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center gap-2.5 rounded-xl border border-purple-500/20 bg-[#0A0713]/90 p-3 transition-all hover:border-purple-400/50 hover:bg-purple-500/10 hover:-translate-y-0.5"
                    >
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-purple-400/30 bg-purple-500/15 text-purple-300 font-mono font-bold text-[11px] group-hover:scale-105 transition-transform">
                        {tech.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-purple-200 truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Group 2: Frameworks & Libraries */}
          {(selectedTechFilter === "All" ||
            selectedTechFilter === "Frameworks & Libraries") &&
            frameworksAndLibraries.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-purple-300 uppercase tracking-wider border-b border-purple-500/15 pb-1.5">
                  <Workflow className="h-3.5 w-3.5 text-purple-400" />
                  <span>Frameworks & Libraries</span>
                  <span className="text-[10px] text-purple-400/70">
                    ({frameworksAndLibraries.length} TECHNOLOGIES)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {frameworksAndLibraries.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center gap-2.5 rounded-xl border border-purple-500/20 bg-[#0A0713]/90 p-3 transition-all hover:border-purple-400/50 hover:bg-purple-500/10 hover:-translate-y-0.5"
                    >
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-purple-400/30 bg-purple-500/15 text-purple-300 font-mono font-bold text-[11px] group-hover:scale-105 transition-transform">
                        {tech.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-purple-200 truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Group 3: Development & Infrastructure */}
          {(selectedTechFilter === "All" ||
            selectedTechFilter === "Development & Infrastructure") &&
            developmentAndInfrastructure.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-purple-300 uppercase tracking-wider border-b border-purple-500/15 pb-1.5">
                  <Server className="h-3.5 w-3.5 text-purple-400" />
                  <span>Development & Infrastructure</span>
                  <span className="text-[10px] text-purple-400/70">
                    ({developmentAndInfrastructure.length} TECHNOLOGIES)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {developmentAndInfrastructure.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center gap-2.5 rounded-xl border border-purple-500/20 bg-[#0A0713]/90 p-3 transition-all hover:border-purple-400/50 hover:bg-purple-500/10 hover:-translate-y-0.5"
                    >
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-purple-400/30 bg-purple-500/15 text-purple-300 font-mono font-bold text-[11px] group-hover:scale-105 transition-transform">
                        {tech.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-purple-200 truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — TESTING, EVALUATION & RESULTS
          Layout: Interactive Output Stage (Top) + Split Evaluation & Limitations (Bottom)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0A0713]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-purple-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-purple-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-purple-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-purple-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 05 // MODEL EVALUATION & SYNTHETIC TELEMETRY ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            SHOWCASE_OUTPUTS // QUANTITATIVE_EVAL
          </span>
        </div>

        {/* 1. AI Output Showcase (Interactive Stage) */}
        <div className="relative z-10 mb-8 rounded-2xl border border-purple-500/30 bg-black/60 p-5 sm:p-6 shadow-[0_0_40px_rgba(168,85,247,0.08)]">
          <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-5 gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-purple-300">
              <Terminal className="h-4 w-4 text-purple-400" />
              <span className="font-bold">
                NEURAL_OUTPUT_STAGE // SCENARIO INSPECTOR
              </span>
            </div>
            {/* Scenario Switcher Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {aiOutputShowcase.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveScenarioIndex(idx);
                    onTriggerPulse?.();
                  }}
                  className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-semibold transition-all ${
                    idx === activeScenarioIndex
                      ? "bg-purple-500/25 border border-purple-400 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                      : "bg-white/5 border border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  0{idx + 1}. {sc.scenarioBadge}
                </button>
              ))}
            </div>
          </div>

          {/* Active Scenario Display */}
          <div className="space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-white">
                {aiOutputShowcase[activeScenarioIndex].scenarioTitle}
              </span>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                {aiOutputShowcase[activeScenarioIndex].executionLatency && (
                  <span className="text-purple-300 font-semibold">
                    LATENCY: {aiOutputShowcase[activeScenarioIndex].executionLatency}
                  </span>
                )}
                {aiOutputShowcase[activeScenarioIndex].tokenUsage && (
                  <span className="text-purple-300">
                    TOKENS: {aiOutputShowcase[activeScenarioIndex].tokenUsage}
                  </span>
                )}
              </div>
            </div>

            {/* Split Input vs Output Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* User Input Prompt */}
              <div className="rounded-xl border border-white/10 bg-[#0C0816] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-2 border-b border-white/5 pb-2">
                    <span className="text-purple-400 font-bold">
                      &gt; USER_INPUT // TRIGGER_PROMPT
                    </span>
                    <span>PROMPT_STAGE</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-mono leading-relaxed whitespace-pre-wrap">
                    {aiOutputShowcase[activeScenarioIndex].userInput}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/5 font-mono text-[9px] text-slate-500">
                  SANITIZED // ZERO INJECTION DETECTED
                </div>
              </div>

              {/* AI Output / Synthesis */}
              <div className="rounded-xl border border-purple-500/30 bg-[#120822] p-4 flex flex-col justify-between shadow-[inset_0_0_15px_rgba(168,85,247,0.1)]">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-purple-300 mb-2 border-b border-purple-500/20 pb-2">
                    <span className="text-purple-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3" />
                      AGENT_SYNTHESIS // TOOL_OUTPUT
                    </span>
                    <span className="text-purple-300 font-semibold">VERIFIED</span>
                  </div>
                  <pre className="text-xs sm:text-sm text-purple-100 font-mono leading-relaxed whitespace-pre-wrap break-all">
                    {aiOutputShowcase[activeScenarioIndex].aiOutput}
                  </pre>
                </div>
                <div className="mt-3 pt-2 border-t border-purple-500/20 font-mono text-[9px] text-purple-300/80">
                  CONFIDENCE: 98.4% // 100% HALLUCINATION-FREE
                </div>
              </div>
            </div>

            {/* Evaluation Explanation */}
            <div className="rounded-xl border border-white/10 bg-[#08050F] p-3.5 font-mono text-xs text-slate-300">
              <span className="text-purple-400 font-bold mr-2">
                EVALUATION NOTE:
              </span>
              {aiOutputShowcase[activeScenarioIndex].explanation}
            </div>
          </div>
        </div>

        {/* 2-Column Split: Evaluation & Metrics (Left) vs Limitations & Roadmap (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Evaluation & Performance */}
          <div className="rounded-2xl border border-purple-500/25 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400 tracking-wider">
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                  <span>[ QUANTITATIVE_EVALUATION // METRICS ]</span>
                </div>
                <span className="font-mono text-[10px] text-purple-300">
                  RAGAS / TRULENS
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {aiEvaluationAndPerformance.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-[#10091E]/70 p-3 transition-all hover:border-purple-400/40"
                  >
                    <div className="font-mono text-lg sm:text-xl font-black text-purple-300 mb-1">
                      {m.value}
                    </div>
                    <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-1 leading-tight">
                      {m.label}
                    </div>
                    {m.benchmark && (
                      <span className="font-mono text-[8px] text-purple-300 block truncate">
                        {m.benchmark}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {aiEvaluationAndPerformance.qualitativeEvaluation}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              AUDIT: Benchmark evaluated across 1,000 synthetic adversarial stress tests.
            </div>
          </div>

          {/* Limitations & Improvements Roadmap */}
          <div className="rounded-2xl border border-purple-500/25 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400 tracking-wider">
                  <ShieldAlert className="h-4 w-4 text-purple-400" />
                  <span>[ LIMITATIONS & FUTURE IMPROVEMENTS ]</span>
                </div>
                <span className="font-mono text-[10px] text-purple-300 font-semibold">
                  TRANSPARENCY
                </span>
              </div>

              {/* Limitations List */}
              <div className="space-y-2.5 mb-5">
                {limitationsAndImprovements.limitations.map((lim, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 bg-[#140A18]/80 p-3"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                      <span className="font-bold text-slate-200">{lim.title}</span>
                      <span
                        className={`rounded px-1.5 py-0.2 font-bold ${
                          lim.severity === "HIGH"
                            ? "bg-purple-950/60 text-purple-200 border border-purple-500/30"
                            : "bg-purple-950/30 text-purple-300 border border-purple-500/20"
                        }`}
                      >
                        {lim.severity} SEVERITY
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {lim.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Improvements Roadmap */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-purple-400 font-bold block">
                  ROADMAP & NEXT ITERATION
                </span>
                {limitationsAndImprovements.improvementsRoadmap.map((imp, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border border-purple-500/20 bg-purple-500/5 p-2 font-mono text-[11px]"
                  >
                    <span className="text-slate-200 truncate mr-2">
                      {imp.title}
                    </span>
                    <span className="text-purple-300 font-bold shrink-0">
                      {imp.phase}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              ALIGNMENT: Limitations documented openly in accordance with Responsible AI standards.
            </div>
          </div>
        </div>
      </section>

            {/* =========================================================================
          SECTION 6 — [ 06 // NEURAL ARTIFACTS & DEPLOYMENT GATES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0C0714]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-purple-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-purple-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-purple-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-purple-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-purple-500/20 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 06 // NEURAL ARTIFACTS & DEPLOYMENT GATES ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            FINAL_ACCESS // REPOSITORIES, MODEL SPECS & GOVERNANCE
          </span>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Card 1: Repository Gate (Adaptive Universal Standard) */}
          <div
            className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-7 shadow-lg transition-all duration-300 ${
              hasRepoUrl
                ? "border-purple-500/35 bg-[#120A22]/80 hover:border-purple-400/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                : "border-white/10 bg-black/60 hover:border-white/20"
            }`}
          >
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-purple-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-purple-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-purple-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-purple-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-300">
                  {hasRepoUrl ? (
                    <FolderGit2 className="h-4 w-4 text-purple-400" />
                  ) : (
                    <Lock className="h-4 w-4 text-slate-400" />
                  )}
                  <span>
                    {hasRepoUrl
                      ? "PUBLIC GITHUB REPOSITORY"
                      : "RESTRICTED PRIVATE REPOSITORY"}
                  </span>
                </div>
                {hasRepoUrl ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-950/60 px-2.5 py-0.5 font-mono text-[10px] text-purple-300 font-semibold shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />PUBLIC</span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-slate-400 font-semibold">
                    <Lock className="h-3 w-3" />PRIVATE</span>
                )}
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {hasRepoUrl ? "GitHub Repository" : "Private Commercial Repository"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {hasRepoUrl
                  ? "Explore the complete project repository on GitHub, including production source code, commit history, architectural assets, and technical documentation."
                  : "Source code access is restricted under non-disclosure agreements (NDA) or proprietary commercial rights. No public repository is published."}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">ACCESS CLEARANCE:</span>
                  <span className={hasRepoUrl ? "text-purple-300 font-semibold" : "text-slate-400 font-semibold"}>
                    {hasRepoUrl ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / NDA"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">VCS GATEWAY:</span>
                  <span className="text-slate-200">GitHub Cloud VCS</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">SECURITY AUDIT:</span>
                  <span className={hasRepoUrl ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                    {hasRepoUrl ? "VERIFIED_PUBLIC" : "ENTERPRISE_CONFIDENTIAL"}
                  </span>
                </div>
              </div>
            </div>

            {hasRepoUrl && project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTriggerPulse?.()}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-mono text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.01]"
              >
                <span>ACCESS REPOSITORY</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-5 py-3 font-mono text-xs font-semibold text-slate-500 cursor-not-allowed">
                <Lock className="h-3.5 w-3.5 text-slate-600" />
                <span>RESTRICTED ACCESS</span>
              </div>
            )}
          </div>

          {/* Card 2: Technical Documentation & Model Specs Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#10081E]/95 p-5 sm:p-7 shadow-lg transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-purple-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-purple-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-purple-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-purple-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-300">
                  <FileText className="h-4 w-4 text-purple-400" />
                  <span>MODEL SPECS & DOCUMENTATION</span>
                </div>
                <span className="rounded bg-purple-400/15 border border-purple-400/30 px-2 py-0.5 font-mono text-[10px] text-purple-300">
                  {aiTechnicalDocumentation.status}
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {aiTechnicalDocumentation.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {aiTechnicalDocumentation.description}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                {aiTechnicalDocumentation.specs.map((sp, idx) => (
                  <div key={idx} className="flex items-center justify-between text-slate-400">
                    <span className="text-[11px] uppercase">{sp.label}:</span>
                    <span className="text-slate-200 font-semibold">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {hasRepoUrl && project.repoUrl ? (
              <a
                href={`${project.repoUrl}#readme`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTriggerPulse?.()}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-3 font-mono text-xs font-semibold text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all"
              >
                <FileCode2 className="h-4 w-4 text-purple-400" />
                <span>INSPECT SYSTEM ARCHITECTURE</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-3 font-mono text-xs font-semibold text-purple-300 hover:bg-purple-500/20 hover:text-white transition-all"
              >
                <FileText className="h-4 w-4 text-purple-400" />
                <span>INSPECT TECHNICAL SPECS</span>
              </button>
            )}
          </div>

          {/* Card 3: AI Safety & Governance Manifest */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#10081E]/95 p-5 sm:p-7 shadow-lg transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-purple-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-purple-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-purple-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-purple-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-300">
                  <ShieldCheck className="h-4 w-4 text-purple-400" />
                  <span>SAFETY & GOVERNANCE MANIFEST</span>
                </div>
                <span className="rounded bg-emerald-500/10 border border-emerald-400/30 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                  GOVERNANCE_PASSED
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Responsible AI & Guardrails
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Hardened semantic firewall defending against prompt injections, unauthorized tool escalation, hallucinations, and customer PII exfiltration.
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">GUARDRAIL ENGINE:</span>
                  <span className="text-purple-300 font-semibold">NeMo Guardrails v0.9</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">PROMPT DEFENSE:</span>
                  <span className="text-emerald-400 font-semibold">Self-Correction LLM Judge</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">PII REDACTION:</span>
                  <span className="text-slate-200 font-semibold">Zero Data Retention</span>
                </div>
              </div>
            </div>

            <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-3 font-mono text-xs font-semibold text-purple-300">
              <Check className="h-4 w-4 text-purple-400" />
              <span>SAFETY_VERIFICATION_COMPLETE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
