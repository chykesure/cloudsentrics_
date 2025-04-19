import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FormsPage from "./forms";
import RelatedServices from "./services";
import Footer from "../home/Footer";

const logo = "/assets/logo.jpg";
const aibg = "/assets/ai.jpg";

const Ai = () => {
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
                                alt="Bell Integration Logo"
                                className="h-24 md:h-28 lg:h-32 w-40 md:w-48 lg:w-56 cursor-pointer"
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

            {/* AI Section */}
            <section className="bg-[#f9f9f9] px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Text Content */}
                <div className="lg:col-span-2 animate__animated animate__fadeIn flex-shrink-0 space-y-6">
                    {/* Heading Section */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-medium text-gray-500 uppercase tracking-wide">Artificial Intelligence</h3>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-gray-800">
                            Putting Artificial <br /> Intelligence to Work
                        </h1>
                    </div>

                    {/* Paragraph Content */}
                    <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                        From business decision automation to productive collaboration, today’s organizations are leveraging AI
                        technologies to change how business gets done. Everything from the digital-first transformation of systems
                        and customer and employee interactions to using AI to do more with data and build new business models.
                        Our expert AI and automation services help organizations realize measurable value and achieve business
                        objectives faster.
                    </p>

                    {/* Call to Action Button */}
                    <div className="flex justify-center lg:justify-start mt-8">
                        <a
                            href="#"
                            className="bg-[
#1e4272] text-white text-center py-4 px-8 rounded-lg font-semibold text-lg shadow-md hover:bg-purple-800 hover:scale-105 transition duration-300 ease-in-out transform hover:translate-y-1 w-full md:w-auto"
                        >
                            Contact us to book a consultation
                        </a>
                    </div>
                </div>


                {/* Right AI Image */}
                <div className="lg:col-span-1 flex justify-center items-center flex-shrink-0">
                    <motion.img
                        src={aibg}
                        alt="AI Representation"
                        className="w-full max-w-lg rounded-lg shadow-2xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* Bottom Section */}
                <div className="lg:col-span-3 flex flex-col gap-6 w-full">

                    {/* Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
                        {/* Aligned Services */}
                        <div className="bg-white p-6 rounded-lg shadow-lg border-gray-200 hover:scale-105 hover:shadow-xl flex-shrink-0 w-full">
                            <h4 className="text-2xl font-semibold text-gray-800">Aligned Services</h4>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                {[
                                    "Event - Accelerating AI adoption: Closing the readiness gap",
                                    "Conversational AI",
                                    "AI Ops",
                                    "Business Process Automation",
                                    "AI Training"
                                ].map((service, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="text-purple-600">•</span>
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Why Choose Us? */}
                        <div className="bg-white p-6 rounded-lg shadow-lg border-gray-200 hover:scale-105 hover:shadow-xl flex-shrink-0 w-full">
                            <h4 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h4>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                {[
                                    "Industry-leading AI solutions tailored for your needs.",
                                    "Seamless AI integration with your existing infrastructure.",
                                    "Proven track record of AI-driven success.",
                                    "Expert guidance every step of the way."
                                ].map((reason, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="text-green-600 text-lg">✔</span>
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Key Benefits of AI */}
                        <div className="bg-white p-6 rounded-lg shadow-lg border-gray-200 hover:scale-105 hover:shadow-xl flex-shrink-0 w-full">
                            <h4 className="text-2xl font-semibold text-gray-800">Key Benefits of AI</h4>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                {[
                                    "Improved efficiency and productivity.",
                                    "Enhanced decision-making through data insights.",
                                    "Cost savings and operational optimization.",
                                    "Scalable solutions for future growth."
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-center space-x-2">
                                        <span className="text-blue-600 text-lg">⚡</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <FormsPage />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <RelatedServices />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>

        </div>
    );
};

export default Ai;
