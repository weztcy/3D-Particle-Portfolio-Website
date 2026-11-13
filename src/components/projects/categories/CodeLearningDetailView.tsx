"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Box,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  FileCode,
  FileCode2,
  FileDown,
  FileSpreadsheet,
  FileText,
  FolderGit2,
  Globe,
  GraduationCap,
  HardDrive,
  Info,
  Layers,
  Layout,
  ListOrdered,
  Lock,
  Play,
  Search,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { GoChecklist } from "react-icons/go";
import { ProjectCaseStudy } from "@/data";
import CyberTechStackSection from "../CyberTechStackSection";
import CyberRepoCard from "../CyberRepoCard";
import CyberSpecCard from "../CyberSpecCard";

interface CodeLearningDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function CodeLearningDetailView({
  project,
  onTriggerPulse,
}: CodeLearningDetailViewProps) {
  // Section 3: Module Catalog Filter & Search States
  const [moduleSearchQuery, setModuleSearchQuery] = useState("");
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState<
    "All" | "Beginner" | "Intermediate" | "Advanced"
  >("All");
  const [copiedPortalLink, setCopiedPortalLink] = useState(false);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

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

  // =========================================================================
  // Section 1: Overview & Information
  const learningDescription =
    project.codeLearningDescription ||
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "";

  const learningInfo = project.codeLearningProjectInfo || {
    learningCategory: "Systems Programming & Type Theory",
    difficultyLevel: "Intermediate to Advanced",
    learningFormat: "Compilable Code Units",
    totalModules: "8 Deep-Dive Modules",
    totalSubmodules: "24 Code Units",
    totalSourceCodeFiles: "32 Files",
    programmingLanguages: "Modern Systems Programming",
    learningStatus: "Completed",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: "Computer Science & Programming Curriculum",
    targetPlatform: learningInfo.programmingLanguages || "Cross-Platform",
    primaryDomain: "Computer Science Education",
    architecturePipeline: project.architectureSummary || "Modular Code Units + Automated Unit Verification",
    testingAndAudit: "Passed",
    projectStatus: project.status || "Completed",
    projectYear: project.year || "2024",
  };

  // Section 2: Objectives & Prerequisites
  const learningObjectives =
    project.codeLearningObjectives ||
    (project.objectives && project.objectives.length > 0
      ? project.objectives.map((obj, i) => ({
          title: `Objective ${String(i + 1).padStart(2, "0")}`,
          description: obj,
          competencyCode: `COMP-${String(i + 1).padStart(2, "0")}`,
        }))
      : []);

  const prerequisites =
    project.codeLearningPrerequisites ||
    [];

  // Section 3: Curriculum Structure
  const curriculumStructure = project.codeLearningCurriculumStructure || {
    summary: project.architectureSummary || "",
    phases: [],
  };

  // Section 4: Learning Modules & Code Challenges
  const modules = project.codeLearningModules || [];

  const filteredModules = modules.filter((m) => {
    const q = moduleSearchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" ||
      m.title.toLowerCase().includes(q) ||
      m.description.toLowerCase().includes(q) ||
      (m.keyTopics && m.keyTopics.some((c) => c.toLowerCase().includes(q)));

    const matchesDifficulty =
      selectedDifficultyFilter === "All" ||
      m.difficulty === selectedDifficultyFilter;

    return matchesSearch && matchesDifficulty;
  });

  const totalModulesCount = modules.length;
  const totalSubmodulesCount = modules.reduce(
    (acc, m) => acc + (m.submoduleCount || (m.submodules ? m.submodules.length : 0)),
    0
  );
  const totalSourceFilesCount = modules.length * 4;

  const totalEstimatedHours =
    (curriculumStructure as any).totalEstimatedHours || "60 Hours of Hands-On Labs";

  const handleCopyPortal = (code: string, id: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(code);
      setCopiedSnippetId(id);
      setTimeout(() => setCopiedSnippetId(null), 2000);
    }
  };

  // Section 5: Tech Stack & Dev Environment
  const explicitTech = project.codeLearningTechStack;
  const rawTech = project.techStack || [];

  // Section 4: Tech Stack (Unified Flat)
  const allCodeLearningTechStack = useMemo(() => {
    return [
      ...(explicitTech?.programmingLanguages || []).map((t: any) => t.name),
      ...(explicitTech?.frameworksAndLibraries || []).map((t: any) => t.name),
      ...(explicitTech?.developmentToolsAndEnvironment || []).map((t: any) => t.name),
      ...(project.techStack || []),
    ];
  }, [explicitTech, project.techStack]);

  // Section 6: Practical Projects & Exercises
  const practicalProjects = project.codeLearningPracticalProjects || [];

  // Section 7: Learning Outcomes & Supplementary Resources
  const learningOutcomes =
    project.codeLearningOutcomes ||
    [];

  const repoUrl = project.repoUrl || "";
  const isPublicRepo = Boolean(repoUrl && repoUrl.trim().length > 0);

  const curriculumSpecs = project.codeLearningCurriculumSpecs || {
    curriculumTrack: "Systems & Memory Engineering",
    primaryLanguage: "Modern C++",
    executionRuntime: "CMake, Clang & GCC",
    testVerification: "GoogleTest & Sanitizers",
  };

  const supplementaryResources = project.codeLearningSupplementaryResources || {
    title: "Recommended Deep-Dive Resources & References",
    description: "",
    resources: [],
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* =========================================================================
          SECTION 1 — [ 01 // CURRICULUM CONSOLE & LEARNING PATH ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/60" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
              [ 01 // CURRICULUM CONSOLE & LEARNING PATH ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-300">
              <GraduationCap className="h-3 w-3 text-orange-400" />
              {learningInfo.learningCategory}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-300">
              <Code2 className="h-3 w-3 text-orange-400" />
              {learningInfo.difficultyLevel}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            {/* Header Bar */}
            <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-orange-500/30 bg-orange-500/15 px-4 py-2 text-xs font-mono text-white">
              <span className="flex items-center gap-2 text-white">
                <Terminal className="h-3.5 w-3.5 text-white" />
                {project.title}
              </span>
              <span className="text-[10px] text-white/80">SYS.VIEWPORT</span>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-white/10 bg-[#080B14] p-5 sm:p-6 text-slate-300 shadow-inner">
              <div>
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#080B14] shadow-lg">
                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-orange-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-orange-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-orange-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-orange-400/80" />

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
                  {learningDescription.length > 500
                    ? `${learningDescription.slice(0, 500).trim()}...`
                    : learningDescription}
                </p>
              </div>

              {/* Capability Badges Strip (Max 3) */}
              <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[11px] text-slate-200">
                  <CheckCircle2 className="h-3 w-3 text-orange-400" />
                  Hands-On Compilation Units
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[11px] text-slate-200">
                  <Cpu className="h-3 w-3 text-orange-400" />
                  Memory & Architecture Focused
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[11px] text-slate-200">
                  <Activity className="h-3 w-3 text-orange-400" />
                  Verified Output Telemetry
                </span>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Learning Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-white/10 bg-[#080B14] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 mb-4">
                <Layout className="h-4 w-4 text-orange-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">System Classification</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Box className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{String(telemetry.projectType || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Operating Environment</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Globe className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{String(telemetry.targetPlatform || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Domain Focus</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Layers className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{String(telemetry.primaryDomain || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Engineering Pipeline</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Workflow className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{String(telemetry.architecturePipeline || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Testing & Audit</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <ShieldCheck className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{String(telemetry.testingAndAudit || "Passed").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-0.5 border-b border-white/5 pb-2">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Project Status</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
                    <span className="truncate">{String(telemetry.projectStatus || "").slice(0, 50)}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase text-slate-400 tracking-wider">Project Year</dt>
                  <dd className="text-xs font-semibold text-white flex items-center gap-1.5 truncate">
                    <Clock className="h-3.5 w-3.5 text-orange-400 shrink-0" />
                    <span>{String(telemetry.projectYear || "").slice(0, 50)}</span>
                  </dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  isPublicRepo
                    ? "border-white/10 bg-black/50 hover:border-orange-400/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.12)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-orange-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-orange-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-orange-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-orange-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-orange-300">
                      <FolderGit2 className={isPublicRepo ? "h-3.5 w-3.5 text-orange-400" : "h-3.5 w-3.5 text-slate-400"} />
                      <span className="truncate">
                        {isPublicRepo ? "GITHUB REPOSITORY" : "PRIVATE REPOSITORY"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">ACCESS CLEARANCE:</span>
                      <span className={isPublicRepo ? "text-orange-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {isPublicRepo ? "UNRESTRICTED" : "RESTRICTED"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SOURCE GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">{isPublicRepo ? "Main Branch" : "Personal Archive"}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">LICENSE:</span>
                      <span className={isPublicRepo ? "text-orange-400 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {isPublicRepo ? (project.license || "MIT / Educational") : "Proprietary Rights"}
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl border border-orange-400/40 bg-orange-500/15 hover:bg-orange-500/25 hover:border-orange-400 px-4 py-2.5 font-mono text-xs font-bold text-orange-200 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
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

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-orange-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — [ 02 // LEARNING ROADMAP & CURRICULUM BLUEPRINT ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
              [ 02 // LEARNING ROADMAP & CURRICULUM BLUEPRINT ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-slate-400">
            PEDAGOGICAL_ROADMAP // COMPETENCY_TREE
          </span>
        </div>

        {/* Top Split: Prerequisites & Foundation Gates vs Learning Objectives */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Left Column: Prerequisites */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2.5 text-orange-300 font-mono text-xs uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              <span>Prerequisites & Foundation Gates</span>
            </div>

            <div className="space-y-3.5">
              {prerequisites.map((prereq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#080B14] p-4 transition-all hover:border-orange-400/50 hover:bg-white/[0.02]"
                >
                  <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2 mb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    {prereq.category}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                    {prereq.description}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-300 font-sans border-t border-white/5 pt-2">
                    {prereq.items.map((it, itIdx) => (
                      <li key={itIdx} className="flex items-start gap-1.5">
                        <Check className="h-3.5 w-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Learning Objectives */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2.5 text-orange-300 font-mono text-xs uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span>Learning Objectives & Competencies</span>
            </div>

            <div className="space-y-3.5">
              {learningObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#080B14] p-4 transition-all hover:border-orange-400/50 hover:bg-white/[0.02]"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 flex-shrink-0" />
                      {obj.title}
                    </h4>
                    {obj.competencyCode && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-orange-300 border border-orange-400/30 bg-orange-500/10 px-2 py-0.5 rounded">
                        {obj.competencyCode}
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

        {/* Bottom: Visual Curriculum Structure Roadmap */}
        <div className="relative z-10 rounded-2xl border border-white/10 bg-black/50 p-5 sm:p-7 shadow-inner">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-300">
              <Workflow className="h-4 w-4 text-orange-400" />
              <span className="font-bold uppercase tracking-wider">
                Visual Curriculum Structure Roadmap (Phase Progression)
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">3_TIER_PIPELINE</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans mb-6">
            {curriculumStructure.summary.length > 1000
              ? `${curriculumStructure.summary.slice(0, 1000).trim()}...`
              : curriculumStructure.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {curriculumStructure.phases.slice(0, 3).map((ph, phIdx) => {
              const tierLabels = ["Basic", "Intermediate", "Advanced"];
              const rawDifficulty = (ph.difficulty || "").trim();
              const normalizedDifficulty =
                rawDifficulty.toLowerCase() === "foundational"
                  ? "Basic"
                  : tierLabels.includes(rawDifficulty)
                  ? rawDifficulty
                  : tierLabels[phIdx] || "Basic";

              return (
                <div
                  key={phIdx}
                  className="rounded-xl border border-white/10 bg-[#080B14] p-4 transition-all hover:border-orange-400/50"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
                    <span className="font-mono text-[10px] font-bold uppercase text-orange-400">
                      {ph.phaseNumber}
                    </span>
                    <span className="font-mono text-[10px] text-orange-300 bg-orange-500/10 border border-orange-400/30 px-2 py-0.5 rounded">
                      {ph.moduleRange}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-slate-100 mb-1">
                    {ph.phaseTitle}
                  </h4>
                  <p className="font-mono text-[11px] text-slate-300 mb-3">
                    Difficulty: {normalizedDifficulty}
                  </p>
                  <ul className="space-y-1.5 border-t border-white/5 pt-2.5 text-xs text-slate-300 font-sans">
                    {ph.topics.map((top, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-1.5">
                        <ArrowRight className="h-3 w-3 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="truncate">{top}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — [ 03 // CURRICULUM MODULES & TOPIC ARCHITECTURE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
              [ 03 // CURRICULUM MODULES & TOPIC ARCHITECTURE ]
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 text-slate-300 text-[10px] uppercase">
              <BookOpen className="h-3 w-3 text-orange-400" />
              {totalModulesCount} MODULE TIERS
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 text-slate-300 text-[10px] uppercase">
              <ShieldCheck className="h-3 w-3 text-orange-400" />
              100% VERIFIED SYLLABUS
            </span>
          </div>
        </div>

        {/* Top Telemetry Aggregator Bar */}
        <div className="relative z-10 mb-8 rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                Pedagogical Modules
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-baseline gap-1.5">
                <span>{totalModulesCount}</span>
                <span className="text-xs text-orange-400 font-normal">Stages</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 block mt-1">
                Foundational to Advanced
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                Aggregated Topics
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-baseline gap-1.5">
                <span>{totalSubmodulesCount}</span>
                <span className="text-xs text-orange-400 font-normal">Units</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 block mt-1">
                Submodule Invariants
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                Source Code
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-baseline gap-1.5">
                <span>{totalSourceFilesCount}</span>
                <span className="text-xs text-orange-400 font-normal">Files</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 block mt-1">
                Compilable Programs
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                Curriculum Rigor
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-orange-300 flex items-baseline gap-1.5">
                <span>100%</span>
                <span className="text-xs text-orange-400 font-normal">Verified</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 block mt-1">
                Zero Leaks & Warnings
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Instant Search Control Bar */}
        <div className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-400/70" />
            <input
              type="text"
              placeholder="Search module title, concept topics, or stage..."
              value={moduleSearchQuery}
              onChange={(e) => setModuleSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#080B14] pl-10 pr-4 py-2 text-xs font-mono text-slate-200 placeholder-slate-500 focus:border-orange-400 focus:outline-none transition-colors"
            />
            {moduleSearchQuery && (
              <button
                onClick={() => setModuleSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Difficulty Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(["All", "Beginner", "Intermediate", "Advanced"] as const).map((diff) => {
              const count =
                diff === "All"
                  ? modules.length
                  : modules.filter((m) => m.difficulty === diff).length;

              return (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficultyFilter(diff)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                    selectedDifficultyFilter === diff
                      ? "border border-orange-400/50 bg-orange-500/15 text-orange-200 font-semibold shadow-[0_0_12px_rgba(249,115,22,0.2)]"
                      : "border border-white/10 bg-black/50 text-slate-400 hover:text-slate-200 hover:border-orange-400/40"
                  }`}
                >
                  <span>{diff}</span>
                  <span className="font-mono text-[10px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 mb-6 pb-2 border-b border-white/5">
          <span>
            SHOWING <span className="text-orange-300 font-semibold">{filteredModules.length}</span> OF{" "}
            {modules.length} CURRICULUM MODULES
          </span>
          <span className="text-[10px] text-slate-400">SYSTEM_MODULE_CATALOG</span>
        </div>

        {/* Bento Grid Showcase Mandiri */}
        {filteredModules.length > 0 ? (
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredModules.map((mod) => (
              <div
                key={mod.id}
                className="rounded-2xl border border-white/10 bg-[#080B14] p-5 sm:p-6 transition-all hover:border-orange-400/50 hover:shadow-[0_12px_40px_rgba(249,115,22,0.12)] flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-orange-300 bg-orange-500/10 border border-orange-400/30 px-2.5 py-1 rounded">
                        MOD // {mod.moduleNumber}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded font-mono text-[10px] uppercase font-semibold ${
                        mod.difficulty === "Beginner"
                          ? "border border-orange-400/30 bg-orange-500/10 text-orange-300"
                          : mod.difficulty === "Intermediate"
                          ? "border border-orange-400/35 bg-orange-500/15 text-orange-200"
                          : mod.difficulty === "Advanced"
                          ? "border border-orange-400/40 bg-orange-500/15 text-orange-200"
                          : "border border-orange-400/40 bg-orange-500/20 text-orange-100"
                      }`}
                    >
                      {mod.difficulty}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-orange-200 transition-colors mb-2">
                    {mod.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {mod.description}
                  </p>

                  {/* Micro-Datapad Matrix (4 items) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4 border-y border-white/5 py-3">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase text-slate-400">Lessons</span>
                      <span className="font-mono text-xs font-bold text-slate-100">
                        {mod.submoduleCount || (mod.submodules ? mod.submodules.length : 12)} Units
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase text-slate-400">Programs</span>
                      <span className="font-mono text-xs font-bold text-orange-300">
                        {mod.sourceFilesCount || Math.round((mod.submoduleCount || 12) * 1.3)} Files
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase text-slate-400">Est. Effort</span>
                      <span className="font-mono text-xs font-bold text-slate-200">
                        {mod.estimatedHours || `${Math.round((mod.submoduleCount || 12) * 0.9)} Hours`}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase text-slate-400">Status</span>
                      <span className="font-mono text-xs font-bold text-orange-300 flex items-center gap-1">
                        <Check className="h-3 w-3 text-orange-400" />
                        100% OK
                      </span>
                    </div>
                  </div>

                  {/* Key Concepts / Core Topics */}
                  {mod.keyTopics && mod.keyTopics.length > 0 && (
                    <div className="mb-4">
                      <span className="font-mono text-[10px] uppercase font-bold text-orange-400 block mb-2">
                        Core Conceptual Invariants:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.keyTopics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded border border-white/10 bg-black/50 text-slate-200"
                          >
                            <span className="text-orange-400">›</span>
                            <span>{topic}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Progress Bar + Spec Identifier */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden mb-2">
                    <div className="h-full w-full rounded-full bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.35)]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>UNIT_SPEC // M{mod.moduleNumber}_STABLE</span>
                    <span className="text-orange-400 font-semibold">VERIFIED_COMPLETE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-white/10 bg-[#080B14]">
            <BookOpen className="h-10 w-10 text-orange-400/40 mb-3" />
            <h5 className="font-mono text-sm font-bold text-white mb-1">
              NO MODULES MATCH QUERY
            </h5>
            <p className="font-mono text-xs text-slate-400 mb-4">
              Try adjusting your search terms or filter criteria.
            </p>
            <button
              onClick={() => {
                setModuleSearchQuery("");
                setSelectedDifficultyFilter("All");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-400/40 bg-orange-500/15 text-orange-200 text-xs font-mono hover:bg-orange-500/25 hover:border-orange-400 hover:text-white transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 4 — [ 04 // LEARNING TECH STACK & RUNTIME ECOSYSTEM ]
          ========================================================================= */}
      <CyberTechStackSection
        sectionNumber="04"
        sectionTitle="[ 04 // LEARNING TECH STACK & RUNTIME ECOSYSTEM ]"
        techStack={allCodeLearningTechStack}
        accentColor="orange"
        onTriggerPulse={onTriggerPulse}
      />

      {/* =========================================================================
          SECTION 5 — [ 05 // RECOMMENDED PRACTICE PROJECTS & APPLIED CAPSTONES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
              [ 05 // RECOMMENDED PRACTICE PROJECTS & APPLIED CAPSTONES ]
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 text-slate-300 text-[10px] uppercase">
              <Terminal className="h-3 w-3 text-orange-400" />
              3 TIERED TRACKS
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-0.5 text-slate-300 text-[10px] uppercase">
              <ShieldCheck className="h-3 w-3 text-orange-400" />
              INDUSTRY SPECIFICATIONS
            </span>
          </div>
        </div>

        {/* 3 Tiered Practice Project Cards (Basic, Intermediate, Advanced) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 items-stretch">
          {practicalProjects.slice(0, 3).map((proj, idx) => {
            const defaultTiers = ["BASIC", "INTERMEDIATE", "ADVANCED"];
            const defaultEfforts = ["4-6 Hours", "6-8 Hours", "10-12 Hours"];
            const levelBadge = proj.tier || defaultTiers[idx] || `TIER 0${idx + 1}`;
            const trackLabel = proj.trackTag || proj.difficulty || "CAPSTONE TRACK";
            const scopeItems: string[] =
              proj.coreScope || proj.architecturalConstraints || proj.highlights || [];

            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#080B14] p-5 sm:p-6 transition-all hover:border-orange-400/50 hover:shadow-[0_12px_40px_rgba(249,115,22,0.12)] flex flex-col justify-between group"
              >
                <div>
                  {/* Card Topbar */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-300 bg-orange-500/10 border border-orange-400/30 px-2.5 py-0.5 rounded">
                      {levelBadge}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-orange-400 font-semibold truncate">
                      {trackLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-orange-200 transition-colors mb-2">
                    {proj.title}
                  </h4>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                    {proj.description}
                  </p>

                  {/* Core Implementation Scope */}
                  {scopeItems.length > 0 && (
                    <div className="mb-4 border-t border-white/5 pt-3">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-orange-300 block mb-2">
                        Core Implementation Scope:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                        {scopeItems.map((item, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5">
                            <span className="text-orange-400 font-bold leading-4">›</span>
                            <span className="text-[11px] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Footer: Static Estimated Time Label + Dynamic Time */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-[10px] font-mono text-slate-400">
                  <span className="text-orange-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-orange-400 shrink-0" />
                    <span>ESTIMATED TIME</span>
                  </span>
                  <span className="text-slate-300 font-semibold shrink-0">
                    {proj.estimatedTime || defaultEfforts[idx] || "6-8 Hours"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom: Learning Outcomes & Mastery Matrix (2 Universal Pillars) */}
        <div className="relative z-10 rounded-2xl border border-white/10 bg-black/50 p-5 sm:p-7 shadow-inner">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-300">
              <GraduationCap className="h-4 w-4 text-orange-400" />
              <span className="font-bold uppercase tracking-wider">
                Demonstrated Engineering Competencies & Outcomes
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">CERTIFIED_MASTERY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.slice(0, 2).map((pillar, pIdx) => (
              <div key={pIdx} className="space-y-3">
                <span className="font-mono text-xs uppercase font-bold text-orange-300 block border-b border-white/10 pb-1.5">
                  {pillar.pillar}
                </span>
                <div className="space-y-2.5">
                  {pillar.skills.map((sk, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-lg border border-white/10 bg-[#080B14] p-3.5 hover:border-orange-400/50 transition-colors flex items-start gap-3"
                    >
                      <GoChecklist className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-xs text-slate-100 mb-1">
                          {sk.title}
                        </h5>
                        <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                          {sk.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* =========================================================================
          SECTION 6 — [ 06 // CURRICULUM VAULT & SYLLABUS GATES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/60" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/60" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-orange-400">
              [ 06 // CURRICULUM VAULT & SYLLABUS GATES ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-slate-400">
            GITHUB_SOURCE // SYLLABUS_GATEWAYS
          </span>
        </div>

        {/* Symmetrical 3-Card Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* CARD 1 — Adaptive Repository Card (Universal Standard) */}
          <CyberRepoCard
            repoUrl={repoUrl}
            accentColor="orange"
            onTriggerPulse={onTriggerPulse}
            license={project.license}
            projectStatus={project.telemetry?.projectStatus || "Completed"}
          />

          {/* CARD 2 — Learning Documentation & Syllabus Card (Universal Spec Standard) */}
          <CyberSpecCard
            accentColor="orange"
            icon={FileText}
            categoryTag="CURRICULUM TAXONOMY"
            title="Curriculum & Syllabus Architecture"
            description="Structured technical curriculum blueprint defining core learning tracks, primary programming languages, execution runtimes, and automated test verification."
            specs={[
              { label: "CURRICULUM TRACK", value: curriculumSpecs.curriculumTrack },
              { label: "PRIMARY LANGUAGE", value: curriculumSpecs.primaryLanguage, highlight: true },
              { label: "EXECUTION RUNTIME", value: curriculumSpecs.executionRuntime },
              { label: "TEST VERIFICATION", value: curriculumSpecs.testVerification },
            ]}
            action={
              repoUrl
                ? {
                    label: "INSPECT SYSTEM SPECS",
                    href: `${repoUrl}#readme`,
                  }
                : {
                    label: "RESTRICTED ACCESS",
                  }
            }
          />

          {/* CARD 3 — Course Artifacts & Competencies Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#080B14] p-5 sm:p-7 shadow-lg transition-all hover:border-orange-400/50 hover:shadow-[0_8px_32px_rgba(249,115,22,0.12)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-orange-400/50" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-orange-400/50" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-orange-400/50" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-orange-400/50" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-orange-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileCode2 className="h-4 w-4 text-orange-400" />
                  <span>Verified Competencies</span>
                </div>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Engineering Competency Ledger
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                Systematic progressive learning outcomes verified through automated test suites and deterministic memory inspections.
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                {(supplementaryResources.resources || []).map((res: any, rIdx: number) => (
                  <div key={rIdx} className="flex items-center justify-between text-slate-300">
                    <span className="truncate pr-2 text-[11px]">{res.name}</span>
                    <span className="font-mono text-[10px] text-orange-300 border border-orange-400/30 bg-orange-500/10 px-1.5 py-0.5 rounded">
                      {res.format}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex items-center justify-center rounded-xl border border-orange-400/30 bg-orange-500/15 px-4 py-3 font-mono text-xs font-semibold text-orange-200">
              CURRICULUM AUDIT PASSED
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
