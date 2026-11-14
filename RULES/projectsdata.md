# Aturan Pengisian Data Project (`projectsData.ts`)

Dokumen ini merupakan panduan resmi dan aturan baku untuk pengisian, pembaruan, dan audit data seluruh project pada file [projectsData.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/projects/projectsData.ts) sesuai skema TypeScript di [types.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/types.ts).

> **Ruang Lingkup & Bahasa:**
> - File aturan ini fokus murni pada struktur data, format nilai, penamaan aset lokal, serta batasan panjang teks agar selaras dengan seluruh tampilan UI (`Section 1`–`Section 6`).
> - **Aturan Wajib Bahasa Output:** Seluruh data yang dihasilkan (output data project) baik pada file Markdown hasil analisis (`.md`) maupun saat diintegrasikan ke dalam [projectsData.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/projects/projectsData.ts) **WAJIB 100% menggunakan Bahasa Inggris profesional dan teknis (Professional Technical English)**. Mulai dari `summary`, `overview`, `challenge`, `features`, `objectives`, `pipelineSteps`, `outcomes`, penjelasan arsitektur, metodologi, temuan, hingga rekomendasi dan catatan teknis. Dilarang mencampurkan bahasa Indonesia di dalam nilai/properti data output.

---

## 1. Aturan Global & Identitas Project

Setiap objek `ProjectCaseStudy` di dalam `PROJECT_CASE_STUDIES` wajib memiliki properti identitas berikut:

| Field | Format / Aturan | Contoh |
| :--- | :--- | :--- |
| `id` | Slug *kebab-case* unik, huruf kecil, tanpa spasi/karakter khusus. | `"smart-inventory-operations-system"` |
| `code` | Urutan global + urutan per kategori: `"PRO-XX // PREFIX-YY"` (2 digit). | `"PRO-01 // WEB-01"` |
| `title` | Judul resmi project (Title Case, jelas dan ringkas). | `"Smart Inventory & Operations System"` |
| `category` | Salah satu dari 7 nilai `ProjectCategory` pada tabel pemetaan di bawah. | `"web-development"` |
| `categoryLabel` | Harus sama persis dengan tabel pemetaan kategori. | `"Web Development"` |
| `accentColor` | Harus sama persis dengan tabel pemetaan kategori. | `"cyan"` |
| `year` | Tahun rilis/selesai dalam string 4 digit. | `"2026"` |
| `status` | Status pengerjaan (misal `"Completed"`, `"Published"`, `"Production Ready"`). | `"Completed"` |
| `summary` | Ringkasan singkat 1–2 kalimat untuk preview kartu utama & meta SEO. | — |
| `repoUrl` | URL penuh GitHub jika **Public**. Kosongkan (`""` atau hapus properti) jika **Private**. | `"https://github.com/..."` |
| `license` | Isi `"MIT License"` (atau lisensi OSS terkait) jika Public; otomatis menjadi `"Proprietary Rights"` di UI jika Private. | `"MIT License"` |

### Tabel Pemetaan Wajib 7 Kategori

| `category` | `categoryLabel` | `accentColor` | Prefix `code` | Catatan Khusus |
| :--- | :--- | :--- | :--- | :--- |
| `"web-development"` | `"Web Development"` | `"cyan"` | `WEB-XX` | — |
| `"data-analysis"` | `"Data Analytics"` | `"emerald"` | `DA-XX` | — |
| `"ai-engineering"` | `"AI Engineering"` | `"purple"` | `AI-XX` | — |
| `"machine-learning"` | `"Machine Learning"` | `"indigo"` | `ML-XX` | — |
| `"desktop-mobile"` | `"Desktop & Mobile"` / `"Desktop App"` / `"Mobile App"` | `"amber"` | `APP-XX` | Nilai `category` tetap `"desktop-mobile"`. `categoryLabel` dinamis mendeteksi platform target: `"Mobile App"` jika aplikasi mobile (Android/iOS/Flutter mobile/React Native), `"Desktop App"` jika aplikasi desktop murni (Electron/Tauri/Qt/WPF/.NET), atau `"Desktop & Mobile"` jika cross-platform desktop sekaligus mobile. |
| `"ui-ux"` | `"UI/UX Design"` | `"rose"` | `UX-XX` | — |
| `"code-learning"` | `"Code Learning"` | `"orange"` | `CL-XX` | — |

### Aturan Status Repository (`repoUrl`)
- **Public Repository (`repoUrl` terisi):** UI otomatis menampilkan status `GITHUB REPOSITORY`, clearance `UNRESTRICTED`, dan tombol Section 6 Card 2 mengarah ke `${repoUrl}#readme`.
- **Private Repository (`repoUrl` kosong / tidak diisi):** UI otomatis menampilkan status `PRIVATE REPOSITORY`, clearance `RESTRICTED`, dan tombol terkunci (`RESTRICTED ACCESS`).

---

## 2. Aturan Aset Gambar Lokal (`public/images/projects/`)

Seluruh gambar project **wajib menggunakan aset lokal** berformat `.webp` yang ditempatkan di dalam subfolder masing-masing project. Dilarang memakai URL eksternal untuk project final.

### A. Penamaan Folder Project
Format folder: `public/images/projects/<nama_project>/`

**Aturan pembentukan `<nama_project>`:**
1. Ambil **maksimal 4 kata alfanumerik awal** dari `title` project.
2. Abaikan tanda baca/simbol pemisah (seperti `-`, `&`, `/`, `:`).
3. Ubah seluruh huruf menjadi **huruf kecil (`lowercase`)**.
4. Pisahkan setiap kata menggunakan **underscore (`_`)**.

- **Contoh:**
  - Judul: `Rasa Nusantara - Indonesian Culinary UMKM Showcase & Management`
  - 4 kata awal: `Rasa`, `Nusantara`, `Indonesian`, `Culinary`
  - Nama folder: `public/images/projects/rasa_nusantara_indonesian_culinary/`

### B. Penamaan File Gambar di Dalam Folder Project

| Kategori | File Wajib (Hero Section 1) | File Gambar Section Lanjutan (Section 3 / Section 5) |
| :--- | :--- | :--- |
| `web-development` | `banner.webp` | `image01.webp` s/d `imageXX.webp` |
| `ai-engineering` | `banner.webp` | `image01.webp` s/d `imageXX.webp` |
| `machine-learning` | `banner.webp` | `image01.webp` s/d `imageXX.webp` |
| `desktop-mobile` | `banner.webp` | `image01.webp` s/d `imageXX.webp` |
| `ui-ux` | `banner.webp` | `image01.webp` s/d `imageXX.webp` |
| `data-analysis` | `banner.webp` | `slide01.webp` s/d `slideXX.webp` |
| `code-learning` | `banner.webp` | *(Tidak ada gambar tambahan — hanya `banner.webp`)* |

**Aturan Path di `projectsData.ts`:**
- `imageUrl`: `"/images/projects/<nama_project>/banner.webp"`
- `images`: `["/images/projects/<nama_project>/banner.webp"]` (atau sertakan daftar path gambar showcase sesuai urutan jika dibutuhkan fallback galeri; untuk `code-learning` cukup `banner.webp`).

---

## 3. Aturan Section Universal (`Section 1`, `Section 4`, `Section 6`)

### A. Section 1 — Hero Console, System Telemetry Matrix, & Repo Card
1. **Deskripsi Utama (`overview` / `projectDescription` / `codeLearningDescription`):**
   - Panjang teks **wajib berada di rentang 400–490 karakter** (termasuk spasi) agar informatif dan tidak terpotong `...` oleh batas `.slice(0, 500)` di UI.
2. **System Telemetry Matrix (`telemetryMatrix`):**
   - Wajib mengisi seluruh **7 properti** berikut dengan panjang masing-masing **maksimal 45 karakter** (agar tidak terpotong elipsis di *Tactical Datapad*):
     - `projectType`: Jenis sistem/aplikasi.
     - `targetPlatform`: Platform atau lingkungan eksekusi.
     - `primaryDomain`: Domain utama masalah/industri.
     - `architecturePipeline`: Ringkasan alur arsitektur inti.
     - `testingAndAudit`: Status verifikasi/pengujian (contoh: `"Passed"`).
     - `projectStatus`: Status proyek (konsisten dengan `status`).
     - `projectYear`: Tahun proyek (konsisten dengan `year`).
3. **Capability Badges Strip (3 Badge di Bawah Deskripsi):**
   - Pada 6 kategori (`web-development`, `data-analysis`, `ai-engineering`, `desktop-mobile`, `ui-ux`, `code-learning`), badge bersifat statis di UI (tidak perlu diisi di data).
   - Khusus **`machine-learning`**, isi properti `mlProjectInfo.capabilityBadges` dengan **tepat 3 item**, masing-masing **maksimal 3 kata**.

### B. Section 4 — Tech Stack & Runtime Architecture
1. **Satu Field Standar Global:** Menggunakan satu field tunggal `techStack: string[]` yang seragam untuk **seluruh 7 kategori proyek**. Tidak lagi dikelompokkan ke dalam kategori atau field terpisah (`techStackCategorized`, `dataTechStack`, `aiTechStack`, `mlTechStack`, dll. sudah dihapus sepenuhnya).
2. **Format Nama Teknologi:** Wajib menggunakan **nama teknologi murni tanpa nomor versi dan tanpa keterangan dalam tanda kurung**.
   - Benar: `"Next.js"`, `"TypeScript"`, `"PostgreSQL"`, `"Python"`, `"C++"`, `"Tailwind CSS"`, `"FastAPI"`.
   - Salah: `"Next.js 16 App Router"`, `"Python 3.12"`, `"C++20 (Modern)"`, `"Electron 30"`.
3. **Jumlah Item:** **Bebas** menyesuaikan kompleksitas project (tidak ada batas minimal maupun maksimal).

### C. Section 6 — Repository, Technical Specs, & Quality/Platform Specs
Aturan umum Section 6 di semua kategori:
- **Card 1 (Repository):** Dikendalikan otomatis oleh `repoUrl`, `license`, dan `status`. Clearance teks otomatis menjadi `UNRESTRICTED` atau `RESTRICTED`.
- **Card 2 (Technical / Spec Card):** Hanya 1 ikon di kiri tombol. Link tombol otomatis menuju `${repoUrl}#readme` (jika Public) atau terkunci `RESTRICTED ACCESS` (jika Private). Nilai di dalam baris spec wajib bersih **tanpa nomor versi**.
- **Card 3 (Quality / Platform / Methodology Card):** Bersifat **teks/badge statis (tidak boleh clickable)**, tanpa ikon di badge penutup bawah, dan **dilarang memakai underscore (`_`)** pada label/nilai yang tampil (gunakan spasi).

Field khusus Section 6 per kategori:

| Kategori | Field Card 2 (`*TechSpecs` / Workspace) | Field Card 3 (Static Standards / Specs) |
| :--- | :--- | :--- |
| `web-development` | `primaryTechSpecs`: `{ programmingLanguage, framework, database }` *(baris ke-4 `"Vulnerability Hardened"` statis di UI)*. | `architectureQuality`: `{ badges: string[] }` — **wajib tepat 4 item**, maks 2–3 kata per item, tanpa underscore. |
| `data-analysis` | *(Statis di UI saat ini — gunakan `dataAnalyticsSupportingFiles` bila perlu daftar lampiran).* | `dataAnalyticsSupportingFiles`: daftar aset data/notebook/laporan pendukung. |
| `ai-engineering` | `aiTechSpecs`: `{ programmingLanguage, aiFramework, foundationModel }`. | Statis di UI (`aiEvaluationAndPerformance` dari Section 5 melengkapi konteks evaluasi). |
| `machine-learning` | Memakai `mlDatasetOverview` (`scale`, `inputShape`, `dataFormat`). | `mlMethodologySpecs`: `{ learningParadigm, modelArchitecture, coreFramework, validationMethod }` — maks 3–4 kata per nilai. |
| `desktop-mobile` | `desktopMobileTechSpecs`: `{ programmingLanguage, framework, localStorage }`. | `desktopMobilePlatformSpecs`: `{ targetPlatform, packageFormat, targetArchitecture, buildFootprint }` — maks 3–4 kata per nilai. |
| `ui-ux` | `uiUxDesignFile`: `{ fileStatus, totalFrames, componentsCount, handoffSpecs }`. | `uiUxSystemSpecs`: `{ layoutAndGrid, designTokens, typography, prototypeFidelity }` — maks 3–4 kata per nilai. |
| `code-learning` | `codeLearningCurriculumSpecs`: `{ curriculumTrack, primaryLanguage, executionRuntime, testVerification }`. | Mengambil ringkasan struktur & outcome kurikulum (statis di footer card). |

---

## 4. Aturan Spesifik Kategori (`Section 2`, `Section 3`, `Section 5`)

Untuk seluruh kategori berikut, **jumlah item (array length) di Section 2, 3, dan 5 bersifat bebas** sesuai kebutuhan project (tidak ada batas minimal/maksimal kecuali yang disebutkan eksplisit), namun **wajib mengikuti nama field canonical** dan **dilarang menduplikasi field legacy/non-canonical**.

### 1. Web Development (`web-development`)
- **Section 2 (Background & Objectives):**
  - `projectBackground`: `string` — narasi konteks bisnis/masalah teknis.
  - `problemStatements`: `{ title, description, issueCode? }[]`
  - `projectObjectives`: `{ title, description, targetTag? }[]`
- **Section 3 (Features & Interface):**
  - `interfaceShowcase`: `{ imageUrl, caption?, badge? }[]` — `imageUrl` wajib mengarah ke `/images/projects/<nama_project>/image01.webp` s/d `imageXX.webp`.
  - `coreFeatures`: `{ title, description, badge?, metric? }[]`
  - `userFlow`: `{ summary, steps: { step, title, description, actorOrNode? }[] }`
- **Section 5 (Architecture & Implementation):**
  - `systemArchitecture`: `{ summary, layers: { name, role, components: string[] }[] }`
  - `databaseDataFlow`: `{ type: "Database Schema / ERD" | "API & Data Flow", summary, entitiesOrPipelines: { name, type, fields: string[] }[] }`
  - `technicalImplementation`: `{ category, title, description, badge? }[]`

### 2. Data Analytics (`data-analysis`)
Wajib menggunakan 1 set field canonical berikut (jangan menulis field ganda non-prefiks seperti `keyFindings` / `presentationSlides` / `analyticalObjectives` di luar daftar ini):
- **Section 2 (Business Understanding & Objectives):**
  - `dataAnalyticsBusinessContext`: `string`
  - `dataAnalyticsAnalyticalObjectives`: `{ title, description, targetMetric?, targetTag? }[]`
- **Section 3 (Data Inspection, Preparation & Methodology):**
  - `dataAnalyticsDatasetOverview`: `{ dataSource, dataPeriod, recordsCount, featuresCount?, variablesCount?, dataTypes?, description }`
  - `dataAnalyticsDataPreparation`: `{ step, title, description, badge? }[]`
  - `analyticalMethodology`: `{ summary, methods: { name, description, badge? }[] }`
  - `analysisWorkflow`: `{ summary, steps: { stepNumber, title, description, phase? }[] }` — alur pipeline fleksibel dan dinamis (bebas tanpa batas minimal, maksimal 10 tahapan).
- **Section 5 (Presentation Slides, Key Findings & Recommendations):**
  - `dataAnalyticsPresentationSlides`: `{ slideNumber, title, imageUrl, caption? }[]` — `imageUrl` wajib mengarah ke `/images/projects/<nama_project>/slide01.webp` s/d `slideXX.webp`.
  - `dataAnalyticsKeyFindings`: `{ metricValue, metricLabel, title, description, impactTag? }[]` — `metricValue` wajib ringkas berupa 1 nilai/persentase utama (contoh: `"+28.4%"`, `"Rp 4.2M"`, `"0.94 AUC"`).
  - `recommendationsAndConclusion`: `{ recommendations: { title, action, priority: "HIGH" | "MEDIUM" | "STRATEGIC" }[], conclusion: string }` — nilai `priority` **wajib** salah satu dari `"HIGH"`, `"MEDIUM"`, atau `"STRATEGIC"`.

### 3. AI Engineering (`ai-engineering`)
- **Cakupan Universal Multi-Domain AI Engineering:**
  - Wajib mendukung **seluruh jenis dan variasi project AI Engineering secara universal**, tidak terbatas pada satu bentuk implementasi saja.
  - Termasuk namun tidak terbatas pada:
    - **Conversational & Support AI**: AI Chatbot, Customer Support Bot, Context-Aware Assistants.
    - **Retrieval & Knowledge Systems**: Retrieval-Augmented Generation (RAG), Graph RAG, Hybrid Search & Vector Pipelines.
    - **Autonomous & Collaborative Systems**: Agentic AI, Multi-Agent Collaboration, Autonomous Planning & Execution Loops.
    - **Tooling & Platform Capabilities**: AI Skills, MCP (Model Context Protocol) Servers & Tools, AI Tool Calling.
    - **Process & Workflow Engineering**: AI Workflow Automation, Enterprise Task Orchestration, Event-Driven AI Pipelines.
    - **Integrated Applications**: AI-Powered Web Applications, AI-Powered Mobile/Desktop Apps, Local AI/On-Device Inference Apps.
    - **Foundation Model Engineering**: LLM Applications, Prompt Engineering Harnesses, Small Language Model (SLM) Fine-Tuning & Distillation, Multimodal AI Systems (Vision, Voice, Audio, Code).
- **Section 2 (Problem & Strategic AI Architecture):**
  - `problemContext`: `string` (+ opsional `aiProblemBadge`, `aiProblemAuditNote`)
  - `proposedAiSolution`: `string` (+ opsional `aiSolutionBadge`, `aiSolutionSynthesisNote`)
  - `keyCapabilitiesAndUseCases`: `{ title, description, useCaseScenario, badge? }[]`
- **Section 3 (AI System Design & Workflow):**
  - `aiSystemArchitecture`: `{ summary, layers: { name, role, components: string[] }[] }`
  - `aiWorkflow`: `{ summary, workflowType, steps: { stepNumber, phase, title, description, actorOrTool? }[] }`
  - `coreAiComponents`: `{ name, type, description, badge? }[]`
- **Section 5 (System Showcase & Evaluation Benchmarks):**
  - **Heading & Subheading Static Universal:** Seluruh header Section 5 AI Engineering bersifat static universal pada template (Heading Utama: `[ 05 // SYSTEM SHOWCASE & EVALUATION BENCHMARKS ]`, Tag: `RUNTIME_TELEMETRY // QUALITY_ASSURANCE`). Seluruh varian sistem AI (AI Skill, Automation, RAG, Chatbot, Agentic AI, AI-powered Website, AI-powered App) diwadahi secara dinamis melalui data:
  - `aiVisualShowcase`: `{ title?, badge?, imageUrl, caption?, highlights?: string[] }[]` — UI merender `title`, `badge`, dan `imageUrl` (`/images/projects/<nama_project>/image01.webp` s/d `imageXX.webp`).
  - `aiExecutionTelemetry`: `{ scenarioTitle, scenarioBadge?, scenarioDescription?, triggerInput, processingPipeline, executionOutput, metrics?: { label, value }[], evaluationNote? }` — Sub-block label bersifat static universal pada template (Input: `> TRIGGER_INPUT // USER_EVENT` [Tag: `EVENT_IN`], Pipeline: `PIPELINE:` [Tag: `PROCESSING`], Output: `SYSTEM_RESPONSE // SYNTHESIS` [Tag: `VERIFIED`], Chips: `RUNTIME TELEMETRY CHIPS:`). UI menampilkan maksimal **3 chip** pertama dari `metrics`.
  - `aiEvaluationAndPerformance`: **wajib diisi** — `{ metrics?: { label, value, benchmark?, pass?: boolean }[], qualitativeEvaluation, auditNote? }`:
    - Subheading Card 3 (`[ EMPIRICAL_EVALUATION & SYSTEM_BENCHMARKS ]`) dan badge pojok kanan (`EVALUATION_SUITE`) bersifat static universal pada template.
    - Berlaku universal untuk seluruh jenis project AI Engineering: jika project berupa sistem berbasis alur/kualitatif (misal AI Skill, Agentic Workflow, Chatbot, atau AI-Powered App) tanpa metrik benchmark numerik, array `metrics` boleh dikosongkan (`[]`) atau diisi indikator keandalan/perilaku terverifikasi, sementara evaluasi performa diuraikan mendalam pada `qualitativeEvaluation`.
  - `limitationsAndImprovements`: **wajib diisi** — `{ limitations: { title, description, severity?: "LOW" | "MEDIUM" | "HIGH" }[], improvementsRoadmap: { title, target? }[], summary?, alignmentNote? }`:
    - Subheading Card 4 (`[ OPERATIONAL_CONSTRAINTS & FUTURE ROADMAP ]`), badge pojok kanan (`GUARDRAILS & TRANSPARENCY`), serta sub-block (`ROADMAP & NEXT ITERATION`) bersifat static universal pada template. UI merender `title` (dan opsional `target`) pada roadmap tanpa kuartal/tahun; nilai `severity` **wajib** `"LOW"`, `"MEDIUM"`, atau `"HIGH"`.

### 4. Machine Learning (`machine-learning`)
- **Cakupan Universal Multi-Domain Machine Learning:**
  - Wajib mendukung **seluruh paradigma, modalitas, dan jenis project Machine Learning secara universal**, tidak terbatas pada satu bentuk data atau algoritma saja.
  - Termasuk namun tidak terbatas pada:
    - **Supervised & Unsupervised Learning**: Tabular Regression & Classification, Clustering, Anomaly Detection, Dimensionality Reduction, Time Series Forecasting, Ensemble Methods (Gradient Boosting, Random Forest).
    - **Reinforcement Learning (RL)**: Policy Gradient, Q-Learning, PPO, Deep Q-Networks (DQN), Multi-Agent RL, Simulation-based Decision Agents, Physics & Kinematics Control Environments.
    - **Deep Learning**: Multi-Layer Perceptrons (MLP), Convolutional Neural Networks (CNN), Recurrent & Sequential Networks (LSTM, GRU), Transformer Encoders/Decoders, Autoencoders, GANs, Diffusion Models.
    - **Computer Vision (CV)**: Image Classification, Object Detection, Semantic/Instance Segmentation, Feature Extraction, Video Tracking, Optical Character Recognition (OCR), 3D Reconstruction.
    - **Natural Language Processing & Speech**: Text Classification, Sentiment Analysis, Named Entity Recognition (NER), Word/Sentence Embeddings, Speech Recognition, Audio Signal Classification.
    - **Scientific & Numerical Simulations**: Physics-Informed Neural Networks (PINN), Numerical Optimization, Computational Mechanics & Particle Systems, Biomolecular / Chemical Modeling.
- **Skema Canonical Universal (Tanpa Field Legacy):**
  - Wajib memakai skema canonical universal berikut (hindari field legacy seperti `targetVariable`, `inputFeatures`, `lossFunction`, `optimizer`, `topPredictors`):
- **Section 2 (Problem & Dataset / Environment Profile):**
  - `mlProblemContext`: `string`
  - `mlDatasetOverview`: `{ profileBadge?, source, modality, scale, inputShape, dataFormat, description, provenanceNote? }`
  - `mlFeaturesAndDataCharacteristics`: `{ spaceBadge?, spaceNote?, objectiveOutput: { label?, name, type, distribution? }, inputSignals: { name, type, importanceOrRole?, description }[], dataCharacteristicsSummary? }`
- **Section 3 (Algorithmic Methodology & Training Architecture):**
  - `mlLearningApproach`: `{ paradigm, methodologyDescription, justification }`
  - `mlDataPreparation`: `{ step, title, description, badge? }[]` (+ opsional `mlDataPreparationNote`)
  - `mlModelArchitectureAndTraining`: `{ algorithmName, architectureSummary, configurationBadge?, hyperparameters: { name, value, description? }[], objectiveCriterion, optimizationSolver, trainingProcess }`
- **Section 5 (Model Evaluation, Visual Diagnostics & Interpretation):**
  - `mlEvaluationStrategy`: `{ validationMethod, description, metrics?: { label, value, benchmark?, pass?: boolean }[] }`
    - **Heading & Subheading Static Universal:** Seluruh header Section 5 Machine Learning bersifat static universal pada template (Heading Utama: `[ 05 // MODEL EVALUATION & PERFORMANCE BENCHMARKS ]`, Tag: `EMPIRICAL_BENCHMARKS // DIAGNOSTICS // ERROR_ANALYSIS`, Card 1: `[ EVALUATION_STRATEGY // BENCHMARK_PROTOCOL ]`). Fleksibilitas untuk seluruh jenis project ML (Supervised, Unsupervised, Reinforcement Learning, Deep Learning, Computer Vision, maupun Simulasi Numerik) diwadahi secara dinamis melalui isi konten:
      - `validationMethod`: Metode validasi empiris aktual (misal `"Stratified 5-Fold Cross-Validation"`, `"Silhouette Analysis & Elbow Criterion"`, `"Offline Policy Evaluation (OPE)"`, `"Analytical Benchmark Validation & Conservation Invariant Tests"`).
      - `description`: Uraian naratif metodologi dan evaluasi performa model.
      - `metrics` (opsional): Boleh dikosongkan (`[]` atau tidak diisi) jika project tidak menghasilkan metrik evaluasi kuantitatif, **atau** diisi indikator observasi/perilaku terverifikasi (`value` ringkas agar tidak terpotong `.truncate`, maks ~10–12 karakter).
  - `mlPerformanceVisualizations`: `{ title, badge, imageUrl?, caption?, telemetryNote?, tableData?: { metric, trainingScore, validationScore }[] }[]` — jika menggunakan gambar, `imageUrl` wajib `/images/projects/<nama_project>/image01.webp` s/d `imageXX.webp`.
  - `mlModelInterpretationAndLimitations`: `{ interpretationSummary, keyDrivers: { factor, impact }[], limitations: { title, description }[], futureImprovements: { title, target }[], discoveryNote? }`
    - Subheading Card 3 (`[ MODEL_INTERPRETATION & ERROR ANALYSIS ]`), badge pojok kanan (`DIAGNOSTIC INSIGHTS`), serta sub-block header (`KEY MODEL DRIVERS & BEHAVIORAL INSIGHTS`, `MODEL LIMITATIONS`, `FUTURE IMPROVEMENTS ROADMAP`) bersifat static universal pada template.
    - Yang diisi dan dikustomisasi pada data adalah isi array `keyDrivers` (faktor pendorong/feature importance), `limitations`, `futureImprovements`, dan `discoveryNote`.

### 5. Desktop & Mobile App (`desktop-mobile`)
- **Deteksi Platform Otomatis (`categoryLabel`):**
  - Nilai `category` **wajib selalu `"desktop-mobile"`**.
  - Nilai `categoryLabel` **wajib ditentukan secara dinamis** berdasarkan hasil inspeksi direktori project:
    - Gunakan **`"Mobile App"`** jika project murni aplikasi mobile (Android, iOS, Flutter Mobile, React Native Mobile, Kotlin, Swift, dsb.).
    - Gunakan **`"Desktop App"`** jika project murni aplikasi desktop (Electron, Tauri, C#/.NET WPF/WinForms, Qt/C++, Python Desktop, dsb.).
    - Gunakan **`"Desktop & Mobile"`** jika project mendukung kedua platform sekaligus (*cross-platform* desktop dan mobile).
- **Format Objek Terstruktur:** Wajib menggunakan format objek terstruktur dengan prefiks `desktopMobile*` (hindari format campuran `string[]` polos pada objectives/userFlow):
- **Section 2 (Background & Objectives):**
  - `desktopMobileBackground`: `string`
  - `desktopMobileProblemStatements`: `{ title, description, issueCode? }[]`
  - `desktopMobileObjectives`: `{ title, description, targetTag? }[]`
- **Section 3 (Features & Showcase):**
  - `desktopMobileFeatures`: `{ title, description, badge?, metric? }[]`
  - `desktopMobileInterfaceShowcase`: `{ imageUrl, caption?, badge? }[]` — `imageUrl` wajib `/images/projects/<nama_project>/image01.webp` s/d `imageXX.webp`.
  - `desktopMobileUserFlow`: `{ summary, steps: { step, title, description, actorOrNode? }[] }`
- **Section 5 (Client Architecture & Platform Integration):**
  - `desktopMobileArchitecture`: `{ summary, layers: { name, role, tech?, components?: string[] }[] }`
  - `desktopMobileDataManagement`: objek 4 pilar (`{ storageType, stateEngine, offlineSyncStrategy, cachingMechanism }`) atau array `{ title, description, badge? }[]`.
  - `desktopMobilePlatformImplementation`: `{ title, description, badge? }[]`

### 6. UI/UX Design (`ui-ux`)
- **Section 2 (Research Discovery & User Personas):**
  - `uiUxBackground`: `string`
  - `uiUxUserResearch`: `{ targetAudience, researchMethodology, keyFindings: { method, description, keyFinding, badge? }[] }`
  - `uiUxPersonas`: array objek persona (`name`, `role`, `demographics?`, `goals`, `painPoints`, `quote?`).
- **Section 3 (Information Architecture & User Interaction Flow):**
  - `uiUxInformationArchitecture`: `{ summary, nodes: { section, screens: string[] }[] }`
  - `uiUxUserFlow`: `{ summary, steps: { step, title, description, screenOrAction? }[] }`
- **Section 5 (Hi-Fi Interface, Design System & Usability Validation):**
  - `uiUxVisualShowcase`: `{ title?, imageUrl, caption?, badge?, stage? }[]` — `imageUrl` wajib `/images/projects/<nama_project>/image01.webp` s/d `imageXX.webp`.
  - `uiUxDesignSystem`: `{ colorPalette: { name, hex, role?, usage? }[], typography: { name, font?, sizeWeight?, role?, usage? }[], componentStates?: { component, states: string[], notes }[] }` — setiap nilai `hex` **wajib format kode hex valid** (contoh: `"#0EA5E9"`).
  - `uiUxUsabilityValidation`: `{ testingMethod?, participantsCount?, susScore?, taskSuccessRate?, timeOnTask?, feedbackSynthesis?, iterations: { usabilityIssue, iterationSolution, impact }[] }`

### 7. Code Learning (`code-learning`)
- **Section 2 (Learning Roadmap & Curriculum Blueprint):**
  - `codeLearningObjectives`: `{ title, description, competencyCode? }[]`
  - `codeLearningPrerequisites`: `{ category, items: string[], description }[]`
  - `codeLearningCurriculumStructure`: `{ summary, totalEstimatedHours?, phases: { phaseNumber, phaseTitle, difficulty, moduleRange, topics: string[] }[] }`
- **Section 3 (Curriculum Modules & Topic Architecture):**
  - `codeLearningModules`: array modul belajar dengan field:
    - `id`, `moduleNumber`, `title`, `description`, `submoduleCount`, `difficulty`, `keyTopics?`, `sourceFilesCount?`, `estimatedHours?`.
    - `difficulty`: **Wajib bernilai persis salah satu dari `"Beginner"`, `"Intermediate"`, atau `"Advanced"`** (*case-sensitive*) agar fitur tab filter modul UI menghitung dan menyaring dengan benar.
- **Section 5 (Practical Projects & Learning Outcomes):**
  - `codeLearningPracticalProjects`: `{ title, description, highlights?, coreScope?, trackTag?, tier?, difficulty?, estimatedTime?, scenario?, architecturalConstraints?, acceptanceCriteria? }[]` — **dilarang menyertakan `imageUrl` tambahan** karena kategori Code Learning hanya memakai `banner.webp`.
  - `codeLearningOutcomes`: `{ pillar, skills: { title, description }[] }[]`

---

## 5. Checklist Audit Sebelum Simpan

Sebelum menyimpan perubahan ke `src/data/projects/projectsData.ts`, pastikan seluruh poin berikut lolos pemeriksaan:

1. **Identitas & Pemetaan Kategori:** `id` unik, `code` urut (`PRO-XX // PREFIX-YY`), serta `category`, `categoryLabel`, dan `accentColor` cocok dengan tabel pemetaan.
2. **Kepatuhan Penuh Bahasa Inggris:** Seluruh teks output data project (`summary`, `overview`, deskripsi fitur, alur arsitektur, metrik, catatan audit, rekomendasi, dll.) **WAJIB 100% menggunakan Bahasa Inggris profesional & teknis**.
3. **Aset Lokal `.webp`:** Folder `public/images/projects/<nama_project>/` menggunakan maksimal 4 kata awal huruf kecil dipisah `_`; terdapat `banner.webp`, serta file lanjutan (`image01-XX.webp` / `slide01-XX.webp`, khusus `code-learning` hanya `banner.webp`).
4. **Batas Karakter Section 1:** Narasi `overview` / `projectDescription` / `codeLearningDescription` sepanjang **400–490 karakter**; seluruh 7 nilai `telemetryMatrix` **maksimal 45 karakter**; `mlProjectInfo.capabilityBadges` tepat **3 item** (maks 3 kata).
5. **Tech Stack Section 4:** Satu field tunggal `techStack: string[]` murni nama teknologi **tanpa pengelompokan category, tanpa nomor versi, atau tanda kurung**.
6. **Section 6 Cleanliness:** Card 2 `*TechSpecs` bebas nomor versi; Card 3 `architectureQuality.badges` (Web Dev) tepat 4 item dan **bebas underscore (`_`)** di semua kategori.
7. **Enum & Format Ketat:**
   - Data Analytics `priority`: `"HIGH" | "MEDIUM" | "STRATEGIC"`
   - AI Engineering `severity`: `"LOW" | "MEDIUM" | "HIGH"`
   - UI/UX Design `hex`: format `#RRGGBB`
   - Code Learning `difficulty`: `"Beginner" | "Intermediate" | "Advanced"`
8. **Verifikasi TypeScript:** Jalankan `npx tsc --noEmit` dan pastikan exit code `0` tanpa error tipe data.
