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
      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 tracking-tight mb-10 md:mb-12">
              Why NDPC Compliance Matters?
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 text-lg sm:text-xl text-gray-800 leading-relaxed">
              <p>
                NDPC is a key data protection regulation designed to safeguard
                personal and sensitive information. It ensures that
                organizations in Nigeria handle personal data responsibly.
                Compliance is not optional organizations can face significant
                fines, legal consequences, and reputational damage if they fail
                to meet these standards.
              </p>

              <p>
                Make your file sharing and storage secure with Cloud Sentrics.
                Our platform provides a fully private, enterprise-ready cloud
                solution, offering on-premises or regional cloud deployment with
                robust security features. With Cloud Sentrics, you maintain full
                control over your data while ensuring your organization remains
                NDPC compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* 2. Full-width Image      */}
      {/* ======================== */}
      <section className="bg-gray-100 py-8 md:py-12 lg:py-16">
        <div className="w-full">
          <img
            src="/ndpc1.png"
            alt="Secure collaboration with Cloud Sentrics"
            className="w-full h-auto object-cover max-h-[70vh] md:max-h-[80vh] lg:max-h-[85vh]"
            loading="lazy"
          />
        </div>
      </section>

      {/* ======================== */}
      {/* 3. Compliance Section    */}
      {/* ======================== */}
      <section className="bg-[#c4d6db] py-20 md:py-24 lg:py-28">
        <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-stretch">

            {/* Left Card - NDPC */}
            <div className="bg-[#eeeeee] p-10 md:p-12 lg:p-16 flex flex-col rounded-lg shadow-md">
              <h3 className="text-[28px] md:text-[32px] font-bold text-[#14224a] leading-tight mb-10">
                NDPC
                <br />
                (Nigeria Data Protection Regulation)
              </h3>

              <div className="space-y-7 md:space-y-8 flex-1">
                <CheckItem>
                  Data hosted in the South African AWS region, ensuring regional compliance.
                </CheckItem>
                <CheckItem>
                  Full control over personal and business data storage, access, and sharing.
                </CheckItem>
                <CheckItem>
                  Access logging and audit trails for accountability.
                </CheckItem>
                <CheckItem>
                  Encryption of data at rest and in transit.
                </CheckItem>
                <CheckItem>
                  Role-based, least-privilege access controls for staff and users.
                </CheckItem>
              </div>
            </div>

            {/* Right Card - Additional Security Measures */}
            <div className="bg-[#eeeeee] p-10 md:p-12 lg:p-16 flex flex-col rounded-lg shadow-md">
              <h3 className="text-[28px] md:text-[32px] font-bold text-[#14224a] leading-tight mb-10">
                Additional Security Measures Across
                <br />
                All Regulations
              </h3>

              <div className="space-y-7 md:space-y-8 flex-1">
                <CheckItem>Two-Factor Authentication (2FA).</CheckItem>
                <CheckItem>Firewall and network security.</CheckItem>
                <CheckItem>
                  Continuous monitoring and alerts for unusual activity.
                </CheckItem>
                <CheckItem>
                  Fully auditable and enterprise-ready for compliance verification.
                </CheckItem>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSentricsFeatures;
