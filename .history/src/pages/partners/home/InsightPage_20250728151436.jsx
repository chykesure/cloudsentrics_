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

                
            </section>
        </>
    );
};

export default InsightPage;
