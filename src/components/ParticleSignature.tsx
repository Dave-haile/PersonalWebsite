import { PointMaterial, Points } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from 'three'

const ParticleSignature = () => {
    const ref = useRef<THREE.Points>(null!);
    const materialRef = useRef<THREE.PointsMaterial>(null!);
    const count = 5000;
    const { viewport } = useThree();

    const targets = useMemo(() => {
        /* eslint-disable */
        const t = new Float32Array(count * 3);
        const centerX = viewport.width * 0.25;
        const scale = Math.min(viewport.width, viewport.height) * 0.08;
        const spacing = scale * 1.5;

        for (let i = 0; i < count; i++) {
            let x = 0, y = 0;
            const charIndex = i % 3;
            const subSegment = i % 5;

            const charOffset = (charIndex - 1) * spacing;
            const baseX = centerX + charOffset;

            if (charIndex === 0) { // D
                if (subSegment === 0) { // Vertical spine
                    x = baseX - scale * 0.5;
                    y = (Math.random() - 0.5) * scale * 2;
                } else { // Curved part
                    const angle = (Math.random() - 0.5) * Math.PI;
                    x = baseX - scale * 0.5 + Math.cos(angle) * scale;
                    y = Math.sin(angle) * scale;
                }
            } else if (charIndex === 1) { // H
                if (subSegment === 0) { // Left vertical
                    x = baseX - scale * 0.5;
                    y = (Math.random() - 0.5) * scale * 2;
                } else if (subSegment === 1) { // Right vertical
                    x = baseX + scale * 0.5;
                    y = (Math.random() - 0.5) * scale * 2;
                } else { // Middle horizontal
                    x = baseX + (Math.random() - 0.5) * scale;
                    y = 0;
                }
            } else if (charIndex === 2) { // S
                const seg = Math.random();
                if (seg < 0.2) { // Top
                    x = baseX - scale * 0.5 + Math.random() * scale; y = scale;
                } else if (seg < 0.4) { // Middle
                    x = baseX - scale * 0.5 + Math.random() * scale; y = 0;
                } else if (seg < 0.6) { // Bottom
                    x = baseX - scale * 0.5 + Math.random() * scale; y = -scale;
                } else if (seg < 0.8) { // Top-Left Join
                    x = baseX - scale * 0.5; y = Math.random() * scale;
                } else { // Bottom-Right Join
                    x = baseX + scale * 0.5; y = -Math.random() * scale;
                }
            }

            t[i * 3] = x;
            t[i * 3 + 1] = y;
            t[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
        }
        return t;
    }, [count, viewport]);

    const idlePositions = useMemo(() => {
        /* eslint-disable */
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const mouse = state.mouse;

        const formCycle = Math.sin(time * 0.5) * 0.5 + 0.5;
        const factor = THREE.MathUtils.smoothstep(formCycle, 0.2, 0.8);

        const positions = ref.current.geometry.attributes.position.array as Float32Array;

        const mx = mouse.x * (viewport.width / 2);
        const my = mouse.y * (viewport.height / 2);

        const clusterCenterX = viewport.width * 0.25;
        const clusterDistSq = Math.pow(mx - clusterCenterX, 2) + Math.pow(my - 0, 2);
        const hoverIntensity = Math.max(0, 1 - Math.sqrt(clusterDistSq) / 5);

        if (materialRef.current) {
            const baseSize = 0.038;
            const baseOpacity = 0.65;
            materialRef.current.size = THREE.MathUtils.lerp(materialRef.current.size, baseSize + (hoverIntensity * 0.02) + (Math.sin(time * 3) * 0.005 * hoverIntensity), 0.1);
            materialRef.current.opacity = THREE.MathUtils.lerp(materialRef.current.opacity, baseOpacity + (hoverIntensity * 0.35), 0.1);
            materialRef.current.color.lerp(new THREE.Color(hoverIntensity > 0.5 ? "#ffffff" : "#60a5fa"), 0.05);
        }

        for (let i = 0; i < count; i++) {
            const idx = i * 3;
            const targetX = THREE.MathUtils.lerp(idlePositions[idx], targets[idx], factor);
            const targetY = THREE.MathUtils.lerp(idlePositions[idx + 1], targets[idx + 1], factor);
            const targetZ = THREE.MathUtils.lerp(idlePositions[idx + 2], targets[idx + 2], factor);

            const dx = positions[idx] - mx;
            const dy = positions[idx + 1] - my;
            const distSq = dx * dx + dy * dy;

            let rx = 0, ry = 0;
            if (distSq < 25) {
                const dist = Math.sqrt(distSq);
                if (dist > 0.0001) {
                    const force = (1.0 - dist / 5) * 0.65;
                    rx = (dx / dist) * force;
                    ry = (dy / dist) * force;
                }
            }

            positions[idx] = THREE.MathUtils.lerp(positions[idx], targetX + rx, 0.08);
            positions[idx + 1] = THREE.MathUtils.lerp(positions[idx + 1], targetY + ry, 0.08);
            positions[idx + 2] = THREE.MathUtils.lerp(positions[idx + 2], targetZ, 0.08);
        }

        ref.current.geometry.attributes.position.needsUpdate = true;
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, mouse.x * 0.15, 0.05);
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -mouse.y * 0.15, 0.05);
    });

    return (
        <Points ref={ref} positions={idlePositions} stride={3} frustumCulled={false}>
            <PointMaterial
                ref={materialRef}
                transparent
                color="#60a5fa"
                size={0.038}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.65}
            />
        </Points>
    );
};

export default ParticleSignature