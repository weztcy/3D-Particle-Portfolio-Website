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
    border: "border-sky-500/30 hover:border-sky-400/60",
    bg: "bg-[#080B14]/90",
    textAccent: "text-sky-300",
    textHover: "group-hover:text-sky-200",
    icon: "text-sky-400",
    ping: "bg-sky-400",
    dot: "bg-sky-500",
    badgeBorder: "border-sky-400/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-300",
    buttonGradient: "from-sky-400 to-cyan-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]",
    crosshair: "border-sky-400/60",
    highlightBorder: "border-sky-500/20",
    highlightBg: "bg-sky-950/20",
    rowHoverBg: "hover:bg-sky-500/5",
  },
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    bg: "bg-[#070D12]/90",
    textAccent: "text-cyan-300",
    textHover: "group-hover:text-cyan-200",
    icon: "text-cyan-400",
    ping: "bg-cyan-400",
    dot: "bg-cyan-500",
    badgeBorder: "border-cyan-400/30",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-300",
    buttonGradient: "from-cyan-400 to-sky-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]",
    crosshair: "border-cyan-400/60",
    highlightBorder: "border-cyan-500/20",
    highlightBg: "bg-cyan-950/20",
    rowHoverBg: "hover:bg-cyan-500/5",
  },
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-400/60",
    bg: "bg-[#070D0E]/90",
    textAccent: "text-emerald-300",
    textHover: "group-hover:text-emerald-200",
    icon: "text-emerald-400",
    ping: "bg-emerald-400",
    dot: "bg-emerald-500",
    badgeBorder: "border-emerald-400/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-300",
    buttonGradient: "from-emerald-400 to-teal-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    crosshair: "border-emerald-400/60",
    highlightBorder: "border-emerald-500/20",
    highlightBg: "bg-emerald-950/20",
    rowHoverBg: "hover:bg-emerald-500/5",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-400/60",
    bg: "bg-[#0A0713]/90",
    textAccent: "text-purple-300",
    textHover: "group-hover:text-purple-200",
    icon: "text-purple-400",
    ping: "bg-purple-400",
    dot: "bg-purple-500",
    badgeBorder: "border-purple-400/30",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-300",
    buttonGradient: "from-purple-500 to-violet-500",
    buttonText: "text-white",
    buttonShadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]",
    crosshair: "border-purple-400/60",
    highlightBorder: "border-purple-500/20",
    highlightBg: "bg-purple-950/20",
    rowHoverBg: "hover:bg-purple-500/5",
  },
  indigo: {
    border: "border-indigo-500/30 hover:border-indigo-400/60",
    bg: "bg-[#070914]/90",
    textAccent: "text-indigo-300",
    textHover: "group-hover:text-indigo-200",
    icon: "text-indigo-400",
    ping: "bg-indigo-400",
    dot: "bg-indigo-500",
    badgeBorder: "border-indigo-400/30",
    badgeBg: "bg-indigo-500/10",
    badgeText: "text-indigo-300",
    buttonGradient: "from-indigo-500 to-blue-600",
    buttonText: "text-white",
    buttonShadow: "hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]",
    crosshair: "border-indigo-400/60",
    highlightBorder: "border-indigo-500/20",
    highlightBg: "bg-indigo-950/20",
    rowHoverBg: "hover:bg-indigo-500/5",
  },
  amber: {
    border: "border-amber-400/30 hover:border-amber-400/70",
    bg: "bg-[#0A0D17]/85",
    textAccent: "text-amber-300",
    textHover: "group-hover:text-amber-200",
    icon: "text-amber-400",
    ping: "bg-amber-400",
    dot: "bg-amber-400",
    badgeBorder: "border-amber-400/40",
    badgeBg: "bg-amber-400/15",
    badgeText: "text-amber-300",
    buttonGradient: "from-amber-400 via-yellow-400 to-amber-300 text-slate-950 font-bold",
    buttonText: "text-slate-950 font-bold",
    buttonShadow: "shadow-[0_0_28px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)]",
    crosshair: "border-amber-400/70",
    highlightBorder: "border-amber-400/30",
    highlightBg: "bg-amber-400/10",
    rowHoverBg: "hover:bg-amber-400/10",
  },
  rose: {
    border: "border-rose-500/30 hover:border-rose-400/60",
    bg: "bg-[#0E070B]/90",
    textAccent: "text-rose-300",
    textHover: "group-hover:text-rose-200",
    icon: "text-rose-400",
    ping: "bg-rose-400",
    dot: "bg-rose-500",
    badgeBorder: "border-rose-400/30",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-300",
    buttonGradient: "from-rose-500 to-pink-500",
    buttonText: "text-white",
    buttonShadow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.35)]",
    crosshair: "border-rose-400/60",
    highlightBorder: "border-rose-500/20",
    highlightBg: "bg-rose-950/20",
    rowHoverBg: "hover:bg-rose-500/5",
  },
  orange: {
    border: "border-orange-500/30 hover:border-orange-400/60",
    bg: "bg-[#0F0A06]/90",
    textAccent: "text-orange-300",
    textHover: "group-hover:text-orange-200",
    icon: "text-orange-400",
    ping: "bg-orange-400",
    dot: "bg-orange-500",
    badgeBorder: "border-orange-400/30",
    badgeBg: "bg-orange-500/10",
    badgeText: "text-orange-300",
    buttonGradient: "from-orange-500 to-amber-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]",
    crosshair: "border-orange-400/60",
    highlightBorder: "border-orange-500/20",
    highlightBg: "bg-orange-950/20",
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
      className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-7 shadow-lg transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] ${
        hasRepoUrl
          ? `${theme.border} ${theme.bg}`
          : "border-white/10 bg-[#0A0D14]/80 hover:border-white/20"
      }`}
    >
      {/* 4 Optical Corner Crosshairs */}
      <div
        className={`pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 ${
          hasRepoUrl ? theme.crosshair : "border-white/20"
        }`}
      />
      <div
        className={`pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 ${
          hasRepoUrl ? theme.crosshair : "border-white/20"
        }`}
      />
      <div
        className={`pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 ${
          hasRepoUrl ? theme.crosshair : "border-white/20"
        }`}
      />
      <div
        className={`pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 ${
          hasRepoUrl ? theme.crosshair : "border-white/20"
        }`}
      />

      <div>
        {/* Top Header / Status Line */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
          <div
            className={`flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider ${
              hasRepoUrl ? theme.textAccent : "text-slate-400"
            }`}
          >
            <FolderGit2 className={`h-4 w-4 ${hasRepoUrl ? theme.icon : "text-slate-400"} shrink-0`} />
            <span>PROJECT ARCHIVE</span>
          </div>

          {hasRepoUrl ? (
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.ping} opacity-75`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${theme.dot}`}
              />
            </span>
          ) : (
            <span className="flex items-center justify-center text-slate-400">
              <Lock className="h-4 w-4 text-slate-400" />
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 transition-colors">
          {hasRepoUrl ? "GitHub Repository" : "Private Repository"}
        </h3>

        {/* Rich Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
          {hasRepoUrl
            ? "Complete project repository hosted on GitHub. Access full source files, revision history, architecture structure, and technical documentation."
            : "Project files and assets are maintained in a private repository under proprietary rights. Public access is restricted to protect intellectual property."}
        </p>

        {/* Structured Repository Metadata Matrix (Fills Space with Universal Specs) */}
        <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase text-[11px]">ACCESS CLEARANCE:</span>
            <span
              className={
                hasRepoUrl
                  ? `${theme.textAccent} font-semibold`
                  : "text-slate-300 font-semibold"
              }
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
            <span className="text-slate-200 font-semibold">
              {hasRepoUrl ? (license || "MIT License") : "Proprietary Rights"}
            </span>
          </div>

          <div className="flex items-center justify-between text-slate-400">
            <span className="uppercase text-[11px]">PROJECT STATUS:</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
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
          className={`group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${theme.buttonGradient} px-5 py-3 font-mono text-xs font-bold ${theme.buttonText} transition-all duration-300 ${theme.buttonShadow} hover:scale-[1.01]`}
        >
          <span>ACCESS REPOSITORY</span>
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-5 py-3 font-mono text-xs font-semibold text-slate-400 cursor-not-allowed">
          <Lock className="h-4 w-4 text-slate-500" />
          <span>RESTRICTED ACCESS</span>
        </div>
      )}
    </div>
  );
}
