import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // ✅ Added missing import
import Footer from "../home/Footer";
import CareerForm from "./careerform";
import CareerPage from "./otherscareer";
import Header from "../Header";

const logo = "/assets/logo.jpg"; // Replace with your logo path
const cv = "/assets/cv.jpg"; // Replace with your background image path
const role = "/assets/sentrics2.jpg"; // Replace with your background image path

const Careers = () => {


    // Career form reference and scroll function
    const careerFormRef = useRef(null);
    const scrollToForm = () => {
        careerFormRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    // State for mobile menu
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">


            {/* Hero Section */}
            <Header />

            {/* Main Content */}
            <main className="px-4 py-20 text-center bg-white">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-4"
                >
                    <p className="text-3xl text-gray-600">Find your next role with us</p> {/* Increased font size */}
                    <h1 className="text-4xl md:text-7xl font-semibold text-gray-900"> {/* Increased font size */}
                        Build your future with Cloud Sentrics
                    </h1>
                </motion.div>

                {/* Career Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <img
                            src={role}
                            alt="Our Latest Roles"
                            className="w-full h-56 object-cover h-[550px]"
                        />
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-gray-900"> {/* Increased font size */}
                                Our Latest Roles
                            </h3>
                            <p className="text-gray-600 text-base"> {/* Increased font size */}
                                View all open vacancies and apply directly.
                            </p>
                            <button className="inline-flex items-center gap-2 px-4 py-2 text-white bg-purple-800 rounded-full text-base hover:bg-purple-700 transition"> {/* Increased font size */}
                                See our available roles <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                        <img
                            src={cv}
                            alt="Contact Our Recruitment Team"
                            className="w-full h-56 object-cover h-[550px]"
                        />
                        <div className="p-6 space-y-3">
                            <h3 className="text-2xl font-semibold text-gray-900"> {/* Increased font size */}
                                Contact Our Recruitment Team
                            </h3>
                            <p className="text-gray-600 text-base"> {/* Increased font size */}
                                We empower our people by listening & engaging with them on
                                important topics like health & wellbeing, hybrid working.
                                <br />
                                <a href="#" className="text-blue-600 underline text-sm"> {/* Increased font size */}
                                    Click here for our privacy policy.
                                </a>
                            </p>
                            <button
                                onClick={scrollToForm}
                                className="inline-flex items-center gap-2 px-4 py-2 text-white bg-emerald-500 rounded-full text-base hover:bg-emerald-600 transition"> {/* Increased font size */}
                                Send us your CV <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </main>


            {/* Search Section */}
            <section className="px-4 md:px-6 lg:px-8 py-8 bg-gray-100">
                <CareerPage />
            </section>

            {/* Career Form Section */}
            <section ref={careerFormRef} className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
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
