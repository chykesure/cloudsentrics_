import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ConsultPage = () => {
    return (
        <section className="px-6 py-8 bg-gray-100 flex flex-col lg:flex-row gap-8 mt-[-60px]">
            {/* Main Content */}
            <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">Cloud-Integrated Solutions for Modern Business Transformation Empower Innovation, Resilience, and Scalable Growth</h2>
                <p className="mt-4 font-semibold text-gray-700">
                    At Cloud Sentrics, we help organizations adopt a cloud-first mindset—enabling seamless digital transformation no matter where you are on your journey.

                    Whether you're modernizing legacy systems, migrating to the public cloud, or building hybrid/multi-cloud environments, our tailored cloud services deliver agility, cost-efficiency, and long-term value.

                </p>
                <h4 className="text-2xl font-semibold text-gray-800">Key Benefits of Cloud-Integrated AI </h4>
                                            <ul className="mt-4 space-y-3 text-gray-700">
                                                {[
                                                    "Boosted Efficiency & Smart Automation Leverage AI in the cloud to streamline operations and eliminate repetitive tasks.",
                                                    "Data-Driven Decision-Making Unlock real-time insights with powerful analytics to drive confident, strategic decisions.",
                                                    "Cost-Effective Scalability Optimize resources while reducing costs—grow smarter without the overhead.",
                                                    "Future-Ready Innovation Deploy flexible, cloud-powered AI solutions that scale as your business evolves."
                                                ].map((benefit, index) => (
                                                    <li key={index} className="flex items-start space-x-3">
                                                        <FaBolt className="text-blue-600 text-4xl mt-1" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-6">
                {/* Consultation Button */}
                <div className="bg-purple-800 text-white p-4 rounded-lg flex justify-between items-center cursor-pointer">
                    <span>Contact us to book a consultation</span>
                    <FaArrowRight />
                </div>

                {/* Aligned Services */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900">Aligned Services</h3>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>Event: Broadcom v Oracle - unlocking value from virtualisation</li>
                        <li>Cloud</li>
                        <li>Application Transformation</li>
                        <li>FinOps</li>
                        <li>Security</li>
                    </ul>
                </div>

                {/* Download Brochure */}
                <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center cursor-pointer">
                    <span className="font-bold">Download Our Brochure</span>
                    <FaArrowRight />
                </div>

                {/* eBook Section */}
                <div className="bg-teal-600 text-white p-6 rounded-lg text-center cursor-pointer">
                    <span className="text-lg font-bold">Read our eBook Cloud Migration a 5-Step Guide</span>
                    <FaArrowRight className="inline ml-2" />
                </div>
            </aside>
        </section>
    );
};

export default ConsultPage;
