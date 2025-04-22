import React, { useState } from 'react';
import { FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import FooterModal from './FooterModal'; // import your modal

const modalContent = {
  "Privacy Notice": `At Cloud Sentrics, we value your privacy and are committed to protecting your personal data...
(Include full content here)`,
  "Terms & Conditions": `By accessing and using Cloud Sentrics, you agree to abide by our terms and conditions...
(Include full content here)`,
  "Website T&Cs": `These T&Cs govern your use of the Cloud Sentrics website...
(Include full content here)`,
  "Cookies Policy": `Cloud Sentrics uses cookies to enhance user experience and analyze website traffic...
(Include full content here)`,
  "Sitemap": `Easily navigate through our website with the following sections:\n1. Home\n2. About Us\n...`,
  "Learn more": `Cloud Sentrics is committed to upholding human rights and ensuring ethical labor practices...
(Include full content here)`
};

function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (title) => {
    setActiveModal({ title, content: modalContent[title] });
  };

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="bg-white text-black py-6 border-t border-gray-300 text-sm w-full">
      <div className="w-full px-6 lg:px-12">
        {/* Main Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h3 className="font-bold text-lg text-blue-900">Powering Cloud-Integrated Digital Transformation</h3>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/posts/cloud-sentrics_cloud-sentrics-linkedin-activity-7291379079860117505-ve54?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <FaLinkedin size={20} />
            </a>
            <a href="https://x.com/CloudSentrics" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <FaXTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/cloudsentrics/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} All rights reserved |
            {Object.keys(modalContent).map((item, index) => (
              <button
                key={index}
                onClick={() => openModal(item)}
                className="ml-2 text-blue-600 hover:underline"
              >
                {item}
              </button>
            ))}
          </p>
        </div>
      </div>

      {activeModal && (
        <FooterModal
          title={activeModal.title}
          content={activeModal.content}
          onClose={closeModal}
        />
      )}
    </footer>
  );
}

export default Footer;
