import React from "react";
import Headers from "../Header";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import FooterPage from "../../Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const eventBanner = "/assets/event2.jpg";
const speaker1 = "/assets/event3.jpg";
const speaker2 = "/assets/event4.jpg";
const speaker3 = "/assets/event5.jpg";

const eventSchedule = [
    { time: "10:00 AM", title: "Opening Keynote", speaker: "Dr. John Doe", image: speaker1 },
    { time: "11:30 AM", title: "Cloud Security Best Practices", speaker: "Jane Smith", image: speaker2 },
    { time: "1:00 PM", title: "Break & Networking", speaker: "Lunch Session" },
    { time: "2:00 PM", title: "AWS Advanced Security", speaker: "Michael Brown", image: speaker3 },
    { time: "3:30 PM", title: "Q&A and Closing Remarks", speaker: "Panel Discussion" },
];



const floatingButtonAnimation = {
    y: [0, -5, 0], // Moves up and down
    transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
};

const EventsPage = () => {
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

                    <motion.button
                        className="mt-6 bg-[#1e4272] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg"
                        animate={floatingButtonAnimation}
                        whileHover={{ scale: 1.1 }}
                    >
                        Register Now
                    </motion.button>
                </div>
            </motion.div>

            {/* Event Details */}

            <div className="w-full px-6 md:px-20 lg:px-32 py-16 bg-gray-100">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Why Attend?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["🔍 Expert Insights", "🌐 Networking", "🚀 Hands-on Sessions"].map((title, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, scale: 0.9 }} // Fade in with slight zoom
                            whileInView={{ opacity: 1, scale: 1 }} // Smooth scaling effect
                            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }} // Subtle hover effect
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
            </div>;



            {/*  Event Schedule  */}
            {/* <div className="w-full px-6 md:px-20 lg:px-32 py-16">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Event Schedule</h2>
                <div className="space-y-6">
                    {eventSchedule.map((session, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }} // Hover glow effect
                        >
                            {session.image && (
                                <motion.img
                                    src={session.image}
                                    alt={session.title}
                                    className="w-16 h-16 rounded-full"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }} // Smooth image pop-in
                                />
                            )}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">{session.time} - {session.title}</h4>
                                <p className="text-gray-600">{session.speaker}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div> */}

            { /* Call to Action  */}
            <div className="text-center py-16">
                <h2 className="text-3xl font-bold text-gray-900">Don't Miss Out!</h2>
                <p className="mt-4 text-lg text-gray-700">Reserve your spot today and take your cloud security skills to the next level.</p>

                <motion.button
                    className="mt-6 bg-[#1e4272] text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg"
                    animate={floatingButtonAnimation} // Floating effect
                    whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }} // Hover effect
                    whileTap={{ scale: 0.9 }} // Click effect
                >
                    Register Now
                </motion.button>
            </div>

            {/* Footer */}
            <footer className="w-full bg-[#1e4272] text-white py-10 px-6 text-center">
                <p className="text-lg">© 2025 Cloud & Co. All Rights Reserved.</p>

                

                <FooterPage />
            </footer>
        </div>
    );
};

export default EventsPage;
