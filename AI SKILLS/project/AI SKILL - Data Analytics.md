---
name: portfolio-data-analytics
description: >-
  Audits a Data Analytics project directory comprehensively (datasets CSV/XLSX/Parquet, SQL scripts, Jupyter notebooks, Power BI/Tableau workbooks, PDF/PPTX reports, charts, and documentation) and generates a complete portfolio ProjectCaseStudy Markdown (.md) file compliant with RULES/projectsdata.md and src/data/types.ts. Save the generated .md file inside the analyzed project directory.
---

# Data Analytics Portfolio Data Generator (`portfolio-data-analytics`)

Skill ini mengaudit sebuah direktori project **Data Analytics** secara menyeluruh lintas format file, mengekstrak bukti kuantitatif & temuan analisis yang terverifikasi, dan menghasilkan file Markdown (`.md`) berisi data `ProjectCaseStudy` yang siap dimasukkan ke `src/data/projects/projectsData.ts`.

---

## 1. Identitas & Konstanta Kategori

- **Category (`category`)**: `"data-analysis"`
- **Category Label (`categoryLabel`)**: `"Data Analytics"`
- **Accent Color (`accentColor`)**: `"emerald"`
- **Code Format (`code`)**: `"PRO-XX // DA-XX"`
- **Konten Teks Output**: Wajib **Bahasa Inggris teknis & profesional**.

---

## 2. Protokol Audit Direktori Menyeluruh (Multi-Format)

Sebelum mengisi field apa pun, inspeksi **seluruh isi direktori project** (jangan hanya script atau notebook):

1. **Dataset Mentah & Hasil Olahan**:
   - `.csv`, `.xlsx`, `.xls`, `.parquet`, `.json`, database `.db`/`.sqlite`, dan file skema data dictionary.
   - Verifikasi sumber data, periode waktu (`dataPeriod`), jumlah baris/record akurat (`recordsCount`), jumlah variabel/fitur (`variablesCount`/`featuresCount`), serta tipe data (`dataTypes`).
2. **Script Query, ETL, & Notebook Eksplorasi**:
   - `.sql`, `.py`, `.R`, `.ipynb` (termasuk output cell yang tersimpan), `requirements.txt`, `environment.yml`.
   - Ekstrak tahapan **Data Preparation** (imputasi missing values, deduplikasi, normalisasi, feature engineering, outlier handling) dan **Analytical Methodology** (EDA, Cohort, RFM, ANOVA, Time Series, A/B Testing, Regression, dll.).
3. **Workbook BI, Presentasi, & Laporan**:
   - Power BI (`.pbix`), Tableau (`.twb`/`.twbx`), Looker/Metabase specs, `.pptx`, `.pdf`, `.docx`, `README.md`.
   - Ekstrak konteks bisnis (`dataAnalyticsBusinessContext`), objektif analitik (`dataAnalyticsAnalyticalObjectives`), temuan angka utama (`dataAnalyticsKeyFindings`), prioritas rekomendasi (`HIGH` / `MEDIUM` / `STRATEGIC`), serta daftar dokumen pendukung (`dataAnalyticsSupportingFiles`).
4. **Gambar Chart, Dashboard, & Slide Visual**:
   - Scan semua gambar (`.webp`, `.png`, `.jpg`, `.svg`) dan ekspor slide/dashboard.
   - Pahami KPI yang divisualisasikan pada setiap slide/halaman dashboard untuk mengisi `dataAnalyticsPresentationSlides`.

> **Aturan Kejujuran Data:** Dilarang keras mengarang angka KPI, persentase kenaikan, jumlah record, atau nama metrik yang tidak terbukti di dataset, output notebook, laporan PDF/PPTX, atau visual dashboard.

---

## 3. Aturan Wajib Pengisian (`RULES/projectsdata.md`)

1. **Aset Gambar Lokal**:
   - Folder target portofolio: `/images/projects/<nama_project>/`
   - Pembentukan `<nama_project>`: ambil **maksimal 4 kata alfanumerik awal** dari `title`, ubah ke `lowercase`, pisahkan dengan `_`, abaikan tanda baca (`-`, `&`, `/`, `:`).
   - `imageUrl` & `images[0]`: `"/images/projects/<nama_project>/banner.webp"` (Hero Section 1).
   - `dataAnalyticsPresentationSlides[].imageUrl`: **WAJIB** menggunakan pola `"/images/projects/<nama_project>/slide01.webp"`, `slide02.webp`, dst. (2 digit *zero-padded*, **BUKAN** `image01.webp`).
2. **Section 1 (Hero Console & Telemetry)**:
   - `overview` dan `projectDescription`: **400–500 karakter** (termasuk spasi) agar tidak terpotong `.slice(0, 500)`.
   - `telemetryMatrix`: wajib isi **7 field**, masing-masing **maksimal 45 karakter**.
   - Repository: isi `repoUrl` & `license` jika Public; hapus/kosongkan `repoUrl` & `license` jika Private.
3. **Section 2, 3, & 5**:
   - Gunakan field kanonik **`dataAnalyticsBusinessContext`** (untuk konteks bisnis Section 2).
   - Pada `dataAnalyticsKeyFindings`, `metricValue` harus berupa angka/persentase tunggal yang ringkas & tajam (misal `"+34.2%"`, `"$1.4M"`, `"87.5%"`) tanpa kalimat panjang.
   - Jumlah item array di Section 2, 3, & 5 **bebas** sesuai temuan riil project.
4. **Section 4 (`techStack`)**:
   - Menggunakan satu field tunggal `techStack: string[]` tanpa pengelompokan category.
   - Wajib nama teknologi/tool analitik murni **tanpa nomor versi dan tanpa tanda kurung** (contoh: `"Python"`, `"Pandas"`, `"PostgreSQL"`, `"Power BI"`, `"SQL"`, BUKAN `"Python 3.11"` atau `"Power BI Desktop"`).
   - Jumlah item bebas.
5. **Section 6**:
   - Hindari underscore (`_`) pada label/tag status apa pun agar konsisten dengan aturan clean UI portofolio.

---

## 4. Template Output Markdown (`.md`)

Simpan hasil analisis sebagai file Markdown di **dalam root direktori project yang sedang dianalisis** dengan nama `<project-id>.md` (mengikuti nilai `id` slug, contoh: `ecommerce-customer-retention-cohort-analysis.md`).

Isi file `<project-id>.md` harus mengikuti struktur berikut secara lengkap:

````markdown
# Portfolio Project Data — <Project Title>

- **Category:** `data-analysis` (`Data Analytics`)
- **Accent Color:** `emerald`
- **Target Assets Folder:** `public/images/projects/<nama_project>/`
- **Required Local Images:** `banner.webp`, `slide01.webp` .. `slideXX.webp`

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "<kebab-case-slug>",
  "code": "PRO-XX // DA-XX",
  "title": "<Project Title>",
  "category": "data-analysis",
  "categoryLabel": "Data Analytics",
  "year": "<YYYY>",
  "status": "Completed",
  "accentColor": "emerald",
  "repoUrl": "<https://github.com/... atau hapus field ini jika Private>",
  "license": "<MIT License atau hapus jika Private>",
  "imageUrl": "/images/projects/<nama_project>/banner.webp",
  "images": [
    "/images/projects/<nama_project>/banner.webp"
  ],
  "summary": "<1-2 kalimat ringkas tentang masalah analitik bisnis & insight utama yang dihasilkan>",
  "overview": "<400-500 karakter narasi teknis tentang cakupan dataset, metodologi analitik, dan dampak keputusan>",
  "projectDescription": "<400-500 karakter (selaras dengan overview) untuk Hero Console Section 1>",
  "challenge": "<Ringkasan tantangan kualitas data atau kompleksitas analitik>",
  "architectureSummary": "<Ringkasan pipeline data dari ingestion, cleaning, analisis, hingga visualisasi BI>",
  "objectives": [
    "<Analytical Objective 1>",
    "<Analytical Objective 2>"
  ],
  "features": [
    {
      "title": "<Analytical Capability / Dashboard Module>",
      "description": "<Penjelasan analisis atau fitur interaktif>",
      "badge": "<Short Tag>"
    }
  ],
  "pipelineSteps": [
    {
      "step": "<Stage Title>",
      "detail": "<Proses transformasi / agregasi / pemodelan>",
      "latencyOrMetric": "<Volume atau metrik tahap>"
    }
  ],
  "evaluation": "<1 paragraf narasi hasil validasi statistik, cross-check data, dan reliabilitas temuan>",
  "outcomes": [
    "<Quantified Insight / Business Impact 1>",
    "<Quantified Insight / Business Impact 2>"
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
  "dataAnalyticsProjectInfo": {
    "projectType": "<Jenis Project Analitik, misal BI Dashboard & Cohort Study>",
    "developmentStatus": "Completed",
    "analysisYear": "<YYYY>",
    "dataDomain": "<Domain Data, misal E-Commerce Retail>",
    "projectCategory": "Data Analytics"
  },
  "dataAnalyticsBusinessContext": "<Paragraf latar belakang masalah bisnis & urgensi pengambilan keputusan berbasis data>",
  "dataAnalyticsAnalyticalObjectives": [
    {
      "title": "<Objective Title>",
      "description": "<Pertanyaan bisnis/hipotesis yang dijawab>",
      "targetMetric": "<KPI Target>"
    }
  ],
  "dataAnalyticsDatasetOverview": {
    "dataSource": "<Sumber dataset riil>",
    "dataPeriod": "<Rentang tanggal/tahun data>",
    "recordsCount": "<Jumlah baris tepat, misal 124,580 Records>",
    "variablesCount": "<Jumlah kolom/variabel>",
    "featuresCount": "<Jumlah fitur analisis>",
    "dataTypes": "<Tipe data dominan, misal Tabular Transactional & Time Series>",
    "description": "<Deskripsi isi dataset, granularitas, dan cakupan entitas>"
  },
  "dataAnalyticsDataPreparation": [
    {
      "step": "01",
      "title": "<Preparation Step Title>",
      "description": "<Detail pembersihan, transformasi SQL/Python, atau handling anomali>",
      "badge": "<Short Badge>"
    }
  ],
  "analyticalMethodology": {
    "summary": "<Ringkasan pendekatan kuantitatif dan kerangka statistik yang dipakai>",
    "methods": [
      {
        "name": "<Method Name, misal RFM Segmentation>",
        "description": "<Cara metode diterapkan pada dataset>",
        "badge": "<Technique Tag>"
      }
    ]
  },
  "analysisWorkflow": {
    "summary": "<Alur kerja end-to-end dari raw data ke executive recommendations>",
    "steps": [
      // Fleksibel dan dinamis, bebas tanpa batas minimal, maksimal 10 tahapan)
      {
        "stepNumber": "01",
        "phase": "<Phase Name, misal Data Extraction>",
        "title": "<Step Title>",
        "description": "<Aktivitas konkret pada tahap ini>"
      }
    ]
  },
  "dataAnalyticsPresentationSlides": [
    {
      "slideNumber": 1,
      "title": "<Slide / Dashboard View Title>",
      "imageUrl": "/images/projects/<nama_project>/slide01.webp",
      "caption": "<Penjelasan insight atau metrik yang tampil di slide ini>"
    }
  ],
  "dataAnalyticsKeyFindings": [
    {
      "metricValue": "<Single Sharp Number/Percentage>",
      "metricLabel": "<Short Metric Label>",
      "title": "<Finding Headline>",
      "description": "<Penjelasan bukti data dan implikasi temuan>",
      "impactTag": "<Impact Category>"
    }
  ],
  "recommendationsAndConclusion": {
    "recommendations": [
      {
        "title": "<Recommendation Title>",
        "action": "<Langkah taktis yang disarankan berbasis temuan>",
        "priority": "HIGH"
      }
    ],
    "conclusion": "<Paragraf kesimpulan menyeluruh hasil investigasi data>"
  },
  "dataAnalyticsSupportingFiles": [
    {
      "name": "<Nama File Pendukung Aktual, misal executive_summary.pdf>",
      "format": "<PDF / XLSX / SQL / IPYNB / PBIX>",
      "size": "<Ukuran file jika terdeteksi>",
      "description": "<Isi dokumen atau artefak analisis ini>"
    }
  ]
}
```
````

---

## 5. Checklist Verifikasi Sebelum Menyimpan

- [ ] **Bahasa Output:** Seluruh teks data output 100% Bahasa Inggris profesional & teknis (tanpa bahasa Indonesia).
- [ ] Seluruh dataset, notebook (`.ipynb`), query `.sql`, file BI (`.pbix`/`.twb`), dokumen `.pdf`/`.pptx`, dan chart telah diinspeksi.
- [ ] `category` = `"data-analysis"`, `categoryLabel` = `"Data Analytics"`, `accentColor` = `"emerald"`.
- [ ] Field konteks bisnis memakai `dataAnalyticsBusinessContext`; `recommendations[].priority` hanya `"HIGH"`, `"MEDIUM"`, atau `"STRATEGIC"`.
- [ ] `overview` / `projectDescription` berjumlah **400–500 karakter**; semua 7 nilai `telemetryMatrix` **maks 45 karakter**.
- [ ] `techStack[]` **bebas nomor versi** dan tanda kurung.
- [ ] Path slide memakai `"/images/projects/<nama_project>/slide01.webp"` dst., sedangkan hero memakai `banner.webp`.
- [ ] File `.md` berhasil disimpan di dalam **root direktori project yang dianalisis**.
