import { DomainPillar } from "../types";
import { calcExp, SKILL_MATRIX } from "./technicalSkills";

// Dynamic skill count derived directly from SKILL_MATRIX
const getSkillCount = (cat: string): string => {
  const count = SKILL_MATRIX.filter((s) => s.category === cat).length;
  return `${count} Stacks`;
};

export const DOMAIN_PILLARS: DomainPillar[] = [
  {
    id: "web-development",
    index: "01",
    title: "Full-Stack Web Development",
    roleTitle: "Web Developer",
    subtitle: "Modern Full-Stack · Web Architecture · Scalable Cloud Systems",
    description:
      "Designing and building resilient full-stack applications, scalable server runtimes, reactive user interfaces, and high-performance cloud architectures.",
    metrics: [
      { label: "Experience", value: calcExp(2022) },
      { label: "Mastered Tech", value: getSkillCount("web-development") },
    ],
    capabilities: [
      "Full-Stack Web Architecture, Modular System Design & Microservices",
      "Modern Frontend Engineering, Component Systems & Reactive Interfaces",
      "Backend Server Engineering, Distributed API Gateways & Runtimes",
      "Relational & Document Database Modeling, Indexing & Data Integrity",
      "Cloud Infrastructure, Containerization & Automated CI/CD Pipelines",
      "Web Security Hardening, Performance Tuning & Automated QA Testing",
    ],
    formationTrigger: "wave",
  },
  {
    id: "data-analytics",
    index: "02",
    title: "Data Analytics & Business Intelligence",
    roleTitle: "Data Analyst",
    subtitle: "Exploratory Analysis · Business Intelligence · Predictive Analytics",
    description:
      "Transforming raw data into actionable strategic intelligence through exploratory diagnostics, multidimensional modeling, automated ETL pipelines, and executive dashboards.",
    metrics: [
      { label: "Experience", value: calcExp(2024) },
      { label: "Mastered Tech", value: getSkillCount("data-analysis") },
    ],
    capabilities: [
      "Exploratory Data Analysis, Anomaly Diagnostics & Statistical Profiling",
      "Complex Analytical Database Querying & Dimensional Schema Modeling",
      "Business Intelligence, Interactive Dashboards & Executive KPI Scorecards",
      "Data Cleansing, Feature Wrangling & Automated Transformation Pipelines",
      "Statistical Hypothesis Testing, Variance Analysis & Temporal Forecasting",
      "Data Quality Governance, Schema Integrity Auditing & Automated Reporting",
    ],
    formationTrigger: "helix",
  },
  {
    id: "ai-engineering",
    index: "03",
    title: "Artificial Intelligence & LLM Systems",
    roleTitle: "Artificial Intelligence Engineer",
    shortRoleTitle: "AI Engineer",
    subtitle: "Large Language Models · Retrieval-Augmented Generation · Agentic Systems",
    description:
      "Architecting production-ready AI systems powered by high-throughput foundation model inference, hybrid retrieval pipelines, tool protocols, and autonomous multi-agent workflows.",
    metrics: [
      { label: "Experience", value: calcExp(2025) },
      { label: "Mastered Tech", value: getSkillCount("artificial-intelligence") },
    ],
    capabilities: [
      "Large Language Model Inference Serving, Batching & Quantization",
      "Retrieval-Augmented Generation (RAG) & Hybrid Semantic Vector Search",
      "Autonomous Agentic AI, Multi-Agent Coordination & Goal Decomposition",
      "Model Context Protocol (MCP) Tool Calling & Capability Sandboxing",
      "Prompt Engineering, Structured Context Design & Schema Validation",
      "Generative Multimodal Media Synthesis & Intelligent Event Automation",
    ],
    formationTrigger: "neural",
  },
  {
    id: "machine-learning",
    index: "04",
    title: "End-to-End Machine Learning Systems",
    roleTitle: "Machine Learning Engineer",
    shortRoleTitle: "ML Engineer",
    subtitle: "Predictive Modeling · Deep Neural Networks · Computer Vision & NLP",
    description:
      "Developing production-grade predictive modeling pipelines, deep neural architectures, computer vision models, and time-series forecasting backed by distributed data processing.",
    metrics: [
      { label: "Experience", value: calcExp(2025) },
      { label: "Mastered Tech", value: getSkillCount("machine-learning") },
    ],
    capabilities: [
      "Supervised & Unsupervised Machine Learning Modeling & Optimization",
      "Deep Learning & Artificial Neural Network Architecture Engineering",
      "Computer Vision, Real-Time Object Detection & Spatial Recognition",
      "Natural Language Processing, Text Mining & Representation Semantics",
      "Time-Series Extrapolation, Trend Forecasting & Sequential Decisions",
      "Distributed Big Data Processing, Model Validation & Serving APIs",
    ],
    formationTrigger: "clusters",
  },
];
