import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    industry: "",
    email: "",
    phone: "",
    message: "How can we help?",
    file: null,
    marketingEmails: false,
    keepDetails: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const form = e.target;

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

      setIsProcessing(false);
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Something went wrong: ${error.message}`,
        confirmButtonText: 'Try Again',
      });

      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 flex items-center justify-center p-6 text-black">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-6xl grid grid-cols-1 md:grid-cols-3">
        {/* Left Section - Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 p-10 bg-white space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Contact our recruitment team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                First name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Last name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Company name *
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Right Sidebar Content moved inside form for form submission */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Upload your CV
            </label>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full text-sm text-gray-700"
            />
          </div>

          <div className="space-y-3">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="marketingEmails"
                checked={formData.marketingEmails}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-sm text-gray-600">
                I’d like to receive marketing emails.
              </span>
            </label>

            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="keepDetails"
                checked={formData.keepDetails}
                onChange={handleChange}
                className="mt-1"
              />
              <span className="text-sm text-gray-600">
                Keep my details on file for future roles.
              </span>
            </label>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full bg-purple-800 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 ${isProcessing ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {isProcessing ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
