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
                "Explore new options for device acquisition and life cycle management",
            full: `Empowering Employees With Seamless Digital Support.\n\nAll digital support services are reinforced with robust security policies to protect end-user systems and company data from potential vulnerabilities.\n\nFrom onboarding to device management, we provide proactive support that enhances user productivity and satisfaction.\n\nServices Include:\n• Remote helpdesk and troubleshooting\n• Device provisioning and lifecycle management\n• User training and onboarding\n• SLA-based response and resolution\n\nYour employees stay focused — we handle the rest.`,
            image: end_users,
        },
        {
            title: "Product Solution",
            short: "Improve security, agility and availability",
            full: `Deploying the Right Tools for the Right Jobs.\n\nOur solutions are designed with security-first architecture to ensure safe access, data protection, and regulatory compliance.\n\nEquip your teams with collaboration and productivity platforms tailored to how they work — backed by full support and integration.\n\nPlatforms We Support:\n• Microsoft 365, Google Workspace\n• Project and task management tools\n• Communication and conferencing apps\n• Licensing and user access management\n\nWork smarter, not harder.`,
            image: solution,
        },
        {
            title: "IT Support System",
            short: "Providing comprehensive support to users throughout their learning journey.",
            full: `Reliable IT Services to Keep You Running.\n\nOur support includes strict security measures and monitoring to defend against threats and ensure continuity.\n\nFrom basic troubleshooting to complex escalations, we deliver responsive and expert support to minimize disruption and keep your business moving.\n\nSupport Coverage:\n• 24/7 monitoring and alerting\n• Ticketing and incident resolution\n• System health checks\n• Regular reporting and feedback\n\nWe keep your tech working so you can keep working.`,
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
                            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                        >
                            <motion.div
                                className="bg-white rounded-xl max-w-4xl w-full p-6 shadow-xl relative text-left"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="absolute top-3 right-5 text-gray-700 hover:text-red-500 text-3xl"
                                    onClick={() => setSelectedService(null)}
                                >
                                    &times;
                                </button>
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-60 object-cover rounded-lg mb-6"
                                />
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {selectedService.title}
                                </h3>
                                <p className="text-gray-700 whitespace-pre-line leading-relaxed text-left">
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
