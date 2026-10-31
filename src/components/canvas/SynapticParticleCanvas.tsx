"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { ParticleFormation } from "@/data";

export interface TelemetryData {
  fps: number;
  particleCount: number;
  activeFormation: Exclude<ParticleFormation, "auto">;
  cursorX: number;
  cursorY: number;
  cursorZ: number;
  scrollProgress: number;
}

interface SynapticParticleCanvasProps {
  formationMode: ParticleFormation;
  scrollActiveFormation: Exclude<ParticleFormation, "auto">;
  turbulence: number;
  pulseTrigger: number;
  onTelemetryUpdate?: (data: TelemetryData) => void;
  className?: string;
}

const VERTEX_SHADER = /* glsl */ `
  uniform float uTime;
  uniform float uMorphProgress;
  uniform float uTurbulence;
  uniform vec3 uCursorWorld;
  uniform float uCursorActive;
  uniform float uPulseProgress;
  uniform vec3 uPulseOrigin;
  uniform float uPixelRatio;

  attribute vec3 aTarget;
  attribute float aScale;
  attribute float aColorMix;
  attribute float aPhase;

  varying float vColorMix;
  varying float vAlpha;
  varying float vCursorHighlight;
  varying float vPulseHighlight;

  // Simplex-inspired 3D harmonic wave displacement
  vec3 harmonicField(vec3 p, float t, float phase) {
    float freq = 0.28;
    float dx = sin(p.y * freq + t * 1.1 + phase) * cos(p.z * freq * 0.8 + t * 0.7);
    float dy = cos(p.x * freq * 0.9 + t * 1.3 + phase) * sin(p.z * freq + t * 0.9);
    float dz = sin(p.x * freq * 0.7 + t * 0.8 + phase) * cos(p.y * freq * 1.1 + t * 1.2);
    return vec3(dx, dy, dz);
  }

  void main() {
    vColorMix = aColorMix;

    // Smooth cubic interpolation between source and target manifold
    float tMorph = smoothstep(0.0, 1.0, uMorphProgress);
    vec3 basePos = mix(position, aTarget, tMorph);

    // Continuous organic harmonic displacement
    vec3 waveOffset = harmonicField(basePos, uTime, aPhase) * (0.32 * uTurbulence);
    vec3 pos = basePos + waveOffset;

    // Interactive 3D Cursor Repulsion & Vortex Swirl
    float distToCursor = distance(pos, uCursorWorld);
    float cursorRadius = 4.8;
    vCursorHighlight = 0.0;

    if (distToCursor < cursorRadius && uCursorActive > 0.01) {
      float falloff = pow(1.0 - (distToCursor / cursorRadius), 2.0) * uCursorActive;
      vec3 dir = normalize(pos - uCursorWorld + vec3(0.0001));
      // Swirl tangent vector around Z/Y axis
      vec3 swirl = normalize(cross(dir, vec3(0.0, 0.0, 1.0)));
      pos += (dir * 1.45 + swirl * 0.85) * falloff;
      vCursorHighlight = falloff;
    }

    // Synaptic Shockwave Pulse Effect
    vPulseHighlight = 0.0;
    if (uPulseProgress > 0.0 && uPulseProgress < 1.0) {
      float pulseRadius = uPulseProgress * 28.0;
      float distFromOrigin = distance(basePos, uPulseOrigin);
      float ringDist = abs(distFromOrigin - pulseRadius);
      float bandWidth = 3.2;
      if (ringDist < bandWidth) {
        float waveStrength = (1.0 - ringDist / bandWidth) * (1.0 - uPulseProgress);
        vec3 outDir = normalize(basePos - uPulseOrigin + vec3(0.0001));
        pos += outDir * waveStrength * 1.9;
        vPulseHighlight = waveStrength;
      }
    }

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Perspective-correct point size with subtle breathing
    float breathe = 0.88 + 0.24 * sin(uTime * 2.2 + aPhase);
    float highlightBoost = 1.0 + vCursorHighlight * 1.35 + vPulseHighlight * 1.6;
    float depthScale = 155.0 / max(-mvPosition.z, 2.5);
    gl_PointSize = clamp(aScale * breathe * highlightBoost * depthScale * uPixelRatio * 0.14, 1.2, 22.0);

    // Distance fog / depth alpha attenuation
    float depthAlpha = smoothstep(42.0, 7.0, -mvPosition.z);
    vAlpha = clamp(depthAlpha * (0.58 + 0.42 * aScale + vCursorHighlight * 0.5 + vPulseHighlight * 0.6), 0.1, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  varying float vColorMix;
  varying float vAlpha;
  varying float vCursorHighlight;
  varying float vPulseHighlight;

  void main() {
    // Soft radial point sprite with hot glowing core
    vec2 uv = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    if (dist > 0.5) discard;

    // Exponential core + soft halo
    float core = smoothstep(0.5, 0.04, dist);
    float hotCenter = smoothstep(0.22, 0.0, dist);

    // Palette: Synaptic Cyan (#38BDF8), Tensor Indigo (#818CF8), Data Emerald (#34D399), Warm Amber (#F59E0B)
    vec3 cyan = vec3(0.220, 0.741, 0.973);
    vec3 indigo = vec3(0.506, 0.549, 0.973);
    vec3 emerald = vec3(0.204, 0.827, 0.600);
    vec3 amber = vec3(0.961, 0.620, 0.043);

    vec3 baseColor;
    if (vColorMix < 0.45) {
      baseColor = mix(cyan, indigo, vColorMix / 0.45);
    } else if (vColorMix < 0.82) {
      baseColor = mix(indigo, emerald, (vColorMix - 0.45) / 0.37);
    } else {
      baseColor = mix(emerald, amber, (vColorMix - 0.82) / 0.18);
    }

    // Highlight shift toward electric cyan-emerald & white core on cursor/pulse
    vec3 activeColor = mix(baseColor, vec3(0.45, 0.95, 1.0), clamp(vCursorHighlight + vPulseHighlight, 0.0, 1.0));
    vec3 finalColor = mix(activeColor, vec3(1.0, 1.0, 1.0), hotCenter * 0.65);

    float alpha = core * vAlpha;
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

type FormationKey = Exclude<ParticleFormation, "auto">;

function generateFormations(count: number): Record<FormationKey, Float32Array> {
  const wave = new Float32Array(count * 3);
  const neural = new Float32Array(count * 3);
  const clusters = new Float32Array(count * 3);
  const helix = new Float32Array(count * 3);
  const sphere = new Float32Array(count * 3);

  // Define 5 cluster centers for the "clusters" (Latent Space UMAP) formation
  const clusterCenters = [
    new THREE.Vector3(-7.5, 3.2, -1.5),
    new THREE.Vector3(7.2, 2.8, 1.2),
    new THREE.Vector3(0.0, -3.8, 2.5),
    new THREE.Vector3(-4.8, -2.5, -3.5),
    new THREE.Vector3(5.2, -1.2, -2.8),
  ];

  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const u = i / count;

    // 1. WAVE MANIFOLD: Sweeping 3D Harmonic Tensor Sea + Floating Horizon Nodes
    if (i < count * 0.86) {
      const gridSize = Math.floor(Math.sqrt(count * 0.86));
      const gx = (i % gridSize) / gridSize - 0.5;
      const gz = Math.floor(i / gridSize) / gridSize - 0.5;
      const wx = gx * 32.0 + (Math.random() - 0.5) * 0.35;
      const wz = gz * 22.0 + (Math.random() - 0.5) * 0.35;
      const wy =
        Math.sin(wx * 0.32) * Math.cos(wz * 0.35) * 2.4 +
        Math.sin((wx + wz) * 0.22) * 1.1 -
        1.2;
      wave[i3] = wx;
      wave[i3 + 1] = wy;
      wave[i3 + 2] = wz;
    } else {
      // Ambient upper synaptic stars
      wave[i3] = (Math.random() - 0.5) * 34.0;
      wave[i3 + 1] = (Math.random() - 0.2) * 16.0;
      wave[i3 + 2] = (Math.random() - 0.5) * 20.0;
    }

    // 2. NEURAL TORUS: Multi-Layer Attention Torus & Cortical Filaments
    const torusAngle = u * Math.PI * 2.0 * 37.0;
    const tubeAngle = u * Math.PI * 2.0 * 113.0;
    const majorR = 6.8 + Math.sin(tubeAngle * 3.0) * 0.6;
    const minorR = 2.6 + (Math.random() - 0.5) * 0.7;
    neural[i3] = (majorR + minorR * Math.cos(tubeAngle)) * Math.cos(torusAngle);
    neural[i3 + 1] = (majorR + minorR * Math.cos(tubeAngle)) * Math.sin(torusAngle) * 0.78;
    neural[i3 + 2] = minorR * Math.sin(tubeAngle) * 1.4;

    // 3. LATENT CLUSTERS: 5 High-Dimensional Gaussian/t-SNE Clusters + Inter-cluster Bridges
    const clusterIdx = i % clusterCenters.length;
    const center = clusterCenters[clusterIdx];
    if (i < count * 0.82) {
      // Gaussian-like radial distribution around cluster centroid
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.55) * 3.6;
      clusters[i3] = center.x + r * Math.sin(phi) * Math.cos(theta);
      clusters[i3 + 1] = center.y + r * Math.sin(phi) * Math.sin(theta);
      clusters[i3 + 2] = center.z + r * Math.cos(phi);
    } else {
      // Synaptic bridge streams connecting clusters
      const nextCenter = clusterCenters[(clusterIdx + 1) % clusterCenters.length];
      const lerpT = Math.random();
      clusters[i3] = THREE.MathUtils.lerp(center.x, nextCenter.x, lerpT) + (Math.random() - 0.5) * 0.8;
      clusters[i3 + 1] =
        THREE.MathUtils.lerp(center.y, nextCenter.y, lerpT) +
        Math.sin(lerpT * Math.PI) * 1.4 +
        (Math.random() - 0.5) * 0.8;
      clusters[i3 + 2] = THREE.MathUtils.lerp(center.z, nextCenter.z, lerpT) + (Math.random() - 0.5) * 0.8;
    }

    // 4. HELIX STREAM: Dual-Strand DNA / Feature Pipeline Vortex
    const strand = i % 2 === 0 ? 1.0 : -1.0;
    const hT = (u - 0.5) * 26.0;
    const helixAngle = hT * 0.72 + (strand > 0 ? 0 : Math.PI);
    const radiusHelix = 4.2 + Math.sin(hT * 0.35) * 1.1;
    const spread = (Math.random() - 0.5) * 1.15;
    if (i % 7 === 0) {
      // Cross-rungs connecting the two strands
      const rungLerp = (Math.random() - 0.5) * 2.0;
      helix[i3] = hT * 0.95;
      helix[i3 + 1] = Math.cos(hT * 0.72) * radiusHelix * rungLerp;
      helix[i3 + 2] = Math.sin(hT * 0.72) * radiusHelix * rungLerp;
    } else {
      helix[i3] = hT * 0.95 + spread * 0.4;
      helix[i3 + 1] = Math.cos(helixAngle) * radiusHelix + spread;
      helix[i3 + 2] = Math.sin(helixAngle) * radiusHelix + spread;
    }

    // 5. SINGULARITY SPHERE: Geodesic Fibonacci Core + Orbital Telemetry Rings
    if (i < count * 0.75) {
      const idx = i;
      const totalSphere = count * 0.75;
      const y = 1 - (idx / (totalSphere - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * idx;
      const shellR = (idx % 3 === 0 ? 6.2 : 4.6) + (Math.random() - 0.5) * 0.25;
      sphere[i3] = Math.cos(theta) * radiusAtY * shellR;
      sphere[i3 + 1] = y * shellR;
      sphere[i3 + 2] = Math.sin(theta) * radiusAtY * shellR;
    } else {
      // Outer Saturn-like data ring
      const ringAngle = Math.random() * Math.PI * 2;
      const ringR = 8.4 + (Math.random() - 0.5) * 2.8;
      sphere[i3] = Math.cos(ringAngle) * ringR;
      sphere[i3 + 1] = (Math.random() - 0.5) * 0.45 + Math.sin(ringAngle) * 1.8;
      sphere[i3 + 2] = Math.sin(ringAngle) * ringR;
    }
  }

  return { wave, neural, clusters, helix, sphere };
}

export default function SynapticParticleCanvas({
  formationMode,
  scrollActiveFormation,
  turbulence,
  pulseTrigger,
  onTelemetryUpdate,
  className = "fixed inset-0 z-0 pointer-events-none overflow-hidden select-none",
}: SynapticParticleCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeFormation: FormationKey =
    formationMode === "auto" ? scrollActiveFormation : formationMode;

  const stateRef = useRef({
    activeFormation,
    turbulence,
    pulseTrigger,
    scrollProgress: 0,
  });

  useEffect(() => {
    stateRef.current.activeFormation = activeFormation;
  }, [activeFormation]);

  useEffect(() => {
    stateRef.current.turbulence = turbulence;
  }, [turbulence]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 9000 : 18432;
    const hubNodeCount = isMobile ? 70 : 130;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      120
    );
    camera.position.set(0, 2.2, 18.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.replaceChildren();
    container.appendChild(renderer.domElement);

    // Precompute all 5 mathematical manifolds
    const formations = generateFormations(particleCount);
    let currentFormationKey: FormationKey = stateRef.current.activeFormation;

    // Build BufferGeometry for the 18,432 particles
    const geometry = new THREE.BufferGeometry();
    const initialPositions = new Float32Array(formations[currentFormationKey]);
    const targetPositions = new Float32Array(formations[currentFormationKey]);
    const scales = new Float32Array(particleCount);
    const colorMixes = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Make 8% of particles larger "synaptic anchor nodes"
      scales[i] = i % 12 === 0 ? 1.85 + Math.random() * 1.1 : 0.55 + Math.random() * 0.75;
      colorMixes[i] = (i / particleCount + Math.random() * 0.15) % 1.0;
      phases[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(initialPositions, 3));
    geometry.setAttribute("aTarget", new THREE.BufferAttribute(targetPositions, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute("aColorMix", new THREE.BufferAttribute(colorMixes, 1));
    geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));

    const uniforms = {
      uTime: { value: 0 },
      uMorphProgress: { value: 1.0 },
      uTurbulence: { value: stateRef.current.turbulence },
      uCursorWorld: { value: new THREE.Vector3(0, 0, 0) },
      uCursorActive: { value: 0.0 },
      uPulseProgress: { value: 0.0 },
      uPulseOrigin: { value: new THREE.Vector3(0, 0, 0) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const pointsMesh = new THREE.Points(geometry, material);
    scene.add(pointsMesh);

    // Secondary Layer: Dynamic Synaptic Network Filaments (THREE.LineSegments)
    const maxLines = hubNodeCount * 3;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const synapticLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(synapticLines);

    // Subtle 3D Orbital Telemetry Rings
    const ringGroup = new THREE.Group();
    const createOrbitalRing = (radius: number, colorHex: number, opacity: number, tiltX: number, tiltZ: number) => {
      const segments = 128;
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
      }
      const rGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const rMat = new THREE.LineBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
      });
      const loop = new THREE.Line(rGeo, rMat);
      loop.rotation.x = tiltX;
      loop.rotation.z = tiltZ;
      return loop;
    };

    ringGroup.add(createOrbitalRing(11.5, 0x38bdf8, 0.09, Math.PI * 0.32, Math.PI * 0.08));
    ringGroup.add(createOrbitalRing(14.8, 0x818cf8, 0.06, -Math.PI * 0.24, -Math.PI * 0.12));
    scene.add(ringGroup);

    // Cursor 3D Raycasting State
    const pointerNDC = new THREE.Vector2(0, 0);
    const targetPointerNDC = new THREE.Vector2(0, 0);
    const raycaster = new THREE.Raycaster();
    const interactionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const cursorIntersect = new THREE.Vector3();
    let pointerActiveTarget = 0.0;
    let lastMoveTime = performance.now();

    const handlePointerMove = (e: MouseEvent) => {
      targetPointerNDC.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetPointerNDC.y = -(e.clientY / window.innerHeight) * 2 + 1;
      pointerActiveTarget = 1.0;
      lastMoveTime = performance.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        targetPointerNDC.x = (t.clientX / window.innerWidth) * 2 - 1;
        targetPointerNDC.y = -(t.clientY / window.innerHeight) * 2 + 1;
        pointerActiveTarget = 1.0;
        lastMoveTime = performance.now();
      }
    };

    // Cache maxScroll to prevent forced layout reflow during scroll events
    let cachedMaxScroll = Math.max(
      document.documentElement.scrollHeight - window.innerHeight,
      1
    );

    const handleScroll = () => {
      stateRef.current.scrollProgress = Math.min(
        Math.max(window.scrollY / cachedMaxScroll, 0),
        1
      );
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      const pr = Math.min(window.devicePixelRatio, 2);
      renderer.setPixelRatio(pr);
      uniforms.uPixelRatio.value = pr;
      cachedMaxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    // Morph transition helper
    const triggerFormationMorph = (nextKey: FormationKey) => {
      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      const targetAttr = geometry.getAttribute("aTarget") as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;
      const targetArr = targetAttr.array as Float32Array;
      const m = uniforms.uMorphProgress.value;
      const smoothM = m * m * (3 - 2 * m);

      // Snapshot current interpolated positions into position attribute
      for (let i = 0; i < posArr.length; i++) {
        posArr[i] = posArr[i] + (targetArr[i] - posArr[i]) * smoothM;
      }
      posAttr.needsUpdate = true;

      // Copy new destination manifold into aTarget
      targetArr.set(formations[nextKey]);
      targetAttr.needsUpdate = true;

      uniforms.uMorphProgress.value = 0.0;
      currentFormationKey = nextKey;
    };

    // Animation & Telemetry Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let frameCounter = 0;
    let lastFpsCheck = performance.now();
    let currentFps = 60;
    let lastPulseSeen = stateRef.current.pulseTrigger;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Battery & CPU optimization: pause heavy rendering when tab is hidden in background
      if (typeof document !== "undefined" && document.hidden) {
        return;
      }

      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();
      uniforms.uTime.value = elapsed;
      const targetTurbulence = prefersReducedMotion
        ? stateRef.current.turbulence * 0.35
        : stateRef.current.turbulence;
      uniforms.uTurbulence.value = THREE.MathUtils.lerp(
        uniforms.uTurbulence.value,
        targetTurbulence,
        0.08
      );

      // Check if formation changed
      if (stateRef.current.activeFormation !== currentFormationKey) {
        triggerFormationMorph(stateRef.current.activeFormation);
      }

      // Advance morph progress
      if (uniforms.uMorphProgress.value < 1.0) {
        uniforms.uMorphProgress.value = Math.min(
          1.0,
          uniforms.uMorphProgress.value + delta * 0.68
        );
      }

      // Check if user triggered a Synaptic Pulse
      if (stateRef.current.pulseTrigger !== lastPulseSeen) {
        lastPulseSeen = stateRef.current.pulseTrigger;
        uniforms.uPulseProgress.value = 0.01;
        uniforms.uPulseOrigin.value.copy(uniforms.uCursorWorld.value);
      }

      if (uniforms.uPulseProgress.value > 0.0 && uniforms.uPulseProgress.value < 1.0) {
        uniforms.uPulseProgress.value += delta * 0.75;
        if (uniforms.uPulseProgress.value >= 1.0) {
          uniforms.uPulseProgress.value = 0.0;
        }
      }

      // Fade cursor activity when idle
      if (performance.now() - lastMoveTime > 2600) {
        pointerActiveTarget = 0.15;
      }

      pointerNDC.lerp(targetPointerNDC, 0.09);
      uniforms.uCursorActive.value = THREE.MathUtils.lerp(
        uniforms.uCursorActive.value,
        pointerActiveTarget,
        0.08
      );

      // Raycast cursor onto 3D interaction plane
      raycaster.setFromCamera(pointerNDC, camera);
      raycaster.ray.intersectPlane(interactionPlane, cursorIntersect);
      if (cursorIntersect) {
        uniforms.uCursorWorld.value.lerp(cursorIntersect, 0.18);
      }

      // Scroll & Cursor Parallax Camera Choreography
      const scrollP = stateRef.current.scrollProgress;
      const targetCamX = pointerNDC.x * 1.9 + Math.sin(scrollP * Math.PI * 2) * 1.4;
      const targetCamY = 2.0 + pointerNDC.y * 1.3 - scrollP * 2.2;
      const targetCamZ = 18.5 - Math.sin(scrollP * Math.PI) * 2.8;

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetCamX, 0.045);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetCamY, 0.045);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetCamZ, 0.045);
      camera.lookAt(0, -scrollP * 0.8, 0);

      // Rotate particle manifold and orbital rings smoothly
      pointsMesh.rotation.y = elapsed * 0.055 + scrollP * 1.15;
      pointsMesh.rotation.x = Math.sin(elapsed * 0.15) * 0.08 + scrollP * 0.25;
      synapticLines.rotation.copy(pointsMesh.rotation);

      ringGroup.rotation.y = -elapsed * 0.04;
      ringGroup.rotation.x = Math.cos(elapsed * 0.12) * 0.06;

      // Update Dynamic Synaptic Network Filaments between hub particles
      const posArr = (geometry.getAttribute("position") as THREE.BufferAttribute)
        .array as Float32Array;
      const targetArr = (geometry.getAttribute("aTarget") as THREE.BufferAttribute)
        .array as Float32Array;
      const m = uniforms.uMorphProgress.value;
      const smoothM = m * m * (3 - 2 * m);

      const lPosAttr = lineGeometry.getAttribute("position") as THREE.BufferAttribute;
      const lColAttr = lineGeometry.getAttribute("color") as THREE.BufferAttribute;
      const lPos = lPosAttr.array as Float32Array;
      const lCol = lColAttr.array as Float32Array;

      let lineIdx = 0;
      const stride = Math.floor(particleCount / hubNodeCount);
      const maxConnectDistSq = 18.5;

      for (let i = 0; i < hubNodeCount && lineIdx < maxLines; i++) {
        const pIdxA = i * stride * 3;
        const ax = posArr[pIdxA] + (targetArr[pIdxA] - posArr[pIdxA]) * smoothM;
        const ay = posArr[pIdxA + 1] + (targetArr[pIdxA + 1] - posArr[pIdxA + 1]) * smoothM;
        const az = posArr[pIdxA + 2] + (targetArr[pIdxA + 2] - posArr[pIdxA + 2]) * smoothM;

        for (let j = i + 1; j < Math.min(i + 10, hubNodeCount) && lineIdx < maxLines; j++) {
          const pIdxB = j * stride * 3;
          const bx = posArr[pIdxB] + (targetArr[pIdxB] - posArr[pIdxB]) * smoothM;
          const by = posArr[pIdxB + 1] + (targetArr[pIdxB + 1] - posArr[pIdxB + 1]) * smoothM;
          const bz = posArr[pIdxB + 2] + (targetArr[pIdxB + 2] - posArr[pIdxB + 2]) * smoothM;

          const dx = ax - bx;
          const dy = ay - by;
          const dz = az - bz;
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < maxConnectDistSq) {
            const intensity = 1.0 - distSq / maxConnectDistSq;
            const base = lineIdx * 6;
            lPos[base] = ax;
            lPos[base + 1] = ay;
            lPos[base + 2] = az;
            lPos[base + 3] = bx;
            lPos[base + 4] = by;
            lPos[base + 5] = bz;

            // Synaptic Cyan to Indigo gradient
            lCol[base] = 0.22 * intensity;
            lCol[base + 1] = 0.74 * intensity;
            lCol[base + 2] = 0.97 * intensity;
            lCol[base + 3] = 0.51 * intensity;
            lCol[base + 4] = 0.55 * intensity;
            lCol[base + 5] = 0.97 * intensity;
            lineIdx++;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIdx * 2);
      lPosAttr.needsUpdate = true;
      lColAttr.needsUpdate = true;

      renderer.render(scene, camera);

      // FPS & Telemetry Reporting (every ~500ms)
      frameCounter++;
      const now = performance.now();
      if (now - lastFpsCheck >= 500) {
        currentFps = Math.min(60, Math.round((frameCounter * 1000) / (now - lastFpsCheck)));
        frameCounter = 0;
        lastFpsCheck = now;

        if (onTelemetryUpdate) {
          onTelemetryUpdate({
            fps: currentFps,
            particleCount,
            activeFormation: currentFormationKey,
            cursorX: Number(uniforms.uCursorWorld.value.x.toFixed(2)),
            cursorY: Number(uniforms.uCursorWorld.value.y.toFixed(2)),
            cursorZ: Number(uniforms.uCursorWorld.value.z.toFixed(2)),
            scrollProgress: Math.round(stateRef.current.scrollProgress * 100),
          });
        }
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [onTelemetryUpdate]);

  // Also sync pulseTrigger updates into stateRef
  useEffect(() => {
    stateRef.current.pulseTrigger = pulseTrigger;
  }, [pulseTrigger]);

  return (
    <div className={className}>
      {/* Deep Obsidian Radial Atmospheric Scrims */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 65% 35%, rgba(56, 189, 248, 0.08) 0%, rgba(129, 140, 248, 0.05) 35%, rgba(6, 7, 10, 0.96) 80%)",
        }}
      />
      {/* WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 z-10" />
      {/* Subtle Top & Bottom Vignette Scrims for Legibility */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#06070A] via-[#06070A]/50 to-transparent z-20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#06070A] via-[#06070A]/60 to-transparent z-20" />
    </div>
  );
}

