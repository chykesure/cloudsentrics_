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
      const response = await fetch("https://api.cloudsentrics.org/api/career", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Application sent successfully!",
          text: "We’ve received your application and will get back to you shortly.",
          confirmButtonText: "Awesome!",
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
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error.message,
        confirmButtonText: "Try Again",
      });
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
        Contact Our Recruitment Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="companyName">
          Company Name
        </label>
        <input
          id="companyName"
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="industry">
          Industry
        </label>
        <input
          id="industry"
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="file">
          Upload Your CV
        </label>
        <input
          id="file"
          type="file"
          name="file"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:text-white file:bg-purple-700 file:hover:bg-purple-600 file:rounded-lg cursor-pointer"
        />
      </div>

      <div className="space-y-2">
        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            name="marketingEmails"
            checked={formData.marketingEmails}
            onChange={handleChange}
          />
          <span>I’d like to receive marketing emails.</span>
        </label>

        <label className="flex items-start gap-2 text-sm">
          <input
            type="checkbox"
            name="keepDetails"
            checked={formData.keepDetails}
            onChange={handleChange}
          />
          <span>Keep my details on file for future roles.</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className={`w-full bg-purple-800 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 ${
          isProcessing ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {isProcessing ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default CareerForm;
