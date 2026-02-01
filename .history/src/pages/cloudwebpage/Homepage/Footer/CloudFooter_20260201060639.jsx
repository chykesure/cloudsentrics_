import React from 'react';

const CloudFooter = () => {
  return (
    <footer className="bg-[#0a1a3f] text-white pt-16 pb-10 md:pt-20 md:pb-14 relative overflow-hidden font-sans">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-14">

          {/* Left: Company Info + Social Icons */}
          <div className="space-y-8">
            <h3 className="text-[#00d4ff] text-4xl md:text-5xl font-bold tracking-tight">
              Cloudsentrics
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-slate-200">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations that handle sensitive information.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-slate-200">
              We help businesses protect, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core—without relying on unsecured email, shared drives, or local servers.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 pt-4">
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:bg-[#00d4ff] hover:text-[#0a1a3f] transition-all duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* ... other social icons with w-6 h-6 ... */}
              {/* (keep the rest the same, just increase icon size to w-6 h-6) */}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="space-y-8">
            <h4 className="text-[#00d4ff] text-2xl md:text-3xl font-bold uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-4 text-lg md:text-xl text-slate-200">
              {['Home', 'Product', 'Solution', 'Resources', 'Security & Trust', 'About us'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#00d4ff] transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-[#00d4ff] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact Us + App Download */}
          <div className="space-y-10">

            <div>
              <h4 className="text-[#00d4ff] text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6">Contact Us</h4>
              <div className="space-y-8 text-lg text-slate-200">

                {/* USA Office */}
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 text-[#00d4ff]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p className="font-medium text-white text-xl">USA Office</p>
                    <p className="leading-relaxed">22507 Cappella Village Lane,<br />Katy, TX 77449</p>
                    <a href="tel:+13465806298" className="mt-2 inline-flex items-center gap-2 text-[#00d4ff] hover:text-white transition text-xl">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      +1 346-580-6298
                    </a>
                  </div>
                </div>

                {/* Nigeria Office & Email – similar adjustments ... */}

              </div>
            </div>

            {/* App Download */}
            <div className="pt-6">
              <h4 className="text-[#00d4ff] text-xl md:text-2xl font-bold uppercase tracking-wide mb-5">Get Cloud Sentrics App</h4>
              <div className="flex flex-col space-y-4">
                <a href="#" className="group flex items-center bg-black/80 border border-slate-600 rounded-xl px-5 py-4 w-full max-w-[240px] hover:border-[#00d4ff] transition-all">
                  <svg className="w-10 h-10 text-white mr-4" viewBox="0 0 24 24" fill="currentColor">{/* Google Play path */}</svg>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300">GET IT ON</span>
                    <span className="text-xl font-semibold text-white group-hover:text-[#00d4ff] transition">Google Play</span>
                  </div>
                </a>

                <a href="#" className="group flex items-center bg-black/80 border border-slate-600 rounded-xl px-5 py-4 w-full max-w-[240px] hover:border-[#00d4ff] transition-all">
                  <svg className="w-10 h-10 text-white mr-4" viewBox="0 0 384 512" fill="currentColor">{/* App Store path */}</svg>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-300">Download on the</span>
                    <span className="text-xl font-semibold text-white group-hover:text-[#00d4ff] transition">App Store</span>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-slate-700/60 text-base md:text-lg text-slate-300 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8">
            <p>© 2026 Cloud Sentrics. All rights reserved.</p>
            <div className="flex items-center gap-8">
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