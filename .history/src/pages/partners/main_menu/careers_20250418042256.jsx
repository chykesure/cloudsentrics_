import React, { useRef, useState } from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import { FaArrowRight } from "react-icons/fa"; // ✅ Added missing import
import CareerPage from "./otherscareer";
import CareerForm from "./careerform";


const logo = "/assets/logo.jpg";
const aibg = "/assets/ai.jpg";

const Careers = () => {

    // State
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    // Hamburger Button
    <button
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="md:hidden absolute right-6 top-8 z-50"
    >
        <svg className="w-8 h-8 text-[#1e1e1e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
    </button>


    const careerFormRef = useRef(null);
    const scrollToForm = () => {
        careerFormRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Navigation Header */}
            <div className="relative flex justify-center px-6 md:px-12 py-6 bg-white shadow-lg w-full h-28 md:h-32 lg:h-40 z-30">
                <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto h-full">

                    {/* Left: Logo and Branding - Fully Left-Aligned */}
                    <div className="absolute left-0 flex items-center w-auto h-full">
                        <Link to="/PartnerPage">
                            <img
                                src={logo}
                                alt="Cloudsentrics Logo"
                                className="h-20 md:h-28 lg:h-34 w-auto ml-9 transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Right: Navigation Menu - Centered */}
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

            {/* Mobile Menu */}
            {mobileNavOpen && (
                <div className="md:hidden absolute top-24 left-0 w-full bg-white shadow-md z-40 flex flex-col items-center space-y-6 py-6">
                    {[
                        { label: "AI", path: "/ai" },
                        { label: "CLOUD & SECURITY", path: "/cloud-security" },
                        { label: "IOT", path: "/iot" },
                        { label: "MODERN WORKPLACE", path: "/modern-workplace" },
                        { label: "TECHNOLOGY", path: "/technology" }
                    ].map((item, index) => (
                        <Link key={index} to={item.path} onClick={() => setMobileNavOpen(false)}>
                            <span className="text-[#1e1e1e] text-lg font-semibold hover:text-blue-600">{item.label}</span>
                        </Link>
                    ))}
                </div>
            )}


            <Header />

            {/* Careers Section */}
            <section className="bg-white text-black px-6 md:px-16 py-16 lg:py-24 space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <p className="text-2xl text-gray-600">Find your next role with us</p>
                    <h1 className="text-3xl md:text-6xl font-semibold text-gray-900">
                        Build your future with Cloud Sentrics
                    </h1>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <img
                            src="/assets/role.jpg"
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
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <img
                            src="/assets/cv.jpg"
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
            </section>

            {/* Search Section */}
            <section className="px-4 md:px-6 lg:px-8 py-8 bg-gray-100">
                <CareerPage />
            </section>

            <section
                ref={careerFormRef}
                className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100"
            >
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
