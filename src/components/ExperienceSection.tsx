"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  MapPin,
  Sparkles,
  Building2,
  Calendar,
  FileCheck,
} from "lucide-react";
import {
  EXPERIENCE_TIMELINE,
  EDUCATION_DATA,
  PUBLICATIONS_LIST,
  PublicationItem,
  ParticleFormation,
} from "@/data";
const PaperFlipbookModal = dynamic(
  () => import("@/components/publications/PaperFlipbookModal"),
  { ssr: false }
);

function ExperienceSection() {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [expandedExpId, setExpandedExpId] = useState<string | null>(null);
  const [readingPaper, setReadingPaper] = useState<PublicationItem | null>(null);

  const toggleExpHighlights = (id: string) => {
    setExpandedExpId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-3.5 sm:px-6 lg:px-10 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400">
            <span className="hidden sm:inline">[ 04 // CAREER TRAJECTORY & ACADEMIC CREDENTIALS ]</span>
            <span className="sm:hidden">[ 04 // CAREER & ACADEMIC TRAJECTORY ]</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Engineering Practice &{" "}
            <span className="block sm:inline bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              Academic Research.
            </span>
          </h2>
          <p className="text-xs sm:text-base text-slate-400 leading-relaxed">
            A proven track record spanning production AI systems engineering,
            large-scale data analytics, and published peer-reviewed academic research.
          </p>
        </div>

        {/* Main Grid: Left Experience Timeline (7 cols) + Right Education & Publications (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10">
          {/* Left Column: Synaptic Career Timeline */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-blue-400 mb-4">
              <Briefcase className="h-3.5 w-3.5 text-blue-400" />
              <span>01 // PROFESSIONAL CAREER TRAJECTORY</span>
            </div>

            <div className="relative pl-5 sm:pl-8 border-l-2 border-blue-500/20 space-y-6 sm:space-y-8 before:absolute before:top-0 before:bottom-0 before:-left-[2px] before:w-[2px] before:bg-gradient-to-b before:from-blue-400 before:via-blue-500/40 before:to-transparent">
              {EXPERIENCE_TIMELINE.map((exp, idx) => {
                const isExpanded = expandedExpId === exp.id;
                const hasMoreHighlights = exp.highlights.length > 2;
                return (
                <div key={exp.id} className="relative group">
                  {/* Glowing Timeline Node */}
                  <span
                    className={`absolute -left-[29px] sm:-left-[41px] top-4 flex h-4 w-4 items-center justify-center rounded-full border ${
                      idx === 0
                        ? "border-blue-400 bg-blue-500/20 shadow-[0_0_18px_rgba(59,130,246,0.7)]"
                        : "border-white/25 bg-[#080B14] group-hover:border-blue-400"
                    } transition-all duration-300`}
                  >
                    {idx === 0 && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    )}
                    <span
                      className={`relative h-1.5 w-1.5 rounded-full ${
                        idx === 0
                          ? "bg-blue-400 shadow-[0_0_6px_#60a5fa]"
                          : "bg-slate-400 group-hover:bg-blue-400"
                      }`}
                    />
                  </span>

                  <div
                    onClick={() => toggleExpHighlights(exp.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleExpHighlights(exp.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    className="group/card relative overflow-hidden rounded-3xl border border-white/10 bg-[#080B14]/85 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(59,130,246,0.25)] cursor-pointer select-none focus:outline-none focus:border-blue-400/80"
                  >
                    {/* Optical Corner HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-3 left-3 sm:top-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-l sm:border-l-2 border-blue-400/70 group-hover/card:border-blue-400 transition-colors duration-300" />
                    <div className="pointer-events-none absolute top-3 right-3 sm:top-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-r sm:border-r-2 border-blue-400/70 group-hover/card:border-blue-400 transition-colors duration-300" />
                    <div className="pointer-events-none absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-l sm:border-l-2 border-blue-400/70 group-hover/card:border-blue-400 transition-colors duration-300" />
                    <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-r sm:border-r-2 border-blue-400/70 group-hover/card:border-blue-400 transition-colors duration-300" />

                    {/* Ambient Glow Field & Holographic Sweep */}
                    <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-blue-500/15 via-sky-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover/card:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                    <div className="relative z-10">
                      {/* Period & Location (Desktop/Tablet) */}
                      <div className="flex items-center justify-between gap-2 mb-3.5 font-mono text-[11px] sm:text-xs">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-blue-400/35 bg-blue-500/10 px-2.5 py-1 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.2)] font-bold">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 text-slate-300">
                          <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Role & Organization */}
                      <h3 className="font-display text-lg sm:text-2xl font-bold text-white group-hover/card:text-blue-300 transition-colors leading-tight">
                        {exp.role}
                      </h3>
                      <div className="font-mono text-xs text-blue-300/90 mt-1.5 mb-2.5 sm:mb-4 flex items-start gap-2">
                        <Building2 className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <div className="min-w-0 flex-1 leading-relaxed">
                          <span className="font-semibold text-blue-200">{exp.organization}</span>
                          <span className="text-slate-600 hidden sm:inline mx-1.5">·</span>
                          <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-slate-400 text-[11px] font-normal align-middle ml-2 sm:ml-0 whitespace-nowrap">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Mobile Location Badge (Underneath Icon & Organization) */}
                      <div className="sm:hidden mb-3.5">
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-slate-300">
                          <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      {/* Highlights with Progressive Disclosure on Mobile (<sm) */}
                      <ul className="space-y-2 border-t border-white/[0.08] pt-3.5 sm:pt-4">
                        {exp.highlights.map((hl, hIdx) => (
                          <li
                            key={hIdx}
                            className={`${
                              hIdx >= 2 && !isExpanded ? "hidden sm:flex" : "flex"
                            } items-start gap-2.5 text-xs sm:text-sm text-slate-300`}
                          >
                            <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {hasMoreHighlights && !isExpanded && (
                        <div className="sm:hidden mt-3">
                          <div
                            className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-black/40 hover:bg-white/[0.06] hover:border-white/20 px-3 py-2 font-mono text-[10px] text-slate-300 transition-all group/toggle"
                          >
                            <span className="text-slate-300 font-medium">
                              + {exp.highlights.length - 2} Key Highlights
                            </span>
                            <span className="text-blue-400 font-bold group-hover/toggle:translate-x-0.5 transition-transform flex items-center gap-1">
                              <span>TAP TO EXPAND</span>
                              <span>→</span>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: First Education, Then Publication */}
          <div className="lg:col-span-5 space-y-8">
            {/* 1. EDUCATION CARD */}
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-400 mb-4">
                <GraduationCap className="h-3.5 w-3.5" />
                <span>02 // FORMAL EDUCATION</span>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080B14]/85 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.7)] hover:border-purple-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(168,85,247,0.25)] transition-all duration-500">
                {/* Optical Corner HUD Crosshairs */}
                <div className="pointer-events-none absolute top-3 left-3 sm:top-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-l sm:border-l-2 border-purple-400/80 group-hover:border-purple-400 transition-colors duration-300 z-30" />
                <div className="pointer-events-none absolute top-3 right-3 sm:top-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-r sm:border-r-2 border-purple-400/80 group-hover:border-purple-400 transition-colors duration-300 z-30" />
                <div className="pointer-events-none absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-l sm:border-l-2 border-purple-400/80 group-hover:border-purple-400 transition-colors duration-300 z-30" />
                <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-r sm:border-r-2 border-purple-400/80 group-hover:border-purple-400 transition-colors duration-300 z-30" />

                {/* Ambient Glow Field & Holographic Sweep */}
                <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-purple-500/20 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                {/* University Campus Photo with Viewfinder Overlays & Cyber Logo Seal */}
                <div className="relative h-44 sm:h-56 w-full overflow-hidden bg-slate-900/90 group/photo">
                  {/* Viewfinder Corner Notches */}
                  <div className="pointer-events-none absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-20 h-2 w-2 border-t border-l border-white/40" />
                  <div className="pointer-events-none absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-20 h-2 w-2 border-t border-r border-white/40" />
                  <div className="pointer-events-none absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 z-20 h-2 w-2 border-b border-l border-white/40" />
                  <div className="pointer-events-none absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-20 h-2 w-2 border-b border-r border-white/40" />

                  {!imageError ? (
                    <img
                      loading="lazy"
                      decoding="async"
                      src={EDUCATION_DATA.photoUrl}
                      alt={EDUCATION_DATA.photoAlt}
                      onError={() => setImageError(true)}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85"
                    />
                  ) : (
                    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-[#0A0D17] to-purple-950/60 p-6 text-center">
                      <Building2 className="h-12 w-12 text-purple-400 mb-2 opacity-60" />
                      <span className="font-display text-sm font-semibold text-slate-300">
                        {EDUCATION_DATA.universityName}
                      </span>
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/40 to-transparent" />

                  {/* Top-Left Image Overlay: University Logo Circular Frame */}
                  <div className="absolute top-3 left-3 z-20">
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/20 bg-transparent flex items-center justify-center overflow-hidden group-hover:border-purple-400 transition-all duration-300 shrink-0">
                      {EDUCATION_DATA.logoUrl && !logoError ? (
                        <img
                          loading="lazy"
                          decoding="async"
                          src={EDUCATION_DATA.logoUrl}
                          alt={`Logo ${EDUCATION_DATA.universityName}`}
                          onError={() => setLogoError(true)}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="h-full w-full rounded-full bg-gradient-to-br from-slate-900 via-purple-950 to-indigo-950 flex flex-col items-center justify-center text-center p-1">
                          <GraduationCap className="h-6 w-6 text-purple-400" />
                          <span className="font-mono text-[8px] font-bold text-purple-300 tracking-tighter">UDINUS</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Image Overlay: Date Period (Bottom-Right) */}
                  <div className="absolute bottom-3 right-3.5 sm:right-4 z-20 pointer-events-none">
                    {/* Bottom-Right: Date / Period Badge */}
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-purple-400/40 bg-black/75 backdrop-blur-md px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-purple-300 uppercase tracking-wider shadow-[0_0_12px_rgba(168,85,247,0.25)] pointer-events-auto shrink-0">
                      <Calendar className="h-3 w-3 text-purple-400 shrink-0" />
                      <span>{EDUCATION_DATA.period}</span>
                    </span>
                  </div>
                </div>

                {/* Education Content Body */}
                <div className="relative z-10 p-5 sm:p-7 space-y-4">
                  {/* University Name & Degree */}
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {EDUCATION_DATA.universityName}
                    </h3>
                    <div className="font-mono text-xs sm:text-sm text-purple-400 font-semibold mt-1">
                      {EDUCATION_DATA.degree}
                    </div>
                  </div>

                  {/* GPA Highlight Pill */}
                  <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-950/70 backdrop-blur-md px-3.5 py-1.5 font-mono text-xs font-bold text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>GPA: {EDUCATION_DATA.gpa}</span>
                  </div>

                  {/* Academic Highlights Pod */}
                  <div className="pt-4 border-t border-white/[0.08] space-y-2.5">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-semibold">
                      <Award className="h-3.5 w-3.5 text-amber-400" />
                      <span>Academic Highlights</span>
                    </div>

                    <ul className="space-y-2">
                      {EDUCATION_DATA.academicHighlights.map((hl, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. PUBLICATION CARDS (Underneath Education) */}
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-4">
                <BookOpen className="h-3.5 w-3.5 text-amber-400" />
                <span>03 // SCIENTIFIC PUBLICATIONS</span>
              </div>

              <div className="space-y-4">
                {PUBLICATIONS_LIST.map((pub) => (
                  <article
                    key={pub.id}
                    onClick={() => {
                      router.push(`/publications/${pub.id}`);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        router.push(`/publications/${pub.id}`);
                      }
                    }}
                    tabIndex={0}
                    role="link"
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080B14]/85 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.25)] select-none cursor-pointer focus:outline-none focus:border-amber-400/60"
                  >
                    {/* Optical Corner HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-3 left-3 sm:top-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-l sm:border-l-2 border-amber-400/70 group-hover:border-amber-400 transition-colors duration-300" />
                    <div className="pointer-events-none absolute top-3 right-3 sm:top-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-t sm:border-t-2 border-r sm:border-r-2 border-amber-400/70 group-hover:border-amber-400 transition-colors duration-300" />
                    <div className="pointer-events-none absolute bottom-3 left-3 sm:bottom-3.5 sm:left-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-l sm:border-l-2 border-amber-400/70 group-hover:border-amber-400 transition-colors duration-300" />
                    <div className="pointer-events-none absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 h-2 w-2 sm:h-2.5 sm:w-2.5 border-b sm:border-b-2 border-r sm:border-r-2 border-amber-400/70 group-hover:border-amber-400 transition-colors duration-300" />

                    {/* Ambient Glow Field & Holographic Sweep */}
                    <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-amber-400/15 via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 ease-in-out" />

                    <div className="relative z-10">
                      {/* Top Row: Year, Author Status, Journal Indexing Level */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          {/* Year Published */}
                          <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-2 sm:px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] text-slate-300">
                            <Calendar className="h-3 w-3 text-slate-400" />
                            {pub.year}
                          </span>

                          {/* Author Status: First Author */}
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/40 bg-blue-500/10 px-2.5 sm:px-3 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]">
                            <FileCheck className="h-3.5 w-3.5 text-blue-400" />
                            {pub.authorStatus}
                          </span>
                        </div>

                        {/* Journal Indexing Level */}
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/45 bg-amber-400/15 px-2.5 sm:px-3 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-amber-300 shadow-[0_0_16px_rgba(245,158,11,0.25)]">
                          <Award className="h-3 w-3 text-amber-400" />
                          {pub.journalLevel}
                        </span>
                      </div>

                      {/* Publication Title Link */}
                      <div className="block group/title">
                        <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover/title:text-amber-200 transition-colors leading-snug">
                          {pub.title}
                        </h4>
                      </div>

                      {/* Publisher Name (Directly Icon and Name without "Publisher:" prefix, wrapped naturally on mobile) */}
                      <div className="flex items-start sm:items-center gap-2 font-mono text-xs text-amber-200/90 mt-2">
                        <BookOpen className="h-3.5 w-3.5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
                        <span className="break-words leading-relaxed">{pub.publisher}</span>
                      </div>

                      {/* Action Bar / Read Article Modal & Inspect Publication Link */}
                      <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2 sm:gap-3">
                        <div className="flex-1 sm:flex-initial">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setReadingPaper(pub);
                            }}
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white transition-colors py-1 group/art cursor-pointer"
                            title="Read full article document"
                          >
                            <span className="group-hover/art:underline decoration-slate-500 underline-offset-4">
                              Article
                            </span>
                            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/art:translate-x-0.5 group-hover/art:-translate-y-0.5" />
                          </button>
                        </div>

                        <div className="flex-1 sm:flex-initial sm:ml-auto">
                          <Link
                            href={`/publications/${pub.id}`}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl border border-amber-400/40 bg-amber-400/15 px-2.5 sm:px-3.5 py-1.5 sm:py-1 font-mono text-[10px] sm:text-xs font-bold text-amber-200 hover:bg-amber-400/25 hover:border-amber-300/80 hover:text-white transition-all w-full sm:w-auto shadow-[0_0_15px_rgba(245,158,11,0.25)] group/btn whitespace-nowrap active:scale-95"
                          >
                            <span>Inspect Publication</span>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-amber-300" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Futuristic PDF Paper Flipbook Modal for Publications */}
      {readingPaper && (
        <PaperFlipbookModal
          isOpen={!!readingPaper}
          onClose={() => setReadingPaper(null)}
          title={readingPaper.title}
          pdfUrl={readingPaper.pdfUrl || "/papers/jaic-2025/Jurnal.pdf"}
          totalPages={14}
        />
      )}
    </section>
  );
}

export default React.memo(ExperienceSection);
