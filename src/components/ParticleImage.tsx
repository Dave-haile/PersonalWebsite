// import React, { useEffect, useRef, useState, useCallback } from "react";
// import * as THREE from "three";

// interface ParticleImageProps {
//   imageSrc: string;
//   className?: string;
// }

// type ColorMode = "original" | "solid" | "gradient" | "dynamic";

// export default function ParticleImage({
//   imageSrc,
//   className = "",
// }: ParticleImageProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const materialRef = useRef<THREE.ShaderMaterial | null>(null);
//   const animationRef = useRef<number>(0);

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [colorMode, setColorMode] = useState<ColorMode>("original");

//   const progressRef = useRef({ current: 0, target: 0 });
//   const mouseRef = useRef({
//     x: 0,
//     y: 0,
//     targetX: 0,
//     targetY: 0,
//     vx: 0,
//     vy: 0,
//   });

//   const setupScene = useCallback(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     const camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 10;
//     cameraRef.current = camera;

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true,
//       powerPreference: "high-performance",
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     rendererRef.current = renderer;

//     const material = new THREE.ShaderMaterial({
//       transparent: true,
//       depthWrite: false,
//       blending: THREE.NormalBlending,
//       uniforms: {
//         uProgress: { value: 0 },
//         uTime: { value: 0 },
//         uMouse: { value: new THREE.Vector2(0, 0) },
//         uMouseVelocity: { value: new THREE.Vector2(0, 0) },
//         uResolution: {
//           value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//         },
//         uColorMode: { value: 0 },
//         uPrimaryColor: { value: new THREE.Color("#a78bfa") },
//         uSecondaryColor: { value: new THREE.Color("#f472b6") },
//       },
//       vertexShader: `
//         uniform float uProgress;
//         uniform float uTime;
//         uniform vec2 uMouse;
//         uniform vec2 uMouseVelocity;

//         attribute vec3 aRandom;
//         attribute vec3 aEndPosition;
//         attribute vec3 color;
//         attribute float aSize;
//         attribute float aDelay;

//         varying vec3 vColor;
//         varying vec3 vPos;
//         varying float vFade;

//         // Simplex noise for organic movement
//         vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
//         vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
//         float snoise(vec3 v){
//           const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
//           const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
//           vec3 i  = floor(v + dot(v, C.yyy) );
//           vec3 x0 =   v - i + dot(i, C.xxx) ;
//           vec3 g = step(x0.yzx, x0.xyz);
//           vec3 l = 1.0 - g;
//           vec3 i1 = min( g.xyz, l.zxy );
//           vec3 i2 = max( g.xyz, l.zxy );
//           vec3 x1 = x0 - i1 + 1.0 * C.xxx;
//           vec3 x2 = x0 - i2 + 2.0 * C.xxx;
//           vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
//           i = mod(i, 289.0 );
//           vec4 p = permute( permute( permute(
//                      i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
//                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
//                    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
//           float n_ = 1.0/7.0;
//           vec3  ns = n_ * D.wyz - D.xzx;
//           vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
//           vec4 x_ = floor(j * ns.z);
//           vec4 y_ = floor(j - 7.0 * x_ );
//           vec4 x = x_ *ns.x + ns.yyyy;
//           vec4 y = y_ *ns.x + ns.yyyy;
//           vec4 h = 1.0 - abs(x) - abs(y);
//           vec4 b0 = vec4( x.xy, y.xy );
//           vec4 b1 = vec4( x.zw, y.zw );
//           vec4 s0 = floor(b0)*2.0 + 1.0;
//           vec4 s1 = floor(b1)*2.0 + 1.0;
//           vec4 sh = -step(h, vec4(0.0));
//           vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
//           vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
//           vec3 p0 = vec3(a0.xy,h.x);
//           vec3 p1 = vec3(a0.zw,h.y);
//           vec3 p2 = vec3(a1.xy,h.z);
//           vec3 p3 = vec3(a1.zw,h.w);
//           vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
//           p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
//           vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
//           m = m * m;
//           return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
//         }

//         void main() {
//           vColor = color;

//           float p = clamp((uProgress - aDelay * 0.2) / 0.8, 0.0, 1.0);

//           // Noise pre-calc
//           vec3 n = vec3(
//             snoise(vec3(position.xy * 0.5, uTime * 0.2)),
//             snoise(vec3(position.yz * 0.5, uTime * 0.2 + 10.0)),
//             snoise(vec3(position.zx * 0.5, uTime * 0.2 + 20.0))
//           );

//           // Path Logic
//           float explodePhase = smoothstep(0.0, 0.4, p);
//           float fallPhase = smoothstep(0.3, 0.8, p);
//           float prepareReform = smoothstep(0.7, 0.9, p);
//           float finalize = smoothstep(0.85, 1.0, p);

//           vec3 pos = position + n * 0.1 * explodePhase;

//           // 1. Explode
//           pos += (normalize(aRandom) * 4.0 + aRandom * 2.0) * explodePhase;

//           // 2. Fall
//           pos += vec3(12.0, -18.0, 0.0) * fallPhase;

//           // 3. Sky point & Reassemble
//           vec3 target = aEndPosition;
//           vec3 skyPoint = target + vec3(0.0, 15.0, 0.0);
//           pos = mix(pos, skyPoint, prepareReform);
//           pos = mix(pos, target, finalize);

//           // Mouse Field
//           vec2 mouseWorld = uMouse * 8.0;
//           vec2 toMouse = pos.xy - mouseWorld;
//           float dist = length(toMouse);
//           float influence = smoothstep(4.0, 0.0, dist);

//           pos.xy += normalize(toMouse) * (1.0 / (dist + 0.5)) * 0.5 * influence;
//           vec2 swirl = vec2(-toMouse.y, toMouse.x);
//           pos.xy += swirl * length(uMouseVelocity) * 20.0 * influence * 0.1;
//           pos.xy += uMouseVelocity * 30.0 * influence;

//           vPos = pos;
//           vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

//           float baseSize = 2.2; // overlap at rest
//             float explodeSize = 1.6;

//             gl_PointSize = mix(baseSize, explodeSize, explodePhase);
//             gl_PointSize *= (aSize * 35.0) / -mvPosition.z;

//           vFade = 1.0 - (fallPhase * 0.6 * (1.0 - finalize));
//           gl_Position = projectionMatrix * mvPosition;
//         }
//       `,
//       fragmentShader: `
//         uniform int uColorMode;
//         uniform vec3 uPrimaryColor;
//         uniform vec3 uSecondaryColor;
//         uniform vec2 uMouse;
//         uniform float uTime;

//         varying vec3 vColor;
//         varying vec3 vPos;
//         varying float vFade;

//         vec3 hsv2rgb(vec3 c) {
//           vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
//           vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
//           return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
//         }

//         void main() {
//           float d = distance(gl_PointCoord, vec2(0.5));
//           if (d > 0.5) discard;

//           vec3 finalColor;
//           if (uColorMode == 0) finalColor = vColor;
//           else if (uColorMode == 1) finalColor = uPrimaryColor;
//           else if (uColorMode == 2) {
//             float gradMix = clamp((vPos.y + 5.0) / 10.0, 0.0, 1.0);
//             finalColor = mix(uSecondaryColor, uPrimaryColor, gradMix);
//           } else {
//             float distToMouse = distance(vPos.xy, uMouse * 8.0);
//             float hue = fract(distToMouse * 0.08 - uTime * 0.05 + length(vPos) * 0.03);
//             finalColor = hsv2rgb(vec3(hue, 0.7, 1.0));
//           }

//           float strength = pow(1.0 - (d * 2.0), 1.5);
//           gl_FragColor = vec4(finalColor, vFade * strength);
//         }
//       `,
//     });
//     materialRef.current = material;

//     const loader = new THREE.TextureLoader();
//     loader.setCrossOrigin("anonymous");
//     loader.load(imageSrc, (texture) => {
//       const { image } = texture;
//       const { width: w, height: h } = image;

//       const tempCanvas = document.createElement("canvas");
//       const ctx = tempCanvas.getContext("2d", { willReadFrequently: true });
//       if (!ctx) return;

//       const maxDim = 420;
//       let targetW = w,
//         targetH = h;
//       if (w > maxDim || h > maxDim) {
//         const ratio = w / h;
//         if (ratio > 1) {
//           targetW = maxDim;
//           targetH = maxDim / ratio;
//         } else {
//           targetH = maxDim;
//           targetW = maxDim * ratio;
//         }
//       }

//       tempCanvas.width = targetW;
//       tempCanvas.height = targetH;
//       ctx.drawImage(image, 0, 0, targetW, targetH);
//       const data = ctx.getImageData(0, 0, targetW, targetH).data;

//       // --- OPTIMIZATION: Structured sampling and pre-allocation ---
//       const totalPixels = targetW * targetH;
//       // We estimate particle count to pre-allocate.
//       // Using a fixed step improves performance significantly over random rejection in the loop.
//       const step = window.innerWidth < 768 ? 2 : 1;
//       const maxPossibleParticles = Math.ceil(totalPixels / (step * step));

//       const positions = new Float32Array(maxPossibleParticles * 3);
//       const endPositions = new Float32Array(maxPossibleParticles * 3);
//       const colors = new Float32Array(maxPossibleParticles * 3);
//       const randoms = new Float32Array(maxPossibleParticles * 3);
//       const sizes = new Float32Array(maxPossibleParticles);
//       const delays = new Float32Array(maxPossibleParticles);

//       const scale = 0.025;
//       const isMobile = window.innerWidth < 768;
//       const startX = isMobile ? 0 : 6.0;
//       const endX = isMobile ? 0 : -6.5;
//       const endY = isMobile ? -3.0 : -1.5;

//       let pIdx = 0;
//       for (let y = 0; y < targetH; y += step) {
//         for (let x = 0; x < targetW; x += step) {
//           const i = (y * targetW + x) * 4;
//           const a = data[i + 3];

//           if (a < 50) continue;

//           const r = data[i] / 255;
//           const g = data[i + 1] / 255;
//           const b = data[i + 2] / 255;

//           const i3 = pIdx * 3;

//           positions[i3] = (x - targetW / 2) * scale + startX;
//           positions[i3 + 1] = (targetH / 2 - y) * scale;
//           positions[i3 + 2] = 0;

//           endPositions[i3] = (x - targetW / 2) * scale + endX;
//           endPositions[i3 + 1] = (targetH / 2 - y) * scale + endY;
//           endPositions[i3 + 2] = -1;

//           colors[i3] = r;
//           colors[i3 + 1] = g;
//           colors[i3 + 2] = b;

//           randoms[i3] = (Math.random() - 0.5) * 2;
//           randoms[i3 + 1] = (Math.random() - 0.5) * 2;
//           randoms[i3 + 2] = (Math.random() - 0.5) * 2;

//           sizes[pIdx] = Math.random() * 0.5 + 0.5;
//           delays[pIdx] = Math.random();

//           pIdx++;
//         }
//       }

//       // Create final attributes from subarrays to match actual particle count
//       const geometry = new THREE.BufferGeometry();
//       geometry.setAttribute(
//         "position",
//         new THREE.BufferAttribute(positions.subarray(0, pIdx * 3), 3)
//       );
//       geometry.setAttribute(
//         "aEndPosition",
//         new THREE.BufferAttribute(endPositions.subarray(0, pIdx * 3), 3)
//       );
//       geometry.setAttribute(
//         "color",
//         new THREE.BufferAttribute(colors.subarray(0, pIdx * 3), 3)
//       );
//       geometry.setAttribute(
//         "aRandom",
//         new THREE.BufferAttribute(randoms.subarray(0, pIdx * 3), 3)
//       );
//       geometry.setAttribute(
//         "aSize",
//         new THREE.BufferAttribute(sizes.subarray(0, pIdx), 1)
//       );
//       geometry.setAttribute(
//         "aDelay",
//         new THREE.BufferAttribute(delays.subarray(0, pIdx), 1)
//       );

//       const points = new THREE.Points(geometry, material);
//       scene.add(points);
//       setIsLoaded(true);
//     });

//     const handleResize = () => {
//       if (!cameraRef.current || !rendererRef.current || !materialRef.current)
//         return;
//       const w = window.innerWidth,
//         h = window.innerHeight;
//       cameraRef.current.aspect = w / h;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(w, h);
//       materialRef.current.uniforms.uResolution.value.set(w, h);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       const nextX = (e.clientX / window.innerWidth) * 2 - 1;
//       const nextY = -(e.clientY / window.innerHeight) * 2 + 1;
//       mouseRef.current.vx = nextX - mouseRef.current.targetX;
//       mouseRef.current.vy = nextY - mouseRef.current.targetY;
//       mouseRef.current.targetX = nextX;
//       mouseRef.current.targetY = nextY;
//     };

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       progressRef.current.target = scrollY / maxScroll;
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     const clock = new THREE.Clock();
//     const animate = () => {
//       const time = clock.getElapsedTime();
//       progressRef.current.current +=
//         (progressRef.current.target - progressRef.current.current) * 0.05;
//       mouseRef.current.x +=
//         (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
//       mouseRef.current.y +=
//         (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
//       mouseRef.current.vx *= 0.92;
//       mouseRef.current.vy *= 0.92;

//       if (materialRef.current) {
//         materialRef.current.uniforms.uProgress.value =
//           progressRef.current.current;
//         materialRef.current.uniforms.uTime.value = time;
//         materialRef.current.uniforms.uMouse.value.set(
//           mouseRef.current.x,
//           mouseRef.current.y
//         );
//         materialRef.current.uniforms.uMouseVelocity.value.set(
//           mouseRef.current.vx,
//           mouseRef.current.vy
//         );
//       }

//       if (rendererRef.current && sceneRef.current && cameraRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current);
//       }
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//       cancelAnimationFrame(animationRef.current);
//       if (rendererRef.current) rendererRef.current.dispose();
//     };
//   }, [imageSrc]);

//   useEffect(() => {
//     return setupScene();
//   }, [setupScene]);

//   useEffect(() => {
//     if (materialRef.current) {
//       const modes: Record<ColorMode, number> = {
//         original: 0,
//         solid: 1,
//         gradient: 2,
//         dynamic: 3,
//       };
//       materialRef.current.uniforms.uColorMode.value = modes[colorMode];
//     }
//   }, [colorMode]);

//   return (
//     <div
//       ref={containerRef}
//       className={`fixed inset-0 pointer-events-none select-none ${className}`}
//       style={{ zIndex: 5 }}
//     >
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full block transition-opacity duration-1000 ease-out"
//         style={{ opacity: isLoaded ? 1 : 0 }}
//       />

//       <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-60 mix-blend-multiply pointer-events-none" />

//       {!isLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-[#050505] pointer-events-none">
//           <div className="relative w-24 h-24">
//             <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full" />
//             <div className="absolute inset-0 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import React, { useEffect, useRef, useState, useCallback } from "react";
// import * as THREE from "three";

// interface ParticleImageProps {
//   imageSrc: string;
//   className?: string;
// }

// type ColorMode = "original" | "solid" | "gradient" | "dynamic";

// export default function ParticleImage({
//   imageSrc,
//   className = "",
// }: ParticleImageProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const materialRef = useRef<THREE.ShaderMaterial | null>(null);
//   const animationRef = useRef<number>(0);

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [colorMode, setColorMode] = useState<ColorMode>("original");

//   const progressRef = useRef({ current: 0, target: 0 });
//   const mouseRef = useRef({
//     x: 0,
//     y: 0,
//     targetX: 0,
//     targetY: 0,
//   });

//   const setupScene = useCallback(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     const camera = new THREE.PerspectiveCamera(
//       45,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 15;
//     cameraRef.current = camera;

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true,
//       powerPreference: "high-performance",
//     });
//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     rendererRef.current = renderer;

//     const material = new THREE.ShaderMaterial({
//       transparent: true,
//       depthWrite: false,
//       blending: THREE.AdditiveBlending,
//       uniforms: {
//         uProgress: { value: 0 },
//         uTime: { value: 0 },
//         uMouse: { value: new THREE.Vector2(0, 0) },
//         uResolution: {
//           value: new THREE.Vector2(window.innerWidth, window.innerHeight),
//         },
//         uColorMode: { value: 0 },
//         uPrimaryColor: { value: new THREE.Color("#a78bfa") },
//         uSecondaryColor: { value: new THREE.Color("#f472b6") },
//       },
//       vertexShader: `
//         uniform float uProgress;
//         uniform float uTime;
//         uniform vec2 uMouse;
//         uniform vec2 uResolution;

//         attribute vec3 aRandom;
//         attribute vec3 aEndPosition;
//         attribute vec3 color;
//         attribute float aSize;
//         attribute float aDelay;

//         varying vec3 vColor;
//         varying vec3 vPos;
//         varying float vFade;

//         vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
//         vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
//         float snoise(vec3 v){
//           const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
//           const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
//           vec3 i  = floor(v + dot(v, C.yyy) );
//           vec3 x0 =   v - i + dot(i, C.xxx) ;
//           vec3 g = step(x0.yzx, x0.xyz);
//           vec3 l = 1.0 - g;
//           vec3 i1 = min( g.xyz, l.zxy );
//           vec3 i2 = max( g.xyz, l.zxy );
//           vec3 x1 = x0 - i1 + 1.0 * C.xxx;
//           vec3 x2 = x0 - i2 + 2.0 * C.xxx;
//           vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
//           i = mod(i, 289.0 );
//           vec4 p = permute( permute( permute(
//                      i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
//                    + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
//                    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
//           float n_ = 1.0/7.0;
//           vec3  ns = n_ * D.wyz - D.xzx;
//           vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
//           vec4 x_ = floor(j * ns.z);
//           vec4 y_ = floor(j - 7.0 * x_ );
//           vec4 x = x_ *ns.x + ns.yyyy;
//           vec4 y = y_ *ns.x + ns.yyyy;
//           vec4 h = 1.0 - abs(x) - abs(y);
//           vec4 b0 = vec4( x.xy, y.xy );
//           vec4 b1 = vec4( x.zw, y.zw );
//           vec4 s0 = floor(b0)*2.0 + 1.0;
//           vec4 s1 = floor(b1)*2.0 + 1.0;
//           vec4 sh = -step(h, vec4(0.0));
//           vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
//           vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
//           vec3 p0 = vec3(a0.xy,h.x);
//           vec3 p1 = vec3(a0.zw,h.y);
//           vec3 p2 = vec3(a1.xy,h.z);
//           vec3 p3 = vec3(a1.zw,h.w);
//           vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
//           p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
//           vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
//           m = m * m;
//           return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
//         }

//         void main() {
//           vColor = color;
//           // Normalized progress with per-particle delay for organic flow
//           float p = clamp((uProgress - aDelay * 0.15) / 0.85, 0.0, 1.0);

//           // Phase timing: Explode -> Drift -> Converge
//           float explodeStrength = smoothstep(0.0, 0.45, p) * (1.0 - smoothstep(0.7, 1.0, p));
//           float convergePhase = smoothstep(0.75, 1.0, p);
//           float stillness = 1.0 - convergePhase;

//           // Noise drift for space floating
//           vec3 n = vec3(
//             snoise(vec3(position.xy * 0.12, uTime * 0.05)),
//             snoise(vec3(position.yz * 0.12, uTime * 0.05 + 10.0)),
//             snoise(vec3(position.zx * 0.12, uTime * 0.05 + 20.0))
//           );

//           // 1. Initial Radial Burst
//           vec3 spaceBurst = aRandom * 28.0 * explodeStrength;

//           // 2. Base position: Origin + Burst + Float
//           vec3 pos = position + spaceBurst + (n * 0.6 * stillness);

//           // 3. Final magnetic Reassembly at Target Matrix
//           pos = mix(pos, aEndPosition, convergePhase);

//           // 4. Interactive Displacement
//           vec2 mouseWorld = uMouse * 10.0;
//           float mouseDist = distance(pos.xy, mouseWorld);
//           float influence = smoothstep(3.0, 0.0, mouseDist) * stillness;
//           pos.xy += normalize(pos.xy - mouseWorld) * influence * 0.6;

//           vPos = pos;
//           vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

//           float sizeScale = uResolution.y / 1000.0;
//           gl_PointSize = (22.0 * sizeScale) / -mvPosition.z;
//           gl_PointSize *= mix(1.0, 1.8, explodeStrength);

//           // Slight fade during explosion for better blending
//           vFade = mix(1.0, 0.7, explodeStrength);

//           gl_Position = projectionMatrix * mvPosition;
//         }
//       `,
//       fragmentShader: `
//         uniform int uColorMode;
//         uniform vec3 uPrimaryColor;
//         uniform vec3 uSecondaryColor;
//         uniform vec2 uMouse;
//         uniform float uTime;
//         uniform float uProgress;

//         varying vec3 vColor;
//         varying vec3 vPos;
//         varying float vFade;

//         vec3 hsv2rgb(vec3 c) {
//           vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
//           vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
//           return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
//         }

//         void main() {
//           float d = distance(gl_PointCoord, vec2(0.5));
//           if (d > 0.5) discard;

//           vec3 finalColor;
//           if (uColorMode == 0) finalColor = vColor;
//           else if (uColorMode == 1) finalColor = uPrimaryColor;
//           else if (uColorMode == 2) {
//             float gradMix = clamp((vPos.y + 5.0) / 10.0, 0.0, 1.0);
//             finalColor = mix(uSecondaryColor, uPrimaryColor, gradMix);
//             } else {
//               float distToMouse = distance(vPos.xy, uMouse * 8.0);
//             float hue = fract(distToMouse * 0.08 - uTime * 0.05 + length(vPos) * 0.03);
//             finalColor = hsv2rgb(vec3(hue, 0.7, 1.0));
//             }

//             float alpha = smoothstep(0.45, 0.5, d);
//             gl_FragColor = vec4(finalColor, vFade * alpha);
//         }
//       `,
//     });
//     materialRef.current = material;

//     const loader = new THREE.TextureLoader();
//     loader.setCrossOrigin("anonymous");
//     // loader.load(imageSrc, (texture) => {
//     //   const img = texture.image as HTMLImageElement;
//     //   texture.colorSpace = THREE.SRGBColorSpace;
//     //   const { image } = texture;
//     //   const { width: w, height: h } = image;

//     //   const tempCanvas = document.createElement("canvas");
//     //   const ctx = tempCanvas.getContext("2d", { willReadFrequently: true });
//     //   if (!ctx) return;

//     //   const maxDim = 800;
//     //   let targetW = w,
//     //     targetH = h;
//     //   if (w > maxDim || h > maxDim) {
//     //     const ratio = w / h;
//     //     if (ratio > 1) {
//     //       targetW = maxDim;
//     //       targetH = maxDim / ratio;
//     //     } else {
//     //       targetH = maxDim;
//     //       targetW = maxDim * ratio;
//     //     }
//     //   }

//     //   tempCanvas.width = targetW;
//     //   tempCanvas.height = targetH;
//     //   ctx.drawImage(image, 0, 0, targetW, targetH);
//     //   const data = ctx.getImageData(0, 0, targetW, targetH).data;

//     //   const totalPixels = targetW * targetH;
//     //   const positions = new Float32Array(totalPixels * 3);
//     //   const endPositions = new Float32Array(totalPixels * 3);
//     //   const colors = new Float32Array(totalPixels * 3);
//     //   const randoms = new Float32Array(totalPixels * 3);
//     //   const sizes = new Float32Array(totalPixels);
//     //   const delays = new Float32Array(totalPixels);

//     //   const scale = 0.0068;
//     //   const isMobile = window.innerWidth < 768;

//     //   const startX = isMobile ? 0 : 4.45;
//     //   const startY = 0.5;

//     //   const endX = isMobile ? 0 : 4.45;
//     //   const endY = isMobile ? -3.0 : -0.75;

//     //   let pIdx = 0;
//     //   for (let y = 0; y < targetH; y++) {
//     //     for (let x = 0; x < targetW; x++) {
//     //       const i = (y * targetW + x) * 4;
//     //       const a = data[i + 3];

//     //       if (a < 128) continue;

//     //       const r = data[i] / 255;
//     //       const g = data[i + 1] / 255;
//     //       const b = data[i + 2] / 255;

//     //       const i3 = pIdx * 3;

//     //       positions[i3] = (x - targetW / 2) * scale + startX;
//     //       positions[i3 + 1] = (targetH / 2 - y) * scale + startY;
//     //       positions[i3 + 2] = 0;

//     //       endPositions[i3] = (x - targetW / 2) * scale + endX;
//     //       endPositions[i3 + 1] = (targetH / 2 - y) * scale + endY;
//     //       endPositions[i3 + 2] = -0.1;

//     //       /* ✅ THIS FIXES THE BLACK IMAGE */
//     //       colors[i3] = r;
//     //       colors[i3 + 1] = g;
//     //       colors[i3 + 2] = b;

//     //       const theta = Math.random() * Math.PI * 2;
//     //       const phi = Math.acos(2 * Math.random() - 1);
//     //       randoms[i3] = Math.sin(phi) * Math.cos(theta);
//     //       randoms[i3 + 1] = Math.sin(phi) * Math.sin(theta);
//     //       randoms[i3 + 2] = Math.cos(phi);

//     //       sizes[pIdx] = 1.0;
//     //       delays[pIdx] = Math.random();

//     //       pIdx++;
//     //     }
//     //   }

//     //   const geometry = new THREE.BufferGeometry();
//     //   geometry.setAttribute(
//     //     "position",
//     //     new THREE.BufferAttribute(positions.subarray(0, pIdx * 3), 3)
//     //   );
//     //   geometry.setAttribute(
//     //     "aEndPosition",
//     //     new THREE.BufferAttribute(endPositions.subarray(0, pIdx * 3), 3)
//     //   );
//     //   geometry.setAttribute(
//     //     "color",
//     //     new THREE.BufferAttribute(colors.subarray(0, pIdx * 3), 3)
//     //   );
//     //   geometry.setAttribute(
//     //     "aRandom",
//     //     new THREE.BufferAttribute(randoms.subarray(0, pIdx * 3), 3)
//     //   );
//     //   geometry.setAttribute(
//     //     "aSize",
//     //     new THREE.BufferAttribute(sizes.subarray(0, pIdx), 1)
//     //   );
//     //   geometry.setAttribute(
//     //     "aDelay",
//     //     new THREE.BufferAttribute(delays.subarray(0, pIdx), 1)
//     //   );

//     //   const points = new THREE.Points(geometry, material);
//     //   points.frustumCulled = false; // CRITICAL: Prevents disappearing during explosion
//     //   scene.add(points);
//     //   setIsLoaded(true);
//     // });

//     loader.load(imageSrc, async (texture) => {
//       texture.colorSpace = THREE.SRGBColorSpace;

//       const img = texture.image as HTMLImageElement;

//       const bitmap = await createImageBitmap(img);

//       const w = bitmap.width;
//       const h = bitmap.height;

//       const tempCanvas = document.createElement("canvas");
//       const ctx = tempCanvas.getContext("2d", { willReadFrequently: true });
//       if (!ctx) return;

//       const maxDim = 800;
//       let targetW = w;
//       let targetH = h;

//       if (w > maxDim || h > maxDim) {
//         const ratio = w / h;
//         if (ratio > 1) {
//           targetW = maxDim;
//           targetH = maxDim / ratio;
//         } else {
//           targetH = maxDim;
//           targetW = maxDim * ratio;
//         }
//       }

//       tempCanvas.width = targetW;
//       tempCanvas.height = targetH;

//       ctx.drawImage(bitmap, 0, 0, targetW, targetH);

//       const data = ctx.getImageData(0, 0, targetW, targetH).data;

//       const totalPixels = targetW * targetH;

//       const positions = new Float32Array(totalPixels * 3);
//       const endPositions = new Float32Array(totalPixels * 3);
//       const colors = new Float32Array(totalPixels * 3);
//       const randoms = new Float32Array(totalPixels * 3);
//       const sizes = new Float32Array(totalPixels);
//       const delays = new Float32Array(totalPixels);

//       let pIdx = 0;

//       for (let y = 0; y < targetH; y++) {
//         for (let x = 0; x < targetW; x++) {
//           const i = (y * targetW + x) * 4;
//           const a = data[i + 3];
//           if (a < 10) continue;

//           const r = data[i] / 255;
//           const g = data[i + 1] / 255;
//           const b = data[i + 2] / 255;

//           const i3 = pIdx * 3;

//           positions[i3] = (x - targetW / 2) * 0.0068;
//           positions[i3 + 1] = (targetH / 2 - y) * 0.0068;
//           positions[i3 + 2] = 0;

//           endPositions[i3] = positions[i3];
//           endPositions[i3 + 1] = positions[i3 + 1] - 1.2;
//           endPositions[i3 + 2] = -0.1;

//           colors[i3] = r;
//           colors[i3 + 1] = g;
//           colors[i3 + 2] = b;

//           randoms[i3] = Math.random() * 2 - 1;
//           randoms[i3 + 1] = Math.random() * 2 - 1;
//           randoms[i3 + 2] = Math.random() * 2 - 1;

//           sizes[pIdx] = 1;
//           delays[pIdx] = Math.random();

//           if (pIdx === 0) {
//             console.log("PIXEL RGB:", r, g, b, "ALPHA:", a);
//           }
//           pIdx++;
//         }
//       }

//       const geometry = new THREE.BufferGeometry();
//       geometry.setAttribute(
//         "position",
//         new THREE.BufferAttribute(positions.subarray(0, pIdx * 3), 3)
//       );
//       geometry.setAttribute(
//         "aEndPosition",
//         new THREE.BufferAttribute(endPositions.subarray(0, pIdx * 3), 3)
//       );
//       geometry.setAttribute(
//         "color",
//         new THREE.BufferAttribute(colors.subarray(0, pIdx * 3), 3)
//       );
//       geometry.setAttribute(
//         "aRandom",
//         new THREE.BufferAttribute(randoms.subarray(0, pIdx * 3), 3)
//       );
//       geometry.setAttribute(
//         "aSize",
//         new THREE.BufferAttribute(sizes.subarray(0, pIdx), 1)
//       );
//       geometry.setAttribute(
//         "aDelay",
//         new THREE.BufferAttribute(delays.subarray(0, pIdx), 1)
//       );

//       const points = new THREE.Points(geometry, material);
//       points.frustumCulled = false;
//       scene.add(points);

//       setIsLoaded(true);
//     });

//     const handleResize = () => {
//       if (!cameraRef.current || !rendererRef.current || !materialRef.current)
//         return;
//       const w = window.innerWidth,
//         h = window.innerHeight;
//       cameraRef.current.aspect = w / h;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(w, h);
//       materialRef.current.uniforms.uResolution.value.set(w, h);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       const nextX = (e.clientX / window.innerWidth) * 2 - 1;
//       const nextY = -(e.clientY / window.innerHeight) * 2 + 1;
//       mouseRef.current.targetX = nextX;
//       mouseRef.current.targetY = nextY;
//     };

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const stopPoint = maxScroll * 0.75;
//       progressRef.current.target = Math.min(scrollY / stopPoint, 1.0);
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     const clock = new THREE.Clock();
//     const animate = () => {
//       const time = clock.getElapsedTime();
//       progressRef.current.current +=
//         (progressRef.current.target - progressRef.current.current) * 0.05;
//       mouseRef.current.x +=
//         (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
//       mouseRef.current.y +=
//         (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

//       if (materialRef.current) {
//         materialRef.current.uniforms.uProgress.value =
//           progressRef.current.current;
//         materialRef.current.uniforms.uTime.value = time;
//         materialRef.current.uniforms.uMouse.value.set(
//           mouseRef.current.x,
//           mouseRef.current.y
//         );
//       }

//       if (rendererRef.current && sceneRef.current && cameraRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current);
//       }
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//       cancelAnimationFrame(animationRef.current);
//       if (rendererRef.current) rendererRef.current.dispose();
//     };
//   }, [imageSrc]);

//   useEffect(() => {
//     return setupScene();
//   }, [setupScene]);

//   useEffect(() => {
//     if (materialRef.current) {
//       const modes: Record<ColorMode, number> = {
//         original: 0,
//         solid: 1,
//         gradient: 2,
//         dynamic: 3,
//       };
//       materialRef.current.uniforms.uColorMode.value = modes[colorMode];
//     }
//   }, [colorMode]);

//   return (
//     <div
//       ref={containerRef}
//       className={`fixed inset-0 pointer-events-none select-none ${className}`}
//       style={{ zIndex: 5 }}
//     >
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full block transition-opacity duration-1000 ease-out"
//         style={{ opacity: isLoaded ? 1 : 0 }}
//       />

//       <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-40 mix-blend-multiply pointer-events-none" />

//       {!isLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-[#050505] pointer-events-none">
//           <div className="relative w-24 h-24">
//             <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full" />
//             <div className="absolute inset-0 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";

// interface ParticleImageProps {
//   imageSrc: string;
//   className?: string;
// }

// const ParticleImage: React.FC<ParticleImageProps> = ({
//   imageSrc,
//   className = "",
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const materialRef = useRef<THREE.ShaderMaterial | null>(null);
//   const animationRef = useRef<number>(0);
//   const [isLoaded, setIsLoaded] = useState(false);

//   const progressRef = useRef({ current: 0, target: 0 });
//   const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
//   const clickRef = useRef({ x: 0, y: 0, strength: 0, targetStrength: 0 });

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const scene = new THREE.Scene();
//     sceneRef.current = scene;

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       100
//     );
//     camera.position.z = 6;
//     cameraRef.current = camera;

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true,
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     rendererRef.current = renderer;

//     const material = new THREE.ShaderMaterial({
//       transparent: true,
//       depthWrite: false,
//       uniforms: {
//         uProgress: { value: 0 },
//         uTime: { value: 0 },
//         uMouse: { value: new THREE.Vector2(0, 0) },
//         uMouseRadius: { value: 1.5 },
//         uMouseStrength: { value: 0.8 },
//         uClick: { value: new THREE.Vector2(0, 0) },
//         uClickStrength: { value: 0 },
//       },
//       vertexShader: `
//         uniform float uProgress;
//         uniform float uTime;
//         uniform vec2 uMouse;
//         uniform float uMouseRadius;
//         uniform float uMouseStrength;
//         uniform vec2 uClick;
//         uniform float uClickStrength;

//         attribute vec3 aRandom;
//         attribute vec3 aEndPosition;
//         attribute vec3 color;

//         varying vec3 vColor;
//         varying float vFade;
//         varying float vDepth;
//         varying float vMouseInfluence;
//         varying float vClickInfluence;

//         void main() {
//           vColor = color;

//           vec3 start = position;
//           vec3 end = aEndPosition;

//           float explodePhase = smoothstep(0.0, 0.45, uProgress);
//           float driftPhase = smoothstep(0.3, 0.75, uProgress);
//           float reformPhase = smoothstep(0.7, 1.0, uProgress);

//           float theta = aRandom.x * 6.28318;
//           float phi = aRandom.y * 3.14159;
//           float explosionRadius = 12.0 + aRandom.z * 8.0;

//           vec3 explosion = vec3(
//             sin(phi) * cos(theta) * explosionRadius,
//             sin(phi) * sin(theta) * explosionRadius * 0.7 + aRandom.y * 3.0,
//             cos(phi) * explosionRadius * 1.8
//           );

//           vec3 pos = start + explosion * explodePhase;

//           float driftX = sin(uTime * 0.6 + aRandom.x * 12.0) * 0.4;
//           float driftY = cos(uTime * 0.5 + aRandom.y * 9.0) * 0.5;
//           float driftZ = sin(uTime * 0.4 + aRandom.z * 7.0) * 0.3;

//           pos += vec3(driftX, driftY, driftZ) * driftPhase * (1.0 - reformPhase);

//           float spiralAngle = reformPhase * 6.28318 * (2.0 + aRandom.x);
//           float spiralRadius = (1.0 - reformPhase) * 3.5;
//           vec3 spiralOffset = vec3(
//             cos(spiralAngle) * spiralRadius,
//             sin(spiralAngle) * spiralRadius * 0.6,
//             (1.0 - reformPhase) * 4.0
//           );

//           vec3 targetPos = end + spiralOffset;
//           pos = mix(pos, targetPos, reformPhase);

//           vec2 mousePos = uMouse;
//           vec2 particlePos2D = pos.xy;
//           float dist = distance(mousePos, particlePos2D);
//           float influence = 1.0 - smoothstep(0.0, uMouseRadius, dist);

//           vec2 repelDir = normalize(particlePos2D - mousePos + vec2(0.001));
//           float repelStrength = influence * uMouseStrength;

//           pos.xy += repelDir * repelStrength;
//           pos.z += influence * 0.7;

//           vMouseInfluence = influence;

//           float clickDist = distance(uClick, particlePos2D);
//           float clickRadius = 4.0;
//           float clickInfluence = 1.0 - smoothstep(0.0, clickRadius, clickDist);
//           clickInfluence *= uClickStrength;

//           vec2 burstDir = normalize(particlePos2D - uClick + vec2(0.001));
//           float burstStrength = clickInfluence * 3.5 * (0.8 + aRandom.x * 0.5);

//           float burstAngle = clickInfluence * aRandom.y * 3.14159;
//           vec2 rotatedBurst = vec2(
//             burstDir.x * cos(burstAngle) - burstDir.y * sin(burstAngle),
//             burstDir.x * sin(burstAngle) + burstDir.y * cos(burstAngle)
//           );

//           pos.xy += rotatedBurst * burstStrength;
//           pos.z += clickInfluence * 2.5 * (0.5 + aRandom.z * 0.6);

//           vClickInfluence = clickInfluence;

//           float sizeVariation = 1.0 + sin(uTime * 1.5 + aRandom.x * 10.0) * 0.3;
//           float distanceScale = 1.5 / (1.0 + abs(pos.z) * 0.15);
//           float mouseSize = 1.0 + influence * 2.0;
//           float clickSize = 1.0 + clickInfluence * 3.0;
//           float baseSize = mix(4.0, 5.5, reformPhase);
//           gl_PointSize = baseSize * sizeVariation * distanceScale * mouseSize * clickSize;

//           vDepth = pos.z;
//           float depthFade = 1.0 - smoothstep(0.0, 20.0, pos.z);
//           vFade = mix(depthFade, 1.0, reformPhase);

//           gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//         }
//       `,
//       fragmentShader: `
//         varying vec3 vColor;
//         varying float vFade;
//         varying float vDepth;
//         varying float vMouseInfluence;
//         varying float vClickInfluence;

//         void main() {
//           float d = distance(gl_PointCoord, vec2(0.5));
//           if (d > 0.5) discard;

//           float glow = 1.0 - smoothstep(0.0, 0.5, d);
//           glow = pow(glow, 1.8);

//           vec3 enhancedColor = vColor * 1.2;
//           enhancedColor += vec3(0.05, 0.02, 0.08) * glow;

//           float spaceTint = smoothstep(0.0, 12.0, vDepth);
//           enhancedColor = mix(enhancedColor, enhancedColor * vec3(0.6, 0.8, 1.4), spaceTint * 0.4);

//           vec3 mouseGlow = mix(vec3(0.0, 1.0, 1.0), vec3(1.0, 0.0, 1.0), sin(vMouseInfluence * 3.14159));
//           enhancedColor += mouseGlow * vMouseInfluence * 0.6;

//           vec3 clickGlow = mix(vec3(1.0, 0.6, 0.0), vec3(1.0, 1.0, 0.5), vClickInfluence);
//           enhancedColor += clickGlow * vClickInfluence * 1.2;

//           float fog = smoothstep(-5.0, 5.0, vDepth);
//           float alpha = vFade * glow * mix(0.8, 1.0, fog);

//           alpha = mix(alpha, min(alpha + 0.4, 1.0), vMouseInfluence);
//           alpha = mix(alpha, min(alpha + 0.6, 1.0), vClickInfluence);

//           gl_FragColor = vec4(enhancedColor, alpha);
//         }
//       `,
//     });
//     materialRef.current = material;

//     const image = new Image();
//     image.crossOrigin = "anonymous";
//     // Using a high-quality abstract image that works well with particles
//     image.src = imageSrc;

//     image.onload = () => {
//       const w = image.width;
//       const h = image.height;

//       const tempCanvas = document.createElement("canvas");
//       const ctx = tempCanvas.getContext("2d");
//       if (!ctx) return;

//       const maxDim = 350; // Increased density
//       const aspect = w / h;
//       let finalW, finalH;
//       if (w > h) {
//         finalW = maxDim;
//         finalH = Math.round(maxDim / aspect);
//       } else {
//         finalH = maxDim;
//         finalW = Math.round(maxDim * aspect);
//       }

//       tempCanvas.width = finalW;
//       tempCanvas.height = finalH;
//       ctx.drawImage(image, 0, 0, finalW, finalH);

//       const data = ctx.getImageData(0, 0, finalW, finalH).data;

//       const positions: number[] = [];
//       const endPositions: number[] = [];
//       const colors: number[] = [];
//       const randoms: number[] = [];

//       const scale = 0.017;
//       const step = 1; // More particles

//       const startOffsetX = 6.0;
//       const endOffsetX = -6.0;
//       const endOffsetY = 0;

//       for (let y = 0; y < finalH; y += step) {
//         for (let x = 0; x < finalW; x += step) {
//           const i = (y * finalW + x) * 4;

//           const r = data[i];
//           const g = data[i + 1];
//           const b = data[i + 2];
//           const a = data[i + 3];

//           if (a < 50) continue;

//           positions.push(
//             (x - finalW / 2) * scale + startOffsetX,
//             (finalH / 2 - y) * scale,
//             0
//           );

//           endPositions.push(
//             (x - finalW / 2) * scale + endOffsetX,
//             (finalH / 2 - y) * scale + endOffsetY,
//             0
//           );

//           colors.push(r / 255, g / 255, b / 255);

//           randoms.push(
//             Math.random() * 2 - 1,
//             Math.random() * 2 - 1,
//             Math.random() * 2 - 1
//           );
//         }
//       }

//       const geometry = new THREE.BufferGeometry();
//       geometry.setAttribute(
//         "position",
//         new THREE.Float32BufferAttribute(positions, 3)
//       );
//       geometry.setAttribute(
//         "aEndPosition",
//         new THREE.Float32BufferAttribute(endPositions, 3)
//       );
//       geometry.setAttribute(
//         "color",
//         new THREE.Float32BufferAttribute(colors, 3)
//       );
//       geometry.setAttribute(
//         "aRandom",
//         new THREE.Float32BufferAttribute(randoms, 3)
//       );

//       const points = new THREE.Points(geometry, material);
//       scene.add(points);

//       setIsLoaded(true);
//     };

//     const handleResize = () => {
//       if (!cameraRef.current || !rendererRef.current) return;
//       cameraRef.current.aspect = window.innerWidth / window.innerHeight;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//     };

//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollProgress = Math.min(scrollY / (docHeight * 0.9), 1);
//       progressRef.current.target = scrollProgress;
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth) * 2 - 1;
//       const y = -(e.clientY / window.innerHeight) * 2 + 1;
//       mouseRef.current.targetX = x * 9;
//       mouseRef.current.targetY = y * 6;
//     };

//     const handleClick = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth) * 2 - 1;
//       const y = -(e.clientY / window.innerHeight) * 2 + 1;
//       clickRef.current.x = x * 9;
//       clickRef.current.y = y * 6;
//       clickRef.current.targetStrength = 1.0;
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     window.addEventListener("click", handleClick);

//     let startTime = Date.now();

//     const animate = () => {
//       const elapsed = (Date.now() - startTime) / 1000;

//       progressRef.current.current +=
//         (progressRef.current.target - progressRef.current.current) * 0.05;
//       mouseRef.current.x +=
//         (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
//       mouseRef.current.y +=
//         (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

//       clickRef.current.strength +=
//         (clickRef.current.targetStrength - clickRef.current.strength) * 0.12;
//       clickRef.current.targetStrength *= 0.94;

//       if (materialRef.current) {
//         materialRef.current.uniforms.uProgress.value =
//           progressRef.current.current;
//         materialRef.current.uniforms.uTime.value = elapsed;
//         materialRef.current.uniforms.uMouse.value.set(
//           mouseRef.current.x,
//           mouseRef.current.y
//         );
//         materialRef.current.uniforms.uClick.value.set(
//           clickRef.current.x,
//           clickRef.current.y
//         );
//         materialRef.current.uniforms.uClickStrength.value =
//           clickRef.current.strength;
//       }

//       if (rendererRef.current && sceneRef.current && cameraRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current);
//       }
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("click", handleClick);
//       cancelAnimationFrame(animationRef.current);
//       if (rendererRef.current) rendererRef.current.dispose();
//     };
//   }, [imageSrc]);

//   return (
//     <div
//       ref={containerRef}
//       className={`fixed inset-0 pointer-events-none ${className}`}
//       style={{ zIndex: 10 }}
//     >
//       <canvas
//         ref={canvasRef}
//         className="w-full h-full"
//         style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1.5s ease" }}
//       />
//       {!isLoaded && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
//           <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
//           <p className="font-display text-xs tracking-widest text-accent uppercase animate-pulse">
//             Initializing Ethereal Matrix
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ParticleImage;

const ParticleImage = () => {
  return <div></div>;
};

export default ParticleImage;
