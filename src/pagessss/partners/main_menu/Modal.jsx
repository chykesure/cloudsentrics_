import React from "react";

const Modal = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
        <img src={article.image} alt={article.title} className="w-full h-60 object-cover mb-4 rounded-md" />
        <div className="text-sm text-gray-800 whitespace-pre-line">
          {article.content || "Detailed article content goes here..."}
        </div>
      </div>
    </div>
  );
};

export default Modal;
