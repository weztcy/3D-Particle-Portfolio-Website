"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Layers,
  ScrollText,
  CheckCircle2,
} from "lucide-react";
import { PROFILE_DATA } from "@/data";

export default function CvPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"reader" | "scroll">("scroll");
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const totalPages = 3;
  const pdfUrl = "/cv/CV%20Yohanes%20Dimas%20Pratama.pdf";

  // Drag-to-scroll for Slide View (Vertical only, horizontal locked)
  const [isSlideDragging, setIsSlideDragging] = useState<boolean>(false);
  const slideDragRef = useRef<{ startY: number; startScrollTop: number }>({
    startY: 0,
    startScrollTop: 0,
  });

  // Drag-to-scroll for Scroll All View
  const [isScrollDragging, setIsScrollDragging] = useState<boolean>(false);
  const scrollDragRef = useRef<{ startY: number; startScrollTop: number }>({
    startY: 0,
    startScrollTop: 0,
  });

  const pageContainerRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // True Browser Fullscreen API Toggle
  const toggleFullscreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        if (pageContainerRef.current?.requestFullscreen) {
          await pageContainerRef.current.requestFullscreen();
        } else if ((pageContainerRef.current as any)?.webkitRequestFullscreen) {
          await (pageContainerRef.current as any).webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (err) {
      console.warn("Fullscreen toggle warning:", err);
    }
  }, []);

  // Sync fullscreen state with native browser events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Navigation handlers
  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev >= totalPages) return prev;
      if (slideContainerRef.current) {
        slideContainerRef.current.scrollTop = 0;
      }
      return Math.min(totalPages, prev + 1);
    });
  }, [totalPages]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev <= 1) return prev;
      if (slideContainerRef.current) {
        slideContainerRef.current.scrollTop = 0;
      }
      return Math.max(1, prev - 1);
    });
  }, []);

  // Scroll to page in Scroll All mode
  const scrollToPage = useCallback((pageNum: number) => {
    const targetPage = Math.max(1, Math.min(totalPages, pageNum));
    setCurrentPage(targetPage);
    if (viewMode === "scroll" && scrollContainerRef.current) {
      const pageEl = document.getElementById(`cv-page-card-${targetPage}`);
      if (pageEl) {
        pageEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [viewMode, totalPages]);

  // Universal next/prev for both modes
  const handleNext = () => {
    if (viewMode === "reader") {
      goToNextPage();
    } else {
      scrollToPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (viewMode === "reader") {
      goToPrevPage();
    } else {
      scrollToPage(currentPage - 1);
    }
  };

  // Keyboard navigation: Left/Right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        handleNext();
      }
      if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, currentPage]);

  // Track active page while scrolling in Scroll All view
  useEffect(() => {
    if (viewMode !== "scroll") return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPos = container.scrollTop + container.clientHeight / 3;
      for (let i = totalPages; i >= 1; i--) {
        const el = document.getElementById(`cv-page-card-${i}`);
        if (el && el.offsetTop <= scrollPos) {
          setCurrentPage(i);
          break;
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [viewMode, totalPages]);

  // Pointer drag-to-scroll for Slide View (Vertical only, horizontal locked)
  const handleSlidePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;

    setIsSlideDragging(true);
    slideDragRef.current = {
      startY: e.clientY,
      startScrollTop: slideContainerRef.current?.scrollTop || 0,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handleSlidePointerMove = (e: React.PointerEvent) => {
    if (!isSlideDragging || !slideContainerRef.current) return;
    const deltaY = e.clientY - slideDragRef.current.startY;
    slideContainerRef.current.scrollTop = slideDragRef.current.startScrollTop - deltaY;
  };

  const handleSlidePointerUp = (e: React.PointerEvent) => {
    if (!isSlideDragging) return;
    setIsSlideDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Pointer drag-to-scroll for Scroll All View
  const handleScrollPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) return;

    setIsScrollDragging(true);
    scrollDragRef.current = {
      startY: e.clientY,
      startScrollTop: scrollContainerRef.current?.scrollTop || 0,
    };
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handleScrollPointerMove = (e: React.PointerEvent) => {
    if (!isScrollDragging || !scrollContainerRef.current) return;
    const deltaY = e.clientY - scrollDragRef.current.startY;
    scrollContainerRef.current.scrollTop = scrollDragRef.current.startScrollTop - deltaY;
  };

  const handleScrollPointerUp = (e: React.PointerEvent) => {
    if (!isScrollDragging) return;
    setIsScrollDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      ref={pageContainerRef}
      className="fixed inset-0 z-50 flex flex-col bg-[#05070D] text-slate-100 select-none overflow-hidden"
    >
      {/* 1. TACTICAL HUD HEADER BAR */}
      <header className="relative z-30 shrink-0 flex flex-wrap items-center justify-between gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 border-b border-sky-400/25 bg-black/85 backdrop-blur-xl font-mono text-xs shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
        {/* Left: Navigation back & Document Info */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
          <Link
            href="/"
            className="group flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all text-xs font-semibold shrink-0"
            title="Return to Portfolio Homepage"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5 text-sky-400" />
            <span className="hidden sm:inline">RETURN</span>
          </Link>

          <div className="relative hidden xs:flex sm:flex h-8 w-8 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-500/15 text-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.3)] shrink-0">
            <FileText className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-sky-300 text-[11px] sm:text-sm tracking-wider truncate sm:whitespace-nowrap">
                [ EXECUTIVE DOSSIER // CURRICULUM VITAE ]
              </span>
              <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] text-emerald-400 font-bold whitespace-nowrap">
                <CheckCircle2 className="h-2.5 w-2.5" />
                ATS-OPTIMIZED · VERIFIED
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-300 font-sans font-medium leading-snug truncate sm:whitespace-normal">
              CV Yohanes Dimas Pratama · {PROFILE_DATA.title}
            </p>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 w-full sm:w-auto pt-1.5 sm:pt-0 border-t border-white/10 sm:border-0 shrink-0">
          {/* View Mode Switcher (Scroll All vs Slide View) */}
          <div className="inline-flex items-center gap-1 bg-black/60 rounded-xl p-1 border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode("scroll")}
              className={`inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                viewMode === "scroll"
                  ? "bg-sky-400/20 text-sky-300 border border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Scroll All View (Continuous All Pages)"
            >
              <ScrollText className="h-3 w-3" />
              <span className="hidden sm:inline">SCROLL ALL</span>
              <span className="sm:hidden">SCROLL</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("reader")}
              className={`inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                viewMode === "reader"
                  ? "bg-sky-400/20 text-sky-300 border border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.25)]"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Slide View (Single Page, Drag Up/Down)"
            >
              <Layers className="h-3 w-3" />
              <span className="hidden sm:inline">SLIDE VIEW</span>
              <span className="sm:hidden">SLIDE</span>
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center gap-0.5 sm:gap-1 bg-black/60 rounded-xl p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(0.75, Number((z - 0.15).toFixed(2))))}
                className="p-1 sm:p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="h-3.5 w-3.5" />
              </button>
              <span className="px-1 text-[10px] font-mono text-slate-300 min-w-[34px] sm:min-w-[38px] text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(2.0, Number((z + 0.15).toFixed(2))))}
                className="p-1 sm:p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="h-3.5 w-3.5" />
              </button>
              {zoomLevel !== 1 && (
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="p-1 sm:p-1.5 rounded-lg text-sky-400 hover:text-sky-300 hover:bg-white/10 transition-colors"
                  title="Reset Zoom"
                >
                  <RotateCcw className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* True Fullscreen Toggle */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className={`p-1.5 sm:p-2 rounded-xl border transition-all ${
                isFullscreen
                  ? "border-sky-400/50 bg-sky-400/20 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.3)]"
                  : "border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
              }`}
              title={isFullscreen ? "Exit Fullscreen (Esc)" : "Fullscreen Mode"}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>

            {/* Raw PDF Download */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-sky-400/50 bg-sky-400/15 hover:bg-sky-400/30 px-3.5 py-1.5 text-xs font-bold text-sky-300 hover:text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              title="Open or Save Raw PDF Document"
            >
              <span>RAW PDF</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. FLOATING NAVIGATION ARROWS (LEFT & RIGHT - Desktop & Tablet sm+) */}
      {/* Previous Page Arrow (LEFT) */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={currentPage <= 1}
        className={`hidden sm:flex absolute left-4 sm:left-6 md:left-10 lg:left-16 xl:left-20 top-1/2 -translate-y-1/2 z-30 h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border transition-all select-none ${
          currentPage <= 1
            ? "opacity-20 cursor-not-allowed border-white/5 bg-black/40 text-slate-600"
            : "border-sky-400/50 bg-black/85 backdrop-blur-xl text-sky-300 hover:border-sky-400 hover:bg-sky-400/20 hover:scale-110 shadow-[0_0_30px_rgba(56,189,248,0.35)] active:scale-95 cursor-pointer"
        }`}
        title="Previous Page (Left Arrow)"
      >
        <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      {/* Next Page Arrow (RIGHT) */}
      <button
        type="button"
        onClick={handleNext}
        disabled={currentPage >= totalPages}
        className={`hidden sm:flex absolute right-4 sm:right-6 md:right-10 lg:right-16 xl:right-20 top-1/2 -translate-y-1/2 z-30 h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border transition-all select-none ${
          currentPage >= totalPages
            ? "opacity-20 cursor-not-allowed border-white/5 bg-black/40 text-slate-600"
            : "border-sky-400/50 bg-black/85 backdrop-blur-xl text-sky-300 hover:border-sky-400 hover:bg-sky-400/20 hover:scale-110 shadow-[0_0_30px_rgba(56,189,248,0.35)] active:scale-95 cursor-pointer"
        }`}
        title="Next Page (Right Arrow)"
      >
        <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>

      {/* 3. MAIN READING STAGE */}
      {viewMode === "reader" ? (
        /* ==================== SLIDE VIEW (VERTICAL DRAG-TO-SCROLL, HORIZONTAL LOCKED) ==================== */
        <main
          ref={slideContainerRef}
          onPointerDown={handleSlidePointerDown}
          onPointerMove={handleSlidePointerMove}
          onPointerUp={handleSlidePointerUp}
          onPointerCancel={handleSlidePointerUp}
          className={`relative flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden p-3 sm:p-6 md:p-8 select-none ${
            isSlideDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {/* Ambient Sci-Fi Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[70vh] w-[80vw] rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 blur-3xl opacity-50" />
          </div>

          {/* Horizontally Centered Stage (Left/Right stays still, vertical draggable) */}
          <div
            className="max-w-3xl mx-auto py-4 px-2 transition-transform duration-150 flex flex-col items-center"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: "top center",
            }}
          >
            {/* Outer High-Tech Paper Frame */}
            <div className="relative w-full rounded-2xl p-2.5 sm:p-3.5 bg-[#0C101C]/90 border border-sky-500/35 shadow-[0_24px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(56,189,248,0.18)] backdrop-blur-xl">
              {/* Optical Viewfinder Corner Notches */}
              <div className="pointer-events-none absolute top-2 left-2 h-3.5 w-3.5 border-t-2 border-l-2 border-sky-400 z-20" />
              <div className="pointer-events-none absolute top-2 right-2 h-3.5 w-3.5 border-t-2 border-r-2 border-sky-400 z-20" />
              <div className="pointer-events-none absolute bottom-2 left-2 h-3.5 w-3.5 border-b-2 border-l-2 border-sky-400 z-20" />
              <div className="pointer-events-none absolute bottom-2 right-2 h-3.5 w-3.5 border-b-2 border-r-2 border-sky-400 z-20" />

              {/* Document Sheet (Clean, without tags overlay) */}
              <div className="relative rounded-xl overflow-hidden bg-white shadow-xl">
                {/* Clean Paper Gradient Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.03] z-10" />

                {/* Rendered Crisp Page Image */}
                <img
                  src={`/cv/pages/page-${currentPage}.webp`}
                  alt={`CV Yohanes Dimas Pratama - Page ${currentPage}`}
                  className="w-full h-auto block pointer-events-none select-none"
                  loading="eager"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* ==================== SCROLL ALL MODE (DRAG-TO-SCROLL WITH CURSOR) ==================== */
        <main
          ref={scrollContainerRef}
          onPointerDown={handleScrollPointerDown}
          onPointerMove={handleScrollPointerMove}
          onPointerUp={handleScrollPointerUp}
          onPointerCancel={handleScrollPointerUp}
          className={`relative flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden p-3 sm:p-6 md:p-8 select-none ${
            isScrollDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {/* Ambient Sci-Fi Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[70vh] w-[80vw] rounded-full bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-emerald-500/10 blur-3xl opacity-50" />
          </div>

          {/* Clean Scroll Column Starting at Top Without Any Clipping */}
          <div
            className="max-w-3xl mx-auto space-y-8 pb-16 pt-2 transition-transform duration-150"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: "top center",
            }}
          >
            {pageNumbers.map((pageNum) => (
              <div
                key={pageNum}
                id={`cv-page-card-${pageNum}`}
                className="relative rounded-2xl p-2.5 sm:p-3.5 bg-[#0C101C]/90 border border-sky-500/30 shadow-[0_20px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              >
                {/* Optical Viewfinder Corner Notches */}
                <div className="pointer-events-none absolute top-2 left-2 h-3.5 w-3.5 border-t-2 border-l-2 border-sky-400 z-20" />
                <div className="pointer-events-none absolute top-2 right-2 h-3.5 w-3.5 border-t-2 border-r-2 border-sky-400 z-20" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-3.5 w-3.5 border-b-2 border-l-2 border-sky-400 z-20" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-3.5 w-3.5 border-b-2 border-r-2 border-sky-400 z-20" />

                {/* Natural Full Unclipped Image */}
                <div className="relative rounded-xl overflow-hidden bg-white shadow-xl">
                  <img
                    src={`/cv/pages/page-${pageNum}.webp`}
                    alt={`CV Yohanes Dimas Pratama - Page ${pageNum}`}
                    className="w-full h-auto block select-none pointer-events-none"
                    loading={pageNum === 1 ? "eager" : "lazy"}
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* 4. TACTICAL HUD FOOTER BAR */}
      <footer className="relative z-30 shrink-0 px-3 sm:px-6 py-2 sm:py-2.5 border-t border-sky-400/25 bg-black/90 backdrop-blur-xl flex items-center justify-between gap-2 sm:gap-3 font-mono text-xs">
        {/* Left: Guidance Status (Visible on sm+ to prevent mobile collision) */}
        <div className="hidden sm:flex items-center gap-2 text-slate-400 text-[11px] truncate max-w-[38%]">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse shrink-0" />
          <span className="truncate">
            DRAG CURSOR UP/DOWN TO SCROLL · USE ARROWS TO TURN PAGES
          </span>
        </div>

        {/* Mobile Interactive Page Switcher + Desktop Dead-Center Page Badge */}
        <div className="flex items-center gap-1.5 sm:pointer-events-none sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:justify-center">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentPage <= 1}
            className="sm:hidden flex h-8 w-8 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-400/10 text-sky-300 disabled:opacity-25 active:scale-95 transition-all"
            aria-label="Previous Page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="pointer-events-auto px-3 sm:px-4 py-1 rounded-xl bg-sky-400/20 border border-sky-400/40 text-sky-300 font-bold tracking-wider shadow-[0_0_15px_rgba(56,189,248,0.25)] flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-[11px] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>PAGE 0{currentPage} / 0{totalPages}</span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage >= totalPages}
            className="sm:hidden flex h-8 w-8 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-400/10 text-sky-300 disabled:opacity-25 active:scale-95 transition-all"
            aria-label="Next Page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 text-[11px] text-slate-400 shrink-0">
          <span className="text-slate-300 font-mono hidden md:inline">
            ATS FORMAT · 2026
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg sm:rounded-none border border-sky-400/35 sm:border-0 bg-sky-400/10 sm:bg-transparent px-2.5 py-1 sm:p-0 text-sky-300 sm:text-sky-400 hover:text-sky-300 sm:hover:underline flex items-center gap-1 font-semibold"
          >
            <span>RAW PDF</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </footer>
    </div>
  );
}

