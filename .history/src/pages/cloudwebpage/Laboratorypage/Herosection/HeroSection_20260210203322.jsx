import React from 'react';
import { motion } from 'framer-motion';

const EducationHero = () => {
  return (
    <section
      className="
        relative 
        min-h-[80vh] sm:min-h-[90vh] md:min-h-screen 
        flex items-center justify-center overflow-hidden 
        text-white
        bg-gradient-to-b from-[#001229] via-[#000c1f] to-[#000814]
      "
    >
      {/* Background image with subtle treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hos4.png"
          alt="Laboratory professionals working with data and equipment"
          className="
            w-full h-full 
            object-cover object-center 
            brightness-[0.75] 
            contrast-[1.15] 
            saturate-[1.4] 
            opacity-60
          "
        />

        {/* Optional subtle blue tint overlay – uncomment if you want stronger mood */}
        {/* <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" /> */}

        {/* Very soft vignette for focus on content */}
        <div
          className="
            absolute inset-0 
            bg-gradient-to-b 
            from-transparent 
            via-transparent 
            to-black/40
          "
        />
      </div>

      {/* Content – centered or left-aligned depending on screen size */}
      <div
        className="
          relative z-10 
          w-full max-w-7xl 
          mx-auto 
          px-5 sm:px-8 md:px-10 lg:px-12 
          py-16 sm:py-20 md:py-24 lg:py-32
        "
      >
        <div className="max-w-3xl text-left md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-extrabold 
              tracking-tight 
              leading-tight 
              mb-6 md:mb-10
            "
          >
            <span className="block text-cyan-300 drop-shadow-md">
              Empower Your Laboratory with
            </span>
            <span className="block text-cyan-300 drop-shadow-md">
              Secure Data Protection Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="
              text-lg sm:text-xl md:text-2xl 
              text-slate-200/90 
              font-light 
              leading-relaxed 
              max-w-3xl 
              mb-10 md:mb-14
            "
          >
            Laboratories and diagnostic centres are at the forefront of healthcare innovation, handling highly sensitive data such as test results, imaging data, and patient records. Cloud Sentrics helps labs securely store, manage, and share this information, ensuring compliance with data protection regulations while streamlining collaboration among staff and researchers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            <motion.a
              href="#book-demo"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex items-center justify-center 
                px-8 sm:px-12 py-4 sm:py-5 
                text-lg sm:text-xl font-semibold 
                text-cyan-200 
                bg-gradient-to-r from-cyan-600/20 to-blue-800/20 
                border border-cyan-500/40 
                rounded-xl 
                hover:border-cyan-400 hover:text-white 
                hover:bg-gradient-to-r hover:from-cyan-600/40 hover:to-blue-700/40 
                transition-all duration-300 
                shadow-lg shadow-cyan-950/50 
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