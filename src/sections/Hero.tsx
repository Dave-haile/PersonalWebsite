import React, { lazy, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion, type Variants } from "framer-motion";
import ParticleSignature from "../components/ParticleSignature";
const StarField = lazy(() => import("../components/StarField"));

const InteractiveLetter = ({ char }: { char: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [colorStyle, setColorStyle] = useState({});
  const rotationValue = 3; // Fixed rotation for hover effect

  const handleMouseEnter = () => {
    setIsHovered(true);
    const hue1 = Math.floor(Math.random() * 360);
    const hue2 = (hue1 + 40) % 360;

    setColorStyle({
      backgroundImage: `linear-gradient(90deg, hsl(${hue1}, 95%, 60%), hsl(${hue2}, 95%, 60%))`,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      setColorStyle({});
    }, 500);
  };

  return (
    <motion.span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHovered ? colorStyle : undefined}
      animate={isHovered ? {
        y: -10,
        scale: 1.2,
        rotate: rotationValue
      } : {
        y: 0,
        scale: 1,
        rotate: 0
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`inline-block cursor-default select-none transition-colors duration-300 ${isHovered ? 'animate-gradient-text' : ''}`}
    >
      {char}
    </motion.span>
  );
};

const InteractiveTitle = ({ textLines }: { textLines: string[] }) => {
  // Stagger effect for the initial load
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <>
      {textLines.map((line, i) => (
        <motion.div
          key={i}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-start flex-wrap gap-x-4 md:gap-x-6 mb-2"
        >
          {line.split(" ").map((word, wi) => (
            <span key={wi} className="inline-flex whitespace-nowrap">
              {word.split("").map((char, ci) => (
                <motion.span key={ci} variants={child}>
                  <InteractiveLetter char={char} />
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>
      ))}
    </>
  );
};


const RippleButton: React.FC = () => {
  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--xPos", `${x}px`);
    e.currentTarget.style.setProperty("--yPos", `${y}px`);
  };

  return (
    <a
      href="#experience"
      onMouseMove={handleMouseMove}
      className="
        group relative px-12 py-5 bg-white font-bold rounded-full
        overflow-hidden transition-transform duration-300
        border-none outline-none focus:outline-none

        before:absolute before:content-[''] before:w-0 before:h-0
        before:rounded-full before:bg-black
        before:left-(--xPos) before:top-(--yPos)
        before:-translate-x-1/2 before:-translate-y-1/2
        before:transition-all before:duration-700
        hover:before:w-[300px] hover:before:h-[300px]
      "
    >
      <span className="
        relative z-10 text-black
        transition-colors duration-300
        group-hover:text-white
      ">
        View Work
      </span>
    </a>
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

  const headerText = [
    "Dawit",
    "Haile"
  ]


  return (
    <section id="home" className="relative h-screen flex items-center px-8 md:px-24 overflow-hidden bg-black">
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: '#000' }}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <ambientLight intensity={0.2} />
          {/* <pointLight position={[10, 10, 10]} intensity={1.5} color="#60a5fa" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" /> */}
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
            FULL STACK ARCHITECTURE
          </h2>
        </motion.div>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-7xl md:text-[8.5rem] font-display font-bold tracking-tighter leading-[0.85] mb-10 text-white"
        >

          <InteractiveTitle textLines={headerText} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-14"
        >
          {/* Designing and engineering scalable web systems with thoughtful interfaces and resilient backend architecture. */}
          I build modern web systems — from architecture and APIs to interfaces and interaction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-wrap gap-6"
        >
          <RippleButton />
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