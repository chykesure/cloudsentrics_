import React, { useState } from "react";
import Swal from "sweetalert2";  // Import SweetAlert2

const Join = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show "Submitting" text

    const data = {
      user_name: formData.name,
      user_email: formData.email,
    };

    try {
      console.log('Sending data:', data); // Log the data to ensure it's being sent

      const response = await fetch("https://api.cloudsentrics.org/api/join", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log(result); // Log the response from the server

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been successfully sent! We will get back to you within 24 hours.',
          icon: 'success',
          confirmButtonText: 'Great!',
        });
      } else {
        Swal.fire({
          title: 'Failed!',
          text: '❌ Failed to submit the enquiry. Please try again.',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while submitting the form.',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    } finally {
      setIsSubmitting(false); // Hide "Submitting" text
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="bg-[#1e4272] text-white py-16 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between 
        rounded-lg max-w-7xl mx-auto shadow-2xl transition-all duration-500 ease-in-out 
        hover:scale-105 relative animate-floating"
      style={{
        animation: "float 3s ease-in-out infinite",
        boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Join our <span className="text-yellow-300">Community</span>
        </h2>
        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          Be part of a supportive network and unlock exclusive opportunities such as:
        </p>
        <ul className="list-disc list-inside text-lg md:text-xl mb-6 space-y-2">
          <li>Free Cloud DevSecOps Webinars.</li>
          <li>Access to Professionals in the Cloud DevSecOps Space.</li>
          <li>Real-World DevSecOps Skills Training.</li>
        </ul>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name*"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black bg-gray-100 border-2 border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
          />
          <input
            type="email"
            placeholder="Your Email*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg text-black bg-gray-100 border-2 border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition-all outline-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="mt-6 bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-yellow-500 transition-all w-full md:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Join"}
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <img
          src="/assets/comu4.jpg"
          alt="Happy Student"
          className="rounded-lg w-full h-[500px] max-w-sm md:max-w-md shadow-xl transition-all duration-500 ease-in-out hover:scale-110 object-cover"
        />
      </div>

      {/* Floating Animation (Inline) */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
};

export default Join;
