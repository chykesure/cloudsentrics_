import React from 'react';

const CloudFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">Cloud Sentrics</h3>
          <p className="text-sm leading-relaxed">
            Secure cloud storage and controlled file sharing platform built for organizations handling sensitive information.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Product</a></li>
            <li><a href="#" className="hover:text-white transition">Solutions</a></li>
            <li><a href="#" className="hover:text-white transition">Resources</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm space-y-1">
            <span>+1 (346) 666-6928 (US)</span><br />
            <span>+234 070 5705 6938 (NG)</span><br />
            <span>info@cloudsentrics.com</span>
          </p>
          <p className="text-sm mt-4">
            USA: 2501 Cappella Village Lane, Katy, TX 77449<br />
            Nigeria: No. 6 Aare Avenue, New Bodija Estate, Ibadan
          </p>
        </div>

        {/* App Badges */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get the App</h4>
          <div className="flex space-x-4">
            <img src="/assets/google-play-badge.png" alt="Google Play" className="h-12" />
            <img src="/assets/app-store-badge.png" alt="App Store" className="h-12" />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm border-t border-slate-800 pt-8">
        © 2026 Cloud Sentrics. All rights reserved. | Privacy Policy | Terms & Conditions
      </div>
    </footer>
  );
};

export default CloudFooter;