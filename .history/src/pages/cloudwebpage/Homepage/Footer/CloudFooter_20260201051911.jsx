import React from 'react';
import { motion } from 'framer-motion';

const CloudFooter = () => {
  return (
    <footer className="bg-[#0a1a3f] text-slate-300 py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle glow overlay for premium feel */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main grid - 3 columns on desktop, stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          {/* Left: Company Info */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              Cloud Sentrics
            </h3>
            <p className="text-base md:text-lg leading-relaxed max-w-md">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations handling sensitive information.
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-md">
              We help businesses protect, manage, and deliver critical data with strong security controls, clear accountability, and compliance at the core—without relying on unsecured email, shared drives, or local servers.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 pt-4">
              {['twitter', 'facebook', 'instagram', 'youtube', 'linkedin'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/40 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {/* Placeholder - replace with actual icons from react-icons */}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Center: Navigation */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-white text-xl md:text-2xl font-semibold">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Product</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Solution</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Resources</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Security & Trust</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">About us</a></li>
            </ul>
          </div>

          {/* Right: Contact Us + App Download */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-6">
              <h4 className="text-white text-xl md:text-2xl font-semibold">Contact Us</h4>
              <div className="space-y-5 text-base md:text-lg">
                <div>
                  <p className="text-cyan-400 font-medium">USA:</p>
                  <p>22507 Cappella Village Lane, Katy, TX 77449</p>
                  <p>+1 346-580-6298</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-medium">Nigeria:</p>
                  <p>No. 6 Aare Avenue, New Bodija Estate, Ibadan</p>
                  <p>+234 070 5705 6938</p>
                </div>
                <p className="text-cyan-400 font-medium">
                  Email: <a href="mailto:info@cloudsentrics.org" className="hover:underline">info@cloudsentrics.org</a>
                </p>
              </div>
            </div>

            {/* App Download */}
            <div className="space-y-6">
              <h4 className="text-white text-xl md:text-2xl font-semibold">Get Cloud Sentrics App</h4>
              <div className="flex flex-col space-y-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="#"
                  className="block"
                >
                  <img 
                    src="/google-play-badge.png" 
                    alt="Get it on Google Play" 
                    className="h-14 w-auto" 
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="#"
                  className="block"
                >
                  <img 
                    src="/app-store-badge.png" 
                    alt="Download on the App Store" 
                    className="h-14 w-auto" 
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-slate-700/50 text-center text-sm md:text-base">
          © 2026 Cloud Sentrics. All rights reserved.
          <div className="mt-4 flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-cyan-400 transition">Terms & Conditions</a>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-cyan-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CloudFooter;