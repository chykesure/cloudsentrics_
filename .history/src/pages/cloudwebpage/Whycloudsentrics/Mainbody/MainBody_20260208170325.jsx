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
          {/* Full-width hero image */}
          <div className="mb-10 md:mb-12 lg:mb-16">
            <img
              src="/why1.png"  // Replace with your actual image (e.g. team around screens in high-tech secure environment)
              alt="Cloud Sentrics team collaborating on secure cloud storage, data protection, and controlled file sharing solutions"
              className="w-full h-auto object-cover aspect-[16/9] md:aspect-[21/9] transition-transform duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Tagline – large, bold, centered, dark blue */}
          <h2 className="text-center text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-6 md:mb-8">
            Secure. Compliant. Built for Real-World Use.
          </h2>

          {/* Descriptive paragraph – centered, readable size */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-800 font-medium leading-relaxed tracking-wide">
              Cloud Sentrics is designed for organizations that take data security, privacy, and compliance seriously. We provide secure cloud storage, data protection, and controlled file sharing solutions that help businesses collaborate safely while maintaining full control over their information.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Heading Section */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              Why Organizations Choose
            </h2>
            <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">
              Cloud Sentrics
            </h3>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#0f172a] text-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center">
              <div className="text-5xl mb-6 text-cyan-400">🛡️</div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                Security First, Always.
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We embed security at every layer of our platform. From controlled access and encrypted storage to secure file sharing with One-Time Passcodes (OTP), Cloud Sentrics ensures sensitive data remains protected against unauthorized access.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f172a] text-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center">
              <div className="text-5xl mb-6 text-cyan-400">🤝</div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                Compliance You Can Trust
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Cloud Sentrics is NDPC-compliant and CAC-registered in Nigeria, with solutions designed to support GDPR and HIPAA-aligned data protection requirements. Our infrastructure and processes help organizations meet regulatory obligations without complexity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0f172a] text-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center">
              <div className="text-5xl mb-6 text-cyan-400">🔒</div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                Data Control and Ownership.
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Your data remains under your control at all times. Cloud Sentrics is built to prevent vendor lock-in and hidden access paths, giving organizations transparency, ownership, and confidence in how their data is stored and shared.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#0f172a] text-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center">
              <div className="text-5xl mb-6 text-cyan-400">🤲</div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                Secure Collaboration Without Friction
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Enable teams, partners, and external stakeholders to collaborate securely without relying on unsecure or untracked email attachments. Files are shared through controlled links with One-Time Passcodes (OTP), with access expiration controls, audit logs.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#0f172a] text-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center">
              <div className="text-5xl mb-6 text-cyan-400">🌍</div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                Built for Africa, Ready for the World
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Hosted on secure cloud infrastructure within the African region and supported locally from Nigeria, Cloud Sentrics understands regional compliance needs while meeting global cloud security standards.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#0f172a] text-white rounded-2xl p-8 shadow-xl flex flex-col items-center text-center">
              <div className="text-5xl mb-6 text-cyan-400">🧑‍💼</div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                Proven Real-World Expertise
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Our solutions are built by professionals with hands-on experience in cloud engineering, DevSecOps, and enterprise security. The same expertise used to train cloud professionals is applied to protecting organizational data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Hero Image with futuristic interface */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-none">
              <img
                src="/why2.png"  // Replace with your actual image (e.g. team around screens in high-tech secure environment)
                alt="Cloud Sentrics team collaborating on secure cloud storage, data protection, and controlled file sharing solutions"
                className="w-full h-auto object-cover aspect-[16/9] md:aspect-[21/9] transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
              {/* Optional subtle glow overlay for futuristic feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            {/* Right: Target Audience List */}
            <div className="order-2 lg:order-none">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                Who Cloud Sentrics Is Built For
              </h3>
              <ul className="space-y-6 text-lg sm:text-xl md:text-2xl font-medium">
                <li className="flex items-start">
                  <span className="text-cyan-400 text-2xl mr-4">✔</span>
                  <span>Enterprises and SMEs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 text-2xl mr-4">✔</span>
                  <span>Financial institutions and fintechs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 text-2xl mr-4">✔</span>
                  <span>Healthcare and laboratories.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 text-2xl mr-4">✔</span>
                  <span>Educational institutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 text-2xl mr-4">✔</span>
                  <span>Legal and professional services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 text-2xl mr-4">✔</span>
                  <span>Real estate and regulated industries.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Difference + CTA */}
          <div className="mt-16 md:mt-24 text-center bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#1e293b] py-12 md:py-16 rounded-3xl shadow-2xl border border-blue-900/30">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
              The Cloud Sentrics Difference
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium max-w-4xl mx-auto leading-relaxed mb-10 text-gray-200">
              We don’t just store files we protect data, enforce trust, and enable secure collaboration.
            </p>

            {/* CTA Button – now with cyan accent for pop */}
            <div className="inline-block">
              <a
                href="#demo" // Replace with your actual demo form/link
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xl md:text-2xl px-10 py-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSentricsFeatures;
