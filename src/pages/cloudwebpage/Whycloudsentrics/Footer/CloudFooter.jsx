import React, { useState } from 'react';

const CloudFooter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <footer className="bg-[#0a1a3f] text-white pt-12 pb-10 md:pt-16 md:pb-12 relative overflow-hidden font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">

          {/* Left: Company Info + Social Icons */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-[#00d4ff] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Cloud Sentrics
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl mx-auto md:mx-0">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations that handle sensitive information.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl mx-auto md:mx-0">
              We help businesses protect, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core
              <span className="font-bold"> without unsecured email, shared drives or local servers</span>.
            </p>

            {/* Social Icons – centered on mobile */}
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-5 pt-4">
              {[
                {
                  name: 'X',
                  svg: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  href: "https://x.com/CloudSentrics"
                },
                {
                  name: 'Facebook',
                  svg: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
                  href: "https://web.facebook.com/profile.php?id=61552271205091"
                },
                {
                  name: 'Instagram',
                  svg: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
                  href: "https://www.instagram.com/cloudsentrics/"
                },
                {
                  name: 'YouTube',
                  svg: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
                  href: "https://youtube.com/@cloudsentrics?si=_G3I4N3VLSrfjDl5"
                },
                {
                  name: 'LinkedIn',
                  svg: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
                  href: "https://www.linkedin.com/company/cloudsentrics"
                },
              ].map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#00d4ff] hover:text-[#0a1a3f] transition-all duration-300"
                  aria-label={icon.name}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon.svg} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-[#00d4ff] text-xl sm:text-2xl font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-slate-300 flex flex-col items-center md:items-start">
              {['Home', 'Product', 'Solution', 'Resources', 'Security & Trust', 'About us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#00d4ff] transition-colors duration-200 flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact + App Download */}
          <div className="space-y-8 md:space-y-10 text-center md:text-left">
            <div>
              <h4 className="text-[#00d4ff] text-xl sm:text-2xl font-bold uppercase tracking-wider mb-5">Contact Us</h4>
              <div className="space-y-7 text-base sm:text-lg text-slate-300">
                {/* USA Office */}
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
                  <div className="text-[#00d4ff] text-2xl sm:text-xl">
                    <svg className="w-6 h-6 mx-auto sm:mx-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-white">USA Office</p>
                    <p>22507 Cappella Village Lane,<br />Katy, TX 77449</p>
                    <a
                      href="https://wa.me/13465806298"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00d4ff] hover:text-white transition mt-1 inline-flex items-center gap-2"
                    >
                      {/* WhatsApp icon */}
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>

                      +1 346-580-6298
                    </a>
                  </div>
                </div>

                {/* Nigeria Office */}
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
                  <div className="text-[#00d4ff] text-2xl sm:text-xl">
                    <svg className="w-6 h-6 mx-auto sm:mx-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-medium text-white">Nigeria Office</p>
                    <p>No. 6 Aare Avenue,<br />New Bodija Estate, Ibadan, Oyo State-Nigeria.</p>
                    <div className="mt-1 space-y-1">
                      <a
                        href="https://wa.me/234814573546"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00d4ff] hover:text-white transition flex items-center justify-center md:justify-start gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>

                        +234 814 457 3546
                      </a>
                      <a href="tel:+2347056639388" className="text-[#00d4ff] hover:text-white transition flex items-center justify-center md:justify-start gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        +234 705 663 9388
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email – centered on mobile */}
                <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                  <svg className="w-6 h-6 text-[#00d4ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@cloudsentrics.org" className="text-[#00d4ff] hover:text-white transition text-base sm:text-lg">
                    info@cloudsentrics.org
                  </a>
                </div>
              </div>
            </div>

            {/* App Download */}
            <div className="pt-4 md:pt-6">
              <h4 className="text-[#00d4ff] text-lg sm:text-xl font-bold uppercase tracking-wider mb-4 text-center md:text-left">Get the App</h4>
              <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4 sm:gap-5">
                <a href="#" className="group flex items-center bg-black border border-slate-700 rounded-lg px-4 py-3.5 w-full max-w-[240px] sm:w-[220px] hover:border-[#00d4ff] transition-colors">
                  <svg className="w-8 h-8 text-white mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-300">GET IT ON</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00d4ff]">Google Play</span>
                  </div>
                </a>

                <a href="#" className="group flex items-center bg-black border border-slate-700 rounded-lg px-4 py-3.5 w-full max-w-[240px] sm:w-[220px] hover:border-[#00d4ff] transition-colors">
                  <svg className="w-8 h-8 text-white mr-3 flex-shrink-0" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 88.8 126.7 20.3 0 30.5-15.2 52.8-15.2 22.2 0 31.4 15.2 53.6 15.2 39.3 0 73.6-88.1 86.4-120.3-64.5-32.4-61-91.7-60.3-92.4zM203 76.6c18.6-22.8 31-56.5 27.6-76.6-25.6 1.6-58.1 17.7-77.5 42.2-16.5 21.2-30 54.2-25.9 75.6 28.5 2.2 57.6-15.2 75.8-41.2z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-300">Download on the</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#00d4ff]">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width divider + bottom bar */}
        <div className="relative mt-12 md:mt-16">
          <div className="absolute left-[-100vw] right-[-100vw] h-px bg-slate-700/50" />
          <div className="relative z-10 pt-8 pb-2 text-base sm:text-lg md:text-xl text-slate-300 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
              <p className="font-medium">© 2026 Cloud Sentrics. All rights reserved.</p>
              <div className="flex items-center gap-5 sm:gap-6">
                <a href="#" onClick={toggleModal} className="hover:text-cyan-300 transition-colors cursor-pointer">Privacy Policy</a>
                <span className="text-slate-600">•</span>
                <a href="#" className="hover:text-cyan-300 transition-colors">Terms & Conditions</a>
                <span className="text-slate-600">•</span>
                <a href="#" className="hover:text-cyan-300 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 backdrop-blur-md transition-opacity duration-300"
          onClick={toggleModal}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-[92%] sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/5 mx-auto p-6 sm:p-8 lg:p-10 overflow-y-auto max-h-[88vh] transform transition-all duration-300 ease-out scale-100 opacity-100"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button – larger touch target */}
            <button
              onClick={toggleModal}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <svg className="w-7 h-7 text-gray-600 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="prose prose-slate prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 max-w-none">
              {/* Main title with accent underline */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-blue-500 after:rounded">
                Privacy Policy
              </h1>

              <div className="space-y-12">
                {/* Section 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Privacy Notice</h2>
                  </div>
                  <p className="leading-relaxed text-gray-700">
                    At Cloud Sentrics, we take privacy and data protection <strong>very seriously</strong>. We are committed to safeguarding personal and organizational data entrusted to us and handling it in a secure, transparent, and responsible manner.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-700">
                    This Privacy Notice explains how we collect, use, and protect information when you interact with our website, platforms, and services, in compliance with applicable data protection laws — including the <strong>Nigeria Data Protection Act (NDPA)</strong>.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Information We Collect</h2>
                  </div>
                  <p className="text-gray-700">We collect information in the following categories:</p>

                  <div className="mt-5 space-y-8">
                    <div className="pl-4 border-l-4 border-indigo-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Website & Inquiry Information</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Name, email address, phone number, and organization details when you contact us, request a demo, or submit an inquiry</li>
                        <li>Technical information such as IP address, browser type, and cookies (used to improve website performance and security)</li>
                      </ul>
                    </div>

                    <div className="pl-4 border-l-4 border-indigo-200">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Customer Account Information</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Account and administrative details required to provide our services to organizations</li>
                      </ul>
                    </div>
                  </div>

                  <p className="mt-6 italic text-gray-600">
                    Cloud Sentrics does <strong>not</strong> collect student, patient, or end-user content unless explicitly configured by the customer as part of the service.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">How We Use Information</h2>
                  </div>
                  <p className="text-gray-700">We use collected information to:</p>
                  <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide, operate, and continuously improve our services</li>
                    <li>Respond to inquiries, demo requests, and support needs</li>
                    <li>Maintain platform security and operational integrity</li>
                    <li>Meet legal, regulatory, and contractual obligations</li>
                  </ul>
                  <p className="mt-6 font-medium text-gray-800">
                    Importantly: We do <strong>not</strong> sell, rent, share, or monetize personal or customer data.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Customer Data Ownership</h2>
                  </div>
                  <p className="leading-relaxed text-gray-700">
                    All files, documents, and records stored or managed on Cloud Sentrics platforms remain the <strong>exclusive property</strong> of the customer organization.
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-700">
                    Cloud Sentrics acts strictly as a <strong>data processor</strong> — we do not access, analyze, or use your content beyond what is strictly necessary to deliver the agreed services.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Data Security</h2>
                  </div>
                  <p className="leading-relaxed text-gray-700">
                    We implement industry-standard technical and organizational measures — including encryption at rest and in transit, strict access controls, regular security assessments, and continuous monitoring — to protect data against unauthorized access, loss, alteration, or misuse.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Your Rights</h2>
                  </div>
                  <p className="text-gray-700">Depending on applicable laws (including NDPA), you may have the right to:</p>
                  <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-700">
                    <li>Access, review, or correct your personal information</li>
                    <li>Request deletion of personal data (subject to legal exceptions)</li>
                    <li>Object to or restrict certain types of processing</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p className="mt-6 text-gray-700">
                    To exercise these rights, please contact us using the information below.
                  </p>
                </div>

                {/* Contact section – highlighted */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Contact Us</h2>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <p className="text-lg text-gray-700 mb-4">
                      If you have any questions about this Privacy Policy, our data practices, or wish to exercise your rights, please reach out to:
                    </p>
                    <a
                      href="mailto:info@cloudsentrics.org"
                      className="inline-block text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      info@cloudsentrics.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default CloudFooter;