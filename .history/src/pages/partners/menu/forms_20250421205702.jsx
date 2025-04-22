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
                        <p className="text-gray-700 mt-4">Cloud Sentrics delivers cutting-edge AI and cloud-driven solutions to help businesses streamline their operations, optimize performance, and unlock new growth opportunities.</p>
                        <p className="font-semibold text-gray-900 mt-4">With a dedicated team of AI and cloud professionals, we offer solutions tailored to your business needs.</p>
                    </div>
                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">Why Choose Cloud Sentrics?</h2>
                        <p className="text-gray-700 mt-4">At Cloud Sentrics, we specialize in designing tailored AI solutions that drive efficiency, innovation, and success. Our cloud solutions are designed to scale with your business.</p>
                        <p className="font-semibold text-gray-900 mt-4">
                            - AI-Powered Business Optimization <br />
                            - Cloud Infrastructure Management <br />
                            - Seamless Integration <br />
                            - 24/7 Support & Monitoring
                        </p>
                    </div>
                </div>

                {/* Added empty div to fill the blank space previously occupied by the form */}
                <div className="md:col-span-1 flex flex-col justify-between">
                    <div className="bg-white p-6 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900">Ready to Transform Your Business?</h3>
                        <p className="text-gray-700 mt-4">Let Cloud Sentrics help you unlock your business’s full potential. Reach out today to learn how our AI and cloud-driven solutions can propel your organization forward.</p>
                    </div>
                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900">Contact Us Now</h3>
                        <p className="text-gray-700 mt-4">We’re here to assist you! Get in touch with our team for more information about our services, consultation, and solutions tailored to your needs.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormsPage;
