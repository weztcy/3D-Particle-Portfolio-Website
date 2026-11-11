"use client";

import React from "react";
import { FolderGit2, Lock, ExternalLink } from "lucide-react";
import { CyberAccentColor } from "./CyberTechStackSection";

interface CyberRepoCardProps {
  repoUrl?: string;
  accentColor: CyberAccentColor;
  onTriggerPulse?: () => void;
  branchName?: string;
  verifiedLabel?: string;
}

const REPO_THEMES: Record<
  CyberAccentColor,
  {
    border: string;
    bg: string;
    textAccent: string;
    icon: string;
    ping: string;
    dot: string;
    badgeBorder: string;
    badgeBg: string;
    badgeText: string;
    buttonGradient: string;
    buttonText: string;
    buttonShadow: string;
  }
> = {
  sky: {
    border: "border-sky-500/30 hover:border-sky-400/60",
    bg: "bg-[#080B14]/85",
    textAccent: "text-sky-300",
    icon: "text-sky-400",
    ping: "bg-sky-400",
    dot: "bg-sky-500",
    badgeBorder: "border-sky-400/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-300",
    buttonGradient: "from-sky-400 to-cyan-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]",
  },
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    bg: "bg-[#070D12]/85",
    textAccent: "text-cyan-300",
    icon: "text-cyan-400",
    ping: "bg-cyan-400",
    dot: "bg-cyan-500",
    badgeBorder: "border-cyan-400/30",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-300",
    buttonGradient: "from-cyan-400 to-sky-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]",
  },
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-400/60",
    bg: "bg-[#070D0E]/85",
    textAccent: "text-emerald-300",
    icon: "text-emerald-400",
    ping: "bg-emerald-400",
    dot: "bg-emerald-500",
    badgeBorder: "border-emerald-400/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-300",
    buttonGradient: "from-emerald-400 to-teal-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-400/60",
    bg: "bg-[#0A0713]/85",
    textAccent: "text-purple-300",
    icon: "text-purple-400",
    ping: "bg-purple-400",
    dot: "bg-purple-500",
    badgeBorder: "border-purple-400/30",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-300",
    buttonGradient: "from-purple-500 to-violet-500",
    buttonText: "text-white",
    buttonShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]",
  },
  indigo: {
    border: "border-indigo-500/30 hover:border-indigo-400/60",
    bg: "bg-[#070914]/85",
    textAccent: "text-indigo-300",
    icon: "text-indigo-400",
    ping: "bg-indigo-400",
    dot: "bg-indigo-500",
    badgeBorder: "border-indigo-400/30",
    badgeBg: "bg-indigo-500/10",
    badgeText: "text-indigo-300",
    buttonGradient: "from-indigo-500 to-blue-600",
    buttonText: "text-white",
    buttonShadow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]",
  },
  amber: {
    border: "border-amber-500/30 hover:border-amber-400/60",
    bg: "bg-[#0E0B07]/85",
    textAccent: "text-amber-300",
    icon: "text-amber-400",
    ping: "bg-amber-400",
    dot: "bg-amber-500",
    badgeBorder: "border-amber-400/30",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-300",
    buttonGradient: "from-amber-400 to-yellow-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
  },
  rose: {
    border: "border-rose-500/30 hover:border-rose-400/60",
    bg: "bg-[#0E070B]/85",
    textAccent: "text-rose-300",
    icon: "text-rose-400",
    ping: "bg-rose-400",
    dot: "bg-rose-500",
    badgeBorder: "border-rose-400/30",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-300",
    buttonGradient: "from-rose-500 to-pink-500",
    buttonText: "text-white",
    buttonShadow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.35)]",
  },
  orange: {
    border: "border-orange-500/30 hover:border-orange-400/60",
    bg: "bg-[#0F0A06]/85",
    textAccent: "text-orange-300",
    icon: "text-orange-400",
    ping: "bg-orange-400",
    dot: "bg-orange-500",
    badgeBorder: "border-orange-400/30",
    badgeBg: "bg-orange-500/10",
    badgeText: "text-orange-300",
    buttonGradient: "from-orange-500 to-amber-500",
    buttonText: "text-black",
    buttonShadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]",
  },
};

export default function CyberRepoCard({
  repoUrl,
  accentColor,
  onTriggerPulse,
  branchName = "MAIN",
  verifiedLabel = "VERIFIED",
}: CyberRepoCardProps) {
  const theme = REPO_THEMES[accentColor] || REPO_THEMES.sky;
  const hasRepoUrl = Boolean(repoUrl && repoUrl.trim().length > 0);

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 shadow-lg transition-all duration-300 ${
        hasRepoUrl
          ? `${theme.border} ${theme.bg}`
          : "border-white/10 bg-black/60 hover:border-white/20"
      }`}
    >
      <div>
        {/* Card Status Indicator */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
          <div
            className={`flex items-center gap-2 font-mono text-xs font-bold ${
              hasRepoUrl ? theme.textAccent : "text-slate-400"
            }`}
          >
            {hasRepoUrl ? (
              <FolderGit2 className={`h-4 w-4 ${theme.icon}`} />
            ) : (
              <Lock className="h-4 w-4 text-slate-400" />
            )}
            <span>
              {hasRepoUrl
                ? "PUBLIC GITHUB REPOSITORY"
                : "RESTRICTED PRIVATE REPOSITORY"}
            </span>
          </div>
          <span className="relative flex h-2 w-2">
            {hasRepoUrl && (
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.ping} opacity-75`}
              />
            )}
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                hasRepoUrl ? theme.dot : "bg-slate-500"
              }`}
            />
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
          {hasRepoUrl ? "GitHub Repository" : "Private Commercial Repository"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
          {hasRepoUrl
            ? "Explore the complete project repository on GitHub, including production source code, commit history, architectural assets, and technical documentation."
            : "Source code access is restricted under non-disclosure agreements (NDA) or proprietary commercial rights. No public repository is published."}
        </p>

        {/* Telemetry Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {hasRepoUrl ? (
            <>
              <span
                className={`rounded border ${theme.badgeBorder} ${theme.badgeBg} px-2.5 py-1 font-mono text-[10px] ${theme.badgeText} font-semibold`}
              >
                BRANCH // {branchName}
              </span>
              <span
                className={`rounded border ${theme.badgeBorder} ${theme.badgeBg} px-2.5 py-1 font-mono text-[10px] ${theme.badgeText} font-semibold`}
              >
                STATUS // {verifiedLabel}
              </span>
            </>
          ) : (
            <>
              <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-slate-400 font-semibold">
                CLEARANCE // INTERNAL
              </span>
              <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-slate-400 font-semibold">
                PROPRIETARY // NDA
              </span>
            </>
          )}
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
