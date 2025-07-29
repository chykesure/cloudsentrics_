import React from "react";

const FooterModal = ({ isOpen, onClose, content, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
            <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-6 relative text-gray-800">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
                >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <div className="text-left whitespace-pre-wrap text-base leading-relaxed">{content}</div>
            </div>
        </div>
    );
};

export default FooterModal;
