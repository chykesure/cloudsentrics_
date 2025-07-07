import Headers from "../../students/Header"; // Ensure Header is included
import { AiOutlineCloud, AiOutlineUser, AiOutlineTeam, AiOutlineTrophy } from "react-icons/ai";
import { color, motion } from "framer-motion";
import { FaCloud, FaServer, FaPython, FaUserShield, FaDocker, FaLock, FaNetworkWired, FaRocket, FaWhatsapp } from "react-icons/fa";
import FooterPage from "../../Footer";
import React, { useState, useRef } from 'react';
import Teams from "./Teams";

const consultingImage = "/assets/sentrics3.jpg";
const aboutImage = "/assets/cds1.jpg";
const mas = "/assets/cds3.jpg";
const founderImg = "/assets/sentrics4.jpg";
const JoinImg = "/assets/people2.jpg";



const facultyMembers = [
    { name: "OLUWADAMILARE ODO", title: "Senior Cloud Security Engineer/Instructor", icon: <FaCloud size={50} className="text-white-500" /> },
    { name: "Mustapha Ibrahim Sunusi", title: "Administrator", icon: <FaServer size={50} className="text-white-500" /> },
    { name: "Emmanuel Odo", title: "Cloud Sales Engineer
", icon: <FaServer size={50} className="text-white-500" /> },
    /* { name: "TOSIN ADEDOGUN", title: "Python and Linux Instructor", icon: <FaPython size={50} className="text-white-500" /> },
    { name: "OMOLARA ADISA", title: "IAM Instructor", icon: <FaLock size={50} className="text-white-500" /> },
    { name: "IJEOMA ATUCHUKWU", title: "Security Instructor", icon: <FaUserShield size={50} className="text-white-500" /> },
    { name: "DAMILARE ADEDOGUN", title: "Docker Instructor", icon: <FaDocker size={50} className="text-white-600" /> },
    { name: "OLUMUYIWA KOLAYEMI", title: "High Availability Instructor", icon: <FaNetworkWired size={50} className="text-white-600" /> },
    { name: "CHARLES ADEBAYO", title: "Cloud Engineer", icon: <FaCloud size={50} className="text-white-500" /> }, */
];

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
    "Malaysia", "Maldives", "Mali", "Malta", "Mexico", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
    "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
    "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia",
    "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Tanzania", "Thailand", "Togo", "Tonga", "Tunisia", "Turkey", "Turkmenistan",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
    "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const AboutUs = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true

    };

    const countries = ['Nigeria', 'United States', 'Canada', 'United Kingdom', 'Ghana'];

    const formRef = useRef(); // Initialize formRef using useRef

    const [successMessage, setSuccessMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Show "Submitting" text

        // Collect form data using formRef and formRef.current.elements
        const data = {
            user_name: formRef.current.elements.name.value,
            user_email: formRef.current.elements.email.value,
            user_phone: formRef.current.elements.phone.value,
            user_country: formRef.current.elements.country.value,
        };

        try {
            console.log('Sending data:', data); // Log the data to ensure it's being sent

            const response = await fetch('https://api.cloudsentrics.org/api/getintouch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            console.log(result); // Log the response from the server

            if (response.ok) {
                setSuccessMessage(`
                    <div className="mt-6 space-y-2 text-sm pb-4">
                        <p>Your message has been successfully sent! We will get back to you within 24 hours.</p>
                        <p>If you need immediate assistance, please contact us at <a href="mailto:info@cloudsentrics.org" className="underline">info@cloudsentrics.org</a>.</p>
                        <p className="italic text-gray-400">Thank you for reaching out to Cloud Sentrics!</p>
                    </div>
                `);
                setIsSuccess(true); // Set success state to true
            } else {
                setErrorMessage('❌ Failed to submit the enquiry. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred while submitting the form.');
        } finally {
            setIsSubmitting(false); // Hide "Submitting" text
        }
    };


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div className="min-h-screen bg-gray-50">
            <Headers />

            {/* Hero Section */}
            <div
                className="relative w-full h-auto min-h-[40vh] bg-cover bg-center before:absolute before:inset-0 before:bg-blue-900 before:opacity-85"
                style={{ backgroundImage: `url(${aboutImage})` }}
            >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-20 lg:px-32 py-16 md:py-24">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6 leading-tight">
                        Ready to Excel with <span className="text-[#ffffff]">Cloud Sentrics?</span>
                    </h3>
                    <p className="mt-6 w-full text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed">
                        Cloud Sentrics is a premier training hub for Cloud DevSecOps, Cloud Security, and Cloud Engineering, equipping professionals with industry-relevant skills for career success. Our expert-led programs are designed for all skill levels, providing hands-on experience and certifications that open doors to high-demand roles in the cloud space.
                    </p>
                    <p className="mt-6 w-full text-lg sm:text-xl md:text-2xl lg:text-4xl leading-relaxed">
                        Beyond training, Cloud Sentrics also partners with organizations to deliver customized cloud solutions that drive innovation and efficiency. With deep expertise in cloud technologies and DevSecOps, we offer end-to-end support from consultation to deployment ensuring secure, scalable, and business-aligned cloud environments.
                    </p>
                </div>

            </div>

            {/* Main Content Section */}
            <div className="w-full px-6 md:px-20 lg:px-32 py-20">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Our Mission */}
                    <div className="bg-white shadow-xl rounded-lg p-10 md:p-16 lg:p-20 flex flex-col items-stretch transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <h4 className="text-2xl font-bold text-gray-900">Mission Statement – Cloud Sentrics</h4>
                        <p className="text-gray-700 mt-6 text-lg leading-relaxed">
                            At Cloud Sentrics, our mission is to empower individuals and businesses with the skills,
                            knowledge, and solutions needed to excel in the ever-evolving world of Cloud Security,
                            DevSecOps, and Cloud Engineering. Through cutting-edge training, hands-on experience,
                            and industry-driven expertise, we bridge the gap between learning and real-world application.
                        </p>
                        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
                            We are committed to fostering a global community of cloud professionals, equipping them
                            with job-ready skills, industry certifications, and innovative cloud solutions to drive
                            transformation and success in the digital era.
                        </p>
                        <img
                            src={consultingImage}
                            className="w-full max-w-full h-96 md:h-[350px] lg:h-[500px] xl:h-[500px] object-cover rounded-lg shadow-md mt-6 hover:scale-105 transition-transform duration-300"
                            alt="Our Mission"
                        />
                    </div>


                    {/* Our Services */}
                    <div className="bg-white shadow-xl rounded-lg p-10 md:p-16 lg:p-20 flex flex-col items-stretch transition-all duration-300 hover:shadow-2xl hover:scale-105">
                        <h4 className="text-2xl font-bold text-gray-900 text-left md:text-center">Our Services</h4>
                        <p className="text-gray-700 mt-6 text-lg text-left md:text-center">
                            At Cloud Sentrics, we’re more than just a training platform, we’re your launchpad into a high-paying tech career. Our programs are designed to equip you with the skills that top employers are hiring for today.

                        </p>
                        <div className="grid gap-6 mt-8 text-gray-800 text-lg">
                            {[
                                { title: "Cloud Migration Skills", description: "Learn how to move applications and workloads securely to AWS and Azure." },
                                { title: "Cloud Security Expertise", description: "Master real-world cloud protection strategies to keep infrastructure safe from threats." },
                                { title: "DevSecOps Knowledge", description: "Understand how to automate security inside CI/CD pipelines and streamline secure software delivery." },
                                { title: "Infrastructure as Code (IaC)", description: "Gain hands-on experience using tools like Terraform and AWS CloudFormation to build scalable environments." },
                                { title: "Career Opportunities", description: "Get access to career support, LinkedIn optimization, resume building, and direct referrals to companies hiring cloud talent." },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                                >
                                    <span className="text-blue-600 text-2xl">✅</span>
                                    <p>
                                        <strong>{service.title}</strong> – {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



                <section className="bg-[#1e4272] text-white mt-10 py-16 px-6 sm:py-10 sm:px-4 lg:px-20">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center">How we get you to competence</h2>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[#1e4272] bg-opacity-50 p-8 rounded-lg text-center sm:text-left hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
                        >
                            <div className="bg-yellow-500 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto sm:mx-0 mb-4">
                                <AiOutlineCloud className="text-3xl text-black" />
                            </div>
                            <h3 className="text-2xl font-bold">100% Practical Courses</h3>
                            <p className="mt-3 text-lg">
                                With 100% practical, you'll start building on the Cloud from day one.
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[#1e4272] bg-opacity-50 p-8 rounded-lg text-center sm:text-left hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
                        >
                            <div className="bg-yellow-500 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto sm:mx-0 mb-4">
                                <AiOutlineUser className="text-3xl text-black" />
                            </div>
                            <h3 className="text-2xl font-bold">Live Instructor Guidance</h3>
                            <p className="mt-3 text-lg">
                                Our facilitators will work with you as you build and our workbooks take you step by step in each process.
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[#1e4272] bg-opacity-50 p-8 rounded-lg text-center sm:text-left hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
                        >
                            <div className="bg-yellow-500 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto sm:mx-0 mb-4">
                                <AiOutlineTeam className="text-3xl text-black" />
                            </div>
                            <h3 className="text-2xl font-bold">Group-focused</h3>
                            <p className="mt-3 text-lg">
                                Group learning helps better assimilation, fostering collaboration with colleagues through breakout rooms and class labs.
                            </p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-[#1e4272] bg-opacity-50 p-8 rounded-lg text-center sm:text-left hover:bg-opacity-80 transition-all duration-300 cursor-pointer"
                        >
                            <div className="bg-yellow-500 p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto sm:mx-0 mb-4">
                                <AiOutlineTrophy className="text-3xl text-black" />
                            </div>

                            <h3 className="text-2xl font-bold">Post Training Support</h3>
                            <p className="mt-3 text-lg">
                                After your program, we'll provide you with mock interviews, CV & LinkedIn reviews, and job postings.
                            </p>
                        </motion.div>

                    </div>
                </section>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    className="text-center mt-24 bg-cover bg-center text-white p-16 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-blue-900 animate-[zoomInOut_5s_infinite_alternate] before:absolute before:inset-0 before:bg-blue-900 before:opacity-35"
                    style={{ backgroundImage: `url(${mas})` }}
                >
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">Join Cloud Sentrics Today</h2>
                    <p className="mt-6 text-2xl max-w-4xl mx-auto leading-relaxed">
                        Whether you're an aspiring Cloud Engineer or a business seeking expert cloud solutions,
                        we have the tools and expertise to help you succeed.
                    </p>
                    <div className="flex items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white text-blue-600 px-10 py-5 rounded-full text-xl md:text-2xl font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-transform transform hover:scale-105 shadow-md min-w-[300px] md:min-w-[400px] mt-3"
                        >
                            <FaRocket className="text-2xl" /> Unlock Your Potential Now
                        </motion.button>
                    </div>
                </motion.div>

                {/* Teams */}
                <section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
                    <Teams />
                </section>




                <section className="bg-[#1e4272] text-white py-16 px-6 sm:px-12 lg:px-20 shadow-2xl shadow-gray-900">
                    {/* Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold">
                            Meet our <span className="text-yellow-400">Competent</span> Team Members
                        </h2>
                    </div>

                    {/* Marquee Container */}
                    <div className="overflow-hidden whitespace-nowrap relative w-full">
                        <div className="flex animate-scroll gap-20">
                            {/* Duplicate faculty members for seamless effect */}
                            {[...facultyMembers, ...facultyMembers].map((member, index) => (
                                <div
                                    key={index}
                                    className="text-center flex-shrink-0 flex flex-col items-center transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
                                >
                                    <div className="animate-fade text-6xl">{member.icon}</div> {/* Icon with fade effect */}
                                    <h3 className="text-3xl font-bold mt-3 animate-fade">{member.name}</h3>
                                    <p className="text-2xl text-gray-300">{member.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Tailwind CSS Animation */}
                    <style>
                        {`
                            @keyframes scroll {
                                from { transform: translateX(0); }
                                to { transform: translateX(-50%); } /* Moves only half, avoiding delays */
                            }
                            
                            .animate-scroll {
                                display: flex;
                                width: max-content;
                                animation: scroll 30s linear infinite; /* Increased speed */
                            }
                            
                            @keyframes fade {
                                from { opacity: 0; transform: scale(0.9); }
                                to { opacity: 1; transform: scale(1); }
                            }
                            
                            .animate-fade {
                                animation: fade 1s ease-in-out;
                            }
                        `}
                    </style>
                </section>

                <section className="flex flex-col md:flex-row items-center bg-[#1e4272] text-white p-8 rounded-lg max-w-5xl mx-auto mt-14 shadow-lg">
                    {/* Left Section - Contact Form */}
                    <div className="md:w-1/2 p-8 bg-[#1e2a47] rounded-lg shadow-lg">
                        <h2 className="text-4xl font-extrabold text-white">Get in Touch</h2>
                        <p className="mt-3 text-gray-300 text-lg">We’d love to hear from you!</p>
                        <p className="mt-2 text-gray-400 text-sm">
                            Tell us a bit about yourself, and we’ll reach out within 24 hours.
                        </p>

                        {isSuccess ? (
                            <div
                                className="success-message mt-4 text-green-400"
                                dangerouslySetInnerHTML={{ __html: successMessage }}
                            />
                        ) : (
                            <form onSubmit={handleSubmit} ref={formRef} className="mt-6 space-y-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name*"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-lg bg-[#283d5b] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email*"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-lg bg-[#283d5b] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <select
                                    name="country"
                                    required
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-lg bg-[#283d5b] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                >
                                    <option value="">Select Your Country</option>
                                    {['USA', 'Canada', 'UK', 'India', 'Nigeria'].map((country, index) => (
                                        <option key={index} value={country} className="text-white">
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Your Phone Number*"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-lg bg-[#283d5b] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg w-full transition duration-300 hover:bg-yellow-500"
                                >
                                    {isSubmitting ? "Submitting..." : "Join Now"}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Section - Image */}
                    <div className="md:w-1/2 flex justify-center relative p-4">
                        <img
                            src={JoinImg}
                            alt="Oluwadamilare Odo"
                            className="w-80 md:w-[450px] lg:w-[700px] h-auto md:h-[600px] lg:h-[650px] object-contain md:object-cover rounded-lg border-2 border-gray-300 shadow-2xl"
                        />

                        <div className="absolute bottom-0 w-full flex justify-center p-4">
                            <div className="flex space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-6 h-6 bg-yellow-400 clip-triangle" />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            <div className="mb-16"></div>

            {/* Footer Section */}
            <footer className="w-full bg-[#1e4272] text-white py-10 px-6 text-center">

                <FooterPage />

            </footer>
        </div>
    );
};

export default AboutUs;
