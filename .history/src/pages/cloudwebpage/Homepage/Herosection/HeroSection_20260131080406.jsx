import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background image – hmp6.jpg only */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hmp6.jpg"
          alt="Futuristic cloud data protection illustration"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay gradient to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/60 to-slate-950/30" />
        {/* Optional subtle blue tint overlay */}
        <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Small top label */}
          <p className="text-sm md:text-base lg:text-lg font-medium tracking-widest text-cyan-400/90 uppercase mb-5 md:mb-6">
            CLOUD DATA PROTECTION PLATFORM
          </p>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 md:mb-10">
            Secure Cloud Storage &<br className="hidden sm:block" />
            Controlled File Sharing Platform
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Built for Modern Organizations.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-200/90 max-w-4xl mx-auto mb-10 md:mb-14 leading-relaxed font-light">
            Store, protect, and share your data in a scalable cloud environment designed<br className="hidden md:block" />
            for control, compliance, and confidence.
          </p>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:from-cyan-400 hover:to-blue-500
              text-white font-semibold
              px-10 md:px-16 py-5 md:py-6 rounded-full
              text-lg md:text-xl
              shadow-2xl shadow-cyan-500/30
              border border-cyan-400/30
              transition-all duration-300
              hover:shadow-cyan-500/60 hover:scale-[1.03]
            "
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;