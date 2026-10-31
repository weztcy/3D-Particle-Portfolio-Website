"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Award,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  FileCheck,
  FileText,
  Sparkles,
  Tag,
  Users,
  X,
  Layers,
  RotateCw,
} from "lucide-react";
import { PublicationItem } from "@/data";
import SynapticParticleCanvas from "@/components/canvas/SynapticParticleCanvas";

export const MODAL_FORMATIONS = [
  { id: "wave", label: "Harmonic Wave" },
  { id: "helix", label: "Data Helix" },
  { id: "neural", label: "Neural Torus" },
  { id: "clusters", label: "Latent Clusters" },
  { id: "sphere", label: "Geodesic Sphere" },
] as const;

export type ModalFormationKey = (typeof MODAL_FORMATIONS)[number]["id"];

// Persistent cycle counter across modal open/close actions
let modalOpenCycleCounter = 0;

interface PublicationDetailModalProps {
  publication: PublicationItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PublicationDetailModal({
  publication,
  isOpen,
  onClose,
}: PublicationDetailModalProps) {
  const [mounted, setMounted] = useState(false);
  const [copiedType, setCopiedType] = useState<"text" | "bibtex" | null>(null);
  const [citationFormat, setCitationFormat] = useState<"standard" | "bibtex">(
    "standard"
  );

  // Modal's internal 3D formation & pulse state (independent of page)
  const [formationIdx, setFormationIdx] = useState(0);
  const [pulseTrigger, setPulseTrigger] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // When modal is clicked / un-clicked and clicked again: cycle 3D formations!
  useEffect(() => {
    if (isOpen) {
      const nextIdx = modalOpenCycleCounter % MODAL_FORMATIONS.length;
      modalOpenCycleCounter++;
      setFormationIdx(nextIdx);
      setPulseTrigger((prev) => prev + 1);
    }
  }, [isOpen]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !publication || !mounted) return null;

  const currentFormation = MODAL_FORMATIONS[formationIdx];

  const handleNextFormation = () => {
    setFormationIdx((prev) => (prev + 1) % MODAL_FORMATIONS.length);
    setPulseTrigger((prev) => prev + 1);
  };

  const handleCopyCitation = async (
    text: string,
    type: "text" | "bibtex"
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    } catch {
      // Clipboard fallback
    }
  };

  const citationToDisplay =
    citationFormat === "bibtex"
      ? publication.citationBibtex || publication.citationText || ""
      : publication.citationText || "";

  // Render directly into document.body with createPortal (z-[100] above all other layers)
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pub-detail-title"
    >
      {/* 1. SOLID PURE OBSIDIAN BACKGROUND: 100% opaque, ZERO page content visible behind the modal */}
      <div
        className="absolute inset-0 z-0 bg-[#06070A]"
        aria-hidden="true"
      />

      {/* 2. REUSED EXISTING 3D PARTICLE ASSET (SynapticParticleCanvas) */}
      <SynapticParticleCanvas
        formationMode={currentFormation.id}
        scrollActiveFormation={currentFormation.id}
        turbulence={1.0}
        pulseTrigger={pulseTrigger}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none"
      />

      {/* 3. Subtle HUD Grid Lines */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-grid-pattern bg-[size:48px_48px] opacity-15" />

      {/* 4. Publication Detail Card Container (z-10, safely centered & padded from viewport edges) */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[86vh] sm:max-h-[88vh] flex flex-col rounded-3xl border border-sky-400/35 bg-[#0C0F17]/95 backdrop-blur-2xl shadow-[0_24px_90px_rgba(0,0,0,0.95)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header - Always visible, not cut off */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 sm:px-6 py-4 bg-[#080B11]/95 backdrop-blur-md shrink-0 gap-3">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 min-w-0">
            <FileText className="h-4 w-4 shrink-0" />
            <span className="uppercase tracking-wider font-semibold truncate">
              [ SCIENTIFIC PUBLICATION DOSSIER ]
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Interactive 3D Formation Switcher Pill: Cycles Wave, Neural, Clusters, Helix, Sphere */}
            <button
              type="button"
              onClick={handleNextFormation}
              className="inline-flex items-center gap-1.5 rounded-xl border border-sky-400/35 bg-sky-400/10 px-2.5 sm:px-3 py-1 font-mono text-[11px] sm:text-xs text-sky-300 hover:bg-sky-400/25 hover:text-white transition-all shadow-sm"
              title="Click to cycle next 3D formation (Harmonic Wave → Neural Torus → Clusters → Helix → Sphere)"
            >
              <Sparkles className="h-3.5 w-3.5 text-sky-400 shrink-0" />
              <span className="hidden sm:inline text-slate-400 font-normal">
                3D:
              </span>
              <span className="font-semibold">{currentFormation.label}</span>
              <RotateCw className="h-3 w-3 text-sky-300 ml-0.5 shrink-0" />
            </button>

            <button
              onClick={onClose}
              className="rounded-xl border border-white/15 bg-white/5 p-2 text-slate-300 hover:bg-white/15 hover:text-white transition-all shadow-sm"
              aria-label="Close Publication Details"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Year */}
            <span className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/[0.05] px-2.5 py-1 font-mono text-xs text-slate-300">
              <Calendar className="h-3 w-3 text-sky-400" />
              {publication.year}
            </span>

            {/* Author Status */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 font-mono text-xs font-semibold text-sky-300">
              <FileCheck className="h-3.5 w-3.5 text-sky-400" />
              {publication.authorStatus}
            </span>

            {/* Journal Level */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 font-mono text-xs font-bold text-amber-300">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              Level Jurnal: {publication.journalLevel}
            </span>

            {/* Field */}
            <span className="rounded-lg border border-indigo-400/30 bg-indigo-400/10 px-2.5 py-1 font-mono text-xs text-indigo-300">
              {publication.field}
            </span>
          </div>

          {/* Title */}
          <div>
            <h3
              id="pub-detail-title"
              className="font-display text-xl sm:text-2xl font-bold text-white leading-snug"
            >
              {publication.title}
            </h3>

            {/* Authors & Publisher Row */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-white/[0.08] text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Users className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                <span>
                  Authors:{" "}
                  <strong className="text-white font-medium">
                    {publication.authors || "Yohanes Dimas Pratama"}
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <BookOpen className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">
                  Publisher:{" "}
                  <strong className="text-white font-medium">
                    {publication.publisher}
                  </strong>
                </span>
              </div>
              {publication.volumeInfo && (
                <div className="flex items-center gap-2 text-slate-300">
                  <Layers className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>
                    Volume & Issue:{" "}
                    <span className="text-slate-200">
                      {publication.volumeInfo}
                    </span>
                  </span>
                </div>
              )}
              {publication.doi && (
                <div className="flex items-center gap-2 text-slate-300">
                  <ExternalLink className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span>
                    DOI:{" "}
                    <a
                      href={publication.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline hover:text-sky-300"
                    >
                      {publication.doi}
                    </a>
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Research Metric Highlights */}
          {publication.metrics && publication.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {publication.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center"
                >
                  <div className="font-display text-base sm:text-lg font-bold text-emerald-300">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Abstract */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-sky-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Full Abstract & Research Summary</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/45 p-4 sm:p-5 text-sm text-slate-300 leading-relaxed font-sans">
              {publication.fullAbstract || publication.abstractSummary}
            </div>
          </div>

          {/* Key Methodological Contributions */}
          {publication.keyContributions &&
            publication.keyContributions.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Key Methodological Contributions</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <ul className="space-y-2">
                    {publication.keyContributions.map((kc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{kc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          {/* Keywords / Index Terms */}
          {publication.keywords && publication.keywords.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400">
                <Tag className="h-3.5 w-3.5 text-indigo-400" />
                <span>Index Terms & Keywords</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {publication.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-slate-300"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Citation Box with 1-Click Copy */}
          {publication.citationText && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400">
                  <FileText className="h-3.5 w-3.5 text-amber-400" />
                  <span>Academic Citation</span>
                </div>

                {/* Format Toggle */}
                {publication.citationBibtex && (
                  <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10">
                    <button
                      type="button"
                      onClick={() => setCitationFormat("standard")}
                      className={`px-2 py-0.5 font-mono text-[10px] rounded transition-all ${
                        citationFormat === "standard"
                          ? "bg-sky-400 text-slate-950 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Standard (APA)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCitationFormat("bibtex")}
                      className={`px-2 py-0.5 font-mono text-[10px] rounded transition-all ${
                        citationFormat === "bibtex"
                          ? "bg-sky-400 text-slate-950 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      BibTeX
                    </button>
                  </div>
                )}
              </div>

              <div className="relative rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs text-slate-300">
                <pre className="whitespace-pre-wrap font-mono text-xs text-slate-300 pr-16 leading-relaxed overflow-x-auto">
                  {citationToDisplay}
                </pre>

                <button
                  type="button"
                  onClick={() =>
                    handleCopyCitation(
                      citationToDisplay,
                      citationFormat === "bibtex" ? "bibtex" : "text"
                    )
                  }
                  className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-mono text-slate-200 hover:bg-white/20 hover:text-white transition-all"
                  title="Copy citation to clipboard"
                >
                  {copiedType ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-slate-300" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions - Always visible, fixed at bottom */}
        <div className="border-t border-white/10 px-6 py-4 bg-[#080B11]/95 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-slate-300 hover:bg-white/10 hover:text-white transition-all"
          >
            Close
          </button>

          {publication.paperUrl && (
            <a
              href={publication.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-4 py-2 font-mono text-xs font-bold text-slate-950 hover:opacity-95 shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all"
            >
              <span>View Full Paper on Publisher</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
