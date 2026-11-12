---
name: portfolio-code-learning
description: >-
  Audits a Code Learning / educational repository comprehensively (syllabus docs, ordered learning modules, submodules, theory notes, runnable source code examples, exercises, unit tests, capstones, and media) and generates a complete portfolio ProjectCaseStudy Markdown (.md) file compliant with RULES/projectsdata.md and src/data/types.ts. Save the generated .md file inside the analyzed project directory.
---

# Code Learning Portfolio Data Generator (`portfolio-code-learning`)

Skill ini mengaudit sebuah direktori project **Code Learning** (kurikulum pemrograman terstruktur, modul CS/algoritma, tutorial bertingkat, interactive labs, beserta source code & unit test latihan) secara menyeluruh lintas format file, memetakan materi dan kode yang dapat dieksekusi ke struktur kurikulum interaktif, lalu menghasilkan file Markdown (`.md`) berisi data `ProjectCaseStudy` yang siap dimasukkan ke `src/data/projects/projectsData.ts`.

---

## 1. Identitas & Konstanta Kategori

- **Category (`category`)**: `"code-learning"`
- **Category Label (`categoryLabel`)**: `"Code Learning"`
- **Accent Color (`accentColor`)**: `"orange"`
- **Code Format (`code`)**: `"PRO-XX // CL-XX"`
- **Konten Teks Output**: Wajib **Bahasa Inggris teknis & profesional**.

---

## 2. Protokol Audit Direktori Menyeluruh (Multi-Format)

Sebelum mengisi field apa pun, inspeksi **seluruh isi direktori project** (jangan hanya daftar folder):

1. **Struktur Direktori Modul, Silabus, & Roadmap**:
   - Telusuri folder berurutan (`01-*`, `module-*`, `week-*`, `bab-*`), `README.md`, silabus PDF/DOCX/PPTX, serta file peta materi.
   - Hitung secara akurat jumlah total modul (`totalModules`), total submodul (`totalSubmodules`), dan total file source code latihan (`totalSourceCodeFiles`) untuk `codeLearningProjectInfo`.
   - Kelompokkan alur belajar berjenjang ke `codeLearningCurriculumStructure.phases`.
2. **Konten Teori Submodul & Source Code Riil**:
   - Baca file penjelasan teori (`.md`, komentar edukatif, `.ipynb` markdown cells) untuk mengisi `theoryContent` (`summary`, `keyPoints`, `conceptualSnippet?`).
   - Ekstrak snippet atau file kode aktual lengkap beserta hasil eksekusi/test output nyata (`code`, `language`, `output?`) ke dalam `submodules[].sourceCodeFiles` untuk ditampilkan pada code viewer interaktif.
3. **Exercises, Unit Tests, & Capstone Projects**:
   - Periksa folder `projects/`, `capstone/`, `challenges/`, `tests/`, dan `resources/` (cheatsheet PDF, referensi bacaan).
   - Ekstrak deskripsi tugas praktik nyata ke `codeLearningPracticalProjects` dan referensi tambahan ke `codeLearningSupplementaryResources`.

> **Aturan Kejujuran Data:** Dilarang mengarang output terminal (`output`), jumlah file source code, estimasi jam belajar, atau potongan kode sintetis yang tidak diambil/diverifikasi dari file nyata di dalam direktori project.

---

## 3. Aturan Wajib Pengisian (`RULES/projectsdata.md`)

1. **Aset Gambar Lokal (ATURAN KHUSUS CODE LEARNING)**:
   - Folder target portofolio: `/images/projects/<nama_project>/`
   - Pembentukan `<nama_project>`: ambil **maksimal 4 kata alfanumerik awal** dari `title`, ubah ke `lowercase`, pisahkan dengan `_`, abaikan tanda baca (`-`, `&`, `/`, `:`).
   - Kategori **Code Learning HANYA menggunakan `banner.webp`**.
   - **DILARANG** membuat file showcase tambahan (`image01.webp`, dst.) dan **DILARANG** menambahkan properti `imageUrl` di dalam item `codeLearningPracticalProjects[]`.
2. **Section 1 (Hero Console & Telemetry)**:
   - **`codeLearningDescription`**, `overview`, dan `projectDescription`: **WAJIB 400–500 karakter** (termasuk spasi) agar tidak terpotong `.slice(0, 500)`.
   - `telemetryMatrix`: wajib isi **7 field**, masing-masing **maksimal 45 karakter**.
   - Repository: isi `repoUrl` & `license` jika Public; hapus/kosongkan `repoUrl` & `license` jika Private.
3. **Section 2, 3, & 5 (ATURAN FILTER LEVEL KESULITAN)**:
   - Nilai `difficulty` pada `codeLearningModules[]` **WAJIB** menggunakan salah satu dari tiga string persis (case-sensitive): **`"Beginner"`**, **`"Intermediate"`**, atau **`"Advanced"`** agar filter tab `CodeLearningDetailView.tsx` berfungsi benar.
   - Jumlah modul, submodul, phase, capstone project, dan kompetensi bebas sesuai struktur riil materi project.
4. **Section 4 (`techStack` & `codeLearningTechStack`)**:
   - Wajib nama bahasa/runtime/tool murni **tanpa nomor versi dan tanpa tanda kurung** (contoh: `"Python"`, `"TypeScript"`, `"Pytest"`, `"Node.js"`, `"VS Code"`, BUKAN `"Python 3.12"`).
5. **Section 6 (`codeLearningCurriculumSpecs`)**:
   - `{ curriculumTrack, primaryLanguage, executionRuntime, testVerification }` — bersih tanpa nomor versi, maks **3–4 kata per nilai**, dan **tanpa underscore (`_`)**.

---

## 4. Template Output Markdown (`.md`)

Simpan hasil analisis sebagai file Markdown di **dalam root direktori project yang sedang dianalisis** dengan nama `<project-id>.md` (mengikuti nilai `id` slug, contoh: `python-algorithms-mastery-curriculum.md`).

Isi file `<project-id>.md` harus mengikuti struktur berikut secara lengkap:

````markdown
# Portfolio Project Data — <Project Title>

- **Category:** `code-learning` (`Code Learning`)
- **Accent Color:** `orange`
- **Target Assets Folder:** `public/images/projects/<nama_project>/`
- **Required Local Images:** `banner.webp` ONLY (dilarang menambahkan `image01.webp` dkk.)

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "<kebab-case-slug>",
  "code": "PRO-XX // CL-XX",
  "title": "<Project Title>",
  "category": "code-learning",
  "categoryLabel": "Code Learning",
  "year": "<YYYY>",
  "status": "Completed",
  "accentColor": "orange",
  "repoUrl": "<https://github.com/... atau hapus field ini jika Private>",
  "license": "<MIT License atau hapus jika Private>",
  "imageUrl": "/images/projects/<nama_project>/banner.webp",
  "images": [
    "/images/projects/<nama_project>/banner.webp"
  ],
  "summary": "<1-2 kalimat ringkas tentang cakupan kurikulum & pendekatan praktik pemrograman>",
  "overview": "<400-500 karakter narasi teknis tentang progresivitas kurikulum, konsep inti, dan capstone praktik>",
  "projectDescription": "<400-500 karakter (selaras dengan overview)>",
  "codeLearningDescription": "<400-500 karakter khusus untuk Hero Console Section 1 Code Learning>",
  "challenge": "<Ringkasan tantangan pedagogis / kurva belajar konsep teknis yang diatasi>",
  "architectureSummary": "<Ringkasan progresi teori -> guided code labs -> test verification -> capstone>",
  "objectives": [
    "<Learning Objective 1>",
    "<Learning Objective 2>"
  ],
  "features": [
    {
      "title": "<Curriculum Feature / Lab Highlight>",
      "description": "<Penjelasan fitur materi>",
      "badge": "<Short Badge>"
    }
  ],
  "pipelineSteps": [
    {
      "step": "<Learning Stage>",
      "detail": "<Alur pembelajaran bertingkat>",
      "latencyOrMetric": "<Durasi atau jumlah unit>"
    }
  ],
  "evaluation": "<1 paragraf narasi mekanisme verifikasi pemahaman, unit test suite, dan capstone grading>",
  "outcomes": [
    "<Competency Outcome 1>",
    "<Competency Outcome 2>"
  ],
  "techStack": [
    "<Clean Language/Tool Tanpa Versi>"
  ],
  "telemetryMatrix": {
    "projectType": "<Max 45 chars>",
    "targetPlatform": "<Max 45 chars>",
    "primaryDomain": "<Max 45 chars>",
    "architecturePipeline": "<Max 45 chars>",
    "testingAndAudit": "Verified",
    "projectStatus": "Completed",
    "projectYear": "<YYYY>"
  },
  "codeLearningProjectInfo": {
    "learningCategory": "<Misal Algorithms & Systems Curriculum>",
    "difficultyLevel": "Beginner to Advanced",
    "learningFormat": "<Misal Self-Paced Code Modules & Labs>",
    "totalModules": "<Angka string akurat, misal 8 Modules>",
    "totalSubmodules": "<Angka string akurat, misal 32 Submodules>",
    "totalSourceCodeFiles": "<Angka string akurat, misal 64 Source Files>",
    "programmingLanguages": "<Clean Languages, misal Python & TypeScript>",
    "learningStatus": "Completed"
  },
  "codeLearningObjectives": [
    {
      "title": "<Objective Title>",
      "description": "<Kompetensi teknis yang dicapai pembelajar>",
      "competencyCode": "COMP_01"
    }
  ],
  "codeLearningPrerequisites": [
    {
      "category": "<Knowledge / Tooling Setup>",
      "items": ["<Prasyarat 1>", "<Prasyarat 2>"],
      "description": "<Penjelasan tingkat kesiapan awal yang dibutuhkan>"
    }
  ],
  "codeLearningCurriculumStructure": {
    "summary": "<Penjelasan desain kurikulum progresif dari dasar ke lanjutan>",
    "totalEstimatedHours": "<Estimasi total jam belajar>",
    "phases": [
      {
        "phaseNumber": "01",
        "phaseTitle": "<Phase Title>",
        "difficulty": "Beginner",
        "moduleRange": "Modules 01 - 03",
        "topics": ["<Topic 1>", "<Topic 2>"]
      }
    ]
  },
  "codeLearningModules": [
    {
      "id": "mod-01",
      "moduleNumber": "01",
      "title": "<Module Title>",
      "description": "<Deskripsi cakupan modul>",
      "submoduleCount": 2,
      "difficulty": "Beginner",
      "keyTopics": ["<Topic 1>", "<Topic 2>"],
      "sourceFilesCount": 2,
      "estimatedHours": "<Misal 4 Hours>",
      "submodules": [
        {
          "id": "mod-01-sub-01",
          "submoduleNumber": "01.1",
          "title": "<Submodule Title>",
          "description": "<Ringkasan subtopik & latihan>",
          "duration": "<Misal 45m>",
          "hasCode": true,
          "theoryContent": {
            "summary": "<Penjelasan konsep inti dari catatan/README modul>",
            "keyPoints": ["<Key Point 1>", "<Key Point 2>"],
            "conceptualSnippet": "<Potongan sintaks ringkas jika relevan>"
          },
          "sourceCodeFiles": [
            {
              "fileName": "<actual_file_name.py>",
              "language": "<python / typescript / cpp>",
              "code": "<Isi kode aktual dari direktori project>",
              "output": "<Output terminal/test aktual jika terverifikasi>"
            }
          ]
        }
      ]
    }
  ],
  "codeLearningTechStack": {
    "programmingLanguages": [
      {
        "name": "<Clean Language Tanpa Versi>",
        "role": "<Peran>"
      }
    ],
    "frameworksAndLibraries": [
      {
        "name": "<Clean Library/Test Framework Tanpa Versi>",
        "role": "<Peran>"
      }
    ],
    "developmentToolsAndEnvironment": [
      {
        "name": "<Clean IDE/CLI Tool Tanpa Versi>",
        "role": "<Peran>"
      }
    ]
  },
  "codeLearningPracticalProjects": [
    {
      "title": "<Capstone / Practical Lab Title>",
      "description": "<Deskripsi tantangan coding proyek mini/capstone>",
      "highlights": ["<Highlight 1>", "<Highlight 2>"],
      "coreScope": "<Ruang lingkup fungsional>",
      "trackTag": "<Misal Capstone Lab>",
      "tier": "<Core / Advanced>",
      "difficulty": "Intermediate",
      "estimatedTime": "<Estimasi durasi pengerjaan>",
      "scenario": "<Konteks skenario masalah dunia nyata>",
      "architecturalConstraints": ["<Batasan implementasi/kompleksitas>"],
      "acceptanceCriteria": ["<Kriteria lulus unit test>"]
    }
  ],
  "codeLearningOutcomes": [
    {
      "pillar": "<Competency Pillar, misal Algorithmic Problem Solving>",
      "skills": [
        {
          "title": "<Skill Title>",
          "description": "<Kemampuan praktis yang dikuasai setelah menuntaskan pilar ini>"
        }
      ]
    }
  ],
  "codeLearningCurriculumSpecs": {
    "curriculumTrack": "<Max 3-4 Kata Tanpa Underscore>",
    "primaryLanguage": "<Clean Language Tanpa Versi>",
    "executionRuntime": "<Clean Runtime Tanpa Versi>",
    "testVerification": "<Max 3-4 Kata Tanpa Underscore>"
  },
  "codeLearningSupplementaryResources": [
    {
      "title": "<Resource Group Title>",
      "description": "<Kegunaan referensi pendamping>",
      "resources": [
        {
          "name": "<Actual File / Cheatsheet Name>",
          "type": "<Cheatsheet / Reference Guide / Exercise Sheet>",
          "format": "<PDF / MD / IPYNB>"
        }
      ]
    }
  ]
}
```
````

---

## 5. Checklist Verifikasi Sebelum Menyimpan

- [ ] **Bahasa Output:** Seluruh teks data output 100% Bahasa Inggris profesional & teknis (tanpa bahasa Indonesia).
- [ ] Seluruh folder modul, submodul, silabus PDF/MD, source code aktual, test output, dan resource tambahan telah diperiksa.
- [ ] `category` = `"code-learning"`, `categoryLabel` = `"Code Learning"`, `accentColor` = `"orange"`.
- [ ] Setiap item `codeLearningModules[].difficulty` memakai **strictly** `"Beginner"`, `"Intermediate"`, atau `"Advanced"`.
- [ ] `codeLearningDescription`, `overview`, dan `projectDescription` berjumlah **400–500 karakter**; semua 7 nilai `telemetryMatrix` **maks 45 karakter**.
- [ ] **HANYA `banner.webp`** yang digunakan; tidak ada `image01.webp` maupun `imageUrl` di `codeLearningPracticalProjects`.
- [ ] `techStack[]`, `codeLearningTechStack`, dan `codeLearningCurriculumSpecs` **bebas nomor versi** dan tanda kurung; `codeLearningCurriculumSpecs` tanpa underscore (`_`).
- [ ] File `.md` berhasil disimpan di dalam **root direktori project yang dianalisis**.
