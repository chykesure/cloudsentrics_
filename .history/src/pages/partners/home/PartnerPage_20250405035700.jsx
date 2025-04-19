import React from 'react';
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
    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Header Section */}
            <div className="flex justify-center px-6 md:px-12 py-6 bg-white shadow-lg w-full h-28 md:h-32 lg:h-40">
                <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto h-full">

                    {/* Left: Logo and Branding - Fully Left-Aligned */}
                    <div className="absolute left-0 flex items-center w-auto h-full">
                        <Link to="/">
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
