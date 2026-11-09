# Design System & Visual Architecture Documentation

> **Project:** Yohanes Dimas Pratama — Personal Portfolio  
> **Tech Stack:** Next.js 15.2 (App Router, TypeScript 5.8) · Tailwind CSS 3.4 · Three.js 0.174 + Custom GLSL Shaders · Lucide Icons & React Icons · Nodemailer  
> **Target Theme:** Futuristic 3D Particle with Dark Theme (Obsidian & Synaptic Neon)  
> **Document Date:** November 2026  
> **Specification Version:** 2.0.0

---

## 1. Overall Design Style

### 1.1 Visual Identity & Philosophy
The website embodies a **"Synaptic Point-Cloud & High-Craft Dark UI"** aesthetic—a synthesis of high-performance computational intelligence, mathematical elegance, and cinematic interface design. The visual tone is calibrated specifically for an **AI Engineer, Machine Learning Engineer, Data Analyst, and Full-Stack Web Developer**, communicating technical mastery across abstract mathematical modeling, low-level shader execution, and polished product design.

Key aesthetic principles:
- **Atmospheric Obsidian Void:** A background canvas anchored in deep black (`#06070A`) with subtle cyan/indigo radial scrims, avoiding flat sterile blacks while retaining infinite depth.
- **Precision Engineering & Telemetry Aesthetic:** Monospace micro-copy, bracketed indexing (`[ 01 // DOMAIN ]`), coordinate indicators (`XYZ: [x, y, z]`), status indicators (`60 FPS`, `GLSL v3.0`, `18,432 NODES`), and quantified production deltas.
- **Physicality of 3D Data (Point-Cloud Tangibility):** Instead of static illustrations or prerendered 3D videos, the interface uses an active, interactive 3D particle engine that responds to cursor gravity, scroll choreography, and interactive mode switching.
- **Glassmorphic Micro-Surfaces:** Translucent slate-obsidian cards (`#0C0F17` at 65%–85% opacity) with `backdrop-filter: blur(16px)` to `blur(24px)` and specular 1px borders (`rgba(255, 255, 255, 0.07)` to `rgba(255, 255, 255, 0.15)`), allowing the 3D particles to drift visibly behind cards while maintaining full legibility.
- **Controlled Spectral Accents:** A restricted neon palette consisting of **Synaptic Cyan**, **Tensor Indigo**, **Data Emerald**, and **Warm Amber**, each tied directly to a specific engineering discipline and interaction feedback state.

---

## 2. 3D Particle Visual System

### 2.1 Particle Architecture & Composition
The 3D canvas is implemented in [`SynapticParticleCanvas.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/canvas/SynapticParticleCanvas.tsx) using vanilla Three.js and custom GLSL vertex/fragment shaders.

| Metric / Parameter | Implementation Value | Notes |
| :--- | :--- | :--- |
| **Desktop Particle Count** | `18,432` points | Verified in `SynapticParticleCanvas.tsx` (`particleCount = isMobile ? 9000 : 18432`) |
| **Mobile Particle Count** | `9,000` points | Triggered when `window.innerWidth < 768` |
| **Hub Nodes (Network Lines)** | `130` desktop / `70` mobile | Connected via dynamic `THREE.LineSegments` |
| **Max Connecting Filaments** | `hubNodeCount * 3` (`390` lines max) | Synaptic lines drawn when `distSq < 18.5` |
| **Orbital Rings** | 2 tilted `THREE.Line` rings | Radius `11.5` (tilt: `0.32π`, `0.08π`), Radius `14.8` (tilt: `-0.24π`, `-0.12π`) |
| **Camera Configuration** | Perspective Camera (FOV: `55°`, Near: `0.1`, Far: `120`) | Default position: `(0, 2.2, 18.5)` |
| **Blending Mode** | `THREE.AdditiveBlending` | Point sprites add luminous energy when overlapping |
| **Depth Testing / Write** | `depthWrite: false`, `transparent: true` | Eliminates square occlusion artifacts |

---

### 2.2 The 5 Mathematical 3D Manifolds (Formations)
All 5 formations are precalculated into separate `Float32Array` buffers at initialization and morph on the GPU via smooth cubic interpolation.

```
       [01. WAVE]                [02. NEURAL]               [03. CLUSTERS]
   Harmonic Tensor Field     Attention Torus / Lattice    5D Latent UMAP Clusters
     ~~~~~~~~~~~~~~               ( ( @ ) )                   * * *   * * *
       ~~~~~~~~~~                   ( O )                      * *     * *

                      [04. HELIX]                [05. SPHERE]
                 Dual-Strand Data Vortex      Fibonacci Singularity
                        \  /  \  /                   ( ( • ) )
                         ><    ><                     ( • • )
                        /  \  /  \                   ( ( • ) )
```

#### Detailed Mathematical Definitions:
1. **`wave` (Harmonic Tensor Wave Manifold):**
   - **86% of points:** Arranged in a planar grid spanning $X \in [-16, 16]$, $Z \in [-11, 11]$ with sinusoidal displacement:
     $$Y = \sin(0.32 X) \cos(0.35 Z) \cdot 2.4 + \sin(0.22(X + Z)) \cdot 1.1 - 1.2$$
   - **14% of points:** Ambient upper synaptic stars scattered across $X \in [-17, 17]$, $Y \in [-3.4, 12.6]$, $Z \in [-10, 10]$.
2. **`neural` (Cortical Attention Torus):**
   - Parametric torus with multi-ring winding:
     $$\text{torusAngle} = 2\pi \cdot 37.0 \cdot u, \quad \text{tubeAngle} = 2\pi \cdot 113.0 \cdot u$$
     $$R_{\text{major}} = 6.8 + 0.6 \sin(3 \cdot \text{tubeAngle}), \quad R_{\text{minor}} = 2.6 \pm 0.35$$
     $$X = (R_{\text{major}} + R_{\text{minor}} \cos(\text{tubeAngle})) \cos(\text{torusAngle})$$
     $$Y = (R_{\text{major}} + R_{\text{minor}} \cos(\text{tubeAngle})) \sin(\text{torusAngle}) \cdot 0.78$$
     $$Z = R_{\text{minor}} \sin(\text{tubeAngle}) \cdot 1.4$$
3. **`clusters` (Latent Space UMAP / t-SNE):**
   - 5 cluster centers: $(-7.5, 3.2, -1.5)$, $(7.2, 2.8, 1.2)$, $(0, -3.8, 2.5)$, $(-4.8, -2.5, -3.5)$, $(5.2, -1.2, -2.8)$.
   - **82% of points:** Gaussian-like spherical distribution ($r = \text{random}^{0.55} \cdot 3.6$) around centroids.
   - **18% of points:** Synaptic data bridge streams linearly interpolated between neighboring cluster centers.
4. **`helix` (Dual-Strand Feature Pipeline Vortex):**
   - Dual strand ($strand = \pm 1$) parametrized along $hT \in [-13, 13]$:
     $$\text{angle} = 0.72 \cdot hT + (strand > 0 ? 0 : \pi), \quad R = 4.2 + 1.1 \sin(0.35 \cdot hT)$$
     $$X = 0.95 \cdot hT, \quad Y = R \cos(\text{angle}), \quad Z = R \sin(\text{angle})$$
   - Every 7th particle forms horizontal cross-rungs bridging the two helices.
5. **`sphere` (Geodesic Fibonacci Singularity):**
   - **75% of points:** Distributed via Golden Ratio spiral ($\phi = \pi (3 - \sqrt{5})$):
     $$y = 1 - \frac{2i}{N-1}, \quad r = \sqrt{1 - y^2}, \quad \theta = \phi \cdot i, \quad R_{\text{shell}} \in [4.6, 6.2]$$
   - **25% of points:** Form an equatorial Saturn-like data disc ring with radius $R \in [5.6, 11.2]$.

---

### 2.3 GLSL Shaders & Physics Implementation

#### Vertex Shader Pipeline (`VERTEX_SHADER`):
1. **Morph Interpolation:**
   ```glsl
   float tMorph = smoothstep(0.0, 1.0, uMorphProgress);
   vec3 basePos = mix(position, aTarget, tMorph);
   ```
2. **Harmonic Curl Displacement:**
   Calculates continuous 3D wave offsets scaled by `uTurbulence`:
   ```glsl
   vec3 waveOffset = harmonicField(basePos, uTime, aPhase) * (0.32 * uTurbulence);
   vec3 pos = basePos + waveOffset;
   ```
3. **Interactive 3D Cursor Gravitational Repulsion & Vortex Swirl:**
   Raycasted cursor world coordinates (`uCursorWorld`) push and twist nearby particles:
   ```glsl
   float distToCursor = distance(pos, uCursorWorld);
   float cursorRadius = 4.8;
   if (distToCursor < cursorRadius && uCursorActive > 0.01) {
     float falloff = pow(1.0 - (distToCursor / cursorRadius), 2.0) * uCursorActive;
     vec3 dir = normalize(pos - uCursorWorld + vec3(0.0001));
     vec3 swirl = normalize(cross(dir, vec3(0.0, 0.0, 1.0)));
     pos += (dir * 1.45 + swirl * 0.85) * falloff;
     vCursorHighlight = falloff;
   }
   ```
4. **Radial Synaptic Shockwave Pulse:**
   Expanding 3D energy ring radiating from `uPulseOrigin` up to radius `28.0`:
   ```glsl
   float pulseRadius = uPulseProgress * 28.0;
   float ringDist = abs(distFromOrigin - pulseRadius);
   if (ringDist < 3.2) {
     float waveStrength = (1.0 - ringDist / 3.2) * (1.0 - uPulseProgress);
     pos += normalize(basePos - uPulseOrigin) * waveStrength * 1.9;
     vPulseHighlight = waveStrength;
   }
   ```
5. **Perspective Size & Depth Fog Attenuation:**
   ```glsl
   float depthScale = 155.0 / max(-mvPosition.z, 2.5);
   gl_PointSize = clamp(aScale * breathe * highlightBoost * depthScale * uPixelRatio * 0.14, 1.2, 22.0);
   float depthAlpha = smoothstep(42.0, 7.0, -mvPosition.z);
   vAlpha = clamp(depthAlpha * (0.58 + 0.42 * aScale + vCursorHighlight * 0.5 + vPulseHighlight * 0.6), 0.1, 1.0);
   ```

#### Fragment Shader Pipeline (`FRAGMENT_SHADER`):
- Soft radial circular sprite discarded at `dist > 0.5`.
- Inner hot glowing core: `smoothstep(0.22, 0.0, dist)`.
- 4-Color Gradient interpolation based on attribute `vColorMix`:
  - `vColorMix < 0.45`: Lerp from **Synaptic Cyan** (`vec3(0.220, 0.741, 0.973)`) to **Tensor Indigo** (`vec3(0.506, 0.549, 0.973)`).
  - `0.45 <= vColorMix < 0.82`: Lerp from **Tensor Indigo** to **Data Emerald** (`vec3(0.204, 0.827, 0.600)`).
  - `vColorMix >= 0.82`: Lerp from **Data Emerald** to **Warm Amber** (`vec3(0.961, 0.620, 0.043)`).
- On cursor proximity or shockwave pulse, particle color dynamically shifts to bright electric cyan-white (`vec3(0.45, 0.95, 1.0)` and `vec3(1.0, 1.0, 1.0)`).

---

## 3. UI Design System

### 3.1 Color Palette

```
  #06070A         #0C0F17         #121723         #1A2133
[Obsidian 950]  [Obsidian 900]  [Obsidian 800]  [Obsidian 700]
  Deep Void      Surface Cards    Elevated UI     Card Borders

  #38BDF8         #818CF8         #34D399         #F59E0B
[Synaptic Cyan] [Tensor Indigo]  [Data Emerald]  [Warm Amber]
   AI / Focus       ML / Tech      Data / Metric    Web / Alert
```

| Token Name | Hex Code | RGB / Normalized GLSL | Semantic Usage |
| :--- | :--- | :--- | :--- |
| `obsidian-950` | `#06070A` | `rgb(6, 7, 10)` | Global root background, vignette overlays |
| `obsidian-900` | `#0C0F17` | `rgb(12, 15, 23)` | Primary card and modal background (with alpha) |
| `obsidian-800` | `#121723` | `rgb(18, 23, 35)` | Nested dark panels, code block headers |
| `obsidian-700` | `#1A2133` | `rgb(26, 33, 51)` | Higher elevation surfaces, active border states |
| `synaptic-cyan` | `#38BDF8` | `vec3(0.220, 0.741, 0.973)` | AI Engineering, Primary CTA, Highlights, GLSL Core |
| `synaptic-indigo`| `#818CF8` | `vec3(0.506, 0.549, 0.973)` | Machine Learning, Badges, Secondary Accents |
| `synaptic-emerald`| `#34D399`| `vec3(0.204, 0.827, 0.600)` | Data Analytics, Live Status Indicators, Verified Badges |
| `synaptic-amber` | `#F59E0B` | `vec3(0.961, 0.620, 0.043)` | Full-Stack Web, Anomaly markers, Warnings |
| `text-slate-100` | `#F1F5F9` | `rgb(241, 245, 249)` | Primary headlines, title text |
| `text-slate-300` | `#CBD5E1` | `rgb(203, 213, 225)` | Body copy, card descriptions |
| `text-slate-400` | `#94A3B8` | `rgb(148, 163, 184)` | Secondary copy, metadata, timestamps |
| `text-slate-500` | `#64748B` | `rgb(100, 116, 139)` | Monospace labels, inactive tab indicators |

---

### 3.2 Typography

Configured via `next/font/google` in [`layout.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/layout.tsx):

```
[Space Grotesk]   -> Display & Headlines (font-display)
[Plus Jakarta]    -> UI, Paragraphs & Navigation (font-sans)
[JetBrains Mono]  -> Telemetry, Code, Labels & Numbers (font-mono)
```

| Font Role | Font Family | Tailwind Class | Verified Weights | Typical Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `Space Grotesk` | `font-display` | `500`, `600`, `700` | Hero title, section headings (`H1`-`H3`), metric numbers |
| **Interface / Body** | `Plus Jakarta Sans` | `font-sans` | `400`, `500`, `600`, `700` | Body paragraphs, buttons, tooltips, list items |
| **Telemetry / Code** | `JetBrains Mono` | `font-mono` | `400`, `500`, `600` | Status badges, timestamps, coordinates, metrics, code blocks |

#### Type Hierarchy Scale:
- **Hero Title (`H1`):** `text-4xl sm:text-6xl xl:text-[4.25rem]`, `font-bold`, `tracking-[-0.035em]`, `leading-[1.05]`.
- **Section Heading (`H2`):** `text-3xl sm:text-4xl lg:text-5xl`, `font-bold`, `tracking-tight`.
- **Card Heading (`H3`):** `text-xl sm:text-2xl`, `font-bold`.
- **Body Large:** `text-base sm:text-lg`, `text-slate-300`, `leading-relaxed`.
- **Body Regular:** `text-sm`, `text-slate-300` to `text-slate-400`, `leading-relaxed`.
- **Telemetry Tag / Label:** `text-[10px]` to `text-[11px]`, `font-mono`, `uppercase`, `tracking-widest` or `tracking-wider`.

---

### 3.3 Glassmorphism, Borders & Shadows

- **Glassmorphic Formula:**
  - Standard Card: `bg-[#0C0F17]/65 backdrop-blur-xl border border-white/10`
  - Elevated Modal / Drawer: `bg-[#0C0F17] backdrop-blur-2xl border border-white/15`
  - Floating Navbar (Scrolled): `bg-[#0C0F17]/80 backdrop-blur-xl border border-white/10`
  - Floating Navbar (Default): `bg-[#0C0F17]/50 backdrop-blur-md border border-white/[0.07]`
  - Deep Inset Panel: `bg-black/40 border border-white/5`
- **Shadow Scale:**
  - Card Default: `shadow-[0_24px_60px_rgba(0,0,0,0.65)]`
  - Active / Hover Card: `shadow-[0_24px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(56,189,248,0.12)]`
  - Primary Neon Glow: `shadow-[0_0_24px_rgba(56,189,248,0.3)]` up to `shadow-[0_0_42px_rgba(56,189,248,0.6)]`
  - Modal Deep Occlusion: `shadow-[0_24px_90px_rgba(0,0,0,0.95)]`
- **Architectural Grid Pattern:**
  - Defined in [`tailwind.config.ts`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/tailwind.config.ts):
    `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`
  - Rendered at fixed overlay: `bg-[size:64px_64px] opacity-30 pointer-events-none z-[1]`.

---

### 3.4 Button and Interactive Components

1. **Primary Gradient CTA ("Explore Works", "Transmit Brief"):**
   - Classes: `bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 text-slate-950 font-semibold rounded-xl px-6 py-3.5 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_42px_rgba(56,189,248,0.6)] active:scale-95 transition-all`
2. **Secondary Outline CTA ("Executive CV Dossier"):**
   - Classes: `border border-sky-400/35 bg-[#0C0F17]/80 backdrop-blur-md text-sky-300 font-medium rounded-xl px-5 py-3.5 hover:border-sky-400 hover:bg-sky-400/10 hover:text-white transition-all`
3. **Discipline Role Filter Buttons:**
   - Active: `text-sky-400 border-sky-400/30 bg-sky-400/10 shadow-[0_0_20px_rgba(56,189,248,0.18)] scale-[1.02]`
   - Default: `border-white/10 bg-[#0C0F17]/60 text-slate-400 hover:border-white/25 hover:text-slate-200`
4. **Interactive 3D HUD Controller Widget:**
   - Position: `fixed bottom-5 right-5 z-40`
   - Collapsed state: rounded pill with live pulsing emerald status indicator, `Cpu` icon, current formation name, and `60 FPS` readout.
   - Expanded state: 350px glassmorphic card containing real-time FPS counter, particle count (`18,432`), 3D topology switcher (5 modes), field turbulence slider (`0.1x` to `2.4x`), cursor XYZ coordinate readout, and "Synaptic Pulse" trigger button.
5. **Interactive Document Readers (`PaperFlipbookModal` & `CvPage`):**
   - Dual-view toggling: "Slide/Page" view vs. "Scroll All" view.
   - Native browser Fullscreen API integration (`requestFullscreen()`).
   - Zoom controls (`+`, `-`, reset 100%), drag-to-scroll navigation, and responsive controls.

---

## 4. Animations and Interactions

### 4.1 3D Particle Interactions

```
[User Action]                 [System Response]
Mouse Movement      -->       Raycast to 3D interaction plane (uCursorWorld)
                              Vortex swirl + repulsive particle displacement (r = 4.8)
                              Dynamic color shift to cyan/emerald + white core

Click / Pulse Button -->       Shockwave expanding outward to radius 28.0 (ringWidth = 3.2)
                              Particles pushed radially along displacement vector

Scroll Position     -->       Calculates scrollProgress = scrollY / maxScroll
                              Interpolates camera position:
                              X: lerp(..., pointerNDC.x * 1.9 + sin(scrollP * 2pi) * 1.4)
                              Y: lerp(..., 2.0 + pointerNDC.y * 1.3 - scrollP * 2.2)
                              Z: lerp(..., 18.5 - sin(scrollP * pi) * 2.8)
                              Morphs particle manifold to match visible section

HUD Slider Drag     -->       Adjusts uTurbulence (0.1 to 2.4)
                              Continuous harmonic wave frequency & amplitude scales in real time
```

### 4.2 Scroll-Choreographed Manifold Mapping

The portfolio links the page scroll position to the 3D particle manifold via scroll-spy (`SECTION_FORMATION_MAP` in [`page.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/page.tsx)):

| Section ID | Section Title | Target 3D Manifold | Aesthetic & Engineering Rationale |
| :--- | :--- | :--- | :--- |
| `#hero` | Overview | `wave` | Sweeping harmonic tensor waves representing expansive potential and mathematical fluidity |
| `#domains` | 4 Core Domains | `neural` | Toroidal multi-layer attention network representing deep cognitive neural architectures |
| `#projects` | Selected Works | `clusters` | High-dimensional latent data clusters representing real-world model deployments |
| `#certifications` | Verified Credentials | `helix` | Dual-strand pipeline vortex representing rigorous continuous mastery and verified skills |
| `#experience` | Career & Research | `neural` | Synaptic pathways representing connected industry expertise and published academic research |
| `#contact` | Initiate Transmission | `sphere` | Convergent Fibonacci singularity representing unified connection and communication |

### 4.3 UI Animations & Micro-Interactions
- **Bento Card Lift:** `hover:-translate-y-1 hover:border-sky-400/50 transition-all duration-300`.
- **Live Status Pulsing Dot:** Tailwind `animate-ping` with absolute inner dot on `bg-emerald-400`.
- **Keyboard Shortcut Trigger:** `Ctrl+K` or `Cmd+K` toggles [`CommandPaletteModal.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/CommandPaletteModal.tsx) with instant autofocus and keyboard action dispatch.
- **Copy-to-Clipboard Feedback:** One-click email copy switches from `Copy` icon to `Check` icon in Emerald, triggers a 3D Synaptic Pulse, and auto-resets after 2600ms.
- **Interactive SVG Charts:** Real-time loss curves and forecast bands update instantly without layout shifts.

---

## 5. Layout and Visual Hierarchy

### 5.1 Page Anatomy & Grid Composition
The layout adopts a **12-column responsive grid** wrapped in a maximum width of `1380px` (`max-w-[1380px] mx-auto`) with responsive padding `px-4 sm:px-6 lg:px-10`.

```
+-----------------------------------------------------------------------------------+
| FIXED TOP NAVBAR: [Brand // Live Status]  [Nav 00-05]  [⌘K] [Executive CV] [CTA]  |
+-----------------------------------------------------------------------------------+
|                                                                                   |
| SECTION 00: HERO VIEWPORT (Min-Height 100vh)                                      |
| [Status Pill: Jakarta, ID // BUILDING THE FUTURE WITH SOFTWARE, DATA & AI]        |
| H1: Yohanes Dimas Pratama                                                         |
| [4 Discipline Pills: Web Developer | Data Analyst | AI Engineer | ML Engineer]    |
| [Bio Card & Architectural Philosophy]             +   [3D MANIFOLD DECK]          |
| [Primary CTA Cluster: Explore Works | CV Dossier] | - Quick Topologies (5 Modes)  |
|                                                   | - Real-time WebGL Telemetry   |
|                                                                                   |
| [QUANTIFIED IMPACT RIBBON (4 HUD Telemetry Cards):]                               |
| [01 // ACTIVE: 4+ Yrs] [02 // DEPLOYED: 38 Projects]                             |
| [03 // VERIFIED: 15 Certs] [04 // HONORS: 3.70 GPA (Cum Laude)]                  |
+-----------------------------------------------------------------------------------+
| SECTION 01: FOUR CONVERGENT DOMAINS                                               |
| [2x2 Grid of Engineering Pillars with Live 3D Morph Triggers:                     |
|  - Full-Stack Web Development (wave)                                              |
|  - Data Analytics & Business Intelligence (helix)                                 |
|  - Artificial Intelligence & LLM Systems (neural)                                 |
|  - End-to-End Machine Learning Systems (clusters)]                                |
| [252-Skill Quantitative Competency Matrix across 6 Technical Disciplines:         |
|  - Web Dev: 12 Core + 57 Stacks                                                   |
|  - Data Analytics: 9 Core + 40 Stacks                                             |
|  - AI: 12 Core + 48 Stacks                                                        |
|  - Machine Learning: 10 Core + 30 Stacks                                          |
|  - Project Management: 6 Core + 8 Stacks                                          |
|  - Office & Productivity: 6 Core + 14 Stacks                                      |
|  + 6 Soft Skills Matrix (Critical Thinking, Problem Solving, Teamwork, etc.)]     |
| [Search, Category Tabs, Proficiency Filtering & Responsive Pagination]            |
+-----------------------------------------------------------------------------------+
| SECTION 02: SELECTED WORKS & PRODUCTION CASE STUDIES                              |
| [38 In-Depth Production Case Studies across 6 Filter Categories:                  |
|  - All Projects (38)                                                              |
|  - Web Development (12)                                                           |
|  - Data Analytics (2)                                                             |
|  - AI & Machine Learning (4)                                                      |
|  - Desktop & Mobile App (9)                                                       |
|  - UI/UX Design (4)                                                               |
|  - Code Learning (7)]                                                             |
| [Responsive Grid with Pagination & Quick Deep-Linking to /projects/[id]]          |
| [Card: Title | Impact Metrics | Architecture Steps | Live Demo | GitHub Repo]     |
+-----------------------------------------------------------------------------------+
| SECTION 03: VERIFIED PROFESSIONAL CREDENTIALS                                     |
| [15 Industry-Recognized Certifications with Credential IDs & Verification URLs]   |
| [Responsive Grid (6 per page desktop, 4 tablet, 3 mobile) with Pagination]        |
| [Dynamic Random Hover Glow Accents: Cyan, Indigo, Emerald, Amber, Fuchsia, Rose]  |
| [Direct Link to Dedicated Credential Pages at /certifications/[id]]               |
+-----------------------------------------------------------------------------------+
| SECTION 04: CAREER TRAJECTORY & ACADEMIC RESEARCH                                 |
| [Left 7 cols: Vertical Synaptic Timeline with Glowing Connected Nodes:            |
|  - Lab Assistant & Web Developer (Dian Nuswantoro University)                     |
|  - Machine Learning Cohort (Bangkit Academy led by Google, GoTo, Traveloka)]      |
| [Right 5 cols: Academic Base & Research Publications:                             |
|  - Sinta 3 Research Paper in JAIC with Interactive PaperFlipbookModal & Citations |
|  - Dian Nuswantoro University (Informatics Engineering, GPA 3.70 / Magna Cum Laude)|
+-----------------------------------------------------------------------------------+
| SECTION 05: INITIATE TRANSMISSION & FOOTER                                        |
| [Left 5 cols: Encrypted Email Copy, Base Station, Jakarta Clock (WIB / UTC+7)]     |
| [Right 7 cols: Interactive Project Brief Transmission Terminal:                   |
|  - In-Depth Defense-in-Depth Cyber Security Suite (Rate Limiting, Honeypot, CSRF) |
|  - Nodemailer SMTP Transport Backend (/api/contact)]                              |
| [Minimalist Technical Footer with Live Copyright, System Version & Tech Badges]   |
+-----------------------------------------------------------------------------------+
| FIXED BOTTOM-RIGHT: [INTERACTIVE 3D PARTICLE ENGINE TELEMETRY HUD]                |
+-----------------------------------------------------------------------------------+
```

### 5.2 Foreground UI vs. 3D Background Balancing
- **Z-Index Layering Hierarchy:**
  - `z-0`: `SynapticParticleCanvas` (fixed, pointer-events-none, hardware-accelerated WebGL viewport).
  - `z-[1]`: Fixed SVG 64px Grid Overlay (`opacity: 0.30`).
  - `z-10`: Foreground `<main>` content container.
  - `z-20`: Linear top/bottom vignette gradients (`#06070A` fade) ensuring high text contrast.
  - `z-40`: Floating 3D Particle Controller HUD widget.
  - `z-50`: Fixed Floating Top Navbar, `CommandPaletteModal`, and Fullscreen Document Modals (`PaperFlipbookModal`).
- **Negative Space Calibration:** Section headers and Hero text occupy 55%–65% of viewport width on desktop, intentionally preserving open visual pockets for the 3D particles and synaptic filament lines to breathe without competing with text.

---

## 6. Technical Implementation

### 6.1 Verified Package Dependencies

From [`package.json`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/package.json):
```json
{
  "name": "yohanes-dimas-pratama-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.475.0",
    "next": "^15.2.0",
    "nodemailer": "^10.1.7",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.7.0",
    "three": "^0.174.0"
  },
  "devDependencies": {
    "@types/node": "^22.13.0",
    "@types/nodemailer": "^8.0.2",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@types/three": "^0.174.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.2"
  }
}
```

---

### 6.2 Key Component Roles

| File Path | Component Name | Architectural Responsibility |
| :--- | :--- | :--- |
| [`src/app/page.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/page.tsx) | `PortfolioPage` | Root orchestrator. Manages scroll-spy, active section state, formation sync, telemetry state, modal visibility, and keyboard listener (`⌘K`). |
| [`src/app/layout.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/layout.tsx) | `RootLayout` | Font loading (`Space_Grotesk`, `Plus_Jakarta_Sans`, `JetBrains_Mono`), HTML metadata, root dark class injection. |
| [`src/app/globals.css`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/globals.css) | Global Styles | Root `#06070a` canvas color, text selection styling, sleek 8px custom dark scrollbars, print styles. |
| [`src/app/cv/page.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/cv/page.tsx) | `CvPage` | Dedicated executive curriculum vitae view with interactive PDF slide/scroll reader, drag-to-scroll, zoom controls, and print stylesheet. |
| [`src/app/projects/[id]/page.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/projects/[id]/page.tsx) | Dynamic Project Route | Server-rendered dynamic route for individual project case studies rendering `ProjectDetailView`. |
| [`src/app/certifications/[id]/page.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/certifications/[id]/page.tsx) | Dynamic Certification Route | Server-rendered credential verification view rendering `CertificationDetailView`. |
| [`src/app/publications/[id]/page.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/publications/[id]/page.tsx) | Dynamic Publication Route | Research paper view rendering `PublicationDetailView` with embedded flipbook modal. |
| [`src/app/api/contact/route.ts`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/app/api/contact/route.ts) | Contact API Handler | Secure email dispatch endpoint backed by Nodemailer SMTP with cyber security defense-in-depth protections. |
| [`src/components/canvas/SynapticParticleCanvas.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/canvas/SynapticParticleCanvas.tsx) | `SynapticParticleCanvas` | Vanilla Three.js WebGL canvas. Custom GLSL shaders, 18,432 particles, 5 buffer formations, 3D cursor raycasting, synaptic network lines, telemetry loop. |
| [`src/components/ParticleControllerHUD.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/ParticleControllerHUD.tsx) | `ParticleControllerHUD` | Floating bottom-right HUD for manual formation override, turbulence adjustment, pulse trigger, and live FPS telemetry. |
| [`src/components/Navbar.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/Navbar.tsx) | `Navbar` | Floating glassmorphic top navigation with active section indicator, command palette button, mobile drawer, and quick CTAs. |
| [`src/components/HeroSection.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/HeroSection.tsx) | `HeroSection` | Hero presentation. Role cycling animation, quick 3D topology switcher, primary CTAs, and 4-column Quantified Impact Ribbon. |
| [`src/components/DomainsSection.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/DomainsSection.tsx) | `DomainsSection` | 4 Core Engineering Pillars with direct 3D particle morph triggers, and an interactive 252-skill proficiency matrix across 6 categories + 6 soft skills. |
| [`src/components/ProjectsSection.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/ProjectsSection.tsx) | `ProjectsSection` | Filterable grid of 38 case studies with impact metrics, pagination, and direct deep links to `/projects/[id]`. |
| [`src/components/projects/ProjectDetailView.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/projects/ProjectDetailView.tsx) | `ProjectDetailView` | Full-screen technical blueprint case study view with architectural problem breakdown, solution design, tech tags, and metrics. |
| [`src/components/CertificationsSection.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/CertificationsSection.tsx) | `CertificationsSection` | 15 verified credentials with paginated responsive grid, hover color accents, and deep links to `/certifications/[id]`. |
| [`src/components/certifications/CertificationDetailView.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/certifications/CertificationDetailView.tsx) | `CertificationDetailView` | In-depth credential inspection view with credential verification link, skills acquired, and issuer details. |
| [`src/components/ExperienceSection.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/ExperienceSection.tsx) | `ExperienceSection` | Vertical career timeline with glowing nodes, academic base, and research publication with flipbook reader trigger. |
| [`src/components/publications/PaperFlipbookModal.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/publications/PaperFlipbookModal.tsx) | `PaperFlipbookModal` | Interactive 14-page PDF document reader with drag-to-scroll, zoom controls, and fullscreen view. |
| [`src/components/publications/PublicationDetailView.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/publications/PublicationDetailView.tsx) | `PublicationDetailView` | Full publication overview with DOI, Sinta 3 indexing info, abstract, citation copy (BibTeX, APA), and reader button. |
| [`src/components/InteractiveLabSection.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/InteractiveLabSection.tsx) | `InteractiveLabSection` | Live engineering sandbox: (1) Agentic Graph-RAG Simulator, (2) ML Hyperparameter Tuner with SVG loss curves, (3) Causal Forecast Engine. |
| [`src/components/ContactSection.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/ContactSection.tsx) | `ContactSection` | Secure transmission terminal, one-click email copy, real-time Jakarta clock (`WIB / UTC+7`), and minimalist footer. |
| [`src/components/CommandPaletteModal.tsx`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/components/CommandPaletteModal.tsx) | `CommandPaletteModal` | Keyboard-driven command interface (`⌘K`) for rapid navigation, shader switching, and contact copying. |
| [`src/lib/security.ts`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/lib/security.ts) | Security Suite | Defense-in-depth protections: sliding-window rate limiting, honeypot bot trap, timing analysis, CRLF prevention, SQL injection detection, and XSS sanitization. |
| [`src/lib/pagination.ts`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/lib/pagination.ts) | Pagination Utility | Dynamic sliding window pagination algorithm generating clean numeric and ellipsis ranges. |

---

### 6.3 Security Suite & Backend Infrastructure

The transmission terminal is protected by an in-depth security suite in [`src/lib/security.ts`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/lib/security.ts):
- **Sliding-Window IP Rate Limiting:** Enforces a maximum of 5 transmissions per 15-minute sliding window per IP address, preventing DoS and spam flooding.
- **Honeypot Bot Trap:** Hidden form field (`website_url`) invisible to human users; any submission containing a value is instantly rejected.
- **Anti-Speed Bot Verification:** Measures timestamp deltas (`_timestamp`); submissions faster than 2.5 seconds are flagged as automated scripts and rejected.
- **CRLF & Header Injection Prevention:** Sanitizes text fields to prevent line break injections (`\r`, `\n`, `%0A`, `%0D`) into SMTP email headers.
- **SQL & Script Injection Detection:** Regex scanning rejects known SQL exploit payloads and malicious script tokens.
- **HTML Entity Escaping:** Escapes special HTML characters (`<`, `>`, `&`, `"`, `'`) before injecting into the Nodemailer email template.

---

## 7. Design Tokens and Reusable Patterns

### 7.1 Tailwind CSS Configuration Tokens

Verified from [`tailwind.config.ts`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/tailwind.config.ts):

```typescript
// Colors
colors: {
  obsidian: {
    950: "#06070A", // Canvas background
    900: "#0C0F17", // Primary cards & modals
    800: "#121723", // Inset containers
    700: "#1A2133", // Strong borders
  },
  synaptic: {
    cyan: "#38BDF8",    // AI & Primary Highlights
    indigo: "#818CF8",  // Machine Learning & Adapters
    emerald: "#34D399", // Data Analytics & Status
    amber: "#F59E0B",   // Web Development & Warnings
  },
}

// Fonts
fontFamily: {
  sans: ["var(--font-sans)", "system-ui", "sans-serif"],
  display: ["var(--font-display)", "system-ui", "sans-serif"],
  mono: ["var(--font-mono)", "monospace"],
}

// Background Patterns
backgroundImage: {
  "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
}

// Keyframe Animations
keyframes: {
  float: {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-8px)" },
  },
  scanline: {
    "0%": { transform: "translateY(-100%)" },
    "100%": { transform: "translateY(1000%)" },
  },
}
```

### 7.2 Reusable UI Class Patterns

```css
/* Card Container */
.surface-card {
  @apply rounded-3xl border border-white/10 bg-[#0C0F17]/75 backdrop-blur-xl p-6 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.65)];
}

/* Section Monospace Subheading Badge */
.section-tag {
  @apply inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-sky-400;
}

/* Metric Display Value */
.metric-value {
  @apply font-display text-2xl sm:text-3xl font-bold tracking-tight text-white tabular-nums;
}

/* Inset Code / Data Box */
.inset-telemetry-box {
  @apply rounded-2xl border border-white/[0.07] bg-black/45 p-4 font-mono text-xs;
}

/* Filter Tab Pill (Active) */
.filter-tab-active {
  @apply bg-sky-400/20 text-sky-300 border border-sky-400/40 shadow-[0_0_16px_rgba(56,189,248,0.2)];
}
```

---

## 8. Modular Data Layer Architecture

The portfolio utilizes a fully decoupled, strongly-typed data architecture housed under [`src/data/`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/src/data/):

```
src/data/
├── index.ts                     <-- Central re-export aggregating all modules
├── types.ts                     <-- TypeScript interfaces & domain models
├── profile/
│   ├── index.ts
│   └── profileData.ts           <-- Personal bio, contacts, links & global telemetry
├── domains/
│   ├── index.ts
│   ├── domainPillars.ts         <-- 4 Core engineering pillars & formation mappings
│   ├── technicalSkills.ts       <-- 252 Technical skills across 6 categories
│   └── softSkills.ts            <-- 6 Core soft skills matrix
├── projects/
│   ├── index.ts
│   └── projectsData.ts          <-- 38 In-depth production case studies across 6 categories
├── certifications/
│   ├── index.ts
│   └── certificationsData.ts    <-- 15 Verified credentials with verification URLs
├── career/
│   ├── index.ts
│   ├── experienceData.ts        <-- Industry experience & teaching timeline
│   └── educationData.ts         <-- Dian Nuswantoro University Informatics degree
├── publications/
│   ├── index.ts
│   └── publicationsData.ts      <-- Sinta 3 Research paper in JAIC with BibTeX/APA
└── lab/
    ├── index.ts
    └── ragScenariosData.ts      <-- 3 Interactive simulation scenarios
```

### 8.1 Technical Skills Matrix Breakdown (252 Stacks + 6 Soft Skills)

| Category ID | Display Title | Core Competencies | Ecosystem Technologies | Total Stacks |
| :--- | :--- | :--- | :--- | :--- |
| `web-development` | Full-Stack Web Development | 12 | 57 | **69** |
| `data-analysis` | Data Analytics & BI | 9 | 40 | **49** |
| `artificial-intelligence` | Artificial Intelligence & LLMs | 12 | 48 | **60** |
| `machine-learning` | Machine Learning Systems | 10 | 30 | **40** |
| `project-management` | Project Management & Agile | 6 | 8 | **14** |
| `office-productivity` | Office & Collaborative Productivity | 6 | 14 | **20** |
| **Total Technical Skills** | | **55** | **197** | **252** |
| `soft-skills` | Foundational Professional Capabilities | 6 | - | **6** |

### 8.2 Project Case Studies Breakdown (38 Case Studies)

| Category ID | Category Name | Project Count | Notable Highlights |
| :--- | :--- | :--- | :--- |
| `web-development` | Web Development | **12** | Enterprise platforms, Next.js SSR apps, REST/GraphQL APIs, microservices |
| `desktop-mobile` | Desktop & Mobile App | **9** | Cross-platform Flutter apps, Electron clients, native responsive utilities |
| `code-learning` | Code Learning & Visualizers | **7** | Interactive algorithm visualizers, computer science simulations |
| `ai-ml` | AI & Machine Learning | **4** | Deep neural classification, computer vision pipelines, LLM agent systems |
| `ui-ux` | UI/UX Design Systems | **4** | High-fidelity Figma prototypes, design tokens, responsive design systems |
| `data-analysis` | Data Analytics & BI | **2** | Interactive BI dashboards, statistical exploratory analytics |
| **Total Case Studies** | | **38** | All indexed with deep links, metrics, and architecture blueprints |

### 8.3 Offline Resilient Backup Architecture (`backup_data/`)

The repository maintains an independent, offline-resilient backup folder at [`backup_data/`](file:///C:/Users/Dimas/Documents/GitHub/3D%20Particle%20Portfolio%20Website/backup_data/), storing each dataset as an isolated Markdown file with documentation and embedded raw JSON:
- `backup_data/profile.md`: Profile bio, contact links, and global impact metrics.
- `backup_data/technical_skills.md`: Complete 252-skill technical skills dataset.
- `backup_data/soft_skills.md`: 6 soft skill capabilities.
- `backup_data/domain_pillars.md`: 4 engineering pillars with capabilities and 3D triggers.
- `backup_data/projects.md`: 38 production case studies with architectural metadata.
- `backup_data/certifications.md`: 15 verified credentials with verification links.
- `backup_data/experience.md`: Career trajectory and industry positions.
- `backup_data/education.md`: University degree and academic honors.
- `backup_data/publications.md`: Sinta 3 research paper in JAIC with citations.
- `backup_data/rag_scenarios.md`: 3 interactive neural sandbox scenarios.
- `backup_data/README.md`: Central documentation and restoration guide.

---

## 9. Reusable AI Design Prompt

Use the prompt below in another AI coding assistant or generative tool to recreate the exact visual aesthetic, 3D particle system, and UI architecture for another project:

````markdown
Create a world-class, futuristic personal portfolio website for an elite technical professional with an aesthetic defined as "Synaptic Point-Cloud & High-Craft Dark UI".

### 1. Aesthetic & Atmosphere
- Root background: Obsidian Deep Void (`#06070A`) with subtle radial gradients of Cyan (`rgba(56, 189, 248, 0.08)`) and Indigo (`rgba(129, 140, 248, 0.05)`).
- Foreground surfaces: Translucent dark obsidian glass (`#0C0F17` at 65%–85% opacity) with `backdrop-filter: blur(16px)` to `blur(24px)`, fine 1px borders (`rgba(255, 255, 255, 0.08)`), and deep soft shadows (`shadow-[0_24px_60px_rgba(0,0,0,0.65)]`).
- Accent color system: Synaptic Cyan (`#38BDF8`), Tensor Indigo (`#818CF8`), Data Emerald (`#34D399`), and Warm Amber (`#F59E0B`).
- Typography: Headline/Display font in `Space Grotesk`, UI and body copy in `Plus Jakarta Sans`, and technical telemetry/code in `JetBrains Mono` with `tabular-nums`.

### 2. 3D Particle WebGL System (Three.js + GLSL)
- Implement an interactive, full-screen background WebGL canvas using vanilla Three.js and custom GLSL vertex and fragment shaders.
- Render 18,432 luminous points (scaled down to 9,000 on mobile) with AdditiveBlending and depth-fog attenuation.
- Formations (Topologies): Compute 5 distinct 3D mathematical manifolds:
  1. Harmonic Wave (sinusoidal tensor wave sea)
  2. Neural Torus (multi-ring attention lattice)
  3. Latent Clusters (5 high-dimensional Gaussian clusters with inter-cluster data bridges)
  4. Pipeline Helix (dual-strand DNA vortex with connecting rungs)
  5. Singularity Sphere (Fibonacci geodesic sphere with equatorial telemetry rings)
- GPU Morphing: Interpolate positions smoothly between formations on the GPU using cubic easing (`smoothstep(0.0, 1.0, uMorphProgress)`).
- Interactive 3D Physics:
  - Raycast cursor coordinates to a 3D plane facing the camera; deflect nearby particles using radial repulsion and vortex swirl.
  - On cursor proximity, shift particle colors toward bright electric cyan and pure white cores.
  - Provide a "Synaptic Pulse" trigger that propagates an energetic 3D shockwave ring outward across all particles.
  - Add dynamic synaptic network filaments (`THREE.LineSegments`) connecting hub particles within a proximity threshold (`distSq < 18.5`).
  - Choreograph camera parallax and particle morphing automatically based on scroll position across page sections.

### 3. UI Structure & Components
- Floating Glassmorphic Top Navbar: Pulsing live status dot, scroll-spy section links, Command Palette (`⌘K`) trigger, and Executive CV button.
- Hero Viewport: Large kinetic display headline, interactive discipline switcher pills, interactive 3D manifold control card, and a 4-column Quantified Impact Ribbon (Years Experience, Projects Completed, Certifications, GPA).
- Core Engineering Domains: 2x2 grid of pillar cards with live 3D formation triggers, accompanied by an interactive 252-skill proficiency matrix across 6 categories with live search, category filtering, and responsive pagination.
- Selected Works & Blueprints: Filterable grid of 38 in-depth case studies with verified production metrics, pipeline steps, and dedicated dynamic pages (`/projects/[id]`) revealing architectural blueprints and code.
- Verified Credentials: 15 verified professional certifications with credential IDs, verification links, and dedicated verification pages (`/certifications/[id]`).
- Career Trajectory & Academic Research: Vertical synaptic timeline with illuminated nodes, paired with an accredited Sinta 3 research paper featuring an interactive 14-page PDF flipbook reader (`PaperFlipbookModal.tsx`) and citation generator.
- Dedicated Executive CV Dossier: Full-page CV reader (`/cv`) with dual view modes ("scroll" and "reader"), PDF export, drag-to-scroll, and browser fullscreen API.
- Project Transmission Terminal & Contact: Secure contact form backed by Nodemailer SMTP with defense-in-depth security (sliding-window rate limiting, honeypot bot trap, timing analysis, CRLF prevention), one-click email copy with clipboard feedback, and live Jakarta clock (`WIB / UTC+7`).
- Floating 3D Telemetry HUD: Bottom-right interactive widget showing live FPS, particle count, manual formation switcher, and field turbulence slider.
- Command Palette Modal (`⌘K` / `Ctrl+K`) for rapid keyboard navigation.
````

---

## 10. Repository Architecture & Source Map

```
3D Particle Portfolio Website/
├── DESIGN_SYSTEM.md                    <-- This visual architecture & system documentation
├── package.json                        <-- Dependencies (Next 15.2, Three.js 0.174, Tailwind 3.4, Nodemailer)
├── tailwind.config.ts                  <-- Obsidian & Synaptic color tokens, fonts, keyframes
├── tsconfig.json                       <-- TypeScript configuration with @/* path aliases
├── backup_data/                        <-- Offline resilient data backups in Markdown & JSON
│   ├── README.md                       <-- Backup documentation & restoration procedures
│   ├── profile.md                      <-- Profile bio, contacts, and global metrics
│   ├── technical_skills.md             <-- 252 Technical skills across 6 categories
│   ├── soft_skills.md                  <-- 6 Soft skills matrix
│   ├── domain_pillars.md               <-- 4 Core domain pillars with capabilities
│   ├── projects.md                     <-- 38 In-depth production case studies
│   ├── certifications.md               <-- 15 Verified professional credentials
│   ├── experience.md                   <-- Work experience & teaching timeline
│   ├── education.md                    <-- University degree & academic honors
│   ├── publications.md                 <-- Sinta 3 research paper in JAIC with citations
│   └── rag_scenarios.md                <-- 3 Interactive neural sandbox scenarios
├── public/
│   ├── cv/                             <-- Downloadable PDF Curriculum Vitae
│   ├── papers/                         <-- Published research papers (JAIC 2025 PDF)
│   └── images/                         <-- Project assets, logos, and certificate badges
└── src/
    ├── app/
    │   ├── globals.css                 <-- Dark reset, selection color, custom scrollbar
    │   ├── layout.tsx                  <-- Font loaders (Space Grotesk, Jakarta, JetBrains)
    │   ├── page.tsx                    <-- Root scrollytelling & 3D state orchestrator
    │   ├── opengraph-image.tsx         <-- Dynamic Edge OpenGraph card generator
    │   ├── robots.ts                   <-- Search engine crawling directives
    │   ├── sitemap.ts                  <-- Automated dynamic sitemap indexing all routes
    │   ├── cv/
    │   │   ├── layout.tsx              <-- CV dossier metadata layout
    │   │   └── page.tsx                <-- Interactive CV document reader with dual view modes
    │   ├── projects/[id]/
    │   │   └── page.tsx                <-- Dynamic project case study blueprint page
    │   ├── certifications/[id]/
    │   │   └── page.tsx                <-- Dynamic certification verification page
    │   ├── publications/[id]/
    │   │   └── page.tsx                <-- Dynamic research publication detail page
    │   └── api/
    │       └── contact/
    │           └── route.ts            <-- Rate-limited Nodemailer contact transmission API
    ├── components/
    │   ├── Navbar.tsx                  <-- Floating glassmorphic top navigation
    │   ├── ParticleControllerHUD.tsx   <-- Floating 3D HUD & FPS telemetry widget
    │   ├── HeroSection.tsx             <-- Hero, role switcher, manifold quick deck, metrics ribbon
    │   ├── DomainsSection.tsx          <-- 4 Pillars & 252-skill interactive proficiency matrix
    │   ├── ProjectsSection.tsx         <-- 38 Selected works with filter tabs & pagination
    │   ├── CertificationsSection.tsx   <-- 15 Verified credentials with hover accents & pagination
    │   ├── ExperienceSection.tsx       <-- Career timeline, publications & academic base
    │   ├── ContactSection.tsx          <-- Dispatch terminal, email copy, Jakarta clock
    │   ├── CommandPaletteModal.tsx     <-- Keyboard command interface (⌘K)
    │   ├── InteractiveLabSection.tsx   <-- RAG simulator, ML tuner, Causal forecast
    │   ├── canvas/
    │   │   └── SynapticParticleCanvas.tsx  <-- 3D Three.js + GLSL Point-Cloud Engine
    │   ├── projects/
    │   │   └── ProjectDetailView.tsx   <-- Case study technical blueprint view
    │   ├── certifications/
    │   │   └── CertificationDetailView.tsx <-- Credential verification view
    │   └── publications/
    │       ├── PaperFlipbookModal.tsx  <-- Interactive 14-page PDF flipbook reader
    │       └── PublicationDetailView.tsx <-- Research paper overview & citation generator
    ├── data/
    │   ├── index.ts                    <-- Aggregator re-exporting all data modules
    │   ├── types.ts                    <-- TypeScript interfaces for all data structures
    │   ├── profile/                    <-- Bio, contact details, global metrics
    │   ├── domains/                    <-- Domain pillars, 252 technical skills, soft skills
    │   ├── projects/                   <-- 38 Project case studies across 6 categories
    │   ├── certifications/             <-- 15 Verified credentials
    │   ├── career/                     <-- Experience timeline & education data
    │   ├── publications/               <-- Sinta 3 Research paper in JAIC
    │   └── lab/                        <-- Interactive RAG sandbox scenarios
    └── lib/
        ├── pagination.ts               <-- Sliding window pagination algorithm
        └── security.ts                 <-- Defense-in-depth rate limiting & sanitization suite
```
