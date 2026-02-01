import React from 'react';
import { motion } from 'framer-motion';

const CloudFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a1a3f] to-[#071029] text-slate-200 py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle futuristic particle/glow overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
          {/* Company Info */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
              Cloud Sentrics
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-300 max-w-md">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations handling sensitive information.
            </p>
            <div className="flex space-x-5">
              {['twitter', 'facebook', 'instagram', 'youtube', 'linkedin'].map((icon) => (
                <motion.a
                  key={icon}
                  href="#"
                  whileHover={{ scale: 1.15, color: '#06b6d4' }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    {/* Replace with actual icons or use react-icons */}
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-white text-xl md:text-2xl font-semibold">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
              {['Home', 'Product', 'Solution', 'Resources', 'Security & Trust', 'About us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-6 md:space-y-8">
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
              <p className="text-cyan-400 font-medium">Email: <a href="mailto:info@cloudsentrics.org" className="hover:underline">info@cloudsentrics.org</a></p>
            </div>
          </div>

          {/* Get the App */}
          <div className="space-y-6 md:space-y-8">
            <h4 className="text-white text-xl md:text-2xl font-semibold">Get Cloud Sentrics App</h4>
            <div className="flex flex-col space-y-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="block"
              >
                <img src="/Google.png" alt="Get it on Google Play" className="h-14 w-auto" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="block"
              >
                <img src="/Apple.png" alt="Download on the App Store" className="h-14 w-auto" />
              </motion.a>
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