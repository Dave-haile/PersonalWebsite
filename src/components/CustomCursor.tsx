
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth springs for the "magnetic" trail effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const innerSpringConfig = { damping: 40, stiffness: 500, mass: 0.1 };
  const innerX = useSpring(mouseX, innerSpringConfig);
  const innerY = useSpring(mouseY, innerSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden hidden md:block">
      {/* Outer Glow Ring */}
      hello
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.5 : isClicking ? 0.8 : 1,
          borderColor: isHovering ? 'rgba(96, 165, 250, 0.8)' : 'rgba(59, 130, 246, 0.3)',
          borderWidth: isHovering ? '1px' : '2px',
        }}
        className="absolute w-12 h-12 rounded-full border shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-colors duration-300"
      />

      {/* Trailing Fluid Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHovering ? 0 : 0.4,
          scale: isClicking ? 0.5 : 1,
        }}
        className="absolute w-20 h-20 bg-blue-500/5 blur-xl rounded-full"
      />

      {/* Main Core Dot */}
      <motion.div
        style={{
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0.4 : isClicking ? 1.5 : 1,
          backgroundColor: isHovering ? '#60a5fa' : '#3b82f6',
        }}
        className="absolute w-3 h-3 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
      />

      {/* Hover Text Hint (Optional flair) */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            x: innerX,
            y: innerY,
            translateX: '20px',
            translateY: '-50%',
          }}
          className="absolute pointer-events-none"
        >
          <span className="text-[8px] font-bold text-blue-400 uppercase tracking-[0.2em] whitespace-nowrap bg-blue-500/10 px-2 py-1 rounded-md backdrop-blur-sm border border-blue-500/20">
            View
          </span>
        </motion.div>
      )}
    </div>
  );
};
