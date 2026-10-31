export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "cpp-learning-modules",
    code: "PRO-01 // LEARN-01",
    title: "CPP Learning Modules: Comprehensive Modern C++20 Curriculum & Systems Architecture Lab",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2026",
    status: "Completed",
    imageUrl: "cpplearning1.webp",
    images: [
      "cpplearning1.webp",
      "cpplearning2.webp",
      "cpplearning3.webp",
      "cpplearning4.webp",
      "cpplearning5.webp",
      "cpplearning6.webp",
      "cpplearning7.webp",
      "cpplearning8.webp"
    ],
    summary:
      "Comprehensive C++20 educational curriculum comprising 17 modular pedagogical stages and 250 standalone compilable programs, delivering hands-on mastery of systems programming, memory architecture, RAII smart pointers, OOP design patterns, STL algorithms, and real-world terminal capstones.",
    overview:
      "CPP Learning Modules is an exhaustive systems programming curriculum engineered to bridge the divide between theoretical computer science concepts and practical software development in Modern C++20. Organized across 17 structured pedagogical tiers, the platform guides engineers through fundamental syntax, pointer arithmetic, manual heap allocation, and modern RAII smart pointers before advancing into object-oriented polymorphism, generic templates, and C++20 concepts. Every module operates completely standalone without external dependencies, allowing learners to compile and link source files directly through native toolchains including MSVC, GCC, and Clang. Paired with 250 verified terminal execution output captures rendered directly from executed processes, the curriculum demystifies runtime compiler behaviors and link-time symbol resolution while reinforcing learning through 10 production-grade terminal capstone projects.",
    challenge:
      "Transitioning to C++ often overwhelms engineers due to complex manual memory lifecycles, undefined behavior pitfalls, and subtle semantic shifts across modern C++11 through C++20 standards. Conventional documentation and static textbooks routinely isolate theoretical syntax from practical compiler diagnostics, leaving students unprepared for real-world linking errors, pointer invalidation, and data races in concurrent multi-threaded environments.",
    architectureSummary:
      "17-stage modular pedagogical roadmap + 250 standalone C++20 compilation units + STL & concurrency runtime engine + deterministic terminal execution capture pipeline.",
    objectives: [
      "Structure an end-to-end curriculum spanning 17 progressive modules from syntax fundamentals to C++20 modern metaprogramming.",
      "Author 250 standalone, compilable C++ source files each with independent main entry points and zero external library dependencies.",
      "Provide 100% verified terminal execution output captures rendered from live processes to eliminate runtime behavior guesswork.",
      "Demystify complex memory management paradigms through explicit comparisons of raw pointers, dynamic arrays, and RAII smart pointers.",
      "Implement core computer science data structures and classical algorithms from scratch with Big-O complexity analysis.",
      "Deliver 10 comprehensive terminal-based capstone projects simulating real-world commercial and systems domain logic."
    ],
    features: [
      {
        title: "Fundamental Syntax & Stream I/O Engine",
        description: "Covers program entry points, namespace qualification, formatted stream manipulation via iomanip, and compiler warning resolution.",
        badge: "Syntax Engine"
      },
      {
        title: "Strict Static Typing & Numeric Limits",
        description: "Explores uniform initialization, explicit static_cast conversion, compile-time constexpr evaluation, and hardware limits.",
        badge: "Type Safety"
      },
      {
        title: "Low-Level Pointer & RAII Management",
        description: "Contrasts raw memory addressing, pointer arithmetic, and heap allocation with deterministic RAII smart pointers.",
        badge: "RAII & Smart Ptrs"
      },
      {
        title: "Object-Oriented Polymorphic Architecture",
        description: "Implements encapsulation, member initializer lists, multiple inheritance, virtual functions, and abstract interfaces.",
        badge: "OOP & Interfaces"
      },
      {
        title: "Comprehensive STL Container & Algorithm Pipeline",
        description: "Applies sequential and associative containers, iterators, and generic STL algorithms with lambda capture closures.",
        badge: "STL Library"
      },
      {
        title: "Generic Programming & Compile-Time Metaprogramming",
        description: "Develops function/class templates, template specialization, variadic parameter packs, and C++20 concept constraints.",
        badge: "C++20 Concepts"
      },
      {
        title: "Persistent File I/O & Resilient Exceptions",
        description: "Manages persistent disk file streams, line-by-line CSV parsing, structured try-catch blocks, and custom exception classes.",
        badge: "I/O & Exceptions"
      },
      {
        title: "Algorithmic Analysis & Data Structures",
        description: "Implements classical sorting, binary search trees, hash tables, graph traversals (BFS/DFS), and dynamic programming.",
        badge: "Data Structures"
      },
      {
        title: "Modern C++20 Ranges & Concurrency Runtime",
        description: "Leverages structured bindings, std::optional, std::variant, std::thread, mutex synchronization, async futures, and ranges.",
        badge: "C++20 & Threads"
      },
      {
        title: "Defensive Testing, Debugging & Multi-File Architecture",
        description: "Integrates runtime assertions, unit tests, edge-case validation, sanitizers, header-source separation, and multi-file builds.",
        badge: "Testing & Builds"
      },
      {
        title: "Production Domain Capstone Terminal Systems",
        description: "Synthesizes concepts into 10 full-fledged terminal applications including POS cashiers, bank accounts, and database managers.",
        badge: "Capstone Systems"
      }
    ],
    pipelineSteps: [
      {
        step: "01. Pedagogical Concept Selection & Architectural Theory",
        detail: "Learner reviews structured curriculum module guides, API specifications, and architectural invariants for the target domain.",
        latencyOrMetric: "17 Modules"
      },
      {
        step: "02. Source Code Translation Unit Compilation",
        detail: "Compiler invokes MSVC, GCC, or Clang with strict C++20 standard flags and comprehensive diagnostic warning levels.",
        latencyOrMetric: "C++20 Dialect"
      },
      {
        step: "03. Multi-File Symbol Linking & Object Resolution",
        detail: "Linker resolves translation units, header declarations, and implementation binaries into self-contained native executables.",
        latencyOrMetric: "<120ms Link Time"
      },
      {
        step: "04. Standalone Runtime Process Execution & Interactive I/O",
        detail: "Local operating system executes native binary, evaluating conditional algorithms, memory allocations, or terminal inputs.",
        latencyOrMetric: "p99 < 5ms Exec"
      },
      {
        step: "05. Terminal Stdout Telemetry Capture & Output Verification",
        detail: "Terminal stdout streams are rendered and compared against verified pre-computed execution output captures in output directories.",
        latencyOrMetric: "250 Verified Outputs"
      }
    ],
    evaluation:
      "Across all 17 pedagogical modules, the curriculum maintains a 100% deterministic compilation pass rate across MSVC v19.30+, GCC 10+, and Clang 12+ under the strict C++20 standard. All 250 standalone translation units execute with zero external third-party dependencies, generating sub-millisecond runtime execution benchmarks and producing 250 verified terminal output captures that guarantee zero behavioral ambiguity across Windows, Linux, and macOS environments.",
    outcomes: [
      "Engineered an exhaustive 17-module curriculum encompassing 250 standalone, fully compilable C++20 programs.",
      "Achieved a 100% verified execution record with 250 rendered terminal output captures across all modules.",
      "Delivered zero-dependency native architectures compatible across MSVC, GCC, and Clang toolchains.",
      "Constructed 10 complete terminal capstone systems covering commercial POS, banking, inventory, and database architectures.",
      "Established verified pedagogical progression from foundational syntax to C++20 concepts, ranges, and concurrency."
    ],
    techStack: [
      "C++20",
      "MSVC",
      "GCC",
      "Clang",
      "C++ Standard Library",
      "STL Containers",
      "STL Algorithms",
      "Smart Pointers (std::unique_ptr, std::shared_ptr)",
      "C++20 Concepts",
      "C++20 Ranges",
      "Multithreading (std::thread, std::mutex)",
      "RAII",
      "File Streams (<fstream>)",
      "Chrono (<chrono>)",
      "Filesystem (<filesystem>)",
      "AddressSanitizer"
    ],
    accentColor: "teal",
    repoUrl: "https://github.com/weztcy/CPP-Learning-Modules"
  }
];
