"use client";

import React, { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  BarChart2,
  Box,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Database,
  Download,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  FolderGit2,
  Globe,
  HardDrive,
  Layers,
  Layout,
  LineChart,
  Lock,
  PieChart,
  Presentation,
  ShieldCheck,
  Sparkles,
  Table,
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

interface DataAnalyticsDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function DataAnalyticsDetailView({
  project,
  onTriggerPulse,
}: DataAnalyticsDetailViewProps) {
  // Presentation Slide State
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [slideErrors, setSlideErrors] = useState<Record<string, boolean>>({});

  const handleSlideImgError = useCallback((src: string) => {
    setSlideErrors((prev) => ({ ...prev, [src]: true }));
  }, []);

  // Section 1 Data: Overview & Information
  const projectDescription =
    project.dataAnalyticsExecutiveSummary ||
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "";

  const projectInfo = project.dataAnalyticsProjectInfo || {
    projectType: "Business Intelligence & Data Analytics",
    projectStatus: project.status || "Completed",
    analysisYear: project.year || "2026",
    dataDomain: project.categoryLabel || "Data Analytics",
    projectCategory: project.categoryLabel || "Data Analytics",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.projectType,
    targetPlatform: "Python / SQL / BI Engine",
    primaryDomain: (projectInfo as any).dataDomain || project.categoryLabel || "Data Analytics",
    architecturePipeline: project.architectureSummary || "Automated ETL Ingestion + Analytical SQL Engine",
    testingAndAudit: "Passed",
    projectStatus: (projectInfo as any).projectStatus || (projectInfo as any).developmentStatus || project.status || "Completed",
    projectYear: (projectInfo as any).analysisYear || project.year || "2026",
  };

  // Section 2: Business Understanding & Objectives
  const businessContext =
    project.dataAnalyticsBusinessContext ||
    project.challenge ||
    project.summary ||
    "";

  const analyticalObjectives: {
    title: string;
    description: string;
    targetTag?: string;
    targetMetric?: string;
  }[] =
    project.dataAnalyticsAnalyticalObjectives ||
    (project.objectives && project.objectives.length > 0
      ? project.objectives.map((obj, idx) => ({
          title: `Objective ${String(idx + 1).padStart(2, "0")}`,
          description: obj,
          targetTag: `OBJECTIVE_0${idx + 1}`,
        }))
      : []);

  // Section 3: Data Inspection & Preparation
  const datasetOverview = project.dataAnalyticsDatasetOverview || (project as any).datasetOverview || {
    dataSource: "Primary Database / Analytical Warehouse",
    dataPeriod: "Historical Transactional Data",
    recordsCount: (projectInfo as any).recordsCount || "Normalized Records",
    featuresCount: "Multiple Attribute Dimensions",
    dataTypes: "Numerical, Categorical, Datetime",
    description: project.summary || "",
  };

  const dataPreparation: {
    step: string;
    title: string;
    description: string;
    badge?: string;
  }[] = project.dataAnalyticsDataPreparation || (project as any).dataPreparation || [];

  // Section 4: Analytical Methodology & Workflow
  const analyticalMethodology: {
    summary: string;
    methods: { name: string; description: string; badge?: string }[];
  } = (project.analyticalMethodology || (project as any).dataAnalyticsAnalyticalMethodology) ? (
    (project.analyticalMethodology || (project as any).dataAnalyticsAnalyticalMethodology).methods
      ? (project.analyticalMethodology || (project as any).dataAnalyticsAnalyticalMethodology)
      : {
          summary: (project as any).dataAnalyticsAnalyticalMethodology?.methodologyDescription || project.architectureSummary || "Quantitative Diagnostic & Predictive Analytics methodology pipeline.",
          methods: [],
        }
  ) : {
    summary: project.architectureSummary || "Quantitative Diagnostic & Predictive Analytics methodology pipeline.",
    methods: [],
  };

  const analysisWorkflow: {
    summary: string;
    steps: {
      stepNumber: string;
      title: string;
      description: string;
      phase?: string;
    }[];
  } = (project.analysisWorkflow || (project as any).dataAnalyticsAnalysisWorkflow) ? (
    Array.isArray(project.analysisWorkflow || (project as any).dataAnalyticsAnalysisWorkflow)
      ? {
          summary: "Quantitative analysis and multi-phase statistical validation pipeline.",
          steps: (project.analysisWorkflow || (project as any).dataAnalyticsAnalysisWorkflow) as any[],
        }
      : (project.analysisWorkflow || (project as any).dataAnalyticsAnalysisWorkflow) as any
  ) : {
    summary: "Rigorous quantitative investigation workflow executed across specialized stages.",
    steps: [],
  };

  // Section 4: Tech Stack (Unified Flat)
  const allDataAnalyticsTechStack = useMemo(() => {
    return [
      ...(project.dataAnalyticsTechStack?.coreTechnologies || []).map((t: any) => t.name),
      ...(project.dataAnalyticsTechStack?.analyticsVizTools || []).map((t: any) => t.name),
      ...((project as any).dataTechStack?.coreTechnologies || []).map((t: any) => t.name),
      ...((project as any).dataTechStack?.analyticsVizTools || []).map((t: any) => t.name),
      ...(project.techStack || []),
    ];
  }, [project.dataAnalyticsTechStack, (project as any).dataTechStack, project.techStack]);

  const coreTechnologies: {
    name: string;
    role?: string;
  }[] = project.dataAnalyticsTechStack?.coreTechnologies || [];

  const analyticsVizTools: {
    name: string;
    role?: string;
  }[] = project.dataAnalyticsTechStack?.analyticsVizTools || [];

  // Section 6: Presentation Slides & Dashboards
  const presentationSlides: {
    imageUrl?: string;
    caption: string;
    badge?: string;
    title?: string;
    slideNumber?: number;
  }[] =
    project.dataAnalyticsPresentationSlides && project.dataAnalyticsPresentationSlides.length > 0
      ? project.dataAnalyticsPresentationSlides
      : (project.images || [project.imageUrl || ""]).map((img, idx) => ({
          imageUrl: img,
          caption: `${project.title} — Slide Deck 0${idx + 1}`,
          badge: `SLIDE // 0${idx + 1}`,
        }));

  // Section 7: Key Findings & Business Insights
  const keyFindings: {
    metricValue: string;
    metricLabel: string;
    title: string;
    description: string;
    impactTag?: string;
  }[] = project.dataAnalyticsKeyFindings || (project as any).keyFindings || [];

  // Section 8: Recommendations & Strategic Action
  const heroImage =
    project.imageUrl ||
    (project.images && project.images.length > 0 ? project.images[0] : null);

  const recommendationsAndConclusion: {
    recommendations: {
      title: string;
      action: string;
      priority: "HIGH" | "MEDIUM" | "STRATEGIC";
    }[];
    conclusion: string;
  } = (project.recommendationsAndConclusion || (project as any).dataAnalyticsRecommendations) ? (
    (project.recommendationsAndConclusion || (project as any).dataAnalyticsRecommendations).recommendations
      ? (project.recommendationsAndConclusion || (project as any).dataAnalyticsRecommendations)
      : {
          recommendations: ((project as any).dataAnalyticsRecommendations?.strategicRecommendations || []).map((r: any) => ({
            title: r.title || r.action || "Strategic Action",
            action: r.description || r.action || "",
            priority: r.priority || "HIGH",
          })),
          conclusion: (project as any).dataAnalyticsRecommendations?.conclusionSummary || project.evaluation || project.summary || "",
        }
  ) : {
    recommendations: [],
    conclusion: project.evaluation || project.summary || "",
  };

  // Section 9: Project Resources
  const hasRepoUrl = Boolean(
    project.repoUrl && project.repoUrl.trim().length > 0
  );

  const supportingFiles: {
    name: string;
    format: string;
    size?: string;
    url?: string;
    description: string;
  }[] = project.dataAnalyticsSupportingFiles || [];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* =========================================================================
          SECTION 1 — [ 01 // ANALYTICAL CONSOLE & BUSINESS CONTEXT ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#070D0E]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-emerald-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-emerald-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-emerald-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-emerald-400/70" />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">
              [ 01 // ANALYTICAL CONSOLE & BUSINESS CONTEXT ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
              <LineChart className="h-3 w-3 text-emerald-400" />
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
              <Database className="h-3 w-3 text-emerald-400" />
              {projectInfo.dataDomain || projectInfo.projectCategory}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {/* Terminal Title Bar */}
            <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-emerald-500/30 bg-emerald-950/40 px-4 py-2 text-xs font-mono text-emerald-300">
              <span className="flex items-center gap-2 text-emerald-200">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                {project.title}
              </span>
              <span className="text-[10px] text-emerald-400/80">SYS.VIEWPORT</span>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-emerald-500/25 bg-[#070D0E]/95 p-5 sm:p-6 text-slate-300 shadow-inner">
              <div>
                {/* 16:9 Hero Viewport Container — Pure static display */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-emerald-500/30 bg-black/60 shadow-lg">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-emerald-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-emerald-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-emerald-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-emerald-400/80" />

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
              <div className="mt-auto pt-4 border-t border-emerald-500/20 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                  <Database className="h-3 w-3 text-emerald-400" />
                  Automated ETL Ingestion
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                  <Activity className="h-3 w-3 text-emerald-400" />
                  Predictive Retention Modeling
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                  <PieChart className="h-3 w-3 text-emerald-400" />
                  CLV Cohort Segmentation
                </span>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Tactical Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-emerald-500/30 bg-[#070D0E]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-emerald-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-emerald-400/80 tracking-wider">System Classification</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Box className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectType || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-emerald-400/80 tracking-wider">Operating Environment</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Globe className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{String(telemetry.targetPlatform || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-emerald-400/80 tracking-wider">Domain Focus</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Layers className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{String(telemetry.primaryDomain || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-emerald-400/80 tracking-wider">Engineering Pipeline</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Workflow className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{String(telemetry.architecturePipeline || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-emerald-400/80 tracking-wider">Testing & Audit</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{String(telemetry.testingAndAudit || "Passed").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-emerald-400/80 tracking-wider">Project Status</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectStatus || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase text-emerald-400/80 tracking-wider">Project Year</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Clock className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{String(project.year || "2026").slice(0, 50)}</span>
                  </dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  hasRepoUrl
                    ? "border-emerald-500/35 bg-[#0C1210]/90 hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-emerald-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-emerald-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-emerald-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-emerald-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-300">
                      {hasRepoUrl ? (
                        <FolderGit2 className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 text-slate-400" />
                      )}
                      <span className="truncate">
                        {hasRepoUrl ? "GITHUB REPOSITORY" : "PRIVATE REPOSITORY"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">ACCESS CLEARANCE:</span>
                      <span className={hasRepoUrl ? "text-emerald-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {hasRepoUrl ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / PRIVATE"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SOURCE GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">{hasRepoUrl ? "Main Branch" : "Personal Archive"}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">LICENSE:</span>
                      <span className={hasRepoUrl ? "text-emerald-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.01]"
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

            <div className="mt-5 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-emerald-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — BUSINESS CONTEXT & DATASET
          Layout: Top Business Narrative + Split Telemetry Grid (Objectives vs Dataset)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 02 // BUSINESS CONTEXT & DATASET TELEMETRY ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            PROBLEM_CONTEXT // DATASET_PROFILE
          </span>
        </div>

        {/* Top: Business Context (Full-Width Narrative Card) */}
        <div className="relative z-10 rounded-2xl border border-emerald-500/20 bg-black/40 p-6 sm:p-7 mb-7 shadow-[inset_0_0_16px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold mb-3">
            <Target className="h-3.5 w-3.5 text-emerald-400" />
            <span>EXECUTIVE CONTEXT // PROBLEM BACKGROUND & RATIONALE</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {businessContext.length > 1000
              ? `${businessContext.slice(0, 1000).trim()}...`
              : businessContext}
          </p>
        </div>

        {/* 2-Column Split: Analytical Objectives (Left) vs Dataset Overview (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch">
          {/* Analytical Objectives */}
          <div className="rounded-2xl border border-emerald-500/30 bg-[#091512]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300 tracking-wider">
                  <Target className="h-4 w-4 text-emerald-400" />
                  <span>[ ANALYTICAL_OBJECTIVES // KEY QUESTIONS ]</span>
                </div>
                <span className="rounded bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 font-mono text-[10px] text-emerald-300 font-bold">
                  {analyticalObjectives.length} TARGETS
                </span>
              </div>

              <div className="space-y-4">
                {analyticalObjectives.map((obj, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-emerald-500/15 bg-black/50 p-4 transition-all hover:border-emerald-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-emerald-400 font-bold mb-1.5">
                      <span>{obj.targetMetric || `TARGET_0${idx + 1}`}</span>
                      <span className="text-[10px] text-emerald- font-medium">
                        ANSWERED
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1.5">
                      {obj.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {obj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-emerald-500/15 font-mono text-[10px] text-emerald-400/80">
              TELEMETRY: All analytical objectives mapped to specific quantitative hypotheses.
            </div>
          </div>

          {/* Dataset Overview (5-Parameter Specs) */}
          <div className="rounded-2xl border border-emerald-/30 bg-[#071318]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald- tracking-wider">
                  <Database className="h-4 w-4 text-emerald-" />
                  <span>[ DATASET_PROFILE // METADATA SPECS ]</span>
                </div>
                <span className="rounded bg-emerald-/10 border border-emerald-/30 px-2 py-0.5 font-mono text-[10px] text-emerald- font-bold">
                  LONGITUDINAL
                </span>
              </div>

              <div className="space-y-3.5 mb-5">
                <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    1. DATA SOURCE
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    {datasetOverview.dataSource}
                  </span>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    2. DATA PERIOD
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    {datasetOverview.dataPeriod}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                      3. RECORDS (ROWS)
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-emerald-300">
                      {datasetOverview.recordsCount}
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                      4. VARIABLES (COLS)
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-emerald-">
                      {datasetOverview.variablesCount}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    5. DATA DESCRIPTION
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {datasetOverview.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-/15 font-mono text-[10px] text-emerald-/80">
              INTEGRITY: Zero synthetic distortion; 100% verified enterprise ledger schema.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — DATA PROCESSING & METHODOLOGY
          Layout: Flow Pipeline Header + Split Preparation (Left) & Methodology (Right)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 03 // DATA PROCESSING PIPELINE & METHODOLOGY ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            WORKFLOW_CIRCUIT // PREPROCESSING
          </span>
        </div>

        {/* Top: Analysis Workflow Horizontal Pipeline */}
        <div className="relative z-10 mb-8 rounded-2xl border border-emerald-500/25 bg-black/60 p-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300">
              <Workflow className="h-4 w-4 text-emerald-400" />
              <span>[ ANALYSIS_WORKFLOW // 5-PHASE END-TO-END PIPELINE ]</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              DETERMINISTIC ETL
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
            {analysisWorkflow.summary}
          </p>

          {/* Horizontal Circuit Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {analysisWorkflow.steps.map((st, i) => (
              <div
                key={i}
                className="relative rounded-xl border border-white/10 bg-[#0A1412]/80 p-4 transition-all hover:border-emerald-400/50 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between font-mono text-xs font-bold text-emerald-400 mb-2">
                  <span>{st.stepNumber}</span>
                  <span className="rounded bg-emerald-400/10 px-1.5 py-0.2 text-[9px] uppercase tracking-wider text-emerald-300">
                    {st.phase}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-1.5">
                  {st.title}
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Split Sub-Bento: Data Preparation (Left) vs Analytical Methodology (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Data Preparation */}
          <div className="rounded-2xl border border-emerald-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  <Database className="h-4 w-4 text-emerald-400" />
                  <span>[ DATA_PREPARATION // CLEANING & WRANGLING ]</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {dataPreparation.length} STAGES
                </span>
              </div>

              <div className="space-y-3.5">
                {dataPreparation.map((prep, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#0A1412]/70 p-4 transition-all hover:border-emerald-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-emerald-400 font-bold mb-1.5">
                      <span>{prep.step}</span>
                      <span className="rounded bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 text-emerald-300">
                        {prep.badge}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1">
                      {prep.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {prep.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              AUDIT: Data validated against null constraints, format outliers, and duplicate primary records.
            </div>
          </div>

          {/* Analytical Methodology */}
          <div className="rounded-2xl border border-emerald-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  <LineChart className="h-4 w-4 text-emerald-400" />
                  <span>[ METHODOLOGY // STATISTICAL APPROACH ]</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-">
                  RIGOROUS
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                {analyticalMethodology.summary}
              </p>

              <div className="space-y-3">
                {analyticalMethodology.methods.map((met, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#081216]/80 p-3.5 transition-all hover:border-emerald-/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] font-bold text-emerald- mb-1">
                      <span>{met.name}</span>
                      <span className="rounded bg-emerald-/10 px-1.5 py-0.2 font-mono text-[9px] text-emerald-">
                        {met.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {met.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              STATISTICAL VALIDITY: Significance thresholds maintained at 99% confidence level (alpha = 0.01).
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — TECH STACK & RUNTIME ARCHITECTURE
          ========================================================================= */}
      <CyberTechStackSection
        sectionNumber="04"
        sectionTitle="[ 04 // ANALYTIC RUNTIME & TOOLING ECOSYSTEM ]"
        techStack={allDataAnalyticsTechStack}
        accentColor="emerald"
        onTriggerPulse={onTriggerPulse}
      />

      {/* =========================================================================
          SECTION 5 — ANALYSIS & FINDINGS
          Layout: Cinema Viewer Deck + Split Findings & Actions Below
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 05 // ANALYSIS PRESENTATION & INSIGHTS DECK ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            EMBEDDED_SLIDES // STRATEGIC_OUTCOMES
          </span>
        </div>

        {/* 1. Analysis Presentation (Interactive Slide Viewer) */}
        <div className="relative z-10 mb-8 rounded-2xl border border-emerald-500/30 bg-black/60 p-4 sm:p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Presentation className="h-4 w-4 text-emerald-400" />
              <span className="font-bold text-emerald-300">
                EXECUTIVE_PRESENTATION_VIEWER // SLIDE DECK
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">
                SLIDE {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
                {String(presentationSlides.length).padStart(2, "0")}
              </span>
              
            </div>
          </div>

          {/* Slide Stage Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#040808]">
            <Image
              src={
                slideErrors[presentationSlides[activeSlideIndex]?.imageUrl || ""]
                  ? "/images/projects/SiLelo - Online Auction 1.webp"
                  : presentationSlides[activeSlideIndex]?.imageUrl ||
                    "/images/projects/SiLelo - Online Auction 1.webp"
              }
              alt={presentationSlides[activeSlideIndex]?.title || project.title}
              fill
              className="object-cover object-top transition-transform duration-500"
              priority
              onError={() =>
                handleSlideImgError(
                  presentationSlides[activeSlideIndex]?.imageUrl || ""
                )
              }
            />

            {/* Slide Navigation Overlay Buttons */}
            {presentationSlides.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveSlideIndex((prev) =>
                      prev === 0 ? presentationSlides.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40 bg-black/70 p-2.5 text-emerald-300 hover:bg-emerald-400 hover:text-black backdrop-blur-md transition-all shadow-lg"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveSlideIndex((prev) =>
                      prev === presentationSlides.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40 bg-black/70 p-2.5 text-emerald-300 hover:bg-emerald-400 hover:text-black backdrop-blur-md transition-all shadow-lg"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Live Slide Number Tag Scrim */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-5 flex items-center justify-between gap-4">
              <div className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                <span className="text-emerald-400 font-bold">
                  [ Slide {String(activeSlideIndex + 1).padStart(2, "0")} ]
                </span>
              </div>
            </div>
          </div>

          {/* Slide Thumbnail Ribbon */}
          {presentationSlides.length > 1 && (
            <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin">
              {presentationSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`relative h-14 sm:h-16 w-24 sm:w-28 shrink-0 overflow-hidden rounded-lg border transition-all ${
                    idx === activeSlideIndex
                      ? "border-emerald-400 ring-2 ring-emerald-400/40 scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={
                      slide.imageUrl ||
                      "/images/projects/SiLelo - Online Auction 1.webp"
                    }
                    alt={`Slide Thumb ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.2 font-mono text-[9px] text-emerald-300">
                    SLIDE {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Split: Key Findings (Left) vs Recommendations & Conclusion (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Key Findings & Insights */}
          <div className="rounded-2xl border border-emerald-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                  <span>[ KEY_FINDINGS // EMPIRICAL INSIGHTS ]</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {keyFindings.length} METRICS VALIDATED
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFindings.map((finding, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-[#0A1412]/70 p-4 transition-all hover:border-emerald-400/40 hover:-translate-y-0.5"
                  >
                    <div className="flex items-baseline justify-between font-mono mb-2">
                      <span className="text-xl sm:text-2xl font-black text-emerald-400">
                        {finding.metricValue}
                      </span>
                      <span className="rounded bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300">
                        {finding.impactTag}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                      {finding.metricLabel}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1.5">
                      {finding.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {finding.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              CONFIRMATION: Derived from p-value significance matrices and empirical cohort clustering.
            </div>
          </div>

          {/* Recommendations & Conclusion */}
          <div className="rounded-2xl border border-emerald-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <span>[ ACTIONABLE_RECOMMENDATIONS & CONCLUSION ]</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400">
                  EXECUTIVE_DECK
                </span>
              </div>

              {/* Action List */}
              <div className="space-y-3 mb-5">
                {recommendationsAndConclusion.recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#07130F]/80 p-3.5 transition-all hover:border-emerald-400/30"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                      <span className="font-bold text-emerald-300">{rec.title}</span>
                      <span
                        className="rounded px-1.5 py-0.2 font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                      >
                        {rec.priority} PRIORITY
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {rec.action}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conclusion Narrative */}
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  STRATEGIC CONCLUSION
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {recommendationsAndConclusion.conclusion}
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              GOVERNANCE: Action roadmap aligned with quarterly operational OKRs.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — PROJECT RESOURCES (SECTION TERAKHIR)
          Layout: 3-Card Bento Grid Simetris
          Card 1: Analysis Repository Card (Adaptive GitHub vs Private Repo)
          Card 2: Presentation & Report Card
          Card 3: Dataset & Supporting Files Card
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 06 // ANALYTICAL ARTIFACTS & DATA DELIVERABLES ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            FINAL_ACCESS // NOTEBOOKS, REPORTS & DATASETS
          </span>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Card 1: Analysis Repository Gate (Adaptive Universal Standard) */}
          <CyberRepoCard
            repoUrl={project.repoUrl}
            accentColor="emerald"
            onTriggerPulse={onTriggerPulse}
            branchName="ANALYTICS"
            verifiedLabel="DATA_VERIFIED"
            license={project.license}
            projectStatus={project.telemetry?.projectStatus || "Completed"}
          />

          {/* Card 2: Presentation & Report Card (Universal Spec Standard) */}
          <CyberSpecCard
            accentColor="emerald"
            icon={FileText}
            categoryTag="PRESENTATION & REPORT"
            statusBadge="PDF / PPTX READY"
            title="Executive Report & Slide Deck"
            description="Comprehensive executive dossier containing the 25-slide presentation, methodology appendix, statistical significance tables, and quarterly ROI forecast."
            specs={[
              { label: "DOCUMENT FORMAT", value: "PDF & PPTX SLIDES", highlight: true },
              { label: "DECK LENGTH", value: "25 SLIDES // COMPLETE" },
              { label: "STATISTICAL RIGOR", value: "p < 0.001 Verified" },
              { label: "EXECUTIVE AUDIT", value: "Stakeholder Approved" },
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

          {/* Card 3: Dataset & Supporting Files Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-emerald-/30 bg-[#071318]/70 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-emerald-/60">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
                  <HardDrive className="h-4 w-4 text-emerald-400" />
                  <span>DATASET & ARTIFACTS</span>
                </div>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Processed Datasets & Workbooks
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Processed transaction extracts, metadata schemas, and interactive Power BI workbooks available for reproducible research.
              </p>

              <div className="space-y-2 mb-6">
                {supportingFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 p-2 font-mono text-[10px]"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <FileSpreadsheet className="h-3.5 w-3.5 text-emerald- shrink-0" />
                      <span className="text-slate-200 truncate">{file.name}</span>
                    </div>
                    <span className="text-emerald- font-bold ml-2 shrink-0">
                      {file.format}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-emerald-/20 bg-emerald-/5 px-4 py-2.5 text-center font-mono text-xs font-medium text-emerald-">
              STATUS: ARTIFACTS PACKAGED & AUDITED
            </div>
          </div>
        </div>
      </section>

      </div>
  );
}
