import React from 'react';
import { motion } from 'framer-motion';

const PricingHero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/price.png"
          alt="Hexagonal tech pattern background"
          className="w-full h-full object-cover object-center opacity-105 brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-slate-950/5" />
        <div className="absolute inset-0 bg-cyan-950/10 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 md:mb-12">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-200/95 max-w-4xl mx-auto leading-relaxed font-light mb-12 md:mb-16"
          >
            Cloud Sentrics offers transparent pricing for secure cloud storage and controlled file sharing, designed for organizations that handle sensitive information.
            <br className="hidden md:block" />
            Our platform is securely hosted on AWS in the South Africa region and built to support strong access controls, auditability, and compliance requirements.
            Choose a plan that fits your organization’s storage needs while maintaining security, accountability, and operational clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:from-cyan-400 hover:to-blue-500
                text-white font-semibold
                px-10 py-5 rounded-full
                text-lg md:text-xl
                shadow-xl shadow-cyan-500/30
                border border-cyan-400/20
                transition-all duration-300
              "
            >
              View Plans
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/get"
              className="
                bg-transparent
                hover:bg-white/10
                text-cyan-300 font-medium
                px-10 py-5 rounded-full
                text-lg md:text-xl
                border border-cyan-500/40
                transition-all duration-300
              "
            >
              Contact Sales
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;