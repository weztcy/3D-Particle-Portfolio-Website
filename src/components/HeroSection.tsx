"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowDownRight,
  Award,
  Cpu,
  Database,
  Globe,
  Network,
  Sparkles,
  Terminal,
  Zap,
  FileText,
  Clock,
  Layers,
  ShieldCheck,
  GraduationCap,
  Orbit,
  Sliders,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { PROFILE_DATA, ParticleFormation } from "@/data";
import { TelemetryData } from "@/components/canvas/SynapticParticleCanvas";

interface HeroSectionProps {
  formationMode: ParticleFormation;
  isScrollSync?: boolean;
  onToggleScrollSync?: () => void;
  onSelectFormation: (mode: ParticleFormation) => void;
  onTriggerPulse: () => void;
  onOpenResume: () => void;
  telemetry: TelemetryData;
}

const ROLE_BADGES = [
  {
    label: "Web Developer",
    icon: Globe,
    color: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    formation: "wave" as ParticleFormation,
  },
  {
    label: "Data Analyst",
    icon: Database,
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    formation: "helix" as ParticleFormation,
  },
  {
    label: "AI Engineer",
    icon: Sparkles,
    color: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10",
    formation: "neural" as ParticleFormation,
  },
  {
    label: "Machine Learning Engineer",
    icon: Network,
    color: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    formation: "clusters" as ParticleFormation,
  },
];

const METRIC_HUD_CONFIG = [
  {
    icon: Clock,
    code: "01",
    tag: "ACTIVE",
    border: "border-sky-500/25 group-hover:border-sky-400/60",
    bg: "bg-[#0C0F17]/85 group-hover:bg-[#0F172A]/70",
    glow: "group-hover:shadow-[0_0_35px_rgba(56,189,248,0.20)]",
    ambientColor: "from-sky-500/20 via-sky-400/5 to-transparent",
    iconBox:
      "border-sky-400/30 bg-sky-400/10 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]",
    beacon: "bg-sky-400",
    badge: "border-sky-400/30 bg-sky-400/10 text-sky-300",
    numberGradient: "from-sky-300 via-cyan-100 to-white",
    lineGradient: "from-sky-400/50 via-sky-400/10 to-transparent",
    cornerColor: "text-sky-400/35 group-hover:text-sky-400/80",
    statusText: "[STABLE]",
  },
  {
    icon: Layers,
    code: "02",
    tag: "DEPLOYED",
    border: "border-emerald-500/25 group-hover:border-emerald-400/60",
    bg: "bg-[#0C0F17]/85 group-hover:bg-[#062419]/50",
    glow: "group-hover:shadow-[0_0_35px_rgba(52,211,153,0.20)]",
    ambientColor: "from-emerald-500/20 via-emerald-400/5 to-transparent",
    iconBox:
      "border-emerald-400/30 bg-emerald-400/10 text-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.25)]",
    beacon: "bg-emerald-400",
    badge: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    numberGradient: "from-emerald-300 via-teal-100 to-white",
    lineGradient: "from-emerald-400/50 via-emerald-400/10 to-transparent",
    cornerColor: "text-emerald-400/35 group-hover:text-emerald-400/80",
    statusText: "[PROD-READY]",
  },
  {
    icon: ShieldCheck,
    code: "03",
    tag: "VERIFIED",
    border: "border-indigo-500/25 group-hover:border-indigo-400/60",
    bg: "bg-[#0C0F17]/85 group-hover:bg-[#131336]/50",
    glow: "group-hover:shadow-[0_0_35px_rgba(129,140,248,0.20)]",
    ambientColor: "from-indigo-500/20 via-indigo-400/5 to-transparent",
    iconBox:
      "border-indigo-400/30 bg-indigo-400/10 text-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.25)]",
    beacon: "bg-indigo-400",
    badge: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
    numberGradient: "from-indigo-300 via-purple-100 to-white",
    lineGradient: "from-indigo-400/50 via-indigo-400/10 to-transparent",
    cornerColor: "text-indigo-400/35 group-hover:text-indigo-400/80",
    statusText: "[ACCREDITED]",
  },
  {
    icon: GraduationCap,
    code: "04",
    tag: "HONORS",
    border: "border-amber-500/25 group-hover:border-amber-400/60",
    bg: "bg-[#0C0F17]/85 group-hover:bg-[#241705]/50",
    glow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.20)]",
    ambientColor: "from-amber-500/20 via-amber-400/5 to-transparent",
    iconBox:
      "border-amber-400/30 bg-amber-400/10 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.25)]",
    beacon: "bg-amber-400",
    badge: "border-amber-400/30 bg-amber-400/10 text-amber-300",
    numberGradient: "from-amber-300 via-yellow-100 to-white",
    lineGradient: "from-amber-400/50 via-amber-400/10 to-transparent",
    cornerColor: "text-amber-400/35 group-hover:text-amber-400/80",
    statusText: "[CUM LAUDE]",
  },
];

export default function HeroSection({
  formationMode,
  isScrollSync = true,
  onToggleScrollSync,
  onSelectFormation,
  onTriggerPulse,
  onOpenResume,
  telemetry,
}: HeroSectionProps) {
  const [activeRoleIdx, setActiveRoleIdx] = useState(0);
  const [mobileControllerOpen, setMobileControllerOpen] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIdx((prev) => (prev + 1) % PROFILE_DATA.roles.length);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 sm:pb-16 px-3.5 sm:px-6 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1380px] my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Primary Identity & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-5 sm:space-y-6">
            {/* Live Telemetry Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 sm:gap-2.5 rounded-full border border-white/10 bg-[#0C0F17]/75 backdrop-blur-md px-3 sm:px-4 py-1.5 shadow-[0_0_25px_rgba(56,189,248,0.1)] max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-slate-300 truncate">
                {PROFILE_DATA.availability}
              </span>
              <span className="text-slate-600 hidden sm:inline">//</span>
              <span className="font-mono text-[11px] text-sky-400 hidden sm:inline">
                {PROFILE_DATA.location}
              </span>
            </div>

            {/* Name & Kinetic Role Header with Enlarged Cybernetic Avatar HUD */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
              {/* Enlarged Futuristic Cybernetic Avatar HUD (Circle) */}
              <button
                type="button"
                onClick={onTriggerPulse}
                className="relative group shrink-0 focus:outline-none text-left self-center sm:self-auto"
                title="Click to pulse synaptic network"
              >
                {/* Outer Orbital Tech Ring */}
                <div className="absolute -inset-2 rounded-full border border-dashed border-sky-400/35 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-700 pointer-events-none" />

                {/* Ambient Glow */}
                <div className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-sky-500/30 via-indigo-500/20 to-emerald-500/30 blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />

                {/* Circular Cyber Frame Container */}
                <div className="relative h-28 w-28 sm:h-36 sm:w-36 lg:h-36 lg:w-36 xl:h-44 xl:w-44 rounded-full p-[3px] bg-gradient-to-br from-sky-400 via-indigo-500 to-emerald-400 shadow-[0_0_30px_rgba(56,189,248,0.25)] group-hover:shadow-[0_0_42px_rgba(56,189,248,0.5)] transition-all duration-300">
                  {/* Photo Container with Pure Abstract Geometry */}
                  <div className="relative h-full w-full rounded-full overflow-hidden bg-gradient-to-br from-[#0B0F19] via-[#0D1322] to-[#070A10]">
                    {/* Layer 1: Elegant Soft Ambient Light Aura */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,_rgba(56,189,248,0.22)_0%,_rgba(99,102,241,0.12)_45%,_transparent_75%)]" />

                    {/* Layer 2: Abstract Geometric Art Composition */}
                    <svg
                      className="absolute inset-0 h-full w-full pointer-events-none transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:rotate-3"
                      viewBox="0 0 200 200"
                    >
                      <defs>
                        <linearGradient id="geomGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
                          <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="geomGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.15" />
                        </linearGradient>
                      </defs>

                      {/* Primary Intersecting Geometric Circle (Upper-Right Focal) */}
                      <circle
                        cx="124"
                        cy="76"
                        r="68"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="0.85"
                        opacity="0.32"
                      />

                      {/* Concentric Inner Geometric Arc */}
                      <circle
                        cx="124"
                        cy="76"
                        r="46"
                        fill="none"
                        stroke="#818cf8"
                        strokeWidth="0.75"
                        strokeDasharray="3 4"
                        opacity="0.25"
                      />

                      {/* Secondary Counter-Balance Circle (Lower-Left Focal) */}
                      <circle
                        cx="72"
                        cy="132"
                        r="52"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="0.8"
                        opacity="0.28"
                      />

                      {/* Inscribed Geometric Hexagon */}
                      <polygon
                        points="100,28 150,57 150,115 100,144 50,115 50,57"
                        fill="none"
                        stroke="url(#geomGrad2)"
                        strokeWidth="0.75"
                        opacity="0.25"
                      />

                      {/* Minimal Precision Diagonal Geometric Chord */}
                      <line
                        x1="25"
                        y1="175"
                        x2="175"
                        y2="25"
                        stroke="url(#geomGrad1)"
                        strokeWidth="0.85"
                        opacity="0.35"
                      />

                      {/* Subtle Secondary Parallel Accent Chord */}
                      <line
                        x1="52"
                        y1="182"
                        x2="182"
                        y2="52"
                        stroke="#38bdf8"
                        strokeWidth="0.5"
                        strokeDasharray="2 4"
                        opacity="0.2"
                      />

                      {/* Clean Geometric Accent Dots */}
                      <circle cx="124" cy="76" r="2.2" fill="#38bdf8" opacity="0.65" />
                      <circle cx="72" cy="132" r="1.8" fill="#34d399" opacity="0.6" />
                      <circle cx="150" cy="57" r="1.8" fill="#818cf8" opacity="0.6" />
                    </svg>

                    {/* Layer 3: Transparent Profile Photo */}
                    <img
                      fetchPriority="high"
                      decoding="async"
                      width={256}
                      height={256}
                      src={PROFILE_DATA.photoUrl || "/images/profile/profile-photo.png"}
                      alt={PROFILE_DATA.name}
                      className="relative z-10 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_8px_24px_rgba(0,0,0,0.85)]"
                    />

                    {/* Layer 4: Soft Bottom Vignette for seamless rim blend */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 z-20 bg-gradient-to-t from-[#080B12]/75 to-transparent" />
                  </div>

                  {/* Online Telemetry Beacon Badge - Crisp floating HUD pill */}
                  <div className="absolute -bottom-2 right-1 sm:-bottom-2.5 sm:right-2 z-30 flex items-center gap-1.5 rounded-full border border-emerald-400/70 bg-[#06080F] px-3 py-1 shadow-[0_0_20px_rgba(52,211,153,0.5),0_6px_16px_rgba(0,0,0,0.95)] backdrop-blur-md">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-emerald-300 tracking-wider select-none whitespace-nowrap">
                      ONLINE
                    </span>
                  </div>
                </div>
              </button>

              {/* Text: Identity, Name & Kinetic Role Pills (grouped alongside avatar) */}
              <div className="space-y-3 sm:space-y-3.5 flex-1 min-w-0 w-full">
                <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 font-mono text-xs sm:text-sm text-sky-400 tracking-wider uppercase">
                  <Terminal className="h-4 w-4 shrink-0" />
                  <span>IDENTITY // DIMAS</span>
                </div>

                <h1 className="text-center sm:text-left font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.65rem] xl:text-[3.25rem] 2xl:text-[3.65rem] font-bold tracking-[-0.035em] leading-[1.08] text-white">
                  Yohanes Dimas{" "}
                  <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                    Pratama.
                  </span>
                </h1>

                {/* Interactive Role Discipline Pills: 2x2 grid on mobile, inline flex-wrap on sm+ */}
                <div className="pt-0.5 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2">
                  {ROLE_BADGES.map((badge, idx) => {
                    const Icon = badge.icon;
                    const isHighlighted = idx === activeRoleIdx;
                    const shortLabel =
                      badge.label === "Machine Learning Engineer"
                        ? "ML Engineer"
                        : badge.label;
                    return (
                      <button
                        key={badge.label}
                        onClick={() => {
                          setActiveRoleIdx(idx);
                          onSelectFormation(badge.formation);
                          onTriggerPulse();
                        }}
                        className={`group inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 rounded-xl border px-2.5 sm:px-3.5 py-2 sm:py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                          isHighlighted
                            ? `${badge.color} shadow-[0_0_20px_rgba(56,189,248,0.18)] sm:scale-[1.02]`
                            : "border-white/10 bg-[#0C0F17]/60 text-slate-400 hover:border-white/25 hover:text-slate-200"
                        }`}
                        title={`Click to morph 3D manifold to ${badge.formation.toUpperCase()}`}
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">
                          <span className="sm:hidden">{shortLabel}</span>
                          <span className="hidden sm:inline">{badge.label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Architectural Headline & Bio - Futuristic Dossier Card */}
            <div className="relative group max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0C0F17]/90 via-[#080B14]/85 to-[#04060A]/90 backdrop-blur-xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:border-sky-500/40 transition-all duration-500">
              {/* Sci-Fi Ambient Glow */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 opacity-40 group-hover:opacity-100 transition duration-700 blur-sm" />

              {/* Holographic Light Sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

              {/* Decorative Corner Tech Ticks */}
              <span className="pointer-events-none absolute top-2 left-2.5 font-mono text-[9px] text-sky-400/40 select-none group-hover:text-sky-400/80 transition-colors">
                ┌
              </span>
              <span className="pointer-events-none absolute top-2 right-2.5 font-mono text-[9px] text-sky-400/40 select-none group-hover:text-sky-400/80 transition-colors">
                ┐
              </span>
              <span className="pointer-events-none absolute bottom-2 left-2.5 font-mono text-[9px] text-sky-400/40 select-none group-hover:text-sky-400/80 transition-colors">
                └
              </span>
              <span className="pointer-events-none absolute bottom-2 right-2.5 font-mono text-[9px] text-sky-400/40 select-none group-hover:text-sky-400/80 transition-colors">
                ┘
              </span>

              <div className="relative z-10 space-y-3.5">
                {/* Dossier Telemetry Header */}
                <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-2.5">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-400 min-w-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse shrink-0" />
                    <span className="text-sky-400 font-semibold truncate">
                      BIO // ARCHITECTURAL DOSSIER
                    </span>
                    <span className="text-slate-600 hidden sm:inline">·</span>
                    <span className="text-slate-500 font-mono hidden sm:inline">YDP-SYS.2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] shrink-0">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping" />
                    <span className="rounded px-1.5 py-0.5 border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 font-semibold tracking-wider uppercase">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <p className="font-display text-sm sm:text-lg font-semibold text-white leading-snug tracking-tight">
                    {PROFILE_DATA.heroHeadline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                    {PROFILE_DATA.heroSubheadline}
                  </p>
                </div>

                {/* Bottom Channel Footer with 4 Icon-Only Buttons */}
                <div className="pt-2.5 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-slate-400 min-w-0">
                    <span className="text-slate-500 font-medium truncate">
                      <span className="hidden xs:inline sm:inline">DIRECT </span>TRANSMISSION //
                    </span>
                  </div>

                  {/* 4 Futuristic Icon Buttons */}
                  <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                    {/* LinkedIn */}
                    <a
                      href={PROFILE_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn Profile"
                      className="group/btn relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 hover:border-sky-400 hover:bg-sky-400/20 hover:text-white hover:shadow-[0_0_18px_rgba(56,189,248,0.45)] transition-all duration-300 active:scale-95"
                    >
                      <FaLinkedinIn className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover/btn:scale-110" />
                    </a>

                    {/* GitHub */}
                    <a
                      href={PROFILE_DATA.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repositories"
                      className="group/btn relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-slate-200 hover:border-white/60 hover:bg-white/15 hover:text-white hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] transition-all duration-300 active:scale-95"
                    >
                      <FaGithub className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover/btn:scale-110" />
                    </a>

                    {/* Gmail */}
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      title="Send Email (Gmail)"
                      className="group/btn relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:border-rose-400 hover:bg-rose-400/20 hover:text-white hover:shadow-[0_0_18px_rgba(244,63,94,0.45)] transition-all duration-300 active:scale-95"
                    >
                      <SiGmail className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover/btn:scale-110" />
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={PROFILE_DATA.whatsapp || "https://wa.me/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp Direct Message"
                      className="group/btn relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-400/20 hover:text-white hover:shadow-[0_0_18px_rgba(52,211,153,0.45)] transition-all duration-300 active:scale-95"
                    >
                      <FaWhatsapp className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover/btn:scale-110" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary CTA Cluster: Full-width primary + 2-col secondary on mobile, inline on sm+ */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_42px_rgba(56,189,248,0.6)] transition-all active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-3.5">
                <button
                  onClick={() => scrollTo("certifications")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-sky-400/35 bg-[#0C0F17]/80 backdrop-blur-md px-3.5 sm:px-5 py-3.5 text-xs sm:text-sm font-medium text-sky-300 hover:border-sky-400 hover:bg-sky-400/10 hover:text-white transition-all"
                >
                  <Award className="h-4 w-4 text-sky-400 shrink-0" />
                  <span>Certifications</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#0C0F17]/60 backdrop-blur-md px-3.5 sm:px-5 py-3.5 text-xs sm:text-sm font-medium text-slate-300 hover:border-white/25 hover:bg-white/5 hover:text-white transition-all"
                >
                  <FileText className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>Executive CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Manifold Control Deck (5 cols / 4 cols on xl) */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col lg:items-end">
            <div className="relative group w-full lg:max-w-md overflow-hidden rounded-2xl border border-sky-500/25 bg-gradient-to-br from-[#0C101A]/95 via-[#070A12]/92 to-[#04060C]/96 backdrop-blur-2xl p-4 sm:p-5.5 shadow-[0_24px_64px_rgba(0,0,0,0.8),0_0_35px_rgba(56,189,248,0.08)] hover:border-sky-400/45 transition-all duration-500">
              {/* Sci-Fi Ambient Glow & Shimmer */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/15 via-indigo-500/10 to-emerald-500/15 opacity-40 group-hover:opacity-100 transition duration-700 blur-sm" />

              {/* Holographic Light Sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

              {/* Decorative Corner Tech Ticks */}
              <span className="pointer-events-none absolute top-2 left-2.5 font-mono text-[9px] text-sky-400/40 select-none group-hover:text-sky-400/90 transition-colors">
                ┌
              </span>
              <span className="pointer-events-none absolute top-2 right-2.5 font-mono text-[9px] text-sky-400/40 select-none group-hover:text-sky-400/90 transition-colors">
                ┐
              </span>
              <span className="pointer-events-none absolute bottom-2 left-2.5 font-mono text-[9px] text-sky-400/40 select-none group-hover:text-sky-400/90 transition-colors">
                └
              </span>
              <span className="pointer-events-none absolute bottom-2 right-2.5 font-mono text-[9px] text-sky-400/40 select-none group-hover:text-sky-400/90 transition-colors">
                ┘
              </span>

              {/* Background HUD Micro-Reticle Watermark */}
              <div className="pointer-events-none absolute top-3 right-8 opacity-10 text-sky-400 font-mono text-[9px] select-none hidden sm:block">
                +-- RETICLE.3D.SYS // 1380PX --+
              </div>

              <div className="relative z-10 space-y-3.5 sm:space-y-4">
                {/* Header: Telemetry Status Banner + Title + Pulse Trigger */}
                <div className="border-b border-white/[0.08] pb-3 sm:pb-3.5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-400 min-w-0">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                      </span>
                      <span className="text-sky-400 font-semibold truncate">
                        INTERACTIVE POINT-CLOUD
                      </span>
                      <span className="text-slate-600 hidden sm:inline">·</span>
                      <span className="text-slate-500 font-mono hidden sm:inline">CTRL-SYS.3D</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[9px] shrink-0">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="rounded px-1.5 py-0.5 border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 font-semibold tracking-wider uppercase">
                        {telemetry.fps} FPS
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2 sm:gap-3 pt-0.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                        <Orbit className="h-4 w-4 animate-[spin_12s_linear_infinite]" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-display text-xs sm:text-base font-bold text-white tracking-tight truncate">
                          Synaptic 3D Manifold Controller
                        </h2>
                        <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 truncate">
                          TENSOR ACCELERATED TOPOLOGY
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={onTriggerPulse}
                        title="Trigger 3D Synaptic Shockwave"
                        className="group/pulse relative inline-flex items-center gap-1.5 rounded-xl border border-sky-400/50 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-emerald-500/20 px-2.5 sm:px-3 py-1.5 font-mono text-[10px] sm:text-[11px] font-semibold text-sky-300 hover:text-white hover:border-sky-400 hover:bg-sky-400/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.45)] transition-all duration-300 active:scale-95"
                      >
                        <Zap className="h-3.5 w-3.5 text-sky-400 group-hover/pulse:scale-110 transition-transform" />
                        <span>Pulse</span>
                      </button>

                      {/* Mobile Progressive Disclosure Toggle (<md) */}
                      <button
                        type="button"
                        onClick={() => setMobileControllerOpen((prev) => !prev)}
                        className="md:hidden inline-flex items-center gap-1 rounded-xl border border-white/15 bg-white/5 px-2.5 py-1.5 font-mono text-[10px] font-semibold text-slate-300 hover:text-white active:scale-95 transition-all"
                      >
                        <span>{mobileControllerOpen ? "HIDE" : "CONTROLS"}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Compact Quick-Switch Bar when collapsed (<md) */}
                {!mobileControllerOpen && (
                  <div className="md:hidden flex items-center justify-between gap-1.5 pt-0.5">
                    {[
                      { id: "wave" as ParticleFormation, code: "M-01", label: "Wave", color: "text-sky-400 border-sky-400/50 bg-sky-500/15" },
                      { id: "helix" as ParticleFormation, code: "M-02", label: "Helix", color: "text-emerald-400 border-emerald-400/50 bg-emerald-500/15" },
                      { id: "neural" as ParticleFormation, code: "M-03", label: "Torus", color: "text-indigo-400 border-indigo-400/50 bg-indigo-500/15" },
                      { id: "clusters" as ParticleFormation, code: "M-04", label: "UMAP", color: "text-amber-400 border-amber-400/50 bg-amber-500/15" },
                    ].map((quick) => {
                      const isActive = telemetry.activeFormation === quick.id;
                      return (
                        <button
                          key={quick.id}
                          onClick={() => {
                            onSelectFormation(quick.id);
                            onTriggerPulse();
                          }}
                          className={`flex-1 rounded-xl border py-2 px-1.5 font-mono text-[10px] font-bold transition-all active:scale-95 text-center ${
                            isActive
                              ? `${quick.color} shadow-[0_0_12px_rgba(56,189,248,0.2)]`
                              : "border-white/10 bg-black/40 text-slate-400"
                          }`}
                        >
                          <div className="text-[8px] opacity-75">{quick.code}</div>
                          <div className="text-white truncate">{quick.label}</div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Full Sensor Strip, 2x2 Modules & Autonomous Sync (Always visible on md+, expandable on <md) */}
                <div className={`${mobileControllerOpen ? "space-y-3.5" : "hidden md:block md:space-y-4"}`}>
                  {/* Live Sensor Strip HUD */}
                  <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/[0.06] bg-black/45 p-2.5 font-mono text-[10px]">
                    <div className="space-y-0.5">
                      <div className="text-[9px] uppercase tracking-wider text-slate-500">PARTICLES</div>
                      <div className="text-sky-300 font-semibold tabular-nums flex items-center gap-1">
                        <Cpu className="h-3 w-3 text-sky-400 shrink-0" />
                        {telemetry.particleCount.toLocaleString()}
                      </div>
                    </div>
                    <div className="space-y-0.5 border-x border-white/[0.06] px-2">
                      <div className="text-[9px] uppercase tracking-wider text-slate-500">SHADERS</div>
                      <div className="text-indigo-300 font-semibold tabular-nums">GLSL 3.0</div>
                    </div>
                    <div className="space-y-0.5 pl-1">
                      <div className="text-[9px] uppercase tracking-wider text-slate-500">MANIFOLD</div>
                      <div className="text-emerald-300 font-semibold uppercase truncate">
                        {telemetry.activeFormation}
                      </div>
                    </div>
                  </div>

                  {/* Briefing Prompt & Coordinates */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-mono text-[10px] text-slate-400">
                      SELECT TOPOLOGY // TOPOLOGICAL MORPH:
                    </span>
                    <span className="font-mono text-[10px] text-sky-400/80 tabular-nums hidden sm:inline">
                      XYZ [{telemetry.cursorX}, {telemetry.cursorY}]
                    </span>
                  </div>

                  {/* 4 Interactive Topology Command Modules */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
                    {[
                      {
                        id: "wave" as ParticleFormation,
                        code: "M-01",
                        name: "Harmonic Wave",
                        tag: "Web3D & Shaders",
                        color: "text-sky-400",
                        glowBorder: "border-sky-400/70 bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent shadow-[0_0_24px_rgba(56,189,248,0.25)]",
                        badgeColor: "border-sky-400/40 bg-sky-400/15 text-sky-300",
                        dotColor: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
                      },
                      {
                        id: "helix" as ParticleFormation,
                        code: "M-02",
                        name: "Pipeline Helix",
                        tag: "Data Streams",
                        color: "text-emerald-400",
                        glowBorder: "border-emerald-400/70 bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent shadow-[0_0_24px_rgba(52,211,153,0.25)]",
                        badgeColor: "border-emerald-400/40 bg-emerald-400/15 text-emerald-300",
                        dotColor: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
                      },
                      {
                        id: "neural" as ParticleFormation,
                        code: "M-03",
                        name: "Neural Torus",
                        tag: "LLM & Attention",
                        color: "text-indigo-400",
                        glowBorder: "border-indigo-400/70 bg-gradient-to-br from-indigo-500/20 via-indigo-500/5 to-transparent shadow-[0_0_24px_rgba(129,140,248,0.25)]",
                        badgeColor: "border-indigo-400/40 bg-indigo-400/15 text-indigo-300",
                        dotColor: "bg-indigo-400 shadow-[0_0_8px_#818cf8]",
                      },
                      {
                        id: "clusters" as ParticleFormation,
                        code: "M-04",
                        name: "Latent UMAP",
                        tag: "ML Embeddings",
                        color: "text-amber-400",
                        glowBorder: "border-amber-400/70 bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent shadow-[0_0_24px_rgba(245,158,11,0.25)]",
                        badgeColor: "border-amber-400/40 bg-amber-400/15 text-amber-300",
                        dotColor: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
                      },
                    ].map((item) => {
                      const isActive = telemetry.activeFormation === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            onSelectFormation(item.id);
                            onTriggerPulse();
                          }}
                          className={`group/mod relative flex flex-col items-start rounded-xl border p-2.5 text-left transition-all duration-300 active:scale-95 ${
                            isActive
                              ? `${item.glowBorder} text-white`
                              : "border-white/[0.08] bg-black/35 text-slate-400 hover:border-white/20 hover:bg-white/[0.04] hover:text-slate-200"
                          }`}
                        >
                          {/* Module Header: Code & Live Status Badge */}
                          <div className="flex w-full items-center justify-between mb-1">
                            <span className={`font-mono text-[10px] font-bold tracking-wider ${item.color}`}>
                              {item.code}
                            </span>
                            {isActive ? (
                              <span className="flex items-center gap-1 font-mono text-[8px] uppercase tracking-wider text-emerald-300">
                                <span className={`h-1.5 w-1.5 rounded-full ${item.dotColor} animate-pulse`} />
                                ACTIVE
                              </span>
                            ) : (
                              <span className="font-mono text-[8px] uppercase tracking-wider text-slate-500 group-hover/mod:text-slate-400">
                                STANDBY
                              </span>
                            )}
                          </div>

                          {/* Module Name */}
                          <span className="font-display text-xs sm:text-[13px] font-semibold text-white tracking-tight truncate w-full">
                            {item.name}
                          </span>

                          {/* Module Discipline Tag */}
                          <span className="font-mono text-[10px] text-slate-400 mt-0.5 flex items-center gap-1 truncate w-full">
                            <span className="text-slate-600">›</span>
                            <span className="truncate">{item.tag}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Footer: Autonomous Scroll Sync Control Deck */}
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.07] bg-black/50 px-3 py-2.5 font-mono text-[11px]">
                    <div className="flex items-center gap-2 min-w-0">
                      <Sliders className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                      <div className="min-w-0">
                        <div className="text-[9px] uppercase tracking-wider text-slate-500 truncate">
                          AUTONOMOUS FLUID DYNAMICS
                        </div>
                        <div className="text-[10px] text-slate-300 font-semibold truncate">
                          {isScrollSync ? "SCROLL SYNC LINKED" : "MANUAL TOPOLOGY LOCK"}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={
                        onToggleScrollSync
                          ? onToggleScrollSync
                          : () => onSelectFormation(isScrollSync ? "wave" : "auto")
                      }
                      className={`shrink-0 rounded-lg px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                        isScrollSync
                          ? "bg-sky-400/20 text-sky-300 border border-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                          : "border border-amber-400/40 text-amber-300 bg-amber-400/10 hover:border-amber-400/60"
                      }`}
                    >
                      {isScrollSync ? "● SYNC ENGAGED" : "ENABLE SYNC"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quantified Impact Ribbon with Futuristic Cyber Data Bridge */}
        <div className="mt-8 sm:mt-10">
          {/* Tactical Cyber Laser Rail & Data Bridge */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 select-none">
            {/* Left Terminal Anchor & System Node */}
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="font-mono text-[10px] text-sky-400/80 font-bold tracking-tight">
                [SYS.01]
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
            </div>

            {/* Expanding Photonic Laser Rail */}
            <div className="relative flex-1 h-[2px] bg-gradient-to-r from-sky-400/90 via-sky-400/35 to-indigo-500/60 shadow-[0_0_12px_rgba(56,189,248,0.45)] mx-1">
              {/* Core Hotspot Filament */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-[0.5px]" />
              {/* Mid-rail Micro Optical Node */}
              <span className="absolute left-1/2 -translate-x-1/2 -top-[2px] h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_6px_#38bdf8]" />
            </div>

            {/* Right-Aligned Tactical Rounded Cyber Console */}
            <div className="relative group shrink-0 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-sky-400/40 bg-[#0B0F19]/90 backdrop-blur-xl shadow-[0_0_24px_rgba(56,189,248,0.25),inset_0_1px_0_rgba(255,255,255,0.12)] flex items-center gap-1.5 sm:gap-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </span>
              <span className="font-mono text-[9px] sm:text-[11px] font-extrabold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-white">
                QUANTIFIED IMPACT
              </span>
              <span className="text-slate-600 font-mono text-[10px] hidden sm:inline">//</span>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-sky-300 font-semibold hidden sm:inline">
                REAL-TIME METRIC HUD
              </span>
              <span className="hidden md:inline-flex items-center gap-1 font-mono text-[9px] text-emerald-400/90 border-l border-white/10 pl-2">
                ● LIVE
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {PROFILE_DATA.globalMetrics.map((metric, idx) => {
              const config = METRIC_HUD_CONFIG[idx % METRIC_HUD_CONFIG.length];
              const Icon = config.icon;
              return (
                <div
                  key={idx}
                  className={`relative group overflow-hidden rounded-2xl border ${config.border} ${config.bg} backdrop-blur-xl p-3.5 sm:p-5 transition-all duration-300 ${config.glow}`}
                >
                  {/* Sci-Fi Ambient Glow */}
                  <div
                    className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${config.ambientColor} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Hologram Light Sweep on Hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-1000 ease-in-out" />

                  {/* Decorative Corner Bracket Accents */}
                  <span
                    className={`pointer-events-none absolute top-1.5 left-2 font-mono text-[9px] select-none ${config.cornerColor} transition-colors`}
                  >
                    ┌
                  </span>
                  <span
                    className={`pointer-events-none absolute top-1.5 right-2 font-mono text-[9px] select-none ${config.cornerColor} transition-colors`}
                  >
                    ┐
                  </span>
                  <span
                    className={`pointer-events-none absolute bottom-1.5 left-2 font-mono text-[9px] select-none ${config.cornerColor} transition-colors`}
                  >
                    └
                  </span>
                  <span
                    className={`pointer-events-none absolute bottom-1.5 right-2 font-mono text-[9px] select-none ${config.cornerColor} transition-colors`}
                  >
                    ┘
                  </span>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    {/* Card Header: Icon Box + Tech System Code & Live Status Badge */}
                    <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <div
                          className={`relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg border ${config.iconBox}`}
                        >
                          <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                            <span
                              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.beacon} opacity-75`}
                            />
                            <span
                              className={`relative inline-flex rounded-full h-1.5 w-1.5 ${config.beacon}`}
                            />
                          </span>
                        </div>
                        <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-400 group-hover:text-slate-300 hidden sm:inline">
                          HUD // {config.code}
                        </span>
                      </div>

                      <span
                        className={`rounded-md border px-1.5 py-0.5 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold shrink-0 ${config.badge}`}
                      >
                        {config.tag}
                      </span>
                    </div>

                    {/* Center: Large Numeric Value */}
                    <div className="mt-3 sm:mt-4 flex items-baseline">
                      <div
                        className={`font-mono text-2xl sm:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-tight tabular-nums bg-gradient-to-r ${config.numberGradient} bg-clip-text text-transparent group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.22)] transition-all`}
                      >
                        {metric.value}
                      </div>
                    </div>

                    {/* Sci-Fi Decorative Laser Divider */}
                    <div
                      className={`mt-2 sm:mt-2.5 h-[1px] w-full bg-gradient-to-r ${config.lineGradient}`}
                    />

                    {/* Bottom: Label & Telemetry Ticker */}
                    <div className="mt-2 sm:mt-2.5 flex items-center justify-between gap-1">
                      <div className="font-mono text-[11px] sm:text-sm font-semibold tracking-wide text-slate-200 group-hover:text-white transition-colors leading-tight">
                        {metric.label}
                      </div>
                      <span className="hidden sm:inline font-mono text-[10px] text-slate-500 group-hover:text-slate-400 select-none shrink-0">
                        {config.statusText}
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

