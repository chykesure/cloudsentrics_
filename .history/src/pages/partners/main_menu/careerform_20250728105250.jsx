import React, { useState } from "react";
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

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('https://api.cloudsentrics.org/api/career', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Application sent successfully!',
          text: 'We’ve received your application and will get back to you shortly.',
          confirmButtonText: 'Awesome!',
        });

        setFormData({
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

        e.target.reset();
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
        confirmButtonText: 'Try Again',
      });
    }

    setIsProcessing(false);
  };

  return (bg-white text-gray-800 px-4 md:px-12 py-12 space-y-20
    <div className="bg-[#f9fafb] px-4 md:px-8 py-10 text-black">
      <div className="bg-white shadow-lg rounded-xl max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        {/* Form section */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 p-8 space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

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
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="marketingEmails"
                checked={formData.marketingEmails}
                onChange={handleChange}
              />
              <span className="text-sm text-gray-600">
                I’d like to receive marketing emails.
              </span>
            </label>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="keepDetails"
                checked={formData.keepDetails}
                onChange={handleChange}
              />
              <span className="text-sm text-gray-600">
                Keep my details on file for future roles.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className={`w-full bg-purple-800 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 ${isProcessing ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {isProcessing ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
