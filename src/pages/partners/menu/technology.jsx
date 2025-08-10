import React, { useState } from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import Footer from "../home/Footer";
import TechConsult from "./tech_consult";
import TechRelated from "./tech_related";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const tech = "/assets/tech.jpg";

const Technology = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    useEffect(() => {
        if (location.hash === '#consultation') {
            const el = document.getElementById('consultation');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white font-sans">
            {/* Header */}
            <Header />

            {/* === Hero Section === */}
            <section className="bg-gray-100 text-gray-900 px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* === Text Content === */}
                <div className="space-y-6 max-w-2xl mx-auto">
                    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Technology
                    </h3>
                    <div className="border-l-4 border-blue-600 pl-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-snug text-gray-900">
                            Empowering Businesses with Cutting-Edge Technology
                        </h1>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        In today’s rapidly evolving digital landscape, maintaining a competitive edge requires the integration of advanced technologies...
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        At Cloud Sentrics, we harness the power of IoT, cloud computing, artificial intelligence, and cybersecurity...
                    </p>
                </div>

                {/* === Image Section === */}
                <div className="flex items-start justify-center h-full">
                    <motion.img
                        src={tech}
                        alt="Technology Illustration"
                        className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-xl shadow-2xl"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                {/* === Full-Width List Underneath === */}
                <div className="col-span-1 lg:col-span-2 mt-8">
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-[#1f426c] uppercase tracking-wider mt-4 font-[Playfair_Display]">
                        Our Technology Capabilities Include:
                    </h4>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Advanced platforms for improved device connectivity and efficient data management",
                            "Secure, real-time data transmission with robust encryption protocols",
                            "Cost-efficient solutions leveraging cloud computing and intelligent automation",
                            "Seamless integration with your existing IT infrastructure for easy scalability",
                            "AI-powered insights to enhance performance and enable smarter decisions"
                        ].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 bg-[#f9fbfd] hover:bg-[#edf3f9] transition-colors duration-300 p-4 rounded-xl border-l-4 border-[#1f426c] shadow-sm"
                            >
                                <span className="mt-1 text-[#1f426c]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#1f426c" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-5.121-5.121a1 1 0 111.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-gray-800 font-[Inter] leading-relaxed text-base">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-lg text-gray-700 leading-relaxed mt-8">
                        Embracing next-generation technologies empowers your business to respond swiftly...
                    </p>
                </div>
            </section>


            {/* === Technology Consulting Section === */}
            <section id="consultation" className="px-6 md:px-16 py-16 bg-gray-100">
                <TechConsult />
            </section>

            {/* === Related Technology Services === */}
            <section className="px-6 md:px-16 py-16 bg-gray-100">
                <TechRelated />
            </section>

            {/* === Footer === */}
            <section className="px-0 py-10 bg-gray-100">
                <Footer />
            </section>
        </div>
    );
};

export default Technology;
