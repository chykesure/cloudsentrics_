import React, { useState } from "react";
import { motion } from "framer-motion";

// Full content for each section
const sections = [
  {
    name: "Oluwadamilare Odo",
    role: "Founder",
    image: "/assets/founder.jpg",
    content: `
Transitioning into Cloud DevSecOps independently while learning on the job was a journey filled with challenges, frustration, and moments of self-doubt. At times, I felt like giving up, but I knew I needed a structured program one that provided guidance, collaboration, and an environment where I could grow alongside like-minded individuals.

Through years of dedication, continuous learning, and hands-on experience, I have gained deep expertise in Cloud Engineering. I have not only mastered the intricacies of DevSecOps but also understood the core principles that drive innovation in the cloud industry. My journey has shaped me into a professional who thrives on solving complex problems and mentoring aspiring engineers.

Today, I am committed to helping others navigate this path with confidence providing support, resources, and mentorship needed to succeed in the ever-evolving tech landscape. At Cloud Sentrics, we extend this mission by also helping organizations migrate to the cloud securely and stay secure in their cloud environments. Our goal is to empower both individuals and enterprises to embrace cloud transformation with clarity and confidence.
    `
  },
  {
    name: "Mustapha Ibrahim Sunusi",
    role: "Administrator",
    image: "/assets/am.jpg",
    content: `
Mustapha Ibrahim Sunusi serves as a Cloud Administrator at Cloud Sentrics, where he oversees the management, optimization, and security of our cloud environments. With deep expertise in cloud platforms and DevSecOps practices, Mustapha ensures that both our clients and trainees experience seamless, scalable, and secure cloud solutions.

He is passionate about leveraging technology to drive innovation, streamline operations, and empower growth. As part of the Cloud Sentrics team, Mustapha is dedicated to delivering excellence and supporting our mission to help individuals and businesses thrive in the cloud.
    `
  }
];

const Teams = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
      Meet the Visionaries Behind Cloud Sentrics
      </h2>

      {selectedSection ? (
        <div className="w-full px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800">{selectedSection.name}</h3>
            <div className="mt-2">
              <span className="inline-block px-5 py-2 bg-blue-100 text-blue-800 text-md font-semibold rounded-full hover:scale-105 transition-transform">
                {selectedSection.role}
              </span>
            </div>
            <img
              src={selectedSection.image}
              alt={selectedSection.name}
              className="w-full h-96 object-cover mt-8 rounded-lg"
            />
            <p className="mt-6 text-gray-700 whitespace-pre-line text-justify leading-relaxed">
              {selectedSection.content}
            </p>
          </div>
          <button
            onClick={() => setSelectedSection(null)}
            className="block mx-auto mt-8 px-6 py-3 bg-[#1e4272] text-white rounded-md hover:bg-[#16365c] transition"
          >
            Back to sections
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-6">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              onClick={() => handleClick(item)}
            >
              {/* Image */}
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <div className="text-center py-6 px-4 bg-white">
                <h3 className="font-bold text-xl text-gray-900">{item.name}</h3>
                <div className="mt-3">
                  <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full hover:scale-105 transition-transform">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Teams;
