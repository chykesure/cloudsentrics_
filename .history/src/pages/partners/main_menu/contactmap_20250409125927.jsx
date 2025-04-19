import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactMap = () => {
    return (
        <div className="bg-[#f9fafb] pt-16 px-4 sm:px-6 lg:px-20">
            {/* Cloud Sentrics Introduction Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Cloud Sentrics</h2>
                <p className="text-gray-700 text-lg mb-6">
                    Cloud Sentrics is the ultimate launchpad for your career in Cloud DevSecOps designed for everyone, regardless of your tech background. Whether you're new to IT or looking to upskill, our expert-led training equips you with the hands-on experience and industry certifications needed to thrive in the cloud.
                </p>
                <a 
                    href="#"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
                >
                    Learn More
                </a>
            </div>

            {/* Contact & Support Section */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">Contact & Support</h2>

            {/* Unified Grid: Office Info + Bottom Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {/* Main Office Info */}
                <div className="bg-white rounded-xl shadow-lg p-8 col-span-1 md:col-span-2 transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Houston Office</h3>
                    <p className="text-gray-700 mb-4">
                        3354 Rogerdale Rd, Houston, TX, United States, Texas
                    </p>
                    <p className="text-gray-800 font-medium mb-2 flex items-center gap-2">
                        <FaPhoneAlt className="w-5 h-5 text-blue-600" />
                        <a href="tel:+13463998985" className="text-blue-600 hover:underline">
                            +1 346-399-8985
                        </a>
                    </p>
                    <p className="text-gray-800 font-medium flex items-center gap-2">
                        <FaEnvelope className="w-5 h-5 text-blue-600" />
                        <a href="mailto:info4cloudsentrics@gmail.com" className="text-blue-600 hover:underline">
                            info4cloudsentrics@gmail.com
                        </a>
                    </p>
                    
                </div>

                {/* Quick Contact Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h4>
                        <p className="text-gray-600">
                            <FaPhoneAlt className="inline-block mr-2 text-blue-600" />
                            +1 346-399-8985
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h4>
                        <p className="text-gray-600">
                            <FaEnvelope className="inline-block mr-2 text-blue-600" />
                            info4cloudsentrics@gmail.com
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Working Hours</h4>
                        <p className="text-gray-600">
                            <FaClock className="inline-block mr-2 text-blue-600" />
                            Mon - Fri: 9:00 AM - 5:00 PM
                        </p>
                    </div>
                </div>
            </div>

            {/* Full-Width Map */}
            <div className="w-full">
                <iframe
                    title="Houston Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13807.84773977804!2d-95.56307065!3d29.72636405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c4fd9d2f11d1%3A0x3dcb9674fa5e6f01!2s3354%20Rogerdale%20Rd%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2sng!4v1712663541234!5m2!1sen!2sng"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactMap;
