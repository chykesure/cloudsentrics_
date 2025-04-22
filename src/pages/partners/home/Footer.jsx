import React, { useState } from 'react';
import { FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import FooterModal from './FooterModal'; // Ensure this file exists in the same folder

const modalContent = {
  "Privacy Notice": `At Cloud Sentrics, we value your privacy and are committed to protecting your personal data. This Privacy Notice explains how we collect, use, and safeguard your information when you interact with our website and services.

What Information We Collect:
• Personal details (name, email, phone number) when you register or contact us.
• Payment details for transactions.
• Technical data (IP address, browser type, cookies).

How We Use Your Data:
• To provide and improve our services.
• For customer support and communication.
• To personalize your experience.
• To comply with legal and regulatory requirements.

Your Rights:
• Access, correct, or delete your data.
• Opt-out of marketing communications.
• Request a copy of your stored information.

For full details, refer to our Privacy Policy.`,

  "Terms & Conditions": `By accessing and using Cloud Sentrics, you agree to abide by our terms and conditions.

User Responsibilities:
• Use our platform for lawful purposes only.
• Do not engage in fraudulent or harmful activities.
• Maintain confidentiality of your account details.

Intellectual Property:
• All content and materials belong to Cloud Sentrics.
• You may not copy, reproduce, or distribute without permission.

Service Availability:
• We strive to provide 24/7 access but do not guarantee uninterrupted service.

Failure to comply with these terms may result in termination of access.`,

  "Website T&Cs": `These T&Cs govern your use of the Cloud Sentrics website.

Acceptance of Terms:
By using our website, you agree to these conditions. If you do not accept them, please refrain from using our site.

Use of Content:
• The content is for informational purposes only.
• You may not use, modify, or republish content without written permission.

Limitation of Liability:
Cloud Sentrics is not responsible for any loss or damages arising from website use.`,

  "Cookies Policy": `Cloud Sentrics uses cookies to enhance user experience and analyze website traffic.

What Are Cookies?
Cookies are small files stored on your device to remember user preferences.

How We Use Cookies:
• To improve website functionality.
• To analyze user behavior.
• To personalize content and advertisements.

Managing Cookies:
You can accept or decline cookies through your browser settings. However, disabling cookies may affect website performance.`,

  "Sitemap": `Easily navigate through our website with the following sections:
1. Home
2. About Us
3. Courses & Training
4. Pricing
5. Testimonials
6. Blog & Resources
7. Privacy Policy
8. Contact Us`,

  "Learn more": `Cloud Sentrics is committed to upholding human rights and ensuring ethical labor practices across our business operations.

Our Commitment:
• We do not engage in or support forced labor or human trafficking.
• We conduct due diligence on suppliers and partners.
• We provide ethical training to employees and stakeholders.

If you suspect any violations, please report them via our contact channels.`,
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
          <h3 className="font-bold text-lg text-blue-900">
            Powering Cloud-Integrated Digital Transformation
          </h3>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/posts/cloud-sentrics_cloud-sentrics-linkedin-activity-7291379079860117505-ve54?utm_source=share&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/CloudSentrics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/cloudsentrics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} All rights reserved
            {Object.keys(modalContent).map((item, index) => (
              <span key={index}>
                <span className="mx-2 text-gray-400">|</span>
                <button
                  onClick={() => openModal(item)}
                  className="text-blue-600 hover:underline"
                >
                  {item}
                </button>
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Modal */}
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
