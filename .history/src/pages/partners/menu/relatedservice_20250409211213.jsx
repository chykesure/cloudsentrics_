import React from "react";
import { motion } from "framer-motion";

const cloud_service = "/assets/cloud-service.jpg";
const App_trans = "/assets/App_trans.jpg";
const cloud_security = "/assets/cloud-security.jpg";

const RelatedInfo = () => {
    const services = [
        {
            title: "Cloud",
            description:
                "Empower agility, speed, and growth. Leverage secure, scalable cloud solutions to modernize your business and accelerate transformation with Cloud Sentrics.",
            image: cloud_service,
        },
        {
            title: "Application Transformation",
            description:
                "Modernize for performance and innovation.
Reengineer your applications to boost agility, enhance user experience, and stay ahead of the competition.",
            image: App_trans,
        },
        {
            title: "Security",
            description:
                "Identify threats, protect your business, and manage security compliance",
            image: cloud_security,
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
        </section>
    );
};

export default RelatedInfo;
