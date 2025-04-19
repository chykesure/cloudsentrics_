import React from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";

const logo = "/assets/logo.jpg";
const heroImage = "/assets/ai.jpg";

const AboutCloud = () => {
    return (
        <div className="bg-white min-h-screen text-[#0d1b2a]">
            {/* Header */}
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

            {/* Top Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
                {/* Left Text */}
                <div className="space-y-6">
                    <div>
                        <p className="text-sm text-gray-600 font-semibold">About Bell Integration</p>
                        <h2 className="text-3xl font-bold border-l-4 border-blue-700 pl-4 mt-2">
                            Driving Digital<br />
                            Transformation
                        </h2>
                    </div>

                    <div className="bg-white p-6 shadow rounded space-y-4">
                        <p className="text-lg font-semibold text-gray-800">
                            For over 25 years, Bell’s market-leading technology consultation and managed services have enabled organisations to transform their IT capabilities and elevate their business productivity and cost efficiency.
                        </p>
                        <p className="font-semibold text-gray-800">
                            Head-quartered in the UK and employing over 1000 people across the globe.
                        </p>
                        <p className="text-sm text-gray-700">
                            We are trusted by many global Fin-techs, Telco’s, and government and public sector organisations, our customers depend on us to ensure their IT services and infrastructure are always available, scalable, sustainable, and resilient.
                        </p>
                    </div>
                </div>

                {/* Right Image + More Info */}
                <div className="space-y-6">
                    <div className="w-full h-64 overflow-hidden rounded shadow">
                        <img
                            src={heroImage}
                            alt="Skyscraper"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="bg-white p-6 shadow rounded space-y-4">
                        <h3 className="text-lg font-semibold text-[#0d1b2a] mb-4">More about Bell</h3>
                        <ul className="space-y-2 list-none text-sm text-blue-700">
                            <li><Link to="#" className="hover:underline">Executive Team</Link></li>
                            <li><Link to="#" className="hover:underline">Board</Link></li>
                            <li><Link to="#" className="hover:underline">Our Vision and Values</Link></li>
                            <li><Link to="#" className="hover:underline">History of Bell Integration</Link></li>
                            <li><Link to="#" className="hover:underline">Partners</Link></li>
                            <li><Link to="#" className="hover:underline">Sustainability Statement</Link></li>
                            <li><Link to="#" className="hover:underline">Corporate Responsibility</Link></li>
                            <li><Link to="#" className="hover:underline">Certifications & Accreditations</Link></li>
                            <li><Link to="#" className="hover:underline">Corporate Documents</Link></li>
                        </ul>
                    </div>

                    <div>
                        <a
                            href="#"
                            className="inline-block text-sm text-blue-800 underline hover:text-blue-900"
                        >
                            Download Our Brochure
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>


        </div>
    );
};

export default AboutCloud;
