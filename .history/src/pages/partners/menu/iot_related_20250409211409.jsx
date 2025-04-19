import React from "react";
import { motion } from "framer-motion";


const iot1 = "/assets/iot1.jpg";
const iot_data = "/assets/iot_data.jpg";
const iot_solution = "/assets/iot_solution.jpg";

const IOTRelated = () => {
    const services = [
        {
            title: "IoT As A Service",
            description:
                "Accelerate IoT deployment, scale with ease, and maximize return on investment.",
            image: iot1,
        },
        {
            title: "IoT Solutions",
            description:
                "Designing tailored IoT systems to solve your specific business challenges and drive innovation.",
            image: iot_solution,
        },
        {
            title: "IoT Data Analytics",
            description:
                "Turn real-time IoT data into smart insights that drive faster, better business decisions.",
            image: iot_data,
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

export default IOTRelated;
