import React, { useState } from "react";
import { motion } from "framer-motion";

// Images
const iot1 = "/assets/iot1.jpg";
const iot_data = "/assets/iot_data.jpg";
const iot_solution = "/assets/iot_solution.jpg";

const modalContents = {
  "IoT As A Service": {
    title: "Simplified IoT for Scalable Innovation",
    content: `Our IoT services are built with end-to-end security from device to cloud to protect your connected future.

We manage your entire IoT journey from device provisioning to data management so you can focus on innovation.

Service Features:
• End-to-end IoT platform delivery
• Device connectivity and management
• Security and monitoring
• Flexible, usage-based pricing

Enable smart environments and connected operations without the overhead.`,
  },
  "IoT Solutions": {
    title: "Tailored IoT Systems That Solve Real Business Problems",
    content: `Every industry has unique needs. We design and deploy IoT solutions built specifically for your use case, ensuring results from day one.

Use Cases:
• Smart factories and logistics
• Environmental and asset monitoring
• Predictive maintenance
• Remote tracking and control

Bridge the physical and digital worlds to unlock new value.`,
  },
  "IoT Data Analytics": {
    title: "Transform Real-Time Data Into Intelligent Action",
    content: `All analytics processes are secured end-to-end to protect your insights and sensitive operational data.

Collect, analyze, and visualize data from connected devices to drive smarter decisions and automate responses.

Analytics Capabilities:
• Real-time dashboards
• Predictive analytics and AI integration
• Data aggregation across platforms
• Insights for process optimization

Make your data work harder for your business.`,
  },
};

const IOTRelated = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "IoT As A Service",
      description:
        "Accelerate IoT deployment, scale with ease, and maximize return on investment.",
      image: iot1,
    },
    {
      title: "IoT Solutions",
      description:
        "Designing tailored IoT systems to solve your specific business challenges and drive innovation.",
      image: iot_solution,
    },
    {
      title: "IoT Data Analytics",
      description:
        "Turn real-time IoT data into smart insights that drive faster, better business decisions.",
      image: iot_data,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Related Services
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer min-h-[400px]"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              onClick={() => setSelectedService(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {selectedService.title}
            </h2>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-60 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              {modalContents[selectedService.title]?.title}
            </h3>
            <pre className="text-gray-700 whitespace-pre-wrap text-left">
              {modalContents[selectedService.title]?.content}
            </pre>
          </div>
        </div>
      )}
    </section>
  );
};

export default IOTRelated;
