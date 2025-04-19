import React from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaHeartbeat, FaGift, FaMedal, FaSmileBeam } from 'react-icons/fa';

// Testimonial image
const testimonialImg = "/assets/comu1.jpg"; // replace with your own

const CareerPage = () => {
    return (
        <div className="bg-white text-gray-800 px-4 md:px-12 py-12 space-y-20">
            {/* Section 1: Working at Cloud Sentrics */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-green-800 border-b-2 border-green-700 w-fit">Working at Cloud Sentrics</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p>
                            At Cloud Sentrics Integration, we’re passionate about taking care of the people who have made the decision to join our team.
                        </p>
                        <p>
                            We’re dedicated to providing the best possible workplace, with a friendly and positive environment in which they can excel and achieve their true potential, with real opportunities to grow professionally and personally.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <p>
                            We believe in engaging with our team members on important matters such as diversity and equity, and we pride ourselves on an inclusive culture, where our people feel supported, respected, and empowered.
                        </p>
                        <p>
                            Be well @ Cloud Sentrics is our commitment to the wellbeing of our employees, which is why you’ll find a variety of roles offering hybrid, remote or office-based working arrangements across our organisation.
                        </p>
                        <p>
                            We recognise that our greatest asset is our people – it’s what our success is built on and it’s why we’re working hard to ensure that we provide employee experience for everyone who has chosen to take the next step of their career with us. If you’d like to help shape the future here at Cloud Sentrics and be part of something exciting, why not join us for the journey?
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2: Employee Testimonial */}
            <section className="bg-gray-100 rounded-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    className="space-y-6 h-full flex flex-col justify-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <blockquote className="text-xl md:text-2xl italic font-medium text-gray-700 leading-relaxed">
                        "I have learned so much since starting at Cloud Sentrics and everyone I work with are so friendly and supportive to my career goals. It’s been such a positive experience since I started a year ago!"
                    </blockquote>

                    <div>
                        <p className="font-semibold text-base md:text-lg text-gray-900">
                            Catherine Quinn
                        </p>
                        <p className="text-sm md:text-base text-gray-600">PMO Support Administrator</p>
                    </div>

                    <div className="text-sm text-gray-600">01 / 08</div>
                </motion.div>

                <motion.div
                    className="w-full h-80 md:h-[400px] rounded overflow-hidden shadow-lg"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={testimonialImg}
                        alt="Catherine Quinn"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </motion.div>
            </section>



            {/* Section 3: Benefits */}
            <section>
                <motion.h3
                    className="text-2xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Benefits
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-800">

                    {/* Financial */}
                    <div className="flex justify-center">
                        <motion.div className="bg-white shadow-md p-5 rounded space-y-2 border-t-4 border-purple-500 w-full max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex items-center gap-2">
                                <FaMoneyBillWave className="text-purple-500 text-xl" />
                                <h4 className="font-semibold text-lg">Financial</h4>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Pension</li>
                                <li>Life Assurance</li>
                                <li>Hardship Loan</li>
                                <li>Enhanced Maternity & Paternity Support</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Medical */}
                    <div className="flex justify-center">
                        <motion.div className="bg-white shadow-md p-5 rounded space-y-2 border-t-4 border-blue-500 w-full max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45 }}
                        >
                            <div className="flex items-center gap-2">
                                <FaHeartbeat className="text-blue-500 text-xl" />
                                <h4 className="font-semibold text-lg">Medical</h4>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Eyecare</li>
                                <li>Dental</li>
                                <li>Healthcare Insurance</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Referrals */}
                    <div className="flex justify-center">
                        <motion.div className="bg-white shadow-md p-5 rounded space-y-2 border-t-4 border-green-500 w-full max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2">
                                <FaGift className="text-green-500 text-xl" />
                                <h4 className="font-semibold text-lg">Referrals & Purchases</h4>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Candidate Referral Bonus</li>
                                <li>Lead to Sales Incentives</li>
                                <li>Technology Purchase</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Reward */}
                    <div className="flex justify-center">
                        <motion.div className="bg-white shadow-md p-5 rounded space-y-2 border-t-4 border-yellow-500 w-full max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55 }}
                        >
                            <div className="flex items-center gap-2">
                                <FaMedal className="text-yellow-500 text-xl" />
                                <h4 className="font-semibold text-lg">Reward And Recognition</h4>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Employee Engagement Portal</li>
                                <li>Discounts at 900+ retailers</li>
                                <li>Long Service Recognition</li>
                                <li>Company Social Events</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Wellbeing */}
                    <div className="flex justify-center">
                        <motion.div className="bg-white shadow-md p-5 rounded space-y-2 border-t-4 border-pink-500 w-full max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2">
                                <FaSmileBeam className="text-pink-500 text-xl" />
                                <h4 className="font-semibold text-lg">Wellbeing</h4>
                            </div>
                            <ul className="list-disc list-inside">
                                <li>Hybrid Working Arrangements</li>
                                <li>Access to a Wellbeing Centre</li>
                                <li>25 Days Holiday + Enhanced Holiday</li>
                                <li>Flexibility</li>
                                <li>Birthday Day Off</li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Empty placeholders for layout balance */}
                    <div className="flex justify-center invisible"><div className="w-full max-w-md" /></div>
                    <div className="flex justify-center invisible"><div className="w-full max-w-md" /></div>
                    <div className="flex justify-center invisible"><div className="w-full max-w-md" /></div>

                </div>



                {/* Location links */}
                <motion.div
                    className="mt-4 text-sm text-gray-600 text-right"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >

                </motion.div>
            </section>
        </div>
    );
};

export default CareerPage;
