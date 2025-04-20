import React from "react";

const ContactMap = () => {
    return (
        <div className="bg-[#f9fafb] pt-16 px-4 sm:px-6 lg:px-20">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">Contact & Support</h2>

            {/* Unified Grid: Office Info + Bottom Info Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* Main Office Info */}
                <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Houston Office</h3>
                    <p className="text-gray-700 mb-4">
                        3354 Rogerdale Rd, Houston, TX, United States, Texas
                    </p>
                    <p className="text-gray-800 font-medium mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 5h2l.4 2M7 10l1.8 6H17l1.4-5.2a1 1 0 0 0-.9-1.3H7.8" />
                        </svg>
                        <a href="tel:+13463998985" className="text-blue-600 hover:underline">
                            +1 346-399-8985
                        </a>
                    </p>
                    <p className="text-gray-800 font-medium flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M16 12H8m0 0l4-4m-4 4l4 4" />
                        </svg>
                        <a href="mailto:info@cloudsentrics.org " className="text-blue-600 hover:underline">
                            info@cloudsentrics.org
                        </a>
                    </p>
                </div>

                {/* Quick Contact Boxes */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h4>
                        <p className="text-gray-600">+1 346-399-8985</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h4>
                        <p className="text-gray-600">info@cloudsentrics.org </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Working Hours</h4>
                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
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
