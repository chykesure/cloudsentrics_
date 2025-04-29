import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import Header from "../Header";
import { motion } from "framer-motion";
import MoreAbout from "./moreabout";
import { AiOutlineCloud, AiOutlineUser, AiOutlineTeam, AiOutlineTrophy } from "react-icons/ai";

const logo = "/assets/logo.jpg";
const heroImage = "/assets/cds5.jpg";
const consultingImage = "/assets/people2.jpg";

const AboutCloud = () => {

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
        <div className="bg-white min-h-screen text-[#0d1b2a]">
            {/* Header */}
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

            {/* Top Section */}
            <section className="container mx-auto flex flex-col md:flex-row gap-6 px-4 py-10">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <div>
                        <p className="text-sm text-gray-600 font-semibold">About CLoud Sentrics Integration</p>
                        <h2 className="text-3xl font-bold border-l-4 border-blue-700 pl-4 mt-2">
                            Driving Digital<br />
                            Transformation
                        </h2>
                    </div>

                    <div className="bg-white p-6 shadow rounded-xl space-y-4">
                        <p className="text-lg font-semibold text-gray-800">
                            For over a 12 months, Cloud Sentrics has been at the forefront of cloud training and consulting empowering individuals and organizations to harness the full potential of cloud computing and DevSecOps with confidence and security.
                        </p>
                        <p className="font-semibold text-gray-800">
                            Headquartered in the United States, with a growing presence in the UK, Canada, and Nigeria, Cloud Sentrics has successfully trained and supported hundreds of professionals and partnered with businesses on their cloud transformation journeys.
                        </p>
                        <p className="text-sm text-gray-700">
                            We are trusted by startups, enterprise clients, and public sector organizations alike to deliver secure, scalable, and efficient cloud solutions. Our clients rely on us not only for world-class training but also for expert guidance in migrating to the cloud securely and maintaining resilient cloud environments.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <div className="w-full h-full max-h-[500px] overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={heroImage}
                            alt="Skyscraper"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <MoreAbout />
            </section>

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Our Mission */}
                    <div className="bg-white shadow-xl rounded-lg p-10 md:p-16 lg:p-20 flex flex-col items-stretch transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <h4 className="text-2xl font-bold text-gray-900">Mission Statement – Cloud Sentrics</h4>
                        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
                            At Cloud Sentrics, our mission is to empower individuals and businesses with the skills,
                            knowledge, and solutions needed to excel in the ever-evolving world of Cloud Security,
                            DevSecOps, and Cloud Engineering. Through cutting-edge training, hands-on experience,
                            and industry-driven expertise, we bridge the gap between learning and real-world application.
                        </p>
                        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                            We are committed to fostering a global community of cloud professionals, equipping them
                            with job-ready skills, industry certifications, and innovative cloud solutions to drive
                            transformation and success in the digital era.
                        </p>
                        <img
                            src={consultingImage}
                            className="w-full max-w-full h-96 md:h-[350px] lg:h-[500px] xl:h-[500px] object-cover rounded-lg shadow-md mt-6 hover:scale-105 transition-transform duration-300"
                            alt="Our Mission"
                        />
                    </div>


                    {/* Our Services */}
                    <div className="bg-white shadow-xl rounded-lg p-10 md:p-16 lg:p-20 flex flex-col items-stretch transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <h4 className="text-2xl font-bold text-gray-900 text-left md:text-center">Our Services</h4>
                        <p className="text-gray-700 mt-6 text-lg text-left md:text-center">
                        At Cloud Sentrics, we’re more than just a training platform, we’re your launchpad into a high-paying tech career. Our programs are designed to equip you with the skills that top employers are hiring for today.

                        </p>
                        <div className="grid gap-6 mt-8 text-gray-800 text-lg">
                            {[
                                { title: "Cloud Migration Skills", description: "Learn how to move applications and workloads securely to AWS and Azure." },
                                { title: "Cloud Security Expertise", description: "Master real-world cloud protection strategies to keep infrastructure safe from threats." },
                                { title: "DevSecOps Knowledge", description: "Understand how to automate security inside CI/CD pipelines and streamline secure software delivery.
" },
                                { title: "Infrastructure as Code (IaC)", description: "Build scalable cloud solutions." },
                                { title: "Career Opportunities", description: "Hire skilled cloud professionals." },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                >
                                    <span className="text-blue-600 text-2xl">✅</span>
                                    <p>
                                        <strong>{service.title}</strong> – {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Get You to Competence Section */}
            <section className="bg-[#1e4272] text-white mt-10 py-16 px-6 sm:py-10 sm:px-4 lg:px-20">
                <h2 className="text-4xl sm:text-5xl font-bold text-center">How We Get Your Business to Cloud Competence </h2>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-[#1e4272] bg-opacity-50 p-8 rounded-lg text-center sm:text-left hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
                    >
                        <div className="bg-yellow-500 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto sm:mx-0 mb-4">
                            <AiOutlineCloud className="text-3xl text-black" />
                        </div>
                        <h3 className="text-2xl font-bold">Tailored Cloud Solutions</h3>
                        <p className="mt-3 text-lg">
                            We assess your unique business needs and deliver customized cloud architectures that align with your goals, no generic packages, just strategic fit.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-[#1e4272] bg-opacity-50 p-8 rounded-lg text-center sm:text-left hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
                    >
                        <div className="bg-yellow-500 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto sm:mx-0 mb-4">
                            <AiOutlineUser className="text-3xl text-black" />
                        </div>
                        <h3 className="text-2xl font-bold">Expert-Led Implementation</h3>
                        <p className="mt-3 text-lg">
                            Our certified cloud engineers and DevSecOps professionals handle everything from migration to deployment, ensuring secure, scalable environments built for performance.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-[#1e4272] bg-opacity-50 p-8 rounded-lg text-center sm:text-left hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
                    >
                        <div className="bg-yellow-500 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto sm:mx-0 mb-4">
                            <AiOutlineTeam className="text-3xl text-black" />
                        </div>
                        <h3 className="text-2xl font-bold">Collaborative Training for Teams</h3>
                        <p className="mt-3 text-lg">
                            We don’t just deploy, we empower. We offer practical, team-focused training to upskill your staff, ensuring seamless adoption and long-term productivity.
                        </p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-[#1e4272] bg-opacity-50 p-8 rounded-lg text-center sm:text-left hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
                    >
                        <div className="bg-yellow-500 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto sm:mx-0 mb-4">
                            <AiOutlineTrophy className="text-3xl text-black" />
                        </div>

                        <h3 className="text-2xl font-bold">Ongoing Support & Optimization</h3>
                        <p className="mt-3 text-lg">
                            Cloud Sentrics stays with you post-deployment, offering continuous monitoring, performance tuning, and security updates to keep your systems running at peak efficiency.
                        </p>
                    </motion.div>

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
