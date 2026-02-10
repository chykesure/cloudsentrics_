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
  const [isNoVacancyModalOpen, setIsNoVacancyModalOpen] = useState(false);
  const [isNoOpenRolesModalOpen, setIsNoOpenRolesModalOpen] = useState(false);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ======================== */}
      {/* 1. Hero Section          */}
      {/* ======================== */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="space-y-6 md:space-y-10">
            {/* Small tagline – uppercase, cyan accent */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-cyan-600 uppercase">
              FIND YOUR NEXT ROLE WITH US
            </p>

            {/* Main headline with gradient on key words */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
                Future
              </span>{" "}
              with
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
                Cloud Sentrics
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Second Section - Cards + Modal Trigger */}
      <section className="relative bg-white text-slate-900 py-20 md:py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <div className="space-y-6 md:space-y-10">
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-cyan-600 uppercase">
              FIND YOUR NEXT ROLE WITH US
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
                Future
              </span>{" "}
              with
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">
                Cloud Sentrics
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Second Section - Cards */}
      <section className="bg-[#0f172a] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Discover exciting career opportunities
            </h2>
            <p className="text-lg sm:text-3xl text-slate-300 max-w-2xl mx-auto">
              that empower you to thrive and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="overflow-hidden h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/career.png"
                  alt="Professionals collaborating"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8 lg:p-10 text-center">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-cyan-700 uppercase bg-cyan-100 rounded-full">
                  We are hiring
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Explore Open Roles
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  View our current vacancies across Engineering, Security, and Operations. Find the perfect role to accelerate your career.
                </p>

                <button
                  type="button"
                  onClick={() => setIsNoVacancyModalOpen(true)}
                  className="
              inline-flex items-center justify-center 
              w-full sm:w-auto px-8 py-4 
              text-base font-bold text-white 
              transition-all duration-200 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              rounded-full 
              hover:from-cyan-400 hover:to-blue-500 
              shadow-lg hover:shadow-cyan-500/30 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500
              cursor-pointer active:scale-95 select-none
            "
                >
                  View All Vacancies
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 - Submit CV (unchanged) */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2">
              <div className="overflow-hidden h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/career.png"
                  alt="Recruitment team discussion"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8 lg:p-10 text-center">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-indigo-700 uppercase bg-indigo-100 rounded-full">
                  Connect with us
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Join Our Talent Pool
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Don't see a specific role open? Send us your CV. We'd love to hear from you and keep your details for future opportunities.
                </p>
                <button
                  onClick={() => {
                    document.getElementById('submit-cv')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="
              inline-flex items-center justify-center 
              w-full sm:w-auto px-8 py-4 
              text-base font-bold text-white 
              transition-all duration-200 
              bg-slate-900 rounded-full 
              hover:bg-slate-800 
              shadow-lg hover:shadow-slate-900/30 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900
              cursor-pointer active:scale-95 select-none
            "
                >
                  Submit Your CV
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────────
       Custom Modal (replaces <dialog>)
  ──────────────────────────────────────────────── */}
        {isNoVacancyModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsNoVacancyModalOpen(false)}
          >
            <div
              className={`
          relative bg-white text-slate-900 
          max-w-md sm:max-w-lg w-11/12 rounded-2xl shadow-2xl border border-slate-200/70
          p-8 transform transition-all duration-300 ease-out
          ${isNoVacancyModalOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'}
        `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button (×) */}
              <button
                className="absolute top-4 right-5 text-slate-400 hover:text-slate-700 text-2xl leading-none"
                onClick={() => setIsNoVacancyModalOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>

              <h3 className="font-bold text-2xl md:text-3xl mb-5 text-center text-slate-800">
                No Open Vacancies at the Moment
              </h3>

              <p className="text-center text-slate-600 text-lg leading-relaxed mb-6">
                We're not actively hiring right now, but we truly appreciate your interest in joining Cloud Sentrics.
              </p>

              <p className="text-center text-slate-500 mb-8 text-base">
                Feel free to submit your CV we'll keep it in our talent pool and contact you when a fitting opportunity arises.
              </p>

              <div className="flex justify-center">
                <button
                  className="
              px-10 py-3.5 text-base md:text-lg font-semibold text-white 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-400 hover:to-blue-500 
              rounded-full shadow-lg hover:shadow-cyan-500/40 
              transition-all duration-300 active:scale-95
            "
                  onClick={() => setIsNoVacancyModalOpen(false)}
                >
                  Got It, Thanks!
                </button>
              </div>
            </div>
          </div>
        )}
      </section>




      <section className="bg-white text-zinc-900 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:max-w-screen-2xl">

          {/* === SECTION HEADER === */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 tracking-tight leading-tight mb-8">
              Build Your Future @ Cloud Sentrics
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed">
              Our people are at the heart of everything we do. We’re passionate about supporting individuals who choose to grow their careers with us and contribute to building secure, reliable cloud solutions.
            </p>
          </div>

          {/* === CORE VALUES GRID (Extracted from text block) === */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">

            {/* Card 1: Empowerment */}
            <div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Empowered to Thrive</h3>
              <p className="text-zinc-600 leading-relaxed">
                We foster a high-performing environment where every team member is empowered to thrive through meaningful work and collaboration with experienced professionals.
              </p>
            </div>

            {/* Card 2: Growth */}
            <div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Continuous Growth</h3>
              <p className="text-zinc-600 leading-relaxed">
                Find real opportunities to grow both professionally and personally. We invest in continuous learning to ensure your career accelerates with us.
              </p>
            </div>

            {/* Card 3: Culture */}
            <div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-cyan-900/5 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Inclusive Culture</h3>
              <p className="text-zinc-600 leading-relaxed">
                We actively engage with our team on matters that matter, ensuring everyone feels respected, supported, and valued regardless of background or role.
              </p>
            </div>
          </div>

          {/* === HIGHLIGHT SECTION: Be Well & DEI === */}
          <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">

              {/* Left: Diversity */}
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                  Our Core Values
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                  Diversity, Equity, and Inclusion
                </h3>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  Diversity, equity, and inclusion are foundational to our culture. We know our success is driven by our people, so we continuously invest in creating an exceptional employee experience that supports ambition and encourages innovation.
                </p>
              </div>

              {/* Right: Be Well */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-zinc-100">
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  </span>
                  Be Well @ Cloud Sentrics
                </h3>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  This initiative reflects our commitment to employee wellbeing. We offer flexible working arrangements, including hybrid, remote, and office-based roles, designed to support work-life balance across our organization.
                </p>
                <ul className="space-y-3">
                  {['Flexible hybrid options', 'Genuine work-life balance', 'Supportive environment'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-zinc-700 font-medium">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-white text-zinc-900 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">

          {/* === HERO SECTION: Split Layout === */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

            {/* Left Column: Text & CTA */}
            {/* Left Column: Text & CTA */}
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Build Your Future <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                  @ Cloud Sentrics
                </span>
              </h2>

              <p className="text-lg md:text-xl leading-relaxed text-zinc-600 font-light">
                Our people are the heart of everything we do. Join a team passionate about supporting your growth and building secure, reliable cloud solutions for the future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => setIsNoOpenRolesModalOpen(true)}
                  className="
        inline-flex justify-center items-center px-8 py-4 
        text-base font-bold text-white 
        transition-all duration-200 
        bg-gradient-to-r from-cyan-500 to-blue-600 
        rounded-full 
        hover:from-cyan-400 hover:to-blue-500 
        shadow-lg hover:shadow-cyan-500/30 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500
        active:scale-95
      "
                >
                  View Open Roles
                </button>
              </div>
            </div>

            {/* ────────────────────────────────────────────────
     Simple No Open Roles Modal (hero section popup)
──────────────────────────────────────────────── */}
            {isNoOpenRolesModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
                onClick={() => setIsNoOpenRolesModalOpen(false)}
              >
                <div
                  className="
        relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 
        transform transition-all duration-300 scale-100
      "
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 text-3xl leading-none"
                    onClick={() => setIsNoOpenRolesModalOpen(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>

                  <div className="text-center space-y-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      No Open Roles Right Now
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed">
                      We're not actively hiring for specific positions at the moment,
                      but we're always excited about meeting great talent!
                    </p>

                    <p className="text-gray-500">
                      Feel free to send us your CV — we'll keep it in our talent pool
                      and reach out when a fitting opportunity opens up.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsNoOpenRolesModalOpen(false);
                          // Scroll to CV submission section if it exists on the page
                          document.getElementById('submit-cv')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="
              inline-flex items-center px-8 py-3.5 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              text-white font-semibold rounded-full 
              hover:from-cyan-400 hover:to-blue-500 
              shadow-md hover:shadow-lg transition-all active:scale-95
            "
                      >
                        Submit Your CV
                      </button>
                    </div>

                    {/* Optional: small close link */}
                    <button
                      onClick={() => setIsNoOpenRolesModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 text-sm underline mt-2 block mx-auto"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Right Column: Image */}
            <div className="relative lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-3xl transform rotate-3 opacity-30 blur-xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-100">
                <img
                  src="/career1.png"
                  alt="Cloud Sentrics team collaborating"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* === VALUE PROPOSITION GRID (Replaces long text block) === */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform">
                {/* Growth Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Continuous Growth</h3>
              <p className="text-zinc-600 leading-relaxed">Real opportunities for professional development through meaningful projects and mentorship.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {/* Balance Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Be Well</h3>
              <p className="text-zinc-600 leading-relaxed">Flexible hybrid/remote options and genuine support for work-life balance are part of our DNA.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-zinc-50 hover:bg-white border border-transparent hover:border-zinc-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                {/* Diversity Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Inclusive Culture</h3>
              <p className="text-zinc-600 leading-relaxed">Diversity and equity are foundational. We empower everyone to thrive in a high-performing environment.</p>
            </div>
          </div>

          {/* === TESTIMONIALS: 3-Column Grid (No Carousel) === */}
          <div className="relative">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Voices of the Team</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-100 hover:shadow-2xl transition-shadow duration-300 relative">
                <div className="absolute -top-4 left-8 text-6xl text-cyan-100 font-serif leading-none">"</div>
                <p className="text-zinc-600 text-lg leading-relaxed relative z-10 mb-6">
                  I have learned so much since starting at Cloud Sentrics. Everyone is so friendly and supportive of my career goals. It's been such a positive experience!
                </p>
                <div className="flex items-center border-t border-zinc-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                    MS
                  </div>
                  <div className="ml-4">
                    <p className="text-zinc-900 font-bold text-lg">Mustapha Ibrahim</p>
                    <p className="text-cyan-600 text-sm font-medium">Administrator</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-100 hover:shadow-2xl transition-shadow duration-300 relative">
                <div className="absolute -top-4 left-8 text-6xl text-cyan-100 font-serif leading-none">"</div>
                <p className="text-zinc-600 text-lg leading-relaxed relative z-10 mb-6">
                  The continuous learning opportunities and mentorship have accelerated my career in cloud security. The inclusive culture makes me feel valued every day.
                </p>
                <div className="flex items-center border-t border-zinc-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                    FY
                  </div>
                  <div className="ml-4">
                    <p className="text-zinc-900 font-bold text-lg">Odo Emmanuel</p>
                    <p className="text-blue-600 text-sm font-medium">Cloud Sales Engineer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-100 hover:shadow-2xl transition-shadow duration-300 relative">
                <div className="absolute -top-4 left-8 text-6xl text-cyan-100 font-serif leading-none">"</div>
                <p className="text-zinc-600 text-lg leading-relaxed relative z-10 mb-6">
                  Flexible work arrangements and the focus on employee wellbeing allow me to balance my career and personal life perfectly.
                </p>
                <div className="flex items-center border-t border-zinc-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    OA
                  </div>
                  <div className="ml-4">
                    <p className="text-zinc-900 font-bold text-lg">Samuel Dorcas</p>
                    <p className="text-indigo-600 text-sm font-medium">Senior Customer Support</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Retained Animation Keyframes */}
        <style jsx>{`
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50%      { background-position: 100% 50%; }
    }
    .animate-gradient-x {
      animation: gradient-x 12s ease infinite;
    }
    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
  `}</style>
      </section>

      <section className="bg-zinc-50 py-24 lg:py-32 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full opacity-30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* === LEFT COLUMN: Context & Contact Info === */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6">
                  Let's Build the Future <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                    Together
                  </span>
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                  Don't see the perfect role listed? We are always looking for exceptional talent.
                  Submit your details and CV, and our recruitment team will reach out if a match arises.
                </p>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  We value diversity and are committed to creating an inclusive environment for all applicants.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4 pt-6">
                {/* Email */}
                <a
                  href="mailto:info@cloudsentrics.org"
                  className="block hover:no-underline focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-2xl transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Email Us</p>
                      <p className="text-zinc-900 font-medium hover:text-cyan-700 transition-colors">info@cloudsentrics.org</p>
                    </div>
                  </div>
                </a>

                {/* US Number */}
                <a
                  href="tel:+13465806298"
                  className="block hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Call Us</p>
                      <p className="text-zinc-900 font-medium hover:text-blue-700 transition-colors">+1 346-580-6298</p>
                    </div>
                  </div>
                </a>

                {/* Nigeria Number 1 */}
                <a
                  href="tel:+2347056639388"
                  className="block hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Call Us</p>
                      <p className="text-zinc-900 font-medium hover:text-blue-700 transition-colors">+234 705 663 9388</p>
                    </div>
                  </div>
                </a>

                {/* Nigeria Number 2 */}
                <a
                  href="tel:+2348144573546"
                  className="block hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Call Us</p>
                      <p className="text-zinc-900 font-medium hover:text-blue-700 transition-colors">+234 814 457 3546</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* === RIGHT COLUMN: The Form === */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-zinc-100" id="submit-cv">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Contact Our Recruitment Team</h3>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Row 1: Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-zinc-700">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-zinc-700">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all" placeholder="Doe" />
                  </div>
                </div>

                {/* Row 2: Company Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-semibold text-zinc-700">Company Name</label>
                    <input type="text" id="company" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all" placeholder="Current Company" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-semibold text-zinc-700">Industry</label>
                    <input type="text" id="industry" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all" placeholder="e.g. Fintech" />
                  </div>
                </div>

                {/* Row 3: Contact Info */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-zinc-700">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-zinc-700">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all" placeholder="+1 (555) 000-0000" />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-zinc-700">Message</label>
                  <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all resize-none" placeholder="Tell us a bit about yourself..."></textarea>
                </div>

                {/* Upload CV Area */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Upload CV</label>
                  <div className="relative group">
                    <input type="file" id="cv-upload" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                    <div className="w-full px-4 py-4 rounded-xl border-2 border-dashed border-zinc-300 bg-zinc-50/50 flex items-center justify-center gap-3 group-hover:border-cyan-400 group-hover:bg-cyan-50/50 transition-all">
                      <svg className="w-6 h-6 text-zinc-400 group-hover:text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <span className="text-zinc-500 font-medium group-hover:text-cyan-700">Click to upload PDF or DOCX</span>
                    </div>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start cursor-pointer group">
                    <div className="flex items-center h-5">
                      <input type="checkbox" className="w-5 h-5 text-blue-600 border-zinc-300 rounded focus:ring-blue-500 accent-blue-600" />
                    </div>
                    <span className="ml-3 text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                      I'd like to receive marketing emails.
                    </span>
                  </label>
                  <label className="flex items-start cursor-pointer group">
                    <div className="flex items-center h-5">
                      <input type="checkbox" className="w-5 h-5 text-blue-600 border-zinc-300 rounded focus:ring-blue-500 accent-blue-600" />
                    </div>
                    <span className="ml-3 text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                      Keep my details on file for future roles.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-4 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-900/30 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default CloudSentricsFeatures;
