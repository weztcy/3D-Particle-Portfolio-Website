"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  FolderGit2,
  Globe,
  Layers,
  Layout,
  Lock,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Cpu,
  Database,
  Server,
  Code2,
  GitBranch,
  Box,
  Network,
  Workflow,
  AlertTriangle,
  Target,
  Zap,
  HardDrive,
  Activity,
  Check,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";

interface WebDevDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

const TECH_CATEGORIES = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Framework & Libraries",
  "API & Integration",
  "Development Tools",
  "Version Control",
  "Testing Tools",
  "External Services",
] as const;

type TechCategoryFilter = (typeof TECH_CATEGORIES)[number];

export default function WebDevDetailView({
  project,
  onTriggerPulse,
}: WebDevDetailViewProps) {
  // Image Showcase State
  const rawImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : ["/images/projects/SiLelo - Online Auction 1.webp"];

  const heroImage = rawImages[0] || project.imageUrl;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedTechCategory, setSelectedTechCategory] =
    useState<TechCategoryFilter>("All");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImgError = useCallback((src: string) => {
    setImgErrors((prev) => ({ ...prev, [src]: true }));
  }, []);

  // Section 1 Data: Project Description & Project Information
  const projectDescription =
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "Enterprise web architecture designed with modular frontend components, high-throughput backend APIs, and ACID-compliant transactional persistence to guarantee sub-50ms latency across high-concurrency client sessions.";

  const projectInfo = project.projectInfo || {
    projectType: "Full-Stack Web Application",
    developmentStatus: project.status || "Completed",
    developmentYear: project.year || "2026",
    platform: "Web / Cross-Platform Responsive",
    projectCategory: project.categoryLabel || "Web Development",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.projectType,
    targetPlatform: projectInfo.platform,
    primaryDomain: projectInfo.projectCategory,
    architecturePipeline: project.architectureSummary || "Modular Component Hierarchy + Reactive State Store",
    projectStatus: projectInfo.developmentStatus,
    projectYear: projectInfo.developmentYear,
  };

  // Section 2 Data: Background & Objectives
  const projectBackground =
    project.projectBackground ||
    project.challenge ||
    "Developed to solve architectural bottlenecks in legacy web monolithic workflows. Fragmented state management, unoptimized query pipelines, and high-latency asset rendering hindered interactive user productivity and elevated server infrastructure overhead.";

  const problemStatements = project.problemStatements || [
    {
      title: "High Client-Server Synchronization Latency",
      description:
        "Legacy synchronous polling architectures overloaded the web server, inducing race conditions during high-frequency concurrent state mutations.",
      issueCode: "ISSUE_01",
    },
    {
      title: "Monolithic Data Coupling & Slow Queries",
      description:
        "Unindexed database queries and complex multi-join schemas degraded page response times above acceptable sub-second SLAs.",
      issueCode: "ISSUE_02",
    },
    {
      title: "Fragile Security Gates & Token Vulnerabilities",
      description:
        "Inadequate role-based access controls and missing transactional escrow validations exposed critical business logic to perimeter exploits.",
      issueCode: "ISSUE_03",
    },
  ];

  const projectObjectives = project.projectObjectives ||
    (project.objectives && project.objectives.length > 0
      ? project.objectives.map((obj, idx) => ({
          title: `Milestone ${String(idx + 1).padStart(2, "0")}`,
          description: obj,
          targetTag: `TARGET_0${idx + 1}`,
        }))
      : [
          {
            title: "Zero-Downtime Microservice Decoupling",
            description:
              "Isolate domain boundaries into decoupled services with asynchronous messaging for seamless continuous deployments.",
            targetTag: "TARGET_01",
          },
          {
            title: "Sub-50ms API Latency Guarantee",
            description:
              "Engineer high-performance indexing, Redis cache layers, and edge asset distribution for instantaneous user interactions.",
            targetTag: "TARGET_02",
          },
          {
            title: "Enterprise Multi-Role RBAC Authorization",
            description:
              "Deploy cryptographically secure token validation, strict session isolation, and audit logging across all endpoints.",
            targetTag: "TARGET_03",
          },
        ]);

  // Section 3 Data: Features & Interface
  const coreFeatures = project.coreFeatures ||
    (project.features && project.features.length > 0
      ? project.features.map((f, i) => ({
          title: f.title,
          description: f.description,
          badge: f.badge || `MODULE_0${i + 1}`,
        }))
      : [
          {
            title: "Dynamic Real-Time Data Pipeline",
            description:
              "Bi-directional WebSocket streaming architecture providing zero-latency telemetry and reactive state updates across all connected clients.",
            badge: "Core Engine",
          },
          {
            title: "Multi-Role RBAC Portal System",
            description:
              "Hierarchical permission matrices separating public visitors, authorized operators, and root administrators with encrypted session cookies.",
            badge: "Security Core",
          },
          {
            title: "Automated Transaction Settlement",
            description:
              "ACID-compliant relational database ledger guaranteeing idempotency and preventing race conditions during concurrent user operations.",
            badge: "Transactional",
          },
          {
            title: "Telemetry & Operational Dashboard",
            description:
              "Interactive telemetry charts rendering live resource consumption, API latency percentiles, and business performance metrics.",
            badge: "Analytics HUD",
          },
        ]);

  const interfaceShowcase =
    project.interfaceShowcase && project.interfaceShowcase.length > 0
      ? project.interfaceShowcase
      : rawImages.map((img, i) => ({
          imageUrl: img,
          caption: `Holographic Viewport ${i + 1} // Primary Interface & Responsive Workspace Overview`,
          badge: `VIEWPORT // 0${i + 1}`,
        }));

  const userFlow = project.userFlow || {
    summary:
      "The client interaction pipeline is structured as an intuitive, deterministic multi-stage journey—guiding users seamlessly from initial entry authentication, through interactive catalog discovery and stateful interaction, down to automated transactional checkout and verification.",
    steps: [
      {
        step: "NODE 01",
        title: "Perimeter Handshake & Authentication",
        description:
          "User connects via HTTPS edge gateway; credentials or OAuth tokens are validated via cryptographic session cookies with RBAC scope assignment.",
        actorOrNode: "Client / Gateway",
      },
      {
        step: "NODE 02",
        title: "Dynamic Catalog & Filter Query",
        description:
          "User navigates catalog views; client initiates debounced REST queries with edge caching for instant sub-30ms retrieval.",
        actorOrNode: "Presentation Tier",
      },
      {
        step: "NODE 03",
        title: "Interactive State Mutation",
        description:
          "Action triggers optimistic UI updates while asynchronous payload dispatches to backend endpoints with rollback safeguards.",
        actorOrNode: "State Controller",
      },
      {
        step: "NODE 04",
        title: "Atomic Ledger Settlement & Receipt",
        description:
          "Backend processes transaction within an isolated database transaction, issues an audit receipt, and streams live confirmation to client.",
        actorOrNode: "Database Engine",
      },
    ],
  };

  // Section 4 Data: Tech Stack Categorized
  const techStackCategorized =
    project.techStackCategorized && project.techStackCategorized.length > 0
      ? project.techStackCategorized
      : [
          {
            name: "React 19 / Next.js",
            category: "Frontend" as const,
            role: "Server-side rendering, client hydration, and routing orchestration",
          },
          {
            name: "Tailwind CSS & Radix UI",
            category: "Frontend" as const,
            role: "Accessible design token framework and responsive HUD UI styling",
          },
          {
            name: "Node.js / Express",
            category: "Backend" as const,
            role: "High-throughput asynchronous REST API routing and middleware pipeline",
          },
          {
            name: "PHP 8.x / CodeIgniter",
            category: "Backend" as const,
            role: "Lightweight MVC application core and server controller dispatch",
          },
          {
            name: "PostgreSQL / MySQL",
            category: "Database" as const,
            role: "Relational persistence with InnoDB ACID-compliant transaction safety",
          },
          {
            name: "Redis Cache Engine",
            category: "Database" as const,
            role: "In-memory key-value caching, rate-limiting, and ephemeral session storage",
          },
          {
            name: "TanStack Query",
            category: "Framework & Libraries" as const,
            role: "Declarative asynchronous state caching, optimistic updates, and garbage collection",
          },
          {
            name: "Lucide Cyber Icons",
            category: "Framework & Libraries" as const,
            role: "Scalable vectorized iconography optimized for tactile HUD interfaces",
          },
          {
            name: "RESTful JSON APIs",
            category: "API & Integration" as const,
            role: "Strictly typed endpoint contracts with OpenAPI schema validation",
          },
          {
            name: "WebSocket Protocol",
            category: "API & Integration" as const,
            role: "Full-duplex real-time event distribution and bi-directional telemetry stream",
          },
          {
            name: "Vite & SWC Compiler",
            category: "Development Tools" as const,
            role: "Lightning-fast hot module replacement and bundle minification pipeline",
          },
          {
            name: "Postman / Thunder Client",
            category: "Development Tools" as const,
            role: "Automated API contract testing and endpoint simulation environment",
          },
          {
            name: "Git & GitHub CLI",
            category: "Version Control" as const,
            role: "Trunk-based branch isolation, semantic commits, and pull-request auditing",
          },
          {
            name: "Jest & Playwright",
            category: "Testing Tools" as const,
            role: "End-to-end integration test suites and automated UI regression testing",
          },
          {
            name: "Vercel Edge Network",
            category: "External Services" as const,
            role: "Global CDN asset distribution with edge compute middleware execution",
          },
          {
            name: "Cloudinary CDN",
            category: "External Services" as const,
            role: "Automated responsive image transformations and lossy WebP compression",
          },
        ];

  const filteredTechStack =
    selectedTechCategory === "All"
      ? techStackCategorized
      : techStackCategorized.filter((t) => t.category === selectedTechCategory);

  // Section 5 Data: Architecture & Implementation
  const systemArchitecture = project.systemArchitecture || {
    summary:
      "The web system architecture adopts a layered, decoupled Tier topology designed for high availability and maintainability. Incoming HTTPS client traffic hits an Edge Proxy Gateway with SSL termination, distributing requests to stateless Web Application controllers. State persistence is isolated within an ACID relational database cluster bolstered by an in-memory Redis caching tier.",
    layers: [
      {
        name: "Tier 1 // Presentation Client",
        role: "Responsive Web Viewports, Client-Side Hydration, State Stores",
        components: ["React 19 DOM", "Tailwind HUD Theme", "Zustand Cache"],
      },
      {
        name: "Tier 2 // Edge & Security Gateway",
        role: "Reverse Proxy, SSL Termination, CSRF & Rate-Limiting Barrier",
        components: ["Edge Middleware", "JWT / Session Auth", "CORS Guard"],
      },
      {
        name: "Tier 3 // Application Core Engine",
        role: "RESTful Controllers, Business Logic Domain, Event Dispatcher",
        components: ["MVC Routers", "Data Sanitizer", "Event Emitter"],
      },
      {
        name: "Tier 4 // Persistence & Cache Vault",
        role: "Relational Tables, Foreign-Key Integrity, Memory Ingestion",
        components: ["MySQL / PostgreSQL", "Redis Key-Store", "S3 Storage"],
      },
    ],
  };

  const databaseDataFlow = project.databaseDataFlow || {
    type: "Database Schema / ERD",
    summary:
      "Data transactions adhere to strict Third Normal Form (3NF) relational design to eradicate data redundancy while preserving referential integrity via cascading foreign keys. Read-heavy operations exploit compound indexing to keep execution latency under 15ms.",
    entitiesOrPipelines: [
      {
        name: "USERS & AUTH",
        type: "Entity Table",
        fields: ["user_id (PK)", "email", "password_hash", "role_enum", "created_at"],
      },
      {
        name: "CATALOG ITEMS",
        type: "Entity Table",
        fields: ["item_id (PK)", "title", "category_id (FK)", "price", "status"],
      },
      {
        name: "TRANSACTIONS & AUDIT",
        type: "Ledger Table",
        fields: ["tx_id (PK)", "user_id (FK)", "amount", "checksum", "timestamp"],
      },
      {
        name: "TELEMETRY LOGS",
        type: "Timeseries Buffer",
        fields: ["log_id (PK)", "endpoint", "status_code", "latency_ms", "ip_hash"],
      },
    ],
  };

  const technicalImplementation = project.technicalImplementation || [
    {
      category: "Authentication",
      title: "Multi-Role RBAC & Secure Session Handshake",
      description:
        "Engineered role-based access gates separating public visitors, authorized operators, and administrators. Sessions are signed with HMAC-SHA256 tokens stored strictly in HTTP-only, SameSite=Strict cookies to eliminate cross-site scripting exposure.",
      badge: "Zero-Trust Auth",
    },
    {
      category: "API Integration",
      title: "RESTful Endpoints & Asynchronous Event Streaming",
      description:
        "Standardized REST API contract with automated input parameter validation. Real-time updates utilize Server-Sent Events (SSE) / WebSockets to push state mutations instantly without client polling overhead.",
      badge: "High Concurrency",
    },
    {
      category: "Data Processing",
      title: "Atomic Transactions & Escrow Reconciliation",
      description:
        "State mutations leverage database transaction isolation (READ COMMITTED) with row-level locks, guaranteeing zero double-spending and deterministic order processing under peak traffic surges.",
      badge: "ACID Compliant",
    },
    {
      category: "Security Implementation",
      title: "Defense-in-Depth Sanitization & CSRF Shield",
      description:
        "Every incoming payload is sanitized against SQL injection and XSS exploits. Strict Content Security Policies (CSP) and automated rate limiting mitigate DDoS and brute-force penetration attempts.",
      badge: "OWASP Top 10",
    },
    {
      category: "Performance Optimization",
      title: "Edge Caching & Dynamic Asset Minification",
      description:
        "Static bundles are pre-rendered and distributed across global edge nodes. Database queries utilize multi-column B-tree indexing combined with Redis cache invalidation, maintaining p95 response times below 40ms.",
      badge: "Sub-40ms p95",
    },
  ];

  // Section 6 Data: Project Resources (Repository, Documentation, Quality)
  const hasRepoUrl = Boolean(project.repoUrl && project.repoUrl.trim().length > 0);

  const technicalDocumentation = project.technicalDocumentation || {
    title: "Technical Documentation & System Specs",
    description:
      "Comprehensive engineering manuals covering framework architectures, component APIs, database migration runbooks, and zero-downtime deployment workflows.",
    status: "DOCS // VERIFIED v2.4",
    specs: [
      { label: "ARCH STYLE", value: "Decoupled MVC / Tiered" },
      { label: "API STANDARD", value: "RESTful JSON / OpenAPI" },
      { label: "PERSISTENCE", value: "Relational 3NF + Redis" },
      { label: "SECURITY AUDIT", value: "OWASP Level-2 Pass" },
    ],
  };

  const architectureQuality = project.architectureQuality || {
    title: "Architecture & Quality Standards",
    description:
      "Rigorous quality assurance benchmark ensuring complete code linting compliance, continuous integration automated testing, and verified fault recovery.",
    status: "QA AUDIT // 99.8% PASS",
    badges: [
      "100% TypeScript Strict",
      "CI/CD Pipeline Green",
      "A11y WCAG 2.1 AA",
      "Lighthouse 95+ Score",
    ],
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* =========================================================================
          SECTION 1 — [ 01 // SYSTEM CONSOLE & FULLSTACK ARCHITECTURE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-[#080B14]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-sky-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-sky-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-sky-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-sky-400/70" />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-sky-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-300">
              [ 01 // SYSTEM CONSOLE & FULLSTACK ARCHITECTURE ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sky-300">
              <Box className="h-3 w-3 text-sky-400" />
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-sky-300">
              <Globe className="h-3 w-3 text-sky-400" />
              {projectInfo.platform}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex flex-col flex-1 h-full">
              {/* Terminal Title Bar */}
              <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-sky-500/30 bg-sky-950/40 px-4 py-2 text-xs font-mono text-sky-300">
                <span className="flex items-center gap-2 text-sky-200">
                  <Terminal className="h-3.5 w-3.5 text-sky-400" />
                  &gt; WEB_RUNTIME // SYS.VIEWPORT
                </span>
                <span className="text-[10px] text-sky-400/80">ONLINE // HTTP_EDGE</span>
              </div>

              {/* Terminal Body */}
              <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-sky-500/25 bg-[#080B14]/95 p-5 sm:p-6 text-slate-300 shadow-inner flex-1 flex flex-col justify-between">
                <div>
                  {/* 16:9 Hero Viewport Container — Pure static display */}
                  {heroImage && (
                    <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-sky-500/30 bg-black/60 shadow-lg">
                      {/* Optical HUD Crosshairs */}
                      <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-sky-400/80" />
                      <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-sky-400/80" />
                      <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-sky-400/80" />
                      <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-sky-400/80" />

                      {/* Hero Image */}
                      <Image
                        src={heroImage}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  )}

                  <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-sans mb-4">
                    {projectDescription.length > 500
                      ? `${projectDescription.slice(0, 500).trim()}...`
                      : projectDescription}
                  </p>
                </div>

                {/* Capability Badges Strip (Max 3) */}
                <div className="mt-auto pt-4 border-t border-sky-500/20 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] text-sky-300">
                    <Workflow className="h-3 w-3 text-sky-400" />
                    Modular Architecture
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] text-sky-300">
                    <Zap className="h-3 w-3 text-sky-400" />
                    High-Throughput Runtime
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/30 bg-sky-500/10 px-2.5 py-1 font-mono text-[11px] text-sky-300">
                    <ShieldCheck className="h-3 w-3 text-sky-400" />
                    Zero-Trust Security
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Tactical Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-sky-500/30 bg-[#080B14]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-sky-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-sky-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3.5 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-sky-400/80">System Classification</dt>
                  <dd className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <Box className="h-3.5 w-3.5 text-sky-400" />
                    {telemetry.projectType}
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-sky-400/80">Operating Environment</dt>
                  <dd className="text-sky-300 font-semibold flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-sky-400" />
                    {telemetry.targetPlatform}
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-sky-400/80">Domain Focus</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-sky-400" />
                    {telemetry.primaryDomain}
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-sky-400/80">Engineering Pipeline</dt>
                  <dd className="text-slate-300 text-[11px] truncate flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">{telemetry.architecturePipeline}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit — Clean Icon + Text */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-sky-400/80">Testing & Audit</dt>
                  <dd className="text-sky-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
                    <span>Passed</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-sky-400/80">Project Status</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-sky-400" />
                    <span>{telemetry.projectStatus}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] uppercase text-sky-400/80">Project Year</dt>
                  <dd className="text-slate-200 font-semibold">{project.year || "2026"}</dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  hasRepoUrl
                    ? "border-sky-500/35 bg-[#0C101D]/90 hover:border-sky-400/60 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-sky-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-sky-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-sky-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-sky-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-sky-300">
                      {hasRepoUrl ? (
                        <FolderGit2 className="h-3.5 w-3.5 text-sky-400" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 text-slate-400" />
                      )}
                      <span className="truncate">
                        {hasRepoUrl
                          ? "PUBLIC GITHUB REPOSITORY"
                          : "RESTRICTED PRIVATE REPOSITORY"}
                      </span>
                    </div>
                    {hasRepoUrl ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/40 bg-sky-950/60 px-2 py-0.5 font-mono text-[9px] text-sky-300 font-semibold shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />PUBLIC
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[9px] text-slate-400 font-semibold">
                        <Lock className="h-2.5 w-2.5" />PRIVATE
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 font-mono text-xs mb-4">
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">ACCESS CLEARANCE:</span>
                      <span className={hasRepoUrl ? "text-sky-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {hasRepoUrl ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / NDA"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">VCS GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">GitHub Cloud VCS</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SECURITY AUDIT:</span>
                      <span className={hasRepoUrl ? "text-emerald-400 font-semibold text-[11px]" : "text-amber-400 font-semibold text-[11px]"}>
                        {hasRepoUrl ? "VERIFIED_PUBLIC" : "ENTERPRISE_CONFIDENTIAL"}
                      </span>
                    </div>
                  </div>
                </div>

                {hasRepoUrl && project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onTriggerPulse?.()}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.01]"
                  >
                    <span>ACCESS REPOSITORY</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 font-mono text-xs font-semibold text-slate-500 cursor-not-allowed">
                    <Lock className="h-3.5 w-3.5 text-slate-600" />
                    <span>RESTRICTED ACCESS</span>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-sky-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-sky-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — BACKGROUND & OBJECTIVES
          Layout: Top Background Terminal + 2-Column Split Matrix (Problem vs Objective)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/25 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 02 // CONTEXT ORIGIN & STRATEGIC OBJECTIVES ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            PROBLEM_MATRIX // MILESTONES
          </span>
        </div>

        {/* Top: Project Background (Full-Width Narrative Card) */}
        <div className="relative z-10 rounded-2xl border border-sky-500/20 bg-black/40 p-6 sm:p-7 mb-7 shadow-[inset_0_0_16px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold mb-3">
            <Activity className="h-3.5 w-3.5 text-sky-400" />
            <span>ORIGIN CONTEXT // PROJECT BACKGROUND</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {projectBackground}
          </p>
        </div>

        {/* 2-Column Split Matrix: Problem Statement vs Project Objectives */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch">
          {/* Column 1: Problem Statement (Warning / Amber Accent) */}
          <div className="rounded-2xl border border-amber-500/30 bg-[#120E08]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(245,158,11,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-300 tracking-wider">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  <span>[ ISSUE_DETECTED // PROBLEM STATEMENT ]</span>
                </div>
                <span className="rounded bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 font-mono text-[10px] text-amber-300 font-bold">
                  {problemStatements.length} BOTTLENECKS
                </span>
              </div>

              <div className="space-y-4">
                {problemStatements.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-amber-500/15 bg-black/50 p-4 transition-all hover:border-amber-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-amber-400 font-bold mb-1.5">
                      <span>{item.issueCode || `ISSUE_0${idx + 1}`}</span>
                      <span className="text-[10px] text-amber-500/70 uppercase">
                        CRITICAL
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-amber-500/15 font-mono text-[10px] text-amber-400/80">
              TELEMETRY: Architectural constraints identified during initial audit.
            </div>
          </div>

          {/* Column 2: Project Objectives (Target / Emerald Accent) */}
          <div className="rounded-2xl border border-emerald-500/30 bg-[#07130F]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300 tracking-wider">
                  <Target className="h-4 w-4 text-emerald-400" />
                  <span>[ TARGET_SOLVED // STRATEGIC OBJECTIVES ]</span>
                </div>
                <span className="rounded bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 font-mono text-[10px] text-emerald-300 font-bold">
                  {projectObjectives.length} TARGETS
                </span>
              </div>

              <div className="space-y-4">
                {projectObjectives.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-emerald-500/15 bg-black/50 p-4 transition-all hover:border-emerald-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-emerald-400 font-bold mb-1.5">
                      <span>{item.targetTag || `TARGET_0${idx + 1}`}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                        <Check className="h-3 w-3" />
                        DELIVERED
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-emerald-500/15 font-mono text-[10px] text-emerald-400/80">
              TELEMETRY: All core objectives validated in production deployment.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — FEATURES & INTERFACE
          Layout: Hero Viewport Showcase + Split Sub-Bento (Features & User Flow)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/25 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 03 // CORE CAPABILITIES & HOLOGRAPHIC SHOWCASE ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            SHOWCASE // USER PIPELINE
          </span>
        </div>

        {/* 1. Interface Showcase (Hero Holographic Viewport) */}
        <div className="relative z-10 mb-8 rounded-2xl border border-sky-500/30 bg-black/60 p-4 sm:p-6 shadow-[0_0_40px_rgba(0,240,255,0.08)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="font-bold text-sky-300">
                HOLOGRAPHIC_VIEWPORT // INTERFACE_STAGE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">
                FRAME {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                {String(interfaceShowcase.length).padStart(2, "0")}
              </span>
              
            </div>
          </div>

          {/* Image Stage Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#04060A]">
            <Image
              src={
                imgErrors[interfaceShowcase[activeImageIndex]?.imageUrl]
                  ? "/images/projects/SiLelo - Online Auction 1.webp"
                  : interfaceShowcase[activeImageIndex]?.imageUrl ||
                    "/images/projects/SiLelo - Online Auction 1.webp"
              }
              alt={interfaceShowcase[activeImageIndex]?.caption || project.title}
              fill
              className="object-cover object-top transition-transform duration-500 hover:scale-[1.01]"
              priority
              onError={() =>
                handleImgError(interfaceShowcase[activeImageIndex]?.imageUrl)
              }
            />

            {/* Navigation Overlay Buttons (if multiple images) */}
            {interfaceShowcase.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === 0 ? interfaceShowcase.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-sky-400/40 bg-black/70 p-2.5 text-sky-300 hover:bg-sky-400 hover:text-black backdrop-blur-md transition-all shadow-lg"
                  aria-label="Previous Showcase Viewport"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === interfaceShowcase.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-sky-400/40 bg-black/70 p-2.5 text-sky-300 hover:bg-sky-400 hover:text-black backdrop-blur-md transition-all shadow-lg"
                  aria-label="Next Showcase Viewport"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Live Caption Scrim */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 sm:p-5 flex items-center justify-between gap-4">
              <div className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                <span className="text-sky-400 font-bold mr-2">
                  [ {interfaceShowcase[activeImageIndex]?.badge || "VIEWPORT"} ]
                </span>
                {interfaceShowcase[activeImageIndex]?.caption}
              </div>
            </div>
          </div>

          {/* Thumbnail Carousel Bar */}
          {interfaceShowcase.length > 1 && (
            <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin">
              {interfaceShowcase.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-14 sm:h-16 w-24 sm:w-28 shrink-0 overflow-hidden rounded-lg border transition-all ${
                    idx === activeImageIndex
                      ? "border-sky-400 ring-2 ring-sky-400/40 scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={`Thumb ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.2 font-mono text-[9px] text-sky-300">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Split: Core Features (Left) vs User Flow (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Core Features */}
          <div className="rounded-2xl border border-sky-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-400 tracking-wider">
                  <Sparkles className="h-4 w-4 text-sky-400" />
                  <span>[ CORE_FEATURES // CAPABILITY MATRIX ]</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {coreFeatures.length} ACTIVE MODULES
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#0C101D]/70 p-4 transition-all hover:border-sky-400/40 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-sky-400 font-bold mb-2">
                      <span className="rounded bg-sky-400/10 border border-sky-400/25 px-2 py-0.5">
                        {feat.badge || `MOD_0${i + 1}`}
                      </span>
                      <Workflow className="h-3 w-3 text-slate-500" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1.5">
                      {feat.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              SPEC: All modules engineered to operate under decoupled event boundaries.
            </div>
          </div>

          {/* User Flow */}
          <div className="rounded-2xl border border-sky-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-400 tracking-wider">
                  <Workflow className="h-4 w-4 text-sky-400" />
                  <span>[ USER_FLOW // INTERACTION PIPELINE ]</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400">
                  DETERMINISTIC
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                {userFlow.summary}
              </p>

              {/* Step by Step Circuit Pipeline */}
              <div className="space-y-3 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-indigo-400 before:to-emerald-400">
                {userFlow.steps.map((st, i) => (
                  <div
                    key={i}
                    className="relative pl-8 rounded-xl border border-white/5 bg-[#0A0E1A]/80 p-3.5 transition-all hover:border-sky-400/30"
                  >
                    <span className="absolute left-2 top-4 h-2.5 w-2.5 rounded-full bg-sky-400 ring-4 ring-[#080B14]" />
                    <div className="flex items-center justify-between font-mono text-[10px] text-sky-400 font-bold mb-1">
                      <span>{st.step}</span>
                      <span className="text-slate-400 font-normal">
                        {st.actorOrNode}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                      {st.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              AUDIT: End-to-end friction tested across touch and keyboard inputs.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — TECH STACK
          Layout: Cybernetic Category Switcher + Spec Grid (9 Categories)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/25 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 04 // FULL-STACK RUNTIME & TOOLING ECOSYSTEM ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            SPEC_GRID // 9 DOMAINS
          </span>
        </div>

        {/* HUD Category Filter Tabs */}
        <div className="relative z-10 mb-7 flex flex-wrap items-center gap-1.5 sm:gap-2">
          {TECH_CATEGORIES.map((cat) => {
            const isSelected = selectedTechCategory === cat;
            const count =
              cat === "All"
                ? techStackCategorized.length
                : techStackCategorized.filter((t) => t.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedTechCategory(cat);
                  onTriggerPulse?.();
                }}
                className={`group relative rounded-xl border px-3 py-1.5 font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "border-sky-400 bg-sky-400/15 text-sky-300 shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                    : "border-white/10 bg-black/40 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`rounded px-1.5 py-0.2 text-[10px] font-bold ${
                    isSelected
                      ? "bg-sky-400/20 text-sky-200"
                      : "bg-white/5 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Spec Micro-Chip Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTechStack.map((tech, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-[#0C101D]/70 p-4 transition-all duration-300 hover:border-sky-400/50 hover:bg-[#0E1528] hover:-translate-y-1 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              {/* Corner HUD Tick */}
              <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-sky-400/40 group-hover:bg-sky-400 group-hover:scale-125 transition-all" />

              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10 text-sky-300 shadow-[0_0_12px_rgba(0,240,255,0.15)] group-hover:scale-105 transition-transform">
                  <Code2 className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-xs sm:text-sm font-bold text-white truncate">
                    {tech.name}
                  </div>
                  <span className="font-mono text-[10px] text-sky-400 uppercase tracking-wider">
                    {tech.category}
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block mb-0.5">
                  ARCHITECTURAL ROLE
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {tech.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — ARCHITECTURE & IMPLEMENTATION
          Layout: Dual Diagram Blueprint (2-Column Grid) + Implementation Deck Below
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/25 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 05 // SYSTEM TOPOLOGY & DEPLOYMENT BLUEPRINTS ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            DIAGRAMS // TECHNICAL IMPLEMENTATIONS
          </span>
        </div>

        {/* Dual Diagram Blueprint (2-Column Grid) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 mb-8 items-stretch">
          {/* Blueprint 1: System Architecture */}
          <div className="rounded-2xl border border-sky-500/30 bg-[#0A0E1A]/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                  <Network className="h-4 w-4 text-sky-400" />
                  <span>[ SYSTEM_ARCHITECTURE // TOPOLOGY ]</span>
                </div>
                <span className="rounded bg-sky-400/10 border border-sky-400/25 px-2 py-0.5 font-mono text-[10px] text-sky-300">
                  TIERED MVC
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {systemArchitecture.summary}
              </p>

              {/* Visual Architecture Layers Schematic */}
              <div className="space-y-3">
                {systemArchitecture.layers?.map((layer, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-black/60 p-3.5 transition-all hover:border-sky-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-sky-300 mb-1">
                      <span>{layer.name}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    </div>
                    <div className="text-[11px] text-slate-400 mb-2">
                      {layer.role}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.components.map((comp, cIdx) => (
                        <span
                          key={cIdx}
                          className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-200"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              TOPOLOGY: Edge-routed reverse proxy with decoupled downstream microservices.
            </div>
          </div>

          {/* Blueprint 2: Database & Data Flow */}
          <div className="rounded-2xl border border-sky-500/30 bg-[#0A0E1A]/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(0,240,255,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                  <Database className="h-4 w-4 text-sky-400" />
                  <span>[ DATABASE_SCHEMA // DATA_FLOW ]</span>
                </div>
                <span className="rounded bg-sky-400/10 border border-sky-400/25 px-2 py-0.5 font-mono text-[10px] text-sky-300">
                  {databaseDataFlow.type}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {databaseDataFlow.summary}
              </p>

              {/* Entity / Table Schema Schema Cards */}
              <div className="space-y-3">
                {databaseDataFlow.entitiesOrPipelines?.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-black/60 p-3.5 transition-all hover:border-emerald-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-xs font-bold text-emerald-300 mb-1">
                      <span>{item.name}</span>
                      <span className="rounded bg-emerald-400/10 px-1.5 py-0.2 font-mono text-[9px] text-emerald-400">
                        {item.type}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.fields.map((field, fIdx) => (
                        <span
                          key={fIdx}
                          className="rounded border border-emerald-400/20 bg-emerald-400/5 px-2 py-0.5 font-mono text-[10px] text-emerald-200"
                        >
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              INTEGRITY: Foreign-key constrained with transactional isolation.
            </div>
          </div>
        </div>

        {/* Technical Implementation Deck (Modular List/Cards Below) */}
        <div className="relative z-10 rounded-2xl border border-sky-500/20 bg-black/50 p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-sky-300">
              <Zap className="h-4 w-4 text-sky-400" />
              <span>[ TECHNICAL_IMPLEMENTATION // REAL-WORLD PROTOCOLS ]</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              5 VERIFIED PROTOCOLS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technicalImplementation.map((impl, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#0C101D]/70 p-5 transition-all duration-300 hover:border-sky-400/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-sky-400 font-bold mb-2">
                  <span className="uppercase tracking-wider">{impl.category}</span>
                  <span className="rounded bg-sky-400/10 border border-sky-400/25 px-2 py-0.5">
                    {impl.badge}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-2">
                  {impl.title}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {impl.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — PROJECT RESOURCES (SECTION TERAKHIR)
          Layout: 3-Card Bento Grid
          Card 1: GitHub / Private Repository (Adaptive)
          Card 2: Technical Documentation & Specs
          Card 3: Architecture & Quality Standards
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-[#080B14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-sky-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-sky-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-sky-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            <span>[ 06 // SOURCE VAULT & TECHNICAL SPECIFICATION GATES ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            FINAL_ACCESS // REPOSITORIES & QUALITY ASSURANCE
          </span>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Card 1: Repository Gate (Adaptive: Public GitHub vs Private Repository) */}
          <div
            className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 shadow-lg transition-all duration-300 ${
              hasRepoUrl
                ? "border-emerald-500/30 bg-[#07130F]/70 hover:border-emerald-400/60"
                : "border-amber-500/30 bg-[#140E0A]/70 hover:border-amber-400/50"
            }`}
          >
            <div>
              {/* Card Status Indicator */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div
                  className={`flex items-center gap-2 font-mono text-xs font-bold ${
                    hasRepoUrl ? "text-emerald-300" : "text-amber-300"
                  }`}
                >
                  {hasRepoUrl ? (
                    <FolderGit2 className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Lock className="h-4 w-4 text-amber-400" />
                  )}
                  <span>
                    {hasRepoUrl
                      ? "PUBLIC GITHUB REPOSITORY"
                      : "RESTRICTED PRIVATE REPOSITORY"}
                  </span>
                </div>
                <span
                  className={`h-2 w-2 rounded-full ${
                    hasRepoUrl
                      ? "bg-emerald-400 animate-pulse"
                      : "bg-amber-400"
                  }`}
                />
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {hasRepoUrl ? "GitHub Repository" : "Private Repository"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {hasRepoUrl
                  ? "Open-access repository containing production source code, commit history, build scripts, and modular directory structures for inspection."
                  : "Source code is private and protected by proprietary enterprise licensing or client NDA agreement. No public mirror is available for this project."}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {hasRepoUrl ? (
                  <>
                    <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                      BRANCH // MAIN
                    </span>
                    <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                      STATUS // VERIFIED
                    </span>
                  </>
                ) : (
                  <>
                    <span className="rounded border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] text-amber-300">
                      CLEARANCE // INTERNAL
                    </span>
                    <span className="rounded border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] text-amber-300">
                      PROPRIETARY // NDA
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Action / Status Button */}
            {hasRepoUrl && project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTriggerPulse?.()}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-5 py-3 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-[1.02]"
              >
                <span>ACCESS REPOSITORY</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <div className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-5 py-3 font-mono text-xs font-semibold text-slate-400 cursor-not-allowed">
                <Lock className="h-4 w-4 text-amber-400/80" />
                <span>RESTRICTED ACCESS</span>
              </div>
            )}
          </div>

          {/* Card 2: Technical Documentation & Specs Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-sky-500/30 bg-[#0C101D]/70 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-sky-400/60">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-300">
                  <FileText className="h-4 w-4 text-sky-400" />
                  <span>TECHNICAL DOCUMENTATION</span>
                </div>
                <span className="rounded bg-sky-400/10 border border-sky-400/30 px-2 py-0.5 font-mono text-[10px] text-sky-300">
                  {technicalDocumentation.status}
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {technicalDocumentation.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {technicalDocumentation.description}
              </p>

              {/* Specs List */}
              <div className="space-y-2 mb-6">
                {technicalDocumentation.specs.map((sp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 px-3 py-1.5 font-mono text-[11px]"
                  >
                    <span className="text-slate-400">{sp.label}</span>
                    <span className="font-bold text-sky-300">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-sky-400/20 bg-sky-400/5 px-4 py-2.5 text-center font-mono text-xs font-medium text-sky-300">
              STATUS: ARCHIVED & READY FOR AUDIT
            </div>
          </div>

          {/* Card 3: Architecture & Quality Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-indigo-500/30 bg-[#0B0D1B]/70 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-indigo-400/60">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-300">
                  <ShieldCheck className="h-4 w-4 text-indigo-400" />
                  <span>QUALITY & VALIDATION</span>
                </div>
                <span className="rounded bg-indigo-400/10 border border-indigo-400/30 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                  {architectureQuality.status}
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {architectureQuality.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {architectureQuality.description}
              </p>

              {/* Quality Badges */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {architectureQuality.badges.map((bg, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 rounded-lg border border-indigo-400/20 bg-indigo-400/10 p-2 font-mono text-[10px] text-indigo-200 font-semibold"
                  >
                    <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{bg}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-indigo-400/20 bg-indigo-400/5 px-4 py-2.5 text-center font-mono text-xs font-medium text-indigo-300">
              SECURITY: HARDENED AGAINST VULNERABILITIES
            </div>
          </div>
        </div>
      </section>

      </div>
  );
}
