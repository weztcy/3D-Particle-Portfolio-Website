# Panduan & Standar Penambahan Data Proyek (Project Guidelines)

Dokumen ini adalah acuan baku (*single source of truth*) dalam menambahkan atau memperbarui data proyek pada portofolio **Yohanes Dimas Pratama**. Ikuti aturan di bawah ini secara ketat agar tidak terjadi konflik indeks, *broken route*, maupun *broken image asset* di masa depan.

---

## 1. Lokasi File Data & Aset

| Komponen | Lokasi Direktori / File | Keterangan |
|---|---|---|
| **Data Utama Aplikasi** | `src/data/projects/projectsData.ts` | File TypeScript utama yang dikonsumsi langsung oleh komponen dan rute Next.js. |
| **Arsip / Sumber Markdown** | `src/data/projects/projects_markdown/` | Arsip data individual per proyek berbentuk `.md` untuk keperluan dokumentasi / audit. |
| **Penyimpanan Gambar Fisik** | `public/images/projects/` | Seluruh aset visual proyek (.webp) diletakkan langsung di folder ini. |

---

## 2. Aturan Penamaan Judul (`title`)

- **Dilarang memakai angka / nomor urut** di awal judul (contoh salah: `01. Food Recipe`, contoh benar: `Food Recipe Mobile App UIUX Design`). Angka urutan hanya ditentukan oleh posisi indeks di dalam array.
- Gunakan format *Title Case* yang rapi dan konsisten.
- Simbol pemisah yang diperbolehkan adalah tanda hubung spasi (` - `) atau ampersand (`&`), misalnya: `Rasa Nusantara - Indonesian Food Recipe` atau `Smart Inventory & Operations System`.

---

## 3. Aturan Pembuatan `id` (Routing Slug)

Field `id` digunakan langsung oleh Next.js sebagai rute URL dinamis (`/projects/[id]`).

### Aturan Konversi:
1. **Diturunkan langsung dari `title`**.
2. **Huruf kecil semua (*lowercase*)**.
3. **Kata disambungkan dengan tanda hubung tunggal (`-`)** (*kebab-case*).
4. **Hapus karakter spesial** atau ubah simbol (` - `, `&`, `/`) menjadi `-` tunggal, tanpa tanda hubung beruntun (`---`).

### Contoh Pemetaan:
- `"Food Recipe Mobile App UIUX Design"` &rarr; `"food-recipe-mobile-app-uiux-design"`
- `"Privena - Personal Data Management"` &rarr; `"privena-personal-data-management"`
- `"Smart Inventory & Operations System"` &rarr; `"smart-inventory-operations-system"`
- `"PixVault - Private Image Studio"` &rarr; `"pixvault-private-image-studio"`

---

## 4. Aturan Penomoran Kode Registri (`code`)

Format wajib:
```text
PRO-[TotalNumber] // [CategoryPrefix]-[CategoryNumber]
```

### 1. `PRO-XX` (Nomor Urut Global)
- Menghitung urutan posisi proyek secara keseluruhan di dalam array (2 digit, *padded zero*): `PRO-01`, `PRO-02`, ..., `PRO-38`, `PRO-39`, dst.

### 2. Prefix Kategori & `CategoryNumber` (Nomor Urut per Kategori)
Nomor urut kategori dihitung secara terpisah dan bertambah sesuai kemunculan kategori tersebut:

| Kategori (`category`) | Prefix Kode | Warna Aksen (`accentColor`) | Label Display (`categoryLabel`) |
|---|:---:|:---:|---|
| `ui-ux` | **`UX-XX`** | `"fuchsia"` | `"UI/UX Design"` |
| `web-development` | **`WEB-XX`** | `"cyan"` | `"Web Development"` |
| `desktop-mobile` | **`APP-XX`** | `"amber"` | `"Desktop App"` atau `"Mobile App"` |
| `ai-ml` | **`AI-XX`** | `"indigo"` | `"AI & Machine Learning"` |
| `code-learning` | **`LEARN-XX`** | `"teal"` | `"Code Learning"` |
| `data-analysis` | **`DATA-XX`** | `"emerald"` | `"Data Analytics"` |

### Contoh Kasus Penambahan:
Jika proyek saat ini berjumlah 38 proyek (terakhir `PRO-38 // APP-09`), dan Anda ingin menambahkan 1 proyek baru berkategori `web-development` (saat ini sudah ada 12 proyek web `WEB-12`), maka kodenya adalah:
```text
PRO-39 // WEB-13
```

---

## 5. Aturan Penamaan & Path Gambar (`imageUrl` & `images`)

### Aturan File Fisik di `public/images/projects/`:
- Format penamaan file fisik: `"<Judul Proyek> <Nomor Urut>.webp"`.
- Contoh:
  - `Food Recipe Mobile App UI_UX Design 1.webp`
  - `Food Recipe Mobile App UI_UX Design 2.webp`
  - `PixVault - Private Image Studio 1.webp` s.d. `14.webp`

### Aturan di `projectsData.ts`:
1. **Wajib diawali dengan prefix path absolut**: `"/images/projects/"`. Jangan hanya menuliskan nama filenya saja tanpa path.
2. **`imageUrl`**: Mengambil gambar pertama (gambar cover/thumbnail utama).
3. **`images`**: Array berisi seluruh gambar yang **benar-benar ada** secara fisik di folder `public/images/projects/`.
4. **Kesesuaian Jumlah**: Jumlah item dalam array `images` harus sama persis dengan jumlah file di disk (tidak boleh kurang atau lebih).

Contoh:
```typescript
imageUrl: "/images/projects/Food Recipe Mobile App UI_UX Design 1.webp",
images: [
  "/images/projects/Food Recipe Mobile App UI_UX Design 1.webp",
  "/images/projects/Food Recipe Mobile App UI_UX Design 2.webp"
],
```

---

## 6. Template Standar Penambahan Proyek Baru

Salin template berikut saat menambahkan proyek baru ke dalam array `PROJECT_CASE_STUDIES` di [`src/data/projects/projectsData.ts`](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/projects/projectsData.ts):

```typescript
  {
    id: "nama-proyek-kebab-case",
    code: "PRO-39 // WEB-13",
    title: "Nama Proyek Tanpa Nomor",
    category: "web-development",
    categoryLabel: "Web Development",
    year: "2026",
    status: "Completed",
    imageUrl: "/images/projects/Nama Proyek 1.webp",
    images: [
      "/images/projects/Nama Proyek 1.webp",
      "/images/projects/Nama Proyek 2.webp"
    ],
    summary:
      "Ringkasan eksekutif 1 paragraf (25-45 kata) mengenai nilai teknis dan kapabilitas utama proyek.",
    overview:
      "Penjelasan komprehensif (80-150 kata) mengenai arsitektur sistem, problem domain, dan solusi rekayasa perangkat lunak yang diimplementasikan.",
    challenge:
      "Kendala teknis, bottleneck performa, atau limitasi arsitektur nyata yang dihadapi dan diselesaikan.",
    architectureSummary:
      "Pola arsitektur inti, misal: Next.js App Router + TypeScript + Tailwind CSS + PostgreSQL + Prisma ORM.",
    objectives: [
      "Sasaran teknis utama 1",
      "Sasaran teknis utama 2",
      "Sasaran teknis utama 3"
    ],
    features: [
      {
        title: "Nama Fitur Utama 1",
        description: "Deskripsi kapabilitas teknis dan fungsionalitas modul.",
        badge: "Modul Inti"
      },
      {
        title: "Nama Fitur Utama 2",
        description: "Deskripsi kapabilitas teknis dan fungsionalitas modul.",
        badge: "Performa"
      }
    ],
    pipelineSteps: [
      {
        step: "01. Tahap Inisiasi / Ingestion",
        detail: "Penjelasan alur data atau proses teknis tahap 1.",
        latencyOrMetric: "Metrik / Telemetri"
      },
      {
        step: "02. Tahap Pemrosesan / Pipeline",
        detail: "Penjelasan alur pemrosesan inti.",
        latencyOrMetric: "Metrik / Telemetri"
      }
    ],
    evaluation:
      "Narasi hasil benchmark, efisiensi komputasi, peningkatan skor kepuasan/SUS, atau metrik evaluasi empiris yang terukur secara nyata.",
    outcomes: [
      "Capaian terukur 1 (misal: Reduksi response latency hingga 40%).",
      "Capaian terukur 2 (misal: 100% skor kepatuhan WCAG AA).",
      "Capaian terukur 3"
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js"
    ],
    accentColor: "cyan",
    repoUrl: "https://github.com/weztcy/nama-repo"
  },
```

---

## 7. Checklist Verifikasi Mandiri (Sebelum Melakukan Commit)

Sebelum menyimpan atau melakukan commit, pastikan Anda telah mengecek hal-hal berikut:

1. [ ] **Apakah `title` tidak mengandung nomor urut?**
2. [ ] **Apakah `id` sudah berupa huruf kecil semua dengan tanda hubung `-`?**
3. [ ] **Apakah nomor `PRO-XX` sudah melanjutkan indeks terakhir?**
4. [ ] **Apakah nomor kategori (`WEB-XX`, `APP-XX`, dll.) sudah berurutan dari nomor terakhir kategori tersebut?**
5. [ ] **Apakah file gambar `.webp` sudah dimasukkan ke `public/images/projects/`?**
6. [ ] **Apakah path gambar diawali `/images/projects/` dan jumlah elemen `images` persis sama dengan file fisik di disk?**
7. [ ] **Uji tipe data dengan menjalankan:**
   ```bash
   npx tsc --noEmit
   ```
   *(Pastikan output 0 error)*.
8. [ ] **Uji visual di browser:**
   Buka `http://localhost:3000` dan rute detail `/projects/<id-proyek>` untuk memastikan kartu proyek dan carousel lightbox merender gambar tanpa error.

