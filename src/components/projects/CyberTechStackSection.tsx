"use client";

import React, { useMemo } from "react";
import { Layers, Cpu } from "lucide-react";

export type CyberAccentColor =
  | "sky"
  | "cyan"
  | "emerald"
  | "purple"
  | "indigo"
  | "amber"
  | "rose"
  | "orange";

interface CyberTechStackSectionProps {
  sectionNumber?: string;
  sectionTitle?: string;
  techStack: string[];
  accentColor: CyberAccentColor;
  onTriggerPulse?: () => void;
  icon?: React.ComponentType<{ className?: string }>;
}

const ACCENT_THEMES: Record<
  CyberAccentColor,
  {
    border: string;
    bgGlow: string;
    crosshair: string;
    ping: string;
    dot: string;
    title: string;
    icon: string;
    iconBox: string;
    cardHover: string;
    cornerTick: string;
  }
> = {
  sky: {
    border: "border-sky-500/30",
    bgGlow: "from-sky-500/10",
    crosshair: "border-sky-400/80",
    ping: "bg-sky-400",
    dot: "bg-sky-500",
    title: "text-sky-300",
    icon: "text-sky-400",
    iconBox: "border-sky-400/30 bg-sky-500/15 text-sky-300",
    cardHover:
      "hover:border-sky-400/60 hover:bg-sky-500/[0.08] hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]",
    cornerTick: "bg-sky-400/30 group-hover:bg-sky-400",
  },
  cyan: {
    border: "border-cyan-500/30",
    bgGlow: "from-cyan-500/10",
    crosshair: "border-cyan-400/80",
    ping: "bg-cyan-400",
    dot: "bg-cyan-500",
    title: "text-cyan-300",
    icon: "text-cyan-400",
    iconBox: "border-cyan-400/30 bg-cyan-500/15 text-cyan-300",
    cardHover:
      "hover:border-cyan-400/60 hover:bg-cyan-500/[0.08] hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]",
    cornerTick: "bg-cyan-400/30 group-hover:bg-cyan-400",
  },
  emerald: {
    border: "border-emerald-500/30",
    bgGlow: "from-emerald-500/10",
    crosshair: "border-emerald-400/80",
    ping: "bg-emerald-400",
    dot: "bg-emerald-500",
    title: "text-emerald-300",
    icon: "text-emerald-400",
    iconBox: "border-emerald-400/30 bg-emerald-500/15 text-emerald-300",
    cardHover:
      "hover:border-emerald-400/60 hover:bg-emerald-500/[0.08] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
    cornerTick: "bg-emerald-400/30 group-hover:bg-emerald-400",
  },
  purple: {
    border: "border-purple-500/30",
    bgGlow: "from-purple-500/10",
    crosshair: "border-purple-400/80",
    ping: "bg-purple-400",
    dot: "bg-purple-500",
    title: "text-purple-300",
    icon: "text-purple-400",
    iconBox: "border-purple-400/30 bg-purple-500/15 text-purple-300",
    cardHover:
      "hover:border-purple-400/60 hover:bg-purple-500/[0.08] hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]",
    cornerTick: "bg-purple-400/30 group-hover:bg-purple-400",
  },
  indigo: {
    border: "border-indigo-500/30",
    bgGlow: "from-indigo-500/10",
    crosshair: "border-indigo-400/80",
    ping: "bg-indigo-400",
    dot: "bg-indigo-500",
    title: "text-indigo-300",
    icon: "text-indigo-400",
    iconBox: "border-indigo-400/30 bg-indigo-500/15 text-indigo-300",
    cardHover:
      "hover:border-indigo-400/60 hover:bg-indigo-500/[0.08] hover:shadow-[0_0_20px_rgba(99,102,241,0.25)]",
    cornerTick: "bg-indigo-400/30 group-hover:bg-indigo-400",
  },
  amber: {
    border: "border-amber-500/30",
    bgGlow: "from-amber-500/10",
    crosshair: "border-amber-400/80",
    ping: "bg-amber-400",
    dot: "bg-amber-500",
    title: "text-amber-300",
    icon: "text-amber-400",
    iconBox: "border-amber-400/30 bg-amber-500/15 text-amber-300",
    cardHover:
      "hover:border-amber-400/60 hover:bg-amber-500/[0.08] hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    cornerTick: "bg-amber-400/30 group-hover:bg-amber-400",
  },
  rose: {
    border: "border-rose-500/30",
    bgGlow: "from-rose-500/10",
    crosshair: "border-rose-400/80",
    ping: "bg-rose-400",
    dot: "bg-rose-500",
    title: "text-rose-300",
    icon: "text-rose-400",
    iconBox: "border-rose-400/30 bg-rose-500/15 text-rose-300",
    cardHover:
      "hover:border-rose-400/60 hover:bg-rose-500/[0.08] hover:shadow-[0_0_20px_rgba(244,63,94,0.25)]",
    cornerTick: "bg-rose-400/30 group-hover:bg-rose-400",
  },
  orange: {
    border: "border-orange-500/30",
    bgGlow: "from-orange-500/10",
    crosshair: "border-orange-400/80",
    ping: "bg-orange-400",
    dot: "bg-orange-500",
    title: "text-orange-300",
    icon: "text-orange-400",
    iconBox: "border-orange-400/30 bg-orange-500/15 text-orange-300",
    cardHover:
      "hover:border-orange-400/60 hover:bg-orange-500/[0.08] hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]",
    cornerTick: "bg-orange-400/30 group-hover:bg-orange-400",
  },
};

/**
 * Intelligent sanitizer that strips version numbers, release qualifiers, and redundant spec suffixes
 * Examples:
 *  "TypeScript 5.x" -> "TypeScript"
 *  "C++ 20" -> "C++"
 *  "Electron 30" -> "Electron"
 *  "Next.js 16 App Router" -> "Next.js"
 *  "Python 3.12" -> "Python"
 */
export function cleanTechName(name: string): string {
  if (!name) return "";
  let clean = name.trim();
  // Strip parentheses and anything inside: e.g. (strict mode), (x64 native), (modern c++20)
  clean = clean.replace(/\s*\([^)]*\)/g, "");

  // Strip trailing version suffixes: e.g. " 5.x", " 5", " v4", " ver 2", " 3.12", " 3.20+"
  clean = clean.replace(/\s+(v|ver\.?|version\s*)?(\d+(\.\w+)*|\d+x?|\d+)\+?$/i, "");

  // Known tech prefixes with versions or app architecture suffixes
  clean = clean.replace(/^c\+\+\s*\d+.*$/i, "C++");
  clean = clean.replace(/^c\+\+\d+.*$/i, "C++");
  clean = clean.replace(/^electron\s*\d+.*$/i, "Electron");
  clean = clean.replace(/^next\.js\s*\d+.*$/i, "Next.js");
  clean = clean.replace(/^react\s*\d+.*$/i, "React");
  clean = clean.replace(/^node\.js\s*\d+.*$/i, "Node.js");
  clean = clean.replace(/^python\s*\d+.*$/i, "Python");
  clean = clean.replace(/^postgresql\s*\d+.*$/i, "PostgreSQL");
  clean = clean.replace(/^typescript\s*\d+.*$/i, "TypeScript");
  clean = clean.replace(/^cmake\s*\d+.*$/i, "CMake");
  clean = clean.replace(/^tailwind\s*css\s*(?:v|ver\.?|version\s*)?\d+.*$/i, "Tailwind CSS");
  clean = clean.replace(/^prisma\s*\d+.*$/i, "Prisma");
  clean = clean.replace(/^redis\s*\d+.*$/i, "Redis");
  clean = clean.replace(/^fastapi\s*[\d.]+.*$/i, "FastAPI");
  clean = clean.replace(/^pytorch\s*[\d.]+.*$/i, "PyTorch");
  clean = clean.replace(/^docker\s*[\d.]+.*$/i, "Docker");
  clean = clean.replace(/^sqlite\s*\d+.*$/i, "SQLite");
  clean = clean.replace(/^llama\s*\d+.*$/i, "Llama");
  clean = clean.replace(/^claude\s*[\d.]+.*$/i, "Claude");
  clean = clean.replace(/^material\s*design\s*\d+.*$/i, "Material Design");

  // Specific removals
  clean = clean.replace(/\s+app router$/i, "");
  clean = clean.replace(/\s+with pgvector$/i, "");
  clean = clean.replace(/\s+multi-lingual$/i, "");

  // Remove any remaining trailing numbers
  clean = clean.replace(/\s+\d+(\.\d+)*[a-z]?\+?$/i, "");

  return clean.trim();
}

export default function CyberTechStackSection({
  sectionNumber = "04",
  sectionTitle,
  techStack,
  accentColor,
  onTriggerPulse,
  icon,
}: CyberTechStackSectionProps) {
  const theme = ACCENT_THEMES[accentColor] || ACCENT_THEMES.sky;
  // Use Layers as the default futuristic icon for technology stack
  const IconComponent = icon || Layers;

  // Deduplicate and strip all version numbers so tech names are clean and pure
  const uniqueTechs = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];
    for (const t of techStack) {
      const sanitized = cleanTechName(t);
      if (!sanitized) continue;
      const key = sanitized.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        result.push(sanitized);
      }
    }
    return result;
  }, [techStack]);

  const defaultTitle = `[ ${sectionNumber} // TECH STACK & RUNTIME ARCHITECTURE ]`;
  const displayTitle = sectionTitle || defaultTitle;

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border ${theme.border} bg-[#070913]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]`}
    >
      {/* Ambient background glow */}
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-3/4 rounded-full bg-gradient-to-b ${theme.bgGlow} via-transparent to-transparent opacity-50 blur-3xl`}
      />

      {/* 4 Optical HUD Corner Crosshairs */}
      <div
        className={`pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 ${theme.crosshair}`}
      />

      {/* Section Header */}
      <div
        className={`relative z-10 flex flex-wrap items-center justify-between gap-3 border-b ${theme.border} pb-4 mb-6 sm:mb-8`}
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.ping} opacity-75`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${theme.dot}`}
            />
          </span>
          <span
            className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${theme.title}`}
          >
            {displayTitle}
          </span>
        </div>

        {/* Telemetry Counter Pill */}
        <div
          className={`flex items-center gap-2 font-mono text-xs ${theme.title}`}
        >
          <Cpu className={`h-3.5 w-3.5 ${theme.icon}`} />
          <span className="uppercase tracking-wider font-semibold">
            {uniqueTechs.length} ACTIVE TECHS
          </span>
          <span className="text-[10px] opacity-60 font-bold hidden sm:inline">
            // PRODUCTION_READY
          </span>
        </div>
      </div>

      {/* Dynamic Auto-Width Micro-Chip List — Width strictly follows character length, 1 unified icon (Layers), no truncation */}
      <div className="relative z-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
        {uniqueTechs.map((tech, idx) => (
          <div
            key={idx}
            onClick={() => onTriggerPulse?.()}
            className={`group relative inline-flex items-center gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-[#0C101D]/75 px-3.5 sm:px-4 py-2 sm:py-2.5 backdrop-blur-md transition-all duration-300 ${theme.cardHover} hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-default shrink-0`}
          >
            {/* Top-Right HUD Corner Tick */}
            <div
              className={`pointer-events-none absolute top-1.5 right-1.5 h-1 w-1 rounded-full ${theme.cornerTick} transition-all duration-300 group-hover:scale-150`}
            />

            {/* Futuristic Unified Icon Container — Single identical stack icon (Layers) for all */}
            <div
              className={`flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg border ${theme.iconBox} shadow-sm group-hover:scale-105 transition-all duration-300`}
            >
              <IconComponent className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>

            {/* Tech Name — Width naturally follows character count, never truncated, no version number */}
            <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white whitespace-nowrap transition-colors">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
