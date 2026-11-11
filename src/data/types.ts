export type ParticleFormation =
  | "auto"
  | "wave"
  | "neural"
  | "clusters"
  | "helix"
  | "sphere";

export interface DomainPillar {
  id: string;
  index: string;
  title: string;
  roleTitle: string;
  shortRoleTitle?: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  capabilities: string[];
  formationTrigger: Exclude<ParticleFormation, "auto">;
}

export type SkillCategory =
  | "web-development"
  | "data-analysis"
  | "artificial-intelligence"
  | "machine-learning"
  | "project-management"
  | "office-productivity"
  | "office";

export type SkillType = "core-skills" | "tech-stack";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  skillType: SkillType;
  level: number;
  experience: string;
  roleContext: string;
}

export interface SoftSkillItem {
  name: string;
  level: number;
  categoryTag: string;
  description: string;
  accent: "sky" | "emerald" | "indigo" | "amber" | "fuchsia" | "rose";
}

export type ProjectCategory =
  | "web-development"
  | "data-analysis"
  | "ai-engineering"
  | "machine-learning"
  | "desktop-mobile"
  | "ui-ux"
  | "code-learning";

export interface UniversalTelemetryMatrix {
  projectType: string;
  targetPlatform: string;
  primaryDomain: string;
  architecturePipeline: string;
  testingAndAudit?: string;
  projectStatus: string;
  projectYear: string;
}

export interface ProjectCaseStudy {
  id: string;
  code: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  status: string;
  imageUrl?: string;
  images?: string[];
  summary: string;
  overview: string;
  challenge: string;
  architectureSummary: string;
  objectives: string[];
  features: { title: string; description: string; badge?: string; [key: string]: any }[];
  pipelineSteps: { step: string; detail: string; latencyOrMetric?: string; [key: string]: any }[];
  evaluation: string;
  outcomes: string[];
  techStack: string[];
  accentColor: "cyan" | "emerald" | "indigo" | "amber" | "fuchsia" | "teal" | "purple" | "orange" | "rose";
  repoUrl?: string;

  // Universal System Telemetry Matrix (Standardized across all categories)
  telemetryMatrix?: UniversalTelemetryMatrix;

  // Extended Web Development Domain Specific Fields
  projectDescription?: string;
  projectInfo?: {
    projectType: string;
    developmentStatus: string;
    developmentYear: string;
    platform: string;
    projectCategory: string;
  };
  projectBackground?: string;
  problemStatements?: {
    title: string;
    description: string;
    issueCode?: string;
  }[];
  projectObjectives?: {
    title: string;
    description: string;
    targetTag?: string;
  }[];
  coreFeatures?: {
    title: string;
    description: string;
    badge?: string;
    [key: string]: any;
  }[];
  interfaceShowcase?: {
    imageUrl: string;
    caption: string;
    badge?: string;
  }[];
  userFlow?: {
    summary: string;
    steps: {
      step: string;
      title: string;
      description: string;
      actorOrNode?: string;
    }[];
  };
  techStackCategorized?: {
    name: string;
    category:
      | "Frontend"
      | "Backend"
      | "Database"
      | "Framework & Libraries"
      | "API & Integration"
      | "Development Tools"
      | "Version Control"
      | "Testing Tools"
      | "External Services";
    role?: string;
  }[];
  systemArchitecture?: {
    summary: string;
    layers?: {
      name: string;
      role: string;
      components: string[];
    }[];
  };
  databaseDataFlow?: {
    type: "Database Schema / ERD" | "API & Data Flow";
    summary: string;
    entitiesOrPipelines?: {
      name: string;
      type: string;
      fields: string[];
    }[];
  };
  technicalImplementation?: {
    category: string;
    title: string;
    description: string;
    badge?: string;
  }[];
  technicalDocumentation?: {
    title: string;
    description: string;
    status: string;
    specs: { label: string; value: string }[];
  };
  architectureQuality?: {
    title: string;
    description: string;
    status: string;
    badges: string[];
  };

  // Extended Data Analytics Domain Specific Fields
  dataAnalyticsProjectInfo?: {
    projectType: string;
    developmentStatus: string;
    analysisYear: string;
    dataDomain: string;
    projectCategory: string;
  };
  businessContext?: string;
  analyticalObjectives?: {
    title: string;
    description: string;
    targetMetric?: string;
  }[];
  datasetOverview?: {
    dataSource: string;
    dataPeriod: string;
    recordsCount: string;
    variablesCount: string;
    description: string;
  };
  dataPreparation?: {
    step: string;
    title: string;
    description: string;
    badge?: string;
  }[];
  analyticalMethodology?: {
    summary: string;
    methods: {
      name: string;
      description: string;
      badge?: string;
    }[];
  };
  analysisWorkflow?: {
    summary: string;
    steps: {
      stepNumber: string;
      title: string;
      description: string;
      phase?: string;
    }[];
  };
  dataTechStack?: {
    coreTechnologies: {
      name: string;
      role?: string;
    }[];
    analyticsVizTools: {
      name: string;
      role?: string;
    }[];
  };
  presentationSlides?: {
    slideNumber: number;
    title: string;
    imageUrl?: string;
    caption: string;
  }[];
  pdfReportUrl?: string;
  keyFindings?: {
    metricValue: string;
    metricLabel: string;
    title: string;
    description: string;
    impactTag?: string;
  }[];
  recommendationsAndConclusion?: {
    recommendations: {
      title: string;
      action: string;
      priority: "HIGH" | "MEDIUM" | "STRATEGIC";
    }[];
    conclusion: string;
  };
  supportingFiles?: {
    name: string;
    format: string;
    size?: string;
    url?: string;
    description: string;
  }[];

  // Extended AI Engineering Domain Specific Fields
  aiEngineeringProjectInfo?: {
    projectType: string;
    projectStatus: string;
    developmentYear: string;
    aiDomain: string;
    projectCategory: string;
  };
  problemContext?: string;
  proposedAiSolution?: string;
  keyCapabilitiesAndUseCases?: {
    title: string;
    description: string;
    useCaseScenario: string;
    badge?: string;
  }[];
  aiSystemArchitecture?: {
    summary: string;
    layers: {
      name: string;
      role: string;
      components: string[];
    }[];
  };
  aiWorkflow?: {
    summary: string;
    workflowType: string;
    steps: {
      stepNumber: string;
      phase: string;
      title: string;
      description: string;
      actorOrTool?: string;
    }[];
  };
  coreAiComponents?: {
    name: string;
    type: string;
    description: string;
    badge?: string;
  }[];
  aiTechStack?: {
    aiModelsAndServices?: {
      name: string;
      role?: string;
    }[];
    frameworksAndLibraries?: {
      name: string;
      role?: string;
    }[];
    developmentAndInfrastructure?: {
      name: string;
      role?: string;
    }[];
  };
  aiOutputShowcase?: {
    scenarioTitle: string;
    scenarioBadge: string;
    userInput: string;
    aiOutput: string;
    explanation: string;
    executionLatency?: string;
    tokenUsage?: string;
  }[];
  aiEvaluationAndPerformance?: {
    metrics: {
      label: string;
      value: string;
      benchmark?: string;
      pass: boolean;
    }[];
    qualitativeEvaluation: string;
  };
  limitationsAndImprovements?: {
    limitations: {
      title: string;
      description: string;
      severity?: "LOW" | "MEDIUM" | "HIGH";
    }[];
    improvementsRoadmap: {
      title: string;
      target: string;
      phase: string;
    }[];
    summary: string;
  };
  aiTechnicalDocumentation?: {
    title: string;
    description: string;
    status: string;
    specs: { label: string; value: string }[];
  };
  aiArchitectureQuality?: {
    title: string;
    description: string;
    status: string;
    badges: string[];
  };

  // Extended Machine Learning Domain Specific Fields
  mlProjectInfo?: {
    projectType: string;
    learningParadigm: string;
    modelDomain: string;
    projectStatus: string;
    developmentYear: string;
  };
  mlProblemContext?: string;
  mlDatasetOverview?: {
    dataSource: string;
    dataPeriod: string;
    recordsCount: string;
    featuresCount: string;
    dataTypes: string;
    description: string;
  };
  mlFeaturesAndDataCharacteristics?: {
    targetVariable: {
      name: string;
      type: string;
      classDistribution: string;
    };
    inputFeatures: {
      name: string;
      type: string;
      importanceOrRole?: string;
      description: string;
    }[];
    dataCharacteristicsSummary?: string;
  };
  mlLearningApproach?: {
    paradigm: string;
    methodologyDescription: string;
    justification: string;
  };
  mlDataPreparation?: {
    step: string;
    title: string;
    description: string;
    badge?: string;
  }[];
  mlModelArchitectureAndTraining?: {
    algorithmName: string;
    architectureSummary: string;
    hyperparameters: {
      name: string;
      value: string;
      description?: string;
    }[];
    lossFunction?: string;
    optimizer?: string;
    trainingProcess?: string;
  };
  mlTechStack?: {
    programmingLanguages?: {
      name: string;
      role?: string;
    }[];
    frameworksAndLibraries?: {
      name: string;
      role?: string;
    }[];
    experimentationTools?: {
      name: string;
      role?: string;
    }[];
  };
  mlEvaluationStrategy?: {
    validationMethod: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      benchmark?: string;
      pass?: boolean;
    }[];
  };
  mlPerformanceVisualizations?: {
    title: string;
    badge: string;
    imageUrl?: string;
    caption: string;
    tableData?: {
      metric: string;
      trainingScore: string;
      validationScore: string;
    }[];
  }[];
  mlModelInterpretationAndLimitations?: {
    interpretationSummary: string;
    topPredictors?: {
      feature: string;
      impact: string;
    }[];
    limitations: {
      title: string;
      description: string;
    }[];
    futureImprovements: {
      title: string;
      target: string;
    }[];
  };
  mlModelArtifacts?: {
    name: string;
    format: string;
    size?: string;
    description: string;
  }[];
  mlTechnicalDocumentation?: {
    [key: string]: any;
    title: string;
    description: string;
    status: string;
    specs: { label: string; value: string }[];
  };

  // Extended Desktop & Mobile App Domain Specific Fields
  desktopMobileProjectInfo?: {
    [key: string]: any;
    applicationType?: string;
    targetPlatform?: string;
    developmentStatus?: string;
    developmentYear?: string;
    applicationCategory?: string;
  };
  desktopMobileBackground?: string;
  desktopMobileProblemStatements?: {
    [key: string]: any;
    title?: string;
    issue?: string;
    description?: string;
    issueCode?: string;
  }[];
  desktopMobileObjectives?: (
    | string
    | {
        [key: string]: any;
        title: string;
        description: string;
        targetTag?: string;
      }
  )[];
  desktopMobileFeatures?: {
    [key: string]: any;
    title: string;
    description: string;
    badge?: string;
    metric?: string;
  }[];
  desktopMobileInterfaceShowcase?: {
    [key: string]: any;
    imageUrl: string;
    caption: string;
    badge?: string;
  }[];
  desktopMobileUserFlow?: any;
  desktopMobileTechStack?: {
    [key: string]: any;
    programmingLanguages?: {
      name: string;
      role?: string;
    }[];
    frameworksAndLibraries?: {
      name: string;
      role?: string;
    }[];
    databaseToolsAndServices?: {
      name: string;
      role?: string;
    }[];
  };
  desktopMobileArchitecture?: {
    [key: string]: any;
    summary?: string;
    layers?: {
      [key: string]: any;
      name: string;
      role: string;
      components?: string[];
      tech?: string;
    }[];
  };
  desktopMobileDataManagement?: any;
  desktopMobilePlatformImplementation?: any;
  desktopMobileDistribution?: {
    [key: string]: any;
    packageType?: string;
    targetOs?: string;
    version?: string;
    fileSize?: string;
    downloadUrl?: string;
    releaseNotes?: string;
    packagingFormat?: string;
  };
  desktopMobileDocumentation?: {
    [key: string]: any;
    title: string;
    description: string;
    status: string;
    specs: { label: string; value: string }[];
    docsUrl?: string;
  };

  // Extended UI/UX Design Domain Specific Fields
  uiUxProjectInfo?: {
    [key: string]: any;
    projectType?: string;
    designStatus?: string;
    designYear?: string;
    targetPlatform?: string;
    designCategory?: string;
    platformType?: string;
  };
  uiUxBackground?: string;
  uiUxUserResearch?: any;
  uiUxPersonas?: any;
  uiUxInformationArchitecture?: {
    summary?: string;
    nodes?: {
      section: string;
      screens: string[];
    }[];
    [key: string]: any;
  };
  uiUxUserFlow?: any;
  uiUxWireframes?: {
    [key: string]: any;
    title?: string;
    imageUrl?: string;
    caption?: string;
    badge?: string;
  }[];
  uiUxTechStack?: {
    [key: string]: any;
    designAndPrototypingTools?: {
      name: string;
      role?: string;
    }[];
    designSystemsAndResources?: {
      name: string;
      role?: string;
    }[];
    researchAndCollaborationTools?: {
      name: string;
      role?: string;
    }[];
  };
  uiUxVisualShowcase?: {
    [key: string]: any;
    title?: string;
    imageUrl?: string;
    caption?: string;
    badge?: string;
    stage?: string;
  }[];
  uiUxDesignSystem?: {
    [key: string]: any;
    colorPalette?: {
      name?: string;
      hex?: string;
      role?: string;
      usage?: string;
      [key: string]: any;
    }[];
    typography?: {
      name?: string;
      usage?: string;
      role?: string;
      font?: string;
      sizeWeight?: string;
      [key: string]: any;
    }[];
    componentStates?: {
      component: string;
      states: string[];
      notes: string;
    }[];
  };
  uiUxUsabilityValidation?: {
    [key: string]: any;
    prototypeUrl?: string;
    susScore?: string;
    taskSuccessRate?: string;
    timeOnTask?: string;
    findingsAndFeedback?: {
      feedback?: string;
      iterationSolution?: string;
      impact?: string;
      [key: string]: any;
    }[];
    iterations?: {
      usabilityIssue?: string;
      iterationSolution?: string;
      impact?: string;
      [key: string]: any;
    }[];
  };
  uiUxDesignFile?: {
    [key: string]: any;
    platform?: string;
    url?: string;
    isPublic?: boolean;
    description?: string;
    figmaUrl?: string;
    fileStatus?: string;
    totalFrames?: number;
    componentsCount?: number;
    handoffSpecs?: string;
  };
  uiUxPrototypeAndHandoff?: {
    [key: string]: any;
    prototypeUrl?: string;
    handoffStatus?: string;
    specs?: { label: string; value: string }[];
    description?: string;
  };
  uiUxDocumentation?: {
    [key: string]: any;
    title?: string;
    description?: string;
    deliverables?: string[];
    docsUrl?: string;
    status?: string;
    specs?: { label: string; value: string }[];
  };

  // Extended Code Learning Domain Specific Fields
  codeLearningProjectInfo?: {
    [key: string]: any;
    learningCategory?: string;
    difficultyLevel?: string;
    learningFormat?: string;
    totalModules?: string;
    totalSubmodules?: string;
    totalSourceCodeFiles?: string;
    programmingLanguages?: string;
    learningStatus?: string;
  };
  codeLearningDescription?: string;
  codeLearningObjectives?: {
    title: string;
    description: string;
    competencyCode?: string;
    [key: string]: any;
  }[];
  codeLearningPrerequisites?: {
    category: string;
    items: string[];
    description: string;
    [key: string]: any;
  }[];
  codeLearningCurriculumStructure?: {
    summary: string;
    phases: {
      phaseNumber: string;
      phaseTitle: string;
      difficulty: string;
      moduleRange: string;
      topics: string[];
      [key: string]: any;
    }[];
    [key: string]: any;
  };
  codeLearningModules?: {
    id: string;
    moduleNumber: string;
    title: string;
    description: string;
    submoduleCount?: number;
    difficulty: string;
    keyTopics?: string[];
    sourceFilesCount?: number;
    estimatedHours?: string;
    submodules?: {
      id: string;
      submoduleNumber: string;
      title: string;
      description: string;
      duration?: string;
      hasCode?: boolean;
      theoryContent?: {
        summary: string;
        keyPoints: string[];
        conceptualSnippet?: string;
      };
      sourceCodeFiles?: {
        fileName: string;
        language: string;
        code: string;
        output?: string;
      }[];
      [key: string]: any;
    }[];
    [key: string]: any;
  }[];
  codeLearningTechStack?: {
    [key: string]: any;
    programmingLanguages?: { name: string; role?: string }[];
    frameworksAndLibraries?: { name: string; role?: string }[];
    developmentToolsAndEnvironment?: { name: string; role?: string }[];
  };
  codeLearningExercises?: {
    title: string;
    moduleRef: string;
    difficulty: string;
    taskDescription: string;
    instructions: string[];
    solutionSnippet?: string;
    [key: string]: any;
  }[];
  codeLearningPracticalProjects?: {
    title: string;
    description: string;
    techStack?: string[];
    imageUrl?: string;
    highlights?: string[];
    tier?: string;
    difficulty?: string;
    estimatedTime?: string;
    scenario?: string;
    deliverable?: string;
    architecturalConstraints?: string[];
    acceptanceCriteria?: string[];
    keyConcepts?: string[];
    [key: string]: any;
  }[];
  codeLearningOutcomes?: {
    pillar: string;
    skills: {
      title: string;
      description: string;
    }[];
    [key: string]: any;
  }[];
  codeLearningRepository?: any;
  codeLearningDocumentation?: any;
  codeLearningSupplementaryResources?: any;

  // Flexible domain extensions
  [key: string]: any;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  universityName: string;
  degree: string;
  major?: string;
  gpa: string;
  period: string;
  location?: string;
  photoUrl: string;
  photoAlt: string;
  logoUrl?: string;
  academicHighlights: string[];
}

export interface PublicationItem {
  id: string;
  year: string;
  authorStatus: string;
  title: string;
  publisher: string;
  journalLevel: string;
  field: string;
  abstractSummary?: string;
  paperUrl?: string;
  pdfUrl?: string;
  doiUrl?: string;
  authors?: string;
  journalName?: string;
  volumeInfo?: string;
  doi?: string;
  issn?: string;
  fullAbstract?: string;
  keywords?: string[];
  keyContributions?: string[];
  metrics?: { label: string; value: string }[];
  pipelineSteps?: {
    step: string;
    title: string;
    description: string;
    metric: string;
  }[];
  articleHistory?: {
    received: string;
    revised: string;
    accepted: string;
    published: string;
  };
  citationText?: string;
  citationBibtex?: string;
  citationStyles?: {
    apa: string;
    ieee: string;
    acm: string;
    harvard: string;
    chicago: string;
    mla: string;
    bibtex: string;
    ris: string;
  };
  references?: PublicationReference[];
}

export interface PublicationReference {
  id: string;
  authors: string;
  title: string;
  venue: string;
  year: string;
  doi?: string;
  category?:
    | "Normalization & Scaling"
    | "Feature Selection & RF"
    | "KNN & Classification"
    | "Clinical & Diabetes"
    | "Statistical Inference"
    | "Data Preprocessing";
}

export interface CertificationItem {
  id: string;
  code: string;
  title: string;
  issuer: string;
  year: string;
  issueDate: string;
  credentialId: string;
  credentialUrl?: string;
  imageUrl?: string;
  images?: string[];
  overview: string;
  keyModules: { title: string; description: string; badge?: string }[];
}

