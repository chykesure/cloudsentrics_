import React, { useState} from "react";
import { Link } from 'react-router-dom';  // ✅ Import Link
import Header from '../Header';
import { motion } from 'framer-motion';
import ServicesPage from './ServicesPage';
import InsightPage from './InsightPage';
import CustomerPage from './CustomerPage';
import LatestNews from './LatestNews';
import Footer from './Footer';

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
                    <a
                        href="#"
                        className="inline-block mt-6 px-6 py-3 text-lg font-semibold rounded-full transition-transform transform hover:scale-105"
                        style={{ backgroundColor: '#21bf73', color: '#fff' }}
                    >
                        Explore our services →
                    </a>
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
                <CustomerPage />
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
