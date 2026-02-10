import React, { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { Link } from "react-router-dom";   // ← ADD THIS

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
      <section className="relative bg-white from-blue-950 via-blue-900 to-indigo-950 py-20 md:py-28 lg:py-32 overflow-hidden text-white">
        {/* Subtle radial glow overlays */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(34,211,238,0.28),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.22),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.12),transparent_65%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl text-black sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-10 md:mb-14 lg:mb-16">
            Stay Informed with Cloud Sentrics
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-black sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed opacity-95">
              Keep up with our latest insights, updates, and innovative ideas in cloud storage, data protection, and secure file sharing.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-blue-950 via-indigo-950 to-blue-950 py-16 md:py-24 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(79,70,229,0.15),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-10 md:mb-14 lg:mb-16">
            News TV channel
          </h2>

          <div className="relative mx-auto max-w-5xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/40 border border-blue-800/30">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-blue-950/20 pointer-events-none" />

            <img
              src="/news15.png"
              alt="News TV channel - Conference event with large screen"
              className="w-full h-auto object-cover block"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border-4 border-white/30 hover:bg-black/60 transition-all duration-300 group">
                <svg
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-center sm:bottom-8 md:bottom-10">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-lg">
                GO GREEN . GO DYNAMIC…
              </p>
            </div>
          </div>

          <p className="text-center mt-10 md:mt-14 text-lg sm:text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Live from the conference hall latest updates, insights and dynamic discussions
          </p>
        </div>
      </section>

      <section className="bg-[white] py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#14224a] tracking-tight mb-12 md:mb-16 lg:mb-20">
            Recent News
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
            {/* Card 1 – Nigeria Launch */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-400/30 flex flex-col h-full">
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
                <img
                  src="/news4.png"
                  alt="Cloud Sentrics launch in Nigeria - secure cloud shield"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3.5xl font-bold text-[#14224a] mb-4 leading-tight">
                  Cloud Sentrics Officially Launches Operations in Nigeria, Expanding Secure Cloud Storage and Data Protection Services Across Africa
                </h3>

                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6 flex-grow">
                  Ibadan, Oyo State, Nigeria on January 14, 2026 Cloud Sentrics, a U.S.-based cloud solutions and training company, has officially launched its operations in Nigeria, with its Nigerian office located in Ibadan, Oyo State. The launch marks a major milestone in the company’s expansion across Africa and reinforces its commitment to delivering secure cloud storage, data protection, and secure file sharing solutions to organizations operating in regulated environments.
                </p>

                <div className="mt-auto">
                  <Link
                    to="/news-page/news/launch-nigeria-2026"
                    className="inline-block bg-[#14224a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors text-base md:text-lg"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 – Founder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-400/30 flex flex-col h-full">
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
                <img
                  src="/news1.png"
                  alt="Oluwadamilare Odo - Founder of Cloud Sentrics"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3.5xl font-bold text-[#14224a] mb-4 leading-tight">
                  Meet the Founder: Oluwadamilare Odo, Driving Secure Cloud Innovation
                </h3>

                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6 flex-grow">
                  Cloud Sentrics was founded by Oluwadamilare Odo, a cloud security and DevSecOps professional whose career journey was shaped by real-world problem solving and hands-on experience with complex cloud environments. Without a traditional roadmap, he built expertise across cloud engineering, security, and infrastructure automation.
                </p>

                <div className="mt-auto">
                  <Link
                    to="/news-page/news/founder-oluwadamilare-odo"
                    className="inline-block bg-[#14224a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors text-base md:text-lg"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[white] py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
            {/* Card 3 – Education & Enterprise */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-400/30 flex flex-col h-full">
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
                <img
                  src="/news13.png"
                  alt="Education and enterprise impact"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3.5xl font-bold text-[#14224a] mb-4 leading-tight">
                  Expanding Impact Through Education and Enterprise Cloud Solutions
                </h3>

                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6 flex-grow">
                  Since its inception in July 2023, Cloud Sentrics has grown into a respected provider of cloud education and consulting services. The company has trained over 100 students globally, many of whom have transitioned into roles in cloud engineering, cybersecurity, and DevSecOps.
                </p>

                <div className="mt-auto">
                  <Link
                    to="/news-page/news/education-enterprise-impact"
                    className="inline-block bg-[#14224a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors text-base md:text-lg"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 4 – Trusted Partner */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-400/30 flex flex-col h-full">
              <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
                <img
                  src="/news14.png"
                  alt="Trusted compliant partner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3.5xl font-bold text-[#14224a] mb-4 leading-tight">
                  Cloud Sentrics: A Trusted Partner for Secure, Compliant Cloud Services
                </h3>

                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-6 flex-grow">
                  Beyond training, Cloud Sentrics provides cloud consulting and enterprise solutions for organizations seeking secure, scalable, and compliant cloud environments. Its services include:
                </p>

                <div className="mt-auto">
                  <Link
                    to="/news-page/news/trusted-compliant-partner"
                    className="inline-block bg-[#14224a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors text-base md:text-lg"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSentricsFeatures;