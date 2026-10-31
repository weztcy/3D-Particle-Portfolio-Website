"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Command,
  Copy,
  Cpu,
  FileText,
  Layers,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { PROFILE_DATA, ParticleFormation } from "@/data";

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  isScrollSync?: boolean;
  onToggleScrollSync?: () => void;
  onSelectFormation: (mode: ParticleFormation) => void;
  onTriggerPulse: () => void;
  onOpenResume: () => void;
}

export default function CommandPaletteModal({
  isOpen,
  onClose,
  isScrollSync = true,
  onToggleScrollSync,
  onSelectFormation,
  onTriggerPulse,
  onOpenResume,
}: CommandPaletteModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: "nav-hero",
      category: "Navigation",
      label: "Go to Overview & Neural Manifold",
      icon: ArrowRight,
      run: () => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-domains",
      category: "Navigation",
      label: "Go to 4 Core Engineering Domains & Stack Matrix",
      icon: Layers,
      run: () => {
        document
          .getElementById("domains")
          ?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-projects",
      category: "Navigation",
      label: "Go to Selected Works & Production Case Studies",
      icon: Cpu,
      run: () => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-certifications",
      category: "Navigation",
      label: "Go to Professional Certifications & Credentials",
      icon: Sparkles,
      run: () => {
        document
          .getElementById("certifications")
          ?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "nav-exp",
      category: "Navigation",
      label: "Go to Career Trajectory & Publications",
      icon: ArrowRight,
      run: () => {
        document
          .getElementById("experience")
          ?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "3d-toggle-sync",
      category: "3D WebGL Engine",
      label: isScrollSync
        ? "Disable Scroll Sync (Lock Current 3D Topology)"
        : "Enable Autonomous Scroll Sync (Auto-Morph per Section)",
      icon: Layers,
      run: () => {
        onToggleScrollSync?.();
        onTriggerPulse();
        onClose();
      },
    },
    {
      id: "3d-wave",
      category: "3D WebGL Engine",
      label: "Morph 3D Particles → Harmonic Tensor Wave (M-01)",
      icon: Sparkles,
      run: () => {
        onSelectFormation("wave");
        onTriggerPulse();
        onClose();
      },
    },
    {
      id: "3d-neural",
      category: "3D WebGL Engine",
      label: "Morph 3D Particles → Neural Attention Torus (M-02)",
      icon: Sparkles,
      run: () => {
        onSelectFormation("neural");
        onTriggerPulse();
        onClose();
      },
    },
    {
      id: "3d-clusters",
      category: "3D WebGL Engine",
      label: "Morph 3D Particles → High-Dimensional Latent UMAP (M-03)",
      icon: Sparkles,
      run: () => {
        onSelectFormation("clusters");
        onTriggerPulse();
        onClose();
      },
    },
    {
      id: "3d-helix",
      category: "3D WebGL Engine",
      label: "Morph 3D Particles → Dual-Strand Data Helix (M-04)",
      icon: Sparkles,
      run: () => {
        onSelectFormation("helix");
        onTriggerPulse();
        onClose();
      },
    },
    {
      id: "3d-sphere",
      category: "3D WebGL Engine",
      label: "Morph 3D Particles → Geodesic Singularity Sphere (M-05)",
      icon: Sparkles,
      run: () => {
        onSelectFormation("sphere");
        onTriggerPulse();
        onClose();
      },
    },
    {
      id: "doc-resume",
      category: "Executive Dossier",
      label: "Open Executive CV & Engineering Dossier",
      icon: FileText,
      run: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: "copy-email",
      category: "Direct Contact",
      label: `Copy Email (${PROFILE_DATA.email})`,
      icon: Copy,
      run: () => {
        navigator.clipboard.writeText(PROFILE_DATA.email);
        onTriggerPulse();
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.label.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-28 px-3 sm:px-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#0C0F17] shadow-[0_24px_80px_rgba(0,0,0,0.9)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="flex items-center gap-2.5 sm:gap-3 border-b border-white/10 px-3.5 sm:px-4 py-3 sm:py-3.5">
          <Search className="h-4 w-4 text-sky-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commands, sections, or 3D formations..."
            className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none min-w-0"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-white/5 hover:text-white shrink-0"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-[65vh] sm:max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center font-mono text-xs text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.run}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 rounded-xl px-3 sm:px-3.5 py-2.5 text-left text-xs sm:text-sm text-slate-300 hover:bg-sky-400/15 hover:text-white transition-colors group"
                >
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                    <Icon className="h-4 w-4 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
                    <span className="leading-snug">{item.label}</span>
                  </div>
                  <span className="pl-6 sm:pl-0 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-sky-300 shrink-0">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-3.5 sm:px-4 py-2 font-mono text-[10px] sm:text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5">
            <Command className="h-3 w-3 text-sky-400" />
            YDP COMMAND INTERFACE
          </span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}

