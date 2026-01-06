import React from 'react';
import { motion } from 'framer-motion';
import DistortionImage from '../components/DistortionImage';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative group">
              <DistortionImage
                image1="/L38B7101.JPG"
                image2="/L38B7104.JPG"
                displacement="https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg"
                intensity={0.08}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-8 left-8 pointer-events-none">
                <p className="text-white font-display text-2xl font-bold">Dawit Haile</p>
                <p className="text-blue-400">Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
              Elevating Digital <br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a passionate Full Stack Web Developer with a knack for turning complex problems into elegant, user-centric solutions. With a deep understanding of both front-end aesthetics and back-end robustness, I build applications that are not only functional but visually captivating.
              </p>
              <p>
                My approach combines technical precision with creative flair. Whether it's architecting a scalable API or crafting a fluid motion UI, I strive for excellence in every pixel and every line of code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-3xl font-bold text-white font-display">5+</p>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-display">50+</p>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-display">20+</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white font-display">99%</p>
                <p className="text-gray-500 text-sm">Code Quality</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
