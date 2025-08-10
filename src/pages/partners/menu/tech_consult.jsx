import React from "react";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TechConsult = () => {
    return (
        <section className="px-6 md:px-12 lg:px-20 py-16 bg-gray-50 flex flex-col lg:flex-row gap-10 mt-[-60px]">
            {/* === Main Content === */}
            <div className="lg:w-2/3 bg-white p-10 rounded-2xl shadow-xl">
                <h2
                    className="text-3xl font-bold text-gray-900 leading-tight mb-6"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                    Empowering Your Business with Cutting-Edge Technology Solutions
                </h2>
                <p className="text-gray-800 font-medium text-lg leading-relaxed">
                    At the heart of every successful digital transformation is the ability to leverage the right technology.
                    We help you innovate with the latest infrastructure, streamline your operations, and align your technology
                    with business goals. Whether you're modernizing your IT systems, deploying new platforms, or optimizing processes,
                    our technology solutions deliver scalable and sustainable results.
                </p>
                <p className="mt-5 text-gray-600 text-base leading-relaxed">
                    Our experts assess your current environment, recommend state-of-the-art technologies, and guide you through
                    the implementation process. Whether you are enhancing your data center capabilities, adopting cloud solutions,
                    or optimizing user experiences, we ensure that your infrastructure is primed for future growth and performance.
                </p>
                <p className="mt-5 text-gray-600 text-base leading-relaxed">
                    We integrate advanced technologies like AI, cloud computing, and machine learning to drive innovation.
                    Through continuous optimization, we help you make smarter decisions, improve operational efficiency, and
                    stay ahead of market trends.
                </p>
                <p className="mt-5 text-gray-600 text-base leading-relaxed">
                    Security is built into every solution — from safeguarding your network to protecting sensitive data.
                    We employ advanced security measures and risk management strategies to ensure that your infrastructure
                    is resilient and secure against evolving threats.
                </p>
            </div>

            {/* === Sidebar === */}
            <aside className="lg:w-1/3 space-y-8">
                {/* Consultation Button */}
                <Link to="/contact-us#contactform">
                    <div className="bg-gradient-to-r from-[#1f426c] to-blue-600 text-white px-6 py-4 rounded-xl shadow-md flex items-center justify-between cursor-pointer hover:opacity-90 transition">
                        <span className="font-semibold text-lg">Book a Tech Consultation</span>
                        <FaArrowDown className="ml-3" />
                    </div>
                </Link>

                {/* Services Overview */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        Strategic Technology Services
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Our suite of services is designed to drive enterprise growth, operational excellence, and innovation.
                        We guide organizations through the complexities of digital transformation by providing:
                    </p>
                    <ul className="mt-6 space-y-4">
                        {[
                            {
                                title: "Digital Transformation Strategy",
                                desc: "Tailored roadmaps to accelerate modernization and innovation.",
                            },
                            {
                                title: "Cloud & Data Center Infrastructure",
                                desc: "Scalable, secure, and efficient cloud/on-prem solutions.",
                            },
                            {
                                title: "AI & Machine Learning Integration",
                                desc: "Intelligent systems to enhance automation and analytics.",
                            },
                            {
                                title: "Cybersecurity & Risk Management",
                                desc: "Frameworks to secure data, systems, and operations.",
                            },
                            {
                                title: "IT Modernization & Optimization",
                                desc: "Streamlined tech ecosystems that boost performance and cut costs.",
                            },
                        ].map(({ title, desc }, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-1 text-blue-600">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="text-gray-700">
                                    <span className="font-semibold">{title}:</span> {desc}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </section>
    );
};

export default TechConsult;
