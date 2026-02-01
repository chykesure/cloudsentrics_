import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <>
      {/* Section 1: Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/hmp6.jpg"
            alt="Futuristic cloud data protection illustration"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-cyan-950/10 mix-blend-multiply" />
        </div>

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

      {/* Section 2: About Cloud Sentrics – white background */}
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

      {/* Section 3: Why Cloud Sentrics? – dark blue background */}
      <section className="relative bg-[#0a1a3f] text-white py-20 md:py-32 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 md:mb-20"
          >
            Why Cloud Sentrics?
          </motion.h2>

          <div className="space-y-16 md:space-y-20">
            {/* Top part: Image + Points 1–4 */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 border border-cyan-900/30"
              >
                <img
                  src="/hmp1.png"
                  alt="Team using Cloud Sentrics"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-10 md:space-y-12"
              >
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400 border border-cyan-400/40">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Security First, Always.</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        We embed security at every layer of our platform. From controlled access and encrypted storage to secure file sharing with One-Time Passcodes (OTP), Cloud Sentrics ensures your sensitive data remains protected against unauthorized access.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400 border border-cyan-400/40">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Compliance You Can Trust</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        Cloud Sentrics is NDPC-compliant and CAC-registered in Nigeria, with solutions designed to support GDPR and HIPAA-aligned data protection requirements. Our infrastructure and processes help organizations meet regulatory obligations without complexity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400 border border-cyan-400/40">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Data Control and Ownership</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        Your data remains under your control at all times. Cloud Sentrics is built to prevent vendor lock-in and hidden access paths, giving organizations full transparency, ownership, and confidence in how their data is stored and shared.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400 border border-cyan-400/40">
                      4
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">Secure Collaboration Without Friction</h3>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        Enable teams, partners, and external stakeholders to collaborate securely without relying on unsecure or untracked email attachments. Files are shared through controlled links with One-Time Passcodes (OTP) with access visibility, audit logs, and expiration controls.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Horizontal cards: Points 5, 6, 7 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="grid md:grid-cols-3 gap-8 md:gap-10"
            >
              {/* Point 5 */}
              <div className="bg-slate-800/70 rounded-2xl p-8 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400 border border-cyan-400/40">
                    5
                  </div>
                  <h3 className="text-2xl font-semibold">Separation from Core Systems</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Cloud Sentrics secures documents after they are generated, without replacing or disrupting systems such as LIMS, school portals, or internal applications.
                </p>
              </div>

              {/* Point 6 */}
              <div className="bg-slate-800/70 rounded-2xl p-8 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400 border border-cyan-400/40">
                    6
                  </div>
                  <h3 className="text-2xl font-semibold">Built for Africa, Ready for the World</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Hosted on secure cloud infrastructure within the African region and supported locally from Nigeria, Cloud Sentrics understands regional compliance needs while meeting global cloud security standards.
                </p>
              </div>

              {/* Point 7 */}
              <div className="bg-slate-800/70 rounded-2xl p-8 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center text-3xl font-bold text-cyan-400 border border-cyan-400/40">
                    7
                  </div>
                  <h3 className="text-2xl font-semibold">Proven Real-World Expertise</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Our solutions are built by professionals with hands-on experience in cloud engineering, DevSecOps, and enterprise security. The same expertise used to train cloud professionals is applied to protecting organizational data.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Prefer a SaaS Solution CTA */}
      <section className="relative text-white py-20 md:py-28 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hmp7.png"
            alt="SaaS solution futuristic background"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark uniform overlay */}
          <div className="absolute inset-0 bg-[#0a1a3f]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h4
              className="
    text-2xl
    sm:text-2xl
    md:text-2xl
    font-semibold
    leading-tight
    tracking-tight
    mb-10
    max-w-5xl
    mx-auto
  "
            >
              Prefer a SaaS Solution? Discover how Cloud Sentrics can simplify
              <br />
              secure data storage, protection, and sharing for your organization.
            </h4>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
          bg-white
          hover:bg-gray-200
          text-slate-900
          font-medium
          px-10
          py-4
          text-lg
          rounded-md
          shadow-md
          transition-all
          duration-300
        "
            >
              Contact Us to Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;