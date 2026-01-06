import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface LetterData {
  positions: Float32Array;
  count: number;
}

const IdentityParticles: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null!);
  const timeRef = useRef(0);

  // Generate particle positions for letters "D" and "H"
  const letterData = useMemo(() => {
    const createLetterParticles = (letter: string, offsetX: number, scale: number): LetterData => {
      const positions: number[] = [];
      const density = 8; // Controls particle density

      // Simple letter shapes using basic geometry
      if (letter === 'D') {
        // Vertical line
        for (let y = -2; y <= 2; y += 0.15) {
          positions.push(offsetX, y * scale, 0);
        }
        // Top and bottom horizontal curves
        for (let angle = 0; angle < Math.PI; angle += 0.2) {
          const x = offsetX + Math.cos(angle) * scale;
          const y = 2 * scale;
          positions.push(x, y, 0);
          positions.push(x, -2 * scale, 0);
        }
        // Middle curve
        for (let angle = Math.PI / 2; angle < 3 * Math.PI / 2; angle += 0.15) {
          const x = offsetX + Math.cos(angle) * scale;
          const y = 0;
          positions.push(x, y, 0);
        }
      } else if (letter === 'H') {
        // Left vertical line
        for (let y = -2; y <= 2; y += 0.15) {
          positions.push(offsetX - scale, y * scale, 0);
        }
        // Right vertical line
        for (let y = -2; y <= 2; y += 0.15) {
          positions.push(offsetX + scale, y * scale, 0);
        }
        // Horizontal middle line
        for (let x = offsetX - scale; x <= offsetX + scale; x += 0.15) {
          positions.push(x, 0, 0);
        }
      }

      // Add some randomness and density variation
      const finalPositions: number[] = [];
      positions.forEach((pos, i) => {
        if (i % 3 === 0) {
          const x = pos + (Math.random() - 0.5) * 0.1;
          const y = positions[i + 1] + (Math.random() - 0.5) * 0.1;
          const z = positions[i + 2];

          // Add multiple particles per position for density
          for (let d = 0; d < density; d++) {
            finalPositions.push(
              x + (Math.random() - 0.5) * 0.05,
              y + (Math.random() - 0.5) * 0.05,
              z + (Math.random() - 0.5) * 0.1
            );
          }
        }
      });

      return {
        positions: new Float32Array(finalPositions),
        count: finalPositions.length / 3
      };
    };

    const dData = createLetterParticles('D', -1.5, 0.8);
    const hData = createLetterParticles('H', 1.5, 0.8);

    // Combine both letters
    const combinedPositions = new Float32Array(dData.count * 3 + hData.count * 3);
    combinedPositions.set(dData.positions, 0);
    combinedPositions.set(hData.positions, dData.count * 3);

    return {
      positions: combinedPositions,
      count: dData.count + hData.count
    };
  }, []);

  // Create random target positions for disassembly
  const randomTargets = useMemo(() => {
    const targets = new Float32Array(letterData.count * 3);
    for (let i = 0; i < letterData.count; i++) {
      targets[i * 3] = (Math.random() - 0.5) * 8;     // X
      targets[i * 3 + 1] = (Math.random() - 0.5) * 8; // Y
      targets[i * 3 + 2] = (Math.random() - 0.5) * 4; // Z
    }
    return targets;
  }, [letterData.count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    timeRef.current += 0.01;
    const cycleTime = timeRef.current % (Math.PI * 4); // Full cycle every ~12.5 seconds
    const progress = Math.sin(cycleTime) * 0.5 + 0.5; // 0 to 1, smooth oscillation

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const mouse = state.mouse;

    // Mouse interaction strength (gentle)
    const mouseInfluence = 0.3;
    const mouseRadius = 2;

    for (let i = 0; i < letterData.count; i++) {
      const i3 = i * 3;

      // Base positions (letter formation)
      const targetX = letterData.positions[i3];
      const targetY = letterData.positions[i3 + 1];
      const targetZ = letterData.positions[i3 + 2];

      // Random positions (disassembled state)
      const randomX = randomTargets[i3];
      const randomY = randomTargets[i3 + 1];
      const randomZ = randomTargets[i3 + 2];

      // Idle drift (subtle movement when formed)
      const driftX = Math.sin(timeRef.current * 0.5 + i * 0.1) * 0.1;
      const driftY = Math.cos(timeRef.current * 0.3 + i * 0.15) * 0.08;
      const driftZ = Math.sin(timeRef.current * 0.4 + i * 0.12) * 0.05;

      // Interpolate between random and formed positions
      let finalX = THREE.MathUtils.lerp(randomX, targetX + driftX, progress);
      let finalY = THREE.MathUtils.lerp(randomY, targetY + driftY, progress);
      let finalZ = THREE.MathUtils.lerp(randomZ, targetZ + driftZ, progress);

      // Mouse interaction (gentle repulsion)
      const particlePos = new THREE.Vector3(finalX, finalY, finalZ);
      const mousePos = new THREE.Vector3(mouse.x * 4, mouse.y * 4, 0);
      const distance = particlePos.distanceTo(mousePos);

      if (distance < mouseRadius) {
        const direction = new THREE.Vector3().subVectors(particlePos, mousePos).normalize();
        const influence = (1 - distance / mouseRadius) * mouseInfluence;
        finalX += direction.x * influence;
        finalY += direction.y * influence;
        finalZ += direction.z * influence * 0.5;
      }

      positions[i3] = finalX;
      positions[i3 + 1] = finalY;
      positions[i3 + 2] = finalZ;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Gentle rotation for added life
    pointsRef.current.rotation.z += 0.0002;
  });

  return (
    <Points ref={pointsRef} positions={letterData.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
};

export const IdentityParticlesCanvas: React.FC = () => {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <IdentityParticles />
      </Canvas>
    </div>
  );
};

export default IdentityParticles;
