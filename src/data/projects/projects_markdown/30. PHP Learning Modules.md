export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "php-learning-modules",
    code: "PRO-06 // LEARN-06",
    title: "PHP Learning Modules: Comprehensive Modern PHP 8.2+ Curriculum & Software Architecture Lab",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2026",
    status: "Completed",
    imageUrl: "phplearning1.webp",
    images: [
      "phplearning1.webp",
      "phplearning2.webp",
      "phplearning3.webp",
      "phplearning4.webp",
      "phplearning5.webp",
      "phplearning6.webp",
      "phplearning7.webp",
      "phplearning8.webp"
    ],
    summary:
      "Comprehensive PHP 8.2+ educational curriculum comprising 18 modular pedagogical tiers and 300 standalone executable programs, delivering hands-on mastery of language syntax, strict typing, advanced OOP design patterns, PDO database integration, backend security, automated testing, and production-grade terminal capstones.",
    overview:
      "PHP Learning Modules is an exhaustive software engineering curriculum engineered to bridge the divide between theoretical computer science concepts and production-grade backend development in modern PHP 8.2+. Structured across 18 progressive pedagogical tiers containing 300 standalone executable programs, the platform guides developers from foundational syntax, dynamic typing, and control flow through modular functional programming, closures, and advanced object-oriented architectures before mastering database persistence with PDO, filesystem streams, and web security engineering. Every lesson operates completely standalone without external dependencies, allowing learners to execute code directly through native PHP CLI engines while verifying runtime behaviors against 300 pre-computed terminal execution output captures. The curriculum demystifies enterprise architecture through hands-on implementations of PSR standards, MVC separation, the Repository Pattern, and RESTful API microservices, culminating in 6 production-grade capstone applications simulating commercial software.",
    challenge:
      "Aspiring PHP developers frequently struggle to transition from unstructured procedural scripting to enterprise backend software engineering, encountering invisible bugs from loose type juggling, unescaped XSS vulnerabilities, and SQL injection flaws. Conventional tutorials often promote framework magic prematurely while neglecting PHP Data Objects (PDO) prepared statements, strict scalar typing, PSR-12 coding standards, and automated unit testing, leaving learners unprepared for architecting maintainable, secure, and production-ready backend systems.",
    architectureSummary:
      "18-tier modular pedagogical curriculum + 300 standalone PHP 8.2+ execution units + PDO relational persistence engine + deterministic terminal execution capture pipeline.",
    objectives: [
      "Structure an end-to-end curriculum spanning 18 progressive modules from syntax fundamentals to modern PHP 8.2+ paradigms and web architecture.",
      "Author 300 standalone, executable PHP source files each with independent main logic and reproducible CLI execution behaviors.",
      "Provide 100% verified terminal execution output captures rendered from live processes to eliminate runtime behavior guesswork.",
      "Master multi-paradigm programming patterns including functional closures, arrow functions, OOP inheritance hierarchies, and traits.",
      "Implement enterprise software patterns from scratch including Model-View-Controller (MVC), Service Layers, and Repository Patterns.",
      "Build secure database architectures with PHP Data Objects (PDO) utilizing prepared statements, ACID transactions, and schema migrations.",
      "Deliver 6 comprehensive terminal and API capstone projects simulating real-world commercial POS, inventory, and RESTful microservices."
    ],
    features: [
      {
        title: "Core Syntax & CLI Execution Engine",
        description: "Covers script anatomy, PHP opening tags, console stream output with echo and print, documentation comments, PSR-12 indentation, and CLI execution with $argc and $argv.",
        badge: "CLI Engine"
      },
      {
        title: "Dynamic Typing & Scalar Type Enforcement",
        description: "Explores primitive scalar types (int, float, string, bool, null), explicit type casting, dynamic type juggling, and strict scalar type enforcement via declare(strict_types=1).",
        badge: "Strict Types"
      },
      {
        title: "Expression Evaluation & Modern Operators",
        description: "Implements arithmetic, compound assignment, strict equality (===), short-circuit logic, increment/decrement, string concatenation, null coalescing (??), and nullsafe chaining (?->).",
        badge: "Operator Logic"
      },
      {
        title: "Control Flow & Modern Pattern Matching",
        description: "Structures decision trees using if-elseif-else ladders, switch-case dispatching, truthy/falsy evaluation, and modern PHP 8+ expression-based match patterns.",
        badge: "Match Expressions"
      },
      {
        title: "Algorithmic Iterations & Collection Traversals",
        description: "Manages iterative control flow via counted for loops, condition-controlled while loops, foreach key-value traversal, jump controls (break/continue), and geometric number patterns.",
        badge: "Loop Mechanics"
      },
      {
        title: "Array Architectures & SPL Collection Utilities",
        description: "Examines indexed arrays, associative hash maps, multidimensional matrices, stack/queue operations, functional pipelines (array_filter, array_map, array_reduce), sorting, and destructuring.",
        badge: "Data Collections"
      },
      {
        title: "String Processing & Regular Expressions",
        description: "Processes text via slicing, PHP 8 search primitives (str_contains), formatting with sprintf, Heredoc/Nowdoc templates, UTF-8 multibyte handling (mbstring), and regex pattern validation.",
        badge: "Regex & Multibyte"
      },
      {
        title: "Modular Subroutines & Functional Closures",
        description: "Authors modular functions supporting default values, named arguments, variadic parameters (...), argument unpacking, union types, lexical closures (use), and first-class callables.",
        badge: "Closures & Callables"
      },
      {
        title: "Object-Oriented Software Engineering",
        description: "Implements classes, properties, constructors (__construct), destructors, access modifiers, encapsulation, static members, constructor property promotion, readonly properties, and magic methods.",
        badge: "OOP Fundamentals"
      },
      {
        title: "Advanced OOP & Architectural Contracts",
        description: "Leverages class inheritance, method overriding, final modifiers, abstract classes, interfaces, traits with collision resolution (insteadof, as), late static binding, and dependency injection.",
        badge: "Advanced OOP & DI"
      },
      {
        title: "PHP Standard Library & Modern Features",
        description: "Utilizes DateTimeImmutable, timezones, CSPRNG secure randomness (random_int), JSON serialization, SPL iterators, memory-efficient generators (yield), Fibers, and property hooks paradigms.",
        badge: "SPL & Fibers"
      },
      {
        title: "Defensive Error Handling & Diagnostic Logging",
        description: "Constructs resilient systems using try-catch-finally, custom domain exception hierarchies, exception chaining ($previous), the Throwable interface, assertions, filter_var, and error logging.",
        badge: "Exception Engine"
      },
      {
        title: "Filesystem Streams & Persistent Storage",
        description: "Performs low-level stream I/O (fopen, fgets), atomic file utilities (file_get_contents, file_put_contents), directory traversals, temporary files, tabular CSV parsing, and JSON storage.",
        badge: "Stream I/O & CSV"
      },
      {
        title: "Server-Side Web Architecture & HTTP Handling",
        description: "Integrates PHP with HTML templates, inspects superglobals ($_GET, $_POST, $_SERVER, $_SESSION, $_COOKIE), handles form validation, prevents XSS with htmlspecialchars, and builds routers.",
        badge: "Web & Superglobals"
      },
      {
        title: "Relational Database Persistence with PDO",
        description: "Connects to relational engines via PDO, prevents SQL injection with prepared statements, executes ACID transactions, paginates records, queries JOIN relations, and manages SQLite migrations.",
        badge: "PDO & SQLite"
      },
      {
        title: "Composer, Namespaces & Enterprise Design Patterns",
        description: "Structures professional applications using namespaces, PSR-4 autoloading, composer.json manifests, .env loaders, centralized configs, and Model-View-Controller (MVC) architecture.",
        badge: "MVC & PSR-4"
      },
      {
        title: "Backend Security, REST API & Automated Testing",
        description: "Implements password hashing (bcrypt), session hardening, CSRF defense, RBAC authorization, standardized JSON REST APIs, RFC 7807 error formatting, and PHPUnit-style test runners.",
        badge: "Security & Testing"
      },
      {
        title: "Production Domain Capstone Terminal Systems",
        description: "Synthesizes concepts into 6 full-featured applications: OOP Calculator, SQLite Student Manager, Inventory Restock Monitor, POS Cashier, Library Manager, and Authenticated REST API.",
        badge: "Capstone Systems"
      }
    ],
    pipelineSteps: [
      {
        step: "01. Curriculum Module Selection & Theoretical Study",
        detail: "Learner selects a targeted curriculum tier, reviewing architectural documentation, language syntax invariants, and pedagogical objectives.",
        latencyOrMetric: "18 Modules"
      },
      {
        step: "02. PHP 8.2+ Runtime Invocation & AST Opcode Compilation",
        detail: "PHP CLI engine parses source syntax, constructs the Abstract Syntax Tree, and compiles opcodes into memory with strict typing validation.",
        latencyOrMetric: "PHP 8.2+ Engine"
      },
      {
        step: "03. Standalone Script Execution & Interactive Terminal I/O",
        detail: "Runtime executes standalone script logic, evaluating algorithms, data structures, PDO database transactions, or CLI arguments.",
        latencyOrMetric: "p99 < 15ms Exec"
      },
      {
        step: "04. Terminal Output Telemetry Capture & Verification",
        detail: "Standard output and error streams are captured and verified against pre-computed high-resolution terminal output captures.",
        latencyOrMetric: "300 Verified Outputs"
      },
      {
        step: "05. Automated Test Runner & Capstone Verification",
        detail: "Assertion engines evaluate unit tests, boundary edge cases, and validate capstone business logic under verbose diagnostics.",
        latencyOrMetric: "100% Pass Rate"
      }
    ],
    evaluation:
      "Across all 18 pedagogical modules, the curriculum maintains a 100% deterministic execution pass rate under standard PHP 8.2, 8.3, and 8.4 runtime environments. All 300 standalone programs execute with sub-15ms invocation latencies, generating 300 verified terminal output captures that eliminate behavioral ambiguity across Windows, Linux, and macOS platforms. Modules 01 through 15 operate entirely within the native PHP Standard Library with zero third-party dependencies, while advanced modules seamlessly model modern PSR standards, PDO SQLite persistence, and RESTful API endpoints, verifying end-to-end functionality across 6 complete capstone applications and custom assertion testing frameworks with zero cloud hosting overhead.",
    outcomes: [
      "Engineered an exhaustive 18-module curriculum encompassing 300 standalone, fully executable PHP programs.",
      "Achieved a 100% verified execution record with 300 rendered terminal output captures across all modules.",
      "Delivered zero-dependency standard library architectures across Modules 01–15 compatible across modern PHP 8.2+ runtimes.",
      "Constructed 6 complete practical capstone systems covering commercial POS, warehouse inventory, library management, and token-authenticated REST APIs.",
      "Established verified pedagogical progression from fundamental syntax to strict typing, advanced OOP design patterns, and automated test-driven development."
    ],
    techStack: [
      "PHP 8.2+",
      "PHP Standard Library (SPL)",
      "PHP Data Objects (PDO)",
      "SQLite3 (pdo_sqlite)",
      "mbstring (Multibyte String)",
      "PCRE Regular Expressions",
      "JSON Extension",
      "Filter & Ctype",
      "PHP CLI Binary",
      "PHP Built-in Web Server",
      "Composer (composer.json Schema)",
      "PSR-1 (Basic Coding Standard)",
      "PSR-4 (Autoloading Standard)",
      "PSR-12 (Extended Coding Style)",
      "Model-View-Controller (MVC)",
      "Repository Pattern",
      "Service Layer Pattern",
      "Dependency Injection",
      "RESTful API Protocols",
      "RFC 7807 (Problem Details)",
      "PHPUnit Assertion Runners",
      "Cryptographic Hashing (BCRYPT/Argon2)",
      "CSPRNG (random_int, random_bytes)",
      "Fibers Concurrency",
      "Strict Types (declare(strict_types=1))"
    ],
    accentColor: "teal",
    repoUrl: "https://github.com/weztcy/PHP-Learning-Modules"
  }
];
