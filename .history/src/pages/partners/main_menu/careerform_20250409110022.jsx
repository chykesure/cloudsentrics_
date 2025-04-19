import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add actual submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl grid md:grid-cols-3 gap-8"
      >
        {/* Left Side (Form) */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Contact our recruitment team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company name*
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>
        </div>

        {/* Right Side (CV + Options) */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload your CV
            </label>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500"
            />
          </div>

          <div className="mt-4 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="marketingEmails"
                checked={formData.marketingEmails}
                onChange={handleChange}
                className="mr-2"
              />
              Opt in to receive marketing emails
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="keepDetails"
                checked={formData.keepDetails}
                onChange={handleChange}
                className="mr-2"
              />
              Opt in to keep your details on file
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-3 flex justify-end">
          <button
            type="submit"
            className="bg-purple-800 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
