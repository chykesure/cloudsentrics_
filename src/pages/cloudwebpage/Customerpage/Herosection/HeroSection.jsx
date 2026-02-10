import React from 'react';
import { motion } from 'framer-motion';

const EducationHero = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-slate-950 text-white">
      {/* Background + stronger overlay for readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/news10.png"
          alt="Students collaborating in classroom"
          className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.78] saturate-[0.92]"
        />
      </div>

      {/* Content – NOW PERFECTLY CENTERED */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">   {/* ← centered container */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter leading-none"
          >
            <span className="block text-cyan-400">
              Our Customers
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;