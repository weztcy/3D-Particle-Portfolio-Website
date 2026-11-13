---
name: portfolio-ui-ux-design
description: >-
  Audits a UI/UX Design project directory comprehensively (design source files, design tokens CSS/JSON, wireframes, high-fidelity mockups, user personas, UX research reports, usability testing logs, and prototypes) and generates a complete portfolio ProjectCaseStudy Markdown (.md) file compliant with RULES/projectsdata.md and src/data/types.ts. Save the generated .md file inside the analyzed project directory.
---

# UI/UX Design Portfolio Data Generator (`portfolio-ui-ux-design`)

Skill ini mengaudit sebuah direktori project **UI/UX Design** secara menyeluruh lintas format file desain & riset (termasuk inspeksi visual gambar/mockup, token warna/tipografi, dokumen riset UX, dan catatan usability test), lalu menghasilkan file Markdown (`.md`) berisi data `ProjectCaseStudy` yang siap dimasukkan ke `src/data/projects/projectsData.ts`.

---

## 1. Identitas & Konstanta Kategori

- **Category (`category`)**: `"ui-ux"`
- **Category Label (`categoryLabel`)**: `"UI/UX Design"`
- **Accent Color (`accentColor`)**: `"rose"`
- **Code Format (`code`)**: `"PRO-XX // UX-XX"`
- **Konten Teks Output**: Wajib **Bahasa Inggris teknis & profesional**.

---

## 2. Protokol Audit Direktori Menyeluruh (Multi-Format)

Sebelum mengisi field apa pun, inspeksi **seluruh isi direktori project** (jangan hanya dokumen ringkasan):

1. **Mockup Hi-Fi, Wireframe, & Flow Visual**:
   - Inspeksi langsung gambar `.webp`, `.png`, `.jpg`, `.svg`, serta `.fig` metadata/link, ekspor Artboard, dan prototype video/GIF.
   - Amati secara visual: hierarki informasi, skema warna dominan/aksen, struktur navigasi, jumlah frame/screen, serta evolusi dari Lo-Fi wireframe ke Hi-Fi prototype (`uiUxVisualShowcase`).
2. **Design Tokens, Stylesheet, & Komponen**:
   - Cari file `tokens.json`, `style-dictionary`, `theme.ts`, CSS variables, atau dokumentasi Design System.
   - Ekstrak kode warna **HEX `#RRGGBB` yang akurat**, pasangan font & skala tipografi (`uiUxDesignSystem.typography`), serta variasi component states (`Default`, `Hover`, `Active`, `Disabled`, `Error`).
3. **Dokumen Riset Pengguna & Personas**:
   - Baca `.pdf`, `.docx`, `.md`, spreadsheet survei/interview, atau presentation deck (`.pptx`).
   - Ekstrak target audiens, metodologi riset, temuan kunci (`uiUxUserResearch`), persona pengguna (`uiUxPersonas`), Information Architecture (`uiUxInformationArchitecture`), dan User Flow (`uiUxUserFlow`).
4. **Usability Testing & Iterasi Desain**:
   - Cari catatan UT (Usability Testing), skor SUS, task completion rate, time-on-task, dan log perbaikan iteratif (`uiUxUsabilityValidation`).

> **Aturan Kejujuran Data:** Dilarang keras mengarang kode hex warna yang tidak terlihat pada aset/token desain, atau mengarang skor SUS, jumlah partisipan UT, dan persentase keberhasilan tugas tanpa bukti di catatan riset/dokumentasi project.

---

## 3. Aturan Wajib Pengisian (`RULES/projectsdata.md`)

1. **Aset Gambar Lokal**:
   - Folder target portofolio: `/images/projects/<nama_project>/`
   - Pembentukan `<nama_project>`: ambil **maksimal 4 kata alfanumerik awal** dari `title`, ubah ke `lowercase`, pisahkan dengan `_`, abaikan tanda baca (`-`, `&`, `/`, `:`).
   - `imageUrl` & `images[0]`: `"/images/projects/<nama_project>/banner.webp"` (Hero Section 1).
   - `uiUxVisualShowcase[].imageUrl`: `"/images/projects/<nama_project>/image01.webp"`, `image02.webp`, dst. (2 digit *zero-padded*).
2. **Section 1 (Hero Console & Telemetry)**:
   - `overview` dan `projectDescription`: **400–500 karakter** (termasuk spasi) agar tidak terpotong `.slice(0, 500)`.
   - `telemetryMatrix`: wajib isi **7 field**, masing-masing **maksimal 45 karakter**.
   - `uiUxDesignFile`: isi spesifikasi file design `{ fileStatus, totalFrames, componentsCount, handoffSpecs }` (seluruh akses file/repo dikendalikan universal oleh `repoUrl`).
3. **Section 2, 3, & 5**:
   - Pada `uiUxDesignSystem.colorPalette`, setiap nilai `hex` **WAJIB berformat valid `#RRGGBB`** (contoh: `"#E11D48"`, `"#0F172A"`).
   - Jumlah item array pada riset, persona, flow, visual showcase, design system, dan iterasi UT **bebas** sesuai bukti riil project.
4. **Section 4 (`techStack` & `uiUxTechStack`)**:
   - Wajib nama tool desain/riset murni **tanpa nomor versi dan tanpa tanda kurung** (contoh: `"Figma"`, `"FigJam"`, `"Maze"`, `"Lottie"`, `"Tailwind CSS"`, BUKAN `"Figma Design System 2024"`).
5. **Section 6 (`uiUxSystemSpecs`)**:
   - `{ layoutAndGrid, designTokens, typography, prototypeFidelity }` — wajib mencerminkan **spesifikasi design system universal** (maks **3–4 kata per nilai**, **tanpa underscore (`_`)**).

---

## 4. Template Output Markdown (`.md`)

Simpan hasil analisis sebagai file Markdown di **dalam root direktori project yang sedang dianalisis** dengan nama `<project-id>.md` (mengikuti nilai `id` slug, contoh: `mobile-food-recipe-experience-redesign.md`).

Isi file `<project-id>.md` harus mengikuti struktur berikut secara lengkap:

````markdown
# Portfolio Project Data — <Project Title>

- **Category:** `ui-ux` (`UI/UX Design`)
- **Accent Color:** `rose`
- **Target Assets Folder:** `public/images/projects/<nama_project>/`
- **Required Local Images:** `banner.webp`, `image01.webp` .. `imageXX.webp`

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "<kebab-case-slug>",
  "code": "PRO-XX // UX-XX",
  "title": "<Project Title>",
  "category": "ui-ux",
  "categoryLabel": "UI/UX Design",
  "year": "<YYYY>",
  "status": "Completed",
  "accentColor": "rose",
  "repoUrl": "<https://github.com/... atau hapus field ini jika Private>",
  "license": "<MIT License / CC BY 4.0 atau hapus jika Private>",
  "imageUrl": "/images/projects/<nama_project>/banner.webp",
  "images": [
    "/images/projects/<nama_project>/banner.webp"
  ],
  "summary": "<1-2 kalimat ringkas tentang friction pengalaman pengguna & solusi desain produk>",
  "overview": "<400-500 karakter narasi desain menyeluruh dari riset, arsitektur informasi, hingga validasi prototype>",
  "projectDescription": "<400-500 karakter (selaras dengan overview) untuk Hero Console Section 1>",
  "challenge": "<Ringkasan masalah usability / friksi alur pengguna utama>",
  "architectureSummary": "<Ringkasan pendekatan riset ke Information Architecture dan Hi-Fi Design System>",
  "objectives": [
    "<UX Objective 1>",
    "<UX Objective 2>"
  ],
  "features": [
    {
      "title": "<UX Solution / Interaction Highlight>",
      "description": "<Bagaimana fitur UI/UX menyelesaikan pain point pengguna>",
      "badge": "<Short Badge>"
    }
  ],
  "pipelineSteps": [
    {
      "step": "<Design Phase>",
      "detail": "<Aktivitas Empathize / Define / Ideate / Prototype / Test>",
      "latencyOrMetric": "<Deliverable atau metrik fase>"
    }
  ],
  "evaluation": "<1 paragraf narasi hasil usability testing, aksesibilitas kontras, dan iterasi desain>",
  "outcomes": [
    "<Verified UX Outcome / Usability Gain 1>",
    "<Verified UX Outcome / Usability Gain 2>"
  ],
  "techStack": [
    "<Clean Design Tool Tanpa Versi>"
  ],
  "telemetryMatrix": {
    "projectType": "<Max 45 chars>",
    "targetPlatform": "<Max 45 chars>",
    "primaryDomain": "<Max 45 chars>",
    "architecturePipeline": "<Max 45 chars>",
    "testingAndAudit": "Validated",
    "projectStatus": "Completed",
    "projectYear": "<YYYY>"
  },
  "uiUxProjectInfo": {
    "projectType": "<Misal End-to-End Mobile Product Design>",
    "platformType": "<iOS & Android / Responsive Web>",
    "designRole": "<Misal Lead UI/UX & Design Systems>",
    "targetPlatform": "<Target Platform>",
    "targetIndustry": "<Domain Industri>",
    "designYear": "<YYYY>",
    "designStatus": "Completed"
  },
  "uiUxBackground": "<Paragraf konteks produk, celah pengalaman pengguna eksisting, dan peluang desain>",
  "uiUxUserResearch": {
    "targetAudience": "<Profil kelompok pengguna utama>",
    "researchMethodology": "<Metode riset yang dilakukan>",
    "keyFindings": [
      {
        "method": "<Research Method, misal Contextual Inquiry>",
        "description": "<Bagaimana pengumpulan data dilakukan>",
        "keyFinding": "<Temuan inti yang memengaruhi keputusan desain>",
        "badge": "<Short Insight Tag>"
      }
    ]
  },
  "uiUxPersonas": [
    {
      "name": "<Persona Name>",
      "role": "<Persona Role / Segment>",
      "demographics": "<Rentang usia / kebiasaan digital>",
      "quote": "<Kutipan kebutuhan atau frustrasi pengguna>",
      "painPoints": ["<Pain Point 1>", "<Pain Point 2>"],
      "goals": ["<Goal 1>", "<Goal 2>"]
    }
  ],
  "uiUxInformationArchitecture": {
    "summary": "<Penjelasan struktur navigasi dan pengelompokan konten>",
    "nodes": [
      {
        "section": "<Primary Navigation Section>",
        "screens": ["<Screen 1>", "<Screen 2>"]
      }
    ]
  },
  "uiUxUserFlow": {
    "summary": "<Alur tugas utama pengguna dari entry point sampai goal completion>",
    "steps": [
      {
        "step": "01",
        "title": "<Flow Step Title>",
        "description": "<Interaksi layar dan feedback visual sistem>",
        "screenOrAction": "<Screen Name / User Action>"
      }
    ]
  },
  "uiUxVisualShowcase": [
    {
      "title": "<Showcase Stage / Screen Set Title>",
      "imageUrl": "/images/projects/<nama_project>/image01.webp",
      "caption": "<Penjelasan keputusan layout, hierarki visual, dan interaksi>",
      "badge": "<Stage Badge>",
      "stage": "<Wireframe / Hi-Fi UI / Component Spec>"
    }
  ],
  "uiUxDesignSystem": {
    "colorPalette": [
      {
        "name": "<Color Token Name>",
        "hex": "#RRGGBB",
        "role": "<Primary / Surface / Semantic>",
        "usage": "<Penggunaan pada komponen UI>"
      }
    ],
    "typography": [
      {
        "name": "<Text Style Name, misal Display Headline>",
        "role": "<Heading / Body / Caption>",
        "font": "<Clean Font Family Name>",
        "sizeWeight": "<Misal 24px / SemiBold>",
        "usage": "<Konteks penggunaan tipografi>"
      }
    ],
    "componentStates": [
      {
        "component": "<Component Name>",
        "states": ["Default", "Hover", "Active", "Disabled"],
        "notes": "<Aturan aksesibilitas, fokus, atau ukuran sentuh min 48dp>"
      }
    ]
  },
  "uiUxUsabilityValidation": {
    "testingMethod": "<Misal Moderated Task-Based Testing>",
    "participantsCount": "<Jumlah partisipan riil jika tercatat>",
    "susScore": "<Skor SUS jika diukur>",
    "taskSuccessRate": "<Persentase sukses jika diukur>",
    "timeOnTask": "<Rata-rata waktu tugas jika diukur>",
    "feedbackSynthesis": "<Sintesis umpan balik pengguna selama pengujian prototype>",
    "iterations": [
      {
        "usabilityIssue": "<Temuan friksi saat testing>",
        "iterationSolution": "<Perubahan UI/copy/hierarki yang diterapkan>",
        "impact": "<Perbaikan kejelasan atau efisiensi alur>"
      }
    ]
  },
  "uiUxTechStack": {
    "designAndPrototypingTools": [
      {
        "name": "<Clean Design Tool Tanpa Versi>",
        "role": "<Peran>"
      }
    ],
    "designSystemsAndResources": [
      {
        "name": "<Clean Icon/Token/Asset Resource>",
        "role": "<Peran>"
      }
    ],
    "researchAndCollaborationTools": [
      {
        "name": "<Clean Research Tool Tanpa Versi>",
        "role": "<Peran>"
      }
    ]
  },
  "uiUxDesignFile": {
    "fileStatus": "<Published Component Library / Production Design Archive>",
    "totalFrames": 24,
    "componentsCount": 52,
    "handoffSpecs": "<Ringkasan spesifikasi developer handoff, auto-layout, & variable tokens>"
  },
  "uiUxSystemSpecs": {
    "layoutAndGrid": "<Max 3-4 Kata Tanpa Underscore>",
    "designTokens": "<Max 3-4 Kata Tanpa Underscore>",
    "typography": "<Max 3-4 Kata Tanpa Underscore>",
    "prototypeFidelity": "<Max 3-4 Kata Tanpa Underscore>"
  }
}
```
````

---

## 5. Checklist Verifikasi Sebelum Menyimpan

- [ ] **Bahasa Output:** Seluruh teks data output 100% Bahasa Inggris profesional & teknis (tanpa bahasa Indonesia).
- [ ] Seluruh mockup, wireframe, token warna/font, dokumen riset, persona, dan catatan usability test telah diperiksa.
- [ ] `category` = `"ui-ux"`, `categoryLabel` = `"UI/UX Design"`, `accentColor` = `"rose"`.
- [ ] Semua nilai `colorPalette[].hex` memakai format HEX valid `#RRGGBB`.
- [ ] `overview` / `projectDescription` berjumlah **400–500 karakter**; semua 7 nilai `telemetryMatrix` **maks 45 karakter**.
- [ ] `techStack[]` dan `uiUxTechStack` **bebas nomor versi** dan tanda kurung.
- [ ] `uiUxSystemSpecs` memakai 4 nilai universal (maks 3–4 kata, tanpa underscore `_`).
- [ ] Path visual showcase memakai `"/images/projects/<nama_project>/image01.webp"` dst., sedangkan hero memakai `banner.webp`.
- [ ] File `.md` berhasil disimpan di dalam **root direktori project yang dianalisis**.
