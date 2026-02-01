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
        {/* First block: For smaller organizations */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/hmp4.png"
              alt="Cloud connecting multiple devices - for smaller organizations"
              className="w-full max-w-lg object-contain drop-shadow-[0_0_50px_rgba(6,182,212,0.4)]"
            />
          </motion.div>

          {/* Right: Text + CTA */}
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

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-12 lg:my-20" />

        {/* Second block: Control Who Can Access Your Data */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text + CTA */}
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

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/hmp5.png"
              alt="Secure cloud lock with robots and data protection elements"
              className="w-full max-w-lg object-contain drop-shadow-[0_0_50px_rgba(6,182,212,0.4)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MainBody;