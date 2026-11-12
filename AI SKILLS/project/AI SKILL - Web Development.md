---
name: portfolio-web-development
description: >-
  Audits a Web Development project directory comprehensively (source code, APIs, schemas, screenshots, docs, configs, test reports, and media) and generates a complete portfolio ProjectCaseStudy Markdown (.md) file compliant with RULES/projectsdata.md and src/data/types.ts. Save the generated .md file inside the analyzed project directory.
---

# Web Development Portfolio Data Generator (`portfolio-web-development`)

Skill ini mengaudit sebuah direktori project **Web Development** secara menyeluruh lintas format file, mengekstrak bukti implementasi terverifikasi, dan menghasilkan file Markdown (`.md`) berisi data `ProjectCaseStudy` yang siap dimasukkan ke `src/data/projects/projectsData.ts`.

---

## 1. Identitas & Konstanta Kategori

- **Category (`category`)**: `"web-development"`
- **Category Label (`categoryLabel`)**: `"Web Development"`
- **Accent Color (`accentColor`)**: `"cyan"`
- **Code Format (`code`)**: `"PRO-XX // WEB-XX"`
- **Konten Teks Output**: Wajib **Bahasa Inggris teknis & profesional**.

---

## 2. Protokol Audit Direktori Menyeluruh (Multi-Format)

Sebelum mengisi field apa pun, inspeksi **seluruh isi direktori project** (jangan hanya source code):

1. **Manifest, Konfigurasi & Infrastruktur**:
   - `package.json`, `composer.json`, `go.mod`, `Cargo.toml`, `requirements.txt`, `tsconfig.json`, `next.config.*`, `vite.config.*`, `Dockerfile`, `docker-compose.yml`, `.env.example`, konfigurasi CI/CD (`.github/workflows/*`).
   - Ekstrak framework, runtime, ORM, database, caching, auth, dan build tooling.
2. **Routing, Backend, & Database Schema**:
   - Entry points (`src/app/`, `src/pages/`, `routes/`, `controllers/`, `api/`), schema database (`prisma/schema.prisma`, `drizzle/`, `migrations/`, `.sql`, ERD diagrams).
   - Identifikasi **System Architecture Layers** (Client, Edge/API Gateway, Service/Business Logic, Persistence) dan **Database/API Entities** beserta field intinya.
3. **Dokumen, Spesifikasi, & Laporan**:
   - `README.md`, PRD, `.pdf`, `.docx`, arsitektur whitepaper, API docs (OpenAPI/Swagger), changelog, dan catatan deployment.
4. **Gambar, Screenshot, Diagram, & Media**:
   - Scan semua file gambar (`.webp`, `.png`, `.jpg`, `.svg`) dan video/media demo.
   - Pahami alur UI/UX aktual, komponen dashboard, fitur unggulan, serta visualisasi arsitektur yang terlihat pada screenshot/diagram.
5. **Testing, Keamanan, & Benchmark**:
   - Test suites (`vitest`, `jest`, `playwright`, `cypress`), laporan coverage, audit keamanan (RBAC, JWT/OAuth, CSRF/XSS, rate limiting, ACID locks), dan hasil Lighthouse/latency.

> **Aturan Kejujuran Data:** Dilarang mengarang metrik, fitur, atau teknologi yang tidak ditemukan buktinya di dalam direktori project.

---

## 3. Aturan Wajib Pengisian (`RULES/projectsdata.md`)

1. **Aset Gambar Lokal**:
   - Folder target portofolio: `/images/projects/<nama_project>/`
   - Pembentukan `<nama_project>`: ambil **maksimal 4 kata alfanumerik awal** dari `title`, ubah ke `lowercase`, pisahkan dengan `_`, abaikan tanda baca (`-`, `&`, `/`, `:`).
   - `imageUrl` & `images[0]`: `"/images/projects/<nama_project>/banner.webp"` (Hero Section 1).
   - `interfaceShowcase[].imageUrl`: `"/images/projects/<nama_project>/image01.webp"`, `image02.webp`, dst. (2 digit *zero-padded*).
2. **Section 1 (Hero Console & Telemetry)**:
   - `overview` dan `projectDescription`: **400–500 karakter** (termasuk spasi) agar tidak terpotong `.slice(0, 500)`.
   - `telemetryMatrix`: wajib isi **7 field**, masing-masing **maksimal 45 karakter**.
   - Repository: isi `repoUrl` & `license` jika Public; kosongkan/hapus `repoUrl` jika Private.
3. **Section 2, 3, & 5**:
   - Jumlah item array **bebas** sesuai kebutuhan dan temuan riil project (tidak ada batas min/maks).
4. **Section 4 (`techStack` & `techStackCategorized`)**:
   - Wajib nama teknologi murni **tanpa nomor versi dan tanpa tanda kurung** (contoh: `"Next.js"`, `"TypeScript"`, `"PostgreSQL"`, `"Prisma"`, BUKAN `"Next.js 16 App Router"` atau `"PostgreSQL 16"`).
   - Jumlah item bebas.
5. **Section 6 (`primaryTechSpecs` & `architectureQuality`)**:
   - `primaryTechSpecs`: `{ programmingLanguage, framework, database }` — bersih tanpa nomor versi (baris ke-4 `"Vulnerability Hardened"` dirender otomatis/statis di UI).
   - `architectureQuality.badges`: **wajib tepat 4 item**, masing-masing maksimal 2–3 kata, **dilarang memakai underscore (`_`)**.

---

## 4. Template Output Markdown (`.md`)

Simpan hasil analisis sebagai file Markdown di **dalam root direktori project yang sedang dianalisis** dengan nama `<project-id>.md` (mengikuti nilai `id` slug, contoh: `smart-inventory-operations-system.md`).

Isi file `<project-id>.md` harus mengikuti struktur berikut secara lengkap:

````markdown
# Portfolio Project Data — <Project Title>

- **Category:** `web-development` (`Web Development`)
- **Accent Color:** `cyan`
- **Target Assets Folder:** `public/images/projects/<nama_project>/`
- **Required Local Images:** `banner.webp`, `image01.webp` .. `imageXX.webp`

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "<kebab-case-slug>",
  "code": "PRO-XX // WEB-XX",
  "title": "<Project Title>",
  "category": "web-development",
  "categoryLabel": "Web Development",
  "year": "<YYYY>",
  "status": "Completed",
  "accentColor": "cyan",
  "repoUrl": "<https://github.com/... atau hapus field ini jika Private>",
  "license": "<MIT License atau hapus jika Private>",
  "imageUrl": "/images/projects/<nama_project>/banner.webp",
  "images": [
    "/images/projects/<nama_project>/banner.webp"
  ],
  "summary": "<1-2 kalimat ringkas tentang masalah utama & solusi web engineering>",
  "overview": "<400-500 karakter narasi teknis mendalam tentang tujuan, arsitektur, dan dampak>",
  "projectDescription": "<400-500 karakter (selaras dengan overview) untuk Hero Console Section 1>",
  "challenge": "<Ringkasan tantangan teknis/bottleneck utama>",
  "architectureSummary": "<Ringkasan alur arsitektur satu baris>",
  "objectives": [
    "<Objective 1>",
    "<Objective 2>"
  ],
  "features": [
    {
      "title": "<Feature Title>",
      "description": "<Deskripsi fitur teknis>",
      "badge": "<Short Badge>"
    }
  ],
  "pipelineSteps": [
    {
      "step": "<Step Title>",
      "detail": "<Detail proses request/data>",
      "latencyOrMetric": "<Metrik/tag>"
    }
  ],
  "evaluation": "<1 paragraf narasi hasil pengujian, performa, dan validasi>",
  "outcomes": [
    "<Outcome terukur 1>",
    "<Outcome terukur 2>"
  ],
  "techStack": [
    "<Clean Tech Name Tanpa Versi>"
  ],
  "telemetryMatrix": {
    "projectType": "<Max 45 chars>",
    "targetPlatform": "<Max 45 chars>",
    "primaryDomain": "<Max 45 chars>",
    "architecturePipeline": "<Max 45 chars>",
    "testingAndAudit": "Passed",
    "projectStatus": "Completed",
    "projectYear": "<YYYY>"
  },
  "projectInfo": {
    "projectType": "<Jenis Aplikasi Web>",
    "developmentStatus": "Completed",
    "developmentYear": "<YYYY>",
    "platform": "<Target Platform>",
    "projectCategory": "Web Development"
  },
  "projectBackground": "<Paragraf latar belakang & konteks bisnis/sistem untuk Section 2>",
  "problemStatements": [
    {
      "title": "<Problem Title>",
      "description": "<Penjelasan masalah nyata>",
      "issueCode": "ISSUE_01"
    }
  ],
  "projectObjectives": [
    {
      "title": "<Objective Title>",
      "description": "<Target terukur yang ingin dicapai>",
      "targetTag": "TARGET_01"
    }
  ],
  "coreFeatures": [
    {
      "title": "<Feature Title>",
      "description": "<Deskripsi kapabilitas & cara kerja>",
      "badge": "<Category Badge>"
    }
  ],
  "interfaceShowcase": [
    {
      "imageUrl": "/images/projects/<nama_project>/image01.webp",
      "caption": "<Deskripsi singkat tampilan UI pada screenshot ini>",
      "badge": "<Viewport Label>"
    }
  ],
  "userFlow": {
    "summary": "<Ringkasan alur interaksi end-to-end>",
    "steps": [
      {
        "step": "01",
        "title": "<Step Title>",
        "description": "<Aksi user dan respons sistem>",
        "actorOrNode": "<User / Component / API>"
      }
    ]
  },
  "techStackCategorized": [
    {
      "name": "<Clean Tech Name Tanpa Versi>",
      "category": "Frontend",
      "role": "<Peran spesifik di project>"
    }
  ],
  "systemArchitecture": {
    "summary": "<Penjelasan topologi sistem>",
    "layers": [
      {
        "name": "<Layer Name>",
        "role": "<Tanggung jawab layer>",
        "components": ["<Component 1>", "<Component 2>"]
      }
    ]
  },
  "databaseDataFlow": {
    "type": "Database Schema / ERD",
    "summary": "<Penjelasan struktur data atau alur API>",
    "entitiesOrPipelines": [
      {
        "name": "<Entity / Pipeline Name>",
        "type": "<Table / Collection / Service>",
        "fields": ["<field_1>", "<field_2>"]
      }
    ]
  },
  "technicalImplementation": [
    {
      "category": "<Domain Kategori, misal Concurrency / Security>",
      "title": "<Judul Implementasi Teknis>",
      "description": "<Detail teknis mendalam dari codebase>",
      "badge": "<Short Badge>"
    }
  ],
  "primaryTechSpecs": {
    "programmingLanguage": "<Clean Language>",
    "framework": "<Clean Framework>",
    "database": "<Clean Database>"
  },
  "architectureQuality": {
    "badges": [
      "<2-3 Kata Tanpa Underscore>",
      "<2-3 Kata Tanpa Underscore>",
      "<2-3 Kata Tanpa Underscore>",
      "<2-3 Kata Tanpa Underscore>"
    ]
  }
}
```
````

---

## 5. Checklist Verifikasi Sebelum Menyimpan

- [ ] **Bahasa Output:** Seluruh teks data output 100% Bahasa Inggris profesional & teknis (tanpa bahasa Indonesia).
- [ ] Seluruh file non-kode (gambar, PDF, dokumen, SQL, test output) di direktori target ikut diperiksa.
- [ ] `category` = `"web-development"`, `categoryLabel` = `"Web Development"`, `accentColor` = `"cyan"`.
- [ ] `overview` / `projectDescription` berjumlah **400–500 karakter**; semua 7 nilai `telemetryMatrix` **maks 45 karakter**.
- [ ] `techStack[]` dan `primaryTechSpecs` **bebas nomor versi** dan tanda kurung.
- [ ] `architectureQuality.badges` berjumlah **tepat 4 item** dan **tanpa underscore (`_`)**.
- [ ] Path aset lokal memakai `/images/projects/<nama_project>/banner.webp` & `image01-XX.webp`.
- [ ] File `.md` berhasil disimpan di dalam **root direktori project yang dianalisis**.
