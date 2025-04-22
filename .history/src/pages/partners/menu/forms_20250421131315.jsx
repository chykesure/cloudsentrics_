import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const forz = "/assets/data-im.jpg";

const FormsPage = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();

                const sortedCountries = data.sort((a, b) =>
                    a.name.common.localeCompare(b.name.common)
                );

                setCountries(sortedCountries);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching countries:', error);
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        const form = e.target;

        try {
            const response = await emailjs.sendForm(
                'service_zvhkl2f',
                'template_vf7xpmm',
                form,
                'Fh76KR5FuYbqm1weT'
            );

            console.log('EmailJS Response:', response);

            Swal.fire({
                icon: 'success',
                title: 'Form submitted successfully!',
                text: 'We have received your message and will get back to you shortly.',
                confirmButtonText: 'Great!',
            });

            form.reset(); // Reset form after submission
        } catch (error) {
            console.error('Error sending email:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Something went wrong: ${error.message}`,
                confirmButtonText: 'Try Again',
            });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <section className="px-6 py-12 bg-gray-100">
            <div className="w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side */}
                <div>
                    <img src={forz} alt="Cloud Sentrics" className="w-full h-64 md:h-96 object-cover rounded-lg" />

                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Empowering Your Business with Cloud Sentrics AI Solutions
                        </h2>
                        <p className="text-gray-700 mt-4">
                            Cloud Sentrics delivers cutting-edge AI and cloud-driven solutions that transform
                            how businesses operate...
                        </p>
                        <p className="font-semibold text-gray-900 mt-4">
                            We help businesses modernize IT environments, optimize costs, and drive digital
                            transformation with AI-powered automation and analytics.
                        </p>
                    </div>

                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Why Choose Cloud Sentrics?
                        </h2>
                        <p className="text-gray-700 mt-4">
                            Tailored AI and cloud computing solutions to empower enterprises.
                        </p>
                        <ul className="text-gray-900 font-semibold mt-4 list-disc pl-5 space-y-2">
                            <li>AI-Powered Business Optimization</li>
                            <li>Cloud Infrastructure Management</li>
                            <li>Seamless Integration</li>
                            <li>24/7 Support & Monitoring</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-white p-10 shadow-xl rounded-lg text-black w-full">
                    <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 text-center">
                        CONTACT US FOR A CONSULTATION
                    </h3>

                    <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        <input name="form_name" hidden defaultValue="CloudSentrics Contact Form" />

                        <div className="flex flex-col w-full">
                            <label htmlFor="first-name" className="font-medium text-gray-700">First Name</label>
                            <input id="first-name" name="first_name" type="text" placeholder="First Name" required className="input-style" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="last-name" className="font-medium text-gray-700">Last Name</label>
                            <input id="last-name" name="last_name" type="text" placeholder="Last Name" required className="input-style" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="company" className="font-medium text-gray-700">Company</label>
                            <input id="company" name="company" type="text" placeholder="Company" required className="input-style" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="industry" className="font-medium text-gray-700">Industry</label>
                            <input id="industry" name="industry" type="text" placeholder="Industry" required className="input-style" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                            <input id="email" name="email" type="email" placeholder="Email" required className="input-style" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="phone" className="font-medium text-gray-700">Phone Number</label>
                            <input id="phone" name="phone" type="tel" placeholder="Phone Number" required className="input-style" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="country" className="font-medium text-gray-700">Country</label>
                            <select id="country" name="country" required className="input-style">
                                {loading ? (
                                    <option>Loading countries...</option>
                                ) : (
                                    <>
                                        <option value="">Select a Country</option>
                                        {countries.map((country) => (
                                            <option key={country.cca2} value={country.name.common}>
                                                {country.name.common}
                                            </option>
                                        ))}
                                    </>
                                )}
                            </select>
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="services" className="font-medium text-gray-700">Type of Services</label>
                            <select id="services" name="services" required className="input-style">
                                <option value="">Select a Service</option>
                                <option value="IT Consultancy">IT Consultancy</option>
                                <option value="IT Help Desk">IT Help Desk</option>
                                <option value="Data Centre Optimization">Data Centre Optimization</option>
                                <option value="Desktop Refresh">Desktop Refresh</option>
                                <option value="Desktop Support">Desktop Support</option>
                                <option value="Outsourced IT Help Desk">Outsourced IT Help Desk</option>
                                <option value="IT Service Desk">IT Service Desk</option>
                                <option value="Patch Management">Patch Management</option>
                                <option value="Secure Data Destruction">Secure Data Destruction</option>
                                <option value="Workload Migration">Workload Migration</option>
                                <option value="Other Services">Other Services</option>
                            </select>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="message" className="font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here..."
                                rows="4"
                                required
                                className="input-style"
                            ></textarea>
                        </div>

                        <div className="col-span-1 md:col-span-2 flex items-center">
                            <input type="checkbox" id="marketing-emails" name="marketing_opt_in" className="mr-2" />
                            <label htmlFor="marketing-emails" className="text-gray-600">
                                Opt in to receive marketing emails
                            </label>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full bg-[#1e4272] text-white p-3 rounded-lg font-semibold hover:bg-purple-900 transition"
                            >
                                {isProcessing ? 'Processing...' : 'Submit'}
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 mt-2 text-center col-span-1 md:col-span-2">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a href="#" className="text-blue-500">Privacy Policy</a> and{" "}
                            <a href="#" className="text-blue-500">Terms of Service</a> apply.
                        </p>
                    </form>
                </div>
            </div>

            {/* Custom styling */}
            <style jsx>{`
                .input-style {
                    padding: 1rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    color: #1f2937;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                    transition: all 0.2s;
                }

                .input-style:focus {
                    outline: none;
                    border-color: #7c3aed;
                    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.3);
                }
            `}</style>
        </section>
    );
};

export default FormsPage;
