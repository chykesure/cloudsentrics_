import React from "react";

// Dummy images and titles
const sections = [
  { title: "Executive Team", image: "/assets/comu1.jpg" },
  { title: "Our Vision And Values", image: "/assets/vision.jpg" },
  { title: "Certifications & Accreditations", image: "/assets/cert.jpg" },
  { title: "Partners", image: "/assets/partner.jpg" },
  { title: "Corporate Documents", image: "/assets/document.jpg" },
  { title: "Corporate Responsibility", image: "/assets/responsibility.jpg" },
  { title: "Careers", image: "/assets/comu2.jpg" },
  { title: "History Of Bell Integration", image: "/assets/history.jpg" },
  { title: "Sustainability Statement", image: "/assets/statement.jpg" },
];

const MoreAbout = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Find out more about Cloud Sentrics Integration
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transition transform hover:scale-105 hover:shadow-xl"
          >
            {/* Image Wrapper */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <div className="text-center py-4 px-3 bg-white">
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreAbout;
