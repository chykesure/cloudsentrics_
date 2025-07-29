import React, { useState } from "react";
import Headers from "../Header";
import { motion } from "framer-motion";
import FooterPage from "../../Footer";
import { FaTimes } from 'react-icons/fa';

const eventBanner = "/assets/event2.jpg";
const speaker1 = "/assets/event3.jpg";
const speaker2 = "/assets/event4.jpg";
const speaker3 = "/assets/event5.jpg";
import Join from "../Join"; // 🔁 import your Join component

const floatingButtonAnimation = {
    y: [0, -5, 0],
    transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
};

const EventsPage = () => {
    const [showModal, setShowModal] = useState(false); // Corrected state variable name

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <Headers />

            {/* Hero Section */}
            <motion.div
                className="relative w-full h-auto min-h-[50vh] bg-cover bg-center before:absolute before:inset-0 before:bg-blue-900 before:opacity-45"
                style={{ backgroundImage: `url(${eventBanner})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-20 lg:px-32 py-20">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        Join the <span className="text-[#ffffff]">Cloud Security Summit 2025</span>
                    </h3>
                    <p className="mt-4 max-w-4xl text-lg sm:text-xl md:text-2xl leading-relaxed">
                        A premier event for cloud professionals, IT experts, and beginners eager to explore AWS security trends, best practices, and innovations.
                    </p>
                    <p className="mt-3 text-xl">📅 <b>March 30, 2025</b> | 📍 Online & In-Person (New York)</p>
                </div>
            </motion.div>

            {/* Why Attend */}
            <div className="w-full px-6 md:px-20 lg:px-32 py-16 bg-gray-100">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Why Attend?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["🔍 Expert Insights", "🌐 Networking", "🚀 Hands-on Sessions"].map((title, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            <h3 className="text-xl font-semibold mb-2">{title}</h3>
                            <p>
                                {index === 0
                                    ? "Gain knowledge from top cloud security professionals."
                                    : index === 1
                                        ? "Connect with industry leaders and professionals."
                                        : "Learn practical skills through live workshops."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="text-center py-16">
                <h2 className="text-3xl font-bold text-gray-900">Don't Miss Out!</h2>
                <p className="mt-4 text-lg text-gray-700">Reserve your spot today and take your cloud security skills to the next level.</p>

                <motion.button
                    className="mt-6 bg-[#1e4272] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg"
                    animate={floatingButtonAnimation}
                    whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleOpenModal} // Fixed function to open modal
                >
                    Register Now
                </motion.button>
            </div>

            {/* Modal */}
            {showModal && ( // Fixed modal state check
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative bg-white rounded-lg max-w-5xl w-full mx-4 p-4 overflow-y-auto max-h-[90vh]">
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal} // Corrected close function
                            className="absolute top-3 right-3 text-black text-4xl font-bold hover:text-red-600 z-10" // Added z-index to ensure it's above modal content
                        >
                            <FaTimes /> {/* Use the React Icon here */}
                        </button>
                        <Join onClose={handleCloseModal} /> {/* Passing correct onClose prop */}
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="w-full bg-[#1e4272] text-white py-10 px-6 text-center">
                <p className="text-lg">© 2025 Cloud & Co. All Rights Reserved.</p>
                <FooterPage />
            </footer>
        </div>
    );
};

export default EventsPage;
