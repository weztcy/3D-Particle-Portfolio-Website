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
import WebDevDetailView from "./categories/WebDevDetailView";
import DataAnalyticsDetailView from "./categories/DataAnalyticsDetailView";
import AIEngineeringDetailView from "./categories/AIEngineeringDetailView";
import MachineLearningDetailView from "./categories/MachineLearningDetailView";
import DesktopMobileDetailView from "./categories/DesktopMobileDetailView";
import UIUXDetailView from "./categories/UIUXDetailView";
import CodeLearningDetailView from "./categories/CodeLearningDetailView";
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
        headerBorder: "border-sky-500/20",
        headerGlow: "after:via-sky-400/50",
        returnBtn: "border-sky-400/30 bg-sky-500/5 text-sky-200 hover:text-white hover:border-sky-400/70 hover:bg-sky-500/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]",
        returnIcon: "text-sky-400",
        divider: "text-sky-500/40",
        breadcrumbBadge: "border-sky-400/30 bg-sky-400/10 text-sky-300",
        nodeBox: "border-sky-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(56,189,248,0.06)]",
        nodeTotal: "text-sky-400",
        nodePulse: "bg-sky-400",
        navHover: "hover:bg-sky-400/10 hover:text-sky-300 hover:border-sky-400/30",
        navIcon: "text-sky-400",
        selection: "selection:bg-sky-400/30",
        cardBorder: "border-sky-500/20",
        cardHover: "hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]",
        crosshair: "border-sky-400/60",
        textAccent: "text-sky-400",
        textHover: "group-hover:text-sky-300",
        actionBtn: "border-sky-400/40 bg-sky-500/15 hover:bg-sky-500/25 hover:border-sky-400 text-sky-200 hover:text-white",
      };
    case "indigo":
      return {
        badge: "border-indigo-400/35 bg-indigo-400/10 text-indigo-300",
        metricText: "text-indigo-400",
        hoverBorder: "hover:border-indigo-400/50",
        borderAccent: "border-indigo-400/30",
        glowBg: "from-indigo-500/15 via-transparent to-transparent",
        iconBg: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
        headerBorder: "border-indigo-500/20",
        headerGlow: "after:via-indigo-400/50",
        returnBtn: "border-indigo-400/30 bg-indigo-500/5 text-indigo-200 hover:text-white hover:border-indigo-400/70 hover:bg-indigo-500/15 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]",
        returnIcon: "text-indigo-400",
        divider: "text-indigo-500/40",
        breadcrumbBadge: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
        nodeBox: "border-indigo-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(99,102,241,0.06)]",
        nodeTotal: "text-indigo-400",
        nodePulse: "bg-indigo-400",
        navHover: "hover:bg-indigo-400/10 hover:text-indigo-300 hover:border-indigo-400/30",
        navIcon: "text-indigo-400",
        selection: "selection:bg-indigo-500/30",
        cardBorder: "border-indigo-500/20",
        cardHover: "hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.18)]",
        crosshair: "border-indigo-400/60",
        textAccent: "text-indigo-400",
        textHover: "group-hover:text-indigo-300",
        actionBtn: "border-indigo-400/40 bg-indigo-500/15 hover:bg-indigo-500/25 hover:border-indigo-400 text-indigo-200 hover:text-white",
      };
    case "emerald":
      return {
        badge: "border-emerald-400/35 bg-emerald-400/10 text-emerald-300",
        metricText: "text-emerald-400",
        hoverBorder: "hover:border-emerald-400/50",
        borderAccent: "border-emerald-400/30",
        glowBg: "from-emerald-500/15 via-transparent to-transparent",
        iconBg: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
        headerBorder: "border-emerald-500/20",
        headerGlow: "after:via-emerald-400/50",
        returnBtn: "border-emerald-400/30 bg-emerald-500/5 text-emerald-200 hover:text-white hover:border-emerald-400/70 hover:bg-emerald-500/15 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
        returnIcon: "text-emerald-400",
        divider: "text-emerald-500/40",
        breadcrumbBadge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
        nodeBox: "border-emerald-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(16,185,129,0.06)]",
        nodeTotal: "text-emerald-400",
        nodePulse: "bg-emerald-400",
        navHover: "hover:bg-emerald-400/10 hover:text-emerald-300 hover:border-emerald-400/30",
        navIcon: "text-emerald-400",
        selection: "selection:bg-emerald-500/30",
        cardBorder: "border-emerald-500/20",
        cardHover: "hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]",
        crosshair: "border-emerald-400/60",
        textAccent: "text-emerald-400",
        textHover: "group-hover:text-emerald-300",
        actionBtn: "border-emerald-400/40 bg-emerald-500/15 hover:bg-emerald-500/25 hover:border-emerald-400 text-emerald-200 hover:text-white",
      };
    case "amber":
      return {
        badge: "border-amber-400/35 bg-amber-400/10 text-amber-300",
        metricText: "text-amber-400",
        hoverBorder: "hover:border-amber-400/50",
        borderAccent: "border-amber-400/30",
        glowBg: "from-amber-500/15 via-transparent to-transparent",
        iconBg: "border-amber-400/30 bg-amber-400/10 text-amber-300",
        headerBorder: "border-amber-500/20",
        headerGlow: "after:via-amber-400/50",
        returnBtn: "border-amber-400/30 bg-amber-500/5 text-amber-200 hover:text-white hover:border-amber-400/70 hover:bg-amber-500/15 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
        returnIcon: "text-amber-400",
        divider: "text-amber-400/40",
        breadcrumbBadge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
        nodeBox: "border-amber-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(245,158,11,0.06)]",
        nodeTotal: "text-amber-400",
        nodePulse: "bg-amber-400",
        navHover: "hover:bg-amber-400/10 hover:text-amber-300 hover:border-amber-400/30",
        navIcon: "text-amber-400",
        selection: "selection:bg-amber-400/30",
        cardBorder: "border-amber-500/20",
        cardHover: "hover:border-amber-400/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.18)]",
        crosshair: "border-amber-400/60",
        textAccent: "text-amber-400",
        textHover: "group-hover:text-amber-300",
        actionBtn: "border-amber-400/40 bg-amber-500/15 hover:bg-amber-500/25 hover:border-amber-400 text-amber-200 hover:text-white",
      };
    case "rose":
      return {
        badge: "border-rose-400/35 bg-rose-400/10 text-rose-300",
        metricText: "text-rose-400",
        hoverBorder: "hover:border-rose-400/50",
        borderAccent: "border-rose-400/30",
        glowBg: "from-rose-500/15 via-transparent to-transparent",
        iconBg: "border-rose-400/30 bg-rose-400/10 text-rose-300",
        headerBorder: "border-rose-500/20",
        headerGlow: "after:via-rose-400/50",
        returnBtn: "border-rose-400/30 bg-rose-500/5 text-rose-200 hover:text-white hover:border-rose-400/70 hover:bg-rose-500/15 hover:shadow-[0_0_20px_rgba(244,63,94,0.25)]",
        returnIcon: "text-rose-400",
        divider: "text-rose-500/40",
        breadcrumbBadge: "border-rose-400/30 bg-rose-400/10 text-rose-300",
        nodeBox: "border-rose-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(244,63,94,0.06)]",
        nodeTotal: "text-rose-400",
        nodePulse: "bg-rose-400",
        navHover: "hover:bg-rose-400/10 hover:text-rose-300 hover:border-rose-400/30",
        navIcon: "text-rose-400",
        selection: "selection:bg-rose-500/30",
        cardBorder: "border-rose-500/20",
        cardHover: "hover:border-rose-400/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.18)]",
        crosshair: "border-rose-400/60",
        textAccent: "text-rose-400",
        textHover: "group-hover:text-rose-300",
        actionBtn: "border-rose-400/40 bg-rose-500/15 hover:bg-rose-500/25 hover:border-rose-400 text-rose-200 hover:text-white",
      };
    case "fuchsia":
      return {
        badge: "border-fuchsia-400/35 bg-fuchsia-400/10 text-fuchsia-300",
        metricText: "text-fuchsia-400",
        hoverBorder: "hover:border-fuchsia-400/50",
        borderAccent: "border-fuchsia-400/30",
        glowBg: "from-fuchsia-500/15 via-transparent to-transparent",
        iconBg: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300",
        headerBorder: "border-fuchsia-500/20",
        headerGlow: "after:via-fuchsia-400/50",
        returnBtn: "border-fuchsia-400/30 bg-fuchsia-500/5 text-fuchsia-200 hover:text-white hover:border-fuchsia-400/70 hover:bg-fuchsia-500/15 hover:shadow-[0_0_20px_rgba(217,70,239,0.25)]",
        returnIcon: "text-fuchsia-400",
        divider: "text-fuchsia-500/40",
        breadcrumbBadge: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300",
        nodeBox: "border-fuchsia-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(217,70,239,0.06)]",
        nodeTotal: "text-fuchsia-400",
        nodePulse: "bg-fuchsia-400",
        navHover: "hover:bg-fuchsia-400/10 hover:text-fuchsia-300 hover:border-fuchsia-400/30",
        navIcon: "text-fuchsia-400",
        selection: "selection:bg-fuchsia-500/30",
        cardBorder: "border-fuchsia-500/20",
        cardHover: "hover:border-fuchsia-400/50 hover:shadow-[0_0_30px_rgba(217,70,239,0.18)]",
        crosshair: "border-fuchsia-400/60",
        textAccent: "text-fuchsia-400",
        textHover: "group-hover:text-fuchsia-300",
        actionBtn: "border-fuchsia-400/40 bg-fuchsia-500/15 hover:bg-fuchsia-500/25 hover:border-fuchsia-400 text-fuchsia-200 hover:text-white",
      };
    case "orange":
      return {
        badge: "border-orange-400/35 bg-orange-500/10 text-orange-300",
        metricText: "text-orange-400",
        hoverBorder: "hover:border-orange-400/50",
        borderAccent: "border-orange-400/30",
        glowBg: "from-orange-500/15 via-transparent to-transparent",
        iconBg: "border-orange-400/30 bg-orange-500/10 text-orange-300",
        headerBorder: "border-orange-500/20",
        headerGlow: "after:via-orange-400/50",
        returnBtn: "border-orange-400/30 bg-orange-500/5 text-orange-200 hover:text-white hover:border-orange-400/70 hover:bg-orange-500/15 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]",
        returnIcon: "text-orange-400",
        divider: "text-orange-500/40",
        breadcrumbBadge: "border-orange-400/30 bg-orange-500/10 text-orange-300",
        nodeBox: "border-orange-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(249,115,22,0.06)]",
        nodeTotal: "text-orange-400",
        nodePulse: "bg-orange-400",
        navHover: "hover:bg-orange-400/10 hover:text-orange-300 hover:border-orange-400/30",
        navIcon: "text-orange-400",
        selection: "selection:bg-orange-500/30",
        cardBorder: "border-orange-500/20",
        cardHover: "hover:border-orange-400/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.18)]",
        crosshair: "border-orange-400/60",
        textAccent: "text-orange-400",
        textHover: "group-hover:text-orange-300",
        actionBtn: "border-orange-400/40 bg-orange-500/15 hover:bg-orange-500/25 hover:border-orange-400 text-orange-200 hover:text-white",
      };
    case "teal":
      return {
        badge: "border-teal-400/35 bg-teal-400/10 text-teal-300",
        metricText: "text-teal-400",
        hoverBorder: "hover:border-teal-400/50",
        borderAccent: "border-teal-400/30",
        glowBg: "from-teal-500/15 via-transparent to-transparent",
        iconBg: "border-teal-400/30 bg-teal-400/10 text-teal-300",
        headerBorder: "border-teal-500/20",
        headerGlow: "after:via-teal-400/50",
        returnBtn: "border-teal-400/30 bg-teal-500/5 text-teal-200 hover:text-white hover:border-teal-400/70 hover:bg-teal-500/15 hover:shadow-[0_0_20px_rgba(20,184,166,0.25)]",
        returnIcon: "text-teal-400",
        divider: "text-teal-500/40",
        breadcrumbBadge: "border-teal-400/30 bg-teal-400/10 text-teal-300",
        nodeBox: "border-teal-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(20,184,166,0.06)]",
        nodeTotal: "text-teal-400",
        nodePulse: "bg-teal-400",
        navHover: "hover:bg-teal-400/10 hover:text-teal-300 hover:border-teal-400/30",
        navIcon: "text-teal-400",
        selection: "selection:bg-teal-500/30",
        cardBorder: "border-teal-500/20",
        cardHover: "hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.18)]",
        crosshair: "border-teal-400/60",
        textAccent: "text-teal-400",
        textHover: "group-hover:text-teal-300",
        actionBtn: "border-teal-400/40 bg-teal-500/15 hover:bg-teal-500/25 hover:border-teal-400 text-teal-200 hover:text-white",
      };
    case "purple":
    default:
      return {
        badge: "border-purple-400/35 bg-purple-400/10 text-purple-300",
        metricText: "text-purple-400",
        hoverBorder: "hover:border-purple-400/50",
        borderAccent: "border-purple-400/30",
        glowBg: "from-purple-500/15 via-transparent to-transparent",
        iconBg: "border-purple-400/30 bg-purple-400/10 text-purple-300",
        headerBorder: "border-purple-500/20",
        headerGlow: "after:via-purple-400/50",
        returnBtn: "border-purple-400/30 bg-purple-500/5 text-purple-200 hover:text-white hover:border-purple-400/70 hover:bg-purple-500/15 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
        returnIcon: "text-purple-400",
        divider: "text-purple-500/40",
        breadcrumbBadge: "border-purple-400/30 bg-purple-400/10 text-purple-300",
        nodeBox: "border-purple-500/20 bg-black/50 shadow-[inset_0_0_12px_rgba(168,85,247,0.06)]",
        nodeTotal: "text-purple-400",
        nodePulse: "bg-purple-400",
        navHover: "hover:bg-purple-400/10 hover:text-purple-300 hover:border-purple-400/30",
        navIcon: "text-purple-400",
        selection: "selection:bg-purple-500/30",
        cardBorder: "border-purple-500/20",
        cardHover: "hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]",
        crosshair: "border-purple-400/60",
        textAccent: "text-purple-400",
        textHover: "group-hover:text-purple-300",
        actionBtn: "border-purple-400/40 bg-purple-500/15 hover:bg-purple-500/25 hover:border-purple-400 text-purple-200 hover:text-white",
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
    if (!hasMultipleImages || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isPaused, projectImages.length]);

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



  return (
    <div className={`relative min-h-screen bg-[#06070A] text-slate-100 ${accent.selection}`}>
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
      <header className={`sticky top-0 z-40 border-b ${accent.headerBorder} bg-[#06070A]/85 backdrop-blur-2xl relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent ${accent.headerGlow} after:to-transparent`}>
        <div className="mx-auto max-w-[1380px] px-3 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Back to Projects Button & Breadcrumb */}
          <div className="flex items-center gap-2.5 sm:gap-5 min-w-0">
            <Link
              href="/#projects"
              className={`group relative inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border ${accent.returnBtn} px-2.5 sm:px-3.5 py-2 font-mono text-[11px] sm:text-xs font-semibold transition-all duration-300 shrink-0`}
            >
              <ArrowLeft className={`h-3.5 w-3.5 ${accent.returnIcon} group-hover:-translate-x-1 transition-transform shrink-0`} />
              <span className="tracking-wider">
                RETURN<span className="hidden min-[380px]:inline">_TO_PROJECTS</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="text-slate-600">//</span>
              <span className="tracking-wider text-slate-400">ARCHIVES</span>
              <span className={accent.divider}>/</span>
              <span className="text-slate-300 uppercase">{project.categoryLabel}</span>
              <span className={accent.divider}>/</span>
              <span className={`rounded border ${accent.breadcrumbBadge} px-2 py-0.5 font-bold`}>
                {project.code}
              </span>
            </div>
          </div>

          {/* Right: Project Counter & Prev / Next Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <div className={`flex items-center gap-1.5 sm:gap-2 rounded-xl border ${accent.nodeBox} px-2 sm:px-3 py-1.5 font-mono text-[11px] sm:text-xs`}>
              <span className={`hidden sm:inline-block h-1.5 w-1.5 rounded-full ${accent.nodePulse} animate-pulse`} />
              <span className="hidden sm:inline text-slate-400">NODE</span>
              <span className="font-bold text-white tracking-widest">
                {String(projectNodeNumber).padStart(2, "0")}
              </span>
              <span className="text-slate-600">/</span>
              <span className={`font-bold ${accent.nodeTotal} tracking-widest`}>
                {String(totalProjects).padStart(2, "0")}
              </span>
            </div>

            <div className={`flex items-center gap-1 rounded-xl border ${accent.borderAccent} bg-black/60 p-1`}>
              <Link
                href={`/projects/${prevProject.id}`}
                title={`Previous: ${prevProject.title}`}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 ${accent.navHover} transition-all`}
              >
                <ChevronLeft className={`h-3.5 w-3.5 ${accent.navIcon}`} />
                <span className="hidden lg:inline">PREV</span>
              </Link>
              <div className="h-3.5 w-px bg-white/10" />
              <Link
                href={`/projects/${nextProject.id}`}
                title={`Next: ${nextProject.title}`}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 ${accent.navHover} transition-all`}
              >
                <span className="hidden lg:inline">NEXT</span>
                <ChevronRight className={`h-3.5 w-3.5 ${accent.navIcon}`} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Project Detail Content */}
      <main className="relative z-10 py-8 sm:py-14 px-3.5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1380px] space-y-6 sm:space-y-8">
          {project.category === "web-development" ? (
            <WebDevDetailView
              project={project}
              onTriggerPulse={handleTriggerPulse}
            />
          ) : project.category === "data-analysis" ? (
            <DataAnalyticsDetailView
              project={project}
              onTriggerPulse={handleTriggerPulse}
            />
          ) : project.category === "ai-engineering" ? (
            <AIEngineeringDetailView
              project={project}
              onTriggerPulse={handleTriggerPulse}
            />
          ) : project.category === "machine-learning" ? (
            <MachineLearningDetailView
              project={project}
              onTriggerPulse={handleTriggerPulse}
            />
          ) : project.category === "desktop-mobile" ? (
            <DesktopMobileDetailView
              project={project}
              onTriggerPulse={handleTriggerPulse}
            />
          ) : project.category === "ui-ux" ? (
            <UIUXDetailView
              project={project}
              onTriggerPulse={handleTriggerPulse}
            />
          ) : project.category === "code-learning" ? (
            <CodeLearningDetailView
              project={project}
              onTriggerPulse={handleTriggerPulse}
            />
          ) : (
            <>
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
                      className="relative aspect-video w-full overflow-hidden bg-slate-950/90 group select-none"
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
                    className="relative aspect-video w-full overflow-hidden bg-slate-950/90 group select-none"
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
                <div className="rounded-2xl border border-white/10 bg-[#080B14] p-4 sm:p-6 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-sky-400 mb-2.5">
                    PROJECT OVERVIEW & OPERATIONAL CONTEXT
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {project.overview}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#080B14] p-4 sm:p-6 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-amber-300 mb-2.5">
                    PROBLEM STATEMENT & SYSTEM CONSTRAINTS
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Project Objectives */}
              <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#080B14] p-4 sm:p-6 flex flex-col justify-between shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
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
        </>
      )}

          {/* Project Switcher Navigation (Previous Project & Next Project) */}
          <section className={`pt-6 border-t ${accent.headerBorder} space-y-6`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-slate-400">
                <span className="hidden sm:inline">// SYSTEM_GATEWAYS // SWITCH PROJECT NODE</span>
                <span className="sm:hidden">// SYSTEM_GATEWAYS</span>
              </div>
              <Link
                href="/#projects"
                className={`inline-flex items-center gap-1.5 font-mono text-[11px] sm:text-xs ${accent.textAccent} hover:underline transition-colors`}
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
                className={`group relative overflow-hidden rounded-3xl border ${prevAccent.cardBorder} bg-[#080B14] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${prevAccent.cardHover} transition-all duration-300 flex flex-col justify-between`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className={`pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 ${prevAccent.crosshair}`} />
                <div className={`pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 ${prevAccent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 ${prevAccent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 ${prevAccent.crosshair}`} />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 font-mono text-xs ${prevAccent.textAccent} font-bold group-hover:text-white transition-colors`}>
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
                  <h3 className={`font-display text-lg sm:text-xl font-bold text-white ${prevAccent.textHover} transition-colors`}>
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
                className={`group relative overflow-hidden rounded-3xl border ${nextAccent.cardBorder} bg-[#080B14] p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${nextAccent.cardHover} transition-all duration-300 flex flex-col justify-between text-left md:text-right`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className={`pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 ${nextAccent.crosshair}`} />
                <div className={`pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 ${nextAccent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 ${nextAccent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 ${nextAccent.crosshair}`} />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`rounded-lg border px-2.5 py-0.5 font-mono text-[11px] font-semibold ${nextAccent.badge}`}
                    >
                      {nextProject.categoryLabel}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 font-mono text-xs ${nextAccent.textAccent} font-bold group-hover:text-white transition-colors`}>
                      <span>NEXT_PROJECT ►</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-400 mb-1">
                    {nextProject.code}
                  </div>
                  <h3 className={`font-display text-lg sm:text-xl font-bold text-white ${nextAccent.textHover} transition-colors`}>
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
              <div className={`relative rounded-3xl border ${accent.cardBorder} bg-[#06070A]/85 backdrop-blur-2xl p-4 sm:p-8 shadow-2xl`}>
                {/* 4 Optical Corner Crosshairs */}
                <div className={`pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 ${accent.crosshair}`} />
                <div className={`pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 ${accent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 ${accent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 ${accent.crosshair}`} />

                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div>
                    <div className={`font-mono text-xs uppercase tracking-widest ${accent.textAccent}`}>
                      // RELATED_CLUSTERS // {project.categoryLabel.toUpperCase()}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                      Related Domain Projects ({project.categoryLabel})
                    </h3>
                  </div>
                  <Link
                    href="/#projects"
                    className={`rounded-xl border ${accent.actionBtn} px-4 py-2 font-mono text-xs transition-all`}
                  >
                    VIEW_ALL_PROJECTS
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {relatedProjects.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/projects/${rel.id}`}
                      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080B14] p-4 transition-all duration-300 ${accent.cardHover} flex flex-col justify-between`}
                    >
                      {/* Corner micro-crosshairs */}
                      <div className={`pointer-events-none absolute top-1.5 left-1.5 h-1.5 w-1.5 border-t border-l ${accent.crosshair}`} />
                      <div className={`pointer-events-none absolute top-1.5 right-1.5 h-1.5 w-1.5 border-t border-r ${accent.crosshair}`} />
                      <div className={`pointer-events-none absolute bottom-1.5 left-1.5 h-1.5 w-1.5 border-b border-l ${accent.crosshair}`} />
                      <div className={`pointer-events-none absolute bottom-1.5 right-1.5 h-1.5 w-1.5 border-b border-r ${accent.crosshair}`} />

                      <div>
                        <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-slate-400 mb-1.5">
                          <span className={`font-bold ${accent.textAccent}`}>{rel.code}</span>
                          <span>{rel.year}</span>
                        </div>
                        <div className={`font-display text-sm font-bold text-white ${accent.textHover} transition-colors line-clamp-2`}>
                          {rel.title}
                        </div>
                      </div>
                      <div className={`mt-3 inline-flex items-center gap-1 font-mono text-[11px] text-slate-400 ${accent.textHover} transition-colors`}>
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

    </div>
  );
}
