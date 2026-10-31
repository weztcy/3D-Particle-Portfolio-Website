"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Network,
  Sparkles,
  CheckCircle2,
  Eye,
  Activity,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Terminal,
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiBootstrap,
  SiTailwindcss,
  SiLaravel,
  SiPostman,
  SiStreamlit,
  SiDocker,
  SiPython,
  SiGooglesheets,
  SiOllama,
  SiLmstudio,
  SiGoogle,
  SiGithub,
  SiTrello,
  SiNotion,
  SiGoogledrive,
  SiGoogledocs,
  SiGoogleforms,
  SiGmail,
  SiFigma,
} from "react-icons/si";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftWordLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";
import { TbSql } from "react-icons/tb";
import {
  RiBrainAi3Line,
  RiAiAgentLine,
  RiPaletteLine,
  RiOpenaiFill,
} from "react-icons/ri";
import {
  DOMAIN_PILLARS,
  SKILL_MATRIX,
  SOFT_SKILLS_MATRIX,
  ParticleFormation,
} from "@/data";

interface DomainsSectionProps {
  onSelectFormation: (mode: ParticleFormation) => void;
  onTriggerPulse: () => void;
}

const FILTER_ROW_1 = [
  { id: "all", label: "All Domains", shortLabel: "All", prefix: "00" },
  { id: "web-development", label: "Web Dev", shortLabel: "Web", prefix: "01" },
  { id: "data-analysis", label: "Data Analytics", shortLabel: "Data", prefix: "02" },
] as const;

const FILTER_ROW_2 = [
  { id: "ai-ml", label: "AI & Machine Learning", shortLabel: "AI & ML", prefix: "03" },
  { id: "ui-ux-design", label: "UI/UX & Design", shortLabel: "UI/UX", prefix: "04" },
] as const;

const FILTER_ROW_3 = [
  { id: "project-management", label: "Project Management", shortLabel: "Proj. Mgmt", prefix: "05" },
  { id: "office-productivity", label: "Office & Productivity", shortLabel: "Productivity", prefix: "06" },
] as const;

const ALL_CATEGORY_FILTERS = [
  ...FILTER_ROW_1,
  ...FILTER_ROW_2,
  ...FILTER_ROW_3,
] as const;

export default function DomainsSection({
  onSelectFormation,
  onTriggerPulse,
}: DomainsSectionProps) {
  const [selectedSkillCategory, setSelectedSkillCategory] =
    useState<string>("all");
  const [activePillarId, setActivePillarId] = useState<string>(
    DOMAIN_PILLARS[0].id
  );

  const filteredSkills = useMemo(() => {
    if (selectedSkillCategory === "all") {
      const seen = new Set<string>();
      return SKILL_MATRIX.filter((s) => {
        const key = s.name.toLowerCase().trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      }).sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
    }
    return SKILL_MATRIX.filter((s) => s.category === selectedSkillCategory);
  }, [selectedSkillCategory]);

  const avgProficiency = useMemo(() => {
    if (filteredSkills.length === 0) return 0;
    const sum = filteredSkills.reduce((acc, s) => acc + s.level, 0);
    return Math.round(sum / filteredSkills.length);
  }, [filteredSkills]);

  const activeCategoryTitle = useMemo(() => {
    if (selectedSkillCategory === "all") return "ALL DOMAINS";
    const found = ALL_CATEGORY_FILTERS.find((f) => f.id === selectedSkillCategory);
    return found ? found.label.toUpperCase() : "CATEGORY";
  }, [selectedSkillCategory]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    const seen = new Set<string>();
    let allCount = 0;
    SKILL_MATRIX.forEach((s) => {
      const key = s.name.toLowerCase().trim();
      if (!seen.has(key)) {
        seen.add(key);
        allCount++;
      }
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    counts["all"] = allCount;
    return counts;
  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  // Responsive: Desktop (3 cols x 6 rows = 18), Tablet (2 cols x 6 rows = 12), Mobile (1 col x 6 rows = 6)
  const [itemsPerPage, setItemsPerPage] = useState<number>(18);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(18); // 3 columns x 6 rows
      } else if (width >= 768) {
        setItemsPerPage(14); // 2 columns x 7 rows
      } else {
        setItemsPerPage(6); // 1 column x 6 rows
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.max(1, Math.ceil(filteredSkills.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const paginatedSkills = filteredSkills.slice(startIndex, safePage * itemsPerPage);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "web-development":
        return Code2;
      case "data-analytics":
        return Database;
      case "ai-engineering":
        return BrainCircuit;
      case "machine-learning":
        return Network;
      default:
        return Code2;
    }
  };

  const getPillarStyles = (id: string) => {
    switch (id) {
      case "web-development":
        return {
          badgeText: "text-sky-300",
          badgePill: "border-sky-400/35 bg-sky-400/10 text-sky-300",
          iconBox: "border-sky-400/40 bg-sky-500/10 text-sky-400",
          checkIcon: "text-sky-400",
          glowBg: "from-sky-500/20 via-sky-500/5 to-transparent",
          cornerColor: "border-sky-400/80",
          borderNormal: "border-sky-500/25 hover:border-sky-400/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)]",
          borderSelected: "border-sky-400 bg-[#0A0D17]/95 shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(56,189,248,0.3)]",
          titleHover: "group-hover:text-sky-300",
          laserLine: "from-transparent via-sky-400/40 to-transparent",
          beacon: "bg-sky-400",
        };
      case "data-analytics":
        return {
          badgeText: "text-emerald-300",
          badgePill: "border-emerald-400/35 bg-emerald-400/10 text-emerald-300",
          iconBox: "border-emerald-400/40 bg-emerald-500/10 text-emerald-400",
          checkIcon: "text-emerald-400",
          glowBg: "from-emerald-500/20 via-emerald-500/5 to-transparent",
          cornerColor: "border-emerald-400/80",
          borderNormal: "border-emerald-500/25 hover:border-emerald-400/60 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]",
          borderSelected: "border-emerald-400 bg-[#0A0D17]/95 shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(16,185,129,0.3)]",
          titleHover: "group-hover:text-emerald-300",
          laserLine: "from-transparent via-emerald-400/40 to-transparent",
          beacon: "bg-emerald-400",
        };
      case "ai-engineering":
        return {
          badgeText: "text-indigo-300",
          badgePill: "border-indigo-400/35 bg-indigo-400/10 text-indigo-300",
          iconBox: "border-indigo-400/40 bg-indigo-500/10 text-indigo-400",
          checkIcon: "text-indigo-400",
          glowBg: "from-indigo-500/20 via-indigo-500/5 to-transparent",
          cornerColor: "border-indigo-400/80",
          borderNormal: "border-indigo-500/25 hover:border-indigo-400/60 hover:shadow-[0_0_35px_rgba(129,140,248,0.2)]",
          borderSelected: "border-indigo-400 bg-[#0A0D17]/95 shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(129,140,248,0.3)]",
          titleHover: "group-hover:text-indigo-300",
          laserLine: "from-transparent via-indigo-400/40 to-transparent",
          beacon: "bg-indigo-400",
        };
      case "machine-learning":
        return {
          badgeText: "text-amber-300",
          badgePill: "border-amber-400/35 bg-amber-400/10 text-amber-300",
          iconBox: "border-amber-400/40 bg-amber-500/10 text-amber-400",
          checkIcon: "text-amber-400",
          glowBg: "from-amber-500/20 via-amber-500/5 to-transparent",
          cornerColor: "border-amber-400/80",
          borderNormal: "border-amber-500/25 hover:border-amber-400/60 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]",
          borderSelected: "border-amber-400 bg-[#0A0D17]/95 shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(245,158,11,0.3)]",
          titleHover: "group-hover:text-amber-300",
          laserLine: "from-transparent via-amber-400/40 to-transparent",
          beacon: "bg-amber-400",
        };
      default:
        return {
          badgeText: "text-sky-300",
          badgePill: "border-sky-400/35 bg-sky-400/10 text-sky-300",
          iconBox: "border-sky-400/40 bg-sky-500/10 text-sky-400",
          checkIcon: "text-sky-400",
          glowBg: "from-sky-500/20 via-sky-500/5 to-transparent",
          cornerColor: "border-sky-400/80",
          borderNormal: "border-sky-500/25 hover:border-sky-400/60 hover:shadow-[0_0_35px_rgba(56,189,248,0.2)]",
          borderSelected: "border-sky-400 bg-[#0A0D17]/95 shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(56,189,248,0.3)]",
          titleHover: "group-hover:text-sky-300",
          laserLine: "from-transparent via-sky-400/40 to-transparent",
          beacon: "bg-sky-400",
        };
    }
  };

  const getSkillFilterActiveStyles = (id: string) => {
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
      case "ai-ml":
        return {
          btn: "bg-indigo-400/20 text-white border-indigo-400/70 shadow-[0_0_18px_rgba(129,140,248,0.35),inset_0_0_10px_rgba(129,140,248,0.2)]",
          dot: "bg-indigo-400 shadow-[0_0_8px_#818cf8] animate-pulse",
          pill: "bg-indigo-400/30 text-indigo-200 border border-indigo-400/40",
        };
      case "ui-ux-design":
        return {
          btn: "bg-rose-400/20 text-white border-rose-400/70 shadow-[0_0_18px_rgba(251,113,133,0.35),inset_0_0_10px_rgba(251,113,133,0.2)]",
          dot: "bg-rose-400 shadow-[0_0_8px_#fb7185] animate-pulse",
          pill: "bg-rose-400/30 text-rose-200 border border-rose-400/40",
        };
      case "project-management":
        return {
          btn: "bg-amber-400/20 text-white border-amber-400/70 shadow-[0_0_18px_rgba(245,158,11,0.35),inset_0_0_10px_rgba(245,158,11,0.2)]",
          dot: "bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse",
          pill: "bg-amber-400/30 text-amber-200 border border-amber-400/40",
        };
      case "office-productivity":
        return {
          btn: "bg-fuchsia-400/20 text-white border-fuchsia-400/70 shadow-[0_0_18px_rgba(232,121,249,0.35),inset_0_0_10px_rgba(232,121,249,0.2)]",
          dot: "bg-fuchsia-400 shadow-[0_0_8px_#e879f9] animate-pulse",
          pill: "bg-fuchsia-400/30 text-fuchsia-200 border border-fuchsia-400/40",
        };
      default:
        return {
          btn: "bg-sky-400/20 text-white border-sky-400/70 shadow-[0_0_18px_rgba(56,189,248,0.35),inset_0_0_10px_rgba(56,189,248,0.2)]",
          dot: "bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse",
          pill: "bg-sky-400/30 text-sky-200 border border-sky-400/40",
        };
    }
  };

  const getSkillCategoryStyles = (category: string) => {
    switch (category) {
      case "web-development":
        return {
          barColor: "from-sky-400 to-cyan-400",
          percentColor: "text-sky-300",
          iconBox: "border-sky-400/35 bg-sky-500/10 text-sky-400",
          cardGlow: "hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]",
          beacon: "bg-sky-400",
        };
      case "data-analysis":
        return {
          barColor: "from-emerald-400 to-teal-400",
          percentColor: "text-emerald-300",
          iconBox: "border-emerald-400/35 bg-emerald-500/10 text-emerald-400",
          cardGlow: "hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
          beacon: "bg-emerald-400",
        };
      case "ai-ml":
        return {
          barColor: "from-indigo-400 to-purple-400",
          percentColor: "text-indigo-300",
          iconBox: "border-indigo-400/35 bg-indigo-500/10 text-indigo-400",
          cardGlow: "hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(129,140,248,0.2)]",
          beacon: "bg-indigo-400",
        };
      case "ui-ux-design":
        return {
          barColor: "from-rose-400 to-pink-400",
          percentColor: "text-rose-300",
          iconBox: "border-rose-400/35 bg-rose-500/10 text-rose-400",
          cardGlow: "hover:border-rose-400/50 hover:shadow-[0_0_25px_rgba(251,113,133,0.2)]",
          beacon: "bg-rose-400",
        };
      case "project-management":
        return {
          barColor: "from-amber-400 to-orange-400",
          percentColor: "text-amber-300",
          iconBox: "border-amber-400/35 bg-amber-500/10 text-amber-400",
          cardGlow: "hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
          beacon: "bg-amber-400",
        };
      case "office-productivity":
        return {
          barColor: "from-fuchsia-400 to-pink-500",
          percentColor: "text-fuchsia-300",
          iconBox: "border-fuchsia-400/35 bg-fuchsia-500/10 text-fuchsia-400",
          cardGlow: "hover:border-fuchsia-400/50 hover:shadow-[0_0_25px_rgba(232,121,249,0.2)]",
          beacon: "bg-fuchsia-400",
        };
      default:
        return {
          barColor: "from-sky-400 to-cyan-400",
          percentColor: "text-sky-300",
          iconBox: "border-sky-400/35 bg-sky-500/10 text-sky-400",
          cardGlow: "hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]",
          beacon: "bg-sky-400",
        };
    }
  };

  const getSkillIcon = (
    name: string
  ): React.ComponentType<{ className?: string }> => {
    switch (name) {
      case "HTML":
        return SiHtml5;
      case "CSS":
        return SiCss;
      case "JavaScript":
        return SiJavascript;
      case "OpenAI Codex":
      case "Codex":
        return RiOpenaiFill;
      case "React":
        return SiReact;
      case "Next.js":
        return SiNextdotjs;
      case "Node.js":
        return SiNodedotjs;
      case "SQL":
        return TbSql;
      case "Bootstrap":
        return SiBootstrap;
      case "Tailwind CSS":
        return SiTailwindcss;
      case "Laravel":
        return SiLaravel;
      case "Postman":
        return SiPostman;
      case "Streamlit":
        return SiStreamlit;
      case "Docker":
        return SiDocker;
      case "Python":
        return SiPython;
      case "Microsoft Excel":
        return PiMicrosoftExcelLogoFill;
      case "Google Sheets":
        return SiGooglesheets;
      case "Large Language Models (LLM)":
        return RiBrainAi3Line;
      case "AI Agents":
        return RiAiAgentLine;
      case "Ollama":
        return SiOllama;
      case "LM Studio":
        return SiLmstudio;
      case "Google Antigravity":
        return SiGoogle;
      case "GitHub":
        return SiGithub;
      case "Trello":
        return SiTrello;
      case "Notion":
        return SiNotion;
      case "Google Drive":
        return SiGoogledrive;
      case "Microsoft Word":
        return PiMicrosoftWordLogoFill;
      case "Google Docs":
        return SiGoogledocs;
      case "Google Forms":
        return SiGoogleforms;
      case "Gmail":
        return SiGmail;
      case "Figma":
        return SiFigma;
      case "Canva":
        return RiPaletteLine;
      case "Microsoft PowerPoint":
        return PiMicrosoftPowerpointLogoFill;
      default:
        return Code2;
    }
  };

  return (
    <section
      id="domains"
      className="relative py-20 sm:py-28 px-3.5 sm:px-6 lg:px-10 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400">
              <span>[ 01 // MULTIDISCIPLINARY ARCHITECTURE ]</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Four Convergent Pillars of{" "}
              <span className="block sm:inline bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Modern Intelligence.
              </span>
            </h2>
            <p className="text-xs sm:text-base text-slate-400 leading-relaxed">
              Integrating the full spectrum of modern engineering: from
              mathematical modeling & causal data analytics to autonomous AI systems and
              production-grade immersive web platforms.
            </p>
          </div>

          <div className="font-mono text-[11px] sm:text-xs text-slate-400 rounded-xl border border-white/10 bg-[#0C0F17]/75 backdrop-blur-md px-3.5 sm:px-4 py-2.5">
            <span className="text-sky-400">TIP:</span> Tap any domain pillar to
            reconfigure the 3D synaptic particle formation in real time.
          </div>
        </div>

        {/* Mobile Quick Pillar Switcher (<md) for rapid navigation & progressive disclosure */}
        <div className="grid grid-cols-2 gap-2 mb-4 md:hidden">
          {DOMAIN_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.id);
            const pillarStyle = getPillarStyles(pillar.id);
            const isSelected = activePillarId === pillar.id;
            return (
              <button
                key={`mob-tab-${pillar.id}`}
                type="button"
                onClick={() => {
                  setActivePillarId(pillar.id);
                  onSelectFormation(pillar.formationTrigger);
                  onTriggerPulse();
                }}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all active:scale-95 ${
                  isSelected
                    ? `${pillarStyle.badgePill} shadow-[0_0_16px_rgba(56,189,248,0.2)]`
                    : "border-white/10 bg-[#0A0D17]/80 text-slate-400"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[9px] uppercase tracking-wider opacity-75">
                    DOMAIN // {pillar.index}
                  </div>
                  <div className="font-display text-xs font-bold text-white truncate">
                    {pillar.roleTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 4 Core Engineering Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {DOMAIN_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.id);
            const pillarStyle = getPillarStyles(pillar.id);
            const isSelected = activePillarId === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  setActivePillarId(pillar.id);
                  onSelectFormation(pillar.formationTrigger);
                  onTriggerPulse();
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-3xl border p-4 sm:p-8 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between ${
                  isSelected
                    ? pillarStyle.borderSelected
                    : `bg-[#0A0D17]/85 ${pillarStyle.borderNormal}`
                }`}
              >
                {/* Optical Corner HUD Crosshairs */}
                <div
                  className={`pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t-2 border-l-2 ${pillarStyle.cornerColor} transition-colors`}
                />
                <div
                  className={`pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t-2 border-r-2 ${pillarStyle.cornerColor} transition-colors`}
                />
                <div
                  className={`pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b-2 border-l-2 ${pillarStyle.cornerColor} transition-colors`}
                />
                <div
                  className={`pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b-2 border-r-2 ${pillarStyle.cornerColor} transition-colors`}
                />

                {/* Sci-Fi Ambient Glow & Holographic Sweep */}
                <div
                  className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${pillarStyle.glowBg} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  {/* Top Row: Index, Role Badge & Metrics */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border ${pillarStyle.iconBox} shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all group-hover:scale-105`}
                      >
                        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                        <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                          <span
                            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${pillarStyle.beacon} opacity-75`}
                          />
                          <span
                            className={`relative inline-flex rounded-full h-2 w-2 ${pillarStyle.beacon}`}
                          />
                        </span>
                      </div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                          <span>SYS.DOMAIN</span>
                          <span className="text-slate-600">//</span>
                          <span className="text-white font-bold">
                            {pillar.index}
                          </span>
                        </div>
                        <span
                          className={`inline-block font-mono text-xs font-bold ${pillarStyle.badgeText} mt-0.5`}
                        >
                          {pillar.roleTitle}
                        </span>
                      </div>
                    </div>

                    {/* Mini Benchmark Pills */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {pillar.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-white/10 bg-black/60 px-2.5 sm:px-3 py-1 sm:py-1.5 text-right font-mono shadow-[inset_0_0_12px_rgba(0,0,0,0.6)]"
                        >
                          <div className="text-[11px] sm:text-xs font-extrabold text-white tabular-nums">
                            {m.value}
                          </div>
                          <div className="text-[8px] sm:text-[9px] uppercase tracking-wider text-slate-400">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`font-display text-lg sm:text-2xl font-bold text-white ${pillarStyle.titleHover} transition-colors tracking-tight`}
                  >
                    {pillar.title}
                  </h3>
                  <p className="font-mono text-[11px] sm:text-xs text-sky-400/90 mt-1 mb-3 sm:mb-4 flex items-center gap-1.5">
                    <span className="text-slate-600 shrink-0">//</span>
                    <span>{pillar.subtitle}</span>
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-5 font-normal">
                    {pillar.description}
                  </p>

                  {/* Laser Accent Divider */}
                  <div
                    className={`my-3.5 sm:my-4 h-px w-full bg-gradient-to-r ${pillarStyle.laserLine}`}
                  />

                  {/* Core Capabilities Matrix Nodes: Always visible on md+, progressive disclosure on <md (expanded when active) */}
                  <div
                    className={`space-y-2 mb-4 sm:mb-5 ${
                      isSelected ? "block" : "hidden md:block"
                    }`}
                  >
                    {pillar.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="group/cap flex items-start gap-2.5 rounded-xl border border-white/[0.05] bg-black/40 p-2.5 sm:p-3 text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:border-sky-400/40 hover:bg-sky-500/5 hover:translate-x-1"
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 mt-0.5 ${pillarStyle.checkIcon} group-hover/cap:scale-110 transition-transform`}
                        />
                        <span className="leading-relaxed font-normal">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Progressive Disclosure Prompt when collapsed (<md & !isSelected) */}
                  {!isSelected && (
                    <div className="md:hidden mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] text-slate-300">
                      <span>+ {pillar.capabilities.length} Core Capabilities</span>
                      <span className={pillarStyle.badgeText}>TAP TO EXPAND →</span>
                    </div>
                  )}
                </div>

                {/* 3D Preview Indicator Command Strip */}
                <div className="relative z-10 pt-3.5 sm:pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-400">
                    <span
                      className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                        isSelected
                          ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"
                          : "bg-sky-400"
                      }`}
                    />
                    <span
                      className={
                        isSelected ? "text-emerald-400 font-bold" : "text-slate-400"
                      }
                    >
                      {isSelected ? "DOMAIN_ACTIVE" : "STANDBY_NODE"}
                    </span>
                  </span>

                  <div
                    className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider transition-all duration-300 ${
                      isSelected
                        ? "border-sky-400/60 bg-sky-500/25 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                        : "border-sky-400/30 bg-sky-500/10 text-sky-300 group-hover:border-sky-400 group-hover:bg-sky-500/20 group-hover:text-white group-hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                    }`}
                  >
                    <Eye className="h-3.5 w-3.5 text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>
                      <span className="hidden sm:inline">RECONFIGURE 3D // </span>
                      <span className="sm:hidden">3D // </span>
                      {pillar.formationTrigger.toUpperCase()}
                    </span>
                    <span className="text-sky-400 font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Technical Stack & Proficiency Matrix */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080B12]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
          {/* Optical Corner HUD Crosshairs */}
          <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-indigo-400/80" />
          <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-indigo-400/80" />
          <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-indigo-400/80" />
          <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-indigo-400/80" />

          {/* Sci-Fi Ambient Glow & Holographic Sweep */}
          <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-[100px]" />

          {/* Top Row: Futuristic Command Header & Control Console */}
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400">
                <Layers className="h-3.5 w-3.5" />
                <span>TECHNICAL TELEMETRY & TOOLING MATRIX</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mt-1">
                Production Stack & Quantitative Proficiency.
              </h3>

              {/* Real-Time Benchmark HUD Readout */}
              <div className="mt-3.5 flex flex-wrap items-center gap-3 font-mono text-xs">
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-2.5 py-1 text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] uppercase text-slate-400">FILTERED NODES:</span>
                  <span className="font-bold text-white tabular-nums">{filteredSkills.length}</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-2.5 py-1 text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span className="text-[10px] uppercase text-slate-400">AVG PROFICIENCY:</span>
                  <span className="font-bold text-sky-300 tabular-nums">{avgProficiency}%</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-2.5 py-1 text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span className="text-[10px] uppercase text-slate-400">ACTIVE DOMAIN:</span>
                  <span className="font-bold text-indigo-300 truncate max-w-[150px] sm:max-w-none">{activeCategoryTitle}</span>
                </div>
              </div>
            </div>

            {/* Filter Category Console Bar - Strictly 3 Rows Maximum */}
            <div className="w-full lg:max-w-2xl xl:max-w-none xl:w-[500px] 2xl:w-[540px]">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-2 sm:p-2.5 shadow-[inset_0_0_24px_rgba(0,0,0,0.8),0_10px_35px_rgba(0,0,0,0.5)]">
                {/* Optical Corner HUD Crosshairs */}
                <div className="pointer-events-none absolute top-1.5 left-1.5 h-2 w-2 border-t border-l border-indigo-400/80" />
                <div className="pointer-events-none absolute top-1.5 right-1.5 h-2 w-2 border-t border-r border-indigo-400/80" />
                <div className="pointer-events-none absolute bottom-1.5 left-1.5 h-2 w-2 border-b border-l border-indigo-400/80" />
                <div className="pointer-events-none absolute bottom-1.5 right-1.5 h-2 w-2 border-b border-r border-indigo-400/80" />

                {/* Cyber Grid Lines */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px]" />

                {/* 3 Rows Maximum System */}
                <div className="relative z-10 flex flex-col gap-1.5">
                  {/* Row 1: 3 Columns (All Domains, Web Dev, Data Analytics) */}
                  <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
                    {FILTER_ROW_1.map((item) => {
                      const isActive = selectedSkillCategory === item.id;
                      const activeStyles = getSkillFilterActiveStyles(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSkillCategory(item.id);
                            setCurrentPage(1);
                            onTriggerPulse();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-between px-1.5 sm:px-2.5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold ${
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
                            <span className="truncate">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>

                          <span
                            className={`shrink-0 ml-1 px-1 sm:px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold tabular-nums transition-colors ${
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

                  {/* Row 2: 2 Columns (AI & Machine Learning, UI/UX & Design) */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {FILTER_ROW_2.map((item) => {
                      const isActive = selectedSkillCategory === item.id;
                      const activeStyles = getSkillFilterActiveStyles(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSkillCategory(item.id);
                            setCurrentPage(1);
                            onTriggerPulse();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold ${
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
                            <span className="truncate">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>

                          <span
                            className={`shrink-0 ml-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tabular-nums transition-colors ${
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

                  {/* Row 3: 2 Columns (Project Management, Office & Productivity) */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {FILTER_ROW_3.map((item) => {
                      const isActive = selectedSkillCategory === item.id;
                      const activeStyles = getSkillFilterActiveStyles(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSkillCategory(item.id);
                            setCurrentPage(1);
                            onTriggerPulse();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold ${
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
                            <span className="truncate">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>

                          <span
                            className={`shrink-0 ml-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold tabular-nums transition-colors ${
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

          {/* Skills Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedSkills.map((skill) => {
              const catStyles = getSkillCategoryStyles(skill.category);
              const SkillIcon = getSkillIcon(skill.name);

              return (
                <div
                  key={`${skill.category}-${skill.name}`}
                  className={`group relative rounded-2xl border border-white/[0.08] bg-[#07090E]/90 p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 ${catStyles.cardGlow} flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.5)]`}
                >
                  {/* Micro Corner Crosshairs */}
                  <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-white/20 group-hover:border-indigo-400 transition-colors" />
                  <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-white/20 group-hover:border-indigo-400 transition-colors" />
                  <div className="pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 border-b border-l border-white/20 group-hover:border-indigo-400 transition-colors" />
                  <div className="pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r border-white/20 group-hover:border-indigo-400 transition-colors" />

                  {/* Holographic Sweep */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-700 ease-out" />

                  {/* Top Section: Icon on Left, Name & Progress Bar on Right */}
                  <div className="relative z-10 flex items-center gap-3 mb-2.5">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105 shadow-[inset_0_0_12px_rgba(0,0,0,0.6)] ${catStyles.iconBox}`}
                    >
                      <SkillIcon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* Name + Percentage HUD Badge */}
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-display text-sm font-bold text-white group-hover:text-slate-100 truncate tracking-tight">
                          {skill.name}
                        </span>
                        <span
                          className={`font-mono text-xs font-bold tabular-nums px-2 py-0.5 rounded-md border border-white/10 bg-black/60 shadow-[0_0_10px_rgba(0,0,0,0.7)] ${catStyles.percentColor} shrink-0`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Tactical Photonic HUD Gauge with Laser Tip */}
                      <div className="relative h-2 w-full rounded-full bg-black/80 border border-white/10 overflow-hidden p-[1px]">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${catStyles.barColor} relative transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        >
                          <span className="absolute right-0 top-0 bottom-0 w-1 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row: Context & Experience Readout */}
                  <div className="relative z-10 flex items-center justify-between gap-2 text-[11px] pt-2 border-t border-white/[0.06] font-mono">
                    <span className="text-slate-400 truncate flex items-center gap-1">
                      <span className="text-slate-600">//</span>
                      <span className="truncate">{skill.roleContext}</span>
                    </span>
                    <span className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-slate-300 shadow-[inset_0_0_6px_rgba(0,0,0,0.5)]">
                      <span className={`h-1 w-1 rounded-full ${catStyles.beacon}`} />
                      <span>{skill.experience}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls when filtered skills exceed 1 view */}
          {totalPages > 1 && (
            <div className="relative z-10 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-3.5 sm:px-5 py-3 sm:py-3.5 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Corner Micro Crosshairs */}
              <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-white/20" />
              <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-white/20" />
              <div className="pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 border-b border-l border-white/20" />
              <div className="pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r border-white/20" />

              <div className="font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse shrink-0" />
                <span>
                  SYS.SHOWING [ {(safePage - 1) * itemsPerPage + 1}–
                  {Math.min(safePage * itemsPerPage, filteredSkills.length)} ] OF{" "}
                  <span className="text-sky-400 font-bold">
                    {filteredSkills.length}
                  </span>{" "}
                  NODES
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
                <button
                  onClick={() => {
                    setCurrentPage((p) => Math.max(1, p - 1));
                    onTriggerPulse();
                  }}
                  disabled={safePage === 1}
                  className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 sm:px-3.5 py-1.5 font-mono text-[11px] sm:text-xs text-slate-300 hover:bg-sky-500/10 hover:border-sky-400/40 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span>PREV</span>
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      onTriggerPulse();
                    }}
                    className={`h-7 sm:h-8 min-w-[28px] sm:min-w-[32px] rounded-xl px-2 sm:px-2.5 font-mono text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                      safePage === pageNum
                        ? "bg-sky-400/25 text-white border border-sky-400/60 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                        : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                    onTriggerPulse();
                  }}
                  disabled={safePage === totalPages}
                  className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 sm:px-3.5 py-1.5 font-mono text-[11px] sm:text-xs text-slate-300 hover:bg-sky-500/10 hover:border-sky-400/40 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                >
                  <span>NEXT</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dedicated Soft Skills Card */}
        <div className="relative overflow-hidden mt-8 rounded-3xl border border-white/10 bg-[#080B12]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
          {/* Optical Corner HUD Crosshairs */}
          <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400/80" />
          <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400/80" />
          <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400/80" />
          <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400/80" />

          {/* Sci-Fi Ambient Glow */}
          <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-teal-500/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span>INTERPERSONAL & PROFESSIONAL TELEMETRY</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mt-1">
                Soft Skills & Professional
                <br className="hidden sm:inline" />{" "}
                Competencies
              </h3>
            </div>

            {/* Futuristic Telemetry HUD Cluster - Synced to exact 114px height on sm+ */}
            <div className="w-full xl:w-auto">
              <div className="w-full xl:w-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 sm:px-4 sm:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between sm:h-[114px]">
                {/* Top Row: Live Frequency Spectrum & Synergy Benchmark */}
                <div className="flex items-center justify-between gap-2 sm:gap-6 pb-2 border-b border-white/[0.08]">
                  {/* 6 Animated Vector Frequencies */}
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <div className="flex items-end gap-1 h-4 px-1.5 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] shrink-0">
                      <span className="w-1 bg-sky-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-2.5" />
                      <span className="w-1 bg-emerald-400 rounded-full animate-[pulse_1s_ease-in-out_infinite_200ms] h-4" />
                      <span className="w-1 bg-indigo-400 rounded-full animate-[pulse_1.4s_ease-in-out_infinite_400ms] h-2" />
                      <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_100ms] h-3.5" />
                      <span className="w-1 bg-fuchsia-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite_300ms] h-2.5" />
                      <span className="w-1 bg-rose-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_500ms] h-1.5" />
                    </div>
                    <div className="font-mono text-left min-w-0">
                      <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping inline-block shrink-0" />
                        <span className="truncate">TELEMETRY LIVE</span>
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-white tracking-wide truncate">
                        6 Synaptic Vectors
                      </div>
                    </div>
                  </div>

                  {/* Quantitative Synergy Average */}
                  <div className="flex items-center gap-2 text-right font-mono shrink-0">
                    <div className="text-right">
                      <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-400">
                        AVG BENCHMARK
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-indigo-300 tabular-nums">
                        {(
                          SOFT_SKILLS_MATRIX.reduce((acc, s) => acc + s.level, 0) /
                          SOFT_SKILLS_MATRIX.length
                        ).toFixed(1)}% Synergy
                      </div>
                    </div>
                    <div className="hidden min-[380px]:flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-400/10 text-indigo-400 shrink-0">
                      <Activity className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Multi-Vector Spectrum & Execution Status */}
                <div className="pt-2 space-y-1.5 font-mono">
                  {/* 6-Channel Visual Micro-Bar */}
                  <div className="flex items-center gap-1 h-1.5 w-full rounded-full overflow-hidden bg-slate-900/90 p-0.5 border border-white/[0.05]">
                    <div className="h-full flex-1 bg-sky-400 rounded-full" title="Cognitive: 98%" />
                    <div className="h-full flex-1 bg-emerald-400 rounded-full" title="Communication: 96%" />
                    <div className="h-full flex-1 bg-indigo-400 rounded-full" title="Collaboration: 97%" />
                    <div className="h-full flex-1 bg-amber-400 rounded-full" title="Ownership: 95%" />
                    <div className="h-full flex-1 bg-fuchsia-400 rounded-full" title="Agility: 98%" />
                    <div className="h-full flex-1 bg-rose-400 rounded-full" title="Execution: 96%" />
                  </div>

                  {/* Subtext info */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                    <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>Cross-Discipline Alignment</span>
                    </span>
                    <span className="text-slate-400 tracking-wider">
                      PROFESSIONAL TIER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOFT_SKILLS_MATRIX.map((softSkill) => {
              const barColor =
                softSkill.accent === "sky"
                  ? "from-sky-400 to-cyan-400"
                  : softSkill.accent === "emerald"
                  ? "from-emerald-400 to-teal-400"
                  : softSkill.accent === "indigo"
                  ? "from-indigo-400 to-purple-400"
                  : softSkill.accent === "amber"
                  ? "from-amber-400 to-orange-400"
                  : softSkill.accent === "fuchsia"
                  ? "from-fuchsia-400 to-pink-500"
                  : "from-rose-400 to-red-500";

              const percentColor =
                softSkill.accent === "sky"
                  ? "text-sky-400"
                  : softSkill.accent === "emerald"
                  ? "text-emerald-400"
                  : softSkill.accent === "indigo"
                  ? "text-indigo-400"
                  : softSkill.accent === "amber"
                  ? "text-amber-400"
                  : softSkill.accent === "fuchsia"
                  ? "text-fuchsia-400"
                  : "text-rose-400";

              const badgeStyle =
                softSkill.accent === "sky"
                  ? "border-sky-400/30 bg-sky-400/10 text-sky-300"
                  : softSkill.accent === "emerald"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : softSkill.accent === "indigo"
                  ? "border-indigo-400/30 bg-indigo-400/10 text-indigo-300"
                  : softSkill.accent === "amber"
                  ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                  : softSkill.accent === "fuchsia"
                  ? "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300"
                  : "border-rose-400/30 bg-rose-400/10 text-rose-300";

              const cardHoverGlow =
                softSkill.accent === "sky"
                  ? "hover:border-sky-400/40 hover:shadow-[0_0_24px_rgba(56,189,248,0.12)]"
                  : softSkill.accent === "emerald"
                  ? "hover:border-emerald-400/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.12)]"
                  : softSkill.accent === "indigo"
                  ? "hover:border-indigo-400/40 hover:shadow-[0_0_24px_rgba(129,140,248,0.12)]"
                  : softSkill.accent === "amber"
                  ? "hover:border-amber-400/40 hover:shadow-[0_0_24px_rgba(245,158,11,0.12)]"
                  : softSkill.accent === "fuchsia"
                  ? "hover:border-fuchsia-400/40 hover:shadow-[0_0_24px_rgba(232,121,249,0.12)]"
                  : "hover:border-rose-400/40 hover:shadow-[0_0_24px_rgba(251,113,133,0.12)]";

              return (
                <div
                  key={softSkill.name}
                  className={`rounded-xl border border-white/[0.07] bg-black/35 p-4 transition-all flex flex-col justify-between ${cardHoverGlow}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-display text-sm font-semibold text-white">
                        {softSkill.name}
                      </span>
                      <span
                        className={`font-mono text-xs font-semibold tabular-nums shrink-0 ${percentColor}`}
                      >
                        {softSkill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full rounded-full bg-slate-800/90 overflow-hidden mb-3">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
                        style={{ width: `${softSkill.level}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-3 text-[11px]">
                    <span className="text-slate-400 leading-relaxed">
                      {softSkill.description}
                    </span>
                    <span
                      className={`shrink-0 rounded border px-1.5 py-0.5 font-mono text-[10px] ${badgeStyle}`}
                    >
                      {softSkill.categoryTag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

