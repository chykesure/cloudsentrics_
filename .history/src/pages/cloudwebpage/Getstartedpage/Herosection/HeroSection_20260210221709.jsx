import React from 'react';
import { motion } from 'framer-motion';

const EducationHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/news10.png"
          alt="Futuristic cloud data protection illustration"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8 md:mb-12">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Get started with CloudSentrics
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-200/90 max-w-4xl mx-auto mb-10 md:mb-14 leading-relaxed font-light">
            We look forward to hearing from you! Just leave us a message and <br className="hidden md:block" />
            we will get back to you as soon as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationHero;