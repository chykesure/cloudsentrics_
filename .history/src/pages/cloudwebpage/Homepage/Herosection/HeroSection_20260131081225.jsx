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
        {/* Strong dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-slate-950/40" />
        {/* Subtle cyan tint for brand feel */}
        <div className="absolute inset-0 bg-cyan-950/10 mix-blend-multiply" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {/* Top label */}
          <p className="text-base md:text-lg lg:text-xl font-medium tracking-widest text-cyan-400/90 uppercase mb-6 md:mb-8">
            CLOUD DATA PROTECTION PLATFORM
          </p>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8 md:mb-12">
            Secure Cloud Storage &<br className="hidden sm:block" />
            Controlled File Sharing Platform
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Built for Modern Organizations.
            </span>
          </h1>

          {/* Description – with your exact typography */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12 md:mb-16 leading-[30px] text-[20px] font-normal text-center"
            style={{
              fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              letterSpacing: '0%',
              color: '#d1d5db', // slate-300 for good contrast
            }}
          >
            Cloud Sentrics is a secure storage and controlled file-sharing platform built for organizations that handle sensitive information.
            <br className="hidden md:block my-4" />
            We help businesses store, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core.
            <br className="hidden md:block my-4" />
            Organizations use Cloud Sentrics to protect documents such as student records, medical results, examination reports, contracts, and confidential files without relying on unsecured email attachments, shared drives, or local servers.
            <br className="hidden md:block my-4" />
            Our platform works alongside existing systems, provides a dedicated layer for secure storage and controlled delivery. Every access is intentional, time-bound, and auditable giving organizations confidence that sensitive information reaches only the right recipients, at the right time.
            <br className="hidden md:block my-4" />
            Cloud Sentrics is designed for modern organizations that value data protection, operational discipline, and trust.
          </motion.p>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
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