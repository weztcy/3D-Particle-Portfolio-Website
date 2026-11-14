"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  FileCheck,
  FileText,
  Fingerprint,
  Globe,
  Layers,
  Maximize2,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Tag,
  Terminal,
  Users,
  Zap,
  Download,
} from "lucide-react";
import SynapticParticleCanvas, {
  TelemetryData,
} from "@/components/canvas/SynapticParticleCanvas";
import ParticleControllerHUD from "@/components/ParticleControllerHUD";
import PaperFlipbookModal from "@/components/publications/PaperFlipbookModal";
import {
  PUBLICATIONS_LIST,
  PublicationItem,
  PublicationReference,
  ParticleFormation,
} from "@/data";

type CitationFormatKey =
  | "apa"
  | "ieee"
  | "acm"
  | "harvard"
  | "chicago"
  | "mla"
  | "bibtex"
  | "ris";

interface CitationStyleOption {
  key: CitationFormatKey;
  label: string;
  shortTag: string;
  badge: string;
  desc: string;
  category: string;
  ext: string;
  recommendedFor: string;
}

const CITATION_STYLES: CitationStyleOption[] = [
  {
    key: "apa",
    label: "APA 7th",
    shortTag: "APA",
    badge: "AUTHOR-DATE",
    category: "Social & Medical Sciences",
    ext: "txt",
    desc: "American Psychological Association 7th Edition (Author-Date Standard)",
    recommendedFor: "General Scientific Journals, Dissertations & Cross-disciplinary Studies",
  },
  {
    key: "ieee",
    label: "IEEE",
    shortTag: "IEEE",
    badge: "CS & ENGINEERING",
    category: "Computer Science & Engineering",
    ext: "txt",
    desc: "Institute of Electrical and Electronics Engineers Numerical Standard",
    recommendedFor: "IEEE Xplore, Robotics, Machine Learning & Telecommunications",
  },
  {
    key: "acm",
    label: "ACM",
    shortTag: "ACM",
    badge: "COMPUTING SYSTEMS",
    category: "Computing & Software Systems",
    ext: "txt",
    desc: "Association for Computing Machinery Standard Reference Format",
    recommendedFor: "ACM Digital Library, Algorithms, HCI & Computer Systems",
  },
  {
    key: "harvard",
    label: "Harvard",
    shortTag: "HARVARD",
    badge: "AUTHOR-DATE",
    category: "International Academic Standard",
    ext: "txt",
    desc: "Harvard Style Author-Date Parenthetical Reference System",
    recommendedFor: "UK & Commonwealth Academic Theses & Multidisciplinary Research",
  },
  {
    key: "chicago",
    label: "Chicago",
    shortTag: "CHICAGO",
    badge: "17TH EDITION",
    category: "Author-Date System",
    ext: "txt",
    desc: "The Chicago Manual of Style 17th Edition (Author-Date Reference)",
    recommendedFor: "Academic Presses, Medical Informatics & Historical Computing",
  },
  {
    key: "mla",
    label: "MLA 9th",
    shortTag: "MLA",
    badge: "CONTAINER SYSTEM",
    category: "Modern Language Association",
    ext: "txt",
    desc: "Modern Language Association 9th Edition Standard Format",
    recommendedFor: "Interdisciplinary Research, Higher Education & Open Scholarship",
  },
  {
    key: "bibtex",
    label: "BibTeX",
    shortTag: "BIBTEX",
    badge: "LATEX / OVERLEAF",
    category: "Reference Database (.bib)",
    ext: "bib",
    desc: "Machine-Readable Bibliography Database Markup for LaTeX and Overleaf",
    recommendedFor: "LaTeX Compilers, Overleaf, arXiv & Technical Manuscripts",
  },
  {
    key: "ris",
    label: "RIS Format",
    shortTag: "RIS",
    badge: "REFERENCE MANAGERS",
    category: "Tagged Interchange (.ris)",
    ext: "ris",
    desc: "Tagged Reference Interchange Standard for Zotero, Mendeley & EndNote",
    recommendedFor: "Zotero, Mendeley, EndNote, Citavi & RefWorks Citation Managers",
  },
];

export default function PublicationDetailView({ publicationId: propPubId }: { publicationId?: string } = {}) {
  const params = useParams<{ id: string }>();
  const pubId = params?.id;

  const currentIndex = PUBLICATIONS_LIST.findIndex(
    (p) =>
      p.id === pubId ||
      p.id.replace("-", "-0") === pubId ||
      p.id === pubId?.replace("-0", "-")
  );
  const pub = currentIndex !== -1 ? PUBLICATIONS_LIST[currentIndex] : null;

  const [formationMode, setFormationMode] = useState<ParticleFormation>("clusters");
  const [turbulence, setTurbulence] = useState<number>(1.0);
  const [pulseTrigger, setPulseTrigger] = useState<number>(0);

  const [citationFormat, setCitationFormat] = useState<CitationFormatKey>("apa");
  const [isCitationCopied, setIsCitationCopied] = useState<boolean>(false);
  const [isFileDownloaded, setIsFileDownloaded] = useState<boolean>(false);
  const [isDoiCopied, setIsDoiCopied] = useState<boolean>(false);
  const [isShareCopied, setIsShareCopied] = useState<boolean>(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);

  // References Section states
  const [refCategoryFilter, setRefCategoryFilter] = useState<string>("ALL");
  const [refSearch, setRefSearch] = useState<string>("");
  const [copiedRefId, setCopiedRefId] = useState<string | null>(null);
  const [refPage, setRefPage] = useState<number>(1);
  const REFS_PER_PAGE = 10;

  useEffect(() => {
    setRefPage(1);
  }, [refCategoryFilter, refSearch]);

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    fps: 60,
    particleCount: 18432,
    activeFormation: "clusters",
    cursorX: 0,
    cursorY: 0,
    cursorZ: 0,
    scrollProgress: 0,
  });

  const handleTriggerPulse = useCallback(() => {
    setPulseTrigger((prev) => prev + 1);
  }, []);

  const handleTelemetryUpdate = useCallback((data: TelemetryData) => {
    setTelemetry(data);
  }, []);

  useEffect(() => {
    setPulseTrigger((prev) => prev + 1);
  }, [pubId]);

  const getCitationForFormat = useCallback(
    (format: string) => {
      if (!pub) return "";
      if (pub.citationStyles && pub.citationStyles[format as keyof typeof pub.citationStyles]) {
        return pub.citationStyles[format as keyof typeof pub.citationStyles];
      }
      if (format === "bibtex") {
        return pub.citationBibtex || pub.citationText || "";
      }
      return pub.citationText || "";
    },
    [pub]
  );

  const handleCopyCitation = useCallback(async () => {
    if (!pub) return;
    const text = getCitationForFormat(citationFormat);
    try {
      await navigator.clipboard.writeText(text);
      setIsCitationCopied(true);
      handleTriggerPulse();
      setTimeout(() => setIsCitationCopied(false), 2200);
    } catch {
      // fallback
    }
  }, [pub, citationFormat, getCitationForFormat, handleTriggerPulse]);

  const handleDownloadCitationFile = useCallback(() => {
    if (!pub) return;
    const text = getCitationForFormat(citationFormat);
    const styleMeta = CITATION_STYLES.find((s) => s.key === citationFormat);
    const ext = styleMeta ? styleMeta.ext : "txt";
    const filename = `pratama-2025-jaic-diabetes-knn.${ext}`;
    const mimeType =
      ext === "bib"
        ? "application/x-bibtex"
        : ext === "ris"
        ? "application/x-research-info-systems"
        : "text/plain";
    const blob = new Blob([text], { type: `${mimeType};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsFileDownloaded(true);
    handleTriggerPulse();
    setTimeout(() => setIsFileDownloaded(false), 2000);
  }, [pub, citationFormat, getCitationForFormat, handleTriggerPulse]);

  const handleCopyDoi = useCallback(async () => {
    if (!pub?.doi) return;
    try {
      await navigator.clipboard.writeText(pub.doi);
      setIsDoiCopied(true);
      handleTriggerPulse();
      setTimeout(() => setIsDoiCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [pub?.doi, handleTriggerPulse]);

  const handleShareLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setIsShareCopied(true);
      handleTriggerPulse();
      setTimeout(() => setIsShareCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [handleTriggerPulse]);

  const handleCopyReference = useCallback(
    async (refItem: { id: string; authors: string; title: string; venue: string; year: string; doi?: string }) => {
      const text = `${refItem.authors} (${refItem.year}). ${refItem.title}. ${refItem.venue}.${refItem.doi ? ` https://doi.org/${refItem.doi}` : ""}`;
      try {
        await navigator.clipboard.writeText(text);
        setCopiedRefId(refItem.id);
        handleTriggerPulse();
        setTimeout(() => setCopiedRefId(null), 2000);
      } catch {
        // fallback
      }
    },
    [handleTriggerPulse]
  );

  if (!pub) {
    return (
      <div className="relative min-h-screen bg-[#06070A] text-slate-100 flex items-center justify-center p-6">
        <SynapticParticleCanvas
          formationMode="clusters"
          scrollActiveFormation="clusters"
          turbulence={1.0}
          pulseTrigger={pulseTrigger}
          onTelemetryUpdate={handleTelemetryUpdate}
        />
        <div className="relative z-10 max-w-lg w-full rounded-3xl border border-white/15 bg-[#0C0F17]/90 backdrop-blur-xl p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
          <div className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
            [ 404 // SCIENTIFIC PUBLICATION NOT FOUND ]
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Dossier Not Found
          </h1>
          <p className="text-sm text-slate-400 mb-6">
            The publication research document you are looking for is unavailable or the identifier is invalid.
          </p>
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-5 py-2.5 font-mono text-xs font-semibold text-slate-950 hover:opacity-95 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Career & Academic Credentials</span>
          </Link>
        </div>
      </div>
    );
  }

  const totalPubs = PUBLICATIONS_LIST.length;
  const prevIndex = (currentIndex - 1 + totalPubs) % totalPubs;
  const nextIndex = (currentIndex + 1) % totalPubs;
  const prevPub = PUBLICATIONS_LIST[prevIndex];
  const nextPub = PUBLICATIONS_LIST[nextIndex];

  const citationToDisplay = getCitationForFormat(citationFormat);
  const activeCitationMeta =
    CITATION_STYLES.find((s) => s.key === citationFormat) || CITATION_STYLES[0];

  const refCategories = [
    "ALL",
    "Normalization & Scaling",
    "Feature Selection & RF",
    "KNN & Classification",
    "Clinical & Diabetes",
    "Statistical Inference",
    "Data Preprocessing",
  ];

  const filteredReferences = (pub.references || []).filter((r) => {
    const matchesCat =
      refCategoryFilter === "ALL" || r.category === refCategoryFilter;
    const q = refSearch.toLowerCase().trim();
    const matchesSearch =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.authors.toLowerCase().includes(q) ||
      r.venue.toLowerCase().includes(q) ||
      r.year.includes(q) ||
      (r.doi && r.doi.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const totalRefPages = Math.ceil(filteredReferences.length / REFS_PER_PAGE) || 1;
  const safeRefPage = Math.min(Math.max(1, refPage), totalRefPages);
  const paginatedReferences = filteredReferences.slice(
    (safeRefPage - 1) * REFS_PER_PAGE,
    safeRefPage * REFS_PER_PAGE
  );

  return (
    <div className="relative min-h-screen bg-[#06070A] text-slate-100 selection:bg-amber-400/30">
      {/* 1. Persistent 3D WebGL Point-Cloud Canvas */}
      <SynapticParticleCanvas
        formationMode={formationMode}
        scrollActiveFormation="clusters"
        turbulence={turbulence}
        pulseTrigger={pulseTrigger}
        onTelemetryUpdate={handleTelemetryUpdate}
      />

      {/* 2. Architectural Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-grid-pattern bg-[size:64px_64px] opacity-25" />

      {/* 3. Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-amber-500/20 bg-[#06070A]/85 backdrop-blur-2xl relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-amber-400/50 after:to-transparent">
        <div className="mx-auto max-w-[1380px] px-3 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Back Navigation & Breadcrumb */}
          <div className="flex items-center gap-2.5 sm:gap-5 min-w-0">
            <Link
              href="/#experience"
              className="group relative inline-flex items-center gap-1.5 sm:gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 px-2.5 sm:px-3.5 py-2 font-mono text-[11px] sm:text-xs font-semibold text-amber-200 hover:text-white hover:border-amber-400/70 hover:bg-amber-500/20 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300 shrink-0"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-amber-400 group-hover:-translate-x-1 transition-transform shrink-0" />
              <span className="tracking-wider">
                RETURN<span className="hidden min-[380px]:inline"> TO EXPERIENCE</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="text-slate-600">//</span>
              <span className="tracking-wider text-slate-400">RESEARCH</span>
              <span className="text-amber-400/40">/</span>
              <span className="text-slate-300 uppercase">{pub.journalLevel}</span>
              <span className="text-amber-400/40">/</span>
              <span className="rounded border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 font-bold text-amber-300">
                {pub.id.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Right: Telemetry Counter & Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-amber-500/25 bg-amber-950/20 px-2 sm:px-3 py-1.5 font-mono text-[11px] sm:text-xs shadow-[inset_0_0_12px_rgba(245,158,11,0.06)]">
              <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="hidden sm:inline text-slate-400">PUB</span>
              <span className="font-bold text-white tracking-widest">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-600">/</span>
              <span className="font-bold text-amber-300 tracking-widest">
                {String(totalPubs).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-black/60 p-1">
              <Link
                href={`/publications/${prevPub.id}`}
                title={`Previous: ${prevPub.title}`}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 hover:bg-amber-400/15 hover:text-amber-200 transition-all"
              >
                <ChevronLeft className="h-3.5 w-3.5 text-amber-400" />
                <span className="hidden lg:inline">PREV</span>
              </Link>
              <div className="h-3.5 w-px bg-white/10" />
              <Link
                href={`/publications/${nextPub.id}`}
                title={`Next: ${nextPub.title}`}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 sm:px-2.5 py-1.5 font-mono text-xs font-medium text-slate-300 hover:bg-amber-400/15 hover:text-amber-200 transition-all"
              >
                <span className="hidden lg:inline">NEXT</span>
                <ChevronRight className="h-3.5 w-3.5 text-amber-400" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Main Publication Dossier Content */}
      <main className="relative z-10 py-8 sm:py-14 px-3.5 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1380px] space-y-6 sm:space-y-8">
          {/* SECTION 1: PUBLICATION HERO HEADER */}
          <section className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* High-tech Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-amber-400/70" />
            <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-amber-400/70" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-amber-400/70" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-amber-400/70" />

            {/* Ambient Sci-Fi Amber/Yellow Glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-amber-500/15 via-yellow-500/5 to-transparent opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

            <div className="relative z-10 space-y-5 sm:space-y-6">
              {/* Badges Bar (Cleaned up: Sinta 3 and Year moved to dedicated Metadata Console below) */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-lg border border-amber-400/40 bg-amber-500/15 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SYS.PUBLICATION // {pub.id.toUpperCase()}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-400/35 bg-blue-500/10 px-2.5 sm:px-3 py-1 font-mono text-[10px] sm:text-[11px] font-semibold text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.15)]">
                  <FileCheck className="h-3.5 w-3.5 text-blue-400" />
                  <span>{pub.authorStatus}</span>
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-emerald-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>PEER_REVIEWED & ACCREDITED</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.55rem] 2xl:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.25] sm:leading-[1.2] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
                {pub.title}
              </h1>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
                {pub.paperUrl && (
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleTriggerPulse}
                    className="group relative w-full sm:w-auto justify-center inline-flex items-center gap-2.5 overflow-hidden rounded-xl border border-amber-300/50 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 px-5 sm:px-6 py-3 font-mono text-xs font-bold text-slate-950 shadow-[0_0_28px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    <ExternalLink className="h-4 w-4 text-slate-950 transition-transform group-hover:scale-110 shrink-0" />
                    <span>VIEW PUBLISHED ARTICLE (JAIC)</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setIsPdfModalOpen(true);
                    handleTriggerPulse();
                  }}
                  className="group w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 px-4 py-3 font-mono text-xs font-semibold text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-amber-400/50"
                  title="Open interactive 3D Flipbook reader"
                >
                  <BookOpen className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
                  <span>READ FULL PAPER (PDF)</span>
                </button>

                {pub.doi && (
                  <button
                    type="button"
                    onClick={handleCopyDoi}
                    className="w-full sm:w-auto justify-center inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-500/10 hover:bg-amber-500/20 px-4 py-2.5 sm:py-3 font-mono text-xs font-semibold text-amber-200 hover:text-white transition-all shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                    title="Copy DOI identifier to clipboard"
                  >
                    {isDoiCopied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                        <span className="text-emerald-400 font-bold">DOI COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-amber-400 shrink-0" />
                        <span className="truncate">COPY DOI: {pub.doi}</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("citation-section");
                    el?.scrollIntoView({ behavior: "smooth" });
                    handleTriggerPulse();
                  }}
                  className="flex-1 sm:flex-initial justify-center inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-3.5 sm:px-4 py-2.5 sm:py-3 font-mono text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  <FileText className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>JUMP TO CITATION</span>
                </button>

                <button
                  type="button"
                  onClick={handleShareLink}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-3.5 py-2.5 sm:py-3 font-mono text-xs text-slate-300 hover:text-white transition-all"
                  title="Copy permanent link to this dossier"
                >
                  {isShareCopied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span className="text-emerald-400 font-bold">LINK COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4 text-slate-300 shrink-0" />
                      <span>SHARE</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* SECTION 2: FUTURISTIC PUBLICATION DOSSIER METADATA CONSOLE */}
          <section className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {/* High-tech Corner HUD Crosshairs */}
            <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t-2 border-l-2 border-amber-400/70" />
            <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t-2 border-r-2 border-amber-400/70" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b-2 border-l-2 border-amber-400/70" />
            <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b-2 border-r-2 border-amber-400/70" />

            {/* Ambient Sci-Fi Glow & Scanning Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-emerald-500/10 opacity-40" />

            {/* Console Header Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/[0.08] font-mono text-xs">
              <div className="flex items-center gap-2.5 text-amber-300">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                </span>
                <span className="font-bold tracking-widest uppercase">
                  <span className="hidden sm:inline">PUBLICATION SPECIFICATION & METADATA DECK</span>
                  <span className="sm:hidden">PUBLICATION METADATA DECK</span>
                </span>
                <span className="text-slate-600 hidden sm:inline">//</span>
                <span className="text-slate-400 text-[11px] hidden sm:inline">
                  OFFICIAL REGISTRATION REGISTRY
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-300 font-semibold">ACADEMIC REGISTRY ONLINE</span>
              </div>
            </div>

            {/* 6 Modular Futuristic Telemetry Pods (Balanced 3x2 Grid) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
              {/* 1. SINTA 3 (ACCREDITATION) */}
              <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl border border-amber-400/30 bg-black/60 p-4 sm:p-5 hover:border-amber-400/70 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all duration-300">
                <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-amber-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-amber-400/60" />
                <span className="pointer-events-none absolute top-2.5 right-3 font-mono text-[9px] text-amber-400/40 group-hover:text-amber-400 transition-colors">
                  [ TEL.01 // INDEX ]
                </span>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-400/15 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      JOURNAL ACCREDITATION
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg sm:text-xl font-extrabold text-amber-300 tracking-tight">
                        {pub.journalLevel}
                      </span>
                      <span className="rounded bg-amber-400/20 border border-amber-400/40 px-1.5 py-0.5 font-mono text-[9px] font-bold text-amber-200 uppercase">
                        ACCREDITED
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 truncate">
                      Kemenristek / SINTA National Tier
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. YEAR: 2025 */}
              <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl border border-sky-500/25 bg-black/60 p-4 sm:p-5 hover:border-sky-400/70 hover:shadow-[0_0_25px_rgba(56,189,248,0.2)] transition-all duration-300">
                <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-sky-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-sky-400/60" />
                <span className="pointer-events-none absolute top-2.5 right-3 font-mono text-[9px] text-sky-400/40 group-hover:text-sky-400 transition-colors">
                  [ TEL.02 // CYCLE ]
                </span>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-500/15 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      PUBLICATION YEAR
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg sm:text-xl font-extrabold text-sky-300 tracking-tight">
                        {pub.year}
                      </span>
                      <span className="rounded bg-sky-400/20 border border-sky-400/40 px-1.5 py-0.5 font-mono text-[9px] font-bold text-sky-200 uppercase">
                        JUNE 2025
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 truncate">
                      National Peer-Reviewed Cycle
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. VOLUME, ISSUE & PAGINATION (DEDICATED COMPONENT) */}
              <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl border border-purple-500/25 bg-black/60 p-4 sm:p-5 hover:border-purple-400/70 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300">
                <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-purple-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-purple-400/60" />
                <span className="pointer-events-none absolute top-2.5 right-3 font-mono text-[9px] text-purple-400/40 group-hover:text-purple-400 transition-colors">
                  [ TEL.03 // ISSUE ]
                </span>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/15 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      VOLUME & PAGINATION
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg sm:text-xl font-extrabold text-purple-300 tracking-tight">
                        Vol. 9, No. 3
                      </span>
                      <span className="rounded bg-purple-400/20 border border-purple-400/40 px-1.5 py-0.5 font-mono text-[9px] font-bold text-purple-200 uppercase">
                        PP. 693–706
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 truncate">
                      Official JAIC Published Edition
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. FIELD: Machine Learning & Healthcare Data Mining */}
              <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-black/60 p-4 sm:p-5 hover:border-emerald-400/70 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all duration-300">
                <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-emerald-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-emerald-400/60" />
                <span className="pointer-events-none absolute top-2.5 right-3 font-mono text-[9px] text-emerald-400/40 group-hover:text-emerald-400 transition-colors">
                  [ TEL.04 // DISCIPLINE ]
                </span>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-500/15 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <Tag className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      RESEARCH FIELD & DOMAIN
                    </div>
                    <div className="font-display text-sm sm:text-base font-bold text-emerald-300 leading-snug break-words">
                      {pub.field}
                    </div>
                    <div className="font-mono text-[11px] text-slate-400 truncate">
                      Clinical Informatics · Distance Classification
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. AUTHORS: Yohanes Dimas Pratama (First Author), Abu Salam */}
              <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl border border-indigo-500/25 bg-black/60 p-4 sm:p-5 hover:border-indigo-400/70 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-300">
                <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-indigo-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-indigo-400/60" />
                <span className="pointer-events-none absolute top-2.5 right-3 font-mono text-[9px] text-indigo-400/40 group-hover:text-indigo-400 transition-colors">
                  [ TEL.05 // INVESTIGATORS ]
                </span>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-400/40 bg-indigo-500/15 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      AUTHORS & INVESTIGATORS
                    </div>
                    <div className="font-display text-sm sm:text-base font-bold text-white leading-snug break-words">
                      {pub.authors || "Yohanes Dimas Pratama (First Author), Abu Salam"}
                    </div>
                    <div className="font-mono text-[11px] text-indigo-300/90 truncate">
                      Universitas Dian Nuswantoro · Computer Science
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. PUBLISHER: Journal of Applied Informatics and Computing (JAIC) */}
              <div className="lg:col-span-4 group relative overflow-hidden rounded-2xl border border-white/15 bg-black/60 p-4 sm:p-5 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300">
                <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-white/40" />
                <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 border-t border-r border-white/40" />
                <span className="pointer-events-none absolute top-2.5 right-3 font-mono text-[9px] text-slate-500 group-hover:text-amber-400 transition-colors">
                  [ TEL.06 // PUBLISHER ]
                </span>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                      PUBLISHER & JOURNAL VENUE
                    </div>
                    <div className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                      {pub.publisher}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] text-slate-400">
                      <span>e-ISSN: {pub.issn || "2548-6861 (Online)"}</span>
                      <span>·</span>
                      <span>CC BY-SA 4.0</span>
                      {pub.paperUrl && (
                        <>
                          <span>·</span>
                          <a
                            href={pub.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 underline underline-offset-2 transition-colors"
                          >
                            <span>Article Page</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: RESEARCH METRIC TELEMETRY HUD (4-Grid) */}
          {pub.metrics && pub.metrics.length > 0 && (
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {pub.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-amber-400/25 bg-[#0A0D17]/85 backdrop-blur-2xl p-3.5 sm:p-5 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all duration-300"
                >
                  {/* Optical HUD Crosshair */}
                  <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t border-l border-amber-400/60" />
                  <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t border-r border-amber-400/60" />

                  <span className="pointer-events-none hidden min-[380px]:inline absolute top-2 right-3 font-mono text-[9px] text-amber-400/40 group-hover:text-amber-400/80 transition-colors select-none">
                    [ METRIC.0{idx + 1} ]
                  </span>

                  <div className="pt-1">
                    <div className="font-display text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-emerald-300 drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span className="truncate">{m.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* SECTION 3: BALANCED 7 : 5 GRID (Abstract + Accreditation Console) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left 7 Cols: [ 01 // ABSTRACT ] */}
            <div className="lg:col-span-7 flex flex-col h-full">
              {/* Card 1: [ 01 // ABSTRACT & RESEARCH SPECIFICATION ] */}
              <div className="relative h-full flex flex-col justify-between rounded-3xl border border-amber-400/25 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
                {/* Corner HUD Crosshairs */}
                <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-amber-400/70" />
                <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-amber-400/70" />
                <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-amber-400/70" />
                <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-amber-400/70" />

                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-4">
                    <Sparkles className="h-4 w-4 text-amber-400 shrink-0" />
                    <span className="hidden sm:inline">[ 01 // ABSTRACT & RESEARCH SPECIFICATION ]</span>
                    <span className="sm:hidden">[ 01 // ABSTRACT & RESEARCH ]</span>
                  </div>

                  <div className="flex-1 rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] flex flex-col justify-center">
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                      {pub.fullAbstract || pub.abstractSummary}
                    </p>
                  </div>
                </div>

                {/* Research Scope & Specifications Bar */}
                <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-[10px] uppercase text-slate-400">RESEARCH DOMAIN</div>
                    <div className="text-white font-bold mt-0.5 truncate">{pub.field}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-[10px] uppercase text-slate-400">ISSN ELECTRONIC</div>
                    <div className="text-amber-200 font-bold mt-0.5">{pub.issn || "2548-6861 (Online)"}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-[10px] uppercase text-slate-400">PUBLICATION CYCLE</div>
                    <div className="text-emerald-300 font-bold mt-0.5">PEER-REVIEWED {pub.year}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: [ 02 // JOURNAL ACCREDITATION & INDEXING ] */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="relative h-full flex flex-col justify-between rounded-3xl border border-amber-400/25 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
                {/* Corner HUD Crosshairs */}
                <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-amber-400/60" />
                <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-amber-400/60" />
                <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-amber-400/60" />
                <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-amber-400/60" />

                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-300">
                      <BookOpen className="h-4 w-4 shrink-0" />
                      <span className="hidden sm:inline">[ 02 // JOURNAL ACCREDITATION & INDEXING ]</span>
                      <span className="sm:hidden">[ 02 // ACCREDITATION & INDEXING ]</span>
                    </div>

                    {/* Telemetry Readout Terminal Box */}
                    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 font-mono text-xs space-y-2.5 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]">
                      <div className="flex items-start justify-between gap-4 text-slate-400">
                        <span className="text-[11px] uppercase tracking-wider shrink-0 mt-0.5">JOURNAL:</span>
                        <div className="text-right text-white font-bold leading-snug max-w-[290px] sm:max-w-[340px]">
                          {(pub.journalName || pub.publisher).includes(" (JAIC)") ? (
                            <span>
                              {(pub.journalName || pub.publisher).replace(" (JAIC)", "")}{" "}
                              <span className="text-amber-300 font-mono text-[11px] font-semibold whitespace-nowrap">
                                (JAIC)
                              </span>
                            </span>
                          ) : (
                            <span>{pub.journalName || pub.publisher}</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-slate-400">
                        <span className="text-[11px] uppercase tracking-wider shrink-0">ACCREDITATION:</span>
                        <span className="text-amber-300 font-bold text-right">{pub.journalLevel} Accredited</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-slate-400">
                        <span className="text-[11px] uppercase tracking-wider shrink-0">VOLUME & ISSUE:</span>
                        <span className="text-slate-200 font-semibold text-right">{pub.volumeInfo || "Vol. 9, No. 3 (2025)"}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2 text-slate-400 border-t border-white/10 pt-2.5">
                        <span className="text-[11px] uppercase tracking-wider shrink-0">DOI RESOLUTION:</span>
                        <span className="text-amber-300 font-bold text-right break-all">{pub.doi || "10.30871/jaic.v9i3.9353"}</span>
                      </div>
                    </div>

                    {/* Official Peer-Review Timeline */}
                    {pub.articleHistory && (
                      <div className="rounded-2xl border border-white/10 bg-black/40 p-3.5 sm:p-4 font-mono text-[11px] shadow-[inset_0_0_10px_rgba(0,0,0,0.4)]">
                        <div className="text-[10px] uppercase tracking-wider text-amber-300 flex items-center gap-1.5 mb-2 font-bold">
                          <Calendar className="h-3 w-3 text-amber-400" />
                          <span>OFFICIAL ARTICLE TIMELINE</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-slate-300">
                          <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2">
                            <span className="text-[9px] uppercase text-slate-500 block">RECEIVED</span>
                            <span className="font-semibold text-white">{pub.articleHistory.received}</span>
                          </div>
                          <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2">
                            <span className="text-[9px] uppercase text-slate-500 block">REVISED</span>
                            <span className="font-semibold text-white">{pub.articleHistory.revised}</span>
                          </div>
                          <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2">
                            <span className="text-[9px] uppercase text-slate-500 block">ACCEPTED</span>
                            <span className="font-semibold text-emerald-400">{pub.articleHistory.accepted}</span>
                          </div>
                          <div className="rounded-lg bg-white/[0.03] border border-white/5 p-2">
                            <span className="text-[9px] uppercase text-slate-500 block">PUBLISHED</span>
                            <span className="font-semibold text-amber-300">{pub.articleHistory.published}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Indexing Badges */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        INDEXED IN ACADEMIC DATABASES:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/35 bg-amber-400/10 px-2.5 py-1 font-mono text-[11px] font-bold text-amber-300">
                          <Award className="h-3 w-3 text-amber-400" />
                          {pub.journalLevel.toUpperCase()}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-sky-400/35 bg-sky-400/10 px-2.5 py-1 font-mono text-[11px] font-bold text-sky-300">
                          <Globe className="h-3 w-3 text-sky-400" />
                          GARUDA (DIKTI)
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/35 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] font-bold text-emerald-300">
                          <BookOpen className="h-3 w-3 text-emerald-400" />
                          GOOGLE SCHOLAR
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/35 bg-amber-400/10 px-2.5 py-1 font-mono text-[11px] font-bold text-amber-300">
                          <ShieldCheck className="h-3 w-3 text-amber-400" />
                          CROSSREF DOI
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: JAIC Portal & PDF */}
                  <div className="pt-4 border-t border-white/10 space-y-2 mt-4">
                    {pub.paperUrl && (
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleTriggerPulse}
                        className="group relative w-full flex items-center justify-between rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 hover:border-amber-400 hover:bg-amber-500/25 px-4 sm:px-5 py-3 font-mono text-xs font-bold text-amber-200 hover:text-white transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
                          <span>OPEN OFFICIAL JAIC PORTAL</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </a>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                      {pub.doiUrl && (
                        <a
                          href={pub.doiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleTriggerPulse}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-400/40 px-3 py-2 font-mono text-[11px] text-slate-300 hover:text-white transition-all text-center"
                        >
                          <ShieldCheck className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                          <span>CROSSREF DOI</span>
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          setIsPdfModalOpen(true);
                          handleTriggerPulse();
                        }}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-sky-400/40 px-3 py-2 font-mono text-[11px] text-slate-300 hover:text-white transition-all text-center"
                        title="Open interactive 3D Flipbook reader"
                      >
                        <BookOpen className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                        <span>READ PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: [ 03 // INDEX TERMS & RESEARCH KEYWORDS ] (FULL WIDTH) */}
          {pub.keywords && pub.keywords.length > 0 && (
            <section className="relative rounded-3xl border border-amber-400/25 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.08)]">
              {/* Corner HUD Crosshairs */}
              <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-amber-400/70" />
              <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-amber-400/70" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-amber-400/70" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-amber-400/70" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 font-mono text-xs">
                <div className="flex items-center gap-2 uppercase tracking-widest text-amber-300 font-bold">
                  <Tag className="h-4 w-4 text-amber-400 shrink-0" />
                  <span className="hidden sm:inline">[ 03 // INDEX TERMS & RESEARCH KEYWORDS ]</span>
                  <span className="sm:hidden">[ 03 // INDEX & RESEARCH KEYWORDS ]</span>
                </div>
                <span className="text-[10px] text-amber-400/90 font-mono bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full w-fit font-bold">
                  {pub.keywords.length} TAXONOMY LABELS
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 mb-4 font-sans leading-relaxed">
                Standardized clinical MeSH and IEEE computational taxonomy keywords indexed for cross-database discoverability:
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {pub.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400/30 bg-amber-400/10 px-3 sm:px-3.5 py-1.5 font-mono text-[11px] sm:text-xs font-medium text-amber-200 hover:border-amber-400/70 hover:bg-amber-400/20 hover:text-white transition-all shadow-[0_0_12px_rgba(245,158,11,0.1)]"
                  >
                    <span className="text-amber-400 font-bold">#</span>
                    <span>{kw}</span>
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 4: ARCHITECTURAL CONTRIBUTIONS & PIPELINE ARCHITECTURE */}
          {pub.keyContributions && pub.keyContributions.length > 0 && (
            <section className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              {/* Corner HUD Crosshairs */}
              <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-emerald-400/60" />
              <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-emerald-400/60" />

              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400 mb-6">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">[ 04 // ARCHITECTURAL INNOVATIONS & KEY CONTRIBUTIONS ]</span>
                <span className="sm:hidden">[ 04 // KEY CONTRIBUTIONS ]</span>
              </div>

              {/* 4 Contributions Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {pub.keyContributions.map((contribution, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 hover:border-amber-400/40 hover:bg-white/[0.03] transition-all group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                        <Check className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="space-y-1">
                        <div className="font-mono text-[10px] text-amber-300 uppercase tracking-wider">
                          CONTRIBUTION // 0{idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                          {contribution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Algorithmic Pipeline Architecture Flowchart */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-amber-400 mb-4">
                  <Cpu className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                  <span className="hidden sm:inline">RESEARCH ARCHITECTURE PIPELINE EXECUTION</span>
                  <span className="sm:hidden">RESEARCH PIPELINE</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
                  {(pub.pipelineSteps && pub.pipelineSteps.length > 0
                    ? pub.pipelineSteps
                    : [
                        {
                          step: "STEP 01",
                          title: "Medical Data Ingestion",
                          description:
                            "Pima Indians Diabetes dataset (768 patient records) cleaned and partitioned into 80:20 split.",
                          metric: "768 Patients (80:20 Split)",
                        },
                        {
                          step: "STEP 02",
                          title: "Random Forest Feature Selection",
                          description:
                            "Gini Impurity feature importance removes 4 low-yield features while preventing data leakage.",
                          metric: "4 Features Kept (-50% Dim)",
                        },
                        {
                          step: "STEP 03",
                          title: "Multi-Technique Normalization",
                          description:
                            "Min-Max, Z-Score, and Decimal Scaling applied to equalize feature variances and resolve distance distortion.",
                          metric: "3 Scaling Methods Tested",
                        },
                        {
                          step: "STEP 04",
                          title: "KNN & Paired T-Test Validation",
                          description:
                            "Evaluated across K ∈ {1..11}; Paired T-Test confirms Min-Max superiority (p < 0.05 across all 6 metrics).",
                          metric: "81.17% Acc (K=7, p < 0.05)",
                        },
                      ]
                  ).map((pipe, pIdx) => (
                    <div
                      key={pIdx}
                      className="rounded-xl border border-amber-400/25 bg-black/50 p-4 relative overflow-hidden"
                    >
                      <span className="text-[10px] text-amber-400 font-bold">{pipe.step}</span>
                      <div className="text-white font-bold text-sm mt-1">{pipe.title}</div>
                      <p className="text-[11px] text-slate-400 mt-1 font-sans">
                        {pipe.description}
                      </p>
                      <div className="mt-3 text-[10px] text-emerald-400 font-bold">{pipe.metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* SECTION 5: INTERACTIVE ACADEMIC CITATION TERMINAL (8 COMPILED STANDARDS) */}
          {pub.citationText && (
            <section
              id="citation-section"
              className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              {/* Corner HUD Crosshairs */}
              <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-amber-400/60" />
              <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-amber-400/60" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-amber-400/60" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-amber-400/60" />

              {/* Ambient Sci-Fi Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/5 via-sky-500/5 to-purple-500/5 opacity-40" />

              <div className="relative z-10 space-y-6">
                {/* Header bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-300">
                      <Terminal className="h-4 w-4 text-amber-400 shrink-0" />
                      <span>[ 05 // ACADEMIC CITATION TERMINAL ]</span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] text-emerald-400 font-bold tracking-normal">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        8 STANDARDS COMPILED
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Multi-format academic citation compiler with direct clipboard ingestion & reference manager file exports.
                    </p>
                  </div>

                  {/* Quick Action Buttons (Top Bar) */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadCitationFile}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-sky-400/30 bg-sky-500/10 hover:bg-sky-500/20 px-3.5 py-1.5 text-xs font-mono font-bold text-sky-200 hover:text-white transition-all shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                      title={`Download .${activeCitationMeta.ext} citation file`}
                    >
                      {isFileDownloaded ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                          <span className="text-emerald-400">DOWNLOADED!</span>
                        </>
                      ) : (
                        <>
                          <Download className="h-3.5 w-3.5 text-sky-400" />
                          <span>EXPORT .{activeCitationMeta.ext.toUpperCase()}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 8-Format Selector Grid / Pills */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                    <span className="uppercase tracking-wider text-slate-400">SELECT CITATION STANDARD:</span>
                    <span className="text-amber-400/80 hidden sm:inline">CLICK TAB TO SWITCH PARSER</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10">
                    {CITATION_STYLES.map((style) => {
                      const isActive = citationFormat === style.key;
                      return (
                        <button
                          key={style.key}
                          type="button"
                          onClick={() => {
                            setCitationFormat(style.key);
                            handleTriggerPulse();
                          }}
                          className={`group relative flex flex-col items-center justify-center py-2.5 px-2 rounded-xl font-mono text-xs transition-all duration-200 border ${
                            isActive
                              ? "bg-gradient-to-b from-amber-400/20 to-amber-500/10 border-amber-400 text-amber-300 font-bold shadow-[0_0_16px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/50"
                              : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.06] hover:border-white/15"
                          }`}
                        >
                          <span className="text-xs font-semibold leading-tight">{style.label}</span>
                          <span
                            className={`text-[9px] mt-0.5 uppercase tracking-wider ${
                              isActive ? "text-amber-200 font-medium" : "text-slate-500 group-hover:text-slate-400"
                            }`}
                          >
                            {style.shortTag}
                          </span>
                          {isActive && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Format Metadata Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 p-3.5 rounded-xl border border-white/10 bg-black/40 font-mono text-xs">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                    <span className="px-2 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/40 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                      {activeCitationMeta.badge}
                    </span>
                    <span className="text-slate-300 font-sans font-medium text-xs">
                      {activeCitationMeta.desc}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                    <span className="hidden sm:inline text-slate-500">
                      USE CASE: <span className="text-slate-300 font-sans">{activeCitationMeta.recommendedFor}</span>
                    </span>
                    <span className="text-amber-400/80 font-bold sm:border-l sm:border-white/10 sm:pl-3">
                      BUFFER: {citationToDisplay.length} BYTES
                    </span>
                  </div>
                </div>

                {/* Terminal Code Display Box */}
                <div className="relative rounded-2xl border border-amber-400/25 bg-black/85 p-3.5 sm:p-5 font-mono text-xs text-slate-300 shadow-[inset_0_0_25px_rgba(0,0,0,0.85)]">
                  {/* Pseudo Terminal Header with Integrated Action Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/[0.08] text-[11px] text-slate-400">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex gap-1.5 shrink-0">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-slate-300 ml-1 truncate">
                        stdout.{activeCitationMeta.ext} <span className="text-slate-600">·</span> <span className="text-amber-400/90 font-bold">format::{activeCitationMeta.key}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 text-[10px] hidden sm:inline font-mono">
                        UTF-8 // MIME: {activeCitationMeta.ext === "bib" ? "application/x-bibtex" : activeCitationMeta.ext === "ris" ? "application/x-research-info-systems" : "text/plain"}
                      </span>

                      <button
                        type="button"
                        onClick={handleCopyCitation}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/35 bg-amber-500/15 hover:bg-amber-500/25 px-3 py-1 text-xs font-mono font-bold text-amber-200 hover:text-white transition-all shadow-[0_0_12px_rgba(245,158,11,0.15)] active:scale-95"
                        title="Copy citation to clipboard"
                      >
                        {isCitationCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                            <span className="text-emerald-400">COPIED!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5 text-amber-400" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Terminal stdout text with Dynamic Height (No vertical scroll cutoffs) */}
                  <pre className="whitespace-pre-wrap break-words font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto select-all py-1">
                    {citationToDisplay}
                  </pre>
                </div>
              </div>
            </section>
          )}

          {/* SECTION 6: CITED REFERENCES & LITERATURE (BIBLIOGRAPHY) */}
          {pub.references && pub.references.length > 0 && (
            <section
              id="references-section"
              className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-[#0A0D17]/85 backdrop-blur-2xl p-4 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              {/* Corner HUD Crosshairs */}
              <div className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-amber-400/60" />
              <div className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-amber-400/60" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-amber-400/60" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 border-b border-r border-amber-400/60" />

              {/* Ambient Sci-Fi Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/5 via-sky-500/5 to-purple-500/5 opacity-50" />

              <div className="relative z-10 space-y-6">
                {/* Header bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-amber-300">
                    <BookOpen className="h-4 w-4 text-amber-400 shrink-0" />
                    <span className="font-bold">
                      <span className="hidden sm:inline">[ 06 // CITED REFERENCES & LITERATURE ]</span>
                      <span className="sm:hidden">[ 06 // REFERENCES & LITERATURE ]</span>
                    </span>
                    <span className="text-slate-600 hidden sm:inline">//</span>
                    <span className="text-slate-400 text-[11px] hidden sm:inline">
                      PEER-REVIEWED SCIENTIFIC BIBLIOGRAPHY
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-amber-300 font-bold">
                      {filteredReferences.length} OF {pub.references.length} CITED WORKS
                    </span>
                    {totalRefPages > 1 && (
                      <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-slate-300 font-bold">
                        PAGE {safeRefPage} / {totalRefPages}
                      </span>
                    )}
                  </div>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {refCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setRefCategoryFilter(cat);
                          handleTriggerPulse();
                        }}
                        className={`px-3 py-1.5 rounded-xl border text-[11px] transition-all ${
                          refCategoryFilter === cat
                            ? "border-amber-400 bg-amber-400/20 text-white font-bold shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                            : "border-white/10 bg-black/40 text-slate-400 hover:text-white hover:border-white/20"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Quick Search Box */}
                  <div className="relative w-full md:w-auto md:min-w-[220px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-500" />
                    <input
                      type="text"
                      value={refSearch}
                      onChange={(e) => setRefSearch(e.target.value)}
                      placeholder="Search cited literature..."
                      className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-white/10 bg-black/60 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/60 focus:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all"
                    />
                    {refSearch && (
                      <button
                        type="button"
                        onClick={() => setRefSearch("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* References List Cards */}
                <div className="space-y-3 pt-2">
                  {filteredReferences.length === 0 ? (
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-center text-slate-400 font-mono text-xs">
                      No cited references found matching query &ldquo;{refSearch}&rdquo;.
                    </div>
                  ) : (
                    paginatedReferences.map((ref, idx) => {
                      const isCopied = copiedRefId === ref.id;
                      const globalIndex = (safeRefPage - 1) * REFS_PER_PAGE + idx + 1;
                      return (
                        <div
                          key={ref.id}
                          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5 hover:border-amber-400/40 hover:bg-black/75 transition-all duration-300"
                        >
                          {/* Corner HUD accent */}
                          <div className="pointer-events-none absolute top-2 left-2 h-1.5 w-1.5 border-t border-l border-white/30 group-hover:border-amber-400/60" />
                          <div className="pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r border-white/30 group-hover:border-amber-400/60" />

                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <div className="space-y-2 flex-1 min-w-0">
                              {/* Metadata Badges: Index, Category, Year */}
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-400/15 border border-amber-400/30 px-2 py-0.5 rounded-md">
                                  [{globalIndex < 10 ? `0${globalIndex}` : globalIndex}]
                                </span>

                                {ref.category && (
                                  <span className="font-mono text-[10px] text-slate-300 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded-md">
                                    {ref.category}
                                  </span>
                                )}

                                <span className="font-mono text-[10px] text-sky-300 bg-sky-500/10 border border-sky-500/25 px-2 py-0.5 rounded-md">
                                  {ref.year}
                                </span>
                              </div>

                              {/* Title */}
                              <h4 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors leading-snug">
                                {ref.title}
                              </h4>

                              {/* Authors */}
                              <div className="text-xs text-slate-300 font-sans">
                                <span className="text-slate-500 font-mono text-[11px] uppercase mr-1.5">Authors:</span>
                                {ref.authors}
                              </div>

                              {/* Journal / Venue */}
                              <div className="text-xs text-slate-400 font-sans italic">
                                <span className="text-slate-500 font-mono text-[11px] uppercase not-italic mr-1.5">Venue:</span>
                                {ref.venue}
                              </div>
                            </div>

                            {/* Actions on the right */}
                            <div className="flex items-center sm:flex-col sm:items-end gap-2 shrink-0 pt-2 sm:pt-0">
                              {ref.doi && (
                                <a
                                  href={`https://doi.org/${ref.doi}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={handleTriggerPulse}
                                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/30 bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1.5 font-mono text-[11px] font-bold text-amber-300 hover:text-white transition-all shadow-[0_0_10px_rgba(245,158,11,0.1)]"
                                  title={`Open DOI: 10.xxx / ${ref.doi}`}
                                >
                                  <span>DOI RECORD</span>
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              )}

                              <button
                                type="button"
                                onClick={() => handleCopyReference(ref)}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 font-mono text-[11px] text-slate-300 hover:text-white transition-all"
                                title="Copy APA citation of this reference"
                              >
                                {isCopied ? (
                                  <>
                                    <Check className="h-3 w-3 text-emerald-400 animate-pulse" />
                                    <span className="text-emerald-400 font-bold">COPIED</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="h-3 w-3 text-slate-400" />
                                    <span>CITE</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Pagination Controls Bar */}
                {totalRefPages > 1 && (
                  <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                    {/* Page Range Info */}
                    <div className="text-slate-400 text-[11px] flex items-center gap-2 text-center sm:text-left">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                      <span>
                        SHOWING <strong className="text-white font-bold">{(safeRefPage - 1) * REFS_PER_PAGE + 1}–{Math.min(safeRefPage * REFS_PER_PAGE, filteredReferences.length)}</strong> OF <strong className="text-white font-bold">{filteredReferences.length}</strong> CITED REFERENCES
                      </span>
                    </div>

                    {/* Pagination Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setRefPage((p) => Math.max(1, p - 1));
                          handleTriggerPulse();
                        }}
                        disabled={safeRefPage === 1}
                        className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                          safeRefPage === 1
                            ? "border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed"
                            : "border-white/10 bg-black/50 text-slate-300 hover:text-white hover:border-amber-400/50 hover:bg-amber-400/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                        }`}
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        <span className="hidden min-[380px]:inline">PREV</span>
                      </button>

                      {/* Numbered Pills */}
                      <div className="flex flex-wrap items-center justify-center gap-1">
                        {Array.from({ length: totalRefPages }, (_, i) => i + 1).map((pg) => {
                          const isActive = pg === safeRefPage;
                          return (
                            <button
                              key={pg}
                              type="button"
                              onClick={() => {
                                setRefPage(pg);
                                handleTriggerPulse();
                              }}
                              className={`h-8 min-w-[30px] sm:min-w-[32px] px-2 rounded-xl font-mono text-xs font-bold transition-all border ${
                                isActive
                                  ? "bg-amber-400 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.35)] scale-105"
                                  : "bg-black/50 border-white/10 text-slate-400 hover:text-white hover:border-white/25 hover:bg-white/5"
                              }`}
                            >
                              {pg < 10 ? `0${pg}` : pg}
                            </button>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setRefPage((p) => Math.min(totalRefPages, p + 1));
                          handleTriggerPulse();
                        }}
                        disabled={safeRefPage === totalRefPages}
                        className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                          safeRefPage === totalRefPages
                            ? "border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed"
                            : "border-white/10 bg-black/50 text-slate-300 hover:text-white hover:border-amber-400/50 hover:bg-amber-400/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                        }`}
                      >
                        <span className="hidden min-[380px]:inline">NEXT</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* SECTION 7: BOTTOM RETURN RAIL & COLLABORATION CTA */}
          <section className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-6 border-t border-white/10 font-mono text-xs">
            <Link
              href="/#experience"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 sm:py-2.5 text-slate-300 hover:text-white transition-all"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" />
              <span>RETURN TO CAREER TRAJECTORY</span>
            </Link>

            <div className="flex items-center">
              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/40 bg-amber-500/15 hover:bg-amber-500/25 px-5 py-3 sm:py-2.5 font-bold text-amber-200 hover:text-white transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                <span>INITIATE RESEARCH COLLABORATION</span>
                <ArrowUpRight className="h-4 w-4 text-amber-400 shrink-0" />
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* 5. Floating Interactive 3D Particle Controller HUD */}
      <ParticleControllerHUD
        formationMode={formationMode}
        onSelectFormation={setFormationMode}
        turbulence={turbulence}
        onChangeTurbulence={setTurbulence}
        onTriggerPulse={handleTriggerPulse}
        telemetry={telemetry}
      />

      {/* 6. Interactive Futuristic 3D Book-Turning PDF Modal */}
      <PaperFlipbookModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        title={pub.title}
        pdfUrl={pub.pdfUrl || "/papers/jaic-2025/Jurnal.pdf"}
        totalPages={14}
      />
    </div>
  );
}
