import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    const navigate = useNavigate();

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
        referralName: "", // <-- added
    });
    



    const [isProcessing, setIsProcessing] = useState(false);
    const formRef = useRef(null);

    const services = [
        "Cloud Migration",
        "Digital Transformation",
        "FinOps",
        "IoT",
        "AI Training",
        "Conversational AI",
        "Modern Workplace",
        "Careers",
        "Cloud Storage",
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            const response = await fetch("https://api.cloudsentrics.org/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    services: formData.services.join(", "),
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            Swal.fire({
                icon: "success",
                title: "Form submitted successfully!",
                text: "We have received your message and will get back to you shortly.",
                confirmButtonText: "Great!",
            });

            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                companyName: "",
                industry: "",
                email: "",
                phone: "",
                services: [],
                message: "",
                consent: false,
                referralName: "",
            });

        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Something went wrong: ${error.message}`,
                confirmButtonText: "Try Again",
            });
        }

        setIsProcessing(false);
    };


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gray-50 text-black">
            {/* Form Section */}
            <div className="md:col-span-2 bg-white p-6 shadow rounded">
                <h2 className="text-2xl font-semibold mb-4">Contact Us For A Consultation</h2>
                <button className="bg-blue-800 text-white px-4 py-2 rounded mb-6">Email us</button>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name*"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name*"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border p-2 rounded"
                        />
                    </div>

                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name*"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                    />
                    <input
                        type="text"
                        name="industry"
                        placeholder="Industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border w-full p-2 rounded"
                        />
                        <input
                            type="text"
                            name="referralName"
                            placeholder="Referral Name (optional)"
                            value={formData.referralName}
                            onChange={handleChange}
                            className="border w-full p-2 rounded"
                        />
                    </div>



                    {/* Services */}
                    <div>
                        <label className="block mb-2 font-medium">Services Needed*</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {services.map((service, idx) => (
                                <label key={idx} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="services"
                                        value={service}
                                        checked={formData.services.includes(service)}
                                        onChange={handleChange}
                                    />
                                    {service}
                                </label>
                            ))}
                        </div>
                        {/* Hidden input to send selected services as a single string */}
                        <input type="hidden" name="selectedServices" value={formData.services.join(", ")} />
                    </div>

                    <textarea
                        name="message"
                        placeholder="How can we help?"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                    ></textarea>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                        />
                        <label>I agree to receive other communications from CloudSentrics Integration.</label>
                    </div>

                    <div className="bg-gray-200 rounded p-4 w-fit text-sm text-gray-700">
                        reCAPTCHA Placeholder
                    </div>

                    <button
                        type="submit"
                        disabled={isProcessing}
                        className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800"
                    >
                        {isProcessing ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>

            {/* Sidebar Section */}
            <div className="space-y-6">
                {/* Call Us */}
                <div className="bg-white shadow rounded p-4">
                    <h4 className="text-lg font-semibold border-b pb-1 mb-2">Call Us</h4>
                    <p className="text-gray-700 mb-1">Have a question or need immediate assistance?</p>
                    <p className="font-medium text-gray-900">Phone: <a href="tel:+13465806298" className="text-blue-600">+1 346-580-6298</a></p>
                    <p className="text-sm text-gray-500 mt-1">Our team is available Monday – Friday, 9am to 5pm (CST).</p>
                </div>

                {/* Press & Media */}
                <div className="bg-white shadow rounded p-4">
                    <h4 className="text-lg font-semibold border-b pb-1 mb-2">Press & Media Enquiries</h4>
                    <p className="text-gray-700">
                        Journalists, bloggers, or media professionals looking for interviews, press kits, or brand assets?
                        We’d love to hear from you.
                    </p>
                    <p className="mt-2">
                        Please contact{" "}
                        <a href="mailto:info@cloudsentrics.org" className="text-blue-600 underline">
                            info@cloudsentrics.org
                        </a>{" "}
                        for all press and media-related queries.
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        For all other business or customer enquiries, kindly use the contact form on this page.
                    </p>
                </div>

                {/* Careers */}
                <div className="bg-white shadow rounded p-4">
                    <h4 className="text-lg font-semibold border-b pb-1 mb-2">Careers with CloudSentrics</h4>
                    <p className="italic text-gray-700 mb-2">
                        Ready to take the next step in your career?
                    </p>
                    <p className="text-gray-700 mb-2">
                        At CloudSentrics, we’re always looking for passionate and driven individuals to join our growing global team.
                        Whether you're just starting out or bringing years of experience, we provide the platform to grow and succeed.
                    </p>
                    <p className="text-gray-600 text-sm mb-3">Explore opportunities in IT, cloud engineering, sales, project management, and more.</p>
                    <button
                        onClick={() => navigate("/careers")}
                        className="bg-purple-900 hover:bg-purple-800 text-white px-4 py-2 rounded transition duration-300"
                    >
                        See Our Available Roles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
