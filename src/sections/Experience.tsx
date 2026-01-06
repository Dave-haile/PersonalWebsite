
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-blue-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-zinc-500">
              Engineering History
            </span>
            <div className="h-px w-12 bg-zinc-800" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter"
          >
            Systems I've <br />
            <span className="text-zinc-500 italic">Owned & Engineered</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            A history of building scalable solutions for commercial and academic sectors,
            focusing on digitizing complexity and optimizing workflows.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12 md:pl-24 pb-20 last:pb-0"
            >
              {/* Vertical Timeline Track */}
              <div className="absolute left-[3px] md:left-[11px] top-0 w-px h-full bg-zinc-900 group" />

              {/* Subtle Marker */}
              <div className="absolute left-[-4px] md:left-[4px] top-3 w-4 h-4 rounded-full border border-zinc-800 bg-black flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-1.5 h-1.5 rounded-full bg-blue-500"
                />
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 block mb-2">
                      {exp.context}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="text-sm font-mono text-zinc-500 bg-zinc-900/50 px-4 py-1.5 rounded-full border border-white/5 inline-block w-max">
                    {exp.period}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                  <div className="lg:col-span-7">
                    <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                      {exp.description}
                    </p>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((res, i) => (
                        <li key={i} className="flex gap-4 items-start text-zinc-500 text-sm leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-800 shrink-0" />
                          {res}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                      <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-6">
                        System Architecture
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                          <span key={t} className="px-4 py-2 bg-black border border-zinc-800 text-[10px] uppercase tracking-wider text-zinc-400 rounded-lg">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
