import React from "react";
import { motion } from "framer-motion";
import { FaNetworkWired } from "react-icons/fa";

const ai = "/assets/ai.jpg";
const cloud = "/assets/cld.jpg";
const iot = "/assets/iot.jpg";
const workplace = "/assets/workplace.jpg";
const technology = "/assets/technology.jpg";

const services = [
    {
        title: "Artificial Intelligence",
        description: "Drive automation, optimise processes and improve customer and end-user experience",
        image: ai,
    },
    {
        title: "Cloud & Security",
        description: "Cloud strategies that catalyse business transformation, innovation, resilience, and growth",
        image: cloud,
    },
    {
        title: "Internet of Things",
        description: "Simplify and scale IoT deployments that unlock new business value and data insights",
        image: iot,
    },
    {
        title: "Modern Workplace",
        description: "Agile work environments that fuel productivity and keep teams engaged",
        image: workplace,
    },
    {
        title: "Technology",
        description: "Unleash new capabilities to meet the demands of today - and tomorrow",
        image: technology,
    },
];

const ServicesPage = () => {
    return (
        <section className="px-6 py-12 bg-gray-100">
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 mt-3">{service.description}</p>
                            <button className="mt-4 px-6 py-2 bg- text-white rounded-lg hover:bg-green-600 transition">
                                Explore our services →
                            </button>
                        </div>
                    </motion.div>
                ))}

                {/* Countdown Box */}
                {/* <motion.div
                    whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
                    className="bg-red-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center"
                >
                    <h3 className="text-2xl font-semibold">Windows 10</h3>
                    <p className="text-lg mt-2">Expires in:</p>
                    <div className="text-2xl font-bold mt-1">202 DAYS 18 HOURS 36 MINS 29 SEC</div>
                    <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition">
                        Upgrade now
                    </button>
                </motion.div> */}
            </div>

            {/* Text Section with Bullet Points */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-lg shadow-lg">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-purple-800">
                        Stay Ahead with Cloud-Driven Innovation.
                    </h2>
                    <p className="text-gray-700 mt-4">
                        Enhance efficiency, scalability, and resilience with Cloud Sentrics. Whether optimizing IT operations for agility or leveraging cutting-edge technologies like Cloud, AI, and DevSecOps, our expertise empowers your success.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition">
                        More about Us →
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <ul className="space-y-4 text-black">
                        <li className="flex items-start">
                            <FaNetworkWired className="text-teal-500 text-lg mr-2" />
                            <strong>Leveraging cutting-edge cloud technology &nbsp; </strong> and expertise to tackle the most complex challenges.
                        </li>
                        <li className="flex items-start">
                            <FaNetworkWired className="text-teal-500 text-lg mr-2" />
                            <strong>Committed to understanding &nbsp; </strong> your unique business needs and goals.
                        </li>
                        <li className="flex items-start">
                            <FaNetworkWired className="text-teal-500 text-lg mr-2" />
                            <strong>Trusted by global organizations &nbsp; </strong> to drive cloud transformation.
                        </li>
                        <li className="flex items-start">
                            <FaNetworkWired className="text-teal-500 text-lg mr-2" />
                            <strong>Applying industry best practices &nbsp; </strong> and years of experience to deliver results.
                        </li>
                        <li className="flex items-start">
                            <FaNetworkWired className="text-teal-500 text-lg mr-2" />
                            <strong>Partnering with our clients &nbsp; </strong> to maximize the impact of cloud innovation.
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default ServicesPage;