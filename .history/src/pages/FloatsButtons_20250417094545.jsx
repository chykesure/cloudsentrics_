import { useState } from "react";
import { FaWhatsapp, FaArrowUp, FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatsButtons = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            {/* Floating WhatsApp Button (Left) */}
            <motion.a
                href="https://wa.me/message/62QVNSESZ56FC1"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
                title="Chat with us on WhatsApp"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
            >
                <FaWhatsapp size={28} />
            </motion.a>

            {/* Enquiry Button (Above Back to Top) */}
            <motion.button
                onClick={toggleModal}
                className="fixed bottom-[84px] right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
                title="Make an Enquiry"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
            >
                <FaQuestionCircle size={28} />
            </motion.button>

            {/* Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-[#1e4272] text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
                title="Back to Top"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
            >
                <FaArrowUp size={28} />
            </motion.button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
                    <div className="bg-[#1e1e1e] text-white max-w-2xl w-full p-8 rounded-lg shadow-lg relative">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-white text-lg hover:text-red-500"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-bold mb-2 text-red-500">Start Your Cloud Journey with Cloud Sentrics</h2>
                        <p className="mb-4">
                            We’re excited to welcome you to Cloud Sentrics! Ready to take your career to the next level with in-demand skills in Cloud Computing, AWS, and DevSecOps? You’re in the right place.
                        </p>
                        <p className="mb-6">Please complete the form below to begin your enrollment:</p>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">Full Name:</label>
                                <input type="text" className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Email Address:</label>
                                <input type="email" className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Phone Number:</label>
                                <input type="text" className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Location (City & Country):</label>
                                <input type="text" className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Preferred Course Track:</label>
                                <input type="text" placeholder="e.g., AWS DevSecOps, Cloud Security" className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">How Did You Hear About Us?</label>
                                <input type="text" className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Any Previous Tech Background? (Yes/No)</label>
                                <input type="text" className="w-full p-2 rounded bg-[#2a2a2a] border border-gray-600 text-white" />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded shadow-md"
                            >
                                Submit Registration
                            </button>
                        </form>

                        <p className="text-sm mt-6">
                            Once your registration is submitted, our team will review your information and contact you with the next steps, including payment instructions and course access details.
                        </p>
                        <p className="text-sm mt-2">
                            If you have any questions or need support, don’t hesitate to reach out to us at <a href="mailto:info@cloudsentrics.com" className="underline">info@cloudsentrics.com</a> or on WhatsApp at ‪<a href="https://wa.me/13463998985" className="underline">+1 (346) 399-8985‬</a>.
                        </p>
                        <p className="text-sm mt-4 italic text-gray-400">
                            Thank you for choosing Cloud Sentrics — your pathway to a secure and successful future in cloud technology!
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatsButtons;
