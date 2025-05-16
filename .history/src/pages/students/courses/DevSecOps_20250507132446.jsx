import React from "react";
import Headers from "../Header"; // Ensure Header is included
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import FooterPage from "../../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faServer, faCodeBranch, faLock, faCloud, faCogs, faClipboardCheck, faBug, faTools, faNetworkWired, faFileAlt, faUsersCog } from "@fortawesome/free-solid-svg-icons";
import CoursePayment from "../../CoursePaymentModal";
import { useState } from 'react';

const course1 = "/assets/sentrics1.jpg";
const course4 = "/assets/sentrics4.jpg";
const course5 = "/assets/sentrics5.jpg";
const DEVCOURSE = "/assets/DevSecOps3.jpg";

const sign = "/assets/signature.jpg";
const mas = "/assets/cds3.jpg";

// Import your images
const courseImages = [
    { id: "01", title: "A DevSecOps engineer looking to integrate security into CI/CD pipelines.", image: course5 },
    { id: "02", title: "A security professional aiming to automate and enforce security best practices.", image: course1 },
    { id: "03", title: "Someone new to DevSecOps eager to learn secure development and cloud security.", image: course4 },
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
    { title: "Security Frameworks & Industry Standards", description: "NIST, ISO 27001, SOC2, FedRAMP compliance frameworks.", icon: faClipboardCheck },
    { title: "Kubernetes Security", description: "RBAC, Network Policies, Secrets Management for Kubernetes clusters.", icon: faServer },
    { title: "Container Image Security", description: "Scanning, Signing, SBOM to secure containerized applications.", icon: faShieldAlt },
    { title: "DevSecOps on Cloud", description: "CI/CD Pipelines and Infrastructure Automation across cloud providers.", icon: faCloud },
    { title: "GIT - Version Control", description: "GitHub, GitLab, Bitbucket for managing source code securely.", icon: faCodeBranch },
    { title: "CI/CD", description: "GitHub Actions, Jenkins, Azure DevSecOps for secure software delivery.", icon: faCogs },
    { title: "Terraform & Terragrunt", description: "Infrastructure as Code (IaC) for cloud infrastructure management.", icon: faTools },
    { title: "IaC Scanning Tools", description: "KICS, Regula, and other security tools for scanning infrastructure as code.", icon: faBug }
];




const DevSecOps = () => {

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
                        Kickstart Your <span className="text-[#ffffff]">DevSecOps Journey</span> Today
                    </h3>
                    <p className="mt-6 max-w-6xl text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed">
                        Master the art of integrating security into DevSecOps workflows. Learn automation, secure coding, CI/CD security,
                        infrastructure as code (IaC), cloud security, and more. Gain hands-on experience with real-world projects
                        and best practices.
                    </p>
                    <button onClick={handleOpenModal} className="mt-8 bg-[#1e4272] text-white px-10 py-5 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
    transition-all duration-300 transform hover:bg-[#18365a] hover:scale-105 shadow-lg animate-bounce">
                        Get Started with DevSecOps
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
                        Start Your DevSecOps Career with the Most Supportive Community
                    </h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: "100% Hands-On DevSecOps Training",
                                description: "Gain real-world experience with security automation, CI/CD security, and cloud security.",
                            },
                            {
                                title: "Secure CI/CD Pipelines",
                                description:
                                    "Learn to integrate security into DevSecOps workflows using tools like GitHub Actions, Jenkins, and GitLab CI/CD.",
                            },
                            {
                                title: "Self-Paced DevSecOps Learning
",
                                description: "Master DevSecOps at your own pace with 35+ hours of on-demand videos and practical labs.",
                            },
                            {
                                title: "12 Months of Free Lab Access",
                                description: "Enjoy free access to hands-on security labs for DevSecOps tools like SAST, DAST, and IaC scanning.",
                            },
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
                        What You'll Achieve in This DevSecOps Course
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Gain essential DevSecOps skills to secure software development pipelines and cloud environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                    {/* Left Side - Image */}
                    <div className="rounded-lg overflow-hidden shadow-lg h-full flex">
                        <img
                            src={sign}
                            alt="DevSecOps Course Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="bg-white p-8 shadow-lg rounded-xl h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                By the end of this DevSecOps course, you’ll be able to:
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Understand the fundamentals of DevSecOps and secure SDLC principles.",
                                    "Implement security automation in CI/CD pipelines using tools like GitHub Actions, Jenkins, and GitLab CI/CD.",
                                    "Master Infrastructure as Code (IaC) security with Terraform and AWS CloudFormation.",
                                    "Identify vulnerabilities with Static (SAST) and Dynamic (DAST) security testing.",
                                    "Secure cloud environments and containers using Kubernetes security best practices.",
                                    "Apply DevSecOps strategies to real-world projects and build a strong security-focused DevSecOps portfolio."
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

export default DevSecOps;
