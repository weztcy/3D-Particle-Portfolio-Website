import { EDUCATION_DATA } from "../career/educationData";
import { CERTIFICATIONS_LIST } from "../certifications/certificationsData";
import { PROJECT_CASE_STUDIES } from "../projects/projectsData";

export const PROFILE_DATA = {
  name: "Yohanes Dimas Pratama",
  shortName: "YDP",
  title: "Web Developer · Data Analyst · AI Engineer · Machine Learning Engineer",
  roles: [
    "Full-Stack & 3D Web Developer",
    "Senior Data Analyst",
    "AI & LLM Systems Engineer",
    "Machine Learning Engineer",
  ],
  location: "Jakarta, Indonesia (UTC+7)",
  availability: "BUILDING THE FUTURE WITH SOFTWARE, DATA & AI",
  email: "yohanes.dimas.pratama@ai-manifold.dev",
  photoUrl: "/images/profile/profile-photo.png",
  github: "https://github.com/yohanesdimas",
  linkedin: "https://linkedin.com/in/yohanes-dimas-pratama",
  whatsapp: "https://wa.me/",
  heroHeadline:
    "Architecting Modern Web Platforms, Deep Data Analytics, Autonomous AI & Production Machine Learning.",
  heroSubheadline:
    "I bridge four core disciplines—building modern full-stack web platforms, unlocking strategic data intelligence, engineering autonomous AI systems, and deploying production machine learning models.",
  globalMetrics: [
    {
      // Keep years of experience manually controlled.
      value: "4+",
      label: "Years Experience",
    },
    {
      value: String(PROJECT_CASE_STUDIES.length),
      label: "Projects Completed",
    },
    {
      value: String(CERTIFICATIONS_LIST.length),
      label: "Certifications",
    },
    {
      // Education records include the scale (e.g. "3.70 / 4.00"); HUD shows GPA only.
      value: EDUCATION_DATA.gpa.split("/")[0].trim(),
      label: "GPA",
    },
  ],
};
