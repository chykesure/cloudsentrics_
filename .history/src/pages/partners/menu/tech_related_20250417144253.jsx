import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const life_cycle = "/assets/life-cycle.jpg";
const end_user = "/assets/end-user.jpg";
const data_center = "/assets/data-centre.jpg";

const TechRelated = () => {
    const [activeModal, setActiveModal] = useState(null);

    const services = [
        {
            title: "Data Centre Technology",
            description:
                "Advanced and cost-efficient data centre infrastructure solutions designed to power scalable, secure, and high-performance operations.",
            image: data_center,
            content: `
High-Performance Infrastructure to Power the Digital Enterprise.
Security is built into every layer from physical access control to network-level threat prevention ensuring your critical workloads remain protected.

Our modern data centre solutions are scalable, secure, and energy-efficient, built to handle critical workloads across sectors.

Solutions Include:
• Virtualization and storage
• Power and cooling efficiency
• Disaster recovery
• Cloud-integrated architecture

Get the backbone you need for next-gen operations.
`,
        },
        {
            title: "End User Technology",
            description:
                "Enhancing the employee experience through modern, innovative technologies.",
            image: end_user,
            content: `
Equip Your Workforce With the Tools to Succeed.
Every deployment is carried out with security best practices to safeguard employee devices and enterprise resources.

From laptops to mobile devices, we manage the procurement, setup, and maintenance of user-facing technologies.

What We Offer:
• Hardware deployment
• Software and license management
• Remote configuration
• Performance monitoring

A smooth user experience starts with the right tech.
`,
        },
        {
            title: "IT Life Cycle Services",
            description:
                "Optimising support for legacy assets to reduce operational costs and extend value.",
            image: life_cycle,
            content: `
Maximize Value Across Every Phase of Your IT Assets.

Our end-to-end lifecycle management covers procurement, support, upgrades, and retirement — all while ensuring security, compliance, and cost-efficiency.

Lifecycle Services:
• Asset tracking and inventory
• Maintenance and upgrades
• Secure disposal
• Reporting and optimization insights

Reduce waste, increase ROI, and stay agile.
`,
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
                            className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[400px] cursor-pointer"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            onClick={() => setActiveModal(index)}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-64 md:h-80 object-cover"
                            />
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Individual Modals */}
                <AnimatePresence>
                    {activeModal !== null && (
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

                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default TechRelated;
