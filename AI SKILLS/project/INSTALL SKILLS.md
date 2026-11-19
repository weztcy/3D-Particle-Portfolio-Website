# TASK PROMPT: GLOBAL INSTALLATION OF UNIFIED PORTFOLIO AUDITOR SKILL

File ini berisi **Prompt Task Lengkap** yang dirancang untuk diberikan kepada AI Agent (seperti Google Antigravity, Claude Code, Cursor, Windsurf, atau AI Coding Agent lainnya) agar menginstal ke-7 kategori audit portofolio menjadi **SATU Unified Skill Global**.

---

## 📋 CARA PENGGUNAAN
1. **Copy** seluruh isi teks di dalam kotak blok prompt di bawah ini.
2. **Paste** ke chat AI Agent Anda.
3. AI Agent akan secara otomatis:
   - Membaca ke-7 file skill yang ada di folder ini.
   - Menggabungkannya menjadi **1 Single Unified Skill** bernama `portfolio-project-data`.
   - Memasangnya ke direktori skill global sistem (`~/.gemini/config/skills/portfolio-project-data/`).
   - Mengonfigurasi menu interaktif berupa tombol klik (**Clickable UI via `ask_question`**) sehingga setiap kali skill dijalankan, antarmuka menyajikan pilihan tombol kategori yang dapat diklik langsung oleh pengguna sebelum melakukan audit.

---

```text
================================================================================
PROMPT TASK UNTUK AI AGENT (SALIN TEKS DI BAWAH INI)
================================================================================

Role: AI Systems & Environment Customization Engineer

TASK:
Audit dan install template audit portofolio yang ada di folder kerja saat ini menjadi SATU Single Unified Skill secara GLOBAL. Skill ini TIDAK BOLEH di-install terpisah-pisah, melainkan harus terintegrasi menjadi satu kesatuan skill bernama `portfolio-project-data`.

Ketika skill tersebut nantinya dijalankan oleh user, skill WAJIB menampilkan menu interaktif menggunakan tool `ask_question` agar antarmuka AI Agent merender tombol/pilihan yang bisa diklik langsung (DILARANG KERAS hanya menampilkan daftar teks markdown di chat), menunggu user mengklik salah satu kategori, lalu menjalankan audit secara mendalam sesuai aturan dan template kategori yang dipilih.

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
├── SKILL.md                          # Entry point utama (Clickable UI Menu & Routing)
└── references/                       # Modul spesifikasi lengkap tiap kategori
    ├── ai-engineering.md
    ├── code-learning.md
    ├── data-analytics.md
    ├── desktop-mobile-app.md
    ├── machine-learning.md
    ├── ui-ux-design.md
    └── web-development.md

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
  Universal project auditor and portfolio case study generator. Audits any software, AI, data, mobile/desktop, learning, or UI/UX project directory and generates a complete, compliant ProjectCaseStudy Markdown file. When executed, it interactively presents category options for user selection via ask_question before performing the audit.
---

# Universal Portfolio Project Auditor (`portfolio-project-data`)

Skill ini mengaudit direktori project secara komprehensif lintas format file, mengekstrak bukti implementasi dan evaluasi teknis, serta menghasilkan file Markdown (`<project-id>.md`) berisi data `ProjectCaseStudy` yang siap diintegrasikan ke `src/data/projects/projectsData.ts`.

---

## ⚡ PROTOKOL INTERAKTIF WAJIB: PEMILIHAN KATEGORI PROJECT (CLICKABLE INTERACTIVE UI)

Ketika skill ini dijalankan atau dipicu oleh user (contoh pemicu: "audit project ini", "generate portfolio data", "buat case study portofolio", atau slash command `/portfolio-project-data`):

### Kondisi A — Kategori Sudah Disebutkan Eksplisit
Jika pengguna sudah menyebutkan kategori project secara eksplisit saat memanggil skill (misalnya: *"audit project ini untuk web development"*, *"generate portfolio data AI Engineering"*), **JANGAN tampilkan menu**. Langsung gunakan kategori tersebut dan jalankan audit.

### Kondisi B — Kategori Belum Disebutkan (Clickable Interactive UI)
> [!IMPORTANT]
> **DILARANG KERAS** menampilkan menu hanya sebagai pesan teks biasa atau daftar markdown di chat.
> **WAJIB** memanggil tool interaktif `ask_question` agar antarmuka AI Agent merender tombol/pilihan yang bisa diklik langsung (*clickable options/buttons*) oleh pengguna!

Panggil tool `ask_question` dengan parameter persis berikut:

```json
{
  "questions": [
    {
      "question": "Silakan pilih kategori project yang ingin diaudit untuk penyusunan data ProjectCaseStudy:",
      "is_multi_select": false,
      "options": [
        "AI Engineering (portfolio-ai-engineering)",
        "Code Learning (portfolio-code-learning)",
        "Data Analytics (portfolio-data-analytics)",
        "Desktop & Mobile App (portfolio-desktop-mobile-app)",
        "Machine Learning (portfolio-machine-learning)",
        "UI/UX Design (portfolio-ui-ux-design)",
        "Web Development (portfolio-web-development)"
      ]
    }
  ]
}
```

### Ketentuan Mutlak Menu Interaktif:
1. **Clickable UI via `ask_question`**: AI Agent **wajib** memanggil tool `ask_question` untuk menyajikan menu, sehingga pengguna tinggal mengklik salah satu tombol opsi di interface.
2. **Single Select**: `is_multi_select: false`. Pengguna hanya memilih tepat satu kategori.
3. **Hanya 7 Kategori Utama**: Masukkan tepat 7 opsi tersebut tanpa penomoran manual pada teks (UI akan otomatis menambahkan penomoran) dan tanpa opsi "Other" manual (UI akan menyediakannya secara otomatis).
4. **JANGAN Menampilkan Subkategori**: Dilarang menampilkan daftar subkategori atau deskripsi panjang di bawah opsi.
5. **Pemilihan Kategori Hanya SATU KALI**: Pengguna cukup mengklik satu kali.
6. **Eksekusi Langsung Pasca-Klik**: Begitu pengguna mengklik kategori (respons diterima dari tool `ask_question`), AI Agent **wajib langsung melanjutkan ke tahap eksekusi audit**.

---

## 🚀 EKSEKUSI AUDIT SESUAI KATEGORI PILIHAN

Setelah kategori ditentukan (dari respon `ask_question` atau instruksi eksplisit pengguna):

1. **Konfirmasi Singkat**: Berikan pesan: *"Kategori terpilih: [Nama Kategori]. Memulai audit komprehensif direktori..."*
2. **Buka & Baca File Modul Referensi Internal**: Buka dan baca file modul referensi yang bersangkutan dari folder `references/`:
   - AI Engineering -> [references/ai-engineering.md](./references/ai-engineering.md)
   - Code Learning -> [references/code-learning.md](./references/code-learning.md)
   - Data Analytics -> [references/data-analytics.md](./references/data-analytics.md)
   - Desktop & Mobile App -> [references/desktop-mobile-app.md](./references/desktop-mobile-app.md)
   - Machine Learning -> [references/machine-learning.md](./references/machine-learning.md)
   - UI/UX Design -> [references/ui-ux-design.md](./references/ui-ux-design.md)
   - Web Development -> [references/web-development.md](./references/web-development.md)
3. **Jalankan Protokol Audit Direktori Multi-Format Sesuai Panduan Kategori**:
   - Inspeksi source code, manifest, schema, logs, diagram, dokumen, dan screenshot di direktori target.
   - Patuhi seluruh batasan karakter teks (`summary` maks 150 char, `projectDescription` 250-300 char, telemetry, dsb.).
   - Pastikan penamaan folder aset gambar lokal (`/images/projects/<nama_project>/`) dan format gambar sesuai aturan.
   - Bersihkan `techStack` dari nomor versi dan tanda kurung.
   - Hasilkan konten data dalam bahasa Inggris teknis profesional (Professional Technical English).
4. **Simpan Output**: Buat file output `<project-id>.md` langsung di dalam root direktori project yang diaudit.
```

--------------------------------------------------------------------------------
4. VERIFIKASI & LAPORAN HASIL INSTALASI
--------------------------------------------------------------------------------
Setelah proses instalasi selesai:
1. Verifikasi keberadaan file `SKILL.md` dan ke-7 file di dalam direktori `references/`.
2. Tampilkan laporan ringkas kepada user yang mencantumkan:
   - Lokasi folder instalasi global skill.
   - Status registrasi skill `portfolio-project-data`.
   - Konfirmasi bahwa alur interaktif pemilihan kategori 1-7 menggunakan tool `ask_question` (clickable buttons) sudah aktif.
   - Contoh perintah untuk langsung menjalankan skill tersebut.
================================================================================
```

---

## 💻 ALTERNATIF: INSTALASI CEPAT DENGAN POWERSHELL SCRIPT
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
  Universal project auditor and portfolio case study generator. Audits any software, AI, data, mobile/desktop, learning, or UI/UX project directory and generates a complete, compliant ProjectCaseStudy Markdown file. When executed, it interactively presents category options for user selection via ask_question before performing the audit.
---

# Universal Portfolio Project Auditor (`portfolio-project-data`)

Skill ini mengaudit direktori project secara komprehensif lintas format file, mengekstrak bukti implementasi dan evaluasi teknis, serta menghasilkan file Markdown (`<project-id>.md`) berisi data `ProjectCaseStudy` yang siap diintegrasikan ke `src/data/projects/projectsData.ts`.

---

## ⚡ PROTOKOL INTERAKTIF WAJIB: PEMILIHAN KATEGORI PROJECT (CLICKABLE INTERACTIVE UI)

Ketika skill ini dijalankan atau dipicu oleh user (contoh: "audit project ini", "generate portfolio data", "buat case study portofolio"):

### Kondisi A — Kategori Sudah Disebutkan Eksplisit
Jika pengguna sudah menyebutkan kategori project secara eksplisit saat memanggil skill (misalnya: *"audit project ini untuk web development"*, *"generate portfolio data AI Engineering"*), **JANGAN tampilkan menu**. Langsung gunakan kategori tersebut dan jalankan audit.

### Kondisi B — Kategori Belum Disebutkan (Clickable Interactive UI)
> [!IMPORTANT]
> **DILARANG KERAS** menampilkan menu hanya sebagai pesan teks biasa atau daftar markdown di chat.
> **WAJIB** memanggil tool interaktif `ask_question` agar antarmuka AI Agent merender tombol/pilihan yang bisa diklik langsung (*clickable options/buttons*) oleh pengguna!

Panggil tool `ask_question` dengan parameter persis berikut:

```json
{
  "questions": [
    {
      "question": "Silakan pilih kategori project yang ingin diaudit untuk penyusunan data ProjectCaseStudy:",
      "is_multi_select": false,
      "options": [
        "AI Engineering (portfolio-ai-engineering)",
        "Code Learning (portfolio-code-learning)",
        "Data Analytics (portfolio-data-analytics)",
        "Desktop & Mobile App (portfolio-desktop-mobile-app)",
        "Machine Learning (portfolio-machine-learning)",
        "UI/UX Design (portfolio-ui-ux-design)",
        "Web Development (portfolio-web-development)"
      ]
    }
  ]
}
```

### Ketentuan Mutlak Menu Interaktif:
1. **Clickable UI via `ask_question`**: AI Agent **wajib** memanggil tool `ask_question` untuk menyajikan menu, sehingga pengguna tinggal mengklik salah satu tombol opsi di interface.
2. **Single Select**: `is_multi_select: false`. Pengguna hanya memilih tepat satu kategori.
3. **Hanya 7 Kategori Utama**: Masukkan tepat 7 opsi tersebut tanpa penomoran manual pada teks (UI akan otomatis menambahkan penomoran) dan tanpa opsi "Other" manual (UI akan menyediakannya secara otomatis).
4. **JANGAN Menampilkan Subkategori**: Dilarang menampilkan daftar subkategori atau deskripsi panjang di bawah opsi.
5. **Pemilihan Kategori Hanya SATU KALI**: Pengguna cukup mengklik satu kali.
6. **Eksekusi Langsung Pasca-Klik**: Begitu pengguna mengklik kategori (respons diterima dari tool `ask_question`), AI Agent **wajib langsung melanjutkan ke tahap eksekusi audit**.

---

## 🚀 EKSEKUSI AUDIT SESUAI KATEGORI PILIHAN

Setelah kategori ditentukan (dari respon `ask_question` atau instruksi eksplisit pengguna):

1. **Konfirmasi Singkat**: Berikan pesan: *"Kategori terpilih: [Nama Kategori]. Memulai audit komprehensif direktori..."*
2. **Buka & Baca File Modul Referensi Internal**: Buka dan baca file modul referensi yang bersangkutan dari folder `references/`:
   - AI Engineering -> [references/ai-engineering.md](./references/ai-engineering.md)
   - Code Learning -> [references/code-learning.md](./references/code-learning.md)
   - Data Analytics -> [references/data-analytics.md](./references/data-analytics.md)
   - Desktop & Mobile App -> [references/desktop-mobile-app.md](./references/desktop-mobile-app.md)
   - Machine Learning -> [references/machine-learning.md](./references/machine-learning.md)
   - UI/UX Design -> [references/ui-ux-design.md](./references/ui-ux-design.md)
   - Web Development -> [references/web-development.md](./references/web-development.md)
3. **Jalankan Protokol Audit Direktori Multi-Format Sesuai Panduan Kategori**:
   - Inspeksi source code, manifest, schema, logs, diagram, dokumen, dan screenshot di direktori target.
   - Patuhi seluruh batasan karakter teks (`summary` maks 150 char, `projectDescription` 250-300 char, telemetry, dsb.).
   - Pastikan penamaan folder aset gambar lokal (`/images/projects/<nama_project>/`) dan format gambar sesuai aturan.
   - Bersihkan `techStack` dari nomor versi dan tanda kurung.
   - Hasilkan konten data dalam bahasa Inggris teknis profesional (Professional Technical English).
4. **Simpan Output**: Buat file output `<project-id>.md` langsung di dalam root direktori project yang diaudit.
'@ | Out-File -FilePath "$targetDir\SKILL.md" -Encoding utf8

Write-Host "✅ Sukses menginstall global skill 'portfolio-project-data' ke $targetDir" -ForegroundColor Green
```
