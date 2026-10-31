# Project Case Study Data Template

This document provides a production-grade blueprint and TypeScript template for adding or updating project case studies in [`src/data/projects/projectsData.ts`](file:///d:/GitHub/3D%20Particle%20Portfolio%20Website/src/data/projects/projectsData.ts), strictly adhering to the updated [`ProjectCaseStudy`](file:///d:/GitHub/3D%20Particle%20Portfolio%20Website/src/data/types.ts) interface.

---

## 1. Category Constants & Accent Matrix

Select the matching `category`, `categoryLabel`, `accentColor`, and registry `code` format before configuring project data:

| Category Slug (`category`) | Category Display Label (`categoryLabel`) | Accent Color (`accentColor`) | Registry Code Format |
| :--- | :--- | :---: | :--- |
| `"web-development"` | `"Web Development"` | `"cyan"` | `"PRO-XX // WEB-XX"` |
| `"data-analysis"` | `"Data Analytics"` | `"emerald"` | `"PRO-XX // DATA-XX"` |
| `"ai-ml"` | `"AI & Machine Learning"` | `"indigo"` | `"PRO-XX // AI-XX"` |
| `"desktop-mobile"` | `"Desktop & Mobile App"` | `"amber"` | `"PRO-XX // APP-XX"` |
| `"ui-ux"` | `"UI/UX Design"` | `"fuchsia"` | `"PRO-XX // UX-XX"` |
| `"code-learning"` | `"Code Learning"` | `"teal"` | `"PRO-XX // LEARN-XX"` |

---

## 2. Array Flexibility Rules (No Min/Max Limits)

The portfolio frontend at [`src/app/projects/[id]/page.tsx`](file:///d:/GitHub/3D%20Particle%20Portfolio%20Website/src/app/projects/%5Bid%5D/page.tsx) renders all list sections dynamically. **There are NO rigid minimum or maximum constraints** on array lengths. Scale the number of elements according to the authentic technical scope of each project:

- **`objectives` (`TARGET & OBJECTIVES`)**: Flexible count of technical targets and problem mitigation goals.
- **`features` (`[ 02 // KEY CAPABILITIES & SYSTEM HIGHLIGHTS ]`)**: Flexible count of distinct capability nodes (`{ title, description, badge }`).
- **`pipelineSteps` (`[ 03 // EXECUTION PIPELINE & ARCHITECTURAL PROTOCOL ]`)**: Flexible count of chronological execution stages (`{ step, detail, latencyOrMetric }`).
- **`techStack` (`[ 04 // HARDWARE & SOFTWARE SPECIFICATIONS ]`)**: Flexible count of hardware, software, libraries, and frameworks deployed.
- **`outcomes` (`KEY PROJECT DELIVERABLES & MEASURED IMPACT`)**: Flexible count of validated milestones and empirical impact statements.

---

## 3. Production TypeScript Template (Ready to Copy)

Copy the block below and paste it directly into the `PROJECT_CASE_STUDIES` array in [`src/data/projects/projectsData.ts`](file:///d:/GitHub/3D%20Particle%20Portfolio%20Website/src/data/projects/projectsData.ts):

```typescript
  {
    // Unique URL slug for route: /projects/[id]
    id: "project-slug-identifier",

    // Architectural registry code (e.g., PRO-01 // WEB-01)
    code: "PRO-XX // CAT-XX",

    // High-impact title: "[Product Name]: [Technical Scope & Value Proposition]"
    title: "Project Name: Technical Descriptor and Primary Capability",

    // Category enum slug
    category: "web-development",

    // Category UI display label
    categoryLabel: "Web Development",

    // Production or release year
    year: "2025",

    // Operational lifecycle status (Always "Completed")
    status: "Completed",

    // Primary showcase image (Strictly format as <short-slug>1.webp)
    imageUrl: "project-slug1.webp",

    // Gallery images for auto-sliding carousel & fullscreen lightbox (<short-slug><index>.webp)
    images: [
      "project-slug1.webp",
      "project-slug2.webp",
    ],

    // 1-2 sentence summary for project cards and search directories
    summary:
      "Engineered an ultra-low latency system leveraging modern architecture to deliver verified throughput and eliminate performance bottlenecks.",

    // [Section 01] 2-3 dense sentences explaining operational context, architecture, and value
    overview:
      "Comprehensive explanation of the operational environment, technical requirements, and core engineering philosophy behind the system without generic filler words.",

    // [Section 01] Concrete engineering constraint or architectural problem statement
    challenge:
      "Detailed description of the critical bottleneck (e.g., thread starvation, memory bloat, high serialization latency, or visual cognitive fatigue).",

    // [Section 03] High-level architectural framework unifying the stack
    architectureSummary:
      "Core unified architectural pattern (e.g., WebWorker thread pool + SharedArrayBuffer zero-copy state + OffscreenCanvas GPU rendering).",

    // [Section 01] Technical objectives (Flexible count, no min/max limit)
    objectives: [
      "Mitigate primary system bottlenecks and eliminate latency spikes.",
      "Architect a robust, fault-tolerant execution pipeline using domain-specific tooling.",
      "Achieve measurable target throughput, framerate, or usability standards.",
    ],

    // [Section 02] Key capability nodes (Flexible count, no min/max limit - DO NOT duplicate pipeline steps)
    features: [
      {
        title: "Primary Capability Node",
        description: "Deep technical explanation of the first major system feature and its architectural benefits.",
        badge: "Sub-ms Latency", // Concise metric or technology badge
      },
      {
        title: "Secondary System Feature",
        description: "Technical explanation of the secondary capability and how it enhances system resilience.",
        badge: "Zero-Copy",
      },
      {
        title: "Tertiary System Feature",
        description: "Technical explanation of data integrity, state synchronization, or user workflow support.",
        badge: "Locked 60 FPS",
      },
    ],

    // [Section 03] Execution pipeline stages (Flexible count, no min/max limit)
    pipelineSteps: [
      {
        step: "01. Input Ingestion & Protocol Decoding",
        detail: "Low-level packet parsing, validation, and zero-copy memory dispatch routines.",
        latencyOrMetric: "1.2M Events/s",
      },
      {
        step: "02. Core Processing & State Synchronization",
        detail: "Deterministic state transition logic, SIMD computation, or consensus evaluation.",
        latencyOrMetric: "0.08ms Execution",
      },
      {
        step: "03. Presentation & Surface Rendering",
        detail: "Hardware-accelerated viewport rendering, token updates, or streaming UI blitting.",
        latencyOrMetric: "Locked 60 FPS",
      },
    ],

    // [Section 05] Single cohesive narrative paragraph of empirical evaluation & testing results
    evaluation:
      "During extensive stress testing and real-world operational evaluation, the platform sustained 50,000 requests per second with an average p99 latency of 4.2ms. Memory utilization remained flat at 18MB under sustained concurrency, achieving 99.99% operational uptime with zero unhandled exceptions across extended evaluation trials.",

    // [Section 05] Key project deliverables and measured impacts (Flexible count, no min/max limit)
    outcomes: [
      "Attained verified performance milestone under peak operational load.",
      "Shipped complete production system architecture with full documentation.",
      "Delivered measurable efficiency improvements, cost reductions, or UX score gains.",
    ],

    // [Section 04] Hardware & software specifications (Flexible count, no min/max limit)
    techStack: ["Next.js", "TypeScript", "WebWorkers", "WebSockets", "Tailwind CSS"],

    // Visual theme accent color ("cyan" | "emerald" | "indigo" | "amber" | "fuchsia" | "teal")
    accentColor: "cyan",

    // [Section 06] GitHub repository URL (Optional)
    repoUrl: "https://github.com/yohanesdimas/project-slug",
  },
```
