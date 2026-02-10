import React from 'react';
import { motion } from 'framer-motion';

const EducationHero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background + stronger overlay for readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/edu1.png"
          alt="Students collaborating in classroom"
          className="w-full h-full object-cover object-center brightness-[1.78] contrast-[1.08] saturate-[0.92]"
        />
        {/* Darker vignette + blue tint to match reference mood */}
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

      {/* Content – left-aligned, no card/frame */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl text-left ml-0 md:ml-0 lg:ml-2 xl:ml-4 pr-6 sm:pr-10 lg:pr-16 xl:pr-2">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight mb-6 md:mb-8"
          >
            <span className="block text-cyan-400">
              Secure Cloud Storage
            </span>
            <span className="block text-cyan-400">
              &amp; File Sharing for
            </span>
            <span className="block bg-gradient-to-r from-cyan-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-100/92 font-light leading-relaxed mb-10 md:mb-14"
          >
            Cloud Sentrics for Education empowers schools, universities, and learning
            institutions to create secure, flexible, and collaborative digital environments.
            Store, share, and manage learning materials, student records, and
            administrative documents all with complete control and compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.9 }}
          >
            <motion.a
              href="/get-started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="
          inline-flex items-center justify-center
          bg-transparent
          text-cyan-300 font-semibold
          px-8 sm:px-10 py-4 sm:py-5
          rounded-lg text-lg sm:text-xl
          border-2 border-cyan-400/60
          hover:border-cyan-300 hover:text-cyan-200
          transition-all duration-300
          shadow-md shadow-cyan-950/40
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