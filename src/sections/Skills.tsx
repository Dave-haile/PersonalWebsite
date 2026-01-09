
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const SKILLS = [
//   { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js'], color: 'from-blue-500/20' },
//   { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'Go', 'GraphQL'], color: 'from-purple-500/20' },
//   { name: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'], color: 'from-pink-500/20' },
//   { name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Vercel'], color: 'from-cyan-500/20' },
// ];

// export const Skills: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);

//   // Track scroll progress within this specific section
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"]
//   });

//   // Background decorative elements move at a slower rate
//   const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
//   const secondaryBackgroundY = useTransform(scrollYProgress, [0, 1], [30, -30]);

//   return (
//     <section 
//       id="skills" 
//       ref={sectionRef}
//       className="py-24 bg-zinc-950/50 relative overflow-hidden"
//     >
//       {/* Parallax Background Elements */}
//       <motion.div 
//         style={{ y: backgroundY }}
//         className="absolute top-0 right-[-10%] w-[40%] h-[80%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"
//       />
//       <motion.div 
//         style={{ y: secondaryBackgroundY }}
//         className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[60%] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none"
//       />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-20">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl font-bold font-display mb-4"
//           >
//             Technical <span className="text-gradient">Arsenal</span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-gray-500"
//           >
//             The tools I use to bring ideas to life.
//           </motion.p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {SKILLS.map((skill, idx) => (
//             <motion.div
//               key={skill.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1, duration: 0.5 }}
//               whileHover={{ 
//                 y: -8, 
//                 backgroundColor: 'rgba(255, 255, 255, 0.05)',
//                 transition: { duration: 0.2 }
//               }}
//               className={`p-8 rounded-3xl glass bg-gradient-to-br ${skill.color} to-transparent border border-white/5 relative group overflow-hidden`}
//             >
//               {/* Subtle hover accent */}
//               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

//               <h3 className="text-xl font-bold mb-6 text-white font-display">{skill.name}</h3>
//               <ul className="space-y-3">
//                 {skill.items.map((item) => (
//                   <li key={item} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
//                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };



import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { SKILLS_SYSTEMS } from '../constants';

export const Skills: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const bandVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="mb-24 flex flex-col items-start max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-6"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-zinc-500">
              Technical Stack
            </span>
            <div className="h-px w-24 bg-zinc-900" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter text-white"
          >
            Engineering <span className="text-zinc-600">Core.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l border-zinc-900 pl-8"
          >
            The tools and frameworks I use to build reliable, scalable systems in production environments.
          </motion.p>
        </div>

        {/* Technical Bands - Editorial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {SKILLS_SYSTEMS.map((system, index) => (
            <motion.div
              key={system.category}
              variants={bandVariants}
              className="group relative flex flex-col md:grid md:grid-cols-12 gap-6 py-12 border-b border-zinc-900 last:border-0 hover:bg-zinc-950/30 transition-colors duration-500"
            >
              {/* Left Column: Domain Label */}
              <div className="md:col-span-4 flex flex-col gap-1 pr-8">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2 group-hover:text-blue-500/50 transition-colors">
                  Domain / 0{index + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
                  {system.category}
                </h3>
              </div>

              {/* Right Column: Technology Clusters */}
              <div className="md:col-span-8 flex flex-wrap items-center gap-x-4 gap-y-3">
                {system.items.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="text-zinc-400 font-light text-lg md:text-xl hover:text-white transition-colors cursor-default">
                      {tech}
                    </span>
                    {i < system.items.length - 1 && (
                      <span className="text-zinc-800 font-mono text-sm">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Subtle accent border on hover */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                style={{ backgroundColor: system.accent }}
                className="absolute left-0 top-0 bottom-0 w-1 origin-top transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Specification */}
        <div className="mt-32 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
            <span>High Performance Defaults</span>
            <span className="text-zinc-800">|</span>
            <span>Security Minded</span>
          </div>
          <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-right">
            Revision // 2024.Arch.01
          </div>
        </div>
      </div>

      {/* Background Vertical Guidelines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-linear-to-b from-transparent via-zinc-900 to-transparent opacity-30 pointer-events-none" />
    </section>
  );
};
