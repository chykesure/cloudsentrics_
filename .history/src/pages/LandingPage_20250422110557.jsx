import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCloud, FaShieldAlt, FaUserTie, FaHandshake, FaCogs, FaNetworkWired, FaWhatsapp, FaGlobe, FaChartLine, FaRocket } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Header from "../pages/Header"; // Import Header component
import Footer from "../pages/Footer"; // Import Header component
import TestimonialPage from "./students/Reviews";
import TestimonialSlider from "./students/Testimony";
import TestimonialLanding from "./students/TestimonyLanding";


const trainingImage = "/assets/sentrics5.jpg";
const consultingImage = "/assets/sentrics4.jpg";
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
                backgroundImage: `url(${backgroundImages[bgIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out"
            }}
        >
            <Header />
            {/* TEXT SLIDER SECTION */}
            <section className="w-full text-center py-12 sm:py-16 md:py-20 px-4 mt-12 rounded-lg">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-900 to-blue-500 text-white bg-clip-text">
                    Build Your Future with <br />
                    <span className="text-white">Cloud Sentrics</span>
                </h2>

                <div className="relative overflow-hidden h-auto min-h-[80px] flex justify-center items-center mt-6 rounded-lg shadow-md max-w-5xl mx-auto px-6">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1, ease: "easeInOut", type: "tween" }}
                            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide text-center leading-relaxed"
                        >
                            {textSlides[index]}
                        </motion.p>
                    </AnimatePresence>
                </div>

            </section>


            {/* FLEX CONTAINER FOR BOTH SECTIONS */}
            <div className="w-full px-4 md:px-6 mb-12">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* === STUDENTS CARD === */}
                    <motion.section
                        whileHover={{ y: -5, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 bg-white/80 rounded-xl shadow-md p-6 md:p-10 flex flex-col"
                    >
                        <img
                            src={trainingImage}
                            alt="Student Learning"
                            className="w-full h-[250px] object-cover rounded-lg mb-6 flex-shrink-0"
                        />

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Learn From Us?</h2>

                        <div className="space-y-6 flex-grow">
                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <GiTeacher className="text-blue-500" />
                                    Real-World Learning Approach
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Our tutors use real-life tasks to mentor students, making complex concepts in Cloud Services easier to grasp.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <MdCloudDone className="text-blue-500" />
                                    Industry-Relevant Skills
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Gain hands-on experience in Cloud Engineering, Security, and Networking, focused on AWS and Azure.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <GiTeacher className="text-blue-500" />
                                    Personalized Mentorship
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Learn directly from industry experts who guide you towards career success.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <MdWork className="text-blue-500" />
                                    Job Placement Support
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Get access to job opportunities and career development resources.
                                </p>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 self-start"
                            onClick={() => navigate('/StudentPage')}
                        >
                            Enroll Now
                        </motion.button>
                    </motion.section>

                    {/* === CLIENTS CARD === */}
                    <motion.section
                        whileHover={{ y: -5, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
                        transition={{ duration: 0.3 }}
                        className="flex-1 bg-white/80 rounded-xl shadow-md p-6 md:p-10 flex flex-col"
                    >
                        <img
                            src={consultingImage}
                            alt="Business Consulting"
                            className="w-full h-[250px] object-cover rounded-lg mb-6 flex-shrink-0"
                        />

                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Work With Us?</h2>

                        <div className="space-y-6 flex-grow">
                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <SiGooglecloud className="text-green-500" />
                                    Seamless On-Prem to Cloud Migration
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    We help businesses migrate workloads to AWS and Azure with efficiency and security.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <FaUserShield className="text-green-500" />
                                    End-to-End Cloud Security
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Our team ensures that workloads deployed on the Cloud remain secure and compliant.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <FaNetworkWired className="text-green-500" />
                                    Optimized Cloud Networking
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    We design, implement, and manage cloud networks for scalability and performance.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <MdCloudDone className="text-green-500" />
                                    Tailored Cloud Solutions
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    From architecture to deployment, we provide custom cloud strategies that align with business goals.
                                </p>
                            </div>

                            <div>
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <MdWork className="text-green-500" />
                                    Qualified Cloud Professionals
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    We provide certified Cloud experts to work on your projects, ensuring seamless execution and technical excellence.
                                </p>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="mt-8 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 self-start"
                            onClick={() => navigate('/PartnerPage')}
                        >
                            Partner With Us
                        </motion.button>
                    </motion.section>
                </div>
            </div>


            {/* Why Choose Cloud Sentrics Section */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 bg-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center">
                    Why Choose <span style={{ color: primaryColor }}>Cloud Sentrics?</span>
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed">
                    Our program is designed to provide hands-on, practical training that helps you transition into Cloud and DevSecOps roles
                    with confidence. Here’s what sets us apart:
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
                </div>

                {/* Learn More Button */}
                {/* <div className="text-center mt-10">
                    <a
                        href="#"
                        className="px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg md:text-xl font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        style={{ backgroundColor: primaryColor }}
                    >
                        Learn More
                    </a>
                </div> */}
            </section>

            {/* Testimonial Page Section */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <TestimonialPage />
            </section>

            {/* Testimonials Section */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <TestimonialLanding />
            </section>


            <Footer />

        </div>
    );
};

export default LandingPage;
