# Aturan & Profil Tema Warna Website Portofolio (`colortheme.md`)

Dokumen ini menjadi acuan baku aturan visual, token warna, permukaan (*surfaces*), aksen neon, serta pemetaan tema warna di seluruh modul website portofolio — mulai dari fondasi UI, **3D Particle Canvas**, **Category Project**, **Domain Expertise**, **Tech Stack & Soft Skills**, hingga komponen pendukung lainnya.

> **Filosofi Tema:** **"Obsidian & Synaptic Neon"** — Latar belakang gelap obsidian pekat dengan kartu *glassmorphic* transparan, batas tipis (*1px specular borders*), dan warna aksen neon terkontrol yang masing-masing terikat semantik ke disiplin rekayasa tertentu.

---

## 1. Fondasi Palet Global (Root Canvas, Surface & Tipografi)

Dikonfigurasi pada [tailwind.config.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/tailwind.config.ts) dan [globals.css](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/globals.css):

### 1.1 Latar Belakang & Surface (Obsidian Scale)

| Token / Kelas | Hex Code | Penggunaan Standar |
| :--- | :--- | :--- |
| `obsidian-950` | `#06070A` | Background root `html`/`body`, scrollbar track, overlay vignette. |
| `obsidian-900` | `#0C0F17` | Background card utama & modal (biasanya `/65`–`/90` + `backdrop-blur-xl`). |
| `Deep HUD Surface` | `#080B14` | Kartu section Projects, Certifications, Experience, Contact (`bg-[#080B14]/85`). |
| `obsidian-800` | `#121723` | Panel nested, code block header, sub-panel kontrol. |
| `obsidian-700` | `#1A2133` | Elevated surface, active border & scrollbar thumb base (`#1E293B`). |
| `Inset Dark Panel` | `rgba(0,0,0,0.4–0.6)` | Panel dalam kartu, badge metadata kode, telemetry deck (`bg-black/50`). |

### 1.2 Hierarki Teks & Border

| Peran Teks / Border | Token Tailwind | Hex / Nilai | Keterangan |
| :--- | :--- | :--- | :--- |
| **Headline Utama** | `text-white` / `text-slate-100` | `#FFFFFF` / `#F1F5F9` | Judul section (`H1`–`H3`), judul kartu, nilai metrik besar. |
| **Body Copy** | `text-slate-300` | `#CBD5E1` | Paragraf deskripsi, konten teknis, narasi proyek. |
| **Metadata Sekunder** | `text-slate-400` | `#94A3B8` | Subtitle, label monospace kecil, timestamp, tab non-aktif. |
| **Label Mikro / Muted** | `text-slate-500` | `#64748B` | Audit note footer, label koordinat pasif, grid marker. |
| **Border Default Card** | `border-white/10` | `rgba(255,255,255,0.10)` | Batas luar glassmorphic card dalam kondisi idle. |
| **Border Inset Subtle** | `border-white/[0.07]` / `/5` | `rgba(255,255,255,0.05–0.07)` | Pemisah halus antar panel dalam atau navbar default. |
| **Teks Seleksi (`::selection`)** | `sky` translucency | `rgba(56,189,248,0.28)` | Highlight biru cyan lembut dengan teks `#FFFFFF`. |

### 1.3 Gradient Judul Section & Primary CTA Global

- **Gradient Highlight Judul (`H2` di Sections):** `bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent`
- **Primary Gradient CTA:** `from-sky-400 via-sky-300 to-indigo-400` dengan teks `text-slate-950` dan glow `rgba(56,189,248,0.35)`–`0.60`.
- **3D Particle Engine ([SynapticParticleCanvas.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/canvas/SynapticParticleCanvas.tsx)):**
  - Interpolasi 4 warna inti GLSL: **Synaptic Cyan** (`#38BDF8` / `vec3(0.220, 0.741, 0.973)`) → **Tensor Indigo** (`#818CF8` / `vec3(0.506, 0.549, 0.973)`) → **Data Emerald** (`#34D399` / `vec3(0.204, 0.827, 0.600)`) → **Warm Amber** (`#F59E0B` / `vec3(0.961, 0.620, 0.043)`).
  - Interaksi kursor & shockwave pulse bergeser ke bright electric cyan-white.

---

## 2. Profil Warna Category Project (`7 Kategori`)

Setiap kategori project di [ProjectsSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/ProjectsSection.tsx), [projectsData.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/projects/projectsData.ts), dan Detail View masing-masing memiliki profil warna tetap berikut:

| No | Category (`category`) | Prefix `code` | `accentColor` (Data & Detail View) | Warna Filter & Pagination (`ProjectsSection.tsx`) | Hex Inti / Glow | Surface Gelap Detail View (`bg`) |
| :-: | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `web-development` | `WEB-XX` | **`cyan`** | **`sky`** (`sky-400`) | `#06B6D4` / `#38BDF8` | `bg-[#070D12]/90` · `bg-[#070D14]/95` |
| 2 | `data-analysis` | `DA-XX` | **`emerald`** | **`emerald`** (`emerald-400`) | `#10B981` / `#34D399` | `bg-[#070D0E]/90` · `bg-[#070E0F]/95` |
| 3 | `ai-engineering` | `AI-XX` | **`purple`** | **`purple`** (`purple-400`) | `#A855F7` / `#C084FC` | `bg-[#0A0713]/90` · `bg-[#10081E]/95` |
| 4 | `machine-learning` | `ML-XX` | **`indigo`** | **`indigo`** (`indigo-400`) | `#6366F1` / `#818CF8` | `bg-[#070914]/90` · `bg-[#0A0D1A]/95` |
| 5 | `desktop-mobile` | `APP-XX` | **`amber`** | **`amber`** (`amber-400`) | `#F59E0B` / `#FBBF24` | `bg-[#0A0D17]/85` · gradasi `amber-400 -> yellow-400` |
| 6 | `ui-ux` | `UX-XX` | **`rose`** *(detail & cards)* | **`fuchsia`** (`fuchsia-400`) | `#F43F5E` / `#E879F9` | `bg-[#0E070B]/90` · `bg-[#0D0B1B]/95` |
| 7 | `code-learning` | `CL-XX` | **`orange`** | **`orange`** (`orange-400` / `500`) | `#F97316` / `#FB923C` | `bg-[#0F0A06]/90` · `bg-[#1A0F08]/95` |

> **Catatan Konsistensi Project:**
> - Nilai `accentColor` di [projectsData.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/projects/projectsData.ts) **wajib persis** mengikuti kolom `accentColor` di atas (`cyan`, `emerald`, `purple`, `indigo`, `amber`, `rose`, `orange`) — selaras dengan [projectsdata.md](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/RULES/projectsdata.md).
> - Khusus tab filter `"All Projects"`, sistem menggunakan warna default **`sky`** (`#38BDF8`).
> - Khusus `ui-ux`, tombol filter & pagination memakai spektrum **Fuchsia (`fuchsia-400`)** sedangkan kartu detail, HUD spec, dan repo card memakai spektrum **Rose (`rose-400`/`rose-500`)** agar kontras dengan komponen lain.

---

## 3. Profil Warna Domain Expertise (`4 Pilar Utama`)

Dikelola pada [DomainsSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/DomainsSection.tsx) (`getPillarStyles`) dan [domainPillars.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/domains/domainPillars.ts):

| Index | ID Pillar (`DomainPillar.id`) | Judul Domain | Tema Warna | 3D Particle Formation | Kelas Kunci UI (`DomainsSection.tsx`) |
| :---: | :--- | :--- | :--- | :--- | :--- |
| `01` | `web-development` | Full-Stack Web Development | **Sky / Cyan** | `"wave"` | `border-sky-500/25`, selected `border-sky-400`, icon `text-sky-400`, pill `bg-sky-400/10 text-sky-300`, glow `rgba(56,189,248,0.2–0.3)` |
| `02` | `data-analytics` | Data Analytics & BI | **Emerald** | `"helix"` | `border-emerald-500/25`, selected `border-emerald-400`, icon `text-emerald-400`, pill `bg-emerald-400/10 text-emerald-300`, glow `rgba(16,185,129,0.2–0.3)` |
| `03` | `ai-engineering` | AI & LLM Systems | **Purple** | `"neural"` | `border-purple-500/25`, selected `border-purple-400`, icon `text-purple-400`, pill `bg-purple-400/10 text-purple-300`, glow `rgba(192,132,252,0.2–0.3)` |
| `04` | `machine-learning` | End-to-End ML Systems | **Indigo** | `"clusters"` | `border-indigo-500/25`, selected `border-indigo-400`, icon `text-indigo-400`, pill `bg-indigo-400/10 text-indigo-300`, glow `rgba(129,140,248,0.2–0.3)` |

- Background kondisi kartu pillar aktif (`borderSelected`): `bg-[#0A0D17]/95` dengan `shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_40px_<accent_glow>]`.

---

## 4. Profil Warna Tech Stack & Skills Matrix

### 4.1 Technical Skills Matrix (`6 Kategori Skill` di `DomainsSection.tsx`)

Fungsi `getSkillCategoryStyles` & `getSkillFilterActiveStyles` pada [DomainsSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/DomainsSection.tsx) memetakan setiap `SkillCategory` ke gradasi progress bar, badge, border, dan titik meter:

| Kategori (`SkillCategory`) | Filter Prefix | Aksen Utama | Progress Bar Gradient (`barColor`) | Badge (`badge`) | Meter Shadow / Glow |
| :--- | :---: | :--- | :--- | :--- | :--- |
| `all` / `web-development` | `00` / `01` | **Sky → Cyan** | `from-sky-400 to-cyan-400` | `border-sky-400/30 bg-sky-950/40 text-sky-300` | `#38BDF8` (`rgba(56,189,248,0.18–0.35)`) |
| `data-analysis` | `02` | **Emerald → Teal** | `from-emerald-400 to-teal-400` | `border-emerald-400/30 bg-emerald-950/40 text-emerald-300` | `#34D399` (`rgba(16,185,129,0.18–0.35)`) |
| `artificial-intelligence` | `03` | **Purple → Pink** | `from-purple-400 to-pink-500` | `border-purple-400/30 bg-purple-950/40 text-purple-300` | `#C084FC` (`rgba(192,132,252,0.18–0.35)`) |
| `machine-learning` | `04` | **Indigo → Cyan** | `from-indigo-400 to-cyan-400` | `border-indigo-400/30 bg-indigo-950/40 text-indigo-300` | `#818CF8` (`rgba(129,140,248,0.18–0.35)`) |
| `project-management` | `05` | **Amber → Orange** | `from-amber-400 to-orange-400` | `border-amber-400/30 bg-amber-950/40 text-amber-300` | `#FBBF24` (`rgba(245,158,11,0.18–0.35)`) |
| `office-productivity` / `office` | `06` | **Fuchsia → Pink** | `from-fuchsia-400 to-pink-500` | `border-fuchsia-400/30 bg-fuchsia-950/40 text-fuchsia-300` | `#E879F9` (`rgba(232,121,249,0.18–0.35)`) |

### 4.2 Soft Skills Matrix (`SOFT_SKILLS_MATRIX`)

Diatur di [softSkills.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/domains/softSkills.ts) dan dirender pada bagian bawah [DomainsSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/DomainsSection.tsx) dengan 6-channel spectrum bar:

| Kompetensi (`SoftSkillItem`) | Tag (`categoryTag`) | `accent` | Bar Gradient | Glow Shadow Hover |
| :--- | :--- | :---: | :--- | :--- |
| Analytical Thinking & Problem Solving | `Cognitive` | `sky` | `from-sky-400 to-cyan-400` | `rgba(56,189,248,0.12)` |
| Technical Communication & Storytelling | `Communication` | `emerald` | `from-emerald-400 to-teal-400` | `rgba(16,185,129,0.12)` |
| Cross-Functional Team Collaboration | `Collaboration` | `indigo` | `from-indigo-400 to-purple-400` | `rgba(129,140,248,0.12)` |
| Proactive Initiative & Ownership | `Ownership` | `amber` | `from-amber-400 to-orange-400` | `rgba(245,158,11,0.12)` |
| Adaptability & Continuous Learning | `Agility` | `fuchsia` | `from-fuchsia-400 to-pink-500` | `rgba(232,121,249,0.12)` |
| Time Management & Attention to Detail | `Execution` | `rose` | `from-rose-400 to-red-500` | `rgba(251,113,133,0.12)` |

### 4.3 Komponen Shared Project Detail (`CyberAccentColor`)

Digunakan seragam oleh [CyberTechStackSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/projects/CyberTechStackSection.tsx) (Section 4), [CyberRepoCard.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/projects/CyberRepoCard.tsx) (Section 1 & Section 6 Card 1), dan [CyberSpecCard.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/projects/CyberSpecCard.tsx) (Section 6 Card 2 & 3). Mendukung **8 token warna**:

`sky` | `cyan` | `emerald` | `purple` | `indigo` | `amber` | `rose` | `orange`

Aturan desain per token:
- **Border Idle / Hover:** `border-<color>-500/30` → `hover:border-<color>-400/60` (`amber` memakai `border-amber-400/30` → `hover:border-amber-400/70`).
- **Icon Box Tech Item:** `border-<color>-400/30 bg-<color>-500/15 text-<color>-300`.
- **Action Button Gradient (`CyberRepoCard` Public Repo):**
  - `sky`: `from-sky-400 to-cyan-500` (`text-black`)
  - `cyan`: `from-cyan-400 to-sky-500` (`text-black`)
  - `emerald`: `from-emerald-400 to-teal-500` (`text-black`)
  - `purple`: `from-purple-500 to-violet-500` (`text-white`)
  - `indigo`: `from-indigo-500 to-blue-600` (`text-white`)
  - `amber`: `from-amber-400 via-yellow-400 to-amber-300` (`text-slate-950`)
  - `rose`: `from-rose-500 to-pink-500` (`text-white`)
  - `orange`: `from-orange-500 to-amber-500` (`text-white`)
- **Private Repository (Semua Kategori):** Card 1 dan Card 2 dalam status terkunci memakai gaya netral gelap atau disabled border tanpa tautan eksternal (`RESTRICTED` / `PRIVATE REPOSITORY`).

---

## 5. Profil Warna Section & Komponen Lainnya

### 5.1 Hero Section ([HeroSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/HeroSection.tsx))
- **Avatar Radial Halo:** `from-sky-500/30 via-indigo-500/20 to-emerald-500/30` dengan SVG gradient stroke `#38BDF8` → `#818CF8` → `#34D399`.
- **4 Kartu Metric HUD (`METRIC_HUD_CONFIG`):**
  - Card `01` (`ACTIVE` / `[STABLE]`): **Sky** (`#38BDF8`, `hover:bg-[#0F172A]/70`)
  - Card `02` (`DEPLOYED` / `[PROD-READY]`): **Emerald** (`#34D399`, `hover:bg-[#062419]/50`)
  - Card `03` (`VERIFIED` / `[ACCREDITED]`): **Indigo** (`#818CF8`, `hover:bg-[#131336]/50`)
  - Card `04` (`HONORS` / `[CUM LAUDE]`): **Amber** (`#F59E0B`, `hover:bg-[#241705]/50`)

### 5.2 Experience, Education & Publications ([ExperienceSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/ExperienceSection.tsx) & [PublicationDetailView.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/publications/PublicationDetailView.tsx))
- **Work Experience Timeline:** Aksen **Blue** (`border-blue-400/60`, glow `rgba(59,130,246,0.25)`, titik timeline `bg-blue-400 shadow-[0_0_6px_#60a5fa]`).
- **Education / Degree Showcase:** Aksen **Purple** (`border-purple-400/60`, glow `rgba(168,85,247,0.25)`).
- **Publications Section & Detail View:** Aksen utama **Amber / Gold** (`border-amber-400/30`–`70`, CTA `from-amber-400 via-yellow-400 to-amber-300 text-slate-950`, selection `selection:bg-amber-400/30`), didukung badge sekunder **Blue** (`blue-400`) & **Emerald** (`emerald-400`), serta metric cards detail view beraksen `amber`, `sky`, dan `purple`.

### 5.3 Certifications & Credentials ([CertificationsSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/CertificationsSection.tsx) & [CertificationDetailView.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/certifications/CertificationDetailView.tsx))
- **Registry Telemetry Counter Badge:** **Emerald** (`border-emerald-500/25`, ping beacon `bg-emerald-400`, gradient angka `from-emerald-400 via-teal-300 to-sky-400`).
- **Detail View Shell & Header:** **Sky** (`border-sky-500/20`, corner crosshairs `border-sky-400/60`) + CTA `from-sky-950/80 via-[#0B1226] to-indigo-950/80`.
- **6 Accent Sertifikat (`CertAccentColor`):** `sky`, `indigo`, `emerald`, `amber`, `fuchsia`, `rose` (seragam dengan 6 aksen kartu sertifikat di grid utama dan detail view).

### 5.4 Interactive Lab ([InteractiveLabSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/InteractiveLabSection.tsx))
- Grafik SVG, slider kontrol, dan data visualisasi simulasi menggunakan warna token data:
  - Series / Slider 1: **Synaptic Cyan** (`#38BDF8` / `accent-sky-400`)
  - Series / Slider 2: **Tensor Indigo** (`#818CF8` / `accent-indigo-400`)
  - Series / Slider 3: **Data Emerald** (`#34D399` / `accent-emerald-400`)
  - Alert / Threshold Marker: **Warm Amber** (`#F59E0B`)
  - Axis / Grid Label: **Muted Slate** (`#64748B`)

### 5.5 Contact Terminal & Footer ([ContactSection.tsx](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/ContactSection.tsx))
- **Availability Status Card:** **Emerald** (`border-emerald-500/25`, pulsing indicator `#34D399`).
- **Message Transmission Terminal & Footer HUD:** **Sky** (`border-sky-400/40`, glow `rgba(56,189,248,0.15–0.20)`) dengan submit hover transisi ke **Emerald** (`hover:border-emerald-400/80`).

---

## 6. Aturan Kepatuhan Warna (Do's & Don'ts)

1. **Jangan Memakai Background Putih Terang atau Hitam Datar (`#000000` polos):** Seluruh permukaan kartu wajib berada pada skala Obsidian (`#06070A`–`#121723` dengan transparansi `/65`–`/95` dan `backdrop-blur`), kecuali elemen teks kontras di atas tombol neon terang (`amber`/`sky`/`cyan`/`emerald` memakai `text-slate-950` atau `text-black`).
2. **Satu Disiplin = Satu Warna Aksen Utama:** Saat menambah data project baru ke [projectsData.ts](file:///c:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/projects/projectsData.ts) atau skill baru ke `technicalSkills.ts`, gunakan token aksen yang tertera pada tabel Section 2, Section 3, dan Section 4 — dilarang menukar warna antar kategori (misal memberi `emerald` untuk `ai-engineering`).
3. **Konsistensi HUD Crosshairs & Glow:** Sudut crosshair (`h-2.5 w-2.5 border-t-2 border-l-2`) dan neon glow pada hover kartu wajib menggunakan spektrum warna yang sama dengan border aktif kartu tersebut (umumnya shade `-400` untuk border/teks utama, shade `-300` untuk teks badge terang, dan opacity `/10`–`/25` untuk background pill).
4. **Kontras Aksesibilitas:** Pastikan rasio kontras teks deskripsi di atas background obsidian tetap terbaca (`text-slate-200` atau `text-slate-300` di atas `#080B14`/`#0C0F17`, hindari teks abu-abu terlalu gelap pada paragraf panjang).
5. **Sinkronisasi Token UI/UX Case Studies:** Khusus properti `uiUxDesignSystem.colorPalette[].hex` di dalam data project UI/UX, format hex harus valid `#RRGGBB` sesuai palet riil desain studi kasus tersebut, sementara *wrapper UI* halaman portofolionya tetap mengikuti tema **Rose / Fuchsia Obsidian** di Section 2.
