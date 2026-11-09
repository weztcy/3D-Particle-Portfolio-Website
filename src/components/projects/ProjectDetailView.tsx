"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Compass,
  ExternalLink,
  FileText,
  FolderGit2,
  Globe,
  Grid,
  Layers,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";
import SynapticParticleCanvas, {
  TelemetryData,
} from "@/components/canvas/SynapticParticleCanvas";
import ParticleControllerHUD from "@/components/ParticleControllerHUD";
import {
  PROJECT_CASE_STUDIES,
  ProjectCaseStudy,
  ProjectCategory,
  ParticleFormation,
} from "@/data";

const CATEGORY_FORMATION_MAP: Record<
  ProjectCategory,
  Exclude<ParticleFormation, "auto">
> = {
  "web-development": "wave",
  "data-analysis": "clusters",
  "ai-engineering": "neural",
  "machine-learning": "clusters",
  "desktop-mobile": "helix",
  "ui-ux": "sphere",
  "code-learning": "neural",
};

const getProjectNumber = (p: ProjectCaseStudy): number => {
  const match = p.code.match(/PRO-(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

// All projects sorted in ascending order from PRO-01 up to PRO-38
const CHRONOLOGICAL_PROJECTS: ProjectCaseStudy[] = [...PROJECT_CASE_STUDIES].sort(
  (a, b) => getProjectNumber(a) - getProjectNumber(b)
);

function getAccentClasses(accent: ProjectCaseStudy["accentColor"]) {
  switch (accent) {
    case "cyan":
      return {
        badge: "border-sky-400/35 bg-sky-400/10 text-sky-300",
        metricText: "text-sky-400",
        hoverBorder: "hover:border-sky-400/50",
        borderAccent: "border-sky-400/30",
        glowBg: "from-sky-500/15 via-transparent to-transparent",
        iconBg: "border-sky-400/30 bg-sky-400/10 text-sky-300",
      };
    case "indigo":
      return {
        badge: "border-indigo-400/35 bg-indigo-400/10 text-indigo-300",
        metricText: "text-indigo-400",
        hoverBorder: "hover:border-indigo-400/50",
        borderAccent: "border-indigo-400/30",
        glowBg: "from-indigo-500/15 via-transparent to-transparent",
        iconBg: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
      };
    case "emerald":
      return {
        badge: "border-emerald-400/35 bg-emerald-400/10 text-emerald-300",
        metricText: "text-emerald-400",
        hoverBorder: "hover:border-emerald-400/50",
        borderAccent: "border-emerald-400/30",
        glowBg: "from-emerald-500/15 via-transparent to-transparent",
        iconBg: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
      };
    case "amber":
      return {
        badge: "border-amber-400/35 bg-amber-400/10 text-amber-300",
        metricText: "text-amber-400",
        hoverBorder: "hover:border-amber-400/50",
        borderAccent: "border-amber-400/30",
        glowBg: "from-amber-500/15 via-transparent to-transparent",
        iconBg: "border-amber-400/30 bg-amber-400/10 text-amber-300",
      };
    case "fuchsia":
      return {
        badge: "border-fuchsia-400/35 bg-fuchsia-400/10 text-fuchsia-300",
        metricText: "text-fuchsia-400",
        hoverBorder: "hover:border-fuchsia-400/50",
        borderAccent: "border-fuchsia-400/30",
        glowBg: "from-fuchsia-500/15 via-transparent to-transparent",
        iconBg: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300",
      };
    case "teal":
      return {
        badge: "border-teal-400/35 bg-teal-400/10 text-teal-300",
        metricText: "text-teal-400",
        hoverBorder: "hover:border-teal-400/50",
        borderAccent: "border-teal-400/30",
        glowBg: "from-teal-500/15 via-transparent to-transparent",
        iconBg: "border-teal-400/30 bg-teal-400/10 text-teal-300",
      };
    case "purple":
      return {
        badge: "border-purple-400/35 bg-purple-400/10 text-purple-300",
        metricText: "text-purple-400",
        hoverBorder: "hover:border-purple-400/50",
        borderAccent: "border-purple-400/30",
        glowBg: "from-purple-500/15 via-transparent to-transparent",
        iconBg: "border-purple-400/30 bg-purple-400/10 text-purple-300",
      };
  }
}

export default function ProjectDetailView({ projectId: propProjectId }: { projectId?: string } = {}) {
  const params = useParams<{ id: string }>();
  const projectId = propProjectId || params?.id;

  const project =
    PROJECT_CASE_STUDIES.find((p) => p.id === projectId) || null;

  const [formationMode, setFormationMode] = useState<ParticleFormation>("auto");
  const [turbulence, setTurbulence] = useState<number>(1.0);
  const [pulseTrigger, setPulseTrigger] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    fps: 60,
    particleCount: 18432,
    activeFormation: "clusters",
    cursorX: 0,
    cursorY: 0,
    cursorZ: 0,
    scrollProgress: 0,
  });

  const handleTriggerPulse = useCallback(() => {
    setPulseTrigger((prev) => prev + 1);
  }, []);

  const handleTelemetryUpdate = useCallback((data: TelemetryData) => {
    setTelemetry(data);
  }, []);

  // Reset image carousel index, errors, modal state and trigger a pulse when navigating between projects
  useEffect(() => {
    setCurrentImageIndex(0);
    setImgErrors({});
    setIsLightboxOpen(false);
    setPulseTrigger((prev) => prev + 1);
  }, [projectId]);

  if (!project) {
    return (
      <div className="relative min-h-screen bg-[#06070A] text-slate-100 flex items-center justify-center p-6">
        <SynapticParticleCanvas
          formationMode="auto"
          scrollActiveFormation="clusters"
          turbulence={1.0}
          pulseTrigger={pulseTrigger}
          onTelemetryUpdate={handleTelemetryUpdate}
        />
        <div className="relative z-10 max-w-lg w-full rounded-3xl border border-white/15 bg-[#0C0F17]/90 backdrop-blur-xl p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
          <div className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
            [ 404 // PROJECT NOT FOUND ]
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Project Not Found
          </h1>
          <p className="text-sm text-slate-400 mb-6">
            The project you are looking for is unavailable or the URL is invalid. Please return to the main projects directory.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-5 py-2.5 font-mono text-xs font-semibold text-slate-950 hover:opacity-95 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  const totalProjects = CHRONOLOGICAL_PROJECTS.length;
  const projectNodeNumber = getProjectNumber(project);
  const currentChronoIndex = CHRONOLOGICAL_PROJECTS.findIndex(
    (p) => p.id === project.id
  );
  const prevIndex =
    (currentChronoIndex - 1 + totalProjects) % totalProjects;
  const nextIndex = (currentChronoIndex + 1) % totalProjects;
  const prevProject = CHRONOLOGICAL_PROJECTS[prevIndex];
  const nextProject = CHRONOLOGICAL_PROJECTS[nextIndex];

  const relatedProjects = PROJECT_CASE_STUDIES.filter(
    (p) => p.category === project.category && p.id !== project.id
  );

  const accent = getAccentClasses(project.accentColor);
  const prevAccent = getAccentClasses(prevProject.accentColor);
  const nextAccent = getAccentClasses(nextProject.accentColor);
  const activeScrollFormation =
    CATEGORY_FORMATION_MAP[project.category] || "clusters";

  const projectImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : [];
  const hasMultipleImages = projectImages.length > 1;
  const currentImage = projectImages[currentImageIndex];
  const hasCurrentImageError = Boolean(imgErrors[currentImageIndex]);

  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-play slideshow when there are multiple images (pauses on hover or when lightbox is open)
  useEffect(() => {
    if (!hasMultipleImages || isPaused || isLightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isPaused, isLightboxOpen, projectImages.length]);

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!hasMultipleImages) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
    handleTriggerPulse();
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    handleTriggerPulse();
  };

  // Keyboard navigation for fullscreen lightbox modal
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        if (hasMultipleImages) {
          setCurrentImageIndex(
            (prev) => (prev - 1 + projectImages.length) % projectImages.length
          );
        }
      } else if (e.key === "ArrowRight") {
        if (hasMultipleImages) {
          setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, hasMultipleImages, projectImages.length]);

  return (
    <div className="relative min-h-screen bg-[#06070A] text-slate-100 selection:bg-sky-400/30">
      {/* Persistent 3D WebGL Point-Cloud & Synaptic Network Canvas */}
      <SynapticParticleCanvas
        formationMode={formationMode}
        scrollActiveFormation={activeScrollFormation}
        turbulence={turbulence}
        pulseTrigger={pulseTrigger}
        onTelemetryUpdate={handleTelemetryUpdate}
      />

      {/* Subtle Architectural Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-grid-pattern bg-[size:64px_64px] opacity-30" />

      {/* Top Sticky Navigation Bar: Back Navigation & Project Switcher */}
      <header className="sticky top-0 z-40 border-b border-sky-500/20 bg-[#06070A]/85 backdrop-blur-2xl relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-sky-400/50 after:to-transparent">
        <div className="mx-auto max-w-[1380px] px-3 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Back to Projects Button & Breadcrumb */}
          <div className="flex items-center gap-2.5 sm:gap-5 min-w-0">
            <Link
              href="/#projects"
              className="group relative inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-sky-400/30 bg-sky-500/5 px-2.5 sm:px-3.5 py-2 font-mono text-[11px] sm:text-xs font-semibold text-sky-200 hover:text-white hover:border-sky-400/70 hover:bg-sky-500/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 shrink-0"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-sky-400 group-hover:-translate-x-1 transition-transform shrink-0" />
              <span className="tracking-wider">
                RETURN<span className="hidden min-[380px]:inline">_TO_PROJECTS</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="text-slate-600">//</span>
              <span className="tracking-wider text-slate-400">ARCHIVES</span>
              <span className="text-sky-500/40">/</span>
              <span className="text-slate-300 uppercase">{project.categoryLabel}</span>
              <span className="text-sky-500/40">/</span>
              <span className="rounded border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 font-bold text-sky-300">
                {project.code}
              </span>
            </div>
          </div>

          {/* Right: Project Counter & Prev / Next Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-sky-500/25 bg-sky-950/20 px-2 sm:px-3 py-1.5 font-mono text-[11px] sm:text-xs shadow-[inset_0_0_12px_rgba(56,189,248,0.06)]">
              <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline text-slate-400">NODE</span>
              <span className="font-bold text-white tracking-widest">
                {String(projectNodeNumber).padStart(2, "0")}
              </span>
              <span className="text-slate-600">/</span>
              <span className="font-bold text-sky-400 tracking-widest">
                {String(totalProjects).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/60 p-1">
              <Link
                href={`/projects/${prevProject.id}`}
                title={`Previous: ${prevProject.title}`}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 hover:bg-sky-400/10 hover:text-sky-300 hover:border-sky-400/30 transition-all"
              >
                <ChevronLeft className="h-3.5 w-3.5 text-sky-400" />
                <span className="hidden lg:inline">PREV</span>
              </Link>
              <div className="h-3.5 w-px bg-white/10" />
              <Link
                href={`/projects/${nextProject.id}`}
                title={`Next: ${nextProject.title}`}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 hover:bg-sky-400/10 hover:text-sky-300 hover:border-sky-400/30 transition-all"
              >
                <span className="hidden lg:inline">NEXT</span>
                <ChevronRight className="h-3.5 w-3.5 text-sky-400" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Project Detail Content */}
      <main className="relative z-10 py-8 sm:py-14 px-3.5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1380px] space-y-6 sm:space-y-8">
          {/* 1. PROJECT HEADER */}
          <section className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* High-tech Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-sky-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-sky-400/60" />

            {/* Ambient Sci-Fi Glow */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glowBg} opacity-50`}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Left Column: Project Name, Category, Year, Status & Actions */}
              <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-sky-400/35 bg-sky-500/10 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYS.PROJECT // {project.code}</span>
                  </span>
                  <span
                    className={`rounded-lg border px-2.5 sm:px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold ${accent.badge}`}
                  >
                    {project.categoryLabel}
                  </span>
                  <span className="rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[11px] sm:text-xs text-slate-300">
                    {project.year}
                  </span>
                </div>

                <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                  {project.title}
                </h1>

                {/* Mobile & Tablet Preview Images (Positioned below Project Title on < lg) */}
                <div className="block lg:hidden pt-2">
                  <div className="relative overflow-hidden rounded-2xl border border-sky-400/30 bg-[#080B14] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.1)]">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2 left-2 z-20 h-2 w-2 border-t border-l border-sky-400/80" />
                    <div className="pointer-events-none absolute top-2 right-2 z-20 h-2 w-2 border-t border-r border-sky-400/80" />
                    <div className="pointer-events-none absolute bottom-11 left-2 z-20 h-2 w-2 border-b border-l border-sky-400/80" />
                    <div className="pointer-events-none absolute bottom-11 right-2 z-20 h-2 w-2 border-b border-r border-sky-400/80" />

                    {/* 16:9 Image Container */}
                    <div
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onClick={() => {
                        if (currentImage && !hasCurrentImageError) {
                          setIsLightboxOpen(true);
                          handleTriggerPulse();
                        }
                      }}
                      className={`relative aspect-video w-full overflow-hidden bg-slate-950/90 group select-none ${
                        currentImage && !hasCurrentImageError
                          ? "cursor-pointer"
                          : ""
                      }`}
                    >
                      {currentImage && !hasCurrentImageError ? (
                        <img
                          key={currentImage}
                          src={currentImage}
                          alt={`${project.title} - Preview ${currentImageIndex + 1}`}
                          onError={() =>
                            setImgErrors((prev) => ({
                              ...prev,
                              [currentImageIndex]: true,
                            }))
                          }
                          className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out"
                        />
                      ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#0C0F17] to-indigo-950/40 p-6 text-center">
                          <Terminal className="h-12 w-12 text-sky-400/60 mb-3" />
                          <span className="font-mono text-xs text-slate-300 font-semibold">
                            {project.code}
                          </span>
                          <span className="font-mono text-[11px] text-slate-500 mt-1">
                            {project.categoryLabel}
                          </span>
                        </div>
                      )}

                      {/* Click to Zoom Hint Overlay */}
                      {currentImage && !hasCurrentImageError && (
                        <div className="pointer-events-none absolute top-3 right-3 rounded-lg border border-sky-400/40 bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-sky-200 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.25)] z-20">
                          <Maximize2 className="h-3 w-3 text-sky-400" />
                          <span>OPTICAL_HUD // ENLARGE</span>
                        </div>
                      )}

                      {/* Multiple Images Navigation Controls */}
                      {hasMultipleImages && (
                        <>
                          <button
                            type="button"
                            onClick={handlePrevImage}
                            aria-label="Previous Image"
                            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 text-sky-300 backdrop-blur-md hover:border-sky-400 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all z-10"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            type="button"
                            onClick={handleNextImage}
                            aria-label="Next Image"
                            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 text-sky-300 backdrop-blur-md hover:border-sky-400 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all z-10"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>

                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-black/80 px-2.5 py-1 backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                            {projectImages.map((_, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setCurrentImageIndex(idx);
                                  handleTriggerPulse();
                                }}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                  currentImageIndex === idx
                                    ? "w-4 bg-sky-400 shadow-[0_0_10px_#38bdf8]"
                                    : "w-1.5 bg-white/40 hover:bg-white/80"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Image Footer Info */}
                    <div className="flex items-center justify-end gap-2 px-4 py-2.5 border-t border-emerald-500/40 bg-gradient-to-r from-emerald-950/60 via-emerald-950/90 to-emerald-900/90 text-emerald-300 font-mono text-xs font-bold tracking-wider shadow-[inset_0_1px_0_rgba(16,185,129,0.2)]">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span className="tracking-widest">STATUS // {project.status.toUpperCase()}</span>
                    </div>
                  </div>
                </div>

                {/* Header Quick Actions - Futuristic Cyber Command Button */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                  <a
                    href="#project-links"
                    onClick={handleTriggerPulse}
                    className="group relative inline-flex items-center justify-between sm:justify-center gap-3 overflow-hidden rounded-xl border border-sky-400/40 bg-gradient-to-r from-sky-950/80 via-[#0B1226] to-indigo-950/80 backdrop-blur-xl px-5 sm:px-6 py-3 sm:py-3.5 font-mono text-xs sm:text-[13px] font-bold tracking-wider text-white shadow-[0_0_25px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-sky-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.45),inset_0_1px_0_rgba(255,255,255,0.25)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 select-none cursor-pointer"
                  >
                    {/* Corner HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-1.5 left-1.5 h-1.5 w-1.5 border-t border-l border-sky-400/80 group-hover:border-white transition-colors" />
                    <div className="pointer-events-none absolute bottom-1.5 right-1.5 h-1.5 w-1.5 border-b border-r border-sky-400/80 group-hover:border-white transition-colors" />

                    {/* Cyber Light Beam Shimmer Sweeper */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-400/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                    {/* Left: Futuristic Icon Pod & Live Signal Ping */}
                    <div className="relative z-10 flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-500/15 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.3)] group-hover:bg-sky-400 group-hover:text-slate-950 group-hover:border-sky-300 transition-all duration-300 shrink-0">
                        <FolderGit2 className="h-4 w-4 transition-transform group-hover:scale-110" />
                      </div>
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-80" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                      </span>
                    </div>

                    {/* Center: Command Title */}
                    <span className="relative z-10 font-mono tracking-wider font-extrabold text-slate-100 group-hover:text-white transition-colors">
                      PROJECT LINKS &amp; RESOURCES
                    </span>

                    {/* Right: Holographic Telemetry Badge */}
                    <span className="relative z-10 inline-flex items-center gap-1 font-mono text-[10px] text-sky-300 border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 rounded-md group-hover:border-sky-300 group-hover:bg-sky-400/20 group-hover:text-white transition-all shrink-0">
                      <span>OPEN</span>
                      <ChevronRight className="h-3 w-3 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Column: Cover Image (Desktop Only, lg+) */}
              <div className="hidden lg:block lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-sky-400/30 bg-[#080B14] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.1)]">
                  {/* Optical HUD Crosshairs */}
                  <div className="pointer-events-none absolute top-2 left-2 z-20 h-2 w-2 border-t border-l border-sky-400/80" />
                  <div className="pointer-events-none absolute top-2 right-2 z-20 h-2 w-2 border-t border-r border-sky-400/80" />
                  <div className="pointer-events-none absolute bottom-11 left-2 z-20 h-2 w-2 border-b border-l border-sky-400/80" />
                  <div className="pointer-events-none absolute bottom-11 right-2 z-20 h-2 w-2 border-b border-r border-sky-400/80" />

                  {/* 16:9 Image Container */}
                  <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => {
                      if (currentImage && !hasCurrentImageError) {
                        setIsLightboxOpen(true);
                        handleTriggerPulse();
                      }
                    }}
                    className={`relative aspect-video w-full overflow-hidden bg-slate-950/90 group select-none ${
                      currentImage && !hasCurrentImageError
                        ? "cursor-pointer"
                        : ""
                    }`}
                  >
                    {currentImage && !hasCurrentImageError ? (
                      <img
                        key={currentImage}
                        src={currentImage}
                        alt={`${project.title} - Preview ${currentImageIndex + 1}`}
                        onError={() =>
                          setImgErrors((prev) => ({
                            ...prev,
                            [currentImageIndex]: true,
                          }))
                        }
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#0C0F17] to-indigo-950/40 p-6 text-center">
                        <Terminal className="h-12 w-12 text-sky-400/60 mb-3" />
                        <span className="font-mono text-xs text-slate-300 font-semibold">
                          {project.code}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500 mt-1">
                          {project.categoryLabel}
                        </span>
                      </div>
                    )}

                    {/* Click to Zoom Hint Overlay (Consistent with Certificate) */}
                    {currentImage && !hasCurrentImageError && (
                      <div className="pointer-events-none absolute top-3 right-3 rounded-lg border border-sky-400/40 bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-sky-200 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.25)] z-20">
                        <Maximize2 className="h-3 w-3 text-sky-400" />
                        <span>OPTICAL_HUD // ENLARGE</span>
                      </div>
                    )}

                    {/* Multiple Images Navigation Controls */}
                    {hasMultipleImages && (
                      <>
                        {/* Navigation Arrows */}
                        <button
                          type="button"
                          onClick={handlePrevImage}
                          aria-label="Previous Image"
                          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 text-sky-300 backdrop-blur-md hover:border-sky-400 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all z-10"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextImage}
                          aria-label="Next Image"
                          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 text-sky-300 backdrop-blur-md hover:border-sky-400 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all z-10"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>

                        {/* Bottom Center Indicator Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-black/80 px-2.5 py-1 backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                          {projectImages.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                                handleTriggerPulse();
                              }}
                              aria-label={`Go to slide ${idx + 1}`}
                              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                currentImageIndex === idx
                                  ? "w-4 bg-sky-400 shadow-[0_0_10px_#38bdf8]"
                                  : "w-1.5 bg-white/40 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Image Footer Info: Right-Aligned Cryptographic Status (Consistent with Certificate) */}
                  <div className="flex items-center justify-end gap-2 px-4 py-2.5 border-t border-emerald-500/40 bg-gradient-to-r from-emerald-950/60 via-emerald-950/90 to-emerald-900/90 text-emerald-300 font-mono text-xs font-bold tracking-wider shadow-[inset_0_1px_0_rgba(16,185,129,0.2)]">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="tracking-widest">STATUS // {project.status.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. PROJECT OVERVIEW */}
          <section className="relative rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-sky-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-sky-400/60" />

            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400 mb-6">
              <BookOpen className="h-4 w-4 shrink-0" />
              <span>[ 01 // SYSTEM OVERVIEW & ARCHITECTURAL SCOPE ]</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Full Description & Operational Context */}
              <div className="lg:col-span-7 space-y-5">
                <div className="rounded-2xl border border-sky-500/20 bg-black/60 p-4 sm:p-6 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2.5">
                    PROJECT OVERVIEW & OPERATIONAL CONTEXT
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {project.overview}
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-500/25 bg-amber-950/15 p-4 sm:p-6 shadow-[inset_0_0_15px_rgba(245,158,11,0.05)]">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-amber-300 mb-2.5">
                    PROBLEM STATEMENT & SYSTEM CONSTRAINTS
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Project Objectives */}
              <div className="lg:col-span-5 rounded-2xl border border-emerald-500/20 bg-black/60 p-4 sm:p-6 flex flex-col justify-between shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-300 mb-4">
                    <Target className="h-4 w-4 shrink-0" />
                    <span>TARGET & OBJECTIVES</span>
                  </div>
                  <ul className="space-y-3.5">
                    {project.objectives.map((obj, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400"
                        />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="tracking-wider">SYSTEM_DOMAIN</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-sky-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                    {project.categoryLabel}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3. KEY FEATURES / HIGHLIGHTS */}
          <section className="relative rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-sky-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-sky-400/60" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-sky-500/20">
              <div className="font-mono text-xs uppercase tracking-widest text-sky-400 flex items-center gap-2">
                <Sparkles className="h-4 w-4 shrink-0" />
                <span>[ 02 // KEY CAPABILITIES & SYSTEM HIGHLIGHTS ]</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 font-mono text-xs text-sky-200">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-white font-bold">{project.features.length}</span>
                <span>CAPABILITY_NODES</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-black/60 p-4 sm:p-6 transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] flex flex-col justify-between"
                >
                  {/* Micro Corner Ticks */}
                  <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t border-l border-sky-400/50" />
                  <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b border-r border-sky-400/50" />

                  {/* Corner Accent Tick */}
                  <span className="pointer-events-none absolute top-2 right-3 font-mono text-[9px] text-sky-400/30 select-none group-hover:text-sky-400/80 transition-colors">
                    ┌ F-0{idx + 1} ┐
                  </span>

                  <div>
                    <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/15 font-mono text-xs font-bold text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                          0{idx + 1}
                        </span>
                        <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                          {feat.title}
                        </h3>
                      </div>
                      {/* Desktop Badge (lg+): Right aligned inline next to title */}
                      {feat.badge && (
                        <span className="hidden lg:inline-flex rounded-lg border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-sky-300 shrink-0">
                          {feat.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed pl-0 sm:pl-9 font-normal">
                      {feat.description}
                    </p>

                    {/* Bottom Badge for Mobile & Tablet (< lg): Right aligned after description */}
                    {feat.badge && (
                      <div className="flex lg:hidden justify-end mt-3">
                        <span className="rounded-lg border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold text-sky-300">
                          {feat.badge}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. TECHNICAL APPROACH / PROCESS */}
          <section className="relative rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-sky-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-sky-400/60" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-sky-500/20">
              <div className="font-mono text-xs uppercase tracking-widest text-sky-400 flex items-center gap-2">
                <Compass className="h-4 w-4 shrink-0" />
                <span>[ 03 // EXECUTION PIPELINE & ARCHITECTURAL PROTOCOL ]</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1.5 font-mono text-xs text-indigo-200">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-white font-bold">{project.pipelineSteps.length}</span>
                <span>PIPELINE_STAGES</span>
              </div>
            </div>

            {/* Core Architecture / Methodology / Pipeline Overview */}
            <div className="rounded-2xl border border-sky-500/20 bg-black/60 p-4 sm:p-6 mb-6 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
              <div className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2.5">
                CORE ARCHITECTURAL FRAMEWORK, METHODOLOGY & PIPELINE PROTOCOL
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {project.architectureSummary}
              </p>
            </div>

            {/* Development Workflow & Execution Stages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.pipelineSteps.map((st, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-black/60 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]"
                >
                  {/* Micro Corner Ticks */}
                  <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t border-l border-sky-400/40" />
                  <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b border-r border-sky-400/40" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-sky-400">
                        STAGE 0{i + 1}
                      </span>
                      <span className="rounded-md bg-emerald-400/15 border border-emerald-400/30 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                        {st.latencyOrMetric}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {st.step.replace(/^\d+\.\s*/, "")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                      {st.detail}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate-500">
                    <span className="text-emerald-400/90 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>VALIDATED</span>
                    </span>
                    <span>PROTO.0{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. TECH STACK & TOOLS */}
          <section className="relative rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-sky-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-sky-400/60" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-sky-500/20">
              <div className="font-mono text-xs uppercase tracking-widest text-sky-400 flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span>[ 04 // HARDWARE & SOFTWARE SPECIFICATIONS ]</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-sky-500/10 px-3.5 py-1.5 font-mono text-xs text-sky-200">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-white font-bold">{project.techStack.length}</span>
                <span>MODULES_DEPLOYED</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="group relative rounded-xl border border-sky-400/25 bg-black/60 px-4 py-2.5 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/10 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] flex items-center gap-2.5 cursor-default"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-500/10 text-sky-300">
                    <Layers className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-sky-200 transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 6. RESULTS / OUTCOMES */}
          <section className="relative rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-emerald-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-emerald-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-emerald-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-emerald-400/60" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-sky-500/20">
              <div className="font-mono text-xs uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 shrink-0" />
                <span>[ 05 // PERFORMANCE TELEMETRY & MEASURED IMPACT ]</span>
              </div>
            </div>

            {/* System Evaluation & Empirical Telemetry Narrative */}
            <div className="rounded-2xl border border-sky-500/20 bg-black/60 p-4 sm:p-6 mb-6 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                <h3 className="font-mono text-xs uppercase tracking-widest text-sky-400 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 shrink-0" />
                  <span>SYSTEM EVALUATION & EMPIRICAL VALIDATION</span>
                </h3>
                <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED_TELEMETRY
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {project.evaluation}
              </p>
            </div>

            {/* Measured Impact & Final Deliverables Overview */}
            <div className="rounded-2xl border border-emerald-500/20 bg-black/60 p-4 sm:p-6 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
              <h3 className="font-mono text-xs uppercase tracking-widest text-emerald-300 mb-3.5 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>KEY PROJECT DELIVERABLES & MEASURED IMPACT</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.outcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-xs sm:text-sm text-slate-300 leading-relaxed hover:border-emerald-500/30 transition-colors font-normal"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-400" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. PROJECT LINKS & RESOURCES */}
          <section
            id="project-links"
            className="relative rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)] scroll-mt-24"
          >
            {/* Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-sky-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-sky-400/60" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-sky-500/20">
              <div className="font-mono text-xs uppercase tracking-widest text-sky-400 flex items-center gap-2">
                <Globe className="h-4 w-4 shrink-0" />
                <span>[ 06 // ACCESS GATEWAYS & DOCUMENTATION PORTALS ]</span>
              </div>
            </div>

            <div
              className={`grid grid-cols-1 ${
                project.repoUrl
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "md:grid-cols-2"
              } gap-4 sm:gap-6 w-full`}
            >
              {/* GitHub Repository (If available) */}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleTriggerPulse}
                  className="group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-black/60 p-5 transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-500/5 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                        <FolderGit2 className="h-5 w-5" />
                      </span>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-sky-300 transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                      GitHub Repository
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                      Project source code, architectural configuration, and technical repository documentation.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 font-mono text-xs text-sky-400 flex items-center gap-1.5 font-semibold">
                    <span>LAUNCH REPOSITORY</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              )}

              {/* Technical Specification / Documentation */}
              <div
                className="group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-black/60 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                      <FileText className="h-5 w-5" />
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-sky-300">
                      {project.techStack[0]?.toUpperCase() || "TECH SPEC"}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    Technical Documentation & Spec
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    Primary architectural specification:{" "}
                    <code className="text-sky-300 font-mono text-xs break-all">
                      {project.code}
                    </code>{" "}
                    ({project.techStack.slice(0, 4).join(", ")}).
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 font-mono text-xs text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>DOCUMENTATION VALIDATED</span>
                </div>
              </div>

              {/* System Architecture & Quality Verification Protocol (Universal across all categories) */}
              <div
                className={`group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-black/60 p-5 flex flex-col justify-between ${
                  project.repoUrl ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <span className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-300">
                      100% TYPE-SAFE
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    Architecture & Quality Protocol
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    Engineered under strict static type-soundness, modular component architecture, runtime profiling, and deterministic execution standards.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 font-mono text-xs text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>QUALITY AUDIT PASSED</span>
                </div>
              </div>
            </div>
          </section>

          {/* Project Switcher Navigation (Previous Project & Next Project) */}
          <section className="pt-6 border-t border-sky-500/20 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="font-mono text-xs uppercase tracking-widest text-slate-400">
                // SYSTEM_GATEWAYS // SWITCH PROJECT NODE
              </div>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-sky-400 hover:text-sky-300 transition-colors"
              >
                <Grid className="h-3.5 w-3.5" />
                <span>INDEX_MATRIX // {totalProjects} PROJECTS</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Previous Project Card */}
              <Link
                href={`/projects/${prevProject.id}`}
                onClick={handleTriggerPulse}
                className="group relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t border-l border-sky-400/50" />
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-sky-400 font-bold group-hover:text-white transition-colors">
                      <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1.5 transition-transform" />
                      <span>◄ PREV_PROJECT</span>
                    </span>
                    <span
                      className={`rounded-lg border px-2.5 py-0.5 font-mono text-[11px] font-semibold ${prevAccent.badge}`}
                    >
                      {prevProject.categoryLabel}
                    </span>
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-400 mb-1">
                    {prevProject.code}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {prevProject.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 mt-3 font-normal">
                  {prevProject.summary}
                </p>
              </Link>

              {/* Next Project Card */}
              <Link
                href={`/projects/${nextProject.id}`}
                onClick={handleTriggerPulse}
                className="group relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between text-left md:text-right"
              >
                <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t border-r border-sky-400/50" />
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`rounded-lg border px-2.5 py-0.5 font-mono text-[11px] font-semibold ${nextAccent.badge}`}
                    >
                      {nextProject.categoryLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-sky-400 font-bold group-hover:text-white transition-colors">
                      <span>NEXT_PROJECT ►</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-400 mb-1">
                    {nextProject.code}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {nextProject.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 mt-3 font-normal">
                  {nextProject.summary}
                </p>
              </Link>
            </div>

            {/* Related Projects in the Same Category */}
            {relatedProjects.length > 0 && (
              <div className="relative rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8">
                <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t border-l border-sky-400/50" />
                <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b border-r border-sky-400/50" />

                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-sky-400">
                      // RELATED_CLUSTERS // {project.categoryLabel.toUpperCase()}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                      Related Domain Projects ({project.categoryLabel})
                    </h3>
                  </div>
                  <Link
                    href="/#projects"
                    className="rounded-xl border border-sky-400/30 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-400 px-4 py-2 font-mono text-xs text-sky-200 hover:text-white transition-all"
                  >
                    VIEW_ALL_PROJECTS
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/projects/${rel.id}`}
                      className="group rounded-2xl border border-sky-500/20 bg-black/60 p-4 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-500/5 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-slate-400 mb-1.5">
                          <span className="font-bold text-sky-400">{rel.code}</span>
                          <span>{rel.year}</span>
                        </div>
                        <div className="font-display text-sm font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2">
                          {rel.title}
                        </div>
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] text-slate-400 group-hover:text-sky-300 transition-colors">
                        <span>INSPECT_NODE</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Bottom-Right Interactive 3D Particle Engine HUD */}
      <ParticleControllerHUD
        formationMode={formationMode}
        onSelectFormation={(mode) => {
          setFormationMode(mode);
          handleTriggerPulse();
        }}
        turbulence={turbulence}
        onChangeTurbulence={setTurbulence}
        onTriggerPulse={handleTriggerPulse}
        telemetry={telemetry}
      />

      {/* Fullscreen / Large Image Lightbox Modal (Consistent with Certificate Modal) */}
      {isLightboxOpen && currentImage && !hasCurrentImageError && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full overflow-hidden rounded-3xl border border-sky-400/40 bg-[#080B14] shadow-[0_24px_100px_rgba(0,0,0,0.95),0_0_50px_rgba(56,189,248,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Optical HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 z-20 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
            <div className="pointer-events-none absolute top-3 right-3 z-20 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
            <div className="pointer-events-none absolute bottom-3 left-3 z-20 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
            <div className="pointer-events-none absolute bottom-3 right-3 z-20 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

            {/* Header: Code, Title & Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-sky-500/20 bg-black/80">
              <div className="flex items-center gap-3 font-mono text-xs text-slate-200 truncate pr-3">
                <span className="inline-flex items-center gap-1.5 rounded border border-sky-400/40 bg-sky-500/10 px-2 py-0.5 font-bold text-sky-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.code}
                </span>
                <span className="text-slate-400 truncate">// {project.title}</span>
                {hasMultipleImages && (
                  <span className="ml-2 text-sky-400 font-mono text-[11px]">
                    [{currentImageIndex + 1}/{projectImages.length}]
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="flex items-center gap-1.5 rounded-xl border border-sky-400/30 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-400 px-3 py-1.5 font-mono text-xs text-sky-200 hover:text-white transition-all shrink-0 cursor-pointer"
                aria-label="Close preview"
              >
                <span className="hidden sm:inline text-[11px] text-slate-400">ESC</span>
                <X className="h-4 w-4 text-sky-400" />
              </button>
            </div>

            {/* Modal Body: Image & Controls */}
            <div className="relative bg-black/90 flex items-center justify-center max-h-[80vh] overflow-hidden p-4">
              <img
                key={currentImage}
                src={currentImage}
                alt={`${project.title} - View ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[76vh] object-contain rounded-lg border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              />

              {/* Lightbox Navigation Arrows for Multiple Images */}
              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous Image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 backdrop-blur-md text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 hover:text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next Image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 backdrop-blur-md text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 hover:text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Bottom Indicator Dots inside Modal */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 rounded-full border border-sky-400/30 bg-black/80 px-2.5 py-1 backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                    {projectImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                          handleTriggerPulse();
                        }}
                        aria-label={`Jump to image ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          currentImageIndex === idx
                            ? "w-4 bg-sky-400 shadow-[0_0_10px_#38bdf8]"
                            : "w-1.5 bg-white/40 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
