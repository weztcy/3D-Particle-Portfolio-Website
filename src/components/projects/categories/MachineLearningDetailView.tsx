"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  BarChart2,
  Binary,
  Box,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileCode2,
  FileSpreadsheet,
  FileText,
  FolderGit2,
  GitBranch,
  Globe,
  Layers,
  Layout,
  LineChart,
  Lock,
  Network,
  PieChart,
  Scale,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Table,
  Target,
  Terminal,
  TrendingDown,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";
import CyberTechStackSection from "../CyberTechStackSection";
import CyberRepoCard from "../CyberRepoCard";
import CyberSpecCard from "../CyberSpecCard";

interface MachineLearningDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function MachineLearningDetailView({
  project,
  onTriggerPulse,
}: MachineLearningDetailViewProps) {
  // Visualization Stage State
  const [activeVisIndex, setActiveVisIndex] = useState(0);

  const heroImage =
    project.imageUrl ||
    (project.images && project.images.length > 0 ? project.images[0] : null);

  // Section 1: Overview & Information
  const projectDescription =
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "";

  const projectInfo = project.mlProjectInfo || {
    projectType: "Machine Learning & Computational Modeling",
    learningParadigm: "Statistical & Algorithmic Learning",
    modelDomain: project.categoryLabel || "Machine Learning",
    projectStatus: project.status || "Completed",
    developmentYear: project.year || "2024",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.projectType,
    targetPlatform: "Python / Compute Runtime",
    primaryDomain: projectInfo.modelDomain,
    architecturePipeline: project.architectureSummary || "Data Pipeline + Model Training",
    testingAndAudit: "Passed",
    projectStatus: projectInfo.projectStatus,
    projectYear: projectInfo.developmentYear,
  };

  const capabilityBadges: string[] = useMemo(() => {
    const explicit = project.mlProjectInfo?.capabilityBadges;
    if (explicit && explicit.length > 0) return explicit.slice(0, 3);
    return [
      projectInfo.learningParadigm,
      projectInfo.modelDomain,
      telemetry.architecturePipeline,
    ]
      .filter((v): v is string => Boolean(v && v.trim()))
      .slice(0, 3);
  }, [
    project.mlProjectInfo?.capabilityBadges,
    projectInfo.learningParadigm,
    projectInfo.modelDomain,
    telemetry.architecturePipeline,
  ]);

  // Section 2: Problem Space & Dataset / Environment Profile
  const problemContext =
    project.mlProblemContext ||
    project.challenge ||
    "";

  const rawDataset = project.mlDatasetOverview;
  const datasetProfile = {
    profileBadge:
      rawDataset?.profileBadge ||
      projectInfo.learningParadigm ||
      "DATASET / ENV PROFILE",
    source: rawDataset?.source || rawDataset?.dataSource || "",
    modality: rawDataset?.modality || rawDataset?.dataPeriod || "",
    scale: rawDataset?.scale || rawDataset?.recordsCount || "",
    inputShape: rawDataset?.inputShape || rawDataset?.featuresCount || "",
    dataFormat: rawDataset?.dataFormat || rawDataset?.dataTypes || "",
    description: rawDataset?.description || "",
    provenanceNote: rawDataset?.provenanceNote || "",
  };

  const rawSpace = project.mlFeaturesAndDataCharacteristics;
  const rawObjective = rawSpace?.objectiveOutput || rawSpace?.targetVariable;
  const spaceSpec = {
    spaceBadge: rawSpace?.spaceBadge || "INPUT & OBJECTIVE",
    objectiveOutput: rawObjective
      ? {
          label: rawObjective.label || "TARGET / OBJECTIVE OUTPUT",
          name: rawObjective.name || "",
          type: rawObjective.type || "",
          distribution:
            (rawObjective as any).distribution ||
            (rawObjective as any).classDistribution ||
            "",
        }
      : null,
    inputSignals: rawSpace?.inputSignals || rawSpace?.inputFeatures || [],
    dataCharacteristicsSummary: rawSpace?.dataCharacteristicsSummary || "",
    spaceNote: rawSpace?.spaceNote || "",
  };

  // Section 3: Algorithmic Methodology & Training Architecture
  const learningApproach = project.mlLearningApproach || {
    paradigm: "",
    methodologyDescription: "",
    justification: "",
  };

  const dataPreparation = project.mlDataPreparation || [];
  const dataPreparationNote = project.mlDataPreparationNote || "";

  const rawArch = project.mlModelArchitectureAndTraining;
  const modelArchitectureAndTraining = {
    algorithmName: rawArch?.algorithmName || "",
    architectureSummary: rawArch?.architectureSummary || project.architectureSummary || "",
    configurationBadge:
      rawArch?.configurationBadge ||
      learningApproach.paradigm ||
      "MODEL_CONFIG",
    hyperparameters: rawArch?.hyperparameters || [],
    objectiveCriterion:
      rawArch?.objectiveCriterion || rawArch?.lossFunction || "",
    optimizationSolver:
      rawArch?.optimizationSolver || rawArch?.optimizer || "",
    trainingProcess: rawArch?.trainingProcess || "",
  };

  // Section 4: Tech Stack (Unified Flat)
  const allMLTechStack = useMemo(() => {
    return [
      ...(project.mlTechStack?.programmingLanguages || []).map((t: any) => t.name),
      ...(project.mlTechStack?.frameworksAndLibraries || []).map((t: any) => t.name),
      ...(project.mlTechStack?.experimentationTools || []).map((t: any) => t.name),
      ...(project.techStack || []),
    ];
  }, [project.mlTechStack, project.techStack]);

  // Section 5: Model Evaluation, Visual Diagnostics & Interpretation
  const evaluationStrategy = project.mlEvaluationStrategy || {
    validationMethod: "",
    description: "",
    metrics: [],
  };

  const rawProjectImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : [];

  const performanceVisualizations: NonNullable<
    ProjectCaseStudy["mlPerformanceVisualizations"]
  > =
    project.mlPerformanceVisualizations && project.mlPerformanceVisualizations.length > 0
      ? project.mlPerformanceVisualizations
      : rawProjectImages.map((img, idx) => ({
          title: `${project.title} — Diagnostic Artifact 0${idx + 1}`,
          badge: `ARTIFACT // 0${idx + 1}`,
          imageUrl: img,
        }));

  const activeVis =
    performanceVisualizations[activeVisIndex] || performanceVisualizations[0];
  const visTelemetryNote =
    activeVis?.telemetryNote || project.mlVisualizationTelemetryNote || "";

  const rawInterp = project.mlModelInterpretationAndLimitations;
  const modelInterpretationAndLimitations = {
    interpretationSummary: rawInterp?.interpretationSummary || "",
    keyDrivers: rawInterp?.keyDrivers || [],
    limitations: rawInterp?.limitations || [],
    futureImprovements: rawInterp?.futureImprovements || [],
    discoveryNote: rawInterp?.discoveryNote || "",
  };

  // Section 6: Project Resources
  const hasRepoUrl = Boolean(
    project.repoUrl && project.repoUrl.trim().length > 0
  );

  const modelArtifacts = project.mlModelArtifacts || [];

  const mlSpecs = project.mlMethodologySpecs || {
    learningParadigm: "Supervised Classification",
    modelArchitecture: "K-Nearest Neighbors (Euclidean)",
    coreFramework: "Scikit-Learn & SciPy",
    validationMethod: "Cross-Validation & Paired t-Test",
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* =========================================================================
          SECTION 1 — [ 01 // MODEL CONSOLE & THEORETICAL SCOPE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-indigo-400/60" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-400">
              <span className="hidden lg:inline">[ 01 // MODEL CONSOLE & THEORETICAL SCOPE ]</span>
              <span className="lg:hidden">[ 01 // MODEL CONSOLE ]</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-300">
              <Target className="h-3 w-3 text-indigo-400" />
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-300">
              <Workflow className="h-3 w-3 text-indigo-400" />
              {projectInfo.learningParadigm}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {/* Terminal Title Bar */}
            <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-indigo-500/30 bg-indigo-500/15 px-4 py-2 text-xs font-mono text-white">
              <span className="flex items-center gap-2 text-white">
                <Terminal className="hidden md:inline-block h-3.5 w-3.5 text-white" />
                {project.title}
              </span>
              <span className="hidden md:inline-block text-[10px] text-white/80">SYS.VIEWPORT</span>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-white/10 bg-black/50 p-5 sm:p-6 text-slate-300 shadow-inner">
              <div>
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#080B14] shadow-lg">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-indigo-400/60" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-indigo-400/60" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-indigo-400/60" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-indigo-400/60" />

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

              {/* Capability Badges Strip (Max 3 - Dynamic) */}
              {capabilityBadges.length > 0 && (
                <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {capabilityBadges.map((badgeLabel, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 font-mono text-[11px] text-indigo-300"
                    >
                      <CheckCircle2 className="h-3 w-3 text-indigo-400" />
                      {badgeLabel}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Pane (35%): Model Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-white/10 bg-black/50 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
                <Layout className="h-4 w-4 text-indigo-400" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-400">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">System Classification</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Box className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectType || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Operating Environment</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Globe className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">{String(telemetry.targetPlatform || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Domain Focus</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Layers className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">{String(telemetry.primaryDomain || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Engineering Pipeline</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Workflow className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">{String(telemetry.architecturePipeline || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Testing & Audit</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <ShieldCheck className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">{String(telemetry.testingAndAudit || "Passed").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Project Status</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse shrink-0" />
                    <span className="truncate">{String(telemetry.projectStatus || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Project Year</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Clock className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                    <span>{String(telemetry.projectYear || "").slice(0, 50)}</span>
                  </dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className="mt-5 group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#080B14] p-4 sm:p-5 shadow-lg transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.16)]"
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-indigo-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-indigo-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-indigo-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-indigo-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-indigo-400">
                      <FolderGit2 className="h-3.5 w-3.5 text-indigo-400" />
                      <span className="truncate">
                        {hasRepoUrl ? "GITHUB REPOSITORY" : "PRIVATE REPOSITORY"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">ACCESS CLEARANCE:</span>
                      <span className="text-indigo-400 font-semibold text-[11px]">
                        {hasRepoUrl ? "UNRESTRICTED" : "RESTRICTED"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SOURCE GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">{hasRepoUrl ? "Main Branch" : "Personal Archive"}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">LICENSE:</span>
                      <span className="text-indigo-400 font-semibold text-[11px]">
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/40 bg-indigo-500/15 hover:bg-indigo-500/25 hover:border-indigo-400 px-4 py-2.5 font-mono text-xs font-bold text-indigo-200 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.18)]"
                  >
                    <span>ACCESS REPOSITORY</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-400/30 bg-[#080B14] px-4 py-2.5 font-mono text-xs font-semibold text-indigo-400 cursor-not-allowed">
                    <Lock className="h-3.5 w-3.5 text-indigo-400" />
                    <span>RESTRICTED ACCESS</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-indigo-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — PROBLEM & DATASET / ENVIRONMENT PROFILE
          Layout: Top Problem Context + Split Dataset/Env Specs & Input/Objective Space
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-indigo-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="hidden lg:inline">[ 02 // RESEARCH CONTEXT &amp; DATASET MATRIX ]</span>
            <span className="lg:hidden">[ 02 // RESEARCH CONTEXT ]</span>
          </div>
          <span className="hidden md:inline-block font-mono text-[11px] text-slate-400">
            PROBLEM_FORMULATION // DATA_TOPOLOGY
          </span>
        </div>

        {/* Top: Problem Context (Full-Width Card) */}
        <div className="relative z-10 rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 mb-7">
          <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 font-semibold mb-3">
            <AlertTriangle className="h-3.5 w-3.5 text-indigo-400" />
            <span className="hidden lg:inline">PROBLEM SCOPE // DOMAIN &amp; TECHNICAL JUSTIFICATION</span>
            <span className="lg:hidden">PROBLEM SCOPE</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {problemContext.length > 1000
              ? `${problemContext.slice(0, 1000).trim()}...`
              : problemContext}
          </p>
        </div>

        {/* 2-Column Split: Dataset / Environment Profile (Left) vs Input & Objective Space (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch">
          {/* Dataset / Environment Profile (6 Fixed Generic Slots) */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <Database className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span className="hidden lg:inline">DATASET / ENV PROFILE // 6-SLOT MATRIX</span>
                  <span className="lg:hidden">DATASET ENV PROFILE</span>
                </div>
                <span className="hidden md:inline-block rounded bg-indigo-500/10 border border-indigo-400/30 px-2 py-0.5 font-mono text-[10px] text-indigo-400 font-bold truncate max-w-[160px]">
                  {datasetProfile.profileBadge}
                </span>
              </div>

              <div className="space-y-3 mb-5">
                <div className="rounded-xl border border-white/10 bg-[#080B14] p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    1. SOURCE / ENVIRONMENT
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    {datasetProfile.source}
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#080B14] p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    2. MODALITY / DOMAIN TYPE
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    {datasetProfile.modality}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-[#080B14] p-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                      3. SCALE / VOLUME
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-indigo-400">
                      {datasetProfile.scale}
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#080B14] p-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                      4. INPUT SHAPE / DIMENSIONS
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-indigo-400">
                      {datasetProfile.inputShape}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#080B14] p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    5. DATA TYPE &amp; FORMAT
                  </span>
                  <span className="font-mono text-xs text-slate-200">
                    {datasetProfile.dataFormat}
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#080B14] p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    6. DATASET / ENV DESCRIPTION
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {datasetProfile.description}
                  </p>
                </div>
              </div>
            </div>

            {datasetProfile.provenanceNote && (
              <div className="pt-3 border-t border-white/10 font-mono text-[10px] text-slate-400">
                PROVENANCE: {datasetProfile.provenanceNote}
              </div>
            )}
          </div>

          {/* Input & Objective Space (Universal across Supervised / Unsupervised / RL / CV / DL) */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <Binary className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>INPUT &amp; OBJECTIVE SPACE</span>
                </div>
                <span className="hidden md:inline-block rounded bg-indigo-500/10 border border-indigo-400/30 px-2 py-0.5 font-mono text-[10px] text-indigo-400 font-bold">
                  {spaceSpec.spaceBadge}
                </span>
              </div>

              {/* Target / Objective Output Box (Optional for Unsupervised or supports Action/Reward/Cluster/Label) */}
              {spaceSpec.objectiveOutput && spaceSpec.objectiveOutput.name && (
                <div className="rounded-xl border border-white/10 bg-[#080B14] p-4 mb-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 mb-1 font-bold">
                    {spaceSpec.objectiveOutput.label}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {spaceSpec.objectiveOutput.name}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-slate-300">
                    {spaceSpec.objectiveOutput.type && (
                      <span>Spec: {spaceSpec.objectiveOutput.type}</span>
                    )}
                    {spaceSpec.objectiveOutput.distribution && (
                      <span className="rounded bg-indigo-500/10 border border-indigo-400/30 px-2 py-0.5 text-indigo-300 text-[10px] font-semibold">
                        {spaceSpec.objectiveOutput.distribution}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Input Signals & Dimensions List */}
              {spaceSpec.inputSignals.length > 0 && (
                <div className="space-y-2.5 mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-bold">
                    INPUT SIGNALS &amp; DIMENSIONS
                  </span>
                  {spaceSpec.inputSignals.map((sig, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-[#080B14] p-3 transition-colors hover:border-indigo-400/40"
                    >
                      <div className="flex items-center justify-between gap-2 font-mono text-xs mb-1">
                        <span className="font-bold text-white">{sig.name}</span>
                        {sig.importanceOrRole && (
                          <span className="text-[10px] text-indigo-400 font-semibold text-right">
                            {sig.importanceOrRole}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                        {sig.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Characteristics Summary */}
              {spaceSpec.dataCharacteristicsSummary && (
                <div className="rounded-xl border border-white/10 bg-[#080B14] p-3 text-xs text-slate-300 leading-relaxed">
                  <span className="font-mono text-[10px] text-indigo-400 font-bold block mb-1">
                    DATA &amp; SPACE CHARACTERISTICS:
                  </span>
                  {spaceSpec.dataCharacteristicsSummary}
                </div>
              )}
            </div>

            {spaceSpec.spaceNote && (
              <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[10px] text-slate-400">
                SPACE: {spaceSpec.spaceNote}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — ALGORITHMIC METHODOLOGY & TRAINING ARCHITECTURE
          Layout: Top Learning Paradigm Banner + Split Data Pipeline & Model Configuration
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-indigo-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="hidden lg:inline">[ 03 // ALGORITHMIC METHODOLOGY &amp; TRAINING ARCHITECTURE ]</span>
            <span className="lg:hidden">[ 03 // ALGORITHMIC METHODOLOGY ]</span>
          </div>
          <span className="hidden md:inline-block font-mono text-[11px] text-slate-400">
            DATA_PIPELINE // MODEL_CONFIGURATION
          </span>
        </div>

        {/* Top: Learning Approach & Methodology Banner */}
        <div className="relative z-10 mb-7 rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 gap-2">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400">
              <Workflow className="h-4 w-4 text-indigo-400 shrink-0" />
              <span className="hidden lg:inline">LEARNING PARADIGM // THEORETICAL FOUNDATION</span>
              <span className="lg:hidden">LEARNING PARADIGM</span>
            </div>
            <span className="hidden md:inline-block rounded bg-indigo-500/10 border border-indigo-400/30 px-2 py-0.5 font-mono text-[10px] text-indigo-400 font-bold">
              {learningApproach.paradigm}
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-3">
            {learningApproach.methodologyDescription}
          </p>
          <div className="rounded-xl border border-white/10 bg-[#080B14] p-3.5 font-mono text-xs text-slate-200">
            <span className="font-bold text-indigo-400 mr-2">JUSTIFICATION:</span>
            {learningApproach.justification}
          </div>
        </div>

        {/* 2-Column Split: Preprocessing & Data Pipeline (Left) vs Model Architecture & Configuration (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Preprocessing & Data Pipeline */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <Sliders className="h-4 w-4 text-indigo-400" />
                  <span className="hidden lg:inline">PREPROCESSING &amp; DATA PIPELINE</span>
                  <span className="lg:hidden">PREPROCESSING DATA</span>
                </div>
                <span className="hidden md:inline-block font-mono text-[10px] text-slate-400">
                  {dataPreparation.length} STAGES
                </span>
              </div>

              <div className="space-y-3.5">
                {dataPreparation.map((stage, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-[#080B14] p-4 transition-all hover:border-indigo-400/50"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-indigo-400 font-bold mb-1.5">
                      <span>{stage.step}</span>
                      {stage.badge && (
                        <span className="rounded bg-indigo-500/10 border border-indigo-400/30 px-2 py-0.5 text-indigo-300">
                          {stage.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1">
                      {stage.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {dataPreparationNote && (
              <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
                PIPELINE AUDIT: {dataPreparationNote}
              </div>
            )}
          </div>

          {/* Model Architecture & Configuration */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5 gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <Settings2 className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span className="hidden lg:inline">MODEL ARCHITECTURE &amp; CONFIGURATION</span>
                  <span className="lg:hidden">MODEL ARCHITECTURE</span>
                </div>
                <span className="hidden md:inline-block font-mono text-[10px] text-indigo-300 bg-indigo-500/10 border border-indigo-400/30 px-2 py-0.5 rounded truncate max-w-[150px]">
                  {modelArchitectureAndTraining.configurationBadge}
                </span>
              </div>

              <div className="mb-4">
                <div className="font-mono text-sm sm:text-base font-bold text-white mb-1">
                  {modelArchitectureAndTraining.algorithmName}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {modelArchitectureAndTraining.architectureSummary}
                </p>
              </div>

              {/* Hyperparameter Table */}
              <div className="space-y-2 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 block font-bold">
                  HYPERPARAMETER CONFIGURATION
                </span>
                {modelArchitectureAndTraining.hyperparameters.map((hp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-[#080B14] px-3 py-2 font-mono text-xs"
                  >
                    <span className="text-slate-300">{hp.name}</span>
                    <span className="font-bold text-indigo-300">{hp.value}</span>
                  </div>
                ))}
              </div>

              {/* Objective / Loss & Optimizer / Solver */}
              {(modelArchitectureAndTraining.objectiveCriterion ||
                modelArchitectureAndTraining.optimizationSolver) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  {modelArchitectureAndTraining.objectiveCriterion && (
                    <div className="rounded-lg border border-white/10 bg-[#080B14] p-2.5">
                      <span className="font-mono text-[9px] uppercase text-slate-400 block mb-0.5">
                        OBJECTIVE / LOSS
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-200 break-words">
                        {modelArchitectureAndTraining.objectiveCriterion}
                      </span>
                    </div>
                  )}
                  {modelArchitectureAndTraining.optimizationSolver && (
                    <div className="rounded-lg border border-white/10 bg-[#080B14] p-2.5">
                      <span className="font-mono text-[9px] uppercase text-slate-400 block mb-0.5">
                        OPTIMIZER / SOLVER
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-200 break-words">
                        {modelArchitectureAndTraining.optimizationSolver}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {modelArchitectureAndTraining.trainingProcess && (
              <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
                TRAINING PROTOCOL: {modelArchitectureAndTraining.trainingProcess}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — TECH STACK & RUNTIME ARCHITECTURE
          ========================================================================= */}
      <CyberTechStackSection
        sectionNumber="04"
        sectionTitle="[ 04 // ML RUNTIME & COMPUTATION ECOSYSTEM ]"
        techStack={allMLTechStack}
        accentColor="indigo"
        onTriggerPulse={onTriggerPulse}
      />

      {/* =========================================================================
          SECTION 5 — MODEL EVALUATION & RESULTS
          Layout: Top Evaluation Metrics + Split Visual Diagnostics (Left) & Interpretation (Right)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-indigo-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="hidden lg:inline">[ 05 // MODEL EVALUATION & PERFORMANCE BENCHMARKS ]</span>
            <span className="lg:hidden">[ 05 // MODEL EVALUATION ]</span>
          </div>
          <span className="hidden md:inline-block font-mono text-[11px] text-slate-400">
            EMPIRICAL_BENCHMARKS // DIAGNOSTICS // ERROR_ANALYSIS
          </span>
        </div>

        {/* Top: Evaluation Strategy & Quantitative Metrics Deck */}
        <div className="relative z-10 mb-8 rounded-2xl border border-white/10 bg-black/50 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-indigo-400 font-bold">
              <TrendingUp className="h-4 w-4 text-indigo-400" />
              <span className="hidden lg:inline">EVALUATION STRATEGY // BENCHMARK PROTOCOL</span>
              <span className="lg:hidden">EVALUATION STRATEGY</span>
            </div>
            <span className="hidden md:inline-block text-slate-300 font-semibold">
              {evaluationStrategy.validationMethod}
            </span>
          </div>

          <p
            className={`text-xs sm:text-sm text-slate-300 leading-relaxed font-normal ${
              evaluationStrategy.metrics && evaluationStrategy.metrics.length > 0
                ? "mb-6"
                : "mb-0"
            }`}
          >
            {evaluationStrategy.description}
          </p>

          {/* Quantitative Metrics Grid - Dynamic list, no limit */}
          {evaluationStrategy.metrics && evaluationStrategy.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {evaluationStrategy.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#080B14] p-3.5 transition-all hover:border-indigo-400/50"
                >
                  <div className="font-mono text-xl sm:text-2xl font-black text-indigo-400 mb-1 truncate">
                    {m.value}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-1 truncate">
                    {m.label}
                  </div>
                  {m.benchmark && (
                    <span className="font-mono text-[9px] text-slate-400 block truncate">
                      {m.benchmark}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Split: Visual Diagnostics (Left) vs Interpretation & Limitations (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Visual Diagnostics Stage (Aligned with AI Engineering Viewport Design) */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5 shadow-2xl h-full">
            {/* Header Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="hidden md:flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-500/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-400/80 inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-300/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-slate-300 truncate max-w-[200px] sm:max-w-[280px]">
                  {activeVis?.title || "Diagnostic Interface Viewport"}
                </span>
              </div>

              {activeVis?.badge && (
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-wider uppercase text-indigo-300 bg-indigo-500/10 border border-indigo-400/30 px-2 py-0.5 rounded">
                    {activeVis.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Viewport Image Stage */}
            <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:flex-1 min-h-[250px] sm:min-h-[280px] overflow-hidden rounded-xl border border-white/10 bg-[#080B14] flex items-center justify-center group">
              {activeVis?.imageUrl ? (
                <Image
                  src={activeVis.imageUrl}
                  alt={`${project.title} ML Diagnostic Viewport`}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center text-slate-500">
                  <BarChart2 className="h-10 w-10 text-indigo-500/50 mb-2" />
                  <p className="font-mono text-xs">NO DIAGNOSTIC SCREEN LINKED</p>
                </div>
              )}

              {/* Prev / Next Controls */}
              {performanceVisualizations.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveVisIndex(
                        (prev) =>
                          (prev - 1 + performanceVisualizations.length) %
                          performanceVisualizations.length
                      )
                    }
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 rounded-full border border-indigo-400/40 bg-black/80 p-2 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400 hover:text-white backdrop-blur-md transition-all shadow-lg z-20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveVisIndex(
                        (prev) =>
                          (prev + 1) % performanceVisualizations.length
                      )
                    }
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full border border-indigo-400/40 bg-black/80 p-2 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400 hover:text-white backdrop-blur-md transition-all shadow-lg z-20"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>

            {/* Interactive Thumbnail Filmstrip */}
            {performanceVisualizations.length > 1 && (
              <div className="mt-3.5 pt-3 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    INSPECT VIEWPORTS:
                  </span>
                  <span className="font-mono text-[9px] text-indigo-400">
                    CLICK TO PREVIEW
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {performanceVisualizations.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveVisIndex(idx);
                        onTriggerPulse?.();
                      }}
                      className={`group relative aspect-[16/10] overflow-hidden rounded-lg border transition-all ${
                        idx === activeVisIndex
                          ? "border-indigo-400 ring-2 ring-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                          : "border-white/10 opacity-50 hover:opacity-100 hover:border-indigo-400/50"
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
                      <span className="absolute bottom-0.5 right-1 font-mono text-[8px] bg-black/80 px-1 rounded text-indigo-300 border border-white/10">
                        0{idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Status & Dot Navigator */}
            <div className="mt-3.5 pt-2.5 border-t border-white/5 flex items-center justify-between">
              <span className="hidden md:inline-block font-mono text-[10px] text-slate-400">
                VIEWPORT {activeVisIndex + 1} OF {performanceVisualizations.length}
              </span>
              <div className="flex items-center gap-1.5">
                {performanceVisualizations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveVisIndex(idx);
                      onTriggerPulse?.();
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeVisIndex
                        ? "w-5 bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {visTelemetryNote && (
              <div className="mt-3 pt-2.5 border-t border-white/5 font-mono text-[10px] text-slate-400">
                TELEMETRY: {visTelemetryNote}
              </div>
            )}
          </div>

          {/* Model Interpretation & Limitations */}
          <div className="rounded-2xl border border-white/10 bg-black/50 p-5 sm:p-6 shadow-2xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 gap-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <PieChart className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span className="hidden lg:inline">MODEL INTERPRETATION &amp; ERROR ANALYSIS</span>
                  <span className="lg:hidden">MODEL INTERPRETATION</span>
                </div>
                <span className="hidden md:inline-block font-mono text-[10px] text-indigo-300 bg-indigo-500/10 border border-indigo-400/30 px-2 py-0.5 rounded truncate max-w-[150px]">
                  DIAGNOSTIC INSIGHTS
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                {modelInterpretationAndLimitations.interpretationSummary}
              </p>

              {/* Key Model Drivers / Behavioral Insights */}
              {modelInterpretationAndLimitations.keyDrivers.length > 0 && (
                <div className="space-y-2 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 block font-bold">
                    KEY MODEL DRIVERS &amp; BEHAVIORAL INSIGHTS
                  </span>
                  {modelInterpretationAndLimitations.keyDrivers.map((drv, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-white/10 bg-[#080B14] p-2.5 hover:border-indigo-400/40 transition-colors"
                    >
                      <div className="font-mono text-[11px] font-bold text-slate-200 mb-0.5">
                        {drv.factor}
                      </div>
                      <p className="font-mono text-[11px] text-indigo-300 leading-relaxed font-normal">
                        {drv.impact}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Limitations List */}
              <div className="space-y-2 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-bold">
                  MODEL LIMITATIONS
                </span>
                {modelInterpretationAndLimitations.limitations.map((lim, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/10 bg-[#080B14] p-2.5"
                  >
                    <div className="font-mono text-[11px] font-bold text-indigo-400 mb-0.5">
                      {lim.title}
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      {lim.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Future Improvements */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 block font-bold">
                  FUTURE IMPROVEMENTS ROADMAP
                </span>
                {modelInterpretationAndLimitations.futureImprovements.map((imp, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/10 bg-[#080B14] p-2.5 hover:border-indigo-400/40 transition-colors"
                  >
                    <div className="font-mono text-[11px] font-bold text-slate-200 mb-0.5">
                      {imp.title}
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      {imp.target}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {modelInterpretationAndLimitations.discoveryNote && (
              <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400">
                DISCOVERY: {modelInterpretationAndLimitations.discoveryNote}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — [ 06 // MODEL VAULT & ARTIFACT GATES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-indigo-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-indigo-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="hidden lg:inline">[ 06 // MODEL VAULT &amp; ARTIFACT GATES ]</span>
            <span className="lg:hidden">[ 06 // MODEL VAULT ]</span>
          </div>
          <span className="hidden md:inline-block font-mono text-[11px] text-slate-400">
            FINAL_ACCESS // REPOSITORIES, ARTIFACTS &amp; RESEARCH SPECIFICATIONS
          </span>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Card 1: Repository Gate (Adaptive Universal Standard) */}
          <CyberRepoCard
            repoUrl={project.repoUrl}
            accentColor="indigo"
            license={project.license}
            projectStatus={project.telemetry?.projectStatus || "Completed"}
            onTriggerPulse={onTriggerPulse}
          />

          {/* Card 2: Dataset & Model Artifacts Card (Universal Spec Standard) */}
          <CyberSpecCard
            accentColor="indigo"
            icon={Database}
            categoryTag="DATASET & MODEL ARTIFACTS"
            statusBadge={`${modelArtifacts.length} ARTIFACTS`}
            title="Model Artifacts & Dataset Profile"
            description="Structured training dataset and model artifact profile detailing data scale, tensor input dimensions, serialization format, and integrity verification."
            specs={[
              { label: "SCALE / VOLUME", value: datasetProfile.scale },
              { label: "INPUT SHAPE", value: datasetProfile.inputShape, highlight: true },
              { label: "PRIMARY FORMAT", value: datasetProfile.dataFormat },
              { label: "SERIALIZATION", value: "Verified Binary Checksum" },
            ]}
            action={
              project.repoUrl
                ? {
                    label: "INSPECT SYSTEM SPECS",
                    href: `${project.repoUrl}#readme`,
                  }
                : {
                    label: "RESTRICTED ACCESS",
                  }
            }
          />

          {/* Card 3: Research Specification & Technical Report Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-indigo-500/20 bg-[#0A0D17]/85 p-5 sm:p-7 shadow-lg transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_8px_32px_rgba(99,102,241,0.16)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-indigo-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400">
                  <FileText className="h-4 w-4 text-indigo-400" />
                  <span>RESEARCH SPECIFICATION</span>
                </div>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Modeling & Validation Specification
              </h3>
              <p className="hidden md:block text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Standardized research and computational methodology covering learning paradigms, model or solver architectures, core frameworks, and formal validation methods.
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] uppercase">LEARNING PARADIGM:</span>
                  <span className="text-slate-200 font-semibold">{mlSpecs.learningParadigm}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] uppercase">MODEL ARCHITECTURE:</span>
                  <span className="text-indigo-400 font-semibold">{mlSpecs.modelArchitecture}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] uppercase">CORE FRAMEWORK:</span>
                  <span className="text-slate-200 font-semibold">{mlSpecs.coreFramework}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] uppercase">VALIDATION METHOD:</span>
                  <span className="text-slate-200 font-semibold">{mlSpecs.validationMethod}</span>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-4 py-3 text-center font-mono text-xs font-semibold text-indigo-300">
              REPRODUCIBILITY: PASSED
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
