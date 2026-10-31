"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import SynapticParticleCanvas, {
  TelemetryData,
} from "@/components/canvas/SynapticParticleCanvas";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DomainsSection from "@/components/DomainsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ParticleControllerHUD from "@/components/ParticleControllerHUD";
import CommandPaletteModal from "@/components/CommandPaletteModal";
import { ParticleFormation } from "@/data";

const SECTION_FORMATION_MAP: Record<
  string,
  Exclude<ParticleFormation, "auto">
> = {
  hero: "wave",
  domains: "neural",
  projects: "clusters",
  certifications: "helix",
  experience: "neural",
  contact: "sphere",
};

export default function PortfolioPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("hero");
  // Scroll sync stays active by default even when clicking 3D mode buttons; can still be toggled manually
  const [isScrollSync, setIsScrollSync] = useState<boolean>(true);
  const [activeFormation, setActiveFormation] =
    useState<Exclude<ParticleFormation, "auto">>("wave");
  const [turbulence, setTurbulence] = useState<number>(1.0);
  const [pulseTrigger, setPulseTrigger] = useState<number>(0);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);

  const lastSectionRef = useRef<string>("hero");
  const isScrollSyncRef = useRef<boolean>(true);
  isScrollSyncRef.current = isScrollSync;

  const handleOpenResume = useCallback(() => {
    router.push("/cv");
  }, [router]);

  const [telemetry, setTelemetry] = useState<TelemetryData>({
    fps: 60,
    particleCount: 18432,
    activeFormation: "wave",
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

  const handleSelectFormation = useCallback(
    (mode: ParticleFormation) => {
      if (mode === "auto") {
        setIsScrollSync(true);
        const mapped = SECTION_FORMATION_MAP[activeSection] || "wave";
        setActiveFormation(mapped);
      } else {
        // Change 3D particle mode immediately without disabling scroll sync
        setActiveFormation(mode);
      }
    },
    [activeSection]
  );

  const handleToggleScrollSync = useCallback(() => {
    setIsScrollSync((prev) => {
      const next = !prev;
      if (next) {
        // Immediately sync formation with currently active section
        const mapped = SECTION_FORMATION_MAP[activeSection] || "wave";
        setActiveFormation(mapped);
      }
      return next;
    });
  }, [activeSection]);

  // Global keyboard shortcut for Command Palette (Ctrl+K / Cmd+K)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Scroll-spy observer to choreograph active section & automatic 3D particle formation
  useEffect(() => {
    const sectionIds = [
      "hero",
      "domains",
      "projects",
      "certifications",
      "experience",
      "contact",
    ];

    const handleScrollSpy = () => {
      const viewportMiddle = window.scrollY + window.innerHeight * 0.38;
      let currentId = "hero";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (viewportMiddle >= top) {
            currentId = id;
          }
        }
      }

      setActiveSection(currentId);

      // When crossing into a different section, sync formation if scroll sync is active
      if (currentId !== lastSectionRef.current) {
        lastSectionRef.current = currentId;
        if (isScrollSyncRef.current) {
          const mappedFormation = SECTION_FORMATION_MAP[currentId] || "wave";
          setActiveFormation(mappedFormation);
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#06070A] text-slate-100 selection:bg-sky-400/30">
      {/* Persistent 3D WebGL Point-Cloud & Synaptic Network Canvas */}
      <SynapticParticleCanvas
        formationMode={isScrollSync ? "auto" : activeFormation}
        scrollActiveFormation={activeFormation}
        turbulence={turbulence}
        pulseTrigger={pulseTrigger}
        onTelemetryUpdate={handleTelemetryUpdate}
      />

      {/* Subtle Architectural Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] bg-grid-pattern bg-[size:64px_64px] opacity-30" />

      {/* Floating Glassmorphic Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResume={handleOpenResume}
      />

      {/* Foreground Scrollytelling Content */}
      <main className="relative z-10">
        <HeroSection
          formationMode={isScrollSync ? "auto" : activeFormation}
          isScrollSync={isScrollSync}
          onToggleScrollSync={handleToggleScrollSync}
          onSelectFormation={handleSelectFormation}
          onTriggerPulse={handleTriggerPulse}
          onOpenResume={handleOpenResume}
          telemetry={telemetry}
        />

        <DomainsSection
          onSelectFormation={handleSelectFormation}
          onTriggerPulse={handleTriggerPulse}
        />

        <ProjectsSection onTriggerPulse={handleTriggerPulse} />

        <CertificationsSection onTriggerPulse={handleTriggerPulse} />

        <ExperienceSection />

        <ContactSection
          onTriggerPulse={handleTriggerPulse}
          onOpenResume={handleOpenResume}
        />
      </main>

      {/* Bottom-Right Interactive 3D Particle Engine HUD */}
      <ParticleControllerHUD
        formationMode={isScrollSync ? "auto" : activeFormation}
        isScrollSync={isScrollSync}
        onToggleScrollSync={handleToggleScrollSync}
        onSelectFormation={(mode) => {
          handleSelectFormation(mode);
          handleTriggerPulse();
        }}
        turbulence={turbulence}
        onChangeTurbulence={setTurbulence}
        onTriggerPulse={handleTriggerPulse}
        telemetry={telemetry}
      />

      {/* Interactive Command Palette Modal (Ctrl+K / Cmd+K) */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        isScrollSync={isScrollSync}
        onToggleScrollSync={handleToggleScrollSync}
        onSelectFormation={handleSelectFormation}
        onTriggerPulse={handleTriggerPulse}
        onOpenResume={handleOpenResume}
      />
    </div>
  );
}

