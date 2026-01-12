import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowUp, Mail, Globe } from 'lucide-react';
import { navLinks } from '../constants';

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const midIndex = Math.ceil(navLinks.length / 2)
    const firstNav = navLinks.slice(0, midIndex)
    const lastNav = navLinks.slice(midIndex)

    const service = [
'Frontend Architecture', 'Backend Systems', 'Interactive Design', 'Networking', 'ERPNext Implementation'
    ]

    return (
        <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <a href="#home" className="text-3xl font-display font-bold text-white group inline-block">
                                Dawit Haile<span className="text-blue-500 group-hover:text-pink-500 transition-colors">.</span>
                            </a>
                            <p className="mt-6 text-zinc-500 text-lg font-light leading-relaxed max-w-sm">
                                Designing and engineering scalable web systems with thoughtful interfaces and resilient backend architecture.
                            </p>
                        </motion.div>

                        <div className="flex items-center gap-6">
                            {[
                                { icon: <Github className="w-5 h-5" />, href: "https://github.com/Dave-haile", label: "Github", tagret: "_blank" },
                                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dave-haile/", label: "LinkedIn", tagret: "_blank" },
                                { icon: <Mail className="w-5 h-5" />, href: "mailto:dawit.s.haile@gmail.com", label: "Email" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    aria-label={social.label}
                                    target={social.tagret}
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-blue-500/30 transition-all"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-20">
                        <div className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600 pl-12">Navigation</h4>
                            <div className="flex gap-16">

                                <ul className="space-y-4">
                                    {firstNav.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href} className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {lastNav.map((item, index) => (
                                        <li key={index}>
                                            <a href={item.href} className="text-zinc-400 hover:text-blue-400 text-sm transition-colors">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">Services</h4>
                            <ul className="space-y-4">
                                {service.map((item) => (
                                    <li key={item}>
                                        <span className="text-zinc-400 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-6">
                            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">System Status</h4>
                            <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-4 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Available for work</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-600 text-[10px] font-mono">
                                    <Globe className="w-3 h-3" />
                                    <span>From Addis Ababa Ethiopia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big Signature Background Text */}
                <div className="relative mb-12 select-none pointer-events-none opacity-5">
                    <h2 className="text-[14vw] font-display font-black tracking-tighter text-center leading-none text-white whitespace-nowrap">
                        DAWIT HAILE
                    </h2>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <span>© {currentYear} Dawit Haile</span>
                        <span className="hidden md:inline text-zinc-800">/</span>
                        <span className="hidden md:inline">Built with Passtion & React</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="group flex items-center gap-3 px-5 py-2.5 bg-zinc-900/50 border border-white/5 rounded-full text-zinc-400 hover:text-white hover:border-white/20 transition-all"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest">Back to Top</span>
                            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
