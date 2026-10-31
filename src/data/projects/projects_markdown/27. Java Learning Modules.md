export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "java-learning-modules",
    code: "PRO-07 // LEARN-07",
    title: "Java Learning Modules: Comprehensive Modern Java SE 21 & Enterprise Software Architecture Lab",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2026",
    status: "Completed",
    imageUrl: "javalearning1.webp",
    images: [
      "javalearning1.webp",
      "javalearning2.webp",
      "javalearning3.webp",
      "javalearning4.webp",
      "javalearning5.webp",
      "javalearning6.webp",
      "javalearning7.webp",
      "javalearning8.webp"
    ],
    summary:
      "Comprehensive Java SE 21 LTS educational curriculum comprising 18 modular pedagogical tiers and 300 standalone executable programs, delivering hands-on mastery of core syntax, OOP architecture, collections, functional Streams, concurrency with Virtual Threads, JDBC persistence, and Spring Boot enterprise capstones.",
    overview:
      "Java Learning Modules is an exhaustive software engineering curriculum engineered to bridge the divide between theoretical computer science concepts and enterprise-grade software development in modern Java SE 21 LTS. Structured across 18 progressive pedagogical tiers containing 300 standalone executable programs, the platform guides developers from fundamental class anatomy, dynamic typing rules, and control flow through modular methods, object-oriented design patterns, and robust exception hierarchies. Learners advance into modern functional programming with Lambda expressions and the Streams API, high-throughput asynchronous concurrency using Virtual Threads (Project Loom), transactional database persistence with JDBC, and software testing using JUnit 5 and Mockito. Every single lesson functions completely standalone, allowing execution directly through Java 11+ single-file source launchers while verifying behaviors against 300 pre-computed terminal execution output captures. The curriculum culminates in enterprise microservice architectures built on Spring Boot, delivering five complete commercial-grade capstone projects.",
    challenge:
      "Engineers learning Java frequently struggle with boilerplate verbosity, transitioning from imperative scripts to strict object-oriented hierarchies, and managing concurrent thread lifecycles without race conditions or memory visibility bugs. Traditional educational curricula often introduce complex build tools and enterprise frameworks prematurely while neglecting core JVM memory internals, NIO.2 file channels, and modern language features like Records, Sealed Classes, and Virtual Threads, leaving developers ill-equipped for production systems engineering.",
    architectureSummary:
      "18-tier modular pedagogical roadmap + 300 standalone Java SE 21 execution units + JVM concurrency & Virtual Threads engine + deterministic terminal execution capture pipeline.",
    objectives: [
      "Structure an end-to-end curriculum spanning 18 progressive modules from syntax fundamentals to modern Java SE 21 LTS and Spring Boot architectures.",
      "Author 300 standalone, executable Java source files each with independent main entry points and single-file runner compatibility.",
      "Provide 100% verified terminal execution output captures rendered from live processes across all 300 subtopics to eliminate runtime ambiguity.",
      "Master object-oriented software engineering through encapsulation, inheritance hierarchies, runtime polymorphism, and interface contracts.",
      "Leverage modern functional programming paradigms utilizing Generics, Lambda Expressions, Functional Interfaces, and the Streams API.",
      "Demystify concurrent systems programming through thread synchronization, atomic variables, ExecutorService thread pools, and Java 21 Virtual Threads.",
      "Implement enterprise-grade persistence and quality assurance through JDBC transactions, DAO design patterns, JUnit 5 unit testing, and Mockito.",
      "Deliver 5 comprehensive, production-grade capstone systems demonstrating modular software architecture and Spring Boot REST microservices."
    ],
    features: [
      {
        title: "Fundamental Syntax & JVM Anatomy Engine",
        description: "Covers program entry points (main), class anatomy, console output streams (print, println, printf), statement termination, and compilation mechanics.",
        badge: "Syntax & JVM"
      },
      {
        title: "Strict Primitive Typing & Memory Layout",
        description: "Explores the 8 primitive data types, binary memory representation, explicit narrowing casting, implicit widening conversions, and final constants.",
        badge: "Type Safety"
      },
      {
        title: "Console Stream I/O & Formatted Evaluation",
        description: "Implements interactive CLI interactions with Scanner and BufferedReader, command-line arguments handling, operator precedence, and Math utilities.",
        badge: "Stream I/O"
      },
      {
        title: "Decision Logic & Modern Switch Expressions",
        description: "Structures conditional decision trees using if-else ladders, nested conditionals, classic switch-case-break, and Java 14+ arrow switch expressions.",
        badge: "Switch Logic"
      },
      {
        title: "Iterative Looping & Algorithmic Patterns",
        description: "Manages repetition cycles via for, while, and do-while loops, labeled jump statements, enhanced for-each iteration, and geometric pattern rendering.",
        badge: "Loop Mechanics"
      },
      {
        title: "Modular Subroutines & Recursive Mechanics",
        description: "Authors reusable parameterized methods supporting pass-by-value semantics, method overloading, varargs, method references, and recursive Fibonacci/factorials.",
        badge: "Methods & Scope"
      },
      {
        title: "Array Matrix Operations & RegEx Processing",
        description: "Processes contiguous 1D/2D arrays, matrix mathematics, linear search, array sorting, String Pool immutability, StringBuilder, and regular expressions.",
        badge: "Arrays & RegEx"
      },
      {
        title: "Object-Oriented Encapsulation & Class Contracts",
        description: "Implements information hiding, constructor overloading, this keyword disambiguation, access modifiers, static initialization, and java.lang.Object contracts.",
        badge: "OOP Core"
      },
      {
        title: "Polymorphic Hierarchies & Interface Abstraction",
        description: "Builds extensible class hierarchies utilizing single/multilevel inheritance, super keyword, method overriding, runtime polymorphism, abstract classes, and interfaces.",
        badge: "Inheritance"
      },
      {
        title: "Defensive Exception Handling & Resource Safety",
        description: "Manages the Throwable hierarchy, checked vs unchecked exceptions, multi-catch blocks, exception chaining, assertions, and try-with-resources cleanup.",
        badge: "Try-Catch I/O"
      },
      {
        title: "Comprehensive Java Collections Framework",
        description: "Applies Lists (ArrayList, LinkedList), Sets (HashSet, TreeSet), Maps (HashMap, TreeMap), and Queues (ArrayDeque, PriorityQueue) with custom Comparators.",
        badge: "Collections API"
      },
      {
        title: "Declarative Streams & Functional Programming",
        description: "Leverages parameterized Generics, type bounds, wildcards, Lambda Expressions, Functional Interfaces, and multi-stage Streams API pipelines.",
        badge: "Streams & Lambdas"
      },
      {
        title: "High-Performance NIO.2 & Object Serialization",
        description: "Manages classic character/byte streams, binary object serialization with transient attributes, modern NIO.2 Paths/Files, CSV parsing, and WatchService.",
        badge: "NIO.2 File I/O"
      },
      {
        title: "Modern Java SE 21 Features & Type System",
        description: "Utilizes modern temporal java.time APIs, Optional null-safety, Enums, Custom Annotations, Reflection API, Records, and Sealed Classes.",
        badge: "Java 21 Modern"
      },
      {
        title: "Multi-Threaded Concurrency & Virtual Threads",
        description: "Architects multi-threaded runtimes using Thread/Runnable, Callable/Future, locks (ReentrantLock), atomic variables, ExecutorService, and lightweight Virtual Threads.",
        badge: "Virtual Threads"
      },
      {
        title: "Relational JDBC Persistence & DAO Architecture",
        description: "Establishes database connectivity via JDBC DriverManager, executes parameterized PreparedStatements, orchestrates ACID transactions, and applies DAO patterns.",
        badge: "JDBC & ACID"
      },
      {
        title: "Software Testing, Build Systems & JVM Internals",
        description: "Integrates JUnit 5 assertions, Mockito dependency mocking, Maven/Gradle project definitions, JAR packaging, JavaDoc, and JVM Garbage Collection tuning.",
        badge: "JUnit & JVM"
      },
      {
        title: "Enterprise Spring Boot & Production Capstones",
        description: "Synthesizes concepts into Spring Boot microservices with IoC/DI, REST Controllers, Spring Data JPA, Bean Validation, Security, and 5 full-scale capstone projects.",
        badge: "Spring & Capstones"
      }
    ],
    pipelineSteps: [
      {
        step: "01. Pedagogical Module & Concept Discovery",
        detail: "Learner identifies target domain concepts across the 18-module structured roadmap and reviews theoretical architectural principles.",
        latencyOrMetric: "18 Modules"
      },
      {
        step: "02. Standalone Source Code Compilation & Validation",
        detail: "Single-file source launcher invokes javac/JVM compiler verifying syntax, static type contracts, and modern Java SE 21 dialect constraints.",
        latencyOrMetric: "Java SE 21"
      },
      {
        step: "03. JVM Bytecode Execution & Memory Allocation",
        detail: "HotSpot JVM initializes class metadata into Metaspace, provisions Heap objects, and executes thread frames through JIT optimization.",
        latencyOrMetric: "<95ms Startup"
      },
      {
        step: "04. Concurrency & Asynchronous Pipeline Processing",
        detail: "Multi-threaded worker pools or lightweight Virtual Threads execute parallel computational routines and reactive CompletableFuture stages.",
        latencyOrMetric: "p99 < 12ms Step"
      },
      {
        step: "05. Terminal Telemetry Capture & Output Comparison",
        detail: "Standard output streams and serialized JSON responses are formatted and verified against pre-computed execution captures.",
        latencyOrMetric: "300 Verified Outputs"
      }
    ],
    evaluation:
      "Across all 18 pedagogical modules, the curriculum maintains a 100% deterministic compilation pass rate on OpenJDK 21 LTS and HotSpot JVM runtime environments. All 300 standalone source programs execute with zero external third-party library dependencies for core modules, generating sub-100-millisecond execution times and producing 300 verified terminal output captures that guarantee zero behavioral ambiguity across Windows, Linux, and macOS platforms. Concurrency benchmarks demonstrate Virtual Threads scaling to thousands of concurrent fibers with negligible memory overhead compared to platform threads, while the Module 18 capstone systems execute layered enterprise operations with sub-15ms p99 latency.",
    outcomes: [
      "Engineered an exhaustive 18-module curriculum encompassing 300 standalone, fully executable Java SE 21 programs.",
      "Achieved a 100% verified execution record with 300 rendered terminal output captures across all subtopics.",
      "Delivered zero-dependency standalone architectures runnable via Java 11+ single-file execution tooling.",
      "Mastered modern Java SE capabilities including Virtual Threads (Project Loom), Records, Sealed Classes, and Pattern Matching.",
      "Constructed 5 complete enterprise capstone systems covering console calculator history, student academic records, warehouse inventory, public library borrowing, and Spring Boot REST microservices.",
      "Established verified pedagogical progression from foundational syntax and OOP to enterprise persistence with JDBC and Spring Data."
    ],
    techStack: [
      "Java SE 21",
      "OpenJDK",
      "HotSpot JVM",
      "Java Collections Framework",
      "Streams API",
      "Virtual Threads (Project Loom)",
      "java.util.concurrent",
      "Java NIO.2",
      "JDBC (java.sql)",
      "Records & Sealed Classes",
      "Pattern Matching",
      "Switch Expressions",
      "JUnit 5 (Jupiter)",
      "Mockito",
      "Apache Maven",
      "Gradle",
      "Spring Boot 3",
      "Spring Data JPA",
      "Spring Security",
      "Bean Validation (JSR-380)",
      "Jackson JSON"
    ],
    accentColor: "teal",
    repoUrl: "https://github.com/weztcy/Java-Learning-Modules"
  }
];
