# Static Image Assets Directory (`/public/images`)

Direktori ini dirancang terstruktur dan modular untuk mengelola semua aset gambar yang digunakan di portfolio.

## Struktur Direktori

```
public/images/
├── profile/         # Foto profil, avatar, headshot
├── projects/        # Screenshot aplikasi, thumbnail, preview banner proyek
├── certifications/  # Logo kredensial, sertifikat, badge sertifikasi
├── education/       # Logo universitas/institusi, foto kampus
├── publications/    # Gambar paper, diagram arsitektur, cover jurnal
├── domains/         # Ikon visual / ilustrasi pilar domain keahlian
├── lab/             # Grafik benchmark, diagram interaktif RAG Lab
└── shared/          # Aset umum (watermark, pattern background, telemetry icons)
```

## Cara Penggunaan di Komponen & File Data

Semua gambar di dalam folder `public/images/` dapat diakses langsung menggunakan path absolut yang dimulai dari `/images/...` di Next.js:

```tsx
// Contoh di JSX / Next Image
<Image 
  src="/images/profile/profile-photo.png" 
  alt="Yohanes Dimas Pratama" 
  width={400} 
  height={400} 
/>

// Contoh di file data (misal: src/data/projects/projectsData.ts)
{
  id: "ai-manifold-rag",
  thumbnailUrl: "/images/projects/ai-manifold.webp",
  images: [
    "/images/projects/ai-manifold-preview-1.webp",
    "/images/projects/ai-manifold-preview-2.webp"
  ]
}
```

## Format Gambar yang Disarankan
- **WebP**: Sangat disarankan untuk foto dan screenshot web karena ukuran file optimal dengan kualitas tinggi.
- **SVG**: Untuk ikon, logo vektor, dan badge teknis.
- **PNG**: Untuk foto atau aset yang memerlukan transparansi background.
- **JPG**: Alternatif foto dokumentasi resolusi tinggi.

