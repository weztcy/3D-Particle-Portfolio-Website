"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  BarChart2,
  Binary,
  Box,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileCode2,
  FileSpreadsheet,
  FileText,
  FolderGit2,
  GitBranch,
  Globe,
  Layers,
  Layout,
  LineChart,
  Lock,
  Maximize2,
  Network,
  PieChart,
  Scale,
  Settings2,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Table,
  Target,
  Terminal,
  TrendingDown,
  TrendingUp,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { ProjectCaseStudy } from "@/data";

interface MachineLearningDetailViewProps {
  project: ProjectCaseStudy;
  onTriggerPulse?: () => void;
}

export default function MachineLearningDetailView({
  project,
  onTriggerPulse,
}: MachineLearningDetailViewProps) {
  // Visualization Stage State
  const [activeVisIndex, setActiveVisIndex] = useState(0);
  const [selectedTechFilter, setSelectedTechFilter] = useState<
    | "All"
    | "Programming Languages"
    | "ML/DL Frameworks & Libraries"
    | "Development & Experimentation Tools"
  >("All");

  const heroImage =
    project.imageUrl ||
    (project.images && project.images.length > 0 ? project.images[0] : null);

  // Section 1: Overview & Information
  const projectDescription =
    project.projectDescription ||
    project.overview ||
    project.summary ||
    "Empirical machine learning research project engineered to resolve distance metric sensitivity and magnitude distortions in non-parametric clinical diagnostic systems, deploying feature importance pruning and paired statistical significance testing.";

  const projectInfo = project.mlProjectInfo || {
    projectType: "Supervised Classification & Feature Engineering",
    learningParadigm: "Supervised Learning",
    modelDomain: "Clinical Diagnostic Healthcare",
    projectStatus: project.status || "Completed",
    developmentYear: project.year || "2024",
  };

  const telemetry = project.telemetryMatrix || {
    projectType: projectInfo.projectType,
    targetPlatform: "Python 3.11+ / Scikit-Learn / NumPy",
    primaryDomain: projectInfo.modelDomain,
    architecturePipeline: project.architectureSummary || "Supervised Classification + Cross-Validated Tuning",
    projectStatus: projectInfo.projectStatus,
    projectYear: projectInfo.developmentYear,
  };

  // Section 2: Problem & Dataset
  const problemContext =
    project.mlProblemContext ||
    project.challenge ||
    "In distance-based machine learning algorithms such as K-Nearest Neighbors (K-NN), high-magnitude physiological attributes (e.g. insulin or serum glucose) mathematically overpower smaller continuous markers in Euclidean distance space. Without calibrated feature scaling and non-parametric importance pruning, raw distances distort nearest-neighbor boundaries, causing severe diagnostic misclassifications.";

  const datasetOverview = project.mlDatasetOverview || {
    dataSource: "Pima Indians Diabetes Database (National Institute of Diabetes / NIDDK)",
    dataPeriod: "Longitudinal Clinical Cohort Records",
    recordsCount: "768 Patient Observations",
    featuresCount: "8 Continuous Physiological Predictors + 1 Binary Class",
    dataTypes: "Numerical Float64 & Integer32 (Non-Negative Bounded)",
    description:
      "Clinical diagnostic records capturing female patient metrics of Pima Indian heritage (>=21 years old), containing diagnostic laboratory outcomes, insulin tests, skin fold thicknesses, and 5-year diabetes onset outcomes.",
  };

  const featuresAndDataCharacteristics =
    project.mlFeaturesAndDataCharacteristics || {
      targetVariable: {
        name: "Outcome (Diabetes Diagnosis)",
        type: "Binary Indicator (0: Negative, 1: Positive)",
        classDistribution: "500 Negative (65.1%) vs 268 Positive (34.9%)",
      },
      inputFeatures: [
        {
          name: "Glucose",
          type: "Continuous (mg/dL)",
          importanceOrRole: "Primary Predictor (Gini: 0.32)",
          description: "2-hour plasma glucose concentration in oral glucose tolerance test.",
        },
        {
          name: "BMI (Body Mass Index)",
          type: "Continuous (kg/m²)",
          importanceOrRole: "Core Predictor (Gini: 0.24)",
          description: "Weight in kilograms divided by height in meters squared.",
        },
        {
          name: "Age",
          type: "Discrete (Years)",
          importanceOrRole: "Significant Factor (Gini: 0.16)",
          description: "Patient chronological age ranging from 21 to 81 years.",
        },
        {
          name: "DiabetesPedigreeFunction",
          type: "Continuous (Ratio)",
          importanceOrRole: "Genetic Risk Factor (Gini: 0.14)",
          description: "Scores genetic diabetes influence based on family lineage history.",
        },
      ],
      dataCharacteristicsSummary:
        "Moderate class skewness (65:35 ratio) with physiological zero-value anomalies in Insulin and SkinThickness requiring targeted statistical imputation before normalisation.",
    };

  // Section 3: Model Development & Methodology
  const learningApproach = project.mlLearningApproach || {
    paradigm: "Supervised Non-Parametric Classification",
    methodologyDescription:
      "A rigorous comparative empirical research methodology pairing Gini impurity feature pruning (Random Forest with 100 estimators) with 4 distinct normalization transformations (Min-Max Scaling, Z-Score Standardization, Decimal Scaling, and Raw Baseline) across neighborhood parameters k = 1 to 11.",
    justification:
      "Non-parametric instance-based classifiers make zero prior assumptions regarding underlying Gaussian probability distributions, making them ideal for complex, multi-modal clinical biomarker boundaries when feature scales are correctly normalized.",
  };

  const dataPreparation = project.mlDataPreparation || [
    {
      step: "STAGE 01",
      title: "Physiological Zero Imputation",
      description:
        "Replaced biologically impossible zero values in BloodPressure, BMI, and Glucose with median measures segregated by outcome class.",
      badge: "Targeted Median",
    },
    {
      step: "STAGE 02",
      title: "Random Forest Feature Selection",
      description:
        "Trained a 100-estimator ensemble to compute Gini feature importances, pruning the 4 weakest noise predictors to reduce dimensionality.",
      badge: "Gini Pruning",
    },
    {
      step: "STAGE 03",
      title: "Multi-Paradigm Scaling Transformation",
      description:
        "Standardized feature vectors into bounded [0, 1] range via Min-Max Scaling to eliminate Euclidean distance magnitude bias.",
      badge: "Min-Max Scaling",
    },
    {
      step: "STAGE 04",
      title: "Stratified Cross-Validation Splitting",
      description:
        "Divided data into 80/20 train-test partitions with stratified sampling to preserve positive-negative class proportions.",
      badge: "Stratified 80/20",
    },
  ];

  const modelArchitectureAndTraining =
    project.mlModelArchitectureAndTraining || {
      algorithmName: "K-Nearest Neighbors (K-NN) Classifier",
      architectureSummary:
        "Instance-based lazy learning classifier projecting query feature vectors into normalized 4-dimensional Euclidean space, computing majority class votes across k-nearest historical centroids with uniform distance weighting.",
      hyperparameters: [
        { name: "n_neighbors (k)", value: "k = 7", description: "Optimal neighborhood density balance" },
        { name: "weights", value: "'uniform'", description: "All points in neighborhood vote equally" },
        { name: "metric", value: "'euclidean' (p=2)", description: "Standard L2 Euclidean distance function" },
        { name: "algorithm", value: "'auto' (kd_tree)", description: "Fast O(log n) spatial index queries" },
      ],
      lossFunction: "0-1 Classification Loss / Brier Score",
      optimizer: "GridSearchCV (Grid search over k=1..11 and distance metrics)",
      trainingProcess:
        "Hyperparameter sweeping across odd neighborhood sizes k from 1 to 11 to avoid tie votes, verified via two-tailed paired Student's t-tests (p < 0.05).",
    };

  // Section 4: Tech Stack
  const programmingLanguages = project.mlTechStack?.programmingLanguages || [
    {
      name: "Python 3.10+",
      role: "Core mathematical scripting, matrix manipulation, and statistical hypothesis tests",
    },
  ];

  const frameworksAndLibraries = project.mlTechStack
    ?.frameworksAndLibraries || [
    {
      name: "Scikit-learn",
      role: "K-NN classifier, Random Forest feature importance, and preprocessing scalers",
    },
    {
      name: "NumPy & SciPy",
      role: "Vectorized distance computations, array broadcasting, and paired t-tests",
    },
    {
      name: "Pandas",
      role: "DataFrame ETL, missing value imputation, and descriptive statistics",
    },
    {
      name: "Matplotlib & Seaborn",
      role: "ROC curve generation, confusion matrix heatmaps, and metric boxplots",
    },
  ];

  const experimentationTools = project.mlTechStack
    ?.experimentationTools || [
    {
      name: "Jupyter Notebook",
      role: "Literate scientific computing scratchpad, experiment logs, and visual documentation",
    },
    {
      name: "Google Colab",
      role: "Cloud-hosted execution environment for reproducible statistical benchmarking",
    },
    {
      name: "Git & GitHub",
      role: "Version control for experiment scripts, dataset manifests, and research notebooks",
    },
  ];

  // Section 5: Model Evaluation & Results
  const evaluationStrategy = project.mlEvaluationStrategy || {
    validationMethod: "Stratified Holdout Validation + 5-Fold Cross-Validation",
    description:
      "Comprehensive evaluation assessing Sensitivity (Recall), Specificity, Accuracy, and Area Under the ROC Curve (ROC-AUC). Statistical significance verified via two-tailed paired Student's t-test comparing normalized vs baseline models.",
    metrics: [
      {
        label: "TEST ACCURACY",
        value: "81.17%",
        benchmark: "Baseline: 74.03%",
        pass: true,
      },
      {
        label: "SPECIFICITY",
        value: "84.85%",
        benchmark: "Baseline: 78.12%",
        pass: true,
      },
      {
        label: "ROC-AUC SCORE",
        value: "0.852",
        benchmark: "Paired t-test: p = 0.00003",
        pass: true,
      },
      {
        label: "OPTIMAL K-VALUE",
        value: "k = 7",
        benchmark: "Peak Stability (k=1..11)",
        pass: true,
      },
      {
        label: "PRECISION",
        value: "78.4%",
        benchmark: "Threshold > 70%",
        pass: true,
      },
      {
        label: "F1-SCORE",
        value: "76.2%",
        benchmark: "Harmonic Mean Balanced",
        pass: true,
      },
    ],
  };

  const rawProjectImages: string[] =
    project.images && project.images.length > 0
      ? project.images
      : project.imageUrl
      ? [project.imageUrl]
      : ["/images/projects/Diabetes Classification Using KNN with Data Normalization 1.webp"];

  const performanceVisualizations = project.mlPerformanceVisualizations || [
    {
      title: "Model Accuracy vs Neighborhood Size (k=1 to 11)",
      badge: "Accuracy Curve",
      imageUrl: rawProjectImages[0] || "/images/projects/Diabetes Classification Using KNN with Data Normalization 1.webp",
      caption:
        "Comparative accuracy trajectories across Min-Max Scaling (peak 81.17% at k=7), Z-Score, Decimal Scaling, and raw baseline across k=1 to 11.",
    },
    {
      title: "ROC-AUC Comparison Across Normalization Paradigms",
      badge: "ROC-AUC Curve",
      imageUrl: rawProjectImages[1] || rawProjectImages[0],
      caption:
        "Receiver Operating Characteristic curves confirming statistically significant discrimination gains for Min-Max Normalized K-NN (AUC = 0.852).",
    },
    {
      title: "Confusion Matrix & Diagnostic Error Breakdown",
      badge: "Confusion Matrix",
      imageUrl: rawProjectImages[2] || rawProjectImages[0],
      caption:
        "Confusion matrix on held-out test cohort demonstrating high specificity (84.85%) and minimal false-positive clinical misidentifications.",
    },
  ];

  const modelInterpretationAndLimitations =
    project.mlModelInterpretationAndLimitations || {
      interpretationSummary:
        "Feature pruning and normalization conclusively proved that Glucose and BMI account for over 56% of predictive decision boundaries in instance space. Min-Max normalization prevented insulin magnitude scaling artifacts, yielding statistically significant (p = 0.00003) diagnostic consistency.",
      topPredictors: [
        { feature: "Glucose Concentration", impact: "32.4% Gini Contribution" },
        { feature: "Body Mass Index (BMI)", impact: "24.1% Gini Contribution" },
        { feature: "Patient Age", impact: "16.8% Gini Contribution" },
        { feature: "Diabetes Pedigree Function", impact: "14.2% Gini Contribution" },
      ],
      limitations: [
        {
          title: "Inference Latency at O(n) Scale",
          description:
            "As an instance-based lazy learner, query latency scales linearly with training set size unless partitioned via KD-Tree spatial indices.",
        },
        {
          title: "Sensitivity to Missing Clinical Markers",
          description:
            "Missing physiological laboratory inputs require imputation, which can introduce mild synthetic variance on rare edge-case patients.",
        },
      ],
      futureImprovements: [
        {
          title: "XGBoost & LightGBM Gradient Boosting Comparison",
          target: "Evaluate tree-based gradient boosting models with native missing-value routing.",
        },
        {
          title: "SHAP Kernel Explainer Integration",
          target: "Integrate Kernel SHAP value telemetry for patient-level local prediction explainability.",
        },
      ],
    };

  // Section 6: Project Resources
  const hasRepoUrl = Boolean(
    project.repoUrl && project.repoUrl.trim().length > 0
  );

  const modelArtifacts = project.mlModelArtifacts || [
    {
      name: "knn_diabetes_minmax_model.pkl",
      format: "PICKLE / BINARY",
      size: "240 KB",
      description: "Serialized Scikit-learn K-NN model fitted on normalized 4-feature clinical training space.",
    },
    {
      name: "minmax_scaler_pipeline.pkl",
      format: "PREPROCESSOR",
      size: "48 KB",
      description: "Fitted MinMaxScaler object encapsulating feature minimums and maximums for real-time inference.",
    },
    {
      name: "pima_diabetes_imputed_clean.csv",
      format: "DATASET / CSV",
      size: "38 KB",
      description: "Preprocessed 768-row clinical dataset with median-imputed physiological biomarkers.",
    },
  ];

  const technicalDocumentation = project.mlTechnicalDocumentation || {
    title: "Machine Learning Experiment Documentation",
    description:
      "Comprehensive research dossier covering mathematical formulations of normalization paradigms, Random Forest feature importance derivations, and Student's t-test statistical proofs.",
    status: "DOCS // VERIFIED RESEARCH",
    specs: [
      { label: "ALGORITHM", value: "K-NN (k=7, Uniform Euclidean)" },
      { label: "BEST SCALER", value: "Min-Max Normalization" },
      { label: "STAT SIGNIFICANCE", value: "p = 0.00003 (Paired t-test)" },
      { label: "FEATURE COUNT", value: "4 Pruned Predictors" },
    ],
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      {/* =========================================================================
          SECTION 1 — [ 01 // MODEL CONSOLE & THEORETICAL SCOPE ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#080A14]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(99,102,241,0.15)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-indigo-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-indigo-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-indigo-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-indigo-400/70" />

        {/* Ambient Amber Glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Telemetry Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-300">
              [ 01 // MODEL CONSOLE & THEORETICAL SCOPE ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-indigo-300">
              <Target className="h-3 w-3 text-indigo-400" />
              {projectInfo.projectType}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-indigo-300">
              <Workflow className="h-3 w-3 text-indigo-400" />
              {projectInfo.learningParadigm}
            </span>
          </div>
        </div>

        {/* Dual-Pane Console Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Pane (65%): Project Narrative Terminal */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <div className="flex flex-col h-full flex-1">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between rounded-t-xl border border-indigo-500/30 bg-indigo-950/40 px-4 py-2 text-xs font-mono text-indigo-300">
                <span className="flex items-center gap-2 text-indigo-200">
                  <Terminal className="h-3.5 w-3.5 text-indigo-400" />
                  &gt; ML_RUNTIME // SYS.VIEWPORT
                </span>
                <span className="text-[10px] text-indigo-400/80">ONLINE // BENCHMARK_TRAINED</span>
              </div>

              {/* Terminal Body */}
              <div className="rounded-b-xl border-x border-b border-indigo-500/25 bg-[#080A14]/95 p-5 sm:p-6 text-slate-300 shadow-inner flex flex-col flex-1 justify-between">
                {/* 16:9 Hero Viewport Container */}
                {heroImage && (
                  <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-xl border border-indigo-500/30 bg-black/60 shadow-lg">

                    {/* Optical HUD Crosshairs */}
                    <div className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-2.5 w-2.5 border-t-2 border-l-2 border-indigo-400/80" />
                    <div className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-2.5 w-2.5 border-t-2 border-r-2 border-indigo-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-2.5 w-2.5 border-b-2 border-l-2 border-indigo-400/80" />
                    <div className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-2.5 w-2.5 border-b-2 border-r-2 border-indigo-400/80" />

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
                  {projectDescription.length > 500
                    ? `${projectDescription.slice(0, 500).trim()}...`
                    : projectDescription}
                </p>

                {/* Capability Badges Strip (Max 3) */}
                <div className="pt-4 border-t border-indigo-500/20 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 font-mono text-[11px] text-indigo-300">
                    <Target className="h-3 w-3 text-indigo-400" />
                    Supervised Classification
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 font-mono text-[11px] text-indigo-300">
                    <Scale className="h-3 w-3 text-indigo-400" />
                    Feature Normalization
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 font-mono text-[11px] text-indigo-300">
                    <CheckCircle2 className="h-3 w-3 text-indigo-400" />
                    Cross-Validated p &lt; 0.05
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Pane (35%): Model Datapad */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full rounded-xl border border-indigo-500/30 bg-[#080A14]/90 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div>
              <div className="flex items-center gap-2 border-b border-indigo-500/20 pb-3 mb-4">
                <Layout className="h-4 w-4 text-indigo-400" />
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-200">
                  System Telemetry Matrix
                </h3>
              </div>

              <dl className="space-y-3.5 font-mono text-xs">
                {/* 1. System Classification */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-indigo-400/80">System Classification</dt>
                  <dd className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <Box className="h-3.5 w-3.5 text-indigo-400" />
                    {telemetry.projectType}
                  </dd>
                </div>

                {/* 2. Operating Environment */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-indigo-400/80">Operating Environment</dt>
                  <dd className="text-indigo-300 font-semibold flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-indigo-400" />
                    {telemetry.targetPlatform}
                  </dd>
                </div>

                {/* 3. Domain Focus */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-indigo-400/80">Domain Focus</dt>
                  <dd className="text-slate-200 font-semibold flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-indigo-400" />
                    {telemetry.primaryDomain}
                  </dd>
                </div>

                {/* 4. Engineering Pipeline */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-indigo-400/80">Engineering Pipeline</dt>
                  <dd className="text-indigo-300 font-semibold flex items-center gap-1.5">
                    <Workflow className="h-3.5 w-3.5 text-indigo-400" />
                    <span className="truncate">{telemetry.architecturePipeline}</span>
                  </dd>
                </div>

                {/* 5. Testing & Audit */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-indigo-400/80">Testing & Audit</dt>
                  <dd className="text-indigo-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
                    <span>Passed</span>
                  </dd>
                </div>

                {/* 6. Project Status */}
                <div className="flex flex-col gap-1 border-b border-white/5 pb-2.5">
                  <dt className="text-[10px] uppercase text-indigo-400/80">Project Status</dt>
                  <dd className="text-indigo-300 font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                    {telemetry.projectStatus}
                  </dd>
                </div>

                {/* 7. Project Year */}
                <div className="flex flex-col gap-1">
                  <dt className="text-[10px] uppercase text-indigo-400/80">Project Year</dt>
                  <dd className="text-slate-200 font-semibold">{telemetry.projectYear}</dd>
                </div>
              </dl>

              {/* VCS Repository Access Sub-Card (Copied from Section 6) */}
              <div
                className={`mt-5 group relative flex flex-col justify-between rounded-xl border p-4 sm:p-5 shadow-lg transition-all duration-300 ${
                  hasRepoUrl
                    ? "border-indigo-500/35 bg-[#070B18]/90 hover:border-indigo-400/60 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]"
                    : "border-white/10 bg-black/60 hover:border-white/20"
                }`}
              >
                {/* 4 Optical Corner Crosshairs */}
                <div className="pointer-events-none absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-indigo-400/60" />
                <div className="pointer-events-none absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-indigo-400/60" />
                <div className="pointer-events-none absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-indigo-400/60" />
                <div className="pointer-events-none absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-indigo-400/60" />

                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-indigo-300">
                      {hasRepoUrl ? (
                        <FolderGit2 className="h-3.5 w-3.5 text-indigo-400" />
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
                      <span className="inline-flex items-center gap-1 rounded-full border border-indigo-400/40 bg-indigo-950/60 px-2 py-0.5 font-mono text-[9px] text-indigo-300 font-semibold shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />PUBLIC
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
                      <span className={hasRepoUrl ? "text-indigo-300 font-semibold text-[11px]" : "text-slate-400 font-semibold text-[11px]"}>
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
                    className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2.5 font-mono text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:scale-[1.01]"
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

            <div className="mt-5 pt-3 border-t border-indigo-500/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>PROJECT CODE: {project.code}</span>
              <span className="text-indigo-400 font-bold">READY // v1.0</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — PROBLEM & DATASET
          Layout: Top Problem Context + Split Dataset Specs & Feature Matrix
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#080A14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-indigo-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-indigo-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-indigo-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-indigo-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>[ 02 // PROBLEM SPACE & DATASET MATRIX ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            DISTANCE_SENSITIVITY // FEATURE_SPACE
          </span>
        </div>

        {/* Top: Problem Context (Full-Width Card) */}
        <div className="relative z-10 rounded-2xl border border-indigo-500/20 bg-black/50 p-6 sm:p-7 mb-7 shadow-[inset_0_0_16px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 font-semibold mb-3">
            <AlertTriangle className="h-3.5 w-3.5 text-indigo-400" />
            <span>PROBLEM CONTEXT // MATHEMATICAL & CLINICAL JUSTIFICATION</span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {problemContext}
          </p>
        </div>

        {/* 2-Column Split: Dataset Overview (Left) vs Features & Data Characteristics (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 items-stretch">
          {/* Dataset Overview (6-Parameter Datapad) */}
          <div className="rounded-2xl border border-indigo-500/30 bg-[#140E0A]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(99,102,241,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-300 tracking-wider">
                  <Database className="h-4 w-4 text-indigo-400" />
                  <span>[ DATASET_PROFILE // 6-PARAMETER MATRIX ]</span>
                </div>
                <span className="rounded bg-indigo-400/10 border border-indigo-400/30 px-2 py-0.5 font-mono text-[10px] text-indigo-300 font-bold">
                  CLINICAL DATA
                </span>
              </div>

              <div className="space-y-3 mb-5">
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
                    2. DATA PERIOD / COHORT
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold text-white">
                    {datasetOverview.dataPeriod}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                      3. OBSERVATIONS (ROWS)
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-indigo-300">
                      {datasetOverview.recordsCount}
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                    <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                      4. FEATURE COUNT (COLS)
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-orange-300">
                      {datasetOverview.featuresCount}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    5. DATA TYPES & ENCODING
                  </span>
                  <span className="font-mono text-xs text-slate-200">
                    {datasetOverview.dataTypes}
                  </span>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/40 p-3">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    6. DATASET DESCRIPTION
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {datasetOverview.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-indigo-500/15 font-mono text-[10px] text-indigo-400/80">
              PROVENANCE: Standard clinical benchmark verified for instance-based classification research.
            </div>
          </div>

          {/* Features & Data Characteristics */}
          <div className="rounded-2xl border border-indigo-500/30 bg-[#140E0A]/70 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_30px_rgba(99,102,241,0.05)]">
            <div>
              <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-300 tracking-wider">
                  <Binary className="h-4 w-4 text-indigo-400" />
                  <span>[ FEATURE_SPACE & DATA CHARACTERISTICS ]</span>
                </div>
                <span className="rounded bg-orange-400/10 border border-orange-400/30 px-2 py-0.5 font-mono text-[10px] text-orange-300 font-bold">
                  TARGET & PREDICTORS
                </span>
              </div>

              {/* Target Variable Box */}
              <div className="rounded-xl border border-indigo-500/30 bg-black/60 p-4 mb-4">
                <div className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 mb-1 font-bold">
                  TARGET VARIABLE (Y)
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {featuresAndDataCharacteristics.targetVariable.name}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-slate-300">
                  <span>Type: {featuresAndDataCharacteristics.targetVariable.type}</span>
                  <span className="rounded bg-indigo-400/10 px-2 py-0.5 text-indigo-300 text-[10px] font-semibold">
                    {featuresAndDataCharacteristics.targetVariable.classDistribution}
                  </span>
                </div>
              </div>

              {/* Input Features List */}
              <div className="space-y-2.5 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-bold">
                  KEY PREDICTOR FEATURES (X)
                </span>
                {featuresAndDataCharacteristics.inputFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/5 bg-black/40 p-3 transition-colors hover:border-indigo-400/30"
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-1">
                      <span className="font-bold text-white">{feat.name}</span>
                      <span className="text-[10px] text-indigo-400 font-semibold">
                        {feat.importanceOrRole}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Characteristics Summary */}
              {featuresAndDataCharacteristics.dataCharacteristicsSummary && (
                <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-xs text-slate-300 leading-relaxed">
                  <span className="font-mono text-[10px] text-indigo-400 font-bold block mb-1">
                    DATA DISTRIBUTION NOTE:
                  </span>
                  {featuresAndDataCharacteristics.dataCharacteristicsSummary}
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-indigo-500/15 font-mono text-[10px] text-indigo-400/80">
              SPACE: Scaled 4D feature manifold optimized via Random Forest Gini impurity pruning.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — MODEL DEVELOPMENT & METHODOLOGY
          Layout: Top Methodology Banner + Split Data Preparation & Training
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#080A14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-indigo-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-indigo-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-indigo-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-indigo-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>[ 03 // ALGORITHMIC METHODOLOGY & TRAINING ARCHITECTURE ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            FEATURE_PIPELINE // HYPERPARAMETERS
          </span>
        </div>

        {/* Top: Learning Approach & Methodology Banner */}
        <div className="relative z-10 mb-7 rounded-2xl border border-indigo-500/25 bg-black/50 p-6 sm:p-7 shadow-[inset_0_0_16px_rgba(0,0,0,0.5)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-300">
              <Workflow className="h-4 w-4 text-indigo-400" />
              <span>[ LEARNING_PARADIGM // THEORETICAL FOUNDATION ]</span>
            </div>
            <span className="rounded bg-indigo-400/10 border border-indigo-400/30 px-2 py-0.5 font-mono text-[10px] text-indigo-300 font-bold">
              {learningApproach.paradigm}
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-3">
            {learningApproach.methodologyDescription}
          </p>
          <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3.5 font-mono text-xs text-indigo-200">
            <span className="font-bold mr-2">JUSTIFICATION:</span>
            {learningApproach.justification}
          </div>
        </div>

        {/* 2-Column Split: Data Preparation (Left) vs Model Architecture & Training (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Data Preparation & Feature Engineering */}
          <div className="rounded-2xl border border-indigo-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <Sliders className="h-4 w-4 text-indigo-400" />
                  <span>[ DATA_PREPARATION & FEATURE ENGINEERING ]</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {dataPreparation.length} STAGES
                </span>
              </div>

              <div className="space-y-3.5">
                {dataPreparation.map((stage, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-[#140E0A]/70 p-4 transition-all hover:border-indigo-400/40"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-indigo-400 font-bold mb-1.5">
                      <span>{stage.step}</span>
                      <span className="rounded bg-indigo-400/10 border border-indigo-400/20 px-2 py-0.5 text-indigo-300">
                        {stage.badge}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mb-1">
                      {stage.title}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {stage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              AUDIT: Zero data leakage between train and test partitions during scaling transforms.
            </div>
          </div>

          {/* Model Architecture & Training Configuration */}
          <div className="rounded-2xl border border-indigo-500/20 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <Settings2 className="h-4 w-4 text-indigo-400" />
                  <span>[ MODEL_ARCHITECTURE & TRAINING PROCESS ]</span>
                </div>
                <span className="font-mono text-[10px] text-indigo-400">
                  OPTIMAL k=7
                </span>
              </div>

              <div className="mb-4">
                <div className="font-mono text-sm sm:text-base font-bold text-white mb-1">
                  {modelArchitectureAndTraining.algorithmName}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {modelArchitectureAndTraining.architectureSummary}
                </p>
              </div>

              {/* Hyperparameter Table */}
              <div className="space-y-2 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 block font-bold">
                  HYPERPARAMETER CONFIGURATION
                </span>
                {modelArchitectureAndTraining.hyperparameters.map((hp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-[#140E0A]/80 px-3 py-2 font-mono text-xs"
                  >
                    <span className="text-slate-300">{hp.name}</span>
                    <span className="font-bold text-indigo-300">{hp.value}</span>
                  </div>
                ))}
              </div>

              {/* Loss & Optimizer */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
                  <span className="font-mono text-[9px] uppercase text-slate-500 block">
                    LOSS FUNCTION
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-200">
                    {modelArchitectureAndTraining.lossFunction || "0-1 Loss"}
                  </span>
                </div>
                <div className="rounded-lg border border-white/5 bg-black/40 p-2.5">
                  <span className="font-mono text-[9px] uppercase text-slate-500 block">
                    OPTIMIZER / SWEEP
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-200 truncate block">
                    {modelArchitectureAndTraining.optimizer || "GridSearchCV"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              TRAINING: Evaluated across neighborhood densities k=1 to 11 to identify variance elbow.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — TECH STACK
          Layout: Dynamic Multi-Domain Spec Board + HUD Domain Filter
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#080A14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-indigo-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-indigo-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-indigo-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-indigo-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>[ 04 // MACHINE LEARNING RUNTIME & EXPERIMENT STACK ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            DYNAMIC_SPECS // 3 DOMAINS
          </span>
        </div>

        {/* HUD Domain Filter Switcher */}
        <div className="relative z-10 mb-7 flex flex-wrap items-center gap-2">
          {(
            [
              "All",
              "Programming Languages",
              "ML/DL Frameworks & Libraries",
              "Development & Experimentation Tools",
            ] as const
          ).map((tab) => {
            const isSelected = selectedTechFilter === tab;
            let count = 0;
            if (tab === "All") {
              count =
                programmingLanguages.length +
                frameworksAndLibraries.length +
                experimentationTools.length;
            } else if (tab === "Programming Languages") {
              count = programmingLanguages.length;
            } else if (tab === "ML/DL Frameworks & Libraries") {
              count = frameworksAndLibraries.length;
            } else {
              count = experimentationTools.length;
            }

            if (count === 0) return null; // Dynamic rule: only show non-empty domains

            return (
              <button
                key={tab}
                onClick={() => {
                  setSelectedTechFilter(tab);
                  onTriggerPulse?.();
                }}
                className={`group relative rounded-xl border px-3.5 py-1.5 font-mono text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "border-indigo-400 bg-indigo-500/20 text-indigo-200 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                    : "border-white/10 bg-black/40 text-slate-400 hover:border-white/20 hover:text-white"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`rounded px-1.5 py-0.2 text-[10px] font-bold ${
                    isSelected
                      ? "bg-indigo-400/30 text-indigo-100"
                      : "bg-white/5 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Categorized Tech Grid */}
        <div className="relative z-10 space-y-6">
          {/* Domain 1: Programming Languages */}
          {(selectedTechFilter === "All" ||
            selectedTechFilter === "Programming Languages") &&
            programmingLanguages.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-indigo-300 uppercase tracking-wider border-b border-indigo-500/15 pb-1.5">
                  <Terminal className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Programming Languages</span>
                  <span className="text-[10px] text-indigo-400/70">
                    ({programmingLanguages.length} TECHNOLOGIES)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {programmingLanguages.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center gap-2.5 rounded-xl border border-indigo-500/20 bg-[#080A14]/90 p-3 transition-all hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:-translate-y-0.5"
                    >
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-500/15 text-indigo-300 font-mono font-bold text-[11px] group-hover:scale-105 transition-transform">
                        {tech.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-indigo-200 truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Domain 2: ML/DL Frameworks & Libraries */}
          {(selectedTechFilter === "All" ||
            selectedTechFilter === "ML/DL Frameworks & Libraries") &&
            frameworksAndLibraries.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-wider border-b border-orange-500/15 pb-1.5">
                  <Workflow className="h-3.5 w-3.5 text-orange-400" />
                  <span>Frameworks & Libraries</span>
                  <span className="text-[10px] text-orange-400/70">
                    ({frameworksAndLibraries.length} TECHNOLOGIES)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {frameworksAndLibraries.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center gap-2.5 rounded-xl border border-orange-500/20 bg-[#080A14]/90 p-3 transition-all hover:border-orange-400/50 hover:bg-orange-500/10 hover:-translate-y-0.5"
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
            )}

          {/* Domain 3: Development & Experimentation Tools */}
          {(selectedTechFilter === "All" ||
            selectedTechFilter === "Development & Experimentation Tools") &&
            experimentationTools.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs text-indigo-300 uppercase tracking-wider border-b border-indigo-500/15 pb-1.5">
                  <Sliders className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Experimentation & Scientific Tools</span>
                  <span className="text-[10px] text-indigo-400/70">
                    ({experimentationTools.length} TECHNOLOGIES)
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {experimentationTools.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center gap-2.5 rounded-xl border border-indigo-500/20 bg-[#080A14]/90 p-3 transition-all hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:-translate-y-0.5"
                    >
                      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-500/15 text-indigo-300 font-mono font-bold text-[11px] group-hover:scale-105 transition-transform">
                        {tech.name.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-indigo-200 truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — MODEL EVALUATION & RESULTS
          Layout: Top Evaluation Metrics + Split Visualizations (Left) & Interpretation (Right)
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#080A14]/90 backdrop-blur-2xl p-6 sm:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.85)]">
        {/* Optical Corner HUD */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 h-3 w-3 border-t-2 border-l-2 border-indigo-400" />
        <div className="pointer-events-none absolute top-3.5 right-3.5 h-3 w-3 border-t-2 border-r-2 border-indigo-400" />
        <div className="pointer-events-none absolute bottom-3.5 left-3.5 h-3 w-3 border-b-2 border-l-2 border-indigo-400" />
        <div className="pointer-events-none absolute bottom-3.5 right-3.5 h-3 w-3 border-b-2 border-r-2 border-indigo-400" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5 mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>[ 05 // MODEL EVALUATION & PERFORMANCE BENCHMARKS ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            METRICS_GRID // ROC_AUC // ERROR_ANALYSIS
          </span>
        </div>

        {/* Top: Evaluation Strategy & Quantitative Metrics Deck */}
        <div className="relative z-10 mb-8 rounded-2xl border border-indigo-500/25 bg-black/60 p-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-indigo-300 font-bold">
              <TrendingUp className="h-4 w-4 text-indigo-400" />
              <span>EVALUATION STRATEGY // STATISTICAL SIGNIFICANCE</span>
            </div>
            <span className="text-indigo-400 font-semibold">
              {evaluationStrategy.validationMethod}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
            {evaluationStrategy.description}
          </p>

          {/* Quantitative Metrics Grid - Custom dynamic metrics (Max 6) */}
          {evaluationStrategy.metrics && evaluationStrategy.metrics.length > 0 && (
            <div
              className={`grid gap-3.5 ${
                evaluationStrategy.metrics.length === 1
                  ? "grid-cols-1 max-w-xs"
                  : evaluationStrategy.metrics.length === 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : evaluationStrategy.metrics.length === 3
                  ? "grid-cols-1 sm:grid-cols-3"
                  : evaluationStrategy.metrics.length === 4
                  ? "grid-cols-2 sm:grid-cols-4"
                  : evaluationStrategy.metrics.length === 5
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                  : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
              }`}
            >
              {evaluationStrategy.metrics.slice(0, 6).map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#0E0B14]/80 p-3.5 transition-all hover:border-indigo-400/40"
                >
                  <div className="font-mono text-xl sm:text-2xl font-black text-indigo-300 mb-1 truncate">
                    {m.value}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-400 mb-1 truncate">
                    {m.label}
                  </div>
                  {m.benchmark && (
                    <span className="font-mono text-[9px] text-indigo-400 block truncate">
                      {m.benchmark}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2-Column Split: Model Performance & Visualizations (Left) vs Interpretation & Limitations (Right) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {/* Model Performance & Visualizations Stage */}
          <div className="rounded-2xl border border-indigo-500/25 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <BarChart2 className="h-4 w-4 text-indigo-400" />
                  <span>[ PERFORMANCE_VISUALIZATIONS // ROC & MATRIX ]</span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">
                  {performanceVisualizations.length} CURVES
                </span>
              </div>

              {/* Active Visualization Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#070503] mb-4">
                <Image
                  src={
                    performanceVisualizations[activeVisIndex]?.imageUrl ||
                    "/images/projects/Diabetes Classification Using KNN with Data Normalization 1.webp"
                  }
                  alt={performanceVisualizations[activeVisIndex]?.title}
                  fill
                  className="object-cover object-top transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 rounded bg-black/80 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-indigo-300 font-bold">
                  {performanceVisualizations[activeVisIndex]?.badge}
                </div>
              </div>

              {/* Caption */}
              <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                {performanceVisualizations[activeVisIndex]?.caption}
              </p>

              {/* Thumbnail Selector Ribbon */}
              {performanceVisualizations.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {performanceVisualizations.map((vis, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVisIndex(idx)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all ${
                        idx === activeVisIndex
                          ? "border-indigo-400 ring-2 ring-indigo-400/40 scale-105"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={
                          vis.imageUrl ||
                          "/images/projects/Diabetes Classification Using KNN with Data Normalization 1.webp"
                        }
                        alt={`Thumb ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              TELEMETRY: Min-Max scaling significantly surpasses Z-Score & raw baselines.
            </div>
          </div>

          {/* Model Interpretation & Limitations */}
          <div className="rounded-2xl border border-indigo-500/25 bg-black/50 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-400 tracking-wider">
                  <PieChart className="h-4 w-4 text-indigo-400" />
                  <span>[ MODEL_INTERPRETATION & ERROR ANALYSIS ]</span>
                </div>
                <span className="font-mono text-[10px] text-indigo-400">
                  SHAP / GINI
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                {modelInterpretationAndLimitations.interpretationSummary}
              </p>

              {/* Top Predictor Bars */}
              {modelInterpretationAndLimitations.topPredictors && (
                <div className="space-y-2 mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 block font-bold">
                    PREDICTOR GINI IMPORTANCE WEIGHTS
                  </span>
                  {modelInterpretationAndLimitations.topPredictors.map((tp, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-[#140E0A]/80 px-3 py-1.5 font-mono text-xs"
                    >
                      <span className="text-slate-300">{tp.feature}</span>
                      <span className="font-bold text-indigo-300">{tp.impact}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Limitations List */}
              <div className="space-y-2 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-bold">
                  MODEL LIMITATIONS
                </span>
                {modelInterpretationAndLimitations.limitations.map((lim, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-indigo-500/15 bg-black/40 p-2.5"
                  >
                    <div className="font-mono text-[11px] font-bold text-indigo-300 mb-0.5">
                      {lim.title}
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      {lim.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Future Improvements */}
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-indigo-400 block font-bold">
                  FUTURE IMPROVEMENTS ROADMAP
                </span>
                {modelInterpretationAndLimitations.futureImprovements.map((imp, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between rounded-lg border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5 font-mono text-[11px]"
                  >
                    <span className="text-slate-200 font-semibold">{imp.title}:</span>
                    <span className="text-indigo-300 text-[10px] truncate ml-2">
                      {imp.target}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-500">
              DISCOVERY: Gini pruning isolates primary clinical markers without statistical power loss.
            </div>
          </div>
        </div>
      </section>

            {/* =========================================================================
          SECTION 6 — [ 06 // MODEL VAULT & ARTIFACT GATES ]
          ========================================================================= */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#080A14]/90 backdrop-blur-2xl p-5 sm:p-8 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.85)]">
        {/* Optical HUD Crosshairs */}
        <div className="pointer-events-none absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-indigo-400/70" />
        <div className="pointer-events-none absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-indigo-400/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-indigo-400/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-indigo-400/70" />

        {/* Section Header */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 font-mono text-xs sm:text-sm font-bold text-indigo-400 tracking-wider">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>[ 06 // MODEL VAULT & ARTIFACT GATES ]</span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">
            FINAL_ACCESS // REPOSITORIES, WEIGHTS & RESEARCH SPECIFICATIONS
          </span>
        </div>

        {/* 3-Card Bento Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Card 1: Repository Gate (Adaptive Universal Standard) */}
          <div
            className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-7 shadow-lg transition-all duration-300 ${
              hasRepoUrl
                ? "border-indigo-500/35 bg-[#0C1022]/80 hover:border-indigo-400/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                : "border-white/10 bg-black/60 hover:border-white/20"
            }`}
          >
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-indigo-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-300">
                  {hasRepoUrl ? (
                    <FolderGit2 className="h-4 w-4 text-indigo-400" />
                  ) : (
                    <Lock className="h-4 w-4 text-slate-400" />
                  )}
                  <span>
                    {hasRepoUrl
                      ? "PUBLIC MODEL REPOSITORY"
                      : "RESTRICTED PRIVATE REPOSITORY"}
                  </span>
                </div>
                {hasRepoUrl ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/40 bg-indigo-950/60 px-2.5 py-0.5 font-mono text-[10px] text-indigo-300 font-semibold shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />PUBLIC</span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-slate-400 font-semibold">
                    <Lock className="h-3 w-3" />PRIVATE</span>
                )}
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {hasRepoUrl ? "GitHub Repository" : "Private Commercial Repository"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {hasRepoUrl
                  ? "Explore the complete project repository on GitHub, including production source code, commit history, architectural assets, and technical documentation."
                  : "Source code access is restricted under non-disclosure agreements (NDA) or proprietary commercial rights. No public repository is published."}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">ACCESS CLEARANCE:</span>
                  <span className={hasRepoUrl ? "text-indigo-300 font-semibold" : "text-slate-400 font-semibold"}>
                    {hasRepoUrl ? "UNRESTRICTED / PUBLIC" : "RESTRICTED / NDA"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">VCS GATEWAY:</span>
                  <span className="text-slate-200">GitHub Cloud VCS</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">SECURITY AUDIT:</span>
                  <span className={hasRepoUrl ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
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
                className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 px-5 py-3 font-mono text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:scale-[1.01]"
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

          {/* Card 2: Dataset & Model Artifacts Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-indigo-500/30 bg-[#0A0D1A]/95 p-5 sm:p-7 shadow-lg transition-all duration-300 hover:border-indigo-400/60 hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-indigo-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-300">
                  <Database className="h-4 w-4 text-indigo-400" />
                  <span>DATASET & MODEL ARTIFACTS</span>
                </div>
                <span className="rounded bg-indigo-400/15 border border-indigo-400/30 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                  {modelArtifacts.length} ARTIFACTS
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                Serialized Weights & Datasets
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {datasetOverview.description}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">DATASET RECORDS:</span>
                  <span className="text-slate-200 font-semibold">{datasetOverview.recordsCount}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">FEATURE DIMENSIONS:</span>
                  <span className="text-indigo-300 font-semibold">{datasetOverview.featuresCount}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px]">PRIMARY DATA TYPES:</span>
                  <span className="text-slate-200 font-semibold">{datasetOverview.dataTypes}</span>
                </div>
              </div>
            </div>

            <div className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 font-mono text-xs font-semibold text-indigo-300">
              <Check className="h-4 w-4 text-indigo-400" />
              <span>DATASET_PROFILE_VERIFIED</span>
            </div>
          </div>

          {/* Card 3: Research Specification & Technical Report Card */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-indigo-500/30 bg-[#0A0D1A]/95 p-5 sm:p-7 shadow-lg transition-all duration-300 hover:border-indigo-400/60 hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]">
            {/* 4 Optical Corner Crosshairs */}
            <div className="pointer-events-none absolute top-2.5 left-2.5 h-2 w-2 border-t-2 border-l-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute top-2.5 right-2.5 h-2 w-2 border-t-2 border-r-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 h-2 w-2 border-b-2 border-l-2 border-indigo-400/60" />
            <div className="pointer-events-none absolute bottom-2.5 right-2.5 h-2 w-2 border-b-2 border-r-2 border-indigo-400/60" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-indigo-300">
                  <FileText className="h-4 w-4 text-indigo-400" />
                  <span>RESEARCH SPECIFICATION</span>
                </div>
                <span className="rounded bg-indigo-400/15 border border-indigo-400/30 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                  {technicalDocumentation.status}
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                {technicalDocumentation.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {technicalDocumentation.description}
              </p>

              <div className="space-y-2 font-mono text-xs border-t border-white/5 pt-3 mb-6">
                {technicalDocumentation.specs.map((sp, idx) => (
                  <div key={idx} className="flex items-center justify-between text-slate-400">
                    <span className="text-[11px] uppercase">{sp.label}:</span>
                    <span className="text-slate-200 font-semibold">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {hasRepoUrl && project.repoUrl ? (
              <a
                href={`${project.repoUrl}#readme`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onTriggerPulse?.()}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-3 font-mono text-xs font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all"
              >
                <FileCode2 className="h-4 w-4 text-indigo-400" />
                <span>INSPECT EXPERIMENT SPECS</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-3 font-mono text-xs font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all"
              >
                <FileText className="h-4 w-4 text-indigo-400" />
                <span>INSPECT TECHNICAL SPECS</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
