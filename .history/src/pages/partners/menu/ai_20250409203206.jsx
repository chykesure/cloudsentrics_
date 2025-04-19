import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FormsPage from "./forms";
import RelatedServices from "./services";
import Footer from "../home/Footer";
import { FaCheckCircle, FaBolt, FaRegDotCircle } from 'react-icons/fa';
import { BsFillCloudCheckFill } from 'react-icons/bs';


const logo = "/assets/logo.jpg";
const aibg = "/assets/ai.jpg";

const Ai = () => {
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

            {/* AI Section */}
            <section className="bg-[#f9f9f9] px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Text Content */}
                <div className="lg:col-span-2 animate__animated animate__fadeIn flex-shrink-0 space-y-6">
                    {/* Heading Section */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-medium text-gray-500 uppercase tracking-wide">Artificial Intelligence</h3>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 text-gray-800">
                            Harnessing the Power <br />  of Cloud-Integrated AI
                        </h1>
                    </div>

                    {/* Paragraph Content */}
                    <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                        At Cloud Sentrics, we empower forward-thinking organizations to put Artificial Intelligence to work seamlessly integrated with cloud technologies for smarter, faster outcomes.

                        From automating critical business decisions to enabling intelligent collaboration across teams, we help you transform how work gets done. Whether it's enhancing operational efficiency, reimagining customer and employee experiences, or uncovering powerful insights from your data our AI-driven solutions are designed to accelerate innovation and unlock new business models.

                        With a deep focus on real-world impact, our comprehensive suite of cloud-native AI services ensures you gain measurable value faster, smarter, and more securely.

                        Let’s build the future of intelligent business together.
                    </p>

                    {/* Call to Action Button */}
                    <div className="flex justify-center lg:justify-start mt-8">
                        <a
                            href="#"
                            className="bg-[#1e4272] text-white text-center py-4 px-8 rounded-lg font-semibold text-lg shadow-md hover:bg-purple-800 hover:scale-105 transition duration-300 ease-in-out transform hover:translate-y-1 w-full md:w-auto"
                        >
                            Contact us to book a consultation
                        </a>
                    </div>
                </div>


                {/* Right AI Image */}
                <div className="lg:col-span-1 flex justify-center items-center flex-shrink-0">
                    <motion.img
                        src={aibg}
                        alt="AI Representation"
                        className="w-full max-w-lg rounded-lg shadow-2xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>


                {/* Aligned Services */}
                <div className="lg:col-span-3 flex flex-col gap-6 w-full">
                    {/* Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full">
                        {/* Aligned Services */}
                        <div className="bg-white p-6 rounded-lg shadow-lg border-gray-200 hover:scale-105 hover:shadow-xl flex-shrink-0 w-full">
                            <h4 className="text-2xl font-semibold text-gray-800">Cloud-Native AI Services Aligned for Impact</h4>
                            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                                At Cloud Sentrics, our AI-aligned services are designed to bridge the gap between innovation and readiness empowering organizations to adopt, scale, and operationalize Artificial Intelligence with confidence.
                            </p>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                {[
                                    "Event: Accelerating AI Adoption – Closing the Readiness Gap Join our expert-led sessions focused on guiding businesses through practical steps for AI adoption addressing skill gaps, infrastructure challenges, and change management strategies.",
                                    "Conversational AI Enhance customer engagement with intelligent, human-like virtual assistants that scale across platforms integrated with your cloud environment for 24/7 efficiency.",
                                    "AI Operations (AI Ops) Revolutionize IT operations with predictive analytics, anomaly detection, and intelligent automation ensuring faster resolutions and greater system resilience.",
                                    "Business Process Automation Optimize your workflows using AI to automate repetitive tasks, reduce errors, and improve overall productivity across departments.",
                                    "AI Training Equip your teams with the skills they need through hands-on AI training programs designed for professionals, developers, and business leaders ready to lead with AI."
                                ].map((service, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <FaRegDotCircle className="text-purple-600 text-xl mt-1" />
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Why Choose Us? */}
                        <div className="bg-white p-6 rounded-lg shadow-lg border-gray-200 hover:scale-105 hover:shadow-xl flex-shrink-0 w-full">
                            <h4 className="text-2xl font-semibold text-gray-800">Why Choose Cloud Sentrics?</h4>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                {[
                                    "Cloud-Integrated AI Solutions Built for YouWe design intelligent, cloud-powered systems that meet your organization’s unique needs—securely and at scale.",
                                    "Effortless Integration with Your Existing Stack Our solutions blend seamlessly with your infrastructure, minimizing disruption while maximizing performance.",
                                    "Proven Impact Across Industries From startups to enterprises, we’ve helped organizations unlock measurable growth with AI-powered transformations.",
                                    "End-to-End Strategic Support From ideation to deployment, our expert team is with you at every phase of your digital transformation journey."
                                ].map((reason, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <BsFillCloudCheckFill className="text-green-600 text-4xl mt-1" />
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Key Benefits of AI */}
                        <div className="bg-white p-6 rounded-lg shadow-lg border-gray-200 hover:scale-105 hover:shadow-xl flex-shrink-0 w-full">
                            <h4 className="text-2xl font-semibold text-gray-800">Key Benefits of Cloud-Integrated AI </h4>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                {[
                                    "Boosted Efficiency & Smart Automation Leverage AI in the cloud to streamline operations and eliminate repetitive tasks.",
                                    "Data-Driven Decision-Making Unlock real-time insights with powerful analytics to drive confident, strategic decisions.",
                                    "Cost-Effective Scalability Optimize resources while reducing costs—grow smarter without the overhead.",
                                    "Future-Ready Innovation Deploy flexible, cloud-powered AI solutions that scale as your business evolves."
                                ].map((benefit, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <FaBolt className="text-blue-600 text-4xl mt-1" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <FormsPage />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <RelatedServices />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>

        </div>
    );
};

export default Ai;
