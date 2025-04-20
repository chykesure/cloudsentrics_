import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const rev1 = "/assets/cloud_integrations.jpg";  // Replace with actual video path

const InsightPage = () => {
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const navigate = useNavigate();


    return (
        <section className="bg-gray-100 py-12">
            {/* Insights Section - Hero */}
            <div className="relative bg-teal-600 text-white p-12 rounded-lg shadow-lg">
                <h2 className="text-4xl font-extrabold text-center sm:text-left">Insights</h2>
                <p className="text-lg sm:text-xl mt-4 text-center sm:text-left">
                    Get your Guide to a Smooth Cloud Solution Migration.
                </p>

                {/* Button to explore Windows 11 Migration */}
                <div className="flex justify-center sm:justify-start mt-6">
                    <button className="flex items-center bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-200 transition-all duration-300">
                        Cloud Solution Migration <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>

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
                            <a href="#" onClick={() => navigate('/ai')} className="text-blue-300 hover:text-blue-100 transition-all duration-300">
                                <strong>AI Training</strong> – Equip your teams with cutting-edge cloud-based AI skills.
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => navigate('/ai')} className="text-blue-300 hover:text-blue-100 transition-all duration-300">
                                <strong>Conversational AI</strong> – Enhance customer experiences with intelligent chatbots and virtual assistants.
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => navigate('/ai')} className="text-blue-300 hover:text-blue-100 transition-all duration-300">
                                <strong>AI Operations (AI Ops)</strong> – Optimize IT operations through AI-driven automation and cloud analytics.
                            </a>
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
                    href="#"
                    className="inline-block bg-teal-600 text-white text-xl py-4 px-8 rounded-lg shadow-md transition-all hover:bg-teal-700 hover:scale-105 duration-300"
                >
                    Learn More About AI Solutions
                </a>
            </div>
        </section>
    );
};

export default InsightPage;
