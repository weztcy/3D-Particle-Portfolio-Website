---
name: portfolio-ai-engineering
description: >-
  Audits an AI Engineering project directory comprehensively (LLM/agent source code, prompt templates, RAG/vector store pipelines, RAGAS/TruLens/eval logs, guardrail specs, architecture diagrams, screenshots, docs, and media) and generates a complete portfolio ProjectCaseStudy Markdown (.md) file compliant with RULES/projectsdata.md and src/data/types.ts. Save the generated .md file inside the analyzed project directory.
---

# AI Engineering Portfolio Data Generator (`portfolio-ai-engineering`)

Skill ini mengaudit sebuah direktori project **AI Engineering** secara menyeluruh lintas format file, mengekstrak bukti arsitektur sistem AI & evaluasi terukur, dan menghasilkan file Markdown (`.md`) berisi data `ProjectCaseStudy` yang siap dimasukkan ke `src/data/projects/projectsData.ts`.

---

## 1. Identitas & Konstanta Kategori

- **Category (`category`)**: `"ai-engineering"`
- **Category Label (`categoryLabel`)**: `"AI Engineering"`
- **Accent Color (`accentColor`)**: `"purple"`
- **Code Format (`code`)**: `"PRO-XX // AI-XX"`
- **Bahasa Output Wajib**: **100% Bahasa Inggris Profesional & Teknis (Professional Technical English)**. Seluruh nilai properti data (`summary`, `overview`, `challenge`, deskripsi fitur, arsitektur, metrik, catatan audit, rekomendasi, dll.) wajib berbahasa Inggris tanpa mencampurkan bahasa Indonesia.
- **Cakupan Universal Multi-Domain AI Engineering**:
  - Skill ini **wajib mendukung seluruh jenis dan variasi project AI Engineering secara universal**, tidak terbatas pada satu bentuk pipeline tertentu.
  - Mencakup (namun tidak terbatas pada):
    1. **Conversational & Interactive AI**: AI Chatbot, Multi-Turn Assistant, Context-Aware Customer Copilot.
    2. **Retrieval & Knowledge Systems**: RAG (Naive, Advanced, Modular, Graph RAG), Hybrid Dense/Sparse Retrieval, Vector Databases & Knowledge Repositories.
    3. **Agentic & Autonomous Systems**: Agentic AI, Multi-Agent Collaboration, Hierarchical Agent Teams, Autonomous Task Planners & Executors.
    4. **Extensibility & Tooling**: AI Skills, Model Context Protocol (MCP) Tools/Servers, Custom Function Calling & External API Action Suites.
    5. **Automation & Workflows**: AI-Driven Process Automation, Event-Driven AI Pipelines, Automated Decision Engines.
    6. **Integrated Applications**: AI-Powered Web Applications, AI-Powered Mobile/Desktop Apps, Local / Edge AI Inference Apps.
    7. **Foundation Model Applications**: LLM/SLM Applications, Prompt Engineering Harnesses, Structured Output Pipelines, Distillation, Fine-Tuning & Multi-Modal Engines (Vision, Audio, Code).
    8. *Serta segala arsitektur AI modern lainnya yang mengintegrasikan model cerdas ke dalam sistem perangkat lunak.*

---

## 2. Protokol Audit Direktori Menyeluruh (Multi-Format)

Sebelum mengisi field apa pun, inspeksi **seluruh isi direktori project** (jangan hanya script inferensi):

1. **Orkestrasi AI, Agent, & RAG Pipeline**:
   - Kode LLM orchestration (LangGraph, LangChain, LlamaIndex, CrewAI, AutoGen, OpenAI/Gemini/Anthropic SDK), tool calling schemas, MCP integrations, prompt templates (`.txt`, `.yaml`, `.jinja`), dan vector index/chunking scripts.
   - Pahami apakah alurnya berupa Multi-Agent State Graph, Hybrid RAG, Multimodal Pipeline, atau Real-time Voice/Vision Agent (`workflowType` & `aiSystemArchitecture`).
2. **Konfigurasi Model, Vector Store, & Infrastruktur**:
   - `requirements.txt`, `pyproject.toml`, `package.json`, `Dockerfile`, `.env.example`, config embedding model, reranker, guardrail policies, dan caching layer.
   - Pisahkan teknologi secara bersih ke `aiModelsAndServices`, `frameworksAndLibraries`, serta `developmentAndInfrastructure`.
3. **Log Evaluasi, Benchmark, & Guardrails**:
   - Hasil evaluasi otomatis (RAGAS, TruLens, DeepEval, Promptfoo, JSON/CSV eval reports), benchmark latency/throughput/token cost, test cases adversarial, serta dokumentasi limitasi sistem.
   - Ekstrak data terverifikasi untuk **`aiExecutionTelemetry`**, **`aiEvaluationAndPerformance`** (WAJIB diisi), dan **`limitationsAndImprovements`** (WAJIB diisi).
4. **Dokumen, Whitepaper, Diagram, & Screenshot**:
   - `README.md`, whitepaper `.pdf`, slide `.pptx`, diagram arsitektur, screenshot UI/CLI, serta rekaman demo.
   - Ekstrak alur eksekusi skenario nyata (`aiExecutionTelemetry`) dan poin showcase (`aiVisualShowcase`).

> **Aturan Kejujuran Data:** Dilarang keras mengarang skor faithfulness, latency, hallucination rate, atau nama foundation model yang tidak ada buktinya di kode, config, log evaluasi, atau dokumentasi project.

---

## 3. Aturan Wajib Pengisian (`RULES/projectsdata.md`)

1. **Aset Gambar Lokal**:
   - Folder target portofolio: `/images/projects/<nama_project>/`
   - Pembentukan `<nama_project>`: ambil **maksimal 4 kata alfanumerik awal** dari `title`, ubah ke `lowercase`, pisahkan dengan `_`, abaikan tanda baca (`-`, `&`, `/`, `:`).
   - `imageUrl` & `images[0]`: `"/images/projects/<nama_project>/banner.webp"` (Hero Section 1).
   - `aiVisualShowcase[].imageUrl`: `"/images/projects/<nama_project>/image01.webp"`, `image02.webp`, dst. (2 digit *zero-padded*).
2. **Section 1 (Hero Console & Telemetry)**:
   - `overview` dan `projectDescription`: **400–500 karakter** (termasuk spasi) agar tidak terpotong `.slice(0, 500)`.
   - `telemetryMatrix`: wajib isi **7 field**, masing-masing **maksimal 45 karakter**.
   - Repository: isi `repoUrl` & `license` jika Public; hapus/kosongkan `repoUrl` & `license` jika Private.
3. **Section 2, 3, & 5 (Kritikal & Static Universal Section 5 AI Engineering)**:
   - **`aiEvaluationAndPerformance` dan `limitationsAndImprovements` WAJIB terisi lengkap** pada Section 5 karena `AIEngineeringDetailView.tsx` merendernya langsung sebagai dua panel bawah Section 5.
   - **Heading & Subheading Static Universal Section 5**:
     - Heading Utama Section 5: `[ 05 // SYSTEM SHOWCASE & EVALUATION BENCHMARKS ]` (Tag Kanan: `RUNTIME_TELEMETRY // QUALITY_ASSURANCE`).
     - Card 2 (`aiExecutionTelemetry`): Sub-block label bersifat static universal (Input: `> TRIGGER_INPUT // USER_EVENT` [Tag: `EVENT_IN`], Pipeline: `PIPELINE:` [Tag: `PROCESSING`], Output: `SYSTEM_RESPONSE // SYNTHESIS` [Tag: `VERIFIED`], Chips: `RUNTIME TELEMETRY CHIPS:`). Field data murni konten: `scenarioTitle`, `scenarioBadge?`, `scenarioDescription?`, `triggerInput`, `processingPipeline`, `executionOutput`, `metrics?`, `evaluationNote?`.
     - Card 3 (`aiEvaluationAndPerformance`): Subheading Card 3 (`[ EMPIRICAL_EVALUATION & SYSTEM_BENCHMARKS ]`) dan badge pojok kanan (`EVALUATION_SUITE`) bersifat static universal pada template. Berlaku universal untuk seluruh jenis project AI (AI Skill, Automation, RAG, Chatbot, Agentic AI, AI-powered Website, AI-powered App). Jika project non-angka/kualitatif, array `metrics` boleh dikosongkan (`[]`) atau diisi indikator verifikasi perilaku/keandalan sistem, sedangkan evaluasi mendalam diuraikan pada `qualitativeEvaluation`.
     - Card 4 (`limitationsAndImprovements`): Subheading Card 4 (`[ OPERATIONAL_CONSTRAINTS & FUTURE ROADMAP ]`), badge pojok kanan (`GUARDRAILS & TRANSPARENCY`), serta sub-block (`ROADMAP & NEXT ITERATION`) bersifat static universal pada template.
   - `severity` pada `limitations` hanya boleh `"LOW"`, `"MEDIUM"`, atau `"HIGH"`.
   - `aiExecutionTelemetry.metrics`: isi maksimal 3 chip ringkas (UI menampilkan maksimal 3 chip teratas).
   - Jumlah item array di Section 2, 3, & 5 **bebas** sesuai bukti nyata.
4. **Section 4 (`techStack` & `aiTechStack`)**:
   - Wajib nama teknologi murni **tanpa nomor versi dan tanpa tanda kurung** (contoh: `"Python"`, `"LangGraph"`, `"Qdrant"`, `"OpenAI GPT"`, `"FastAPI"`, BUKAN `"GPT-4o (2024)"` atau `"LangChain v0.3"`).
5. **Section 6 (`aiTechSpecs`)**:
   - `aiTechSpecs`: `{ programmingLanguage, aiFramework, foundationModel }` — wajib bersih tanpa nomor versi.
   - Hindari underscore (`_`) pada badge/status label agar tampilan UI konsisten.

---

## 4. Template Output Markdown (`.md`)

Simpan hasil analisis sebagai file Markdown di **dalam root direktori project yang sedang dianalisis** dengan nama `<project-id>.md` (mengikuti nilai `id` slug, contoh: `synapse-multi-agent-rag-orchestrator.md`).

Isi file `<project-id>.md` harus mengikuti struktur berikut secara lengkap:

````markdown
# Portfolio Project Data — <Project Title>

- **Category:** `ai-engineering` (`AI Engineering`)
- **Accent Color:** `purple`
- **Target Assets Folder:** `public/images/projects/<nama_project>/`
- **Required Local Images:** `banner.webp`, `image01.webp` .. `imageXX.webp`

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "<kebab-case-slug>",
  "code": "PRO-XX // AI-XX",
  "title": "<Project Title>",
  "category": "ai-engineering",
  "categoryLabel": "AI Engineering",
  "year": "<YYYY>",
  "status": "Completed",
  "accentColor": "purple",
  "repoUrl": "<https://github.com/... atau hapus field ini jika Private>",
  "license": "<MIT License atau hapus jika Private>",
  "imageUrl": "/images/projects/<nama_project>/banner.webp",
  "images": [
    "/images/projects/<nama_project>/banner.webp"
  ],
  "summary": "<1-2 kalimat ringkas tentang tantangan rekayasa AI & arsitektur solusi>",
  "overview": "<400-500 karakter narasi teknis tentang orkestrasi AI, pipeline inferensi, dan hasil evaluasi>",
  "projectDescription": "<400-500 karakter (selaras dengan overview) untuk Hero Console Section 1>",
  "challenge": "<Ringkasan tantangan akurasi/hallucination/latensi/konteks>",
  "architectureSummary": "<Ringkasan alur orkestrasi model, retrieval/tools, dan guardrails>",
  "objectives": [
    "<AI Engineering Objective 1>",
    "<AI Engineering Objective 2>"
  ],
  "features": [
    {
      "title": "<AI Capability Title>",
      "description": "<Deskripsi mekanisme teknis>",
      "badge": "<Short Badge>"
    }
  ],
  "pipelineSteps": [
    {
      "step": "<Pipeline Step>",
      "detail": "<Transformasi prompt/retrieval/reasoning/verifikasi>",
      "latencyOrMetric": "<Latensi atau metrik tahap>"
    }
  ],
  "evaluation": "<1 paragraf narasi hasil pengujian evaluasi kuantitatif & adversarial testing>",
  "outcomes": [
    "<Verified AI Performance Outcome 1>",
    "<Verified AI Performance Outcome 2>"
  ],
  "techStack": [
    "<Clean Tech Name Tanpa Versi>"
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
  "aiEngineeringProjectInfo": {
    "projectType": "<Jenis Sistem AI, misal Agentic RAG Orchestrator>",
    "projectStatus": "Completed",
    "developmentYear": "<YYYY>",
    "aiDomain": "<Domain AI, misal Enterprise Knowledge Retrieval>",
    "projectCategory": "AI Engineering"
  },
  "problemContext": "<Paragraf mendalam tentang keterbatasan sistem konvensional/LLM mentah yang diselesaikan>",
  "aiProblemBadge": "<Short Problem Context Badge>",
  "aiProblemAuditNote": "<Catatan audit singkat sumber akar masalah>",
  "proposedAiSolution": "<Paragraf penjelasan pendekatan AI Engineering yang dibangun>",
  "aiSolutionBadge": "<Short Solution Badge>",
  "aiSolutionSynthesisNote": "<Catatan teknis ringkas mengapa arsitektur ini dipilih>",
  "keyCapabilitiesAndUseCases": [
    {
      "title": "<Capability Title>",
      "description": "<Penjelasan cara kerja kapabilitas>",
      "useCaseScenario": "<Contoh skenario penggunaan nyata>",
      "badge": "<Short Tag>"
    }
  ],
  "aiSystemArchitecture": {
    "summary": "<Penjelasan topologi menyeluruh sistem AI>",
    "layers": [
      {
        "name": "<Layer Name, misal Retrieval & Reranking Layer>",
        "role": "<Tanggung jawab layer>",
        "components": ["<Component 1>", "<Component 2>"]
      }
    ]
  },
  "aiWorkflow": {
    "summary": "<Ringkasan mekanisme eksekusi/state graph>",
    "workflowType": "<Misal Multi-Agent Cyclic Graph>",
    "steps": [
      {
        "stepNumber": "01",
        "phase": "<Phase>",
        "title": "<Step Title>",
        "description": "<Proses input, reasoning, tool call, atau guardrails>",
        "actorOrTool": "<Agent / Retriever / Guardrail>"
      }
    ]
  },
  "coreAiComponents": [
    {
      "name": "<Component Name>",
      "type": "<Orchestrator / Vector Store / Guardrail / Evaluator>",
      "description": "<Peran teknis komponen di pipeline>",
      "badge": "<Short Badge>"
    }
  ],
  "aiTechStack": {
    "aiModelsAndServices": [
      {
        "name": "<Clean Model/API Name Tanpa Versi>",
        "role": "<Peran spesifik>"
      }
    ],
    "frameworksAndLibraries": [
      {
        "name": "<Clean Framework Name Tanpa Versi>",
        "role": "<Peran spesifik>"
      }
    ],
    "developmentAndInfrastructure": [
      {
        "name": "<Clean Infra/DB/Tool Name Tanpa Versi>",
        "role": "<Peran spesifik>"
      }
    ]
  },
  "aiVisualShowcase": [
    {
      "title": "<Showcase Title>",
      "badge": "<Short Badge>",
      "imageUrl": "/images/projects/<nama_project>/image01.webp",
      "caption": "<Deskripsi visual antarmuka, trace, atau arsitektur>",
      "highlights": [
        "<Highlight 1>",
        "<Highlight 2>"
      ]
    }
  ],
  "aiExecutionTelemetry": {
    "scenarioTitle": "<Judul Skenario Eksekusi Nyata>",
    "scenarioBadge": "<Short Scenario Badge>",
    "scenarioDescription": "<Konteks skenario uji coba / workflow>",
    "triggerInput": "<Contoh input/query/trigger nyata ke sistem>",
    "processingPipeline": "<Ringkasan langkah pemrosesan agent/retrieval/automation>",
    "executionOutput": "<Output terstruktur/terverifikasi yang dihasilkan sistem>",
    "metrics": [
      {
        "label": "<Signal / Metric Label 1>",
        "value": "<Verified Value 1>"
      },
      {
        "label": "<Signal / Metric Label 2>",
        "value": "<Verified Value 2>"
      },
      {
        "label": "<Signal / Metric Label 3>",
        "value": "<Verified Value 3>"
      }
    ],
    "evaluationNote": "<Catatan telemetri singkat>"
  },
  "aiEvaluationAndPerformance": {
    "metrics": [
      {
        "label": "<Metric atau Reliability Indicator Name>",
        "value": "<Verified Score / Indicator>",
        "benchmark": "<Target Baseline / Operating Bound>",
        "pass": true
      }
    ],
    "qualitativeEvaluation": "<Narasi evaluasi kualitas output, keandalan eksekusi, dan penanganan edge case>",
    "auditNote": "<Catatan cakupan test suite/verifikasi sistem>"
  },
  "limitationsAndImprovements": {
    "limitations": [
      {
        "title": "<Operational Constraint Title>",
        "description": "<Penjelasan jujur mengenai batasan sistem atau trade-off>",
        "severity": "MEDIUM"
      }
    ],
    "improvementsRoadmap": [
      {
        "title": "<Planned Enhancement Title>",
        "target": "<Dampak peningkatan yang dituju>"
      }
    ],
    "alignmentNote": "<Catatan kepatuhan privasi, keamanan, atau Responsible AI>"
  },
  "aiTechSpecs": {
    "programmingLanguage": "<Clean Language Tanpa Versi>",
    "aiFramework": "<Clean AI Framework Tanpa Versi>",
    "foundationModel": "<Clean Foundation Model Tanpa Versi>"
  }
}
```
````

---

## 5. Checklist Verifikasi Sebelum Menyimpan

- [ ] **Bahasa Output:** Seluruh teks data output 100% Bahasa Inggris profesional & teknis (tanpa bahasa Indonesia).
- [ ] Seluruh prompt template, workflow graph, vector DB config, hasil eval (`.json`/`.csv`/logs), docs, dan gambar telah diperiksa.
- [ ] `category` = `"ai-engineering"`, `categoryLabel` = `"AI Engineering"`, `accentColor` = `"purple"`.
- [ ] **`aiEvaluationAndPerformance` dan `limitationsAndImprovements` WAJIB terisi penuh**; seluruh heading dan subheading Section 5 bersifat static universal pada template (tidak ada field label/badge kustom), dan nilai `severity` hanya `"LOW" | "MEDIUM" | "HIGH"`.
- [ ] `overview` / `projectDescription` berjumlah **400–500 karakter**; semua 7 nilai `telemetryMatrix` **maks 45 karakter**.
- [ ] `techStack[]`, `aiTechStack`, dan `aiTechSpecs` **bebas nomor versi** dan tanda kurung; hindari underscore (`_`) pada label/badge UI.
- [ ] Path showcase memakai `"/images/projects/<nama_project>/image01.webp"` dst., sedangkan hero memakai `banner.webp`.
- [ ] File `.md` berhasil disimpan di dalam **root direktori project yang dianalisis**.
