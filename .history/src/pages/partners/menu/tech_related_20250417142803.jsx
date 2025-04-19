import React from "react";
import { motion } from "framer-motion";

const life_cycle = "/assets/life-cycle.jpg";
const end_user = "/assets/end-user.jpg";
const data_center = "/assets/data-centre.jpg";

const TechRelated = () => {
    const services = [
        {
            title: "Data Centre Technology",
            description: `High-Performance Infrastructure to Power the Digital Enterprise. Security is built into every layer from physical access control to network-level threat prevention ensuring your critical workloads remain protected.

Our modern data centre solutions are scalable, secure, and energy-efficient, built to handle critical workloads across sectors.`,
            full: `Solutions Include:
• Virtualization and storage
• Power and cooling efficiency
• Disaster recovery
• Cloud-integrated architecture

Get the backbone you need for next-gen operations.`,
            image: data_center,
        },
        {
            title: "End User Technology",
            description: `Equip Your Workforce With the Tools to Succeed. Every deployment is carried out with security best practices to safeguard employee devices and enterprise resources.

From laptops to mobile devices, we manage the procurement, setup, and maintenance of user-facing technologies.`,
            full: `What We Offer:
• Hardware deployment
• Software and license management
• Remote configuration
• Performance monitoring

A smooth user experience starts with the right tech.`,
            image: end_user,
        },
        {
            title: "IT Life Cycle Services",
            description: `Maximize Value Across Every Phase of Your IT Assets. Our end-to-end lifecycle management covers procurement, support, upgrades, and retirement, all while ensuring security, compliance, and cost-efficiency.`,
            full: `Lifecycle Services:
• Asset tracking and inventory
• Maintenance and upgrades
• Secure disposal
• Reporting and optimization insights

Reduce waste, increase ROI, and stay agile.`,
            image: life_cycle,
        },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Related Services
                </h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative bg-white rounded-lg shadow-lg overflow-hidden min-h-[400px]"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
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

            {/* Modal to display full details */}
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-lg relative text-left"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                    >
                        <button
                            className="absolute top-2 right-4 text-gray-600 hover:text-red-500 text-2xl"
                            // Close button
                        >
                            &times;
                        </button>
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {service.title}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed text-left">
                            {service.full}
                        </p>
                    </motion.div>
                </motion.div>
            ))}
        </section>
    );
};

export default TechRelated;
