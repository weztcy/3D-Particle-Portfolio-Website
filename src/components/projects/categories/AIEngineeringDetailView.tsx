"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  Clock,
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
import CyberTechStackSection from "../CyberTechStackSection";
import CyberRepoCard from "../CyberRepoCard";
import CyberSpecCard from "../CyberSpecCard";

interface AIEngineeringDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function AIEngineeringDetailView({
  project,
  onTriggerPulse,
}: AIEngineeringDetailViewProps) {
  // Visual Showcase Slider State
  const [activeHiFiIndex, setActiveHiFiIndex] = useState(0);

  const heroImage =
    project.imageUrl ||
    (project.images && project.images.length > 0 ? project.images[0] : null);

  const visualImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : [];

  const visualShowcase = useMemo<
    NonNullable<ProjectCaseStudy["aiVisualShowcase"]>
  >(() => {
    if (project.aiVisualShowcase && project.aiVisualShowcase.length > 0) {
      return project.aiVisualShowcase;
    }
    return visualImages.map((img) => ({
      imageUrl: img,
    }));
  }, [project.aiVisualShowcase, visualImages]);

  const activeVisualItem: NonNullable<ProjectCaseStudy["aiVisualShowcase"]>[number] =
    visualShowcase[activeHiFiIndex] ||
    visualShowcase[0] || {
      imageUrl: project.imageUrl || "",
    };

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

  // Section 4: Tech Stack (Unified Flat)
  const allAIEngineeringTechStack = useMemo(() => {
    return [
      ...(project.aiTechStack?.aiModelsAndServices || []).map((t: any) => t.name),
      ...(project.aiTechStack?.frameworksAndLibraries || []).map((t: any) => t.name),
      ...(project.aiTechStack?.developmentAndInfrastructure || []).map((t: any) => t.name),
      ...(project.techStack || []),
    ];
  }, [project.aiTechStack, project.techStack]);

  const aiModelsAndServices = project.aiTechStack?.aiModelsAndServices || [];
  const frameworksAndLibraries = project.aiTechStack?.frameworksAndLibraries || [];
  const developmentAndInfrastructure = project.aiTechStack?.developmentAndInfrastructure || [];

  // Section 5: Single Representative Execution Telemetry
  const telemetryData: NonNullable<ProjectCaseStudy["aiExecutionTelemetry"]> =
    project.aiExecutionTelemetry || {
      scenarioTitle: `${project.title} — Runtime Execution Trace`,
      scenarioBadge: "INFERENCE_TRACE",
      scenarioDescription:
        project.summary ||
        "High-assurance automated inference pipeline with deterministic validation.",
      triggerInput: "Inquiry query prompt dispatched to neural runtime gateway.",
      processingPipeline:
        project.architectureSummary ||
        "Dynamic Reasoning Pipeline + Guardrail Verification",
      executionOutput:
        "Synthesized execution output generated with deterministic validation.",
      metrics: [
        { label: "Latency", value: "1.14s" },
        { label: "Compute", value: "412 tokens" },
        { label: "Confidence", value: "99.4%" },
      ],
      evaluationNote:
        "System validated end-to-end with deterministic guardrails.",
    };

  // Section 5: Evaluation, Performance & Benchmarks
  const aiEvaluationAndPerformance: NonNullable<
    ProjectCaseStudy["aiEvaluationAndPerformance"]
  > = project.aiEvaluationAndPerformance || {
    qualitativeEvaluation: project.evaluation || "",
    metrics: [],
  };

  // Section 5: Limitations & Future Improvements
  const limitationsAndImprovements: NonNullable<
    ProjectCaseStudy["limitationsAndImprovements"]
  > = project.limitationsAndImprovements || {
    limitations: [],
    improvementsRoadmap: [],
  };

  // Section 9: Project Resources
  const hasRepoUrl = Boolean(
    project.repoUrl && project.repoUrl.trim().length > 0
  );

  const aiTechSpecs = project.aiTechSpecs || {
    programmingLanguage: "Python",
    aiFramework: "LangGraph & LangChain",
    foundationModel: "Llama 3 & Claude Sonnet",
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* =========================================================================
          SECTION 1 — [ 01 // NEURAL CONSOLE & AI ARCHITECTURE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-purple-400/60" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-400">
              [ 01 // NEURAL CONSOLE & AI ARCHITECTURE ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-300">
              <Bot className="h-3 w-3 text-purple-400" />
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-300">
              <Network className="h-3 w-3 text-purple-400" />
              {projectInfo.aiDomain}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {/* Terminal Title Bar */}
            <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-purple-500/30 bg-purple-500/15 px-4 py-2 text-xs font-mono text-white">
              <span className="flex items-center gap-2 text-white">
                <Terminal className="h-3.5 w-3.5 text-white" />
                {project.title}
              </span>
              <span className="text-[10px] text-white/80">SYS.VIEWPORT</span>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-white/10 bg-black/50 p-5 sm:p-6 text-slate-300 shadow-inner">
              <div>
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#080B14] shadow-lg">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-purple-400/60" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-purple-400/60" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-purple-400/60" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-purple-400/60" />

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

                <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-sans mb-4">
                  {projectDescription.length > 500
                    ? `${projectDescription.slice(0, 500).trim()}...`
                    : projectDescription}
                </p>
              </div>

              {/* Capability Badges Strip (Max 3) */}
              <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
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
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-white/10 bg-black/50 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
                <Layout className="h-4 w-4 text-purple-400" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">System Classification</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Box className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectType || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Operating Environment</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Globe className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{String(telemetry.targetPlatform || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Domain Focus</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Layers className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{String(telemetry.primaryDomain || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Engineering Pipeline</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Workflow className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{String(telemetry.architecturePipeline || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Testing & Audit</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <ShieldCheck className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{String(telemetry.testingAndAudit || "Passed").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Project Status</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <span className="h-2 w-2 rounded-full bg-purple-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectStatus || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Project Year</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Clock className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{String(project.year || "2026").slice(0, 50)}</span>
                  </dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className="mt-5 group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#080B14] p-4 sm:p-5 shadow-lg transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.16)]"
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-purple-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-purple-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-purple-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-purple-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-purple-400">
                      <FolderGit2 className="h-3.5 w-3.5 text-purple-400" />
                      <span className="truncate">
                        {hasRepoUrl ? "GITHUB REPOSITORY" : "PRIVATE REPOSITORY"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">ACCESS CLEARANCE:</span>
                      <span className="text-purple-400 font-semibold text-[11px]">
                        {hasRepoUrl ? "UNRESTRICTED" : "RESTRICTED"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SOURCE GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">{hasRepoUrl ? "Main Branch" : "Personal Archive"}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">LICENSE:</span>
                      <span className="text-purple-400 font-semibold text-[11px]">
                        {hasRepoUrl ? (project.license || "MIT License") : "Proprietary Rights"}
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border border-purple-400/40 bg-purple-500/15 hover:bg-purple-500/25 hover:border-purple-400 px-4 py-2.5 font-mono text-xs font-bold text-purple-200 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.18)]"
                  >
                    <span>ACCESS REPOSITORY</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-purple-400/30 bg-[#080B14] px-4 py-2.5 font-mono text-xs font-semibold text-purple-400 cursor-not-allowed">
                    <Lock className="h-3.5 w-3.5 text-purple-400" />
                    <span>RESTRICTED ACCESS</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-purple-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — PROBLEM & STRATEGIC AI ARCHITECTURE
          Layout: Universal AI Solution Matrix (Top) + Capabilities Bento (Bottom)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-purple-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 02 // PROBLEM SPACE & STRATEGIC AI ARCHITECTURE ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            OPERATIONAL_BOTTLENECK // STRATEGIC_AI_SOLUTION
          </span>
        </div>

        {/* Split 2-Column: Problem Context vs Proposed AI Solution */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 mb-8 items-stretch">
          {/* Problem Context */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-purple-400/40">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400 tracking-wider">
                  <AlertTriangle className="h-4 w-4 text-purple-400" />
                  <span>PROBLEM_SPACE // OPERATIONAL_FRICTION</span>
                </div>
                <span className="rounded bg-black/60 border border-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-300 font-bold">
                  {project.aiProblemBadge || "PRE-AI BOTTLENECK"}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {problemContext.length > 1000
                  ? `${problemContext.slice(0, 1000).trim()}...`
                  : problemContext}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 font-mono text-[10px] text-slate-400">
              {project.aiProblemAuditNote || "AUDIT: Manual processes and static workflows introduce friction, latency, and operational fragility."}
            </div>
          </div>

          {/* Proposed AI Solution */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between transition-all hover:border-purple-400/40">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400 tracking-wider">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span>PROPOSED_AI_SOLUTION // ARCHITECTURAL_APPROACH</span>
                </div>
                <span className="rounded bg-purple-500/10 border border-purple-400/30 px-2 py-0.5 font-mono text-[10px] text-purple-400 font-bold">
                  {project.aiSolutionBadge || "AI SYSTEM APPROACH"}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {proposedAiSolution}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 font-mono text-[10px] text-slate-400">
              {project.aiSolutionSynthesisNote || "SYNTHESIS: Engineered intelligence pipeline combining optimized model inference, deterministic validation, and automated workflows."}
            </div>
          </div>
        </div>

        {/* Key Capabilities & Real-World Use Cases (Full-Width Bento Grid) */}
        <div className="relative z-10 rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-purple-400">
              <Zap className="h-4 w-4 text-purple-400" />
              <span>KEY_CAPABILITIES & REAL-WORLD USE CASES</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400 font-semibold">
              {keyCapabilitiesAndUseCases.length} VERIFIED CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {keyCapabilitiesAndUseCases.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#080B14] p-5 transition-all duration-300 hover:border-purple-400/50 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-purple-400 font-bold mb-2">
                  <span className="rounded bg-purple-500/10 border border-purple-400/30 px-2 py-0.5 text-purple-300">
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
                <div className="rounded-lg border border-white/10 bg-black/60 p-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-purple-400 font-bold block mb-0.5">
                    REAL-WORLD USE CASE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
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
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-purple-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 03 // SYSTEM TOPOLOGY & EXECUTION PIPELINE ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            SCHEMATICS // {aiSystemArchitecture.layers.length} TIERS // CORE MODULES
          </span>
        </div>

        {/* Dual Schematic Blueprint: System Architecture (Left) vs AI Workflow (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8 items-stretch">
          {/* Blueprint 1: System Architecture */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400">
                  <Network className="h-4 w-4 text-purple-400" />
                  <span>SYSTEM_ARCHITECTURE // COGNITIVE TOPOLOGY</span>
                </div>
                <span className="rounded bg-purple-500/10 border border-purple-400/30 px-2 py-0.5 font-mono text-[10px] text-purple-300">
                  {aiSystemArchitecture.layers.length} TIERS
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
                    className="rounded-xl border border-white/10 bg-[#080B14] p-3.5 transition-all hover:border-purple-400/50"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-white mb-1">
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
                          className="rounded border border-white/10 bg-black/50 px-2 py-0.5 font-mono text-[10px] text-slate-300"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
              TOPOLOGY: Isolated sandbox with zero direct client access to foundation model credentials.
            </div>
          </div>

          {/* Blueprint 2: AI Workflow Execution Pipeline */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400">
                  <Workflow className="h-4 w-4 text-purple-400" />
                  <span>AI_WORKFLOW // EXECUTION PIPELINE</span>
                </div>
                <span className="rounded bg-purple-500/10 border border-purple-400/30 px-2 py-0.5 font-mono text-[10px] text-purple-300">
                  {aiWorkflow.workflowType}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {aiWorkflow.summary}
              </p>

              {/* Vertical Circuit Flow Steps */}
              <div className="space-y-3 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-purple-500/35">
                {aiWorkflow.steps.map((st, i) => (
                  <div
                    key={i}
                    className="relative pl-8 rounded-xl border border-white/10 bg-[#080B14] p-3.5 transition-all hover:border-purple-400/50"
                  >
                    <span className="absolute left-2 top-4 h-2.5 w-2.5 rounded-full bg-purple-400 ring-4 ring-[#080B14]" />
                    <div className="flex items-center justify-between font-mono text-[10px] text-purple-400 font-bold mb-1">
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

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
              EXECUTION: Cyclic agent state graph supporting branching fallback paths.
            </div>
          </div>
        </div>

        {/* Core AI Components Deck (Full-Width Modular Grid) */}
        <div className="relative z-10 rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-purple-400">
              <Cpu className="h-4 w-4 text-purple-400" />
              <span>CORE_AI_COMPONENTS // RUNTIME HARDWARE & SOFTWARE</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400 font-semibold">
              {coreAiComponents.length} ESSENTIAL MODULES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreAiComponents.map((comp, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#080B14] p-4 transition-all duration-300 hover:border-purple-400/50 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-purple-400 font-bold mb-2">
                  <span className="uppercase tracking-wider text-slate-400">{comp.type}</span>
                  <span className="rounded bg-purple-500/10 border border-purple-400/30 px-2 py-0.5 text-purple-300">
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
          SECTION 4 — TECH STACK & RUNTIME ARCHITECTURE
          ========================================================================= */}
      <CyberTechStackSection
        sectionNumber="04"
        sectionTitle="[ 04 // AI STACK & RUNTIME ECOSYSTEM ]"
        techStack={allAIEngineeringTechStack}
        accentColor="purple"
        onTriggerPulse={onTriggerPulse}
      />

      {/* =========================================================================
          SECTION 5 — SYSTEM SHOWCASE & PERFORMANCE BENCHMARKS
          Layout: Dual-Mode Stage (Visual Interface vs Runtime Inspector) + Quantitative Evaluation & Roadmap
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-purple-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-purple-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>[ 05 // SYSTEM SHOWCASE & EVALUATION BENCHMARKS ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            RUNTIME_TELEMETRY // QUALITY_ASSURANCE
          </span>
        </div>

        {/* Section 5 Top Component: Unified Dual-Pane (Left: Visual Interface Carousel, Right: Single Representative Execution Telemetry) */}
        <div className="relative z-10 mb-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* SISI KIRI (Col 6/12): Visual Interface Carousel (Independent) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5 shadow-2xl">
            <div>
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-400/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-purple-300/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-slate-300 truncate max-w-[200px] sm:max-w-[280px]">
                    {activeVisualItem.title || "System Interface Viewport"}
                  </span>
                </div>

                {activeVisualItem.badge && (
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] tracking-wider uppercase text-purple-300 bg-purple-500/10 border border-purple-400/30 px-2 py-0.5 rounded">
                      {activeVisualItem.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Viewport Image Stage */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-[#080B14] flex items-center justify-center group">
                {activeVisualItem.imageUrl ? (
                  <Image
                    src={activeVisualItem.imageUrl}
                    alt={`${project.title} AI System Viewport`}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center text-slate-500">
                    <Bot className="h-10 w-10 text-purple-500/50 mb-2" />
                    <p className="font-mono text-xs">NO SYSTEM SCREEN LINKED</p>
                  </div>
                )}

                {/* Prev / Next Controls */}
                {visualShowcase.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveHiFiIndex(
                          (prev) => (prev - 1 + visualShowcase.length) % visualShowcase.length
                        )
                      }
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 rounded-full border border-purple-400/40 bg-black/80 p-2 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white backdrop-blur-md transition-all shadow-lg z-20"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveHiFiIndex(
                          (prev) => (prev + 1) % visualShowcase.length
                        )
                      }
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full border border-purple-400/40 bg-black/80 p-2 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white backdrop-blur-md transition-all shadow-lg z-20"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Interactive Thumbnail Filmstrip */}
              {visualShowcase.length > 1 && (
                <div className="mt-3.5 pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                      INSPECT VIEWPORTS:
                    </span>
                    <span className="font-mono text-[9px] text-purple-400">
                      CLICK TO PREVIEW
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {visualShowcase.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveHiFiIndex(idx);
                          onTriggerPulse?.();
                        }}
                        className={`group relative aspect-[16/10] overflow-hidden rounded-lg border transition-all ${
                          idx === activeHiFiIndex
                            ? "border-purple-400 ring-2 ring-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                            : "border-white/10 opacity-50 hover:opacity-100 hover:border-purple-400/50"
                        }`}
                        title={`Viewport 0${idx + 1}`}
                      >
                        {item.imageUrl ? (
                          <Image
                            src={item.imageUrl}
                            alt={`Thumbnail 0${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        ) : (
                          <div className="h-full w-full bg-slate-900 flex items-center justify-center font-mono text-[9px] text-slate-400">
                            0{idx + 1}
                          </div>
                        )}
                        <span className="absolute bottom-0.5 right-1 font-mono text-[8px] bg-black/80 px-1 rounded text-purple-300 border border-white/10">
                          0{idx + 1}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status & Dot Navigator */}
            <div className="mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between">
              <span className="font-mono text-[10px] text-slate-400">
                VIEWPORT {activeHiFiIndex + 1} OF {visualShowcase.length}
              </span>
              <div className="flex items-center gap-1.5">
                {visualShowcase.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveHiFiIndex(idx);
                      onTriggerPulse?.();
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeHiFiIndex
                        ? "w-5 bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* SISI KANAN (Col 6/12): Single Representative Execution & Telemetry Card (Independent) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-5 sm:p-6 shadow-2xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400">
                  <Terminal className="h-4 w-4 text-purple-400" />
                  <span>RUNTIME EXECUTION & TELEMETRY</span>
                </div>
                {telemetryData.scenarioBadge && (
                  <span className="rounded bg-purple-500/10 border border-purple-400/30 px-2 py-0.5 font-mono text-[10px] text-purple-300 font-semibold">
                    {telemetryData.scenarioBadge}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h4 className="font-display text-base sm:text-lg font-bold text-white mb-1.5">
                {telemetryData.scenarioTitle}
              </h4>
              {telemetryData.scenarioDescription && (
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {telemetryData.scenarioDescription}
                </p>
              )}

              {/* Structured Key-Value Flow (Input, Pipeline, Output) */}
              <div className="space-y-3 font-sans text-xs mb-4">
                {/* 1. Trigger Input */}
                <div className="rounded-xl border border-white/10 bg-[#080B14] p-3 space-y-1">
                  <div className="flex items-center justify-between font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider">
                    <span>{"> TRIGGER_INPUT // USER_EVENT"}</span>
                    <span className="text-slate-400">EVENT_IN</span>
                  </div>
                  <p className="text-slate-200 font-mono text-xs leading-relaxed">
                    {telemetryData.triggerInput}
                  </p>
                </div>

                {/* 2. Processing Pipeline / Model */}
                <div className="rounded-xl border border-white/10 bg-[#080B14] p-2.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-slate-200 font-mono text-[11px]">
                    <Workflow className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span className="text-slate-400 uppercase text-[10px]">
                      PIPELINE:
                    </span>
                    <span className="font-semibold text-white truncate">{telemetryData.processingPipeline}</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-400/30 shrink-0">
                    PROCESSING
                  </span>
                </div>

                {/* 3. Output Synthesis */}
                <div className="rounded-xl border border-white/10 bg-[#080B14] p-3 space-y-1">
                  <div className="flex items-center justify-between font-mono text-[10px] text-purple-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-purple-400">
                      <Sparkles className="h-3 w-3" />
                      SYSTEM_RESPONSE // SYNTHESIS
                    </span>
                    <span className="text-purple-400 text-[9px]">
                      VERIFIED
                    </span>
                  </div>
                  <p className="text-slate-200 font-mono text-xs leading-relaxed whitespace-pre-wrap">
                    {telemetryData.executionOutput}
                  </p>
                </div>
              </div>

              {/* Evaluation Note (if present) */}
              {telemetryData.evaluationNote && (
                <div className="rounded-lg border border-white/10 bg-black/60 p-2.5 font-mono text-[11px] text-slate-300 flex items-start gap-1.5 mb-4">
                  <span className="text-purple-400 font-bold shrink-0">EVAL:</span>
                  <span className="leading-relaxed">{telemetryData.evaluationNote}</span>
                </div>
              )}
            </div>

            {/* Metric Chips (Bottom of Right Card - Max 3 Badges) */}
            {telemetryData.metrics && telemetryData.metrics.length > 0 && (
              <div className="pt-3 border-t border-white/10">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-2 font-bold">
                  RUNTIME TELEMETRY CHIPS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {telemetryData.metrics.slice(0, 3).map((m: any, mIdx: number) => (
                    <div
                      key={mIdx}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#080B14] px-3 py-1.5 font-mono"
                    >
                      <span className="text-[10px] uppercase text-slate-400 font-medium">
                        {m.label}:
                      </span>
                      <span className="text-xs font-bold text-purple-400">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2-Column Split: Evaluation & Metrics (Left) vs Limitations & Roadmap (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Evaluation & Performance */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400 tracking-wider">
                  <TrendingUp className="h-4 w-4 text-purple-400" />
                  <span>EMPIRICAL_EVALUATION & SYSTEM_BENCHMARKS</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 font-semibold">
                  EVALUATION_SUITE
                </span>
              </div>

              {/* Metrics Grid */}
              {aiEvaluationAndPerformance.metrics &&
                aiEvaluationAndPerformance.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                    {aiEvaluationAndPerformance.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-white/10 bg-[#080B14] p-3 transition-all hover:border-purple-400/50"
                      >
                        <div className="font-mono text-lg sm:text-xl font-black text-purple-400 mb-1">
                          {m.value}
                        </div>
                        <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-1 leading-tight">
                          {m.label}
                        </div>
                        {m.benchmark && (
                          <span className="font-mono text-[8px] text-slate-400 block truncate">
                            {m.benchmark}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {aiEvaluationAndPerformance.qualitativeEvaluation}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
              {aiEvaluationAndPerformance.auditNote || "AUDIT: Benchmark evaluated across end-to-end production test suites and golden sets."}
            </div>
          </div>

          {/* Limitations & Improvements Roadmap */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400 tracking-wider">
                  <ShieldAlert className="h-4 w-4 text-purple-400" />
                  <span>OPERATIONAL_CONSTRAINTS & FUTURE ROADMAP</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400 font-semibold">
                  GUARDRAILS & TRANSPARENCY
                </span>
              </div>

              {/* Limitations List */}
              <div className="space-y-2.5 mb-5">
                {limitationsAndImprovements.limitations.map((lim, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#080B14] p-3"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                      <span className="font-bold text-slate-200">{lim.title}</span>
                      <span
                        className={`rounded px-1.5 py-0.5 font-bold ${
                          lim.severity === "HIGH"
                            ? "bg-purple-500/15 text-purple-200 border border-purple-400/35"
                            : "bg-purple-500/10 text-purple-300 border border-purple-400/25"
                        }`}
                      >
                        {lim.severity || "MEDIUM"} SEVERITY
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
                    className="rounded-lg border border-white/10 bg-[#080B14] p-2.5 font-mono text-[11px] hover:border-purple-400/40 transition-colors"
                  >
                    <div className="text-slate-200 font-medium">
                      {imp.title}
                    </div>
                    {imp.target && (
                      <p className="text-[11px] text-slate-300 font-sans mt-0.5 leading-relaxed font-normal">
                        {imp.target}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
              {limitationsAndImprovements.alignmentNote || "ALIGNMENT: Limitations documented openly in accordance with Responsible AI standards and continuous delivery."}
            </div>
          </div>
        </div>
      </section>

            {/* =========================================================================
          SECTION 6 — [ 06 // NEURAL ARTIFACTS & DEPLOYMENT GATES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-purple-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-purple-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6 sm:mb-8">
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
          <CyberRepoCard
            repoUrl={project.repoUrl}
            accentColor="purple"
            onTriggerPulse={onTriggerPulse}
            license={project.license}
            projectStatus={project.telemetry?.projectStatus || "Completed"}
          />

          {/* Card 2: Technical Documentation & Model Specs Card (Universal Spec Standard) */}
          <CyberSpecCard
            accentColor="purple"
            icon={FileText}
            categoryTag="MODEL SPECS & DOCUMENTATION"
            title="AI Orchestration Architecture"
            description="Universal AI engineering specification detailing core languages, orchestration frameworks, foundation models, and safety guardrails across agentic and AI-powered systems."
            specs={[
              { label: "PROGRAMMING LANGUAGE", value: aiTechSpecs.programmingLanguage },
              { label: "AI FRAMEWORK", value: aiTechSpecs.aiFramework, highlight: true },
              { label: "FOUNDATION MODEL", value: aiTechSpecs.foundationModel },
              { label: "SAFETY AUDIT", value: "Guardrails & Prompt Hardened" },
            ]}
            action={
              hasRepoUrl && project.repoUrl
                ? {
                    label: "INSPECT SYSTEM SPECS",
                    href: `${project.repoUrl}#readme`,
                  }
                : {
                    label: "RESTRICTED ACCESS",
                  }
            }
          />

          {/* Card 3: AI Safety & Governance Manifest */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-purple-500/20 bg-[#0A0D17]/85 p-5 sm:p-7 shadow-lg transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_8px_32px_rgba(168,85,247,0.16)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-purple-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-purple-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-purple-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-purple-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-400">
                  <ShieldCheck className="h-4 w-4 text-purple-400" />
                  <span>SAFETY & GOVERNANCE MANIFEST</span>
                </div>
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
                  <span className="text-purple-400 font-semibold">NeMo Guardrails</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">PROMPT DEFENSE:</span>
                  <span className="text-slate-200 font-semibold">Self-Correction LLM Judge</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">PII REDACTION:</span>
                  <span className="text-slate-200 font-semibold">Zero Data Retention</span>
                </div>
              </div>
            </div>

            <div className="w-full inline-flex items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 px-4 py-3 font-mono text-xs font-semibold text-purple-300">
              <span>SAFETY VERIFICATION COMPLETE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
