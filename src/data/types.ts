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
  | "ai-ml"
  | "desktop-mobile"
  | "ui-ux"
  | "code-learning";

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
  features: { title: string; description: string; badge?: string }[];
  pipelineSteps: { step: string; detail: string; latencyOrMetric: string }[];
  evaluation: string;
  outcomes: string[];
  techStack: string[];
  accentColor: "cyan" | "emerald" | "indigo" | "amber" | "fuchsia" | "teal";
  repoUrl?: string;
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

export interface AchievementItem {
  id: string;
  year: string;
  title: string;
  issuer: string;
  category: "Award" | "Publication" | "Certification" | "Open Source";
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

