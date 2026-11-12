"use client";

import React, { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  FileText,
  FolderGit2,
  Globe,
  Layers,
  Layout,
  Lock,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Cpu,
  Database,
  Server,
  Code2,
  GitBranch,
  Box,
  Network,
  Workflow,
  AlertTriangle,
  Target,
  Zap,
  HardDrive,
  Activity,
  Check,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";
import CyberTechStackSection from "../CyberTechStackSection";
import CyberRepoCard from "../CyberRepoCard";
import CyberSpecCard, { SpecItem } from "../CyberSpecCard";

interface WebDevDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function WebDevDetailView({
  project,
  onTriggerPulse,
}: WebDevDetailViewProps) {
  // Image Showcase State
  const rawImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : ["/images/projects/SiLelo - Online Auction 1.webp"];

  const heroImage = rawImages[0] || project.imageUrl;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = useCallback((src: string) => {
    setImgErrors((prev) => ({ ...prev, [src]: true }));
  }, []);

  const hasRepoUrl = Boolean(
    project.repoUrl && project.repoUrl.trim().length > 0
  );

  // Section 1 Data: Project Description & Project Information
  const projectDescription =
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "";

  const projectInfo = project.projectInfo || {
    projectType: "Full-Stack Web Application",
    developmentStatus: project.status || "Completed",
    developmentYear: project.year || "2026",
    platform: "Web / Cross-Platform Responsive",
    projectCategory: project.categoryLabel || "Web Development",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.projectType,
    targetPlatform: projectInfo.platform,
    primaryDomain: projectInfo.projectCategory,
    architecturePipeline: project.architectureSummary || "Modular Component Architecture",
    testingAndAudit: "Passed",
    projectStatus: projectInfo.developmentStatus,
    projectYear: projectInfo.developmentYear,
  };

  // Section 2 Data: Background & Objectives
  const projectBackground =
    project.projectBackground ||
    project.challenge ||
    "";

  const problemStatements = project.problemStatements || [];

  const projectObjectives = project.projectObjectives ||
    (project.objectives && project.objectives.length > 0
      ? project.objectives.map((obj, idx) => ({
          title: `Milestone ${String(idx + 1).padStart(2, "0")}`,
          description: obj,
          targetTag: `TARGET_0${idx + 1}`,
        }))
      : []);

  // Section 3 Data: Features & Interface
  const coreFeatures = project.coreFeatures ||
    (project.features && project.features.length > 0
      ? project.features.map((f, i) => ({
          title: f.title,
          description: f.description,
          badge: f.badge || `MODULE_0${i + 1}`,
          metric: f.metric || "",
        }))
      : []);

  const interfaceShowcase =
    project.interfaceShowcase && project.interfaceShowcase.length > 0
      ? project.interfaceShowcase
      : rawImages.map((img) => ({
          imageUrl: img,
        }));

  const userFlow = project.userFlow || {
    summary: "",
    steps: [],
  };

  // Section 4 Data: Flat Unified Tech Stack
  const allWebDevTechStack = useMemo(() => {
    return [
      ...(project.techStackCategorized || []).map((t) => t.name),
      ...(project.techStack || []),
    ];
  }, [project.techStackCategorized, project.techStack]);

  const systemArchitecture = project.systemArchitecture || {
    summary: project.architectureSummary || "",
    layers: [],
  };

  const databaseDataFlow = project.databaseDataFlow || {
    type: "Data Flow Pipeline",
    summary: "",
    entitiesOrPipelines: [],
  };

  // Section 5 Data: Technical Implementation & Documentation
  const technicalImplementation = project.technicalImplementation || [];

  const webDevSpecs: SpecItem[] = [
    { label: "PROGRAMMING LANGUAGE", value: project.primaryTechSpecs?.programmingLanguage || "TypeScript" },
    { label: "FRAMEWORK", value: project.primaryTechSpecs?.framework || "Next.js" },
    { label: "DATABASE", value: project.primaryTechSpecs?.database || "PostgreSQL" },
    { label: "SECURITY AUDIT", value: "Vulnerability Hardened" },
  ];

  const qualityBadges = project.architectureQuality?.badges || [];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* =========================================================================
          SECTION 1 — [ 01 // SYSTEM CONSOLE & FULLSTACK ARCHITECTURE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-[#080B14]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-sky-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-sky-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-sky-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-sky-400/70" />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-sky-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-300">
              [ 01 // SYSTEM CONSOLE & FULLSTACK ARCHITECTURE ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sky-300">
              <Box className="h-3 w-3 text-sky-400" />
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sky-300">
              <Globe className="h-3 w-3 text-sky-400" />
              {projectInfo.platform}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {/* Terminal Title Bar */}
            <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-sky-500/30 bg-sky-950/40 px-4 py-2 text-xs font-mono text-sky-300">
              <span className="flex items-center gap-2 text-sky-200">
                <Terminal className="h-3.5 w-3.5 text-sky-400" />
                {project.title}
              </span>
              <span className="text-[10px] text-sky-400/80">SYS.VIEWPORT</span>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-sky-500/25 bg-[#080B14]/95 p-5 sm:p-6 text-slate-300 shadow-inner">
              <div>
                {/* 16:9 Hero Viewport Container — Pure static display */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-sky-500/30 bg-black/60 shadow-lg">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-sky-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-sky-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-sky-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-sky-400/80" />

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
              <div className="mt-auto pt-4 border-t border-sky-500/20 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] text-sky-300">
                  <Workflow className="h-3 w-3 text-sky-400" />
                  Modular Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] text-sky-300">
                  <Zap className="h-3 w-3 text-sky-400" />
                  High-Throughput Runtime
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] text-sky-300">
                  <ShieldCheck className="h-3 w-3 text-sky-400" />
                  Zero-Trust Security
                </span>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Tactical Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-sky-500/30 bg-[#080B14]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-sky-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-sky-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-sky-400/80 tracking-wider">System Classification</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Box className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectType || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-sky-400/80 tracking-wider">Operating Environment</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Globe className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{String(telemetry.targetPlatform || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-sky-400/80 tracking-wider">Domain Focus</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Layers className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{String(telemetry.primaryDomain || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-sky-400/80 tracking-wider">Engineering Pipeline</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Workflow className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{String(telemetry.architecturePipeline || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-sky-400/80 tracking-wider">Testing & Audit</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{String(telemetry.testingAndAudit || "Passed").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-sky-400/80 tracking-wider">Project Status</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <span className="h-2 w-2 rounded-full bg-sky-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectStatus || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase text-sky-400/80 tracking-wider">Project Year</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Clock className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{String(project.year || "2026").slice(0, 50)}</span>
                  </dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  hasRepoUrl
                    ? "border-sky-500/35 bg-[#0C101D]/90 hover:border-sky-400/60 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-sky-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-sky-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-sky-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-sky-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-sky-300">
                      <FolderGit2 className={hasRepoUrl ? "h-3.5 w-3.5 text-sky-400" : "h-3.5 w-3.5 text-slate-400"} />
                      <span className="truncate">
                        {hasRepoUrl ? "GITHUB REPOSITORY" : "PRIVATE REPOSITORY"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">ACCESS CLEARANCE:</span>
                      <span className={hasRepoUrl ? "text-sky-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {hasRepoUrl ? "UNRESTRICTED" : "RESTRICTED"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SOURCE GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">{hasRepoUrl ? "Main Branch" : "Personal Archive"}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">LICENSE:</span>
                      <span className={hasRepoUrl ? "text-sky-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.01]"
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

            <div className="mt-5 pt-3 border-t border-sky-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-sky-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — BACKGROUND & OBJECTIVES
          Layout: Top Background Terminal + 2-Column Split Matrix (Problem vs Objective)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/25 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 02 // CONTEXT ORIGIN & STRATEGIC OBJECTIVES ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            PROBLEM_MATRIX // MILESTONES
          </span>
        </div>

        {/* Top: Project Background (Full-Width Narrative Card) */}
        <div className="relative z-10 rounded-2xl border border-sky-500/20 bg-black/40 p-6 sm:p-7 mb-7 shadow-[inset_0_0_16px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-3">
            <Activity className="h-3.5 w-3.5 text-sky-400" />
            <span>ORIGIN CONTEXT // PROJECT BACKGROUND</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {projectBackground.length > 1000
              ? `${projectBackground.slice(0, 1000).trim()}...`
              : projectBackground}
          </p>
        </div>

        {/* 2-Column Split Matrix: Problem Statement vs Project Objectives */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch">
          {/* Column 1: Problem Statement (Sky Theme) */}
          <div className="rounded-2xl border border-sky-500/30 bg-[#080B14]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(56,189,248,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-sky-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300 tracking-wider">
                  <AlertTriangle className="h-4 w-4 text-sky-400" />
                  <span>[ ISSUE_DETECTED // PROBLEM STATEMENT ]</span>
                </div>
                <span className="rounded bg-sky-400/10 border border-sky-400/30 px-2 py-0.5 font-mono text-[10px] text-sky-300 font-bold">
                  {problemStatements.length} BOTTLENECKS
                </span>
              </div>

              <div className="space-y-4">
                {problemStatements.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-sky-500/15 bg-black/50 p-4 transition-all hover:border-sky-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-sky-400 font-bold mb-1.5">
                      <span>{item.issueCode || `ISSUE_0${idx + 1}`}</span>
                      <span className="text-[10px] text-sky-400/70 uppercase">
                        CRITICAL
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-sky-500/15 font-mono text-[10px] text-sky-400/80">
              TELEMETRY: Architectural constraints identified during initial audit.
            </div>
          </div>

          {/* Column 2: Project Objectives (Cyan Theme) */}
          <div className="rounded-2xl border border-cyan-500/30 bg-[#070D12]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-300 tracking-wider">
                  <Target className="h-4 w-4 text-cyan-400" />
                  <span>[ TARGET_SOLVED // STRATEGIC OBJECTIVES ]</span>
                </div>
                <span className="rounded bg-cyan-400/10 border border-cyan-400/30 px-2 py-0.5 font-mono text-[10px] text-cyan-300 font-bold">
                  {projectObjectives.length} TARGETS
                </span>
              </div>

              <div className="space-y-4">
                {projectObjectives.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-cyan-500/15 bg-black/50 p-4 transition-all hover:border-cyan-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-cyan-400 font-bold mb-1.5">
                      <span>{item.targetTag || `TARGET_0${idx + 1}`}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 font-medium">
                        <Check className="h-3 w-3" />
                        DELIVERED
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-cyan-500/15 font-mono text-[10px] text-cyan-400/80">
              TELEMETRY: All core objectives validated in production deployment.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — FEATURES & INTERFACE
          Layout: Hero Viewport Showcase + Split Sub-Bento (Features & User Flow)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/25 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 03 // CORE CAPABILITIES & HOLOGRAPHIC SHOWCASE ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            SHOWCASE // USER PIPELINE
          </span>
        </div>

        {/* 1. Interface Showcase (Hero Holographic Viewport) */}
        <div className="relative z-10 mb-8 rounded-2xl border border-sky-500/30 bg-black/60 p-4 sm:p-6 shadow-[0_0_40px_rgba(0,240,255,0.08)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="font-bold text-sky-300">
                HOLOGRAPHIC_VIEWPORT // INTERFACE_STAGE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">
                FRAME {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                {String(interfaceShowcase.length).padStart(2, "0")}
              </span>
              
            </div>
          </div>

          {/* Image Stage Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#04060A]">
            <Image
              src={
                imgErrors[interfaceShowcase[activeImageIndex]?.imageUrl]
                  ? "/images/projects/SiLelo - Online Auction 1.webp"
                  : interfaceShowcase[activeImageIndex]?.imageUrl ||
                    "/images/projects/SiLelo - Online Auction 1.webp"
              }
              alt={`${project.title} Interface Viewport`}
              fill
              className="object-cover object-top transition-transform duration-500 hover:scale-[1.01]"
              priority
              onError={() =>
                handleImgError(interfaceShowcase[activeImageIndex]?.imageUrl)
              }
            />

            {/* Navigation Overlay Buttons (if multiple images) */}
            {interfaceShowcase.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === 0 ? interfaceShowcase.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-sky-400/40 bg-black/70 p-2.5 text-sky-300 hover:bg-sky-400 hover:text-black backdrop-blur-md transition-all shadow-lg"
                  aria-label="Previous Showcase Viewport"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === interfaceShowcase.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-sky-400/40 bg-black/70 p-2.5 text-sky-300 hover:bg-sky-400 hover:text-black backdrop-blur-md transition-all shadow-lg"
                  aria-label="Next Showcase Viewport"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Carousel Bar */}
          {interfaceShowcase.length > 1 && (
            <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin">
              {interfaceShowcase.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-14 sm:h-16 w-24 sm:w-28 shrink-0 overflow-hidden rounded-lg border transition-all ${
                    idx === activeImageIndex
                      ? "border-sky-400 ring-2 ring-sky-400/40 scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={`Thumb ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.2 font-mono text-[9px] text-sky-300">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Split: Core Features (Left) vs User Flow (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Core Features */}
          <div className="rounded-2xl border border-sky-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-400 tracking-wider">
                  <Sparkles className="h-4 w-4 text-sky-400" />
                  <span>[ CORE_FEATURES // CAPABILITY MATRIX ]</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {coreFeatures.length} ACTIVE MODULES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#0C101D]/70 p-4 transition-all hover:border-sky-400/40 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-sky-400 font-bold mb-2">
                      <span className="rounded bg-sky-400/10 border border-sky-400/25 px-2 py-0.5">
                        {feat.badge || `MOD_0${i + 1}`}
                      </span>
                      <Workflow className="h-3 w-3 text-slate-500" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1.5">
                      {feat.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              SPEC: All modules engineered to operate under decoupled event boundaries.
            </div>
          </div>

          {/* User Flow */}
          <div className="rounded-2xl border border-sky-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-400 tracking-wider">
                  <Workflow className="h-4 w-4 text-sky-400" />
                  <span>[ USER_FLOW // INTERACTION PIPELINE ]</span>
                </div>
                <span className="font-mono text-[10px] text-sky-400">
                  DETERMINISTIC
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                {userFlow.summary}
              </p>

              {/* Step by Step Circuit Pipeline */}
              <div className="space-y-3 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-cyan-400 before:to-sky-500">
                {userFlow.steps.map((st, i) => (
                  <div
                    key={i}
                    className="relative pl-8 rounded-xl border border-white/5 bg-[#0A0E1A]/80 p-3.5 transition-all hover:border-sky-400/30"
                  >
                    <span className="absolute left-2 top-4 h-2.5 w-2.5 rounded-full bg-sky-400 ring-4 ring-[#080B14]" />
                    <div className="flex items-center justify-between font-mono text-[10px] text-sky-400 font-bold mb-1">
                      <span>{st.step}</span>
                      <span className="text-slate-400 font-normal">
                        {st.actorOrNode}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                      {st.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              AUDIT: End-to-end friction tested across touch and keyboard inputs.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — TECH STACK & RUNTIME ARCHITECTURE
          ========================================================================= */}
      <CyberTechStackSection
        sectionNumber="04"
        sectionTitle="[ 04 // FULL-STACK RUNTIME & TOOLING ECOSYSTEM ]"
        techStack={allWebDevTechStack}
        accentColor="sky"
        onTriggerPulse={onTriggerPulse}
      />

      {/* =========================================================================
          SECTION 5 — ARCHITECTURE & IMPLEMENTATION
          Layout: Dual Diagram Blueprint (2-Column Grid) + Implementation Deck Below
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/25 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 05 // SYSTEM TOPOLOGY & DEPLOYMENT BLUEPRINTS ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            DIAGRAMS // TECHNICAL IMPLEMENTATIONS
          </span>
        </div>

        {/* Dual Diagram Blueprint (2-Column Grid) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8 items-stretch">
          {/* Blueprint 1: System Architecture */}
          <div className="rounded-2xl border border-sky-500/30 bg-[#0A0E1A]/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                  <Network className="h-4 w-4 text-sky-400" />
                  <span>[ SYSTEM_ARCHITECTURE // TOPOLOGY ]</span>
                </div>
                <span className="rounded bg-sky-400/10 border border-sky-400/25 px-2 py-0.5 font-mono text-[10px] text-sky-300">
                  TIERED MVC
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {systemArchitecture.summary}
              </p>

              {/* Visual Architecture Layers Schematic */}
              <div className="space-y-3">
                {systemArchitecture.layers?.map((layer, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-black/60 p-3.5 transition-all hover:border-sky-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-sky-300 mb-1">
                      <span>{layer.name}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mb-2">
                      {layer.role}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.components.map((comp, cIdx) => (
                        <span
                          key={cIdx}
                          className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-200"
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
              TOPOLOGY: Edge-routed reverse proxy with decoupled downstream microservices.
            </div>
          </div>

          {/* Blueprint 2: Database & Data Flow */}
          <div className="rounded-2xl border border-sky-500/30 bg-[#0A0E1A]/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                  <Database className="h-4 w-4 text-sky-400" />
                  <span>[ DATABASE_SCHEMA // DATA_FLOW ]</span>
                </div>
                <span className="rounded bg-sky-400/10 border border-sky-400/25 px-2 py-0.5 font-mono text-[10px] text-sky-300">
                  {databaseDataFlow.type}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {databaseDataFlow.summary}
              </p>

              {/* Entity / Table Schema Schema Cards */}
              <div className="space-y-3">
                {databaseDataFlow.entitiesOrPipelines?.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-black/60 p-3.5 transition-all hover:border-sky-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-sky-300 mb-1">
                      <span>{item.name}</span>
                      <span className="rounded bg-sky-400/10 px-1.5 py-0.2 font-mono text-[9px] text-sky-400">
                        {item.type}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.fields.map((field, fIdx) => (
                        <span
                          key={fIdx}
                          className="rounded border border-sky-400/20 bg-sky-400/5 px-2 py-0.5 font-mono text-[10px] text-sky-200"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              INTEGRITY: Foreign-key constrained with transactional isolation.
            </div>
          </div>
        </div>

        {/* Technical Implementation Deck (Modular List/Cards Below) */}
        <div className="relative z-10 rounded-2xl border border-sky-500/20 bg-black/50 p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-sky-300">
              <Zap className="h-4 w-4 text-sky-400" />
              <span>[ TECHNICAL_IMPLEMENTATION // REAL-WORLD PROTOCOLS ]</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              5 VERIFIED PROTOCOLS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalImplementation.map((impl, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0C101D]/70 p-5 transition-all duration-300 hover:border-sky-400/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-sky-400 font-bold mb-2">
                  <span className="uppercase tracking-wider">{impl.category}</span>
                  <span className="rounded bg-sky-400/10 border border-sky-400/25 px-2 py-0.5">
                    {impl.badge}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-2">
                  {impl.title}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {impl.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — PROJECT RESOURCES (SECTION TERAKHIR)
          Layout: 3-Card Bento Grid
          Card 1: GitHub / Private Repository (Adaptive)
          Card 2: Technical Documentation & Specs
          Card 3: Architecture & Quality Standards
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 06 // SOURCE VAULT & TECHNICAL SPECIFICATION GATES ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            FINAL_ACCESS // REPOSITORIES & QUALITY ASSURANCE
          </span>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Card 1: Repository Gate (Adaptive Universal Standard) */}
          <CyberRepoCard
            repoUrl={project.repoUrl}
            accentColor="sky"
            license={project.license}
            projectStatus={project.telemetry?.projectStatus || "Completed"}
            onTriggerPulse={onTriggerPulse}
          />

          {/* Card 2: Technical Documentation & Specs Card (Universal Spec Standard) */}
          <CyberSpecCard
            accentColor="sky"
            icon={FileText}
            categoryTag="TECHNICAL SPECIFICATION"
            title="Technical Documentation & System Specs"
            description="Fullstack architecture specifications covering core language runtimes, primary frameworks, persistence engines, and hardened security posture."
            specs={webDevSpecs}
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

          {/* Card 3: Architecture & Quality Card (Sky Theme) */}
          <div className="flex flex-col justify-between rounded-2xl border border-sky-500/30 bg-[#080B14]/70 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-sky-400/60">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                  <span>QUALITY & VALIDATION</span>
                </div>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Architecture & Quality Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Automated static verification, strict type safety compliance, and performance engineering benchmarks validated across web environments.
              </p>

              {/* Quality Badges */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {qualityBadges.map((bg, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 rounded-lg border border-sky-400/20 bg-sky-400/10 p-2 font-mono text-[10px] text-sky-200 font-semibold"
                  >
                    <CheckCircle2 className="h-3 w-3 text-sky-400 shrink-0" />
                    <span className="truncate">{bg}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex items-center justify-center rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-center font-mono text-xs font-semibold text-sky-300">
              QA AUDIT: 100% PASSED
            </div>
          </div>
        </div>
      </section>

      </div>
  );
}
