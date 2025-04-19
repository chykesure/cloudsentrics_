import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TechConsult = () => {
    return (
        <section className="px-6 py-8 bg-gray-100 flex flex-col lg:flex-row gap-8 mt-[-60px]">
            {/* Main Content */}
            <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">Empowering Your Business with Cutting-Edge Technology Solutions</h2>
                <p className="mt-4 font-semibold text-gray-700">
                    At the heart of every successful digital transformation is the ability to leverage the right technology. We help you innovate with the latest infrastructure, streamline your operations, and align your technology with business goals. Whether you're modernizing your IT systems, deploying new platforms, or optimizing processes, our technology solutions deliver scalable and sustainable results.
                </p>
                <p className="mt-4 text-gray-600">
                    Our experts assess your current environment, recommend state-of-the-art technologies, and guide you through the implementation process. Whether you are enhancing your data center capabilities, adopting cloud solutions, or optimizing user experiences, we ensure that your infrastructure is primed for future growth and performance.
                </p>
                <p className="mt-4 text-gray-600">
                    We integrate advanced technologies like AI, cloud computing, and machine learning to drive innovation. Through continuous optimization, we help you make smarter decisions, improve operational efficiency, and stay ahead of market trends.
                </p>
                <p className="mt-4 text-gray-600">
                    Security is built into every solution from safeguarding your network to protecting sensitive data. We employ advanced security measures and risk management strategies to ensure that your infrastructure is resilient and secure against evolving threats.
                </p>
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
                    <h3 className="text-xl font-bold text-gray-900">Strategic Technology Services                    </h3>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>Digital Transformation Strategy</li>
                        <li>Cloud & Data Center Infrastructure</li>
                        <li>AI & Machine Learning Integration</li>
                        <li>Cybersecurity & Risk Management</li>
                        <li>IT Modernization & Optimization</li>
                    </ul>
                </div>

                {/* Download Brochure */}
                <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center cursor-pointer">
                    <span className="font-bold">Download Our Technology Solutions Brochure</span>
                    <FaArrowRight />
                </div>

                {/* eBook Section */}
                <div className="bg-teal-600 text-white p-6 rounded-lg text-center cursor-pointer">
                    <span className="text-lg font-bold">Read our eBook: The Future of Technology in Business</span>
                    <FaArrowRight className="inline ml-2" />
                </div>
            </aside>
        </section>
    );
};

export default TechConsult;
