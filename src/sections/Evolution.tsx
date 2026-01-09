// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const phases = [
//     {
//         number: '01',
//         title: 'Foundations',
//         subtitle: 'Thinking in structure and systems',
//         description: 'Understanding the fundamentals of programming, data structures, and algorithmic thinking. Building the mental models that would shape every decision to come.'
//     },
//     {
//         number: '02',
//         title: 'Frontend Systems',
//         subtitle: 'Component architecture and UX flow',
//         description: 'Mastering the art of building interfaces that feel alive. From component composition to state management, crafting experiences that users intuitively understand.'
//     },
//     {
//         number: '03',
//         title: 'Backend Thinking',
//         subtitle: 'APIs, authentication, data modeling',
//         description: 'Architecting the invisible infrastructure. Designing databases, securing endpoints, and building the reliable foundations that power seamless experiences.'
//     },
//     {
//         number: '04',
//         title: 'Interaction & Experiments',
//         subtitle: 'Real-time systems, motion, particles',
//         description: 'Pushing boundaries with WebGL, real-time data, and generative visuals. Where technical precision meets creative expression.'
//     }
// ];

// const Evolution: React.FC = () => {
//     const sectionRef = useRef<HTMLElement>(null);
//     const containerRef = useRef<HTMLDivElement>(null);
//     const [currentPhase, setCurrentPhase] = useState(0);
//     const [isActive, setIsActive] = useState(false);

//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ['start start', 'end end']
//     });

//     const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

//     useEffect(() => {
//         const updatePhase = () => {
//             const progress = scrollYProgress.get();
//             const phase = Math.min(3, Math.floor(progress * 4));
//             setCurrentPhase(phase);
//         };

//         const unsubscribe = scrollYProgress.on('change', updatePhase);
//         return () => unsubscribe();
//     }, [scrollYProgress]);

//     useEffect(() => {
//         const section = sectionRef.current;
//         if (!section) return;

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsActive(entry.isIntersecting && entry.intersectionRatio > 0.5);
//             },
//             { threshold: [0.5] }
//         );

//         observer.observe(section);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className="relative h-[400vh] bg-background"
//         >
//             <div className="sticky top-0 h-screen overflow-hidden">
//                 {/* Section Label */}
//                 <motion.span
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 0.4 }}
//                     transition={{ duration: 0.8 }}
//                     className="absolute top-8 left-8 md:left-16 text-xs uppercase tracking-[0.3em] text-foreground/40 z-10"
//                 >
//                     Evolution
//                 </motion.span>

//                 {/* Phase Indicator */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="absolute bottom-8 right-8 md:right-16 z-10 font-mono text-sm"
//                 >
//                     <span className="text-primary">{String(currentPhase + 1).padStart(2, '0')}</span>
//                     <span className="text-foreground/20"> / 04</span>
//                 </motion.div>

//                 {/* Progress Line */}
//                 <div className="absolute bottom-8 left-8 md:left-16 right-32 h-px bg-foreground/10 z-10">
//                     <motion.div
//                         className="h-full bg-primary/50"
//                         style={{
//                             width: useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
//                         }}
//                     />
//                 </div>

//                 {/* Horizontal Track */}
//                 <motion.div
//                     ref={containerRef}
//                     style={{ x }}
//                     className="flex h-full w-[400vw]"
//                 >
//                     {phases.map((phase, index) => (
//                         <div
//                             key={phase.number}
//                             className="w-screen h-full flex items-center px-8 md:px-16 lg:px-24"
//                         >
//                             <div className="max-w-2xl">
//                                 {/* Phase Number */}
//                                 <motion.span
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 0.15, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.1 }}
//                                     viewport={{ once: false, amount: 0.5 }}
//                                     className="block text-[8rem] md:text-[12rem] font-display font-bold leading-none text-white/15 -mb-16 md:-mb-24 -ml-2 "
//                                 >
//                                     {phase.number}
//                                 </motion.span>

//                                 {/* Title */}
//                                 <motion.h2
//                                     initial={{ opacity: 0, y: 30 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.2 }}
//                                     viewport={{ once: false, amount: 0.5 }}
//                                     className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-4"
//                                 >
//                                     {phase.title}
//                                 </motion.h2>

//                                 {/* Subtitle */}
//                                 <motion.p
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.3 }}
//                                     viewport={{ once: false, amount: 0.5 }}
//                                     className="text-lg md:text-xl text-primary/80 font-light mb-8"
//                                 >
//                                     {phase.subtitle}
//                                 </motion.p>

//                                 {/* Description */}
//                                 <motion.p
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.6, delay: 0.4 }}
//                                     viewport={{ once: false, amount: 0.5 }}
//                                     className="text-base md:text-lg text-muted-foreground/70 leading-relaxed max-w-lg"
//                                 >
//                                     {phase.description}
//                                 </motion.p>
//                             </div>
//                         </div>
//                     ))}
//                 </motion.div>

//                 {/* Subtle Accent Gradient */}
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent" />
//                     <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Evolution;


import React, { useRef, useMemo, Suspense } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const PHASES = [
    {
        id: '01',
        title: 'Foundations',
        subtitle: 'Structure & Systems',
        description: 'Started my journey by exploring the basics of web development through books, tutorials, and small personal projects. Focused on understanding core principles, building strong mental models that guide every project I create.',
    },
    {
        id: '02',
        title: 'Frontend Systems',
        subtitle: 'Component architecture and UX flow',
        description: 'Self-taught frontend development, experimenting with HTML, CSS, and JavaScript frameworks. Learned to structure components and manage state effectively, crafting interfaces that feel intuitive and responsive.',
    },
    {
        id: '03',
        title: 'Backend Thinking',
        subtitle: 'APIs, authentication, data modeling',
        description: 'Expanded into backend technologies by building APIs, learning databases, and implementing authentication systems. Gradually mastered how to connect frontend and backend for seamless, reliable applications.',
    },
    {
        id: '04',
        title: 'Interaction & Experiments',
        subtitle: 'Motion & Reality',
        description: 'Pushed boundaries with interactive experiences, exploring real-time systems, motion effects, and generative visuals. Combined creativity with technical precision to turn interfaces into engaging experiences.',
    }
];

const MorphingParticleSystem = ({ progress }: { progress: MotionValue<number> }) => {
    const pointsRef = useRef<THREE.Points>(null!);
    const { viewport } = useThree();
    const count = 5000;


    // Pre-calculate positions for 4 distinct formations
    const formations = useMemo(() => {
        // Simple seeded random number generator for deterministic results
        let seed = 123456789;
        const seededRandom = () => {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };

        const grid = new Float32Array(count * 3);
        const tree = new Float32Array(count * 3);
        const nodes = new Float32Array(count * 3);
        const spiral = new Float32Array(count * 3);

        const size = 7;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // 1. Grid Formation
            const gSide = Math.ceil(Math.pow(count, 1 / 3));
            grid[i3] = ((i % gSide) - gSide / 2) * (size / gSide);
            grid[i3 + 1] = ((Math.floor(i / gSide) % gSide) - gSide / 2) * (size / gSide);
            grid[i3 + 2] = (Math.floor(i / (gSide * gSide)) - gSide / 2) * (size / gSide);

            // 2. Tree Formation
            const level = Math.floor(Math.log2(i + 1));
            const posInLevel = i - (Math.pow(2, level) - 1);
            const totalInLevel = Math.pow(2, level);
            tree[i3] = (posInLevel / totalInLevel - 0.5) * (level * 1.8);
            tree[i3 + 1] = 4 - level * 1.0;
            tree[i3 + 2] = (seededRandom() - 0.5) * 1.2;

            // 3. Network Nodes
            const theta = seededRandom() * Math.PI * 2;
            const phi = Math.acos(2 * seededRandom() - 1);
            const radius = 2.8 + seededRandom() * 0.4;
            nodes[i3] = radius * Math.sin(phi) * Math.cos(theta);
            nodes[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            nodes[i3 + 2] = radius * Math.cos(phi);

            // 4. Spiral Formation
            const t = (i / count) * Math.PI * 30;
            const r = (i / count) * 4;
            spiral[i3] = r * Math.cos(t);
            spiral[i3 + 1] = (i / count - 0.5) * 10;
            spiral[i3 + 2] = r * Math.sin(t);
        }

        return { grid, tree, nodes, spiral };
    }, [count]);

    const initialPositions = useMemo(() => new Float32Array(count * 3), [count]);
    const mouseOffsets = useRef(new Float32Array(count * 3));

    useFrame((state) => {
        if (!pointsRef.current) return;

        const p = progress.get() || 0;
        const t = state.clock.getElapsedTime();
        const mouse = state.mouse;
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

        let fromArr, toArr, lerpFactor;
        if (p < 0.25) {
            fromArr = formations.grid;
            toArr = formations.tree;
            lerpFactor = (p - 0) / 0.25;
        } else if (p < 0.5) {
            fromArr = formations.tree;
            toArr = formations.nodes;
            lerpFactor = (p - 0.25) / 0.25;
        } else if (p < 0.75) {
            fromArr = formations.nodes;
            toArr = formations.spiral;
            lerpFactor = (p - 0.5) / 0.25;
        } else {
            fromArr = formations.spiral;
            toArr = formations.grid;
            lerpFactor = (p - 0.75) / 0.25;
        }

        const ease = (x: number) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        const smoothFactor = ease(lerpFactor);

        const mx = mouse.x * (viewport.width / 2);
        const my = mouse.y * (viewport.height / 2);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            const targetX = THREE.MathUtils.lerp(fromArr[i3], toArr[i3], smoothFactor);
            const targetY = THREE.MathUtils.lerp(fromArr[i3 + 1], toArr[i3 + 1], smoothFactor);
            const targetZ = THREE.MathUtils.lerp(fromArr[i3 + 2], toArr[i3 + 2], smoothFactor);

            const dx = targetX - mx;
            const dy = targetY - my;
            const distSq = dx * dx + dy * dy;
            const influenceRange = 4; // Increase influence range when hovered

            let pushX = 0;
            let pushY = 0;

            if (distSq < influenceRange) {
                const dist = Math.sqrt(distSq);
                if (dist > 0.0001) { // Guard against division by zero
                    const baseStrength = (1 - dist / Math.sqrt(influenceRange)) * 0.15;
                    const hoverMultiplier = 1; // Stronger effect when hovered
                    const strength = baseStrength * hoverMultiplier;
                    pushX = (dx / dist) * strength;
                    pushY = (dy / dist) * strength;
                }
            }

            mouseOffsets.current[i3] = THREE.MathUtils.lerp(mouseOffsets.current[i3], pushX, 0.1);
            mouseOffsets.current[i3 + 1] = THREE.MathUtils.lerp(mouseOffsets.current[i3 + 1], pushY, 0.1);

            // Enhanced movement when hovered
            const baseAmplitude = 0.02;
            const hoverAmplitude = baseAmplitude;

            positions[i3] = targetX + mouseOffsets.current[i3] + Math.sin(t * 0.5 + i * 0.1) * hoverAmplitude;
            positions[i3 + 1] = targetY + mouseOffsets.current[i3 + 1] + Math.cos(t * 0.5 + i * 0.1) * hoverAmplitude;
            positions[i3 + 2] = targetZ + Math.sin(t * 0.3 + i * 0.2) * hoverAmplitude;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.rotation.y = t * 0.03 + p * 1.5;
        pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    });

    return (
        <Points ref={pointsRef} positions={initialPositions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={"#f1f5f9"}
                size={0.035}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
                opacity={0.9}
            />
        </Points>
    );
};

const Evolution: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);


    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    const smoothX = useSpring(xTranslate, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id='evolution' ref={targetRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

                {/* 3D Visual Layer */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                        <Suspense fallback={null}>
                            <MorphingParticleSystem progress={smoothProgress} />
                            <ambientLight intensity={0.4} />
                            <pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" />
                        </Suspense>
                    </Canvas>
                </div>

                {/* Fixed UI Overlays */}
                <div className="absolute top-12 left-8 md:left-24 z-20">
                    <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-zinc-600">
                        System Evolution
                    </span>
                </div>

                <div className="absolute bottom-12 right-8 md:right-24 z-20 flex items-baseline gap-2">
                    <div
                        className="text-4xl font-display font-bold text-white cursor-pointer"
                    >
                        <PhaseNumber progress={scrollYProgress} />
                    </div>
                    <span className="text-zinc-700 text-sm font-medium">/ 04</span>
                </div>

                {/* Horizontal Moving Content */}
                <motion.div
                    style={{ x: smoothX }}
                    className="flex w-[400vw] z-10"
                >
                    {PHASES.map((phase, index) => (
                        <div
                            key={phase.id}
                            className="w-screen h-screen relative flex items-center px-8 md:px-24"
                        >
                            <div className="max-w-4xl bg-black/5 p-8 rounded-3xl border border-white/2">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="mb-4"
                                >
                                    <span className="text-zinc-400/60 font-bold tracking-[0.2em] text-[10px] uppercase">
                                        {phase.subtitle}
                                    </span>
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter text-white"
                                >
                                    {phase.title}
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl"
                                >
                                    {phase.description}
                                </motion.p>

                                {/* Technical Meta Tag */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 0.3 }}
                                    className="mt-12 font-mono text-[9px] text-zinc-600 tracking-widest uppercase"
                                >
                                    ID: {phase.id} // STATUS: ACTIVE // NODE: ARCH_0{index + 1}
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Floor Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-900/50">
                    <motion.div
                        style={{ scaleX: scrollYProgress }}
                        className="h-full bg-blue-500/30 origin-left"
                    />
                </div>
            </div>
        </section>
    );
};

const PhaseNumber: React.FC<{ progress: MotionValue<number> }> = ({ progress }) => {
    const [val, setVal] = React.useState("01");

    React.useEffect(() => {
        return progress.on("change", (latest: number) => {
            if (latest < 0.25) setVal("01");
            else if (latest < 0.5) setVal("02");
            else if (latest < 0.75) setVal("03");
            else setVal("04");
        });
    }, [progress]);

    return (
        <motion.span
            className="select-none"
            animate={{
                textShadow: "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)",
                scale: 1.05
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}
            style={{
                color: "#9f9fa9"
            }}
        >
            {val}
        </motion.span>
    );
};

export default Evolution;