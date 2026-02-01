import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f2f] via-[#1a0f3a] to-[#0a001f] text-white px-5 md:px-8">
      {/* Subtle hex grid background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(100,100,255,0.12)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight mb-6 md:mb-8">
            CLOUD DATA PROTECTION PLATFORM
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Secure Cloud Storage & Controlled File Sharing Platform
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 block">
              Built for Modern Organizations.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto mb-12 md:mb-16 font-light leading-relaxed"
          >
            Store, protect, and share your data in a scalable cloud environment designed
            <br className="hidden md:block" />
            for control, compliance, and confidence.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(4, 209, 255, 0.4)' }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="
              bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-400 hover:to-blue-500 
              text-white 
              font-semibold 
              px-10 md:px-14 
              py-5 md:py-6 
              rounded-full 
              text-xl md:text-2xl 
              shadow-2xl 
              shadow-cyan-500/30 
              transition-all 
              duration-300 
              border border-cyan-400/40
            "
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Futuristic isometric robots + cloud illustration */}
      <div className="absolute inset-0 pointer-events-none opacity-70 md:opacity-90">
        {/* Central glowing cloud + lock */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 lg:w-[500px] h-64 md:h-96 lg:h-[500px] bg-gradient-to-br from-cyan-500/20 to-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />

        {/* Robots - positioned around the cloud */}
        <motion.div
          className="absolute bottom-10 left-[10%] md:left-[15%] w-32 md:w-48 lg:w-64"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 0.85, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 0.8 }}
        >
          <img 
            src="/hmp6.jpg" 
            alt="Robot pointing at cloud" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-[10%] md:right-[15%] w-40 md:w-56 lg:w-72"
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 0.85, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, delay: 1 }}
        >
          <img 
            src="/assets/hero-robot-2.png" 
            alt="Robot with data screen" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          className="absolute top-20 left-[20%] md:left-[25%] w-28 md:w-44 lg:w-56"
          initial={{ opacity: 0, scale: 0.7, y: -30 }}
          animate={{ opacity: 0.8, scale: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.2 }}
        >
          <img 
            src="/assets/hero-robot-3.png" 
            alt="Robot interacting with cloud" 
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;