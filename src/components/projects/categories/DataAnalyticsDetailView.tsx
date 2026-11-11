"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Activity,
  ArrowLeft,
  ArrowUpRight,
  BarChart2,
  Box,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  Download,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  FolderGit2,
  Globe,
  HardDrive,
  Layers,
  Layout,
  LineChart,
  Lock,
  Maximize2,
  PieChart,
  Presentation,
  ShieldCheck,
  Sparkles,
  Table,
  Target,
  Terminal,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";

interface DataAnalyticsDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function DataAnalyticsDetailView({
  project,
  onTriggerPulse,
}: DataAnalyticsDetailViewProps) {
  // Presentation Slide State
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedToolFilter, setSelectedToolFilter] = useState<
    "All" | "Core Technologies" | "Analytics & Viz Tools"
  >("All");
  const [slideErrors, setSlideErrors] = useState<Record<string, boolean>>({});

  const handleSlideImgError = useCallback((src: string) => {
    setSlideErrors((prev) => ({ ...prev, [src]: true }));
  }, []);

  // Section 1: Overview & Information
  const projectDescription =
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "Comprehensive enterprise data analytics study providing exploratory data discovery, diagnostic correlation analysis, and predictive trend modeling to extract actionable business intelligence across large-scale historical transaction datasets.";

  const projectInfo = project.dataAnalyticsProjectInfo || {
    projectType: "Business & Financial Analytics",
    developmentStatus: project.status || "Completed",
    analysisYear: project.year || "2026",
    dataDomain: "Retail & E-Commerce Transactions",
    projectCategory: "Data Analytics",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.projectType,
    targetPlatform: (projectInfo as any).platform || (project as any).platform || "Cloud Analytics / Bi-Platform",
    primaryDomain: projectInfo.dataDomain || "Enterprise Business Intelligence",
    architecturePipeline: (project as any).methodologySummary || project.architectureSummary || "Automated ETL Ingestion + Retention Modeling",
    projectStatus: projectInfo.developmentStatus || project.status || "Completed",
    projectYear: projectInfo.analysisYear || project.year || "2026",
  };

  // Section 2: Business Context, Objectives & Dataset Overview
  const businessContext =
    project.businessContext ||
    project.challenge ||
    "Modern retail decision-making suffered from fragmented operational silos, delayed monthly cohort reporting, and unstructured customer churn telemetry. The absence of automated diagnostic analytics prevented executive leadership from isolating high-margin product categories and optimizing inventory turnover cycles.";

  const analyticalObjectives = project.analyticalObjectives || [
    {
      title: "Revenue Concentration & Pareto Analysis",
      description:
        "Determine the distribution of gross merchandise value across product segments to validate the 80/20 revenue dependency rule.",
      targetMetric: "TARGET_01 // PARETO",
    },
    {
      title: "Customer Churn & Retention Cohorts",
      description:
        "Analyze monthly repurchase intervals and churn propensity scores across first-time vs recurring customer tiers.",
      targetMetric: "TARGET_02 // RETENTION",
    },
    {
      title: "Regional Sales & Profit Margin Elasticity",
      description:
        "Isolate geographical territories displaying negative operating margin drift and compute discounting sensitivity thresholds.",
      targetMetric: "TARGET_03 // ELASTICITY",
    },
  ];

  const datasetOverview = project.datasetOverview || {
    dataSource: "Enterprise ERP & Multi-Channel POS Database",
    dataPeriod: "FY 2023 - FY 2025 (36-Month Longitudinal Ledger)",
    recordsCount: "1,248,500 Rows",
    variablesCount: "28 Columns (Numerical, Categorical, Datetime)",
    description:
      "Granular row-level transactional records detailing line-item SKU sales, unit discounts, localized shipping durations, customer demographic tokens, and regional fulfillment hubs.",
  };

  // Section 3: Data Processing & Methodology
  const dataPreparation = project.dataPreparation || [
    {
      step: "STAGE 01",
      title: "Data Cleaning & Schema Harmonization",
      description:
        "Standardized inconsistent ISO datetime formats, normalized uppercase localized SKU identifiers, and purged orphaned transaction keys.",
      badge: "Standardization",
    },
    {
      step: "STAGE 02",
      title: "Missing Value Imputation & Outlier Filtering",
      description:
        "Applied Median Imputation for skewed numerical freight charges and leveraged IQR Tukey fences to isolate anomaly transactions.",
      badge: "IQR Outlier Gate",
    },
    {
      step: "STAGE 03",
      title: "Feature Engineering & Metric Synthesis",
      description:
        "Derived Customer Lifetime Value (CLV), Net Profit Margin percentage, RFM (Recency, Frequency, Monetary) scores, and Order Lead Time latencies.",
      badge: "RFM Modeling",
    },
    {
      step: "STAGE 04",
      title: "Data Integrity & Schema Validation",
      description:
        "Executed Great Expectations assertion suites verifying non-null constraints, unique invoice numbers, and positive price bounds.",
      badge: "100% Validated",
    },
  ];

  const analyticalMethodology = project.analyticalMethodology || {
    summary:
      "The analytical framework deploys a rigorous multi-tiered quantitative approach combining Exploratory Data Analysis (EDA), parametric hypothesis testing, RFM behavioral clustering, and time-series moving average decomposition to translate raw relational tables into strategic executive decisions.",
    methods: [
      {
        name: "Descriptive Analytics",
        description:
          "Summary statistics (Mean, Median, Skewness, Kurtosis) tracking Central Tendencies and Dispersion across revenue lines.",
        badge: "Baseline Profiling",
      },
      {
        name: "Diagnostic Correlation Matrix",
        description:
          "Pearson & Spearman rank correlation matrices identifying co-linear relationships between discount depth and net profit erosion.",
        badge: "Root-Cause Analysis",
      },
      {
        name: "RFM Segmentation & Clustering",
        description:
          "Quantile-based behavioral customer scoring categorizing buyers into Champions, Loyal Patrons, At-Risk, and Inactive cohorts.",
        badge: "Cohort Intelligence",
      },
      {
        name: "Trend & Seasonality Decomposition",
        description:
          "Additive STL decomposition breaking monthly volume into cyclical seasonal patterns and macro baseline growth vectors.",
        badge: "Time-Series STL",
      },
    ],
  };

  const analysisWorkflow = project.analysisWorkflow || {
    summary:
      "Deterministic 5-phase data intelligence pipeline ensuring end-to-end traceability from raw ingestion to strategic business recommendation.",
    steps: [
      {
        stepNumber: "01",
        title: "Ingestion & Extraction",
        description: "Automated SQL query extraction from transactional replicas into Apache Parquet columnar storage buffers.",
        phase: "Ingestion",
      },
      {
        stepNumber: "02",
        title: "Wrangling & Validation",
        description: "Pandas vectorized transformations, missing data handling, and schema validation pipelines.",
        phase: "Preprocessing",
      },
      {
        stepNumber: "03",
        title: "Exploratory Profiling",
        description: "Distribution analysis, bivariate scatter distributions, and outlier boundary validation.",
        phase: "EDA",
      },
      {
        stepNumber: "04",
        title: "Statistical & BI Modeling",
        description: "DAX aggregations in Power BI and SciPy hypothesis testing verifying statistical significance (p < 0.01).",
        phase: "Analysis",
      },
      {
        stepNumber: "05",
        title: "Synthesis & Delivery",
        description: "Executive deck generation, interactive dashboard publication, and action-item KPI roadmap delivery.",
        phase: "Deliverable",
      },
    ],
  };

  // Section 4: Tech Stack (Core Technologies + Analytics/Viz Tools)
  const coreTechnologies = project.dataTechStack?.coreTechnologies || [
    {
      name: "Python 3.11",
      role: "Vectorized data manipulation, statistical scripting, and transformation pipelines",
    },
    {
      name: "SQL (PostgreSQL / BigQuery)",
      role: "Complex multi-table joins, window functions, and CTE aggregations",
    },
    {
      name: "Pandas & NumPy",
      role: "In-memory dataframe wrangling, matrix mathematics, and column operations",
    },
    {
      name: "SciPy & Statsmodels",
      role: "Hypothesis testing (T-Test, ANOVA), regression models, and p-value validation",
    },
    {
      name: "R / Tidyverse",
      role: "Exploratory statistical modeling and reproducible data wrangling scripts",
    },
  ];

  const analyticsVizTools = project.dataTechStack?.analyticsVizTools || [
    {
      name: "Microsoft Power BI",
      role: "Interactive executive BI dashboards, Star-Schema data modeling, and DAX measures",
    },
    {
      name: "Tableau Desktop",
      role: "Visual storytelling, geospatial geographic mapping, and parameter forecasting",
    },
    {
      name: "Microsoft Excel (Advanced)",
      role: "Power Query ETL, dynamic array formulas (XLOOKUP, LET), and financial PivotTables",
    },
    {
      name: "Jupyter Notebook & Google Colab",
      role: "Interactive literate programming, data exploration scratchpads, and markdown logs",
    },
    {
      name: "Looker Studio",
      role: "Cloud-native real-time KPI dashboards connected directly to BigQuery sources",
    },
  ];

  // Section 5: Analysis Presentation, Key Findings & Recommendations
  const rawProjectImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : ["/images/projects/SiLelo - Online Auction 1.webp"];

  const presentationSlides = project.presentationSlides ||
    rawProjectImages.map((img, i) => ({
      slideNumber: i + 1,
      title: `Executive Presentation Slide 0${i + 1} // Statistical Findings & Visual Intelligence`,
      imageUrl: img,
      caption: `Telemetry slide ${i + 1} delivering synthesized analytical conclusions, cohort segmentation breakdown, and financial impact trajectories.`,
    }));

  const keyFindings = project.keyFindings || [
    {
      metricValue: "+24.8%",
      metricLabel: "MARGIN RECOVERY",
      title: "Discount Cannibalization Threshold Identified",
      description:
        "Orders discounted above 18% caused a statistically significant drop in net margin without driving repeat purchase retention (p = 0.004).",
      impactTag: "PROFITABILITY",
    },
    {
      metricValue: "68.2%",
      metricLabel: "CHAMPION CONCENTRATION",
      title: "Top 20% Customer Cohort Drives Bulk Revenue",
      description:
        "RFM segmentation revealed that the top two deciles generated 68.2% of annual operating profit, yet received identical marketing touchpoints to one-time buyers.",
      impactTag: "PARETO SEGMENT",
    },
    {
      metricValue: "-31.4%",
      metricLabel: "FULFILLMENT DRAG",
      title: "Regional Logistics Latency Correlation",
      description:
        "Cross-zone shipping delays exceeding 4 business days correlated with a 31.4% decline in 90-day repurchase probability.",
      impactTag: "OPERATIONS",
    },
    {
      metricValue: "4.2x",
      metricLabel: "CLV MULTIPLIER",
      title: "Multi-Category Cross-Sell Advantage",
      description:
        "Customers purchasing across at least two distinct product categories exhibited 4.2x higher 24-month Lifetime Value compared to single-category shoppers.",
      impactTag: "GROWTH LTV",
    },
  ];

  const heroImage = project.imageUrl || (presentationSlides[0]?.imageUrl) || "/images/projects/SiLelo - Online Auction 1.webp";

  const recommendationsAndConclusion =
    project.recommendationsAndConclusion || {
      recommendations: [
        {
          title: "Implement Capped Discount Threshold Policy",
          action:
            "Restructure promotional discounting rules to cap maximum automated checkout discounts at 15%, preserving high-margin baseline profitability.",
          priority: "HIGH" as const,
        },
        {
          title: "VIP Tier Retention Automation",
          action:
            "Allocate dedicated CRM workflows and priority customer service routing specifically targeting RFM Champion & Loyal Patron cohorts.",
          priority: "HIGH" as const,
        },
        {
          title: "Decentralized Regional Fulfillment Buffers",
          action:
            "Reposition fast-moving SKU inventories into localized regional fulfillment hubs to compress cross-zone delivery times below 72 hours.",
          priority: "STRATEGIC" as const,
        },
      ],
      conclusion:
        "The empirical findings conclusively confirm that sustainable margin growth hinges on disciplined discounting governance and prioritized VIP retention over generic customer acquisition. By implementing these algorithmic recommendations, the business is projected to reclaim 3.8% in baseline net margins while elevating customer retention by 14% year-over-year.",
    };

  // Section 6: Project Resources
  const hasRepoUrl = Boolean(
    project.repoUrl && project.repoUrl.trim().length > 0
  );

  const supportingFiles = project.supportingFiles || [
    {
      name: "clean_transaction_dataset.parquet",
      format: "PARQUET",
      size: "42.8 MB",
      description: "Cleaned, standardized, and validated 1.2M row transactional dataset with engineered RFM features.",
    },
    {
      name: "data_dictionary_and_schema.xlsx",
      format: "EXCEL / XLSX",
      size: "1.4 MB",
      description: "Complete variable definitions, data types, value constraints, and foreign key entity relationships.",
    },
    {
      name: "executive_analytics_dashboard.pbix",
      format: "POWER BI",
      size: "18.6 MB",
      description: "Interactive Power BI workbook with compiled DAX measures, Star-Schema data models, and KPI cards.",
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* =========================================================================
          SECTION 1 — [ 01 // ANALYTICAL CONSOLE & BUSINESS CONTEXT ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#070D0E]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.05)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-emerald-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-emerald-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-emerald-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-emerald-400/70" />

        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">
              [ 01 // ANALYTICAL CONSOLE & BUSINESS CONTEXT ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
              <LineChart className="h-3 w-3 text-emerald-400" />
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
              <Database className="h-3 w-3 text-emerald-400" />
              {projectInfo.dataDomain}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex flex-col flex-1 h-full">
              {/* Terminal Title Bar */}
              <div className="shrink-0 flex items-center justify-between rounded-t-xl border border-emerald-500/30 bg-emerald-950/40 px-4 py-2 text-xs font-mono text-emerald-300">
                <span className="flex items-center gap-2 text-emerald-200">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  &gt; ANALYTICS_RUNTIME // SYS.VIEWPORT
                </span>
                <span className="text-[10px] text-emerald-400/80">ONLINE // SQL_QUERY</span>
              </div>

              {/* Terminal Body */}
              <div className="flex-1 flex flex-col justify-between rounded-b-xl border-x border-b border-emerald-500/25 bg-[#070D0E]/95 p-5 sm:p-6 text-slate-300 shadow-inner flex-1 flex flex-col justify-between">
                <div>
                  {/* 16:9 Hero Viewport Container — Pure static display */}
                  {heroImage && (
                    <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-emerald-500/30 bg-black/60 shadow-lg">
                      {/* Optical HUD Crosshairs */}
                      <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-emerald-400/80" />
                      <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-emerald-400/80" />
                      <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-emerald-400/80" />
                      <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-emerald-400/80" />

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
                <div className="mt-auto pt-4 border-t border-emerald-500/20 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                    <Database className="h-3 w-3 text-emerald-400" />
                    Automated ETL Ingestion
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                    <Activity className="h-3 w-3 text-emerald-400" />
                    Predictive Retention Modeling
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
                    <PieChart className="h-3 w-3 text-emerald-400" />
                    CLV Cohort Segmentation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Tactical Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-emerald-500/30 bg-[#070D0E]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-emerald-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-emerald-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3.5 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-emerald-400/80">System Classification</dt>
                  <dd className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <Box className="h-3.5 w-3.5 text-emerald-400" />
                    {telemetry.projectType}
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-emerald-400/80">Operating Environment</dt>
                  <dd className="text-emerald-300 font-semibold flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-emerald-400" />
                    {telemetry.targetPlatform}
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-emerald-400/80">Domain Focus</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-emerald-400" />
                    {telemetry.primaryDomain}
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-emerald-400/80">Engineering Pipeline</dt>
                  <dd className="text-slate-300 text-[11px] truncate flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{telemetry.architecturePipeline}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit — Clean Icon + Text */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-emerald-400/80">Testing & Audit</dt>
                  <dd className="text-emerald-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Passed</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-emerald-400/80">Project Status</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{telemetry.projectStatus}</span>
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] uppercase text-emerald-400/80">Project Year</dt>
                  <dd className="text-slate-200 font-semibold">{project.year || "2026"}</dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  hasRepoUrl
                    ? "border-emerald-500/35 bg-[#0C1210]/90 hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-emerald-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-emerald-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-emerald-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-emerald-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-300">
                      {hasRepoUrl ? (
                        <FolderGit2 className="h-3.5 w-3.5 text-emerald-400" />
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
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-950/60 px-2 py-0.5 font-mono text-[9px] text-emerald-300 font-semibold shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />PUBLIC
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
                      <span className={hasRepoUrl ? "text-emerald-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.01]"
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

            <div className="mt-5 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-emerald-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — BUSINESS CONTEXT & DATASET
          Layout: Top Business Narrative + Split Telemetry Grid (Objectives vs Dataset)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 02 // BUSINESS CONTEXT & DATASET TELEMETRY ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            PROBLEM_CONTEXT // DATASET_PROFILE
          </span>
        </div>

        {/* Top: Business Context (Full-Width Narrative Card) */}
        <div className="relative z-10 rounded-2xl border border-emerald-500/20 bg-black/40 p-6 sm:p-7 mb-7 shadow-[inset_0_0_16px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-semibold mb-3">
            <Target className="h-3.5 w-3.5 text-emerald-400" />
            <span>EXECUTIVE CONTEXT // PROBLEM BACKGROUND & RATIONALE</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {businessContext}
          </p>
        </div>

        {/* 2-Column Split: Analytical Objectives (Left) vs Dataset Overview (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch">
          {/* Analytical Objectives */}
          <div className="rounded-2xl border border-emerald-500/30 bg-[#091512]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300 tracking-wider">
                  <Target className="h-4 w-4 text-emerald-400" />
                  <span>[ ANALYTICAL_OBJECTIVES // KEY QUESTIONS ]</span>
                </div>
                <span className="rounded bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 font-mono text-[10px] text-emerald-300 font-bold">
                  {analyticalObjectives.length} TARGETS
                </span>
              </div>

              <div className="space-y-4">
                {analyticalObjectives.map((obj, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-emerald-500/15 bg-black/50 p-4 transition-all hover:border-emerald-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-emerald-400 font-bold mb-1.5">
                      <span>{obj.targetMetric || `TARGET_0${idx + 1}`}</span>
                      <span className="text-[10px] text-cyan-400 font-medium">
                        ANSWERED
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mb-1.5">
                      {obj.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {obj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-emerald-500/15 font-mono text-[10px] text-emerald-400/80">
              TELEMETRY: All analytical objectives mapped to specific quantitative hypotheses.
            </div>
          </div>

          {/* Dataset Overview (5-Parameter Specs) */}
          <div className="rounded-2xl border border-cyan-500/30 bg-[#071318]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-300 tracking-wider">
                  <Database className="h-4 w-4 text-cyan-400" />
                  <span>[ DATASET_PROFILE // METADATA SPECS ]</span>
                </div>
                <span className="rounded bg-cyan-400/10 border border-cyan-400/30 px-2 py-0.5 font-mono text-[10px] text-cyan-300 font-bold">
                  LONGITUDINAL
                </span>
              </div>

              <div className="space-y-3.5 mb-5">
                <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    1. DATA SOURCE
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    {datasetOverview.dataSource}
                  </span>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    2. DATA PERIOD
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    {datasetOverview.dataPeriod}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                      3. RECORDS (ROWS)
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-emerald-300">
                      {datasetOverview.recordsCount}
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                      4. VARIABLES (COLS)
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-cyan-300">
                      {datasetOverview.variablesCount}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    5. DATA DESCRIPTION
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {datasetOverview.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-cyan-500/15 font-mono text-[10px] text-cyan-400/80">
              INTEGRITY: Zero synthetic distortion; 100% verified enterprise ledger schema.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — DATA PROCESSING & METHODOLOGY
          Layout: Flow Pipeline Header + Split Preparation (Left) & Methodology (Right)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 03 // DATA PROCESSING PIPELINE & METHODOLOGY ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            WORKFLOW_CIRCUIT // PREPROCESSING
          </span>
        </div>

        {/* Top: Analysis Workflow Horizontal Pipeline */}
        <div className="relative z-10 mb-8 rounded-2xl border border-emerald-500/25 bg-black/60 p-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300">
              <Workflow className="h-4 w-4 text-emerald-400" />
              <span>[ ANALYSIS_WORKFLOW // 5-PHASE END-TO-END PIPELINE ]</span>
            </div>
            <span className="font-mono text-[10px] text-slate-400">
              DETERMINISTIC ETL
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
            {analysisWorkflow.summary}
          </p>

          {/* Horizontal Circuit Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {analysisWorkflow.steps.map((st, i) => (
              <div
                key={i}
                className="relative rounded-xl border border-white/10 bg-[#0A1412]/80 p-4 transition-all hover:border-emerald-400/50 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between font-mono text-xs font-bold text-emerald-400 mb-2">
                  <span>{st.stepNumber}</span>
                  <span className="rounded bg-emerald-400/10 px-1.5 py-0.2 text-[9px] uppercase tracking-wider text-emerald-300">
                    {st.phase}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mb-1.5">
                  {st.title}
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Split Sub-Bento: Data Preparation (Left) vs Analytical Methodology (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Data Preparation */}
          <div className="rounded-2xl border border-emerald-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  <Database className="h-4 w-4 text-emerald-400" />
                  <span>[ DATA_PREPARATION // CLEANING & WRANGLING ]</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {dataPreparation.length} STAGES
                </span>
              </div>

              <div className="space-y-3.5">
                {dataPreparation.map((prep, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#0A1412]/70 p-4 transition-all hover:border-emerald-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-emerald-400 font-bold mb-1.5">
                      <span>{prep.step}</span>
                      <span className="rounded bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 text-emerald-300">
                        {prep.badge}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1">
                      {prep.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {prep.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              AUDIT: Data validated against null constraints, format outliers, and duplicate primary records.
            </div>
          </div>

          {/* Analytical Methodology */}
          <div className="rounded-2xl border border-emerald-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  <LineChart className="h-4 w-4 text-emerald-400" />
                  <span>[ METHODOLOGY // STATISTICAL APPROACH ]</span>
                </div>
                <span className="font-mono text-[10px] text-cyan-400">
                  RIGOROUS
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                {analyticalMethodology.summary}
              </p>

              <div className="space-y-3">
                {analyticalMethodology.methods.map((met, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#081216]/80 p-3.5 transition-all hover:border-cyan-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] font-bold text-cyan-300 mb-1">
                      <span>{met.name}</span>
                      <span className="rounded bg-cyan-400/10 px-1.5 py-0.2 font-mono text-[9px] text-cyan-400">
                        {met.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {met.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              STATISTICAL VALIDITY: Significance thresholds maintained at 99% confidence level (alpha = 0.01).
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — TECH STACK
          Layout: Dual-Category Spec Grid (Core Tech + Analytics & Viz Tools)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 04 // ANALYTIC RUNTIME & TOOLING ECOSYSTEM ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            SPEC_GRID // 2 DOMAINS
          </span>
        </div>

        {/* HUD Category Filter Tabs */}
        <div className="relative z-10 mb-7 flex flex-wrap items-center gap-2">
          {(["All", "Core Technologies", "Analytics & Viz Tools"] as const).map(
            (tab) => {
              const isSelected = selectedToolFilter === tab;
              const count =
                tab === "All"
                  ? coreTechnologies.length + analyticsVizTools.length
                  : tab === "Core Technologies"
                  ? coreTechnologies.length
                  : analyticsVizTools.length;

              return (
                <button
                  key={tab}
                  onClick={() => {
                    setSelectedToolFilter(tab);
                    onTriggerPulse?.();
                  }}
                  className={`group relative rounded-xl border px-3.5 py-1.5 font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? "border-emerald-400 bg-emerald-400/15 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                      : "border-white/10 bg-black/40 text-slate-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`rounded px-1.5 py-0.2 text-[10px] font-bold ${
                      isSelected
                        ? "bg-emerald-400/20 text-emerald-200"
                        : "bg-white/5 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            }
          )}
        </div>

        {/* Spec Micro-Chip Grid */}
        <div className="relative z-10 space-y-8">
          {/* Group 1: Core Technologies */}
          {(selectedToolFilter === "All" ||
            selectedToolFilter === "Core Technologies") && (
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 mb-4">
                <Terminal className="h-3.5 w-3.5" />
                <span>DOMAIN 01 // CORE PROGRAMMING, DATABASES & LIBRARIES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {coreTechnologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl border border-white/10 bg-[#0A1412]/70 p-4 transition-all duration-300 hover:border-emerald-400/50 hover:bg-[#0C1B18] hover:-translate-y-1 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                  >
                    <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-emerald-400/40 group-hover:bg-emerald-400 group-hover:scale-125 transition-all" />

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-transform">
                        <Terminal className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-xs sm:text-sm font-bold text-white truncate">
                          {tech.name}
                        </div>
                        <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider">
                          CORE ENGINE
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block mb-0.5">
                        ANALYTICAL ROLE
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {tech.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group 2: Analytics & Visualization Tools */}
          {(selectedToolFilter === "All" ||
            selectedToolFilter === "Analytics & Viz Tools") && (
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 mb-4">
                <BarChart2 className="h-3.5 w-3.5" />
                <span>DOMAIN 02 // ANALYTICS, BI WORKSPACES & VISUALIZATION TOOLS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {analyticsVizTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl border border-white/10 bg-[#071318]/70 p-4 transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0B1E24] hover:-translate-y-1 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                  >
                    <div className="pointer-events-none absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-cyan-400/40 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />

                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)] group-hover:scale-105 transition-transform">
                        <BarChart2 className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-xs sm:text-sm font-bold text-white truncate">
                          {tool.name}
                        </div>
                        <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                          BI & REPORTING
                        </span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500 block mb-0.5">
                        WORKBENCH FUNCTION
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {tool.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — ANALYSIS & FINDINGS
          Layout: Cinema Viewer Deck + Split Findings & Actions Below
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 05 // ANALYSIS PRESENTATION & INSIGHTS DECK ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            EMBEDDED_SLIDES // STRATEGIC_OUTCOMES
          </span>
        </div>

        {/* 1. Analysis Presentation (Interactive Slide Viewer) */}
        <div className="relative z-10 mb-8 rounded-2xl border border-emerald-500/30 bg-black/60 p-4 sm:p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Presentation className="h-4 w-4 text-emerald-400" />
              <span className="font-bold text-emerald-300">
                EXECUTIVE_PRESENTATION_VIEWER // SLIDE DECK
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">
                SLIDE {String(activeSlideIndex + 1).padStart(2, "0")} /{" "}
                {String(presentationSlides.length).padStart(2, "0")}
              </span>
              
            </div>
          </div>

          {/* Slide Stage Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-[#040808]">
            <Image
              src={
                slideErrors[presentationSlides[activeSlideIndex]?.imageUrl || ""]
                  ? "/images/projects/SiLelo - Online Auction 1.webp"
                  : presentationSlides[activeSlideIndex]?.imageUrl ||
                    "/images/projects/SiLelo - Online Auction 1.webp"
              }
              alt={presentationSlides[activeSlideIndex]?.title || project.title}
              fill
              className="object-cover object-top transition-transform duration-500"
              priority
              onError={() =>
                handleSlideImgError(
                  presentationSlides[activeSlideIndex]?.imageUrl || ""
                )
              }
            />

            {/* Slide Navigation Overlay Buttons */}
            {presentationSlides.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveSlideIndex((prev) =>
                      prev === 0 ? presentationSlides.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40 bg-black/70 p-2.5 text-emerald-300 hover:bg-emerald-400 hover:text-black backdrop-blur-md transition-all shadow-lg"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveSlideIndex((prev) =>
                      prev === presentationSlides.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40 bg-black/70 p-2.5 text-emerald-300 hover:bg-emerald-400 hover:text-black backdrop-blur-md transition-all shadow-lg"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Live Slide Caption Scrim */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-4 sm:p-5 flex items-center justify-between gap-4">
              <div className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                <span className="text-emerald-400 font-bold mr-2">
                  [ SLIDE 0{activeSlideIndex + 1} ]
                </span>
                {presentationSlides[activeSlideIndex]?.caption}
              </div>
            </div>
          </div>

          {/* Slide Thumbnail Ribbon */}
          {presentationSlides.length > 1 && (
            <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin">
              {presentationSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`relative h-14 sm:h-16 w-24 sm:w-28 shrink-0 overflow-hidden rounded-lg border transition-all ${
                    idx === activeSlideIndex
                      ? "border-emerald-400 ring-2 ring-emerald-400/40 scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={
                      slide.imageUrl ||
                      "/images/projects/SiLelo - Online Auction 1.webp"
                    }
                    alt={`Slide Thumb ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.2 font-mono text-[9px] text-emerald-300">
                    SLIDE {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Split: Key Findings (Left) vs Recommendations & Conclusion (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Key Findings & Insights */}
          <div className="rounded-2xl border border-emerald-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  <Sparkles className="h-4 w-4 text-emerald-400" />
                  <span>[ KEY_FINDINGS // EMPIRICAL INSIGHTS ]</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {keyFindings.length} METRICS VALIDATED
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyFindings.map((finding, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-[#0A1412]/70 p-4 transition-all hover:border-emerald-400/40 hover:-translate-y-0.5"
                  >
                    <div className="flex items-baseline justify-between font-mono mb-2">
                      <span className="text-xl sm:text-2xl font-black text-emerald-400">
                        {finding.metricValue}
                      </span>
                      <span className="rounded bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300">
                        {finding.impactTag}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 mb-1">
                      {finding.metricLabel}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1.5">
                      {finding.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {finding.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              CONFIRMATION: Derived from p-value significance matrices and empirical cohort clustering.
            </div>
          </div>

          {/* Recommendations & Conclusion */}
          <div className="rounded-2xl border border-emerald-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 tracking-wider">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <span>[ ACTIONABLE_RECOMMENDATIONS & CONCLUSION ]</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-400">
                  EXECUTIVE_DECK
                </span>
              </div>

              {/* Action List */}
              <div className="space-y-3 mb-5">
                {recommendationsAndConclusion.recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-[#071318]/80 p-3.5 transition-all hover:border-cyan-400/30"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] mb-1">
                      <span className="font-bold text-cyan-300">{rec.title}</span>
                      <span
                        className={`rounded px-1.5 py-0.2 font-bold ${
                          rec.priority === "HIGH"
                            ? "bg-rose-500/15 text-rose-300 border border-rose-500/30"
                            : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                        }`}
                      >
                        {rec.priority} PRIORITY
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {rec.action}
                    </p>
                  </div>
                ))}
              </div>

              {/* Conclusion Narrative */}
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  STRATEGIC CONCLUSION
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {recommendationsAndConclusion.conclusion}
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              GOVERNANCE: Action roadmap aligned with quarterly operational OKRs.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — PROJECT RESOURCES (SECTION TERAKHIR)
          Layout: 3-Card Bento Grid Simetris
          Card 1: Analysis Repository Card (Adaptive GitHub vs Private Repo)
          Card 2: Presentation & Report Card
          Card 3: Dataset & Supporting Files Card
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-[#070D0E]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-emerald-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-emerald-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-emerald-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>[ 06 // ANALYTICAL ARTIFACTS & DATA DELIVERABLES ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            FINAL_ACCESS // NOTEBOOKS, REPORTS & DATASETS
          </span>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Card 1: Analysis Repository Gate (Adaptive) */}
          <div
            className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 shadow-lg transition-all duration-300 ${
              hasRepoUrl
                ? "border-emerald-500/30 bg-[#07130F]/70 hover:border-emerald-400/60"
                : "border-amber-500/30 bg-[#140E0A]/70 hover:border-amber-400/50"
            }`}
          >
            <div>
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
                      ? "PUBLIC CODE REPOSITORY"
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

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {hasRepoUrl ? "GitHub Repository" : "Private Repository"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {hasRepoUrl
                  ? "Open-access data analytics codebase housing Jupyter notebooks, automated SQL transformations, ETL pipeline scripts, and environment definitions."
                  : "Analytics scripts and proprietary models are restricted under enterprise client NDA and confidential trade-secret governance. Public mirror disabled."}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {hasRepoUrl ? (
                  <>
                    <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                      SCRIPTS // PYTHON & SQL
                    </span>
                    <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                      STATUS // VERIFIED
                    </span>
                  </>
                ) : (
                  <>
                    <span className="rounded border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] text-amber-300">
                      CLEARANCE // CONFIDENTIAL
                    </span>
                    <span className="rounded border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 font-mono text-[10px] text-amber-300">
                      ENTERPRISE // NDA
                    </span>
                  </>
                )}
              </div>
            </div>

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

          {/* Card 2: Presentation & Report Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-[#0A1412]/70 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-emerald-400/60">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-300">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  <span>PRESENTATION & REPORT</span>
                </div>
                <span className="rounded bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                  PDF / PPTX READY
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Executive Report & Slide Deck
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                Comprehensive executive dossier containing the 25-slide presentation, methodology appendix, statistical significance tables, and quarterly ROI forecast.
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 px-3 py-1.5 font-mono text-[11px]">
                  <span className="text-slate-400">DOCUMENT FORMAT</span>
                  <span className="font-bold text-emerald-300">PDF & PPTX SLIDES</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 px-3 py-1.5 font-mono text-[11px]">
                  <span className="text-slate-400">DECK LENGTH</span>
                  <span className="font-bold text-white">25 SLIDES // COMPLETE</span>
                </div>
              </div>
            </div>

            
          </div>

          {/* Card 3: Dataset & Supporting Files Card */}
          <div className="flex flex-col justify-between rounded-2xl border border-cyan-500/30 bg-[#071318]/70 p-6 sm:p-7 shadow-lg transition-all duration-300 hover:border-cyan-400/60">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-300">
                  <HardDrive className="h-4 w-4 text-cyan-400" />
                  <span>DATASET & ARTIFACTS</span>
                </div>
                <span className="rounded bg-cyan-400/10 border border-cyan-400/30 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                  {supportingFiles.length} FILES
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Processed Datasets & Workbooks
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                Processed transaction extracts, metadata schemas, and interactive Power BI workbooks available for reproducible research.
              </p>

              <div className="space-y-2 mb-6">
                {supportingFiles.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-black/40 p-2 font-mono text-[10px]"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <FileSpreadsheet className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="text-slate-200 truncate">{file.name}</span>
                    </div>
                    <span className="text-cyan-300 font-bold ml-2 shrink-0">
                      {file.format}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-center font-mono text-xs font-medium text-cyan-300">
              STATUS: ARTIFACTS PACKAGED & AUDITED
            </div>
          </div>
        </div>
      </section>

      </div>
  );
}
