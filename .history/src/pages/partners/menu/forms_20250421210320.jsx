import React, { useEffect, useState } from 'react';

const forz = "/assets/data-im.jpg";

const FormsPage = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();

                const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                setCountries(sortedCountries);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching countries:', error);
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    return (
        <section className="px-6 py-12 bg-gray-100">
            <div className="w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column (Image and Description) */}
                <div className="md:col-span-1 flex flex-col justify-between">
                    <div className="relative">
                        <img className="w-full h-64 md:h-96 object-cover rounded-lg" src={forz} alt="Cloud Sentrics AI Solutions" />
                    </div>
                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">Empowering Your Business with Cloud Sentrics AI Solutions</h2>
                        <p className="text-gray-700 mt-4">Cloud Sentrics delivers cutting-edge AI and cloud-driven solutions to help businesses streamline their operations, optimize performance, and unlock new growth opportunities.</p>
                        <p className="font-semibold text-gray-900 mt-4">With a dedicated team of AI and cloud professionals, we design and implement solutions that are tailored to your specific needs. Our services are focused on:</p>
                        <ul className="list-disc ml-6 mt-4 text-gray-700">
                            <li>AI-Powered Business Optimization</li>
                            <li>Cloud Infrastructure Management</li>
                            <li>Seamless Integration</li>
                            <li>24/7 Support & Monitoring</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">Why Choose Cloud Sentrics?</h2>
                        <p className="text-gray-700 mt-4">At Cloud Sentrics, we specialize in designing tailored AI-driven solutions that align with your business goals. Here's why our clients choose us:</p>
                        <ul className="list-disc ml-6 mt-4 text-gray-700">
                            <li>AI-powered business optimization strategies that drive growth.</li>
                            <li>Comprehensive cloud infrastructure management for enhanced efficiency.</li>
                            <li>Seamless integration of AI and cloud technologies into your existing systems.</li>
                            <li>24/7 support and monitoring to ensure optimal performance and security.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column (Content Expansion) */}
                <div className="md:col-span-1 bg-white p-10 shadow-xl rounded-lg text-black w-full">
                    <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 text-center">
                        CONTACT US FOR A CONSULTATION
                    </h3>
                    <div className="mt-6">
                        <p className="text-lg text-gray-700 mb-4">
                            Ready to take your business to the next level with AI and cloud solutions? Our team is here to provide you with customized solutions that will help you optimize your operations and drive success.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Whether you're looking for IT consultancy, cloud infrastructure management, or AI-driven business optimization, we have the expertise to help you. Our solutions are scalable, secure, and designed to deliver results that matter to your business.
                        </p>
                        <p className="text-gray-700">
                            Contact us today to schedule a consultation and start transforming your business with the power of AI and cloud technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormsPage;
