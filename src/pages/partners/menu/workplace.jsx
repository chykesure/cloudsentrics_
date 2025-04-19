import React, { useState} from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import WorkConsult from "./work_consult";
import WorkRelated from "./work_related";

const logo = "/assets/logo.jpg";
const modern_workplace = "/assets/workplace.jpg";

const Workplace = () => {

    // State for mobile menu
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    // Navigation menu items
    const menuItems = [
        { label: "AI", path: "/ai" },
        { label: "CLOUD & SECURITY", path: "/cloud-security" },
        { label: "IOT", path: "/iot" },
        { label: "MODERN WORKPLACE", path: "/modern-workplace" },
        { label: "TECHNOLOGY", path: "/technology" }
    ];
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
                        Modern Workplace
                    </h3>
                    <div className="border-l-4 border-blue-600 pl-4">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
                            Enhancing Digital Employee Experience for the Modern Workplace
                            As hybrid work becomes the standard, organizations must adapt to ensure seamless collaboration, operational efficiency, and workforce engagement.
                        </h1>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Cloud Sentrics, we support enterprises in transforming the digital workplace by optimizing platforms such as Microsoft 365 and integrating intelligent automation and data driven tools. Our solutions enable employees to access essential applications and resources with ease anytime, anywhere.

                        We partner with organizations to redefine the workplace experience driving productivity, improving collaboration, and fostering a digitally connected workforce prepared for the future.
                    </p>

                </div>

                {/* Right Image Section with Bouncing Effect */}
                <div className="flex justify-center">
                    <motion.img
                        src={modern_workplace} // Replace with your image URL or import
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
                <WorkConsult />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <WorkRelated />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>
        </div>
    );
};

export default Workplace;
