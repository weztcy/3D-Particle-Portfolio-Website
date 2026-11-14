"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";

interface ProjectTechStackProps {
  techStack: string[];
  accent: {
    techDot: string;
  };
}

export const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ techStack, accent }) => {
  const measureRef = useRef<HTMLDivElement>(null);
  // visibleCount represents how many items fit in the first 2 lines
  const [visibleCount, setVisibleCount] = useState<number>(techStack.length);

  const updateVisibleItems = () => {
    const container = measureRef.current;
    if (!container) return;

    const itemElements = Array.from(container.children) as HTMLElement[];
    if (itemElements.length === 0) return;

    // Detect unique line positions based on offsetTop
    const lineTops: number[] = [];

    for (let i = 0; i < itemElements.length; i++) {
      const top = itemElements[i].offsetTop;
      const found = lineTops.some((t) => Math.abs(t - top) < 4);
      if (!found) {
        lineTops.push(top);
      }
    }

    lineTops.sort((a, b) => a - b);

    // If all items fit within <= 2 lines, show all
    if (lineTops.length <= 2) {
      setVisibleCount(techStack.length);
      return;
    }

    // Items that fit within line 0 and line 1
    const firstTwoLinesThreshold = lineTops[1] + 4;
    let count = 0;
    for (let i = 0; i < itemElements.length; i++) {
      if (itemElements[i].offsetTop <= firstTwoLinesThreshold) {
        count++;
      } else {
        break;
      }
    }

    setVisibleCount(count);
  };

  useLayoutEffect(() => {
    updateVisibleItems();
  }, [techStack]);

  useEffect(() => {
    updateVisibleItems();

    const handleResize = () => {
      updateVisibleItems();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [techStack]);

  const hiddenCount = techStack.length - visibleCount;

  return (
    <div className="relative w-full">
      {/* Invisible measurement container: always renders ALL techStack items to calculate exact line wrapping */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="invisible pointer-events-none absolute inset-x-0 top-0 flex flex-wrap gap-1.5 items-center z-[-1]"
      >
        {techStack.map((tech) => (
          <span
            key={`m-${tech}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px]"
          >
            <span className="h-1 w-1 rounded-full" />
            <span>{tech}</span>
          </span>
        ))}
      </div>

      {/* Actual visible layout */}
      <div className="flex flex-wrap gap-1.5 items-center">
        {techStack.slice(0, visibleCount).map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-200 hover:border-white/20 transition-colors"
          >
            <span className={`h-1 w-1 rounded-full ${accent.techDot} opacity-80`} />
            <span>{tech}</span>
          </span>
        ))}

        {/* Baris ketiga hanya +XX more jika melebihi 2 baris */}
        {hiddenCount > 0 && (
          <div className="w-full flex items-center pt-0.5">
            <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-300">
              +{hiddenCount} more
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
