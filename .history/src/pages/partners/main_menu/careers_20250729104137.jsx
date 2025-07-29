import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../home/Footer";
import CareerForm from "./careerform";
import CareerPage from "./otherscareer";
import Header from "../";

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
            <section className="pt-20 pb-10 bg-[#f9fafb] px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <p className="text-lg md:text-xl text-gray-500 font-medium">
                        Find your next role with us
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#1e4272] leading-tight">
                        Build Your Future with Cloud Sentrics
                    </h1>
                    <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover exciting career opportunities that empower you to thrive and grow.
                    </p>
                </motion.div>
            </section>

            {/* Career Cards */}
            <section className="px-6 md:px-12 py-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
                {/* Latest Roles Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                    <img src={role} alt="Our Latest Roles" className="w-full h-[350px] object-cover" />
                    <div className="p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-[#1e4272]">Our Latest Roles</h3>
                        <p className="text-gray-600 text-base">
                            View all open vacancies and apply directly to join our growing team.
                        </p>
                        <Link
                            to="/available-roles"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-[#6b21a8] hover:bg-[#5b1a92] text-white rounded-full text-sm font-medium transition"
                        >
                            See Available Roles <FaArrowRight />
                        </Link>
                    </div>
                </motion.div>

                {/* Contact Team Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                    <img src={cv} alt="Contact Recruitment Team" className="w-full h-[350px] object-cover" />
                    <div className="p-6 space-y-4">
                        <h3 className="text-2xl font-semibold text-[#1e4272]">Contact Our Recruitment Team</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            We empower our people by listening and engaging on key topics like wellbeing
                            and hybrid working.
                            <br />
                            <a href="#" className="text-blue-600 underline text-sm mt-2 inline-block">
                                View our privacy policy
                            </a>
                        </p>
                        <button
                            onClick={scrollToForm}
                            className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-medium transition"
                        >
                            Send Us Your CV <FaArrowRight />
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Other Careers Listing */}
            <section className="py-8 bg-gray-50 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <CareerPage />
                </div>
            </section>

            {/* Form Section */}
            <section ref={careerFormRef} className="py-10 px-4 md:px-6 bg-[#f3f4f6]">
                <div className="bg-white shadow-md rounded-xl p-6 md:p-8 border border-gray-200">
                    <CareerForm />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Careers;
