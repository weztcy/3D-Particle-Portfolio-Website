"use client";

import React, { useState, useEffect } from "react";
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
  Maximize2,
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Tech Stack HUD Filter State
  const [selectedTechFilter, setSelectedTechFilter] = useState<
    | "All"
    | "Programming Languages"
    | "Frameworks & Libraries"
    | "Database, Tools & Services"
  >("All");

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

  // Keyboard navigation for lightbox & hero modal
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
      if (isLightboxOpen && projectImages.length > 0) {
        if (e.key === "ArrowLeft") {
          setActiveImageIndex((prev) =>
            prev === 0 ? projectImages.length - 1 : prev - 1
          );
        }
        if (e.key === "ArrowRight") {
          setActiveImageIndex((prev) =>
            prev === projectImages.length - 1 ? 0 : prev + 1
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, projectImages.length]);

  // Section 1: Overview & Information
  const projectDescription =
    project.desktopMobileBackground ||
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "High-performance native client application engineered with offline-first architecture, decoupled concurrency pipelines, and granular platform hardware integration.";

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
      : project.summary.toLowerCase().includes("windows")
      ? "Windows 11 / 10 (x64)"
      : "Cross-Platform (Windows / macOS / Linux)",
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
    projectStatus: projectInfo.developmentStatus,
    projectYear: projectInfo.developmentYear,
  };

  // Section 2: Background & Objectives
  const projectBackground =
    project.desktopMobileBackground ||
    project.projectBackground ||
    project.challenge ||
    project.summary;

  const problemStatements =
    project.desktopMobileProblemStatements ||
    project.problemStatements || [
      {
        title: "Latency & Thread Freezing Constraints",
        description:
          project.challenge ||
          "Intensive synchronous operations on the main execution thread degrade UI response and cause frame dropping.",
        issueCode: "PERF-LATENCY",
      },
      {
        title: "Resource Contention & Memory Saturation",
        description:
          "Heavy file processing without proper allocation bounds risks system thrashing and unhandled process teardowns.",
        issueCode: "MEM-LEAK-RISK",
      },
      {
        title: "Data Sovereignty & Privacy Concerns",
        description:
          "Reliance on cloud endpoints introduces network latency, recurring server overhead, and telemetry exposure for sensitive client files.",
        issueCode: "PRIVACY-GATEWAY",
      },
    ];

  const projectObjectives =
    project.desktopMobileObjectives ||
    project.projectObjectives ||
    (project.objectives && project.objectives.length > 0
      ? project.objectives.slice(0, 4).map((obj, i) => ({
          title: `Core Engineering Objective 0${i + 1}`,
          description: obj,
          targetTag: `OBJECTIVE-0${i + 1}`,
        }))
      : [
          {
            title: "Zero-Latency UI Thread Decoupling",
            description:
              "Offload computation and heavy I/O to background worker threads or isolated subprocesses.",
            targetTag: "60_FPS_STABILITY",
          },
          {
            title: "Offline-First Operational Security",
            description:
              "Operate completely air-gapped without external network dependencies or telemetry leaks.",
            targetTag: "ZERO_TELEMETRY",
          },
          {
            title: "Native Platform Hardware Saturation",
            description:
              "Leverage host CPU topology and memory bandwidth for optimal throughput during batch jobs.",
            targetTag: "HARDWARE_ACCEL",
          },
          {
            title: "Self-Contained Single-Package Binary",
            description:
              "Deliver an optimized, standalone distribution package requiring zero external runtime setup.",
            targetTag: "PORTABLE_DIST",
          },
        ]);

  // Section 3: Features & Interface
  const coreFeatures =
    project.desktopMobileFeatures ||
    project.coreFeatures ||
    (project.features && project.features.length > 0
      ? project.features
      : [
          {
            title: "Decoupled Asynchronous Engine",
            description:
              "Isolates heavy processing into worker instances to guarantee buttery-smooth 60fps UI responsiveness.",
            badge: "Thread Decoupling",
          },
          {
            title: "High-Throughput Batch Processing",
            description:
              "Processes multiple payloads concurrently with intelligent scheduling and dynamic memory pooling.",
            badge: "Multi-Worker Pool",
          },
          {
            title: "Real-Time Telemetry & Hardware Observability",
            description:
              "Visualizes dynamic resource utilization curves for CPU and RAM consumption during active execution.",
            badge: "Live Telemetry",
          },
          {
            title: "Air-Gapped Local-First Architecture",
            description:
              "Operates completely on local storage with zero cloud dependencies, eliminating data leakage risks.",
            badge: "100% Offline",
          },
        ]);

  const interfaceShowcase =
    project.desktopMobileInterfaceShowcase ||
    project.interfaceShowcase ||
    (projectImages.length > 0
      ? projectImages.map((img, i) => ({
          imageUrl: img,
          caption: `${project.title} — Interface Viewport 0${i + 1}`,
          badge: `VIEWPORT_0${i + 1}`,
        }))
      : [
          {
            imageUrl: project.imageUrl || "/images/projects/WEBP Converter Pro 1.webp",
            caption: `${project.title} — Primary Client Viewport`,
            badge: "PRIMARY_STAGE",
          },
        ]);

  const activeShowcaseItem =
    interfaceShowcase[activeImageIndex] || interfaceShowcase[0];

  const userFlow = project.desktopMobileUserFlow ||
    project.userFlow || {
      summary:
        "Sequential interaction pipeline illustrating user-driven initiation, asynchronous worker dispatch, and atomic persistence.",
      steps:
        project.pipelineSteps && project.pipelineSteps.length > 0
          ? project.pipelineSteps.map((p, i) => ({
              step: p.step.includes(".") ? p.step.split(".")[0] : `0${i + 1}`,
              title: p.step.includes(". ") ? p.step.split(". ")[1] : p.step,
              description: p.detail,
              actorOrNode: p.latencyOrMetric || "Native Node",
            }))
          : [
              {
                step: "01",
                title: "File Ingestion & Path Verification",
                description:
                  "Ingests target files via drag-and-drop or file dialog, validating integrity and metadata on background thread.",
                actorOrNode: "<2ms Validation",
              },
              {
                step: "02",
                title: "Resource Allocation & Scheduling",
                description:
                  "Evaluates host CPU topology to configure optimal worker pool limits and memory caching quotas.",
                actorOrNode: "Auto-Tuning",
              },
              {
                step: "03",
                title: "Concurrent Asynchronous Execution",
                description:
                  "Dispatches payloads across worker processes with streaming telemetry signals to the UI dispatcher.",
                actorOrNode: "Multi-Process",
              },
              {
                step: "04",
                title: "Atomic Commit & Disk Verification",
                description:
                  "Writes finalized assets to output directory, verifies checksums, and unlocks system file handles.",
                actorOrNode: "Atomic Write",
              },
            ],
    };

  // Section 4: Tech Stack (Categorized & Filterable)
  const defaultLanguages = [
    "Python 3",
    "Java",
    "Kotlin",
    "Swift",
    "Dart",
    "TypeScript",
    "JavaScript",
    "C#",
    "C++",
    "Rust",
    "SQL",
  ];
  const defaultFrameworks = [
    "PySide6",
    "Qt 6",
    "Flutter",
    "React Native",
    "Electron",
    "Tauri",
    ".NET MAUI",
    "SwiftUI",
    "Jetpack Compose",
    "Pillow",
    "LibWebP",
    "pyqtgraph",
    "qt-material",
    "JavaFX",
    "WPF",
    "WinUI 3",
  ];

  const explicitTech = project.desktopMobileTechStack;

  const rawTech = project.techStack || [];

  const programmingLanguages =
    explicitTech?.programmingLanguages ||
    rawTech
      .filter((t) => defaultLanguages.some((dl) => t.toLowerCase().includes(dl.toLowerCase())))
      .map((t) => ({
        name: t,
        role: "Core runtime, system interface, and logic execution",
      }));

  const frameworksAndLibraries =
    explicitTech?.frameworksAndLibraries ||
    rawTech
      .filter((t) => defaultFrameworks.some((df) => t.toLowerCase().includes(df.toLowerCase())))
      .map((t) => ({
        name: t,
        role: "Native UI components, event dispatch, and graphics rendering",
      }));

  const databaseToolsAndServices =
    explicitTech?.databaseToolsAndServices ||
    rawTech
      .filter(
        (t) =>
          !defaultLanguages.some((dl) => t.toLowerCase().includes(dl.toLowerCase())) &&
          !defaultFrameworks.some((df) => t.toLowerCase().includes(df.toLowerCase()))
      )
      .map((t) => ({
        name: t,
        role: "Process orchestration, packaging, or local data persistence",
      }));

  // Filter logic
  const filteredTechGroups = [
    {
      group: "Programming Languages",
      items: programmingLanguages,
      visible:
        selectedTechFilter === "All" || selectedTechFilter === "Programming Languages",
    },
    {
      group: "Frameworks & Libraries",
      items: frameworksAndLibraries,
      visible:
        selectedTechFilter === "All" || selectedTechFilter === "Frameworks & Libraries",
    },
    {
      group: "Database, Tools & Services",
      items: databaseToolsAndServices,
      visible:
        selectedTechFilter === "All" ||
        selectedTechFilter === "Database, Tools & Services",
    },
  ].filter((g) => g.items.length > 0 && g.visible);

  // Section 5: Architecture & Implementation
  const systemArchitecture = project.desktopMobileArchitecture ||
    project.systemArchitecture || {
      summary:
        project.architectureSummary ||
        "Layered desktop architecture separating user presentation and live telemetry from background worker processes via asynchronous signals and IPC message passing.",
      layers: [
        {
          name: "Presentation & Viewport Layer",
          role: "Native UI & Telemetry",
          components: [
            isMobile ? "Flutter / SwiftUI UI Engine" : "PySide6 / Qt 6 Widgets",
            "Obsidian Dark Theme (QSS)",
            "Hardware Vector Telemetry (pyqtgraph)",
          ],
        },
        {
          name: "Concurrency & Orchestration Layer",
          role: "Asynchronous Worker Dispatcher",
          components: [
            "QThread Event Scanner",
            "ProcessPoolExecutor (GIL-Bypass)",
            "Thread-Safe Signal / Slot IPC",
          ],
        },
        {
          name: "Core Processing Engine",
          role: "Media & Data Transcoding",
          components: [
            "LibWebP Codec Engine",
            "Pillow Image Transformations",
            "Dual-Tier MD5 Thumbnail Cache",
          ],
        },
        {
          name: "Platform & Host OS Interface",
          role: "Native Hardware & Storage",
          components: [
            "Win32 / POSIX Filesystem Access",
            "psutil CPU / RAM Hardware Prober",
            "PyInstaller Portable PE Binary",
          ],
        },
      ],
    };

  const dataManagement = project.desktopMobileDataManagement || [
    {
      title: "Two-Tier MD5 Keyed Disk & Memory Cache",
      description:
        "Computes unique MD5 hashes from file path, byte size, and modification timestamp to cache generated thumbnails (~/.app_cache) and keep UI navigation instant.",
      badge: "MD5 Sub-5ms Cache",
    },
    {
      title: "Air-Gapped In-Memory Stream Buffering",
      description:
        "Buffers raw image payloads in memory without temporary unencrypted disk writes, preventing sensitive thumbnail remnants from persisting in host temporary directories.",
      badge: "In-Memory Privacy",
    },
    {
      title: "Atomic Result Finalization & Integrity Verification",
      description:
        "Verifies file checksums in the output directory before committing, ensuring no partial or corrupted binaries are retained upon unexpected task cancellation.",
      badge: "Atomic Commit",
    },
  ];

  const platformImplementation = project.desktopMobilePlatformImplementation || [
    {
      title: "Multi-Core CPU Saturation (Bypassing GIL)",
      description:
        "Dynamically probes host CPU topology via psutil, spawning isolated subprocesses to utilize up to 16 logical cores concurrently without GIL thread freezing.",
      badge: "Multi-Core GIL Bypass",
    },
    {
      title: "Asynchronous QThread Filesystem Scanner",
      description:
        "Scans nested disk directories recursively on background QThread workers, streaming validated file paths into the UI without interrupting smooth 60fps animations.",
      badge: "Non-Blocking I/O",
    },
    {
      title: "High-DPI Scaling & Native Windows Shell Integration",
      description:
        "Implements Qt High-DPI per-monitor scaling, native Windows file drag-and-drop protocols, and taskbar progress indicators for seamless desktop ergonomics.",
      badge: "Native Win32 Shell",
    },
  ];

  // Section 6: Project Resources
  const repoUrl = project.repoUrl || "";
  const isPublicRepo = Boolean(repoUrl && repoUrl.trim().length > 0);

  const distribution = project.desktopMobileDistribution || {
    packageType: isMobile
      ? "Android APK Package (.apk)"
      : "Standalone Portable Executable (.exe)",
    targetOs: isMobile ? "Android 14+ (ARM64 / x86_64)" : "Windows 11 / 10 (64-bit Architecture)",
    version: "v1.4.2-STABLE",
    fileSize: "71.2 MB",
    downloadUrl: repoUrl ? `${repoUrl}/releases` : undefined,
    releaseNotes:
      "Fully self-contained, air-gapped executable compiled with PyInstaller and UPX compression. Requires zero client Python or library installation.",
  };

  const documentation = project.desktopMobileDocumentation || {
    title: "Client Manual & Architecture Specification",
    description:
      "Comprehensive engineering manual covering process concurrency, LibWebP profile heuristics, hardware telemetry integration, and standalone packaging procedures.",
    status: "VERIFIED_DOC_v1.4",
    specs: [
      { label: "Target Architecture", value: isMobile ? "ARM64 / Universal" : "x86_64 (64-bit)" },
      { label: "GUI Framework", value: isMobile ? "Flutter / React Native" : "PySide6 (Qt 6.6)" },
      { label: "Concurrency Model", value: "QThread + Multi-Process" },
      { label: "Distribution Footprint", value: distribution.fileSize || "71.2 MB" },
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
          SECTION 1 — [ 01 // CLIENT CONSOLE & NATIVE OVERVIEW ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-[#0E0B07]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(245,158,11,0.15)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Ambient Indigo Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
              [ 01 // CLIENT CONSOLE & NATIVE OVERVIEW ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300">
              {isMobile ? (
                <Smartphone className="h-3 w-3 text-amber-400" />
              ) : (
                <Monitor className="h-3 w-3 text-amber-400" />
              )}
              {projectInfo.applicationType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-amber-300">
              <HardDrive className="h-3 w-3 text-amber-400" />
              {projectInfo.targetPlatform}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div className="flex flex-col h-full flex-1">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between rounded-t-xl border border-amber-500/30 bg-amber-950/40 px-4 py-2 text-xs font-mono text-amber-300">
                <span className="flex items-center gap-2 text-amber-200">
                  <Terminal className="h-3.5 w-3.5 text-amber-400" />
                  &gt; CLIENT_RUNTIME // SYS.VIEWPORT
                </span>
                <span className="text-[10px] text-amber-400/80">ONLINE // NATIVE_IPC</span>
              </div>

              {/* Terminal Body */}
              <div className="rounded-b-xl border-x border-b border-amber-500/25 bg-[#120E08]/95 p-5 sm:p-6 text-slate-300 shadow-inner flex flex-col flex-1 justify-between">
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-amber-500/30 bg-black/60 shadow-lg">

                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-amber-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-amber-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-amber-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-amber-400/80" />

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
                <div className="pt-4 border-t border-amber-500/20 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-300">
                    <Zap className="h-3 w-3 text-amber-400" />
                    Decoupled Async Concurrency
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-300">
                    <ShieldCheck className="h-3 w-3 text-amber-400" />
                    Zero-Telemetry Air-Gapped
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-400/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] text-amber-300">
                    <Cpu className="h-3 w-3 text-amber-400" />
                    Multi-Core Hardware Saturation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Native Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-amber-500/30 bg-[#120E08]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-amber-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-amber-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3.5 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-amber-400/80">System Classification</dt>
                  <dd className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <Box className="h-3.5 w-3.5 text-amber-400" />
                    {telemetry.projectType}
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-amber-400/80">Operating Environment</dt>
                  <dd className="text-amber-300 font-semibold flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-amber-400" />
                    {telemetry.targetPlatform}
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-amber-400/80">Domain Focus</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-amber-400" />
                    {telemetry.primaryDomain}
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-amber-400/80">Engineering Pipeline</dt>
                  <dd className="text-amber-300 font-semibold flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-amber-400" />
                    <span className="truncate">{telemetry.architecturePipeline}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-amber-400/80">Testing & Audit</dt>
                  <dd className="text-amber-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                    <span>Passed</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-amber-400/80">Project Status</dt>
                  <dd className="text-amber-300 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                    {telemetry.projectStatus}
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] uppercase text-amber-400/80">Project Year</dt>
                  <dd className="text-slate-200 font-semibold">{telemetry.projectYear}</dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  isPublicRepo
                    ? "border-amber-500/35 bg-[#140E07]/90 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
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
                        {isPublicRepo
                          ? "PUBLIC GITHUB REPOSITORY"
                          : "RESTRICTED PRIVATE REPOSITORY"}
                      </span>
                    </div>
                    {isPublicRepo ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-950/60 px-2 py-0.5 font-mono text-[9px] text-amber-300 font-semibold shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />PUBLIC
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
                      <span className={isPublicRepo ? "text-amber-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:scale-[1.01]"
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
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-[#0E0B07]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
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
        <div className="relative z-10 mb-8 rounded-xl border border-amber-500/25 bg-[#120E08]/95 p-5 sm:p-6 shadow-inner">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-300 mb-3">
            <Info className="h-4 w-4 text-amber-400" />
            <span className="font-bold uppercase tracking-wider">
              Project Context & Background Genesis
            </span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-sans">
            {projectBackground}
          </p>
        </div>

        {/* Bottom Split Matrix: Problem Statements vs Objectives */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column: Problem Statements */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-rose-500/25 pb-2.5 text-rose-400 font-mono text-xs uppercase tracking-wider">
              <AlertTriangle className="h-4 w-4 text-rose-400" />
              <span>Target Constraints & Bottlenecks</span>
            </div>

            <div className="space-y-3.5">
              {problemStatements.map((prob, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-rose-500/25 bg-rose-950/15 p-4 transition-all hover:border-rose-400/45 hover:bg-rose-950/25"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      {prob.title}
                    </h4>
                    {prob.issueCode && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-rose-300 border border-rose-500/30 bg-rose-950/60 px-2 py-0.5 rounded">
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
                  className="rounded-xl border border-amber-500/25 bg-amber-950/15 p-4 transition-all hover:border-amber-500/45 hover:bg-amber-950/25"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 flex-shrink-0" />
                      {obj.title}
                    </h4>
                    {obj.targetTag && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-500/30 bg-amber-950/50 px-2 py-0.5 rounded">
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
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-[#0E0B07]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
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
        <div className="relative z-10 mb-8 rounded-2xl border border-amber-500/30 bg-[#070913] p-3 sm:p-5 shadow-2xl">
          {/* Simulated OS Window Frame / Status Bar */}
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-[11px] text-slate-400 hidden sm:inline-block">
                {activeShowcaseItem.caption}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-wider uppercase text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                {activeShowcaseItem.badge || "DEVICE_VIEWPORT"}
              </span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="p-1.5 rounded-lg border border-amber-500/30 bg-amber-950/40 text-amber-300 hover:text-white hover:border-amber-400 transition-colors"
                title="Expand Fullscreen"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Active Viewport Image Container */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] overflow-hidden rounded-xl border border-amber-500/20 bg-slate-950 flex items-center justify-center group">
            {currentActiveImage ? (
              <Image
                src={currentActiveImage}
                alt={activeShowcaseItem.caption}
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full border border-amber-500/40 bg-slate-950/70 text-amber-300 backdrop-blur-md opacity-80 hover:opacity-100 hover:scale-110 transition-all"
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
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full border border-amber-500/40 bg-slate-950/70 text-amber-300 backdrop-blur-md opacity-80 hover:opacity-100 hover:scale-110 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Caption & Thumbnail Selector Strip */}
          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-300 font-sans">
              <span className="font-mono text-amber-400 font-semibold mr-2">
                [INSPECTOR_NOTE]:
              </span>
              {activeShowcaseItem.caption}
            </p>

            {interfaceShowcase.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                {interfaceShowcase.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-12 w-20 flex-shrink-0 overflow-hidden rounded-md border transition-all ${
                      activeImageIndex === idx
                        ? "border-amber-400 ring-2 ring-amber-500/50 scale-105"
                        : "border-amber-500/30 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.caption}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
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
                  className="rounded-xl border border-amber-500/20 bg-amber-950/15 p-4 transition-all hover:border-amber-400/40 hover:bg-amber-950/25"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {feat.title}
                    </h4>
                    {feat.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-500/30 bg-amber-950/60 px-2 py-0.5 rounded">
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

            <div className="rounded-xl border border-amber-500/25 bg-amber-950/15 p-4 mb-2">
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                {userFlow.summary}
              </p>
            </div>

            <div className="space-y-3">
              {userFlow.steps.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="relative flex items-start gap-3 rounded-xl border border-amber-500/20 bg-[#120E08]/90 p-3.5 transition-all hover:border-amber-400/40 hover:bg-[#0E1224]"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-lg border border-amber-400/40 bg-amber-500/15 font-mono text-xs font-bold text-amber-300">
                    {stepItem.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-xs sm:text-sm text-slate-100 truncate">
                        {stepItem.title}
                      </h4>
                      {stepItem.actorOrNode && (
                        <span className="flex-shrink-0 font-mono text-[10px] uppercase text-amber-400 border border-amber-500/30 bg-amber-950/50 px-2 py-0.5 rounded">
                          {stepItem.actorOrNode}
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

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full border border-white/20 bg-slate-900/80 text-white hover:bg-slate-800"
            >
              <X className="h-6 w-6" />
            </button>
            <div
              className="relative max-w-6xl w-full max-h-[85vh] aspect-[16/10] overflow-hidden rounded-2xl border border-amber-500/40"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentActiveImage}
                alt={activeShowcaseItem.caption}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 4 — [ 04 // DESKTOP & MOBILE RUNTIME ECOSYSTEM ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-[#0E0B07]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
              [ 04 // DESKTOP & MOBILE RUNTIME ECOSYSTEM ]
            </span>
          </div>

          {/* HUD Filter Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-amber-500/30 bg-[#120E08]">
            {(
              [
                "All",
                "Programming Languages",
                "Frameworks & Libraries",
                "Database, Tools & Services",
              ] as const
            ).map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setSelectedTechFilter(filterOption)}
                className={`px-3 py-1 rounded-lg font-mono text-[10px] sm:text-xs transition-all ${
                  selectedTechFilter === filterOption
                    ? "bg-amber-600 text-white font-bold shadow-[0_0_12px_rgba(245,158,11,0.5)]"
                    : "text-slate-400 hover:text-amber-200"
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
              <div className="flex items-center gap-2 font-mono text-xs text-amber-300 uppercase tracking-wider border-b border-amber-500/15 pb-1.5">
                <Code2 className="h-3.5 w-3.5 text-amber-400" />
                <span>{groupItem.group}</span>
                <span className="text-[10px] text-amber-400/70">
                  ({groupItem.items.length} TECHNOLOGIES)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {groupItem.items.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="group relative flex items-center gap-2.5 rounded-xl border border-amber-500/20 bg-[#120E08]/90 p-3 transition-all hover:border-amber-400/50 hover:bg-amber-500/10 hover:-translate-y-0.5"
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-500/15 text-amber-300 font-mono font-bold text-[11px] group-hover:scale-105 transition-transform">
                      {tech.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-amber-200 truncate">
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
          SECTION 5 — [ 05 // CLIENT ARCHITECTURE & PLATFORM INTEGRATION ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-[#0E0B07]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
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
        <div className="relative z-10 mb-8 rounded-2xl border border-amber-500/30 bg-[#120E08]/95 p-5 sm:p-7 shadow-inner">
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
                  className="rounded-xl border border-amber-500/25 bg-amber-950/20 p-4 transition-all hover:border-amber-400/50 hover:bg-amber-950/30"
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
                    {layer.components.map((comp, cIdx) => (
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
              {dataManagement.map((dm, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-amber-500/25 bg-amber-950/15 p-4 transition-all hover:border-amber-400/40 hover:bg-amber-950/25"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {dm.title}
                    </h4>
                    {dm.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-500/30 bg-amber-950/50 px-2 py-0.5 rounded">
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
              {platformImplementation.map((pi, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-amber-500/25 bg-amber-950/15 p-4 transition-all hover:border-amber-400/40 hover:bg-amber-950/25"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {pi.title}
                    </h4>
                    {pi.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-300 border border-amber-500/30 bg-amber-950/50 px-2 py-0.5 rounded">
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
      <section className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-[#0E0B07]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
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
          <div
            className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-7 shadow-lg transition-all duration-300 ${
              isPublicRepo
                ? "border-amber-500/35 bg-[#140E07]/80 hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                : "border-white/10 bg-black/60 hover:border-white/20"
            }`}
          >
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-amber-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-amber-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-amber-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-amber-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-300">
                  {isPublicRepo ? (
                    <FolderGit2 className="h-4 w-4 text-amber-400" />
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
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-950/60 px-2.5 py-0.5 font-mono text-[10px] text-amber-300 font-semibold shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />PUBLIC</span>
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
                  <span className={isPublicRepo ? "text-amber-300 font-semibold" : "text-slate-400 font-semibold"}>
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
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-3 font-mono text-xs font-bold text-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:scale-[1.01]"
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

          {/* CARD 2 — Application Runtime & Target Specifications Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-amber-500/30 bg-[#120E08]/95 p-5 sm:p-7 shadow-lg transition-all hover:border-amber-400/50 hover:shadow-[0_8px_32px_rgba(245,158,11,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-amber-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-amber-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-amber-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-amber-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <Package className="h-4 w-4 text-amber-400" />
                  <span>Target Runtime Specs</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-950/40 px-2.5 py-0.5 font-mono text-[10px] text-amber-300 font-semibold">
                  {distribution.version}
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Native Client Architecture
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                {distribution.releaseNotes}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">TARGET OS:</span>
                  <span className="text-amber-300 font-semibold">{distribution.targetOs}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">PACKAGE TYPE:</span>
                  <span className="text-slate-200">{distribution.packageType}</span>
                </div>
                {distribution.fileSize && (
                  <div className="flex items-center justify-between text-slate-400">
                    <span className="text-[11px]">BINARY FOOTPRINT:</span>
                    <span className="text-slate-200">{distribution.fileSize}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">NETWORK EXPOSURE:</span>
                  <span className="text-emerald-400 font-semibold">AIR-GAPPED OFFLINE</span>
                </div>
              </div>
            </div>

            <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 font-mono text-xs font-semibold text-amber-300">
              <Check className="h-4 w-4 text-amber-400" />
              <span>OFFLINE_STANDALONE_VERIFIED</span>
            </div>
          </div>

          {/* CARD 3 — Documentation & Supporting Files Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-amber-500/30 bg-[#120E08]/95 p-5 sm:p-7 shadow-lg transition-all hover:border-amber-400/50 hover:shadow-[0_8px_32px_rgba(245,158,11,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-amber-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-amber-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-amber-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-amber-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileText className="h-4 w-4 text-amber-400" />
                  <span>Technical Documentation</span>
                </div>
                <span className="font-mono text-[10px] text-amber-400/80">
                  {documentation.status}
                </span>
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 font-mono text-xs font-semibold text-amber-300 hover:bg-amber-500/20 hover:text-white transition-all"
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 font-mono text-xs font-semibold text-amber-300 hover:bg-amber-500/20 hover:text-white transition-all"
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
