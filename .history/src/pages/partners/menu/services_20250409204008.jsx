import React from "react";
import { motion } from "framer-motion";

const ai_trainning = "/assets/ai_trainning.jpg";
const ai_conversation = "/assets/ai_conversation.jpg";
const ai_ops = "/assets/ai_ops.jpg";
const bpa = "/assets/bpa.jpg";

const RelatedServices = () => {
    const services = [
        {
            title: "Conversational AI",
            description:
                "Enhance customer interactions and streamline support with next-gen, AI-powered conversations that drive engagement and boost productivity.",
            image: ai_conversation,
        },
        {
            title: "AI Ops",
            description:
                "Ensure operational resilience and proactively prevent, detect, and resolve incidents using intelligent automation and real-time analytics powered  by AIOps.",
            image: ai_ops,
        },
        {
            title: "Business Process Automation",
            description:
                "Accelerate how work gets done and amplify digital efficiencies",
            image: bpa,
        },
        {
            title: "AI Training",
            description:
                "Discover the true business value of artificial intelligence",
            image: ai_trainning,
        },
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
        </section>
    );
};

export default RelatedServices;
