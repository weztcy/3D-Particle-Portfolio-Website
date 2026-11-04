"use client";

import React, { useState, useMemo, useEffect } from "react";
import { IoIosCloudOutline } from "react-icons/io";
import { GiWingfoot } from "react-icons/gi";
import { MdOutlineWeb } from "react-icons/md";
import {
  BarChart3,
  LineChart,
  PieChart,
  FileSpreadsheet,
  BrainCircuit,
  Zap,
  Search,
  GitBranch,
  Rocket,
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
  Terminal,
  Cpu,
  Wrench,
  SlidersHorizontal,
  FlaskConical,
  Cloud,
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
  SiPrisma,
  SiDocker,
  SiPhp,
  SiNestjs,
  SiLaravel,
  SiDjango,
  SiSpringboot,
  SiDrizzle,
  SiTypeorm,
  SiSequelize,
  SiSqlite,
  SiPostman,
  SiSwagger,
  SiVuedotjs,
  SiNuxt,
  SiAngular,
  SiShadcnui,
  SiMui,
  SiVercel,
  SiKubernetes,
  SiGooglecloud,
  SiStreamlit,
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
  SiAsana,
  SiJira,
  SiRust,
  SiSvelte,
  SiAntdesign,
  SiChakraui,
  SiDaisyui,
  SiSemanticui,
  SiRadixui,
  SiCodeigniter,
  SiDotnet,
  SiVitest,
  SiTestinglibrary,
  SiPytest,
  SiJunit5,
  SiGit,
  SiGitlab,
  SiMariadb,
  SiFirebase,
  SiSupabase,
  SiGooglechrome,
  SiNginx,
  SiApache,
  SiNetlify,
  SiCloudflare,
  SiHostinger,
  SiWordpress,
  SiOwasp,
  SiPagespeedinsights,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiGoogleslides,
  SiCline,
  SiVllm,
  SiCrewai,
  SiPydantic,
  SiHaystack,
  SiOpensearch,
  SiFlux,
  SiNeon,
  SiClickhouse,
  SiModelcontextprotocol,
  SiKeras,
  SiOpencv,
  SiUltralytics,
  SiOpenaigym,
  SiRay,
  SiPycharm,
  SiApachespark,
  SiMeta,
  SiBoost,
  SiR,
  SiTidyverse,
  SiLeaflet,
  SiRstudioide,
  SiQuarto,
  SiKaggle,
} from "react-icons/si";
import { FaAws, FaJava, FaShieldHalved, FaBroom, FaScaleUnbalanced } from "react-icons/fa6";
import {
  SiPandas,
  SiNumpy,
  SiScipy,
  SiScikitlearn,
  SiJupyter,
  SiGooglecolab,
  SiGooglebigquery,
  SiLooker,
  SiPlotly,
  SiPolars,
  SiDash,
  SiPytorch,
  SiHuggingface,
  SiLangchain,
  SiFastapi,
  SiTensorflow,
  SiGradio,
  SiSpacy,
  SiQdrant,
  SiMilvus,
  SiRedis,
  SiElasticsearch,
  SiFlask,
  SiN8N,
  SiDask,
  SiGooglecloudstorage,
} from "react-icons/si";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftWordLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";
import {
  TbSql,
  TbBrandCSharp,
  TbBrandSpeedtest,
  TbTestPipe,
  TbDatabaseEdit,
  TbFilter,
  TbArrowsExchange,
  TbFileTypeCsv,
  TbCalendarTime,
  TbRegex,
  TbTransform,
  TbTableSpark,
  TbTerminal2,
  TbComponents,
  TbBrowser,
  TbDatabaseSearch,
  TbPhotoSpark,
  TbSwitchHorizontal,
  TbGauge,
  TbCpu,
  TbProtocol,
  TbBinaryTree,
  TbBinaryTree2,
  TbViewfinder,
  TbMatrix,
  TbVector,
  TbRobot,
  TbTargetArrow,
  TbLanguage,
} from "react-icons/tb";
import { ImOnedrive } from "react-icons/im";
import { BiBarChartSquare } from "react-icons/bi";
import { getPaginationRange } from "@/lib/pagination";
import {
  RiBrainAi3Line,
  RiAiAgentLine,
  RiPaletteLine,
  RiFlowChart,
  RiNodeTree,
  RiOpenaiFill,
  RiFunctions,
  RiTable2,
  RiFileExcelLine,
  RiFileExcel2Line,
} from "react-icons/ri";
import {
  DOMAIN_PILLARS,
  SKILL_MATRIX,
  SOFT_SKILLS_MATRIX,
  ParticleFormation,
  SkillItem,
} from "@/data";

interface DomainsSectionProps {
  onSelectFormation: (mode: ParticleFormation) => void;
  onTriggerPulse: () => void;
}

const FILTER_ROW_1 = [
  { id: "all", label: "All Domains", shortLabel: "All", prefix: "00" },
  { id: "web-development", label: "Web Development", shortLabel: "Web Dev", prefix: "01" },
  { id: "data-analysis", label: "Data Analytics", shortLabel: "Data Analytics", prefix: "02" },
] as const;

const FILTER_ROW_2 = [
  { id: "artificial-intelligence", label: "Artificial Intelligence", shortLabel: "AI", prefix: "03" },
  { id: "machine-learning", label: "Machine Learning", shortLabel: "ML", prefix: "04" },
] as const;

const FILTER_ROW_3 = [
  { id: "project-management", label: "Project Management", shortLabel: "Project Management", prefix: "05" },
  { id: "office", label: "Office", shortLabel: "Office", prefix: "06" },
] as const;

const ALL_CATEGORY_FILTERS = [
  ...FILTER_ROW_1,
  ...FILTER_ROW_2,
  ...FILTER_ROW_3,
] as const;

function DomainsSection({
  onSelectFormation,
  onTriggerPulse,
}: DomainsSectionProps) {
  const [selectedSkillCategory, setSelectedSkillCategory] =
    useState<string>("all");
  const [activePillarId, setActivePillarId] = useState<string>(
    DOMAIN_PILLARS[0].id
  );
  const [expandedCapabilities, setExpandedCapabilities] = useState<Record<string, boolean>>({});

  const toggleExpandCapabilities = (
    pillarId: string,
    trigger: Exclude<ParticleFormation, "auto">,
    e?: React.MouseEvent
  ) => {
    if (e) e.stopPropagation();
    setExpandedCapabilities((prev) => ({
      // Accordion mode: collapse any other card, toggle current card
      [pillarId]: !prev[pillarId],
    }));
    setActivePillarId(pillarId);
    onSelectFormation(trigger);
    onTriggerPulse();
  };

  const categorySkills = useMemo(() => {
    if (selectedSkillCategory === "all") {
      const seen = new Set<string>();
      return SKILL_MATRIX.filter((s) => {
        const key = `${s.name.toLowerCase().trim()}-${s.skillType}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      }).sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
    }
    return SKILL_MATRIX.filter((s) => s.category === selectedSkillCategory);
  }, [selectedSkillCategory]);

  const coreSkills = useMemo(() => {
    return categorySkills.filter((s) => s.skillType === "core-skills");
  }, [categorySkills]);

  const techStackSkills = useMemo(() => {
    return categorySkills
      .filter((s) => s.skillType === "tech-stack")
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }, [categorySkills]);

  const isAllCategory = selectedSkillCategory === "all";

  const avgProficiency = useMemo(() => {
    const list = isAllCategory ? techStackSkills : categorySkills;
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, s) => acc + s.level, 0);
    return Math.round(sum / list.length);
  }, [categorySkills, isAllCategory, techStackSkills]);

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
      // For "all", user only displays tech stack
      if (s.skillType === "tech-stack") {
        const key = s.name.toLowerCase().trim();
        if (!seen.has(key)) {
          seen.add(key);
          allCount++;
        }
      }
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    counts["all"] = allCount;
    return counts;
  }, []);

  const [corePage, setCorePage] = useState<number>(1);
  const [stackPage, setStackPage] = useState<number>(1);

  // Responsive itemsPerPage calculation based on viewport:
  // Desktop (>= 1024): 3 cols -> Core: 2 rows (6 items), Stack: 4 rows (12 items)
  // Tablet (>= 768): 2 cols -> Core: 2 rows (4 items), Stack: 4 rows (8 items)
  // Mobile (< 768): 1 col -> Core: 3 rows (3 items), Stack: 6 rows (6 items)
  const [coreItemsPerPage, setCoreItemsPerPage] = useState<number>(6);
  const [stackItemsPerPage, setStackItemsPerPage] = useState<number>(12);

  useEffect(() => {
    const updatePaginationLimits = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCoreItemsPerPage(6);
        setStackItemsPerPage(12); // Desktop: 3 cols x 4 rows = 12 items
      } else if (width >= 768) {
        setCoreItemsPerPage(4);
        setStackItemsPerPage(8);  // Tablet: 2 cols x 4 rows = 8 items
      } else {
        setCoreItemsPerPage(3);
        setStackItemsPerPage(6);  // Mobile: 1 col x 6 rows = 6 items
      }
    };

    updatePaginationLimits();
    window.addEventListener("resize", updatePaginationLimits);
    return () => window.removeEventListener("resize", updatePaginationLimits);
  }, []);

  // Core Skills Pagination (Hidden in 'all' category)
  const totalCorePages = Math.max(1, Math.ceil(coreSkills.length / coreItemsPerPage));
  const safeCorePage = Math.min(corePage, totalCorePages);
  const coreStartIndex = (safeCorePage - 1) * coreItemsPerPage;
  const paginatedCoreSkills = coreSkills.slice(
    coreStartIndex,
    safeCorePage * coreItemsPerPage
  );

  // Tech Stack Pagination (Applied consistently across all modes)
  const totalStackPages = Math.max(1, Math.ceil(techStackSkills.length / stackItemsPerPage));
  const safeStackPage = Math.min(stackPage, totalStackPages);
  const stackStartIndex = (safeStackPage - 1) * stackItemsPerPage;
  const paginatedTechStackSkills = techStackSkills.slice(
    stackStartIndex,
    safeStackPage * stackItemsPerPage
  );

  const desktopCorePages = useMemo(
    () => getPaginationRange(safeCorePage, totalCorePages, 5),
    [safeCorePage, totalCorePages]
  );
  const mobileCorePages = useMemo(
    () => getPaginationRange(safeCorePage, totalCorePages, 5),
    [safeCorePage, totalCorePages]
  );
  const desktopStackPages = useMemo(
    () => getPaginationRange(safeStackPage, totalStackPages, 10),
    [safeStackPage, totalStackPages]
  );
  const mobileStackPages = useMemo(
    () => getPaginationRange(safeStackPage, totalStackPages, 5),
    [safeStackPage, totalStackPages]
  );

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "web-development":
        return Code2;
      case "data-analytics":
      case "data-analysis":
        return Database;
      case "ai-engineering":
      case "artificial-intelligence":
        return BrainCircuit;
      case "machine-learning":
        return Cpu;
      case "project-management":
        return GitBranch;
      case "office":
        return FileSpreadsheet;
      default:
        return Code2;
    }
  };

  {/* Distinct Core Skills Card: Architectural & Conceptual Focus with Category Color */}
  const renderCoreSkillCard = (skill: SkillItem, index: number) => {
    const SkillIcon = getSkillIcon(skill.name);
    const catStyles = getSkillCategoryStyles(skill.category);
    const segments = [20, 40, 60, 80, 100];

    return (
      <div
        key={`core-${skill.category}-${skill.name}`}
        className={`group relative rounded-2xl border ${catStyles.cardBorder} bg-gradient-to-br from-[#0c1322]/90 via-[#080e1a]/90 to-[#04070f]/95 p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)]`}
      >
        {/* Micro Corner Crosshairs with Category Theme */}
        <div className={`pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l ${catStyles.crosshair}`} />
        <div className={`pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r ${catStyles.crosshair}`} />
        <div className={`pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 border-b border-l ${catStyles.crosshair}`} />
        <div className={`pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r ${catStyles.crosshair}`} />

        {/* Cyber Holographic Light Sweep & Ambient Glow */}
        <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full ${catStyles.glowOrb} blur-2xl transition-all duration-500`} />
        <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-out" />

        <div>
          {/* Top HUD Telemetry Row: Architectural Index + Segmented Gauge */}
          <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className={`font-mono text-[9px] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded-md border ${catStyles.badge}`}>
                CORE.{(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider hidden sm:flex items-center gap-1">
                <span className="text-slate-600">//</span>
                <span>METHODOLOGY</span>
              </span>
            </div>

            {/* Segmented Quantum Mastery Gauge */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {segments.map((thresh, i) => (
                  <div
                    key={i}
                    className={`h-2.5 w-1 rounded-sm transition-all duration-300 ${
                      skill.level >= thresh
                        ? catStyles.meterActive
                        : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
              <span className={`font-mono text-xs font-bold tabular-nums px-1.5 py-0.5 rounded border border-white/10 bg-black/70 shadow-[0_0_8px_rgba(0,0,0,0.5)] ${catStyles.percentColor}`}>
                {skill.level}%
              </span>
            </div>
          </div>

          {/* Core Skill Name & Architectural Icon */}
          <div className="relative z-10 flex items-start gap-3 my-2">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105 shadow-[inset_0_0_12px_rgba(0,0,0,0.6)] ${catStyles.iconBox}`}>
              <SkillIcon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className={`font-display text-sm sm:text-base font-bold text-white ${catStyles.titleHover} transition-colors tracking-tight leading-snug`}>
                {skill.name}
              </h4>
              <p className="text-xs text-slate-300/90 leading-relaxed mt-1 font-normal line-clamp-2">
                {skill.roleContext}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Verification Footer */}
        <div className="relative z-10 pt-2.5 mt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="inline-flex items-center gap-1.5 text-slate-300 text-[10px]">
            <CheckCircle2 className={`h-3.5 w-3.5 ${catStyles.checkColor} shrink-0`} />
            <span className="uppercase tracking-wider">SYSTEM ARCHITECTURE</span>
          </span>
          <span className={`inline-flex items-center gap-1 rounded-md border ${catStyles.badge} px-2 py-0.5 text-[10px] font-semibold`}>
            <span className={`h-1 w-1 rounded-full ${catStyles.beacon} animate-pulse`} />
            <span>{skill.experience}</span>
          </span>
        </div>
      </div>
    );
  };

  {/* Original Tech Stack Card: Preserved Design with Photonic Gauge */}
  const renderTechStackCard = (skill: SkillItem) => {
    const catStyles = getSkillCategoryStyles(skill.category);
    const SkillIcon = getSkillIcon(skill.name);

    return (
      <div
        key={`stack-${skill.category}-${skill.name}`}
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
            {/* Name + Level Percentage HUD Badge */}
            <div className="flex items-center justify-between gap-1.5 mb-1.5">
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
      case "artificial-intelligence":
        return {
          badgeText: "text-purple-300",
          badgePill: "border-purple-400/35 bg-purple-400/10 text-purple-300",
          iconBox: "border-purple-400/40 bg-purple-500/10 text-purple-400",
          checkIcon: "text-purple-400",
          glowBg: "from-purple-500/20 via-purple-500/5 to-transparent",
          cornerColor: "border-purple-400/80",
          borderNormal: "border-purple-500/25 hover:border-purple-400/60 hover:shadow-[0_0_35px_rgba(192,132,252,0.2)]",
          borderSelected: "border-purple-400 bg-[#0A0D17]/95 shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(192,132,252,0.3)]",
          titleHover: "group-hover:text-purple-300",
          laserLine: "from-transparent via-purple-400/40 to-transparent",
          beacon: "bg-purple-400",
        };
      case "machine-learning":
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
      case "artificial-intelligence":
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
      case "project-management":
        return {
          btn: "bg-amber-400/20 text-white border-amber-400/70 shadow-[0_0_18px_rgba(245,158,11,0.35),inset_0_0_10px_rgba(245,158,11,0.2)]",
          dot: "bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse",
          pill: "bg-amber-400/30 text-amber-200 border border-amber-400/40",
        };
      case "office":
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
          cardBorder: "border-sky-500/25 hover:border-sky-400/60 hover:shadow-[0_12px_35px_rgba(56,189,248,0.18)]",
          crosshair: "border-sky-400/70",
          badge: "border-sky-400/30 bg-sky-950/40 text-sky-300",
          meterActive: "bg-sky-400 shadow-[0_0_6px_#38bdf8]",
          checkColor: "text-sky-400",
          glowOrb: "bg-sky-500/10 group-hover:bg-sky-500/20",
          headerBorder: "border-sky-500/25",
          titleHover: "group-hover:text-sky-100",
        };
      case "data-analysis":
        return {
          barColor: "from-emerald-400 to-teal-400",
          percentColor: "text-emerald-300",
          iconBox: "border-emerald-400/35 bg-emerald-500/10 text-emerald-400",
          cardGlow: "hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
          beacon: "bg-emerald-400",
          cardBorder: "border-emerald-500/25 hover:border-emerald-400/60 hover:shadow-[0_12px_35px_rgba(16,185,129,0.18)]",
          crosshair: "border-emerald-400/70",
          badge: "border-emerald-400/30 bg-emerald-950/40 text-emerald-300",
          meterActive: "bg-emerald-400 shadow-[0_0_6px_#34d399]",
          checkColor: "text-emerald-400",
          glowOrb: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
          headerBorder: "border-emerald-500/25",
          titleHover: "group-hover:text-emerald-100",
        };
      case "artificial-intelligence":
        return {
          barColor: "from-purple-400 to-pink-500",
          percentColor: "text-purple-300",
          iconBox: "border-purple-400/35 bg-purple-500/10 text-purple-400",
          cardGlow: "hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(192,132,252,0.2)]",
          beacon: "bg-purple-400",
          cardBorder: "border-purple-500/25 hover:border-purple-400/60 hover:shadow-[0_12px_35px_rgba(192,132,252,0.18)]",
          crosshair: "border-purple-400/70",
          badge: "border-purple-400/30 bg-purple-950/40 text-purple-300",
          meterActive: "bg-purple-400 shadow-[0_0_6px_#c084fc]",
          checkColor: "text-purple-400",
          glowOrb: "bg-purple-500/10 group-hover:bg-purple-500/20",
          headerBorder: "border-purple-500/25",
          titleHover: "group-hover:text-purple-100",
        };
      case "machine-learning":
        return {
          barColor: "from-indigo-400 to-cyan-400",
          percentColor: "text-indigo-300",
          iconBox: "border-indigo-400/35 bg-indigo-500/10 text-indigo-400",
          cardGlow: "hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(129,140,248,0.2)]",
          beacon: "bg-indigo-400",
          cardBorder: "border-indigo-500/25 hover:border-indigo-400/60 hover:shadow-[0_12px_35px_rgba(129,140,248,0.18)]",
          crosshair: "border-indigo-400/70",
          badge: "border-indigo-400/30 bg-indigo-950/40 text-indigo-300",
          meterActive: "bg-indigo-400 shadow-[0_0_6px_#818cf8]",
          checkColor: "text-indigo-400",
          glowOrb: "bg-indigo-500/10 group-hover:bg-indigo-500/20",
          headerBorder: "border-indigo-500/25",
          titleHover: "group-hover:text-indigo-100",
        };
      case "project-management":
        return {
          barColor: "from-amber-400 to-orange-400",
          percentColor: "text-amber-300",
          iconBox: "border-amber-400/35 bg-amber-500/10 text-amber-400",
          cardGlow: "hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
          beacon: "bg-amber-400",
          cardBorder: "border-amber-500/25 hover:border-amber-400/60 hover:shadow-[0_12px_35px_rgba(245,158,11,0.18)]",
          crosshair: "border-amber-400/70",
          badge: "border-amber-400/30 bg-amber-950/40 text-amber-300",
          meterActive: "bg-amber-400 shadow-[0_0_6px_#fbbf24]",
          checkColor: "text-amber-400",
          glowOrb: "bg-amber-500/10 group-hover:bg-amber-500/20",
          headerBorder: "border-amber-500/25",
          titleHover: "group-hover:text-amber-100",
        };
      case "office":
        return {
          barColor: "from-fuchsia-400 to-pink-500",
          percentColor: "text-fuchsia-300",
          iconBox: "border-fuchsia-400/35 bg-fuchsia-500/10 text-fuchsia-400",
          cardGlow: "hover:border-fuchsia-400/50 hover:shadow-[0_0_25px_rgba(232,121,249,0.2)]",
          beacon: "bg-fuchsia-400",
          cardBorder: "border-fuchsia-500/25 hover:border-fuchsia-400/60 hover:shadow-[0_12px_35px_rgba(232,121,249,0.18)]",
          crosshair: "border-fuchsia-400/70",
          badge: "border-fuchsia-400/30 bg-fuchsia-950/40 text-fuchsia-300",
          meterActive: "bg-fuchsia-400 shadow-[0_0_6px_#e879f9]",
          checkColor: "text-fuchsia-400",
          glowOrb: "bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20",
          headerBorder: "border-fuchsia-500/25",
          titleHover: "group-hover:text-fuchsia-100",
        };
      default:
        return {
          barColor: "from-sky-400 to-cyan-400",
          percentColor: "text-sky-300",
          iconBox: "border-sky-400/35 bg-sky-500/10 text-sky-400",
          cardGlow: "hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)]",
          beacon: "bg-sky-400",
          cardBorder: "border-sky-500/25 hover:border-sky-400/60 hover:shadow-[0_12px_35px_rgba(56,189,248,0.18)]",
          crosshair: "border-sky-400/70",
          badge: "border-sky-400/30 bg-sky-950/40 text-sky-300",
          meterActive: "bg-sky-400 shadow-[0_0_6px_#38bdf8]",
          checkColor: "text-sky-400",
          glowOrb: "bg-sky-500/10 group-hover:bg-sky-500/20",
          headerBorder: "border-sky-500/25",
          titleHover: "group-hover:text-sky-100",
        };
    }
  };

  const getSkillIcon = (
    name: string
  ): React.ComponentType<{ className?: string }> => {
    switch (name) {
      case "Performance Optimization":
        return Zap;
      case "SEO Optimization":
        return Search;
      case "DevOps":
        return GitBranch;
      case "Deployment":
        return Rocket;
      case "HTML":
      case "HTML5":
        return SiHtml5;
      case "CSS":
      case "CSS3":
        return SiCss;
      case "JavaScript":
        return SiJavascript;
      case "TypeScript":
        return SiTypescript;
      case "React":
      case "React.js":
        return SiReact;
      case "Next.js":
        return SiNextdotjs;
      case "Node.js":
        return SiNodedotjs;
      case "Express.js":
      case "Express":
        return SiExpress;
      case "PostgreSQL":
        return SiPostgresql;
      case "MySQL":
        return SiMysql;
      case "MongoDB":
        return SiMongodb;
      case "Prisma":
        return SiPrisma;
      case "Docker":
        return SiDocker;
      case "AWS":
        return FaAws;
      case "Python":
        return SiPython;
      case "PHP":
        return SiPhp;
      case "Java":
        return FaJava;
      case "NestJS":
        return SiNestjs;
      case "Laravel":
      case "Eloquent ORM":
        return SiLaravel;
      case "Django":
        return SiDjango;
      case "Spring Boot":
        return SiSpringboot;
      case "Drizzle ORM":
      case "Drizzle":
        return SiDrizzle;
      case "TypeORM":
        return SiTypeorm;
      case "Sequelize":
        return SiSequelize;
      case "SQLite":
        return SiSqlite;
      case "Postman":
        return SiPostman;
      case "Swagger":
        return SiSwagger;
      case "Vue.js":
      case "Vue":
        return SiVuedotjs;
      case "Nuxt.js":
      case "Nuxt":
        return SiNuxt;
      case "Angular":
        return SiAngular;
      case "Shadcn/UI":
      case "Shadcn UI":
        return SiShadcnui;
      case "Material UI":
      case "MUI":
        return SiMui;
      case "Bootstrap":
        return SiBootstrap;
      case "Tailwind CSS":
        return SiTailwindcss;
      case "Vercel":
        return SiVercel;
      case "Kubernetes":
        return SiKubernetes;
      case "GCP":
        return SiGooglecloud;
      case "OpenAI Codex":
      case "Codex":
        return RiOpenaiFill;
      case "SQL":
        return TbSql;
      case "Streamlit":
        return SiStreamlit;
      case "Microsoft Excel":
        return PiMicrosoftExcelLogoFill;
      case "Google Sheets":
        return SiGooglesheets;
      case "Generative Text & Images":
        return Sparkles;
      case "Large Language Models (LLM)":
        return RiBrainAi3Line;
      case "Retrieval-Augmented Generation (RAG)":
        return Database;
      case "Prompt Engineering & Context Engineering":
      case "Prompt Engineering & Context Design":
        return Sparkles;
      case "Automation":
        return Zap;
      case "Agentic AI":
        return RiAiAgentLine;
      case "Vector Database & Semantic Search":
        return Database;
      case "Natural Language Processing (NLP)":
        return Terminal;
      case "AI API Integration & Application Development":
        return Network;
      case "PyTorch":
        return SiPytorch;
      case "Hugging Face Transformers":
        return SiHuggingface;
      case "LangChain":
        return SiLangchain;
      case "LangGraph":
        return SiLangchain;
      case "LlamaIndex":
      case "llama-index":
        return Layers;
      case "LLaMA CPP":
      case "llama.cpp":
      case "Llama.cpp":
      case "llama-cpp":
        return TbCpu;
      case "FastAPI":
        return SiFastapi;
      case "PostgreSQL + pgvector":
        return SiPostgresql;
      case "Pinecone":
        return TbDatabaseSearch;
      case "Chroma":
      case "ChromaDB":
        return TbDatabaseSearch;
      case "TensorFlow":
        return SiTensorflow;
      case "Gradio":
        return SiGradio;
      case "Open AI Codex":
        return RiOpenaiFill;
      case "Cline":
        return SiCline;
      case "spaCy":
        return SiSpacy;
      case "NLTK":
        return TbLanguage;
      case "FAISS":
        return SiMeta;
      case "Weaviate":
        return TbVector;
      case "Qdrant":
        return SiQdrant;
      case "Milvus":
        return SiMilvus;
      case "Redis":
        return SiRedis;
      case "Elasticsearch":
        return SiElasticsearch;
      case "Flask":
        return SiFlask;
      case "OpenCode":
        return TbTerminal2;
      case "9Router":
        return Network;
      case "n8n":
        return SiN8N;
      case "Hermes Agent":
        return GiWingfoot;
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
      case "Performance Optimization":
        return Zap;
      case "SEO Optimization":
        return Search;
      case "Deployment":
        return Rocket;
      case "CI/CD":
        return GitBranch;
      case "Figma":
        return SiFigma;
      case "Canva":
        return RiPaletteLine;
      case "Microsoft PowerPoint":
        return PiMicrosoftPowerpointLogoFill;
      case "OneDrive":
      case "onedrive":
      case "Microsoft OneDrive":
        return ImOnedrive;
      case "Asana":
        return SiAsana;
      case "Jira":
        return SiJira;
            case "Pandas":
        return SiPandas;
      case "NumPy":
        return SiNumpy;
      case "SciPy":
        return SiScipy;
      case "Scikit-learn":
        return SiScikitlearn;
      case "Jupyter Notebook":
      case "JupyterLab":
        return SiJupyter;
      case "Google Colab":
        return SiGooglecolab;
      case "Google BigQuery":
        return SiGooglebigquery;
      case "Google Looker Studio":
      case "Looker Studio":
        return SiLooker;
      case "Plotly":
        return SiPlotly;
      case "Polars":
        return SiPolars;
      case "Dash":
        return SiDash;
      case "Power BI":
      case "Microsoft Power BI":
        return BiBarChartSquare;
      case "Tableau":
        return LineChart;
      case "Business Intelligence (BI)":
        return PieChart;
      case "Dashboard Development":
      case "KPI Analysis":
        return BarChart3;
      case "Data Visualization":
        return LineChart;
      case "Database Querying":
      case "Data Modeling":
        return Database;
      case "Data Preparation":
      case "Data Integration & ETL":
        return Layers;
      case "Data Quality Assurance":
        return ShieldCheck;
      case "Statistical Analysis":
        return Activity;
      // Core Engineering Skills Mappings
      case "SEO Optimization & Web Analytics":
        return Search;
      case "Performance & Scalability Optimization":
        return Zap;
      case "Security & Vulnerability Hardening":
        return ShieldCheck;
      case "Full-Stack Development":
        return Layers;
      // --- Master Tailored Core Skills Mappings (57 items) ---
      case "Model Context Protocol & Tool Orchestration":
        return SiModelcontextprotocol;
      case "Retrieval-Augmented Generation":
        return Database;
      case "Exploratory Data Analysis & Diagnostics":
        return Search;
      case "LLM & Foundation Model Integration":
        return RiBrainAi3Line;
      case "Agentic AI & Multi-Agent Systems":
        return RiAiAgentLine;
      case "AI Data, Database & Caching Integration":
        return Database;

      case "Large Language Model (LLM) & Foundation Model Integration":
        return RiBrainAi3Line;
      case "LLM Inference & Model Serving":
        return Rocket;
      case "Agentic AI, Multi-Agent Systems & Tool Orchestration":
        return RiAiAgentLine;
      case "Embedding, Vector Databases & Hybrid Semantic Search":
        return Network;
      case "Natural Language Processing (NLP) & Semantic Understanding":
        return TbLanguage;
      case "Generative AI & Multimodal Content Generation":
        return Sparkles;
      case "AI-Powered Application & API Development":
        return Code2;
      case "AI Workflow Automation & Intelligent System Integration":
        return Zap;
      case "AI Data, Database & High-Performance Caching":
        return Cpu;

      case "Data Acquisition, Extraction & Integration":
        return Network;
      case "Database Querying & Analytical Data Modeling":
        return Database;
      case "Statistical Analysis, Hypothesis Testing & Time-Series Analysis":
        return Activity;
      case "Business Intelligence, KPI Design & Performance Analysis":
        return BarChart3;
      case "Data Visualization, Dashboard Development & Data Storytelling":
        return PieChart;
      case "Data Quality Assurance & Validation":
        return ShieldCheck;

      case "Web Architecture & System Design":
        return RiFlowChart;
      case "Frontend Engineering & SPA/SSR Architecture":
        return TbBrowser;
      case "Backend Engineering & Server Runtimes":
        return Terminal;
      case "Database Design, Modeling & ORM Management":
        return Database;
      case "API Design, Gateways & Integration":
        return Network;
      case "Application Security & Vulnerability Hardening":
        return ShieldCheck;
      case "Automated Testing & Quality Assurance":
        return FlaskConical;
      case "Web Performance & Core Web Vitals Optimization":
        return Zap;
      case "Cloud Infrastructure & Containerization":
        return IoIosCloudOutline;
      case "CI/CD Automation & Release Engineering":
        return Rocket;
      case "Design Systems & Component Architecture":
        return TbComponents;
      case "SEO & Digital Telemetry Engineering":
        return Search;
      case "Exploratory Data Analysis (EDA) & Diagnostics":
        return Search;
      case "Data Cleansing, Wrangling & Preprocessing":
        return SlidersHorizontal;
      case "Relational Database Querying & Modeling":
        return Database;
      case "Data Transformation & ETL Processing":
        return Layers;
      case "Business Intelligence & Executive Dashboards":
        return BarChart3;
      case "KPI Formulation & Strategic Telemetry":
        return LineChart;
      case "Data Storytelling & Visual Communication":
        return PieChart;
      case "Automated Reporting & Reproducible Analytics":
        return FileSpreadsheet;
      case "Predictive Modeling & Trend Forecasting":
        return BrainCircuit;
      case "Data Quality Auditing & Governance":
        return ShieldCheck;
      case "Large Language Model (LLM) Inference & Serving":
        return RiBrainAi3Line;
      case "Retrieval-Augmented Generation (RAG) Architecture":
        return Database;
      case "Autonomous Agentic AI & Multi-Agent Systems":
        return RiAiAgentLine;
      case "Model Context Protocol (MCP) & Tool Orchestration":
        return SiModelcontextprotocol;
      case "Vector Databases & Hybrid Semantic Search":
        return Network;
      case "Generative Vision & Diffusion Pipelines":
        return Sparkles;
      case "AI Backend Services & Real-Time Streaming":
        return Rocket;
      case "Workflow Automation & Intelligent Task Orchestration":
        return Zap;
      case "Foundational Deep Learning & Model Adaptation":
        return BrainCircuit;
      case "High-Performance Caching & Vector Telemetry":
        return Cpu;
      case "Natural Language Processing & Semantic Understanding":
        return Terminal;
      case "Supervised & Unsupervised Learning Algorithms":
        return Activity;
      case "Deep Learning & Neural Network":
      case "Deep Learning & Neural Network Architectures":
        return BrainCircuit;
      case "Computer Vision & Object Detection":
        return Eye;
      case "Natural Language Processing & Text Mining":
        return Terminal;
      case "Time Series Analysis & Forecasting":
        return LineChart;
      case "Reinforcement Learning & Decision Policies":
        return SlidersHorizontal;
      case "Feature Engineering & Dimensionality Reduction":
        return SlidersHorizontal;
      case "Distributed Data Processing & Parallel Computing":
        return Layers;
      case "Model Validation, Testing & Performance Benchmarking":
        return CheckCircle2;
      case "Model Serving & Interactive Prototyping":
        return Rocket;
      case "Agile & Scrum Sprint Orchestration":
        return GitBranch;
      case "Product Backlog Grooming & Prioritization":
        return CheckCircle2;
      case "Technical Documentation & Knowledge Architecture":
        return FileSpreadsheet;
      case "Milestone Roadmapping & Deliverable Tracking":
        return LineChart;
      case "Cross-Functional Stakeholder Alignment":
        return Network;
      case "Risk Management & Blocker Resolution":
        return ShieldCheck;
      case "Advanced Spreadsheet Modeling & Data Reconciliation":
        return FileSpreadsheet;
      case "Executive Technical Writing & Document Design":
        return CheckCircle2;
      case "Executive Presentation & Visual Deck Crafting":
        return PieChart;
      case "Cloud Workspace Architecture & Access Governance":
        return Layers;
      case "Structured Form Engineering & Intake Automation":
        return SlidersHorizontal;
      case "Corporate Correspondence & Communication Triage":
        return ShieldCheck;

      case "Frontend Development":
        return TbBrowser;
      case "Backend Development":
        return Terminal;
      case "Full Stack Development":
        return Layers;
      case "Web Architecture & Design":
        return Layers;
      case "API Development & Integration":
        return Network;
      case "Database Design & Management":
        return Database;
      case "Software Engineering Principles":
        return BrainCircuit;
      case "Authentication & Web Security":
        return ShieldCheck;
      case "Testing & Debugging":
        return CheckCircle2;
      case "Web Performance Optimization":
        return Zap;
      case "DevOps & Application Deployment":
        return Rocket;
      case "SEO Optimization":
        return Search;
      case "Responsive Web Architecture":
        return Layers;
      case "RESTful API Architecture":
        return Network;
      case "Component-Driven Architecture":
        return TbComponents;
      case "State Management & Hydration":
        return Activity;
      case "Server-Side Rendering (SSR/SSG)":
        return Rocket;
      case "Database Modeling & Normalization":
        return Database;
      case "Web Performance Optimization":
        return Zap;
      case "Frontend Security Hardening":
        return ShieldCheck;
      case "Exploratory Data Analysis (EDA)":
        return Search;
      // Web Development & Office Newly Mapped Skills
      case "C#":
        return TbBrandCSharp;
      case "Rust":
        return SiRust;
      case "Svelte":
        return SiSvelte;
      case "Ant Design":
        return SiAntdesign;
      case "Chakra UI":
        return SiChakraui;
      case "DaisyUI":
        return SiDaisyui;
      case "Semantic UI":
        return SiSemanticui;
      case "Radix UI":
        return SiRadixui;
      case "CodeIgniter":
        return SiCodeigniter;
      case "ASP.NET Core":
        return SiDotnet;
      case "Vitest":
        return SiVitest;
      case "Playwright":
        return TbTestPipe;
      case "Testing Library":
        return SiTestinglibrary;
      case "PHPUnit":
        return SiPhp;
      case "Pytest":
        return SiPytest;
      case "JUnit":
        return SiJunit5;
      case "Git":
        return SiGit;
      case "GitLab":
      case "GitLab CI/CD":
        return SiGitlab;
      case "MariaDB":
        return SiMariadb;
      case "Firebase":
        return SiFirebase;
      case "Supabase":
        return SiSupabase;
      case "Chrome DevTools":
        return SiGooglechrome;
      case "React DevTools":
        return SiReact;
      case "Vue DevTools":
        return SiVuedotjs;
      case "Nginx":
        return SiNginx;
      case "Apache":
        return SiApache;
      case "Amazon Web Services":
        return FaAws;
      case "Google Cloud Platform":
        return SiGooglecloud;
      case "Netlify":
        return SiNetlify;
      case "Cloudflare":
        return SiCloudflare;
      case "Hostinger":
        return SiHostinger;
      case "WordPress":
        return SiWordpress;
      case "OWASP ZAP":
        return SiOwasp;
      case "Cloudflare WAF":
        return FaShieldHalved;
      case "Google PageSpeed Insights":
        return SiPagespeedinsights;
      case "WebPageTest":
        return TbBrandSpeedtest;
      case "Google Analytics 4":
      case "Google Analytics":
        return SiGoogleanalytics;
      case "Google Search Console":
        return SiGooglesearchconsole;
      case "Google Tag Manager":
        return SiGoogletagmanager;
      case "Prisma ORM":
        return SiPrisma;
      case "Google Slides":
        return SiGoogleslides;
      case "Statistical Inference & Hypothesis Testing":
        return Activity;
      case "Data Cleansing & ETL Transformation":
        return Layers;
      case "Data Analytics & Exploratory Data Analysis (EDA)":
        return Search;
      case "Business Intelligence & KPI Analysis":
        return BarChart3;
      case "Data Visualization & Dashboard Development":
        return PieChart;
      case "Database Querying & Data Modeling":
        return Database;
      case "Data Cleaning, Wrangling & Preprocessing":
        return SlidersHorizontal;
      case "Data Collection, Extraction & Integration":
        return Network;
      case "Statistical Analysis & Hypothesis Testing":
        return Activity;
      case "Data Transformation & ETL":
        return Layers;
      case "Data Validation & Quality Analysis":
        return ShieldCheck;
      case "Predictive & Statistical Analytics":
        return LineChart;
      case "Matplotlib":
        return LineChart;
      case "Seaborn":
        return Activity;
      case "JupyterLab":
        return SiJupyter;
      case "Business Intelligence & Dashboard Architecture":
        return BarChart3;
      case "Predictive Modeling & Regression":
      case "Predictive Analytics":
        return LineChart;
      case "Spreadsheet Data Modeling":
      case "Advanced Spreadsheet Automation":
        return FileSpreadsheet;
      case "ML Algorithms & Modeling":
        return BrainCircuit;
      case "Supervised & Unsupervised Learning":
        return Activity;
      case "Deep Learning & Neural Networks":
        return BrainCircuit;
      case "Feature Engineering & Selection":
        return SlidersHorizontal;
      case "Data Processing & Preprocessing":
        return Layers;
      case "Mathematics, Statistics & Probability for ML":
        return LineChart;
      case "XGBoost":
        return TbBinaryTree;
      case "LightGBM":
        return TbBinaryTree2;
      case "Google Cloud Platform":
        return SiGooglecloud;
      case "Google Cloud Storage":
        return SiGooglecloudstorage;
      case "Dask":
        return SiDask;
      case "Machine Learning Lifecycle & Evaluation":
        return BrainCircuit;
      case "Natural Language Processing (NLP)":
        return Terminal;
      case "Prompt Engineering & Context Design":
        return Sparkles;
      case "Retrieval-Augmented Generation (RAG)":
        return Database;
      case "Autonomous Multi-Agent Orchestration":
        return RiAiAgentLine;
      case "Local LLM Inference & Optimization":
        return RiBrainAi3Line;
      case "User-Centered Design (UCD) & Wireframing":
        return Eye;
      case "Design System & Token Architecture":
        return SlidersHorizontal;
      case "Interactive Prototyping & Flow Simulation":
        return Zap;
      case "Visual Hierarchy & Typography Strategy":
        return RiPaletteLine;
      case "Agile & Scrum Sprint Planning":
        return GitBranch;
      case "Technical Specification & System Documentation":
        return CheckCircle2;
      case "Version Control & Branching Strategy":
      case "Version Control & CI/CD Pipelines":
        return GitBranch;
      case "Cross-Functional Task Orchestration":
        return Network;
      case "Executive Technical Writing & Formatting":
        return CheckCircle2;
      case "Structured Survey & Form Engineering":
        return SlidersHorizontal;
      case "Professional Corporate Correspondence":
        return ShieldCheck;
      case "VBA":
      case "VBA (Visual Basic for Applications)":
        return RiFileExcelLine;
      case "ggplot2":
      case "Ggplot2":
        return RiPaletteLine;
      case "Exploratory Data Analysis (EDA)":
        return Search;
      // Data Analytics Tooling & Libraries
      case "R":
        return SiR;
      case "DAX":
        return RiFunctions;
      case "Power Query M":
        return TbDatabaseEdit;
      case "Tidyverse":
        return SiTidyverse;
      case "dplyr":
      case "Dplyr":
        return TbFilter;
      case "tidyr":
      case "Tidyr":
        return TbArrowsExchange;
      case "data.table":
      case "Data.Table":
      case "data.Table":
      case "Data.table":
        return RiTable2;
      case "readr":
      case "Readr":
        return TbFileTypeCsv;
      case "readxl":
      case "Readxl":
        return RiFileExcel2Line;
      case "lubridate":
      case "Lubridate":
        return TbCalendarTime;
      case "stringr":
      case "Stringr":
        return TbRegex;
      case "broom":
      case "Broom":
        return FaBroom;
      case "leaflet":
      case "Leaflet":
        return SiLeaflet;
      case "Shiny":
        return SiRstudioide;
      case "Quarto":
        return SiQuarto;
      case "Power Query":
        return TbTransform;
      case "Power Pivot":
        return TbTableSpark;
      case "Kaggle":
      case "Kaggle Notebooks":
        return SiKaggle;
      // Machine Learning Tooling & Ecosystem
      case "Keras":
        return SiKeras;
      case "OpenCV":
        return SiOpencv;
      case "Ultralytics YOLO":
        return SiUltralytics;
      case "TorchVision":
        return TbViewfinder;
      case "JAX":
        return TbMatrix;
      case "CatBoost":
        return SiBoost;
      case "imbalanced-learn":
        return FaScaleUnbalanced;
      case "Gensim":
        return TbVector;
      case "Stable-Baselines3":
        return TbRobot;
      case "Ray RLlib":
        return SiRay;
      case "Gymnasium":
        return SiOpenaigym;
      case "Prophet":
        return SiMeta;
      case "Darts":
        return TbTargetArrow;
      case "PyCharm":
        return SiPycharm;
      case "PySpark":
        return SiApachespark;
      // AI Engineering & LLM Ecosystem
      case "vLLM":
        return SiVllm;
      case "SGLang":
        return TbGauge;
      case "llama.cpp":
      case "LLaMA CPP":
        return TbCpu;
      case "LiteLLM":
        return TbSwitchHorizontal;
      case "LangGraph":
        return SiLangchain;
      case "CrewAI":
        return SiCrewai;
      case "Pydantic AI":
        return SiPydantic;
      case "Vercel AI SDK":
        return SiVercel;
      case "OpenAI Agents SDK":
        return RiOpenaiFill;
      case "Google Agent Development Kit":
      case "Google Agent Development Kit (ADK)":
        return SiGoogle;
      case "Haystack":
        return SiHaystack;
      case "RAGFlow":
        return RiFlowChart;
      case "FAISS":
        return SiMeta;
      case "Chroma":
      case "ChromaDB":
        return TbDatabaseSearch;
      case "Weaviate":
        return TbVector;
      case "Pinecone":
        return TbDatabaseSearch;
      case "pgvector":
      case "PostgreSQL + pgvector":
        return SiPostgresql;
      case "OpenSearch":
        return SiOpensearch;
      case "ComfyUI":
        return RiNodeTree;
      case "Diffusers":
        return SiHuggingface;
      case "Stable Diffusion WebUI":
        return TbPhotoSpark;
      case "FLUX":
        return SiFlux;
      case "MCP (Model Context Protocol)":
      case "MCP":
        return SiModelcontextprotocol;
      case "FastMCP":
        return TbProtocol;
      case "MongoDB Atlas":
        return SiMongodb;
      case "Google AI Studio":
        return SiGoogle;
      case "Neon":
        return SiNeon;
      case "ClickHouse":
        return SiClickhouse;
      case "OpenAI Codex":
      case "Open AI Codex":
        return RiOpenaiFill;
      case "Cline":
        return SiCline;
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
              production-grade full-stack web platforms.
            </p>
          </div>

          <div className="font-mono text-[11px] sm:text-xs text-slate-400 rounded-xl border border-white/10 bg-[#0C0F17]/75 backdrop-blur-md px-3.5 sm:px-4 py-2.5">
            <span className="text-sky-400">TIP:</span> Tap any domain pillar to
            reconfigure the 3D synaptic particle formation in real time.
          </div>
        </div>

        {/* Mobile Quick Pillar Switcher (<md) for rapid navigation & progressive disclosure */}
        <div className="grid grid-cols-2 gap-2 mb-4 lg:hidden">
          {DOMAIN_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.id);
            const pillarStyle = getPillarStyles(pillar.id);
            const isSelected = activePillarId === pillar.id;
            return (
              <button
                key={`mob-tab-${pillar.id}`}
                type="button"
                onClick={() => {
                  toggleExpandCapabilities(pillar.id, pillar.formationTrigger);
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
                    {pillar.shortRoleTitle || pillar.roleTitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 4 Core Engineering Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {DOMAIN_PILLARS.map((pillar) => {
            const Icon = getPillarIcon(pillar.id);
            const pillarStyle = getPillarStyles(pillar.id);
            const isSelected = activePillarId === pillar.id;
            const isExpanded = !!expandedCapabilities[pillar.id];

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  toggleExpandCapabilities(pillar.id, pillar.formationTrigger);
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
                          <span className="inline sm:hidden">{pillar.shortRoleTitle || pillar.roleTitle}</span>
                          <span className="hidden sm:inline">{pillar.roleTitle}</span>
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

                  {/* First 3 Core Capabilities Nodes: Always visible */}
                  <div className="space-y-2 mb-2">
                    {pillar.capabilities.slice(0, 3).map((cap, i) => (
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

                  {/* Progressive Disclosure (Tap to Expand remaining capabilities) */}
                  {pillar.capabilities.length > 3 && (
                    <div className="mb-4 sm:mb-5 space-y-2">
                      {isExpanded ? (
                        <div className="space-y-2">
                          {pillar.capabilities.slice(3).map((cap, i) => (
                            <div
                              key={i + 3}
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
                      ) : (
                        <div
                          className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-black/40 hover:bg-white/[0.06] hover:border-white/20 px-3 py-2 font-mono text-[10px] text-slate-300 transition-all cursor-pointer group/toggle active:scale-[0.99]"
                        >
                          <span className="text-slate-300 font-medium">
                            + {pillar.capabilities.length - 3} Core Capabilities
                          </span>
                          <span
                            className={`${pillarStyle.badgeText} font-bold group-hover/toggle:translate-x-0.5 transition-transform flex items-center gap-1`}
                          >
                            <span>TAP TO EXPAND</span>
                            <span>→</span>
                          </span>
                        </div>
                      )}
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
                Production Stack & Quantitative <span className="sm:block inline">Proficiency.</span>
              </h3>

              {/* Real-Time Benchmark HUD Readout */}
              <div className="mt-3.5 hidden sm:flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-xs">
                {!isAllCategory && (
                  <>
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-cyan-400/30 bg-cyan-950/30 px-2.5 py-1 text-cyan-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span className="text-[10px] uppercase text-cyan-400/80">CORE SKILLS:</span>
                      <span className="font-bold text-cyan-200 tabular-nums">{coreSkills.length}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-indigo-400/30 bg-indigo-950/30 px-2.5 py-1 text-indigo-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      <span className="text-[10px] uppercase text-indigo-400/80">TECH STACK:</span>
                      <span className="font-bold text-indigo-200 tabular-nums">{techStackSkills.length}</span>
                    </div>
                  </>
                )}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-white/10 bg-black/50 px-2.5 py-1 text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span className="text-[10px] uppercase text-slate-400">AVG:</span>
                  <span className="font-bold text-sky-300 tabular-nums">{avgProficiency}%</span>
                </div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border border-white/10 bg-black/50 px-2.5 py-1 text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  <span className="text-[10px] uppercase text-slate-400">DOMAIN:</span>
                  <span className="font-bold text-indigo-300 truncate max-w-[130px] sm:max-w-none">{activeCategoryTitle}</span>
                </div>
              </div>
            </div>

            {/* Filter Category Console Bar - Strictly 3 Rows Maximum */}
            <div className="w-full lg:max-w-3xl xl:max-w-none xl:w-[480px] 2xl:w-[500px]">
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
                  <div className="flex w-full gap-1 sm:gap-1.5">
                    {FILTER_ROW_1.map((item) => {
                      const isActive = selectedSkillCategory === item.id;
                      const activeStyles = getSkillFilterActiveStyles(item.id);
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setSelectedSkillCategory(item.id);
                            setCorePage(1);
                            setStackPage(1);
                            onTriggerPulse();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-start px-2 sm:px-2.5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold flex-auto ${
                            isActive
                              ? activeStyles.btn
                              : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center gap-1 sm:gap-1.5 truncate min-w-0 text-left">
                            <span
                              className={`hidden min-[380px]:inline-block h-1.5 w-1.5 rounded-full shrink-0 transition-all ${
                                isActive
                                  ? activeStyles.dot
                                  : "bg-slate-600 group-hover:bg-slate-400"
                              }`}
                            />
                            <span className="truncate text-left">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>
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
                            setCorePage(1);
                            setStackPage(1);
                            onTriggerPulse();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-start px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold ${
                            isActive
                              ? activeStyles.btn
                              : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate text-left">
                            <span
                              className={`h-1.5 w-1.5 rounded-full shrink-0 transition-all ${
                                isActive
                                  ? activeStyles.dot
                                  : "bg-slate-600 group-hover:bg-slate-400"
                              }`}
                            />
                            <span className="truncate text-left">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>
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
                            setCorePage(1);
                            setStackPage(1);
                            onTriggerPulse();
                          }}
                          className={`group relative overflow-hidden rounded-xl border font-mono transition-all duration-300 flex items-center justify-start px-2 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold ${
                            isActive
                              ? activeStyles.btn
                              : "border-white/10 bg-black/50 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate text-left">
                            <span
                              className={`h-1.5 w-1.5 rounded-full shrink-0 transition-all ${
                                isActive
                                  ? activeStyles.dot
                                  : "bg-slate-600 group-hover:bg-slate-400"
                              }`}
                            />
                            <span className="truncate text-left">
                              <span className="sm:inline hidden">{item.label}</span>
                              <span className="sm:hidden">{item.shortLabel}</span>
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Core Skills & Methodologies (Hidden in 'All Domains', 3 Columns in Category View) */}
          {!isAllCategory && (() => {
            const activeCategoryStyle = getSkillCategoryStyles(selectedSkillCategory);
            return (
              <>
                <div className="relative z-10 mb-8 sm:mb-12">
                  {/* Core Skills Header with Category-Matching Color */}
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-5 sm:mb-6 border-b ${activeCategoryStyle.headerBorder}`}>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border ${activeCategoryStyle.iconBox}`}>
                        <Cpu className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <div className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest ${activeCategoryStyle.percentColor} flex items-center gap-1.5`}>
                          <span>SECTION.</span>
                          <span className="text-slate-600">//</span>
                          <span className="text-white font-semibold">METHODOLOGIES & ARCHITECTURE</span>
                        </div>
                        <h4 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                          Core Skills & Architectural Methodologies
                        </h4>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 self-start sm:self-auto">
                      <span className={`font-mono text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg border ${activeCategoryStyle.badge} tabular-nums shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                        {coreSkills.length} CORE SKILLS
                      </span>
                    </div>
                  </div>

                  {/* Core Skills Grid: 3 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {paginatedCoreSkills.length === 0 ? (
                      <div className="col-span-full rounded-2xl border border-white/5 bg-black/30 p-8 text-center font-mono text-xs text-slate-500">
                        NO CORE SKILLS REGISTERED IN THIS DOMAIN
                      </div>
                    ) : (
                      paginatedCoreSkills.map((skill, idx) =>
                        renderCoreSkillCard(skill, coreStartIndex + idx)
                      )
                    )}
                  </div>

                  {/* Core Skills Pagination Controller: Consistent Cyber HUD Layout */}
                  {totalCorePages > 1 && (
                    <div className="relative z-10 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-3.5 sm:px-5 py-3 sm:py-3.5 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_10px_30px_rgba(0,0,0,0.5)]">
                      {/* Corner Micro Crosshairs */}
                      <div className={`pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l ${activeCategoryStyle.crosshair}`} />
                      <div className={`pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r ${activeCategoryStyle.crosshair}`} />
                      <div className={`pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 border-b border-l ${activeCategoryStyle.crosshair}`} />
                      <div className={`pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r ${activeCategoryStyle.crosshair}`} />

                      <div className="font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${activeCategoryStyle.beacon} animate-pulse shrink-0`} />
                        <span>
                          SYS.SHOWING [ {coreStartIndex + 1}–{Math.min(safeCorePage * coreItemsPerPage, coreSkills.length)} ] OF{" "}
                          <span className={`${activeCategoryStyle.percentColor} font-bold`}>{coreSkills.length}</span> CORE SKILLS
                        </span>
                      </div>

                      <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() => {
                            setCorePage((p) => Math.max(1, p - 1));
                            onTriggerPulse();
                          }}
                          disabled={safeCorePage === 1}
                          className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                        >
                          <ChevronLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                          <span>PREV</span>
                        </button>

                        {/* Desktop Core Pages (max 10, visible only on lg+) */}
                        <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
                          {desktopCorePages.map((item, idx) =>
                            typeof item === "number" ? (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  setCorePage(item);
                                  onTriggerPulse();
                                }}
                                className={`h-7 sm:h-8 min-w-[28px] sm:min-w-[32px] rounded-xl px-2 sm:px-2.5 font-mono text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                                  safeCorePage === item
                                    ? `${activeCategoryStyle.badge} border shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                                }`}
                              >
                                {item}
                              </button>
                            ) : (
                              <span
                                key={`core-desktop-ellipsis-${idx}`}
                                className="flex items-center justify-center h-7 sm:h-8 w-6 sm:w-7 font-mono text-xs text-slate-500 select-none"
                              >
                                ...
                              </span>
                            )
                          )}
                        </div>

                        {/* Mobile & Tablet Core Pages (max 5, visible on mobile & tablet <lg) */}
                        <div className="flex lg:hidden items-center gap-1 shrink-0 py-0.5">
                          {mobileCorePages.map((item, idx) =>
                            typeof item === "number" ? (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  setCorePage(item);
                                  onTriggerPulse();
                                }}
                                className={`h-7 sm:h-8 min-w-[26px] sm:min-w-[32px] rounded-xl px-1.5 sm:px-2.5 font-mono text-[10px] sm:text-xs font-bold shrink-0 transition-all duration-300 ${
                                  safeCorePage === item
                                    ? `${activeCategoryStyle.badge} border shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                                    : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                                }`}
                              >
                                {item}
                              </button>
                            ) : (
                              <span
                                key={`core-mobile-ellipsis-${idx}`}
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
                            setCorePage((p) => Math.min(totalCorePages, p + 1));
                            onTriggerPulse();
                          }}
                          disabled={safeCorePage === totalCorePages}
                          className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                        >
                          <span>NEXT</span>
                          <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sci-Fi Ambient Divider between Core Skills and Tech Stack */}
                <div className="relative z-10 my-8 sm:my-10 flex items-center justify-center">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="absolute px-3 py-1 rounded-full border border-white/10 bg-[#080B12] text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.9)]">
                    <span className={`h-1 w-1 rounded-full ${activeCategoryStyle.beacon} animate-pulse`} />
                    <span>STACK TELEMETRY // TOOLING MATRIX</span>
                    <span className="h-1 w-1 rounded-full bg-indigo-400 animate-pulse" />
                  </div>
                </div>
              </>
            );
          })()}

          {/* Section 2: Tech Stack & Tooling Matrix (Positioned Below in Original 3 Columns) */}
          <div className="relative z-10">
            {/* Tech Stack Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-5 sm:mb-6 border-b border-indigo-500/25">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/40 bg-indigo-500/10 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.25)]">
                  <Wrench className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-indigo-400/80 flex items-center gap-1.5">
                    <span>SECTION.</span>
                    <span className="text-slate-600">//</span>
                    <span className="text-white font-semibold">TOOLING & FRAMEWORKS</span>
                  </div>
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                    Production Tech Stack & Tools
                  </h4>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 self-start sm:self-auto">
                <span className="font-mono text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg border border-indigo-400/30 bg-indigo-950/40 text-indigo-300 tabular-nums shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                  {techStackSkills.length} STACK NODES
                </span>
              </div>
            </div>

            {/* Tech Stack Grid: Original 3 Columns Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paginatedTechStackSkills.length === 0 ? (
                <div className="col-span-full rounded-2xl border border-white/5 bg-black/30 p-8 text-center font-mono text-xs text-slate-500">
                  NO TECH STACK REGISTERED IN THIS DOMAIN
                </div>
              ) : (
                paginatedTechStackSkills.map(renderTechStackCard)
              )}
            </div>
          </div>

          {/* Tech Stack Pagination Controls: Consistent Cyber HUD Layout */}
          {totalStackPages > 1 && (() => {
            const activeStackStyle = getSkillCategoryStyles(selectedSkillCategory);
            return (
              <div className="relative z-10 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-3.5 sm:px-5 py-3 sm:py-3.5 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_10px_30px_rgba(0,0,0,0.5)]">
                {/* Corner Micro Crosshairs */}
                <div className={`pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l ${activeStackStyle.crosshair}`} />
                <div className={`pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r ${activeStackStyle.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 border-b border-l ${activeStackStyle.crosshair}`} />
                <div className={`pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r ${activeStackStyle.crosshair}`} />

                <div className="font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${activeStackStyle.beacon} animate-pulse shrink-0`} />
                  <span>
                    SYS.SHOWING [ {stackStartIndex + 1}–{Math.min(safeStackPage * stackItemsPerPage, techStackSkills.length)} ] OF{" "}
                    <span className={`${activeStackStyle.percentColor} font-bold`}>{techStackSkills.length}</span> TECH STACK
                  </span>
                </div>

                <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setStackPage((p) => Math.max(1, p - 1));
                      onTriggerPulse();
                    }}
                    disabled={safeStackPage === 1}
                    className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
                  >
                    <ChevronLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                    <span>PREV</span>
                  </button>

                  {/* Desktop Tech Stack Pages (max 10, visible only on lg+) */}
                  <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
                    {desktopStackPages.map((item, idx) =>
                      typeof item === "number" ? (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setStackPage(item);
                            onTriggerPulse();
                          }}
                          className={`h-7 sm:h-8 min-w-[28px] sm:min-w-[32px] rounded-xl px-2 sm:px-2.5 font-mono text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                            safeStackPage === item
                              ? `${activeStackStyle.badge} border shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                              : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                          }`}
                        >
                          {item}
                        </button>
                      ) : (
                        <span
                          key={`stack-desktop-ellipsis-${idx}`}
                          className="flex items-center justify-center h-7 sm:h-8 w-6 sm:w-7 font-mono text-xs text-slate-500 select-none"
                        >
                          ...
                        </span>
                      )
                    )}
                  </div>

                  {/* Mobile & Tablet Tech Stack Pages (max 5, visible on mobile & tablet <lg) */}
                  <div className="flex lg:hidden items-center gap-1 shrink-0 py-0.5">
                    {mobileStackPages.map((item, idx) =>
                      typeof item === "number" ? (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setStackPage(item);
                            onTriggerPulse();
                          }}
                          className={`h-7 sm:h-8 min-w-[26px] sm:min-w-[32px] rounded-xl px-1.5 sm:px-2.5 font-mono text-[10px] sm:text-xs font-bold shrink-0 transition-all duration-300 ${
                            safeStackPage === item
                              ? `${activeStackStyle.badge} border shadow-[0_0_15px_rgba(0,0,0,0.5)]`
                              : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                          }`}
                        >
                          {item}
                        </button>
                      ) : (
                        <span
                          key={`stack-mobile-ellipsis-${idx}`}
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
                      setStackPage((p) => Math.min(totalStackPages, p + 1));
                      onTriggerPulse();
                    }}
                    disabled={safeStackPage === totalStackPages}
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

                  <div className="flex flex-col justify-between flex-1 gap-2.5 text-[11px] mt-1">
                    <p className="text-slate-400 leading-relaxed">
                      {softSkill.description}
                    </p>
                    <div className="flex justify-end pt-0.5">
                      <span
                        className={`rounded border px-1.5 py-0.5 font-mono text-[10px] ${badgeStyle}`}
                      >
                        {softSkill.categoryTag}
                      </span>
                    </div>
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

export default React.memo(DomainsSection);
