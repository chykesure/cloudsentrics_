import React from 'react';

const forz = "/assets/data-im.jpg";

const FormsPage = () => {
    return (
        <section className="px-6 py-12 bg-gray-100">
            <div className="w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1">
                    <div className="relative">
                        <img className="w-full h-64 md:h-96 object-cover rounded-lg" src={forz} alt="Cloud Sentrics AI Solutions" />
                    </div>
                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">Empowering Your Business with Cloud Sentrics AI Solutions</h2>
                        <p className="text-gray-700 mt-4">Cloud Sentrics delivers cutting-edge AI and cloud-driven solutions...</p>
                        <p className="font-semibold text-gray-900 mt-4">With a dedicated team of AI and cloud professionals...</p>
                    </div>
                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">Why Choose Cloud Sentrics?</h2>
                        <p className="text-gray-700 mt-4">At Cloud Sentrics, we specialize in designing tailored AI...</p>
                        <p className="font-semibold text-gray-900 mt-4">
                            - AI-Powered Business Optimization <br />
                            - Cloud Infrastructure Management <br />
                            - Seamless Integration <br />
                            - 24/7 Support & Monitoring
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormsPage;
