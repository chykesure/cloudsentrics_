import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket, FaGlobe, FaChartLine, FaCog, FaShieldAlt, FaHandsHelping } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Header from "../pages/Header"; // Import Header component
import Footer from "../pages/Footer"; // Import Header component
import AwsCertification from "./students/certificate/Aws";
import TestimonialSlider from "./students/Testimony";
import TestimonialLanding from "./students/TestimonyLanding";

import { MdCloudDone, MdWork } from "react-icons/md";
import { FaUserShield, FaNetworkWired } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";


const trainingImage = "/assets/sentrics5.jpg";
const consultingImage = "/assets/sentrics3.jpg";
const whatsappNumber = "2348123456789"; // Replace with your actual WhatsApp number
const primaryColor = "#1e4272";

// Background images array
const backgroundImages = [
    "/assets/cloud1.jpg",
    "/assets/cloud2.jpg",
    "/assets/cloud3.jpg"
];

const textSlides = [
    "Empower your career and business with expert AWS DevSecOps training and Cloud consulting services.",
    "We provide hands-on staff development and scalable cloud solutions to drive innovation and transformation."
];



const LandingPage = () => {
    const [index, setIndex] = useState(0);
    const [bgIndex, setBgIndex] = useState(0);

    // Change text every 3 seconds
    useEffect(() => {
        const textInterval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % textSlides.length);
        }, 10000);
        return () => clearInterval(textInterval);
    }, []);

    // Change background image every 5 seconds
    useEffect(() => {
        const bgInterval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(bgInterval);
    }, []);

    const navigate = useNavigate('/Student');

    return (


        <div className="min-h-screen flex flex-col justify-between w-full"
            style={{
                background: "linear-gradient(to bottom right, #1f426c, #ffffff)",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >

            <Header />
            {/* TEXT SLIDER SECTION */}
            <section className="w-full text-center py-12 sm:py-16 md:py-20 px-4 mt-12 rounded-lg">
                <h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-900 to-blue-500 text-white bg-clip-text"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                    Build Your Future with <br />
                    <span className="text-white">Cloud Sentrics</span>
                </h2>


                <div className="relative overflow-hidden h-auto min-h-[80px] flex justify-center items-center mt-6 rounded-lg shadow-md max-w-5xl mx-auto px-6">
                    <p
                        className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide text-center leading-relaxed"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        {textSlides[index]}
                    </p>
                </div>

            </section>



            {/* FLEX CONTAINER FOR BOTH SECTIONS */}
            <div className="w-full px-4 md:px-6 lg:px-8 mb-12 lg:mb-16">
                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {/* === STUDENTS CARD === */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12)" }}
                        className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-100/80 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Hero Image */}
                        <div className="relative h-64 md:h-80 lg:h-[420px] overflow-hidden">
                            <img
                                src={trainingImage}
                                alt="Students engaged in cloud technology training"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                loading="lazy"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 lg:p-10">
                            <h2 className="text-3xl md:text-3.5xl font-bold text-gray-900 mb-8 leading-tight">
                                Why Learn From Us?
                            </h2>

                            <div className="space-y-7">
                                {/* Feature 1 */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1 p-2 bg-blue-50 rounded-lg">
                                        <GiTeacher className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            Real-World Learning Approach
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Our tutors use real-life tasks to mentor students, making complex concepts in Cloud Services easier to grasp.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1 p-2 bg-blue-50 rounded-lg">
                                        <MdCloudDone className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            Industry-Relevant Skills
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Gain hands-on experience in Cloud Engineering, Security, and Networking, focused on AWS and Azure.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1 p-2 bg-blue-50 rounded-lg">
                                        <GiTeacher className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            Personalized Mentorship
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Learn directly from industry experts who guide you towards career success.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 4 */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1 p-2 bg-blue-50 rounded-lg">
                                        <MdWork className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            Job Placement Support
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Get access to job opportunities and career development resources.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.04, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                onClick={() => navigate('/StudentPage')}
                                className="mt-10 flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-xl shadow-md hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                            >
                                Enroll Now
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.section>

                    {/* === CLIENTS CARD PLACEHOLDER === */}
                    {/* Your original code had an empty clients card section here – keeping it commented */}
                </div>
            </div>

            {/* AWS CERTIFICATION */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <AwsCertification />
            </section>


            {/* Why Choose Cloud Sentrics Section */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 bg-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center">
                    Why Choose <span style={{ color: primaryColor }}>Cloud Sentrics?</span>
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed">
                    Our program is designed to provide hands-on, practical training that helps you transition into Cloud and DevSecOps roles with confidence. Companies choose Cloud Sentrics because we offer customized cloud solutions tailored to your business needs, leverage our expertise in cloud technologies and security to ensure scalable and secure environments, and provide end-to-end support from consultation through to deployment and ongoing optimization for seamless integration.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaGlobe className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            No Prior Tech Experience Required
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Whether you're new to tech or switching careers, Cloud Sentrics provides structured learning from fundamentals
                            to advanced Cloud & DevSecOps practices.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaChartLine className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            High Demand & Global Job Market
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Cloud computing and DevSecOps are among the top 5 most sought-after tech skills globally.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaRocket className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            Access to Real-world Projects
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Our curriculum includes hands-on projects and industry case studies, ensuring you apply your skills to real-world problems.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaCog className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            Customized Solutions
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            We provide tailored cloud solutions that align with your business needs for maximum efficiency and growth.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaShieldAlt className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            Cloud & Security Expertise
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Leverage our deep knowledge in cloud technologies and DevSecOps to ensure secure and scalable cloud environments.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaHandsHelping className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            End-to-End Support
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            From consultation to deployment and ongoing optimization, we offer comprehensive support for seamless cloud integration.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonial Page Section */}
            {/* <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <TestimonialPage />
            </section> */}

            {/* Testimonials Section */}
            {/* <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <TestimonialLanding />
            </section> */}


            <Footer />

        </div>
    );
};

export default LandingPage;
