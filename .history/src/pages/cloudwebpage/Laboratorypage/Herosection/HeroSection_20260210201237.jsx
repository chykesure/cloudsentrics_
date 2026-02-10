import React from 'react';
import { motion } from 'framer-motion';

const EducationHero = () => {
  return (
    <section
      className="
        relative 
        min-h-[100dvh]              // better mobile support than min-h-screen
        md:min-h-screen
        flex items-center 
        overflow-hidden 
        bg-slate-950 
        text-white
        mt-0 
        pt-0
      "
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lab3.png"
          alt="Students collaborating in classroom"
          className="
            absolute 
            inset-0 
            w-full 
            h-full 
            object-cover 
            object-center 
            brightness-[1.78] 
            contrast-[0.78] 
            saturate-[1.92]
          "
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-slate-950/10" />
        <div className="absolute inset-0 bg-cyan-950/15 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 md:mb-10"
          >
            <span className="block text-cyan-400">Empower Your Laboratory with</span>
            <span className="block text-cyan-400">Secure Data Protection Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-100/90 font-light leading-relaxed mb-10 md:mb-14"
          >
            Laboratories and diagnostic centres are at the forefront of healthcare innovation, handling highly sensitive data such as test results, imaging data, and patient records. Cloud Sentrics helps labs securely store, manage, and share this information, ensuring compliance with data protection regulations while streamlining collaboration among staff and researchers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            <motion.a
              href="#book-demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex items-center justify-center
                bg-transparent
                text-cyan-300 font-semibold
                px-8 sm:px-12 py-4 sm:py-5
                rounded-lg text-lg sm:text-xl
                border-2 border-cyan-400/70
                hover:border-cyan-300 hover:text-cyan-200
                transition-all duration-300
                shadow-lg shadow-cyan-950/30
              "
            >
              Book a Demo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;