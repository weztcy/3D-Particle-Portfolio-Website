"use client";

import React from "react";
import {
  FolderGit2,
  Lock,
  ExternalLink,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { CyberAccentColor } from "./CyberTechStackSection";

interface CyberRepoCardProps {
  repoUrl?: string;
  accentColor: CyberAccentColor;
  onTriggerPulse?: () => void;
  branchName?: string;
  verifiedLabel?: string;
  license?: string;
  projectStatus?: string;
}

const REPO_THEMES: Record<
  CyberAccentColor,
  {
    border: string;
    bg: string;
    textAccent: string;
    textHover: string;
    icon: string;
    ping: string;
    dot: string;
    badgeBorder: string;
    badgeBg: string;
    badgeText: string;
    buttonGradient: string;
    buttonText: string;
    buttonShadow: string;
    crosshair: string;
    highlightBorder: string;
    highlightBg: string;
    rowHoverBg: string;
  }
> = {
  sky: {
    border: "border-sky-500/20 hover:border-sky-400/50",
    bg: "bg-[#080B14]",
    textAccent: "text-sky-400",
    textHover: "group-hover:text-sky-200",
    icon: "text-sky-400",
    ping: "bg-sky-400",
    dot: "bg-sky-500",
    badgeBorder: "border-sky-400/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-300",
    buttonGradient: "border border-sky-400/40 bg-sky-500/15 hover:bg-sky-500/25 hover:border-sky-400",
    buttonText: "text-sky-200 hover:text-white",
    buttonShadow: "shadow-[0_0_20px_rgba(56,189,248,0.18)] hover:shadow-[0_0_28px_rgba(56,189,248,0.3)]",
    crosshair: "border-sky-400/60",
    highlightBorder: "border-white/10",
    highlightBg: "bg-[#080B14]",
    rowHoverBg: "hover:bg-sky-500/5",
  },
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-400/50",
    bg: "bg-[#080B14]",
    textAccent: "text-cyan-400",
    textHover: "group-hover:text-cyan-200",
    icon: "text-cyan-400",
    ping: "bg-cyan-400",
    dot: "bg-cyan-500",
    badgeBorder: "border-cyan-400/30",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-300",
    buttonGradient: "border border-cyan-400/40 bg-cyan-500/15 hover:bg-cyan-500/25 hover:border-cyan-400",
    buttonText: "text-cyan-200 hover:text-white",
    buttonShadow: "shadow-[0_0_20px_rgba(6,182,212,0.18)] hover:shadow-[0_0_28px_rgba(6,182,212,0.3)]",
    crosshair: "border-cyan-400/60",
    highlightBorder: "border-white/10",
    highlightBg: "bg-[#080B14]",
    rowHoverBg: "hover:bg-cyan-500/5",
  },
  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-400/50",
    bg: "bg-[#080B14]",
    textAccent: "text-emerald-400",
    textHover: "group-hover:text-emerald-200",
    icon: "text-emerald-400",
    ping: "bg-emerald-400",
    dot: "bg-emerald-500",
    badgeBorder: "border-emerald-400/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-300",
    buttonGradient: "border border-emerald-400/40 bg-emerald-500/15 hover:bg-emerald-500/25 hover:border-emerald-400",
    buttonText: "text-emerald-200 hover:text-white",
    buttonShadow: "shadow-[0_0_20px_rgba(16,185,129,0.18)] hover:shadow-[0_0_28px_rgba(16,185,129,0.3)]",
    crosshair: "border-emerald-400/60",
    highlightBorder: "border-white/10",
    highlightBg: "bg-[#080B14]",
    rowHoverBg: "hover:bg-emerald-500/5",
  },
  purple: {
    border: "border-purple-500/20 hover:border-purple-400/50",
    bg: "bg-[#080B14]",
    textAccent: "text-purple-400",
    textHover: "group-hover:text-purple-200",
    icon: "text-purple-400",
    ping: "bg-purple-400",
    dot: "bg-purple-500",
    badgeBorder: "border-purple-400/30",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-300",
    buttonGradient: "border border-purple-400/40 bg-purple-500/15 hover:bg-purple-500/25 hover:border-purple-400",
    buttonText: "text-purple-200 hover:text-white",
    buttonShadow: "shadow-[0_0_20px_rgba(168,85,247,0.18)] hover:shadow-[0_0_28px_rgba(168,85,247,0.3)]",
    crosshair: "border-purple-400/60",
    highlightBorder: "border-white/10",
    highlightBg: "bg-[#080B14]",
    rowHoverBg: "hover:bg-purple-500/5",
  },
  indigo: {
    border: "border-indigo-500/20 hover:border-indigo-400/50",
    bg: "bg-[#080B14]",
    textAccent: "text-indigo-400",
    textHover: "group-hover:text-indigo-200",
    icon: "text-indigo-400",
    ping: "bg-indigo-400",
    dot: "bg-indigo-500",
    badgeBorder: "border-indigo-400/30",
    badgeBg: "bg-indigo-500/10",
    badgeText: "text-indigo-300",
    buttonGradient: "border border-indigo-400/40 bg-indigo-500/15 hover:bg-indigo-500/25 hover:border-indigo-400",
    buttonText: "text-indigo-200 hover:text-white",
    buttonShadow: "shadow-[0_0_20px_rgba(99,102,241,0.18)] hover:shadow-[0_0_28px_rgba(99,102,241,0.3)]",
    crosshair: "border-indigo-400/60",
    highlightBorder: "border-white/10",
    highlightBg: "bg-[#080B14]",
    rowHoverBg: "hover:bg-indigo-500/5",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-400/50",
    bg: "bg-[#080B14]",
    textAccent: "text-amber-400",
    textHover: "group-hover:text-amber-200",
    icon: "text-amber-400",
    ping: "bg-amber-400",
    dot: "bg-amber-500",
    badgeBorder: "border-amber-400/30",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-300",
    buttonGradient: "border border-amber-400/40 bg-amber-500/15 hover:bg-amber-500/25 hover:border-amber-400",
    buttonText: "text-amber-200 hover:text-white",
    buttonShadow: "shadow-[0_0_20px_rgba(245,158,11,0.18)] hover:shadow-[0_0_28px_rgba(245,158,11,0.3)]",
    crosshair: "border-amber-400/60",
    highlightBorder: "border-white/10",
    highlightBg: "bg-[#080B14]",
    rowHoverBg: "hover:bg-amber-500/5",
  },
  rose: {
    border: "border-rose-500/20 hover:border-rose-400/50",
    bg: "bg-[#080B14]",
    textAccent: "text-rose-400",
    textHover: "group-hover:text-rose-200",
    icon: "text-rose-400",
    ping: "bg-rose-400",
    dot: "bg-rose-500",
    badgeBorder: "border-rose-400/30",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-300",
    buttonGradient: "border border-rose-400/40 bg-rose-500/15 hover:bg-rose-500/25 hover:border-rose-400",
    buttonText: "text-rose-200 hover:text-white",
    buttonShadow: "shadow-[0_0_20px_rgba(244,63,94,0.18)] hover:shadow-[0_0_28px_rgba(244,63,94,0.3)]",
    crosshair: "border-rose-400/60",
    highlightBorder: "border-white/10",
    highlightBg: "bg-[#080B14]",
    rowHoverBg: "hover:bg-rose-500/5",
  },
  orange: {
    border: "border-orange-500/20 hover:border-orange-400/50",
    bg: "bg-[#080B14]",
    textAccent: "text-orange-400",
    textHover: "group-hover:text-orange-200",
    icon: "text-orange-400",
    ping: "bg-orange-400",
    dot: "bg-orange-500",
    badgeBorder: "border-orange-400/30",
    badgeBg: "bg-orange-500/10",
    badgeText: "text-orange-300",
    buttonGradient: "border border-orange-400/40 bg-orange-500/15 hover:bg-orange-500/25 hover:border-orange-400",
    buttonText: "text-orange-200 hover:text-white",
    buttonShadow: "shadow-[0_0_20px_rgba(249,115,22,0.18)] hover:shadow-[0_0_28px_rgba(249,115,22,0.3)]",
    crosshair: "border-orange-400/60",
    highlightBorder: "border-white/10",
    highlightBg: "bg-[#080B14]",
    rowHoverBg: "hover:bg-orange-500/5",
  },
};

export default function CyberRepoCard({
  repoUrl,
  accentColor,
  onTriggerPulse,
  branchName = "MAIN",
  verifiedLabel = "AUDIT_VERIFIED",
  license,
  projectStatus = "Completed",
}: CyberRepoCardProps) {
  const theme = REPO_THEMES[accentColor] || REPO_THEMES.sky;
  const hasRepoUrl = Boolean(repoUrl && repoUrl.trim().length > 0);

  // Extract repository path if valid GitHub link (e.g., "dimas/smart-inventory")
  const repoSlug = hasRepoUrl
    ? repoUrl!.replace(/^https?:\/\/github\.com\//i, "").replace(/\/+$/, "")
    : null;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border ${theme.border} ${theme.bg} p-6 sm:p-7 shadow-lg transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]`}
    >
      {/* 4 Optical Corner Crosshairs */}
      <div
        className={`pointer-events-none absolute top-2.5 left-2.5 sm:top-3 sm:left-3 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-l sm:border-l-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute top-2.5 right-2.5 sm:top-3 sm:right-3 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-r sm:border-r-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-l sm:border-l-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-r sm:border-r-2 ${theme.crosshair}`}
      />

      <div>
        {/* Top Header / Status Line */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
          <div
            className={`flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider ${theme.textAccent}`}
          >
            <FolderGit2 className={`h-4 w-4 ${theme.icon} shrink-0`} />
            <span>PROJECT ARCHIVE</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 transition-colors">
          {hasRepoUrl ? "GitHub Repository" : "Private Repository"}
        </h3>

        {/* Rich Description */}
        <p className="hidden md:block text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
          {hasRepoUrl
            ? "Complete project repository hosted on GitHub. Access full source files, revision history, architecture structure, and technical documentation."
            : "Project files and assets are maintained in a private repository under proprietary rights. Public access is restricted to protect intellectual property."}
        </p>

        {/* Structured Repository Metadata Matrix (Fills Space with Universal Specs) */}
        <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase text-[11px]">ACCESS CLEARANCE:</span>
            <span
              className={`${theme.textAccent} font-semibold`}
            >
              {hasRepoUrl ? "UNRESTRICTED" : "RESTRICTED"}
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase text-[11px]">SOURCE GATEWAY:</span>
            <span className="text-slate-200 font-semibold">
              {hasRepoUrl ? "Main Branch" : "Personal Archive"}
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase text-[11px]">LICENSE:</span>
            <span className={`${theme.textAccent} font-semibold`}>
              {hasRepoUrl ? (license || "MIT License") : "Proprietary Rights"}
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase text-[11px]">PROJECT STATUS:</span>
            <span className={`inline-flex items-center gap-1.5 ${theme.textAccent} font-semibold`}>
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
              <span>{projectStatus}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Action / Status Button */}
      {hasRepoUrl && repoUrl ? (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onTriggerPulse?.()}
          className={`group w-full inline-flex items-center justify-center gap-2 rounded-xl ${theme.buttonGradient} px-5 py-3 font-mono text-xs font-bold ${theme.buttonText} transition-all duration-300 ${theme.buttonShadow}`}
        >
          <span>ACCESS REPOSITORY</span>
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <div className={`w-full inline-flex items-center justify-center gap-2 rounded-xl border ${theme.badgeBorder} bg-[#080B14] px-5 py-3 font-mono text-xs font-semibold ${theme.textAccent} cursor-not-allowed`}>
          <Lock className={`h-4 w-4 ${theme.icon}`} />
          <span>RESTRICTED ACCESS</span>
        </div>
      )}
    </div>
  );
}
