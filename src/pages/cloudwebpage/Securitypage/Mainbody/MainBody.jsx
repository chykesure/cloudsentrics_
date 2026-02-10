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
      <section className="relative bg-white from-blue-950 via-blue-900 to-indigo-950 py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Subtle radial glow overlays for the futuristic feel */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.25),transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08),transparent_60%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Title – full width, centered */}
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black tracking-tight leading-none mb-12 md:mb-16 lg:mb-20 drop-shadow-lg">
            SECURITY BY DESIGN
          </h2>

          {/* Two-column content: text left | image right */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="space-y-8 md:space-y-10 text-left">
              <p className="text-lg sm:text-xl lg:text-2xl text-black font-medium leading-relaxed">
                Cloud Sentrics is built with security at its core. Our platform is designed to protect sensitive information by default, enforcing strong controls around data storage, access, and sharing from day one.
              </p>

              <p className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed">
                We prioritize isolation, accountability, and transparency to ensure organizations can protect confidential data without compromising operational efficiency.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="
    relative 
    rounded-3xl 
    overflow-hidden 
    p-4 sm:p-6 lg:p-8
    bg-gradient-to-br from-blue-500/10 to-cyan-500/10
    backdrop-blur-sm
    shadow-[0_0_50px_rgba(34,211,238,0.4)]
  ">
                <img
                  src="/sec1.png"
                  alt="..."
                  className="
        w-full 
        max-w-[360px] sm:max-w-[440px] lg:max-w-[540px] xl:max-w-[640px]
        rounded-2xl
      "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#c4d6db] py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 xl:px-16"> {/* ← widened container */}
          {/* Main Title */}
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#14224a] tracking-tight mb-12 md:mb-16 lg:mb-20">
            How Access to Your Data Works
          </h2>

          {/* Cards Container – now wider */}
          <div className="space-y-6 md:space-y-8 max-w-6xl mx-auto"> {/* ← changed from max-w-4xl to max-w-6xl */}
            {/* Card 1 */}
            <div className="bg-[#0f172a] text-white rounded-xl p-8 md:p-10 lg:p-14 xl:p-16 shadow-xl">
              <p className="text-lg md:text-xl lg:text-xl leading-relaxed font-medium">
                Every Cloud Sentrics customer operates in their own dedicated cloud environment
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f172a] text-white rounded-xl p-8 md:p-10 lg:p-14 xl:p-16 shadow-xl">
              <p className="text-lg md:text-xl lg:text-xl leading-relaxed font-medium">
                You define who should have access to your data and what level of access they need. Cloud Sentrics securely implements and enforces those access controls on your behalf.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0f172a] text-white rounded-xl p-8 md:p-10 lg:p-14 xl:p-16 shadow-xl">
              <p className="text-lg md:text-xl lg:text-xl leading-relaxed font-medium">
                We do not maintain standing or permanent access to customer environments. If access is ever required for support or investigation, it is done only with explicit customer approval, for a specific purpose, and removed immediately after.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0f172a] text-white rounded-xl p-8 md:p-10 lg:p-14 xl:p-16 shadow-xl">
              <p className="text-lg md:text-xl lg:text-xl leading-relaxed font-medium">
                All access and activity are logged and auditable, giving customers full visibility and confidence in how their data is handled.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSentricsFeatures;
