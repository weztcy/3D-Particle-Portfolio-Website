"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";

interface ProjectTechStackProps {
  techStack: string[];
  accent: {
    techDot: string;
  };
}

export const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ techStack, accent }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // visibleCount represents how many items fit in the first 2 lines
  const [visibleCount, setVisibleCount] = useState<number>(techStack.length);

  const updateVisibleItems = () => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    // We filter for span elements that represent tech items (ignore the +more badge)
    const itemElements = children.filter((el) => el.getAttribute("data-tech-item") === "true");
    if (itemElements.length === 0) return;

    // Detect line positions based on offsetTop
    const lineTops: number[] = [];
    const itemLines: number[] = [];

    for (let i = 0; i < itemElements.length; i++) {
      const top = itemElements[i].offsetTop;
      let lineIndex = lineTops.findIndex((t) => Math.abs(t - top) < 4);
      if (lineIndex === -1) {
        lineTops.push(top);
        lineIndex = lineTops.length - 1;
      }
      itemLines.push(lineIndex);
    }

    // lineTops sorted by top position
    lineTops.sort((a, b) => a - b);

    // If all items fit within <= 2 lines, show all
    if (lineTops.length <= 2) {
      setVisibleCount(techStack.length);
      return;
    }

    // Items that are on line index 0 or 1 (the first 2 lines)
    const firstTwoLinesTopThreshold = lineTops[1] + 4;
    let countInFirstTwoLines = 0;
    for (let i = 0; i < itemElements.length; i++) {
      if (itemElements[i].offsetTop <= firstTwoLinesTopThreshold) {
        countInFirstTwoLines++;
      } else {
        break;
      }
    }

    setVisibleCount(countInFirstTwoLines);
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
    <div ref={containerRef} className="flex flex-wrap gap-1.5 items-center">
      {techStack.map((tech, idx) => {
        const isHidden = idx >= visibleCount;
        return (
          <span
            key={tech}
            data-tech-item="true"
            className={`${
              isHidden ? "hidden" : "inline-flex"
            } items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-200 hover:border-white/20 transition-colors`}
          >
            <span className={`h-1 w-1 rounded-full ${accent.techDot} opacity-80`} />
            <span>{tech}</span>
          </span>
        );
      })}

      {/* Baris ketiga hanya +XX more jika melebihi 2 baris */}
      {hiddenCount > 0 && (
        <div className="w-full flex items-center pt-0.5">
          <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 font-mono text-[10px] font-semibold text-slate-300">
            +{hiddenCount} more
          </span>
        </div>
      )}
    </div>
  );
};
