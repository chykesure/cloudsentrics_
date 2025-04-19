import React, { useState } from "react";

const ContactMap = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        industry: "",
        email: "",
        phone: "",
        services: [],
        message: "",
        consent: false,
    });

    const services = [
        "Cloud Migration",
        "Digital Transformation",
        "FinOps",
        "IoT",
        "AI Training",
        "Conversational AI",
        "Modern Workplace",
        "Careers",
        "Other",
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox" && name === "services") {
            const updated = checked
                ? [...formData.services, value]
                : formData.services.filter((item) => item !== value);
            setFormData({ ...formData, services: updated });
        } else if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50 text-black">
            {/* Contact Form Section */}
            <div className="bg-white p-6 shadow rounded">
                <h2 className="text-2xl font-semibold mb-4">Contact Us For A Consultation</h2>
                <button className="bg-blue-800 text-white px-4 py-2 rounded mb-6">Email us</button>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input type="text" name="firstName" placeholder="First name*" required value={formData.firstName} onChange={handleChange} className="border p-2 rounded" />
                        <input type="text" name="lastName" placeholder="Last name*" required value={formData.lastName} onChange={handleChange} className="border p-2 rounded" />
                    </div>
                    <input type="text" name="companyName" placeholder="Company Name*" required value={formData.companyName} onChange={handleChange} className="border w-full p-2 rounded" />
                    <input type="text" name="industry" placeholder="Industry" value={formData.industry} onChange={handleChange} className="border w-full p-2 rounded" />
                    <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} className="border w-full p-2 rounded" />
                    <input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} className="border w-full p-2 rounded" />

                    <div>
                        <label className="block mb-2 font-medium">Services Needed*</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {services.map((service, idx) => (
                                <label key={idx} className="flex items-center gap-2">
                                    <input type="checkbox" name="services" value={service} checked={formData.services.includes(service)} onChange={handleChange} />
                                    {service}
                                </label>
                            ))}
                        </div>
                    </div>

                    <textarea name="message" placeholder="How can we help?" rows="4" value={formData.message} onChange={handleChange} className="border w-full p-2 rounded" />
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
                        <label>I agree to receive other communications from Bell Integration.</label>
                    </div>

                    <div className="bg-gray-200 rounded p-4 w-fit text-sm text-gray-700">reCAPTCHA Placeholder</div>

                    <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800">Submit</button>
                </form>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-6">
                <div className="bg-white shadow rounded p-4">
                    <h4 className="text-lg font-semibold border-b pb-1 mb-2">Our Location</h4>
                    <p className="font-medium text-gray-900 mb-1">Houston Office</p>
                    <p className="text-gray-700 mb-2">3354 Rogerdale Rd, Houston, TX, United States, Texas</p>
                    <p className="text-gray-700 font-semibold">Call: <a href="tel:+1442392825925" className="text-blue-600">+1 442 392 825925</a></p>
                </div>

                {/* Google Map Embed */}
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        title="Houston Office Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13807.84773977804!2d-95.56307065!3d29.72636405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c4fd9d2f11d1%3A0x3dcb9674fa5e6f01!2s3354%20Rogerdale%20Rd%2C%20Houston%2C%20TX%2077036%2C%20USA!5e0!3m2!1sen!2sng!4v1712663541234!5m2!1sen!2sng"
                        width="100%"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        style={{ border: 0 }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;
