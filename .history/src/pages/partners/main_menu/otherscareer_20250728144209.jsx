import React from "react";
import { motion } from "framer-motion";

// Testimonial image
const testimonialImg = "/assets/comu1.jpg";

const CareerPage = () => {
    return (
        <div className="bg-white text-gray-800 px-4 md:px-12 py-12">
            <section className="space-y-10">
                <h2 className="text-3xl font-bold text-green-800 border-b-2 border-green-700 w-fit mb-8">
                    Working at Cloud Sentrics
                </h2>

                <div className="grid md:grid-cols-4 gap-10 items-start">
                    {/* Left Side: Working at Cloud Sentrics (2 columns) */}
                    <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-gray-700">
                        <p>
                            At Cloud Sentrics Integration, we’re passionate about taking care of the people who have made the decision to join our team.
                        </p>
                        <p>
                            We’re dedicated to providing the best possible workplace, with a friendly and positive environment in which they can excel and achieve their true potential, with real opportunities to grow professionally and personally.
                        </p>
                        <p>
                            We believe in engaging with our team members on important matters such as diversity and equity, and we pride ourselves on an inclusive culture, where our people feel supported, respected, and empowered.
                        </p>
                        <p>
                            Be well @ Cloud Sentrics is our commitment to the wellbeing of our employees, which is why you’ll find a variety of roles offering hybrid, remote or office-based working arrangements across our organisation.
                        </p>
                        <p>
                            We recognise that our greatest asset is our people – it’s what our success is built on and it’s why we’re working hard to ensure that we provide employee experience for everyone who has chosen to take the next step of their career with us.
                        </p>
                    </div>

                    {/* Right Side: Testimonial (2 columns) */}
                    <motion.div
                        className="md:col-span-2 space-y-6 bg-gray-100 p-6 rounded-xl shadow-sm"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <blockquote className="text-lg md:text-xl italic font-medium text-gray-700 leading-relaxed">
                            "I have learned so much since starting at Cloud Sentrics and everyone I work with are so friendly and supportive to my career goals. It’s been such a positive experience since I started a year ago!"
                        </blockquote>

                        <div>
                            <p className="font-semibold text-base md:text-lg text-gray-900">
                                Mustapha Ibrahim Sunusi
                            </p>
                            <p className="text-sm md:text-base text-gray-600">Administrator</p>
                            
                        </div>

                        <div className="w-full h-64 md:h-[300px] rounded-xl overflow-hidden shadow-md">
                            <img
                                src={testimonialImg}
                                alt="Mustapha Ibrahim Sunusi"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CareerPage;
