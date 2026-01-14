import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Activity, Database, ShieldCheck } from 'lucide-react';

const LAYERS = [
  {
    id: 'layer-01',
    title: 'Frontend Layer',
    tech: 'React / TypeScript / Tailwind',
    description: 'Interfaces built with a strong focus on clarity, performance, and maintainability. I prioritize clean component boundaries, predictable state, and UI that remains understandable as the system grows.',
    icon: Layout
  },
  {
    id: 'layer-02',
    title: 'Application Layer',
    tech: 'Laravel / Node / Python / REST / Inertia.js / Axios',
    description: 'The core business logic layer that connects the frontend to the data. I structure controllers, services, and APIs to remain readable, testable, and easy to extend as requirements evolve.',
    icon: Cpu
  },
  {
    id: 'layer-03',
    title: 'Real-time & Interaction',
    tech: 'WebSockets / Socket.io',
    description: 'Real-time communication for features that require immediate feedback — such as status changes, notifications, and live system updates — without overcomplicating the overall architecture.',
    icon: Activity
  },
  {
    id: 'layer-04',
    title: 'Data Layer',
    tech: 'PostgreSQL /MySQL / SQLServer / Complex Schemas / ',
    description: 'Relational data models designed for consistency, clarity, and access control. I focus on correct relationships, constraints, and queries that remain reliable as data volume increases.',
    icon: Database
  },
  {
    id: 'layer-05',
    title: 'Administration Layer',
    tech: 'Custom Admin Dashboards',
    description: 'Custom-built administrative tools that give organizations full control over content, users, and permissions — without relying on third-party CMS platforms.',
    icon: ShieldCheck
  }
];

const PROOFS = [
  {
    title: 'Dembel City Center',
    category: 'Mall Management Platform',
    meta: 'Built with Laravel + React + Inertia.js',
    description: 'A large-scale commercial platform built for a major shopping mall with over 600 tenants. The system centralizes tenant information, event announcements, vacancy listings, and site content, all managed through a custom admin interface designed for non-technical staff.',
    highlights: ['600+ Tenant Database', 'Dynamic Vacancy System', 'Centralized Content Control']
  },
  {
    title: 'University Clearance System',
    category: 'Institutional Digital Workflow',
    meta: 'React (TS) + Laravel + PostgreSQL',
    description: 'A digital replacement for a manual, paper-based university clearance process. The system coordinates approvals across multiple departments using role-based access control, creating a clear audit trail and significantly reducing processing time.',
    highlights: ['Multi-department Approvals', 'RBAC Security', 'Automated Audit Trails']
  }
];

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-32 bg-black relative">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-4xl mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-zinc-600 block mb-6"
          >
            Engineering Methodology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            How I Build <br />
            <span className="text-zinc-500 italic">Production System</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            {/* From backend architecture to user-focused interfaces, I design systems that scale in real environments, ensuring long-term resilience and operational efficiency. */}
            I design and build systems the way they are actually used in the real world — with clear separation of concerns, predictable data flow, and long-term maintainability in mind. Every layer exists for a reason, and every decision is made to support growth, change, and real users.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Left Column: Vertical Architecture Flow */}
          <div className="lg:col-span-5 relative">
            <div className="absolute left-[23px] top-8 bottom-8 w-px bg-linear-to-b from-blue-500/50 via-zinc-800 to-transparent" />

            <div className="space-y-16">
              {LAYERS.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16 group"
                >
                  {/* Icon Node */}
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center z-10 group-hover:border-blue-500/50 transition-colors">
                    <layer.icon className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{layer.title}</h4>
                    <p className="text-blue-400/60 text-[10px] font-bold uppercase tracking-widest mb-3">{layer.tech}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                      {layer.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Project Proof Cards */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-8 lg:sticky lg:top-32">
              <div className="mb-4">
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                  System Proofs
                </p>
              </div>

              {PROOFS.map((proof, index) => (
                <motion.div
                  key={proof.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-10 rounded-[2.5rem] bg-zinc-900/10 backdrop-blur-xl border border-white/3 hover:border-white/8 transition-all duration-500 group"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-white mb-2">{proof.title}</h3>
                      <p className="text-emerald-400/70 text-xs font-bold uppercase tracking-widest">{proof.category}</p>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-white/3 border border-white/5 text-[10px] font-mono text-zinc-500">
                      {proof.meta}
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {proof.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {proof.highlights.map(h => (
                      <span key={h} className="text-[10px] font-bold text-zinc-600 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-zinc-700" />
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-8 rounded-4xl border border-dashed border-white/5 flex items-center justify-center group cursor-pointer hover:bg-white/2 transition-colors"
              >
                <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                Explore Architecture & Implementation Details
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-linear-to-l from-blue-500/2 to-transparent pointer-events-none" />
    </section>
  );
};
