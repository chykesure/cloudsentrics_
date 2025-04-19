import React from "react";
import { motion } from "framer-motion";


const life_cycle = "/assets/life-cycle.jpg";
const end_user = "/assets/end-user.jpg";
const data_center = "/assets/data-centre.jpg";

const WorkRelated = () => {
    const services = [
        {
            title: "End User Services",
            description:
                "Cutting edge and cost effective DC infracture solutions",
            image: data_center,
        },
        {
            title: "End User Technology",
            description:
                "Improving the employee experience with the latest technology",
            image: end_user,
        },
        {
            title: "IT Life Cycle Services",
            description:
                "Cutting the cost of supporting legacy assets",
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
                            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.05, y: -5 }} // Add bounce effect
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
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

export default WorkRelated;
