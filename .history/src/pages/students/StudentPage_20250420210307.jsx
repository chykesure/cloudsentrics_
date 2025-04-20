import React from "react";
import { FaGlobe, FaChartLine, FaRocket, FaWhatsapp } from "react-icons/fa";
import Headers from "../students/Header";
import TestimonialSlider from "../students/Testimony";
import { motion } from "framer-motion";
import ShortMessage from "./ShortMessage";
import OfferMessage from "./OfferMessage";
import TestimonialPage from "./Reviews";
import Join from "./Join";
import FooterPage from "../Footer";
import EnrollModal from "../EnrollModal";


const consultingImage = "/assets/sentrics3.jpg";
const primaryColor = "#1e4272";

const StudentPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
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
            <section className="mt-12 lg:mt-20 flex flex-col-reverse lg:flex-row items-center 
                    justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-12 lg:py-20">

                <div className="lg:w-1/2 text-center lg:text-left">
                    <span className="bg-yellow-400 text-black text-sm sm:text-lg md:text-xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-block animate-pulse">
                        Beginner to Expert in Cloud & DevSecOps 🚀
                    </span>

                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mt-4 sm:mt-6 leading-tight text-gray-900">
                        Build a Future-Proof Career with{" "}
                        <span style={{ color: primaryColor }}>Cloud Sentrics</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-5">
                        Learn industry-relevant Cloud & DevSecOps skills from scratch and secure high-paying opportunities in tech.
                        Whether you're a beginner or an IT professional looking to upskill, our program is tailored to guide you step by step.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-5 sm:mt-6 md:mt-8 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-white text-base sm:text-lg md:text-xl font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        style={{ backgroundColor: primaryColor }}
                    >
                        Get Started Today
                    </a>
                    {/* Enroll Button */}
                    <button
                        onClick={handleOpenModal}
                        className="inline-block mt-5 sm:mt-6 md:mt-8 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-white text-base sm:text-lg md:text-xl font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        style={{ backgroundColor: primaryColor }}
                    >
                        Get Started Today
                    </button>

                    {/* Enroll Modal */}
                    <EnrollModal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center mt-6 lg:mt-0 relative">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
                        <motion.img
                            src={consultingImage}
                            alt="Cloud DevSecOps Student"
                            className="w-full h-auto lg:w-[650px] xl:w-[750px] rounded-3xl shadow-2xl"
                            animate={{
                                y: [0, -10, 0], // Moves up and down
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                        />
                    </div>
                </div>

            </section>

            {/* Why Choose Cloud Sentrics Section */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 bg-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center">
                    Why Choose <span style={{ color: primaryColor }}>Cloud Sentrics?</span>
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed">
                    Our program is designed to provide hands-on, practical training that helps you transition into Cloud and DevSecOps roles
                    with confidence. Here’s what sets us apart:
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaGlobe className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            No Prior Tech Experience Required
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Whether you're new to tech or switching careers, Cloud Sentrics provides structured learning from fundamentals
                            to advanced Cloud & DevSecOps practices.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaChartLine className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            High Demand & Global Job Market
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Cloud computing and DevSecOps are among the top 5 most sought-after tech skills globally.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaRocket className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            Access to Real-world Projects
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Our curriculum includes hands-on projects and industry case studies, ensuring you apply your skills to real-world problems.
                        </p>
                    </motion.div>
                </div>

                {/* Learn More Button */}
                <div className="text-center mt-10">
                    <a
                        href="#"
                        className="px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg md:text-xl font-medium rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                        style={{ backgroundColor: primaryColor }}
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <TestimonialSlider />
            </section>

            {/* Message Section */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <ShortMessage />
            </section>

            {/* Offer Message Section */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <OfferMessage />
            </section>

            {/* Testimonial Page Section */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <TestimonialPage />
            </section>

            {/* Join Message Section */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <Join />
            </section>

            {/* Footer Section */}
            <footer className="w-full bg-[#1e4272] text-white py-10 px-6 text-center">

                <FooterPage />

            </footer>



        </div>
    );
};

export default StudentPage;
