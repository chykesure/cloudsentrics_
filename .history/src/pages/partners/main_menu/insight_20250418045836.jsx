import React from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import SearchArticles from "./search";

const logo = "/assets/logo.jpg";
const aibg = "/assets/ai.jpg";

const InsightMenu = () => {

    // State for mobile menu
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    // Navigation menu items
    const menuItems = [
        { label: "AI", path: "/ai" },
        { label: "CLOUD & SECURITY", path: "/cloud-security" },
        { label: "IOT", path: "/iot" },
        { label: "MODERN WORKPLACE", path: "/modern-workplace" },
        { label: "TECHNOLOGY", path: "/technology" }
    ];
    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Header Section */}
            <header className="relative bg-white shadow-lg w-full z-30">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">
                        <Link to="/PartnerPage">
                            <img
                                src={logo}
                                alt="Cloudsentrics Logo"
                                className="h-20 md:h-28 lg:h-34 w-auto ml-9 transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                className="text-gray-700 hover:text-blue-600 font-medium transition"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="p-2 rounded">
                            {mobileNavOpen ? (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#1e4272" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#1e4272" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>



                </div>

                {/* Mobile Navigation Menu */}
                {mobileNavOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white text-black absolute top-full left-0 right-0 z-20 shadow-md px-6 py-4 space-y-4"
                    >
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setMobileNavOpen(false)}
                                className="block text-lg font-semibold hover:text-blue-600 transition"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </motion.nav>
                )}
            </header>

            {/* Hero Section */}
            <Header />

            <section className="bg-white px-6 md:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    className="lg:col-span-2 space-y-6"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-blue-600 font-medium text-sm uppercase tracking-wider">
                        Insights
                    </h3>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug border-l-4 border-blue-600 pl-4">
                        Cloud Transformation with Cloud Sentrics: <br />
                        Unlocking Efficiency and Innovation for Your Business
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg">
                        In today’s fast-paced digital landscape, businesses must embrace cloud technologies
                        to stay competitive. Cloud Sentrics offers tailored cloud solutions to empower agility,
                        speed, and growth. Whether migrating to the cloud or optimizing existing infrastructure,
                        we ensure seamless transitions and robust security, driving operational efficiency and innovation.
                    </p>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    className="w-full h-full max-h-[500px] overflow-hidden rounded-xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={aibg}
                        alt="Cloud Transformation"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </section>



            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <SearchArticles />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>

        </div>
    );
};

export default InsightMenu;
