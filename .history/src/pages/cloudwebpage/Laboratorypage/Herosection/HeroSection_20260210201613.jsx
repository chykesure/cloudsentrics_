import React from 'react';
import { motion } from 'framer-motion';

const EducationHero = () => {
  return (
    <section 
      className="
        relative 
        min-h-[80vh] sm:min-h-[90vh] md:min-h-screen 
        flex items-center overflow-hidden 
        bg-[#07154C] 
        text-white
      "
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lab3.png"
          alt="Students collaborating in classroom"
          className="
            w-full h-full 
            object-cover object-center 
            brightness-[1.65] 
            contrast-[0.82] 
            saturate-[1.85]
          "
        />
        
        {/* Darker-to-lighter gradient using #07154C family */}
        <div 
          className="
            absolute inset-0 
            bg-gradient-to-t 
            from-[#07154C]/75 
            via-[#07154C]/35 
            to-[#07154C]/10
          " 
        />
        
        {/* Subtle blue tint layer – keeps mood consistent */}
        <div 
          className="
            absolute inset-0 
            bg-[#07154C]/15 
            mix-blend-multiply
          " 
        />
      </div>

      {/* Main content container */}
      <div 
        className="
          relative z-10 
          w-full max-w-7xl 
          mx-auto 
          px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 
          py-16 sm:py-20 md:py-24 lg:py-28
        "
      >
        <div 
          className="
            max-w-xl sm:max-w-2xl lg:max-w-3xl 
            text-left 
            pr-4 sm:pr-8 lg:pr-12 xl:pr-16
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 
              font-extrabold 
              tracking-tight 
              leading-tight 
              mb-6 md:mb-8
            "
          >
            <span className="block text-cyan-400">
              Empower Your Laboratory with
            </span>
            <span className="block text-cyan-400">
              Secure Data Protection Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="
              text-base sm:text-lg md:text-xl lg:text-2xl 
              text-slate-100/90 
              font-light 
              leading-relaxed 
              mb-10 md:mb-14
            "
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
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center justify-center
                bg-transparent
                text-cyan-300 font-semibold
                px-8 sm:px-10 md:px-12 
                py-4 sm:py-5
                rounded-xl text-lg sm:text-xl
                border-2 border-cyan-400/70
                hover:border-cyan-300 hover:text-cyan-200
                hover:bg-cyan-950/20
                transition-all duration-300
                shadow-lg shadow-[#07154C]/40
                backdrop-blur-sm
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