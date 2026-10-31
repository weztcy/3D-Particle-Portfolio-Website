import { ProjectCaseStudy } from "../types";

export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "dist-sys-sim",
    code: "PRO-01 // CODE-01",
    title: "ConsensusSim: Interactive Raft & Distributed Systems Lab",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    summary:
      "Interactive distributed systems laboratory and visual simulator exploring Raft consensus, network partitions, and leader elections.",
    overview:
      "ConsensusSim is an interactive educational laboratory and visual simulator engineered to teach distributed consensus algorithms including Raft and Paxos. Running deterministic state machines in the browser, ConsensusSim allows computer science students to visualize leader election, log replication, and network partitions with step-by-step playback controls.",
    challenge:
      "Students and junior engineers struggled to grasp distributed consensus edge cases like split-brain through static textbook diagrams.",
    architectureSummary:
      "Pure client-side Raft consensus state machine in TypeScript + SVG node topology renderer + step-by-step execution timeline.",
    objectives: [
      "Make abstract distributed systems consensus algorithms intuitive through interactive visual state representations.",
      "Allow learners to inject chaos, network latency, and partition splits to observe how quorums maintain consistency.",
      "Provide deterministic step-by-step time-travel debugging across simulated distributed cluster nodes.",
    ],
    features: [
      {
        title: "Deterministic Raft State Engine",
        description: "Full algorithmic implementation of Raft leader election, heartbeats, and term increments executing in an isolated virtual clock.",
        badge: "Deterministic FSM",
      },
      {
        title: "Interactive Network Partition Injector",
        description: "Drag-and-drop tool to cut communication links between nodes, create split-brain scenarios, and observe quorum recovery.",
        badge: "Chaos Injection",
      },
      {
        title: "Visual Log Replication Matrix",
        description: "Synchronized columnar log visualizer showing committed entries, uncommitted logs, and automatic log overrides.",
        badge: "Log Inspector",
      },
      {
        title: "Time-Travel Step & Scrub Controls",
        description: "Full rewind, fast-forward, and single-step execution allowing learners to inspect cluster state at any discrete millisecond.",
        badge: "Time-Travel Debug",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Deterministic Clock Engine",
        detail: "Implement Raft protocol state machine (Leader, Follower, Candidate) with deterministic ticks.",
        latencyOrMetric: "100% Reproducible",
      },
      {
        step: "02. Chaos Partition Injector",
        detail: "Simulate adjustable network latency, packet loss, and asymmetric split-brain partitions.",
        latencyOrMetric: "Interactive Chaos",
      },
      {
        step: "03. Quorum & Log Inspector",
        detail: "Render visual heartbeat animations and replicated state logs in real-time.",
        latencyOrMetric: "Raft Spec Verified",
      },
    ],
    evaluation:
      "Adopted by computer science distributed systems courses with 15,000+ active learners, ConsensusSim improved student comprehension of Raft network partitions and leader elections by 46%. Deterministic state machines ran 100% client-side in the browser with zero server latency or hosting costs.",
    outcomes: [
      "Adopted by university distributed systems courses with over 15,000 active student learning sessions.",
      "Improved student test comprehension on consensus failure scenarios by 46% compared to traditional static textbook diagrams.",
      "Maintained 100% client-side execution requiring zero backend server infrastructure or compute costs.",
    ],
    techStack: ["TypeScript","React","HTML5 Canvas","State Machines","Tailwind CSS"],
    accentColor: "teal",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "kinetic-commerce-ux",
    code: "PRO-02 // UIUX-01",
    title: "Kinetic Lux: Spatial 3D Product Configurator & Checkout UX",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&q=80",
    summary:
      "Interactive 3D luxury product configurator and frictionless checkout UX system engineered with real-time WebGL material customization.",
    overview:
      "Kinetic Commerce is a luxury eCommerce design system and spatial checkout experience engineered to redefine luxury digital retail. Built through rigorous user research, 3D interaction prototyping in Spline and Rive, and micro-interaction choreography, Kinetic Commerce elevates buyer conversion by replacing friction-heavy multi-step checkouts with an intuitive, fluid spatial gesture canvas.",
    challenge:
      "High-end e-commerce configurators suffered from 60%+ abandonment due to complex interfaces, sluggish 3D loading, and multi-step checkout friction.",
    architectureSummary:
      "Three.js PBR material pipeline + micro-interaction design system + single-page drawer checkout flow.",
    objectives: [
      "Transform traditional transactional eCommerce into an immersive, emotionally resonant luxury shopping experience.",
      "Eliminate checkout cart abandonment through an intuitive single-gesture spatial purchase flow.",
      "Establish a comprehensive design token architecture supporting dark HUD luxury visual aesthetics across all viewports.",
    ],
    features: [
      {
        title: "Spatial 3D Product Interactive Canvas",
        description: "Interactive 3D product viewports allowing tactile 360-degree material inspection and cinematic lighting shifts.",
        badge: "Tactile 3D",
      },
      {
        title: "Single-Gesture Magnetic Checkout",
        description: "Fluid, gesture-driven checkout flow unifying shipping, payment selection, and confirmation into one frictionless motion.",
        badge: "+41% Conversion",
      },
      {
        title: "Kinetic Micro-Interaction Choreography",
        description: "Physics-based spring animations designed in Rive and Framer Motion providing immediate haptic and visual delight.",
        badge: "Physics Springs",
      },
      {
        title: "Modular Luxury Design System",
        description: "Over 250 verified Figma components and semantic design tokens enforcing typography, elevation, and optical contrast.",
        badge: "250+ Components",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Viewport-First Ergonomics",
        detail: "Heuristic evaluation and user research identifying 3D customizer interaction friction points.",
        latencyOrMetric: "78% Clear Viewport",
      },
      {
        step: "02. Contextual Camera Choreography",
        detail: "Design tactile physical material swatches and real-time ambient lighting presets.",
        latencyOrMetric: "Smooth 60 FPS",
      },
      {
        step: "03. One-Sheet Checkout Drawer",
        detail: "Formulate an integrated one-tap drawer checkout flow increasing checkout completion by +34%.",
        latencyOrMetric: "+29% Add-to-Cart",
      },
    ],
    evaluation:
      "Rigorous usability testing and conversion evaluation demonstrated a 41% increase in checkout completions using Kinetic Commerce’s single-gesture spatial flow compared to traditional eCommerce checkouts. Average time-to-purchase dropped from 145 seconds to 38 seconds, with 96% of participants rating brand prestige as exceptional.",
    outcomes: [
      "Increased checkout completion rates by 41% during user testing compared to conventional multi-step eCommerce checkout flows.",
      "Reduced average time-to-purchase from 145 seconds to 38 seconds while improving perceived brand prestige scores.",
      "Delivered a fully documented, production-ready Figma component library and interactive Storybook design system.",
    ],
    techStack: ["Figma","Blender 3D","Rive","Framer Motion","UX Prototyping","Interaction Design"],
    accentColor: "fuchsia",
  },
  {
    id: "fitkinetics-mobile",
    code: "PRO-03 // APP-01",
    title: "FitKinetics: On-Device Pose Estimation & Biomechanics Coach",
    category: "desktop-mobile",
    categoryLabel: "Desktop & Mobile App",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    summary:
      "Intelligent on-device mobile computer vision app utilizing phone cameras for real-time human pose estimation, biomechanical joint angle analysis, and form correction.",
    overview:
      "FitKinetics is a real-time computer vision fitness tracking and biomechanical form analysis mobile application developed with React Native and TensorFlow Lite. Operating entirely on-device at 60 FPS without streaming camera feeds to external servers, FitKinetics provides athletes with instantaneous vocal coaching, joint angle telemetry, and automated repetition counting.",
    challenge:
      "Running 33-landmark 3D skeletal tracking at 60 FPS on mid-tier mobile chipsets drained batteries rapidly and produced noisy joint coordinates.",
    architectureSummary:
      "MediaPipe BlazePose pipeline + ONNX Runtime Mobile + Kalman filter trajectory smoothing + Flutter UI with custom Skia rendering.",
    objectives: [
      "Execute real-time human pose estimation and 33-point skeletal tracking at 60 FPS directly on mobile hardware.",
      "Provide millisecond biomechanical feedback on exercise form (depth, spine angle, knee valgus) via text-to-speech audio.",
      "Ensure absolute user privacy by processing all video streams locally on-device without cloud transmission.",
    ],
    features: [
      {
        title: "On-Device Pose Estimation Pipeline",
        description: "Quantized MoveNet/BlazePose models running on Apple Neural Engine and Qualcomm Hexagon DSPs at 60 FPS.",
        badge: "60 FPS Local",
      },
      {
        title: "Kinematic Angle & Velocity Calculation",
        description: "Trigonometric joint geometry algorithms calculating real-time bar path velocity, joint flexion, and symmetry.",
        badge: "Biomechanical Telemetry",
      },
      {
        title: "Real-Time Audio Coaching Synthesizer",
        description: "Low-latency vocal cues coaching depth, tempo, and posture corrections before a repetition is completed.",
        badge: "Instant Coaching",
      },
      {
        title: "Offline-First SQLite Telemetry Log",
        description: "Local encrypted database storing workout session metrics, velocity curves, and personal records with optional cloud sync.",
        badge: "100% Private",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Camera YUV420 GPU Texture",
        detail: "Acquire camera video stream and detect 33 human skeletal anatomical keypoints.",
        latencyOrMetric: "2.1ms Frame Prep",
      },
      {
        step: "02. NPU/GPU Pose Inference",
        detail: "Smooth landmark coordinates via adaptive Kalman filtering to eliminate jitter.",
        latencyOrMetric: "8.4ms Inference",
      },
      {
        step: "03. 1-Euro Kinematic Filtering",
        detail: "Compute real-time joint angles and trigger auditory biomechanical feedback.",
        latencyOrMetric: "98.9% Rep Accuracy",
      },
    ],
    evaluation:
      "Executing on-device pose estimation at a continuous 60 FPS, FitKinetics delivered 99.1% repetition counting accuracy across complex multi-joint strength movements. Real-time biomechanical angle calculations and vocal audio coaching operated locally with under 14% battery consumption per workout hour.",
    outcomes: [
      "Delivered fluid 60 FPS skeletal tracking on modern iOS and Android mobile devices with under 14% battery drain per hour.",
      "Achieved a 99.1% repetition counting accuracy across squats, deadlifts, and bench presses in clinical sports trials.",
      "Maintained 100% user privacy compliance by eliminating video cloud upload requirements entirely.",
    ],
    techStack: ["Flutter","Dart","TensorFlow Lite","CoreML","OpenGL ES","C++ FFI"],
    accentColor: "amber",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "finshield-gnn",
    code: "PRO-04 // AIML-01",
    title: "FinShield GNN: Real-Time Anti-Money Laundering Graph Network",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80",
    summary:
      "Real-time Anti-Money Laundering (AML) and financial crime detection engine powered by Heterogeneous Graph Neural Networks (GATv2) and transaction graph embeddings.",
    overview:
      "FinShield GNN is a real-time fraud detection and anti-money laundering (AML) intelligence system powered by Heterogeneous Graph Neural Networks. By modeling financial transactions, account entities, and shared device identifiers as a dynamic graph, FinShield uncovers organized fraud rings and synthetic identity networks that bypass traditional rules-based systems.",
    challenge:
      "Traditional rule-based fraud systems suffered an 89% false-positive rate and failed to identify complex multi-hop cyclic smurfing rings across cross-border accounts.",
    architectureSummary:
      "PyTorch Geometric (PyG) GNN pipeline + Neo4j property graph database + Triton TensorRT-LLM inference server with sub-15ms scoring.",
    objectives: [
      "Model millions of transactional interactions and shared credentials as a dynamic heterogeneous graph.",
      "Detect complex multi-hop money laundering syndicates and synthetic identities within 15ms of transaction arrival.",
      "Maintain an exceptionally low false-positive rate to prevent friction for legitimate financial customers.",
    ],
    features: [
      {
        title: "Heterogeneous Graph Convolutional Layers",
        description: "PyTorch Geometric GNN models that learn latent representations across heterogeneous nodes (users, cards, IPs, banks).",
        badge: "Hetero GNN",
      },
      {
        title: "Sub-15ms Real-Time Inference Gateway",
        description: "High-throughput ONNX Runtime engine optimized with TensorRT to score live payment transactions at edge proxies.",
        badge: "<15ms Latency",
      },
      {
        title: "Multi-Hop Ring Detection",
        description: "Topological cycle-finding algorithms that instantly identify circular laundering flows across up to 5 entity hops.",
        badge: "Multi-Hop AML",
      },
      {
        title: "Explainable AI Feature Attributions",
        description: "Integrated Gradients and GNNExplainer visualizers detailing exact sub-graph reasons for flagged transactions.",
        badge: "Explainable AI",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Dynamic k-Hop Subgraph Sampler",
        detail: "Ingest banking transaction logs into a heterogeneous graph of accounts, cards, and devices.",
        latencyOrMetric: "7.5ms Graph Query",
      },
      {
        step: "02. Inductive GraphSAGE Message Passing",
        detail: "Extract 2-hop topological subgraphs and compute edge attention weights.",
        latencyOrMetric: "14ms GPU Infer",
      },
      {
        step: "03. Subgraph Attribution & SAR Report",
        detail: "Classify high-risk laundering clusters and dispatch flagged alerts to compliance auditors.",
        latencyOrMetric: "-64% False Positives",
      },
    ],
    evaluation:
      "Evaluated against live financial payment transactions, FinShield GNN achieved 96.8% precision in detecting multi-hop fraud rings while reducing false-positive rates by 64%. TensorRT inference maintained a 11.4ms scoring latency per transaction under peak workloads of 8,500 transactions per second.",
    outcomes: [
      "Achieved a 96.8% precision score in detecting organized fraud rings, reducing false positives by 64%.",
      "Sustained continuous inference speeds under 12ms per transaction across peak transaction volumes of 8,500 TPS.",
      "Prevented an estimated $4.2M in fraudulent chargebacks and synthetic account openings during production trials.",
    ],
    techStack: ["PyTorch Geometric","Python","XGBoost","Neo4j","Apache Kafka","FastAPI","Docker"],
    accentColor: "indigo",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "medistream-analytics",
    code: "PRO-05 // DATA-01",
    title: "MediStream: Hospital ICU Resource & Patient Flow Analytics",
    category: "data-analysis",
    categoryLabel: "Data Analytics",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    summary:
      "Hospital ICU operational analytics and patient flow intelligence platform utilizing Discrete-Event Simulation, causal inference, and real-time bed occupancy prediction.",
    overview:
      "MediStream is an operational intelligence and patient flow analytics platform engineered for intensive care units and emergency departments. By transforming raw HL7/FHIR hospital streaming data into stochastic queuing models, MediStream forecasts bed occupancy bottlenecks, optimizes critical staffing allocations, and mitigates triage delays before clinical care is compromised.",
    challenge:
      "Unpredictable ICU patient admission surges caused clinical staff bottlenecks and critical supply delays without proactive warning windows.",
    architectureSummary:
      "DuckDB columnar processing + Lifelines survival analysis + LightGBM queuing delay predictor + interactive executive dashboard in React.",
    objectives: [
      "Ingest and standardize heterogeneous hospital HL7/FHIR telemetry streams with sub-second latency.",
      "Predict ICU bed capacity constraints and emergency triage bottlenecks up to 12 hours in advance.",
      "Optimize nursing and clinical specialist shift allocations using discrete-event stochastic simulation.",
    ],
    features: [
      {
        title: "Real-Time HL7/FHIR Event Ingestion",
        description: "Automated data pipeline capturing patient admissions, discharges, and vitals updates with strict HIPAA/GDPR compliance.",
        badge: "Sub-second Sync",
      },
      {
        title: "Stochastic SimPy Queuing Engine",
        description: "Discrete-event simulation modeling ICU arrival distributions, bed occupancy durations, and nurse-to-patient ratios.",
        badge: "94% Forecast Accuracy",
      },
      {
        title: "Predictive Bottleneck Early Warning",
        description: "Proactive threshold alerting that identifies impending bed shortages and suggests dynamic transfers hours in advance.",
        badge: "12h Lead Time",
      },
      {
        title: "Interactive Clinical Executive HUD",
        description: "High-density operational dashboard visualizing hospital ward occupancy, queue velocities, and resource utilization.",
        badge: "Glanceable Telemetry",
      },
    ],
    pipelineSteps: [
      {
        step: "01. HL7/FHIR Stream Ingestion",
        detail: "Stream and clean HL7/FHIR clinical events from hospital records.",
        latencyOrMetric: "Real-Time FHIR",
      },
      {
        step: "02. Stochastic Queue Simulation",
        detail: "Calculate survival probabilities and remaining ICU length-of-stay (LoS).",
        latencyOrMetric: "72h Horizon",
      },
      {
        step: "03. Staffing & Triage Optimization",
        detail: "Simulate bottleneck queuing dynamics and alert nursing leadership 4 hours before capacity breach.",
        latencyOrMetric: "-34% Wait Time",
      },
    ],
    evaluation:
      "Validated on hospital ICU patient flow data, MediStream predicted bed occupancy surges with 94.2% forecast accuracy across 6-hour and 12-hour lead windows. Discrete-event simulation decreased emergency triage wait times by 28% and optimized clinical staffing allocations to lower overtime expenditure by 19%.",
    outcomes: [
      "Forecasted ICU bed occupancy surges with 94.2% accuracy across 6-hour and 12-hour predictive horizons.",
      "Reduced emergency department patient wait times by 28% through preemptive resource re-allocation.",
      "Optimized clinical nursing shift schedules, yielding a 19% reduction in overtime expenditure.",
    ],
    techStack: ["Python","DuckDB","SQL","SimPy","Apache Airflow","PowerBI","FastAPI"],
    accentColor: "emerald",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "quant-pulse-terminal",
    code: "PRO-06 // WEB-01",
    title: "QuantPulse Web: Sub-Millisecond WebSocket Trading Terminal",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=900&q=80",
    summary:
      "Web-based high-frequency trading terminal featuring real-time L2/L3 orderbook depth visualization, custom HTML5 Canvas charting, and ultra-low latency order routing via WebTransport & WebWorkers.",
    overview:
      "QuantPulse Web is an ultra-low latency browser trading terminal designed for high-frequency algorithmic traders and institutional market makers. Built to withstand volatile market surges, the system isolates high-speed binary WebSocket ingestion on dedicated WebWorkers and utilizes SharedArrayBuffers for zero-copy memory synchronization. An OffscreenCanvas GPU rendering engine guarantees locked 60 FPS orderbook depth and candlestick charts without ever competing for main-thread browser cycles.",
    challenge:
      "High-frequency streaming bursts of thousands of orderbook ticks per second overwhelmed the React main thread, causing severe UI frame drops during periods of heightened market volatility.",
    architectureSummary:
      "Off-main-thread WebWorker orderbook state machine + SharedArrayBuffer zero-copy shared memory + OffscreenCanvas GPU rendering delivering locked 60 FPS chart updates.",
    objectives: [
      "Eliminate main-thread UI lag and dropped frames during market volatility by isolating binary stream decoding in background WebWorkers.",
      "Achieve microsecond-level state synchronization between network ingestion and visualization layers using SharedArrayBuffers and Atomics.",
      "Deliver real-time L2/L3 orderbook depth rendering and candlestick chart updates running consistently at locked 60 FPS.",
    ],
    features: [
      {
        title: "Sub-Millisecond L2/L3 Depth Book",
        description: "Real-time orderbook ladder visualization with cumulative depth heatmaps and dynamic price spread indicators.",
        badge: "Sub-ms Latency",
      },
      {
        title: "Zero-Copy Shared Memory Architecture",
        description: "Transfers high-frequency tick matrices from background ingestion workers to the UI thread using SharedArrayBuffers without JSON serialization.",
        badge: "Zero GC Overhead",
      },
      {
        title: "OffscreenCanvas GPU Charting",
        description: "Custom WebGL-accelerated charting engine running on an independent rendering thread for continuous 60 FPS execution.",
        badge: "Locked 60 FPS",
      },
      {
        title: "Resilient Binary WebSocket Mesh",
        description: "High-throughput binary MessagePack protocol parser with automatic failover state machines and microsecond reconnect protocols.",
        badge: "99.99% Uptime",
      },
    ],
    pipelineSteps: [
      {
        step: "01. WebWorker Socket Ingestion",
        detail: "Decode binary MessagePack packets on a dedicated worker thread decoupled from the primary UI.",
        latencyOrMetric: "50K ticks/sec",
      },
      {
        step: "02. SharedArrayBuffer State Sync",
        detail: "Transfer L2 price matrix arrays directly to renderer threads without JSON serialization overhead.",
        latencyOrMetric: "0.08ms Memory Read",
      },
      {
        step: "03. OffscreenCanvas Depth Chart",
        detail: "Render candlesticks and depth heatmaps directly via GPU shader pipelines.",
        latencyOrMetric: "Locked 60 FPS",
      },
    ],
    evaluation:
      "During rigorous runtime execution profiling and volatility stress testing, QuantPulse Web achieved a verified 0.08ms UI state read latency via zero-copy SharedArrayBuffers. The system sustained 50,000 orderbook ticks per second with zero main-thread blocking, while the OffscreenCanvas GPU pipeline delivered locked 60 FPS chart updates with 99.99% session stability across peak trading volume windows.",
    outcomes: [
      "Attained sustained ingestion capacity of 50K orderbook ticks/sec with zero main-thread blocking or frame drops.",
      "Reduced UI state read latency to 0.08ms through zero-copy SharedArrayBuffer shared memory channels.",
      "Maintained 99.99% session stability across extended high-volatility trading sessions.",
    ],
    techStack: ["Next.js","TypeScript","WebWorkers","HTML5 Canvas","WebSockets","Tailwind CSS","Go"],
    accentColor: "cyan",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "shadercraft-gl",
    code: "PRO-07 // CODE-02",
    title: "ShaderCraft: Step-by-Step Raymarching & GLSL Math Academy",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80",
    summary:
      "Interactive graphics programming academy and live code playground for mastering Signed Distance Fields (SDF), raymarching, and GLSL shaders.",
    overview:
      "ShaderCraft is an interactive in-browser GLSL math academy and raymarching sandbox designed to teach GPU fragment shader programming from first principles. Featuring instant hot-reloading compilation, pixel value hover inspection, and 3D Signed Distance Function (SDF) visualizers, ShaderCraft transforms complex vector calculus into real-time visual art.",
    challenge:
      "Learning fragment shaders involves steep mathematical barriers with little real-time visual feedback on matrix and vector transforms.",
    architectureSummary:
      "In-browser GLSL compilation via WebGL2 + Monaco Code Editor + live GPU performance profiling overlay.",
    objectives: [
      "Demystify GPU fragment shaders and mathematical vector operations for web developers and graphics enthusiasts.",
      "Provide instant, sub-millisecond shader compilation with inline error diagnostics and pixel-level inspectability.",
      "Guide learners from basic 2D color gradients to advanced 3D raymarching with shadows and ambient occlusion.",
    ],
    features: [
      {
        title: "Live Hot-Reload GLSL Compiler",
        description: "Zero-latency WebGL2 shader compilation with inline syntax error overlays highlighting exact problem code lines.",
        badge: "Instant Hot-Reload",
      },
      {
        title: "Pixel Value Hover Inspector",
        description: "Interactive cursor inspection tool displaying exact normalized UV coordinates, RGB values, and vector math outputs.",
        badge: "Pixel Inspector",
      },
      {
        title: "Signed Distance Function (SDF) Visualizer",
        description: "Step-by-step visual debugger illustrating raymarching sphere tracing steps and boolean geometry combinations.",
        badge: "3D Raymarching",
      },
      {
        title: "Interactive Guided Lesson Curriculum",
        description: "Structured progressive coding challenges covering smoothstep, fractals, lighting models, and procedural noise.",
        badge: "Progressive Modules",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Hot-Reload GLSL Compiler",
        detail: "Compile user GLSL shader code in real-time with granular error line diagnostics.",
        latencyOrMetric: "< 4ms Compile",
      },
      {
        step: "02. Pixel Value Hover Inspector",
        detail: "Provide interactive 2D/3D sliders directly connected to shader uniform variables.",
        latencyOrMetric: "Real-Time Readback",
      },
      {
        step: "03. SDF Boolean CSG Visualizer",
        detail: "Display interactive mathematical visualizations of signed distance functions and ray intersections.",
        latencyOrMetric: "60 FPS WebGL2",
      },
    ],
    evaluation:
      "Supporting over 8,500 graphics programming students, ShaderCraft delivered instant zero-latency WebGL2 shader hot-reloading with locked 60 FPS previews on standard laptop hardware. 35+ interactive lessons guided learners through vector math, raymarching, and procedural SDF shaders entirely in-browser.",
    outcomes: [
      "Helped over 8,500 aspiring graphics engineers master GLSL shaders and GPU mathematical programming concepts.",
      "Achieved instant 60 FPS shader preview execution on standard laptop integrated graphics.",
      "Delivered 35+ interactive coding exercises with 100% client-side WebGL2 compatibility.",
    ],
    techStack: ["GLSL","WebGL2","Three.js","TypeScript","React","Monaco Editor"],
    accentColor: "teal",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "orbital-command-ux",
    code: "PRO-08 // UIUX-02",
    title: "Orbital Telemetry: Satellite Constellation Mission Control HUD",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    summary:
      "Mission control command interface and flight telemetry HUD engineered for Low Earth Orbit (LEO) satellite constellation operators.",
    overview:
      "Orbital Command is an aerospace satellite constellation mission control interface design engineered for high-stress telemetry monitoring and emergency collision evasion. Designed in Figma and Spline 3D following strict cognitive ergonomics principles, the interface synthesizes thousands of telemetry data points into glanceable, human-centered spatial visualizations.",
    challenge:
      "Satellite ground controllers faced cognitive overload from disjointed sensor monitors, resulting in slow response times during orbital conjunction anomalies.",
    architectureSummary:
      "Dark-mode high-contrast HUD design system + 3D Cesium orbital track visualization + urgency-tiered notification architecture.",
    objectives: [
      "Reduce satellite operator cognitive fatigue during 12-hour mission control monitoring shifts.",
      "Synthesize multi-satellite orbital mechanics, ground station links, and battery thermals into glanceable visual HUDs.",
      "Prevent catastrophic operator error through dual-confirmation failsafe command workflows.",
    ],
    features: [
      {
        title: "Synchronized Chrono-Spatial 3D Orbit View",
        description: "Dual-viewport system displaying both a 3D orbital globe and a synchronized linear mission timeline.",
        badge: "Chrono-Spatial",
      },
      {
        title: "Tiered Cognitive Telemetry Hierarchy",
        description: "Color-coded visual alerts prioritizing critical anomalies (collision warnings, power drops) over routine operational noise.",
        badge: "Zero Cognitive Overload",
      },
      {
        title: "Failsafe Dual-Key Command Confirmation",
        description: "Protected modal interactions requiring two-step verification and preview simulations before thruster burn commands execute.",
        badge: "Zero Mistake",
      },
      {
        title: "High-Contrast Dark Mode HUD Spec",
        description: "Optimized optical contrast tokens conforming to ISO 9241-210 standards for darkened control room environments.",
        badge: "ISO Ergonomics",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Operator Task Decomposition",
        detail: "Map satellite operator cognitive workflows during orbital pass communication windows.",
        latencyOrMetric: "6 Screens -> 1 HUD",
      },
      {
        step: "02. Synchronized Chrono-Spatial UI",
        detail: "Structure a 24-column modular telemetry dashboard prioritizing orbital health vitals.",
        latencyOrMetric: "Real-Time scrubbing",
      },
      {
        step: "03. Failsafe Command Confirmation",
        detail: "Validate alarm response speed through interactive Figma prototypes and simulation trials.",
        latencyOrMetric: "100% Safe Uplink",
      },
    ],
    evaluation:
      "In flight simulation trials with certified aerospace controllers, Orbital Command’s glanceable chrono-spatial interface decreased operator reaction time to orbital collision warnings by 62% (from 85s to 32s). Failsafe dual-confirmation command mechanics eliminated 100% of simulated critical thruster firing mistakes.",
    outcomes: [
      "Reduced operator reaction time to simulated orbital collision warnings by 62%, dropping from 85 seconds to 32 seconds.",
      "Eliminated critical command execution errors during high-stress simulation runs via failsafe confirmation UX.",
      "Achieved a 94% positive usability score from certified aerospace flight operations controllers.",
    ],
    techStack: ["Figma","Spline 3D","HUD Design","Information Architecture","Design Systems","Framer"],
    accentColor: "fuchsia",
  },
  {
    id: "vaultsync-desktop",
    code: "PRO-09 // APP-02",
    title: "VaultSync: End-to-End Encrypted P2P File & Key Manager",
    category: "desktop-mobile",
    categoryLabel: "Desktop & Mobile App",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    summary:
      "Zero-knowledge cross-platform desktop & mobile secure vault application with end-to-end encrypted peer-to-peer file synchronization and password management.",
    overview:
      "VaultSync is a cross-platform desktop encrypted file synchronization and local backup manager built with Rust and Tauri. Engineered for security professionals and privacy-conscious organizations, VaultSync features zero-knowledge client-side AES-256-GCM encryption, block-level delta deduplication, and peer-to-peer LAN synchronization with a minimal 18MB RAM footprint.",
    challenge:
      "Centralized cloud sync services present single-point-of-failure surveillance risks and vulnerable server-side cryptographic key stores.",
    architectureSummary:
      "Tauri (Rust) core + Argon2id key derivation + XChaCha20-Poly1305 authenticated encryption + libp2p encrypted transport.",
    objectives: [
      "Provide zero-knowledge client-side encryption ensuring storage providers never have access to cleartext data or keys.",
      "Minimize network bandwidth and backup times through rolling hash block-level delta synchronization.",
      "Build an ultra-lightweight desktop client consuming less than 25MB of system memory on Windows, macOS, and Linux.",
    ],
    features: [
      {
        title: "Zero-Knowledge AES-256-GCM Cryptography",
        description: "End-to-end client-side encryption using Argon2id key derivation and per-block authenticated encryption.",
        badge: "Military-Grade Crypto",
      },
      {
        title: "Content-Defined Chunking (FastCDC)",
        description: "Rabin fingerprinting algorithm splitting files into dynamic chunks for efficient deduplication and delta transfers.",
        badge: "FastCDC",
      },
      {
        title: "Local LAN Peer Discovery & Sync",
        description: "mDNS local discovery enabling gigabit-speed direct peer synchronization between computers on the same network.",
        badge: "Gigabit LAN",
      },
      {
        title: "Tauri + Rust Lightweight Desktop Core",
        description: "Native systems-level architecture replacing bulky Electron frameworks to achieve instant startup and minimal RAM usage.",
        badge: "18MB RAM",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Memory-Safe Key Derivation",
        detail: "Derive 256-bit symmetric encryption keys from master passphrase using Argon2id.",
        latencyOrMetric: "Zero Swap Leak",
      },
      {
        step: "02. Authenticated Chunk Encryption",
        detail: "Encrypt local file chunks and database records with authenticated XChaCha20-Poly1305.",
        latencyOrMetric: "1.4 GB/s Cipher",
      },
      {
        step: "03. QUIC Peer Discovery",
        detail: "Sync encrypted deltas directly across authenticated peer devices via libp2p.",
        latencyOrMetric: "E2EE Verified",
      },
    ],
    evaluation:
      "Compiled with Rust and Tauri, VaultSync reduced desktop memory footprint from 450MB down to 18MB while delivering local LAN sync speeds exceeding 110 MB/sec. Content-defined FastCDC chunking reduced cloud backup bandwidth by 74% with zero-knowledge AES-256-GCM authenticated encryption.",
    outcomes: [
      "Decreased desktop client memory footprint from 450MB (Electron baseline) down to just 18MB using Tauri and Rust.",
      "Reduced cloud backup upload bandwidth by 74% through content-defined block deduplication.",
      "Achieved local LAN file synchronization transfer speeds exceeding 110 MB/sec across local gigabit networks.",
    ],
    techStack: ["Rust","Flutter","Tauri","QUIC / libp2p","SQLite Cipher","Biometric Auth"],
    accentColor: "amber",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "medvision-3d",
    code: "PRO-10 // AIML-02",
    title: "MedVision 3D: Volumetric MRI Segmentation with Swin-UNETR",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80",
    summary:
      "Volumetric 3D MRI medical image segmentation and tumor volumetry architecture built on Swin-UNETR Vision Transformers and mixed-precision acceleration.",
    overview:
      "MedVision 3D is a deep learning computer vision system engineered for volumetric segmentation and tumor boundary delineation in 3D medical imaging (MRI and CT scans). Built with PyTorch and the nnU-Net framework, the platform provides automated, millimetric lesion measurements with sub-millimeter precision, significantly accelerating radiological diagnostic workflows.",
    challenge:
      "Manual volumetric contouring of 3D MRI brain scans required over 45 minutes per radiologist and exhibited high inter-observer variability.",
    architectureSummary:
      "MONAI framework + PyTorch Swin-UNETR 3D + TensorRT FP16 quantization + DICOM standard integration.",
    objectives: [
      "Automate precise 3D volumetric segmentation of anatomical structures and pathological lesions in MRI/CT scans.",
      "Achieve a Dice Similarity Coefficient exceeding 0.90 to match expert radiologist manual annotation standards.",
      "Reduce radiologist contouring time from 40 minutes per volumetric scan to under 90 seconds.",
    ],
    features: [
      {
        title: "3D Volumetric U-Net Architecture",
        description: "Deep residual 3D convolutional network tailored with self-configuring patch sizes and isotropic resampling.",
        badge: "0.92 Dice Score",
      },
      {
        title: "Automated Windowing & Preprocessing",
        description: "GPU-accelerated Hounsfield unit clipping, intensity normalization, and spatial skull-stripping routines.",
        badge: "Fast Preprocessing",
      },
      {
        title: "Interactive Multi-Planar Slice Viewer",
        description: "Axial, sagittal, and coronal synchronized viewport rendering with live contour toggling and 3D surface mesh generation.",
        badge: "Multi-Planar 3D",
      },
      {
        title: "Calibrated Uncertainty Heatmaps",
        description: "Monte Carlo dropout sampling that highlights ambiguous tumor margins to guide radiologist verification.",
        badge: "Uncertainty Maps",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Isotropic Voxel Normalization",
        detail: "Normalize raw DICOM voxels, perform spatial resampling, and apply intensity clipping.",
        latencyOrMetric: "0.8s Preprocess",
      },
      {
        step: "02. Sliding-Window 3D Attention",
        detail: "Execute 3D hierarchical windowed self-attention across volumetric patches.",
        latencyOrMetric: "91.8% Dice Score",
      },
      {
        step: "03. 3D Mesh & DICOM-SEG Export",
        detail: "Generate voxel-level tumor segmentations with 92.4% Dice score within 1.2 seconds.",
        latencyOrMetric: "4.2s Full Volume",
      },
    ],
    evaluation:
      "Evaluated on multi-institutional 3D volumetric MRI and CT datasets, MedVision 3D attained an average 0.924 Dice Similarity Coefficient matching senior radiologist annotations. Automated volumetric segmentation reduced clinical contouring time by 78%, dropping from 40 minutes down to 85 seconds per scan with zero clinically critical misses.",
    outcomes: [
      "Achieved an average 0.924 Dice Similarity Coefficient across multi-institutional validation datasets.",
      "Reduced radiologist manual contouring and segmentation time by 78%, dropping from 40 minutes to 85 seconds per scan.",
      "Successfully verified zero clinically critical boundary misses across 450+ evaluation validation volumes.",
    ],
    techStack: ["PyTorch","MONAI","Swin-UNETR","ONNX","FastAPI","Python","Three.js"],
    accentColor: "indigo",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "revops-attribution",
    code: "PRO-11 // DATA-02",
    title: "RevMatrix: Multi-Touch Marketing Attribution & Uplift Suite",
    category: "data-analysis",
    categoryLabel: "Data Analytics",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80",
    summary:
      "Multi-touch marketing attribution and revenue optimization suite fusing Higher-Order Markov Chains, Shapley Value calculations, and Bayesian Media Mix Modeling (MMM).",
    overview:
      "RevMatrix is a multi-touch attribution and marketing mix modeling platform designed to resolve revenue uplift across omnichannel B2B customer journeys. Utilizing Markov chains and Bayesian uplift curves on multi-gigabyte event datasets, RevMatrix isolates the true incremental value of every marketing touchpoint to drive data-backed capital allocation.",
    challenge:
      "Traditional First-Touch and Last-Touch attribution models misattributed up to 42% of customer acquisition budgets by ignoring cross-channel touchpoint synergies.",
    architectureSummary:
      "PyMC Bayesian modeling pipeline + dbt dimensional modeling on ClickHouse + Streamlit analytical workbench with scenario optimization.",
    objectives: [
      "Reconstruct unified customer journeys spanning paid advertising, content marketing, sales demos, and email sequences.",
      "Calculate true incremental attribution using algorithmic Markov removal effects rather than naive first/last touch rules.",
      "Forecast diminishing return curves across ad channels to maximize blended customer acquisition efficiency.",
    ],
    features: [
      {
        title: "Algorithmic Markov Chain Attribution",
        description: "Calculates the probabilistic removal effect of individual marketing touchpoints to determine true conversion contribution.",
        badge: "Data-Driven Attribution",
      },
      {
        title: "Bayesian Adstock & Saturation Modeling",
        description: "Quantifies advertising memory carryover effects and diminishing returns to identify channel overspend.",
        badge: "Bayesian Uplift",
      },
      {
        title: "Automated dbt Data Marts",
        description: "Orchestrated daily data transformation models in BigQuery that compile raw clickstream logs into clean attribution marts.",
        badge: "Automated ETL",
      },
      {
        title: "Budget Allocation Scenario Simulator",
        description: "Interactive Monte Carlo optimizer that models expected revenue outcomes across varying media spend distributions.",
        badge: "Budget Optimizer",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Multi-Channel Journey Graph",
        detail: "Ingest and unify multi-channel ad impressions, email clicks, and CRM conversion journeys.",
        latencyOrMetric: "8.5M Journeys",
      },
      {
        step: "02. Removal Effect Calculation",
        detail: "Fit Markov transition removal matrices to determine incremental channel influence.",
        latencyOrMetric: "Markov Order-3",
      },
      {
        step: "03. Saturation & Adstock Curve",
        detail: "Run Bayesian MCMC simulations to recommend optimal ad spend allocations across marketing vectors.",
        latencyOrMetric: "+31.5% ROAS",
      },
    ],
    evaluation:
      "Processing over 250,000 multi-touch customer journeys, RevMatrix eliminated conversion attribution blindspots using algorithmic Markov removal calculations. Reallocating misattributed marketing capital increased overall return on ad spend (ROAS) by 34% while automated dbt pipelines saved analysts 15 hours of manual reporting per week.",
    outcomes: [
      "Eliminated attribution blindspots across 250,000+ omnichannel customer conversion paths.",
      "Reallocated misattributed marketing capital, boosting overall marketing return on ad spend (ROAS) by 34%.",
      "Automated daily attribution mart generation, cutting analyst reporting overhead by 15 hours per week.",
    ],
    techStack: ["Python","PyMC","BigQuery","dbt","Polars","Tableau","SQL"],
    accentColor: "emerald",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "aether-canvas-collab",
    code: "PRO-12 // WEB-02",
    title: "AetherCanvas: Multiplayer WebGL Whiteboard & CRDT Engine",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    summary:
      "Real-time collaborative canvas and infinite spatial whiteboard engineered with WebGL and Yjs CRDTs, supporting hundreds of concurrent multiplayer cursors and conflict-free offline-first synchronization.",
    overview:
      "AetherCanvas is a distributed infinite multiplayer whiteboard and spatial vector canvas engineered for hyper-collaborative engineering teams. By combining custom WebGL instanced rendering with Yjs Conflict-Free Replicated Data Types (CRDTs), the platform seamlessly supports hundreds of simultaneous users editing complex architectural topologies with instantaneous local feedback and mathematically guaranteed consistency across the network.",
    challenge:
      "Simultaneously rendering thousands of vector nodes and dynamic diagram paths on standard DOM elements caused catastrophic frame rate drops during rapid pan and zoom gestures.",
    architectureSummary:
      "Custom WebGL 2D/3D batch renderer with spatial R-Tree indexing, Yjs CRDT state synchronization over WebSockets, and local IndexedDB caching.",
    objectives: [
      "Render tens of thousands of dynamic vector nodes and connectors with buttery-smooth 120 FPS camera navigation.",
      "Guarantee conflict-free, offline-capable multiplayer collaboration using binary Yjs CRDTs over multiplexed WebSockets.",
      "Eliminate network latency perception through client-side optimistic gesture prediction and spatial R-Tree viewport culling.",
    ],
    features: [
      {
        title: "Infinite Spatial WebGL Canvas",
        description: "Hardware-accelerated viewport rendering capable of displaying over 10,000 interactive vector nodes simultaneously with zero slowdown.",
        badge: "120 FPS Viewport",
      },
      {
        title: "Conflict-Free CRDT Multiplayer",
        description: "Decentralized Yjs state replication providing real-time peer synchronization, offline-first persistence, and seamless delta merges.",
        badge: "Zero Conflict",
      },
      {
        title: "Dynamic R-Tree Spatial Culling",
        description: "High-performance bounding-box spatial indexing that evaluates and renders only objects within the active frustum camera.",
        badge: "0.4ms Culling",
      },
      {
        title: "Multi-User Telepresence & Live Cursors",
        description: "High-density cursor tracking and viewport follow mode streaming smooth 60 FPS cursor motion with sub-15ms network latency.",
        badge: "<15ms Sync",
      },
    ],
    pipelineSteps: [
      {
        step: "01. R-Tree Spatial Culling",
        detail: "Cull and render only visual nodes situated within the active camera frustum viewport.",
        latencyOrMetric: "0.4ms Frustum Check",
      },
      {
        step: "02. Yjs Binary Delta Broadcast",
        detail: "Propagate binary Uint8Array vector deltas across connected peer clients.",
        latencyOrMetric: "12ms Peer Sync",
      },
      {
        step: "03. Instanced WebGL Vector Draw",
        detail: "Batch thousands of Bezier curves and geometric primitives into a single instanced GPU draw call.",
        latencyOrMetric: "120 FPS Canvas",
      },
    ],
    evaluation:
      "Under intensive multiplayer load simulations, AetherCanvas maintained a locked 120 FPS canvas pan and zoom rate across scenes with over 10,000 active vector nodes. Real-time multiplayer synchronization latency was evaluated at 12ms via binary CRDT delta packets, successfully supporting over 500 concurrent editors with zero merge conflicts or data loss.",
    outcomes: [
      "Sustained a locked 120 FPS pan and zoom refresh rate across complex topologies containing 10,000+ vector nodes.",
      "Achieved peer-to-peer multiplayer synchronization latency of 12ms utilizing optimized binary CRDT delta packets.",
      "Successfully validated concurrent multi-editor stress sessions with 500+ simultaneous collaborators without merge conflicts.",
    ],
    techStack: ["React","TypeScript","WebGL","Yjs CRDT","WebSockets","Rust WASM","Tailwind CSS"],
    accentColor: "cyan",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "rustlab-memory",
    code: "PRO-13 // CODE-03",
    title: "BorrowChecker Lab: Visual Ownership & Lifetimes Simulator",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
    summary:
      "Visual memory safety and borrow checker simulator for developers learning Rust ownership, borrowing, and lifetime rules.",
    overview:
      "BorrowChecker Lab is an interactive visual simulator and educational tool designed to demystify Rust ownership, borrowing, and lifetime semantics. By executing a WebAssembly-compiled Tree-Sitter parser in the browser, BorrowChecker Lab translates Rust source code into a dynamic graph showing stack allocations, heap references, mutable loans, and lifetime scopes in real time.",
    challenge:
      "The Rust borrow checker has a steep learning curve; developers struggle to visualize compile-time lifetime scopes and heap-versus-stack allocations.",
    architectureSummary:
      "Rust MIR/HIR AST parser simulation + interactive memory timeline animator + compile error diagnosis guide.",
    objectives: [
      "Overcome the steep Rust ownership learning curve by visually depicting memory moves, loans, and drops.",
      "Provide plain-English explanations and visual fixes for common Rust compiler borrow checker errors (E0502, E0382).",
      "Parse and analyze Rust code locally in the browser using high-speed WebAssembly parsing.",
    ],
    features: [
      {
        title: "Tree-Sitter WASM AST Parse Engine",
        description: "High-speed browser-based Rust syntax tree analyzer extracting variable declarations, scopes, and reference scopes.",
        badge: "WASM AST",
      },
      {
        title: "Interactive Ownership & Move Graph",
        description: "Real-time D3.js memory graph visually animating value moves from source to target variables and heap deallocations.",
        badge: "Visual Memory",
      },
      {
        title: "Borrow Checker Error Explainer",
        description: "Diagnostic assistant translating complex compiler error messages into step-by-step visual diagrams with recommended fixes.",
        badge: "Error Explainer",
      },
      {
        title: "Lifetime Scope Visualizer",
        description: "Color-coded overlay highlighting exact lexical lifetimes of references and pinpointing dangling pointer violations.",
        badge: "Lifetime Scopes",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Tree-Sitter WASM AST Parse",
        detail: "Parse user code snippets into variable declarations, borrow events, and scope lifetimes.",
        latencyOrMetric: "2ms Parse Time",
      },
      {
        step: "02. Ownership Move & Borrow Graph",
        detail: "Animate stack frames, heap allocations, and reference ownership pointers visually.",
        latencyOrMetric: "Visual Lifetimes",
      },
      {
        step: "03. Interactive Error Explainer",
        detail: "Illustrate exact borrow lifetime violations with corrective code recommendations.",
        latencyOrMetric: "40+ Rust Katas",
      },
    ],
    evaluation:
      "Over 100,000 user-submitted Rust code snippets were parsed with sub-100ms AST analysis using Tree-Sitter WebAssembly. Interactive visual ownership graphs and compiler error explainers shortened onboarding time for new systems programmers by 50%, virtually eliminating initial borrow checker friction.",
    outcomes: [
      "Reduced initial Rust borrow checker frustration and shortened onboarding time for new systems programmers by 50%.",
      "Visualized over 100,000 user-submitted code snippets with sub-100ms syntax and borrow graph rendering.",
      "Recognized by the Rust community as a premier interactive educational visualizer for ownership concepts.",
    ],
    techStack: ["Rust","WebAssembly","Tree-Sitter","TypeScript","Next.js","Tailwind CSS"],
    accentColor: "teal",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "vitalis-clinical-ux",
    code: "PRO-14 // UIUX-03",
    title: "Vitalis EHR: Zero-Fatigue Clinical ICU Monitoring Interface",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    summary:
      "Zero-fatigue clinical ICU patient monitoring interface and Electronic Health Record (EHR) redesign targeting alarm fatigue reduction and medical error prevention.",
    overview:
      "Vitalis EHR is a human-centered, zero-fatigue clinical monitoring interface and electronic health records system created for intensive care unit (ICU) physicians and nurses. Engineered in strict accordance with IEC 62366 medical device usability standards, Vitalis replaces cluttered medical interfaces with high-density, glanceable vital trends and intelligent alarm prioritization.",
    challenge:
      "Traditional bedside monitors displayed overwhelming flashing indicators with poor contrast, causing up to 4-second response delays in critical patient emergencies.",
    architectureSummary:
      "Human-Factors Engineering compliant with IEC 62366, high-legibility distance typography (2 meters), and a tri-level visual alarm hierarchy.",
    objectives: [
      "Mitigate clinical alarm fatigue by filtering non-critical alerts and surfacing actionable physiological trends.",
      "Optimize clinical medication charting and order entry speed during urgent trauma and resuscitation scenarios.",
      "Ensure strict compliance with FDA/IEC 62366 human factors engineering and medical accessibility guidelines.",
    ],
    features: [
      {
        title: "Glanceable 10-Second Vitals Hierarchy",
        description: "Visual patient cards presenting composite Early Warning Scores (NEWS2), heart rate variability, and oxygenation at a glance.",
        badge: "Glanceable UX",
      },
      {
        title: "Intelligent Tiered Alarm Suppression",
        description: "Smart alarm algorithms combining multi-parameter correlations to suppress 70%+ of clinically non-actionable nuisance alarms.",
        badge: "-72% Nuisance Alarms",
      },
      {
        title: "Rapid-Action Medication Barcode Flow",
        description: "High-contrast mobile and bedside tablet interface verifying patient wristbands and medication doses in two taps.",
        badge: "Two-Tap Safety",
      },
      {
        title: "High-Density ICU Dark Theme",
        description: "Ergonomically designed dark palette minimizing nighttime patient disturbance while maintaining AAA contrast for nurses.",
        badge: "AAA Contrast",
      },
    ],
    pipelineSteps: [
      {
        step: "01. ICU Contextual Inquiry",
        detail: "Conduct contextual inquiry observing nurse and physician workflows on overnight ICU shifts.",
        latencyOrMetric: "120 Hours Field Study",
      },
      {
        step: "02. Glanceable Vitals Hierarchy",
        detail: "Redesign vital sign wave layout with anatomical physiological organ grouping.",
        latencyOrMetric: "-2.4s Recognition",
      },
      {
        step: "03. Clinical Simulation Testing",
        detail: "Perform clinical simulation testing reducing emergency critical anomaly recognition by -2.4 seconds.",
        latencyOrMetric: "0 Critical Errors",
      },
    ],
    evaluation:
      "Clinical human factors validation under IEC 62366 demonstrated that Vitalis EHR reduced non-actionable ICU nuisance alarms by 72%, mitigating cognitive nurse fatigue. Bedside medication documentation time was cut from 18 minutes to under 6 minutes per patient shift with zero critical safety errors.",
    outcomes: [
      "Decreased non-actionable clinical nuisance alarms by 72%, substantially reducing ICU nurse cognitive fatigue.",
      "Cut routine bedside nursing documentation time from 18 minutes per patient shift to under 6 minutes.",
      "Achieved zero critical usability errors during formal FDA/IEC 62366 medical human factors validation trials.",
    ],
    techStack: ["Figma","Human Factors (IEC 62366)","Clinical UX","Prototyping","Accessibility","Design Tokens"],
    accentColor: "fuchsia",
  },
  {
    id: "dronefleet-command",
    code: "PRO-15 // APP-03",
    title: "Skyward GCS: Autonomous Drone Fleet Desktop Ground Station",
    category: "desktop-mobile",
    categoryLabel: "Desktop & Mobile App",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=80",
    summary:
      "Mission-critical Ground Control Station (GCS) desktop application for autonomous multi-drone fleet orchestration, 3D waypoint navigation, and real-time telemetry.",
    overview:
      "DroneFleet Command is a real-time mission control and telemetry workstation engineered for autonomous unmanned aerial vehicle (UAV) fleet operations. Built with Electron, C++, and WebGL, the software decodes high-frequency MAVLink telemetry packets, renders interactive 3D terrain maps with elevation contours, and executes automated multi-vehicle waypoint navigation.",
    challenge:
      "Supervising 20+ simultaneous UAVs required real-time flight telemetry parsing, video decoding, and fail-safe return-to-base protocols without UI lag.",
    architectureSummary:
      "Rust backend engine + MAVLink telemetry protocol + WebRTC H.264 video pipeline + React/Tailwind HUD interface on Tauri.",
    objectives: [
      "Ingest and visualize concurrent telemetry streams from up to 50 autonomous UAVs with sub-10ms latency.",
      "Provide 3D spatial terrain visualization with real-time flight path prediction and geofence collision alerting.",
      "Maintain reliable low-bandwidth satellite and radio communication links with autonomous failover routines.",
    ],
    features: [
      {
        title: "High-Throughput MAVLink Decoupled Parser",
        description: "C++ native addon parsing binary UAV telemetry packets on dedicated worker threads with zero UI thread stutter.",
        badge: "50+ Drones",
      },
      {
        title: "3D Cesium/WebGL Geospatial Globe",
        description: "Hardware-accelerated 3D terrain rendering displaying elevation contours, no-fly zones, and live aircraft positions.",
        badge: "3D Geospatial",
      },
      {
        title: "Predictive Collision & Geofence Failsafe",
        description: "Spatial trajectory extrapolation alerting pilots to impending airspace conflicts and triggering autonomous return-to-home.",
        badge: "Failsafe Guard",
      },
      {
        title: "Multi-Vehicle Waypoint Flight Planner",
        description: "Intuitive mission design tool generating optimal energy-conserving flight grids and survey patterns in seconds.",
        badge: "Mission Planner",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Rust MAVLink v2 Multiplexer",
        detail: "Decode high-frequency MAVLink telemetry streams over serial and UDP sockets.",
        latencyOrMetric: "0.3ms Packet Parse",
      },
      {
        step: "02. 3D Terrain Corridor Planner",
        detail: "Compute 3D spatial flight paths and automated geofence collision envelopes.",
        latencyOrMetric: "Collision-Free",
      },
      {
        step: "03. Hardware Video Decode",
        detail: "Display real-time HUD telemetry, battery health, and high-definition video feeds.",
        latencyOrMetric: "65ms Glass-to-Glass",
      },
    ],
    evaluation:
      "In simulated and live field flights with 48 autonomous UAVs, DroneFleet Command processed high-frequency MAVLink telemetry with a 9ms average latency. The 3D Cesium/WebGL terrain viewport sustained a locked 60 FPS refresh rate, with zero collision incidents recorded across 1,200+ autonomous missions.",
    outcomes: [
      "Successfully sustained simultaneous tracking and command dispatch for 48 active drones with 9ms average telemetry latency.",
      "Eliminated UI frame drops during high-density multi-vehicle operations, holding a constant 60 FPS viewport refresh.",
      "Zero collision incidents recorded across over 1,200 simulated and physical autonomous test flights.",
    ],
    techStack: ["Rust","Tauri","React","TypeScript","MAVLink","GStreamer","WebGL"],
    accentColor: "amber",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "geosense-spatial",
    code: "PRO-16 // DATA-03",
    title: "GeoSense: National Supply Chain & Spatial Logistics Intelligence",
    category: "data-analysis",
    categoryLabel: "Data Analytics",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80",
    summary:
      "Geospatial logistics intelligence and fleet telemetry platform leveraging Uber H3 Hexagonal Hierarchical Spatial Indexing and multi-agent routing cost optimization.",
    overview:
      "GeoSense is an enterprise spatial intelligence and logistics analytics platform built to monitor and optimize nationwide multimodal supply chains. Utilizing Uber H3 hexagonal spatial indexing and ClickHouse columnar storage, GeoSense processes billions of GPS vehicle pings to detect spatial corridor bottlenecks, calculate dynamic travel time isochrones, and optimize freight routing.",
    challenge:
      "Computing cross-city travel times and route clustering across hundreds of thousands of delivery coordinates incurred high computational latency in standard GIS systems.",
    architectureSummary:
      "H3 spatial discretization on DuckDB/PostGIS + OSRM routing engine + D3/Deck.gl GPU-accelerated spatial map visualizer.",
    objectives: [
      "Ingest and index millions of daily GPS freight coordinates into hierarchical hexagonal H3 grids with sub-second queries.",
      "Detect logistics bottlenecks, corridor congestion, and warehouse dwell-time anomalies automatically.",
      "Generate accurate travel-time isochrones and cost distance matrices for nationwide delivery fleets.",
    ],
    features: [
      {
        title: "Uber H3 Hexagonal Spatial Partitioning",
        description: "Discretizes global GPS telemetry into hierarchical spatial hexagons (Resolution 7-9) for ultra-fast spatial aggregation.",
        badge: "10x Faster Queries",
      },
      {
        title: "ClickHouse Columnar Spatial Storage",
        description: "High-throughput columnar analytical database optimized for sub-second spatial range scans across billions of records.",
        badge: "Billion+ Pings",
      },
      {
        title: "Corridor Congestion & Dwell Analytics",
        description: "Automated spatial clustering identifying warehouse loading dock delays and recurrent interstate freight bottlenecks.",
        badge: "Automated Anomaly",
      },
      {
        title: "Dynamic Deck.gl Spatial Visualization",
        description: "WebGL-accelerated geospatial heatmaps rendering millions of active vehicle trajectories and density contours smoothly.",
        badge: "60 FPS Geospatial",
      },
    ],
    pipelineSteps: [
      {
        step: "01. GPS Telemetry H3 Indexing",
        detail: "Index GPS telemetry pings into H3 Hexagon Resolution-08 buckets.",
        latencyOrMetric: "45M pings/day",
      },
      {
        step: "02. Spatial Bottleneck Clustering",
        detail: "Calculate spatial clustering, delivery density heatmaps, and deadheading penalties.",
        latencyOrMetric: "98.4% Precision",
      },
      {
        step: "03. Isochrone & Cost Matrix",
        detail: "Solve vehicle routing problems (VRP) to optimize multimodal dispatch schedules.",
        latencyOrMetric: "-19.2% Fuel Cost",
      },
    ],
    evaluation:
      "Evaluated across 15,000 active freight vehicles and billions of GPS coordinates, GeoSense accelerated spatial aggregation queries by 14x compared to standard PostGIS geometries. Uber H3 hexagonal clustering pinpointed supply corridor delays, reducing average linehaul transit times by 16%.",
    outcomes: [
      "Accelerated spatial aggregation query speeds by 14x compared to traditional PostGIS geometry queries on big data.",
      "Identified critical freight corridor bottlenecks, reducing average linehaul transit times by 16%.",
      "Enabled real-time geospatial tracking and bottleneck visibility across 15,000+ active freight vehicles nationwide.",
    ],
    techStack: ["Python","PostGIS","Uber H3","ClickHouse","Deck.gl","Polars","Airflow"],
    accentColor: "emerald",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "velox-edge-cms",
    code: "PRO-17 // WEB-03",
    title: "VeloxEdge: Distributed Headless CMS & Content Mesh",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2024",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    summary:
      "Distributed headless content management platform featuring a federated GraphQL API, real-time multi-author collaborative editing, and instant sub-10ms cache invalidation across 280+ global edge POPs.",
    overview:
      "VeloxEdge is an ultra-distributed headless content management system and edge content mesh designed for global digital publications. By serializing structured rich-text into lightweight Abstract Syntax Trees and distributing cache invalidation via surrogate-key edge purging across 280+ edge nodes, VeloxEdge achieves sub-10ms global content delivery while virtually eliminating origin database load.",
    challenge:
      "Legacy CMS architectures encountered database bottlenecks during breaking news traffic spikes and required several minutes to revalidate global CDN caches.",
    architectureSummary:
      "Next.js App Router with tag-based Incremental Static Regeneration (ISR), GraphQL Mesh gateway, read-replicas on PostgreSQL, and Cloudflare Durable Objects.",
    objectives: [
      "Deploy an edge-native content delivery mesh capable of serving cached content within 10ms worldwide.",
      "Implement instantaneous, targeted cache invalidation using surrogate keys to eliminate stale editorial reads.",
      "Achieve perfect 100/100 Google Lighthouse Core Web Vitals across high-traffic media websites.",
    ],
    features: [
      {
        title: "Surrogate-Key Edge Cache Mesh",
        description: "Granular cache tagging allowing instant invalidation of modified content across 280+ worldwide edge locations in under 10ms.",
        badge: "8.5ms Global Purge",
      },
      {
        title: "AST-Based Content Engine",
        description: "Modular rich-text schema stored as clean JSON ASTs, decoupling editorial authoring from frontend presentation layers.",
        badge: "Flexible Schemas",
      },
      {
        title: "Edge GraphQL Gateway",
        description: "Distributed GraphQL query execution layer that computes responses directly at edge PoPs close to end users.",
        badge: "99.4% Cache Hit",
      },
      {
        title: "Autonomous Asset Pipeline",
        description: "Automated WebP/AVIF image transcoding and responsive srcset generation performed on the fly at edge worker nodes.",
        badge: "Auto Optimization",
      },
    ],
    pipelineSteps: [
      {
        step: "01. AST Rich-Text Serialization",
        detail: "Compile modular block documents into compressed JSON AST data structures.",
        latencyOrMetric: "3.2ms Compile",
      },
      {
        step: "02. Surrogate-Key Edge Purge",
        detail: "Execute granular dependency-graph cache invalidation across worldwide edge nodes.",
        latencyOrMetric: "8.5ms Global Purge",
      },
      {
        step: "03. Edge GraphQL Caching",
        detail: "Serve personalized query responses from edge memory with stale-while-revalidate guarantees.",
        latencyOrMetric: "99.4% Cache Hit",
      },
    ],
    evaluation:
      "Across global CDN stress evaluations spanning 280+ edge nodes, VeloxEdge achieved an average global cache purge latency of 8.5ms using surrogate-key invalidation. The edge content mesh sustained a 99.4% cache hit ratio, reducing origin database load by 82% while scoring a perfect 100/100 Google Lighthouse performance rating with zero blocking JavaScript.",
    outcomes: [
      "Accelerated global edge cache purge latency down to 8.5ms across 280+ worldwide edge CDN points of presence.",
      "Attained a 99.4% edge cache hit ratio, decreasing origin database compute load by 82%.",
      "Achieved a perfect 100/100 Lighthouse performance rating with zero blocking JavaScript execution.",
    ],
    techStack: ["Next.js","TypeScript","GraphQL","PostgreSQL","Redis","Cloudflare Workers","Tailwind CSS"],
    accentColor: "cyan",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "voxguard-asr",
    code: "PRO-18 // AIML-03",
    title: "VoxGuard: Multilingual Speech Diarization & Voice Fraud AI",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=900&q=80",
    summary:
      "Multilingual speech recognition, speaker diarization, and synthetic voice deepfake detection system engineered for high-concurrency enterprise contact centers.",
    overview:
      "VoxGuard is an enterprise on-premises Automatic Speech Recognition (ASR) and biometric speaker diarization engine designed for confidential clinical and financial call centers. By pairing fine-tuned Conformer-CTC acoustic models with localized speaker embedding extractors, VoxGuard delivers transcription accuracy rivaling proprietary cloud APIs while ensuring zero sensitive voice data ever leaves the local perimeter.",
    challenge:
      "Voice biometric authentication systems were vulnerable to generative AI acoustic spoofing, while noisy call audio degraded transcription accuracy.",
    architectureSummary:
      "Conformer-CTC acoustic model + RawNet3 speaker embedding extractor + LFCC-GMM voice spoofing detector + WebRTC streaming.",
    objectives: [
      "Deliver ultra-accurate speech-to-text transcription with under 4% Word Error Rate (WER) on noisy audio streams.",
      "Implement real-time multi-speaker diarization identifying distinct participants with under 100ms lag.",
      "Operate completely air-gapped on localized GPU/CPU hardware with zero third-party cloud data egress.",
    ],
    features: [
      {
        title: "Fine-Tuned Conformer-CTC Acoustic Model",
        description: "Hybrid convolution and self-attention architecture optimized for domain-specific medical and financial vernacular.",
        badge: "3.6% WER",
      },
      {
        title: "Real-Time Neural Speaker Diarization",
        description: "X-vector clustering and cosine similarity metrics separating agent and customer speech channels dynamically.",
        badge: "Multi-Speaker",
      },
      {
        title: "Air-Gapped On-Premises Architecture",
        description: "Self-contained Docker/Triton inference container requiring zero external network connectivity.",
        badge: "100% Air-Gapped",
      },
      {
        title: "Low-Latency Streaming Quantization",
        description: "INT8 quantized model checkpoints executing on consumer-grade workstation GPUs with a 0.25 Real-Time Factor (RTF).",
        badge: "0.25x RTF",
      },
    ],
    pipelineSteps: [
      {
        step: "01. WebRTC Audio Framing & VAD",
        detail: "Stream raw 16kHz PCM audio buffers through noise cancellation filters.",
        latencyOrMetric: "4ms VAD Gate",
      },
      {
        step: "02. Acoustic Spoofing Classifier",
        detail: "Extract Linear Frequency Cepstral Coefficients (LFCC) to detect spectral synthesis artifacts.",
        latencyOrMetric: "0.4% EER Score",
      },
      {
        step: "03. Streaming Conformer ASR",
        detail: "Transcribe audio stream while continuously verifying speaker biometric authenticity.",
        latencyOrMetric: "4.8% WER Indo",
      },
    ],
    evaluation:
      "On noisy clinical dictations and telephone audio streams, VoxGuard recorded an ultra-low 3.6% Word Error Rate (WER) with real-time multi-speaker diarization lagging under 85ms. INT8 quantized inference achieved a 0.25 Real-Time Factor (RTF) running completely air-gapped on localized workstation hardware.",
    outcomes: [
      "Achieved a 3.6% Word Error Rate (WER) across challenging clinical dictations and low-bandwidth phone audio.",
      "Attained an 85ms end-to-end streaming transcription latency, enabling live agent guidance during active calls.",
      "Guaranteed 100% regulatory compliance with HIPAA and financial data privacy standards via complete on-prem isolation.",
    ],
    techStack: ["PyTorch","Whisper","WavLM","CTranslate2","gRPC","FastAPI","Redis"],
    accentColor: "indigo",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "sqlcraft-academy",
    code: "PRO-19 // CODE-04",
    title: "SQLCraft: Interactive Columnar Query Plan & Indexing Sandbox",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80",
    summary:
      "Interactive database engineering academy and query optimization sandbox visualizing B-Tree versus LSM-Tree scans and execution plans.",
    overview:
      "SQLCraft Academy is an interactive columnar query optimization and relational indexing sandbox that visualizes query execution plans and B-Tree storage structures. Utilizing DuckDB-WASM running client-side in the browser, SQLCraft allows learners to observe sequential scans, hash joins, and index seeks step-by-step with zero server infrastructure.",
    challenge:
      "Developers often write unoptimized SQL queries without understanding how database storage engines physically scan, sort, and join rows on disk.",
    architectureSummary:
      "WASM SQLite database engine + execution plan visualizer + interactive query cost heatmaps.",
    objectives: [
      "Teach relational database internals and query performance tuning through interactive visual query plans.",
      "Demonstrate the exact computational difference between full table scans, B-Tree index seeks, and columnar projections.",
      "Deliver a fully functional in-browser SQL playground capable of running analytical queries on real datasets.",
    ],
    features: [
      {
        title: "In-Browser DuckDB-WASM Engine",
        description: "Complete embedded analytical database running inside the client browser capable of executing complex SQL queries.",
        badge: "DuckDB-WASM",
      },
      {
        title: "Interactive Query Plan AST Visualizer",
        description: "Visual execution graph showing node-by-node cost metrics, filter pushdowns, and join algorithms with animated data flows.",
        badge: "Execution Graph",
      },
      {
        title: "B-Tree Index Page Seek Simulator",
        description: "Step-by-step animation showing how database storage engines traverse B-Tree index levels to locate matching rows.",
        badge: "B-Tree Visualizer",
      },
      {
        title: "Performance Profiler & Optimization Hints",
        description: "Automated diagnostic engine suggesting missing indexes, partition pruning, and projection optimizations.",
        badge: "Optimization Hints",
      },
    ],
    pipelineSteps: [
      {
        step: "01. In-Browser WASM DB Engine",
        detail: "Execute SQL queries in-browser using compiled WebAssembly SQLite engines.",
        latencyOrMetric: "1M Rows Local",
      },
      {
        step: "02. Query Plan AST Visualizer",
        detail: "Parse EXPLAIN QUERY PLAN outputs into visual tree nodes with scan cost badges.",
        latencyOrMetric: "Visual Cost Tree",
      },
      {
        step: "03. B-Tree Page Seek Simulator",
        detail: "Offer interactive indexing challenges demonstrating 100x speedups from index coverage.",
        latencyOrMetric: "Interactive I/O",
      },
    ],
    evaluation:
      "SQLCraft Academy demonstrated 100x query performance gains visually by illustrating B-Tree index seeks and filter pushdowns on DuckDB-WASM. Over 12,000 developers mastered database internals using the zero-server interactive execution plan visualizer.",
    outcomes: [
      "Empowered over 12,000 database developers and analysts to understand query execution plans and index mechanics.",
      "Demonstrated 100x query speedups visually by optimizing query plans and adding targeted indexes.",
      "100% serverless client-side architecture supporting multi-megabyte analytical dataset queries with zero hosting costs.",
    ],
    techStack: ["DuckDB-WASM","TypeScript","React","React Flow","SQL","Tailwind CSS"],
    accentColor: "teal",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "nova-fintech-ux",
    code: "PRO-20 // UIUX-04",
    title: "Nova Wealth: Next-Gen Algorithmic Portfolio & Crypto UX",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    summary:
      "Algorithmic wealth management and multi-asset portfolio UX engineered for institutional investors and tech-savvy retail traders.",
    overview:
      "Nova Wealth is a next-generation algorithmic wealth management and quantitative crypto investment portfolio user experience. Designed to bridge the gap between complex quantitative financial analytics and retail investors, Nova Wealth employs progressive disclosure, interactive risk simulations, and transparent algorithmic visualizers.",
    challenge:
      "Sophisticated quantitative portfolio rebalancing tools were intimidated by convoluted tables and confusing risk distribution charts.",
    architectureSummary:
      "Interactive risk slider architecture + visual asset correlation heatmaps + one-tap automated portfolio rebalancing flow.",
    objectives: [
      "Demystify complex quantitative investment strategies and portfolio risk metrics for everyday investors.",
      "Provide interactive Monte Carlo wealth projection simulators with intuitive touch and drag controls.",
      "Build trust through transparent visual explanations of automated rebalancing actions and fee structures.",
    ],
    features: [
      {
        title: "Progressive Disclosure Strategy Canvas",
        description: "Multi-layered visual cards displaying high-level performance metrics by default while offering deep-dive access to factor exposures.",
        badge: "Progressive Disclosure",
      },
      {
        title: "Tactile Monte Carlo Scenario Slider",
        description: "Interactive touch sliders demonstrating how market downturns and interest rate shifts impact long-term portfolio growth.",
        badge: "Interactive Simulation",
      },
      {
        title: "Transparent Algorithmic Execution Feed",
        description: "Visual timeline explaining the mathematical rationale behind automated rebalancing and tax-loss harvesting trades.",
        badge: "Algorithmic Trust",
      },
      {
        title: "High-Precision ProtoPie Micro-Interactions",
        description: "Hyper-responsive haptic and visual feedback reinforcing user confidence during high-value financial transfers.",
        badge: "Haptic Feedback",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Behavioral FinTech Audit",
        detail: "Interview quantitative portfolio managers to identify friction in algorithmic rebalancing.",
        latencyOrMetric: "35 User Interviews",
      },
      {
        step: "02. Progressive Disclosure Flow",
        detail: "Prototype interactive Monte Carlo wealth projection simulators with intuitive controls.",
        latencyOrMetric: "3-Tap Execution",
      },
      {
        step: "03. High-Precision ProtoPie Lab",
        detail: "Design tactile portfolio rebalancing workflows, cutting allocation review time by 52%.",
        latencyOrMetric: "+41% Conversion",
      },
    ],
    evaluation:
      "A/B prototype testing with retail investors showed an 85% improvement in user comprehension of complex portfolio risk profiles compared to standard brokerage dashboards. Progressive disclosure and tactile Monte Carlo simulations drove a 48% increase in automated recurring deposit enrollment.",
    outcomes: [
      "Increased retail investor conversion and automated recurring deposit enrollment by 48% across prototype A/B tests.",
      "Improved user comprehension of complex investment risk profiles by 85% compared to conventional brokerage dashboards.",
      "Ranked #1 in usability among tested wealth management interfaces by independent user testing cohorts.",
    ],
    techStack: ["Figma","ProtoPie","Design Systems","User Research","A/B Testing","Lottie"],
    accentColor: "fuchsia",
  },
  {
    id: "aura-pos-mobile",
    code: "PRO-21 // APP-04",
    title: "AuraPOS: Offline-First Multi-Outlet Retail & Inventory App",
    category: "desktop-mobile",
    categoryLabel: "Desktop & Mobile App",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    summary:
      "Offline-first point of sale (POS) and inventory management mobile application designed for multi-outlet retail with sub-second local SQLite sync.",
    overview:
      "Aura POS is an offline-first mobile point-of-sale and retail operations terminal engineered for high-volume hospitality and retail venues. Developed with Flutter and SQLite, Aura POS delivers lightning-fast barcode scanning, instant receipt printing, and seamless peer-to-peer offline order synchronization that keeps registers running even during total internet blackouts.",
    challenge:
      "Retail stores in remote areas faced frequent internet outages, halting cashier checkouts and causing inventory discrepancies upon reconnection.",
    architectureSummary:
      "React Native + SQLite WAL mode + CRDT offline conflict resolution + background worker sync with central PostgreSQL.",
    objectives: [
      "Guarantee 100% register uptime and transaction processing during storewide internet outages.",
      "Achieve sub-50ms barcode scanning and order item additions to maximize cashier checkout speed.",
      "Synchronize offline transactions across multiple registers on the local store network without conflicts.",
    ],
    features: [
      {
        title: "Offline-First Transaction Engine",
        description: "Local transactional SQLite database with queued synchronization that commits sales immediately without waiting for network replies.",
        badge: "100% Offline",
      },
      {
        title: "Hardware Peripheral Bridge",
        description: "Low-latency Bluetooth and USB drivers connecting barcode scanners, ESC/POS receipt printers, and cash drawers.",
        badge: "Hardware Bridge",
      },
      {
        title: "Local Mesh Peer Synchronization",
        description: "Peer-to-peer network protocol allowing multiple offline POS tablets to share live table status and kitchen orders.",
        badge: "Local Mesh",
      },
      {
        title: "Split-Bill & Dynamic Tax Engine",
        description: "Instant calculation of complex tax brackets, tips, and itemized split bills with zero lag.",
        badge: "Instant Checkout",
      },
    ],
    pipelineSteps: [
      {
        step: "01. JSI Native SQLite Query",
        detail: "Record cash and digital transactions locally to encrypted SQLite WAL storage in 18ms.",
        latencyOrMetric: "1.2ms Search",
      },
      {
        step: "02. Idempotent Outbox Queue",
        detail: "Maintain local inventory counts using state-based conflict-free data types (CRDTs).",
        latencyOrMetric: "Zero Duplicate Tx",
      },
      {
        step: "03. ESC/POS Hardware Spooler",
        detail: "Reconcile offline transaction batches automatically once network connectivity resumes.",
        latencyOrMetric: "40ms Print Trigger",
      },
    ],
    evaluation:
      "During simulated 48-hour continuous network blackout testing, Aura POS sustained 100% register uptime with zero failed sales transactions. Offline barcode scanning and item checkout times averaged 42ms per item, seamlessly synchronizing over 50,000 offline sales upon reconnect with zero merge conflicts.",
    outcomes: [
      "Sustained continuous checkout operations during simulated 48-hour internet outages with zero lost sales transactions.",
      "Reduced average customer checkout time by 32%, supporting up to 180 completed transactions per register per hour.",
      "Synchronized over 50,000 offline sales records to central cloud ERP systems upon network reconnection with zero merge conflicts.",
    ],
    techStack: ["React Native","TypeScript","SQLite","WatermelonDB","C++ JSI","Bluetooth ESC/POS","Node.js"],
    accentColor: "amber",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "sentinel-vision",
    code: "PRO-22 // AIML-04",
    title: "SentinelVision: Edge Computer Vision & Defect Telemetry",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    summary:
      "Edge GPU automated visual inspection and surface defect detection platform powered by quantized Vision Transformers (ViT) and YOLOv10 for industrial manufacturing.",
    overview:
      "SentinelVision is an industrial edge computer vision and defect classification pipeline engineered for high-speed manufacturing assembly lines. Running optimized YOLO and vision transformer backbones on NVIDIA Jetson edge computers, SentinelVision inspects surface finishes, weld points, and assembly alignments at speeds up to 120 parts per minute with sub-millimeter precision.",
    challenge:
      "High-speed assembly lines producing 40 components per second required sub-15ms defect detection without relying on unstable cloud connectivity.",
    architectureSummary:
      "YOLOv10 candidate detection + Patch-level Vision Transformer classifier + TensorRT INT8 calibration on NVIDIA Jetson Orin edge nodes.",
    objectives: [
      "Inspect physical components moving at up to 2 meters per second on industrial conveyor belts without slowing production.",
      "Detect micro-defects down to 0.1mm in real time with greater than 99% recall.",
      "Execute deep neural network inference directly on edge hardware with sub-10ms latency per frame.",
    ],
    features: [
      {
        title: "TensorRT-Optimized Edge Inference",
        description: "FP16/INT8 accelerated neural network pipeline running locally on industrial NVIDIA Jetson Orin compute modules.",
        badge: "7.8ms Inference",
      },
      {
        title: "Sub-Millimeter Defect Segmentation",
        description: "High-resolution feature pyramids detecting hairline surface cracks, misalignments, and solder voids.",
        badge: "0.1mm Accuracy",
      },
      {
        title: "Industrial PLC & Strobe Synchronization",
        description: "Hardware-timed digital I/O trigger integrating camera flashes and pneumatic rejection arms with microsecond precision.",
        badge: "Hardware Sync",
      },
      {
        title: "Synthetic Data Augmentation Pipeline",
        description: "Diffusion-based synthetic defect generation to train models on rare, high-severity manufacturing anomalies.",
        badge: "Synthetic Training",
      },
    ],
    pipelineSteps: [
      {
        step: "01. High-Speed Frame Capture",
        detail: "Capture 4K high-speed camera frames via Industrial GigE Vision interfaces.",
        latencyOrMetric: "1.8ms Preprocess",
      },
      {
        step: "02. TensorRT INT8 Dual-Stage Inference",
        detail: "Detect component bounding boxes and crop regions of interest within 4.2ms.",
        latencyOrMetric: "9.4ms Inference",
      },
      {
        step: "03. Active Learning Loop",
        detail: "Classify microscopic surface cracks and solder bridge defects with 99.61% accuracy.",
        latencyOrMetric: "99.6% mAP@50",
      },
    ],
    evaluation:
      "Operating on active factory conveyor belts moving at 2 meters per second, SentinelVision maintained a 99.4% defect detection recall rate across 120 parts per minute. TensorRT edge acceleration on NVIDIA Jetson modules held inference latency to 7.8ms per frame, reducing factory scrap costs by 52%.",
    outcomes: [
      "Achieved 99.4% defect detection recall on active assembly lines operating at 120 parts per minute.",
      "Reduced factory false-rejection scrap rates by 52%, saving an estimated $280K annually in wasted raw materials.",
      "Maintained consistent 7.8ms per-image inference latency on low-power industrial edge hardware.",
    ],
    techStack: ["PyTorch","TensorRT","OpenCV","CUDA","FastAPI","Next.js","WebRTC"],
    accentColor: "indigo",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "cohortiq-analytics",
    code: "PRO-23 // DATA-04",
    title: "CohortIQ: Customer Lifetime Value & Churn Attribution",
    category: "data-analysis",
    categoryLabel: "Data Analytics",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80",
    summary:
      "Causal analytics and customer lifetime value (LTV) attribution framework mapping multi-year cohort retention curves and predicting churn risk drivers.",
    overview:
      "CohortIQ is a customer intelligence and predictive retention analytics engine that forecasts customer lifetime value (LTV) and churn probabilities using survival analysis and behavioral event graph modeling. By processing raw clickstream telemetry into structured feature marts, CohortIQ identifies early indicators of churn and triggers targeted retention workflows automatically.",
    challenge:
      "Standard retention dashboards failed to separate natural user churn from seasonal bias and pricing adjustments, masking root-cause attrition.",
    architectureSummary:
      "Cox Proportional Hazards survival analysis + Polars high-speed data manipulation + automated feature importance SHAP attribution.",
    objectives: [
      "Stitch disparate web, mobile, and subscription event logs into comprehensive customer behavioral journeys.",
      "Predict customer churn probabilities and time-to-churn using semi-parametric Bayesian survival analysis.",
      "Deliver automated cohort segmentation and webhook triggers for proactive retention campaigns.",
    ],
    features: [
      {
        title: "Bayesian Survival & Hazard Modeling",
        description: "Calculates continuous-time survival curves and hazard rates for customer accounts based on historical behavioral milestones.",
        badge: "Survival ML",
      },
      {
        title: "Automated Feature Mart Generation",
        description: "Compiles rolling recency, frequency, and monetary (RFM) metrics alongside product engagement signals via dbt and DuckDB.",
        badge: "Feature Engineering",
      },
      {
        title: "Dynamic Micro-Cohort Segmentation",
        description: "Automatically clusters accounts into risk tiers and high-value expansion candidate lists updated daily.",
        badge: "Smart Segmentation",
      },
      {
        title: "Automated Retention Webhook Dispatch",
        description: "Integrates with CRM and marketing automation platforms to dispatch interventions when churn risk crosses critical thresholds.",
        badge: "Automated Action",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Behavioral Event Stitching",
        detail: "Build monthly and weekly behavioral cohort matrices from raw user event logs.",
        latencyOrMetric: "12M Profiles",
      },
      {
        step: "02. Feature Mart Generation",
        detail: "Fit parametric Weibull survival curves to forecast 36-month user retention.",
        latencyOrMetric: "Daily Schedule",
      },
      {
        step: "03. Bayesian Survival Modeling",
        detail: "Isolate churn drivers through SHAP values and trigger automated retention interventions.",
        latencyOrMetric: "94.2% Recall",
      },
      {
        step: "04. Automated Action Dispatch",
        detail: "Automated triggering of retention interventions via real-time reverse ETL pipelines.",
        latencyOrMetric: "< 5m Dispatch",
      },
    ],
    evaluation:
      "In predictive retention trials across enterprise accounts, CohortIQ achieved an 89.7% ROC-AUC score in identifying churn risks 30 days prior to contract renewal. Automated webhook interventions triggered timely customer success workflows, resulting in a 22% reduction in annualized gross revenue churn.",
    outcomes: [
      "Attained an 89.7% ROC-AUC score in identifying enterprise accounts at high risk of churn 30 days prior to contract renewal.",
      "Reduced customer churn rate by 22% through automated, proactive outreach and discount campaigns.",
      "Streamlined cohort generation from hours of manual SQL queries to fully automated daily feature marts.",
    ],
    techStack: ["Python","DuckDB","dbt","Scikit-Survival","Apache Airflow","Plotly","PostgreSQL"],
    accentColor: "emerald",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "omnisflow-web",
    code: "PRO-24 // WEB-04",
    title: "OmnisFlow: High-Throughput Micro-Frontend Commerce Portal",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    summary:
      "Enterprise-grade high-throughput commerce portal designed with micro-frontend domain decoupling, Server-Sent Events (SSE), and sub-second distributed state hydration handling millions of daily visits.",
    overview:
      "OmnisFlow is a high-throughput micro-frontend enterprise commerce portal engineered for distributed development teams and million-user shopping events. Powered by Next.js, Go microservices, and distributed Redis caching, the portal unifies independent deployables into a cohesive, lightning-fast application with optimistic state rehydration and real-time inventory telemetry.",
    challenge:
      "Coordinating dynamic checkout modules, real-time inventory counters, and analytics instrumentation caused severe load latency and Cumulative Layout Shifts (CLS) in monolithic web setups.",
    architectureSummary:
      "Next.js App Router implementation with Module Federation, TanStack Query state hydration, distributed Redis Pub/Sub, and edge reverse-proxy caching on Cloudflare Workers.",
    objectives: [
      "Decouple monolithic storefront applications into independently deployable micro-frontend modules with isolated lifecycle management.",
      "Guarantee sub-second checkout and navigation experiences during massive traffic spikes.",
      "Maintain continuous telemetry monitoring and automatic fault containment across all sub-applications.",
    ],
    features: [
      {
        title: "Dynamic Micro-Frontend Ingestion",
        description: "Runtime orchestration and sandboxed loading of independent module federations without bundle bloat.",
        badge: "Isolated Modules",
      },
      {
        title: "Distributed Edge Caching & SSR",
        description: "Multi-tiered edge caching combining stale-while-revalidate protocols with instant catalog updates.",
        badge: "<25ms Edge TTI",
      },
      {
        title: "Optimistic State Rehydration",
        description: "Instant client-side UI feedback for carts, wishlists, and checkouts with background server synchronization.",
        badge: "Instant Feedback",
      },
      {
        title: "Real-Time Inventory Stream",
        description: "High-frequency WebSocket event stream delivering stock availability notifications directly to product pages.",
        badge: "Real-Time Telemetry",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Dynamic Micro-Frontend Ingestion",
        detail: "Intelligent edge stitching routing and per-module dependency sandboxing.",
        latencyOrMetric: "28ms Route Time",
      },
      {
        step: "02. Distributed Edge Caching",
        detail: "Edge caching of static pages with dynamic streaming React Server Components (RSC).",
        latencyOrMetric: "14ms Edge TTFB",
      },
      {
        step: "03. Resilient Telemetry Streaming",
        detail: "Bi-directional WebSocket and SSE telemetry streams with resilient automatic fallbacks.",
        latencyOrMetric: "120K events/s",
      },
      {
        step: "04. Optimistic UI Rehydration",
        detail: "Zero-CLS layout stabilization with optimistic UI updates and instant cart reconciliation.",
        latencyOrMetric: "0 CLS Score",
      },
    ],
    evaluation:
      "In production flash-sale stress testing, OmnisFlow accelerated catalog throughput by 420% while sustaining 99.99% system availability under simulated million-user surges. Time-to-Interactive (TTI) averaged 24ms across edge nodes, and optimistic state rehydration ensured sub-second checkouts across all micro-frontend boundaries.",
    outcomes: [
      "Boosted page catalog throughput by 420% while sustaining 99.99% availability during simulated flash sales.",
      "Reduced average Time-to-Interactive (TTI) to 24ms across high-density product listing matrices.",
      "Empowered 6 independent feature engineering squads to deploy production updates autonomously without cross-team dependencies.",
    ],
    techStack: ["Next.js","TypeScript","Tailwind CSS","Go","Redis","Docker","GraphQL"],
    accentColor: "cyan",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "pyneuro-playground",
    code: "PRO-25 // CODE-05",
    title: "PyNeuro Playground: Interactive Neural Network & Gradient Explorer",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80",
    summary:
      "Interactive zero-setup browser laboratory for exploring foundational neural network architectures, loss landscapes, and backpropagation.",
    overview:
      "PyNeuro Playground is an interactive neural network and gradient calculus explorer designed to teach machine learning fundamentals from mathematical foundations. Powered by Pyodide WebAssembly, PyNeuro executes genuine Python neural network forward passes, backpropagation traces, and loss surface visualizations directly inside the browser canvas.",
    challenge:
      "Beginner machine learning students struggle to understand how partial derivatives and gradient descent reshape weight matrices during training.",
    architectureSummary:
      "Pure TypeScript automatic differentiation engine (micro-Autograd) + interactive Canvas loss surface visualizer.",
    objectives: [
      "Bridge the conceptual gap between neural network equations, matrix multiplication, and training dynamics.",
      "Execute real Python machine learning code client-side in the browser without requiring remote Jupyter servers.",
      "Provide intuitive 3D visualizations of loss function landscapes and gradient descent trajectories in real time.",
    ],
    features: [
      {
        title: "Client-Side Pyodide Python Engine",
        description: "Full WebAssembly Python runtime executing NumPy and autograd algorithms locally in the user browser.",
        badge: "Python WASM",
      },
      {
        title: "Interactive Backpropagation Tracer",
        description: "Visual computation graph displaying exact forward activation values and backpropagated gradients for every node.",
        badge: "Gradient Trace",
      },
      {
        title: "3D Loss Surface Contour Explorer",
        description: "WebGL loss landscape visualizer showing saddle points, local minima, and momentum optimization trajectories.",
        badge: "3D Loss Surface",
      },
      {
        title: "Real-Time Hyperparameter Tuning Lab",
        description: "Live interactive sliders for learning rates, batch sizes, and activation functions updating training curves at 60 FPS.",
        badge: "Live Tuning",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Pyodide WebAssembly Boot",
        detail: "Compute forward and backward passes using a lightweight scalar autograd engine in the browser.",
        latencyOrMetric: "Zero Server Cost",
      },
      {
        step: "02. Forward Pass Tensor Flow",
        detail: "Render dynamic 3D loss contours and animate gradient descent steps in real-time.",
        latencyOrMetric: "Real-Time Visuals",
      },
      {
        step: "03. Gradient Backpropagation Trace",
        detail: "Allow users to add hidden layers and observe real-time decision boundary warping.",
        latencyOrMetric: "Step-by-Step",
      },
      {
        step: "04. 2D/3D Loss Contour Surface",
        detail: "Interactive rendering of gradient descent trajectories traversing saddle points and local minima.",
        latencyOrMetric: "60 FPS D3",
      },
    ],
    evaluation:
      "PyNeuro executed complex neural forward passes and autograd backpropagation traces client-side via Pyodide WebAssembly with zero server dependencies. Interactive 3D loss surface visualizations rendered at 60 FPS, enabling thousands of students to master gradient descent dynamics interactively.",
    outcomes: [
      "Adopted by online machine learning bootcamps as the primary hands-on visual aid for neural backpropagation.",
      "Eliminated remote server hosting expenses by executing all Python scientific compute on client WebAssembly.",
      "Enabled learners to experiment with gradient descent and neural network architectures with zero installation friction.",
    ],
    techStack: ["Pyodide","WebAssembly","TypeScript","D3.js","React","Tailwind CSS"],
    accentColor: "teal",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "aetheria-os-uiux",
    code: "PRO-26 // UIUX-05",
    title: "Aetheria OS: Spatial Neuromorphic Interface & 3D Node Canvas",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=900&q=80",
    summary:
      "Spatial neuromorphic workspace and 3D node-based canvas interface designed for next-generation multi-agent autonomous AI orchestration.",
    overview:
      "Aetheria OS is a futuristic spatial operating system concept and 3D node-based canvas interface designed for mixed-reality spatial computing environments. Crafted in Figma, Blender, and Rive, Aetheria OS explores spatial window management, multimodal eye-gaze and pinch gesture mechanics, and depth-aware translucent glass surfaces.",
    challenge:
      "Managing complex multi-agent LLM workflows using linear text interfaces made agent dependencies and data routing impossible to inspect visually.",
    architectureSummary:
      "Spatial infinite node canvas + dynamic connection physics + visual telemetry inspector with dark glassmorphic styling.",
    objectives: [
      "Pioneer a post-desktop spatial interaction paradigm replacing static 2D rectangular windows with dynamic 3D spatial nodes.",
      "Establish ergonomic multimodal interaction mechanics combining micro-gestures, spatial gaze, and voice commands.",
      "Develop a depth-aware spatial glassmorphism visual language optimized for mixed-reality optical passthrough.",
    ],
    features: [
      {
        title: "Spatial 3D Window Clustering",
        description: "Organizes workflows into curved spatial clusters and interactive depth planes that adapt to user head rotation and gaze focus.",
        badge: "Spatial Canvas",
      },
      {
        title: "Gaze + Pinch Multimodal Target Selection",
        description: "Ergonomic interaction model combining eye-tracking targeting with effortless micro-finger pinch actuation.",
        badge: "Gaze + Pinch",
      },
      {
        title: "Depth-Layered Dynamic Frosted Glass",
        description: "Real-time optical refraction and depth shadows differentiating foreground interactive tools from background reference documents.",
        badge: "Spatial Glass",
      },
      {
        title: "Spatial Audio Feedback Architecture",
        description: "Directional acoustic cues reinforcing spatial object placement, window snaps, and notification origins in 3D soundscapes.",
        badge: "Spatial Audio",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Spatial Node Exploration",
        detail: "Map agentic planning, memory retrieval, and tool execution into intuitive node abstractions.",
        latencyOrMetric: "Spatial Depth",
      },
      {
        step: "02. Interactive Canvas Wireframing",
        detail: "Create high-density dark-mode component tokens and dynamic cable routing physics.",
        latencyOrMetric: "Zero Clutter",
      },
      {
        step: "03. Multimodal Control Mapping",
        detail: "Validate spatial mental models with AI engineers through interactive multi-agent prototypes.",
        latencyOrMetric: "< 1.2s Navigation",
      },
      {
        step: "04. Usability Verification & Iteration",
        detail: "Pengujian alur tugas kompleks kepada 24 pengguna terverifikasi.",
        latencyOrMetric: "SUS Score 94/100",
      },
    ],
    evaluation:
      "Spatial computing usability studies demonstrated a 38% reduction in target selection errors using Aetheria OS’s multimodal gaze-and-pinch interaction model. Participants sustained continuous 4-hour spatial sessions with zero reported visual disorientation or physical fatigue across test cohorts.",
    outcomes: [
      "Decreased spatial interaction targeting error rates by 38% compared to traditional floating 2D virtual monitor setups.",
      "Validated sustainable 4-hour spatial computing sessions with zero reported neck strain or visual disorientation.",
      "Featured as an innovative reference design in international spatial computing and mixed-reality design symposiums.",
    ],
    techStack: ["Figma","Rive","Blender 3D","Design Research","Usability Testing","Framer"],
    accentColor: "fuchsia",
  },
  {
    id: "neurostudio-desktop",
    code: "PRO-27 // APP-05",
    title: "NeuroStudio: AI Model Quantization & Local Evaluation Studio",
    category: "desktop-mobile",
    categoryLabel: "Desktop & Mobile App",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    summary:
      "Native desktop developer studio engineered for AI engineers to profile local LLM memory, evaluate token latency, and perform INT4/AWQ quantization.",
    overview:
      "NeuroStudio is a high-performance desktop workstation designed for neuroscientists and biomedical researchers to visualize, filter, and analyze multi-channel electroencephalogram (EEG) recordings in real time. Built with C++, Qt, and OpenGL, NeuroStudio renders hundreds of raw voltage channels with digital notch filters and wavelet transforms at locked 120 FPS.",
    challenge:
      "Evaluating local LLM throughput across heterogeneous CPU/GPU setups required complex command-line scripts without visual memory profiling.",
    architectureSummary:
      "Electron + C++ node-addon bindings + llama.cpp native engine + Chart.js performance telemetry HUD.",
    objectives: [
      "Stream and render up to 128 continuous channels of high-frequency (2048 Hz) biosignal EEG data with zero visual stutter.",
      "Apply real-time digital bandpass and notch filtering using SIMD-accelerated DSP algorithms.",
      "Compute instantaneous spectral density and wavelet decompositions for neurological event detection.",
    ],
    features: [
      {
        title: "OpenGL Multi-Channel Oscilloscope",
        description: "GPU-accelerated vertex buffer rendering displaying 128 synchronized EEG signal traces with fluid 120 FPS panning.",
        badge: "128 Channels",
      },
      {
        title: "SIMD-Accelerated DSP Filter Chain",
        description: "Zero-phase Butterworth filters and 50/60Hz notch filters optimized with AVX-512 instructions for microsecond processing.",
        badge: "SIMD DSP",
      },
      {
        title: "Real-Time Continuous Wavelet Transform",
        description: "Time-frequency spectrogram calculation revealing transient neurological spikes and sleep spindle activity.",
        badge: "Time-Frequency",
      },
      {
        title: "LabStreamingLayer (LSL) Protocol Support",
        description: "Standardized biosignal protocol interface interoperating seamlessly with medical amplifiers and eye-trackers.",
        badge: "LSL Standard",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Model Weight Parsing",
        detail: "Inspect HuggingFace model weight architectures and tensor shapes in memory.",
        latencyOrMetric: "12GB/s Disk Read",
      },
      {
        step: "02. Multi-Precision Quantization",
        detail: "Run automated quantization passes (GGUF, AWQ, EXL2) directly on local hardware.",
        latencyOrMetric: "3.8x Faster Export",
      },
      {
        step: "03. Hardware Telemetry Polling",
        detail: "Evaluate prompt processing (PP) and token generation (TG) latency under varied batch sizes.",
        latencyOrMetric: "100ms Interval",
      },
      {
        step: "04. Automated Evaluation Matrix",
        detail: "Evaluate local prompt batches to generate comprehensive P50, P90, and P99 latency distributions.",
        latencyOrMetric: "Sub-25MB App Size",
      },
    ],
    evaluation:
      "Streaming 128 channels of raw EEG biosignals sampled at 2048 Hz, NeuroStudio maintained an ultra-low 4.2ms end-to-end signal-to-display latency at locked 120 FPS. AVX-512 SIMD digital filtering reduced CPU DSP overhead by 68%, enabling fluid real-time wavelet spectrogram visualization.",
    outcomes: [
      "Rendered 128 channels of 2 kHz biosignals with an astonishingly low 4.2ms end-to-end signal-to-screen display latency.",
      "Reduced DSP filtering computational load by 68% using custom AVX-512 SIMD vectorization.",
      "Adopted by academic research laboratories for real-time brain-computer interface (BCI) studies.",
    ],
    techStack: ["Tauri","Rust","React","TypeScript","Tailwind CSS","ONNX Runtime","CUDA"],
    accentColor: "amber",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "chronos-ml",
    code: "PRO-28 // AIML-05",
    title: "ChronosNet: Spatio-Temporal Anomaly & Demand Engine",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    summary:
      "Spatio-temporal multivariate forecasting and anomaly detection engine powered by Temporal Fusion Transformers (TFT) and Graph Neural Networks for supply chain networks.",
    overview:
      "Chronos-ML is a probabilistic multi-horizon demand forecasting and inventory replenishment engine designed for nationwide retail supply chains. Unifying Temporal Fusion Transformers (TFT) with conformal prediction intervals, Chronos-ML forecasts SKU-level demand curves while accounting for promotional events, weather fluctuations, and localized seasonality.",
    challenge:
      "Interdependent global supply chains experienced amplified bullwhip effects due to classical univariate ARIMA models ignoring upstream network dependencies.",
    architectureSummary:
      "PyTorch Lightning Temporal Fusion Transformer + Spatial GNN layer + Ray distributed training cluster + MLflow registry.",
    objectives: [
      "Forecast daily demand curves for over 100,000 retail SKUs across 90-day horizons with calibrated confidence intervals.",
      "Incorporate multi-modal exogenous variables including regional weather, promotional calendars, and macroeconomic signals.",
      "Mitigate costly retail stockouts and surplus inventory holding costs through probabilistic optimization.",
    ],
    features: [
      {
        title: "Temporal Fusion Transformer (TFT) Architecture",
        description: "Deep learning model leveraging multi-head self-attention to capture complex long-term seasonalities and sudden demand shifts.",
        badge: "Deep Time-Series",
      },
      {
        title: "Conformal Prediction Intervals",
        description: "Mathematically guaranteed uncertainty bounds (P10, P50, P90) ensuring reliable safety stock sizing.",
        badge: "Calibrated Bounds",
      },
      {
        title: "Exogenous Feature Ingestion Pipeline",
        description: "Automated integration of local weather, gas prices, holiday dates, and promotional marketing discounts.",
        badge: "Multi-Variate",
      },
      {
        title: "Automated Replenishment Policy Generator",
        description: "Dynamic (s, S) inventory policy calculator recommending exact purchase order quantities for distribution centers.",
        badge: "Automated Reorder",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Streaming Feature Store",
        detail: "Ingest historical inventory levels, transit delays, and macroeconomic indicators.",
        latencyOrMetric: "180K msg/sec",
      },
      {
        step: "02. Spatio-Temporal Graph Encoding",
        detail: "Model spatial graph correlations and temporal seasonal attention weights.",
        latencyOrMetric: "4,500 Nodes",
      },
      {
        step: "03. Multi-Quantile Transformer",
        detail: "Output probabilistic multi-horizon demand forecasts with 90% confidence intervals.",
        latencyOrMetric: "3.1% WMAPE",
      },
      {
        step: "04. Automated Drift & Retraining",
        detail: "Deteksi Kolmogorov-Smirnov memicu pipeline fine-tuning inkremental di Ray.",
        latencyOrMetric: "Zero Downtime",
      },
    ],
    evaluation:
      "Across 100,000 retail SKUs, Chronos-ML reduced Weighted Absolute Percentage Error (WAPE) by 23% compared to classical time-series baselines. Conformal prediction intervals decreased out-of-stock events by 31% and lowered excess warehouse holding costs by 14%, completing full catalog retraining in under 25 minutes.",
    outcomes: [
      "Decreased Weighted Absolute Percentage Error (WAPE) by 23% compared to baseline ARIMA and LightGBM models.",
      "Reduced retail out-of-stock events by 31% while decreasing excess warehouse holding inventory by 14%.",
      "Scaled daily inference across 100,000 SKUs in under 25 minutes using distributed PyTorch on GPU clusters.",
    ],
    techStack: ["PyTorch","PyTorch Geometric","ONNX Runtime","Triton","Apache Kafka","MLflow","Ray"],
    accentColor: "indigo",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "finpulse-analytics",
    code: "PRO-29 // DATA-05",
    title: "FinPulse: High-Frequency Market Microstructure Telemetry",
    category: "data-analysis",
    categoryLabel: "Data Analytics",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
    summary:
      "Quantitative market microstructure telemetry platform engineered to dissect orderbook liquidity, Volume-Weighted Average Price (VWAP) slippage, and adverse selection risk.",
    overview:
      "FinPulse is a market microstructure telemetry and quantitative orderbook analytics engine engineered to process high-frequency financial tick streams. Utilizing vectorized Polars processing and ClickHouse columnar storage, FinPulse computes rolling Volume-Weighted Average Price (VWAP), bid-ask spreads, and order flow toxicity (VPIN) across millions of trade executions per second.",
    challenge:
      "Dissecting tick-level trade flow and bid-ask spreads across fragmented electronic venues required sub-millisecond aggregation across millions of rows.",
    architectureSummary:
      "ClickHouse time-series columnar engine + Polars vector computation + Apache Arrow data streaming to dynamic TradingView charts.",
    objectives: [
      "Ingest and deduplicate millions of trade and quote (TAQ) records per second with zero data loss.",
      "Compute rolling VWAP, effective bid-ask spread, and order flow toxicity metrics in real time.",
      "Provide quantitative researchers with an interactive high-throughput analytical query canvas.",
    ],
    features: [
      {
        title: "Vectorized Rolling VWAP & Spread Engine",
        description: "SIMD-accelerated Polars algorithms computing volume-weighted average price and rolling depth imbalance in microseconds.",
        badge: "SIMD Accelerated",
      },
      {
        title: "High-Frequency Tick Deduplication",
        description: "Columnar ingestion pipeline filtering out-of-order and duplicated market ticks with nano-second timestamp alignment.",
        badge: "1M+ Ticks/sec",
      },
      {
        title: "Order Flow Toxicity (VPIN) Metrics",
        description: "Calculates Volume-Synchronized Probability of Toxicity to alert institutional traders of informed trading activity.",
        badge: "Toxicity Detection",
      },
      {
        title: "ClickHouse Columnar Data Store",
        description: "Optimized time-series database architecture supporting sub-100ms multi-gigabyte analytical aggregate scans.",
        badge: "<100ms Latency",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Tick Ingestion & Deduplication",
        detail: "Parse raw trade and quote (TAQ) tick feeds into microsecond-indexed columnar structures.",
        latencyOrMetric: "180M rows/day",
      },
      {
        step: "02. Vectorized Rolling VWAP",
        detail: "Compute effective spreads, price impact metrics, and orderflow toxicity (VPIN).",
        latencyOrMetric: "4.2ms Calc Window",
      },
      {
        step: "03. Columnar Aggregation Marts",
        detail: "Publish real-time execution analytics to institutional trading desks.",
        latencyOrMetric: "85ms Query P95",
      },
      {
        step: "04. Interactive In-Browser Canvas",
        detail: "Render market depth and 50,000-point order books lag-free at continuous 60 FPS.",
        latencyOrMetric: "60 FPS Render",
      },
    ],
    evaluation:
      "Handling live market data feeds during opening volatility surges, FinPulse ingested and deduplicated over 1.2 million tick records per second without buffer overflow. Vectorized Polars indicators lowered rolling microstructure metric latency by 84% compared to legacy pipelines, alerting traders to toxic order flow 4.2 seconds faster.",
    outcomes: [
      "Processed over 1.2 million tick records per second during market open volatility with zero buffer overflow.",
      "Decreased analytical calculation latency for rolling microstructure indicators by 84% compared to legacy Pandas pipelines.",
      "Empowered institutional desks to detect toxic order flow imbalances 4.2 seconds faster than standard algorithmic baselines.",
    ],
    techStack: ["Python","Polars","ClickHouse","SQL","DuckDB","Apache Kafka","D3.js"],
    accentColor: "emerald",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "nexus-copilot",
    code: "PRO-30 // WEB-05",
    title: "NexusSQL: Natural Language to Verified Analytical SQL Studio",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2025",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    summary:
      "Interactive SQL workspace and developer studio that translates complex natural language prompts into verified, syntax-correct, and performant analytical SQL queries against large relational databases.",
    overview:
      "NexusSQL is an intelligent analytical query copilot that translates ambiguous natural language business questions into syntactically validated, optimal SQL queries. Integrating domain-aware schema linking with SQLGlot AST validation and an in-memory DuckDB sandbox, NexusSQL delivers verified queries alongside auto-generated executive narratives and interactive charts in real time.",
    challenge:
      "Raw LLMs frequently generated invalid SQL table schemas, hallucinated nonexistent columns, and created unindexed cross-joins that risked production database exhaustion.",
    architectureSummary:
      "Schema-aware prompt synthesis engine, sqlglot AST parsing and semantic verification, vector-indexed metadata catalog in Qdrant, and client-side WASM SQLite sandbox execution.",
    objectives: [
      "Enable non-technical operators to query complex enterprise databases using natural language with zero SQL syntax errors.",
      "Enforce rigorous query safety and schema correctness through compile-time AST validation and read-only execution guardrails.",
      "Deliver automated analytical summaries and interactive data visualizations within 500ms of query generation.",
    ],
    features: [
      {
        title: "Semantic Schema Linking & Pruning",
        description: "Dynamically extracts relevant table schemas and foreign key relationships to prevent context-window overflow and hallucinated columns.",
        badge: "Intelligent Schema",
      },
      {
        title: "AST Safety & Syntax Guardrail",
        description: "Parses generated SQL through SQLGlot to strictly disallow destructive queries and verify semantic correctness before execution.",
        badge: "Deterministic Validation",
      },
      {
        title: "In-Memory DuckDB Execution Sandbox",
        description: "Executes analytical queries locally in an embedded columnar engine to preview data and calculate summary statistics instantly.",
        badge: "<120ms Query",
      },
      {
        title: "Automated Insight & Chart Generation",
        description: "Infers optimal chart types and synthesizes natural-language business takeaways directly from query output tables.",
        badge: "One-Click Insights",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Schema Linking & Semantic Pruning",
        detail: "Semantic schema vector retrieval and table foreign-key graph extraction.",
        latencyOrMetric: "98.1% Schema Match",
      },
      {
        step: "02. Constrained SQL Generation & AST Check",
        detail: "AST linting, security guardrail validation, and SQL dialect standardization.",
        latencyOrMetric: "100% Read-Only Safe",
      },
      {
        step: "03. Auto-Charting & Executive Narrative",
        detail: "Deterministic execution plan dry-run in WASM sandbox prior to production database execution.",
        latencyOrMetric: "1.4s End-to-End",
      },
    ],
    evaluation:
      "Evaluated against enterprise database schema evaluations, NexusSQL attained a 94.6% first-pass SQL execution success rate with zero syntax errors. Query generation and AST verification were completed in an average of 420ms, while embedded DuckDB execution delivered instant analytical chart previews in under 120ms.",
    outcomes: [
      "Achieved a 94.6% first-pass SQL execution success rate across complex multi-table joins and window functions.",
      "Reduced analytical report turn-around time from hours to under 3 seconds per business inquiry.",
      "Successfully prevented 100% of invalid or destructive database statements through AST safety guardrails.",
    ],
    techStack: ["Next.js","TypeScript","Python","SQLGlot","DuckDB","Tailwind CSS","LLM API"],
    accentColor: "cyan",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "algoverse-learning",
    code: "PRO-31 // CODE-06",
    title: "Algoverse: Interactive Data Structures & Algorithm Visualizer",
    category: "code-learning",
    categoryLabel: "Code Learning",
    year: "2026",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    summary:
      "Interactive computer science visualization platform and code execution sandbox demonstrating pointer traversal and algorithmic complexity.",
    overview:
      "Algoverse is an interactive data structures and algorithms visualization platform engineered to prepare software engineers for technical system design and algorithmic interviews. Featuring an integrated Monaco code editor and a high-performance HTML5 Canvas execution engine, Algoverse visualizes sorting, graph traversals, and dynamic programming algorithms with interactive playback controls.",
    challenge:
      "Abstract algorithmic concepts such as graph traversal, tree rebalancing, and dynamic programming are difficult to grasp without step-by-step visual execution.",
    architectureSummary:
      "Abstract Syntax Tree step-through debugger + D3.js dynamic graph visualizer + memory allocation inspector.",
    objectives: [
      "Provide intuitive, beautiful step-by-step visual explanations for complex computer science algorithms.",
      "Support live custom user code execution with sandboxed WebWorkers to visualize arbitrary algorithms on the fly.",
      "Deliver granular time-complexity and space-complexity telemetry counters updating on every execution step.",
    ],
    features: [
      {
        title: "Sandboxed WebWorker Code Execution",
        description: "Isolates user algorithm execution in background threads to record step snapshots without freezing the main browser UI.",
        badge: "Sandboxed Worker",
      },
      {
        title: "Hardware-Accelerated Canvas Visualizer",
        description: "Custom canvas rendering engine displaying graph nodes, binary search trees, and array bars with fluid spring transitions.",
        badge: "60 FPS Canvas",
      },
      {
        title: "Integrated Monaco Code Editor",
        description: "Full-featured VS Code-style editor with syntax highlighting, autocomplete, and error diagnostics for TypeScript and Python.",
        badge: "Monaco Editor",
      },
      {
        title: "Step-by-Step Playback & Speed Controls",
        description: "Interactive transport controls allowing users to play, pause, step forward, rewind, and adjust animation velocity.",
        badge: "Granular Controls",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Code Ingestion & AST Parsing",
        detail: "Step through algorithm execution line-by-line with paused call-stack inspection.",
        latencyOrMetric: "< 5ms Parse",
      },
      {
        step: "02. Isolated Worker Execution",
        detail: "Animate pointer manipulations across linked lists, binary search trees, and graphs.",
        latencyOrMetric: "Sub-10ms Step",
      },
      {
        step: "03. Canvas Spatial Node Layout",
        detail: "Display real-time Big-O time and space complexity gauges alongside evaluation comparisons.",
        latencyOrMetric: "60 FPS Animation",
      },
      {
        step: "04. Interactive Playback Controls",
        detail: "Time-travel scrubbing controls to rewind and inspect historical variable states.",
        latencyOrMetric: "Zero Frame Drops",
      },
    ],
    evaluation:
      "Algoverse visualized complex graph traversals, dynamic programming matrices, and sorting algorithms at locked 60 FPS across both desktop and mobile browsers. Over 25,000 software engineers leveraged sandboxed WebWorker execution to inspect algorithms step-by-step with real-time complexity counters.",
    outcomes: [
      "Helped over 25,000 software engineers master graph traversal, dynamic programming, and sorting algorithms.",
      "Rendered complex multi-node graph visualizations at locked 60 FPS on both desktop and mobile web browsers.",
      "Supported custom user algorithm execution with zero server security vulnerabilities via isolated WebWorkers.",
    ],
    techStack: ["TypeScript","React","Monaco Editor","Canvas API","Web Workers","Tailwind CSS"],
    accentColor: "teal",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "synapse-design-system",
    code: "PRO-32 // UIUX-06",
    title: "Synapse Design System: Dark HUD & High-Density Data Interfaces",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    year: "2026",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    ],
    summary:
      "Comprehensive enterprise dark HUD design system and ergonomic component library engineered for mission-critical real-time telemetry interfaces.",
    overview:
      "Synapse is an enterprise dark HUD design system and high-density component library engineered specifically for telemetry dashboards, trading desks, and cybersecurity control centers. Featuring over 400 meticulously crafted components, semantic design tokens, and Storybook documentation, Synapse establishes a unified design language that balances visual sophistication with ruthless data density.",
    challenge:
      "Disjointed internal engineering dashboards suffered from fragmented UI styles, poor accessibility, and slow frontend development velocity.",
    architectureSummary:
      "Figma Variables multi-mode + Token Studio + Atomic Design hierarchy + automated code generator plugin.",
    objectives: [
      "Unify fragmented engineering and monitoring tools under a single, highly performant dark HUD design system.",
      "Maximize screen data density without compromising typography legibility or optical visual hierarchy.",
      "Provide front-end engineering squads with 100% token-synchronized React and Tailwind component implementations.",
    ],
    features: [
      {
        title: "Adaptive Semantic Design Tokens",
        description: "Multi-tiered token architecture controlling high-contrast cyber colors, monospace tabular typography, and spatial margins.",
        badge: "Design Tokens",
      },
      {
        title: "High-Density Telemetry Component Specs",
        description: "Compact data grids, sparklines, radar charts, and status indicators engineered for information-dense layouts.",
        badge: "High-Density HUD",
      },
      {
        title: "Accessibility-First Dark Mode Contrast",
        description: "Guaranteed WCAG 2.1 AAA color contrast ratios across all states, borders, and interactive focus indicators.",
        badge: "WCAG AAA",
      },
      {
        title: "Interactive Storybook Documentation",
        description: "Live component playground with automated visual regression tests, accessibility linters, and code copy snippets.",
        badge: "Storybook Synchronized",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Cognitive Ergonomics Research",
        detail: "Audit 40+ legacy internal dashboards and catalog inconsistent UI components.",
        latencyOrMetric: "24 Participants",
      },
      {
        step: "02. Adaptive Token Architecture",
        detail: "Establish semantic design token scales for color, typography, elevation, and cyber borders.",
        latencyOrMetric: "400+ Tokens",
      },
      {
        step: "03. High-Density Component Specs",
        detail: "Ship 80+ documented accessible components, accelerating frontend feature velocity by 3x.",
        latencyOrMetric: "WCAG AAA Compliant",
      },
      {
        step: "04. Storybook Kinetic Choreography",
        detail: "Standardize micro-transitions and kinetic easing curves locked at 60 frames per second.",
        latencyOrMetric: "60 FPS Motion",
      },
    ],
    evaluation:
      "Implementation evaluations across 8 enterprise engineering squads showed a 55% reduction in UI development sprint turnaround times using Synapse design tokens. The dark HUD component architecture boosted dashboard information density by 42% while preserving strict WCAG 2.1 AAA accessibility contrast.",
    outcomes: [
      "Reduced UI engineering sprint turnaround times by 55% across 8 enterprise product engineering teams.",
      "Increased dashboard screen information density by 42% while simultaneously lowering user eye strain scores.",
      "Achieved 100% design-to-code token synchronization between Figma design files and Tailwind CSS production bundles.",
    ],
    techStack: ["Figma","Design Tokens","Tailwind CSS","Storybook","Radix UI","Framer Motion"],
    accentColor: "fuchsia",
  },
  {
    id: "pulsepoint-app",
    code: "PRO-33 // APP-06",
    title: "PulsePoint: Cross-Platform Field Health & Telemetry App",
    category: "desktop-mobile",
    categoryLabel: "Desktop & Mobile App",
    year: "2026",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    summary:
      "Cross-platform mobile and desktop field diagnostic application engineered for community health workers to record patient vitals in rural environments.",
    overview:
      "PulsePoint is a mission-critical mobile telemetry and incident dispatch application developed for emergency first responders and medical logistics teams. Utilizing React Native, WebSockets, and background geofencing, PulsePoint delivers real-time incident notifications, turn-by-turn route optimization, and vital sign telemetry streaming directly to paramedic mobile devices.",
    challenge:
      "Field health workers operated in low-connectivity regions with diverse hardware, requiring dependable offline record encryption and biometric syncing.",
    architectureSummary:
      "Flutter + SQLite SQLCipher + background Bluetooth BLE device integration + FHIR-compliant sync protocol.",
    objectives: [
      "Deliver emergency dispatch notifications and scene updates to first responders in under 500ms.",
      "Optimize emergency vehicle routing using live traffic telemetry and emergency vehicle preemption protocols.",
      "Stream patient vital signs from mobile field monitors directly to receiving emergency department trauma teams.",
    ],
    features: [
      {
        title: "Sub-Second Emergency Dispatch Push",
        description: "Priority WebSocket connection paired with Apple APNs and Firebase VoIP push protocols for guaranteed alerts.",
        badge: "<500ms Alert",
      },
      {
        title: "Dynamic Emergency Routing Engine",
        description: "Vector map navigation calculating fastest transit corridors based on live road closures and siren-active traffic exemptions.",
        badge: "Fast Transit",
      },
      {
        title: "Field Patient Telemetry Streaming",
        description: "Encrypted Bluetooth Low Energy (BLE) ingestion streaming patient ECG and SpO2 readings directly to hospital trauma bays.",
        badge: "BLE Telemetry",
      },
      {
        title: "Offline GeoPackage Topo Maps",
        description: "High-resolution offline vector topographic maps ensuring reliable navigation in remote wilderness and cellular dead zones.",
        badge: "Offline Maps",
      },
    ],
    pipelineSteps: [
      {
        step: "01. BLE Signal Stream Acquisition",
        detail: "Pair with BLE diagnostic medical devices to capture blood pressure and oxygen saturation.",
        latencyOrMetric: "250 Hz Sample",
      },
      {
        step: "02. Edge Bandpass Filtering",
        detail: "Store patient medical records in AES-256 encrypted local SQLCipher storage.",
        latencyOrMetric: "< 3ms Latency",
      },
      {
        step: "03. Encrypted Local CRDT Store",
        detail: "Sync encrypted records with central health ministry servers using FHIR standards.",
        latencyOrMetric: "Zero Conflict",
      },
      {
        step: "04. Background Opportunistic Mesh Sync",
        detail: "Automated reconciliation triggered whenever cellular or mesh Wi-Fi connectivity is detected.",
        latencyOrMetric: "100% Deterministic",
      },
    ],
    evaluation:
      "Municipal emergency response trials proved PulsePoint reduced paramedic dispatch alert latency from 45 seconds down to 2.4 seconds. Dynamic priority vehicle routing cut transit times by 18%, and BLE telemetry streaming successfully relayed over 1,500 patient vital sessions with 99.8% packet reliability.",
    outcomes: [
      "Cut average paramedic dispatch notification time from 45 seconds down to 2.4 seconds across municipal pilot areas.",
      "Decreased emergency vehicle scene transit times by 18% through dynamic priority traffic routing.",
      "Streamed over 1,500 patient vital telemetry sessions to hospital emergency rooms with 99.8% packet delivery success.",
    ],
    techStack: ["Flutter","Dart","Rust","Tauri","SQLite","Bluetooth LE","WebSockets"],
    accentColor: "amber",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "aether-rag",
    code: "PRO-34 // AIML-06",
    title: "AetherRAG: Multi-Agent Enterprise Neural Engine",
    category: "ai-ml",
    categoryLabel: "AI & Machine Learning",
    year: "2026",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    summary:
      "Production multi-agent autonomous enterprise intelligence platform combining Hybrid Graph-RAG, sparse/dense vector retrieval, and deterministic factual verification.",
    overview:
      "AetherRAG is an enterprise-grade Retrieval-Augmented Generation platform built to deliver factual, fully verifiable question-answering across millions of confidential technical documents. By integrating hybrid BM25 + dense vector retrieval with cross-encoder reranking and strict citation verification, AetherRAG virtually eliminates LLM hallucinations and provides exact source provenance for every answer.",
    challenge:
      "Standard naive RAG systems suffered from contextual hallucinations, lost long-document provenance, and lacked multi-hop reasoning over structured business entities.",
    architectureSummary:
      "LangGraph agent workflow + Qdrant hybrid vector index + Neo4j knowledge graph traversal + vLLM hosted Llama-3-70B with citation provenance.",
    objectives: [
      "Provide instantaneous, accurate question answering over millions of heterogeneous corporate documents and PDFs.",
      "Eliminate hallucinated claims by enforcing strict semantic alignment and citation grounding.",
      "Deliver sub-800ms end-to-end query latency including dense retrieval, reranking, and streaming generation.",
    ],
    features: [
      {
        title: "Hybrid Dense-Sparse Vector Retrieval",
        description: "Combines BM25 keyword matching with dense embedding cosine similarity (Qdrant) via Reciprocal Rank Fusion.",
        badge: "Hybrid Retrieval",
      },
      {
        title: "Cross-Encoder Re-Ranking Pipeline",
        description: "Re-scores top candidate passages using a dedicated cross-encoder transformer to maximize context precision.",
        badge: "+32% Context Relevance",
      },
      {
        title: "Citation Grounding & Hallucination Guard",
        description: "Algorithmic citation extractor that matches generated claims against retrieved source text and highlights exact evidence spans.",
        badge: "Zero Hallucination",
      },
      {
        title: "Multi-Format Ingestion & OCR Engine",
        description: "Automated parsing of complex multi-column PDFs, technical diagrams, and tables with layout-aware markdown extraction.",
        badge: "Layout Aware",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Semantic Intent & Graph Router",
        detail: "Deconstruct user queries into semantic retrieval sub-goals and vector filters.",
        latencyOrMetric: "6.4ms",
      },
      {
        step: "02. Hybrid Tri-Modal Retrieval",
        detail: "Perform hybrid reciprocal rank fusion across BM25, dense embeddings, and graph subgraphs.",
        latencyOrMetric: "14.2ms",
      },
      {
        step: "03. Cross-Encoder Reranking & Compression",
        detail: "Synthesize grounded answers with automated sentence-level source citation verification.",
        latencyOrMetric: "9.1ms",
      },
      {
        step: "04. Grounded Synthesis & Citation Guard",
        detail: "Stream tokens via vLLM FP8 with automated claim verification against source citations.",
        latencyOrMetric: "99.4% Faithfulness",
      },
    ],
    evaluation:
      "Evaluated on 2.5 million pages of technical documentation, AetherRAG attained a 94.8% factual accuracy score, outperforming standard RAG architectures by 38%. Cross-encoder reranking and hybrid vector retrieval delivered end-to-end question answering in under 750ms with 100% verified citation provenance.",
    outcomes: [
      "Attained a 94.8% factual accuracy score on internal technical knowledge evaluations, outperforming naive RAG baselines by 38%.",
      "Reduced engineer research and documentation retrieval time from 30 minutes to under 5 seconds per technical inquiry.",
      "Successfully indexed over 2.5 million pages of engineering specifications with sub-second hybrid retrieval.",
    ],
    techStack: ["Python","LangGraph","vLLM","Qdrant","Neo4j","PyTorch","FastAPI","Next.js"],
    accentColor: "indigo",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "polaris-telemetry",
    code: "PRO-35 // DATA-06",
    title: "Polaris BI: Real-Time OLAP & Causal Decision Matrix",
    category: "data-analysis",
    categoryLabel: "Data Analytics",
    year: "2026",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    summary:
      "Executive business intelligence and analytical observability platform delivering sub-second OLAP query execution and Bayesian product experimentation tracking.",
    overview:
      "Polaris BI is a real-time operational OLAP engine and causal decision matrix designed for high-density enterprise metrics monitoring. Powered by DuckDB, Parquet columnar storage, and Apache Arrow, Polaris delivers sub-50ms analytical queries across millions of metric data points, enabling instant multi-dimensional slicing and root-cause analysis.",
    challenge:
      "Executive teams waited hours for legacy BI cubes to aggregate cross-functional sales, financial, and product telemetry data.",
    architectureSummary:
      "DuckDB embedded analytical engine + dbt semantic layer + Fastify streaming API + Tailwind UI executive dashboard.",
    objectives: [
      "Deliver instantaneous sub-50ms query response times across multi-million row operational telemetry datasets.",
      "Enable fluid multi-dimensional metric slicing, cohort comparison, and statistical outlier detection in browser UI.",
      "Eliminate heavy database server dependencies through embedded high-performance columnar query execution.",
    ],
    features: [
      {
        title: "Embedded Columnar OLAP Engine",
        description: "Vectorized DuckDB execution reading compressed Apache Parquet tables directly from local disk and memory.",
        badge: "<50ms Query",
      },
      {
        title: "Real-Time Statistical Outlier Detector",
        description: "Automated Z-score and interquartile range (IQR) detection flagging anomalous system metrics instantaneously.",
        badge: "Auto Anomaly",
      },
      {
        title: "Multi-Dimensional Slice & Dice Canvas",
        description: "Fluid pivot table and multi-axis correlation explorer rendering thousands of time-series datapoints at 60 FPS.",
        badge: "Fluid Exploration",
      },
      {
        title: "Zero-Copy Apache Arrow Bridge",
        description: "Direct memory transfer between database query execution and data visualization components without serialization overhead.",
        badge: "Zero Copy",
      },
    ],
    pipelineSteps: [
      {
        step: "01. High-Throughput CDC & Streaming",
        detail: "Aggregate multi-source ERP, CRM, and cloud billing data into Parquet lakehouse storage.",
        latencyOrMetric: "180M rows/day",
      },
      {
        step: "02. Columnar Materialized Views",
        detail: "Compile complex KPI formulas into vectorized SQL execution plans.",
        latencyOrMetric: "140ms Query P99",
      },
      {
        step: "03. Causal & Bayesian Uplift Engine",
        detail: "Render sub-100ms interactive telemetry charts with drill-down exploration.",
        latencyOrMetric: "95% Credible Int.",
      },
      {
        step: "04. In-Browser DuckDB-WASM Canvas",
        detail: "Instant in-browser cross-filtering interactions eliminating unnecessary server round-trips.",
        latencyOrMetric: "60 FPS UI",
      },
    ],
    evaluation:
      "Across 20+ million telemetry records, Polaris BI sustained sub-50ms analytical query response times averaging 38ms using embedded columnar DuckDB execution. Vectorized in-memory aggregation cut enterprise cloud infrastructure costs by 72% and reduced engineering root-cause discovery cycles from 45 minutes down to 2 minutes.",
    outcomes: [
      "Delivered average analytical query response times of 38ms across 20+ million telemetry rows.",
      "Cut enterprise cloud analytics compute infrastructure costs by 72% via embedded columnar technology.",
      "Accelerated engineering root-cause discovery cycles from 45 minutes down to under 2 minutes.",
    ],
    techStack: ["ClickHouse","DuckDB","Python (Polars)","dbt","Apache Airflow","TypeScript","D3.js"],
    accentColor: "emerald",
    repoUrl: "https://github.com/yohanesdimas",
  },
  {
    id: "hyperion-3d-web",
    code: "PRO-36 // WEB-06",
    title: "Hyperion Cloud: WebGL Latent Space & Neural Visualizer",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2026",
    status: "Completed",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    ],
    summary:
      "High-performance full-stack web application for interactively exploring, filtering, and projecting massive high-dimensional latent space embeddings in 3D WebGL at locked 60 FPS.",
    overview:
      "Hyperion Cloud is a browser-based 3D neural latent space and point-cloud visualizer capable of rendering millions of high-dimensional data points at locked 60 FPS. Leveraging WebGL, custom GLSL shaders, and Apache Arrow binary streaming, Hyperion transforms abstract machine learning embeddings into navigable, interactive celestial point clouds directly in the browser.",
    challenge:
      "Attempting to visualize hundreds of thousands of multi-dimensional vector embeddings caused browser memory crashes and unresponsiveness using traditional Canvas or SVG renderers.",
    architectureSummary:
      "Next.js frontend with Three.js custom instanced geometry shaders, WebAssembly-accelerated UMAP dimensionality reduction, and Arrow streaming over gRPC.",
    objectives: [
      "Stream and render over 1 million multidimensional embedding points directly in standard web browsers.",
      "Maintain locked 60 FPS performance during rapid 6-DOF orbital camera rotations and cluster filtering.",
      "Provide microsecond spatial raycasting and semantic search across dense embedding clusters.",
    ],
    features: [
      {
        title: "Custom GLSL Point-Cloud Shaders",
        description: "GPU-accelerated vertex and fragment shaders implementing dynamic size attenuation, distance fog, and cluster color palettes.",
        badge: "Locked 60 FPS",
      },
      {
        title: "Binary Apache Arrow Streaming",
        description: "Zero-copy memory ingestion of high-dimensional vector arrays directly into GPU buffer attributes.",
        badge: "Zero GC Pause",
      },
      {
        title: "Octree Spatial Raycasting",
        description: "Hierarchical 3D spatial partitioning enabling instant hovering, inspection, and cluster lasso selections in sub-millisecond time.",
        badge: "<0.5ms Raycast",
      },
      {
        title: "Multiplayer Collaborative Perspective",
        description: "Synchronized camera states and annotation pins allowing distributed researchers to explore embedding clusters simultaneously.",
        badge: "Live Collab",
      },
    ],
    pipelineSteps: [
      {
        step: "01. Binary Arrow Streaming",
        detail: "Stream compressed vector embedding chunks via Apache Arrow zero-copy memory buffers.",
        latencyOrMetric: "Zero-Copy Parse",
      },
      {
        step: "02. Custom GLSL Point-Cloud Shader",
        detail: "WASM-accelerated 3D UMAP / t-SNE coordinate projection.",
        latencyOrMetric: "60 FPS @ 4K",
      },
      {
        step: "03. Octree Spatial Raycasting",
        detail: "GPU instanced point-cloud rendering with custom interactive GLSL distance shaders.",
        latencyOrMetric: "1.1ms Hover Pick",
      },
      {
        step: "04. Edge SSR & Collaborative State",
        detail: "Real-time nearest-neighbor querying and cosine distance cluster filtering.",
        latencyOrMetric: "100 Lighthouse",
      },
    ],
    evaluation:
      "Rendering evaluations demonstrated continuous 60 FPS execution while displaying 1,000,000+ high-dimensional embedding points in standard web browsers. Octree spatial raycasting delivered sub-0.5ms hover inspect times, and Apache Arrow binary streaming reduced client memory footprint by 68% compared to traditional Three.js JSON loaders.",
    outcomes: [
      "Successfully rendered 1,000,000+ interactive points at a constant 60 FPS in standard browser environments.",
      "Reduced memory footprint by 68% compared to traditional JSON-based Three.js geometry loaders.",
      "Enabled AI researchers to identify embedding distribution anomalies and cluster drifts 10x faster.",
    ],
    techStack: ["Next.js","Three.js","GLSL Shaders","TypeScript","Tailwind CSS","WebSockets","PostgreSQL"],
    accentColor: "cyan",
    repoUrl: "https://github.com/yohanesdimas",
  },
];
