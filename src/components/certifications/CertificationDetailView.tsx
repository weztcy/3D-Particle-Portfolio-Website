"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Cpu,
  ExternalLink,
  Fingerprint,
  Layers,
  Maximize2,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import SynapticParticleCanvas, {
  TelemetryData,
} from "@/components/canvas/SynapticParticleCanvas";
import ParticleControllerHUD from "@/components/ParticleControllerHUD";
import {
  CERTIFICATIONS_LIST,
  CertificationItem,
  ParticleFormation,
} from "@/data";

const CERT_ACCENT_COLORS = [
  "cyan",
  "indigo",
  "emerald",
  "amber",
  "fuchsia",
  "rose",
] as const;

type CertAccentColor = (typeof CERT_ACCENT_COLORS)[number];

function getAccentClasses(accent: CertAccentColor) {
  switch (accent) {
    case "cyan":
      return {
        badge: "border-sky-400/35 bg-sky-400/10 text-sky-300",
        metricText: "text-sky-400",
        hoverBorder: "hover:border-sky-400/50",
        borderAccent: "border-sky-400/30",
        glowBg: "from-sky-500/15 via-transparent to-transparent",
      };
    case "indigo":
      return {
        badge: "border-indigo-400/35 bg-indigo-400/10 text-indigo-300",
        metricText: "text-indigo-400",
        hoverBorder: "hover:border-indigo-400/50",
        borderAccent: "border-indigo-400/30",
        glowBg: "from-indigo-500/15 via-transparent to-transparent",
      };
    case "emerald":
      return {
        badge: "border-emerald-400/35 bg-emerald-400/10 text-emerald-300",
        metricText: "text-emerald-400",
        hoverBorder: "hover:border-emerald-400/50",
        borderAccent: "border-emerald-400/30",
        glowBg: "from-emerald-500/15 via-transparent to-transparent",
      };
    case "amber":
      return {
        badge: "border-amber-400/35 bg-amber-400/10 text-amber-300",
        metricText: "text-amber-400",
        hoverBorder: "hover:border-amber-400/50",
        borderAccent: "border-amber-400/30",
        glowBg: "from-amber-500/15 via-transparent to-transparent",
      };
    case "fuchsia":
      return {
        badge: "border-fuchsia-400/35 bg-fuchsia-400/10 text-fuchsia-300",
        metricText: "text-fuchsia-400",
        hoverBorder: "hover:border-fuchsia-400/50",
        borderAccent: "border-fuchsia-400/30",
        glowBg: "from-fuchsia-500/15 via-transparent to-transparent",
      };
    case "rose":
      return {
        badge: "border-rose-400/35 bg-rose-400/10 text-rose-300",
        metricText: "text-rose-400",
        hoverBorder: "hover:border-rose-400/50",
        borderAccent: "border-rose-400/30",
        glowBg: "from-rose-500/15 via-transparent to-transparent",
      };
  }
}

export default function CertificationDetailView({ certId: propCertId }: { certId?: string } = {}) {
  const params = useParams<{ id: string }>();
  const certId = propCertId || params?.id;

  const currentIndex = CERTIFICATIONS_LIST.findIndex((c) => c.id === certId);
  const cert = currentIndex !== -1 ? CERTIFICATIONS_LIST[currentIndex] : null;

  const [formationMode, setFormationMode] = useState<ParticleFormation>("auto");
  const [turbulence, setTurbulence] = useState<number>(1.0);
  const [pulseTrigger, setPulseTrigger] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    fps: 60,
    particleCount: 18432,
    activeFormation: "helix",
    cursorX: 0,
    cursorY: 0,
    cursorZ: 0,
    scrollProgress: 0,
  });

  const handleTriggerPulse = useCallback(() => {
    setPulseTrigger((prev) => prev + 1);
  }, []);

  const handleCopyId = useCallback(() => {
    if (!cert?.credentialId) return;
    navigator.clipboard.writeText(cert.credentialId);
    setIsCopied(true);
    setPulseTrigger((prev) => prev + 1);
    setTimeout(() => setIsCopied(false), 2000);
  }, [cert?.credentialId]);

  const handleTelemetryUpdate = useCallback((data: TelemetryData) => {
    setTelemetry(data);
  }, []);

  useEffect(() => {
    setCurrentImageIndex(0);
    setImgErrors({});
    setIsLightboxOpen(false);
    setPulseTrigger((prev) => prev + 1);
  }, [certId]);

  if (!cert) {
    return (
      <div className="relative min-h-screen bg-[#06070A] text-slate-100 flex items-center justify-center p-6">
        <SynapticParticleCanvas
          formationMode="auto"
          scrollActiveFormation="helix"
          turbulence={1.0}
          pulseTrigger={pulseTrigger}
          onTelemetryUpdate={handleTelemetryUpdate}
        />
        <div className="relative z-10 max-w-lg w-full rounded-3xl border border-white/15 bg-[#0C0F17]/90 backdrop-blur-xl p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
          <div className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
            [ 404 // CERTIFICATE NOT FOUND ]
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Certificate Not Found
          </h1>
          <p className="text-sm text-slate-400 mb-6">
            The certification you are looking for is unavailable or the URL is invalid.
            Please return to the main certifications directory.
          </p>
          <Link
            href="/#certifications"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-5 py-2.5 font-mono text-xs font-semibold text-slate-950 hover:opacity-95 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Certifications</span>
          </Link>
        </div>
      </div>
    );
  }

  const totalCerts = CERTIFICATIONS_LIST.length;
  const prevIndex = (currentIndex - 1 + totalCerts) % totalCerts;
  const nextIndex = (currentIndex + 1) % totalCerts;
  const prevCert = CERTIFICATIONS_LIST[prevIndex];
  const nextCert = CERTIFICATIONS_LIST[nextIndex];

  const [accentColor, setAccentColor] = useState<CertAccentColor>(() => {
    const randomIdx = Math.floor(Math.random() * CERT_ACCENT_COLORS.length);
    return CERT_ACCENT_COLORS[randomIdx];
  });

  useEffect(() => {
    const randomIdx = Math.floor(Math.random() * CERT_ACCENT_COLORS.length);
    setAccentColor(CERT_ACCENT_COLORS[randomIdx]);
  }, [cert?.id]);

  const accent = getAccentClasses(accentColor);

  const certImages: string[] =
    cert.images && cert.images.length > 0
      ? cert.images
      : cert.imageUrl
      ? [cert.imageUrl]
      : [];
  const hasMultipleImages = certImages.length > 1;
  const currentImage = certImages[currentImageIndex];
  const hasCurrentImageError = Boolean(imgErrors[currentImageIndex]);

  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-play slideshow when there are multiple images (pauses on hover or when lightbox is open)
  useEffect(() => {
    if (!hasMultipleImages || isPaused || isLightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % certImages.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isPaused, isLightboxOpen, certImages.length]);

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!hasMultipleImages) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + certImages.length) % certImages.length
    );
    handleTriggerPulse();
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % certImages.length);
    handleTriggerPulse();
  };

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft" && hasMultipleImages) {
        setCurrentImageIndex(
          (prev) => (prev - 1 + certImages.length) % certImages.length
        );
      } else if (e.key === "ArrowRight" && hasMultipleImages) {
        setCurrentImageIndex((prev) => (prev + 1) % certImages.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, hasMultipleImages, certImages.length]);

  return (
    <div className="relative min-h-screen bg-[#06070A] text-slate-100 selection:bg-sky-400/30">
      {/* Persistent 3D WebGL Point-Cloud & Synaptic Network Canvas */}
      <SynapticParticleCanvas
        formationMode={formationMode}
        scrollActiveFormation="helix"
        turbulence={turbulence}
        pulseTrigger={pulseTrigger}
        onTelemetryUpdate={handleTelemetryUpdate}
      />

      {/* Subtle Architectural Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-grid-pattern bg-[size:64px_64px] opacity-30" />

      {/* Top Sticky Navigation Bar: Back Navigation & Certificate Switcher */}
      <header className="sticky top-0 z-40 border-b border-sky-500/20 bg-[#06070A]/85 backdrop-blur-2xl relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-sky-400/50 after:to-transparent">
        <div className="mx-auto max-w-[1380px] px-3 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Back to Certifications Button & Breadcrumb */}
          <div className="flex items-center gap-2.5 sm:gap-5 min-w-0">
            <Link
              href="/#certifications"
              className="group relative inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-sky-400/30 bg-sky-500/5 px-2.5 sm:px-3.5 py-2 font-mono text-[11px] sm:text-xs font-semibold text-sky-200 hover:text-white hover:border-sky-400/70 hover:bg-sky-500/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 shrink-0"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-sky-400 group-hover:-translate-x-1 transition-transform shrink-0" />
              <span className="tracking-wider">
                RETURN<span className="hidden min-[380px]:inline">_TO_CERTIFICATE</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="text-slate-600">//</span>
              <span className="tracking-wider text-slate-400">ACCREDITATIONS</span>
              <span className="text-sky-500/40">/</span>
              <span className="text-slate-300 uppercase">{cert.issuer}</span>
              <span className="text-sky-500/40">/</span>
              <span className="rounded border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 font-bold text-sky-300">
                {cert.code}
              </span>
            </div>
          </div>

          {/* Right: Certificate Counter & Prev / Next Navigation */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-sky-500/25 bg-sky-950/20 px-2 sm:px-3 py-1.5 font-mono text-[11px] sm:text-xs shadow-[inset_0_0_12px_rgba(56,189,248,0.06)]">
              <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline text-slate-400">NODE</span>
              <span className="font-bold text-white tracking-widest">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-600">/</span>
              <span className="font-bold text-sky-400 tracking-widest">
                {String(totalCerts).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/60 p-1">
              <Link
                href={`/certifications/${prevCert.id}`}
                title={`Previous: ${prevCert.title}`}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 hover:bg-sky-400/10 hover:text-sky-300 hover:border-sky-400/30 transition-all"
              >
                <ChevronLeft className="h-3.5 w-3.5 text-sky-400" />
                <span className="hidden lg:inline">PREV</span>
              </Link>
              <div className="h-3.5 w-px bg-white/10" />
              <Link
                href={`/certifications/${nextCert.id}`}
                title={`Next: ${nextCert.title}`}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 hover:bg-sky-400/10 hover:text-sky-300 hover:border-sky-400/30 transition-all"
              >
                <span className="hidden lg:inline">NEXT</span>
                <ChevronRight className="h-3.5 w-3.5 text-sky-400" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Certificate Detail Content */}
      <main className="relative z-10 py-8 sm:py-14 px-3.5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1380px] space-y-6 sm:space-y-8">
          {/* 1. CERTIFICATE HERO HEADER */}
          <section className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* High-tech Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-sky-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-sky-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-sky-400/60" />

            {/* Ambient Sci-Fi Glow */}
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent.glowBg} opacity-50`}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Left Column: Metadata, Title, & Actions */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg border border-sky-400/35 bg-sky-500/10 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SYS.CREDENTIAL // {cert.code}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-emerald-300">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>AUTHENTICATED</span>
                  </span>
                </div>

                <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                  {cert.title}
                </h1>

                {/* Header Quick Actions - Futuristic Cyber Command Button */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleTriggerPulse}
                      className="group relative inline-flex items-center justify-between sm:justify-center gap-3 overflow-hidden rounded-xl border border-sky-400/40 bg-gradient-to-r from-sky-950/80 via-[#0B1226] to-indigo-950/80 backdrop-blur-xl px-5 sm:px-6 py-3 sm:py-3.5 font-mono text-xs sm:text-[13px] font-bold tracking-wider text-white shadow-[0_0_25px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-sky-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.45),inset_0_1px_0_rgba(255,255,255,0.25)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 select-none cursor-pointer w-full sm:w-auto"
                    >
                      {/* Corner HUD Crosshairs */}
                      <div className="pointer-events-none absolute top-1.5 left-1.5 h-1.5 w-1.5 border-t border-l border-sky-400/80 group-hover:border-white transition-colors" />
                      <div className="pointer-events-none absolute bottom-1.5 right-1.5 h-1.5 w-1.5 border-b border-r border-sky-400/80 group-hover:border-white transition-colors" />

                      {/* Cyber Light Beam Shimmer Sweeper */}
                      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-400/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                      {/* Left: Futuristic Icon Pod & Live Signal Ping */}
                      <div className="relative z-10 flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-500/15 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.3)] group-hover:bg-sky-400 group-hover:text-slate-950 group-hover:border-sky-300 transition-all duration-300 shrink-0">
                          <ShieldCheck className="h-4 w-4 transition-transform group-hover:scale-110" />
                        </div>
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                        </span>
                      </div>

                      {/* Center: Command Title */}
                      <span className="relative z-10 font-mono tracking-wider font-extrabold text-slate-100 group-hover:text-white transition-colors">
                        VERIFY OFFICIAL CREDENTIAL
                      </span>

                      {/* Right: Holographic Telemetry Badge */}
                      <span className="relative z-10 inline-flex items-center gap-1 font-mono text-[10px] text-sky-300 border border-sky-400/30 bg-sky-400/10 px-2 py-0.5 rounded-md group-hover:border-sky-300 group-hover:bg-sky-400/20 group-hover:text-white transition-all shrink-0">
                        <span>VERIFY</span>
                        <ExternalLink className="h-3 w-3 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Certificate Preview Image with 16:9 Aspect Ratio */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-sky-400/30 bg-[#080B14] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.1)]">
                  {/* Optical HUD Crosshairs */}
                  <div className="pointer-events-none absolute top-2 left-2 z-20 h-2 w-2 border-t border-l border-sky-400/80" />
                  <div className="pointer-events-none absolute top-2 right-2 z-20 h-2 w-2 border-t border-r border-sky-400/80" />
                  <div className="pointer-events-none absolute bottom-11 left-2 z-20 h-2 w-2 border-b border-l border-sky-400/80" />
                  <div className="pointer-events-none absolute bottom-11 right-2 z-20 h-2 w-2 border-b border-r border-sky-400/80" />

                  <div
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => {
                      if (currentImage && !hasCurrentImageError) {
                        setIsLightboxOpen(true);
                        handleTriggerPulse();
                      }
                    }}
                    className={`relative aspect-video w-full overflow-hidden bg-slate-950/90 group select-none ${
                      currentImage && !hasCurrentImageError
                        ? "cursor-pointer"
                        : ""
                    }`}
                  >
                    {currentImage && !hasCurrentImageError ? (
                      <img
                        key={currentImage}
                        src={currentImage}
                        alt={`${cert.title} - Preview ${currentImageIndex + 1}`}
                        onError={() =>
                          setImgErrors((prev) => ({
                            ...prev,
                            [currentImageIndex]: true,
                          }))
                        }
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#0C0F17] to-indigo-950/40 p-6 text-center">
                        <Award className="h-12 w-12 text-sky-400/60 mb-3" />
                        <span className="font-mono text-xs text-slate-300 font-semibold">
                          {cert.code}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500 mt-1">
                          {cert.issuer}
                        </span>
                      </div>
                    )}

                    {/* Click to Zoom Hint Overlay */}
                    {currentImage && !hasCurrentImageError && (
                      <div className="pointer-events-none absolute top-3 right-3 rounded-lg border border-sky-400/40 bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-sky-200 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                        <Maximize2 className="h-3 w-3 text-sky-400" />
                        <span>OPTICAL_HUD // ENLARGE</span>
                      </div>
                    )}

                    {hasMultipleImages && (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevImage}
                          aria-label="Previous certificate page"
                          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 text-sky-300 backdrop-blur-md hover:border-sky-400 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all z-10"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextImage}
                          aria-label="Next certificate page"
                          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 text-sky-300 backdrop-blur-md hover:border-sky-400 hover:bg-sky-500/20 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all z-10"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>

                        {/* Interactive Slide Indicator Dots */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-black/80 px-2.5 py-1 backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                          {certImages.map((_, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                                handleTriggerPulse();
                              }}
                              aria-label={`Go to slide ${idx + 1}`}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentImageIndex
                                  ? "w-4 bg-sky-400 shadow-[0_0_10px_#38bdf8]"
                                  : "w-1.5 bg-white/40 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Image Footer Info: Right-Aligned Cryptographic Status */}
                  <div className="flex items-center justify-end gap-2 px-4 py-2.5 border-t border-emerald-500/40 bg-gradient-to-r from-emerald-950/60 via-emerald-950/90 to-emerald-900/90 text-emerald-300 font-mono text-xs font-bold tracking-wider shadow-[inset_0_1px_0_rgba(16,185,129,0.2)]">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="tracking-widest">STATUS // VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. CREDENTIAL TELEMETRY STRIP (3 Key Metadata Boxes: 3 : 2 : 4 Ratio) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-4">
            {/* 1. ORGANIZATION (Ratio: 3) */}
            <div className="sm:col-span-1 lg:col-span-3 group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-5 hover:border-sky-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300">
              <span className="pointer-events-none absolute top-2 right-3 font-mono text-[9px] text-sky-400/30 group-hover:text-sky-400/70 transition-colors select-none">
                [ TEL.01 // ISSUER ]
              </span>
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-0.5">
                    ORGANIZATION
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-white truncate">
                    {cert.issuer}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. ISSUED (Ratio: 2) */}
            <div className="sm:col-span-1 lg:col-span-2 group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-5 hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300">
              <span className="pointer-events-none absolute top-2 right-3 font-mono text-[9px] text-emerald-400/30 group-hover:text-emerald-400/70 transition-colors select-none">
                [ TEL.02 ]
              </span>
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-0.5">
                    ISSUED
                  </div>
                  <div className="font-display text-base sm:text-lg font-bold text-white">
                    {cert.issueDate}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. CREDENTIAL ID (Ratio: 4) */}
            <div className="sm:col-span-2 lg:col-span-4 group relative overflow-hidden rounded-2xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-5 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] transition-all duration-300">
              <span className="pointer-events-none absolute top-2 right-3 font-mono text-[9px] text-indigo-400/30 group-hover:text-indigo-400/70 transition-colors select-none">
                [ TEL.03 // CIPHER_ID ]
              </span>
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <Fingerprint className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-0.5">
                    CREDENTIAL ID
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="font-mono text-sm sm:text-lg font-bold text-sky-300 break-all sm:break-normal truncate">
                      {cert.credentialId}
                    </div>

                    {/* Tactical Copy ID Button */}
                    {cert.credentialId && (
                      <div className="flex justify-end shrink-0">
                        <button
                          onClick={handleCopyId}
                          type="button"
                          title="Copy Credential ID"
                          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg border border-sky-400/30 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-400 px-3 py-1.5 font-mono text-xs text-sky-200 hover:text-white transition-all shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                        >
                          {isCopied ? (
                            <>
                              <Check className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                              <span className="text-emerald-400 font-bold">COPIED</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5 text-sky-400" />
                              <span>COPY</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. OVERVIEW & OFFICIAL VERIFICATION ROW (Balanced 7 : 5 Grid) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left 7 Cols: Program Overview & Scope */}
            <div className="lg:col-span-7 relative flex flex-col justify-between rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
              {/* Corner HUD Crosshairs */}
              <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-sky-400/60" />
              <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-sky-400/60" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-sky-400/60" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-sky-400/60" />

              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400 mb-4">
                  <BookOpen className="h-4 w-4 shrink-0" />
                  <span className="hidden lg:inline">[ 01 // CERTIFICATION OVERVIEW & SCOPE ]</span>
                  <span className="lg:hidden">[ 01 // OVERVIEW & SCOPE ]</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {cert.overview}
                </p>
              </div>

              {/* Cryptographic Integrity & Verification Protocol HUD */}
              <div className="pt-6 mt-8 border-t border-sky-500/20">
                <div className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="hidden lg:inline">CRYPTOGRAPHIC INTEGRITY & VERIFICATION PROTOCOL</span>
                    <span className="lg:hidden">INTEGRITY & VERIFICATION PROTOCOL</span>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    NODE_ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="rounded-xl border border-sky-400/20 bg-black/50 p-2.5 transition-all hover:border-sky-400/40 hover:bg-sky-500/10">
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>CIPHER</span>
                      <span className="text-sky-400 font-bold">256-BIT</span>
                    </div>
                    <div className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-sky-400" />
                      <span>SHA-256 SEAL</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-sky-400/20 bg-black/50 p-2.5 transition-all hover:border-sky-400/40 hover:bg-sky-500/10">
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>AUDIT STD</span>
                      <span className="text-emerald-400 font-bold">W3C</span>
                    </div>
                    <div className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      <span>VERIFIABLE VC</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-sky-400/20 bg-black/50 p-2.5 transition-all hover:border-sky-400/40 hover:bg-sky-500/10">
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>LATENCY</span>
                      <span className="text-indigo-400 font-bold">&lt; 14ms</span>
                    </div>
                    <div className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-indigo-400" />
                      <span>P99 RESOLVE</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-sky-400/20 bg-black/50 p-2.5 transition-all hover:border-sky-400/40 hover:bg-sky-500/10">
                    <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                      <span>TAMPER</span>
                      <span className="text-emerald-400 font-bold">ZERO</span>
                    </div>
                    <div className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      <span>SECURE VAULT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Official Credential Verification */}
            <div className="lg:col-span-5 relative flex flex-col justify-between rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
              {/* Corner HUD Crosshairs */}
              <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-emerald-400/60" />
              <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-emerald-400/60" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-emerald-400/60" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-emerald-400/60" />

              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-4">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span className="hidden lg:inline">[ 02 // CREDENTIAL VERIFICATION CONSOLE ]</span>
                  <span className="lg:hidden">[ 02 // CREDENTIAL CONSOLE ]</span>
                </div>

                {/* Telemetry Readout Terminal Box */}
                <div className="rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs space-y-2.5 mb-6 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between gap-2 text-slate-400">
                    <span className="text-[11px] uppercase tracking-wider shrink-0">ISSUING_ENTITY:</span>
                    <span className="text-white font-bold text-right truncate">{cert.issuer}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-slate-400">
                    <span className="text-[11px] uppercase tracking-wider shrink-0">CREDENTIAL_HASH:</span>
                    <span className="text-sky-300 font-bold text-left sm:text-right font-mono text-[11px] sm:text-xs break-all">
                      {cert.credentialId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 border-t border-white/10 pt-2.5">
                    <span className="text-[11px] uppercase tracking-wider">SYSTEM_STATE:</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      AUTHENTICATED
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  This credential is officially authenticated by the issuing platform. You can
                  verify the public records and cryptographic validity directly.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleTriggerPulse}
                    className="group relative w-full flex items-center justify-between rounded-xl border border-sky-400/40 bg-gradient-to-r from-sky-500/20 via-sky-500/10 to-indigo-500/20 hover:border-sky-400 hover:bg-sky-500/25 px-4 sm:px-5 py-3.5 font-mono text-xs font-bold text-sky-200 hover:text-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
                      <span>OPEN OFFICIAL VERIFICATION PAGE</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                )}

                {currentImage && !hasCurrentImageError && (
                  <button
                    onClick={() => {
                      setIsLightboxOpen(true);
                      handleTriggerPulse();
                    }}
                    className="w-full flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 px-4 sm:px-5 py-3.5 font-mono text-xs font-semibold text-slate-200 hover:text-white transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Maximize2 className="h-4 w-4 text-indigo-400 shrink-0" />
                      <span>INSPECT FULLSCREEN IMAGE</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 shrink-0" />
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* 4. CURRICULUM & KEY MODULES (Full-Width Responsive Multi-Column Grid) */}
          <section className="relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-indigo-400/60" />
            <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-indigo-400/60" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-500/20 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-indigo-400">
                <Layers className="h-4 w-4 shrink-0" />
                <span className="hidden lg:inline">[ 03 // CURRICULUM BREAKDOWN & CORE MODULES ]</span>
                <span className="lg:hidden">[ 03 // CORE MODULES ]</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-3.5 py-1.5 font-mono text-xs text-indigo-200 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-white font-bold">{cert.keyModules.length}</span>
                <span className="text-indigo-300">CORE_MODULES_LOADED</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {cert.keyModules.map((mod, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 sm:p-6 transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-500/[0.04] hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] flex flex-col justify-between"
                >
                  {/* Micro Corner Ticks */}
                  <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t border-l border-sky-400/40" />
                  <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b border-r border-sky-400/40" />

                  {/* Corner Accent Tick */}
                  <span className="pointer-events-none absolute top-2 right-3 font-mono text-[9px] text-sky-400/30 select-none group-hover:text-sky-400/80 transition-colors">
                    ┌ M-0{idx + 1} ┐
                  </span>

                  <div>
                    {/* Header: Module Code & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/15 font-mono text-xs font-bold text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
                          MOD.0{idx + 1}
                        </span>
                      </div>

                      {mod.badge && (
                        <span
                          className={`rounded-lg border px-2.5 py-0.5 font-mono text-[11px] font-bold ${accent.badge}`}
                        >
                          {mod.badge}
                        </span>
                      )}
                    </div>

                    {/* Module Title */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors leading-snug">
                      {mod.title}
                    </h3>

                    {/* Module Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
                      {mod.description}
                    </p>
                  </div>

                  {/* Bottom Module Telemetry Bar */}
                  <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>CURRICULUM_VALIDATED</span>
                    </span>
                    <span className="text-sky-400/60 font-semibold">SYS.NODE_OK</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. PREV / NEXT CERTIFICATE FOOTER NAVIGATION */}
          <section className="pt-6 border-t border-sky-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Link
                href={`/certifications/${prevCert.id}`}
                onClick={handleTriggerPulse}
                className="group relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-6 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all flex flex-col justify-between"
              >
                <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t border-l border-sky-400/50" />
                <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1.5 text-sky-400 font-bold">
                    <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1.5 transition-transform" />
                    <span>◄ PREV_ACCREDITATION</span>
                  </span>
                  <span className="rounded border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-xs text-slate-300">
                    {prevCert.code}
                  </span>
                </div>
                <div className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {prevCert.title}
                </div>
                <div className="font-mono text-xs text-slate-400 mt-2 flex items-center gap-2">
                  <span>{prevCert.issuer}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-sky-400">{prevCert.year}</span>
                </div>
              </Link>

              <Link
                href={`/certifications/${nextCert.id}`}
                onClick={handleTriggerPulse}
                className="group relative overflow-hidden rounded-3xl border border-sky-500/20 bg-[#0A0D17]/85 backdrop-blur-2xl p-5 sm:p-6 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all flex flex-col justify-between text-left md:text-right"
              >
                <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t border-r border-sky-400/50" />
                <div className="flex items-center justify-between gap-2 mb-3 font-mono text-xs text-slate-400">
                  <span className="rounded border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-xs text-slate-300">
                    {nextCert.code}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sky-400 font-bold">
                    <span>NEXT_ACCREDITATION ►</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </div>
                <div className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {nextCert.title}
                </div>
                <div className="font-mono text-xs text-slate-400 mt-2 flex items-center md:justify-end gap-2">
                  <span>{nextCert.issuer}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-sky-400">{nextCert.year}</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Fullscreen Certificate Lightbox Modal (for zooming certificate image on the detail page) */}
      {isLightboxOpen && currentImage && !hasCurrentImageError && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full overflow-hidden rounded-3xl border border-sky-400/40 bg-[#080B14] shadow-[0_24px_100px_rgba(0,0,0,0.95),0_0_50px_rgba(56,189,248,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Optical HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 z-20 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
            <div className="pointer-events-none absolute top-3 right-3 z-20 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
            <div className="pointer-events-none absolute bottom-3 left-3 z-20 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
            <div className="pointer-events-none absolute bottom-3 right-3 z-20 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

            <div className="flex items-center justify-between px-6 py-4 border-b border-sky-500/20 bg-black/80">
              <div className="flex items-center gap-3 font-mono text-xs text-slate-200 truncate pr-3">
                <span className="inline-flex items-center gap-1.5 rounded border border-sky-400/40 bg-sky-500/10 px-2 py-0.5 font-bold text-sky-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {cert.code}
                </span>
                <span className="text-slate-400 truncate">// {cert.title}</span>
                {hasMultipleImages && (
                  <span className="ml-2 text-sky-400 font-mono text-[11px]">
                    [{currentImageIndex + 1}/{certImages.length}]
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="flex items-center gap-1.5 rounded-xl border border-sky-400/30 bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-400 px-3 py-1.5 font-mono text-xs text-sky-200 hover:text-white transition-all shrink-0 cursor-pointer"
                aria-label="Close preview"
              >
                <span className="hidden sm:inline text-[11px] text-slate-400">ESC</span>
                <X className="h-4 w-4 text-sky-400" />
              </button>
            </div>

            {/* Modal Body: Image & Controls */}
            <div className="relative bg-black/90 flex items-center justify-center max-h-[80vh] overflow-hidden p-4">
              <img
                key={currentImage}
                src={currentImage}
                alt={`${cert.title} - View ${currentImageIndex + 1}`}
                onError={() =>
                  setImgErrors((prev) => ({
                    ...prev,
                    [currentImageIndex]: true,
                  }))
                }
                className="w-full h-auto max-h-[76vh] object-contain rounded-lg border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              />

              {/* Lightbox Navigation Arrows for Multiple Images */}
              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous Certificate"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 backdrop-blur-md text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 hover:text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next Certificate"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-black/80 backdrop-blur-md text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 hover:text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)] cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>

                  {/* Bottom Indicator Dots inside Modal */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 rounded-full border border-sky-400/30 bg-black/80 px-2.5 py-1 backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                    {certImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                          handleTriggerPulse();
                        }}
                        aria-label={`Jump to image ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          currentImageIndex === idx
                            ? "w-4 bg-sky-400 shadow-[0_0_10px_#38bdf8]"
                            : "w-1.5 bg-white/40 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Bottom-Right Interactive 3D Particle Engine HUD */}
      <ParticleControllerHUD
        formationMode={formationMode}
        onSelectFormation={(mode) => {
          setFormationMode(mode);
          handleTriggerPulse();
        }}
        turbulence={turbulence}
        onChangeTurbulence={setTurbulence}
        onTriggerPulse={handleTriggerPulse}
        telemetry={telemetry}
      />
    </div>
  );
}
