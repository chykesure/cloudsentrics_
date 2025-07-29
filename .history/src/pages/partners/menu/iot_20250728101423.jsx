import React, { useState} from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import IOTConsult from "./iot_consult";
import IOTRelated from "./iot_related";

const logo = "/assets/logo.jpg";
const iot2 = "/assets/iot2.jpg";

const IOT = () => {
    // State for mobile menu
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Header Section */}
            

            {/* Hero Section */}
            <Header />

            {/* Cloud & Security Section */}
            <section className="bg-gray-100 px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Text Section */}
                <div className="space-y-6 max-w-2xl mx-auto">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase">
                        Internet of Things
                    </h3>
                    <div className="border-l-4 border-blue-600 pl-4">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                        Easily deploy and scale IoT solutions to unlock valuable insights and drive business growth.
                        </h1>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Whether you're a startup building smart devices or an enterprise seeking to automate operations, we deliver customized IoT solutions that align with your business objectives. Our expertise covers device integration, secure data transmission, and scalable IoT architectures designed to connect and optimize your physical and digital environments.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>Scalable IoT platforms for real-time data collection and device management</li>
                        <li>End-to-end encryption and secure communication protocols for IoT networks</li>
                        <li>Cost-efficient IoT deployments with cloud-based device orchestration</li>
                        <li>Seamless integration with existing systems and minimal operational disruption</li>
                        <li>AI-powered analytics for predictive maintenance and intelligent automation</li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        By leveraging cutting-edge IoT technologies, organizations can unlock new levels of operational efficiency, data-driven decision-making, and real-time monitoring. Let us help you harness the power of IoT to transform your business landscape.
                    </p>

                </div>


                {/* Right Image Section with Bouncing Effect */}
                <div className="flex justify-center">
                    <motion.img
                        src={iot2}
                        alt="Cloud Security"
                        className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl h-auto rounded-lg shadow-2xl"
                        animate={{
                            y: [0, -15, 0], // Moves up and down more
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <IOTConsult />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <IOTRelated />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>
        </div>
    );
};

export default IOT;
