import React, { useState } from "react";
import EnrollModal from "./"; // adjust path if necessary

const ShortMessage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full bg-[#0f172a] text-white py-16 px-6 md:px-12 flex justify-center items-center text-center overflow-hidden">
      {/* Background Overlay with Zoom-in Zoom-out Effect */}
      <div className="absolute inset-0 bg-[url('/assets/cds1.jpg')] bg-cover bg-center opacity-40 animate-[bgZoom_10s_ease-in-out_infinite]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          🚀 Super Early Bird Offer – Limited Time Only!
        </h2>
        <p className="text-lg md:text-2xl font-medium leading-relaxed">
          Unlock your future with an exclusive 25% discount on the next cohort registration!  
          Don’t miss this opportunity to learn from industry experts, gain hands-on experience,  
          and take your skills to the next level. Offer expires soon!
        </p>

        {/* Enroll Button */}
        <button
          onClick={handleOpenModal}
          className="mt-6 bg-white text-black font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-300"
        >
          ENROLL NOW
        </button>
      </div>

      {/* Enroll Modal */}
      <EnrollModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Keyframes for Zoom-in Zoom-out Background */}
      <style>
        {`
          @keyframes bgZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default ShortMessage;
