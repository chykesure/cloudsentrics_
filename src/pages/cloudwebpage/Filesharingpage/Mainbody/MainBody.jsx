import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqItems = [
  {
    question: "Where is Cloud Sentrics hosted if we use the cloud?",
    answer:
      "Cloud Sentrics uses AWS infrastructure, with servers located in the South African region to meet NDPC compliance requirements. This ensures your data remains within your jurisdiction and complies with local data protection regulations.",
  },
  {
    question: "What additional security features are included?",
    answer: (
      <>
        Beyond secure storage, Cloud Sentrics includes multiple layers of protection:
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
          <li>Two-Factor Authentication (2FA)</li>
          <li>End-to-End Encryption (E2EE)</li>
          <li>Encryption at Rest</li>
          <li>Encryption in Transit</li>
          <li>Account Isolation</li>
          <li>IAM Identity Center</li>
          <li>Data Security Incidence</li>
        </ul>
      </>
    ),
  },
  {
    question: "How does Cloud Sentrics handle file sharing?",
    answer:
      "Cloud Sentrics provides secure file hosting, controlled access, and verified delivery within the platform. While third-party tools (e.g., messaging apps) can be used, we cannot guarantee delivery or reliability on external platforms.",
  },
  {
    question: "What is the recommended way to share files securely?",
    answer: (
      <>
        Use Email-based sharing with One-Time Password (OTP) verification.
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
          <li>Secure file hosting</li>
          <li>Verified recipient access</li>
          <li>Controlled access</li>
          <li>Access logging and visibility</li>
          <li>Controlled file availability</li>
        </ul>
      </>
    ),
  },
];

const CloudSentricsFeatures = () => {
  const [openIndex, setOpenIndex] = useState(0); // first one open by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* ======================== */}
      {/* 1. Hero + Flip Cards     */}
      {/* ======================== */}
      <section className="bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Intro text + tagline */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed tracking-wide">
              Cloud Sentrics enables teams to collaborate securely in the cloud while maintaining full control over their data.
              Users can easily store, share, and access files from any device or location, without compromising security or compliance.
              Our platform ensures no hidden access, vendor lock-in, or backdoors, giving organizations complete data control and sovereignty.
            </p>

            <h3 className="mt-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Store. Secure. Share.
            </h3>
          </div>

          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {[
              {
                frontIcon: "☁️",
                frontTitle: "Seamless Cloud Collaboration",
                frontDesc: "Work together in real-time, whether your team is in the office or remote.",
                backIcon: "🔒",
                backTitle: "Real-Time Sync & Security",
                backDesc: "End-to-end encryption keeps your collaboration private and protected.",
              },
              {
                frontIcon: "📂",
                frontTitle: "Integrates with Existing Storage",
                frontDesc: "Connect Cloud Sentrics to your current storage systems for a unified workflow.",
                backIcon: "🔄",
                backTitle: "One-Click Integration",
                backDesc: "Seamless setup with your existing tools — no migration headaches.",
              },
              {
                frontIcon: "🌐",
                frontTitle: "Universal Access",
                frontDesc: "Access and edit your files securely from any device, anytime, anywhere.",
                backIcon: "📱",
                backTitle: "Cross-Device Sync",
                backDesc: "Changes reflect instantly across desktop, tablet, and mobile.",
              },
              {
                frontIcon: "🏠",
                frontTitle: "Work Anywhere",
                frontDesc: "Stay productive on desktop, tablet, or mobile — work is always within reach.",
                backIcon: "🌍",
                backTitle: "Location Independent",
                backDesc: "Secure access from anywhere — home, office, or on the go.",
              },
            ].map((card, idx) => (
              <div key={idx} className="group h-80 md:h-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-2xl shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[rotateY(180deg)] bg-[#0f172a] text-white border border-slate-700/40">
                  {/* Front */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10 [backface-visibility:hidden]">
                    <div className="text-7xl md:text-8xl mb-6 opacity-90">{card.frontIcon}</div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                      {card.frontTitle}
                    </h4>
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                      {card.frontDesc}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-10 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0f172a]/95">
                    <div className="text-6xl mb-6">{card.backIcon}</div>
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">{card.backTitle}</h4>
                    <p className="text-slate-200 text-base md:text-lg">{card.backDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* 2. Full-width Image      */}
      {/* ======================== */}
      <section className="bg-gray-100 py-8 md:py-12 lg:py-16">
        <div className="w-full">
          <img
            src="/file1.png"
            alt="Secure collaboration with Cloud Sentrics"
            className="w-full h-auto object-cover max-h-[70vh] md:max-h-[80vh] lg:max-h-[85vh]"
            loading="lazy"
          />
        </div>
      </section>

      {/* ======================== */}
      {/* 3. FAQ / Learn section   */}
      {/* ======================== */}
      <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 tracking-tight leading-tight">
              Learn About Cloud Sentrics
            </h2>
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-blue-900">
              Secure File Sharing and Storage
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg md:text-xl font-medium text-gray-900">
                      Q: {item.question}
                    </span>
                    <FaChevronDown
                      className={`text-blue-700 text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="px-6 pb-6 pt-3 text-gray-700 leading-relaxed text-base md:text-lg">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-16 md:py-20 lg:py-28 min-h-[40vh] md:min-h-[50vh] flex items-center justify-center text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Customer Responsibility:
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed opacity-90 max-w-3xl mx-auto">
              Choose appropriate sharing channels and ensure recipients follow recommended methods for secure and consistent access.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSentricsFeatures;