import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background image layer – main visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hmp6.jpg"
          alt="Futuristic cloud data protection illustration"
          className="w-full h-full object-cover object-center opacity-85"
        />
        {/* Dark overlay to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/50 to-transparent" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1050px] mx-auto px-6 md:px-10 lg:px-0">
        <div 
          className="relative"
          style={{
            marginTop: '247px',           // top: 247px
            marginLeft: '195px',          // left: 195px
            width: '100%',
            maxWidth: '1050px',
          }}
        >
          {/* Main headline stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-[23px]" // gap: 23px
          >
            {/* Small top label */}
            <p className="text-base md:text-lg lg:text-xl font-medium tracking-widest text-cyan-400 uppercase">
              CLOUD DATA PROTECTION PLATFORM
            </p>

            {/* Main title – reduced size, better hierarchy */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Secure Cloud Storage &<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Controlled File Sharing Platform
              </span>
            </h1>

            {/* Subtitle – clear but not overwhelming */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200/90 font-light max-w-3xl">
              Built for Modern Organizations.
            </p>

            {/* Description paragraph */}
            <p className="text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed">
              Store, protect, and share your data in a scalable cloud environment designed for control, compliance, and confidence.
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8"
            >
              <button
                className="
                  bg-gradient-to-r from-cyan-500 to-blue-600
                  hover:from-cyan-400 hover:to-blue-500
                  text-white font-semibold
                  px-9 py-4 rounded-full
                  text-lg shadow-xl shadow-cyan-500/30
                  hover:shadow-cyan-500/50
                  transition-all duration-300
                  border border-cyan-400/30
                  hover:scale-[1.03]
                "
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;