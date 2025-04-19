import React, { useEffect, useState } from 'react';

const forz = "/assets/data-im.jpg"; // Image file
const aibg = "/assets/ai.jpg";

const FormsPage = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch country data from the API
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data = await response.json();

                // Sort the countries alphabetically by the common name
                const sortedCountries = data.sort((a, b) => {
                    if (a.name.common < b.name.common) {
                        return -1;
                    }
                    if (a.name.common > b.name.common) {
                        return 1;
                    }
                    return 0;
                });

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
            {/* Main Container */}
            <div className="w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image and Text Content */}
                <div className="md:col-span-1">
                    <div className="relative">
                        <img
                            className="w-full h-64 md:h-96 object-cover rounded-lg"
                            src={forz}
                            alt="Cloud Sentrics AI Solutions"
                        />
                    </div>
                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Empowering Your Business with Cloud Sentrics AI Solutions
                        </h2>
                        <p className="text-gray-700 mt-4">
                            Cloud Sentrics delivers cutting-edge AI and cloud-driven solutions that transform
                            how businesses operate. We streamline complex processes, enabling enterprises to
                            harness AI-driven insights, automate workflows, and enhance customer experiences.
                            Our solutions integrate seamlessly with your existing infrastructure, ensuring
                            scalability, security, and efficiency.
                        </p>
                        <p className="font-semibold text-gray-900 mt-4">
                            With a dedicated team of AI and cloud professionals, we help businesses
                            modernize their IT environments, optimize costs, and drive digital
                            transformation with AI-powered automation and analytics.
                        </p>
                    </div>
                    <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900">
                            Why Choose Cloud Sentrics?
                        </h2>
                        <p className="text-gray-700 mt-4">
                            At Cloud Sentrics, we specialize in designing tailored AI and cloud
                            computing solutions that empower enterprises to achieve operational excellence.
                            Whether it's improving IT infrastructure, optimizing data analytics, or deploying
                            AI-powered automation, our expertise ensures you stay ahead in a competitive digital landscape.
                        </p>
                        <p className="font-semibold text-gray-900 mt-4">
                            - **AI-Powered Business Optimization:** Improve efficiency and decision-making
                            - **Cloud Infrastructure Management:** Secure, scalable, and cost-effective
                            - **Seamless Integration:** Work with existing systems effortlessly
                            - **24/7 Support & Monitoring:** Proactive solutions for uninterrupted performance
                        </p>
                    </div>
                </div>

                {/* Consultation Form */}
                <div className="bg-white p-10 shadow-xl rounded-lg text-black w-full">
                    <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 text-center">
                        CONTACT US FOR A CONSULTATION
                    </h3>
                    <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 col-span-3">
                        {[ 
                            { id: 'first-name', label: 'First Name', type: 'text' },
                            { id: 'last-name', label: 'Last Name', type: 'text' },
                            { id: 'company', label: 'Company', type: 'text' },
                            { id: 'industry', label: 'Industry', type: 'text' },
                            { id: 'email', label: 'Email', type: 'email' },
                            { id: 'phone', label: 'Phone Number', type: 'tel' },
                        ].map(({ id, label, type }) => (
                            <div key={id} className="flex flex-col w-full">
                                <label htmlFor={id} className="font-medium text-gray-700">
                                    {label}
                                </label>
                                <input
                                    id={id}
                                    type={type}
                                    placeholder={label}
                                    required
                                    className="w-full p-4 border rounded-md text-gray-800 shadow-md focus:ring-2 focus:ring-purple-500 transition-all"
                                />
                            </div>
                        ))}

                        {/* Country Dropdown */}
                        <div className="flex flex-col w-full">
                            <label htmlFor="country" className="font-medium text-gray-700">
                                Country
                            </label>
                            <select
                                id="country"
                                required
                                className="w-full p-4 border rounded-md text-gray-800 shadow-md focus:ring-2 focus:ring-purple-500 transition-all"
                            >
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
                            <label htmlFor="services" className="font-medium text-gray-700">
                                Type of Services
                            </label>
                            <select
                                id="services"
                                required
                                className="w-full p-4 border rounded-md text-gray-800 shadow-md focus:ring-2 focus:ring-purple-500 transition-all"
                            >
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
                            <label htmlFor="message" className="font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message here..."
                                rows="4"
                                required
                                className="w-full p-4 border rounded-md text-gray-800 shadow-md focus:ring-2 focus:ring-purple-500 transition-all"
                            ></textarea>
                        </div>

                        <div className="col-span-1 md:col-span-2 flex items-center">
                            <input type="checkbox" id="marketing-emails" className="mr-2" />
                            <label htmlFor="marketing-emails" className="text-gray-600">
                                Opt in to receive marketing emails
                            </label>
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <button className="w-full bg-[
#1e4272] text-white p-3 rounded-lg font-semibold hover:bg-purple-900 transition">
                                Submit
                            </button>
                        </div>

                        <p className="text-xs text-gray-500 mt-2 text-center col-span-1 md:col-span-2">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a href="#" className="text-blue-500">
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-blue-500">
                                Terms of Service
                            </a>{" "}
                            apply.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default FormsPage;
