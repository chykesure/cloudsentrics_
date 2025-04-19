import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatsButtons = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
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

            {/* Floating Back to Top Button (Right) */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
                title="Back to Top"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                whileHover={{ scale: 1.2 }}
            >
                <FaArrowUp size={28} />
            </motion.button>
        </>
    );
};

export default FloatsButtons;
