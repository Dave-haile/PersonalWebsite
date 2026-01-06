
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
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Systems",
    subtitle: "Interfaces & interaction",
    description:
      "Designing and building responsive, accessible interfaces with a strong focus on component architecture, motion, and user experience.",
    skills: [
      "React (TypeScript)",
      "Tailwind CSS",
      "Framer Motion / GSAP",
      "Component Architecture",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Data",
    subtitle: "Logic & reliability",
    description:
      "Building secure and scalable backend systems, designing APIs, handling authentication, and modeling data to support real-world applications.",
    skills: [
      "Laravel / Node.js",
      "REST APIs",
      "Authentication",
      "PostgreSQL / MySQL",
      "Data Modeling",
    ],
  },
  {
    title: "Real-Time & Interaction",
    subtitle: "Motion, particles, live systems",
    description:
      "Exploring advanced interactions through real-time communication, animations, and experimental visual systems.",
    skills: [
      "Socket.io",
      "Web Animations",
      "Particles & Effects",
      "Three.js (basic)",
      "Real-time Updates",
    ],
  },
  {
    title: "Engineering Mindset",
    subtitle: "How I approach problems",
    description:
      "Thinking in systems, writing maintainable code, debugging under pressure, and continuously learning through experimentation.",
    skills: [
      "System Thinking",
      "Clean Architecture",
      "Performance Awareness",
      "Problem Solving",
      "Continuous Learning",
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative py-32 px-6 md:px-16 bg-background">
      {/* Section label */}
      <span className="block text-xs uppercase tracking-[0.3em] text-foreground/40 mb-6">
        Skills
      </span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-display font-bold mb-6"
      >
        Current Capabilities
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-2xl text-lg text-muted-foreground mb-16"
      >
        A snapshot of the systems I design and the tools I use to build
        reliable, interactive, and scalable web applications.
      </motion.p>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
          >
            {/* subtle background accent */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/[0.03] to-transparent pointer-events-none" />

            <h3 className="text-2xl font-display font-semibold mb-2">
              {group.title}
            </h3>
            <p className="text-primary/70 mb-4">{group.subtitle}</p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {group.description}
            </p>

            <ul className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-foreground/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
