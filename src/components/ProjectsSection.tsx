"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getPaginationRange } from "@/lib/pagination";
import {
  ArrowUpRight,
  Code,
  Terminal,
  ExternalLink,
  GitBranch,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  PROJECT_CASE_STUDIES,
  ProjectCaseStudy,
} from "@/data";
import { ProjectTechStack } from "./projects/ProjectTechStack";

const PROJECT_FILTER_ROW_1 = [
  { id: "all", label: "All Projects", shortLabel: "All", prefix: "00" },
  { id: "web-development", label: "Web Development", shortLabel: "Web Dev", prefix: "01" },
  { id: "data-analysis", label: "Data Analytics", shortLabel: "Data Analytics", prefix: "02" },
] as const;

const PROJECT_FILTER_ROW_2 = [
  { id: "ai-engineering", label: "AI Engineering", shortLabel: "AI", prefix: "03" },
  { id: "machine-learning", label: "Machine Learning", shortLabel: "ML", prefix: "04" },
  { id: "desktop-mobile", label: "Desktop & Mobile App", shortLabel: "App", prefix: "05" },
] as const;

const PROJECT_FILTER_ROW_3 = [
  { id: "ui-ux", label: "UI/UX Design", shortLabel: "UI/UX Design", prefix: "06" },
  { id: "code-learning", label: "Code Learning", shortLabel: "Code Learning", prefix: "07" },
] as const;

const getProjectFilterActiveStyles = (id: string) => {
  switch (id) {
    case "all":
    case "web-development":
      return {
        btn: "bg-sky-400/20 text-white border-sky-400/70 shadow-[0_0_18px_rgba(56,189,248,0.35),inset_0_0_10px_rgba(56,189,248,0.2)]",
        dot: "bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse",
        pill: "bg-sky-400/30 text-sky-200 border border-sky-400/40",
      };
    case "data-analysis":
      return {
        btn: "bg-emerald-400/20 text-white border-emerald-400/70 shadow-[0_0_18px_rgba(16,185,129,0.35),inset_0_0_10px_rgba(16,185,129,0.2)]",
        dot: "bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse",
        pill: "bg-emerald-400/30 text-emerald-200 border border-emerald-400/40",
      };
    case "ai-engineering":
      return {
        btn: "bg-purple-400/20 text-white border-purple-400/70 shadow-[0_0_18px_rgba(192,132,252,0.35),inset_0_0_10px_rgba(192,132,252,0.2)]",
        dot: "bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse",
        pill: "bg-purple-400/30 text-purple-200 border border-purple-400/40",
      };
    case "machine-learning":
      return {
        btn: "bg-indigo-400/20 text-white border-indigo-400/70 shadow-[0_0_18px_rgba(129,140,248,0.35),inset_0_0_10px_rgba(129,140,248,0.2)]",
        dot: "bg-indigo-400 shadow-[0_0_8px_#818cf8] animate-pulse",
        pill: "bg-indigo-400/30 text-indigo-200 border border-indigo-400/40",
      };
    case "desktop-mobile":
      return {
        btn: "bg-amber-400/20 text-white border-amber-400/70 shadow-[0_0_18px_rgba(245,158,11,0.35),inset_0_0_10px_rgba(245,158,11,0.2)]",
        dot: "bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse",
        pill: "bg-amber-400/30 text-amber-200 border border-amber-400/40",
      };
    case "ui-ux":
      return {
        btn: "bg-fuchsia-400/20 text-white border-fuchsia-400/70 shadow-[0_0_18px_rgba(232,121,249,0.35),inset_0_0_10px_rgba(232,121,249,0.2)]",
        dot: "bg-fuchsia-400 shadow-[0_0_8px_#e879f9] animate-pulse",
        pill: "bg-fuchsia-400/30 text-fuchsia-200 border border-fuchsia-400/40",
      };
    case "code-learning":
      return {
        btn: "bg-orange-500/20 text-white border-orange-400/70 shadow-[0_0_18px_rgba(249,115,22,0.35),inset_0_0_10px_rgba(249,115,22,0.2)]",
        dot: "bg-orange-400 shadow-[0_0_8px_#fb923c] animate-pulse",
        pill: "bg-orange-500/30 text-orange-200 border border-orange-400/40",
      };
    default:
      return {
        btn: "bg-sky-400/20 text-white border-sky-400/70 shadow-[0_0_18px_rgba(56,189,248,0.35),inset_0_0_10px_rgba(56,189,248,0.2)]",
        dot: "bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse",
        pill: "bg-sky-400/30 text-sky-200 border border-sky-400/40",
      };
  }
};

const getProjectNumber = (p: ProjectCaseStudy): number => {
  const match = p.code.match(/PRO-(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

// All projects pre-sorted chronologically from newest down to oldest once at module scope
const CHRONOLOGICAL_PROJECTS: ProjectCaseStudy[] = [...PROJECT_CASE_STUDIES].sort(
  (a, b) => getProjectNumber(b) - getProjectNumber(a)
);

interface ProjectsSectionProps {
  onTriggerPulse?: () => void;
}

function ProjectsSection({ onTriggerPulse }: ProjectsSectionProps = {}) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Desktop (3 cols x 2 rows = 6), Tablet (2 cols x 2 rows = 4), Mobile (1 col x 3 rows = 3)
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(6); // Desktop: 3 columns x 2 rows
      } else if (width >= 768) {
        setItemsPerPage(4); // Tablet: 2 columns x 2 rows
      } else {
        setItemsPerPage(3); // Mobile: 1 column x 3 rows
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Display projects from newest to oldest with memoized filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return CHRONOLOGICAL_PROJECTS;
    }
    return CHRONOLOGICAL_PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);

  const desktopPages = useMemo(
    () => getPaginationRange(safePage, totalPages, 10),
    [safePage, totalPages]
  );
  const mobilePages = useMemo(
    () => getPaginationRange(safePage, totalPages, 5),
    [safePage, totalPages]
  );
  const paginatedProjects = filteredProjects.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: PROJECT_CASE_STUDIES.length,
      "web-development": 0,
      "data-analysis": 0,
      "ai-engineering": 0,
      "machine-learning": 0,
      "desktop-mobile": 0,
      "ui-ux": 0,
      "code-learning": 0,
    };
    PROJECT_CASE_STUDIES.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const getAccentClasses = (accent: ProjectCaseStudy["accentColor"]) => {
    switch (accent) {
      case "cyan":
        return {
          badge: "border-sky-400/40 bg-sky-400/10 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.15)]",
          metricText: "text-sky-400",
          cornerColor: "border-sky-400/80",
          cardHover: "hover:border-sky-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.22)]",
          glowBg: "from-sky-500/20 via-sky-500/5 to-transparent",
          beacon: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
          titleHover: "group-hover:text-sky-300",
          techDot: "bg-sky-400",
          button: "border-sky-400/40 bg-sky-400/10 text-sky-300 hover:bg-sky-400/25 hover:border-sky-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]",
        };
      case "indigo":
        return {
          badge: "border-indigo-400/40 bg-indigo-400/10 text-indigo-300 shadow-[0_0_12px_rgba(129,140,248,0.15)]",
          metricText: "text-indigo-400",
          cornerColor: "border-indigo-400/80",
          cardHover: "hover:border-indigo-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(129,140,248,0.22)]",
          glowBg: "from-indigo-500/20 via-indigo-500/5 to-transparent",
          beacon: "bg-indigo-400 shadow-[0_0_8px_#818cf8]",
          titleHover: "group-hover:text-indigo-300",
          techDot: "bg-indigo-400",
          button: "border-indigo-400/40 bg-indigo-400/10 text-indigo-300 hover:bg-indigo-400/25 hover:border-indigo-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(129,140,248,0.35)]",
        };
      case "emerald":
        return {
          badge: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
          metricText: "text-emerald-400",
          cornerColor: "border-emerald-400/80",
          cardHover: "hover:border-emerald-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(16,185,129,0.22)]",
          glowBg: "from-emerald-500/20 via-emerald-500/5 to-transparent",
          beacon: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
          titleHover: "group-hover:text-emerald-300",
          techDot: "bg-emerald-400",
          button: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/25 hover:border-emerald-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
        };
      case "amber":
        return {
          badge: "border-amber-400/40 bg-amber-400/10 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
          metricText: "text-amber-400",
          cornerColor: "border-amber-400/80",
          cardHover: "hover:border-amber-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.22)]",
          glowBg: "from-amber-500/20 via-amber-500/5 to-transparent",
          beacon: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
          titleHover: "group-hover:text-amber-300",
          techDot: "bg-amber-400",
          button: "border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/25 hover:border-amber-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
        };
      case "fuchsia":
        return {
          badge: "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.15)]",
          metricText: "text-fuchsia-400",
          cornerColor: "border-fuchsia-400/80",
          cardHover: "hover:border-fuchsia-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(232,121,249,0.22)]",
          glowBg: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
          beacon: "bg-fuchsia-400 shadow-[0_0_8px_#e879f9]",
          titleHover: "group-hover:text-fuchsia-300",
          techDot: "bg-fuchsia-400",
          button: "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300 hover:bg-fuchsia-400/25 hover:border-fuchsia-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(232,121,249,0.35)]",
        };
      case "rose":
        return {
          badge: "border-rose-400/40 bg-rose-400/10 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.15)]",
          metricText: "text-rose-400",
          cornerColor: "border-rose-400/80",
          cardHover: "hover:border-rose-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(244,63,94,0.22)]",
          glowBg: "from-rose-500/20 via-rose-500/5 to-transparent",
          beacon: "bg-rose-400 shadow-[0_0_8px_#fb7185]",
          titleHover: "group-hover:text-rose-300",
          techDot: "bg-rose-400",
          button: "border-rose-400/40 bg-rose-400/10 text-rose-300 hover:bg-rose-400/25 hover:border-rose-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]",
        };
      case "teal":
        return {
          badge: "border-teal-400/40 bg-teal-400/10 text-teal-300 shadow-[0_0_12px_rgba(45,212,191,0.15)]",
          metricText: "text-teal-400",
          cornerColor: "border-teal-400/80",
          cardHover: "hover:border-teal-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(45,212,191,0.22)]",
          glowBg: "from-teal-500/20 via-teal-500/5 to-transparent",
          beacon: "bg-teal-400 shadow-[0_0_8px_#2dd4bf]",
          titleHover: "group-hover:text-teal-300",
          techDot: "bg-teal-400",
          button: "border-teal-400/40 bg-teal-400/10 text-teal-300 hover:bg-teal-400/25 hover:border-teal-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(45,212,191,0.35)]",
        };
      case "orange":
        return {
          badge: "border-orange-400/40 bg-orange-500/10 text-orange-300 shadow-[0_0_12px_rgba(249,115,22,0.15)]",
          metricText: "text-orange-400",
          cornerColor: "border-orange-400/80",
          cardHover: "hover:border-orange-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(249,115,22,0.22)]",
          glowBg: "from-orange-500/20 via-orange-500/5 to-transparent",
          beacon: "bg-orange-400 shadow-[0_0_8px_#fb923c]",
          titleHover: "group-hover:text-orange-300",
          techDot: "bg-orange-400",
          button: "border-orange-400/40 bg-orange-500/10 text-orange-300 hover:bg-orange-500/25 hover:border-orange-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]",
        };
      case "purple":
      default:
        return {
          badge: "border-purple-400/40 bg-purple-400/10 text-purple-300 shadow-[0_0_12px_rgba(192,132,252,0.15)]",
          metricText: "text-purple-400",
          cornerColor: "border-purple-400/80",
          cardHover: "hover:border-purple-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(192,132,252,0.22)]",
          glowBg: "from-purple-500/20 via-purple-500/5 to-transparent",
          beacon: "bg-purple-400 shadow-[0_0_8px_#c084fc]",
          titleHover: "group-hover:text-purple-300",
          techDot: "bg-purple-400",
          button: "border-purple-400/40 bg-purple-400/10 text-purple-300 hover:bg-purple-400/25 hover:border-purple-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(192,132,252,0.35)]",
        };
    }
  };

  const getProjectPaginationStyles = (filter: string) => {
    switch (filter) {
      case "web-development":
        return {
          crosshair: "border-sky-400/70",
          beacon: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
          percentColor: "text-sky-300",
          badge: "border-sky-400/40 bg-sky-950/40 text-sky-200",
        };
      case "data-analysis":
        return {
          crosshair: "border-emerald-400/70",
          beacon: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
          percentColor: "text-emerald-300",
          badge: "border-emerald-400/40 bg-emerald-950/40 text-emerald-200",
        };
      case "ai-engineering":
        return {
          crosshair: "border-purple-400/70",
          beacon: "bg-purple-400 shadow-[0_0_8px_#c084fc]",
          percentColor: "text-purple-300",
          badge: "border-purple-400/40 bg-purple-950/40 text-purple-200",
        };
      case "machine-learning":
        return {
          crosshair: "border-indigo-400/70",
          beacon: "bg-indigo-400 shadow-[0_0_8px_#818cf8]",
          percentColor: "text-indigo-300",
          badge: "border-indigo-400/40 bg-indigo-950/40 text-indigo-200",
        };
      case "desktop-mobile":
        return {
          crosshair: "border-amber-400/70",
          beacon: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
          percentColor: "text-amber-300",
          badge: "border-amber-400/40 bg-amber-950/40 text-amber-200",
        };
      case "ui-ux":
        return {
          crosshair: "border-fuchsia-400/70",
          beacon: "bg-fuchsia-400 shadow-[0_0_8px_#e879f9]",
          percentColor: "text-fuchsia-300",
          badge: "border-fuchsia-400/40 bg-fuchsia-950/40 text-fuchsia-200",
        };
      case "code-learning":
        return {
          crosshair: "border-orange-400/70",
          beacon: "bg-orange-400 shadow-[0_0_8px_#fb923c]",
          percentColor: "text-orange-300",
          badge: "border-orange-400/40 bg-orange-950/40 text-orange-200",
        };
      default:
        return {
          crosshair: "border-sky-400/70",
          beacon: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
          percentColor: "text-sky-300",
          badge: "border-sky-400/40 bg-sky-950/40 text-sky-200",
        };
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28 px-3.5 sm:px-6 lg:px-10 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header & Filter Bar */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400">
              <span className="hidden sm:inline">[ 02 // PRODUCTION PROJECTS & CASE STUDIES ]</span>
              <span className="sm:hidden">[ 02 // PRODUCTION PROJECTS ]</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Engineering & Projects{" "}
              <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Case Studies.
              </span>
            </h2>
            <p className="text-xs sm:text-base text-slate-400 leading-relaxed">
              A comprehensive showcase of production architectures across specialized engineering domains—complete with performance evaluations, production pipelines, and repository source code.
            </p>
          </div>

          {/* Right Column: Projects Completed Badge & Category Filter Bar */}
          <div className="flex flex-col items-start xl:items-end gap-3 w-full xl:w-auto shrink-0">
            {/* Futuristic Telemetry HUD Badge: XX Projects Completed */}
            <div className="relative group overflow-hidden rounded-2xl border border-sky-500/25 bg-[#0C0F17]/85 backdrop-blur-xl px-4 sm:px-4 py-3 sm:py-2.5 shadow-[0_0_30px_rgba(56,189,248,0.12)] transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.22)] w-full sm:w-auto">
              {/* Sci-Fi Gradient Ambient Glow */}
              <div className="pointer-events-none absolute -inset-px bg-gradient-to-r from-sky-500/15 via-indigo-500/10 to-emerald-500/15 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Corner Tech Ticks */}
              <div className="pointer-events-none absolute top-1 left-1.5 sm:top-1 sm:left-2 font-mono text-[8px] text-sky-400/40 select-none">
                ┌
              </div>
              <div className="pointer-events-none absolute top-1 right-1.5 sm:top-1 sm:right-2 font-mono text-[8px] text-sky-400/40 select-none">
                ┐
              </div>
              <div className="pointer-events-none absolute bottom-1 left-1.5 sm:bottom-1 sm:left-2 font-mono text-[8px] text-sky-400/40 select-none">
                └
              </div>
              <div className="pointer-events-none absolute bottom-1 right-1.5 sm:bottom-1 sm:right-2 font-mono text-[8px] text-sky-400/40 select-none">
                ┘
              </div>

              <div className="relative z-10 flex items-center gap-3 font-mono">
                {/* HUD Icon Box with Live Status Beacon */}
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.25)]">
                  <Terminal className="h-4 w-4" />
                  <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                </div>

                {/* Telemetry Data Stream */}
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-400">
                    <span className="text-sky-400 font-semibold">SYS // TELEMETRY</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      DEPLOYED
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1.5 text-xs sm:text-sm font-bold text-white">
                    <span className="font-mono text-base font-black bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent tabular-nums">
                      {String(PROJECT_CASE_STUDIES.length).padStart(2, "0")}
                    </span>
                    <span className="tracking-tight text-slate-200 truncate">
                      PROJECTS COMPLETED
                    </span>
                    <span className="hidden sm:inline text-[10px] text-slate-500 font-normal">
                      [PROD-READY]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Category Console Bar - Strictly 3 Rows Maximum */}
            <div className="w-full lg:max-w-3xl xl:max-w-none xl:w-[570px] 2xl:w-[590px]">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 sm:p-3 shadow-[inset_0_0_24px_rgba(0,0,0,0.8),0_10px_35px_rgba(0,0,0,0.5)]">
                {/* Optical Corner HUD Crosshairs */}
                <div className="pointer-events-none absolute top-2.5 left-2.5 sm:top-2.5 sm:left-2.5 h-1.5 w-1.5 sm:h-2 sm:w-2 border-t border-l border-sky-400/80" />
                <div className="pointer-events-none absolute top-2.5 right-2.5 sm:top-2.5 sm:right-2.5 h-1.5 w-1.5 sm:h-2 sm:w-2 border-t border-r border-sky-400/80" />
                <div className="pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-2.5 sm:left-2.5 h-1.5 w-1.5 sm:h-2 sm:w-2 border-b border-l border-sky-400/80" />
                <div className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-2.5 sm:right-2.5 h-1.5 w-1.5 sm:h-2 sm:w-2 border-b border-r border-sky-400/80" />

                {/* Cyber Grid Lines */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />

                {/* 3 Rows Maximum System */}
                <div className="relative z-10 flex flex-col gap-1.5">
                  {/* Row 1: 3 Columns (All Projects, Web Dev, Data Analytics) */}
                  <div className="flex w-full gap-1 sm:gap-1.5">
                    {PROJECT_FILTER_ROW_1.map((item) => {
                      const isActive = activeFilter === item.id;
                      const activeStyles = getProjectFilterActiveStyles(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveFilter(item.id);
                            setCurrentPage(1);
                            onTriggerPulse?.();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-between h-[30px] sm:h-[34px] px-2 sm:px-2.5 text-[10px] sm:text-xs font-semibold flex-auto ${
                            isActive
                              ? activeStyles.btn
                              : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center gap-1 sm:gap-1.5 truncate min-w-0">
                            <span
                              className={`hidden min-[380px]:inline-block h-1.5 w-1.5 rounded-full shrink-0 transition-all ${
                                isActive
                                  ? activeStyles.dot
                                  : "bg-slate-600 group-hover:bg-slate-400"
                              }`}
                            />
                            <span className="truncate whitespace-nowrap">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>

                          <span
                            className={`shrink-0 ml-1 px-1 sm:px-1.5 h-4 sm:h-[18px] inline-flex items-center justify-center rounded text-[9px] sm:text-[10px] font-mono font-bold tabular-nums leading-none transition-colors ${
                              isActive
                                ? activeStyles.pill
                                : "bg-white/[0.04] text-slate-500 border border-white/5 group-hover:text-slate-300"
                            }`}
                          >
                            {categoryCounts[item.id] ?? 0}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Row 2: 3 Columns (AI Engineering, Machine Learning, Desktop & Mobile) */}
                  <div className="flex w-full gap-1 sm:gap-1.5">
                    {PROJECT_FILTER_ROW_2.map((item) => {
                      const isActive = activeFilter === item.id;
                      const activeStyles = getProjectFilterActiveStyles(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveFilter(item.id);
                            setCurrentPage(1);
                            onTriggerPulse?.();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-between h-[30px] sm:h-[34px] px-2 sm:px-2.5 text-[10px] sm:text-xs font-semibold flex-auto ${
                            isActive
                              ? activeStyles.btn
                              : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center gap-1 sm:gap-1.5 truncate min-w-0">
                            <span
                              className={`hidden min-[380px]:inline-block h-1.5 w-1.5 rounded-full shrink-0 transition-all ${
                                isActive
                                  ? activeStyles.dot
                                  : "bg-slate-600 group-hover:bg-slate-400"
                              }`}
                            />
                            <span className="truncate whitespace-nowrap">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>

                          <span
                            className={`shrink-0 ml-1 px-1 sm:px-1.5 h-4 sm:h-[18px] inline-flex items-center justify-center rounded text-[9px] sm:text-[10px] font-mono font-bold tabular-nums leading-none transition-colors ${
                              isActive
                                ? activeStyles.pill
                                : "bg-white/[0.04] text-slate-500 border border-white/5 group-hover:text-slate-300"
                            }`}
                          >
                            {categoryCounts[item.id] ?? 0}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Row 3: 2 Columns (UI/UX Design, Code Learning) */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {PROJECT_FILTER_ROW_3.map((item) => {
                      const isActive = activeFilter === item.id;
                      const activeStyles = getProjectFilterActiveStyles(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveFilter(item.id);
                            setCurrentPage(1);
                            onTriggerPulse?.();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-between h-[30px] sm:h-[34px] px-2 sm:px-3 text-[10px] sm:text-xs font-semibold ${
                            isActive
                              ? activeStyles.btn
                              : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <span
                              className={`h-1.5 w-1.5 rounded-full shrink-0 transition-all ${
                                isActive
                                  ? activeStyles.dot
                                  : "bg-slate-600 group-hover:bg-slate-400"
                              }`}
                            />
                            <span className="truncate whitespace-nowrap">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>

                          <span
                            className={`shrink-0 ml-1 px-1 sm:px-1.5 h-4 sm:h-[18px] inline-flex items-center justify-center rounded text-[9px] sm:text-[10px] font-mono font-bold tabular-nums leading-none transition-colors ${
                              isActive
                                ? activeStyles.pill
                                : "bg-white/[0.04] text-slate-500 border border-white/5 group-hover:text-slate-300"
                            }`}
                          >
                            {categoryCounts[item.id] ?? 0}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

        {/* Equal-Width Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {paginatedProjects.map((project) => {
            const accent = getAccentClasses(project.accentColor);
            const hasImgError = imgErrors[project.id];

            return (
              <article
                key={project.id}
                onClick={() => {
                  onTriggerPulse?.();
                  router.push(`/projects/${project.id}`);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onTriggerPulse?.();
                    router.push(`/projects/${project.id}`);
                  }
                }}
                tabIndex={0}
                role="link"
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#080B14]/85 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer select-none focus:outline-none focus:border-sky-400/60 ${accent.cardHover}`}
              >
                {/* Optical Corner HUD Crosshairs */}
                <div
                  className={`pointer-events-none absolute top-3 left-3 sm:top-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-l sm:border-l-2 ${accent.cornerColor} transition-colors duration-300`}
                />
                <div
                  className={`pointer-events-none absolute top-3 right-3 sm:top-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-r sm:border-r-2 ${accent.cornerColor} transition-colors duration-300`}
                />
                <div
                  className={`pointer-events-none absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-l sm:border-l-2 ${accent.cornerColor} transition-colors duration-300`}
                />
                <div
                  className={`pointer-events-none absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-r sm:border-r-2 ${accent.cornerColor} transition-colors duration-300`}
                />

                {/* Ambient Glow Field & Holographic Sweep */}
                <div
                  className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${accent.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  {/* Card Top Metadata: Tactical Code Badge with Beacon & Year */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-xs font-bold text-slate-200">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${accent.beacon} animate-pulse`}
                      />
                      <span>{project.code}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs text-slate-300 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-lg">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Preview Image (Consistent 16:9 Aspect Ratio with HUD Corner Notches & Category Badge) */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 mb-5 group/image">
                    {/* Viewfinder Corner Notches */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-20 h-2 w-2 border-t border-l border-white/40" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 h-2 w-2 border-t border-r border-white/40" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-20 h-2 w-2 border-b border-l border-white/40" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-20 h-2 w-2 border-b border-r border-white/40" />

                    {project.imageUrl && !hasImgError ? (
                      <img
                        loading="lazy"
                        decoding="async"
                        src={project.imageUrl}
                        alt={project.title}
                        onError={() =>
                          setImgErrors((prev) => ({ ...prev, [project.id]: true }))
                        }
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#0A0D17] to-indigo-950/60 p-4 text-center">
                        <Terminal
                          className={`h-8 w-8 ${accent.metricText} opacity-70 mb-2`}
                        />
                        <span className="font-mono text-[11px] text-slate-400">
                          SYS.PREVIEW // {project.code}
                        </span>
                      </div>
                    )}

                    {/* Gradient Vignette Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B14]/80 via-transparent to-transparent" />

                    {/* Category Label Badge (Positioned at bottom-right of preview image) */}
                    <div className="absolute bottom-2.5 right-2.5 z-20">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold tracking-wide backdrop-blur-md bg-black/75 shadow-[0_4px_16px_rgba(0,0,0,0.8)] ${accent.badge}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${accent.techDot}`} />
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-xl sm:text-2xl font-bold text-white ${accent.titleHover} transition-colors leading-tight mb-2.5`}
                  >
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-slate-300/90 leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Stack HUD Pod */}
                  <div className="rounded-2xl border border-white/[0.08] bg-black/40 backdrop-blur-md p-3.5 sm:p-4 mb-5 sm:mb-6 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2.5">
                      <span className="flex items-center gap-1.5 uppercase tracking-wider text-slate-300 font-semibold">
                        <GitBranch className={`h-3.5 w-3.5 ${accent.metricText}`} />
                        <span>TECH STACK</span>
                      </span>
                      <span className={`font-bold ${accent.metricText} text-[10px]`}>
                        {project.techStack.length} MODULES
                      </span>
                    </div>
                    <ProjectTechStack
                      techStack={project.techStack}
                      accent={{ techDot: accent.techDot }}
                    />
                  </div>
                </div>

                {/* Bottom Footer: Action Buttons */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-2 sm:gap-3">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white transition-colors py-1 group/repo"
                    >
                      <span className="group-hover/repo:underline decoration-slate-500 underline-offset-4">
                        Repository
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span />
                  )}

                  <Link
                    href={`/projects/${project.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onTriggerPulse?.();
                    }}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border px-3.5 sm:px-4 py-2 font-mono text-xs font-bold transition-all ml-auto ${accent.button} group/btn`}
                  >
                    <span>Inspect Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination Controls when filtered projects exceed 1 view: Consistent Cyber HUD Layout */}
        {totalPages > 1 && (() => {
          const paginationStyle = getProjectPaginationStyles(activeFilter);
          return (
            <div className="relative z-10 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-5 sm:px-6 py-3.5 sm:py-3.5 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Corner Micro Crosshairs */}
              <div className={`pointer-events-none absolute top-2.5 left-2.5 sm:top-3 sm:left-3 h-2 w-2 sm:h-2 sm:w-2 border-t sm:border-t-2 border-l sm:border-l-2 ${paginationStyle.crosshair}`} />
              <div className={`pointer-events-none absolute top-2.5 right-2.5 sm:top-3 sm:right-3 h-2 w-2 sm:h-2 sm:w-2 border-t sm:border-t-2 border-r sm:border-r-2 ${paginationStyle.crosshair}`} />
              <div className={`pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 h-2 w-2 sm:h-2 sm:w-2 border-b sm:border-b-2 border-l sm:border-l-2 ${paginationStyle.crosshair}`} />
              <div className={`pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 h-2 w-2 sm:h-2 sm:w-2 border-b sm:border-b-2 border-r sm:border-r-2 ${paginationStyle.crosshair}`} />

              <div className="font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${paginationStyle.beacon} animate-pulse shrink-0`} />
                <span>
                  SYS.SHOWING [ {(safePage - 1) * itemsPerPage + 1}–
                  {Math.min(safePage * itemsPerPage, filteredProjects.length)} ] OF{" "}
                  <span className={`${paginationStyle.percentColor} font-bold`}>
                    {filteredProjects.length}
                  </span>{" "}
                  PROJECTS
                </span>
              </div>

              <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage((p) => Math.max(1, p - 1));
                    onTriggerPulse?.();
                  }}
                  disabled={safePage === 1}
                  className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                >
                  <ChevronLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                  <span>PREV</span>
                </button>

                {/* Desktop Page Numbers (max 10, visible only on lg+) */}
                <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
                  {desktopPages.map((item, idx) =>
                    typeof item === "number" ? (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setCurrentPage(item);
                          onTriggerPulse?.();
                        }}
                        className={`h-7 sm:h-8 min-w-[28px] sm:min-w-[32px] rounded-xl px-2 sm:px-2.5 font-mono text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                          safePage === item
                            ? `${paginationStyle.badge} border shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                            : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                        }`}
                      >
                        {item}
                      </button>
                    ) : (
                      <span
                        key={`desktop-ellipsis-${idx}`}
                        className="flex items-center justify-center h-7 sm:h-8 w-6 sm:w-7 font-mono text-xs text-slate-500 select-none"
                      >
                        ...
                      </span>
                    )
                  )}
                </div>

                {/* Mobile & Tablet Page Numbers (max 5, visible on mobile & tablet <lg) */}
                <div className="flex lg:hidden items-center gap-1 shrink-0 py-0.5">
                  {mobilePages.map((item, idx) =>
                    typeof item === "number" ? (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setCurrentPage(item);
                          onTriggerPulse?.();
                        }}
                        className={`h-7 sm:h-8 min-w-[26px] sm:min-w-[32px] rounded-xl px-1.5 sm:px-2.5 font-mono text-[10px] sm:text-xs font-bold shrink-0 transition-all duration-300 ${
                          safePage === item
                            ? `${paginationStyle.badge} border shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                            : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                        }`}
                      >
                        {item}
                      </button>
                    ) : (
                      <span
                        key={`mobile-ellipsis-${idx}`}
                        className="flex items-center justify-center h-7 sm:h-8 w-6 sm:w-7 font-mono text-xs text-slate-500 select-none shrink-0"
                      >
                        ...
                      </span>
                    )
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                    onTriggerPulse?.();
                  }}
                  disabled={safePage === totalPages}
                  className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                >
                  <span>NEXT</span>
                  <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

export default React.memo(ProjectsSection);
