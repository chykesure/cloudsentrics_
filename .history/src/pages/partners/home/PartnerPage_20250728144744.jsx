import React, { useState } from "react";
import { Link } from 'react-router-dom';  // ✅ Import Link
import Header from '../Header';
import { motion } from 'framer-motion';
import ServicesPage from './ServicesPage';
import InsightPage from './InsightPage';
import Industries from './Industries';
import CustomerPage from './CustomerPage';
import LatestNews from './LatestNews';
import Footer from './Footer';
import AwsCertification from "../../students/certificate/Aws";

const backgroundImage = '/assets/sentrics3.jpg';
const logo = "/assets/logo.jpg";

function PartnerPage() {
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

            {/* Hero Section */}
            <Header />

            {/* Hero Section */}
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 py-12 lg:py-20">
                {/* Left Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        Powering Cloud-Driven <br />
                        <span className="text-blue-400">Transformation</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                        From mastering AI to optimizing cloud migrations, Cloud Sentrics accelerates your journey while minimizing risks, empowering businesses to thrive in the digital era.
                    </p>
                    {/* <a
                        href="#"
                        className="inline-block mt-6 px-6 py-3 text-lg font-semibold rounded-full transition-transform transform hover:scale-105"
                        style={{ backgroundColor: '#21bf73', color: '#fff' }}
                    >
                        Explore our services →
                    </a> */}
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 relative">
                    <motion.img
                        src={backgroundImage}
                        alt="Digital Transformation"
                        className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg shadow-xl"
                        animate={{
                            y: [0, -10, 0],
                            transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                        }}
                    />
                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <ServicesPage />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <InsightPage />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <Industries />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <CustomerPage />
            </section>

            {/* AWS CERTIFICATION */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <AwsCertification />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <LatestNews />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>
        </div>
    );
}

export default PartnerPage;
