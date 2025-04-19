import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const end_users = "/assets/end-user-service.jpg";
const solution = "/assets/solutions.jpg";
const support = "/assets/support.jpg";

const WorkRelated = () => {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      title: "End User Services",
      description: "Explore new options for device acquisition and life cycle management.",
      image: end_users,
      content: `Empowering Employees With Seamless Digital Support.

All digital support services are reinforced with robust security policies to protect end-user systems and company data from potential vulnerabilities.

From onboarding to device management, we provide proactive support that enhances user productivity and satisfaction.

Services Include:
• Remote helpdesk and troubleshooting
• Device provisioning and lifecycle management
• User training and onboarding
• SLA-based response and resolution

Your employees stay focused — we handle the rest.`,
    },
    {
      title: "Product Solution",
      description: "Improve security, agility and availability.",
      image: solution,
      content: `Deploying the Right Tools for the Right Jobs.

Our solutions are designed with security-first architecture to ensure safe access, data protection, and regulatory compliance.

Equip your teams with collaboration and productivity platforms tailored to how they work — backed by full support and integration.

Platforms We Support:
• Microsoft 365, Google Workspace
• Project and task management tools
• Communication and conferencing apps
• Licensing and user access management

Work smarter, not harder.`,
    },
    {
      title: "IT Support System",
      description: "Providing comprehensive support to users throughout their learning journey.",
      image: support,
      content: `Reliable IT Services to Keep You Running.

Our support includes strict security measures and monitoring to defend against threats and ensure continuity.

From basic troubleshooting to complex escalations, we deliver responsive and expert support to minimize disruption and keep your business moving.

Support Coverage:
• 24/7 monitoring and alerting
• Ticketing and incident resolution
• System health checks
• Regular reporting and feedback

We keep your tech working so you can keep working.`,
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
              className="relative bg-white rounded-lg shadow-lg overflow-hidden min-h-[400px] cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              onClick={() => setActiveModal(index)}
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
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-0 shadow-lg text-left relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-4 text-white z-10 bg-black/50 rounded-full px-3 py-1 text-xl"
                onClick={() => setActiveModal(null)}
              >
                &times;
              </button>

              {/* Image */}
              <img
                src={services[activeModal].image}
                alt={services[activeModal].title}
                className="w-full h-64 md:h-80 object-cover rounded-t-xl"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {services[activeModal].title}
                </h3>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {services[activeModal].content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorkRelated;
