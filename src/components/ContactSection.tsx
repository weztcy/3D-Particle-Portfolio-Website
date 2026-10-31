"use client";

import React, { useState, useEffect } from "react";
import {
  BrainCircuit,
  Cpu,
  Check,
  Code2,
  Copy,
  Database,
  Mail,
  Network,
  Sparkles,
  Terminal,
  Clock,
  Globe,
  AlertTriangle,
  Loader2,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { PROFILE_DATA, DOMAIN_PILLARS } from "@/data";

interface ContactSectionProps {
  onTriggerPulse: () => void;
  onOpenResume: () => void;
}

const getPillarIcon = (id: string) => {
  switch (id) {
    case "web-development":
      return Code2;
    case "data-analytics":
      return Database;
    case "ai-engineering":
      return BrainCircuit;
    case "machine-learning":
      return Cpu;
    default:
      return Code2;
  }
};

const getPillarActiveStyles = (id: string) => {
  switch (id) {
    case "web-development":
      return {
        active:
          "border-sky-400 bg-sky-400/15 text-sky-300 shadow-[0_0_16px_rgba(56,189,248,0.25)]",
        iconColor: "text-sky-300",
      };
    case "data-analytics":
      return {
        active:
          "border-emerald-400 bg-emerald-400/15 text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.25)]",
        iconColor: "text-emerald-300",
      };
    case "ai-engineering":
    case "artificial-intelligence":
      return {
        active:
          "border-purple-400 bg-purple-400/15 text-purple-300 shadow-[0_0_16px_rgba(192,132,252,0.25)]",
        iconColor: "text-purple-300",
      };
    case "machine-learning":
      return {
        active:
          "border-indigo-400 bg-indigo-400/15 text-indigo-300 shadow-[0_0_16px_rgba(129,140,248,0.25)]",
        iconColor: "text-indigo-300",
      };
    default:
      return {
        active:
          "border-sky-400 bg-sky-400/15 text-sky-300 shadow-[0_0_16px_rgba(56,189,248,0.25)]",
        iconColor: "text-sky-300",
      };
  }
};

function ContactSection({
  onTriggerPulse,
  onOpenResume,
}: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedScope, setSelectedScope] = useState(DOMAIN_PILLARS[0].title);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [jakartaTime, setJakartaTime] = useState("17:15:00");
  const [honeyTrap, setHoneyTrap] = useState("");
  const [formMountedAt, setFormMountedAt] = useState<number>(0);

  useEffect(() => {
    setFormMountedAt(Date.now());
    const updateClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setJakartaTime(formatter.format(now));
      } catch {
        // Fallback if timezone formatting is unavailable
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    onTriggerPulse();
    setTimeout(() => setCopiedEmail(false), 2600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Client-side Cybersecurity & Input Sanity Checks
    if (senderName.trim().length < 2) {
      setSubmitError("Name must contain at least 2 characters.");
      return;
    }
    if (senderName.trim().length > 100) {
      setSubmitError("Name exceeds maximum boundary of 100 characters.");
      return;
    }
    if (message.trim().length < 10) {
      setSubmitError("Project brief must contain at least 10 characters.");
      return;
    }
    if (message.length > 4000) {
      setSubmitError("Project brief exceeds maximum limit of 4000 characters.");
      return;
    }

    setIsSubmitting(true);
    onTriggerPulse();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: senderName.trim(),
          email: senderEmail.trim(),
          scope: selectedScope,
          message: message.trim(),
          honeypot: honeyTrap,
          formMountedAt: formMountedAt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to dispatch transmission.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("[Transmission Error]:", err);
      setSubmitError(
        err?.message ||
          "Network or server anomaly detected while dispatching transmission."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 px-3.5 sm:px-6 lg:px-10 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1380px] space-y-6 sm:space-y-10">
        <div className="rounded-3xl border border-white/10 bg-[#0C0F17]/85 backdrop-blur-xl p-4 sm:p-10 lg:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
            {/* Left Column: Direct Channel & Telemetry (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="space-y-3.5 sm:space-y-4">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400">
                  <span>[ 05 // INITIATE TRANSMISSION ]</span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.08]">
                  Ready to Architect the{" "}
                  <span className="block sm:inline bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                    Next Breakthrough?
                  </span>
                </h2>
                <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
                  Available for enterprise-grade AI/LLM systems collaboration,
                  machine learning & data architecture consulting, and high-performance
                  3D web platform engineering.
                </p>
              </div>

              {/* Futuristic Telemetry & Dispatch Pods */}
              <div className="space-y-3">
                {/* 1. DIRECT ENCRYPTED DISPATCH */}
                <div className="group relative overflow-hidden rounded-2xl border border-sky-500/25 bg-[#080B14]/85 backdrop-blur-2xl p-4 sm:p-5 shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-sky-400/60 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                  {/* Optical Corner HUD Crosshairs */}
                  <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-sky-400/70 group-hover:border-sky-400 transition-colors" />
                  <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-sky-400/70 group-hover:border-sky-400 transition-colors" />
                  <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-sky-400/70 group-hover:border-sky-400 transition-colors" />
                  <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-sky-400/70 group-hover:border-sky-400 transition-colors" />

                  {/* Ambient Glow Field & Holographic Sweep */}
                  <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-sky-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-2 font-mono">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-sky-400 font-bold">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                        </span>
                        <Mail className="h-3.5 w-3.5 text-sky-400" />
                        <span>DIRECT ENCRYPTED DISPATCH</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">[RSA-4096]</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-2">
                      <span className="font-mono text-xs sm:text-sm text-sky-300 font-semibold tracking-wide truncate">
                        {PROFILE_DATA.email}
                      </span>
                      <button
                        onClick={handleCopyEmail}
                        className="shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-sky-400/40 bg-sky-400/10 px-3.5 py-1.5 font-mono text-xs font-bold text-sky-300 hover:bg-sky-400/25 hover:border-sky-400/70 hover:text-white hover:shadow-[0_0_16px_rgba(56,189,248,0.35)] transition-all active:scale-95"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-300">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Location & Timezone Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 font-mono text-xs">
                  {/* 2. BASE STATION */}
                  <div className="group relative overflow-hidden rounded-2xl border border-sky-500/25 bg-[#080B14]/85 backdrop-blur-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-sky-400/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] flex flex-col justify-between">
                    {/* Optical Corner HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-sky-400/70 group-hover:border-sky-400 transition-colors" />
                    <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-sky-400/70 group-hover:border-sky-400 transition-colors" />
                    <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-sky-400/70 group-hover:border-sky-400 transition-colors" />
                    <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-sky-400/70 group-hover:border-sky-400 transition-colors" />

                    {/* Ambient Glow & Holographic Sweep */}
                    <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-sky-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                    <div className="relative z-10 space-y-2.5">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-1 font-mono text-[10px] uppercase tracking-wider">
                        <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                          <Globe className="h-3.5 w-3.5 shrink-0" />
                          <span>BASE STATION</span>
                        </div>
                        <span className="text-[9px] font-mono text-sky-400/90 bg-sky-950/60 border border-sky-500/30 px-1.5 py-0.5 rounded">
                          ID-62 // APAC
                        </span>
                      </div>

                      {/* Primary Data: City & Country */}
                      <div>
                        <div className="text-white font-display text-sm sm:text-base font-bold tracking-tight leading-tight">
                          Jakarta, Indonesia
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <span className="text-sky-400">●</span>
                          <span>GEO-NODE: S6°12&apos;31&quot; E106°50&apos;44&quot;</span>
                        </div>
                      </div>

                      {/* Technical Telemetry Specs Strip */}
                      <div className="border-t border-white/10 pt-2 grid grid-cols-2 gap-1.5 font-mono text-[9px] text-slate-400">
                        <div className="bg-white/[0.02] border border-white/5 rounded-lg px-2 py-1">
                          <span className="text-slate-500 block text-[8px] uppercase">COORDINATES</span>
                          <span className="text-slate-200 font-semibold">-6.2088°, 106.8456°</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 rounded-lg px-2 py-1">
                          <span className="text-slate-500 block text-[8px] uppercase">REGION ZONE</span>
                          <span className="text-sky-300 font-semibold">UTC+7 (WIB)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. LOCAL TELEMETRY */}
                  <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-[#080B14]/85 backdrop-blur-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] flex flex-col justify-between">
                    {/* Optical Corner HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-emerald-400/70 group-hover:border-emerald-400 transition-colors" />
                    <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-emerald-400/70 group-hover:border-emerald-400 transition-colors" />
                    <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-emerald-400/70 group-hover:border-emerald-400 transition-colors" />
                    <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-emerald-400/70 group-hover:border-emerald-400 transition-colors" />

                    {/* Ambient Glow & Holographic Sweep */}
                    <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-emerald-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                    <div className="relative z-10 space-y-2.5">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-1 font-mono text-[10px] uppercase tracking-wider">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                          <Clock className="h-3.5 w-3.5 shrink-0" />
                          <span>LOCAL TELEMETRY</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.5 rounded text-[9px] font-mono text-emerald-300">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                          </span>
                          <span>LIVE NTP</span>
                        </div>
                      </div>

                      {/* Primary Data: Time (Only Single WIB!) */}
                      <div>
                        <div className="text-emerald-300 font-mono text-base sm:text-lg font-extrabold tracking-tight tabular-nums flex items-baseline gap-1.5 leading-tight">
                          <span>{jakartaTime}</span>
                          <span className="text-[10px] font-semibold text-emerald-400/90 bg-emerald-950/50 border border-emerald-500/30 px-1 rounded">
                            WIB
                          </span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <span className="text-emerald-400">●</span>
                          <span>STATUS: ACTIVE DISPATCH WINDOW</span>
                        </div>
                      </div>

                      {/* Technical Telemetry Specs Strip */}
                      <div className="border-t border-white/10 pt-2 grid grid-cols-2 gap-1.5 font-mono text-[9px] text-slate-400">
                        <div className="bg-white/[0.02] border border-white/5 rounded-lg px-2 py-1">
                          <span className="text-slate-500 block text-[8px] uppercase">NTP OFFSET</span>
                          <span className="text-slate-200 font-semibold">&lt; 0.02ms SYNC</span>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 rounded-lg px-2 py-1">
                          <span className="text-slate-500 block text-[8px] uppercase">UPTIME SLA</span>
                          <span className="text-emerald-300 font-semibold">99.95% AVAIL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Social Media Channel Buttons (Like Overview Section) */}
              <div className="flex items-center justify-center sm:justify-start gap-2.5 sm:gap-3 pt-2">
                {/* LinkedIn */}
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="group/btn relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-400 hover:border-sky-400 hover:bg-sky-400/20 hover:text-white hover:shadow-[0_0_18px_rgba(56,189,248,0.45)] transition-all duration-300 active:scale-95"
                >
                  <FaLinkedinIn className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform group-hover/btn:scale-110" />
                </a>

                {/* GitHub */}
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Repositories"
                  className="group/btn relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-slate-200 hover:border-white/60 hover:bg-white/15 hover:text-white hover:shadow-[0_0_18px_rgba(255,255,255,0.35)] transition-all duration-300 active:scale-95"
                >
                  <FaGithub className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform group-hover/btn:scale-110" />
                </a>

                {/* Gmail */}
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  title="Send Email (Gmail)"
                  className="group/btn relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 hover:border-rose-400 hover:bg-rose-400/20 hover:text-white hover:shadow-[0_0_18px_rgba(244,63,94,0.45)] transition-all duration-300 active:scale-95"
                >
                  <SiGmail className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform group-hover/btn:scale-110" />
                </a>

                {/* WhatsApp */}
                <a
                  href={PROFILE_DATA.whatsapp || "https://wa.me/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp Direct Message"
                  className="group/btn relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:border-emerald-400 hover:bg-emerald-400/20 hover:text-white hover:shadow-[0_0_18px_rgba(52,211,153,0.45)] transition-all duration-300 active:scale-95"
                >
                  <FaWhatsapp className="h-4 w-4 sm:h-4.5 sm:w-4.5 transition-transform group-hover/btn:scale-110" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Transmission Composer (7 cols) */}
            <div className="lg:col-span-7">
              <div className="group/terminal relative overflow-hidden rounded-3xl border border-white/10 bg-[#080B14]/90 backdrop-blur-2xl p-4 sm:p-8 lg:p-9 shadow-[0_24px_70px_rgba(0,0,0,0.85)] transition-all duration-500 hover:border-sky-400/40 hover:shadow-[0_24px_80px_rgba(0,0,0,0.9),0_0_35px_rgba(56,189,248,0.18)]">
                {/* Optical Corner HUD Crosshairs */}
                <div className="pointer-events-none absolute top-3.5 left-3.5 h-2.5 w-2.5 border-t-2 border-l-2 border-sky-400/70 group-hover/terminal:border-sky-400 transition-colors duration-300" />
                <div className="pointer-events-none absolute top-3.5 right-3.5 h-2.5 w-2.5 border-t-2 border-r-2 border-sky-400/70 group-hover/terminal:border-sky-400 transition-colors duration-300" />
                <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-2.5 w-2.5 border-b-2 border-l-2 border-sky-400/70 group-hover/terminal:border-sky-400 transition-colors duration-300" />
                <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-2.5 w-2.5 border-b-2 border-r-2 border-sky-400/70 group-hover/terminal:border-sky-400 transition-colors duration-300" />

                {/* Ambient Glow Field & Holographic Sweep */}
                <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent opacity-0 group-hover/terminal:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover/terminal:translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 border-b border-white/10 pb-3.5 sm:pb-4 mb-5 sm:mb-6 font-mono text-xs">
                    <div className="flex items-center gap-2 min-w-0">
                      {/* 3 Cyber Console LEDs */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="h-2 w-2 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                        <span className="h-2 w-2 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
                        <span className="h-2 w-2 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
                      </div>
                      <span className="text-slate-600 hidden sm:inline">//</span>
                      <span className="flex items-center gap-1.5 font-bold text-slate-200 tracking-wider text-[11px] sm:text-xs truncate">
                        <Terminal className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        <span className="truncate">PROJECT DISPATCH TERMINAL // YDP-2026</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-950/60 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-sky-300">
                        <ShieldCheck className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        <span>CYBERSHIELD ACTIVE</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        <span>CHANNEL READY</span>
                      </div>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-400/15 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                        <Sparkles className="h-7 w-7" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white">
                        Transmission Dispatched & Delivered
                      </h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you,{" "}
                        <span className="text-sky-300 font-semibold">
                          {senderName || "Partner"}
                        </span>
                        . Your project brief for category{" "}
                        <span className="font-mono text-emerald-300">
                          [{selectedScope}]
                        </span>{" "}
                        has been delivered directly to Yohanes Dimas Pratama via secure SMTP transmission. You will receive a response within &lt; 24 hours.
                      </p>
                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setSenderName("");
                            setSenderEmail("");
                            setMessage("");
                            setSelectedScope(DOMAIN_PILLARS[0].title);
                            setSubmitError(null);
                            setHoneyTrap("");
                            setFormMountedAt(Date.now());
                          }}
                          className="rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs text-slate-200 hover:bg-white/10 hover:border-white/25 transition-all"
                        >
                          Send Another Transmission
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Bot Honeypot Trap (Zero-visibility, completely inaccessible to legitimate human visitors) */}
                      <div
                        className="absolute -top-[9999px] -left-[9999px] opacity-0 pointer-events-none select-none h-0 w-0 overflow-hidden"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <label htmlFor="sys_telemetry_checksum">Leave this field blank</label>
                        <input
                          type="text"
                          id="sys_telemetry_checksum"
                          name="sys_telemetry_checksum"
                          value={honeyTrap}
                          onChange={(e) => setHoneyTrap(e.target.value)}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>
                      {/* Scope Selector: 4 Architecture Domains (2x2 grid on mobile, flex-wrap on sm+) */}
                      <div>
                        <label className="block font-mono text-xs uppercase tracking-wider text-white font-bold mb-2">
                          01 // SELECT ARCHITECTURE DOMAIN
                        </label>
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                          {DOMAIN_PILLARS.map((pillar) => {
                            const Icon = getPillarIcon(pillar.id);
                            const active = selectedScope === pillar.title;
                            const styles = getPillarActiveStyles(pillar.id);
                            const shortRole =
                              pillar.shortRoleTitle ||
                              (pillar.roleTitle === "Machine Learning Engineer"
                                ? "ML Engineer"
                                : pillar.roleTitle);

                            return (
                              <button
                                type="button"
                                key={pillar.id}
                                disabled={isSubmitting}
                                onClick={() => {
                                  setSelectedScope(pillar.title);
                                  onTriggerPulse();
                                }}
                                className={`inline-flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 rounded-xl border px-2.5 sm:px-3.5 py-2.5 sm:py-2 font-mono text-[11px] sm:text-xs transition-all ${
                                  isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                                } ${
                                  active
                                    ? styles.active
                                    : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-slate-200 hover:border-white/20 hover:bg-white/[0.04]"
                                }`}
                              >
                                <Icon
                                  className={`h-3.5 w-3.5 shrink-0 ${
                                    active ? styles.iconColor : "text-slate-500"
                                  }`}
                                />
                                <span className="truncate">{shortRole}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="sender-name"
                            className="block font-mono text-xs uppercase tracking-wider text-white font-bold mb-2"
                          >
                            02 // YOUR NAME OR ORGANIZATION
                          </label>
                          <input
                            id="sender-name"
                            type="text"
                            required
                            disabled={isSubmitting}
                            value={senderName}
                            onChange={(e) => setSenderName(e.target.value)}
                            placeholder="e.g. Dr. Adrian / CTO at FinTech"
                            className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:bg-black/80 focus:shadow-[0_0_15px_rgba(56,189,248,0.2)] focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="sender-email"
                            className="block font-mono text-xs uppercase tracking-wider text-white font-bold mb-2"
                          >
                            03 // RETURN COORDINATES (EMAIL)
                          </label>
                          <input
                            id="sender-email"
                            type="email"
                            required
                            disabled={isSubmitting}
                            value={senderEmail}
                            onChange={(e) => setSenderEmail(e.target.value)}
                            placeholder="name@enterprise.com"
                            className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:bg-black/80 focus:shadow-[0_0_15px_rgba(56,189,248,0.2)] focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          />
                        </div>
                      </div>

                      {/* Project Brief */}
                      <div>
                        <label
                          htmlFor="sender-brief"
                          className="block font-mono text-xs uppercase tracking-wider text-white font-bold mb-2"
                        >
                          04 // SYSTEM REQUIREMENTS & OBJECTIVES
                        </label>
                        <textarea
                          id="sender-brief"
                          rows={7}
                          required
                          disabled={isSubmitting}
                          value={message}
                          maxLength={4000}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Describe technical challenges, target latency/scale requirements, or your project timeline..."
                          className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:bg-black/80 focus:shadow-[0_0_15px_rgba(56,189,248,0.2)] focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                        <div className="flex items-center justify-between text-[10px] font-mono mt-1.5 px-1">
                          <span className="text-slate-500 flex items-center gap-1">
                            <Lock className="h-3 w-3 text-sky-400/80 inline" />
                            <span>Min 10 chars · End-to-end sanitized</span>
                          </span>
                          <span
                            className={
                              message.length > 3900
                                ? "text-rose-400 font-bold"
                                : message.length >= 10
                                ? "text-emerald-400 font-semibold"
                                : "text-slate-500"
                            }
                          >
                            {message.length} / 4000
                          </span>
                        </div>
                      </div>

                      {/* Error Banner */}
                      {submitError && (
                        <div className="rounded-xl border border-rose-500/40 bg-rose-950/40 p-4 font-mono text-xs text-rose-300 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div className="flex items-center gap-2 font-bold text-rose-400 uppercase tracking-wider">
                            <AlertTriangle className="h-4 w-4 shrink-0" />
                            <span>TRANSMISSION FAILED // DISPATCH ERROR</span>
                          </div>
                          <p className="text-slate-300 pl-6 leading-relaxed">
                            {submitError}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between gap-3.5 sm:gap-4 pt-2">
                        <span className="font-mono text-[11px] text-slate-400 flex items-center justify-center sm:justify-start gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                          SLA Response Time: &lt; 24 Hours
                        </span>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`group/btn relative w-full sm:w-auto overflow-hidden rounded-xl border px-4 sm:px-7 py-3 font-mono transition-all duration-300 active:scale-[0.98] ${
                            isSubmitting
                              ? "border-sky-400/50 bg-sky-950/50 cursor-wait opacity-85 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                              : "border-sky-400/40 bg-gradient-to-r from-[#070C18] via-[#0B1528] to-[#070C18] shadow-[0_0_24px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-emerald-400/80 hover:shadow-[0_0_35px_rgba(16,185,129,0.35),0_0_15px_rgba(56,189,248,0.25)]"
                          }`}
                        >
                          {/* Optical Corner HUD Reticles */}
                          <span className="pointer-events-none absolute top-1.5 left-1.5 h-2 w-2 border-t-2 border-l-2 border-sky-400/70 group-hover/btn:border-emerald-400 transition-colors duration-300" />
                          <span className="pointer-events-none absolute top-1.5 right-1.5 h-2 w-2 border-t-2 border-r-2 border-sky-400/70 group-hover/btn:border-emerald-400 transition-colors duration-300" />
                          <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-2 w-2 border-b-2 border-l-2 border-sky-400/70 group-hover/btn:border-emerald-400 transition-colors duration-300" />
                          <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-2 w-2 border-b-2 border-r-2 border-sky-400/70 group-hover/btn:border-emerald-400 transition-colors duration-300" />

                          {/* Ambient Cyber Grid & Holographic Scan Sweep */}
                          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 opacity-60 group-hover/btn:opacity-100 transition-opacity" />
                          {!isSubmitting && (
                            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent transition-transform duration-1000 ease-in-out" />
                          )}

                          {/* Encrypted Dispatch Deck Content */}
                          <div className="relative z-10 flex flex-col items-center gap-0.5">
                            {isSubmitting ? (
                              <>
                                <div className="flex items-center gap-2">
                                  <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
                                  <span className="font-mono text-xs uppercase tracking-widest text-sky-300 font-bold">
                                    ENCRYPTING & TRANSMITTING...
                                  </span>
                                </div>
                                <div className="font-mono text-[8px] text-slate-400 tracking-wider">
                                  ROUTING PACKET VIA SMTP GATEWAY
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex items-center gap-1.5">
                                  <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                                  </span>
                                  <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold">
                                    AES-256-GCM // ENCRYPTED
                                  </span>
                                </div>
                                <div className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white group-hover/btn:text-emerald-200 transition-colors">
                                  [ Transmit Project Brief ]
                                </div>
                                <div className="font-mono text-[8px] text-slate-500 tracking-wider group-hover/btn:text-slate-400 transition-colors">
                                  TLS 1.3 · ZERO-KNOWLEDGE SEAL
                                </div>
                              </>
                            )}
                          </div>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Futuristic Technical Command Console Footer Card */}
        <footer className="group/footer relative overflow-hidden rounded-3xl border border-white/10 bg-[#080B14]/85 backdrop-blur-2xl p-5 sm:p-6 lg:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.85)] font-mono text-xs transition-all duration-500 hover:border-sky-500/40 hover:shadow-[0_24px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(56,189,248,0.15)]">
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_70%)]" />

          <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
            {/* Top Rail: Laser Track & Back to Top Telemetry Trigger */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
              {/* Left System Station Tag */}
              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                </span>
                <span className="font-bold text-slate-100 uppercase tracking-widest text-[11px]">
                  SYS.TERMINAL // CORE DECK
                </span>
                <span className="text-slate-500 hidden sm:inline">//</span>
                <span className="text-[11px] text-sky-400 hidden sm:inline">
                  NODE: JKT-ID // APAC-SOUTH
                </span>
              </div>

              {/* Right: Quick Action Button (Return to Apex) */}
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group/top relative inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-bold text-slate-200 hover:border-sky-400/60 hover:bg-sky-400/10 hover:text-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-300 active:scale-95"
                title="Scroll back to top"
              >
                <span>RETURN TO APEX</span>
                <span className="text-sky-400 group-hover/top:-translate-y-0.5 transition-transform font-sans">▲</span>
              </button>
            </div>

            {/* Middle Grid: 3 Rich Technical Deck Columns (1 col mobile, 2 cols tablet, 12-col split on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 text-slate-300">
            {/* Col 1: Brand & Engineering Matrix (5 cols on lg, full width on md) */}
            <div className="md:col-span-2 lg:col-span-5 space-y-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                <span className="font-display text-base font-bold text-white tracking-tight">
                  {PROFILE_DATA.name}
                </span>
                <span className="text-[10px] text-sky-400/90 font-mono bg-sky-950/70 border border-sky-500/30 px-1.5 py-0.5 rounded">
                  {PROFILE_DATA.shortName}-2026
                </span>
              </div>
              {/* Futuristic Synaptic Signal Pod & Cryptographic Verification */}
              <div className="space-y-2">
                <div className="relative overflow-hidden rounded-xl border border-sky-500/25 bg-sky-950/30 backdrop-blur-md px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      {/* Animated Cyber Signal Frequency Bars */}
                      <div className="flex items-end gap-1 h-3.5">
                        <span className="w-1 rounded-full bg-sky-400 animate-pulse h-2" />
                        <span className="w-1 rounded-full bg-sky-300 animate-pulse h-3.5" style={{ animationDelay: "150ms" }} />
                        <span className="w-1 rounded-full bg-indigo-400 animate-pulse h-2.5" style={{ animationDelay: "300ms" }} />
                        <span className="w-1 rounded-full bg-emerald-400 animate-pulse h-3" style={{ animationDelay: "450ms" }} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">
                          SYNAPTIC STREAM
                        </span>
                        <span className="text-[11px] font-bold text-slate-100 font-mono tracking-tight">
                          144 Hz // ACTIVE
                        </span>
                      </div>
                    </div>

                    <div className="text-right flex flex-col items-end">
                      <span className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">
                        CRYPTO HASH
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wider">
                        0x7F4B..9C2D
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 px-1">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    <span className="text-slate-300">DISPATCH PROTOCOL ACTIVE</span>
                  </span>
                  <span className="text-slate-400">SHA-256 VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Col 2: Live Operational Subsystems Telemetry (4 cols on lg, 1 col on md) */}
            <div className="md:col-span-1 lg:col-span-4 space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-sky-400" />
                <span>OPERATIONAL TELEMETRY</span>
              </div>
              <ul className="space-y-2 text-[11px]">
                <li className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>CANVAS HUD ENGINE</span>
                  </span>
                  <span className="text-emerald-300 font-bold">60 FPS LOCKED</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>ENCRYPTION CIPHER</span>
                  </span>
                  <span className="text-slate-200">TLS 1.3 / AES-GCM</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span>SLA DISPATCH WINDOW</span>
                  </span>
                  <span className="text-indigo-300 font-bold">&lt; 24H SLA</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>SYSTEM INTEGRITY</span>
                  </span>
                  <span className="text-emerald-400 font-bold">100% NOMINAL</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Station Sectors & Technical Dossier (3 cols on lg, 1 col on md) */}
            <div className="md:col-span-1 lg:col-span-3 space-y-3">
              <div className="text-[11px] uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-indigo-400" />
                <span>STATION SECTORS</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <a
                  href="#domains"
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-slate-200 hover:border-sky-400/50 hover:bg-sky-400/15 hover:text-white transition-colors"
                >
                  01 // DOMAINS
                </a>
                <a
                  href="#projects"
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-slate-200 hover:border-sky-400/50 hover:bg-sky-400/15 hover:text-white transition-colors"
                >
                  02 // PROJECTS
                </a>
                <a
                  href="#certifications"
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-slate-200 hover:border-sky-400/50 hover:bg-sky-400/15 hover:text-white transition-colors"
                >
                  03 // CREDENTIALS
                </a>
                <a
                  href="#experience"
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-slate-200 hover:border-sky-400/50 hover:bg-sky-400/15 hover:text-white transition-colors"
                >
                  04 // TRAJECTORY
                </a>
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="w-full text-left inline-flex items-center justify-between rounded-lg border border-indigo-400/30 bg-indigo-500/10 px-3 py-1.5 text-[10px] font-bold text-indigo-300 hover:border-indigo-400/70 hover:bg-indigo-400/20 hover:text-white transition-all duration-300"
                >
                  <span>TECHNICAL DOSSIER</span>
                  <span>[RESUME]</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Security Clearance */}
          <div className="pt-3 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="text-slate-300">
                © {new Date().getFullYear()} {PROFILE_DATA.name}. ALL RIGHTS RESERVED.
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
              <span className="text-slate-400">SHA-256 ENCRYPTED</span>
              <span className="text-slate-600">·</span>
              <span className="text-emerald-400 font-medium">● DISPATCH STATION ONLINE</span>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </section>
  );
}

export default React.memo(ContactSection);
