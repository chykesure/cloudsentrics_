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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div>
          <img src={forz} alt="Banner" className="w-full h-80 object-cover rounded-lg" />
          <div className="bg-white p-6 mt-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold">Empowering Your Business</h2>
            <p className="mt-4">Cloud Sentrics delivers cutting-edge AI and cloud-driven solutions...</p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6">Contact Us for a Consultation</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Text Inputs */}
            {[
              { id: 'first_name', label: 'First Name' },
              { id: 'last_name', label: 'Last Name' },
              { id: 'company', label: 'Company' },
              { id: 'industry', label: 'Industry' },
              { id: 'email', label: 'Email', type: 'email' },
              { id: 'phone', label: 'Phone', type: 'tel' },
            ].map(({ id, label, type = 'text' }) => (
              <div key={id} className="flex flex-col">
                <label htmlFor={id}>{label}</label>
                <input type={type} name={id} id={id} required className="p-3 border rounded" />
              </div>
            ))}

            {/* Country Select */}
            <div className="flex flex-col col-span-1">
              <label htmlFor="country">Country</label>
              <select name="country" id="country" required className="p-3 border rounded">
                <option value="">Select a Country</option>
                {countries.map(c => (
                  <option key={c.cca2} value={c.name.common}>{c.name.common}</option>
                ))}
              </select>
            </div>

            {/* Services Select */}
            <div className="flex flex-col col-span-1">
              <label htmlFor="services">Type of Services</label>
              <select name="services" id="services" required className="p-3 border rounded">
                <option value="">Select a Service</option>
                <option value="IT Consultancy">IT Consultancy</option>
                <option value="Cloud Migration">Cloud Migration</option>
                <option value="Other Services">Other Services</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required rows="4" className="p-3 border rounded w-full"></textarea>
            </div>

            {/* Marketing Checkbox */}
            <div className="col-span-1 md:col-span-2 flex items-center">
              <input type="checkbox" id="marketing" name="marketing" className="mr-2" />
              <label htmlFor="marketing">Opt-in to receive marketing emails</label>
            </div>

            <div className="col-span-2">
              <button type="submit" disabled={isProcessing} className="w-full bg-blue-700 text-white p-4 rounded">
                {isProcessing ? 'Processing...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormsPage;
