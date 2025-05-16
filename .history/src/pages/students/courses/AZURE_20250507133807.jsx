import React from "react";
import Headers from "../Header"; // Ensure Header is included
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import FooterPage from "../../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faSearch, faShieldAlt, faDatabase, faExclamationTriangle, faClipboardCheck, faCloud } from "@fortawesome/free-solid-svg-icons";
import CoursePayment from "../../CoursePaymentModal";
import { useState } from 'react';


const course1 = "/assets/sentrics1.jpg";
const course4 = "/assets/sentrics4.jpg";
const course5 = "/assets/sentrics5.jpg";
const DEVCOURSE = "/assets/cds3.jpg";

const sign = "/assets/azure-img.jpg";
const mas = "/assets/cds3.jpg";

// Import your images
const courseImages = [
    { id: "01", title: "An Azure DevSecOps engineer looking to integrate security into CI/CD pipelines.", image: course5 },
    { id: "02", title: "A security professional aiming to automate and enforce security best practices in Azure.", image: course1 },
    { id: "03", title: "Someone new to Azure security eager to learn secure development and cloud security practices.", image: course4 },
];




const sliderSettings = {
    dots: false,            // Hide bottom dots
    infinite: true,         // Loop slides infinitely
    speed: 700,            // Transition speed
    slidesToShow: 3,        // Show 3 slides at once
    slidesToScroll: 1,      // Scroll 1 slide at a time
    autoplay: true,         // Auto-scroll
    autoplaySpeed: 3000,    // 3 seconds per slide
    arrows: true,          // Show left/right arrows
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }
    ]
};

const topics = [
    { title: "Cloud Identity & Access Management", description: "Manage secure authentication and access control using Azure AD and Conditional Access.", icon: faUserShield },
    { title: "Cloud-Native Detection Tools", description: "Monitor threats with Azure Defender and Microsoft Sentinel for proactive security insights.", icon: faSearch },
    { title: "Cloud-Native Network & Application Protection", description: "Enhance security with Azure Firewall and DDoS Protection for robust defense.", icon: faShieldAlt },
    { title: "Cloud Data Protection", description: "Safeguard sensitive data using Azure Key Vault and Azure Encryption technologies.", icon: faDatabase },
    { title: "Cloud Incident Response", description: "Investigate and respond to security threats using Azure Monitor and Log Analytics.", icon: faExclamationTriangle },
    { title: "Cloud Compliance & Auditing Tools", description: "Ensure regulatory compliance with Azure Policy and Compliance Manager.", icon: faClipboardCheck },
    { title: "CSPM & CNAPP", description: "Strengthen cloud security posture with Azure Security Center and Defender for Cloud.", icon: faCloud }
];




const AZURE = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Headers />

            {/* Hero Section */}
            <div
                className="relative w-full h-auto min-h-[40vh] bg-cover bg-center before:absolute before:inset-0 before:bg-blue-900 before:opacity-65"
                style={{ backgroundImage: `url(${DEVCOURSE})` }}
            >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-20 lg:px-32 py-16 md:py-24">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6 leading-tight">
                        Kickstart Your <span className="text-[#ffffff]">Azure Cloud Security Journey</span> Today
                    </h3>
                    <p className="mt-6 max-w-6xl text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed">
                        Master the art of securing Microsoft Azure environments. Learn identity and access management, secure DevSecOps,
                        compliance, automation, infrastructure as code (IaC), threat detection, and more. Gain hands-on experience with
                        real-world Azure security projects and best practices.
                    </p>
                    <button onClick={handleOpenModal} className="mt-8 bg-[#1e4272] text-white px-10 py-5 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
    transition-all duration-300 transform hover:bg-[#18365a] hover:scale-105 shadow-lg animate-bounce">
                        Get Started with Azure Security
                    </button>
                </div>
                {/* Enroll Modal */}
                <CoursePayment isOpen={isModalOpen} onClose={handleCloseModal} />

            </div>


            {/* Main Content Section */}
            <div className="w-full px-6 md:px-20 lg:px-32 py-20">

                <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-100">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">CURRICULUM</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {topics.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col transition-transform transform hover:scale-105"
                            >
                                <FontAwesomeIcon icon={topic.icon} className="text-[#1e4272] text-3xl mb-4" />
                                <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                                <p className="text-gray-600 mt-2 flex-grow">{topic.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-100">
                    {/* Animated Heading */}
                    <motion.h1
                        className="text-center text-6xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        This course is for you if you are a:
                    </motion.h1>

                    {/* Slider Section */}
                    <Slider {...sliderSettings}>
                        {courseImages.map((item) => (
                            <motion.div
                                key={item.id}
                                className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 cursor-pointer px-2"
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Image with Zoom Effect */}
                                <motion.img
                                    src={item.image}
                                    className="w-full h-[500px] object-cover transition-transform duration-300 ease-in-out"
                                    alt={item.title}
                                    whileHover={{ scale: 1.1 }}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-blue-900 before:opacity-40 flex flex-col justify-end p-6">
                                    <motion.span
                                        className="text-white text-xl font-extrabold drop-shadow-lg"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        {item.id}
                                    </motion.span>

                                    <motion.h3
                                        className="text-white text-3xl font-extrabold drop-shadow-xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        {item.title}
                                    </motion.h3>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </section>


                <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-100">
                    {/* Main Heading */}
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
                        Start Your Azure Cloud Security Career with the Most Supportive Community
                    </h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: "100% Hands-On Azure Security Training",
                                description: "Gain real-world experience with Azure security automation, IAM, and compliance.",
                            },
                            {
                                title: "Secure Azure DevSecOps Pipelines",
                                description:
                                    "Learn to integrate security into CI/CD workflows using Azure DevSecOps, GitHub Actions, and Sentinel.",
                            },
                            {
                                title: "Self-Paced Azure Security Learning",
                                description: "Master Azure Security at your own pace with 128+ hours of expert-led training over 4 months - Saturdays & Sundays only. Gain hands-on experience through on-demand video lessons and interactive exercises to become job-ready!",
                            },
                            /* {
                                title: "12 Months of Free Azure Lab Access",
                                description: "Enjoy free access to hands-on security labs for tools like Microsoft Defender for Cloud and Azure Policy.",
                            }, */
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                                    transition: { duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-white p-6 rounded-lg shadow-md transition-transform transform cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>


            </div>


            {/* How We Get You to Competence Section */}
            <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20">
                {/* Heading for Both Divs */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        What You'll Achieve in This Azure Security Course
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Gain essential skills to secure Azure cloud environments, implement security best practices, and protect enterprise workloads.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                    {/* Left Side - Image */}
                    <div className="rounded-lg overflow-hidden shadow-lg h-full flex">
                        <img
                            src={sign}
                            alt="Azure Security Course Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="bg-white p-8 shadow-lg rounded-xl h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                By the end of this Azure Security course, you’ll be able to:
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Understand the fundamentals of Azure security, compliance, and risk management.",
                                    "Implement security best practices in Azure using Microsoft Defender for Cloud and Azure Security Center.",
                                    "Master Identity and Access Management (IAM) in Azure with Azure AD, MFA, and conditional access policies.",
                                    "Secure Azure DevSecOps pipelines with automated security testing and policy enforcement.",
                                    "Apply Infrastructure as Code (IaC) security using Azure Bicep and Terraform.",
                                    "Protect cloud workloads using advanced threat protection tools like Azure Sentinel and Microsoft Defender XDR.",
                                    "Develop hands-on experience with real-world Azure security projects to build a strong cloud security portfolio."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <span className="text-blue-600 text-xl">✅</span>
                                        <p className="text-gray-700">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Enroll Button */}
                        <div className="mt-6">
                            <button className="bg-[#1e4272] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            <div className="mb-16"></div>

            {/* Footer Section */}
            <footer className="w-full bg-[#1e4272] text-white py-10 px-6 text-center">

                <FooterPage />

            </footer>
        </div>
    );
};

export default AZURE;
