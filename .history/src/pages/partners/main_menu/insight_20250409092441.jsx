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

            <section className="bg-white px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    className="lg:col-span-2 space-y-6"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-blue-600 font-medium text-sm uppercase tracking-wider">
                        Insights
                    </h3>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug border-l-4 border-blue-600 pl-4">
                        Windows 10 End of Support: <br />
                        Time is running out for your <br />
                        Windows 10 IT Infrastructure
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg">
                        Microsoft has announced the end of support for Windows 10. Now is the
                        time to plan your migration to avoid security vulnerabilities and
                        compliance issues.
                    </p>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    className="lg:col-span-1 flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={aibg}
                        alt="Windows 10 Hourglass"
                        className="w-full max-w-sm rounded-xl shadow-xl object-cover"
                    />
                </motion.div>
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
