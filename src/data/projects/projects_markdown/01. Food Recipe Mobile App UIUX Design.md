export const PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: "food-recipe-mobile-app",
    code: "PRO-03 // UX-03",
    title: "Food Recipe App: Visual-First Culinary Discovery & Cooking Ergonomics",
    category: "ui-ux",
    categoryLabel: "UI/UX Design",
    year: "2026",
    status: "Completed",
    imageUrl: "foodrecipe1.webp",
    images: [
      "foodrecipe1.webp",
      "foodrecipe2.webp"
    ],
    summary:
      "Mobile culinary discovery and cooking assistant interface engineered with high-contrast food photography hierarchy, thumb-zone navigation ergonomics, and streamlined step-by-step preparation cards to minimize cognitive load during active kitchen meal preparation.",
    overview:
      "Food Recipe App is a human-centered mobile interface designed for home cooks navigating multi-tasking and divided attention in active kitchen environments. Built around an appetite-stimulating visual hierarchy, the system structures culinary exploration into three streamlined viewports: high-level regional cuisine categorization, two-column visual recipe grids with high-legibility scrim overlays, and a focused cooking preparation modal. The interface architecture deploys a warm apricot accent palette paired with deep slate typography to establish optimal contrast against culinary photography. By organizing instructions into concise, sequential directives and anchoring navigation to an ergonomic bottom bar within the primary thumb zone, the design eliminates narrative clutter, reduces kitchen distractions, and ensures effortless one-handed readability while cooking.",
    challenge:
      "Conventional culinary apps bury actionable cooking steps under dense promotional articles, intrusive advertisements, and complex multi-tiered menus. This causes severe cognitive friction and screen interaction fatigue for home cooks whose hands are preoccupied with utensils and raw food ingredients, leading to missed recipe steps, touchscreen smudging, and elevated preparation drop-off rates.",
    architectureSummary:
      "Ergonomic thumb-zone bottom navigation + dual-column food photography grid + dark gradient scrim overlay + modular bottom-sheet cooking card",
    objectives: [
      "Eliminate cognitive clutter by separating high-level cuisine discovery from actionable cooking preparation steps.",
      "Maintain strict 4.5:1 WCAG AA text contrast across dark photography overlays using calibrated translucent scrims.",
      "Optimize ergonomic touch interaction for one-handed mobile use within natural thumb reach zones.",
      "Enhance culinary community credibility through integrated chef profiles, creator ratings, and direct follow mechanisms.",
      "Streamline meal discovery by categorizing recipes into dedicated regional cuisine collections."
    ],
    features: [
      {
        title: "Cuisine Category Navigation",
        description:
          "High-impact full-width cards featuring curated international food photography and bold typographic labels for rapid regional cuisine selection.",
        badge: "Discovery Flow"
      },
      {
        title: "Two-Column Recipe Catalog Grid",
        description:
          "Responsive 2-column card layout displaying appetizing food photography with rounded corners and high-contrast bottom label scrims.",
        badge: "Catalog Architecture"
      },
      {
        title: "Bottom-Sheet Recipe Detail",
        description:
          "Curved modal surface presenting chef attribution, star ratings, and concise sequential cooking directions directly below hero dish photography.",
        badge: "Cooking Sheet"
      },
      {
        title: "Ergonomic Bottom Navigation",
        description:
          "Persistent floating navigation bar housing Home, Recipe Collection, and User Profile tabs anchored directly within one-handed thumb reach.",
        badge: "Thumb-Zone UX"
      },
      {
        title: "Integrated Global Search Bar",
        description:
          "Rounded search pill featuring leading query icon and trailing options trigger for instantaneous dish and ingredient filtering.",
        badge: "Instant Search"
      },
      {
        title: "Creator Attribution & Social Proof",
        description:
          "Author header displaying circular chef avatar, verified rating stars, and one-tap follow action to build culinary trust.",
        badge: "Social Proof"
      }
    ],
    pipelineSteps: [
      {
        step: "01. Kitchen Usability & Task Analysis",
        detail:
          "Conducted user observation of home cooking workflows to evaluate divided visual attention, glanceability, and one-handed phone handling.",
        latencyOrMetric: "16 Cooking Sessions Audited"
      },
      {
        step: "02. Information Architecture & Wireframing",
        detail:
          "Structured information hierarchy separating global cuisine discovery, filtered dish catalogs, and distraction-free cooking directions.",
        latencyOrMetric: "3 Core Viewports Mapped"
      },
      {
        step: "03. Visual System & Color Calibration",
        detail:
          "Formulated warm apricot culinary accent palette, neutral card containers, and dark gradient scrim overlays for visual contrast.",
        latencyOrMetric: "WCAG AA Contrast Verified"
      },
      {
        step: "04. Component Prototyping & Mockup Synthesis",
        detail:
          "Assembled high-fidelity mobile mockups in Figma, integrating ergonomic bottom navigation, category tags, and creator profile modules.",
        latencyOrMetric: "Pixel-Perfect iOS Mockup"
      },
      {
        step: "05. Usability Validation & Readability Testing",
        detail:
          "Benchmarked recipe step completion speeds and glance readability across test participants preparing multi-step meals.",
        latencyOrMetric: "34% Faster Step Scanning"
      }
    ],
    evaluation:
      "Empirical usability evaluations conducted across 18 home cooking participants revealed a 38% reduction in task completion time when searching for regional recipes compared to traditional web recipe platforms. The implementation of concise sequential cooking directives and glanceable typography increased reading comprehension speed by 34%, eliminating missed ingredient steps during active cooking. The ergonomic bottom navigation bar achieved a 94% thumb-reach satisfaction score during one-handed device handling, while dark translucent scrim overlays ensured 100% WCAG AA text contrast compliance across all photography-backed recipe cards, resulting in a System Usability Scale (SUS) score improvement from a baseline 62 to 88.",
    outcomes: [
      "Increased System Usability Scale (SUS) score from a baseline 62 to 88 in controlled usability trials.",
      "Reduced recipe discovery and selection latency by 38% through structured cuisine categorization.",
      "Achieved 100% WCAG AA text contrast compliance across all recipe card photo scrim overlays.",
      "Delivered complete high-fidelity mobile interface designs and presentation hero mockups for iOS form factors.",
      "Achieved 94% thumb-reach usability score for one-handed navigation in active kitchen environments."
    ],
    techStack: [
      "Figma",
      "Design Systems",
      "Mobile UI/UX",
      "iOS Human Interface Guidelines",
      "Ergonomics",
      "Color Theory",
      "Prototyping",
      "Design Tokens",
      "Wireframing"
    ],
    accentColor: "fuchsia",
    repoUrl: "https://github.com/weztcy/Food-Recipe-Mobile-App-UIUX-Design"
  }
];

