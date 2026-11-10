"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Box,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  FileCode,
  FileCode2,
  FileDown,
  FileSpreadsheet,
  FileText,
  FolderGit2,
  Globe,
  GraduationCap,
  HardDrive,
  Info,
  Layers,
  Layout,
  ListOrdered,
  Lock,
  Maximize2,
  Play,
  Search,
  Share2,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";

interface CodeLearningDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function CodeLearningDetailView({
  project,
  onTriggerPulse,
}: CodeLearningDetailViewProps) {
  // Section 3: Module Catalog Filter & Search States
  const [moduleSearchQuery, setModuleSearchQuery] = useState("");
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState<
    "All" | "Beginner" | "Intermediate" | "Advanced" | "Expert"
  >("All");
  const [copiedPortalLink, setCopiedPortalLink] = useState(false);

  // Tech Stack HUD Filter State
  const [selectedTechFilter, setSelectedTechFilter] = useState<
    | "All"
    | "Programming Languages"
    | "Frameworks & Libraries"
    | "Development Tools & Environment"
  >("All");

  // Project Images resolution
  const projectImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : [];

  const heroImage =
    project.imageUrl ||
    (project.images && project.images.length > 0 ? project.images[0] : null);

  // =========================================================================
  // Section 1: Overview & Information
  // =========================================================================
  const learningDescription =
    project.codeLearningDescription ||
    project.overview ||
    project.summary ||
    "Rigorous computer science educational curriculum designed with modular progression, standalone compilable translation units, and deterministic terminal execution output telemetry.";

  const learningInfo = project.codeLearningProjectInfo || {
    learningCategory: "Computer Science & Systems Programming",
    difficultyLevel: "Intermediate to Advanced (Industry-Grade)",
    learningFormat: "Self-Paced Modular Curriculum & Compilation Units",
    totalModules: "17 Pedagogical Stages",
    totalSubmodules: "85 Structured Submodules",
    totalSourceCodeFiles: "250 Standalone Programs",
    programmingLanguages: project.title.includes("C++")
      ? "C++20 (MSVC, GCC, Clang)"
      : project.title.includes("Python")
      ? "Python 3.11+"
      : project.title.includes("Java")
      ? "Java 21 (LTS)"
      : project.title.includes("JavaScript")
      ? "JavaScript (ES2024 / Node.js)"
      : project.title.includes("TypeScript")
      ? "TypeScript 5.x"
      : project.title.includes("SQL")
      ? "SQL (PostgreSQL / MySQL)"
      : "Multi-Language Programming",
    learningStatus: project.status || "Complete / Verified Modules",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: "Interactive CS Curriculum",
    targetPlatform: learningInfo.programmingLanguages || "C++20 / MSVC / GCC / Clang",
    primaryDomain: learningInfo.learningCategory || "Computer Science & Systems Programming",
    architecturePipeline: project.architectureSummary || "Modular Pedagogical Roadmap + Compilable Units",
    projectStatus: learningInfo.learningStatus || project.status || "Completed",
    projectYear: project.year || "2026",
  };

  // =========================================================================
  // Section 2: Learning Roadmap & Curriculum Blueprint
  // =========================================================================
  const learningObjectives = project.codeLearningObjectives || [
    {
      title: "Syntactic Precision & Translation Unit Discipline",
      description:
        "Master language grammar, strict static typing, stream I/O formatting, and zero-warning compilation under modern standards.",
      competencyCode: "SYNTAX-01",
    },
    {
      title: "Memory Architecture & RAII Resource Management",
      description:
        "Eliminate memory leaks and undefined behaviors through deep understanding of stack vs heap, pointer arithmetic, and smart pointers.",
      competencyCode: "MEMORY-02",
    },
    {
      title: "Generic Metaprogramming & Standard Library STL",
      description:
        "Architect reusable algorithms, generic containers, type constraints, and modern range pipelines with algorithmic Big-O optimization.",
      competencyCode: "STL-GENERIC-03",
    },
    {
      title: "Real-World Systems Engineering & Capstone Builds",
      description:
        "Synthesize learned concepts into 10 full-scale terminal applications simulating financial POS, banking ledgers, and database engines.",
      competencyCode: "CAPSTONE-04",
    },
  ];

  const prerequisites = project.codeLearningPrerequisites || [
    {
      category: "Conceptual Foundations",
      items: [
        "Fundamental procedural logic (variables, loops, conditionals)",
        "Basic understanding of binary data, memory addresses, and data types",
        "Familiarity with algorithm complexity concepts (Big-O notation)",
      ],
      description:
        "Recommended prior exposure to foundational computing principles before tackling low-level memory mechanics.",
    },
    {
      category: "Development Toolchains & Environment",
      items: [
        "Modern C++20 compiler: GCC 11+, Clang 13+, or MSVC v19.30+",
        "Visual Studio Code, CLion, or terminal shell (PowerShell / Bash)",
        "Git version control for cloning translation units and running diff tests",
      ],
      description:
        "All code units are 100% dependency-free and compile cleanly across Windows, macOS, and Linux toolchains.",
    },
  ];

  const curriculumStructure = project.codeLearningCurriculumStructure || {
    summary:
      "A systematic 3-phase pedagogical flight path structured to take developers from raw syntax fundamentals through memory mastery and production-grade terminal systems.",
    phases: [
      {
        phaseNumber: "PHASE 01",
        phaseTitle: "Foundations & Memory Architecture",
        difficulty: "Beginner — Intermediate",
        moduleRange: "Modules 01 — 06",
        topics: [
          "Syntax, Streams & Compilation Models",
          "Primitive Data Types & Numeric Boundaries",
          "Control Flow & Algorithmic Conditionals",
          "Pointers, References & Stack/Heap Mechanics",
          "Dynamic Memory Allocation & Manual Deallocation",
          "Strings, Arrays & Vector Primitives",
        ],
      },
      {
        phaseNumber: "PHASE 02",
        phaseTitle: "Object Polymorphism & STL Mastery",
        difficulty: "Intermediate — Advanced",
        moduleRange: "Modules 07 — 12",
        topics: [
          "Object-Oriented Encapsulation & Constructors",
          "Inheritance, Virtual Tables & Polymorphism",
          "Operator Overloading & Custom Types",
          "Templates & Compile-Time Metaprogramming",
          "STL Sequential & Associative Containers",
          "STL Algorithms & Lambda Expressions",
        ],
      },
      {
        phaseNumber: "PHASE 03",
        phaseTitle: "Modern C++20 & Capstone Systems",
        difficulty: "Advanced — Industry Grade",
        moduleRange: "Modules 13 — 17",
        topics: [
          "RAII Smart Pointers (unique_ptr, shared_ptr)",
          "Exception Safety & Defensive Invariants",
          "C++20 Concepts, Ranges & Structured Bindings",
          "Multithreading, Mutexes & Atomic Primitives",
          "10 Production Terminal Capstone Applications",
        ],
      },
    ],
  };

  // =========================================================================
  // Section 3: Learning Modules & Materials (Curriculum Modules Catalog)
  // =========================================================================
  const defaultModules: NonNullable<ProjectCaseStudy["codeLearningModules"]> = useMemo(
    () => [
      {
        id: "mod-01",
        moduleNumber: "01",
        title: "Language Fundamentals & Stream I/O",
        description:
          "Program entry points, namespace scoping, formatted terminal output, and standard streams.",
        submoduleCount: 15,
        sourceFilesCount: 22,
        estimatedHours: "10 Hours",
        difficulty: "Beginner" as const,
        keyTopics: [
          "Stream I/O Architecture",
          "Namespace Scoping",
          "Formatted Manipulators (<iomanip>)",
          "Process Return Codes",
          "Fundamental Data Types",
        ],
        submodules: [],
      },
      {
        id: "mod-02",
        moduleNumber: "02",
        title: "Pointers, Memory Addresses & The Stack",
        description:
          "Memory layouts, address-of operator (&), pointer dereferencing (*), and pointer arithmetic.",
        submoduleCount: 18,
        sourceFilesCount: 26,
        estimatedHours: "14 Hours",
        difficulty: "Intermediate" as const,
        keyTopics: [
          "Stack Frame Layouts",
          "Address-Of & Dereferencing",
          "Pointer Arithmetic Invariants",
          "Nullptr Defensive Guards",
          "Raw Memory Hex Dumps",
        ],
        submodules: [],
      },
      {
        id: "mod-03",
        moduleNumber: "03",
        title: "Dynamic Heap Allocation & Memory Pools",
        description:
          "Manual dynamic allocation, memory leak prevention, Valgrind telemetry, and contiguous buffers.",
        submoduleCount: 16,
        sourceFilesCount: 24,
        estimatedHours: "16 Hours",
        difficulty: "Advanced" as const,
        keyTopics: [
          "new / delete Operator Mechanics",
          "Heap Fragmentation & Leaks",
          "Contiguous Dynamic Arrays",
          "Alignment & Memory Padding",
          "Deterministic Arena Allocator",
        ],
        submodules: [],
      },
      {
        id: "mod-04",
        moduleNumber: "04",
        title: "RAII Idiom & Modern Smart Pointers",
        description:
          "Deterministic resource acquisition, std::unique_ptr, std::shared_ptr, and std::weak_ptr.",
        submoduleCount: 16,
        sourceFilesCount: 25,
        estimatedHours: "15 Hours",
        difficulty: "Advanced" as const,
        keyTopics: [
          "RAII Deterministic Lifecycles",
          "std::unique_ptr Move Semantics",
          "std::shared_ptr Reference Counts",
          "std::weak_ptr Cycle Breaking",
          "Custom Smart Deleters",
        ],
        submodules: [],
      },
      {
        id: "mod-05",
        moduleNumber: "05",
        title: "Standard Template Library (STL) Algorithms",
        description:
          "Iterators, std::sort, std::find_if, std::transform, and lambda expression predicates.",
        submoduleCount: 20,
        sourceFilesCount: 30,
        estimatedHours: "18 Hours",
        difficulty: "Intermediate" as const,
        keyTopics: [
          "Bidirectional & Random Iterators",
          "std::transform Pipeline Mapping",
          "Lambda Context Captures",
          "Sort Invariants O(N log N)",
          "Predicate Filter Functors",
        ],
        submodules: [],
      },
      {
        id: "mod-06",
        moduleNumber: "06",
        title: "Object-Oriented Architecture & Polymorphism",
        description:
          "Encapsulation, virtual method dispatch tables (vtable), Rule of Five, and abstract interfaces.",
        submoduleCount: 18,
        sourceFilesCount: 28,
        estimatedHours: "16 Hours",
        difficulty: "Intermediate" as const,
        keyTopics: [
          "Virtual Function Dispatch (vtable)",
          "Rule of Three / Five Invariants",
          "Pure Virtual Abstract Interfaces",
          "Deep vs Shallow Copy Semantics",
          "Const-Correct Object APIs",
        ],
        submodules: [],
      },
      {
        id: "mod-07",
        moduleNumber: "07",
        title: "Modern Template Metaprogramming & Concepts",
        description:
          "Compile-time code generation, variadic templates, constexpr evaluations, and C++20 concepts.",
        submoduleCount: 14,
        sourceFilesCount: 20,
        estimatedHours: "20 Hours",
        difficulty: "Expert" as const,
        keyTopics: [
          "C++20 Type Concepts & Requires",
          "SFINAE Pattern Elimination",
          "Variadic Parameter Unpacking",
          "Compile-Time Constexpr Logic",
          "Template Type Specialization",
        ],
        submodules: [],
      },
      {
        id: "mod-08",
        moduleNumber: "08",
        title: "Concurrent Systems & Thread Synchronization",
        description:
          "std::jthread lifecycles, mutual exclusion primitives, atomic memory barriers, and lock guards.",
        submoduleCount: 16,
        sourceFilesCount: 25,
        estimatedHours: "18 Hours",
        difficulty: "Expert" as const,
        keyTopics: [
          "std::jthread & RAII Joining",
          "std::mutex & std::lock_guard",
          "Atomic Flags & Memory Fences",
          "Condition Variable Notifications",
          "Deadlock Elimination Protocols",
        ],
        submodules: [],
      },
    ],
    []
  );

  const modules = project.codeLearningModules || defaultModules;

  // Filtered Modules with Instant Search & Difficulty Filtering
  const filteredModules = useMemo(() => {
    return modules.filter((m) => {
      const q = moduleSearchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        m.title.toLowerCase().includes(q) ||
        m.moduleNumber.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        (m.keyTopics && m.keyTopics.some((t) => t.toLowerCase().includes(q)));

      const matchesDifficulty =
        selectedDifficultyFilter === "All" || m.difficulty === selectedDifficultyFilter;

      return matchesSearch && matchesDifficulty;
    });
  }, [modules, moduleSearchQuery, selectedDifficultyFilter]);

  // Aggregated Telemetry Stats for Section 3
  const totalModulesCount = modules.length;
  const totalSubmodulesCount = useMemo(() => {
    return modules.reduce(
      (acc, m) => acc + (m.submoduleCount || (m.submodules ? m.submodules.length : 0)),
      0
    );
  }, [modules]);

  const totalSourceFilesCount = useMemo(() => {
    return modules.reduce((acc, m) => {
      if (m.sourceFilesCount) return acc + m.sourceFilesCount;
      const subCodeCount = m.submodules
        ? m.submodules.reduce((sAcc, s) => sAcc + (s.sourceCodeFiles ? s.sourceCodeFiles.length : (s.hasCode ? 1 : 0)), 0)
        : 0;
      return acc + (subCodeCount || Math.round((m.submoduleCount || 12) * 1.3));
    }, 0);
  }, [modules]);

  const totalEstimatedHours = useMemo(() => {
    return modules.reduce((acc, m) => {
      if (m.estimatedHours) {
        const parsed = parseInt(m.estimatedHours, 10);
        return acc + (isNaN(parsed) ? 14 : parsed);
      }
      return acc + Math.round((m.submoduleCount || 12) * 0.9);
    }, 0);
  }, [modules]);

  const handleCopyPortal = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedPortalLink(true);
      setTimeout(() => setCopiedPortalLink(false), 2000);
    }
  };

  // =========================================================================
  // Section 4: Tech Stack (Categorized & Dynamic)
  // =========================================================================
  const defaultLanguages = [
    "C++20",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "PHP",
    "C",
    "C#",
    "Go",
    "Rust",
  ];
  const defaultFrameworks = [
    "C++ Standard Library",
    "STL Containers",
    "STL Algorithms",
    "Smart Pointers",
    "Multithreading",
    "C++20 Concepts",
    "C++20 Ranges",
    "AddressSanitizer",
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "Flask",
    "Spring",
  ];
  const defaultTools = [
    "MSVC",
    "GCC",
    "Clang",
    "VS Code",
    "Git",
    "GitHub",
    "Docker",
    "CMake",
    "Jupyter Notebook",
    "GDB",
    "Valgrind",
  ];

  const explicitTech = project.codeLearningTechStack;
  const rawTech = project.techStack || [];

  const programmingLanguages =
    explicitTech?.programmingLanguages ||
    rawTech
      .filter((t) => defaultLanguages.some((dl) => t.toLowerCase().includes(dl.toLowerCase())))
      .map((t) => ({
        name: t,
        role: "Primary language dialect for curriculum source translation units and compilable programs",
      }));

  const frameworksAndLibraries =
    explicitTech?.frameworksAndLibraries ||
    rawTech
      .filter((t) => defaultFrameworks.some((df) => t.toLowerCase().includes(df.toLowerCase())))
      .map((t) => ({
        name: t,
        role: "Runtime libraries, algorithmic containers, and language specification paradigms",
      }));

  const developmentToolsAndEnvironment =
    explicitTech?.developmentToolsAndEnvironment ||
    rawTech
      .filter(
        (t) =>
          !defaultLanguages.some((dl) => t.toLowerCase().includes(dl.toLowerCase())) &&
          !defaultFrameworks.some((df) => t.toLowerCase().includes(df.toLowerCase()))
      )
      .map((t) => ({
        name: t,
        role: "Compiler toolchain, diagnostic probers, or execution environment",
      }));

  const filteredTechGroups = [
    {
      group: "Programming Languages",
      items: programmingLanguages,
      visible:
        selectedTechFilter === "All" ||
        selectedTechFilter === "Programming Languages",
    },
    {
      group: "Frameworks & Libraries",
      items: frameworksAndLibraries,
      visible:
        selectedTechFilter === "All" ||
        selectedTechFilter === "Frameworks & Libraries",
    },
    {
      group: "Development Tools & Environment",
      items: developmentToolsAndEnvironment,
      visible:
        selectedTechFilter === "All" ||
        selectedTechFilter === "Development Tools & Environment",
    },
  ].filter((g) => g.items.length > 0 && g.visible);

  // =========================================================================
  // Section 5: Recommended Practice Projects & Applied Capstones
  // =========================================================================
  const defaultPracticeProjects = useMemo(
    () => [
      {
        title: "Deterministic CLI Telemetry & POS Ledger Engine",
        tier: "TIER 01 // FOUNDATIONAL",
        difficulty: "Foundational — Core Systems",
        estimatedTime: "6 — 8 Study Hours",
        description:
          "Production-grade terminal cash register and transactional ledger system incorporating receipt stream formatting, memory-safe data structures, and inventory reconciliation.",
        scenario:
          "Enterprise point-of-sale clients require rock-solid terminal interfaces with zero crashes, reproducible receipt logging, and graceful disk recovery under sudden process termination.",
        architecturalConstraints: [
          "Zero global state; all transaction context strictly encapsulated in RAII classes.",
          "Deterministic tabular alignment using <iomanip> manipulators (setw, setfill).",
          "Atomic disk persistence protocol preventing corrupted state during writes.",
        ],
        acceptanceCriteria: [
          "100% byte-for-byte formatted tabular receipt output match across MSVC, GCC, and Clang.",
          "Full test harness coverage validating inventory deducts, taxes, and discounts.",
          "Clean compilation under -Wall -Wextra -Wpedantic with zero diagnostic warnings.",
        ],
        keyConcepts: ["Encapsulation", "Stream I/O (<iomanip>)", "File Persistence", "Error Handling"],
        techStack: ["C++20", "File Streams (<fstream>)", "std::chrono", "Modern STL"],
        deliverable: "Self-Contained Standalone CLI Binary",
        highlights: [
          "Handles multi-item cart management with atomic disk persistence.",
          "Generates formatted ASCII receipts via strict <iomanip> manipulation.",
          "Zero external dependencies, compiles to single standalone binary.",
        ],
      },
      {
        title: "High-Performance Ring Buffer & Custom Allocator",
        tier: "TIER 02 // INTERMEDIATE",
        difficulty: "Intermediate — Memory Discipline",
        estimatedTime: "10 — 12 Study Hours",
        description:
          "Fixed-capacity circular queue and custom arena allocator engineered with explicit pointer arithmetic, cache-friendly contiguous layout, and zero dynamic heap reallocations.",
        scenario:
          "High-frequency processing loops degrade in latency when relying on standard heap allocators due to memory fragmentation and lock contention. This challenge requires building a deterministic ring buffer.",
        architecturalConstraints: [
          "Exclusive ownership managed via std::unique_ptr<T[]> with zero raw delete calls.",
          "O(1) amortized enqueue and dequeue operations with zero dynamic heap reallocations.",
          "Total AddressSanitizer and LeakSanitizer clean pass under 1,000,000 stress cycles.",
        ],
        acceptanceCriteria: [
          "Ring buffer maintains strict FIFO ordering across boundary wraparound scenarios.",
          "Custom move constructors transfer buffer ownership with zero deep memory copies.",
          "Exception-safe strong guarantee when handling element push/pop errors.",
        ],
        keyConcepts: ["RAII Smart Pointers", "Pointer Arithmetic", "Move Semantics", "Cache Locality"],
        techStack: ["C++20", "std::unique_ptr", "AddressSanitizer", "Memory Invariants"],
        deliverable: "Header-Only Memory Utility Library",
        highlights: [
          "O(1) push and pop operations with zero continuous heap allocations.",
          "Custom move constructors eliminating unnecessary memory duplications.",
          "100% leak-free verification under AddressSanitizer stress conditions.",
        ],
      },
      {
        title: "Multi-Threaded In-Memory Key-Value Store & Distributed Cache",
        tier: "TIER 03 // SYSTEMS CAPSTONE",
        difficulty: "Advanced — Industry Capstone",
        estimatedTime: "16 — 20 Study Hours",
        description:
          "High-throughput concurrent in-memory key-value cache engine utilizing shared_mutex read/write locks, LRU eviction policies, atomic flags, and background TTL expiration workers.",
        scenario:
          "Distributed microservice architectures demand ultra-low latency caching tiers capable of parallel lookups while background processes evict stale items without locking user queries.",
        architecturalConstraints: [
          "Fine-grained reader-writer lock synchronization via std::shared_mutex.",
          "Asynchronous background worker runner managed via modern std::jthread.",
          "Zero data races verified under ThreadSanitizer (TSan) at 16 concurrent threads.",
        ],
        acceptanceCriteria: [
          "Achieves >450,000 operations/sec throughput under simulated multi-core stress.",
          "LRU eviction policy reliably frees least-frequently accessed keys at capacity.",
          "Deterministic graceful shutdown with zero thread leaks or orphaned locks.",
        ],
        keyConcepts: ["Concurrency", "std::shared_mutex", "Atomic Primitives", "std::jthread", "LRU Eviction"],
        techStack: ["C++20", "std::shared_mutex", "std::jthread", "ThreadSanitizer", "Atomic"],
        deliverable: "Multi-Threaded Embedded Cache Engine",
        highlights: [
          "Concurrent reader-writer lock synchronization with zero data races.",
          "Asynchronous TTL expiration background thread runner.",
          "Benchmarked at 450,000+ operations/sec under 16 concurrent threads.",
        ],
      },
    ],
    []
  );

  const practicalProjects = project.codeLearningPracticalProjects || defaultPracticeProjects;

  const learningOutcomes = project.codeLearningOutcomes || [
    {
      pillar: "Memory Architecture & Safety Mastery",
      skills: [
        {
          title: "Deterministic Resource Acquisition (RAII)",
          description:
            "Architect zero-leak software systems utilizing modern smart pointers and explicit ownership semantics.",
        },
        {
          title: "Pointer Arithmetic & Cache Locality",
          description:
            "Navigate raw heap/stack allocations, memory alignments, and CPU cache-conscious contiguous data buffers.",
        },
      ],
    },
    {
      pillar: "Modern Language Standards & Metaprogramming",
      skills: [
        {
          title: "Generic Templates & Concept Constraints",
          description:
            "Author compile-time verified generic abstractions with expressive compiler diagnostics.",
        },
        {
          title: "Standard Library STL Vectorization",
          description:
            "Harness high-performance standard containers and functional algorithm pipelines for algorithmic efficiency.",
        },
      ],
    },
    {
      pillar: "Systems Software & Production Discipline",
      skills: [
        {
          title: "Concurrent Multi-Threaded Execution",
          description:
            "Synchronize parallel execution threads using mutexes, lock guards, and atomic telemetry flags without race conditions.",
        },
        {
          title: "Cross-Platform Native Toolchains",
          description:
            "Compile and link multi-file translation units cleanly across MSVC, GCC, and Clang compilers with zero external dependencies.",
        },
      ],
    },
  ];

  // =========================================================================
  // Section 6: Project Resources
  // =========================================================================
  const repoUrl = project.repoUrl || "";
  const isPublicRepo = Boolean(repoUrl && repoUrl.trim().length > 0);

  const documentation = project.codeLearningDocumentation || {
    title: "Curriculum Specification & Compilation Guide",
    description:
      "Comprehensive pedagogical syllabus detailing compiler flags, translation unit compilation commands, and memory safety invariants.",
    specs: [
      { label: "Target Dialect", value: "C++20 (ISO/IEC 14882:2020)" },
      { label: "Supported Compilers", value: "MSVC 19+, GCC 11+, Clang 13+" },
      { label: "Pedagogical Modules", value: "17 Comprehensive Tiers" },
      { label: "Verified Outputs", value: "250 Deterministic Captures" },
    ],
    docsUrl: repoUrl ? `${repoUrl}#readme` : undefined,
  };

  const supplementaryResources = project.codeLearningSupplementaryResources || {
    title: "Supplementary Learning Artifacts & Starter Bundles",
    description:
      "Essential supplementary downloads designed to accelerate lab practice and compiler troubleshooting.",
    resources: [
      {
        name: "C++20 Memory & Syntax Quick Reference Sheet",
        type: "Cheat Sheet" as const,
        format: "MARKDOWN / PDF",
        url: repoUrl || undefined,
      },
      {
        name: "Standard Makefile & CMakeLists.txt Multi-Compiler Preset",
        type: "Config" as const,
        format: "BUILD_CONFIG",
        url: repoUrl || undefined,
      },
      {
        name: "250 Verified Terminal Stdout Output Captures Directory",
        type: "Dataset" as const,
        format: "RAW_TEXT / LOG",
        url: repoUrl || undefined,
      },
    ],
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* =========================================================================
          SECTION 1 — [ 01 // CURRICULUM CONSOLE & LEARNING PATH ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#110905]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(249,115,22,0.15)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/70" />

        {/* Ambient Teal / Mint Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-orange-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-300">
              [ 01 // CURRICULUM CONSOLE & LEARNING PATH ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-orange-300">
              <GraduationCap className="h-3 w-3 text-orange-400" />
              {learningInfo.learningCategory}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-orange-300">
              <Code2 className="h-3 w-3 text-orange-400" />
              {learningInfo.difficultyLevel}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div className="flex flex-col h-full flex-1">
              {/* Header Bar */}
              <div className="flex items-center justify-between rounded-t-xl border border-orange-500/30 bg-orange-950/40 px-4 py-2 text-xs font-mono text-orange-300">
                <span className="flex items-center gap-2 text-orange-200">
                  <Terminal className="h-3.5 w-3.5 text-orange-400" />
                  &gt; CURRICULUM_RUNTIME // SYS.VIEWPORT
                </span>
                <span className="text-[10px] text-orange-400/80">ONLINE // VERIFIED_PEDAGOGY</span>
              </div>

              {/* Terminal Body */}
              <div className="rounded-b-xl border-x border-b border-orange-500/25 bg-[#1A0F08]/95 p-5 sm:p-6 text-slate-300 shadow-inner flex flex-col flex-1 justify-between">
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-orange-500/30 bg-black/60 shadow-lg">

                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-orange-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-orange-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-orange-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-orange-400/80" />

                    {/* Hero Image with smooth hover scale */}
                    
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
                  {learningDescription.length > 500
                    ? `${learningDescription.slice(0, 500).trim()}...`
                    : learningDescription}
                </p>

                {/* Capability Badges Strip (Max 3) */}
                <div className="pt-4 border-t border-orange-500/20 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-orange-400/30 bg-orange-500/10 px-2.5 py-1 font-mono text-[11px] text-orange-300">
                    <CheckCircle2 className="h-3 w-3 text-orange-400" />
                    Hands-On Compilation Units
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-orange-400/30 bg-orange-500/10 px-2.5 py-1 font-mono text-[11px] text-orange-300">
                    <Cpu className="h-3 w-3 text-orange-400" />
                    Memory & Architecture Focused
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-orange-400/30 bg-orange-500/10 px-2.5 py-1 font-mono text-[11px] text-orange-300">
                    <Activity className="h-3 w-3 text-orange-400" />
                    Verified Output Telemetry
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Learning Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-orange-500/30 bg-[#1A0F08]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-orange-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-orange-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3.5 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-orange-400/80">System Classification</dt>
                  <dd className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <Box className="h-3.5 w-3.5 text-orange-400" />
                    {telemetry.projectType}
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-orange-400/80">Operating Environment</dt>
                  <dd className="text-orange-300 font-semibold flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-orange-400" />
                    {telemetry.targetPlatform}
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-orange-400/80">Domain Focus</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-orange-400" />
                    {telemetry.primaryDomain}
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-orange-400/80">Engineering Pipeline</dt>
                  <dd className="text-orange-300 font-semibold flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-orange-400" />
                    <span className="truncate">{telemetry.architecturePipeline}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-orange-400/80">Testing & Audit</dt>
                  <dd className="text-orange-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                    <span>Passed</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-orange-400/80">Project Status</dt>
                  <dd className="text-orange-300 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                    {telemetry.projectStatus}
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] uppercase text-orange-400/80">Project Year</dt>
                  <dd className="text-slate-200 font-semibold">{telemetry.projectYear}</dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  isPublicRepo
                    ? "border-orange-500/35 bg-[#1A0F08]/90 hover:border-orange-400/60 hover:shadow-[0_0_25px_rgba(249,115,22,0.2)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-orange-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-orange-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-orange-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-orange-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-orange-300">
                      {isPublicRepo ? (
                        <FolderGit2 className="h-3.5 w-3.5 text-orange-400" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 text-slate-400" />
                      )}
                      <span className="truncate">
                        {isPublicRepo
                          ? "PUBLIC GITHUB REPOSITORY"
                          : "RESTRICTED COURSEWARE REPOSITORY"}
                      </span>
                    </div>
                    {isPublicRepo ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-orange-400/40 bg-orange-950/60 px-2 py-0.5 font-mono text-[9px] text-orange-300 font-semibold shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />PUBLIC
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
                      <span className={isPublicRepo ? "text-orange-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
                        {isPublicRepo ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / NDA"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">VCS GATEWAY:</span>
                      <span className="text-slate-200 text-[11px]">GitHub Cloud VCS</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400">
                      <span className="text-[10px]">SECURITY AUDIT:</span>
                      <span className={isPublicRepo ? "text-emerald-400 font-semibold text-[11px]" : "text-amber-400 font-semibold text-[11px]"}>
                        {isPublicRepo ? "VERIFIED_PUBLIC" : "ENTERPRISE_CONFIDENTIAL"}
                      </span>
                    </div>
                  </div>
                </div>

                {isPublicRepo && repoUrl ? (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onTriggerPulse?.()}
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-400 to-amber-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.01]"
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

            <div className="mt-5 pt-3 border-t border-orange-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-orange-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — [ 02 // LEARNING ROADMAP & CURRICULUM BLUEPRINT ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#110905]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-orange-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-300">
              [ 02 // LEARNING ROADMAP & CURRICULUM BLUEPRINT ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-orange-400/80">
            PEDAGOGICAL_ROADMAP // COMPETENCY_TREE
          </span>
        </div>

        {/* Top Split: Prerequisites & Foundation Gates vs Learning Objectives */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Left Column: Prerequisites */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-orange-500/25 pb-2.5 text-orange-300 font-mono text-xs uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4 text-orange-400" />
              <span>Prerequisites & Foundation Gates</span>
            </div>

            <div className="space-y-3.5">
              {prerequisites.map((prereq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-orange-500/20 bg-orange-950/15 p-4 transition-all hover:border-orange-400/40 hover:bg-orange-950/25"
                >
                  <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2 mb-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    {prereq.category}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                    {prereq.description}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-300 font-sans border-t border-white/5 pt-2">
                    {prereq.items.map((it, itIdx) => (
                      <li key={itIdx} className="flex items-start gap-1.5">
                        <Check className="h-3.5 w-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Learning Objectives */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2 border-b border-emerald-500/25 pb-2.5 text-orange-300 font-mono text-xs uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-orange-400" />
              <span>Learning Objectives & Competencies</span>
            </div>

            <div className="space-y-3.5">
              {learningObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-emerald-500/25 bg-emerald-950/15 p-4 transition-all hover:border-emerald-400/45 hover:bg-emerald-950/25"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-semibold text-sm text-slate-100 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 flex-shrink-0" />
                      {obj.title}
                    </h4>
                    {obj.competencyCode && (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-orange-300 border border-orange-500/30 bg-emerald-950/50 px-2 py-0.5 rounded">
                        {obj.competencyCode}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {obj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Visual Curriculum Structure Roadmap */}
        <div className="relative z-10 rounded-2xl border border-orange-500/30 bg-[#1A0F08]/95 p-5 sm:p-7 shadow-inner">
          <div className="flex items-center justify-between border-b border-orange-500/20 pb-3 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-300">
              <Workflow className="h-4 w-4 text-orange-400" />
              <span className="font-bold uppercase tracking-wider">
                Visual Curriculum Structure Roadmap (Phase Progression)
              </span>
            </div>
            <span className="font-mono text-[10px] text-orange-400/80">3_TIER_PIPELINE</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 font-sans mb-6">
            {curriculumStructure.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {curriculumStructure.phases.map((ph, phIdx) => (
              <div
                key={phIdx}
                className="rounded-xl border border-orange-500/25 bg-orange-950/20 p-4 transition-all hover:border-orange-400/50 hover:bg-orange-950/30"
              >
                <div className="flex items-center justify-between border-b border-orange-500/20 pb-2 mb-2.5">
                  <span className="font-mono text-[10px] font-bold uppercase text-orange-400">
                    {ph.phaseNumber}
                  </span>
                  <span className="font-mono text-[10px] text-orange-400 bg-emerald-950/50 border border-orange-500/30 px-2 py-0.5 rounded">
                    {ph.moduleRange}
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-slate-100 mb-1">
                  {ph.phaseTitle}
                </h4>
                <p className="font-mono text-[11px] text-orange-300/80 mb-3">
                  Difficulty: {ph.difficulty}
                </p>
                <ul className="space-y-1.5 border-t border-white/5 pt-2.5 text-xs text-slate-300 font-sans">
                  {ph.topics.map((top, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-1.5">
                      <ArrowRight className="h-3 w-3 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="truncate">{top}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — [ 03 // CURRICULUM MODULES & TOPIC ARCHITECTURE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#110905]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/70" />

        {/* Ambient Teal Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-orange-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-300">
              [ 03 // CURRICULUM MODULES & TOPIC ARCHITECTURE ]
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-950/40 px-3 py-0.5 text-orange-300 text-[10px] uppercase">
              <BookOpen className="h-3 w-3 text-orange-400" />
              {totalModulesCount} MODULE TIERS
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-950/40 px-3 py-0.5 text-orange-300 text-[10px] uppercase">
              <ShieldCheck className="h-3 w-3 text-orange-400" />
              100% VERIFIED SYLLABUS
            </span>
          </div>
        </div>

        {/* Top Telemetry Aggregator Bar */}
        <div className="relative z-10 mb-8 rounded-2xl border border-orange-500/25 bg-[#1A0F08]/95 p-4 sm:p-5 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase text-orange-400/80 block mb-1">
                Pedagogical Modules
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-baseline gap-1.5">
                <span>{totalModulesCount}</span>
                <span className="text-xs text-orange-400 font-normal">Stages</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 block mt-1">
                Foundational to Advanced
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase text-orange-400/80 block mb-1">
                Aggregated Topics
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-baseline gap-1.5">
                <span>{totalSubmodulesCount}+</span>
                <span className="text-xs text-orange-400 font-normal">Units</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 block mt-1">
                Submodule Invariants
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase text-orange-400/80 block mb-1">
                Code Artifacts
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-baseline gap-1.5">
                <span>{totalSourceFilesCount}+</span>
                <span className="text-xs text-orange-400 font-normal">Files</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 block mt-1">
                Compilable Programs
              </span>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
              <span className="font-mono text-[10px] uppercase text-orange-400/80 block mb-1">
                Curriculum Rigor
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-orange-300 flex items-baseline gap-1.5">
                <span>100%</span>
                <span className="text-xs text-orange-400 font-normal">Verified</span>
              </div>
              <span className="font-mono text-[10px] text-slate-400 block mt-1">
                Zero Leaks & Warnings
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Instant Search Control Bar */}
        <div className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-400/70" />
            <input
              type="text"
              placeholder="Search module title, concept topics, or stage..."
              value={moduleSearchQuery}
              onChange={(e) => setModuleSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-orange-500/30 bg-[#1A0F08] pl-10 pr-4 py-2 text-xs font-mono text-slate-200 placeholder-slate-500 focus:border-orange-400 focus:outline-none transition-colors"
            />
            {moduleSearchQuery && (
              <button
                onClick={() => setModuleSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Difficulty Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(["All", "Beginner", "Intermediate", "Advanced", "Expert"] as const).map((diff) => {
              const count =
                diff === "All"
                  ? modules.length
                  : modules.filter((m) => m.difficulty === diff).length;

              return (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficultyFilter(diff)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                    selectedDifficultyFilter === diff
                      ? "border border-orange-400/60 bg-orange-500/20 text-orange-200 font-semibold shadow-[0_0_12px_rgba(249,115,22,0.25)]"
                      : "border border-white/5 bg-black/30 text-slate-400 hover:text-slate-200 hover:border-orange-500/30"
                  }`}
                >
                  <span>{diff}</span>
                  <span className="font-mono text-[10px] opacity-70">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400 mb-6 pb-2 border-b border-white/5">
          <span>
            SHOWING <span className="text-orange-300 font-semibold">{filteredModules.length}</span> OF{" "}
            {modules.length} CURRICULUM MODULES
          </span>
          <span className="text-[10px] text-orange-400/80">SYSTEM_MODULE_CATALOG</span>
        </div>

        {/* Bento Grid Showcase Mandiri */}
        {filteredModules.length > 0 ? (
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredModules.map((mod) => (
              <div
                key={mod.id}
                className="rounded-2xl border border-orange-500/25 bg-[#1A0F08]/90 p-5 sm:p-6 transition-all hover:border-orange-400/50 hover:bg-[#0A1A20] hover:shadow-[0_12px_40px_rgba(249,115,22,0.15)] flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-orange-500/20 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-orange-300 bg-orange-950/60 border border-orange-500/30 px-2.5 py-1 rounded">
                        MOD // {mod.moduleNumber}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded font-mono text-[10px] uppercase font-semibold ${
                        mod.difficulty === "Beginner"
                          ? "border border-orange-400/30 bg-orange-950/40 text-orange-300"
                          : mod.difficulty === "Intermediate"
                          ? "border border-orange-400/40 bg-orange-950/50 text-orange-200"
                          : mod.difficulty === "Advanced"
                          ? "border border-emerald-400/40 bg-emerald-950/40 text-orange-300"
                          : "border border-orange-300/40 bg-orange-900/40 text-orange-100"
                      }`}
                    >
                      {mod.difficulty}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-orange-200 transition-colors mb-2">
                    {mod.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                    {mod.description}
                  </p>

                  {/* Micro-Datapad Matrix (4 items) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4 border-y border-white/5 py-3">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase text-orange-400/80">Lessons</span>
                      <span className="font-mono text-xs font-bold text-slate-100">
                        {mod.submoduleCount || (mod.submodules ? mod.submodules.length : 12)} Units
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase text-orange-400/80">Programs</span>
                      <span className="font-mono text-xs font-bold text-orange-300">
                        {mod.sourceFilesCount || Math.round((mod.submoduleCount || 12) * 1.3)} Files
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase text-orange-400/80">Est. Effort</span>
                      <span className="font-mono text-xs font-bold text-slate-200">
                        {mod.estimatedHours || `${Math.round((mod.submoduleCount || 12) * 0.9)} Hours`}
                      </span>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] uppercase text-orange-400/80">Status</span>
                      <span className="font-mono text-xs font-bold text-orange-300 flex items-center gap-1">
                        <Check className="h-3 w-3 text-orange-400" />
                        100% OK
                      </span>
                    </div>
                  </div>

                  {/* Key Concepts / Core Topics */}
                  {mod.keyTopics && mod.keyTopics.length > 0 && (
                    <div className="mb-4">
                      <span className="font-mono text-[10px] uppercase font-bold text-orange-400 block mb-2">
                        Core Conceptual Invariants:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {mod.keyTopics.map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded border border-orange-500/25 bg-orange-950/40 text-orange-300"
                          >
                            <span className="text-orange-400">›</span>
                            <span>{topic}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Progress Bar + Spec Identifier */}
                <div className="mt-4 pt-3 border-t border-orange-500/15">
                  <div className="h-1 w-full rounded-full bg-orange-950 overflow-hidden mb-2">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-orange-500 via-emerald-400 to-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>UNIT_SPEC // M{mod.moduleNumber}_STABLE</span>
                    <span className="text-orange-400 font-semibold">VERIFIED_COMPLETE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-orange-500/20 bg-black/40">
            <BookOpen className="h-10 w-10 text-orange-400/40 mb-3" />
            <h5 className="font-mono text-sm font-bold text-white mb-1">
              NO MODULES MATCH QUERY
            </h5>
            <p className="font-mono text-xs text-slate-400 mb-4">
              Try adjusting your search terms or filter criteria.
            </p>
            <button
              onClick={() => {
                setModuleSearchQuery("");
                setSelectedDifficultyFilter("All");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-500/30 bg-orange-950/40 text-orange-300 text-xs font-mono hover:bg-orange-950/60 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 4 — [ 04 // LEARNING TECH STACK & RUNTIME ECOSYSTEM ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#110905]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-orange-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-300">
              [ 04 // LEARNING TECH STACK & RUNTIME ECOSYSTEM ]
            </span>
          </div>

          {/* HUD Filter Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-orange-500/30 bg-[#1A0F08]">
            {(
              [
                "All",
                "Programming Languages",
                "Frameworks & Libraries",
                "Development Tools & Environment",
              ] as const
            ).map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setSelectedTechFilter(filterOption)}
                className={`px-3 py-1 rounded-lg font-mono text-[10px] sm:text-xs transition-all ${
                  selectedTechFilter === filterOption
                    ? "bg-orange-600 text-white font-bold shadow-[0_0_12px_rgba(249,115,22,0.5)]"
                    : "text-slate-400 hover:text-orange-200"
                }`}
              >
                {filterOption}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Tech Grid */}
        <div className="relative z-10 space-y-6">
          {filteredTechGroups.map((groupItem, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-orange-300 uppercase tracking-wider border-b border-orange-500/15 pb-1.5">
                <Code2 className="h-3.5 w-3.5 text-orange-400" />
                <span>{groupItem.group}</span>
                <span className="text-[10px] text-orange-400/70">
                  ({groupItem.items.length} TECHNOLOGIES)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {groupItem.items.map((tech, tIdx) => (
                  <div
                    key={tIdx}
                    className="group relative flex items-center gap-2.5 rounded-xl border border-orange-500/20 bg-[#1A0F08]/90 p-3 transition-all hover:border-orange-400/50 hover:bg-orange-500/10 hover:-translate-y-0.5"
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-orange-400/30 bg-orange-500/15 text-orange-300 font-mono font-bold text-[11px] group-hover:scale-105 transition-transform">
                      {tech.name.substring(0, 2).toUpperCase()}
                    </div>
                    <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-orange-200 truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — [ 05 // RECOMMENDED PRACTICE PROJECTS & APPLIED CAPSTONES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#110905]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/70" />

        {/* Ambient Teal Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-orange-500/20 pb-4 mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-300">
              [ 05 // RECOMMENDED PRACTICE PROJECTS & APPLIED CAPSTONES ]
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-950/40 px-3 py-0.5 text-orange-300 text-[10px] uppercase">
              <Terminal className="h-3 w-3 text-orange-400" />
              3 TIERED TRACKS
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-950/40 px-3 py-0.5 text-orange-300 text-[10px] uppercase">
              <ShieldCheck className="h-3 w-3 text-orange-400" />
              INDUSTRY SPECIFICATIONS
            </span>
          </div>
        </div>

        {/* 3 Tiered Practice Project Cards */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {practicalProjects.map((proj, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-orange-500/25 bg-[#1A0F08]/90 p-5 sm:p-6 transition-all hover:border-orange-400/50 hover:bg-[#0A1A20] hover:shadow-[0_12px_40px_rgba(249,115,22,0.15)] flex flex-col justify-between group"
            >
              <div>
                {/* Card Topbar */}
                <div className="flex items-center justify-between border-b border-orange-500/20 pb-3 mb-4">
                  <span className="font-mono text-[10px] font-bold text-orange-300 bg-orange-950/60 border border-orange-500/30 px-2 py-0.5 rounded">
                    {proj.tier || `TIER 0${idx + 1}`}
                  </span>
                  <span className="font-mono text-[10px] text-orange-400 font-semibold">
                    {proj.difficulty || "Systems Grade"}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-orange-200 transition-colors mb-2">
                  {proj.title}
                </h4>

                {/* Scenario Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {proj.description}
                </p>

                {/* Problem Context */}
                {proj.scenario && (
                  <div className="mb-4 rounded-xl border border-orange-500/20 bg-black/40 p-3">
                    <span className="font-mono text-[9px] uppercase font-bold text-orange-400 block mb-1">
                      Target Enterprise Problem:
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans italic">
                      &quot;{proj.scenario}&quot;
                    </p>
                  </div>
                )}

                {/* Architectural Requirements & Constraints */}
                <div className="mb-4">
                  <span className="font-mono text-[10px] uppercase font-bold text-orange-300 block mb-2">
                    Architectural Constraints (NFR):
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {(proj.architecturalConstraints || proj.highlights).map((con, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-1.5">
                        <span className="text-orange-400 font-bold">›</span>
                        <span className="text-[11px] leading-relaxed">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Acceptance Criteria */}
                {proj.acceptanceCriteria && (
                  <div className="mb-4 border-t border-white/5 pt-3">
                    <span className="font-mono text-[10px] uppercase font-bold text-orange-400 block mb-2">
                      Acceptance Criteria (100% Pass):
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                      {proj.acceptanceCriteria.map((crit, crIdx) => (
                        <li key={crIdx} className="flex items-start gap-1.5">
                          <Check className="h-3.5 w-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span className="text-[11px] leading-relaxed">{crit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Concepts Pills */}
                {proj.keyConcepts && (
                  <div className="mb-4">
                    <span className="font-mono text-[9px] uppercase text-slate-400 block mb-1.5">
                      Concepts Exercised:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {proj.keyConcepts.map((kc, kIdx) => (
                        <span
                          key={kIdx}
                          className="font-mono text-[9px] px-2 py-0.5 rounded border border-orange-500/25 bg-orange-950/40 text-orange-300"
                        >
                          {kc}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Deliverable + Estimated Effort */}
              <div className="mt-4 pt-3 border-t border-orange-500/15 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-orange-400 font-medium">
                  {proj.deliverable || "Standalone Binary"}
                </span>
                <span>{proj.estimatedTime || "8-10 Hours"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Learning Outcomes & Mastery Matrix */}
        <div className="relative z-10 rounded-2xl border border-orange-500/30 bg-[#1A0F08]/95 p-5 sm:p-7 shadow-inner">
          <div className="flex items-center justify-between border-b border-orange-500/20 pb-3 mb-5">
            <div className="flex items-center gap-2 text-xs font-mono text-orange-300">
              <GraduationCap className="h-4 w-4 text-orange-400" />
              <span className="font-bold uppercase tracking-wider">
                Demonstrated Engineering Competencies & Outcomes
              </span>
            </div>
            <span className="font-mono text-[10px] text-orange-400/80">CERTIFIED_MASTERY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {learningOutcomes.map((pillar, pIdx) => (
              <div key={pIdx} className="space-y-3">
                <span className="font-mono text-xs uppercase font-bold text-orange-300 block border-b border-orange-500/20 pb-1">
                  {pillar.pillar}
                </span>
                <div className="space-y-2.5">
                  {pillar.skills.map((sk, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-lg border border-white/5 bg-black/30 p-3 hover:border-orange-500/30 transition-colors"
                    >
                      <h5 className="font-semibold text-xs text-slate-100 mb-1">
                        {sk.title}
                      </h5>
                      <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                        {sk.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* =========================================================================
          SECTION 6 — [ 06 // CURRICULUM VAULT & SYLLABUS GATES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-[#110905]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-orange-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-orange-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-orange-500/20 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-300">
              [ 06 // CURRICULUM VAULT & SYLLABUS GATES ]
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase text-orange-400/80">
            GITHUB_VCS // SYLLABUS_GATEWAYS
          </span>
        </div>

        {/* Symmetrical 3-Card Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* CARD 1 — Adaptive Repository Card (Universal Standard) */}
          <div
            className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-7 shadow-lg transition-all duration-300 ${
              isPublicRepo
                ? "border-orange-500/35 bg-[#1A0F08]/80 hover:border-orange-400/60 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                : "border-white/10 bg-black/60 hover:border-white/20"
            }`}
          >
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-orange-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-orange-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-orange-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-orange-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-orange-300">
                  {isPublicRepo ? (
                    <FolderGit2 className="h-4 w-4 text-orange-400" />
                  ) : (
                    <Lock className="h-4 w-4 text-slate-400" />
                  )}
                  <span>
                    {isPublicRepo
                      ? "PUBLIC GITHUB REPOSITORY"
                      : "RESTRICTED COURSEWARE REPOSITORY"}
                  </span>
                </div>
                {isPublicRepo ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/40 bg-orange-950/60 px-2.5 py-0.5 font-mono text-[10px] text-orange-300 font-semibold shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />PUBLIC</span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-slate-400 font-semibold">
                    <Lock className="h-3 w-3" />PRIVATE</span>
                )}
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {isPublicRepo ? "GitHub Repository" : "Private Academic Courseware"}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {isPublicRepo
                  ? "Explore the complete project repository on GitHub, including production source code, commit history, architectural assets, and technical documentation."
                  : "Source code access is restricted under non-disclosure agreements (NDA) or proprietary commercial rights. No public repository is published."}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">TOTAL MODULES:</span>
                  <span className="text-orange-300 font-semibold">{learningInfo.totalModules} Modules</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">ACCESS CLEARANCE:</span>
                  <span className={isPublicRepo ? "text-orange-300 font-semibold" : "text-slate-400 font-semibold"}>
                    {isPublicRepo ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / ACADEMIC"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">VCS GATEWAY:</span>
                  <span className="text-slate-200">GitHub Cloud VCS</span>
                </div>
              </div>
            </div>

            {isPublicRepo && repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTriggerPulse?.()}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 font-mono text-xs font-bold text-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.01]"
              >
                <span>ACCESS REPOSITORY</span>
                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 px-5 py-3 font-mono text-xs font-semibold text-slate-500 cursor-not-allowed">
                <Lock className="h-3.5 w-3.5 text-slate-600" />
                <span>RESTRICTED ACCESS</span>
              </div>
            )}
          </div>

          {/* CARD 2 — Learning Documentation & Syllabus Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-orange-500/30 bg-[#1A0F08]/95 p-5 sm:p-7 shadow-lg transition-all hover:border-orange-400/50 hover:shadow-[0_8px_32px_rgba(249,115,22,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-orange-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-orange-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-orange-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-orange-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-orange-500/20 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-orange-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileText className="h-4 w-4 text-orange-400" />
                  <span>Curriculum Taxonomy</span>
                </div>
                <span className="font-mono text-[10px] text-orange-400/80">
                  SYLLABUS_v2.0
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {documentation.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                {documentation.description}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                {documentation.specs.map((sp, spIdx) => (
                  <div key={spIdx} className="flex items-center justify-between text-slate-400">
                    <span className="uppercase text-[11px]">{sp.label}:</span>
                    <span className="text-slate-200 font-semibold">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {documentation.docsUrl ? (
              <a
                href={documentation.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTriggerPulse?.()}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-orange-500/40 bg-orange-500/10 px-4 py-3 font-mono text-xs font-semibold text-orange-300 hover:bg-orange-500/20 hover:text-white transition-all"
              >
                <FileCode2 className="h-4 w-4 text-orange-400" />
                <span>Inspect Technical Syllabus</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-orange-500/40 bg-orange-500/10 px-4 py-3 font-mono text-xs font-semibold text-orange-300 hover:bg-orange-500/20 hover:text-white transition-all"
              >
                <FileText className="h-4 w-4 text-orange-400" />
                <span>Inspect Syllabus Notes</span>
              </button>
            )}
          </div>

          {/* CARD 3 — Course Artifacts & Competencies Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-orange-500/30 bg-[#1A0F08]/95 p-5 sm:p-7 shadow-lg transition-all hover:border-orange-400/50 hover:shadow-[0_8px_32px_rgba(249,115,22,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-orange-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-orange-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-orange-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-orange-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-orange-500/20 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 text-orange-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileCode2 className="h-4 w-4 text-orange-400" />
                  <span>Verified Competencies</span>
                </div>
                <span className="font-mono text-[10px] text-orange-400/80">
                  MASTERY_TRACK
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Engineering Competency Ledger
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-5">
                Systematic progressive learning outcomes verified through automated test suites and deterministic memory inspections.
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                {supplementaryResources.resources.map((res, rIdx) => (
                  <div key={rIdx} className="flex items-center justify-between text-slate-300">
                    <span className="truncate pr-2 text-[11px]">{res.name}</span>
                    <span className="font-mono text-[10px] text-orange-300 border border-orange-500/30 bg-orange-950/40 px-1.5 py-0.5 rounded">
                      {res.format}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 font-mono text-xs font-semibold text-orange-300">
              <Check className="h-4 w-4 text-orange-400" />
              <span>CURRICULUM_AUDIT_PASSED</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
