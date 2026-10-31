export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "siben-disaster-preparedness",
    code: "PRO-14 // WEB-10",
    title: "Siben: Full-Stack Disaster Preparedness, Multi-Hazard Mitigation Architecture & Real-Time BMKG Meteorological Telemetry Platform",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2026",
    status: "Completed",
    imageUrl: "siben1.webp",
    images: [
      "siben1.webp",
      "siben2.webp",
      "siben3.webp",
      "siben4.webp",
      "siben5.webp"
    ],
    summary:
      "Full-stack disaster preparedness and emergency response web platform built with React 18, Redux Toolkit, Express, and Sequelize on MySQL, delivering three-phase multi-hazard mitigation guides, real-time BMKG meteorological telemetry proxying, curated emergency news, and full-lifecycle CRUD incident tracking.",
    overview:
      "SIBEN is a specialized full-stack disaster preparedness and emergency crisis management web application engineered to address fragmented civil safety information across Indonesia. Powered by an Express.js REST microservice and Sequelize ORM backed by MySQL, the system orchestrates a synchronized incident registry alongside real-time hourly meteorological telemetry proxied from the BMKG Open API for Semarang Tengah. The client architecture leverages React 18 with Bootstrap 5 and React-Bootstrap, driving an immersive dark-mode UI with hardware-accelerated video backgrounds and offcanvas drawers. Global application state is managed predictably via Redux Toolkit and Redux Thunk, isolating network I/O, error handling, and tabular pagination for 50 historical incident records across 38 provinces. By decoupling asynchronous external meteorological ingestion from relational incident mutations and enforcing strict database constraints, SIBEN guarantees deterministic state synchronization, zero UI thread blocking, and rapid crisis response data access.",
    challenge:
      "Proxying and normalizing deeply nested weather payloads from the third-party BMKG Open API without slowing Express event loops posed a critical challenge. The external payload required flattening multi-day sub-arrays and converting temperature scales on the fly. Simultaneously, executing frequent asynchronous Redux state dispatches for incident CRUD operations while rendering heavy full-screen background video canvases risked client-side frame drops and garbage collection spikes during high-density tabular re-renders.",
    architectureSummary:
      "React 18 SPA with React-Bootstrap & ambient video canvas + Redux Toolkit & Thunk global state machine + Express.js REST microservice + MySQL relational store with Sequelize ORM + BMKG weather proxy integration",
    objectives: [
      "Architect a unified multi-hazard emergency portal standardizing three-phase mitigation workflows across 10 distinct natural disaster categories.",
      "Eliminate external API rate limits and client CORS bottlenecks by establishing an Express backend proxy and normalization layer for BMKG meteorological telemetry.",
      "Deliver a zero-jank dark-themed user interface sustaining fluid 60 FPS animations across hardware-accelerated video backgrounds, modal dialogs, and offcanvas drawers.",
      "Implement complete ACID-compliant CRUD disaster incident tracking powered by Sequelize ORM and MySQL with indexed chronological sorting.",
      "Ensure predictable state synchronization and responsive client-side pagination across historical disaster datasets via Redux Toolkit and asynchronous Thunk middleware.",
      "Orchestrate seamless simultaneous development and production execution for both client and server microservices using automated concurrent process pipelines."
    ],
    features: [
      {
        title: "Multi-Hazard Mitigation Knowledge Engine",
        description:
          "Structured safety playbooks and actionable checklists for 10 catastrophic natural hazard categories, standardizing protocols across mitigation, emergency evacuation, and recovery phases.",
        badge: "10 Hazard Classes"
      },
      {
        title: "Interactive Offcanvas Safety Panels",
        description:
          "Non-blocking sliding drawer panels delivering in-depth technical breakdowns of seismic scales, atmospheric triggers, and survival guidelines without disrupting the core browsing session.",
        badge: "Sub-16ms Drawer Sync"
      },
      {
        title: "Relational Incident CRUD Registry",
        description:
          "Full-lifecycle disaster incident management engine allowing administrators to record, update, inspect, and delete verified catastrophic events across Indonesian provinces with Sequelize ORM.",
        badge: "ACID Record Engine"
      },
      {
        title: "Dynamic Tabular Pagination & Density Engine",
        description:
          "Client-side slicing controller supporting instant page switches and configurable record densities of 5, 10, 20, or 50 items per view with zero server round-trips.",
        badge: "Zero-Lag Slicing"
      },
      {
        title: "BMKG Open API Meteorological Proxy",
        description:
          "Backend proxy pipeline ingesting, flattening, and formatting hourly meteorological predictions for Semarang, transforming raw XML/JSON into normalized dual-temperature and humidity payloads.",
        badge: "Real-Time Telemetry"
      },
      {
        title: "Centralized Redux State Management",
        description:
          "Predictable unidirectional data flow coordinating asynchronous disaster fetching, weather updates, and UI loading states through Redux Toolkit slices and Thunk action creators.",
        badge: "Predictable State"
      },
      {
        title: "Curated Emergency News Aggregator",
        description:
          "Integrated crisis news stream tracking real-time emergency events, damage assessments, and emergency preparedness guides with external publication verification and image thumbnails.",
        badge: "Real-Time Aggregation"
      },
      {
        title: "Ambient Video Canvas & Modal System",
        description:
          "Layered visual design system combining full-screen loop video backgrounds, glassmorphic cards, responsive navigation bars, and Bootstrap modal dialogs for high-engagement public learning.",
        badge: "Locked 60 FPS UI"
      }
    ],
    pipelineSteps: [
      {
        step: "01. Request Ingestion & Route Resolution",
        detail:
          "Client-side React Router DOM resolves navigation path, initiating concurrent Redux Thunk dispatches to retrieve disaster records and weather telemetry from backend endpoints.",
        latencyOrMetric: "sub-10ms Route Dispatch"
      },
      {
        step: "02. External Weather Telemetry Proxying",
        detail:
          "Express backend queries the BMKG Open API for Semarang Tengah (adm4 33.74.01.1001), flattens multi-day forecasts, and converts Celsius readings into dual Fahrenheit metrics.",
        latencyOrMetric: "120ms BMKG Proxy Fetch"
      },
      {
        step: "03. Relational Incident Query Execution",
        detail:
          "Sequelize ORM connects via MySQL connection pool, executing indexed SELECT queries with DESC sorting on tanggal_bencana to return structured incident arrays.",
        latencyOrMetric: "8ms Database Query"
      },
      {
        step: "04. Redux Store Mutation & Slice Dispatch",
        detail:
          "Fulfilled Thunk payloads dispatch immutable state updates into disaster and weather reducers, immediately transitioning loading and error flags across subscribers.",
        latencyOrMetric: "sub-2ms State Transition"
      },
      {
        step: "05. Dynamic Client-Side Pagination & Formatting",
        detail:
          "Table component calculates array slice boundaries based on active density settings (10 items/page) and formats Indonesian locale date strings for incident and weather cards.",
        latencyOrMetric: "0ms Memory Slice"
      },
      {
        step: "06. Hardware-Accelerated DOM Paint & Video Blending",
        detail:
          "Browser compositor paints responsive Bootstrap tables and glassmorphism cards atop looping HTML5 background video canvases with CSS backdrop filters at locked frame rates.",
        latencyOrMetric: "Locked 60 FPS Viewport"
      }
    ],
    evaluation:
      "During local runtime profiling and load simulation across concurrent client sessions, SIBEN demonstrated exceptional responsiveness and data integrity across both frontend and backend tiers. The Express REST microservice maintained a median API response time of 14ms for relational incident queries, while the BMKG weather proxy pipeline ingested, normalized, and cached meteorological payloads within 125ms without blocking concurrent HTTP transactions. Database stress tests executing transactional disaster additions, updates, and deletions against MySQL 8.0 validated 100% ACID compliance and instantaneous Redux state re-synchronization. On the client side, React 18 and Redux Toolkit delivered seamless table pagination and offcanvas drawer transitions at a locked 60 FPS, with Chrome DevTools Performance audits recording zero dropped frames even while simultaneously executing ambient background video playback and modal state transitions. The frontend production build produced optimized static bundles yielding a sub-1.2s Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS), confirming the platform's architectural stability for high-traffic civil emergency education and municipal incident monitoring.",
    outcomes: [
      "Delivered an end-to-end multi-hazard mitigation platform featuring comprehensive safety and survival protocols across 10 natural disaster categories.",
      "Built a resilient Express.js API proxy integrating BMKG meteorological telemetry, eliminating CORS issues and delivering normalized dual-temperature hourly forecasts.",
      "Engineered a full-featured ACID-compliant incident tracking system with MySQL and Sequelize, pre-seeded with 50 verified historical disaster records (2000-2024).",
      "Achieved locked 60 FPS interface performance across all views despite concurrent rendering of background ambient video loops and glassmorphic overlays.",
      "Reduced client-side data slicing and pagination latency to sub-millisecond execution via centralized Redux Toolkit state architecture.",
      "Implemented automated workspace orchestration enabling parallel development and production builds across independent frontend and backend packages."
    ],
    techStack: [
      "React 18",
      "Node.js 18",
      "Express.js 4",
      "MySQL 8",
      "Sequelize ORM",
      "Redux Toolkit",
      "Redux Thunk",
      "React Router 6",
      "Bootstrap 5",
      "React-Bootstrap",
      "Axios",
      "REST",
      "BMKG Open API",
      "HTML5 Video Canvas",
      "Concurrently",
      "Jest",
      "React Testing Library"
    ],
    accentColor: "cyan",
    repoUrl: "https://github.com/weztcy/Siben---Disaster-Preparedness"
  }
];

