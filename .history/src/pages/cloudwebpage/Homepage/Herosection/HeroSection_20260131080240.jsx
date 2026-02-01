import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e1f] text-white">
      {/* Background glow + subtle grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,211,238,0.08)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {/* Top label */}
          <p className="text-sm md:text-base lg:text-lg font-medium tracking-[0.25em] text-cyan-400/90 uppercase mb-6">
            CLOUD DATA PROTECTION PLATFORM
          </p>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">
            Secure Cloud Storage &<br className="hidden sm:block" />
            Controlled File Sharing Platform
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Built for Modern Organizations.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-300/90 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Store, protect, and share your data in a scalable cloud environment designed<br className="hidden md:block" />
            for control, compliance, and confidence.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:from-cyan-400 hover:to-blue-500
              text-white font-semibold
              px-10 md:px-14 py-5 rounded-full
              text-lg md:text-xl shadow-2xl shadow-cyan-500/30
              border border-cyan-400/30
              transition-all duration-300
              hover:scale-[1.03] hover:shadow-cyan-500/50
            "
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Isometric robots + central cloud illustration */}
      <div className="absolute inset-0 pointer-events-none opacity-90 md:opacity-100">
        {/* Central glowing cloud with lock */}
        <motion.div
          className="absolute top-[35%] left-1/2 -translate-x-1/2 w-64 md:w-96 lg:w-[480px]"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
            <img
              src="/hmp6.jpg"
              alt="Futuristic cloud with lock and robots"
              className="w-full h-auto drop-shadow-[0_35px_80px_rgba(6,182,212,0.35)]"
            />
          </div>
        </motion.div>

        {/* Robots positioned around the central cloud */}
        <motion.div
          className="absolute bottom-[15%] left-[8%] md:left-[12%] w-32 md:w-48 lg:w-64"
          initial={{ opacity: 0, x: -60, rotate: -8 }}
          animate={{ opacity: 0.95, x: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 0.9 }}
        >
          <img src="/assets/robot-left.png" alt="Robot 1" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-[18%] right-[8%] md:right-[12%] w-36 md:w-52 lg:w-68"
          initial={{ opacity: 0, x: 60, rotate: 8 }}
          animate={{ opacity: 0.95, x: 0, rotate: 0 }}
          transition={{ duration: 1.3, delay: 1.1 }}
        >
          <img src="/assets/robot-right.png" alt="Robot 2" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>

        <motion.div
          className="absolute top-[22%] left-[18%] md:left-[22%] w-28 md:w-44 lg:w-56"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 0.9, y: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
        >
          <img src="/assets/robot-top.png" alt="Robot 3" className="w-full h-auto drop-shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;