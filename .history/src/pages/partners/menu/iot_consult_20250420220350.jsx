import React from "react";
import { FaArrowRight } from "react-icons/fa";

const IOTConsult = () => {
    return (
        <section className="px-6 py-8 bg-gray-100 flex flex-col lg:flex-row gap-8 mt-[-60px]">
            {/* Main Content */}
            <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">Accelerate Innovation with Smart IoT Solutions</h2>
                <p className="mt-4 font-semibold text-gray-700">
                    No matter where you are on your IoT journey, we help you define the right strategy to connect devices, collect data, and drive intelligent decision-making. Whether you're deploying smart sensors, automating industrial processes, or enhancing operational efficiency, our IoT services unlock new levels of value and control.
                </p>
                <p className="mt-4 text-gray-600">
                    Our IoT experts work with you to assess infrastructure readiness and determine the best hardware, communication protocols, and platforms to integrate across your environment — whether you're managing edge devices or centralized control systems.
                </p>
                <p className="mt-4 text-gray-600">
                    Through continuous optimization of your IoT ecosystem, we help you make smarter architectural choices that improve performance, scalability, and energy efficiency. We leverage edge computing, AI-powered analytics, and real-time monitoring to maximize impact and responsiveness.
                </p>
                <p className="mt-4 text-gray-600">
                    Security is embedded from the ground up — ensuring your connected devices, networks, and data pipelines remain protected. From device authentication to encrypted communication and anomaly detection, we help you secure every endpoint in your IoT infrastructure.
                </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-6">
                {/* Consultation Button */}
                <div className="bg-purple-800 text-white p-4 rounded-lg flex justify-between items-center cursor-pointer">
                    {/* <span>Contact us to book a consultation</span>
                    <FaArrowRight /> */}
                </div>

                {/* Aligned Services */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900">Aligned Services</h3>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>Webinar: Unlocking ROI with Smart Manufacturing</li>
                        <li>IoT Infrastructure & Device Management</li>
                        <li>Edge Computing & Real-time Analytics</li>
                        <li>AI Integration for Predictive Maintenance</li>
                        <li>IoT Security & Risk Management</li>
                    </ul>
                </div>

                {/* Download Brochure */}
                <div className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center cursor-pointer">
                    {/* <span className="font-bold">Download Our IoT Brochure</span>
                    <FaArrowRight /> */}
                </div>

                {/* eBook Section */}
                <div className="bg-teal-600 text-white p-6 rounded-lg text-center cursor-pointer">
                    <span className="text-lg font-bold">Read our eBook: Building a Smarter Future with IoT</span>
                    <FaArrowRight className="inline ml-2" />
                </div>
            </aside>
        </section>
    );
};

export default IOTConsult;
