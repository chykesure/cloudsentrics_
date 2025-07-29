import React, { useState } from "react";
import Headers from "../Header"; // Ensure Header is included
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import FooterPage from "../../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const course1 = "/assets/course1.jpg";
const course4 = "/assets/course4.jpg";
const course5 = "/assets/course5.jpg";
const AWSCOURSE = "/assets/blogs.jpg";

const sign = "/assets/signature.jpg";
const mas = "/assets/cds3.jpg";

// Import your images
const courseImages = [
    { id: "01", title: "A cloud engineer looking to deepen your AWS security knowledge.", image: course5 },
    { id: "02", title: "A security professional who want to master AWS best practices.", image: course1 },
    { id: "03", title: "Someone with no IT background but eager to break into cloud security.", image: course4 },
];


const sliderSettings = {
    dots: false,            // Hide bottom dots
    infinite: true,         // Loop slides infinitely
    speed: 700,            // Transition speed
    slidesToShow: 3,        // Show 3 slides at once
    slidesToScroll: 1,      // Scroll 1 slide at a time
    autoplay: true,         // Auto-scroll
    autoplaySpeed: 3000,    // 3 seconds per slide
    arrows: true,          // Show left/right arrows
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }
    ]
};


const blog = [
    { id: 1, title: "Types Of Cloud Services", date: "Aug 31, 2023", category: "Technology", content: "Cloud services come in different models: IaaS, PaaS, and SaaS..." },
    { id: 2, title: "The Cloud Awakening: From IT Chaos to Clarity", date: "Aug 31, 2023", category: "Technology", content: "Many businesses struggle with cloud adoption due to complexity..." },
    { id: 3, title: "Introduction to DevSecOps", date: "Aug 31, 2023", category: "Technology", content: "DevSecOps integrates development and operations to streamline software delivery..." },
    { id: 4, title: "Blog Post New 3", date: "Aug 31, 2023", category: "Technology", content: "This is the full content for Blog Post New 3..." },
    { id: 5, title: "Blog Post New 2", date: "Aug 31, 2023", category: "Technology", content: "Here we discuss new trends in cloud computing and DevSecOps..." },
    { id: 6, title: "What is Cloud Computing", date: "Aug 31, 2023", category: "Technology", content: "Cloud computing provides scalable computing power over the internet..." }
];



const Blogs = () => {

    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open modal with selected blog
    const openModal = (blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setSelectedBlog(null);
        setIsModalOpen(false);
    };


    return (
        <div className="min-h-screen bg-gray-50">
            <Headers />

            {/* Hero Section */}
            <div
                className="relative w-full h-auto min-h-[35vh] bg-no-repeat bg-cover bg-center before:absolute before:inset-0 before:bg-blue-900 before:opacity-65"
                style={{
                    backgroundImage: `url(${AWSCOURSE})`, // Replace with an appropriate blog-related image
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-20 lg:px-32 py-16 md:py-24">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6 leading-tight">
                        Explore Insights & Ideas with Our <span className="text-[#ffffff]">Latest Blogs</span>
                    </h3>
                    <p className="mt-6 max-w-6xl text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed">
                        Stay updated with expert opinions, industry trends, and valuable knowledge across various topics.
                        Our blog covers everything from technology to lifestyle, bringing fresh perspectives straight to you.
                    </p>
                    {/* <button className="mt-8 bg-[#1e4272] text-white px-10 py-5 rounded-full text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold 
transition-all duration-300 transform hover:bg-[#18365a] hover:scale-105 shadow-lg animate-bounce">
                        Read Our Blogs
                    </button> */}
                </div>
            </div>




            {/* Main Content Section */}
            <div className="w-full px-6 md:px-20 lg:px-32 py-20">
                <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-100">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">Latest Blog Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {blog.map((blog) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col transition-transform transform hover:scale-105 cursor-pointer"
                                onClick={() => openModal(blog)}
                            >
                                <span className="bg-[#1e4272] text-white text-xs font-bold px-2 py-1 rounded-md inline-block mb-2">
                                    {blog.category}
                                </span>
                                <p className="text-gray-500 text-sm flex items-center gap-1">
                                    📅 {blog.date}
                                </p>
                                <h3 className="text-lg font-semibold text-gray-900 mt-2">{blog.title}</h3>
                                <p className="mt-2 text-gray-600 line-clamp-2">{blog.content.substring(0, 60)}...</p>
                                {/* <a className="mt-4 text-blue-600 font-medium inline-flex items-center">
                                    Read more →
                                </a> */}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Modal for Blog Content */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                        <div className="bg-white p-8 max-w-2xl rounded-lg shadow-lg relative">
                            <button className="absolute top-3 right-3 text-gray-600 text-xl" onClick={closeModal}>&times;</button>
                            <h3 className="text-2xl font-bold text-gray-900">{selectedBlog.title}</h3>
                            <p className="text-gray-500 mt-1">📅 {selectedBlog.date} | 🏷 {selectedBlog.category}</p>
                            <p className="mt-4 text-gray-700">{selectedBlog.content}</p>
                        </div>
                    </div>
                )}
            </div>



            <div className="mb-16"></div>

            {/* Footer Section */}
            <footer className="w-full bg-[#1e4272] text-white py-10 px-6 text-center">

                <FooterPage />

            </footer>
        </div>
    );
};

export default Blogs;
