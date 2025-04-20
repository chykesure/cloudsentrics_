import React, { useState } from 'react';
import FooterModal from './FooterModal'; // import the modal here
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";
import {
    privacyText,
    termsText,
    sitemapText,
    cookiesText,
    antiSlaveryText
  } from './footerText';
  

const app1 = "/assets/apple.png"; // Replace with actual paths
const app2 = "/assets/google.png";

function FooterPage() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setModalOpen(true);
    };
    return (
        <footer className="bg-[#1e4272] text-white py-12 text-center">
            <div className="max-w-full mx-auto px-8 sm:px-14 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-left">

                    {/* Cloudsentrics Section */}
                    <div className="md:col-span-1 lg:col-span-2 max-w-lg">
                        <h3 className="text-2xl font-bold">Cloudsentrics</h3>
                        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                            Cloud Sentrics is the ultimate launchpad for your career in Cloud DevSecOps designed for everyone, regardless of your tech background. Whether you're new to IT or looking to upskill, our expert-led training equips you with the hands-on experience and industry certifications needed to thrive in the cloud.
                        </p>
                        <div className="flex justify-center md:justify-start mt-6 space-x-4">
                            {[
                                { link: "https://web.facebook.com/profile.php?id=61552271205091", icon: <FaFacebookF /> },
                                { link: "https://www.instagram.com/cloudsentrics/", icon: <FaInstagram /> },
                                { link: "https://x.com/CloudSentrics", icon: <FaTwitter /> },
                                { link: "https://youtube.com/@cloudsentrics?si=_G3I4N3VLSrfjDl5", icon: <FaYoutube /> },
                                { link: "https://www.linkedin.com/posts/cloud-sentrics_cloud-sentrics-linkedin-activity-7291379079860117505-ve54?utm_source=share&utm_medium=member_android", icon: <FaLinkedin /> },
                            ].map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-lg 
                transition-transform duration-300 transform hover:bg-white hover:text-[#1e4272] 
                hover:scale-110 hover:rotate-6 hover:shadow-lg">
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>



                    {/* Footer Sections */}
                    {[
                        {
                            title: "Useful Links",
                            links: [
                                { label: "Home", path: "/" },
                                { label: "About Us", path: "/about" },
                                { label: "Blog", path: "/blog" },
                                { label: "Events", path: "/events" }
                            ]
                        }
                    ].map((section, index) => (
                        <div key={index}>
                            <h4 className="text-xl font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-3 text-lg text-gray-300">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link to={link.path} className="hover:text-white">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}


                    {/* App Download Section */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-4">Get the Cloudsentrics App</h4>
                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <Link to="#" className="w-44 block">
                                <img src={app1} alt="App Store" className="w-full" />
                            </Link>
                            <Link to="#" className="w-44 block">
                                <img src={app2} alt="Google Play" className="w-full" />
                            </Link>
                        </div>
                    </div>

                    {/* Contact & Support Section */}
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-4">Contact & Support</h4>
                        <div className="space-y-3 text-lg text-gray-300 flex flex-col items-center md:items-start">
                            {[
                                { Icon: FaMapMarkerAlt, text: "3354 Rogerdale Rd, , Houston, TX, United States, Texas" },
                                { Icon: FaPhone, text: "+1 346-399-8985" },
                                { Icon: FaEnvelope, text: "info@cloudsentrics.org  " }
                            ].map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <item.Icon className="text-white text-xl" />
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                {/* Footer Bottom */}
                <div className="border-t border-gray-500 mt-8 pt-5 text-center text-lg text-gray-300">
                    <p>© {new Date().getFullYear()} Cloudsentrics. All rights reserved.</p>
                    <div className="flex justify-center space-x-5 mt-3">
                        <button
                            onClick={() => openModal("Terms & Conditions", `By accessing and using Cloud Sentrics...`)}
                            className="hover:text-white"
                        >
                            Terms & Conditions
                        </button>
                        <span className="text-gray-400">|</span>
                        <button
                            onClick={() => openModal("Privacy Policy", `At Cloud Sentrics, we value your privacy...`)}
                            className="hover:text-white"
                        >
                            Privacy Policy
                        </button>
                        <span className="text-gray-400">|</span>
                        <button
                            onClick={() => openModal("Site Map", `Easily navigate through our website...`)}
                            className="hover:text-white"
                        >
                            Sitemap
                        </button>
                    </div>
                </div>

                <FooterModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title={modalTitle}
                    content={modalContent}
                />

            </div>
        </footer>
    );
}

export default FooterPage;
