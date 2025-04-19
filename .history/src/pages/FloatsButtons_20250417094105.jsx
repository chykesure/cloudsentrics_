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
                className="fixed bottom-[84px] right-6 bg-yellow-500 text-white p-4 mb- rounded-full shadow-lg flex items-center justify-center z-50"
                title="Make an Enquiry"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
            >
                <FaQuestionCircle size={28} />
            </motion.button>

            {/* Floating Back to Top Button (Right) */}
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">
                        <h2 className="text-xl font-bold mb-4">Student Enquiry</h2>
                        <p className="mb-4">Please enter your enquiry and we’ll get back to you shortly.</p>
                        <textarea
                            rows="4"
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Type your enquiry here..."
                        ></textarea>
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={toggleModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Close
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatsButtons;
