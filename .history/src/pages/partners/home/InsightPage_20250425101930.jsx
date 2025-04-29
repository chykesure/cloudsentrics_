import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaRocket, FaGlobe, FaChartLine, FaCog, FaShieldAlt, FaHandsHelping } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const rev1 = "/assets/cloud_integrations.jpg";  // Replace with actual video path
const primaryColor = "#1e4272";

const InsightPage = () => {
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const navigate = useNavigate();


    return (
        <>
            < section className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 bg-white" >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center">
                    Why Choose <span style={{ color: primaryColor }}>Cloud Sentrics?</span>
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed">Companies choose Cloud Sentrics because we offer customized cloud solutions tailored to your business needs, leverage our expertise in cloud technologies and security to ensure scalable and secure environments, and provide end-to-end support from consultation through to deployment and ongoing optimization for seamless integration.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
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
            </section >

            <section className="bg-gray-100 py-12">
                {/* AI Training Section */}
                <div className="mt-12 bg-gradient-to-r from-slate-800 to-gray-900 text-white p-8 rounded-lg flex flex-col md:flex-row items-center justify-between">

                    {/* Left Column: Information */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-extrabold">Harnessing Cloud-Integrated AI for Business Transformation</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                            Cloud-integrated Artificial Intelligence (AI) is revolutionizing industries by enhancing automation, optimizing decision-making, and driving innovation. At Cloud Sentrics, we empower organizations to unlock the full potential of AI within cloud environments.
                        </p>

                        {/* AI Services List */}
                        <ul className="mt-6 space-y-4 text-lg">
                            <li className="font-semibold text-white">Our AI-Powered Solutions:</li>
                            <li>
                                <span onClick={() => navigate('/ai')} className="cursor-pointer text-blue-300 hover:text-blue-100 transition-all duration-300">
                                    <strong>AI Training</strong> – Equip your teams with cutting-edge cloud-based AI skills.
                                </span>
                            </li>
                            <li>
                                <span onClick={() => navigate('/ai')} className="cursor-pointer text-blue-300 hover:text-blue-100 transition-all duration-300">
                                    <strong>Conversational AI</strong> – Enhance customer experiences with intelligent chatbots and virtual assistants.
                                </span>
                            </li>
                            <li>
                                <span onClick={() => navigate('/ai')} className="cursor-pointer text-blue-300 hover:text-blue-100 transition-all duration-300">
                                    <strong>AI Operations (AI Ops)</strong> – Optimize IT operations through AI-driven automation and cloud analytics.
                                </span>
                            </li>
                        </ul>

                    </div>

                    {/* Right Column: Responsive Image */}
                    <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center relative">
                        <div className="w-full aspect-video rounded-lg shadow-xl overflow-hidden">
                            <img
                                src={rev1}
                                alt="AI Training Preview"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                </div>

                {/* Call to Action Section */}
                <div className="mt-12 text-center">
                    <a
                        onClick={() => navigate('/ai')}
                        className="inline-block cursor-pointer bg-teal-600 text-white text-xl py-4 px-8 rounded-lg shadow-md transition-all hover:bg-teal-700 hover:scale-105 duration-300"
                    >
                        Learn More About AI Solutions
                    </a>
                </div>
            </section>
        </>
    );
};

export default InsightPage;
