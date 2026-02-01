import React from 'react';
import { motion } from 'framer-motion';

const MainBody = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-12 overflow-hidden bg-gradient-to-b from-[#0a1a3f] to-[#071029] text-white">
      {/* Subtle futuristic particle/glow overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20 md:space-y-32">
        {/* Existing First block */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="flex justify-center lg:justify-end"
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
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

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-12 lg:my-20" />

        {/* Existing Second block with revolving light */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

        {/* === NEW SECTION ADDED: Build Your Future with Cloud Sentrics === */}
        <div className="pt-16 md:pt-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text + Button + Badges */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-10 text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build Your Future<br className="hidden lg:block" /> with Cloud Sentrics
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-slate-200 max-w-2xl mx-auto lg:mx-0">
                Cloud Sentrics provides secure, reliable cloud storage solutions designed to protect your data and simplify collaboration. Our platform ensures your files are safely stored, encrypted, and accessible only to the people you trust — anytime, anywhere. With advanced security protocols and seamless sharing tools, Cloud Sentrics empowers businesses and individuals to work smarter while keeping their digital assets protected.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#0a1a3f] hover:bg-[#132b57] text-white font-semibold px-12 py-6 rounded-xl text-xl shadow-xl shadow-cyan-900/30 transition-all duration-300 border border-cyan-500/30"
              >
                Get started
              </motion.button>

              {/* Compliance badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
                {[
                  { label: 'GDPR-Ready', full: 'General Data Protection Regulation' },
                  { label: 'CCRF-ready', full: 'Cloud Computing Regulatory Framework' },
                  { label: 'HIPAA-ready', full: 'Health Insurance Portability and Accountability Act' },
                  { label: 'NDPC-Compliant', full: 'Nigeria Data Protection Commission' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl mb-3 border border-cyan-400/40">
                      ✓
                    </div>
                    <span className="font-semibold text-lg">{item.label}</span>
                    <span className="text-sm text-slate-400 mt-1">{item.full}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Main illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                <img
                  src="/hmp2.png"
                  alt="Futuristic cloud with connected devices and data flow"
                  className="
                    w-full h-auto object-contain 
                    drop-shadow-[0_40px_100px_rgba(6,182,212,0.5)] 
                    transition-all duration-700 
                    hover:scale-[1.03]
                  "
                />
                {/* Optional subtle glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none rounded-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animation keyframes for revolving light (unchanged) */}
      <style jsx global>{`
        @keyframes rotateLight {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default MainBody;