
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import SearchArticles from "./search";
import ContactForm from "./contactother";
import ContactMap from "./contactmap";
import React, { useState} from "react";

const logo = "/assets/logo.jpg";
const heroImage = "/assets/contact.jpg";

const ContactUs = () => {

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

            <section className="container mx-auto flex flex-col md:flex-row gap-6 px-4 py-10">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <div>
                        <p className="text-3xl text-gray-600 font-semibold">Contact Us</p>
                        <h2 className="text-3xl font-bold border-l-4 border-blue-700 pl-4 mt-2">
                            Get In Touch with <br />Cloud Sentrics Integration
                        </h2>
                    </div>

                    <div className="bg-white p-6 shadow rounded-xl space-y-4">
                        <p className="text-lg font-semibold text-gray-800">
                            Headquartered in the UK and with offices and operations across the globe, we work with local and international customers to streamline every aspect of their IT management strategies to maximise efficiencies and increase their ROI, year on year.
                        </p>
                        <p className="font-semibold text-gray-800">
                            Head-quartered in the UK and employing over 1000 people across the globe.
                        </p>
                        <p className="text-sm text-gray-700">
                            We are trusted by many global Fin-techs, Telco’s, and government and public sector organisations. Our customers depend on us to ensure their IT services and infrastructure are always available, scalable, sustainable, and resilient.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <div className="w-full h-full max-h-[500px] overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={heroImage}
                            alt="Skyscraper"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>


            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <ContactForm />
            </section>


            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <ContactMap />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>

        </div>
    );
};

export default ContactUs;
