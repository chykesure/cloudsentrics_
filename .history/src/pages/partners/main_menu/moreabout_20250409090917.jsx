import React from "react";

// Dummy images and titles as seen in the screenshot
const sections = [
  { title: "Executive Team", image: "/assets/comu1.jpg" },
  { title: "Our Vision And Values", image: "/assets/vision.jpg" },
  { title: "Certifications & Accreditations", image: "/assets/cert.jpg" },
  { title: "Partners", image: "/assets/partners.jpg" },
  { title: "Corporate Documents", image: "/assets/corporate.jpg" },
  { title: "Corporate Responsibility", image: "/assets/responsibility.jpg" },
  { title: "Careers", image: "/assets/careers.jpg" },
  { title: "History Of Bell Integration", image: "/assets/history.jpg" },
  { title: "Sustainability Statement", image: "/assets/sustainability.jpg" },
];

const MoreAbout = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Find out more about Bell Integration
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((item, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-md bg-white cursor-pointer transition transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="text-center py-4 px-2">
              <h3 className="font-semibold text-lg text-gray-800">
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
