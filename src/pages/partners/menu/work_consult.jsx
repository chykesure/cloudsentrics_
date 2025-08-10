import React from "react";
import { FaArrowRight, FaTools, FaLock, FaUserFriends, FaArrowDown } from "react-icons/fa";

const WorkConsult = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 flex flex-col lg:flex-row gap-10 mt-[-60px]">
      {/* === Main Content === */}
      <div className="lg:w-2/3 bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Empowering Your Business with Cutting-Edge Technology Solutions
        </h2>
        <p className="text-gray-800 font-medium text-lg leading-relaxed">
          At the heart of every successful digital transformation is the ability to leverage the right technology.
          We help you innovate with the latest infrastructure, streamline your operations, and align your technology
          with business goals. Whether you're modernizing your IT systems, deploying new platforms, or optimizing processes,
          our technology solutions deliver scalable and sustainable results.
        </p>
        <p className="mt-5 text-gray-600 text-base leading-relaxed">
          Our experts assess your current environment, recommend state-of-the-art technologies, and guide you through
          the implementation process. Whether you are enhancing your data center capabilities, adopting cloud solutions,
          or optimizing user experiences, we ensure that your infrastructure is primed for future growth and performance.
        </p>
        <p className="mt-5 text-gray-600 text-base leading-relaxed">
          We integrate advanced technologies like AI, cloud computing, and machine learning to drive innovation.
          Through continuous optimization, we help you make smarter decisions, improve operational efficiency, and
          stay ahead of market trends.
        </p>
        <p className="mt-5 text-gray-600 text-base leading-relaxed">
          Security is built into every solution — from safeguarding your network to protecting sensitive data.
          We employ advanced security measures and risk management strategies to ensure that your infrastructure
          is resilient and secure against evolving threats.
        </p>
      </div>

      {/* === Sidebar === */}
      <aside className="lg:w-1/3 space-y-8">
        {/* Consultation Button */}
        <div className="bg-gradient-to-r from-[#1f426c] to-blue-600 text-white px-6 py-4 rounded-xl shadow-md flex items-center justify-between cursor-pointer hover:opacity-90 transition">
          <span className="font-semibold text-lg">Book a Free Consultation</span>
          <FaArrowDown className="ml-3" />
        </div>

        {/* Services List */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Solutions</h3>
          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-center gap-3">
              <FaUserFriends className="text-blue-600" />
              End User Services
            </li>
            <li className="flex items-center gap-3">
              <FaTools className="text-blue-600" />
              Support Systems
            </li>
            <li className="flex items-center gap-3">
              <FaLock className="text-blue-600" />
              Embedded Security
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
};

export default WorkConsult;
