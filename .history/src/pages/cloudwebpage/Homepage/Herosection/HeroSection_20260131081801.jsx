import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
      {/* Hero Section – main visual banner (keeps dark theme) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hmp6.jpg"
            alt="Futuristic cloud data protection illustration"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-slate-950/40" />
          {/* Subtle cyan tint */}
          <div className="absolute inset-0 bg-cyan-950/10 mix-blend-multiply" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <p className="text-base md:text-lg lg:text-xl font-medium tracking-widest text-cyan-400/90 uppercase mb-5 md:mb-6">
              CLOUD DATA PROTECTION PLATFORM
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-8 md:mb-12">
              Secure Cloud Storage &<br className="hidden sm:block" />
              Controlled File Sharing Platform
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Built for Modern Organizations.
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-slate-200/90 max-w-4xl mx-auto mb-10 md:mb-14 leading-relaxed font-light">
              Store, protect, and share your data in a scalable cloud environment designed<br className="hidden md:block" />
              for control, compliance, and confidence.
            </p>

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

      {/* New Section: About Cloud Sentrics – WHITE BACKGROUND as requested */}
      <section className="relative bg-white text-slate-900 py-20 md:py-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-center"
            style={{
              fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '20px',
              lineHeight: '30px',
              letterSpacing: '0%',
            }}
          >
            <p className="mb-8 leading-[30px]">
              Cloud Sentrics is a secure storage and controlled file-sharing platform built for organizations that handle sensitive information.
            </p>

            <p className="mb-8 leading-[30px]">
              We help businesses store, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core.
            </p>

            <p className="mb-8 leading-[30px]">
              Organizations use Cloud Sentrics to protect documents such as student records, medical results, examination reports, contracts, and confidential files without relying on unsecured email attachments, shared drives, or local servers.
            </p>

            <p className="mb-8 leading-[30px]">
              Our platform works alongside existing systems, provides a dedicated layer for secure storage and controlled delivery. Every access is intentional, time-bound, and auditable giving organizations confidence that sensitive information reaches only the right recipients, at the right time.
            </p>

            <p className="leading-[30px]">
              Cloud Sentrics is designed for modern organizations that value data protection, operational discipline, and trust.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;