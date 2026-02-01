import React from 'react';

const CloudFooter = () => {
  return (
    <footer className="bg-[#0a1a3f] text-white pt-12 pb-6 md:pt-16 md:pb-10 font-sans relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12">
          
          {/* Left: Company Info */}
          <div className="space-y-6">
            <h3 className="text-[#00d4ff] text-4xl md:text-5xl font-bold tracking-tight">
              Cloudsentrics
            </h3>
            <p className="text-base leading-relaxed text-gray-300">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations that handle sensitive information.
            </p>
            <p className="text-base leading-relaxed text-gray-300">
              We help businesses protect, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core—without relying on unsecured email, shared drives, or local servers.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 pt-3">
              <a href="#" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16.5v-9l8 4.5-8 4.5z"/></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.029-3.058-1.867-3.058-1.867 0-2.152 1.459-2.152 2.966v5.696h-3v-11h2.882v1.509h.039c.401-.757 1.381-1.557 2.837-1.557 3.033 0 3.597 1.997 3.597 4.597v6.451z"/></svg>
              </a>
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="space-y-6">
            <h4 className="text-[#00d4ff] text-2xl font-bold">Navigation</h4>
            <ul className="space-y-3 text-base text-gray-300">
              <li><a href="#" className="hover:text-[#00d4ff] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">Product</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">Solution</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">Resources</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">Security & Trust</a></li>
              <li><a href="#" className="hover:text-[#00d4ff] transition">About us</a></li>
            </ul>
          </div>

          {/* Right: Contact Us + App */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[#00d4ff] text-2xl font-bold">Contact Us</h4>
              <div className="mt-5 space-y-6 text-sm md:text-base text-gray-300">
                {/* USA Office */}
                <div>
                  <p>22507 Cappella Village Lane,</p>
                  <p>Katy, TX 77449</p>
                  <p className="mt-1">
                    <a href="tel:+13465806298" className="text-[#00d4ff] hover:text-white">+1 346-580-6298</a>
                  </p>
                </div>

                {/* Nigeria Office */}
                <div>
                  <p>No. 6 Aare Avenue, New Bodija Estate.</p>
                  <p>Ibadan, Oyo State-Nigeria.</p>
                  <p className="mt-1">
                    <a href="tel:+2347056639388" className="text-[#00d4ff] hover:text-white">+234(0)705 663 9388</a>
                    <br />
                    <a href="tel:+2348144573546" className="text-[#00d4ff] hover:text-white">+234(0)814 457 3546</a>
                  </p>
                </div>

                {/* Email */}
                <div className="pt-2">
                  <a href="mailto:info@cloudsentrics.org" className="text-[#00d4ff] hover:text-white">
                    info@cloudsentrics.org
                  </a>
                </div>
              </div>
            </div>

            {/* App Download */}
            <div>
              <h4 className="text-[#00d4ff] text-lg font-bold mb-4">Get Cloud Sentrics App</h4>
              <div className="flex flex-col space-y-4">
                <a href="#" className="inline-block">
                  <img 
                    src="https://developer.android.com/images/brand/Get_it_on_Google_play.svg" 
                    alt="Get it on Google Play" 
                    className="h-14 w-auto"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-14 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700/50 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Cloudsentricks. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#00d4ff]">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#00d4ff]">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-[#00d4ff]">Sitemap</a>
          </div>
          <p className="text-gray-500">235 ≡ 75</p>
        </div>
      </div>
    </footer>
  );
};

export default CloudFooter;