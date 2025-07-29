import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import SearchArticles from "./search";
import ContactForm from "./contactother";
import ContactMap from "./contactmap";
import React, { useState} from "react";

const logo = "/assets/logo.jpg";
const heroImage = "/assets/contact.jpg";

const ContactUs = () => {

    // State for mobile menu
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
   

    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Header Section */}
            

            {/* Hero Section */}
            <Header />

            <section className="container mx-auto flex flex-col md:flex-row gap-6 px-4 py-10">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <div>
                        <p className="text-3xl text-gray-600 font-semibold">Contact Us</p>
                        <h2 className="text-3xl font-bold border-l-4 border-blue-700 pl-4 mt-2">
                            Get In Touch with <br />Cloud Sentrics Integration
                        </h2>
                    </div>

                    <div className="bg-white p-6 shadow rounded-xl space-y-4">
                        <p className="text-lg font-semibold text-gray-800">
                            Headquartered in the U.S and with offices and operations across the globe, we work with local and international customers to streamline every aspect of their IT management strategies to maximise efficiencies and increase their ROI, year on year.
                        </p>
                        <p className="font-semibold text-gray-800">
                            Head-quartered in the U.S and employing over 1000 people across the globe.
                        </p>
                        <p className="text-sm text-gray-700">
                            We are trusted by many global Fin-techs, Telco’s, and government and public sector organisations. Our customers depend on us to ensure their IT services and infrastructure are always available, scalable, sustainable, and resilient.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1">
                    <div className="w-full h-full max-h-[500px] overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={heroImage}
                            alt="Skyscraper"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>


            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <ContactForm />
            </section>


            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <ContactMap />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>

        </div>
    );
};

export default ContactUs;
