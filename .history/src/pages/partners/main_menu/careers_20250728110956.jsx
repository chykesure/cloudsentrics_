import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../home/Footer";
import CareerForm from "./careerform";
import CareerPage from "./otherscareer";
import Header from "../Header";

const logo = "/assets/logo.jpg";
const cv = "/assets/cv.jpg";
const role = "/assets/sentrics2.jpg";

const Careers = () => {
    const careerFormRef = useRef(null);
    const scrollToForm = () => {
        careerFormRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="bg-white text-gray-800">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-[#f9fafb] text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 max-w-4xl mx-auto"
                >
                    <p className="text-lg md:text-xl text-gray-500 font-medium">
                        Find your next role with us
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1e4272] leading-tight">
                        Build your future with Cloud Sentrics
                    </h1>
                    <p className="text-md md:text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
                        Discover exciting career opportunities that empower you to thrive.
                    </p>
                </motion.div>
            </section>

            {/* Career Cards Section */}
            <section className="px-6 md:px-12 py-12 bg-white grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                    <img
                        src={role}
                        alt="Our Latest Roles"
                        className="w-full h-[350px] object-cover"
                    />
                    <div className="p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-[#1e4272]">
                            Our Latest Roles
                        </h3>
                        <p className="text-gray-600 text-base">
                            View all open vacancies and apply directly to join our growing team.
                        </p>
                        <Link
                            to="/available-roles"
                            className="inline-flex items-center gap-2 px-5 py-3 text-white bg-[#6b21a8] rounded-full hover:bg-[#5b1a92] transition text-sm font-medium"
                        >
                            See available roles <FaArrowRight />
                        </Link>
                    </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                    <img
                        src={cv}
                        alt="Contact Recruitment Team"
                        className="w-full h-[350px] object-cover"
                    />
                    <div className="p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-[#1e4272]">
                            Contact Our Recruitment Team
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            We empower our people by listening and engaging with them on key topics like wellbeing and hybrid working.
                            <br />
                            <a
                                href="#"
                                className="text-blue-600 underline text-sm mt-2 inline-block"
                            >
                                Click here for our privacy policy.
                            </a>
                        </p>
                        <button
                            onClick={scrollToForm}
                            className="inline-flex items-center gap-2 px-5 py-3 text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition text-sm font-medium"
                        >
                            Send us your CV <FaArrowRight />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Other Career Listings */}
            <section className="px-1 md:px-1 py-1 bg-gray-100">
                <CareerPage />
            </section>

            {/* CV Submission Form */}
            <section
                ref={careerFormRef}
                className="px-1 md:px-1 py-1 bg-[#f3f4f6]"
            >
                <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">
                    <CareerForm />
                </div>
            </section>


            {/* Footer */}
            <section className="bg-gray-100">
                <Footer />
            </section>
        </div>
    );
};

export default Careers;
