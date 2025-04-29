import React, { useState } from "react";
import { motion } from "framer-motion";

// Full content for each section
const sections = [
    {
        title: "Meet Oluwadamilare Odo",
        image: "/assets/comu2.jpg",
        content: `
      Transitioning into Cloud DevSecOps independently while learning on the job was a journey filled with challenges, frustration, and moments of self-doubt. At times, I felt like giving up, but I knew I needed a structured program one that provided guidance, collaboration, and an environment where I could grow alongside like-minded individuals.

      Through years of dedication, continuous learning, and hands-on experience, I have gained deep expertise in Cloud Engineering. I have not only mastered the intricacies of DevSecOps but also understood the core principles that drive innovation in the cloud industry. My journey has shaped me into a professional who thrives on solving complex problems and mentoring aspiring engineers.

      Today, I am committed to helping others navigate this path with confidence providing support, resources, and mentorship needed to succeed in the ever-evolving tech landscape. At Cloud Sentrics, we extend this mission by also helping organizations migrate to the cloud securely and stay secure in their cloud environments. Our goal is to empower both individuals and enterprises to embrace cloud transformation with clarity and confidence.
    `
    },
    {
        title: "Our Vision And Values",
        image: "/assets/vision.jpg",
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
                Find out more about Cloud Sentrics Integration
            </h2>

            {selectedSection ? (
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-semibold">{selectedSection.title}</h3>
                        <img
                            src={selectedSection.image}
                            alt={selectedSection.title}
                            className="w-full h-124 object-cover mt-4"
                        />
                        <p className="mt-4 text-gray-700">{selectedSection.content}</p>
                    </div>
                    <button
                        onClick={() => setSelectedSection(null)}
                        className="block mx-auto mt-6 px-6 py-2 bg-[#1e4272] text-white rounded-md"
                    >
                        Back to sections
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {sections.map((item, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
                            viewport={{ once: true }}
                            onClick={() => handleClick(item)} // Handle section click
                        >
                            {/* Image */}
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
                        </motion.div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Teams;

