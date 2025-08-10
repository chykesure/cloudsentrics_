import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUsers, FaChartLine } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "Our business transformed with Cloud Sentrics Integration, making cloud migration seamless and efficient.",
        name: "Dare",
        title: "CEO, InnovateX"
    }
];

const CustomerPage = () => {
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-gradient-to-b from-[#f0f4f8] to-white py-20 px-4 sm:px-8 lg:px-24">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#1e4272] mb-16 tracking-tight">
                Customer Success Stories
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-stretch">
                {/* Testimonial Card */}
                <div className="bg-white text-gray-800 rounded-3xl px-8 py-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-100 p-5 rounded-full">
                            <FaUsers className="text-blue-600 text-3xl" />
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4 }}
                            className="text-center space-y-4"
                        >
                            <h4 className="text-2xl font-semibold text-blue-900">
                                {testimonials[currentTestimonial].name}
                            </h4>
                            <p className="text-sm text-gray-500">{testimonials[currentTestimonial].title}</p>
                            <blockquote className="italic text-lg text-gray-600 leading-relaxed">
                                “{testimonials[currentTestimonial].quote}”
                            </blockquote>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-10 pt-4 border-t border-gray-200 text-sm">
                        <button
                            onClick={prevTestimonial}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                        >
                            <FaChevronLeft /> Prev
                        </button>
                        <span className="text-gray-500">
                            {currentTestimonial + 1} / {testimonials.length}
                        </span>
                        <button
                            onClick={nextTestimonial}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                        >
                            Next <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-white shadow-2xl rounded-3xl p-10 flex flex-col items-center justify-center text-center hover:shadow-3xl transition-shadow duration-300">
                    <FaChartLine className="text-6xl text-blue-700 mb-6 animate-pulse" />
                    <h3 className="text-2xl font-bold text-gray-900">
                        Join 10,000+ Satisfied Clients
                    </h3>
                    <p className="text-gray-600 mt-4 text-base leading-relaxed">
                        Boost your IT capabilities with cutting-edge cloud solutions tailored to your business goals.
                    </p>
                    <button
                        onClick={() => navigate('/technology#consultation')}
                        className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 duration-300"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerPage;
