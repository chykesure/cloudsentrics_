import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      {/* Background Illustration (replace with your Figma export) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute bottom-0 right-0 w-full md:w-3/4 h-full bg-contain bg-no-repeat bg-right-bottom"
          style={{ backgroundImage: "url('/assets/hero-astronaut-cloud.png')" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6"
        >
          Secure Cloud Storage &<br />
          Controlled File Sharing Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-10 max-w-4xl mx-auto font-light"
        >
          Built for Modern Organizations.<br className="hidden md:block" />
          Store, protect, and share your data in a scalable cloud environment designed for control, compliance, and confidence.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-xl font-semibold shadow-2xl transition"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;