import React, { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

/* ======================== */
/* Reusable Check Item      */
/* ======================== */
const CheckItem = ({ children }) => (
  <div className="flex items-start gap-3">
    <FiCheckSquare className="mt-[3px] text-[#14224a] w-[18px] h-[18px]" />
    <p className="text-[#1f1f1f] text-[17px] leading-[28px]">
      {children}
    </p>
  </div>
);

const CloudSentricsFeatures = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ======================== */}
      {/* 1. Hero Section          */}
      {/* ======================== */}
      <section
        className="relative py-20 md:py-32 lg:py-40"
        style={{
          backgroundColor: '#e0f2fe', // soft light cyan — very close to the screenshot's background
        }}
      >
        <div className="max-w-[min(95vw,1800px)] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 text-center">
          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-8 md:mb-12">
            Ready to Protect Your Confidential Data?
          </h2>

          {/* Main paragraph */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed max-w-6xl mx-auto mb-8 lg:max-w-none">
            Cloud Sentrics helps organizations securely store, manage, and share sensitive data without exposing it to unauthorized access. Our platform is built for institutions handling confidential records such as schools, labs, clinics, and enterprises that require strong security, controlled access, and clear accountability.
          </p>

          {/* Supporting paragraph */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed max-w-6xl mx-auto mb-12 md:mb-16 lg:max-w-none">
            With secure cloud storage, OTP-protected file delivery, detailed access and delivery logs, and NDPC-aligned data protection practices, Cloud Sentrics ensures your confidential data is protected throughout its lifecycle from storage to secure delivery.
          </p>

          {/* CTA Button */}
          <div className="inline-block">
            <a
              href="#get-started"
              className="inline-block bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xl sm:text-2xl md:text-3xl px-12 py-6 md:px-16 md:py-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Optional subtle decorative glows – toned down to not clash with the new color */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(4,209,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(4,209,255,0.12),transparent_50%)]" />
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50/40 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="space-y-8 lg:space-y-10">
              {/* Main heading – large, bold, gradient or dark */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 tracking-tight leading-tight">
                Our Mission
              </h2>

              {/* Mission paragraphs – readable, slightly larger, professional */}
              <div className="space-y-6 text-lg sm:text-xl lg:text-xl text-slate-800 leading-relaxed">
                <p>
                  Cloud Sentrics exists to help organizations <span className="font-semibold text-indigo-800">securely store, protect, and share</span> sensitive data in the cloud with confidence.
                </p>

                <p>
                  Our mission is to deliver enterprise grade cloud security solutions that enable businesses to meet compliance requirements, reduce data risk, and operate securely in an increasingly digital world. Through secure cloud architecture, digital file sharing, and compliance aligned designs, we help organizations protect what matters most.
                </p>

                <p>
                  We are committed to building secure, scalable, and future ready cloud environments that support trust, accountability, and long term growth.
                </p>
              </div>
            </div>

            {/* Right: Hero-style image (like your example) */}
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-indigo-200/50 bg-gradient-to-br from-indigo-500/10 to-blue-600/10">

                <img
                  src="/comp.png"
                  alt="Enterprise cloud security visualization with team and digital elements"
                  className="w-full h-full object-cover"
                />

                {/* Optional subtle overlay glow / accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Mobile-only image (below text on small screens) */}
            <div className="lg:hidden mt-10">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/comp.png"
                  alt="Cloud Sentrics mission - secure cloud technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Optional subtle background accent (like floating elements in your example) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>
      </section>


      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-12 lg:space-y-16">
            {/* Top row: Image (taller now) + stacked content */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left: Taller hero image – aligned to top */}
              <div className="relative">
                <div className="aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-blue-500/30 bg-gradient-to-br from-blue-900/40 to-indigo-900/40">
                  <img
                    src="/comp1.png"  // ← your local image
                    // Alternative high-res suggestion if /comp1.png is too short/low-res:
                    // src="https://thumbs.dreamstime.com/b/glowing-digital-lock-microchip-cybersecurity-data-protection-concept-futuristic-padlock-representing-illuminated-409592294.jpg"
                    alt="Futuristic secure cloud with glowing padlock, neon circuits, holographic protection elements"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-transparent to-blue-900/20 pointer-events-none" />
                </div>

                {/* Subtle floating accents – scaled a bit for taller container */}
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
              </div>

              {/* Right: Heading, intro, and services 1 & 2 stacked vertically */}
              <div className="space-y-10 lg:space-y-12">
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 tracking-tight leading-tight">
                    Our Services
                  </h2>
                  <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-blue-100/90 leading-relaxed">
                    Cloud Sentrics provides secure, compliance-focused cloud solutions designed for organizations handling sensitive data.
                  </p>
                </div>

                {/* Services 1 & 2 – vertical stack */}
                <div className="space-y-6 lg:space-y-8">
                  {/* Service 1 */}
                  <div className="bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-900/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold shadow-md">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cyan-300 mb-2">Secure Cloud Storage</h3>
                        <p className="text-blue-100/80 text-base leading-relaxed">
                          Enterprise-grade cloud storage architectures with strong encryption, access controls, and full audit visibility.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-900/30">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold shadow-md">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cyan-300 mb-2">Controlled File Sharing</h3>
                        <p className="text-blue-100/80 text-base leading-relaxed">
                          Secure file delivery using email and OTP-based verification, access expiry controls, and detailed delivery logs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: Services 3, 4, 5 */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Service 3 */}
              <div className="bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-900/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold shadow-md">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Data Protection & Compliance Alignment</h3>
                    <p className="text-blue-100/80 text-base leading-relaxed">
                      Cloud environments designed to align with NDPC and other applicable data protection requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-900/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold shadow-md">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Cloud Security Architecture</h3>
                    <p className="text-blue-100/80 text-base leading-relaxed">
                      Separation of core operational systems from data storage to reduce exposure and limit unauthorized access.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 5 */}
              <div className="bg-slate-800/70 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300 shadow-lg hover:shadow-blue-900/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold shadow-md">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-300 mb-2">Cloud Advisory & Support</h3>
                    <p className="text-blue-100/80 text-base leading-relaxed">
                      Ongoing guidance and support to help organizations maintain secure and compliant cloud operations as they grow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-600 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="relative text-white py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background image with overlay for readability */}
        <div className="absolute inset-0">
          <img
            src="/comp2.png"
            alt="Cloud Sentrics background - futuristic digital theme"
            className="w-full h-full object-cover object-center"
          />
          {/* Semi-transparent dark overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/60 lg:bg-black/55" />
        </div>

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center z-10">
          <div className="space-y-8 md:space-y-12">
            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 tracking-tight leading-tight drop-shadow-lg">
              Join Cloud Sentrics Today
            </h2>

            {/* Paragraph */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-blue-50 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
              Whether you are an organization seeking secure cloud storage and controlled file sharing, or a business looking to strengthen data protection and compliance, Cloud Sentrics provides the platform and expertise to support your journey.
            </p>

            {/* CTA Button */}
            <div className="pt-6 md:pt-10">
              <a
                href="/get-started" // Replace with your actual link (signup, demo form, etc.)
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-blue-500/60 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 ring-offset-2 ring-offset-black/30"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white from-slate-950 via-indigo-950 to-blue-950 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-tight">
              Meet our <span className="text-cyan-400">Competent</span> Team Members
            </h2>
          </div>

          {/* Team grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Team Member 1 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 transition-all duration-300 hover:shadow-blue-600/50 hover:scale-[1.02]">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://media.istockphoto.com/id/1473264480/video/dolly-shot-of-a-black-male-programmer-working-in-a-monitoring-control-room-surrounded-by-big.jpg?s=640x640&k=20&c=YoYCkU88WU3Qi_sb5OWitpNkb5m5JB8nw9qlvVEZPkg="
                  alt="Oluwadamilare Odo - Founder working on cloud security dashboard"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay gradient for blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent p-6">
                <div className="inline-block bg-cyan-500 text-white font-bold text-sm md:text-base px-4 py-1.5 rounded mb-2">
                  Founder
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Oluwadamilare Odo
                </h3>
                <p className="text-cyan-300/90 text-base md:text-lg">
                  Senior Cloud Security Engineer / Instructor
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 transition-all duration-300 hover:shadow-blue-600/50 hover:scale-[1.02]">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://thumbs.dreamstime.com/b/professional-security-specialist-monitors-live-surveillance-high-tech-modern-control-room-offering-cutting-edge-protection-419556792.jpg"
                  alt="Mustapha Ibrahim Sunusi - Administrator at multi-monitor security setup"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent p-6">
                <div className="inline-block bg-cyan-500 text-white font-bold text-sm md:text-base px-4 py-1.5 rounded mb-2">
                  Administrator
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Mustapha Ibrahim Sunusi
                </h3>
                <p className="text-cyan-300/90 text-base md:text-lg">
                  Administrator
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 transition-all duration-300 hover:shadow-blue-600/50 hover:scale-[1.02]">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://thumbs.dreamstime.com/b/analytics-specialist-monitors-complex-data-glowing-screens-high-tech-facility-overnight-421824736.jpg"
                  alt="Emmanuel Odo - Cloud Sales Engineer at workstation with analytics dashboards"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent p-6">
                <div className="inline-block bg-cyan-500 text-white font-bold text-sm md:text-base px-4 py-1.5 rounded mb-2">
                  Cloud Sales Engineer
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  Emmanuel Odo
                </h3>
                <p className="text-cyan-300/90 text-base md:text-lg">
                  Cloud Sales Engineer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Optional subtle background accents */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-600 rounded-full blur-3xl" />
        </div>
      </section>

    </>
  );
};

export default CloudSentricsFeatures;
