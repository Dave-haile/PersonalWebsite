import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          style={{ zIndex: 2147483647 }}
          className="fixed inset-0 w-screen h-screen bg-black flex flex-col items-center justify-center p-8 pointer-events-auto"
        >
          <div className="relative w-full max-w-xs md:max-w-md">
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-center text-white"
              >
                DAWIT HAILE
              </motion.h2>
            </div>

            <div className="relative h-[2px] w-full bg-zinc-900 overflow-hidden mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                initial={{ width: "0%" }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              <div className="flex flex-col gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={statusIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-white"
                  >
                    {statusMessages[statusIndex]}
                  </motion.span>
                </AnimatePresence>
                <span>Systems: Optimized</span>
              </div>
              <div className="text-right">
                <span className="text-white text-sm tabular-nums">{pct}%</span>
                <br />
                <span>EST: 0.02s</span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
