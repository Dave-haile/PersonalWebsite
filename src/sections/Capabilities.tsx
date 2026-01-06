import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Server,
  Layers,
  Zap,
  Database,
  Settings,
  CheckCircle2
} from 'lucide-react';

const CAPABILITY_GROUPS = [
  {
    title: 'Frontend Engineering',
    focus: 'User experience, performance, and maintainability',
    icon: Monitor,
    items: [
      'Building responsive, accessible interfaces',
      'Component-driven architecture with React',
      'Type-safe development using TypeScript',
      'TailwindCSS for scalable design systems',
      'Clean UI logic and predictable state handling'
    ],
    accent: 'from-blue-500/10'
  },
  {
    title: 'Backend & API Development',
    focus: 'Business logic and data integrity',
    icon: Server,
    items: [
      'Designing RESTful APIs with Laravel',
      'Authentication and authorization flows',
      'Role-based access control (RBAC)',
      'Validation, error handling, and data flow',
      'Structuring logic for long-term maintainability'
    ],
    accent: 'from-purple-500/10'
  },
  {
    title: 'System Architecture',
    focus: 'Designing systems that scale beyond MVPs',
    icon: Layers,
    items: [
      'Separating frontend, backend, and data layers',
      'Integrating React with Laravel via Inertia.js',
      'Designing admin-controlled content systems',
      'Planning for scalability in large platforms'
    ],
    accent: 'from-pink-500/10'
  },
  {
    title: 'Realtime & Interactive Systems',
    focus: 'Live user interaction',
    icon: Zap,
    items: [
      'Real-time communication using Socket.IO',
      'Live status updates and notifications',
      'Interactive dashboards and data sync',
      'Synchronizing frontend state with backend events'
    ],
    accent: 'from-yellow-500/10'
  },
  {
    title: 'Database & Data Modeling',
    focus: 'Reliable data structures',
    icon: Database,
    items: [
      'PostgreSQL schema design',
      'Relational data modeling',
      'Data consistency and constraints',
      'Query optimization for growing systems'
    ],
    accent: 'from-emerald-500/10'
  },
  {
    title: 'Admin & Content Management',
    focus: 'Control and flexibility for organizations',
    icon: Settings,
    items: [
      'Custom admin dashboards',
      'Full control over frontend content',
      'Managing tenants, users, and roles',
      'Supporting non-technical administrators'
    ],
    accent: 'from-cyan-500/10'
  },
  {
    title: 'Project Ownership & Delivery',
    focus: 'End-to-end responsibility',
    icon: CheckCircle2,
    items: [
      'Translating requirements into working systems',
      'Iterative improvement and UI refinement',
      'Versioned development mindset',
      'Clear documentation and structure'
    ],
    accent: 'from-orange-500/10'
  }
];

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-zinc-600 block mb-6"
          >
            Core Competencies
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            Engineering <br />
            <span className="text-zinc-500 italic">Capabilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            What I can design, build, and maintain in production environments. I bridge the gap between complex engineering requirements and intuitive product delivery.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITY_GROUPS.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="h-full p-8 rounded-[2.5rem] bg-zinc-900/10 backdrop-blur-xl border border-white/3 hover:border-white/8 hover:bg-zinc-900/20 transition-all duration-500 overflow-hidden flex flex-col shadow-2xl">

                {/* Subtle Gradient Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${group.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                      <group.icon className="w-6 h-6" />
                    </div>
                    <div className="text-[9px] font-mono text-zinc-700 uppercase tracking-tighter pt-1">
                      CPBL_NODE_0{index + 1}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                      {group.focus}
                    </p>
                  </div>

                  <ul className="space-y-3 mt-auto">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
                        <div className="w-1 h-1 rounded-full bg-blue-500/40 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/1 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}

          {/* Engineering Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2.5rem] border border-dashed border-white/5 flex flex-col items-center justify-center text-center group bg-zinc-900/5"
          >
            <p className="text-zinc-600 text-sm italic mb-4 max-w-[200px]">
              "Building for the future requires understanding the present complexity."
            </p>
            <div className="h-px w-12 bg-zinc-800 mb-4" />
            <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.4em]">
              Architectural Mindset
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
