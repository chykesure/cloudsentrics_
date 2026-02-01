import React from 'react';

const CloudFooter = () => {
  return (
    <footer className="bg-[#0a1a3f] text-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {/* Left: Company Info + Social Icons */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[#00d4ff] text-3xl md:text-4xl font-bold tracking-tight">
              Cloudsentrics
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-200 max-w-md">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations that handle sensitive information.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-200 max-w-md">
              We help businesses protect, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core—without relying on unsecured email, shared drives, or local servers.
            </p>

            {/* Social Icons - cyan circles */}
            <div className="flex space-x-5 pt-6">
              {['twitter', 'facebook', 'instagram', 'youtube', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] hover:bg-[#00d4ff]/40 transition-colors"
                >
                  {/* Placeholder SVGs - replace with real icons (e.g. from react-icons) */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[#00d4ff] text-xl md:text-2xl font-semibold">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              <li><a href="#" className="hover:text-[#00d4ff] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">Product</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">Solution</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">Resources</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">Security & Trust</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">About us</a></li>
            </ul>
          </div>

          {/* Right: Contact Us + App Download */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <h4 className="text-[#00d4ff] text-xl md:text-2xl font-semibold">Contact Us</h4>
              <div className="space-y-5 text-base md:text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-[#00d4ff] text-xl">📍</span>
                  <div>
                    <p>22507 Cappella Village Lane, Katy, TX 77449</p>
                    <p className="text-[#00d4ff] font-medium flex items-center gap-2 mt-1">
                      <span>☎</span> +1 346-580-6298
                    </p>
                    <p className="text-[#00d4ff] font-medium flex items-center gap-2 mt-1">
                      <span>✉</span> info@cloudsentrics.org
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#00d4ff] text-xl">📍</span>
                  <div>
                    <p>No. 6 Aare Avenue, New Bodija Estate, Ibadan, Oyo State-Nigeria.</p>
                    <p className="text-[#00d4ff] font-medium flex items-center gap-2 mt-1">
                      <span>☎</span> +234 (0)705 663 9388
                    </p>
                    <p className="text-[#00d4ff] font-medium flex items-center gap-2 mt-1">
                      <span>☎</span> +234 (0)814 457 3546
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* App Download */}
            <div className="space-y-6">
              <h4 className="text-[#00d4ff] text-xl md:text-2xl font-semibold">Get Cloud Sentrics App</h4>
              <div className="flex flex-col space-y-4">
                <a href="#" className="block max-w-[200px]">
                  <img 
                    src="/google.png" 
                    alt="GET IT ON Google Play" 
                    className="h-14 w-full object-contain" 
                  />
                </a>
                <a href="#" className="block max-w-[200px]">
                  <img 
                    src="/app-store-badge.png" 
                    alt="Download on the App Store" 
                    className="h-14 w-full object-contain" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-slate-700/50 text-center text-sm md:text-base">
          © 2026 Cloud Sentrics. All rights reserved.
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-[#00d4ff] transition">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-[#00d4ff] transition">Terms & Conditions</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-[#00d4ff] transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CloudFooter;