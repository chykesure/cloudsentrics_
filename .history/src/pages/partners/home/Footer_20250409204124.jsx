import React from 'react';
import { FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
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
                    <p>© {new Date().getFullYear()} All rights reserved | 
                        <Link to="#" className="ml-2 hover:text-blue-600">Privacy Notice</Link> | 
                        <Link to="#" className="ml-2 hover:text-blue-600">Terms & Conditions</Link> | 
                        <Link to="#" className="ml-2 hover:text-blue-600">Website T&Cs</Link> | 
                        <Link to="#" className="ml-2 hover:text-blue-600">Cookies Policy</Link> | 
                        <Link to="#" className="ml-2 hover:text-blue-600">Sitemap</Link> | 
                        <Link to="#" className="ml-2 hover:text-blue-600">Learn more</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
