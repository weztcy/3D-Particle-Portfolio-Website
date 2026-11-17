---
name: portfolio-desktop-mobile-app
description: >-
  Audits a Desktop or Mobile application project directory comprehensively (native/cross-platform source code, manifests, installers/APKs/binaries, offline storage schemas, OS/hardware integrations, screenshots, docs, and test reports) and generates a complete portfolio ProjectCaseStudy Markdown (.md) file compliant with RULES/projectsdata.md and src/data/types.ts. Save the generated .md file inside the analyzed project directory.
---

# Desktop & Mobile App Portfolio Data Generator (`portfolio-desktop-mobile-app`)

Skill ini mengaudit sebuah direktori project **Desktop & Mobile App** (Electron, Tauri, Flutter, React Native, Kotlin/Swift, C#/.NET, Python Desktop, C++/Qt) secara menyeluruh lintas format file, mengekstrak bukti arsitektur client & integrasi OS, dan menghasilkan file Markdown (`.md`) berisi data `ProjectCaseStudy` yang disimpan langsung ke dalam root folder direktori project yang sedang dibuka dengan format penamaan nama direktori project (jangan disimpan di `src/data/projects/projectsData.ts`).

---

## 1. Identitas & Konstanta Kategori

- **Category (`category`)**: `"desktop-mobile"` (tetap konstan `"desktop-mobile"`)
- **Deteksi Kategori Label (`categoryLabel`)**:
  - Wajib dideteksi secara dinamis berdasarkan hasil inspeksi direktori project:
    - `"Mobile App"`: Jika project murni aplikasi mobile (Android, iOS, Flutter Mobile, React Native Mobile, Swift, Kotlin, dsb.).
    - `"Desktop App"`: Jika project murni aplikasi desktop (Electron, Tauri, C#/.NET WPF/WinForms, Qt/C++, Python Desktop, dsb.).
    - `"Desktop & Mobile"`: Jika project mendukung kedua platform sekaligus (*cross-platform* desktop dan mobile).
- **Accent Color (`accentColor`)**: `"amber"`
- **Code Format (`code`)**: `"PRO-XX // APP-XX"`
- **Bahasa Output Wajib**: **100% Bahasa Inggris Profesional & Teknis (Professional Technical English)**. Seluruh nilai properti data (`summary`, `overview`, `challenge`, deskripsi fitur, arsitektur, metrik, catatan audit, rekomendasi, dll.) wajib berbahasa Inggris tanpa mencampurkan bahasa Indonesia.

---

## 2. Protokol Audit Direktori Menyeluruh (Multi-Format)

Sebelum mengisi field apa pun, inspeksi **seluruh isi direktori project** (jangan hanya UI layer):

1. **Manifest Platform, Konfigurasi Build, & Installer**:
   - `package.json` + `electron-builder` / `tauri.conf.json`, `pubspec.yaml`, `AndroidManifest.xml`, `build.gradle`, `Info.plist`, `.csproj`, `pyproject.toml` / `PyInstaller` spec, atau `CMakeLists.txt`.
   - Identifikasi platform target (`Windows`, `macOS`, `Linux`, `Android`, `iOS`, `Cross-Platform`), format paket distribusi (`.exe`, `.msi`, `.dmg`, `.apk`, `.aab`, `AppImage`), arsitektur CPU (`x64`, `ARM64`), dan ukuran build jika ada binary/dist artifact (`desktopMobilePlatformSpecs`).
2. **Thread Model, Native Bridges, & Hardware/OS Integrations**:
   - IPC channels, Worker Threads / Isolates, MethodChannels, Native C++/Rust FFI, SIMD/libwebp/FFmpeg, akses filesystem lokal, notifikasi OS, kamera/sensor, atau background services.
   - Ekstrak detail mekanisme ini ke `desktopMobileArchitecture` dan `desktopMobilePlatformImplementation`.
3. **Penyimpanan Lokal, Offline Sync, & State Engine**:
   - SQLite, Realm, Hive, MMKV, IndexedDB, LocalStorage, Redux/Zustand/Bloc/Riverpod/Provider.
   - Petakan secara lengkap ke objek terstruktur `desktopMobileDataManagement`.
4. **Screenshot Aplikasi, User Flow, Manual, & Benchmark**:
   - Scan semua screenshot UI desktop/mobile (`.webp`, `.png`, `.jpg`), manual PDF/Markdown, video demo, serta hasil pengujian performa/memory/startup time.

> **Aturan Kejujuran Data:** Dilarang keras mengarang ukuran binary/installer, klaim dukungan OS, library native, atau benchmark FPS/memori yang tidak terbukti di konfigurasi build, source code, atau artefak rilis project.

---

## 3. Aturan Wajib Pengisian (`RULES/projectsdata.md`)

1. **Aset Gambar Lokal**:
   - Folder target portofolio: `/images/projects/<nama_project>/`
   - Pembentukan `<nama_project>`: ambil **maksimal 4 kata alfanumerik awal** dari `title`, ubah ke `lowercase`, pisahkan dengan `_`, abaikan tanda baca (`-`, `&`, `/`, `:`).
   - `imageUrl` & `images[0]`: `"/images/projects/<nama_project>/banner.webp"` (Hero Section 1).
   - `desktopMobileInterfaceShowcase[].imageUrl`: `"/images/projects/<nama_project>/image01.webp"`, `image02.webp`, dst. (2 digit *zero-padded*).
2. **Section 1 (Hero Console & Telemetry)**:
   - `summary`: **Maksimal 150 karakter** (termasuk spasi), padat, profesional, dan merepresentasikan value/solusi utama project.
   - `projectDescription`: **250–300 karakter** (termasuk spasi) agar padat, proporsional, dan tidak terpotong `.slice(0, 500)`.
   - `telemetryMatrix`: wajib isi **7 field**, masing-masing **maksimal 45 karakter**.
   - Repository: isi `repoUrl` & `license` jika Public; hapus/kosongkan `repoUrl` & `license` jika Private.
3. **Section 2, 3, & 5 (Struktur Wajib `desktopMobile*`)**:
   - Seluruh field Section 2–5 **WAJIB menggunakan struktur objek `desktopMobile*`** yang sesuai dengan `types.ts` (seperti `desktopMobileProblemStatements`, `desktopMobileObjectives`, `desktopMobileFeatures`, `desktopMobileUserFlow`, `desktopMobileArchitecture`, `desktopMobileDataManagement`, `desktopMobilePlatformImplementation`). **Jangan gunakan array string polos** sebagai pengganti objek terstruktur.
   - Jumlah item array di Section 2, 3, & 5 **bebas** sesuai bukti nyata.
   - **Panduan Panjang Kalimat & Narasi (Section 2, 3, 5):**
     - Narasi card tunggal (`desktopMobileBackground`, `desktopMobileArchitecture.summary`, `desktopMobileUserFlow.summary`): **250–350 karakter** (termasuk spasi).
     - Item bertipe list / array: **Bebas tanpa batasan minimum maupun maksimum** (bebas terserah menyesuaikan kedalaman dan kompleksitas riil project).
     - Caption visual (`desktopMobileInterfaceShowcase[].caption`): **80–140 karakter** (termasuk spasi).
4. **Section 4 (`techStack`)**:
   - Menggunakan satu field tunggal `techStack: string[]` tanpa pengelompokan category.
   - Wajib nama teknologi murni **tanpa nomor versi dan tanpa tanda kurung** (contoh: `"Electron"`, `"TypeScript"`, `"Flutter"`, `"Dart"`, `"SQLite"`, `"Rust"`, BUKAN `"Flutter 3.22"` atau `"SQLite 3"`).
5. **Section 6 (`desktopMobileTechSpecs` & `desktopMobilePlatformSpecs`)**:
   - `desktopMobileTechSpecs`: `{ programmingLanguage, framework, localStorage }` — bersih tanpa nomor versi.
   - `desktopMobilePlatformSpecs`: `{ targetPlatform, packageFormat, targetArchitecture, buildFootprint }` — **wajib universal untuk semua aplikasi desktop/mobile** (maks **3–4 kata per nilai**, **tanpa underscore (`_`)**, tanpa menyebut nama brand project secara hardcoded pada key/struktur).

---

## 4. Template Output Markdown (`.md`)

Simpan hasil analisis sebagai file Markdown di **dalam root folder direktori project yang sedang dibuka** dengan format penamaan nama direktori project (`<nama-direktori-project>.md`, contoh: `offline-pos-mobile-terminal.md`, jangan disimpan di `src/data/projects/projectsData.ts`).

Isi file Markdown (`<nama-direktori-project>.md`) harus mengikuti struktur berikut secara lengkap:

````markdown
# Portfolio Project Data — <Project Title>

- **Category:** `desktop-mobile` (`Mobile App` / `Desktop App` / `Desktop & Mobile`)
- **Category Label:** `Mobile App` | `Desktop App` | `Desktop & Mobile` (hasil deteksi platform)
- **Accent Color:** `amber`
- **Target Assets Folder:** `public/images/projects/<nama_project>/`
- **Required Local Images:** `banner.webp`, `image01.webp` .. `imageXX.webp`

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "<kebab-case-slug>",
  "code": "PRO-XX // APP-XX",
  "title": "<Project Title>",
  "category": "desktop-mobile",
  "categoryLabel": "<'Mobile App' | 'Desktop App' | 'Desktop & Mobile'>",
  "year": "<YYYY>",
  "status": "Completed",
  "accentColor": "amber",
  "repoUrl": "<https://github.com/... atau hapus field ini jika Private>",
  "license": "<MIT License atau hapus jika Private>",
  "imageUrl": "/images/projects/<nama_project>/banner.webp",
  "images": [
    "/images/projects/<nama_project>/banner.webp"
  ],
  "summary": "<Maksimal 150 karakter: ringkasan masalah & solusi utama>",
  "projectDescription": "<250-300 karakter untuk Hero Console Section 1>",
  "architectureSummary": "<Ringkasan alur arsitektur satu baris>",
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
  "desktopMobileProjectInfo": {
    "applicationType": "<Misal Native Desktop Utility / Cross-Platform Mobile App>",
    "targetPlatform": "<Misal Windows & macOS / Android & iOS>",
    "developmentStatus": "Completed",
    "developmentYear": "<YYYY>",
    "applicationCategory": "<Domain Aplikasi>"
  },
  "desktopMobileBackground": "<Paragraf latar belakang masalah workflow/performa perangkat yang melatarbelakangi aplikasi>",
  "desktopMobileProblemStatements": [
    {
      "title": "<Problem Title>",
      "description": "<Penjelasan hambatan nyata pada workflow/aplikasi lama>",
      "issueCode": "ISSUE_01"
    }
  ],
  "desktopMobileObjectives": [
    {
      "title": "<Objective Title>",
      "description": "<Target teknis terukur aplikasi>",
      "targetTag": "TARGET_01"
    }
  ],
  "desktopMobileFeatures": [
    {
      "title": "<Feature Title>",
      "description": "<Penjelasan fungsionalitas inti di sisi client>",
      "badge": "<Short Badge>",
      "metric": "<Metrik operasional jika ada>"
    }
  ],
  "desktopMobileInterfaceShowcase": [
    {
      "imageUrl": "/images/projects/<nama_project>/image01.webp",
      "caption": "<Penjelasan layar/fitur aplikasi pada screenshot>",
      "badge": "<View Tag>"
    }
  ],
  "desktopMobileUserFlow": {
    "summary": "<Penjelasan alur interaksi pengguna dalam aplikasi>",
    "steps": [
      {
        "step": "01",
        "title": "<Flow Step Title>",
        "description": "<Aksi pengguna dan respons state/UI/native module>",
        "actorOrNode": "<User / UI Thread / Native Worker>"
      }
    ]
  },
  "desktopMobileArchitecture": {
    "summary": "<Penjelasan topologi layer UI, state, native bridge, dan penyimpanan>",
    "layers": [
      {
        "name": "<Layer Name>",
        "role": "<Tanggung jawab layer>",
        "tech": "<Clean Tech Tag>",
        "components": ["<Component 1>", "<Component 2>"]
      }
    ]
  },
  "desktopMobileDataManagement": {
    "storageType": "<Misal Embedded Relational SQLite / App File Sandbox>",
    "stateEngine": "<Misal Reactive Store / BLoC / Zustand>",
    "offlineSyncStrategy": "<Strategi operasional luring atau queue sinkronisasi>",
    "cachingMechanism": "<Strategi caching memori/aset/thumbnail lokal>"
  },
  "desktopMobilePlatformImplementation": [
    {
      "title": "<Native / OS Implementation Title>",
      "description": "<Detail teknis interaksi dengan OS API, threading, hardware, atau packaging>",
      "badge": "<Domain Badge>"
    }
  ],
  "desktopMobileTechSpecs": {
    "programmingLanguage": "<Clean Language Tanpa Versi>",
    "framework": "<Clean Framework Tanpa Versi>",
    "localStorage": "<Clean Storage Tanpa Versi>"
  },
  "desktopMobilePlatformSpecs": {
    "targetPlatform": "<Max 3-4 Kata Tanpa Underscore>",
    "packageFormat": "<Max 3-4 Kata Tanpa Underscore>",
    "targetArchitecture": "<Max 3-4 Kata Tanpa Underscore>",
    "buildFootprint": "<Max 3-4 Kata Tanpa Underscore>"
  }
}
```
````

---

## 5. Checklist Verifikasi Sebelum Menyimpan

- [ ] **Bahasa Output:** Seluruh teks data output 100% Bahasa Inggris profesional & teknis (tanpa bahasa Indonesia).
- [ ] Seluruh manifest platform (`package.json`, `pubspec.yaml`, `AndroidManifest.xml`, `tauri.conf.json`), binary/installer, screenshot, manual, dan kode native telah diperiksa.
- [ ] `category` = `"desktop-mobile"`, `categoryLabel` ditentukan akurat berdasarkan platform (`"Mobile App"` / `"Desktop App"` / `"Desktop & Mobile"`), `accentColor` = `"amber"`.
- [ ] Seluruh Section 2, 3, & 5 memakai struktur `desktopMobile*` yang terdefinisi di `types.ts`.
- [ ] `projectDescription` berjumlah **250–300 karakter**; semua 7 nilai `telemetryMatrix` **maks 45 karakter**.
- [ ] `techStack[]` dan `desktopMobileTechSpecs` **bebas nomor versi** dan tanda kurung.
- [ ] `desktopMobilePlatformSpecs` menggunakan 4 nilai universal (maks 3–4 kata, tanpa underscore `_`).
- [ ] Path showcase memakai `"/images/projects/<nama_project>/image01.webp"` dst., sedangkan hero memakai `banner.webp`.
- [ ] File `.md` berhasil disimpan di dalam **root folder direktori project yang sedang dibuka** dengan format penamaan nama direktori project (`<nama-direktori-project>.md`), bukan di `src/data/projects/projectsData.ts`.
