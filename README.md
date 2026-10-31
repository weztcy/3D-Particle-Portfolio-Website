# Yohanes Dimas Pratama — Personal Portfolio (Next.js + Tailwind CSS + Three.js GLSL)

Website personal portfolio profesional bertema **Futuristic 3D Particle & Synaptic Dark UI** untuk **Yohanes Dimas Pratama** (*AI Engineer · Data Analyst · Machine Learning Engineer · Full-Stack & 3D Web Developer*).

## ✨ Fitur Utama

1. **Interactive 3D Synaptic Particle Engine (`Three.js` + Custom `GLSL` Shaders)**
   - Merender **18.432 partikel bercahaya** (otomatis menyesuaikan kepadatan pada perangkat mobile) dengan *additive blending*, *depth attenuation*, serta jaringan sinaptik dinamis (`THREE.LineSegments`).
   - **5 Formasi Topologi 3D yang Dapat Bertransformasi (*Smooth GPU Morphing*)**:
     - `M-01 // Harmonic Wave`: Gelombang tensor sinusoidal 3D interaktif.
     - `M-02 // Neural Torus`: Manifold perhatian (*attention torus*) berlapis.
     - `M-03 // Latent UMAP`: Klaster ruang laten berdimensi tinggi beserta jembatan sinaptik.
     - `M-04 // Pipeline Helix`: Aliran data spiral untai ganda (*dual-strand vortex*).
     - `M-05 // Singularity`: Bola geodesik Fibonacci dengan cincin orbital.
   - **Interaksi Kursor 3D & Shockwave Pulse**: Gerakan kursor memicu distorsi gelombang magnetik/gravitasi 3D secara real-time, dilengkapi tombol **Synaptic Pulse** untuk memancarkan gelombang kejut energi neon.
   - **Scroll-Linked Choreography & Manual HUD Controller**: Formasi 3D berubah otomatis mengikuti section yang sedang dibaca atau dapat dikunci secara manual melalui **3D Engine HUD** di pojok kanan bawah.

2. **Struktur Section & Komponen Kelas Dunia**
   - **Hero Viewport ("The Neural Manifold")**: Tipografi kinetik, *role discipline switcher* interaktif, dek kendali manifold 3D, dan *Quantified Impact Ribbon*.
   - **4 Core Engineering Domains & Technical Matrix**: Menampilkan 4 pilar keahlian utama (*AI Engineering*, *Machine Learning*, *Data Analytics & BI*, *Full-Stack & 3D Web*) beserta matriks 19+ keahlian produksi yang dapat difilter.
   - **Selected Works & Architecture Blueprints**: Kartu studi kasus bergaya *Technical Dossier* yang dilengkapi modal **Inspect Blueprint** untuk melihat arsitektur pipeline, metrik latensi/akurasi, dan potongan kode/shader.
   - **Live Neural, ML & Data Telemetry Sandbox**:
     - *01. Agentic Graph-RAG Simulator*: Simulasi retrieval vektor hibrida & sintesis LLM bebas halusinasi.
     - *02. ML Hyper-Tuner*: Eksplorasi *Learning Rate*, *LoRA Rank*, *Dropout*, dan *Optimizer* dengan grafik *Train/Val Loss* real-time.
     - *03. Causal Forecast Telemetry*: Visualisasi deret waktu probabilistik (*95% Credible Band*) & deteksi anomali.
   - **Career Trajectory, Publications & Honors**: Linimasa pengalaman kerja terukur, publikasi ilmiah, penghargaan hackathon, dan sertifikasi.
   - **Command Palette (`⌘K` / `Ctrl+K`) & Executive CV Modal**: Navigasi instan berbasis keyboard dan tampilan CV eksekutif yang siap dicetak/disimpan sebagai PDF.

## 🚀 Menjalankan Proyek Secara Lokal

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka `http://localhost:3000` di browser Anda.

## 🛠️ Struktur Direktori

- `src/data/portfolioData.ts` — Seluruh data profil, metrik, domain keahlian, proyek, skenario sandbox, pengalaman, dan pencapaian (mudah diubah sesuai kebutuhan).
- `src/components/canvas/SynapticParticleCanvas.tsx` — Mesin 3D WebGL berbasis Three.js & custom GLSL Vertex/Fragment Shaders.
- `src/components/ParticleControllerHUD.tsx` — Panel kendali interaktif partikel 3D & telemetri FPS.
- `src/components/Navbar.tsx` — Navigasi *glassmorphic* dengan *scroll-spy* aktif.
- `src/components/HeroSection.tsx` — Section utama pembuka.
- `src/components/DomainsSection.tsx` — 4 pilar keahlian & matriks tumpukan teknologi.
- `src/components/ProjectsSection.tsx` — Studi kasus proyek & modal cetak biru arsitektur.
- `src/components/InteractiveLabSection.tsx` — Sandbox interaktif AI, ML, dan Data Analytics.
- `src/components/ExperienceSection.tsx` — Linimasa karier & kredensial akademik/publikasi.
- `src/components/ContactSection.tsx` — Terminal transmisi proyek & kontak langsung.

