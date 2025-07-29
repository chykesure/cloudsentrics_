import React, { useState} from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import ConsultPage from "./consultation";
import RelatedInfo from "./relatedservice";

const logo = "/assets/logo.jpg";
const cloudchip = "/assets/cloud-chip.jpg";

const CloudSecurity = () => {
    // State for mobile menu
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Header Section */}
            <header className="relative bg-white shadow-lg w-full z-30">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">
                        <Link to="/PartnerPage">
                            <img
                                src={logo}
                                alt="Cloudsentrics Logo"
                                className="h-20 md:h-28 lg:h-34 w-auto ml-9 transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="p-2 rounded">
                            {mobileNavOpen ? (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#1e4272" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#1e4272" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>



                </div>

                {/* Mobile Navigation Menu */}
                {mobileNavOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white text-black absolute top-full left-0 right-0 z-20 shadow-md px-6 py-4 space-y-4"
                    >
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setMobileNavOpen(false)}
                                className="block text-lg font-semibold hover:text-blue-600 transition"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </header>

            {/* Hero Section */}
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
