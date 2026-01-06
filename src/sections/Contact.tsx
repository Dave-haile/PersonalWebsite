
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 bg-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.6em] font-bold text-zinc-600 block mb-6"
          >
            Connection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            Get in <span className="text-zinc-500 italic">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed"
          >
            Let's build something meaningful together.
          </motion.p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-24">
          <motion.a
            href="mailto:dawit.haile@dev.io"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
              <Mail className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">Email</p>
              <p className="text-white font-medium group-hover:text-blue-400 transition-colors">dawit.haile@dev.io</p>
            </div>
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
              <Linkedin className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">LinkedIn</p>
              <p className="text-white font-medium group-hover:text-blue-400 transition-colors">Dawit Haile</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
              <Github className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">GitHub</p>
              <p className="text-white font-medium group-hover:text-blue-400 transition-colors">dawit-dev</p>
            </div>
          </motion.a>
        </div>

        {/* Minimal Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <form
            className="space-y-6 bg-zinc-900/10 backdrop-blur-sm border border-white/3 p-10 md:p-14 rounded-[3rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/30 transition-all placeholder:text-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/30 transition-all placeholder:text-zinc-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-600 ml-1">Message</label>
              <textarea
                rows={4}
                placeholder="How can I help?"
                className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/30 transition-all placeholder:text-zinc-800 resize-none"
              />
            </div>
            <button className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
