import { useState } from "react";
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
import AwsCertification from "./certificate/Aws";
import { AiOutlineCloud, AiOutlineUser, AiOutlineTeam, AiOutlineTrophy } from "react-icons/ai";



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

            {/* AWS CERTIFICATION */}
            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-16 bg-gray-100">
                <AwsCertification />
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

            <section className="bg-[#1e4272] text-white mt-10 py-16 px-6 sm:py-10 sm:px-4 lg:px-20">
                <h2 className="text-4xl sm:text-5xl font-bold text-center">How we get you to competence</h2>

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
                        <h3 className="text-2xl font-bold">100% Practical Courses</h3>
                        <p className="mt-3 text-lg">
                            With 100% practical, you'll start building on the Cloud from day one.
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
                        <h3 className="text-2xl font-bold">Live Instructor Guidance</h3>
                        <p className="mt-3 text-lg">
                            Our facilitators will work with you as you build and our workbooks take you step by step in each process.
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
                        <h3 className="text-2xl font-bold">Group-focused</h3>
                        <p className="mt-3 text-lg">
                            Group learning helps better assimilation, fostering collaboration with colleagues through breakout rooms and class labs.
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

                        <h3 className="text-2xl font-bold">Post Training Support</h3>
                        <p className="mt-3 text-lg">
                            After your program, we'll provide you with mock interviews, CV & LinkedIn reviews, and job postings.
                        </p>
                    </motion.div>

                </div>
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
