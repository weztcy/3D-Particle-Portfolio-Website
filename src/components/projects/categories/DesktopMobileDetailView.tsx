"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
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
  FileDown,
  FileText,
  FolderGit2,
  Globe,
  HardDrive,
  Info,
  Layers,
  Layout,
  Lock,
  Monitor,
  Package,
  Radio,
  Server,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";
import CyberTechStackSection from "../CyberTechStackSection";
import CyberRepoCard from "../CyberRepoCard";
import CyberSpecCard from "../CyberSpecCard";

interface DesktopMobileDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function DesktopMobileDetailView({
  project,
  onTriggerPulse,
}: DesktopMobileDetailViewProps) {
  // Image Showcase State
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Project Images resolution
  const projectImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : [];

  const heroImage =
    project.imageUrl ||
    (project.images && project.images.length > 0 ? project.images[0] : null);

  const currentActiveImage = projectImages[activeImageIndex] || project.imageUrl || "";

  // Section 1: Overview & Information
  const projectDescription =
    project.desktopMobileBackground ||
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "";

  const isMobile =
    project.categoryLabel?.toLowerCase().includes("mobile") ||
    project.title.toLowerCase().includes("mobile") ||
    project.summary.toLowerCase().includes("android") ||
    project.summary.toLowerCase().includes("flutter") ||
    project.summary.toLowerCase().includes("react native");

  const projectInfo = project.desktopMobileProjectInfo || {
    applicationType: isMobile
      ? "Mobile Application (Native / Cross-Platform)"
      : "Native Desktop Application (x64 Architecture)",
    targetPlatform: isMobile
      ? "Android 14+ / iOS 17+"
      : "Windows 11 / 10 (x64 Native)",
    developmentStatus: project.status || "Production Ready",
    developmentYear: project.year || "2026",
    applicationCategory: isMobile
      ? "Mobile Productivity / Client App"
      : "High-Throughput Desktop Utility",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.applicationType,
    targetPlatform: projectInfo.targetPlatform,
    primaryDomain: projectInfo.applicationCategory,
    architecturePipeline: project.architectureSummary || "Decoupled Process Execution + Async Event Loop",
    testingAndAudit: "Passed",
    projectStatus: projectInfo.developmentStatus,
    projectYear: projectInfo.developmentYear,
  };

  // Section 2: Background & Objectives
  const projectBackground =
    project.desktopMobileBackground ||
    project.projectBackground ||
    project.challenge ||
    project.summary ||
    "";

  const problemStatements =
    project.desktopMobileProblemStatements ||
    project.problemStatements ||
    [];

  const projectObjectives: {
    title: string;
    description: string;
    targetTag?: string;
  }[] = (project.desktopMobileObjectives && project.desktopMobileObjectives.length > 0)
    ? (project.desktopMobileObjectives as any[]).map((obj: any, idx: number) =>
        typeof obj === "string"
          ? { title: `Objective 0${idx + 1}`, description: obj, targetTag: `OBJ_0${idx + 1}` }
          : { title: obj.title || `Objective 0${idx + 1}`, description: obj.description || "", targetTag: obj.targetTag || `OBJ_0${idx + 1}` }
      )
    : (project.objectives && project.objectives.length > 0
      ? project.objectives.map((obj, idx) => ({
          title: `Objective 0${idx + 1}`,
          description: obj,
          targetTag: `OBJ_0${idx + 1}`,
        }))
      : []);

  // Section 3: Features & Showcase
  const coreFeatures =
    project.desktopMobileFeatures ||
    (project.features && project.features.length > 0
      ? project.features.map((f, i) => ({
          title: f.title,
          description: f.description,
          badge: f.badge || `FEATURE_0${i + 1}`,
          metric: (f as any).metric || "",
        }))
      : []);

  const interfaceShowcase =
    project.desktopMobileInterfaceShowcase ||
    (projectImages.length > 0
      ? projectImages.map((img) => ({
          imageUrl: img,
        }))
      : []);

  const activeShowcaseItem =
    interfaceShowcase[activeImageIndex] ||
    interfaceShowcase[0] || {
      imageUrl: project.imageUrl || "",
    };

  const userFlow: {
    summary: string;
    steps: {
      step: string;
      title: string;
      description: string;
      actorOrNode?: string;
    }[];
  } = (project.desktopMobileUserFlow || project.userFlow) ? (
    Array.isArray(project.desktopMobileUserFlow || project.userFlow)
      ? {
          summary: "End-to-End Application Execution Flow",
          steps: ((project.desktopMobileUserFlow || project.userFlow) as any[]).map((step: any, idx: number) => ({
            step: step.step || `STEP 0${idx + 1}`,
            title: step.title || step.step || "",
            description: step.description || step.detail || "",
            actorOrNode: step.actorOrNode || step.screenOrAction || `NODE_0${idx + 1}`,
          })),
        }
      : (project.desktopMobileUserFlow || project.userFlow) as any
  ) : (project.pipelineSteps && project.pipelineSteps.length > 0
      ? {
          summary: "Pipeline Execution Flow",
          steps: project.pipelineSteps.map((step, idx) => ({
            step: `STEP 0${idx + 1}`,
            title: step.step,
            description: step.detail,
            actorOrNode: step.latencyOrMetric || `ACTION_0${idx + 1}`,
          })),
        }
      : {
          summary: "End-to-end user navigation and asynchronous client runtime flow.",
          steps: [],
        });

  // Section 4: Architecture & Tech Stack
  const explicitTech = project.desktopMobileTechStack;
  const rawTech = project.techStack || [];

  // Section 4: Tech Stack (Unified Flat)
  const allDesktopMobileTechStack = useMemo(() => {
    return [
      ...(explicitTech?.programmingLanguages || []).map((t: any) => t.name),
      ...(explicitTech?.frameworksAndLibraries || []).map((t: any) => t.name),
      ...(explicitTech?.databaseAndStorage || []).map((t: any) => t.name),
      ...(explicitTech?.testingAndBuildTools || []).map((t: any) => t.name),
      ...(project.techStack || []),
    ];
  }, [explicitTech, project.techStack]);

  const systemArchitecture =
    project.desktopMobileArchitecture ||
    (project.systemArchitecture
      ? {
          summary: project.systemArchitecture.summary,
          layers: (project.systemArchitecture.layers || []).map((l) => ({
            name: l.name,
            tech: l.components ? l.components.join(" + ") : l.name,
            role: l.role,
            components: l.components || [],
          })),
        }
      : {
          summary: project.architectureSummary || "",
          layers: [],
        });

  const dataManagementList: {
    title: string;
    description: string;
    badge?: string;
  }[] = Array.isArray(project.desktopMobileDataManagement)
    ? project.desktopMobileDataManagement
    : project.desktopMobileDataManagement
    ? [
        {
          title: "Storage Engine & Persistence",
          description: (project.desktopMobileDataManagement as any).storageType || "Local In-Memory Cache",
          badge: "STORAGE",
        },
        {
          title: "State Management Architecture",
          description: (project.desktopMobileDataManagement as any).stateEngine || "Reactive State Machine",
          badge: "STATE",
        },
        {
          title: "Offline & Synchronization Strategy",
          description: (project.desktopMobileDataManagement as any).offlineSyncStrategy || "Offline-First Execution",
          badge: "OFFLINE",
        },
        {
          title: "In-Memory Caching Mechanism",
          description: (project.desktopMobileDataManagement as any).cachingMechanism || "In-memory circular buffer",
          badge: "CACHE",
        },
      ]
    : [];

  const platformImplementationList: {
    title: string;
    description: string;
    badge?: string;
  }[] = Array.isArray(project.desktopMobilePlatformImplementation)
    ? (project.desktopMobilePlatformImplementation as any[]).map((pi: any, idx: number) => ({
        title: pi.title || pi.platform || `Platform Target 0${idx + 1}`,
        description: pi.description || pi.integrationRole || pi.nativeTech || "",
        badge: pi.badge || (pi.platform ? pi.platform.split(" ")[0].toUpperCase() : `TARGET_0${idx + 1}`),
      }))
    : [];

  // Section 5: Distribution & Project Resources
  const repoUrl = project.repoUrl || "";
  const isPublicRepo = Boolean(repoUrl && repoUrl.trim().length > 0);

  const distribution = {
    version: "v1.0.0-RELEASE",
    releaseNotes: "Production release binary compiled with ahead-of-time optimizations and native OS bindings.",
    targetOs: isMobile ? "Android 14+ / iOS 17+" : "Windows 11 / 10 & macOS",
    packageType: isMobile ? "APK / iOS App Bundle" : "Standalone Binary (.exe)",
    fileSize: isMobile ? "32 MB" : "68 MB",
    packagingFormat: isMobile ? "APK / iOS App Bundle" : "Standalone Binary (.exe)",
    binarySize: isMobile ? "32 MB" : "68 MB",
    distributionChannel: "GitHub Releases & Direct Binary Download",
    targetArchitecture: "Universal Cross-Platform",
    updateMechanism: "Zero-telemetry manual updates",
    ...project.desktopMobileDistribution,
  };

  const documentation = project.desktopMobileDocumentation || {
    title: "Application Technical Specification",
    description: "",
    status: "DOCS // VERIFIED",
    specs: [],
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* =========================================================================
          SECTION 1 — [ 01 // CLIENT CONSOLE & NATIVE OVERVIEW ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Ambient Sci-Fi Amber/Yellow Glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-transparent opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
              [ 01 // CLIENT CONSOLE & NATIVE OVERVIEW ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/15 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
              {isMobile ? (
                <Smartphone className="h-3 w-3 text-amber-400" />
              ) : (
                <Monitor className="h-3 w-3 text-amber-400" />
              )}
              {projectInfo.applicationType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/15 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
              <HardDrive className="h-3 w-3 text-amber-400" />
              {projectInfo.targetPlatform}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {/* Terminal Title Bar */}
            <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-mono text-amber-300">
              <span className="flex items-center gap-2 text-amber-200">
                <Terminal className="h-3.5 w-3.5 text-amber-400" />
                {project.title}
              </span>
              <span className="text-[10px] text-amber-400/80">SYS.VIEWPORT</span>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-amber-400/25 bg-[#080B14]/85 p-5 sm:p-6 text-slate-300 shadow-inner">
              <div>
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-amber-400/30 bg-black/60 shadow-lg">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-amber-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-amber-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-amber-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-amber-400/80" />

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
              <div className="mt-auto pt-4 border-t border-amber-500/20 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                  <Zap className="h-3 w-3 text-amber-400" />
                  Decoupled Async Concurrency
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                  <ShieldCheck className="h-3 w-3 text-amber-400" />
                  Zero-Telemetry Air-Gapped
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-200">
                  <Cpu className="h-3 w-3 text-amber-400" />
                  Multi-Core Hardware Saturation
                </span>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Native Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-amber-400/30 bg-[#080B14]/85 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-amber-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-amber-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-amber-400/80 tracking-wider">System Classification</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Box className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectType || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-amber-400/80 tracking-wider">Operating Environment</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Globe className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{String(telemetry.targetPlatform || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-amber-400/80 tracking-wider">Domain Focus</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Layers className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{String(telemetry.primaryDomain || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-amber-400/80 tracking-wider">Engineering Pipeline</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Workflow className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{String(telemetry.architecturePipeline || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-amber-400/80 tracking-wider">Testing & Audit</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{String(telemetry.testingAndAudit || "Passed").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-amber-400/80 tracking-wider">Project Status</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
                    <span className="truncate">{String(telemetry.projectStatus || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase text-amber-400/80 tracking-wider">Project Year</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>{String(telemetry.projectYear || "").slice(0, 50)}</span>
                  </dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  isPublicRepo
                    ? "border-amber-400/35 bg-[#080B14]/90 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-amber-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-amber-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-amber-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-amber-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-300">
                      {isPublicRepo ? (
                        <FolderGit2 className="h-3.5 w-3.5 text-amber-400" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 text-slate-400" />
                      )}
                      <span className="truncate">
                        {isPublicRepo ? "GITHUB REPOSITORY" : "PRIVATE REPOSITORY"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">ACCESS CLEARANCE:</span>
                      <span className={isPublicRepo ? "text-amber-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {isPublicRepo ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / PRIVATE"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SOURCE GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">{isPublicRepo ? "Main Branch" : "Personal Archive"}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">LICENSE:</span>
                      <span className={isPublicRepo ? "text-amber-400 font-semibold text-[11px]" : "text-amber-400/80 font-semibold text-[11px]"}>
                        {isPublicRepo ? (project.license || "MIT License") : "Proprietary Rights"}
                      </span>
                    </div>
                  </div>
                </div>

                {isPublicRepo && repoUrl ? (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onTriggerPulse?.()}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border border-amber-300/50 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 px-4 py-2.5 font-mono text-xs font-bold text-slate-950 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.01]"
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

            <div className="mt-5 pt-3 border-t border-amber-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-amber-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — [ 02 // PROBLEM LANDSCAPE & SYSTEM OBJECTIVES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Ambient Sci-Fi Amber/Yellow Glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-transparent opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        {/* Section Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
              [ 02 // PROBLEM LANDSCAPE & SYSTEM OBJECTIVES ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-amber-400/80">
            ROOT_CAUSE // SPECIFICATION_MATRIX
          </span>
        </div>

        {/* Top: Project Background Terminal */}
        <div className="relative z-10 mb-8 rounded-xl border border-amber-400/25 bg-[#080B14]/85 p-5 sm:p-6 shadow-inner">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-3">
            <Info className="h-4 w-4 text-amber-400" />
            <span className="font-bold uppercase tracking-wider">
              Project Context & Background Genesis
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-sans">
            {projectBackground.length > 1000
              ? `${projectBackground.slice(0, 1000).trim()}...`
              : projectBackground}
          </p>
        </div>

        {/* Bottom Split Matrix: Problem Statements vs Objectives */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: Problem Statements */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-500/25 pb-2.5 text-amber-400 font-mono text-xs uppercase tracking-wider">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              <span>Target Constraints & Bottlenecks</span>
            </div>

            <div className="space-y-3.5">
              {problemStatements.map((prob, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 transition-all hover:border-amber-400/50 hover:bg-amber-400/10"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {prob.title}
                    </h4>
                    {prob.issueCode && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-400/40 bg-amber-400/15 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                        {prob.issueCode}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {prob.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Project Objectives */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-500/25 pb-2.5 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span>Architectural Objectives & Targets</span>
            </div>

            <div className="space-y-3.5">
              {projectObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 transition-all hover:border-amber-400/50 hover:bg-amber-400/10"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      {obj.title}
                    </h4>
                    {obj.targetTag && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-400/40 bg-amber-400/15 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                        {obj.targetTag}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {obj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — [ 03 // CORE CAPABILITIES & INTERACTION FLOW ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Ambient Sci-Fi Amber/Yellow Glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-transparent opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
              [ 03 // CORE CAPABILITIES & INTERACTION FLOW ]
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-amber-300">
            <span>
              STAGE {activeImageIndex + 1} OF {interfaceShowcase.length}
            </span>
          </div>
        </div>

        {/* Top: Device Viewport Stage */}
        <div className="relative z-10 mb-8 rounded-2xl border border-amber-400/30 bg-black/60 p-4 sm:p-6 shadow-[0_0_40px_rgba(245,158,11,0.12)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-bold text-amber-300">
                CLIENT_VIEWPORT // INTERFACE_STAGE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">
                FRAME {String(activeImageIndex + 1).padStart(2, "0")} / {String(interfaceShowcase.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Active Viewport Image Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#070913] flex items-center justify-center group">
            {/* Optical HUD Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-amber-400/80" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-amber-400/80" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-amber-400/80" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-amber-400/80" />
            {currentActiveImage ? (
              <Image
                src={currentActiveImage}
                alt={`${project.title} Interface Viewport`}
                fill
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center text-slate-500">
                <Monitor className="h-12 w-12 text-amber-500/50 mb-2" />
                <p className="font-mono text-xs">NO VIEWPORT ARTIFACT LINKED</p>
              </div>
            )}

            {/* Prev/Next Navigation Overlays */}
            {interfaceShowcase.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) =>
                        (prev - 1 + interfaceShowcase.length) %
                        interfaceShowcase.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-amber-400/40 bg-black/70 p-2.5 text-amber-300 hover:bg-amber-400 hover:text-black backdrop-blur-md transition-all shadow-lg z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev + 1) % interfaceShowcase.length
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-amber-400/40 bg-black/70 p-2.5 text-amber-300 hover:bg-amber-400 hover:text-black backdrop-blur-md transition-all shadow-lg z-20"
                  aria-label="Next image"
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
                    activeImageIndex === idx
                      ? "border-amber-400 ring-2 ring-amber-400/40 scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={`Interface Viewport 0${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.2 font-mono text-[9px] text-amber-300">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Split: Core Features (Left) vs User Flow & Interaction (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (6/12): Core Features */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-500/25 pb-2.5 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Core Application Capabilities</span>
            </div>

            <div className="space-y-3">
              {coreFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 transition-all hover:border-amber-400/50 hover:bg-amber-400/10"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {feat.title}
                    </h4>
                    {feat.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-400/40 bg-amber-400/15 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (6/12): User Flow & Interaction Pipeline */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-amber-500/25 pb-2.5 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-amber-400" />
                <span>User Interaction & Execution Flow</span>
              </div>
              <span className="text-[10px] text-amber-400/80">PIPELINE_FLOW</span>
            </div>

            <div className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4">
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                {userFlow.summary}
              </p>
            </div>

            <div className="space-y-3">
              {userFlow.steps.map((stepItem, idx) => {
                const digitsMatch = String(stepItem.step || "").match(/\d+/);
                const stepNum = digitsMatch
                  ? digitsMatch[0].padStart(2, "0")
                  : String(idx + 1).padStart(2, "0");

                return (
                  <div
                    key={idx}
                    className="relative flex items-start gap-3.5 rounded-xl border border-amber-400/25 bg-[#080B14]/85 p-4 transition-all hover:border-amber-400/50 hover:bg-amber-400/10"
                  >
                    <div className="mt-0.5 flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-lg border border-amber-400/40 bg-amber-500/15 font-mono text-xs font-bold text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                      {stepNum}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-xs sm:text-sm text-slate-100">
                          {stepItem.title}
                        </h4>
                        {stepItem.actorOrNode && (
                          <span className="flex-shrink-0 font-mono text-[10px] uppercase text-amber-300 border border-amber-400/40 bg-amber-400/15 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                            {stepItem.actorOrNode}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — [ 04 // DESKTOP & MOBILE RUNTIME ECOSYSTEM ]
          ========================================================================= */}
      <CyberTechStackSection
        sectionNumber="04"
        sectionTitle="[ 04 // DESKTOP & MOBILE RUNTIME ECOSYSTEM ]"
        techStack={allDesktopMobileTechStack}
        accentColor="amber"
        onTriggerPulse={onTriggerPulse}
      />

      {/* =========================================================================
          SECTION 5 — [ 05 // CLIENT ARCHITECTURE & PLATFORM INTEGRATION ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Ambient Sci-Fi Amber/Yellow Glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-transparent opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
              [ 05 // CLIENT ARCHITECTURE & PLATFORM INTEGRATION ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-amber-400/80">
            BLUEPRINT // SYSTEM_TOPOLOGY
          </span>
        </div>

        {/* Top Tier: Application Architecture Blueprint & Layers */}
        <div className="relative z-10 mb-8 rounded-2xl border border-amber-400/25 bg-[#080B14]/85 p-5 sm:p-7 shadow-inner">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-3">
            <Layers className="h-4 w-4 text-amber-400" />
            <span className="font-bold uppercase tracking-wider">
              Application Architecture Blueprint
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-6">
            {systemArchitecture.summary}
          </p>

          {/* Layer Cards */}
          {systemArchitecture.layers && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {systemArchitecture.layers.map((layer, lIdx) => (
                <div
                  key={lIdx}
                  className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 transition-all hover:border-amber-400/50 hover:bg-amber-400/10"
                >
                  <div className="flex items-center justify-between border-b border-amber-500/20 pb-2 mb-2.5">
                    <span className="font-mono text-[10px] font-bold uppercase text-amber-400">
                      LAYER 0{lIdx + 1}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                  </div>
                  <h4 className="font-semibold text-sm text-slate-100 mb-1">
                    {layer.name}
                  </h4>
                  <p className="font-mono text-[11px] text-amber-300/80 mb-3">
                    {layer.role}
                  </p>
                  <div className="space-y-1.5 border-t border-white/5 pt-2.5">
                    {(layer.components || []).map((comp, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-1.5 text-xs text-slate-300 font-sans"
                      >
                        <ArrowRight className="h-3 w-3 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Split Matrix: Data Management & Integration vs Platform Implementation */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: Data Management & Integration */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-500/25 pb-2.5 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Database className="h-4 w-4 text-amber-400" />
              <span>Data Management & Storage Pipeline</span>
            </div>

            <div className="space-y-3.5">
              {dataManagementList.map((dm: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 transition-all hover:border-amber-400/40 hover:bg-amber-400/10"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {dm.title}
                    </h4>
                    {dm.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-400/40 bg-amber-400/15 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                        {dm.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {dm.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Platform Implementation */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-amber-500/25 pb-2.5 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Monitor className="h-4 w-4 text-amber-400" />
              <span>Native Platform Implementation</span>
            </div>

            <div className="space-y-3.5">
              {platformImplementationList.map((pi: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-amber-400/25 bg-amber-400/5 p-4 transition-all hover:border-amber-400/40 hover:bg-amber-400/10"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {pi.title}
                    </h4>
                    {pi.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-400/40 bg-amber-400/15 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                        {pi.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {pi.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* =========================================================================
          SECTION 6 — [ 06 // BINARY DISTRIBUTION & PROJECT RESOURCES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Ambient Sci-Fi Amber/Yellow Glow */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-transparent opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
              [ 06 // SOURCE VAULT & RUNTIME SPECIFICATION GATES ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-amber-400/80">
            FINAL_ACCESS // REPOSITORIES & RUNTIME SPECS
          </span>
        </div>

        {/* Symmetrical 3-Card Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* CARD 1 — Adaptive Repository Card (Universal Standard) */}
          <CyberRepoCard
            repoUrl={repoUrl}
            accentColor="amber"
            license={project.license}
            onTriggerPulse={onTriggerPulse}
          />

          {/* CARD 2 — Application Runtime & Target Specifications Card (Universal Spec Standard) */}
          <CyberSpecCard
            accentColor="amber"
            icon={Package}
            categoryTag="TARGET RUNTIME SPECS"
            statusBadge={distribution.version || "STABLE_RELEASE"}
            title="Native Client Architecture"
            description={distribution.releaseNotes}
            specs={[
              { label: "TARGET OS", value: distribution.targetOs, highlight: true },
              { label: "PACKAGE TYPE", value: distribution.packageType },
              ...(distribution.fileSize
                ? [{ label: "BINARY FOOTPRINT", value: distribution.fileSize }]
                : []),
              { label: "NETWORK EXPOSURE", value: "AIR-GAPPED OFFLINE" },
            ]}
            action={
              repoUrl
                ? {
                    label: "INSPECT RUNTIME SOURCE",
                    href: `${repoUrl}#readme`,
                  }
                : {
                    label: "OFFLINE_STANDALONE_VERIFIED",
                  }
            }
          />

          {/* CARD 3 — Documentation & Supporting Files Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-amber-400/30 bg-[#080B14]/85 p-5 sm:p-7 shadow-lg transition-all hover:border-amber-400/50 hover:shadow-[0_8px_32px_rgba(245,158,11,0.25)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-amber-400/70" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-amber-400/70" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-amber-400/70" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-amber-400/70" />

            <div>
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileText className="h-4 w-4 text-amber-400" />
                  <span>Technical Documentation</span>
                </div>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {documentation.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                {documentation.description}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                {documentation.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-slate-400">
                    <span className="uppercase text-[11px]">{spec.label}:</span>
                    <span className="text-slate-200 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {documentation.docsUrl ? (
              <a
                href={documentation.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTriggerPulse?.()}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/15 px-4 py-3 font-mono text-xs font-semibold text-amber-200 hover:bg-amber-400/25 hover:border-amber-300/80 hover:text-white transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)]"
              >
                <FileCode2 className="h-4 w-4 text-amber-400" />
                <span>View Architecture Manual</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/40 bg-amber-400/15 px-4 py-3 font-mono text-xs font-semibold text-amber-200 hover:bg-amber-400/25 hover:border-amber-300/80 hover:text-white transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)]"
              >
                <FileText className="h-4 w-4 text-amber-400" />
                <span>Inspect Technical Specs</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
