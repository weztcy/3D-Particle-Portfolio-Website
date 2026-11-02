"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getPaginationRange } from "@/lib/pagination";
import {
  Award,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Building2,
  ShieldCheck,
} from "lucide-react";
import {
  CERTIFICATIONS_LIST,
  CertificationItem,
} from "@/data";

export const CERT_ACCENT_COLORS = [
  "cyan",
  "indigo",
  "emerald",
  "amber",
  "fuchsia",
  "rose",
] as const;

export type CertAccentColor = (typeof CERT_ACCENT_COLORS)[number];

interface CertificationsSectionProps {
  onTriggerPulse?: () => void;
}

function CertificationsSection({
  onTriggerPulse,
}: CertificationsSectionProps = {}) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Desktop (3 cols x 2 rows = 6), Tablet (2 cols x 2 rows = 4), Mobile (1 col x 3 rows = 3)
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  // Dynamic random accent colors per card on hover
  const [cardAccents, setCardAccents] = useState<Record<string, CertAccentColor>>({});

  const handleCardHover = (certId: string) => {
    setCardAccents((prev) => {
      const current = prev[certId];
      const available = CERT_ACCENT_COLORS.filter((c) => c !== current);
      const nextColor = available[Math.floor(Math.random() * available.length)];
      return { ...prev, [certId]: nextColor };
    });
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(6); // Desktop: 3 columns x 2 rows
      } else if (width >= 768) {
        setItemsPerPage(4); // Tablet: 2 columns x 2 rows
      } else {
        setItemsPerPage(3); // Mobile: 1 column x 3 rows
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Display certifications from newest to oldest
  const displayedCertifications = [...CERTIFICATIONS_LIST].reverse();

  const totalPages = Math.max(
    1,
    Math.ceil(displayedCertifications.length / itemsPerPage)
  );
  const safePage = Math.min(currentPage, totalPages);

  const desktopPages = useMemo(
    () => getPaginationRange(safePage, totalPages, 10),
    [safePage, totalPages]
  );
  const mobilePages = useMemo(
    () => getPaginationRange(safePage, totalPages, 5),
    [safePage, totalPages]
  );
  const paginatedCertifications = displayedCertifications.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  const getCertAccentStyles = (accent: CertAccentColor) => {
    switch (accent) {
      case "cyan":
        return {
          cornerColor: "border-sky-400/80",
          cardHover: "hover:border-sky-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.22)]",
          glowBg: "from-sky-500/20 via-sky-500/5 to-transparent",
          beacon: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
          titleHover: "group-hover:text-sky-300",
          issuerText: "text-sky-300",
          button: "border-sky-400/40 bg-sky-400/10 text-sky-300 hover:bg-sky-400/25 hover:border-sky-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]",
        };
      case "indigo":
        return {
          cornerColor: "border-indigo-400/80",
          cardHover: "hover:border-indigo-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(129,140,248,0.22)]",
          glowBg: "from-indigo-500/20 via-indigo-500/5 to-transparent",
          beacon: "bg-indigo-400 shadow-[0_0_8px_#818cf8]",
          titleHover: "group-hover:text-indigo-300",
          issuerText: "text-indigo-300",
          button: "border-indigo-400/40 bg-indigo-400/10 text-indigo-300 hover:bg-indigo-400/25 hover:border-indigo-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(129,140,248,0.35)]",
        };
      case "emerald":
        return {
          cornerColor: "border-emerald-400/80",
          cardHover: "hover:border-emerald-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(16,185,129,0.22)]",
          glowBg: "from-emerald-500/20 via-emerald-500/5 to-transparent",
          beacon: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
          titleHover: "group-hover:text-emerald-300",
          issuerText: "text-emerald-300",
          button: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/25 hover:border-emerald-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
        };
      case "amber":
        return {
          cornerColor: "border-amber-400/80",
          cardHover: "hover:border-amber-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.22)]",
          glowBg: "from-amber-500/20 via-amber-500/5 to-transparent",
          beacon: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
          titleHover: "group-hover:text-amber-300",
          issuerText: "text-amber-300",
          button: "border-amber-400/40 bg-amber-400/10 text-amber-300 hover:bg-amber-400/25 hover:border-amber-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]",
        };
      case "fuchsia":
        return {
          cornerColor: "border-fuchsia-400/80",
          cardHover: "hover:border-fuchsia-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(232,121,249,0.22)]",
          glowBg: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
          beacon: "bg-fuchsia-400 shadow-[0_0_8px_#e879f9]",
          titleHover: "group-hover:text-fuchsia-300",
          issuerText: "text-fuchsia-300",
          button: "border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300 hover:bg-fuchsia-400/25 hover:border-fuchsia-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(232,121,249,0.35)]",
        };
      case "rose":
        return {
          cornerColor: "border-rose-400/80",
          cardHover: "hover:border-rose-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(251,113,133,0.22)]",
          glowBg: "from-rose-500/20 via-rose-500/5 to-transparent",
          beacon: "bg-rose-400 shadow-[0_0_8px_#fb7185]",
          titleHover: "group-hover:text-rose-300",
          issuerText: "text-rose-300",
          button: "border-rose-400/40 bg-rose-400/10 text-rose-300 hover:bg-rose-400/25 hover:border-rose-400/70 hover:text-white hover:shadow-[0_0_20px_rgba(251,113,133,0.35)]",
        };
    }
  };

  return (
    <section
      id="certifications"
      className="relative py-20 sm:py-28 px-3.5 sm:px-6 lg:px-10 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400">
              <span>[ 03 // PROFESSIONAL CERTIFICATIONS & CREDENTIALS ]</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Verified Certifications &{" "}
              <span className="block bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                Technical Credentials.
              </span>
            </h2>
            <p className="text-xs sm:text-base text-slate-400 leading-relaxed">
              A curated registry of professional certifications and verified
              technical competencies issued by global technology institutions.
            </p>
          </div>

          {/* Futuristic Telemetry HUD Badge: Authenticated Registry */}
          <div className="relative group overflow-hidden rounded-2xl border border-emerald-500/25 bg-[#0C0F17]/85 backdrop-blur-xl px-3.5 sm:px-4 py-2.5 shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.22)] self-start lg:self-end w-full sm:w-auto">
            {/* Sci-Fi Gradient Ambient Glow */}
            <div className="pointer-events-none absolute -inset-px bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-sky-500/15 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Decorative Corner Tech Ticks */}
            <div className="pointer-events-none absolute top-1 left-2 font-mono text-[8px] text-emerald-400/40 select-none">
              ┌
            </div>
            <div className="pointer-events-none absolute top-1 right-2 font-mono text-[8px] text-emerald-400/40 select-none">
              ┐
            </div>

            <div className="relative z-10 flex items-center gap-3 font-mono">
              {/* HUD Icon Box with Live Status Beacon */}
              <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.25)]">
                <ShieldCheck className="h-4 w-4" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
              </div>

              {/* Telemetry Data Stream */}
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-slate-400">
                  <span className="text-emerald-400 font-semibold">SEC // REGISTRY</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-sky-400 font-medium flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    AUTHENTICATED
                  </span>
                </div>
                <div className="flex items-baseline gap-1.5 text-xs sm:text-sm font-bold text-white">
                  <span className="font-mono text-base font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent tabular-nums">
                    {String(CERTIFICATIONS_LIST.length).padStart(2, "0")}
                  </span>
                  <span className="tracking-tight text-slate-200 truncate">
                    VERIFIED CREDENTIALS
                  </span>
                  <span className="hidden sm:inline text-[10px] text-slate-500 font-normal">
                    [100% VALID]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Equal-Width Certification Grid: Mobile 1 col (3 rows), Tablet 2 cols (2 rows), Desktop 3 cols (2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {paginatedCertifications.map((cert, idx) => {
            const defaultAccent = CERT_ACCENT_COLORS[idx % CERT_ACCENT_COLORS.length];
            const currentAccent = cardAccents[cert.id] || defaultAccent;
            const accent = getCertAccentStyles(currentAccent);
            const hasImgError = imgErrors[cert.id];

            return (
              <article
                key={cert.id}
                onMouseEnter={() => handleCardHover(cert.id)}
                onClick={() => {
                  onTriggerPulse?.();
                  router.push(`/certifications/${cert.id}`);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onTriggerPulse?.();
                    router.push(`/certifications/${cert.id}`);
                  }
                }}
                tabIndex={0}
                role="link"
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#080B14]/85 backdrop-blur-2xl p-5 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1.5 cursor-pointer select-none focus:outline-none focus:border-emerald-400/60 ${accent.cardHover}`}
              >
                {/* Optical Corner HUD Crosshairs */}
                <div
                  className={`pointer-events-none absolute top-3.5 left-3.5 h-2.5 w-2.5 border-t-2 border-l-2 ${accent.cornerColor} transition-colors duration-300`}
                />
                <div
                  className={`pointer-events-none absolute top-3.5 right-3.5 h-2.5 w-2.5 border-t-2 border-r-2 ${accent.cornerColor} transition-colors duration-300`}
                />
                <div
                  className={`pointer-events-none absolute bottom-3.5 left-3.5 h-2.5 w-2.5 border-b-2 border-l-2 ${accent.cornerColor} transition-colors duration-300`}
                />
                <div
                  className={`pointer-events-none absolute bottom-3.5 right-3.5 h-2.5 w-2.5 border-b-2 border-r-2 ${accent.cornerColor} transition-colors duration-300`}
                />

                {/* Ambient Glow Field & Holographic Sweep */}
                <div
                  className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${accent.glowBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  {/* Card Top Metadata: Tactical Code Beacon & Issue Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-xs font-bold text-slate-200">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${accent.beacon} animate-pulse`}
                      />
                      <span>{cert.code}</span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-xs text-slate-300 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-lg">
                        {cert.issueDate}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Preview Image (Consistent 16:9 Aspect Ratio with HUD Corner Notches) */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 mb-5 group/image">
                    {/* Viewfinder Corner Notches */}
                    <div className="pointer-events-none absolute top-2 left-2 z-20 h-2 w-2 border-t border-l border-white/40" />
                    <div className="pointer-events-none absolute top-2 right-2 z-20 h-2 w-2 border-t border-r border-white/40" />
                    <div className="pointer-events-none absolute bottom-2 left-2 z-20 h-2 w-2 border-b border-l border-white/40" />

                    {cert.imageUrl && !hasImgError ? (
                      <img
                        loading="lazy"
                        decoding="async"
                        src={cert.imageUrl}
                        alt={cert.title}
                        onError={() =>
                          setImgErrors((prev) => ({ ...prev, [cert.id]: true }))
                        }
                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#0A0D17] to-indigo-950/60 p-4 text-center">
                        <Award className="h-8 w-8 text-sky-400/70 mb-2" />
                        <span className="font-mono text-[11px] text-slate-400">
                          SYS.CREDENTIAL // {cert.code}
                        </span>
                      </div>
                    )}

                    {/* Gradient Vignette Overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B14]/85 via-transparent to-transparent" />

                    {/* Verified Badge (Consistent with Project Card Category Pill) */}
                    <div className="absolute bottom-2.5 right-2.5 z-20">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-300 px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold tracking-wide backdrop-blur-md bg-black/75 shadow-[0_4px_16px_rgba(0,0,0,0.8),0_0_12px_rgba(16,185,129,0.15)]">
                        <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        <span>VERIFIED</span>
                      </span>
                    </div>
                  </div>

                  {/* Issuer Row with Organization Icon */}
                  <div className="flex items-center gap-2 font-mono text-xs mb-2.5">
                    <Building2 className="h-4 w-4 text-white shrink-0" />
                    <span className={`font-semibold ${accent.issuerText} truncate`}>
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-xl sm:text-2xl font-bold text-white ${accent.titleHover} transition-colors leading-tight mb-6`}
                  >
                    {cert.title}
                  </h3>
                </div>

                {/* Bottom Footer: Action Buttons */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between gap-2 sm:gap-3">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white transition-colors py-1 group/cred"
                    >
                      <span className="group-hover/cred:underline decoration-slate-500 underline-offset-4">
                        Credential
                      </span>
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/cred:translate-x-0.5 group-hover/cred:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span />
                  )}

                  <Link
                    href={`/certifications/${cert.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onTriggerPulse?.();
                    }}
                    className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border px-3 sm:px-4 py-2 font-mono text-xs font-bold transition-all ml-auto ${accent.button} group/btn`}
                  >
                    <span>Inspect Certificate</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Pagination Controls when certifications exceed 1 view: Consistent Cyber HUD Layout */}
        {totalPages > 1 && (
          <div className="relative z-10 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-3.5 sm:px-5 py-3 sm:py-3.5 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_10px_30px_rgba(0,0,0,0.5)]">
            {/* Corner Micro Crosshairs */}
            <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-emerald-400/70" />
            <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-emerald-400/70" />
            <div className="pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 border-b border-l border-emerald-400/70" />
            <div className="pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r border-emerald-400/70" />

            <div className="font-mono text-[11px] sm:text-xs text-slate-400 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse shrink-0" />
              <span>
                SYS.SHOWING [ {(safePage - 1) * itemsPerPage + 1}–
                {Math.min(safePage * itemsPerPage, displayedCertifications.length)} ] OF{" "}
                <span className="text-emerald-300 font-bold">
                  {displayedCertifications.length}
                </span>{" "}
                CERTIFICATIONS
              </span>
            </div>

            <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  onTriggerPulse?.();
                }}
                disabled={safePage === 1}
                className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
              >
                <ChevronLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                <span>PREV</span>
              </button>

              {/* Desktop Page Numbers (max 10, visible only on lg+) */}
              <div className="hidden lg:flex items-center gap-1 sm:gap-1.5">
                {desktopPages.map((item, idx) =>
                  typeof item === "number" ? (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setCurrentPage(item);
                        onTriggerPulse?.();
                      }}
                      className={`h-7 sm:h-8 min-w-[28px] sm:min-w-[32px] rounded-xl px-2 sm:px-2.5 font-mono text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                        safePage === item
                          ? "border-emerald-400/40 bg-emerald-950/40 text-emerald-200 border shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                          : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                      }`}
                    >
                      {item}
                    </button>
                  ) : (
                    <span
                      key={`desktop-ellipsis-${idx}`}
                      className="flex items-center justify-center h-7 sm:h-8 w-6 sm:w-7 font-mono text-xs text-slate-500 select-none"
                    >
                      ...
                    </span>
                  )
                )}
              </div>

              {/* Mobile & Tablet Page Numbers (max 5, visible on mobile & tablet <lg) */}
              <div className="flex lg:hidden items-center gap-1 shrink-0 py-0.5">
                {mobilePages.map((item, idx) =>
                  typeof item === "number" ? (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setCurrentPage(item);
                        onTriggerPulse?.();
                      }}
                      className={`h-7 sm:h-8 min-w-[26px] sm:min-w-[32px] rounded-xl px-1.5 sm:px-2.5 font-mono text-[10px] sm:text-xs font-bold shrink-0 transition-all duration-300 ${
                        safePage === item
                          ? "border-emerald-400/40 bg-emerald-950/40 text-emerald-200 border shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                          : "text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-white/[0.02]"
                      }`}
                    >
                      {item}
                    </button>
                  ) : (
                    <span
                      key={`mobile-ellipsis-${idx}`}
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
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  onTriggerPulse?.();
                }}
                disabled={safePage === totalPages}
                className="shrink-0 inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 sm:px-3.5 py-1.5 font-mono text-[10px] sm:text-xs text-slate-300 hover:bg-white/10 hover:border-white/30 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
              >
                <span>NEXT</span>
                <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default React.memo(CertificationsSection);
