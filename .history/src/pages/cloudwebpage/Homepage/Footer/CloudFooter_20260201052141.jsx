import React from 'react';

const CloudFooter = () => {
  return (
    <footer className="bg-[#0a1a3f] text-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {/* Left: Company Info + Social Icons */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-[#06b6d4] text-3xl md:text-4xl font-bold tracking-tight">
              Cloudsentrics
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-200 max-w-md">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations that handle sensitive information.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-slate-200 max-w-md">
              We help businesses protect, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core—without relying on unsecured email, shared drives, or local servers.
            </p>

            {/* Social Icons - cyan circles */}
            <div className="flex space-x-4 pt-4">
              {['twitter', 'facebook', 'instagram', 'youtube', 'linkedin'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/40 transition-colors"
                >
                  {/* Replace with real icons from react-icons */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-[#06b6d4] text-xl md:text-2xl font-semibold">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              <li><a href="#" className="hover:text-[#06b6d4] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition">Product</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition">Solution</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition">Resources</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition">Security & Trust</a></li>
              <li><a href="#" className="hover:text-[#06b6d4] transition">About us</a></li>
            </ul>
          </div>

          {/* Right: Contact Us + App Download */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <h4 className="text-[#06b6d4] text-xl md:text-2xl font-semibold">Contact Us</h4>
              <div className="space-y-5 text-base md:text-lg">
                <div>
                  <p className="text-cyan-400 font-medium">USA:</p>
                  <p>22507 Cappella Village Lane, Katy, TX 77449</p>
                  <p>+1 346-580-6298</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-medium">Nigeria:</p>
                  <p>No. 6 Aare Avenue, New Bodija Estate, Ibadan, Oyo State-Nigeria.</p>
                  <p>+234 (0)705 663 9388</p>
                  <p>+234 (0)814 457 3546</p>
                </div>
                <p className="text-cyan-400 font-medium">
                  Email: <a href="mailto:info@cloudsentrics.org" className="hover:underline">info@cloudsentrics.org</a>
                </p>
              </div>
            </div>

            {/* App Download */}
            <div className="space-y-6">
              <h4 className="text-[#06b6d4] text-xl md:text-2xl font-semibold">Get Cloud Sentrics App</h4>
              <div className="flex flex-col space-y-4">
                <a href="#" className="block">
                  <img 
                    src="/google-play-badge.png" 
                    alt="GET IT ON Google Play" 
                    className="h-14 w-auto" 
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="/app-store-badge.png" 
                    alt="Download on the App Store" 
                    className="h-14 w-auto" 
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
            <a href="#" className="hover:text-[#06b6d4] transition">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-[#06b6d4] transition">Terms & Conditions</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-[#06b6d4] transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CloudFooter;