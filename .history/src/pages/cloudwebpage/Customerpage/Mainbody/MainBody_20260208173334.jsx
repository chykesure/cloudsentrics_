import React, { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

/* ======================== */
/* Reusable Check Item      */
/* ======================== */
const CheckItem = ({ children }) => (
  <div className="flex items-start gap-3">
    <FiCheckSquare className="mt-[3px] text-[#14224a] w-[18px] h-[18px]" />
    <p className="text-[#1f1f1f] text-[17px] leading-[28px]">
      {children}
    </p>
  </div>
);

const CloudSentricsFeatures = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ======================== */}
      {/* 1. Hero Section          */}
      {/* ======================== */}
      <section className="relative bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Tagline – large, bold, centered, dark blue */}
          <h2 className="text-center text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6 md:mb-8">
            Our Customers
          </h2>

          {/* Descriptive paragraph – centered, readable size */}
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-800 font-medium leading-relaxed tracking-wide">
              Organizations across multiple industries rely on our platform to securely store, protect, and share sensitive information while improving collaboration and productivity.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl mt-6 text-gray-800 font-medium leading-relaxed tracking-wide">
              From fast-growing enterprises to regulated institutions, our solutions are trusted to deliver secure cloud storage, strong data protection, and controlled file sharing without compromising ownership or compliance.
            </p>

            {/* Added CTA Button – centered, prominent */}
            <div className="mt-10 md:mt-12">
              <a
                href="#demo" // ← Replace with your actual demo scheduling link/form/modal (e.g. Calendly, HubSpot form, etc.)
                className="inline-block bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Schedule a Demo
              </a>
            </div>
          </div>

          {/* Full-width hero image – comes after the button */}
          <div className="mt-12 md:mt-16 lg:mt-20 mb-10 md:mb-12 lg:mb-16">
            <img
              src="/brand.png"  // Replace with your actual image path
              alt="Cloud Sentrics team collaborating on secure cloud storage, data protection, and controlled file sharing solutions"
              className="w-full h-auto object-cover aspect-[16/9] md:aspect-[21/9] rounded-xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Tagline – large, bold, centered, dark blue */}
          <h2 className="text-center text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6 md:mb-8">
            What Our Customers Say
          </h2>

          {/* Descriptive paragraph – centered, readable size */}
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-800 font-medium leading-relaxed tracking-wide">
              Discover how organizations rate our platform for security, reliability, and ease of use through independent customer reviews and peer insights.
            </p>

            {/* Added CTA Button – centered, prominent */}
            <div className="mt-10 md:mt-12">
              <a
                href="#demo" // ← Replace with your actual demo scheduling link/form/modal (e.g. Calendly, HubSpot form, etc.)
                className="inline-block bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Ready to Get Started?
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="relative bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Tagline – large, bold, centered, dark blue */}
          <h2 className="text-center text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6 md:mb-8">
            Secure. Reliable. Scalable.
          </h2>

          {/* Descriptive paragraph – centered, readable size */}
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-800 font-medium leading-relaxed tracking-wide">
              Explore how our Cloud Storage, Data Protection & Secure File Sharing solutions help organizations collaborate securely while maintaining full control of their data.
            </p>
            
            {/* Added CTA Button – centered, prominent */}
            <div className="mt-10 md:mt-12">
              <a
                href="#demo" // ← Replace with your actual demo scheduling link/form/modal (e.g. Calendly, HubSpot form, etc.)
                className="inline-block bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default CloudSentricsFeatures;
