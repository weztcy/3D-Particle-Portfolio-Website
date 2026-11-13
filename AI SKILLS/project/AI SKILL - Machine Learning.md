---
name: portfolio-machine-learning
description: >-
  Audits a Machine Learning project directory comprehensively (training scripts, notebooks, datasets/tensors, model artifacts/checkpoints, hyperparameter configs, evaluation plots/metrics, papers/docs, and simulations) and generates a complete portfolio ProjectCaseStudy Markdown (.md) file compliant with RULES/projectsdata.md and src/data/types.ts. Save the generated .md file inside the analyzed project directory.
---

# Machine Learning Portfolio Data Generator (`portfolio-machine-learning`)

Skill ini mengaudit sebuah direktori project **Machine Learning** (tabular, Computer Vision, NLP, Reinforcement Learning, maupun komputasi/simulasi numerik) secara menyeluruh lintas format file, mengekstrak bukti eksperimen yang terverifikasi, dan menghasilkan file Markdown (`.md`) berisi data `ProjectCaseStudy` yang siap dimasukkan ke `src/data/projects/projectsData.ts`.

---

## 1. Identitas & Konstanta Kategori

- **Category (`category`)**: `"machine-learning"`
- **Category Label (`categoryLabel`)**: `"Machine Learning"`
- **Accent Color (`accentColor`)**: `"indigo"`
- **Code Format (`code`)**: `"PRO-XX // ML-XX"`
- **Bahasa Output Wajib**: **100% Bahasa Inggris Profesional & Teknis (Professional Technical English)**. Seluruh nilai properti data (`summary`, `overview`, `challenge`, deskripsi fitur, metodologi, metrik, catatan audit, interpretasi, dll.) wajib berbahasa Inggris tanpa mencampurkan bahasa Indonesia.
- **Cakupan Universal Multi-Domain Machine Learning**:
  - Skill ini **wajib mendukung seluruh paradigma, modalitas, dan jenis project Machine Learning secara universal**, tidak terbatas pada satu bentuk data atau algoritma tertentu.
  - Mencakup (namun tidak terbatas pada):
    1. **Supervised & Unsupervised Learning**: Tabular Classification & Regression, Clustering (K-Means, DBSCAN), Dimensionality Reduction (PCA, t-SNE, UMAP), Anomaly & Outlier Detection, Time-Series & Sequence Forecasting, Ensemble Methods (XGBoost, LightGBM, CatBoost, Random Forest).
    2. **Reinforcement Learning (RL)**: Policy Gradient, Q-Learning, Deep Q-Networks (DQN), Proximal Policy Optimization (PPO), Actor-Critic, Multi-Agent RL, Simulation Control Agents, Physics/Kinematics Decision Loops.
    3. **Deep Learning Architectures**: Multi-Layer Perceptrons (MLP), Deep Neural Networks (DNN), Convolutional Neural Networks (CNN), Recurrent & Attention Networks (LSTM, GRU, Transformers), Autoencoders, Generative Models (GANs, VAEs, Diffusion).
    4. **Computer Vision (CV)**: Image Classification, Object Detection (YOLO, Faster R-CNN), Semantic & Instance Segmentation, Feature Extraction, Optical Character Recognition (OCR), Video Tracking & Pose Estimation.
    5. **Natural Language Processing & Speech**: Text Classification, Sentiment Analysis, Named Entity Recognition (NER), Word/Sentence Embeddings, Topic Modeling, Audio Signal & Acoustic Processing.
    6. **Scientific, Numerical & Physical Simulations**: Physics-Informed Neural Networks (PINN), Mathematical/Numerical Optimization, Computational Dynamics & Particle Systems, Biomolecular, Chemical & Engineering Modeling.
    7. *Serta segala cabang machine learning modern lainnya di seluruh ragam domain dan modalitas.*

---

## 2. Protokol Audit Direktori Menyeluruh (Multi-Format)

Sebelum mengisi field apa pun, inspeksi **seluruh isi direktori project** (jangan hanya script training):

1. **Dataset, Input Tensor, & Data Profile**:
   - File `.csv`, `.parquet`, `.npy`, `.npz`, `.tfrecord`, folder gambar/audio/teks, atau skrip generator/simulasi dataset.
   - Identifikasi sumber (`source`), modalitas (`modality`, misal Tabular / Vision / Text / Multi-Particle State Space), skala (`scale`), dimensi input (`inputShape`), dan format (`dataFormat`) untuk `mlDatasetOverview`.
   - Petakan output utama/target (`objectiveOutput`) serta input sinyal/variabel kunci (`inputSignals`) ke dalam `mlFeaturesAndDataCharacteristics`.
2. **Script Eksperimen, Konfigurasi Training, & Notebook**:
   - `.py`, `.ipynb` (beserta output sel), config YAML/JSON (Hydra/W&B/MLflow), `requirements.txt`, `environment.yml`.
   - Ekstrak **Algorithm/Model Name**, **Hyperparameters** terverifikasi, **Objective Criterion / Loss**, **Optimization Solver**, dan strategi validasi (`mlEvaluationStrategy`).
3. **Model Checkpoints & Artefak Serialisasi**:
   - File model `.pt`, `.pth`, `.safetensors`, `.onnx`, `.pkl`, `.joblib`, `.h5`, beserta ukuran file dan metadata untuk mengisi `mlModelArtifacts`.
4. **Plot Evaluasi, Confusion Matrix, Log Metrik, & Dokumen**:
   - Gambar hasil training/evaluasi (loss curve, ROC/AUC, confusion matrix, SHAP/feature importance plots, visualisasi prediksi) sebagai dasar `mlPerformanceVisualizations` dan `mlModelInterpretationAndLimitations`.
   - Baca laporan PDF/Markdown/PPTX untuk mengekstrak limitasi model dan arah pengembangan berikutnya.

> **Aturan Kejujuran Data:** Dilarang mengarang nilai F1-score, RMSE, R², akurasi, hyperparameter, atau ukuran artefak model yang tidak ditemukan pada notebook, log training, plot, atau laporan project.

---

## 3. Aturan Wajib Pengisian (`RULES/projectsdata.md`)

1. **Aset Gambar Lokal**:
   - Folder target portofolio: `/images/projects/<nama_project>/`
   - Pembentukan `<nama_project>`: ambil **maksimal 4 kata alfanumerik awal** dari `title`, ubah ke `lowercase`, pisahkan dengan `_`, abaikan tanda baca (`-`, `&`, `/`, `:`).
   - `imageUrl` & `images[0]`: `"/images/projects/<nama_project>/banner.webp"` (Hero Section 1).
   - `mlPerformanceVisualizations[].imageUrl`: `"/images/projects/<nama_project>/image01.webp"`, `image02.webp`, dst. (2 digit *zero-padded*).
2. **Section 1 (Hero Console & Telemetry)**:
   - `overview` dan `projectDescription`: **400–500 karakter** (termasuk spasi) agar tidak terpotong `.slice(0, 500)`.
   - `telemetryMatrix`: wajib isi **7 field**, masing-masing **maksimal 45 karakter**.
   - `mlProjectInfo.capabilityBadges`: **WAJIB tepat 3 item**, masing-masing **maksimal 3 kata**, tanpa underscore (`_`).
   - Repository: isi `repoUrl` & `license` jika Public; hapus/kosongkan `repoUrl` & `license` jika Private.
3. **Section 2, 3, & 5 (Skema Kanonik Universal)**:
   - Gunakan skema kanonik universal (`mlDatasetOverview`, `mlFeaturesAndDataCharacteristics` dengan `objectiveOutput` & `inputSignals`, serta `objectiveCriterion` & `optimizationSolver` pada `mlModelArchitectureAndTraining`). **Jangan gunakan field legacy** (`targetVariable`, `inputFeatures`, `lossFunction`, `optimizer`, `topPredictors`).
   - **Heading & Subheading Static Universal pada Section 5**: Seluruh heading dan subheading di Section 5 bersifat static universal pada template (Heading: `[ 05 // MODEL EVALUATION & PERFORMANCE BENCHMARKS ]`, Tag: `EMPIRICAL_BENCHMARKS // DIAGNOSTICS // ERROR_ANALYSIS`, Card 1: `[ EVALUATION_STRATEGY // BENCHMARK_PROTOCOL ]`, Card 3: `[ MODEL_INTERPRETATION & ERROR ANALYSIS ]` dengan badge static `DIAGNOSTIC INSIGHTS`, serta blok `KEY MODEL DRIVERS & BEHAVIORAL INSIGHTS`, `MODEL LIMITATIONS`, `FUTURE IMPROVEMENTS ROADMAP`). Tidak diperbolehkan menyertakan field custom header (`sectionTitle`, `sectionTag`, `strategyLabel`, `interpretabilityBadge`, `driversTitle`) di dalam data.
   - Variasi jenis project (Supervised, Unsupervised, Reinforcement Learning, Deep Learning, Computer Vision, maupun Simulasi Numerik) diwadahi melalui isi data: `validationMethod`, narasi `description`, array `metrics` (opsional, `value` ringkas ≤10–12 karakter agar tidak terpotong), `keyDrivers`, `limitations`, dan `futureImprovements`.
   - Jumlah item array di Section 2, 3, & 5 **bebas** sesuai bukti project.
4. **Section 4 (`techStack` & `mlTechStack`)**:
   - Wajib nama teknologi murni **tanpa nomor versi dan tanpa tanda kurung** (contoh: `"Python"`, `"PyTorch"`, `"Scikit-Learn"`, `"XGBoost"`, `"NumPy"`, BUKAN `"PyTorch 2.3 (CUDA)"`).
5. **Section 6 (`mlMethodologySpecs`)**:
   - `{ learningParadigm, modelArchitecture, coreFramework, validationMethod }` — wajib bersih tanpa nomor versi, maks **3–4 kata per nilai**, **tanpa underscore (`_`)**.

---

## 4. Template Output Markdown (`.md`)

Simpan hasil analisis sebagai file Markdown di **dalam root direktori project yang sedang dianalisis** dengan nama `<project-id>.md` (mengikuti nilai `id` slug, contoh: `customer-churn-gradient-boosting-predictor.md`).

Isi file `<project-id>.md` harus mengikuti struktur berikut secara lengkap:

````markdown
# Portfolio Project Data — <Project Title>

- **Category:** `machine-learning` (`Machine Learning`)
- **Accent Color:** `indigo`
- **Target Assets Folder:** `public/images/projects/<nama_project>/`
- **Required Local Images:** `banner.webp`, `image01.webp` .. `imageXX.webp`

## TypeScript Data (`ProjectCaseStudy`)

```typescript
{
  "id": "<kebab-case-slug>",
  "code": "PRO-XX // ML-XX",
  "title": "<Project Title>",
  "category": "machine-learning",
  "categoryLabel": "Machine Learning",
  "year": "<YYYY>",
  "status": "Completed",
  "accentColor": "indigo",
  "repoUrl": "<https://github.com/... atau hapus field ini jika Private>",
  "license": "<MIT License atau hapus jika Private>",
  "imageUrl": "/images/projects/<nama_project>/banner.webp",
  "images": [
    "/images/projects/<nama_project>/banner.webp"
  ],
  "summary": "<1-2 kalimat ringkas tentang masalah prediktif/komputasi & hasil model>",
  "overview": "<400-500 karakter narasi teknis tentang data, arsitektur model, validasi, dan performa>",
  "projectDescription": "<400-500 karakter (selaras dengan overview) untuk Hero Console Section 1>",
  "challenge": "<Ringkasan tantangan data/ketidakseimbangan kelas/konvergensi/generalisasi>",
  "architectureSummary": "<Ringkasan pipeline dari ingestion, preprocessing, training, hingga evaluasi>",
  "objectives": [
    "<ML Objective 1>",
    "<ML Objective 2>"
  ],
  "features": [
    {
      "title": "<Modeling / Pipeline Capability>",
      "description": "<Penjelasan teknis mekanisme>",
      "badge": "<Short Badge>"
    }
  ],
  "pipelineSteps": [
    {
      "step": "<Pipeline Stage>",
      "detail": "<Transformasi data / training / evaluasi>",
      "latencyOrMetric": "<Dimensi atau metrik tahap>"
    }
  ],
  "evaluation": "<1 paragraf narasi hasil validasi silang, metrik holdout, dan perbandingan baseline>",
  "outcomes": [
    "<Verified Model Outcome 1>",
    "<Verified Model Outcome 2>"
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
  "mlProjectInfo": {
    "projectType": "<Jenis Sistem ML, misal Predictive Classification Pipeline>",
    "learningParadigm": "<Misal Supervised Learning>",
    "modelDomain": "<Domain Model, misal Tabular Financial Risk>",
    "projectStatus": "Completed",
    "developmentYear": "<YYYY>",
    "capabilityBadges": [
      "<Max 3 Kata>",
      "<Max 3 Kata>",
      "<Max 3 Kata>"
    ]
  },
  "mlProblemContext": "<Paragraf mendalam tentang permasalahan modeling, urgensi, dan kompleksitas pola data>",
  "mlDatasetOverview": {
    "profileBadge": "<Short Dataset Badge>",
    "source": "<Sumber dataset riil>",
    "modality": "<Tabular / Computer Vision / NLP / Numerical Tensor>",
    "scale": "<Jumlah sampel/baris/resolusi terukur>",
    "inputShape": "<Bentuk input tensor/fitur, misal N x 24 Features>",
    "dataFormat": "<CSV / Parquet / Float64 Tensors / PNG>",
    "description": "<Deskripsi isi dataset, distribusi, dan pembagian split>",
    "provenanceNote": "<Catatan asal-usul atau lisensi dataset>"
  },
  "mlFeaturesAndDataCharacteristics": {
    "spaceBadge": "<Misal Feature & Target Space>",
    "spaceNote": "<Catatan singkat struktur fitur>",
    "objectiveOutput": {
      "label": "Target Output",
      "name": "<Nama variabel target / output>",
      "type": "<Binary Class / Continuous Scalar / Multi-Class>",
      "distribution": "<Distribusi kelas atau rentang nilai aktual>"
    },
    "inputSignals": [
      {
        "name": "<Feature / Input Signal Name>",
        "type": "<Numerical / Categorical / Spatial Tensor>",
        "importanceOrRole": "<Peran/skor signifikansi>",
        "description": "<Penjelasan makna fisik/domain fitur>"
      }
    ],
    "dataCharacteristicsSummary": "<Ringkasan karakteristik statistik dan korelasi utama>"
  },
  "mlLearningApproach": {
    "paradigm": "<Paradigma belajar & formulasi masalah>",
    "methodologyDescription": "<Penjelasan strategi pemodelan & pemilihan kandidat algoritma>",
    "justification": "<Alasan teknis mengapa pendekatan ini unggul dibanding alternatif>"
  },
  "mlDataPreparation": [
    {
      "step": "01",
      "title": "<Preprocessing Step Title>",
      "description": "<Detail encoding, scaling, augmentasi, atau handling imbalance>",
      "badge": "<Short Badge>"
    }
  ],
  "mlDataPreparationNote": "<Catatan anti-data-leakage atau validasi split>",
  "mlModelArchitectureAndTraining": {
    "algorithmName": "<Nama Model/Algoritma Utama>",
    "architectureSummary": "<Penjelasan struktur layer/ensemble/formulasi matematis>",
    "configurationBadge": "<Short Config Badge>",
    "hyperparameters": [
      {
        "name": "<Hyperparameter Key>",
        "value": "<Verified Value>",
        "description": "<Efek parameter>"
      }
    ],
    "objectiveCriterion": "<Fungsi loss / objektif, misal Binary Cross-Entropy>",
    "optimizationSolver": "<Optimizer / solver, misal AdamW / Coordinate Descent>",
    "trainingProcess": "<Penjelasan detail loop training, early stopping, & konvergensi>"
  },
  "mlTechStack": {
    "programmingLanguages": [
      {
        "name": "<Clean Language Tanpa Versi>",
        "role": "<Peran>"
      }
    ],
    "frameworksAndLibraries": [
      {
        "name": "<Clean ML Library Tanpa Versi>",
        "role": "<Peran>"
      }
    ],
    "experimentationTools": [
      {
        "name": "<Clean Tool/Plot Library Tanpa Versi>",
        "role": "<Peran>"
      }
    ]
  },
  "mlEvaluationStrategy": {
    "validationMethod": "<Metode validasi/observasi aktual sesuai jenis project, misal 5-Fold Stratified Cross-Validation>",
    "description": "<Penjelasan protokol validasi, observasi perilaku model, atau analisis empiris>",
    "metrics": [
      {
        "label": "<Metric atau Behavioral Indicator Label>",
        "value": "<Nilai ringkas ± <=10 karakter agar tidak truncate>",
        "benchmark": "<Target / Baseline / Kondisi Observasi>",
        "pass": true
      }
    ]
  },
  "mlPerformanceVisualizations": [
    {
      "title": "<Visualization Title>",
      "badge": "<Plot Type Badge>",
      "imageUrl": "/images/projects/<nama_project>/image01.webp",
      "caption": "<Penjelasan temuan visual pada grafik evaluasi/training>",
      "telemetryNote": "<Catatan metrik kunci pada grafik>",
      "tableData": [
        {
          "metric": "<Metric Row>",
          "trainingScore": "<Train Value>",
          "validationScore": "<Val Value>"
        }
      ]
    }
  ],
  "mlVisualizationTelemetryNote": "<Catatan ringkas konsistensi train vs validation>",
  "mlModelInterpretationAndLimitations": {
    "interpretationSummary": "<Penjelasan bagaimana model mengambil keputusan & pola paling berpengaruh>",
    "keyDrivers": [
      {
        "factor": "<Feature / Factor Name>",
        "impact": "<Pengaruh terukur terhadap output model>"
      }
    ],
    "limitations": [
      {
        "title": "<Limitation Title>",
        "description": "<Kendala distribusi data, drift, atau edge case>"
      }
    ],
    "futureImprovements": [
      {
        "title": "<Improvement Plan>",
        "target": "<Target peningkatan performa/kapabilitas>"
      }
    ],
    "discoveryNote": "<Catatan singkat interpretabilitas>"
  },
  "mlModelArtifacts": [
    {
      "name": "<Artifact File Name, misal model_weights.safetensors>",
      "format": "<ONNX / SAFETENSORS / PKL / H5>",
      "size": "<Ukuran aktual jika ada>",
      "description": "<Isi artefak dan kegunaannya untuk inferensi>"
    }
  ],
  "mlMethodologySpecs": {
    "learningParadigm": "<Max 3-4 Kata Tanpa Underscore>",
    "modelArchitecture": "<Max 3-4 Kata Tanpa Underscore>",
    "coreFramework": "<Clean Framework Tanpa Versi>",
    "validationMethod": "<Max 3-4 Kata Tanpa Underscore>"
  }
}
```
````

---

## 5. Checklist Verifikasi Sebelum Menyimpan

- [ ] **Bahasa Output:** Seluruh teks data output 100% Bahasa Inggris profesional & teknis (tanpa bahasa Indonesia).
- [ ] Seluruh dataset, notebook, script training/evaluasi, checkpoint model, plot grafik, dan dokumen pendukung telah diinspeksi.
- [ ] `category` = `"machine-learning"`, `categoryLabel` = `"Machine Learning"`, `accentColor` = `"indigo"`.
- [ ] Memakai skema kanonik universal (`objectiveOutput`, `inputSignals`, `objectiveCriterion`, `optimizationSolver`), bukan field legacy.
- [ ] Header Section 5 bersifat static universal pada template; isi `mlEvaluationStrategy` (`validationMethod`, `description`, `metrics`) dan `mlModelInterpretationAndLimitations` (`keyDrivers`, `limitations`, `futureImprovements`) disesuaikan dengan jenis project; `metrics` opsional atau diisi indikator terverifikasi dengan `value` ringkas.
- [ ] `mlProjectInfo.capabilityBadges` berisi **tepat 3 item** (maks 3 kata, tanpa underscore `_`).
- [ ] `overview` / `projectDescription` berjumlah **400–500 karakter**; semua 7 nilai `telemetryMatrix` **maks 45 karakter**.
- [ ] `techStack[]`, `mlTechStack`, dan `mlMethodologySpecs` **bebas nomor versi** dan tanda kurung; `mlMethodologySpecs` maks 3–4 kata tanpa underscore (`_`).
- [ ] Path visualisasi memakai `"/images/projects/<nama_project>/image01.webp"` dst., sedangkan hero memakai `banner.webp`.
- [ ] File `.md` berhasil disimpan di dalam **root direktori project yang dianalisis**.
