import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import ConsultPage from "./consultation";
import RelatedInfo from "./relatedservice";

const logo = "/assets/logo.jpg";
const cloudchip = "/assets/cloud-chip.jpg";

const CloudSecurity = () => {
    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Header Section */}
            <div className="flex justify-center px-6 md:px-12 py-6 bg-white shadow-lg w-full h-28 md:h-32 lg:h-40">
                <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto h-full">
                    {/* Left: Logo and Branding */}
                    <div className="absolute left-0 flex items-center w-auto h-full">
                        <Link to="/PartnerPage">
                        <img
                                src={logo}
                                alt="Cloudsentrics Logo"
                                className="h-20 md:h-28 lg:h-34 w-auto ml-9 transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Right: Navigation Menu */}
                    <motion.div
                        className="hidden md:flex flex-grow justify-center items-center space-x-6 lg:space-x-10 text-lg md:text-xl font-bold text-[#1e1e1e] tracking-wide h-full"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {[
                            { label: "AI", path: "/ai" },
                            { label: "CLOUD & SECURITY", path: "/cloud-security" },
                            { label: "IOT", path: "/iot" },
                            { label: "MODERN WORKPLACE", path: "/modern-workplace" },
                            { label: "TECHNOLOGY", path: "/technology" }
                        ].map((item, index) => (
                            <Link key={index} to={item.path}>
                                <motion.span
                                    className="cursor-pointer transition-all duration-300 hover:text-blue-600 hover:scale-105 whitespace-nowrap"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {item.label}
                                </motion.span>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>

            <Header />

            {/* Cloud & Security Section */}
            <section className="bg-gray-100 px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Text Section */}
                <div className="space-y-6 max-w-2xl mx-auto">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase">
                        Cloud and Security
                    </h3>
                    <div className="border-l-4 border-blue-600 pl-4">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                            Cloud solutions that catalyse business transformation, innovation,
                            resilience, and growth
                        </h1>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Whether you're a startup looking to scale or an enterprise aiming to enhance
                        infrastructure security, we provide tailored cloud solutions that align with
                        your business goals. Our expertise spans hybrid cloud architectures,
                        multi-cloud deployments, and advanced security frameworks that protect
                        your digital assets from potential breaches and downtime.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>Scalable cloud infrastructures for businesses of all sizes</li>
                        <li>Enhanced data security with end-to-end encryption and threat detection</li>
                        <li>Cost-effective solutions for optimized cloud resource utilization</li>
                        <li>Seamless cloud migration strategies to minimize disruptions</li>
                        <li>AI-driven security measures to prevent and mitigate cyber risks</li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        By leveraging cutting-edge cloud technologies, organizations can enhance
                        productivity, collaboration, and efficiency while maintaining a high level
                        of security and compliance. Let us help you harness the power of cloud
                        computing to drive your business forward.
                    </p>
                </div>


                {/* Right Image Section with Bouncing Effect */}
                <div className="flex justify-center">
                    <motion.img
                        src={cloudchip}
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
                <ConsultPage />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <RelatedInfo />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>
        </div>
    );
};

export default CloudSecurity;
