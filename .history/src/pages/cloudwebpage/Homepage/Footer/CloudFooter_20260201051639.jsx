import React from 'react';
import { motion } from 'framer-motion';

const CloudFooter = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a1a3f] to-[#071029] text-slate-300 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle particle/glow overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-white text-3xl md:text-4xl font-bold">Cloud Sentrics</h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-200 max-w-md">
              Cloud Sentrics provides secure cloud storage and controlled file sharing for organizations handling sensitive information.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25h8.91l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg>
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.5 15.5h-11v-11h11v11z"/></svg>
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 14h-10v-2h10v2zm0-4h-10v-2h10v2zm0-4h-10V8h10v2z"/></svg>
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-base">
              <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Product</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Solution</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Resources</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Security & Trust</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">About us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4 text-base">
              <div>
                <p className="text-cyan-400">USA:</p>
                <p>22507 Cappella Village Lane, Katy, TX 77449</p>
                <p>+1 346-580-6298</p>
              </div>
              <div>
                <p className="text-cyan-400">Nigeria:</p>
                <p>No. 6 Aare Avenue, New Bodija Estate, Ibadan</p>
                <p>+234 070 5705 6938</p>
              </div>
              <p className="text-cyan-400">Email: info@cloudsentrics.org</p>
            </div>
          </div>

          {/* Get the App */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-6">Get Cloud Sentrics App</h4>
            <div className="space-y-4">
              <a href="#" className="block">
                <img src="/Goo.png" alt="Google Play" className="h-12 w-auto" />
              </a>
              <a href="#" className="block">
                <img src="/app-store-badge.png" alt="App Store" className="h-12 w-auto" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center text-sm">
          © 2026 Cloud Sentrics. All rights reserved.
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-cyan-400 transition">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-cyan-400 transition">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-cyan-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CloudFooter;