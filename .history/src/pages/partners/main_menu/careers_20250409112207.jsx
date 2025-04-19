import React, { useRef } from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import { FaArrowRight } from "react-icons/fa"; // ✅ Added missing import
import CareerPage from "./otherscareer";
import CareerForm from "./careerform";
import React, { useRef } from "react";


const logo = "/assets/logo.jpg";
const aibg = "/assets/ai.jpg";

const Careers = () => {
    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Navigation Header */}
            <div className="flex justify-center px-6 md:px-12 py-6 bg-white shadow-lg w-full h-28 md:h-32 lg:h-40">
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
                        Build your future with Bell
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
                            <button className="inline-flex items-center gap-2 px-4 py-2 text-white bg-emerald-500 rounded-full text-sm hover:bg-emerald-600 transition">
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

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
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
