"use client";

import React from "react";
import { FileText, LucideIcon, ExternalLink, Lock } from "lucide-react";
import { CyberAccentColor } from "./CyberTechStackSection";

export interface SpecItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface CyberSpecCardProps {
  accentColor: CyberAccentColor;
  icon?: LucideIcon;
  categoryTag?: string;
  statusBadge?: string;
  title: string;
  description: string;
  specs: SpecItem[];
  action?: {
    label: string;
    icon?: LucideIcon;
    href?: string;
    onClick?: () => void;
  };
}

const SPEC_THEMES: Record<
  CyberAccentColor,
  {
    border: string;
    bg: string;
    textAccent: string;
    iconColor: string;
    badgeBorder: string;
    badgeBg: string;
    badgeText: string;
    crosshair: string;
    actionBorder: string;
    actionBg: string;
    actionText: string;
    actionHover: string;
  }
> = {
  sky: {
    border: "border-sky-500/30 hover:border-sky-400/60 hover:shadow-[0_8px_32px_rgba(56,189,248,0.2)]",
    bg: "bg-[#0A0E1A]/95",
    textAccent: "text-sky-300",
    iconColor: "text-sky-400",
    badgeBorder: "border-sky-400/30",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-300",
    crosshair: "border-sky-400/60",
    actionBorder: "border-sky-500/40",
    actionBg: "bg-sky-500/10",
    actionText: "text-sky-300",
    actionHover: "hover:bg-sky-500/20 hover:text-white",
  },
  cyan: {
    border: "border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_8px_32px_rgba(6,182,212,0.2)]",
    bg: "bg-[#070D14]/95",
    textAccent: "text-cyan-300",
    iconColor: "text-cyan-400",
    badgeBorder: "border-cyan-400/30",
    badgeBg: "bg-cyan-500/10",
    badgeText: "text-cyan-300",
    crosshair: "border-cyan-400/60",
    actionBorder: "border-cyan-500/40",
    actionBg: "bg-cyan-500/10",
    actionText: "text-cyan-300",
    actionHover: "hover:bg-cyan-500/20 hover:text-white",
  },
  emerald: {
    border: "border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)]",
    bg: "bg-[#070E0F]/95",
    textAccent: "text-emerald-300",
    iconColor: "text-emerald-400",
    badgeBorder: "border-emerald-400/30",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-300",
    crosshair: "border-emerald-400/60",
    actionBorder: "border-emerald-500/40",
    actionBg: "bg-emerald-500/10",
    actionText: "text-emerald-300",
    actionHover: "hover:bg-emerald-500/20 hover:text-white",
  },
  purple: {
    border: "border-purple-500/30 hover:border-purple-400/60 hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)]",
    bg: "bg-[#10081E]/95",
    textAccent: "text-purple-300",
    iconColor: "text-purple-400",
    badgeBorder: "border-purple-400/30",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-300",
    crosshair: "border-purple-400/60",
    actionBorder: "border-purple-500/40",
    actionBg: "bg-purple-500/10",
    actionText: "text-purple-300",
    actionHover: "hover:bg-purple-500/20 hover:text-white",
  },
  indigo: {
    border: "border-indigo-500/30 hover:border-indigo-400/60 hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]",
    bg: "bg-[#0A0D1A]/95",
    textAccent: "text-indigo-300",
    iconColor: "text-indigo-400",
    badgeBorder: "border-indigo-400/30",
    badgeBg: "bg-indigo-500/10",
    badgeText: "text-indigo-300",
    crosshair: "border-indigo-400/60",
    actionBorder: "border-indigo-500/40",
    actionBg: "bg-indigo-500/10",
    actionText: "text-indigo-300",
    actionHover: "hover:bg-indigo-500/20 hover:text-white",
  },
  amber: {
    border: "border-amber-400/30 hover:border-amber-400/70 hover:shadow-[0_8px_32px_rgba(245,158,11,0.25)]",
    bg: "bg-[#0A0D17]/85",
    textAccent: "text-amber-300",
    iconColor: "text-amber-400",
    badgeBorder: "border-amber-400/40",
    badgeBg: "bg-amber-400/15",
    badgeText: "text-amber-300",
    crosshair: "border-amber-400/70",
    actionBorder: "border-amber-400/40",
    actionBg: "bg-amber-400/15",
    actionText: "text-amber-200",
    actionHover: "hover:bg-amber-400/25 hover:border-amber-300/80 hover:text-white hover:shadow-[0_0_15px_rgba(245,158,11,0.25)]",
  },
  rose: {
    border: "border-rose-500/30 hover:border-rose-400/60 hover:shadow-[0_8px_32px_rgba(244,63,94,0.2)]",
    bg: "bg-[#0D0B1B]/95",
    textAccent: "text-rose-300",
    iconColor: "text-rose-400",
    badgeBorder: "border-rose-400/30",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-300",
    crosshair: "border-rose-400/60",
    actionBorder: "border-rose-500/40",
    actionBg: "bg-rose-500/10",
    actionText: "text-rose-300",
    actionHover: "hover:bg-rose-500/20 hover:text-white",
  },
  orange: {
    border: "border-orange-500/30 hover:border-orange-400/60 hover:shadow-[0_8px_32px_rgba(249,115,22,0.2)]",
    bg: "bg-[#1A0F08]/95",
    textAccent: "text-orange-300",
    iconColor: "text-orange-400",
    badgeBorder: "border-orange-400/30",
    badgeBg: "bg-orange-500/10",
    badgeText: "text-orange-300",
    crosshair: "border-orange-400/60",
    actionBorder: "border-orange-500/40",
    actionBg: "bg-orange-500/10",
    actionText: "text-orange-300",
    actionHover: "hover:bg-orange-500/20 hover:text-white",
  },
};

export default function CyberSpecCard({
  accentColor,
  icon: Icon = FileText,
  categoryTag = "TECHNICAL SPECIFICATION",
  statusBadge = "SPEC_VERIFIED",
  title,
  description,
  specs,
  action,
}: CyberSpecCardProps) {
  const theme = SPEC_THEMES[accentColor] || SPEC_THEMES.sky;
  const ActionIcon = action?.icon || FileText;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-7 shadow-lg transition-all duration-300 ${theme.border} ${theme.bg}`}
    >
      {/* 4 Optical Corner Crosshairs */}
      <div
        className={`pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 ${theme.crosshair}`}
      />
      <div
        className={`pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 ${theme.crosshair}`}
      />

      <div>
        {/* Top Header / Status Line */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
          <div
            className={`flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider ${theme.textAccent}`}
          >
            <Icon className={`h-4 w-4 ${theme.iconColor} shrink-0`} />
            <span className="truncate">{categoryTag}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
          {description}
        </p>

        {/* Dynamic Key-Value Specs Matrix */}
        <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
          {specs.map((sp, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-2 text-slate-400"
            >
              <span className="uppercase text-[11px] shrink-0">{sp.label}:</span>
              <span
                className={`font-semibold text-right truncate max-w-[190px] sm:max-w-[230px] ${
                  sp.highlight ? theme.textAccent : "text-slate-200"
                }`}
                title={sp.value}
              >
                {sp.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action / Status Button */}
      {action && action.href ? (
        <a
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 rounded-xl border ${theme.actionBorder} ${theme.actionBg} px-4 py-3 font-mono text-xs font-semibold ${theme.actionText} ${theme.actionHover} transition-all`}
        >
          <ActionIcon className={`h-4 w-4 ${theme.iconColor}`} />
          <span>{action.label}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : action && action.onClick ? (
        <button
          onClick={action.onClick}
          className={`w-full inline-flex items-center justify-center gap-2 rounded-xl border ${theme.actionBorder} ${theme.actionBg} px-4 py-3 font-mono text-xs font-semibold ${theme.actionText} ${theme.actionHover} transition-all`}
        >
          <ActionIcon className={`h-4 w-4 ${theme.iconColor}`} />
          <span>{action.label}</span>
        </button>
      ) : (
        <div
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-xs font-semibold text-slate-400 cursor-not-allowed"
        >
          <Lock className="h-4 w-4 text-slate-500" />
          <span>{action?.label || "RESTRICTED ACCESS"}</span>
        </div>
      )}
    </div>
  );
}
