# TASK PROMPT: GLOBAL INSTALLATION OF UNIFIED PORTFOLIO AUDITOR SKILL

File ini berisi **Prompt Task Lengkap** yang dirancang untuk diberikan kepada AI Agent (seperti Google Antigravity, Claude Code, Cursor, Windsurf, atau AI Coding Agent lainnya) agar menginstal ke-7 kategori audit portofolio menjadi **SATU Unified Skill Global**.

---

## ðŸ“‹ CARA PENGGUNAAN
1. **Copy** seluruh isi teks di dalam kotak blok prompt di bawah ini.
2. **Paste** ke chat AI Agent Anda.
3. AI Agent akan secara otomatis:
   - Membaca ke-7 file skill yang ada di folder ini.
   - Menggabungkannya menjadi **1 Single Unified Skill** bernama `portfolio-project-data`.
   - Memasangnya ke direktori skill global sistem (`~/.gemini/config/skills/portfolio-project-data/`).
   - Mengonfigurasi menu interaktif sehingga setiap kali skill dijalankan, agent akan menyajikan pilihan 7 kategori project dan menunggu pilihan Anda sebelum melakukan audit.

---

```text
================================================================================
PROMPT TASK UNTUK AI AGENT (SALIN TEKS DI BAWAH INI)
================================================================================

Role: AI Systems & Environment Customization Engineer

TASK:
Audit dan install template audit portofolio yang ada di folder kerja saat ini menjadi SATU Single Unified Skill secara GLOBAL. Skill ini TIDAK BOLEH di-install terpisah-pisah, melainkan harus terintegrasi menjadi satu kesatuan skill bernama `portfolio-project-data`.

Ketika skill tersebut nantinya dijalankan oleh user, skill WAJIB menampilkan menu interaktif berisi semua opsi kategori project yang tersedia, berhenti sejenak menunggu user memilih salah satu kategori, lalu menjalankan audit secara mendalam sesuai aturan dan template kategori yang dipilih.

--------------------------------------------------------------------------------
1. ANALISIS SUMBER SKILL (SOURCE FILES)
--------------------------------------------------------------------------------
Periksa dan baca seluruh 7 file skill audit portofolio berikut yang berada di direktori saat ini:
1. `AI SKILL - AI Engineering.md`      -> Kategori: ai-engineering (AI Engineering)
2. `AI SKILL - Code Learning.md`       -> Kategori: code-learning (Code Learning)
3. `AI SKILL - Data Analytics.md`      -> Kategori: data-analysis (Data Analytics)
4. `AI SKILL - Desktop & Mobile App.md`-> Kategori: desktop-mobile (Desktop & Mobile App)
5. `AI SKILL - Machine Learning.md`    -> Kategori: machine-learning (Machine Learning)
6. `AI SKILL - UI-UX Design.md`        -> Kategori: ui-ux (UI/UX Design)
7. `AI SKILL - Web Development.md`     -> Kategori: web-development (Web Development)

--------------------------------------------------------------------------------
2. TARGET DIREKTORI GLOBAL (GLOBAL INSTALLATION PATH)
--------------------------------------------------------------------------------
Install skill ini ke direktori konfigurasi skill global:
- **Windows**: `%USERPROFILE%\.gemini\config\skills\portfolio-project-data\`
  (atau fallback: `%USERPROFILE%\.agents\skills\portfolio-project-data\`)
- **macOS / Linux**: `~/.gemini/config/skills/portfolio-project-data/`
  (atau fallback: `~/.agents/skills/portfolio-project-data/`)

Struktur folder target yang wajib dibuat:
portfolio-project-data/
â”œâ”€â”€ SKILL.md                          # Entry point utama (Interactive Menu & Routing)
â””â”€â”€ references/                       # Modul spesifikasi lengkap tiap kategori
    â”œâ”€â”€ ai-engineering.md
    â”œâ”€â”€ code-learning.md
    â”œâ”€â”€ data-analytics.md
    â”œâ”€â”€ desktop-mobile-app.md
    â”œâ”€â”€ machine-learning.md
    â”œâ”€â”€ ui-ux-design.md
    â””â”€â”€ web-development.md

--------------------------------------------------------------------------------
3. LANGKAH-LANGKAH INSTALASI YANG WAJIB ANDA JALANKAN
--------------------------------------------------------------------------------

### LANGKAH A: Pembuatan Direktori
Buat direktori `portfolio-project-data` dan subdirektori `references/` pada path global di atas.

### LANGKAH B: Standarisasi & Penyalinan File Referensi
Salin isi dari ke-7 file sumber ke dalam folder `references/` dengan nama standar:
- Dari `AI SKILL - AI Engineering.md`      -> `references/ai-engineering.md`
- Dari `AI SKILL - Code Learning.md`       -> `references/code-learning.md`
- Dari `AI SKILL - Data Analytics.md`      -> `references/data-analytics.md`
- Dari `AI SKILL - Desktop & Mobile App.md`-> `references/desktop-mobile-app.md`
- Dari `AI SKILL - Machine Learning.md`    -> `references/machine-learning.md`
- Dari `AI SKILL - UI-UX Design.md`        -> `references/ui-ux-design.md`
- Dari `AI SKILL - Web Development.md`     -> `references/web-development.md`

Pastikan seluruh isi aturan, konstanta, audit protocol, validasi teks/karakter, dan template markdown di setiap file tersalin secara utuh tanpa ada yang terpotong.

### LANGKAH C: Penyusunan File Utama `SKILL.md`
Tulis file `SKILL.md` di root folder skill dengan konten frontmatter YAML dan instruksi interaktif persis seperti berikut:

```markdown
---
name: portfolio-project-data
description: >-
  Universal project auditor and portfolio case study generator. Audits any software, AI, data, mobile/desktop, learning, or UI/UX project directory and generates a complete, compliant ProjectCaseStudy Markdown file. When executed, it interactively presents category options for user selection before performing the audit.
---

# Universal Portfolio Project Auditor (`portfolio-project-data`)

Skill ini mengaudit direktori project secara komprehensif lintas format file, mengekstrak bukti implementasi dan evaluasi teknis, serta menghasilkan file Markdown (`<project-id>.md`) berisi data `ProjectCaseStudy` yang siap diintegrasikan ke `src/data/projects/projectsData.ts`.

---

## âš¡ PROTOKOL INTERAKTIF WAJIB: PEMILIHAN KATEGORI PROJECT

Ketika skill ini dijalankan atau dipicu oleh user (contoh pemicu: "audit project ini", "generate portfolio data", "buat case study portofolio", atau slash command `/portfolio-project-data`):

> **ATURAN MUTLAK:**
> AGENT DILARANG LANGSUNG MEMILIH KATEGORI SECARA SEPIHAK ATAU MENEBAK TANPA KONFIRMASI DARI USER.

Ikuti 3 tahapan eksekusi berikut secara disiplin:

### TAHAP 1: Tampilkan Menu Pilihan Kategori ke User
Tampilkan pesan berikut kepada user:

"""
Halo! Saya siap mengaudit direktori project ini dan menyusun data `ProjectCaseStudy` portofolio standar produksi.

Silakan pilih kategori project yang ingin diaudit:
[1] AI Engineering (portfolio-ai-engineering)
    - LLM orchestration, Agentic AI, Multi-Agent systems, RAG pipelines, MCP tools, Vector DB, eval telemetry.
[2] Code Learning (portfolio-code-learning)
    - Kurikulum edukasi pemrograman, modul belajar bertingkat (Beginner/Intermediate/Advanced), latihan kode, capstones.
[3] Data Analytics (portfolio-data-analytics)
    - BI Dashboards (Power BI/Tableau), query SQL, notebook analisis, dataset (CSV/Parquet), business metrics & impact.
[4] Desktop & Mobile App (portfolio-desktop-mobile-app)
    - Aplikasi Mobile (Android/iOS/Flutter/React Native), Desktop (Electron/Tauri/Qt/.NET), atau Cross-Platform.
[5] Machine Learning (portfolio-machine-learning)
    - Supervised/Unsupervised learning, Deep Learning (CNN/RNN/Transformers), Computer Vision, NLP, RL, training logs.
[6] UI/UX Design (portfolio-ui-ux-design)
    - Design systems, design tokens, wireframes, high-fidelity mockups, user personas, UX research, usability logs.
[7] Web Development (portfolio-web-development)
    - Full-stack, Frontend/Backend apps, REST/GraphQL APIs, Next.js, database schemas (Prisma/SQL), security & perf.

Silakan ketik nomor kategori pilihan Anda (1 - 7), atau sebutkan nama kategorinya:
"""

### TAHAP 2: Berhenti & Tunggu Input User
- Agent **WAJIB BERHENTI** memanggil tool dan menunggu respons jawaban user.
- Jangan melanjutkan proses inspeksi atau pembuatan file sebelum user merespons dengan nomor atau nama kategori.

### TAHAP 3: Eksekusi Audit Sesuai Kategori Pilihan
Setelah user memberikan jawaban (misal mengetik `1` atau `AI Engineering`):
1. Berikan konfirmasi: *"Kategori terpilih: [Nama Kategori]. Memulai audit komprehensif direktori..."*
2. Buka dan baca file modul referensi yang bersangkutan dari folder `references/`:
   - Pilihan 1 -> [references/ai-engineering.md](./references/ai-engineering.md)
   - Pilihan 2 -> [references/code-learning.md](./references/code-learning.md)
   - Pilihan 3 -> [references/data-analytics.md](./references/data-analytics.md)
   - Pilihan 4 -> [references/desktop-mobile-app.md](./references/desktop-mobile-app.md)
   - Pilihan 5 -> [references/machine-learning.md](./references/machine-learning.md)
   - Pilihan 6 -> [references/ui-ux-design.md](./references/ui-ux-design.md)
   - Pilihan 7 -> [references/web-development.md](./references/web-development.md)
3. Jalankan protokol audit direktori multi-format sesuai panduan kategori tersebut:
   - Inspeksi source code, manifest, schema, logs, diagram, dokumen, dan screenshot di direktori target.
   - Patuhi seluruh batasan karakter teks (`summary` maks 150 char, `projectDescription` 250-300 char, telemetry, dsb.).
   - Pastikan penamaan folder aset gambar lokal (`/images/projects/<nama_project>/`) dan format gambar sesuai aturan.
   - Bersihkan `techStack` dari nomor versi dan tanda kurung.
   - Hasilkan konten data dalam bahasa Inggris teknis profesional (Professional Technical English).
4. Buat file output `<project-id>.md` langsung di dalam root direktori project yang diaudit.
```

--------------------------------------------------------------------------------
4. VERIFIKASI & LAPORAN HASIL INSTALASI
--------------------------------------------------------------------------------
Setelah proses instalasi selesai:
1. Verifikasi keberadaan file `SKILL.md` dan ke-7 file di dalam direktori `references/`.
2. Tampilkan laporan ringkas kepada user yang mencantumkan:
   - Lokasi folder instalasi global skill.
   - Status registrasi skill `portfolio-project-data`.
   - Konfirmasi bahwa alur interaktif pemilihan kategori 1-7 sudah aktif.
   - Contoh perintah untuk langsung menjalankan skill tersebut.
================================================================================
```

---

## ðŸ’» ALTERNATIF: INSTALASI CEPAT DENGAN POWERSHELL SCRIPT
Jika Anda ingin langsung menginstal skill ini ke folder global komputer Anda saat ini tanpa melalui prompt, jalankan perintah PowerShell berikut di direktori ini:

```powershell
$targetDir = "$env:USERPROFILE\.gemini\config\skills\portfolio-project-data"
$refDir = "$targetDir\references"

# 1. Buat folder target
New-Item -ItemType Directory -Force -Path $refDir | Out-Null

# 2. Salin file referensi
Copy-Item ".\AI SKILL - AI Engineering.md" "$refDir\ai-engineering.md" -Force
Copy-Item ".\AI SKILL - Code Learning.md" "$refDir\code-learning.md" -Force
Copy-Item ".\AI SKILL - Data Analytics.md" "$refDir\data-analytics.md" -Force
Copy-Item ".\AI SKILL - Desktop & Mobile App.md" "$refDir\desktop-mobile-app.md" -Force
Copy-Item ".\AI SKILL - Machine Learning.md" "$refDir\machine-learning.md" -Force
Copy-Item ".\AI SKILL - UI-UX Design.md" "$refDir\ui-ux-design.md" -Force
Copy-Item ".\AI SKILL - Web Development.md" "$refDir\web-development.md" -Force

# 3. Buat file utama SKILL.md
@'
---
name: portfolio-project-data
description: >-
  Universal project auditor and portfolio case study generator. Audits any software, AI, data, mobile/desktop, learning, or UI/UX project directory and generates a complete, compliant ProjectCaseStudy Markdown file. When executed, it interactively presents category options for user selection before performing the audit.
---

# Universal Portfolio Project Auditor (`portfolio-project-data`)

Skill ini mengaudit direktori project secara komprehensif lintas format file, mengekstrak bukti implementasi dan evaluasi teknis, serta menghasilkan file Markdown (`<project-id>.md`) berisi data `ProjectCaseStudy` yang siap diintegrasikan ke `src/data/projects/projectsData.ts`.

---

## âš¡ PROTOKOL INTERAKTIF WAJIB: PEMILIHAN KATEGORI PROJECT

Ketika skill ini dijalankan atau dipicu oleh user (contoh: "audit project ini", "generate portfolio data", "buat case study portofolio"):

> **ATURAN MUTLAK:**
> AGENT DILARANG LANGSUNG MEMILIH KATEGORI SECARA SEPIHAK ATAU MENEBAK TANPA KONFIRMASI DARI USER.

### TAHAP 1: Tampilkan Menu Pilihan Kategori ke User
Tampilkan pesan berikut kepada user:

Halo! Saya siap mengaudit direktori project ini dan menyusun data `ProjectCaseStudy` portofolio standar produksi.

Silakan pilih kategori project yang ingin diaudit:
[1] AI Engineering (portfolio-ai-engineering)
    - LLM orchestration, Agentic AI, Multi-Agent systems, RAG pipelines, MCP tools, Vector DB, eval telemetry.
[2] Code Learning (portfolio-code-learning)
    - Kurikulum edukasi pemrograman, modul belajar bertingkat (Beginner/Intermediate/Advanced), latihan kode, capstones.
[3] Data Analytics (portfolio-data-analytics)
    - BI Dashboards (Power BI/Tableau), query SQL, notebook analisis, dataset (CSV/Parquet), business metrics & impact.
[4] Desktop & Mobile App (portfolio-desktop-mobile-app)
    - Aplikasi Mobile (Android/iOS/Flutter/React Native), Desktop (Electron/Tauri/Qt/.NET), atau Cross-Platform.
[5] Machine Learning (portfolio-machine-learning)
    - Supervised/Unsupervised learning, Deep Learning (CNN/RNN/Transformers), Computer Vision, NLP, RL, training logs.
[6] UI/UX Design (portfolio-ui-ux-design)
    - Design systems, design tokens, wireframes, high-fidelity mockups, user personas, UX research, usability logs.
[7] Web Development (portfolio-web-development)
    - Full-stack, Frontend/Backend apps, REST/GraphQL APIs, Next.js, database schemas (Prisma/SQL), security & perf.

Silakan ketik nomor kategori pilihan Anda (1 - 7), atau sebutkan nama kategorinya:

### TAHAP 2: Berhenti & Tunggu Input User
- Agent **WAJIB BERHENTI** memanggil tool dan menunggu respons jawaban user.
- Jangan melanjutkan proses inspeksi atau pembuatan file sebelum user merespons dengan nomor atau nama kategori.

### TAHAP 3: Eksekusi Audit Sesuai Kategori Pilihan
Setelah user memberikan jawaban (misal mengetik `1` atau `AI Engineering`):
1. Berikan konfirmasi: "Kategori terpilih: [Nama Kategori]. Memulai audit komprehensif direktori..."
2. Buka dan baca file modul referensi yang bersangkutan dari folder `references/`:
   - Pilihan 1 -> [references/ai-engineering.md](./references/ai-engineering.md)
   - Pilihan 2 -> [references/code-learning.md](./references/code-learning.md)
   - Pilihan 3 -> [references/data-analytics.md](./references/data-analytics.md)
   - Pilihan 4 -> [references/desktop-mobile-app.md](./references/desktop-mobile-app.md)
   - Pilihan 5 -> [references/machine-learning.md](./references/machine-learning.md)
   - Pilihan 6 -> [references/ui-ux-design.md](./references/ui-ux-design.md)
   - Pilihan 7 -> [references/web-development.md](./references/web-development.md)
3. Jalankan protokol audit direktori multi-format sesuai panduan kategori tersebut dan hasilkan file `<project-id>.md` di direktori project.
'@ | Out-File -FilePath "$targetDir\SKILL.md" -Encoding utf8

Write-Host "âœ… Sukses menginstall global skill 'portfolio-project-data' ke $targetDir" -ForegroundColor Green
```

