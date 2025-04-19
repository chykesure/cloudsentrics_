import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import SearchArticles from "./search";

const logo = "/assets/logo.jpg";
const aibg = "/assets/ai.jpg";

const InsightMenu = () => {
    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Header Section */}
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

            {/* Insight Section */}
            <section className="bg-white px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Left Text Content */}
                <div className="lg:col-span-2 space-y-4">
                    {/* Category */}
                    <h3 className="text-lg font-semibold text-gray-700">Insights</h3>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug border-l-4 border-blue-600 pl-4">
                        Windows 10 End of Support: <br />
                        Time is running out for your <br />
                        Windows 10 IT Infrastructure
                    </h1>
                </div>

                {/* Right Image Content */}
                <div className="lg:col-span-1 flex justify-center items-center">
                    <img
                        src={aibg} // Replace with your imported image or static path
                        alt="Windows 10 Hourglass"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                </div>
            </section>


            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <SearchArticles />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>

        </div>
    );
};

export default InsightMenu;
