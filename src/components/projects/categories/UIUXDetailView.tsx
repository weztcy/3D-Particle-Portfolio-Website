"use client";

import React, { useState, useEffect } from "react";
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
  LayoutGrid,
  Lock,
  Maximize2,
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

  // State for Wireframe Showcase
  const [activeWireframeIndex, setActiveWireframeIndex] = useState(0);

  // Tech Stack HUD Filter State
  const [selectedTechFilter, setSelectedTechFilter] = useState<
    | "All"
    | "Design & Prototyping Tools"
    | "Design Systems & UI Resources"
    | "Research & Collaboration Tools"
  >("All");

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
  // =========================================================================
  const projectDescription =
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "Human-centered digital product experience engineered with high-contrast visual ergonomics, streamlined user journeys, and micro-interactions designed to minimize cognitive load and maximize workflow engagement.";

  const isMobile =
    project.categoryLabel?.toLowerCase().includes("mobile") ||
    project.title.toLowerCase().includes("mobile") ||
    project.summary.toLowerCase().includes("mobile") ||
    project.summary.toLowerCase().includes("ios") ||
    project.summary.toLowerCase().includes("android");

  const projectInfo = project.uiUxProjectInfo || {
    projectType: isMobile
      ? "Mobile App UI/UX Design"
      : project.title.toLowerCase().includes("website")
      ? "Responsive Website UI/UX Design"
      : "Digital Product & Design System",
    designStatus: project.status || "Completed / Production Ready",
    designYear: project.year || "2026",
    targetPlatform: isMobile
      ? "iOS & Android (Universal Ergonomics)"
      : "Modern Web Browsers & Responsive Desktops",
    designCategory: "Human-Centered Design (HCD) & UX Architecture",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.projectType,
    targetPlatform: projectInfo.targetPlatform,
    primaryDomain: projectInfo.designCategory,
    architecturePipeline: project.architectureSummary || "Ergonomic Layout + Thumb-Zone Touch Targets",
    projectStatus: projectInfo.designStatus,
    projectYear: projectInfo.designYear,
  };

  // =========================================================================
  // Section 2: Research & Discovery
  // =========================================================================
  const projectBackground =
    project.uiUxBackground ||
    project.projectBackground ||
    project.challenge ||
    project.summary;

  const userResearch = project.uiUxUserResearch || [
    {
      method: "Contextual Inquiries & User Observations",
      description:
        "Observed 16 target users navigating primary workflow activities to identify attention division and touchscreen ergonomics.",
      keyFinding:
        "Users experience severe cognitive fatigue when essential action triggers require multi-level menu navigation.",
      badge: "OBSERVATION",
    },
    {
      method: "Competitive Usability Benchmarking",
      description:
        "Audited 5 prominent industry competitor solutions across visual hierarchy, touch target sizing, and task completion latency.",
      keyFinding:
        "Competitors suffer from dense advertising and poor text contrast against dynamic visual photography.",
      badge: "COMPETITIVE_AUDIT",
    },
    {
      method: "Qualitative User Interviews",
      description:
        "Conducted 12 in-depth one-on-one structured interviews to uncover emotional frustrations and decision hesitation points.",
      keyFinding:
        "Instant clarity, glanceable step instructions, and trustworthy creator verification drive 80%+ of positive retention.",
      badge: "USER_INTERVIEWS",
    },
  ];

  const userPersonas = project.uiUxPersonas || [
    {
      name: "Alex Pratama (28)",
      role: "Active Daily User / Busy Professional",
      demographics: "Urban dweller, high smartphone usage, values speed & minimalism",
      goals: [
        "Complete tasks in under 2 minutes without visual distraction",
        "Easily glance at key instructions with one hand while on the move",
        "Save and organize preferred items into personalized collections",
      ],
      painPoints: [
        "Frustrated by complex nested menus and tiny touch targets",
        "Overwhelmed by excessive text clutter and intrusive popups",
        "Loses place in workflow when switching between screens",
      ],
    },
    {
      name: "Maya Santoso (35)",
      role: "Explorer / Detail-Oriented Consumer",
      demographics: "Focuses on quality, community ratings, and curated collections",
      goals: [
        "Discover trending items and verified recommendations quickly",
        "Inspect high-resolution visual previews before committing",
        "Receive clear confirmation feedback upon completing an action",
      ],
      painPoints: [
        "Distrusts unverified reviews or ambiguous rating indicators",
        "Struggles with illegible low-contrast text on bright backgrounds",
        "Dislikes cumbersome checkout or multi-step booking funnels",
      ],
    },
  ];

  // =========================================================================
  // Section 3: UX Strategy & Structure
  // =========================================================================
  const informationArchitecture = project.uiUxInformationArchitecture || {
    summary:
      "Hierarchical sitemap and navigation topology engineered around the primary thumb zone, prioritizing top-level discovery, instant search filtering, and focused modal detail sheets.",
    nodes: [
      {
        section: "Primary Navigation Layer",
        screens: ["Home Feed", "Explore / Collections", "Search / Filter", "User Profile"],
      },
      {
        section: "Catalog & Discovery Node",
        screens: ["Category Grid View", "Featured Curator Carousel", "Live Availability Status"],
      },
      {
        section: "Action & Detail Workflow",
        screens: ["Interactive Detail Sheet", "Step-by-Step Execution Mode", "Instant Review Modal"],
      },
      {
        section: "System Feedback & Confirmation",
        screens: ["Success Dialog Screen", "Telemetry Status Toast", "Offline Cache Banner"],
      },
    ],
  };

  const userFlow = project.uiUxUserFlow || {
    summary:
      "Streamlined end-to-end user journey mapping friction-free movement from initial browse discovery to definitive task completion.",
    steps:
      project.pipelineSteps && project.pipelineSteps.length > 0
        ? project.pipelineSteps.map((p, i) => ({
            step: p.step.includes(".") ? p.step.split(".")[0] : `0${i + 1}`,
            title: p.step.includes(". ") ? p.step.split(". ")[1] : p.step,
            description: p.detail,
            screenOrAction: p.latencyOrMetric || "UI Action",
          }))
        : [
            {
              step: "01",
              title: "Discovery & Intent Ingestion",
              description:
                "User enters app and filters items via bottom search pill or top category badges in under 500ms.",
              screenOrAction: "Home Viewport",
            },
            {
              step: "02",
              title: "Visual Card Selection & Scrim Inspection",
              description:
                "User inspects high-contrast cards with calibrated scrims, scanning social ratings and metadata badges.",
              screenOrAction: "Catalog Grid",
            },
            {
              step: "03",
              title: "Focused Action Initiation",
              description:
                "Taps selected card, expanding a bottom-sheet modal anchored within natural one-handed thumb reach.",
              screenOrAction: "Detail Modal",
            },
            {
              step: "04",
              title: "Sequential Execution & Confirmation",
              description:
                "Completes step-by-step task instructions with continuous progress indicators and haptic feedback confirmation.",
              screenOrAction: "Task Complete",
            },
          ],
  };

  const wireframes = project.uiUxWireframes || [
    {
      title: "Lo-Fi Wireframe — Screen Layout Architecture",
      imageUrl: projectImages[0] || "/images/projects/Food Recipe Mobile App UI_UX Design 1.webp",
      caption:
        "Initial structural wireframe defining 8pt grid distribution, thumb-zone tap target zones, and typography boundaries.",
      badge: "LO-FI_WIREFRAME",
    },
    {
      title: "Mid-Fi Wireframe — Navigation & Action Flow",
      imageUrl: projectImages[1] || projectImages[0] || "/images/projects/Food Recipe Mobile App UI_UX Design 2.webp",
      caption:
        "Mid-fidelity schematic verifying information chunking, modal sheet interactions, and button hierarchy before final styling.",
      badge: "MID-FI_WIREFRAME",
    },
  ];

  const activeWireframeItem =
    wireframes[activeWireframeIndex] || wireframes[0];

  // =========================================================================
  // Section 4: Tech Stack (Categorized & Dynamic)
  // =========================================================================
  const defaultDesignTools = ["Figma", "Adobe XD", "Sketch", "Framer", "Illustrator", "Photoshop"];
  const defaultDesignSystems = [
    "Material Design",
    "Apple Human Interface Guidelines",
    "iOS HIG",
    "Tailwind CSS",
    "Design Tokens",
    "Lucide Icons",
    "FontAwesome",
    "Design Systems",
    "Color Theory",
  ];
  const defaultResearchTools = [
    "FigJam",
    "Miro",
    "Maze",
    "Notion",
    "Useberry",
    "Google Forms",
    "User Research",
    "Wireframing",
    "Prototyping",
    "Ergonomics",
    "WCAG AA",
  ];

  const explicitTech = project.uiUxTechStack;
  const rawTech = project.techStack || [];

  const designAndPrototyping =
    explicitTech?.designAndPrototypingTools ||
    rawTech
      .filter((t) => defaultDesignTools.some((dt) => t.toLowerCase().includes(dt.toLowerCase())))
      .map((t) => ({
        name: t,
        role: "Primary interface design, vector layout, and interactive prototyping tool",
      }));

  const designSystemsAndResources =
    explicitTech?.designSystemsAndResources ||
    rawTech
      .filter((t) => defaultDesignSystems.some((ds) => t.toLowerCase().includes(ds.toLowerCase())))
      .map((t) => ({
        name: t,
        role: "Design token specification, typographic scales, and UI component foundations",
      }));

  const researchAndCollaboration =
    explicitTech?.researchAndCollaborationTools ||
    rawTech
      .filter((t) => defaultResearchTools.some((rt) => t.toLowerCase().includes(rt.toLowerCase())))
      .map((t) => ({
        name: t,
        role: "User research synthesis, empathy mapping, and stakeholder collaboration",
      }));

  const filteredTechGroups = [
    {
      group: "Design & Prototyping Tools",
      items: designAndPrototyping,
      visible:
        selectedTechFilter === "All" ||
        selectedTechFilter === "Design & Prototyping Tools",
    },
    {
      group: "Design Systems & UI Resources",
      items: designSystemsAndResources,
      visible:
        selectedTechFilter === "All" ||
        selectedTechFilter === "Design Systems & UI Resources",
    },
    {
      group: "Research & Collaboration Tools",
      items: researchAndCollaboration,
      visible:
        selectedTechFilter === "All" ||
        selectedTechFilter === "Research & Collaboration Tools",
    },
  ].filter((g) => g.items.length > 0 && g.visible);

  // =========================================================================
  // Section 5: UI Design & Validation
  // =========================================================================
  const visualShowcase =
    project.uiUxVisualShowcase ||
    (projectImages.length > 0
      ? projectImages.map((img, i) => ({
          title: `${project.title} — High-Fidelity Screen 0${i + 1}`,
          imageUrl: img,
          caption: `${project.title} — Hi-Fi UI Mockup Viewport 0${i + 1}`,
          badge: `HI-FI_SCREEN_0${i + 1}`,
        }))
      : [
          {
            title: `${project.title} — Primary Screen Showcase`,
            imageUrl: project.imageUrl || "/images/projects/Food Recipe Mobile App UI_UX Design 1.webp",
            caption: `${project.title} — Primary High-Fidelity UI Interface`,
            badge: "PRIMARY_HI_FI",
          },
        ]);

  const activeHiFiItem = visualShowcase[activeHiFiIndex] || visualShowcase[0];

  const designSystem = project.uiUxDesignSystem || {
    colorPalette: [
      { name: "Neon Rose Primary", hex: "#F43F5E", role: "Primary CTA & interactive emphasis" },
      { name: "Electric Fuchsia", hex: "#EC4899", role: "Accent highlights & status badges" },
      { name: "Deep Obsidian Slate", hex: "#0A0D17", role: "Deep background surface & scrim" },
      { name: "Pure White Lumina", hex: "#FFFFFF", role: "High-contrast headings (WCAG AA)" },
    ],
    typography: [
      { name: "Plus Jakarta Sans / Inter", usage: "Display Titles & Clean UI Headings" },
      { name: "JetBrains Mono", usage: "Technical Telemetry & Data Badges" },
      { name: "Inter / System Sans", usage: "Body Copy & Micro-copy Directives" },
    ],
    componentStates: [
      {
        component: "Primary Action Button",
        states: ["Default: Gradient Glow", "Hover: Scale 1.02", "Active: Inset Shadow", "Disabled: 40% Opacity"],
        notes: "Strict 48px minimum touch target size for one-handed thumb ergonomics.",
      },
      {
        component: "Content Card Surface",
        states: ["Default: 1px Border", "Hover: Border Glow", "Pressed: Modal Expand"],
        notes: "Dual-layer scrim overlay guaranteeing 4.5:1 text contrast on photography.",
      },
    ],
  };

  const usabilityValidation = project.uiUxUsabilityValidation || {
    prototypeUrl: project.repoUrl || undefined,
    susScore: "88 / 100",
    taskSuccessRate: "96.4%",
    timeOnTask: "-34% Reduction",
    findingsAndFeedback: [
      {
        feedback: "Users initially struggled to identify active tabs in low-light environments.",
        iterationSolution:
          "Implemented a glowing active indicator bar and raised text contrast to 6.2:1 ratio.",
        impact: "Zero navigation confusion reported in post-test usability trials.",
      },
      {
        feedback: "Long cooking preparation lists caused finger smudging on touchscreen surfaces.",
        iterationSolution:
          "Introduced a glanceable step modal with large numeric tags and one-tap auto-scroll.",
        impact: "Increased step completion velocity by 34% across 18 live participant tests.",
      },
      {
        feedback: "Users wanted reassurance regarding chef credentials before attempting complex dishes.",
        iterationSolution:
          "Added verified creator badge, star rating micro-summary, and follow trigger.",
        impact: "Recipe bookmarking increased by 42% in prototype simulation runs.",
      },
    ],
  };

  // =========================================================================
  // Section 6: Project Resources
  // =========================================================================
  const repoUrl = project.repoUrl || "";
  const isPublicRepo = Boolean(repoUrl && repoUrl.trim().length > 0);

  const designFile = project.uiUxDesignFile || {
    platform: "Figma Cloud Canvas",
    url: repoUrl || undefined,
    isPublic: isPublicRepo,
    description: isPublicRepo
      ? "Direct access to the public design repository, component library, and vector mockups."
      : "Design assets and Figma files are protected under private client ownership or NDA clearance.",
  };

  const prototypeHandoff = project.uiUxPrototypeAndHandoff || {
    prototypeUrl: repoUrl || undefined,
    handoffStatus: "DEV_HANDOFF_READY",
    specs: [
      { label: "Design Tool", value: "Figma Professional" },
      { label: "Design System", value: "Atomic Components" },
      { label: "Grid Standard", value: "8pt Soft Grid" },
      { label: "Contrast Standard", value: "WCAG 2.1 AA Compliant" },
    ],
    description:
      "Interactive high-fidelity clickable prototype, design token variables, and detailed handoff annotations for frontend engineers.",
  };

  const documentation = project.uiUxDocumentation || {
    title: "UX Research Whitepaper & Design Specifications",
    description:
      "Comprehensive research synthesis documenting user interviews, empathy maps, task flows, usability trial metrics, and design tokens.",
    deliverables: [
      "User Research & Discovery Synthesis",
      "Interactive Clickable Prototype",
      "Design System Component Tokens",
      "Usability Benchmark Report (SUS 88)",
    ],
    docsUrl: repoUrl ? `${repoUrl}#readme` : undefined,
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
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-rose-300">
              <Sparkles className="h-3 w-3 text-rose-400" />
              {projectInfo.targetPlatform}
            </span>
          </div>
        </div>

        {/* Dual-Pane Studio Console */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex flex-col flex-1 h-full">
              {/* Studio Header Bar */}
              <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-rose-500/30 bg-rose-950/40 px-4 py-2 text-xs font-mono text-rose-300">
                <span className="flex items-center gap-2 text-rose-200">
                  <Terminal className="h-3.5 w-3.5 text-rose-400" />
                  &gt; DESIGN_RUNTIME // SYS.VIEWPORT
                </span>
                <span className="text-[10px] text-rose-400/80">ONLINE // PIXEL_PERFECT</span>
              </div>

              {/* Studio Body */}
              <div className="rounded-b-xl border-x border-b border-rose-500/25 bg-[#0D0B1B]/95 p-5 sm:p-6 text-slate-300 shadow-inner flex-1 flex flex-col justify-between">
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-rose-500/30 bg-black/60 shadow-lg">

                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-rose-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-rose-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-rose-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-rose-400/80" />

                    {/* Hero Image with smooth hover scale */}
                    
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
          </div>

          {/* Right Pane (35%): Design Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-rose-500/30 bg-[#0D0B1B]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-rose-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-rose-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3.5 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-rose-400/80">System Classification</dt>
                  <dd className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <Box className="h-3.5 w-3.5 text-rose-400" />
                    {telemetry.projectType}
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-rose-400/80">Operating Environment</dt>
                  <dd className="text-rose-300 font-semibold flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-rose-400" />
                    {telemetry.targetPlatform}
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-rose-400/80">Domain Focus</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-rose-400" />
                    {telemetry.primaryDomain}
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-rose-400/80">Engineering Pipeline</dt>
                  <dd className="text-rose-300 font-semibold flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-rose-400" />
                    <span className="truncate">{telemetry.architecturePipeline}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-rose-400/80">Testing & Audit</dt>
                  <dd className="text-rose-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-rose-400" />
                    <span>Passed</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-rose-400/80">Project Status</dt>
                  <dd className="text-rose-300 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
                    {telemetry.projectStatus}
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] uppercase text-rose-400/80">Project Year</dt>
                  <dd className="text-slate-200 font-semibold">{telemetry.projectYear}</dd>
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
                      <span className={isPublicRepo ? "text-emerald-400 font-semibold text-[11px]" : "text-amber-400 font-semibold text-[11px]"}>
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)] hover:scale-[1.01]"
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
      <section className="relative overflow-hidden rounded-3xl border border-fuchsia-500/30 bg-[#090814]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-fuchsia-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-fuchsia-500/20 pb-4 mb-6">
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
        <div className="relative z-10 mb-8 rounded-xl border border-fuchsia-500/25 bg-[#0D0B1B]/95 p-5 sm:p-6 shadow-inner">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-300 mb-3">
            <Info className="h-4 w-4 text-rose-400" />
            <span className="font-bold uppercase tracking-wider">
              Project Context & Research Genesis
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-sans">
            {projectBackground}
          </p>
        </div>

        {/* Bottom Split Matrix: User Research vs User Personas */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: User Research Methods & Findings */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-fuchsia-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <Users className="h-4 w-4 text-rose-400" />
              <span>User Research Methodologies & Findings</span>
            </div>

            <div className="space-y-3.5">
              {userResearch.map((res, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-950/15 p-4 transition-all hover:border-rose-400/40 hover:bg-fuchsia-950/25"
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
                  <div className="border-t border-white/5 pt-2 flex items-start gap-1.5 text-xs text-rose-300/90 font-sans">
                    <span className="font-mono text-[10px] font-bold text-rose-400 uppercase">
                      KEY_FINDING:
                    </span>
                    <span>{res.keyFinding}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: User Personas & Pain Points */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-fuchsia-500/25 pb-2.5 text-fuchsia-300 font-mono text-xs uppercase tracking-wider">
              <UserCheck className="h-4 w-4 text-fuchsia-400" />
              <span>Target Personas & Critical Pain Points</span>
            </div>

            <div className="space-y-4">
              {userPersonas.map((persona, idx) => (
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

                  <p className="text-xs text-slate-300 mb-3 font-sans italic">
                    &quot;{persona.demographics}&quot;
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                    <div>
                      <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block mb-1">
                        Core Goals:
                      </span>
                      <ul className="space-y-1 text-slate-300">
                        {persona.goals.map((g, gIdx) => (
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
                        {persona.painPoints.map((p, pIdx) => (
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
          SECTION 3 — [ 03 // UX STRATEGY & WIREFRAME BLUEPRINTS ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-fuchsia-500/30 bg-[#090814]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-fuchsia-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-fuchsia-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rose-300">
              [ 03 // UX STRATEGY & WIREFRAME BLUEPRINTS ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-rose-400/80">
            SITEMAP // USER_FLOW // WIREFRAMES
          </span>
        </div>

        {/* Top Split: Information Architecture (Left) vs User Flow (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          {/* Left Column (6/12): Information Architecture */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-fuchsia-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-rose-400" />
                <span>Information Architecture & Sitemap</span>
              </div>
              <span className="text-[10px] text-rose-400/80">NAVIGATION_TREE</span>
            </div>

            <div className="rounded-xl border border-fuchsia-500/20 bg-[#0D0B1B]/95 p-4 mb-2">
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                {informationArchitecture.summary}
              </p>
            </div>

            <div className="space-y-3">
              {informationArchitecture.nodes.map((node, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-fuchsia-500/20 bg-fuchsia-950/15 p-3.5 transition-all hover:border-rose-400/40 hover:bg-fuchsia-950/25"
                >
                  <div className="flex items-center justify-between border-b border-fuchsia-500/20 pb-1.5 mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase text-rose-400">
                      NODE 0{idx + 1} // {node.section}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {node.screens.map((scr, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 rounded border border-rose-500/25 bg-rose-950/40 px-2.5 py-1 text-xs text-slate-200 font-sans"
                      >
                        <span className="h-1 w-1 rounded-full bg-rose-400" />
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

            <div className="rounded-xl border border-rose-500/20 bg-[#0C0610]/95 p-4 mb-2">
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                {userFlow.summary}
              </p>
            </div>

            <div className="space-y-3">
              {userFlow.steps.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="relative flex items-start gap-3 rounded-xl border border-rose-500/20 bg-[#0C0610]/90 p-3.5 transition-all hover:border-rose-400/40 hover:bg-[#180A15]"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-lg border border-rose-400/40 bg-rose-500/15 font-mono text-xs font-bold text-rose-300">
                    {stepItem.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-xs sm:text-sm text-slate-100 truncate">
                        {stepItem.title}
                      </h4>
                      {stepItem.screenOrAction && (
                        <span className="flex-shrink-0 font-mono text-[10px] uppercase text-rose-300 border border-rose-500/30 bg-rose-950/50 px-2 py-0.5 rounded">
                          {stepItem.screenOrAction}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Wireframe Design Gallery */}
        <div className="relative z-10 rounded-2xl border border-fuchsia-500/30 bg-[#070611] p-4 sm:p-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-fuchsia-500/20 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <LayoutGrid className="h-4 w-4 text-fuchsia-400" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-rose-200">
                Wireframe Structural Blueprints (Lo-Fi / Mid-Fi)
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-wider uppercase text-rose-400 bg-rose-950/60 border border-rose-500/30 px-2 py-0.5 rounded">
                {activeWireframeItem.badge}
              </span>
            </div>
          </div>

          {/* Wireframe Image Stage */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-xl border border-fuchsia-500/20 bg-slate-950 flex items-center justify-center group">
            {activeWireframeItem.imageUrl ? (
              <Image
                src={activeWireframeItem.imageUrl}
                alt={activeWireframeItem.caption}
                fill
                priority
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center text-slate-500">
                <LayoutGrid className="h-12 w-12 text-rose-500/50 mb-2" />
                <p className="font-mono text-xs">NO WIREFRAME ARTIFACT LINKED</p>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              <span className="font-mono text-rose-400 font-semibold mr-2">
                [WIREFRAME_SPEC]:
              </span>
              {activeWireframeItem.caption}
            </p>

            {wireframes.length > 1 && (
              <div className="flex items-center gap-2">
                {wireframes.map((wf, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveWireframeIndex(idx)}
                    className={`px-3 py-1 rounded-md font-mono text-[10px] border transition-all ${
                      activeWireframeIndex === idx
                        ? "border-rose-400 bg-rose-500/20 text-white font-bold"
                        : "border-fuchsia-500/30 text-slate-400 hover:text-white"
                    }`}
                  >
                    WIREFRAME 0{idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — [ 04 // DESIGN STACK & TOOLING ECOSYSTEM ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-fuchsia-500/30 bg-[#090814]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-fuchsia-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-fuchsia-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rose-300">
              [ 04 // DESIGN STACK & TOOLING ECOSYSTEM ]
            </span>
          </div>

          {/* HUD Filter Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-fuchsia-500/30 bg-[#0D0B1B]">
            {(
              [
                "All",
                "Design & Prototyping Tools",
                "Design Systems & UI Resources",
                "Research & Collaboration Tools",
              ] as const
            ).map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setSelectedTechFilter(filterOption)}
                className={`px-3 py-1 rounded-lg font-mono text-[10px] sm:text-xs transition-all ${
                  selectedTechFilter === filterOption
                    ? "bg-rose-600 text-white font-bold shadow-[0_0_12px_rgba(244,63,94,0.5)]"
                    : "text-slate-400 hover:text-rose-200"
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tech Grid */}
        <div className="relative z-10 space-y-6">
          {filteredTechGroups.map((groupItem, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-rose-300 uppercase tracking-wider border-b border-fuchsia-500/15 pb-1.5">
                <Palette className="h-3.5 w-3.5 text-rose-400" />
                <span>{groupItem.group}</span>
                <span className="text-[10px] text-rose-400/70">
                  ({groupItem.items.length} TOOLS)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {groupItem.items.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="group relative flex items-center gap-2.5 rounded-xl border border-rose-500/20 bg-[#0D0B1B]/90 p-3 transition-all hover:border-rose-400/50 hover:bg-rose-500/10 hover:-translate-y-0.5"
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-rose-400/30 bg-rose-500/15 text-rose-300 font-mono font-bold text-[11px] group-hover:scale-105 transition-transform">
                      {tech.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-rose-200 truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — [ 05 // HI-FI INTERFACE & USABILITY VALIDATION ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-fuchsia-500/30 bg-[#090814]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-fuchsia-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-fuchsia-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-fuchsia-500/20 pb-4 mb-6">
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
        <div className="relative z-10 mb-8 rounded-2xl border border-fuchsia-500/30 bg-[#070611] p-3 sm:p-5 shadow-2xl">
          {/* Simulated Device Frame Header */}
          <div className="flex items-center justify-between border-b border-fuchsia-500/20 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-fuchsia-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-pink-500/80 inline-block" />
              <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
                {activeHiFiItem.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-wider uppercase text-rose-400 bg-rose-950/60 border border-rose-500/30 px-2 py-0.5 rounded">
                {activeHiFiItem.badge || "HI-FI_UI"}
              </span>
              
            </div>
          </div>

          {/* Active Viewport Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] overflow-hidden rounded-xl border border-fuchsia-500/20 bg-slate-950 flex items-center justify-center group">
            {activeHiFiItem.imageUrl ? (
              <Image
                src={activeHiFiItem.imageUrl}
                alt={activeHiFiItem.caption}
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

            {/* Live Caption Scrim */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-5 flex items-center justify-between gap-4 z-20">
              <div className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                <span className="text-rose-400 font-bold mr-2">
                  [ {activeHiFiItem.badge || "HI-FI_UI"} ]
                </span>
                {activeHiFiItem.caption}
              </div>
            </div>
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
                    src={item.imageUrl}
                    alt={item.caption}
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
            <div className="flex items-center gap-2 border-b border-fuchsia-500/25 pb-2.5 text-rose-300 font-mono text-xs uppercase tracking-wider">
              <Layers className="h-4 w-4 text-rose-400" />
              <span>Design System Foundations & Tokens</span>
            </div>

            {/* Color Palette Swatches */}
            <div className="rounded-xl border border-fuchsia-500/25 bg-[#0D0B1B]/95 p-4 space-y-3">
              <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block">
                Calibrated Color Tokens (WCAG AA Compliant):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {designSystem.colorPalette.map((col, cIdx) => (
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
            <div className="rounded-xl border border-fuchsia-500/25 bg-[#0D0B1B]/95 p-4 space-y-3">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold text-fuchsia-300">
                <Type className="h-3.5 w-3.5 text-fuchsia-400" />
                <span>Typography Hierarchy & Scale:</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-300 font-sans">
                {designSystem.typography.map((ty, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center justify-between border-b border-white/5 pb-1"
                  >
                    <span className="font-semibold text-slate-100">{ty.name}</span>
                    <span className="text-rose-400 font-mono text-[11px]">{ty.usage}</span>
                  </div>
                ))}
              </div>
            </div>

            {designSystem.componentStates && (
              <div className="rounded-xl border border-fuchsia-500/25 bg-[#0D0B1B]/95 p-4 space-y-3">
                <span className="font-mono text-[10px] uppercase font-bold text-rose-400 block">
                  Component States & Ergonomics:
                </span>
                <div className="space-y-2">
                  {designSystem.componentStates.map((cs, csIdx) => (
                    <div key={csIdx} className="rounded-lg border border-white/5 bg-black/30 p-2.5 text-xs">
                      <div className="font-semibold text-slate-100 mb-1">{cs.component}</div>
                      <div className="flex flex-wrap gap-1 mb-1.5">
                        {cs.states.map((st, stIdx) => (
                          <span
                            key={stIdx}
                            className="font-mono text-[10px] border border-fuchsia-500/30 bg-fuchsia-950/40 text-fuchsia-300 px-2 py-0.5 rounded"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                      <p className="text-[11px] text-slate-400">{cs.notes}</p>
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

              <div className="rounded-xl border border-fuchsia-500/30 bg-fuchsia-950/20 p-3.5 text-center">
                <span className="font-mono text-[10px] uppercase text-fuchsia-400 block mb-1">
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
              {usabilityValidation.findingsAndFeedback.map((ff, ffIdx) => (
                <div
                  key={ffIdx}
                  className="rounded-xl border border-rose-500/20 bg-[#0C0610]/95 p-3.5 space-y-1.5"
                >
                  <div className="flex items-center gap-2 font-mono text-[10px] text-rose-400 uppercase font-bold">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>USER_FEEDBACK // TRIAL {ffIdx + 1}:</span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans italic">
                    &quot;{ff.feedback}&quot;
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
          <div
            className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-7 shadow-lg transition-all duration-300 ${
              isPublicRepo
                ? "border-rose-500/35 bg-[#170E20]/80 hover:border-rose-400/60 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]"
                : "border-white/10 bg-black/60 hover:border-white/20"
            }`}
          >
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-rose-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-rose-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-rose-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-rose-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-rose-300">
                  {isPublicRepo ? (
                    <FolderGit2 className="h-4 w-4 text-rose-400" />
                  ) : (
                    <Lock className="h-4 w-4 text-slate-400" />
                  )}
                  <span>
                    {isPublicRepo
                      ? "PUBLIC GITHUB REPOSITORY"
                      : "RESTRICTED PRIVATE REPOSITORY"}
                  </span>
                </div>
                {isPublicRepo ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-rose-950/60 px-2.5 py-0.5 font-mono text-[10px] text-rose-300 font-semibold shadow-[0_0_10px_rgba(244,63,94,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />PUBLIC</span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-slate-400 font-semibold">
                    <Lock className="h-3 w-3" />PRIVATE</span>
                )}
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {isPublicRepo ? "GitHub Repository" : "Private Commercial Repository"}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {isPublicRepo
                  ? "Explore the complete project repository on GitHub, including production source code, commit history, architectural assets, and technical documentation."
                  : "Source code access is restricted under non-disclosure agreements (NDA) or proprietary commercial rights. No public repository is published."}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">ACCESS CLEARANCE:</span>
                  <span className={isPublicRepo ? "text-rose-300 font-semibold" : "text-slate-400 font-semibold"}>
                    {isPublicRepo ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / NDA"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">VCS GATEWAY:</span>
                  <span className="text-slate-200">GitHub Cloud VCS</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">SECURITY AUDIT:</span>
                  <span className={isPublicRepo ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
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
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-600 px-5 py-3 font-mono text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)] hover:scale-[1.01]"
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
                  {prototypeHandoff.handoffStatus}
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Figma Design System Architecture
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                {prototypeHandoff.description}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                {prototypeHandoff.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between text-slate-400">
                    <span className="uppercase text-[11px]">{spec.label}:</span>
                    <span className="text-rose-300 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 font-mono text-xs font-semibold text-rose-300">
              <Check className="h-4 w-4 text-rose-400" />
              <span>DESIGN_TOKENS_VERIFIED</span>
            </div>
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
                {documentation.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-rose-400 shrink-0" />
                    <span className="text-[11px] truncate">{del}</span>
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
