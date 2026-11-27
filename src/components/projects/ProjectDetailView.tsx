"use client";

import React, { useState, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getPaginationRange } from "@/lib/pagination";
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

  const [relatedPage, setRelatedPage] = useState<number>(1);
  const [relatedItemsPerPage, setRelatedItemsPerPage] = useState<number>(12);

  useEffect(() => {
    const updateRelatedItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setRelatedItemsPerPage(12); // Desktop: 4 cols x 3 rows
      } else if (width >= 768) {
        setRelatedItemsPerPage(4); // Tablet: 2 cols x 2 rows
      } else {
        setRelatedItemsPerPage(3); // Mobile: 1 col x 3 rows
      }
    };
    updateRelatedItemsPerPage();
    window.addEventListener("resize", updateRelatedItemsPerPage);
    return () => window.removeEventListener("resize", updateRelatedItemsPerPage);
  }, []);

  const totalRelatedPages = Math.max(
    1,
    Math.ceil(relatedProjects.length / relatedItemsPerPage)
  );
  const safeRelatedPage = Math.min(relatedPage, totalRelatedPages);
  const paginatedRelatedProjects = relatedProjects.slice(
    (safeRelatedPage - 1) * relatedItemsPerPage,
    safeRelatedPage * relatedItemsPerPage
  );
  const desktopRelatedPages = useMemo(
    () => getPaginationRange(safeRelatedPage, totalRelatedPages, 10),
    [safeRelatedPage, totalRelatedPages]
  );
  const mobileRelatedPages = useMemo(
    () => getPaginationRange(safeRelatedPage, totalRelatedPages, 5),
    [safeRelatedPage, totalRelatedPages]
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
                RETURN<span className="hidden min-[380px]:inline"> TO PROJECTS</span>
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
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 ${prevAccent.navHover} transition-all`}
              >
                <ChevronLeft className={`h-3.5 w-3.5 ${prevAccent.navIcon}`} />
                <span className="hidden lg:inline">PREV</span>
              </Link>
              <div className="h-3.5 w-px bg-white/10" />
              <Link
                href={`/projects/${nextProject.id}`}
                title={`Next: ${nextProject.title}`}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 ${nextAccent.navHover} transition-all`}
              >
                <span className="hidden lg:inline">NEXT</span>
                <ChevronRight className={`h-3.5 w-3.5 ${nextAccent.navIcon}`} />
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
          ) : null}

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
                className={`group relative overflow-hidden rounded-3xl border ${prevAccent.cardBorder} bg-[#080B14] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${prevAccent.cardHover} transition-all duration-300 flex flex-col justify-between`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className={`pointer-events-none absolute top-3 left-3 sm:top-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-l sm:border-l-2 ${prevAccent.crosshair}`} />
                <div className={`pointer-events-none absolute top-3 right-3 sm:top-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-r sm:border-r-2 ${prevAccent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-l sm:border-l-2 ${prevAccent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-r sm:border-r-2 ${prevAccent.crosshair}`} />

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
                className={`group relative overflow-hidden rounded-3xl border ${nextAccent.cardBorder} bg-[#080B14] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${nextAccent.cardHover} transition-all duration-300 flex flex-col justify-between text-left md:text-right`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className={`pointer-events-none absolute top-3 left-3 sm:top-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-l sm:border-l-2 ${nextAccent.crosshair}`} />
                <div className={`pointer-events-none absolute top-3 right-3 sm:top-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-r sm:border-r-2 ${nextAccent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-l sm:border-l-2 ${nextAccent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-r sm:border-r-2 ${nextAccent.crosshair}`} />

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
              <div className={`relative rounded-3xl border ${accent.cardBorder} bg-[#06070A]/85 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl`}>
                {/* 4 Optical Corner Crosshairs */}
                <div className={`pointer-events-none absolute top-3 left-3 sm:top-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-l sm:border-l-2 ${accent.crosshair}`} />
                <div className={`pointer-events-none absolute top-3 right-3 sm:top-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-r sm:border-r-2 ${accent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-l sm:border-l-2 ${accent.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-r sm:border-r-2 ${accent.crosshair}`} />

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {paginatedRelatedProjects.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/projects/${rel.id}`}
                      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080B14] p-5 transition-all duration-300 ${accent.cardHover} flex flex-col justify-between`}
                    >
                      {/* Corner micro-crosshairs */}
                      <div className={`pointer-events-none absolute top-2.5 left-2.5 sm:top-3 sm:left-3 h-2 w-2 sm:h-2 sm:w-2 border-t sm:border-t-2 border-l sm:border-l-2 ${accent.crosshair}`} />
                      <div className={`pointer-events-none absolute top-2.5 right-2.5 sm:top-3 sm:right-3 h-2 w-2 sm:h-2 sm:w-2 border-t sm:border-t-2 border-r sm:border-r-2 ${accent.crosshair}`} />
                      <div className={`pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 h-2 w-2 sm:h-2 sm:w-2 border-b sm:border-b-2 border-l sm:border-l-2 ${accent.crosshair}`} />
                      <div className={`pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 h-2 w-2 sm:h-2 sm:w-2 border-b sm:border-b-2 border-r sm:border-r-2 ${accent.crosshair}`} />

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

                {/* Pagination Controls */}
                {totalRelatedPages > 1 && (
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="font-mono text-[11px] text-slate-400">
                      SHOWING{" "}
                      <span className={`font-bold ${accent.textAccent}`}>
                        {(safeRelatedPage - 1) * relatedItemsPerPage + 1}–
                        {Math.min(
                          safeRelatedPage * relatedItemsPerPage,
                          relatedProjects.length
                        )}
                      </span>{" "}
                      OF {relatedProjects.length} RELATED NODES
                    </span>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setRelatedPage((p) => Math.max(1, p - 1));
                          handleTriggerPulse();
                        }}
                        disabled={safeRelatedPage === 1}
                        className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">PREV</span>
                      </button>

                      {/* Desktop Page Numbers */}
                      <div className="hidden lg:flex items-center gap-1.5">
                        {desktopRelatedPages.map((item, idx) =>
                          typeof item === "number" ? (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setRelatedPage(item);
                                handleTriggerPulse();
                              }}
                              className={`h-8 min-w-[32px] rounded-xl px-2.5 font-mono text-xs font-bold transition-all cursor-pointer ${
                                safeRelatedPage === item
                                  ? `${accent.badge} border`
                                  : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              {item}
                            </button>
                          ) : (
                            <span
                              key={idx}
                              className="px-1 font-mono text-xs text-slate-500"
                            >
                              ...
                            </span>
                          )
                        )}
                      </div>

                      {/* Mobile & Tablet Page Numbers */}
                      <div className="flex lg:hidden items-center gap-1">
                        {mobileRelatedPages.map((item, idx) =>
                          typeof item === "number" ? (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => {
                                setRelatedPage(item);
                                handleTriggerPulse();
                              }}
                              className={`h-7 min-w-[26px] rounded-xl px-2 font-mono text-[10px] font-bold transition-all cursor-pointer ${
                                safeRelatedPage === item
                                  ? `${accent.badge} border`
                                  : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              {item}
                            </button>
                          ) : (
                            <span
                              key={idx}
                              className="px-0.5 font-mono text-[10px] text-slate-500"
                            >
                              ...
                            </span>
                          )
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setRelatedPage((p) =>
                            Math.min(totalRelatedPages, p + 1)
                          );
                          handleTriggerPulse();
                        }}
                        disabled={safeRelatedPage === totalRelatedPages}
                        className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        <span className="hidden sm:inline">NEXT</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}
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
