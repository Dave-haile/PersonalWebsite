// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X } from 'lucide-react';
// import { navLinks } from '../constants';

// export const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <a href="#home" className="text-2xl font-display font-bold text-white group">
//           DH<span className="text-blue-500 group-hover:text-pink-500 transition-colors">.</span>
//         </a>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex gap-8 items-center">
//           {navLinks.map(link => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//           <a href="#contact" className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors">
//             Hire Me
//           </a>
//         </div>

//         {/* Mobile Menu Trigger */}
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
//           {isMenuOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="absolute top-full left-0 w-full bg-zinc-900 border-b border-white/5 p-6 md:hidden"
//           >
//             <div className="flex flex-col gap-6">
//               {navLinks.map(link => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-lg font-bold text-white"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { navLinks } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Explicitly type variants to fix cubic-bezier easing inference errors
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${isScrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold text-white group z-110">
          DH<span className="text-blue-500 group-hover:text-pink-500 transition-colors">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="w-px h-4 bg-zinc-800" />

          <a href="#contact" className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/10">
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Actions */}
        <div className="flex items-center gap-2 md:hidden z-110">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-xl text-white bg-black transition-transform active:scale-90"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 w-full h-screen bg-zinc-950 z-105 flex flex-col md:hidden overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="grow flex flex-col justify-center px-10 pt-20">
              <div className="space-y-4">
                <motion.span variants={linkVariants} className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-500 mb-2 block">
                  Menu Navigation
                </motion.span>
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={linkVariants}
                    onClick={() => setIsMenuOpen(false)}
                    className="group flex items-center justify-between text-4xl font-display font-bold text-white border-b border-white/5 py-4"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bottom Menu Panel
            [
                                { icon: <Github className="w-5 h-5" />, href: "https://github.com/Dave-haile", label: "Github", tagret: "_blank" },
                                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dave-haile/", label: "LinkedIn", tagret: "_blank" },
                                { icon: <Mail className="w-5 h-5" />, href: "mailto:dawit.s.haile@gmail.com", label: "Email" }
                            ].
            */}
            <motion.div
              variants={linkVariants}
              className="p-10 bg-zinc-900/50 border-t border-white/5"
            >
              <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a href="https://github.com/Dave-haile" target='_blank' className="p-3 rounded-full bg-zinc-800 border border-white/5 text-zinc-400">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/dave-haile/" target="_blank" className="p-3 rounded-full bg-zinc-800 border border-white/5 text-zinc-400">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:dawit.s.haile@gmail.com" className="p-3 rounded-full bg-zinc-800 border border-white/5 text-zinc-400">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/10"
                  >
                    Hire Me
                  </a>
                </div>
                <p className="text-[10px] text-center font-mono text-zinc-500 uppercase tracking-widest">
                  © 2024 DAWIT HAILE — SYSTEM ARCHITECT
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};