import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { loadingManager } from "../three/loadingManager";

interface DistortionImageProps {
  image1: string;
  image2: string;
  displacement: string;
  intensity?: number;
  className?: string;
}

const DistortionImage: React.FC<DistortionImageProps> = ({
  image1,
  image2,
  displacement,
  intensity = 0.2,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    material: THREE.ShaderMaterial;
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    clock: THREE.Clock;
  } | null>(null);

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform sampler2D disp;
    uniform float dispFactor;
    uniform float effectFactor;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uImageResolution;

    // Helper to achieve background-size: cover in GLSL
    vec2 getCoverUv(vec2 uv, vec2 resolution, vec2 texResolution) {
      vec2 s = resolution; 
      vec2 i = texResolution; 
      float rs = s.x / s.y;
      float ri = i.x / i.y;
      vec2 newUv = uv;
      if (rs > ri) {
        newUv.y = uv.y * (ri / rs) + (1.0 - ri / rs) * 0.5;
      } else {
        newUv.x = uv.x * (rs / ri) + (1.0 - rs / ri) * 0.5;
      }
      return newUv;
    }

    void main() {
      // Apply cover logic to prevent distortion
      vec2 uv = getCoverUv(vUv, uResolution, uImageResolution);
      
      // Ambient animation for displacement
      vec2 animatedDispUv = uv + vec2(
        sin(uTime * 0.15) * 0.02,
        cos(uTime * 0.1) * 0.02
      );
      
      vec4 dispSample = texture2D(disp, animatedDispUv);
      
      // Calculate distortion vectors using R and G channels for 2D flow
      vec2 dist = vec2(dispSample.r, dispSample.g) * effectFactor;
      
      // Interpolate factor for smooth transition
      float alpha = dispFactor;
      
      // Liquid warping math
      vec2 uv1 = vec2(uv.x + alpha * dist.x, uv.y + alpha * dist.y);
      vec2 uv2 = vec2(uv.x - (1.0 - alpha) * dist.x, uv.y - (1.0 - alpha) * dist.y);
      
      vec4 _texture1 = texture2D(texture1, uv1);
      vec4 _texture2 = texture2D(texture2, uv2);
      
      gl_FragColor = mix(_texture1, _texture2, alpha);
    }
  `;

  useEffect(() => {
    if (!containerRef.current) return;

    const parent = containerRef.current;
    let width = parent.offsetWidth;
    let height = parent.offsetHeight;

    if (width === 0 || height === 0) {
      // Default fallback size if parent is not yet rendered
      width = 800;
      height = 800;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      width / -2, width / 2,
      height / 2, height / -2,
      1, 1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    // Style the canvas to fill the parent container correctly
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.pointerEvents = 'none';

    parent.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader(loadingManager);
    loader.crossOrigin = "anonymous";

    const imageRes = new THREE.Vector2(1, 1);
    const tex1 = loader.load(image1, (t) => {
      imageRes.set(t.image.width, t.image.height);
      if (material) material.uniforms.uImageResolution.value = imageRes;
    });
    const tex2 = loader.load(image2);
    const dispTex = loader.load(displacement);

    dispTex.wrapS = dispTex.wrapT = THREE.RepeatWrapping;
    tex1.magFilter = tex2.magFilter = THREE.LinearFilter;
    tex1.minFilter = tex2.minFilter = THREE.LinearFilter;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        effectFactor: { value: intensity },
        dispFactor: { value: 0.0 },
        texture1: { value: tex1 },
        texture2: { value: tex2 },
        disp: { value: dispTex },
        uTime: { value: 0.0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uImageResolution: { value: imageRes }
      },
      vertexShader,
      fragmentShader,
      transparent: true
    });

    const geometry = new THREE.PlaneGeometry(width, height);
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    const clock = new THREE.Clock();
    sceneRef.current = { renderer, material, scene, camera, clock };

    let reqId: number;
    const animate = () => {
      if (!sceneRef.current) return;
      reqId = requestAnimationFrame(animate);
      sceneRef.current.material.uniforms.uTime.value = sceneRef.current.clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!parent) return;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      renderer.setSize(w, h);
      camera.left = w / -2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = h / -2;
      camera.updateProjectionMatrix();
      if (material) material.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(reqId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (parent.contains(renderer.domElement)) {
        parent.removeChild(renderer.domElement);
      }
      sceneRef.current = null;
    };
  }, [image1, image2, displacement, intensity, fragmentShader, vertexShader]);

  const onMouseEnter = () => {
    if (sceneRef.current) {
      gsap.to(sceneRef.current.material.uniforms.dispFactor, {
        value: 1,
        duration: 1.6,
        ease: "expo.out"
      });
    }
  };

  const onMouseLeave = () => {
    if (sceneRef.current) {
      gsap.to(sceneRef.current.material.uniforms.dispFactor, {
        value: 0,
        duration: 1.6,
        ease: "expo.out"
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden grayscale ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export default DistortionImage;
