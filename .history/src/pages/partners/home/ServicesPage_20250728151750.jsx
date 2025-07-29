import React from "react";
import { motion } from "framer-motion";
import { FaNetworkWired } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ai = "/assets/ai.jpg";
const cloud = "/assets/cld.jpg";
const iot = "/assets/iot.jpg";
const workplace = "/assets/workplace.jpg";
const technology = "/assets/technology.jpg";
const saas = "/assets/saas.jpg";

const services = [
  {
    title: "Artificial Intelligence",
    description: "Drive automation, optimize processes, and enhance user experiences with intelligent systems.",
    image: ai,
  },
  {
    title: "Cloud & Security",
    description: "Accelerate transformation with secure and scalable cloud solutions tailored to your goals.",
    image: cloud,
  },
  {
    title: "Internet of Things",
    description: "Enable real-time insights and automation with connected devices and IoT ecosystems.",
    image: iot,
  },
  {
    title: "Modern Workplace",
    description: "Empower productivity through flexible, collaborative, and future-ready digital workspaces.",
    image: workplace,
  },
  {
    title: "Technology",
    description: "Harness innovative tools to evolve, scale, and respond to market needs with precision.",
    image: technology,
  },
  {
    title: "Storage as a Service (STaaS)",
    description: "Secure, scalable storage with on-demand flexibility for enterprise data management.",
    image: saas,
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-10 lg:px-16">
      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-xl rounded-2xl overflow-hidden transition-transform duration-300"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#1e4272] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e4272] mb-4">
            Stay Ahead with Cloud-Driven Innovation
          </h2>
          <p className="text-gray-700 text-lg">
            Enhance efficiency, scalability, and resilience with Cloud Sentrics. Whether you're optimizing IT operations for agility or leveraging cutting-edge technologies like Cloud, AI, and DevSecOps, our expertise empowers your success.
          </p>
          {/* Optional CTA */}
          {/* <button
            onClick={() => navigate("/about-us")}
            className="mt-6 inline-block px-6 py-3 bg-[#1e4272] text-white font-semibold rounded-lg hover:bg-blue-900 transition duration-300"
          >
            Learn More →
          </button> */}
        </div>

        <div className="md:w-1/2">
          <ul className="space-y-5 text-gray-800">
            {[
              "Leveraging cutting-edge cloud technology and expertise to tackle the most complex challenges.",
              "Committed to understanding your unique business needs and goals.",
              "Trusted by global organizations to drive cloud transformation.",
              "Applying industry best practices and years of experience to deliver results.",
              "Partnering with our clients to maximize the impact of cloud innovation.",
            ].map((point, index) => (
              <li key={index} className="flex items-start">
                <FaNetworkWired className="text-[#1e4272] text-xl mt-1 mr-3" />
                <span className="text-base">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
