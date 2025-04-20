import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactMap = () => {
    return (
        <div className="bg-[#f9fafb] pt-16 px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Contact & Support</h2>

            <div className="grid gap-6 mb-16 lg:grid-cols-3">
                {/* Office Info */}
                <div className="bg-white rounded-xl shadow-lg p-8 lg:col-span-2 transition-transform transform hover:scale-105">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Houston Office</h3>
                    <p className="text-gray-700 mb-4">
                    22507 Cappella Village Lane, Katy, TX 77449
                    </p>
                    <p className="text-gray-800 font-medium mb-2 flex items-center gap-2">
                        <FaPhoneAlt className="w-5 h-5 text-blue-600" />
                        <a href="tel:+13465806298" className="text-blue-600 hover:underline">
                        +1 3465 806298
                        </a>
                    </p>
                    <p className="text-gray-800 font-medium flex items-center gap-2">
                        <FaEnvelope className="w-5 h-5 text-blue-600" />
                        <a href="mailto:info@cloudsentrics.org " className="text-blue-600 hover:underline">
                            info@cloudsentrics.org
                        </a>
                    </p>

                    <h2 className="text-3xl font-semibold text-gray-800 mb-4 mt-6">Cloud Sentrics</h2>
                    <p className="text-gray-700 text-lg">
                        Cloud Sentrics is the ultimate launchpad for your career in Cloud DevSecOps...
                    </p>
                </div>

                {/* Quick Info Boxes */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h4>
                        <p className="text-gray-600">
                            <FaPhoneAlt className="inline-block mr-2 text-blue-600" />
                            +1 346-399-8985
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h4>
                        <p className="text-gray-600">
                            <FaEnvelope className="inline-block mr-2 text-blue-600" />
                            info@cloudsentrics.org
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Working Hours</h4>
                        <p className="text-gray-600">
                            <FaClock className="inline-block mr-2 text-blue-600" />
                            Mon - Fri: 9:00 AM - 5:00 PM
                        </p>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="w-full">
            <iframe
  title="Katy Office Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13918.827268840718!2d-95.7505299!3d29.7124365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8641223e539372fb%3A0x2e799a12f1b2a87a!2s22507%20Cappella%20Village%20Ln%2C%20Katy%2C%20TX%2077449%2C%20USA!5e0!3m2!1sen!2sus!4v1713605430000!5m2!1sen!2sus"
  width="100%"
  height="450"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
</iframe>
            </div>
        </div>

    );
};

export default ContactMap;
