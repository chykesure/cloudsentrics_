import { useRef, useState } from "react";
import { FaWhatsapp, FaArrowUp, FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatsButtons = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Define isSubmitting state
    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const formRef = useRef();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setIsSuccess(false); // Reset when reopening
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Show "Submitting" text

        const data = {
            full_name: formRef.current.full_name.value,
            email: formRef.current.email.value,
            phone: formRef.current.phone.value,
            location: formRef.current.location.value,
            course: formRef.current.course.value,
            referral: formRef.current.referral.value,
            background: formRef.current.background.value,
        };

        try {
            console.log('Sending data:', data); // Log the data to ensure it's being sent

            const response = await fetch('https://api.cloudsentrics.org/api/enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            console.log(result); // Log the response from the server

            if (response.ok) {
                setSuccessMessage(`
                    <div className="mt-6 space-y-2 text-sm pb-4">
                        <p>
                            Your registration is successfully submitted, our team will review your information and contact you with the next steps, including payment instructions and course access details.
                        </p>
                        <p>
                            Need support? Email us at <a href="mailto:info@cloudsentrics.org" className="underline">info@cloudsentrics.com</a> or WhatsApp <a href="https://wa.me/13463998985" className="underline">+1 (346) 399-8985</a>
                        </p>
                        <p className="italic text-gray-400">Thank you for choosing Cloud Sentrics — your pathway to a secure and successful future in cloud technology!</p>
                    </div>
                `);
                setIsSuccess(true); // Mark the success flag as true
            } else {
                setErrorMessage('Failed to submit enquiry.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred while submitting the form.');
        } finally {
            setIsSubmitting(false); // Hide "Submitting" text
        }
    };

    return (
        <>
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/message/OST2ZCU2IBHWI1"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
                title="Chat with us on WhatsApp"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                whileHover={{ scale: 1.2 }}
            >
                <FaWhatsapp size={28} />
            </motion.a>

            <div className="fixed bottom-[84px] right-9 mb-12 z-50">
                {/* SVG Curved Text */}
                <svg width="120" height="120" className="absolute left-[-28px] top-[-28px] pointer-events-none">
                    <defs>
                        <path
                            id="curve"
                            d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                            fill="none"
                        />
                    </defs>
                    <text fontSize="16" fontWeight="bold" fill="yellow">
                        <textPath href="#curve" startOffset="0%">
                            ENQUIRY • ENQUIRY 
                        </textPath>
                    </text>
                </svg>

                {/* Enquiry Button */}
                <motion.button
                    onClick={toggleModal}
                    className="bg-yellow-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
                    title="Make an Enquiry"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    whileHover={{ scale: 1.2 }}
                >
                    <FaQuestionCircle size={28} />
                </motion.button>
            </div>




            {/* Back to Top */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-[#1e4272] text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
                title="Back to Top"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                whileHover={{ scale: 1.2 }}
            >
                <FaArrowUp size={28} />
            </motion.button>

            {/* Modal Form */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-[100] px-4 sm:px-6 py-6 overflow-y-auto">
                    <div className="bg-[#1e4272] text-white w-full max-w-[95%] sm:max-w-2xl p-4 sm:p-8 rounded-lg shadow-lg relative z-[101] max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 text-white text-lg hover:text-red-500"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-2 text-white-500">
                            Start Your Cloud Journey with Cloud Sentrics
                        </h2>

                        {isSuccess ? (
                            <div
                                className="success-message mt-4 text-green-400"
                                dangerouslySetInnerHTML={{ __html: successMessage }}
                            />
                        ) : (
                            <>
                                <p className="mb-4">We’re excited to welcome you to Cloud Sentrics! Ready to take your career to the next level with in-demand skills in Cloud Computing, AWS, and DevSecOps? You’re in the right place.</p>
                                <p className="mb-6">Please complete the form below to begin your enrollment:</p>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm mb-1">Full Name:</label>
                                        <input name="full_name" required type="text" className="w-full p-2 rounded bg-transparent border border-gray-200 text-white" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm mb-1">Email Address:</label>
                                            <input name="email" required type="email" className="w-full p-2 rounded bg-transparent border border-gray-200 text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-sm mb-1">Phone Number:</label>
                                            <input name="phone" type="text" className="w-full p-2 rounded bg-transparent border border-gray-200 text-white" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm mb-1">Location (City & Country):</label>
                                            <input name="location" required type="text" className="w-full p-2 rounded bg-transparent border border-gray-200 text-white" />
                                        </div>
                                        <div>
                                            <label className="block text-sm mb-1">Preferred Course Track:</label>
                                            <select
                                                name="course"
                                                required
                                                className="w-full p-3 border border-gray-300 rounded-md text-white bg-[#1e4272]"
                                            >
                                                <option value="">Select Course</option>
                                                <option value="AWS">AWS</option>
                                                <option value="DevSecOps">DevSecOps</option>
                                                <option value="Azure">Azure</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm mb-1">How Did You Hear About Us?</label>
                                        <input name="referral" type="text" className="w-full p-2 rounded bg-transparent border border-gray-200 text-white" />
                                    </div>

                                    <div>
                                        <label className="block text-sm mb-1">Any Previous Tech Background? (Yes/No)</label>
                                        <input name="background" type="text" className="w-full p-2 rounded bg-transparent border border-gray-200 text-white" />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="mt-4 bg-gray-500 text-white w-full p-2 rounded-lg"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Your Inquiry"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatsButtons;
