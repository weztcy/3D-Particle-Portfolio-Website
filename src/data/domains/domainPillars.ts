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
    subtitle: "Next.js & React · Frontend & Backend · Modern Web Architecture",
    description:
      "Crafting scalable, high-performance web applications and responsive interfaces with Next.js, React, TypeScript, and modern backend API architectures.",
    metrics: [
      { label: "Experience", value: calcExp(2022) },
      { label: "Mastered Tech", value: getSkillCount("web-development") },
    ],
    capabilities: [
      "Frontend Development (React.js, Next.js, TypeScript, Tailwind CSS)",
      "Backend Development (Node.js, Express.js, Modular Microservices)",
      "Database Design & Management (PostgreSQL, MySQL, Prisma ORM)",
      "Web Architecture, Clean Principles & Modular System Design",
      "Authentication, Web Security, Performance Tuning & DevOps",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "PostgreSQL",
      "MySQL",
      "Prisma",
    ],
    formationTrigger: "wave",
  },
  {
    id: "data-analytics",
    index: "02",
    title: "Data Analytics & Business Intelligence",
    roleTitle: "Data Analyst",
    subtitle: "Exploratory Data Analysis · Business Intelligence · Dashboards",
    description:
      "Transforming complex raw data into actionable strategic insights through structured SQL querying, exploratory analysis (EDA), ETL pipelines, and interactive executive dashboards.",
    metrics: [
      { label: "Experience", value: calcExp(2024) },
      { label: "Mastered Tech", value: getSkillCount("data-analysis") },
    ],
    capabilities: [
      "Data Analytics & Exploratory Data Analysis (EDA with Pandas & NumPy)",
      "Database Querying, Relational Modeling & Complex SQL Analytics",
      "Business Intelligence & Executive Dashboards (Power BI, Tableau, Looker)",
      "Data Cleaning, Wrangling, Validation & Automated ETL Pipelines",
      "Statistical Analysis, Hypothesis Testing & Quantitative Modeling",
    ],
    technologies: [
      "SQL",
      "Python",
      "Microsoft Excel",
      "Pandas",
      "Power BI",
      "Tableau",
      "PostgreSQL",
      "Google Looker Studio",
      "NumPy",
      "Matplotlib",
    ],
    formationTrigger: "helix",
  },
  {
    id: "ai-engineering",
    index: "03",
    title: "Artificial Intelligence & LLM Systems",
    roleTitle: "Artificial Intelligence Engineer",
    shortRoleTitle: "AI Engineer",
    subtitle: "Large Language Models · Retrieval-Augmented Generation · Agentic AI",
    description:
      "Designing intelligent AI applications powered by Large Language Models (LLMs), production RAG pipelines, vector search databases, and autonomous multi-agent workflows.",
    metrics: [
      { label: "Experience", value: calcExp(2025) },
      { label: "Mastered Tech", value: getSkillCount("artificial-intelligence") },
    ],
    capabilities: [
      "Large Language Models (LLM) & Context Engineering",
      "Retrieval-Augmented Generation (RAG) with Vector Databases (Chroma, Pinecone)",
      "Autonomous Agentic AI & Orchestration Workflows (LangChain, LangGraph)",
      "Natural Language Processing (NLP) & Semantic Similarity Search",
      "AI API Integration & Full-Stack AI Application Development (FastAPI, Streamlit)",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "PostgreSQL + pgvector",
      "Pinecone",
      "ChromaDB",
      "Ollama",
    ],
    formationTrigger: "neural",
  },
  {
    id: "machine-learning",
    index: "04",
    title: "End-to-End Machine Learning Systems",
    roleTitle: "Machine Learning Engineer",
    shortRoleTitle: "ML Engineer",
    subtitle: "Supervised & Unsupervised Learning · Deep Learning · Neural Networks",
    description:
      "Building predictive machine learning pipelines, deep neural networks, and mathematical models backed by rigorous feature engineering and preprocessing.",
    metrics: [
      { label: "Experience", value: calcExp(2025) },
      { label: "Mastered Tech", value: getSkillCount("machine-learning") },
    ],
    capabilities: [
      "Supervised & Unsupervised Machine Learning Algorithms & Modeling",
      "Deep Learning & Artificial Neural Network Architectures (PyTorch, TensorFlow)",
      "Gradient Boosting & Ensemble Models (XGBoost, LightGBM, Scikit-learn)",
      "Feature Engineering, Feature Selection & Dimensionality Reduction",
      "Data Preprocessing Pipelines & Mathematical Foundations for ML",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "XGBoost",
      "LightGBM",
      "FastAPI",
      "Google Cloud Platform",
    ],
    formationTrigger: "clusters",
  },
];
