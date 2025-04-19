import React, { useState } from "react";
import { motion } from "framer-motion";

// Images
const cloud_service = "/assets/cloud-service.jpg";
const App_trans = "/assets/App_trans.jpg";
const cloud_security = "/assets/cloud-security.jpg";

const modalContents = {
  Cloud: {
    title: "Flexible Cloud Solutions to Accelerate Transformation",
    content: `Whether you're migrating to the public cloud or managing a hybrid environment, Cloud Sentrics offers secure and scalable solutions tailored to your business needs.

We help organizations migrate their workloads to the cloud with a strong emphasis on security, compliance, and performance ensuring a smooth transition with minimal risk.

Understanding Cloud Models:
• Infrastructure as a Service (IaaS): Provision scalable computing resources such as virtual machines and storage on demand.
• Platform as a Service (PaaS): Build, test, and deploy applications quickly using cloud-hosted development environments.
• Software as a Service (SaaS): Access software applications over the internet without managing infrastructure or updates.

Our Capabilities:
• Cloud strategy and assessment
• Infrastructure and app migration
• Cost optimization and cloud governance
• Multi-cloud and hybrid deployments

Take full control of your digital transformation with a secure and agile cloud foundation.`,
  },
  "Application Transformation": {
    title: "Modernizing Applications for Future-Ready Operations",
    content: `Legacy systems can slow down innovation. We help you reimagine, rehost, or refactor applications to boost performance, reduce costs, and improve flexibility.

How We Help:
• Application assessment and modernization strategy
• Microservices and containerization
• API integrations
• Cloud-native re-platforming

Future-proof your applications and deliver better experiences to users. Security and compliance are integrated into every step of the transformation process to ensure safe modernization.`,
  },
  Security: {
    title: "End-to-End Protection for Your Digital Assets",
    content: `Our cybersecurity framework combines advanced threat detection, real-time response, and compliance to safeguard your cloud and on-prem environments.

Security Solutions Include:
• Identity & access management
• Network and endpoint protection
• Threat hunting and incident response
• Regulatory compliance and audits

Build security into everything you do and stay resilient in the face of modern cyber threats.`,
  },
};

const RelatedInfo = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Cloud",
      description:
        "Empower agility, speed, and growth. Leverage secure, scalable cloud solutions to modernize your business and accelerate transformation with Cloud Sentrics.",
      image: cloud_service,
    },
    {
      title: "Application Transformation",
      description:
        "Modernize for performance and innovation. Reengineer your applications to boost agility, enhance user experience, and stay ahead of the competition.",
      image: App_trans,
    },
    {
      title: "Security",
      description:
        "Safeguard your digital landscape. Detect threats early, protect critical assets, and ensure full security compliance across your operations.",
      image: cloud_security,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Services</h2>
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

export default RelatedInfo;
