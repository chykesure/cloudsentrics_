import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import SearchArticles from "./search";
import ContactForm from "./contactother";
import ContactMap from "./contactmap";

const logo = "/assets/logo.jpg";
const heroImage = "/assets/contact.jpg";

const ContactUs = () => {
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

            <section className="container mx-auto flex flex-col md:flex-row gap-6 px-4 py-10">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <div>
                        <p className="text-sm text-gray-600 font-semibold">Contact Us</p>
                        <h2 className="text-3xl font-bold border-l-4 border-blue-700 pl-4 mt-2">
                        Get In Touch with <br/>Cloud Sentrics Integration
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
