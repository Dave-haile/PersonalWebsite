
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { EXPLORING } from '../constants';

export const Exploring: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="exploring" className="py-32 bg-black relative border-t border-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Sticky Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Column: Context - Made Sticky */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-6 flex items-center gap-4"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-zinc-500">
                    Currently Exploring
                  </span>
                  <div className="h-px w-12 bg-zinc-800" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tighter text-white"
                >
                  The Continuous <br />
                  <span className="text-zinc-500 italic">Engineering Loop</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-zinc-500 text-lg font-light leading-relaxed max-w-md"
                >
                  This section represents my current roadmap for engineering growth.
                  I am actively experimenting with these technologies to broaden my
                  architectural perspective and system design capabilities.
                </motion.p>
              </div>
            </div>

            {/* Right Column: Exploring Items */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-12"
            >
              {EXPLORING.map((category) => (
                <motion.div key={category.category} variants={itemVariants} className="group">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-500/60">
                      {category.category}
                    </span>
                    <div className="h-px grow bg-zinc-900" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {category.items.map((item) => (
                      <div key={item.name} className="relative group/item">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-white font-display font-bold text-lg group-hover/item:text-blue-400 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-600 font-bold uppercase tracking-widest">
                            Learning
                          </span>
                        </div>
                        <p className="text-zinc-500 text-sm font-light leading-relaxed border-l border-zinc-900 pl-4 group-hover/item:border-blue-500/30 transition-all">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-8">
                <div className="p-6 rounded-2xl bg-zinc-950/50 border border-dashed border-zinc-800 flex items-center justify-between group/status">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-zinc-500 text-xs font-medium tracking-wide">Currently focusing on high-performance concurrency in Go.</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-zinc-700">Live Status</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
