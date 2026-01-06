import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, type Variants } from "framer-motion";
import ParticleSignature from "../components/ParticleSignature";
import StarField from "../components/StarField";

const AnimatedName = ({ name }: { name: string }) => {
  const letterVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="flex overflow-hidden">
      {name.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          whileHover={{
            y: -10,
            color: "#60a5fa",
            transition: { duration: 0.2 }
          }}
          className="inline-block transition-colors duration-300 cursor-default"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section id="home" className="relative h-screen flex items-center px-8 md:px-24 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 40 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
          <Suspense fallback={null}>
            <StarField />
            <ParticleSignature />
          </Suspense>
        </Canvas>
      </div>

      <div className="z-10 relative pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] mb-8 font-bold opacity-70">
            Full Stack Architect
          </h2>
        </motion.div>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-7xl md:text-[8.5rem] font-display font-bold tracking-tighter leading-[0.85] mb-10 text-white"
        >
          <AnimatedName name="Dawit" />
          <AnimatedName name="Haile" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-14"
        >
          Engineering the digital nexus where performance meets
          high-fidelity interactive design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-wrap gap-6"
        >
          <a href="#projects" className="group relative px-12 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-transform active:scale-95">
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
          <a href="#contact" className="px-12 py-5 bg-transparent border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all active:scale-95">
            Collaborate
          </a>
        </motion.div>
      </div>

      <div className="absolute left-0 bottom-0 w-full h-1/4 bg-linear-to-t from-black to-transparent pointer-events-none"></div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-20">
        <span className="text-[10px] uppercase tracking-[0.6em] font-bold">
          Scroll
        </span>
        <div className="w-px h-20 bg-linear-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};
