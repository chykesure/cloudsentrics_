import React, { useState } from "react";
import { motion } from "framer-motion";

const Modal = ({ show, onClose, content }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative">
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
                <div className="text-gray-700 whitespace-pre-line">{content.details}</div>
            </div>
        </div>
    );
};

const RelatedServices = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: "Conversational AI",
            description: "Enhance customer interactions and streamline support...",
            image: "/assets/ai_conversation.jpg",
            details: `Smarter Engagement Through AI-Powered Conversations\n\nSecurity is seamlessly integrated into every conversational interface...`
        },
        {
            title: "AI Ops",
            description: "Ensure operational resilience and proactively prevent...",
            image: "/assets/ai_ops.jpg",
            details: `Smarter IT Operations with Artificial Intelligence\n\nOur AI Ops service transforms traditional IT management...`
        },
        {
            title: "Business Process Automation",
            description: "Streamline operations, reduce manual tasks...",
            image: "/assets/bpa.jpg",
            details: `Streamlining Operations with Intelligent Automation\n\nSecurity is embedded into every automated workflow...`
        },
        {
            title: "AI Training",
            description: "Unlock the full potential of artificial intelligence...",
            image: "/assets/ai_trainning.jpg",
            details: `Build AI Skills That Power Innovation\n\nOur training programs emphasize secure development practices...`
        }
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Related Services
                </h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Modal
                show={!!selectedService}
                content={selectedService || {}}
                onClose={() => setSelectedService(null)}
            />
        </section>
    );
};

export default RelatedServices;
