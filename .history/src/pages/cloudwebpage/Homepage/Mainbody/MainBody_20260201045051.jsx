import React from 'react';
import { motion } from 'framer-motion';

const MainBody = () => {
  return (
    <>
      {/* Overall wrapper - keeps the gradient and overlay consistent */}
      <div className="relative bg-gradient-to-b from-[#0a1a3f] to-[#071029] text-white overflow-hidden">
        {/* Subtle futuristic particle/glow overlay - shared across sections */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
        </div>

        {/* Section 1: For smaller organizations and private users */}
        <section className="relative py-24 md:py-32 px-6 lg:px-12">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3 }}
                className="flex justify-center lg:justify-end order-2 lg:order-1"
              >
                <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-cyan-900/50">
                  <img
                    src="/hmp4.png"
                    alt="Cloud connecting multiple devices - for smaller organizations"
                    className="
                      w-full h-auto object-contain 
                      rounded-3xl 
                      border border-cyan-500/20 
                      shadow-inner 
                      drop-shadow-[0_30px_80px_rgba(6,182,212,0.45)] 
                      transition-all duration-500 
                      hover:scale-[1.02] hover:brightness-110
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-3xl" />
                </div>
              </motion.div>

              {/* Text + CTA */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-8 text-center lg:text-left order-1 lg:order-2"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  For smaller organizations<br className="hidden lg:block" /> and private users
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-slate-200">
                  No time to manage infrastructure? Cloud Sentrics offers a secure, flexible SaaS solution that gives you full control over your data without the hassle of maintenance. Hosted on AWS infrastructure in the African region, our platform is ready to use immediately.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-slate-200">
                  Keep your data safe, compliant, and accessible anytime, anywhere. Secure, reliable, and ready with just a click.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-10 py-5 rounded-full text-xl shadow-xl shadow-cyan-500/30 transition-all duration-300"
                >
                  Get started
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Control Who Can Access Your Data */}
        <section className="relative py-24 md:py-32 px-6 lg:px-12 border-t border-cyan-900/30">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text + CTA */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-8 text-center lg:text-left"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Control Who Can Access<br className="hidden lg:block" /> Your Data
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-slate-200">
                  Give your team a simple, flexible, and secure way to store and share files. Involve external contacts safely by granting access to select documents and share public links protected with One-Time Passcodes (OTP) and expiration dates.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-slate-200">
                  Say goodbye to slow VPNs, insecure and untracked email attachments, and unsecured public cloud storage. Keep your data controlled, versioned, and protected without compromising collaboration.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-10 py-5 rounded-full text-xl shadow-xl shadow-cyan-500/30 transition-all duration-300"
                >
                  Share Securely
                </motion.button>
              </motion.div>

              {/* Image with revolving light */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3 }}
                className="flex justify-center lg:justify-start relative"
              >
                <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl overflow-hidden rounded-3xl shadow-2xl shadow-cyan-900/50">
                  {/* Revolving light */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-3xl"
                    style={{
                      background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 30deg, #06b6d4 60deg, #06b6d4 90deg, transparent 120deg, transparent 360deg)',
                      animation: 'rotateLight 5s linear infinite',
                      mask: 'radial-gradient(transparent 0%, transparent 45%, black 50%, black 100%)',
                      WebkitMask: 'radial-gradient(transparent 0%, transparent 45%, black 50%, black 100%)',
                    }}
                  />

                  <img
                    src="/hmp5.png"
                    alt="Secure cloud lock with robots and data protection elements"
                    className="
                      w-full h-auto object-contain 
                      rounded-3xl 
                      border border-cyan-500/20 
                      shadow-inner 
                      drop-shadow-[0_30px_80px_rgba(6,182,212,0.45)] 
                      transition-all duration-500 
                      hover:scale-[1.02] hover:brightness-110
                      relative z-10
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: Build Your Future with Cloud Sentrics – aligned to match reference */}
        <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-white text-[#001F3F]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left column: Text + Button + Badges */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
                className="space-y-10 lg:space-y-12 text-center lg:text-left order-2 lg:order-1"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Build Your Future<br className="hidden lg:block" /> with Cloud Sentrics
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto lg:mx-0">
                  Cloud Sentrics provides secure, reliable cloud storage solutions designed to protect your data and simplify collaboration. Our platform ensures your files are safely stored, encrypted, and accessible only to the people you trust — anytime, anywhere. With advanced security protocols and seamless sharing tools, Cloud Sentrics empowers businesses and individuals to work smarter while keeping their digital assets protected.
                </p>

                <div className="mt-8 flex justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.04, boxShadow: '0 10px 30px rgba(0, 31, 63, 0.15)' }}
                    whileTap={{ scale: 0.98 }}
                    className="
              bg-[#001F3F] hover:bg-[#002b55] 
              text-white font-semibold 
              px-10 py-5 rounded-lg 
              text-xl shadow-lg 
              transition-all duration-300
            "
                  >
                    Get started
                  </motion.button>
                </div>

                {/* Compliance badges – forced straight horizontal line */}
                {/* Compliance badges – stretched full width with even spacing */}
<div className="mt-12 md:mt-16">
  <div className="flex justify-between items-start gap-6 md:gap-8 lg:gap-12 w-full max-w-5xl mx-auto">
    {[
      { label: 'GDPR-Ready', full: 'General Data Protection Regulation' },
      { label: 'CCRF-ready', full: 'Cloud Computing Regulatory Framework' },
      { label: 'HIPAA-ready', full: 'Health Insurance Portability and Accountability Act' },
      { label: 'NDPC-Compliant', full: 'Nigeria Data Protection Commission' },
    ].map((item, i) => (
      <div 
        key={i} 
        className="flex flex-col items-center text-center flex-1 min-w-[120px] md:min-w-[160px]"
      >
        <div className="
          w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 
          rounded-full bg-blue-100 
          flex items-center justify-center 
          text-2xl md:text-3xl lg:text-4xl 
          text-blue-700 
          border-2 border-blue-500 
          mb-3 md:mb-4
        ">
          ✓
        </div>
        <span className="font-bold text-base md:text-lg lg:text-xl whitespace-nowrap">
          {item.label}
        </span>
        <span className="text-xs md:text-sm lg:text-base text-gray-500 mt-1 md:mt-2 text-center leading-tight">
          {item.full}
        </span>
      </div>
    ))}
  </div>
</div>
              </motion.div>

              {/* Right column: Illustration – appears "while" badges are shown */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, x: 60 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.2 }}
                className="flex justify-center lg:justify-end order-1 lg:order-2"
              >
                <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <img
                    src="/hmp2.png"
                    alt="Futuristic cloud with connected devices and data flow"
                    className="
              w-full h-auto object-contain 
              drop-shadow-[0_30px_80px_rgba(0,31,63,0.3)] 
              transition-all duration-700 
              hover:scale-[1.03]
            "
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/5 pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Animation keyframes for revolving light */}
      <style jsx global>{`
        @keyframes rotateLight {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default MainBody;