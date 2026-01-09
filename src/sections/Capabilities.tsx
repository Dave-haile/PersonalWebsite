// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//   Monitor,
//   Server,
//   Layers,
//   Zap,
//   Database,
//   Settings,
//   CheckCircle2
// } from 'lucide-react';

// const CAPABILITY_GROUPS = [
//   {
//     title: 'Frontend Engineering',
//     focus: 'User experience, performance, and maintainability',
//     icon: Monitor,
//     items: [
//       'Building responsive, accessible interfaces',
//       'Component-driven architecture with React',
//       'Type-safe development using TypeScript',
//       'TailwindCSS for scalable design systems',
//       'Clean UI logic and predictable state handling'
//     ],
//     accent: 'from-blue-500/10'
//   },
//   {
//     title: 'Backend & API Development',
//     focus: 'Business logic and data integrity',
//     icon: Server,
//     items: [
//       'Designing RESTful APIs with Laravel',
//       'Authentication and authorization flows',
//       'Role-based access control (RBAC)',
//       'Validation, error handling, and data flow',
//       'Structuring logic for long-term maintainability'
//     ],
//     accent: 'from-purple-500/10'
//   },
//   {
//     title: 'System Architecture',
//     focus: 'Designing systems that scale beyond MVPs',
//     icon: Layers,
//     items: [
//       'Separating frontend, backend, and data layers',
//       'Integrating React with Laravel via Inertia.js',
//       'Designing admin-controlled content systems',
//       'Planning for scalability in large platforms'
//     ],
//     accent: 'from-pink-500/10'
//   },
//   {
//     title: 'Realtime & Interactive Systems',
//     focus: 'Live user interaction',
//     icon: Zap,
//     items: [
//       'Real-time communication using Socket.IO',
//       'Live status updates and notifications',
//       'Interactive dashboards and data sync',
//       'Synchronizing frontend state with backend events'
//     ],
//     accent: 'from-yellow-500/10'
//   },
//   {
//     title: 'Database & Data Modeling',
//     focus: 'Reliable data structures',
//     icon: Database,
//     items: [
//       'PostgreSQL schema design',
//       'Relational data modeling',
//       'Data consistency and constraints',
//       'Query optimization for growing systems'
//     ],
//     accent: 'from-emerald-500/10'
//   },
//   {
//     title: 'Admin & Content Management',
//     focus: 'Control and flexibility for organizations',
//     icon: Settings,
//     items: [
//       'Custom admin dashboards',
//       'Full control over frontend content',
//       'Managing tenants, users, and roles',
//       'Supporting non-technical administrators'
//     ],
//     accent: 'from-cyan-500/10'
//   },
//   {
//     title: 'Project Ownership & Delivery',
//     focus: 'End-to-end responsibility',
//     icon: CheckCircle2,
//     items: [
//       'Translating requirements into working systems',
//       'Iterative improvement and UI refinement',
//       'Versioned development mindset',
//       'Clear documentation and structure'
//     ],
//     accent: 'from-orange-500/10'
//   }
// ];

// export const Capabilities: React.FC = () => {
//   return (
//     <section id="capabilities" className="py-32 bg-black relative">
//       <div className="container mx-auto px-6">

//         {/* Section Header */}
//         <div className="max-w-4xl mb-24">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-[10px] uppercase tracking-[0.6em] font-bold text-zinc-600 block mb-6"
//           >
//             Core Competencies
//           </motion.span>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
//           >
//             Engineering <br />
//             <span className="text-zinc-500 italic">Capabilities</span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
//           >
//             What I can design, build, and maintain in production environments. I bridge the gap between complex engineering requirements and intuitive product delivery.
//           </motion.p>
//         </div>

//         {/* Capabilities Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
//           {CAPABILITY_GROUPS.map((group, index) => (
//             <motion.div
//               key={group.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
//               className="group relative h-full"
//             >
//               {/* Card Container */}
//               <div className="h-full p-8 rounded-[2.5rem] bg-zinc-900/10 backdrop-blur-xl border border-white/3 hover:border-white/8 hover:bg-zinc-900/20 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl">

//                 {/* Subtle Gradient Accent */}
//                 <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${group.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`} />

//                 <div className="relative z-10 flex flex-col h-full">
//                   <div className="mb-8 flex items-start justify-between">
//                     <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
//                       <group.icon className="w-6 h-6" />
//                     </div>
//                     <div className="text-[9px] font-mono text-zinc-700 uppercase tracking-tighter pt-1">
//                       CPBL_NODE_0{index + 1}
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
//                       {group.title}
//                     </h3>
//                     <p className="text-zinc-500 text-xs font-medium leading-relaxed">
//                       {group.focus}
//                     </p>
//                   </div>

//                   <ul className="space-y-3 mt-auto">
//                     {group.items.map((item, i) => (
//                       <li key={i} className="flex items-start gap-3 text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
//                         <div className="w-1 h-1 rounded-full bg-blue-500/40 mt-1.5 shrink-0" />
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Hover Glow Effect */}
//                 <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/1 transition-colors duration-500 pointer-events-none" />
//               </div>
//             </motion.div>
//           ))}

//           {/* Engineering Philosophy Card */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="p-8 rounded-[2.5rem] border border-dashed border-white/5 flex flex-col items-center justify-center text-center group bg-zinc-900/5"
//           >
//             <p className="text-zinc-600 text-sm italic mb-4 max-w-[200px]">
//               "Building for the future requires understanding the present complexity."
//             </p>
//             <div className="h-px w-12 bg-zinc-800 mb-4" />
//             <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.4em]">
//               Architectural Mindset
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };


import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { CAPABILITY_GROUPS } from '../constants';

const PhilosophyCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 300 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="p-8 rounded-[2rem] border-dashed border-zinc-800 flex flex-col items-center justify-center text-center bg-zinc-900/30 backdrop-blur-sm overflow-hidden h-full min-h-[280px]"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#3b82f6_1px,transparent_1px)] bg-[size:24px_24px] animate-pulse" />
        </div>

        <motion.span
          className="absolute top-6 left-6 text-6xl font-serif text-blue-500/10 select-none"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          &ldquo;
        </motion.span>

        <motion.span
          className="absolute bottom-6 right-6 text-6xl font-serif text-blue-500/10 rotate-180 select-none"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          &ldquo;
        </motion.span>

        <motion.p
          className="text-zinc-400 text-sm italic mb-6 max-w-[220px] relative z-10"
          style={{ transform: "translateZ(30px)" }}
        >
          &ldquo;Building for the future requires understanding the present complexity.&rdquo;
        </motion.p>

        <motion.div
          className="h-px w-12 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-6"
          animate={{ scaleX: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.span
          className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] relative z-10"
          style={{ transform: "translateZ(20px)" }}
        >
          Architectural Mindset
        </motion.span>

        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-blue-500/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-blue-500/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
};

interface AnimatedCardProps {
  title: string;
  focus: string;
  icon: LucideIcon;
  items: string[];
  index: number;
  accentColor: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  focus,
  icon: Icon,
  items,
  index,
  accentColor,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

  const spotlightX = useTransform(smoothMouseX, [-0.5, 0.5], [0, 100]);
  const spotlightY = useTransform(smoothMouseY, [-0.5, 0.5], [0, 100]);

  const glareX = useTransform(smoothMouseX, [-0.5, 0.5], [-50, 150]);
  const glareY = useTransform(smoothMouseY, [-0.5, 0.5], [-50, 150]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, ${accentColor}15 0%, transparent 50%)`
  );

  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08) 0%, transparent 40%)`
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="h-full"
      >
        <div className="relative h-full p-8 rounded-4xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 overflow-hidden flex flex-col transition-all duration-500 hover:border-zinc-700">

          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: spotlightBg }}
          />

          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
            style={{ background: glareBg }}
          />

          <motion.div
            className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{
              boxShadow: `inset 0 0 0 1px ${accentColor}30, 0 0 40px -10px ${accentColor}40`,
            }}
          />

          <motion.div
            className="relative z-10 flex flex-col h-full"
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="mb-8 flex items-start justify-between">
              <motion.div
                className="relative w-14 h-14 rounded-2xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${accentColor}30 0%, transparent 70%)` }}
                />
                <Icon
                  className="w-6 h-6 relative z-10 transition-colors duration-300"
                  style={{ color: isHovered ? accentColor : '#a1a1aa' }}
                />
              </motion.div>

              <div className="text-[9px] font-mono uppercase tracking-tight pt-1 text-zinc-600">
                CPBL_NODE_0{index + 1}
              </div>
            </div>

            <div className="mb-6">
              <motion.h3
                className="text-xl font-bold tracking-tight mb-2 transition-colors duration-300"
                style={{ color: isHovered ? accentColor : '#ffffff' }}
              >
                {title}
              </motion.h3>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                {focus}
              </p>
            </div>

            <ul className="space-y-3 mt-auto">
              {items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-3 text-[14px] leading-relaxed group/item"
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? accentColor : `${accentColor}40`,
                      boxShadow: isHovered ? `0 0 8px ${accentColor}60` : 'none'
                    }}
                  />
                  <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-3/4 transition-all duration-700 ease-out rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
              boxShadow: `0 0 20px ${accentColor}60`
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-20" />

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px]"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-zinc-500 block mb-6"
          >
            Core Competencies
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
          >
            Engineering <br />
            <span className="text-zinc-600 italic">Capabilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            {/* Bridging the gap between complex engineering requirements and intuitive product delivery through advanced architecture and motion. */}
            Translating complex requirements into structured, maintainable systems — balancing architecture, interaction, and real-world constraints.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITY_GROUPS.map((group, index) => (
            <AnimatedCard
              key={group.title}
              title={group.title}
              focus={group.focus}
              icon={group.icon}
              items={group.items}
              index={index}
              accentColor={group.accentColor}
            />
          ))}
          <PhilosophyCard />
        </div>
      </div>
    </section>
  );
};
