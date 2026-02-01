import React from 'react';

const CloudFooter = () => {
  return (
    <footer className="bg-[#0a1a3f] text-white pt-16 pb-8 md:pt-20 md:pb-12 relative overflow-hidden font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">

          {/* Left: Company Info + Social Icons */}
          <div className="space-y-6">
            <h3 className="text-[#00d4ff] text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Cloudsentrics
            </h3>
            <p className="text-lg leading-relaxed text-slate-300">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations that handle sensitive information.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              We help businesses protect, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core—without relying on unsecured email, shared drives, or local servers.
            </p>

            {/* Social Icons - Professional SVGs */}
            <div className="flex space-x-5 pt-5">
              {/* Twitter / X */}
              <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#00d4ff] hover:text-[#0a1a3f] transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#00d4ff] hover:text-[#0a1a3f] transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#00d4ff] hover:text-[#0a1a3f] transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#00d4ff] hover:text-[#0a1a3f] transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#00d4ff] hover:text-[#0a1a3f] transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
              </a>
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="space-y-6">
            <h4 className="text-[#00d4ff] text-2xl font-bold uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-4 text-lg text-slate-300">
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

          {/* Right: Contact Us + App Download */}
          <div className="space-y-8">

            {/* Contact Section */}
            <div>
              <h4 className="text-[#00d4ff] text-2xl font-bold uppercase tracking-wider mb-6">Contact Us</h4>
              <div className="space-y-6 text-lg text-slate-300">

                {/* Location 1 */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px] text-[#00d4ff]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">USA Office</p>
                    <p className="leading-relaxed">22507 Cappella Village Lane,<br />Katy, TX 77449</p>
                    <div className="mt-2 flex flex-col gap-1">
                      <a href="tel:+13465806298" className="flex items-center gap-2 text-[#00d4ff] hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        +1 346-580-6298
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location 2 */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px] text-[#00d4ff]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="font-medium text-white">Nigeria Office</p>
                    <p className="leading-relaxed">No. 6 Aare Avenue,<br />New Bodija Estate, Ibadan, Oyo State-Nigeria.</p>
                    <div className="mt-2 flex flex-col gap-1">
                      <a href="tel:+2347056639388" className="flex items-center gap-2 text-[#00d4ff] hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        +234 (0)705 663 9388
                      </a>
                      <a href="tel:+2348144573546" className="flex items-center gap-2 text-[#00d4ff] hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        +234 (0)814 457 3546
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="min-w-[24px] text-[#00d4ff]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <a href="mailto:info@cloudsentrics.org" className="text-[#00d4ff] hover:text-white transition">
                    info@cloudsentrics.org
                  </a>
                </div>

              </div>
            </div>

            {/* App Download Section - Styled Badges */}
            <div className="pt-6">
              <h4 className="text-[#00d4ff] text-lg font-bold uppercase tracking-wider mb-5">Get Cloud Sentrics App</h4>
              <div className="flex flex-col space-y-4">
                {/* Google Play Button */}
                <a href="#" className="group flex items-center bg-black border border-slate-700 rounded-lg px-5 py-4 w-[220px] hover:border-[#00d4ff] transition-colors duration-300">
                  <svg className="w-9 h-9 text-white mr-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-300 leading-tight">GET IT ON</span>
                    <span className="text-base font-semibold text-white leading-tight tracking-wide group-hover:text-[#00d4ff] transition-colors">Google Play</span>
                  </div>
                </a>

                {/* App Store Button */}
                <a href="#" className="group flex items-center bg-black border border-slate-700 rounded-lg px-5 py-4 w-[220px] hover:border-[#00d4ff] transition-colors duration-300">
                  <svg className="w-9 h-9 text-white mr-4" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 88.8 126.7 20.3 0 30.5-15.2 52.8-15.2 22.2 0 31.4 15.2 53.6 15.2 39.3 0 73.6-88.1 86.4-120.3-64.5-32.4-61-91.7-60.3-92.4zM203 76.6c18.6-22.8 31-56.5 27.6-76.6-25.6 1.6-58.1 17.7-77.5 42.2-16.5 21.2-30 54.2-25.9 75.6 28.5 2.2 57.6-15.2 75.8-41.2z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-300 leading-tight">Download on the</span>
                    <span className="text-base font-semibold text-white leading-tight tracking-wide group-hover:text-[#00d4ff] transition-colors">App Store</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar - Centered group */}
        <div className="mt-16 pt-8 border-t border-slate-700/50 text-base text-slate-400">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <p>
              © 2026 Cloud Sentrics. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Privacy Policy</a>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Terms & Conditions</a>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-[#00d4ff] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CloudFooter;