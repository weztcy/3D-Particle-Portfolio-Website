import { EDUCATION_DATA } from "../career/educationData";
import { CERTIFICATIONS_LIST } from "../certifications/certificationsData";
import { PROJECT_CASE_STUDIES } from "../projects/projectsData";

export const PROFILE_DATA = {
  name: "Yohanes Dimas Pratama",
  shortName: "YDP",
  title: "Web Developer · Data Analyst · AI Engineer · ML Engineer",
  roles: [
    "Full-Stack Web Developer",
    "Data Analyst",
    "AI Engineer",
    "Machine Learning Engineer",
  ],
  location: "Jakarta, Indonesia (UTC+7)",
  availability: "BUILDING THE FUTURE WITH SOFTWARE, DATA & AI",
  email: "yohanesdimas888@gmail.com",
  phone: "081337272669",
  mailtoLink:
    "mailto:yohanesdimas888@gmail.com?subject=Diskusi%20Project%20atau%20Peluang%20Pekerjaan&body=Halo%20Dimas%2C%0A%0ASaya%20menghubungi%20Anda%20melalui%20website%20portfolio%20dan%20ingin%20menanyakan%20apakah%20saya%20bisa%20berdiskusi%20lebih%20lanjut%20mengenai%20project%20atau%20peluang%20pekerjaan.%0A%0ASaya%20menantikan%20kesempatan%20untuk%20mendiskusikan%20detailnya%20lebih%20lanjut.%0A%0ATerima%20kasih%20atas%20waktu%20dan%20respons%20Anda.",
  photoUrl: "/images/profile/profile-photo.png",
  github: "https://github.com/weztcy",
  linkedin: "https://www.linkedin.com/in/yohanes-dimas",
  whatsapp: "https://wa.link/ebkby0",
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
