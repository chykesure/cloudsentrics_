import React, { useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import Header from "../Header";
import { motion } from "framer-motion";
import MoreAbout from "./moreabout";

const logo = "/assets/logo.jpg";
const heroImage = "/assets/cds5.jpg";

const AboutCloud = () => {

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
        <div className="bg-white min-h-screen text-[#0d1b2a]">
            {/* Header */}
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

            {/* Top Section */}
            <section className="container mx-auto flex flex-col md:flex-row gap-6 px-4 py-10">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <div>
                        <p className="text-sm text-gray-600 font-semibold">About CLoud Sentrics Integration</p>
                        <h2 className="text-3xl font-bold border-l-4 border-blue-700 pl-4 mt-2">
                            Driving Digital<br />
                            Transformation
                        </h2>
                    </div>

                    <div className="bg-white p-6 shadow rounded-xl space-y-4">
                        <p className="text-lg font-semibold text-gray-800">
                        For over a 12 months, Cloud Sentrics has been at the forefront of cloud training and consulting empowering individuals and organizations to harness the full potential of cloud computing and DevSecOps with confidence and security.
                        </p>
                        <p className="font-semibold text-gray-800">
                        Headquartered in the United States, with a growing presence in the UK, Canada, and Nigeria, Cloud Sentrics has successfully trained and supported hundreds of professionals and partnered with businesses on their cloud transformation journeys.
                        </p>
                        <p className="text-sm text-gray-700">
                        We are trusted by startups, enterprise clients, and public sector organizations alike to deliver secure, scalable, and efficient cloud solutions. Our clients rely on us not only for world-class training but also for expert guidance in migrating to the cloud securely and maintaining resilient cloud environments.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <div className="w-full h-full max-h-[500px] overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={heroImage}
                            alt="Skyscraper"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <MoreAbout />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>
        </div>
    );
};

export default AboutCloud;
