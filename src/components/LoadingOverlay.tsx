import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface LoadingOverlayProps {
  visible: boolean;
  progress?: number;
}

const statusMessages = [
  "Initializing Neural Engines...",
  "Synthesizing Core Architecture...",
  "Calibrating Spatial Interfaces...",
  "Optimizing Visual Assets...",
  "Finalizing Environment...",
];

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ visible, progress }) => {
  const pct = typeof progress === "number" ? Math.round(progress * 100) : 0;
  const statusIndex = Math.min(
    statusMessages.length - 1,
    Math.floor((pct / 100) * statusMessages.length)
  );

  // Split name for staggered animation
  const name = "DAWIT HAILE";
  const letters = name.split("");

  // Glitch effect state
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!visible) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const triggerGlitch = () => {
      setIsGlitching(true);

      // Glitch duration
      const glitchDuration = 100 + Math.random() * 200;
      setTimeout(() => setIsGlitching(false), glitchDuration);

      // Schedule next glitch
      const nextDelay = 1500 + Math.random() * 3500;
      timeoutId = setTimeout(triggerGlitch, nextDelay);
    };

    // Initial delay before first glitch
    timeoutId = setTimeout(triggerGlitch, 2000);

    return () => clearTimeout(timeoutId);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          style={{ zIndex: 2147483647 }}
          className="fixed inset-0 w-screen h-screen bg-[#050505] flex flex-col items-center justify-center p-8 pointer-events-auto overflow-hidden"
        >
          {/* Background Grid with subtle movement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Scanning Line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-[1px] bg-white/20 pointer-events-none"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%) pointer-events-none" />

          <div className="relative w-full max-w-xs md:max-w-md z-10">
            {/* Title with staggered letter reveal */}
            <div className="flex justify-center mb-12 overflow-hidden">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.05,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className={`text-4xl md:text-7xl font-bold tracking-tighter text-white ${letter === " " ? "mx-2" : ""}`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Progress Bar Container */}
            <div className="relative mb-6">
              {/* Bar Background */}
              <div className="h-[1px] w-full bg-zinc-900 overflow-hidden relative">
                {/* Active Progress */}
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${pct}%`,
                    x: isGlitching ? [0, -3, 3, -1, 2, 0] : 0,
                    opacity: isGlitching ? [1, 0.4, 1, 0.7, 1] : 1,
                    scaleY: isGlitching ? [1, 2, 0.5, 1.2, 1] : 1,
                    filter: isGlitching ? ["blur(0px)", "blur(2px)", "blur(0px)"] : "blur(0px)"
                  }}
                  transition={{
                    width: { duration: 0.3, ease: "easeOut" },
                    x: { duration: 0.1, repeat: isGlitching ? 2 : 0 },
                    opacity: { duration: 0.05, repeat: isGlitching ? 3 : 0 },
                    scaleY: { duration: 0.1, repeat: isGlitching ? 2 : 0 },
                    filter: { duration: 0.1 }
                  }}
                />
              </div>

              {/* Glitchy markers */}
              <div className="absolute -top-1 left-0 w-full flex justify-between pointer-events-none">
                {[0, 25, 50, 75, 100].map((mark) => (
                  <div
                    key={mark}
                    className={`h-2 w-[1px] bg-zinc-800 transition-colors duration-300 ${pct >= mark ? "bg-white/50" : ""}`}
                  />
                ))}
              </div>
            </div>

            {/* Metadata Footer */}
            <div className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={statusIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-white font-medium"
                    >
                      {statusMessages[statusIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="flex flex-col opacity-50">
                  <span>Kernel: v2.4.0-stable</span>
                  <span>Buffer: Optimized</span>
                </div>
              </div>

              <div className="text-right flex flex-col gap-1">
                <div className="flex flex-col">
                  <span className="text-zinc-600">Progress</span>
                  <span className="text-white text-2xl font-bold tabular-nums tracking-tighter">
                    {pct.toString().padStart(3, '0')}%
                  </span>
                </div>
                <div className="flex flex-col opacity-50">
                  <span>Latency: 14ms</span>
                  <span>EST: {(0.02 * (1 - pct / 100)).toFixed(2)}s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/20" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-white/20" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20" />

          {/* Floating Data Points (Simulated) */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8 opacity-20 font-mono text-[8px] tracking-widest text-white">
            <span>X: {Math.random().toFixed(4)}</span>
            <span>Y: {Math.random().toFixed(4)}</span>
            <span>Z: {Math.random().toFixed(4)}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
