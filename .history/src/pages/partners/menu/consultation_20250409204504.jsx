import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ConsultPage = () => {
    return (
        <section className="px-6 py-8 bg-gray-100 flex flex-col lg:flex-row gap-8 mt-[-60px]">
            {/* Main Content */}
            <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">Cloud-Integrated Solutions for Modern Business Transformation
Empower Innovation, Resilience, and Scalable Growth</h2>
                <p className="mt-4 font-semibold text-gray-700">
                    Wherever you are on your cloud journey, we’ll help you determine the right cloud strategy for your business. Whether you’re looking to modernise DC systems, migrate to the public cloud – or both – our cloud services help you to sustainably unlock value and agility using public cloud, multi-cloud and on-premises platforms.
                </p>
                <p className="mt-4 text-gray-600">
                    Our cloud experts can help assess the best solution for your application and infrastructure needs. This includes assessing your cloud readiness and advising whether or not to utilise public cloud providers or build and maintain your cloud capabilities elsewhere.
                </p>
                <p className="mt-4 text-gray-600">
                    Through ongoing optimisation of your cloud platform, we will help you make smarter architecture choices to drive efficiency and meet business requirements. This will include the harnessing of IaaS, PaaS and SaaS platforms to extend your infrastructure and improve your operational agility and efficiency.
                </p>
                <p className="mt-4 text-gray-600">
                    We’ll also embed end-to-end security across your cloud operations. From end point security to cyber defence, as well as cloud and workplace security, we’ll ensure you’re able to wrap protection around every user, every device and every connection.
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
