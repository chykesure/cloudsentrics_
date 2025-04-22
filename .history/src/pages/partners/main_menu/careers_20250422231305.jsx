import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // ✅ Added missing import
import Footer from "../home/Footer";
import CareerForm from "./careerform";
import CareerPage from "./otherscareer";
import Header from "../Header";

const logo = "/assets/logo.jpg"; // Replace with your logo path
const cv = "/assets/cv.jpg"; // Replace with your background image path
const role = "/assets/sentric.jpg"; // Replace with your background image path

const Careers = () => {


    // Career form reference and scroll function
    const careerFormRef = useRef(null);
    const scrollToForm = () => {
        careerFormRef.current?.scrollIntoView({ behavior: "smooth" });
    };


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

            {/* Main Content */}
            <main className="px-4 py-20 text-center bg-white">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <p className="text-2xl text-gray-600">Find your next role with us</p>
                    <h1 className="text-3xl md:text-6xl font-semibold text-gray-900">
                        Build your future with Cloud Sentrics
                    </h1>
                </motion.div>

                {/* Career Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <img
                            src={aibg}
                            alt="Our Latest Roles"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6 space-y-3">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Our Latest Roles
                            </h3>
                            <p className="text-gray-600 text-sm">
                                View all open vacancies and apply directly.
                            </p>
                            <button className="inline-flex items-center gap-2 px-4 py-2 text-white bg-purple-800 rounded-full text-sm hover:bg-purple-700 transition">
                                See our available roles <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <img
                            src={aibg}
                            alt="Contact Our Recruitment Team"
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6 space-y-3">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Contact Our Recruitment Team
                            </h3>
                            <p className="text-gray-600 text-sm">
                                We empower our people by listening & engaging with them on
                                important topics like health & wellbeing, hybrid working.
                                <br />
                                <a href="#" className="text-blue-600 underline text-xs">
                                    Click here for our privacy policy.
                                </a>
                            </p>
                            <button
                                onClick={scrollToForm}
                                className="inline-flex items-center gap-2 px-4 py-2 text-white bg-emerald-500 rounded-full text-sm hover:bg-emerald-600 transition"
                            >
                                Send us your CV <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Search Section */}
            <section className="px-4 md:px-6 lg:px-8 py-8 bg-gray-100">
                <CareerPage />
            </section>

            {/* Career Form Section */}
            <section ref={careerFormRef} className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <CareerForm />
            </section>

            {/* Footer Section */}
            <section className="py-8 bg-gray-100 w-full">
                <Footer />
            </section>
        </div>
    );
};

export default Careers;
