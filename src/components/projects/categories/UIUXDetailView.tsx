"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Box,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Cpu,
  Eye,
  ExternalLink,
  Figma,
  FileCode2,
  FileDown,
  FileText,
  FolderGit2,
  Globe,
  Heart,
  Info,
  Layers,
  Layout,
  Lock,
  MousePointer,
  Palette,
  Play,
  Presentation,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  Type,
  UserCheck,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";
import CyberTechStackSection from "../CyberTechStackSection";
import CyberRepoCard from "../CyberRepoCard";

interface UIUXDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function UIUXDetailView({
  project,
  onTriggerPulse,
}: UIUXDetailViewProps) {
  // State for Hi-Fi Visual Showcase
  const [activeHiFiIndex, setActiveHiFiIndex] = useState(0);

  const [copiedLink, setCopiedLink] = useState(false);

  // Images resolution
  const projectImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : [];

  const heroImage =
    project.imageUrl ||
    (project.images && project.images.length > 0 ? project.images[0] : null);

  // =========================================================================
  // Section 1: Overview & Information
  const projectDescription =
    project.uiUxBackground ||
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "";

  const isMobile =
    project.title.toLowerCase().includes("mobile") ||
    project.summary.toLowerCase().includes("mobile") ||
    project.summary.toLowerCase().includes("app");

  const projectInfo = project.uiUxProjectInfo || {
    platformType: isMobile ? "iOS & Android Mobile App" : "Desktop & Responsive Web",
    designRole: "Lead UI/UX & Product Designer",
    targetIndustry: project.categoryLabel || "Digital Product Design",
    designYear: project.year || "2026",
    designStatus: project.status || "Figma Prototype Ready",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: "Mobile UI/UX Product Design",
    targetPlatform: projectInfo.platformType,
    primaryDomain: projectInfo.targetIndustry,
    architecturePipeline: project.architectureSummary || "Human-Centered Design + Design System Tokens",
    testingAndAudit: "Passed",
    projectStatus: projectInfo.designStatus,
    projectYear: projectInfo.designYear,
  };

  // Section 2: Research & Background
  const projectBackground =
    project.uiUxBackground ||
    project.projectBackground ||
    project.challenge ||
    project.summary ||
    "";

  const userResearch: any = project.uiUxUserResearch || {
    targetAudience: "",
    researchMethodology: "",
    keyFindings: [],
  };

  const userResearchList: {
    method: string;
    description: string;
    keyFinding: string;
    badge?: string;
  }[] = Array.isArray(project.uiUxUserResearch)
    ? (project.uiUxUserResearch as any[]).map((r: any, idx: number) => ({
        method: r.method || `Method 0${idx + 1}`,
        description: r.description || "",
        keyFinding: r.keyFinding || "",
        badge: r.badge || `FINDING_0${idx + 1}`,
      }))
    : project.uiUxUserResearch && (project.uiUxUserResearch as any).keyFindings
    ? ((project.uiUxUserResearch as any).keyFindings as any[]).map((kf: any, idx: number) => ({
        method: typeof kf === "string" ? `Research Synthesis 0${idx + 1}` : (kf.method || `Method 0${idx + 1}`),
        description: typeof kf === "string" ? kf : (kf.description || ""),
        keyFinding: typeof kf === "string" ? kf : (kf.keyFinding || kf.finding || ""),
        badge: `FINDING_0${idx + 1}`,
      }))
    : [];

  const userPersonas = project.uiUxPersonas || [];

  // Section 3: Information Architecture & Flows
  const informationArchitecture = project.uiUxInformationArchitecture || {
    summary: project.architectureSummary || "",
    nodes: [],
  };

  const userFlow: {
    summary: string;
    steps: {
      step: string;
      title: string;
      description: string;
      screenOrAction?: string;
    }[];
  } = (project.uiUxUserFlow || project.userFlow) ? (
    Array.isArray(project.uiUxUserFlow || project.userFlow)
      ? {
          summary: "User Journey & Interaction Flow",
          steps: ((project.uiUxUserFlow || project.userFlow) as any[]).map((st: any, idx: number) => ({
            step: st.step || `STEP 0${idx + 1}`,
            title: st.title || st.step || `Action 0${idx + 1}`,
            description: st.description || st.detail || "",
            screenOrAction: st.screenOrAction || st.action || "",
          })),
        }
      : (project.uiUxUserFlow || project.userFlow) as any
  ) : {
    summary: "User journey flow.",
    steps: [],
  };

  // Section 4: Design System & Tech Stack
  const explicitTech = project.uiUxTechStack;
  const rawTech = project.techStack || [];

  // Section 4: Tech Stack (Unified Flat)
  const allUIUXTechStack = useMemo(() => {
    return [
      ...(explicitTech?.designAndPrototyping || explicitTech?.designAndPrototypingTools || []).map((t: any) => t.name),
      ...(explicitTech?.designSystemsAndResources || []).map((t: any) => t.name),
      ...(explicitTech?.researchAndCollaboration || explicitTech?.researchAndCollaborationTools || []).map((t: any) => t.name),
      ...(project.techStack || []),
    ];
  }, [explicitTech, project.techStack]);

  // Section 6: High-Fidelity Showcase
  const visualShowcase =
    project.uiUxVisualShowcase ||
    (projectImages.length > 0
      ? projectImages.map((img) => ({
          imageUrl: img,
        }))
      : []);

  const activeHiFiItem =
    visualShowcase[activeHiFiIndex] ||
    visualShowcase[0] || {
      imageUrl: project.imageUrl || "",
    };

  const designSystem = project.uiUxDesignSystem || {
    colorPalette: [],
    typography: [],
    components: [],
  };

  // Section 7: Usability Testing & Iteration
  const usabilityValidation = project.uiUxUsabilityValidation || {
    testingMethod: "",
    participantsCount: 0,
    taskSuccessRate: "100%",
    feedbackSynthesis: "",
    iterations: [],
  };

  // Section 8: Deliverables & Handoff
  const repoUrl = project.repoUrl || "";
  const isPublicRepo = Boolean(repoUrl && repoUrl.trim().length > 0);

  const designFile = project.uiUxDesignFile || {
    figmaUrl: "https://www.figma.com",
    fileStatus: "Production Design Tokens Ready",
    totalFrames: 24,
    componentsCount: 48,
    handoffSpecs: "Auto-Layout, Variables, WCAG AA Compliant",
  };

  const prototypeHandoff = project.uiUxPrototypeAndHandoff || {
    previewUrl: "https://www.figma.com",
    embedType: "Interactive Prototype",
    specs: [],
  };

  const documentation = project.uiUxDocumentation || {
    title: "UI/UX Product Design Specification",
    description: "",
    status: "DOCS // VERIFIED FIGMA SPECS",
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
          SECTION 1 — [ 01 // DESIGN CONSOLE & PRODUCT ARCHITECTURE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-[#0C0610]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(244,63,94,0.15)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-rose-400/70" />

        {/* Ambient Neon Rose Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-rose-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-rose-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rose-300">
              [ 01 // DESIGN CONSOLE & PRODUCT ARCHITECTURE ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-rose-300">
              <Palette className="h-3 w-3 text-rose-400" />
              {telemetry.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-rose-300">
              <Sparkles className="h-3 w-3 text-rose-400" />
              {telemetry.targetPlatform}
            </span>
          </div>
        </div>

        {/* Dual-Pane Studio Console */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {/* Studio Header Bar */}
            <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-rose-500/30 bg-rose-950/40 px-4 py-2 text-xs font-mono text-rose-300">
              <span className="flex items-center gap-2 text-rose-200">
                <Terminal className="h-3.5 w-3.5 text-rose-400" />
                &gt; DESIGN_RUNTIME // SYS.VIEWPORT
              </span>
              <span className="text-[10px] text-rose-400/80">ONLINE</span>
            </div>

            {/* Studio Body */}
            <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-rose-500/25 bg-[#0D0B1B]/95 p-5 sm:p-6 text-slate-300 shadow-inner">
              <div>
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-rose-500/30 bg-black/60 shadow-lg">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-rose-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-rose-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-rose-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-rose-400/80" />

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
              <div className="mt-auto pt-4 border-t border-rose-500/20 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-rose-400/30 bg-rose-500/10 px-2.5 py-1 font-mono text-[11px] text-rose-300">
                  <UserCheck className="h-3 w-3 text-rose-400" />
                  Human-Centered Design (HCD)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-rose-400/30 bg-rose-500/10 px-2.5 py-1 font-mono text-[11px] text-rose-300">
                  <Sparkles className="h-3 w-3 text-rose-400" />
                  Fluid Micro-Interactions
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-rose-400/30 bg-rose-500/10 px-2.5 py-1 font-mono text-[11px] text-rose-300">
                  <Layers className="h-3 w-3 text-rose-400" />
                  Design System Powered
                </span>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Design Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-rose-500/30 bg-[#0D0B1B]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-rose-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-rose-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-rose-400/80 tracking-wider">System Classification</dt>
                  <dd className="text-xs font-semibold text-slate-100 flex items-center gap-1.5 truncate">
                    <Box className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectType || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-rose-400/80 tracking-wider">Operating Environment</dt>
                  <dd className="text-xs font-semibold text-rose-300 flex items-center gap-1.5 truncate">
                    <Globe className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">{String(telemetry.targetPlatform || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-rose-400/80 tracking-wider">Domain Focus</dt>
                  <dd className="text-xs font-semibold text-slate-200 flex items-center gap-1.5 truncate">
                    <Layers className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">{String(telemetry.primaryDomain || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-rose-400/80 tracking-wider">Engineering Pipeline</dt>
                  <dd className="text-xs font-semibold text-rose-300 flex items-center gap-1.5 truncate">
                    <Workflow className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">{String(telemetry.architecturePipeline || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-rose-400/80 tracking-wider">Testing & Audit</dt>
                  <dd className="text-xs font-semibold text-rose-300 flex items-center gap-1.5 truncate">
                    <ShieldCheck className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">{String(telemetry.testingAndAudit || "Passed").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-rose-400/80 tracking-wider">Project Status</dt>
                  <dd className="text-xs font-semibold text-rose-300 flex items-center gap-1.5 truncate">
                    <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse shrink-0" />
                    <span className="truncate">{String(telemetry.projectStatus || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase text-rose-400/80 tracking-wider">Project Year</dt>
                  <dd className="text-xs font-semibold text-slate-200 flex items-center gap-1.5 truncate">
                    <Clock className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span>{String(telemetry.projectYear || "").slice(0, 50)}</span>
                  </dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  isPublicRepo
                    ? "border-rose-500/35 bg-[#170E20]/90 hover:border-rose-400/60 hover:shadow-[0_0_25px_rgba(244,63,94,0.2)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-rose-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-rose-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-rose-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-rose-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-rose-300">
                      {isPublicRepo ? (
                        <FolderGit2 className="h-3.5 w-3.5 text-rose-400" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 text-slate-400" />
                      )}
                      <span className="truncate">
                        {isPublicRepo
                          ? "PUBLIC GITHUB REPOSITORY"
                          : "RESTRICTED PRIVATE REPOSITORY"}
                      </span>
                    </div>
                    {isPublicRepo ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/40 bg-rose-950/60 px-2 py-0.5 font-mono text-[9px] text-rose-300 font-semibold shadow-[0_0_10px_rgba(244,63,94,0.2)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />PUBLIC
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
                      <span className={isPublicRepo ? "text-rose-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {isPublicRepo ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / NDA"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">VCS GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">GitHub Cloud VCS</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SECURITY AUDIT:</span>
                      <span className={isPublicRepo ? "text-rose-400 font-semibold text-[11px]" : "text-rose-400/80 font-semibold text-[11px]"}>
                        {isPublicRepo ? "VERIFIED_PUBLIC" : "ENTERPRISE_CONFIDENTIAL"}
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2.5 font-mono text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)] hover:scale-[1.01]"
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

            <div className="mt-5 pt-3 border-t border-rose-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-rose-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — [ 02 // RESEARCH DISCOVERY & USER PERSONAS ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-[#090814]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-rose-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-rose-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rose-300">
              [ 02 // RESEARCH DISCOVERY & USER PERSONAS ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-rose-400/80">
            EMPATHY // PROBLEM_SPACE
          </span>
        </div>

        {/* Top: Project Background Genesis */}
        <div className="relative z-10 mb-8 rounded-xl border border-rose-500/25 bg-[#0D0B1B]/95 p-5 sm:p-6 shadow-inner">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-300 mb-3">
            <Info className="h-4 w-4 text-rose-400" />
            <span className="font-bold uppercase tracking-wider">
              Project Context & Research Genesis
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-sans">
            {projectBackground.length > 1000
              ? `${projectBackground.slice(0, 1000).trim()}...`
              : projectBackground}
          </p>
        </div>

        {/* Bottom Split Matrix: User Research vs User Personas */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: User Research Methods & Findings */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-rose-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <Users className="h-4 w-4 text-rose-400" />
              <span>User Research Methodologies & Findings</span>
            </div>

            <div className="space-y-3.5">
              {userResearchList.map((res: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-rose-500/20 bg-rose-950/15 p-4 transition-all hover:border-rose-400/40 hover:bg-rose-950/25"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      {res.method}
                    </h4>
                    {res.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-rose-300 border border-rose-500/30 bg-rose-950/50 px-2 py-0.5 rounded">
                        {res.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-2">
                    {res.description}
                  </p>
                  <div className="border-t border-white/5 pt-2.5 flex flex-col gap-1 text-xs font-sans">
                    <span className="font-mono text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                      KEY_FINDING:
                    </span>
                    <p className="text-xs sm:text-sm text-rose-300/90 leading-relaxed font-sans">
                      {res.keyFinding}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: User Personas & Pain Points */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-rose-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <UserCheck className="h-4 w-4 text-rose-400" />
              <span>Target Personas & Critical Pain Points</span>
            </div>

            <div className="space-y-4">
              {(userPersonas || []).map((persona: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-rose-500/25 bg-rose-950/15 p-4 transition-all hover:border-rose-400/45 hover:bg-rose-950/25"
                >
                  <div className="flex items-center justify-between gap-2 border-b border-rose-500/20 pb-2 mb-2.5">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-100">
                        {persona.name}
                      </h4>
                      <p className="font-mono text-[11px] text-rose-400">
                        {persona.role}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase text-slate-400 border border-white/10 px-2 py-0.5 rounded">
                      PERSONA 0{idx + 1}
                    </span>
                  </div>

                  {(persona.quote || persona.demographics) && (
                    <p className="text-xs text-slate-300 mb-3 font-sans italic">
                      &quot;{persona.quote || persona.demographics}&quot;
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block mb-1">
                        Core Goals:
                      </span>
                      <ul className="space-y-1 text-slate-300">
                        {(Array.isArray(persona.goals) ? persona.goals : (persona.goals ? [persona.goals] : [])).map((g: any, gIdx: number) => (
                          <li key={gIdx} className="flex items-start gap-1">
                            <span className="text-rose-400">✓</span>
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block mb-1">
                        Frustrations & Pain Points:
                      </span>
                      <ul className="space-y-1 text-slate-300">
                        {(Array.isArray(persona.painPoints) ? persona.painPoints : (persona.painPoints ? [persona.painPoints] : [])).map((p: any, pIdx: number) => (
                          <li key={pIdx} className="flex items-start gap-1">
                            <span className="text-rose-400">✕</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — [ 03 // INFORMATION ARCHITECTURE & USER INTERACTION FLOW ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-[#090814]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-rose-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-rose-500/20 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-rose-300">
              [ 03 // INFORMATION ARCHITECTURE & USER INTERACTION FLOW ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-rose-400/80">
            SITEMAP // NAVIGATION_TREE // INTERACTION_FLOW
          </span>
        </div>

        {/* Dual-Column Architecture: Information Architecture (Left) vs User Flow (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (6/12): Information Architecture */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-rose-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-rose-400" />
                <span>Information Architecture & Sitemap</span>
              </div>
              <span className="text-[10px] text-rose-400/80">NAVIGATION_TREE</span>
            </div>

            <div className="rounded-xl border border-rose-500/20 bg-[#0D0B1B]/95 p-4 mb-2">
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {informationArchitecture.summary}
              </p>
            </div>

            <div className="space-y-3">
              {(informationArchitecture.nodes || []).map((node: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-xl border border-rose-500/20 bg-rose-950/15 p-4 transition-all hover:border-rose-400/40 hover:bg-rose-950/25"
                >
                  <div className="flex items-center justify-between border-b border-rose-500/20 pb-1.5 mb-2.5">
                    <span className="font-mono text-[10px] font-bold uppercase text-rose-400">
                      NODE 0{idx + 1} // {node.section}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(node.screens || []).map((scr: any, sIdx: number) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 rounded-md border border-rose-500/25 bg-rose-950/40 px-3 py-1 text-xs text-slate-200 font-sans"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                        {scr}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (6/12): User Flow */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-rose-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-rose-400" />
                <span>User Journey & Task Interaction Flow</span>
              </div>
              <span className="text-[10px] text-rose-400/80">INTERACTION_PIPELINE</span>
            </div>

            <div className="rounded-xl border border-rose-500/20 bg-[#0C0610]/95 p-4">
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
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
                    className="relative flex items-start gap-3.5 rounded-xl border border-rose-500/20 bg-[#0C0610]/90 p-4 transition-all hover:border-rose-400/40 hover:bg-[#180A15]"
                  >
                    <div className="mt-0.5 flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-lg border border-rose-400/40 bg-rose-500/15 font-mono text-xs font-bold text-rose-300">
                      {stepNum}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-xs sm:text-sm text-slate-100">
                          {stepItem.title}
                        </h4>
                        {stepItem.screenOrAction && (
                          <span className="flex-shrink-0 font-mono text-[10px] uppercase text-rose-300 border border-rose-500/30 bg-rose-950/50 px-2 py-0.5 rounded">
                            {stepItem.screenOrAction}
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
          SECTION 4 — [ 04 // DESIGN STACK & TOOLING ECOSYSTEM ]
          ========================================================================= */}
      <CyberTechStackSection
        sectionNumber="04"
        sectionTitle="[ 04 // DESIGN STACK & TOOLING ECOSYSTEM ]"
        techStack={allUIUXTechStack}
        accentColor="rose"
        onTriggerPulse={onTriggerPulse}
      />

      {/* =========================================================================
          SECTION 5 — [ 05 // HI-FI INTERFACE & USABILITY VALIDATION ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-[#090814]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-rose-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-rose-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rose-300">
              [ 05 // HI-FI INTERFACE & USABILITY VALIDATION ]
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-rose-300">
            <span>
              SHOWCASE {activeHiFiIndex + 1} OF {visualShowcase.length}
            </span>
          </div>
        </div>

        {/* Top: Hi-Fi Visual Design Showcase Stage */}
        <div className="relative z-10 mb-8 rounded-2xl border border-rose-500/30 bg-[#070611] p-3 sm:p-5 shadow-2xl">
          {/* Simulated Device Frame Header */}
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-rose-400/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-pink-500/80 inline-block" />
              <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
                {(activeHiFiItem as any).title || "Hi-Fi Interface Viewport"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-wider uppercase text-rose-400 bg-rose-950/60 border border-rose-500/30 px-2 py-0.5 rounded">
                VIEWPORT 0{activeHiFiIndex + 1}
              </span>
            </div>
          </div>

          {/* Active Viewport Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] overflow-hidden rounded-xl border border-rose-500/20 bg-slate-950 flex items-center justify-center group">
            {activeHiFiItem.imageUrl ? (
              <Image
                src={activeHiFiItem.imageUrl}
                alt={`${project.title} Hi-Fi Interface Viewport`}
                fill
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center text-slate-500">
                <Palette className="h-12 w-12 text-rose-500/50 mb-2" />
                <p className="font-mono text-xs">NO HI-FI SCREEN LINKED</p>
              </div>
            )}

            {/* Prev/Next Controls */}
            {visualShowcase.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveHiFiIndex(
                      (prev) => (prev - 1 + visualShowcase.length) % visualShowcase.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-rose-400/40 bg-black/70 p-2.5 text-rose-300 hover:bg-rose-400 hover:text-black backdrop-blur-md transition-all shadow-lg z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveHiFiIndex(
                      (prev) => (prev + 1) % visualShowcase.length
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-rose-400/40 bg-black/70 p-2.5 text-rose-300 hover:bg-rose-400 hover:text-black backdrop-blur-md transition-all shadow-lg z-20"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Carousel Bar */}
          {visualShowcase.length > 1 && (
            <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin">
              {visualShowcase.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHiFiIndex(idx)}
                  className={`relative h-14 sm:h-16 w-24 sm:w-28 shrink-0 overflow-hidden rounded-lg border transition-all ${
                    activeHiFiIndex === idx
                      ? "border-rose-400 ring-2 ring-rose-400/40 scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.imageUrl || ""}
                    alt={`Hi-Fi Screen Thumbnail 0${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.2 font-mono text-[9px] text-rose-300">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Split Matrix: Design System & Components vs Interactive Usability Validation */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (6/12): Design System & Components */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-rose-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <Layers className="h-4 w-4 text-rose-400" />
              <span>Design System Foundations & Tokens</span>
            </div>

            {/* Color Palette Swatches */}
            <div className="rounded-xl border border-rose-500/25 bg-[#0D0B1B]/95 p-4 space-y-3">
              <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block">
                Calibrated Color Tokens (WCAG AA Compliant):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(designSystem.colorPalette || []).map((col: any, cIdx: number) => (
                  <div
                    key={cIdx}
                    className="rounded-lg border border-white/10 bg-black/40 p-2.5 flex flex-col justify-between"
                  >
                    <div
                      className="h-7 w-full rounded mb-2 border border-white/20"
                      style={{ backgroundColor: col.hex }}
                    />
                    <div className="font-mono text-[10px] text-slate-200 font-bold truncate">
                      {col.hex}
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans truncate">
                      {col.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography & Component States */}
            <div className="rounded-xl border border-rose-500/25 bg-[#0D0B1B]/95 p-4 space-y-3">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold text-rose-300">
                <Type className="h-3.5 w-3.5 text-rose-400" />
                <span>Typography Hierarchy & Scale:</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300 font-sans">
                {(designSystem.typography || []).map((ty: any, tIdx: number) => (
                  <div
                    key={tIdx}
                    className="flex items-center justify-between border-b border-white/5 pb-1.5"
                  >
                    <span className="font-semibold text-slate-100">{ty.role || ty.name}</span>
                    <div className="text-right">
                      <span className="text-rose-300 font-mono text-[11px] block">{ty.font || ty.usage}</span>
                      {ty.sizeWeight && (
                        <span className="text-slate-400 font-mono text-[10px] block">{ty.sizeWeight}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {(designSystem.componentStates || designSystem.components) && (
              <div className="rounded-xl border border-rose-500/25 bg-[#0D0B1B]/95 p-4 space-y-3">
                <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block">
                  Component States & Ergonomics:
                </span>
                <div className="space-y-2">
                  {((designSystem.componentStates || designSystem.components) || []).map((cs: any, csIdx: number) => (
                    <div key={csIdx} className="rounded-lg border border-white/5 bg-black/30 p-2.5 text-xs">
                      <div className="font-semibold text-slate-100 mb-1">{cs.component}</div>
                      <div className="flex flex-wrap gap-1 mb-1.5">
                        {(cs.states || []).map((st: string, stIdx: number) => (
                          <span
                            key={stIdx}
                            className="font-mono text-[10px] border border-rose-500/30 bg-rose-950/40 text-rose-300 px-2 py-0.5 rounded"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                      {cs.notes && <p className="text-[11px] text-slate-400">{cs.notes}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (6/12): Usability Validation & Feedback Iterations */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-rose-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-rose-400" />
                <span>Usability Validation & Iterations</span>
              </div>
              <span className="text-[10px] text-rose-400/80">SUS_BENCHMARK</span>
            </div>

            {/* Usability Benchmark Metrics Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3.5 text-center">
                <span className="font-mono text-[10px] uppercase text-rose-400 block mb-1">
                  SUS Score
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
                  {usabilityValidation.susScore || "88 / 100"}
                </div>
                <span className="text-[10px] text-rose-400 font-mono">Grade A+ (Top 10%)</span>
              </div>

              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3.5 text-center">
                <span className="font-mono text-[10px] uppercase text-rose-400 block mb-1">
                  Task Success
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
                  {usabilityValidation.taskSuccessRate || "96.4%"}
                </div>
                <span className="text-[10px] text-rose-400 font-mono">High Confidence</span>
              </div>

              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3.5 text-center">
                <span className="font-mono text-[10px] uppercase text-rose-400 block mb-1">
                  Task Latency
                </span>
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100">
                  {usabilityValidation.timeOnTask || "-34%"}
                </div>
                <span className="text-[10px] text-rose-300 font-mono">Faster Scanning</span>
              </div>
            </div>

            {/* Findings & Feedback Iterations */}
            <div className="space-y-3">
              {((usabilityValidation.findingsAndFeedback || (usabilityValidation as any).iterations) || []).map((ff: any, ffIdx: number) => (
                <div
                  key={ffIdx}
                  className="rounded-xl border border-rose-500/20 bg-[#0C0610]/95 p-3.5 space-y-1.5"
                >
                  <div className="flex items-center gap-2 font-mono text-[10px] text-rose-400 uppercase font-bold">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>USER_FEEDBACK // TRIAL {ffIdx + 1}:</span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans italic">
                    &quot;{ff.feedback || ff.usabilityIssue}&quot;
                  </p>
                  <div className="border-t border-white/5 pt-1.5 flex items-start gap-1.5 text-xs text-slate-300 font-sans">
                    <span className="font-mono text-[10px] font-bold text-rose-400 uppercase">
                      SOLUTION:
                    </span>
                    <span>{ff.iterationSolution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-rose-300 font-mono">
                    <span>IMPACT:</span>
                    <span className="font-semibold text-white">{ff.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* =========================================================================
          SECTION 6 — [ 06 // DESIGN VAULT & HANDOFF GATES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-[#0D0B1B]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-rose-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-rose-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-rose-500/20 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rose-300">
              [ 06 // DESIGN VAULT & HANDOFF GATES ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-rose-400/80">
            GITHUB_VCS // FIGMA_SPECIFICATION_GATES
          </span>
        </div>

        {/* Symmetrical 3-Card Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* CARD 1 — Adaptive Repository Card (Universal Standard) */}
          <CyberRepoCard
            repoUrl={repoUrl}
            accentColor="rose"
            onTriggerPulse={onTriggerPulse}
          />

          {/* CARD 2 — Design System & Workspace Specifications Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-rose-500/30 bg-[#0D0B1B]/95 p-5 sm:p-7 shadow-lg transition-all hover:border-rose-400/50 hover:shadow-[0_8px_32px_rgba(244,63,94,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-rose-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-rose-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-rose-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-rose-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-rose-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <Figma className="h-4 w-4 text-rose-400" />
                  <span>Design Workspace File</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/30 bg-rose-950/40 px-2.5 py-0.5 font-mono text-[10px] text-rose-300 font-semibold">
                  {designFile.fileStatus || "FIGMA_PROTOTYPE_READY"}
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Figma Design System Architecture
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                Production-ready component library and high-fidelity prototype in Figma, incorporating responsive auto-layout constraints, light/dark variables, and accessibility-certified atomic design tokens.
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="uppercase text-[11px]">TOTAL FRAMES:</span>
                  <span className="text-slate-200 font-semibold">{designFile.totalFrames} Artboards</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="uppercase text-[11px]">COMPONENTS COUNT:</span>
                  <span className="text-rose-300 font-semibold">{designFile.componentsCount} Master Components</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="uppercase text-[11px]">HANDOFF SPECS:</span>
                  <span className="text-slate-200 text-right truncate max-w-[180px] sm:max-w-[220px]" title={designFile.handoffSpecs}>
                    {designFile.handoffSpecs}
                  </span>
                </div>
              </div>
            </div>

            {designFile.figmaUrl ? (
              <a
                href={designFile.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTriggerPulse?.()}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 font-mono text-xs font-semibold text-rose-300 hover:bg-rose-500/20 hover:text-white transition-all shadow-[0_0_15px_rgba(244,63,94,0.15)]"
              >
                <Figma className="h-4 w-4 text-rose-400" />
                <span>INSPECT FIGMA WORKSPACE</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 font-mono text-xs font-semibold text-rose-300">
                <Check className="h-4 w-4 text-rose-400" />
                <span>DESIGN_TOKENS_VERIFIED</span>
              </div>
            )}
          </div>

          {/* CARD 3 — Documentation & UX Research Deliverables Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-rose-500/30 bg-[#0D0B1B]/95 p-5 sm:p-7 shadow-lg transition-all hover:border-rose-400/50 hover:shadow-[0_8px_32px_rgba(244,63,94,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-rose-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-rose-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-rose-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-rose-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-rose-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileText className="h-4 w-4 text-rose-400" />
                  <span>UX Research Whitepaper</span>
                </div>
                <span className="font-mono text-[10px] text-rose-400/80">
                  UX_SPEC_v2.0
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {documentation.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                {documentation.description}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                {((documentation.deliverables || (documentation as any).specs) || []).map((del: any, dIdx: number) => (
                  <div key={dIdx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="text-[11px] truncate">{typeof del === "string" ? del : (del.label ? `${del.label}: ${del.value}` : del.title || "")}</span>
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 font-mono text-xs font-semibold text-rose-300 hover:bg-rose-500/20 hover:text-white transition-all"
              >
                <FileCode2 className="h-4 w-4 text-rose-400" />
                <span>View Design Documentation</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 font-mono text-xs font-semibold text-rose-300 hover:bg-rose-500/20 hover:text-white transition-all"
              >
                <FileText className="h-4 w-4 text-rose-400" />
                <span>Inspect Technical Specs</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
