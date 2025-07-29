import React, { useState} from "react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import CaseArticles from "./casestudyarticles";

const logo = "/assets/logo.jpg";
const aibg = "/assets/ai.jpg";

const CaseStudy = () => {

    // State for mobile menu
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
   
    return (
        <div className="min-h-screen bg-[#0d1b2a] text-white">
            {/* Header Section */}
            

            {/* Hero Section */}
            <Header />

            <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                <CaseArticles />
            </section>

            {/* Footer Section */}
            <section className="px-0 sm:px-0 md:px-0 lg:px-0 py-8 bg-gray-100 w-full">
                <Footer />
            </section>

        </div>
    );
};

export default CaseStudy;
