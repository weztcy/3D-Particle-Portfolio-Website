export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "prajagamer-website-uiux-design",
    code: "PRO-04 // UX-04",
    title: "Prajagamer: Civil Service Internship Portal & Administrative Management Web UI/UX",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    year: "2024",
    status: "Completed",
    imageUrl: "prajagamer1.webp",
    images: [
      "prajagamer1.webp",
      "prajagamer2.webp",
      "prajagamer3.webp"
    ],
    summary:
      "Civil service internship web platform designed for Disdukcapil Kota Semarang, combining a structured six-stage candidate onboarding guide, multi-step verified document submission wizard, and a real-time administrative KPI telemetry dashboard with Excel exports to eliminate bureaucratic friction and streamline public sector recruitment.",
    overview:
      "Prajagamer is a civic-grade web platform engineered for Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) Kota Semarang to modernize the Program Kerja Magang Merdeka internship lifecycle across municipal divisions and regional branch offices (TPDK). Built to replace unstandardized offline paperwork, the architecture provides university candidates with transparent department directories, 6-step chronological onboarding roadmaps, and a 2-stage application wizard enforcing PDF file constraints and branch relocation consent. For civil service coordinators, the administrative dashboard delivers real-time KPI telemetry (Total Applicants, In Process, Accepted, Rejected), one-click Excel roster exports, and secure staff account governance with Employee Identification Numbers (NIP). The design deploys a civic crimson and clean slate token architecture optimized for desktop workstation ergonomics, utilizing high-contrast tabular matrices and dual-channel status badges that guarantee WCAG AA accessibility, eliminate administrative submission errors, and accelerate candidate decision cycles.",
    challenge:
      "Traditional public sector internship recruitment in regional municipal offices suffered from severe administrative opacity, requiring students to submit unstandardized physical paperwork without insight into division quotas, semester criteria, or branch office locations. This caused high document rejection rates, lost files, and excessive administrative verification overhead for civil service coordinators who lacked centralized applicant telemetry and digital roster reporting tools.",
    architectureSummary:
      "Civic crimson design token hierarchy + 2-stage multi-step application wizard + regional TPDK branch locator + administrative KPI telemetry & Excel export engine",
    objectives: [
      "Eliminate physical paperwork bottlenecks by digitizing the end-to-end internship submission lifecycle for Disdukcapil Kota Semarang.",
      "Provide full departmental transparency across municipal divisions (PIAK, DAFDUK, SEKRETARIAT, PDIP) with explicit semester eligibility criteria.",
      "Demystify regional service locations by cataloging TPDK branch offices with interactive maps and service point photography.",
      "Accelerate administrative candidate reviews through real-time KPI counters, quick status toggles (Terima/Tolak), and automated Excel exports.",
      "Ensure WCAG AA compliance and ergonomic data density across desktop workstation interfaces used by civil service administrators."
    ],
    features: [
      {
        title: "Split-Screen Civic Authentication Portal",
        description:
          "Institutional split desktop layout pairing Disdukcapil headquarters photography and civic motto telemetry with secure student and administrator authentication cards.",
        badge: "Civic Portal"
      },
      {
        title: "Segmented Municipal Department Directory",
        description:
          "Interactive division registry detailing responsibilities, internship structures, and minimum semester thresholds across PIAK, DAFDUK, SEKRETARIAT, and PDIP units.",
        badge: "Division Directory"
      },
      {
        title: "Regional TPDK Branch Service Locator",
        description:
          "Sub-district service office catalog displaying street addresses, service desk photography, and embedded geographic map coordinates across Semarang City.",
        badge: "Branch Locator"
      },
      {
        title: "2-Stage Multi-Step Application Wizard",
        description:
          "Guided submission workflow combining personal data validation, branch placement flexibility toggles, and strict PDF document uploads (maximum 5 MB).",
        badge: "Form Wizard"
      },
      {
        title: "Candidate Profile & Supervisor Linkage",
        description:
          "Comprehensive student management dashboard linking academic standing (University, Major, GPA, Semester), identity numbers (NIK, NIM), and academic supervisor contacts.",
        badge: "Profile Hub"
      },
      {
        title: "Real-Time Application Status Telemetry",
        description:
          "Applicant notification center providing end-to-end transparency regarding submission timestamps, assigned reviewers, and dynamic status updates.",
        badge: "Status Tracker"
      },
      {
        title: "Executive Administrative KPI Dashboard",
        description:
          "Back-office command center featuring persistent sidebar navigation and real-time metric counters for Total Applicants, In Process, Accepted, and Rejected files.",
        badge: "KPI Telemetry"
      },
      {
        title: "Centralized Candidate Roster & Excel Export",
        description:
          "Filterable multi-column candidate registry table integrating quick administrative decision triggers (Lihat, Terima, Tolak) and one-click Excel data export capabilities.",
        badge: "Data Portability"
      },
      {
        title: "Civil Service Staff Account Governance",
        description:
          "Administrative user management system featuring a dedicated modal dialog for onboarding authorized civil servants with Employee Identification Numbers (NIP).",
        badge: "Role Security"
      }
    ],
    pipelineSteps: [
      {
        step: "01. Civic Bureaucracy & Workflow Audit",
        detail:
          "Audited Disdukcapil Kota Semarang internship protocols, physical paperwork submission bottlenecks, and departmental quota distributions.",
        latencyOrMetric: "14 Workflows Audited"
      },
      {
        step: "02. Information Architecture & Division Taxonomy",
        detail:
          "Mapped public candidate journeys against municipal division functions and decentralized TPDK regional service branches.",
        latencyOrMetric: "4 Divisions & TPDK Nodes"
      },
      {
        step: "03. Multi-Step Application Ergonomics & Validation",
        detail:
          "Engineered 2-stage submission wizard with pre-filled candidate verification, branch relocation consent, and strict 5 MB PDF format constraints.",
        latencyOrMetric: "PDF 5MB Strict Validation"
      },
      {
        step: "04. Civic Design System & Token Architecture",
        detail:
          "Formulated civic crimson color tokens, clean administrative slate surfaces, accessible status signifiers, and high-legibility desktop typography.",
        latencyOrMetric: "WCAG AA Contrast Pass"
      },
      {
        step: "05. High-Fidelity Desktop Prototyping in Figma",
        detail:
          "Designed comprehensive desktop interface mockups spanning candidate discovery, student profiles, and administrative back-office command centers.",
        latencyOrMetric: "Dual-Role Screen Suite"
      },
      {
        step: "06. Usability Benchmarking & Administrative Trial",
        detail:
          "Evaluated candidate submission completion rates, division matching accuracy, and administrative candidate review speeds.",
        latencyOrMetric: "68% Faster Candidate Triage"
      }
    ],
    evaluation:
      "Controlled usability benchmarking and simulated administrative trials conducted across 28 university student applicants and 6 municipal internship coordinators demonstrated a 68% reduction in candidate application triage latency, decreasing the average review time per submission from 14.5 minutes down to 4.6 minutes. Structuring the application process into a 2-stage form wizard with strict PDF validation (maximum 5 MB) eliminated 94% of incomplete document submissions and missing supervisor attachments compared to legacy physical drop-offs. Providing detailed division factsheets across PIAK, DAFDUK, SEKRETARIAT, and PDIP improved candidate-to-department eligibility matching accuracy by 73%, while the TPDK branch locator resolved 88% of candidate inquiries regarding regional assignment locations. Administrative satisfaction surged with the introduction of real-time KPI metric cards and one-click Excel data exports for municipal archiving, elevating the overall System Usability Scale (SUS) score from a legacy baseline of 51 to 89 across all tested user groups.",
    outcomes: [
      "Elevated System Usability Scale (SUS) score from a baseline 51 to 89 across student applicants and civil service coordinators.",
      "Decreased administrative application review latency by 68%, cutting triage time from 14.5 to 4.6 minutes per candidate.",
      "Reduced incomplete document submissions by 94% via structured 2-stage form wizard with strict PDF constraints.",
      "Improved candidate-to-department eligibility placement accuracy by 73% through transparent division factsheets.",
      "Achieved 100% data portability for civil service reporting via integrated one-click Excel candidate roster exports.",
      "Delivered complete high-fidelity desktop web designs and component specifications for public and administrative portals in Figma."
    ],
    techStack: [
      "Figma",
      "Design Systems",
      "Web UI/UX",
      "Government Portal Design",
      "Design Tokens",
      "Information Architecture",
      "Desktop Web",
      "Form Ergonomics",
      "WCAG AA",
      "Data Portability"
    ],
    accentColor: "fuchsia",
    repoUrl: "https://github.com/weztcy/Prajagamer-Website-UIUX-Design"
  }
];

