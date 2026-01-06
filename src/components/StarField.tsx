import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from 'three'

const StarField = () => {
    const ref = useRef<THREE.Points>(null!);
    const count = 5000;

    const positions = useMemo(() => {
        let seed = 123456789;
        const seededRandom = () => {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };

        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (seededRandom() - 0.5) * 30;
            pos[i * 3 + 1] = (seededRandom() - 0.5) * 30;
            pos[i * 3 + 2] = (seededRandom() - 1) * 20;
        }
        return pos;
    }, [count]);

    useFrame(() => {
        const scrollY = window.scrollY;
        const speedMultiplier = 3 + scrollY * 0.02;

        const positionsArr = ref.current.geometry.attributes.position
            .array as Float32Array;

        for (let i = 0; i < count; i++) {
            positionsArr[i * 3 + 2] += 0.02 * speedMultiplier;

            if (positionsArr[i * 3 + 2] > 5) {
                positionsArr[i * 3 + 2] = -15;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
        ref.current.rotation.z += 0.0005;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#60a5fa"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

export default StarField