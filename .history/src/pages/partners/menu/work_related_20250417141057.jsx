import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const end_users = "/assets/end-user-service.jpg";
const solution = "/assets/solutions.jpg";
const support = "/assets/support.jpg";

const WorkRelated = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: "End User Services",
            short:
                "Proactive support to enhance user productivity and satisfaction.",
            full: `From onboarding to device management, we provide proactive support that enhances user productivity and satisfaction. 
Services Include:
• Remote helpdesk and troubleshooting
• Device provisioning and lifecycle management
• User training and onboarding
• SLA-based response and resolution
All digital support services are reinforced with robust security policies to protect end-user systems and company data from potential vulnerabilities.`,
            image: end_users,
        },
        {
            title: "Product Solution",
            short:
                "Secure, collaboration-ready tools for productive teams.",
            full: `Deploying the Right Tools for the Right Jobs:
Our solutions are designed with security-first architecture to ensure safe access, data protection, and regulatory compliance.
Platforms We Support:
• Microsoft 365, Google Workspace
• Project and task management tools
• Communication and conferencing apps
• Licensing and user access management`,
            image: solution,
        },
        {
            title: "IT Support System",
            short:
                "24/7 monitoring, ticketing, health checks, and threat defense.",
            full: `Reliable IT Services to Keep You Running:
Our support includes strict security measures and monitoring to defend against threats and ensure continuity.
Support Coverage:
• 24/7 monitoring and alerting
• Ticketing and incident resolution
• System health checks
• Regular reporting and feedback`,
            image: support,
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
                            className="relative bg-white rounded-lg shadow-lg overflow-hidden min-h-[400px] cursor-pointer"
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
                                <p className="text-gray-600">{service.short}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {selectedService && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                        >
                            <motion.div
                                className="bg-white rounded-xl max-w-2xl w-full p-6 shadow-lg relative"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-2 right-4 text-gray-600 hover:text-red-500 text-xl"
                                    onClick={() => setSelectedService(null)}
                                >
                                    &times;
                                </button>
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-60 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {selectedService.title}
                                </h3>
                                <p className="text-gray-700 whitespace-pre-line">
                                    {selectedService.full}
                                </p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WorkRelated;
