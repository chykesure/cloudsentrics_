import React from "react";
import Headers from "../Header"; // Ensure Header is included
import { motion } from "framer-motion";
import FooterPage from "../../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faShieldAlt, faLock, faFileAlt, faNetworkWired, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import CoursePayment from "../../CoursePaymentModal";


const course1 = "/assets/sentrics1.jpg";
const course4 = "/assets/sentrics4.jpg";
const course5 = "/assets/sentrics5.jpg";
const AWSCOURSE = "/assets/azure2.jpg";

const sign = "/assets/signature.jpg";
const mas = "/assets/cds3.jpg";

// Import your images
const courseImages = [
    { id: "01", title: "A cloud engineer looking to deepen your AWS security knowledge.", image: course5 },
    { id: "02", title: "A security professional who want to master AWS best practices.", image: course1 },
    { id: "03", title: "Someone with no IT background but eager to break into cloud security.", image: course4 },
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
    { title: "Introduction to AWS", description: "Learn the basics of AWS cloud computing and its core services.", icon: faCloud },
    { title: "Cloud Identity & Access Management", description: "Manage secure access to AWS resources with IAM roles and policies.", icon: faLock },
    { title: "Cloud-Native Detection Tools", description: "Explore AWS GuardDuty and AWS Security Hub for threat detection and monitoring.", icon: faShieldAlt },
    { title: "Cloud-Native Network & Application Protection", description: "Enhance security with AWS WAF, AWS Shield, and other protective services.", icon: faNetworkWired },
    { title: "Cloud Data Protection", description: "Implement encryption and security best practices using AWS KMS, S3 Encryption, and IAM Policies.", icon: faLock },
    { title: "Cloud Incident Response", description: "Track, analyze, and respond to security incidents using AWS CloudTrail and AWS Config.", icon: faExclamationTriangle },
    { title: "Cloud Compliance & Auditing Tools", description: "Ensure compliance with AWS Audit Manager, AWS Artifact, and other auditing tools.", icon: faFileAlt },
    { title: "CSPM & CNAPP", description: "Strengthen cloud security posture with AWS Security Hub and AWS Config.", icon: faShieldAlt }
];




const AWS = () => {

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
                style={{ backgroundImage: `url(${AWSCOURSE})` }}
            >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-20 lg:px-32 py-16 md:py-24">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6 leading-tight">
                        Kickstart Your AWS Cloud Journey with the <span className="text-[#ffffff]">Beginner Course</span>
                    </h3>
                    <p className="mt-6 max-w-6xl text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed">
                        Our AWS Beginner Course is designed for those new to cloud computing. Gain hands-on experience with
                        AWS services like EC2, S3, IAM, and more. Learn cloud security, automation, and best practices
                        through real-world projects.
                    </p>
                    <button onClick={handleOpenModal} className="mt-8 bg-[#1e4272] text-white px-10 py-5 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
        transition-all duration-300 transform hover:bg-[#18365a] hover:scale-105 shadow-lg animate-bounce">
                        Get Started with AWS
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
                                <div className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-blue-900 before:opacity-32 flex flex-col justify-end p-6">
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
                        Start Your AWS Cloud Career with the Most Supportive Community
                    </h2>

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                title: "100% Hands-On AWS Training",
                                description: "Get real-world experience with AWS services like EC2, S3, Lambda, and more.",
                            },
                            {
                                title: "AWS Hands-on Labs",
                                description:
                                    "Practice AWS concepts, deploy real-world solutions, and build a strong cloud portfolio.",
                            },
                            {
                                title: "Self-Paced AWS Learning",
                                description: "Master AWS DevSecOps at your own pace with 128+ hours of expert-led training over 4 months - Saturdays & Sundays only. Gain hands-on experience through on-demand video lessons and interactive exercises to become job-ready!",
                            },
                            {
                                title: "LinkedIn Profile & Resume",
                                description: "Get LinkedIn profile setup and resume building support to help you stand out and land your dream job!",
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
                        What You'll Achieve in This AWS Course
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Gain essential AWS skills and knowledge to thrive in the cloud computing industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                    {/* Left Side - Image */}
                    <div className="rounded-lg overflow-hidden shadow-lg h-full flex">
                        <img
                            src={sign}
                            alt="AWS Course Preview"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="bg-white p-8 shadow-lg rounded-xl h-full flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                By the end of this AWS course, you’ll be able to:
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "Understand AWS cloud fundamentals and core services (EC2, S3, RDS, IAM, Lambda, etc.).",
                                    "Grasp essential security concepts to keep AWS cloud environments safe.",
                                    "Manage AWS Identity and Access Management (IAM) for users, roles, and permissions.",
                                    "Optimize AWS costs and enhance cloud efficiency using best practices.",
                                    "Prepare and pass an AWS Certification Exam (AWS Cloud Practitioner, Solutions Architect, or Developer).",
                                    "Deploy real-world cloud projects and improve cloud performance with AWS best practices."
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

export default AWS;
