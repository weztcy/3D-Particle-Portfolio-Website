"use client";

import React, { useState, useEffect } from "react";
import {
  Command,
  FileText,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  BrainCircuit,
} from "lucide-react";
import { PROFILE_DATA } from "@/data";

interface NavbarProps {
  activeSection: string;
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { id: "hero", label: "Overview", index: "00" },
  { id: "domains", label: "Domains", index: "01" },
  { id: "projects", label: "Projects", index: "02" },
  { id: "certifications", label: "Certifications", index: "03" },
  { id: "experience", label: "Trajectory", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

function Navbar({
  activeSection,
  onOpenCommandPalette,
  onOpenResume,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 lg:px-10 pt-3 sm:pt-4 pointer-events-none">
      <div
        className={`mx-auto max-w-[1380px] pointer-events-auto transition-all duration-300 rounded-2xl border ${
          scrolled
            ? "bg-[#0C0F17]/85 border-white/10 backdrop-blur-xl shadow-[0_16px_48px_rgba(0,0,0,0.65)] py-2 sm:py-2.5 px-3 sm:px-5"
            : "bg-[#0C0F17]/60 border-white/[0.07] backdrop-blur-md py-2.5 sm:py-3 px-3 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Identity */}
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none min-w-0"
          >
            <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl border border-sky-400/30 bg-gradient-to-br from-sky-500/20 via-indigo-500/15 to-transparent text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.15)] group-hover:border-sky-400/60 transition-all">
              <BrainCircuit className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-sky-400" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border border-[#06070A]" />
              </span>
            </div>
            <div className="min-w-0">
              <div className="font-display text-xs sm:text-sm font-bold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors truncate">
                {PROFILE_DATA.name}
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-slate-400 truncate">
                WEB · DATA · AI · ML
              </div>
            </div>
          </button>

          {/* Center Navigation Pill */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-xl border border-white/[0.06] bg-black/30 p-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-1 xl:gap-1.5 rounded-lg px-2.5 xl:px-3.5 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white/10 text-white shadow-[0_0_16px_rgba(56,189,248,0.2)]"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-sky-400" : "text-slate-500"
                    }`}
                  >
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1 w-1 rounded-full bg-sky-400" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions + Hamburger Container */}
          <div className="flex items-center gap-1.5 sm:gap-2 xl:gap-2.5 shrink-0">
            <div className="hidden sm:flex items-center gap-2 xl:gap-2.5">
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 xl:gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-2.5 xl:px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-sky-400/40 hover:bg-white/[0.07] hover:text-white transition-all shrink-0"
                title="Open Command Palette (Ctrl+K)"
              >
                <Command className="h-3.5 w-3.5 text-sky-400" />
                <span className="hidden xl:inline text-slate-400">Command</span>
                <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-slate-300">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 xl:px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white transition-all shrink-0"
                title="Open CV Dossier"
              >
                <FileText className="h-3.5 w-3.5 text-indigo-400" />
                <span>
                  CV<span className="hidden xl:inline"> Dossier</span>
                </span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group relative inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 px-3.5 xl:px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.3)] hover:shadow-[0_0_32px_rgba(56,189,248,0.5)] transition-all shrink-0"
              >
                <span>
                  Initiate<span className="hidden xl:inline"> Project</span>
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile & Tablet Hamburger Trigger */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
              <button
                onClick={onOpenCommandPalette}
                className="sm:hidden flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sky-400 active:scale-95 transition-transform"
                aria-label="Open Command Palette"
              >
                <Sparkles className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white active:scale-95 transition-all"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="mt-3 pt-3 border-t border-white/10 lg:hidden flex flex-col gap-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-sky-400/15 text-sky-300 border border-sky-400/30"
                        : "text-slate-300 hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="font-mono text-[10px] text-sky-400">
                        {item.index}
                      </span>
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    )}
                  </button>
                );
              })}
            </div>
            {/* Only show CTA row inside drawer on <sm where top-bar CTAs are hidden */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 sm:hidden">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-medium text-slate-200"
              >
                <FileText className="h-3.5 w-3.5 text-indigo-400" />
                CV Dossier
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 py-2.5 text-xs font-semibold text-slate-950"
              >
                Initiate Project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default React.memo(Navbar);
