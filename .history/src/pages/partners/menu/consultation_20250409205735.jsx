import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaBolt, FaRegDotCircle } from 'react-icons/fa';
import { BsFillCloudCheckFill } from 'react-icons/bs';

const ConsultPage = () => {
    return (
        <section className="px-6 py-8 bg-gray-100 flex flex-col lg:flex-row gap-8 mt-[-60px]">
            {/* Main Content */}
            <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">Cloud-Integrated Solutions for Modern Business Transformation Empower Innovation, Resilience, and Scalable Growth</h2>
                <p className="mt-4 font-semibold text-gray-700">
                    At Cloud Sentrics, we help organizations adopt a cloud-first mindset—enabling seamless digital transformation no matter where you are on your journey.

                    Whether you're modernizing legacy systems, migrating to the public cloud, or building hybrid/multi-cloud environments, our tailored cloud services deliver agility, cost-efficiency, and long-term value.

                </p>
                <br />
                <h4 className="text-2xl font-semibold text-gray-800">What We Offer</h4>
                <ul className="mt-4 space-y-3 text-gray-700">
                    {[
                        "Strategic Cloud Assessment We'll evaluate your cloud readiness and align the right strategy whether it’s public cloud, hybrid, or on-premise infrastructure.",
                        "Intelligent Architecture & Optimization Our experts optimize your cloud platform using IaaS, PaaS, and SaaS to extend your infrastructure, enhance scalability, and improve operational performance.",
                        "Security Built-In From endpoint to enterprise-wide defense, we embed robust security across your entire cloud ecosystem—protecting users, devices, and data at every touchpoint.",
                        "Let Cloud Sentrics accelerate your digital transformation with cloud-powered solutions that are secure, intelligent, and built for growth."
                    ].map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                            <FaBolt className="text-blue-600 text-4xl mt-1" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-6">
                {/* Consultation Button */}
                <div className="bg-purple-800 text-white p-4 rounded-lg flex justify-between items-center cursor-pointer">
                    <span>Contact us to book a consultation</span>
                    <FaArrowRight />
                </div>

                {/* Aligned Services */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900">Aligned Services</h3>
                    <h5>We deliver strategic services that empower organizations to innovate, scale, and optimize across every layer of their IT infrastructure.</h5>
                    <ul className="mt-4 space-y-3 text-gray-700">
                        {[
                            "Strategic Cloud Assessment We'll evaluate your cloud readiness and align the right strategy whether it’s public cloud, hybrid, or on-premise infrastructure.",
                            "Intelligent Architecture & Optimization Our experts optimize your cloud platform using IaaS, PaaS, and SaaS to extend your infrastructure, enhance scalability, and improve operational performance.",
                            "Security Built-In From endpoint to enterprise-wide defense, we embed robust security across your entire cloud ecosystem—protecting users, devices, and data at every touchpoint.",
                            "Let Cloud Sentrics accelerate your digital transformation with cloud-powered solutions that are secure, intelligent, and built for growth."
                        ].map((benefit, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <FaArrowRight className="text-blue-600 text-4xl mt-1" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Download Brochure */}
                <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center cursor-pointer">
                    <span className="font-bold">Download Our Brochure</span>
                    <FaArrowRight />
                </div>
            </aside>
        </section>
    );
};

export default ConsultPage;
