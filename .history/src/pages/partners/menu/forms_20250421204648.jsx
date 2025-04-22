import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
    
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
    
        try {
          const response = await fetch("http://localhost:5000/api/form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
          });
    
          const result = await response.json();
          console.log("Backend response:", result);
    
          if (result.success) {
            Swal.fire({
              icon: 'success',
              title: 'Form submitted successfully!',
              text: result.message,
            });
            e.target.reset();
          } else {
            throw new Error(result.message);
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error submitting form',
            text: error.message,
          });
        }
    
        setIsProcessing(false);
      };

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

                <div className="bg-white p-10 shadow-xl rounded-lg text-black w-full">
                    <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 text-center">
                        CONTACT US FOR A CONSULTATION
                    </h3>
                    <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 col-span-3" onSubmit={handleSubmit}>
                        {[
                            { id: 'first-name', label: 'First Name', type: 'text', name: 'first_name' },
                            { id: 'last-name', label: 'Last Name', type: 'text', name: 'last_name' },
                            { id: 'company', label: 'Company', type: 'text', name: 'company' },
                            { id: 'industry', label: 'Industry', type: 'text', name: 'industry' },
                            { id: 'email', label: 'Email', type: 'email', name: 'email' },
                            { id: 'phone', label: 'Phone Number', type: 'tel', name: 'phone' },
                        ].map(({ id, label, type, name }) => (
                            <div key={id} className="flex flex-col w-full">
                                <label htmlFor={id} className="font-medium text-gray-700">
                                    {label}
                                </label>
                                <input
                                    id={id}
                                    name={name}
                                    type={type}
                                    placeholder={label}
                                    required
                                    className="w-full p-4 border rounded-md text-gray-800 shadow-md focus:ring-2 focus:ring-purple-500 transition-all"
                                />
                            </div>
                        ))}

                        <div className="flex flex-col w-full">
                            <label htmlFor="country" className="font-medium text-gray-700">Country</label>
                            <select
                                id="country"
                                name="country"
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
                            <label htmlFor="services" className="font-medium text-gray-700">Type of Services</label>
                            <select
                                id="services"
                                name="services"
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
                            <label htmlFor="message" className="font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here..."
                                rows="4"
                                required
                                className="w-full p-4 border rounded-md text-gray-800 shadow-md focus:ring-2 focus:ring-purple-500 transition-all"
                            ></textarea>
                        </div>

                        <div className="col-span-1 md:col-span-2 flex items-center">
                            <input type="checkbox" id="marketing-emails" name="marketing" className="mr-2" />
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
        </section>
    );
};

export default FormsPage;
