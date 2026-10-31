# Design System & Visual Architecture Documentation

> **Project:** Yohanes Dimas Pratama — Personal Portfolio  
> **Tech Stack:** Next.js 15 (App Router, TypeScript) · Tailwind CSS 3.4 · Three.js 0.174 + Custom GLSL Shaders · Lucide Icons  
> **Target Theme:** Futuristic 3D Particle with Dark Theme (Obsidian & Synaptic Neon)  
> **Document Date:** October 2026  
> **Specification Version:** 1.0.0

---

## 1. Overall Design Style

### 1.1 Visual Identity & Philosophy
The website embodies a **"Synaptic Point-Cloud & High-Craft Dark UI"** aesthetic—a synthesis of high-performance computational intelligence and cinematic interface design. The visual tone is calibrated specifically for an **AI Engineer, Machine Learning Engineer, Data Analyst, and Web Developer**, communicating technical mastery across abstract mathematical modeling, low-level shader execution, and polished product design.

Key aesthetic principles:
- **Atmospheric Obsidian Void:** A background canvas anchored in deep black (`#06070A`) with subtle cyan/indigo radial scrims, avoiding flat sterile blacks while retaining infinite depth.
- **Precision Engineering & Telemetry Aesthetic:** Monospace micro-copy, bracketed indexing (`[ 01 // DOMAIN ]`), coordinate indicators (`XYZ: [x, y]`), status indicators (`60 FPS`, `GLSL v3.0`, `18,432 NODES`), and quantified production deltas.
- **Physicality of 3D Data (Point-Cloud Tangibility):** Instead of static illustrations or prerendered 3D videos, the interface uses an active, interactive 3D particle engine that responds to cursor gravity, scroll choreography, and interactive mode switching.
- **Glassmorphic Micro-Surfaces:** Translucent slate-obsidian cards (`#0C0F17` at 65%–85% opacity) with `backdrop-filter: blur(16px)` to `blur(24px)` and specular 1px borders (`rgba(255, 255, 255, 0.07)` to `rgba(255, 255, 255, 0.15)`), allowing the 3D particles to drift visibly behind cards while maintaining full legibility.
- **Controlled Spectral Accents:** A restricted neon palette consisting of **Synaptic Cyan**, **Tensor Indigo**, **Data Emerald**, and **Warm Amber**, each tied directly to a specific engineering discipline and interaction feedback state.

---

## 2. 3D Particle Visual System

### 2.1 Particle Architecture & Composition
The 3D canvas is implemented in [`src/components/canvas/SynapticParticleCanvas.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/canvas/SynapticParticleCanvas.tsx) using vanilla Three.js and custom GLSL vertex/fragment shaders.

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
   Calculates simplex-like continuous 3D wave offsets scaled by `uTurbulence`:
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

Configured via `next/font/google` in [`src/app/layout.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/app/layout.tsx):

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
  - Elevated Modal: `bg-[#0C0F17] backdrop-blur-2xl border border-white/15`
  - Floating Navbar (Scrolled): `bg-[#0C0F17]/80 backdrop-blur-xl border border-white/10`
  - Floating Navbar (Default): `bg-[#0C0F17]/50 backdrop-blur-md border border-white/[0.07]`
  - Deep Inset Panel: `bg-black/40 border border-white/5`
- **Shadow Scale:**
  - Card Default: `shadow-[0_24px_60px_rgba(0,0,0,0.65)]`
  - Active / Hover Card: `shadow-[0_24px_60px_rgba(0,0,0,0.7),0_0_30px_rgba(56,189,248,0.12)]`
  - Primary Neon Glow: `shadow-[0_0_24px_rgba(56,189,248,0.3)]` up to `shadow-[0_0_42px_rgba(56,189,248,0.6)]`
  - Modal Deep Occlusion: `shadow-[0_24px_90px_rgba(0,0,0,0.95)]`
- **Architectural Grid Pattern:**
  - Defined in `tailwind.config.ts`:
    `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`
  - Rendered at fixed overlay: `bg-[size:64px_64px] opacity-30 pointer-events-none z-[1]`.

---

### 3.4 Button and Interactive Components

1. **Primary Gradient CTA ("Explore Works", "Transmit Brief"):**
   - Classes: `bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 text-slate-950 font-semibold rounded-xl px-6 py-3.5 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_42px_rgba(56,189,248,0.6)] active:scale-95 transition-all`
2. **Secondary Outline CTA ("Live Neural Sandbox"):**
   - Classes: `border border-sky-400/35 bg-[#0C0F17]/80 backdrop-blur-md text-sky-300 font-medium rounded-xl px-5 py-3.5 hover:border-sky-400 hover:bg-sky-400/10 hover:text-white transition-all`
3. **Ghost / Dossier CTA ("Executive CV"):**
   - Classes: `border border-white/10 bg-[#0C0F17]/60 backdrop-blur-md text-slate-300 font-medium rounded-xl px-5 py-3.5 hover:border-white/25 hover:bg-white/5 hover:text-white transition-all`
4. **Discipline Role Filter Buttons:**
   - Active: `text-sky-400 border-sky-400/30 bg-sky-400/10 shadow-[0_0_20px_rgba(56,189,248,0.18)] scale-[1.02]`
   - Default: `border-white/10 bg-[#0C0F17]/60 text-slate-400 hover:border-white/25 hover:text-slate-200`
5. **Interactive 3D HUD Controller Widget:**
   - Position: `fixed bottom-5 right-5 z-40`
   - Collapsed state: rounded pill with live pulsing emerald status indicator, `Cpu` icon, current formation name, and `60 FPS` readout.
   - Expanded state: 350px glassmorphic card containing real-time FPS counter, particle count (`18,432`), 3D topology switcher (6 modes), field turbulence slider (`0.1x` to `2.4x`), cursor XYZ coordinate readout, and "Synaptic Pulse" trigger button.

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
                              Simplex harmonic wave frequency & amplitude scales in real time
```

### 4.2 Scroll-Choreographed Manifold Mapping

The portfolio links the page scroll position to the 3D particle manifold via scroll-spy (`SECTION_FORMATION_MAP` in [`src/app/page.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/app/page.tsx)):

| Section ID | Section Title | Target 3D Manifold | Aesthetic Rationale |
| :--- | :--- | :--- | :--- |
| `#hero` | Overview | `wave` | Sweeping harmonic tensor waves representing expansive potential |
| `#domains` | 4 Core Domains | `neural` | Toroidal multi-layer attention network representing neural architectures |
| `#projects` | Selected Works | `clusters` | High-dimensional data clusters representing real-world models |
| `#interactive-lab` | Neural Sandbox | `helix` | Dual-strand pipeline vortex representing streaming feature engineering |
| `#experience` | Career Trajectory | `neural` | Synaptic pathways representing connected expertise and engineering experience |
| `#contact` | Initiate Transmission | `sphere` | Convergent Fibonacci singularity representing unified connection |

### 4.3 UI Animations & Micro-Interactions
- **Bento Card Lift:** `hover:-translate-y-1 hover:border-sky-400/50 transition-all duration-300`.
- **Live Status Pulsing Dot:** Tailwind `animate-ping` with absolute inner dot on `bg-emerald-400`.
- **Keyboard Shortcut Trigger:** `Ctrl+K` or `Cmd+K` toggles [`CommandPaletteModal.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/CommandPaletteModal.tsx) with instant autofocus and keyboard action dispatch.
- **Copy-to-Clipboard Feedback:** One-click email copy switches from `Copy` icon to `Check` icon in Emerald, triggers a 3D Synaptic Pulse, and auto-resets after 2600ms.
- **Interactive SVG Charts:**
  - Real-time training vs. validation loss polylines update instantly as users drag Learning Rate, LoRA Rank, or Dropout sliders.
  - Causal time-series forecast toggles 95% Bayesian credible interval polygon and anomaly tags with zero layout shift.

---

## 5. Layout and Visual Hierarchy

### 5.1 Page Anatomy & Grid Composition
The layout adopts a **12-column responsive grid** wrapped in a maximum width of `1380px` (`max-w-[1380px] mx-auto`) with responsive padding `px-4 sm:px-6 lg:px-10`.

```
+--------------------------------------------------------------------------+
| FIXED TOP NAVBAR: [Brand // Live Status]  [Nav 00-05]  [⌘K] [CV] [CTA]   |
+--------------------------------------------------------------------------+
|                                                                          |
| SECTION 00: HERO VIEWPORT (Min-Height 100vh)                             |
| [Status Pill: Jakarta, ID]                                               |
| H1: Yohanes Dimas Pratama                                                |
| [4 Discipline Pills: AI | Data | ML | Web]   +   [3D MANIFOLD DECK]     |
| [Bio Card]                                    | - Quick Topologies       |
| [Primary CTA Cluster: Works | Sandbox | CV]   | - Real-time WebGL Telemetry|
|                                                                          |
| [QUANTIFIED IMPACT RIBBON: 28+ Systems | 180M+ Events | 99.94% | 14.2x]  |
+--------------------------------------------------------------------------+
| SECTION 01: FOUR CONVERGENT DOMAINS                                      |
| [2x2 Grid of Engineering Pillars with Live 3D Morph Triggers]            |
| [19-Tool Interactive Quantitative Competency & Stack Matrix]             |
+--------------------------------------------------------------------------+
| SECTION 02: SELECTED WORKS & CASE STUDIES                                |
| [Category Filters: All | AI & LLM | ML | Data | Web3D]                  |
| [12-Column Asymmetric Bento Grid (7-5 / 5-7 / 6-6 layout)]                |
| [Card: Title | Metrics | Pipeline Steps | "Inspect Blueprint" Modal]     |
+--------------------------------------------------------------------------+
| SECTION 03: LIVE NEURAL & TELEMETRY SANDBOX                              |
| [3-Module Switcher: 01. Agentic RAG | 02. ML Tuner | 03. Causal BI]     |
| [Interactive Execution Playground with Live SVG Plots & Token Streams]   |
+--------------------------------------------------------------------------+
| SECTION 04: CAREER TRAJECTORY & CREDENTIALS                              |
| [Left 7 cols: Vertical Synaptic Timeline with Glowing Connected Nodes]   |
| [Right 5 cols: Publications, Hackathons, Certifications & Academic Base] |
+--------------------------------------------------------------------------+
| SECTION 05: INITIATE TRANSMISSION & FOOTER                               |
| [Left 5 cols: Encrypted Email Copy, Base Station, Jakarta Clock]         |
| [Right 7 cols: Interactive Project Brief Transmission Terminal]          |
| [Minimalist Technical Footer with Live Copyright & Tech Stack Badge]     |
+--------------------------------------------------------------------------+
| FIXED BOTTOM-RIGHT: [INTERACTIVE 3D PARTICLE ENGINE TELEMETRY HUD]       |
+--------------------------------------------------------------------------+
```

### 5.2 Foreground UI vs. 3D Background Balancing
- **Z-Index Layering Hierarchy:**
  - `z-0`: `SynapticParticleCanvas` (fixed, pointer-events-none, hardware-accelerated WebGL viewport).
  - `z-[1]`: Fixed SVG 64px Grid Overlay (`opacity: 0.30`).
  - `z-10`: Foreground `<main>` content container.
  - `z-20`: Linear top/bottom vignette gradients (`#06070A` fade) ensuring high text contrast.
  - `z-40`: Floating 3D Particle Controller HUD widget.
  - `z-50`: Fixed Floating Top Navbar, `CommandPaletteModal`, and `ResumeModal`.
- **Negative Space Calibration:** Section headers and Hero text occupy 55%–65% of viewport width on desktop, intentionally preserving open visual pockets for the 3D particles and synaptic filament lines to breathe without competing with text.

---

## 6. Technical Implementation

### 6.1 Verified Package Dependencies

From [`package.json`](file:///d:/GitHub/EXPERIMENT/portfolio/package.json):
```json
{
  "dependencies": {
    "next": "^15.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "three": "^0.174.0",
    "lucide-react": "^0.475.0"
  },
  "devDependencies": {
    "@types/node": "^22.13.0",
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

### 6.2 Key Component Roles

| File Path | Component Name | Architectural Responsibility |
| :--- | :--- | :--- |
| [`src/app/page.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/app/page.tsx) | `PortfolioPage` | Root orchestrator. Manages scroll-spy, active section state, formation sync, telemetry state, modal visibility, and keyboard listener (`⌘K`). |
| [`src/app/layout.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/app/layout.tsx) | `RootLayout` | Font loading (`Space_Grotesk`, `Plus_Jakarta_Sans`, `JetBrains_Mono`), HTML metadata, root dark class injection. |
| [`src/app/globals.css`](file:///d:/GitHub/EXPERIMENT/portfolio/src/app/globals.css) | Global Styles | Root `#06070a` canvas color, text selection styling, sleek 8px custom dark scrollbars. |
| [`src/components/canvas/SynapticParticleCanvas.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/canvas/SynapticParticleCanvas.tsx) | `SynapticParticleCanvas` | Vanilla Three.js WebGL canvas. Custom GLSL shaders, 18,432 particles, 5 buffer formations, 3D cursor raycasting, synaptic network lines, telemetry loop. |
| [`src/components/ParticleControllerHUD.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/ParticleControllerHUD.tsx) | `ParticleControllerHUD` | Floating bottom-right HUD for manual formation override, turbulence adjustment, pulse trigger, and live FPS telemetry. |
| [`src/components/Navbar.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/Navbar.tsx) | `Navbar` | Floating glassmorphic top navigation with active section indicator, command palette button, mobile drawer, and quick CTAs. |
| [`src/components/HeroSection.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/HeroSection.tsx) | `HeroSection` | Hero presentation. Role cycling animation, quick 3D topology switcher, primary CTAs, and global impact metrics ribbon. |
| [`src/components/DomainsSection.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/DomainsSection.tsx) | `DomainsSection` | 4 Core Engineering Pillars with direct 3D particle morph triggers, and an interactive 19-skill proficiency matrix. |
| [`src/components/ProjectsSection.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/ProjectsSection.tsx) | `ProjectsSection` | Filterable case studies with impact metrics, pipeline breakdown, and full-screen Technical Architecture Blueprint modal. |
| [`src/components/InteractiveLabSection.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/InteractiveLabSection.tsx) | `InteractiveLabSection` | Live engineering sandbox: (1) Agentic Graph-RAG Simulator, (2) ML Hyperparameter Tuner with SVG loss curves, (3) Causal Forecast Engine. |
| [`src/components/ExperienceSection.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/ExperienceSection.tsx) | `ExperienceSection` | Vertical career timeline with glowing nodes and structured list of honors, publications, certifications, and academic degrees. |
| [`src/components/ContactSection.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/ContactSection.tsx) | `ContactSection` | Interactive project transmission terminal, one-click email copy, real-time Jakarta clock (`WIB / UTC+7`), and minimalist footer. |
| [`src/components/CommandPaletteModal.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/CommandPaletteModal.tsx) | `CommandPaletteModal` | Keyboard-driven command interface (`⌘K`) for rapid navigation, shader switching, and contact copying. |
| [`src/components/ResumeModal.tsx`](file:///d:/GitHub/EXPERIMENT/portfolio/src/components/ResumeModal.tsx) | `ResumeModal` | Printable / PDF-exportable executive CV and engineering dossier with print-optimized styles. |
| [`src/data/portfolioData.ts`](file:///d:/GitHub/EXPERIMENT/portfolio/src/data/portfolioData.ts) | Data Layer | Centralized mock dataset for profile, metrics, domain pillars, skills, case studies, code snippets, career history, and achievements. |

---

## 7. Design Tokens and Reusable Patterns

### 7.1 Tailwind CSS Configuration Tokens

Verified from [`tailwind.config.ts`](file:///d:/GitHub/EXPERIMENT/portfolio/tailwind.config.ts):

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

## 8. Reusable AI Design Prompt

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
- Floating Glassmorphic Top Navbar: Pulsing live status dot, scroll-spy section links, Command Palette (`⌘K`) trigger, and CV Dossier button.
- Hero Viewport: Large kinetic display headline, interactive discipline switcher pills that morph the 3D particles on click, interactive 3D manifold control card, and a 4-column Quantified Impact Ribbon.
- Core Engineering Domains: 2x2 grid of pillar cards with live 3D formation triggers, accompanied by an interactive 19-skill proficiency matrix with category filtering.
- Selected Works & Blueprints: Asymmetric 12-column Bento case study cards with verified production metrics, pipeline steps, and an "Inspect Blueprint" modal revealing the system architecture and code snippets.
- Interactive Live Sandbox: 3 tabbed simulations (Agentic Graph-RAG retrieval simulator, ML Hyperparameter Tuner with live SVG loss curves, and Causal Forecast time-series telemetry with 95% credible bands).
- Career Trajectory & Credentials: Vertical synaptic timeline with illuminated nodes, paired with an honors, research publications, and certifications grid.
- Project Transmission Terminal & Contact: Inquiry scope selector, transmission form, one-click email copy with clipboard feedback, verified profile badges, and a live timezone clock (`WIB / UTC+7`).
- Floating 3D Telemetry HUD: Bottom-right interactive widget showing live FPS, particle count, manual formation switcher, and field turbulence slider.
- Command Palette Modal (`⌘K` / `Ctrl+K`) for rapid keyboard navigation.
````

---

## 9. Key Files and Source Architecture

```
d:\GitHub\EXPERIMENT\portfolio\
├── DESIGN_SYSTEM.md                    <-- This documentation
├── package.json                        <-- Dependencies (Next 15, Three.js, Tailwind 3.4)
├── tailwind.config.ts                  <-- Obsidian & Synaptic color tokens, fonts, keyframes
├── src/
│   ├── app/
│   │   ├── globals.css                 <-- Dark reset, selection color, custom scrollbar
│   │   ├── layout.tsx                  <-- Font loaders (Space Grotesk, Jakarta, JetBrains)
│   │   └── page.tsx                    <-- Root scrollytelling & 3D state orchestrator
│   ├── components/
│   │   ├── canvas/
│   │   │   └── SynapticParticleCanvas.tsx  <-- 3D Three.js + GLSL Point-Cloud Engine
│   │   ├── Navbar.tsx                  <-- Floating glassmorphic top navigation
│   │   ├── ParticleControllerHUD.tsx   <-- Floating 3D HUD & FPS telemetry widget
│   │   ├── HeroSection.tsx             <-- Hero, role switcher, manifold quick deck
│   │   ├── DomainsSection.tsx          <-- 4 Pillars & 19-tool proficiency matrix
│   │   ├── ProjectsSection.tsx         <-- Selected works & Blueprint modal
│   │   ├── InteractiveLabSection.tsx   <-- RAG simulator, ML tuner, Causal forecast
│   │   ├── ExperienceSection.tsx       <-- Career timeline, publications & honors
│   │   ├── ContactSection.tsx          <-- Dispatch terminal, email copy, Jakarta clock
│   │   ├── CommandPaletteModal.tsx     <-- Keyboard command interface (⌘K)
│   │   └── ResumeModal.tsx             <-- Printable executive CV dossier modal
│   └── data/
│       └── portfolioData.ts            <-- Centralized mock data layer & types
```

