import React from "react";
import { Link } from "react-router-dom";

const logo = "/assets/logo.jpg";
const heroImage = "/assets/ai.jpg";

const AboutCloud = () => {
  return (
    <div className="bg-white min-h-screen text-[#0d1b2a]">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Bell Logo" className="h-12 w-auto" />
          <h1 className="text-2xl font-semibold">Bell Integration</h1>
        </div>
        <button className="bg-[#2e2a84] text-white px-4 py-2 rounded hover:bg-[#1c1a6d]">
          Contact us to book a consultation
        </button>
      </header>

      {/* Top Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
        {/* Left Text */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-600 font-semibold">About Bell Integration</p>
            <h2 className="text-3xl font-bold border-l-4 border-blue-700 pl-4 mt-2">
              Driving Digital<br />
              Transformation
            </h2>
          </div>

          <div className="bg-white p-6 shadow rounded space-y-4">
            <p className="text-lg font-semibold text-gray-800">
              For over 25 years, Bell’s market-leading technology consultation and managed services have enabled organisations to transform their IT capabilities and elevate their business productivity and cost efficiency.
            </p>
            <p className="font-semibold text-gray-800">
              Head-quartered in the UK and employing over 1000 people across the globe.
            </p>
            <p className="text-sm text-gray-700">
              We are trusted by many global Fin-techs, Telco’s, and government and public sector organisations, our customers depend on us to ensure their IT services and infrastructure are always available, scalable, sustainable, and resilient.
            </p>
          </div>
        </div>

        {/* Right Image + More Info */}
        <div className="space-y-6">
          <div className="w-full h-64 overflow-hidden rounded shadow">
            <img
              src={heroImage}
              alt="Skyscraper"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white p-6 shadow rounded space-y-4">
            <h3 className="text-lg font-semibold text-[#0d1b2a] mb-4">More about Bell</h3>
            <ul className="space-y-2 list-none text-sm text-blue-700">
              <li><Link to="#" className="hover:underline">Executive Team</Link></li>
              <li><Link to="#" className="hover:underline">Board</Link></li>
              <li><Link to="#" className="hover:underline">Our Vision and Values</Link></li>
              <li><Link to="#" className="hover:underline">History of Bell Integration</Link></li>
              <li><Link to="#" className="hover:underline">Partners</Link></li>
              <li><Link to="#" className="hover:underline">Sustainability Statement</Link></li>
              <li><Link to="#" className="hover:underline">Corporate Responsibility</Link></li>
              <li><Link to="#" className="hover:underline">Certifications & Accreditations</Link></li>
              <li><Link to="#" className="hover:underline">Corporate Documents</Link></li>
            </ul>
          </div>

          <div>
            <a
              href="#"
              className="inline-block text-sm text-blue-800 underline hover:text-blue-900"
            >
              Download Our Brochure
            </a>
          </div>
        </div>
      </section>

      


    </div>
  );
};

export default AboutCloud;
