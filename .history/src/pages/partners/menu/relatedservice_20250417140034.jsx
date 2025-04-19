import React, { useState } from "react";
import { motion } from "framer-motion";

const cloud_service = "/assets/cloud-service.jpg";
const App_trans = "/assets/App_trans.jpg";
const cloud_security = "/assets/cloud-security.jpg";

// Modal Component
const Modal = ({ show, onClose, content }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
                <div className="whitespace-pre-line text-gray-700">
                    {content.details}
                </div>
            </div>
        </div>
    );
};

const RelatedInfo = () => {
    const [selected, setSelected] = useState(null);

    const services = [
        {
            title: "Cloud",
            description:
                "Empower agility, speed, and growth. Leverage secure, scalable cloud solutions to modernize your business and accelerate transformation with Cloud Sentrics.",
            image: cloud_service,
            details: `Security-first cloud strategies and implementations, because your transformation deserves protection at every step.

Flexible Cloud Solutions to Accelerate Transformation

Whether you're migrating to the public cloud or managing a hybrid environment, Cloud Sentrics offers secure and scalable solutions tailored to your business needs...

(You can continue the full content here or shorten if needed)`
        },
        {
            title: "Application Transformation",
            description:
                "Modernize for performance and innovation. Reengineer your applications to boost agility, enhance user experience, and stay ahead of the competition.",
            image: App_trans,
            details: `Modernizing Applications for Future-Ready Operations

Legacy systems can slow down innovation. We help you reimagine, rehost, or refactor applications...

Security and compliance are integrated into every step of the transformation process...`
        },
        {
            title: "Security",
            description:
                "Safeguard your digital landscape. Detect threats early, protect critical assets, and ensure full security compliance across your operations.",
            image: cloud_security,
            details: `End-to-End Protection for Your Digital Assets

Our cybersecurity framework combines advanced threat detection, real-time response, and compliance to safeguard your cloud and on-prem environments...

Security Solutions Include:
• Identity & access management
• Network and endpoint protection
• Threat hunting and incident response
• Regulatory compliance and audits`
        }
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
                            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer min-h-[400px]"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            onClick={() => setSelected(service)}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-64 object-cover"
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

            {/* Show Modal */}
            <Modal
                show={!!selected}
                content={selected || {}}
                onClose={() => setSelected(null)}
            />
        </section>
    );
};

export default RelatedInfo;
