import { DomainPillar } from "../types";

export const DOMAIN_PILLARS: DomainPillar[] = [
  {
    id: "web-development",
    index: "01",
    title: "Full-Stack & 3D Web Architecture",
    roleTitle: "Web Developer",
    subtitle: "Next.js App Router · WebGL / Three.js · High-Concurrency Systems",
    description:
      "Crafting global-scale modern web applications and interactive 3D interfaces that integrate microsecond-level performance, high-precision design systems, and real-time AI capabilities.",
    metrics: [
      { label: "Lighthouse Perf", value: "100/100" },
      { label: "WebGL Frame Rate", value: "60 FPS" },
    ],
    capabilities: [
      "Next.js App Router, React Server Components & Edge Streaming",
      "Custom WebGL Shaders (GLSL), Three.js & Interactive 3D Visualizations",
      "High-Concurrency Microservices, WebSockets & GraphQL/gRPC APIs",
      "Design Systems, Accessible UI Primitives & Motion Choreography",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js / WebGL",
      "Node.js / Go",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    formationTrigger: "wave",
  },
  {
    id: "data-analytics",
    index: "02",
    title: "Data Analytics & Business Intelligence",
    roleTitle: "Data Analyst",
    subtitle: "Statistical Modeling · High-Throughput ELT · Executive Telemetry",
    description:
      "Transforming billions of raw data points into actionable strategic intelligence through causal modeling, Bayesian A/B testing, modern data warehouse pipelines, and interactive visualizations.",
    metrics: [
      { label: "Query Speedup", value: "18.5x" },
      { label: "Revenue Attribution", value: "+24.8%" },
    ],
    capabilities: [
      "Causal Inference, Bayesian A/B Testing & Cohort Retention Modeling",
      "Lakehouse Architecture & Columnar OLAP (DuckDB, ClickHouse, BigQuery)",
      "Automated ELT Pipelines & Data Quality Observability (dbt, Airflow)",
      "Real-time Executive BI & Custom Interactive Telemetry Systems",
    ],
    technologies: [
      "Python (Polars/Pandas)",
      "SQL / DuckDB",
      "ClickHouse",
      "dbt",
      "Apache Airflow",
      "Tableau / PowerBI",
      "D3.js",
    ],
    formationTrigger: "helix",
  },
  {
    id: "ai-engineering",
    index: "03",
    title: "AI & Autonomous LLM Systems",
    roleTitle: "AI Engineer",
    subtitle: "Multi-Agent Orchestration · Hybrid RAG · Low-Latency Inference",
    description:
      "Architecting enterprise-grade Generative AI systems featuring high-precision retrieval, autonomous multi-agent orchestration, deterministic guardrails, and GPU inference optimization (vLLM / TensorRT-LLM).",
    metrics: [
      { label: "Retrieval Recall@5", value: "99.2%" },
      { label: "TTFT Latency", value: "34ms" },
    ],
    capabilities: [
      "Multi-Agent Graph Workflows & Tool-Calling Routers",
      "Hybrid Dense + Sparse (BM25 + SPLADE) Vector RAG",
      "LLM Fine-Tuning (QLoRA, DPO, RLHF) & Quantization (AWQ/FP8)",
      "Semantic Caching, Guardrails & Automated Hallucination Evals",
    ],
    technologies: [
      "PyTorch",
      "LangGraph",
      "vLLM",
      "Qdrant",
      "OpenAI / Claude API",
      "Llama-3",
      "FastAPI",
    ],
    formationTrigger: "neural",
  },
  {
    id: "machine-learning",
    index: "04",
    title: "Machine Learning Engineering",
    roleTitle: "Machine Learning Engineer",
    subtitle: "Deep Learning · Predictive Modeling · End-to-End MLOps",
    description:
      "Engineering end-to-end machine learning lifecycles from experimental research to distributed deployment: predictive modeling, real-time anomaly detection, time-series forecasting, and automated feature stores.",
    metrics: [
      { label: "Model ROC-AUC", value: "0.987" },
      { label: "Drift Recovery", value: "< 4m" },
    ],
    capabilities: [
      "Deep Neural Networks, Predictive Modeling & Graph Neural Nets",
      "Distributed Training, ONNX / Triton TensorRT Acceleration",
      "Real-time Feature Engineering & Automated Drift Monitoring",
      "Gradient Boosting Ensembles (XGBoost, LightGBM, CatBoost)",
    ],
    technologies: [
      "PyTorch",
      "Scikit-Learn",
      "XGBoost",
      "ONNX Runtime",
      "MLflow",
      "Ray",
      "Docker & Kubernetes",
    ],
    formationTrigger: "clusters",
  },
];
