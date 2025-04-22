import React from "react";

const FooterModal = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
        <button
          className="absolute top-2 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="text-sm text-gray-700 whitespace-pre-line">{content}</div>
      </div>
    </div>
  );
};

export default FooterModal;
