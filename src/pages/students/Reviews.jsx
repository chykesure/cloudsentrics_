import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Thomas Idowu Lawrence",
    role: "Former Student",
    message:
      "CloudSentrics didn’t just teach me cloud engineering it empowered me. Through expert-led training and hands-on experience, I gained not only technical mastery but also the confidence to apply it in real-world scenarios. What once felt complex is now second nature, and I approach cloud solutions with precision and clarity. This program has been a career-defining experience, equipping me to excel in any cloud engineering role. For anyone seeking not just knowledge, but confidence and expertise, Cloud Sentrics is the ultimate choice.",
  },
  {
    name: "Leslie E. Tetteh",
    role: "Former Student",
    message:
      "CloudSentrics enhanced my entire knowledge base the tech. The lectures simulates real life scenarios, which helped me better comprehend how to navigate AWS resources. Overall, the tutor did an amazing job in thoroughly addressing all of my major concerns, providing me the comfort I need to succeed in the cloud security space.",
  },
];

const TestimonialPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative flex flex-col items-center text-center py-10 sm:py-16 px-4 sm:px-6 md:px-16 
                bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 min-h-[60vh] sm:min-h-[80vh] z-10">

      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/your-background-image.jpg')] bg-cover bg-center opacity-20 z-0"></div>


      {/* Heading */}
      <h2 className="relative z-10 text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-10 sm:mb-12">
        Testimonial
      </h2>

      {/* Testimonial Card with Glassmorphism Effect */}
      <div className="relative z-10 w-full max-w-4xl bg-white/40 backdrop-blur-lg rounded-2xl 
                      shadow-xl border border-gray-300 p-12 flex flex-col items-center gap-8">

        {/* Testimonial Content */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic font-medium mb-6 leading-relaxed">
          "{testimonials[current].message}"
        </p>

        {/* Centered Name and Role */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            {testimonials[current].name}
          </h3>
          <p className="text-xl md:text-2xl text-gray-500 font-medium">
            {testimonials[current].role}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full max-w-xs mt-6">
          <button
            onClick={prevTestimonial}
            className="bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-blue-600 text-white p-4 rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
