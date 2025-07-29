import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../home/Footer";
import Header from "../Header";
import { motion } from "framer-motion";
import MoreAbout from "./moreabout";
import {
    AiOutlineCloud,
    AiOutlineUser,
    AiOutlineTeam,
    AiOutlineTrophy,
} from "react-icons/ai";

const heroImage = "/assets/cds5.jpg";
const consultingImage = "/assets/people2.jpg";

const AboutCloud = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <div className="bg-white text-[#0d1b2a]">
            <Header />

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-8 max-w-3xl mx-auto">
                    

                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                        Driving Digital Transformation
                    </h2>

                    <div className="bg-white p-8 md:p-10 lg:p-12 shadow-xl rounded-2xl border border-gray-100 transition-transform duration-300 hover:shadow-2xl">
                        <p className="text-lg font-medium text-gray-800 leading-relaxed">
                            Headquartered in the United States with a growing presence in the UK,
                            Canada, and Nigeria, <span className="text-blue-700 font-semibold">Cloud Sentrics</span> has successfully trained and supported hundreds of professionals and partnered with businesses on their cloud transformation journeys.
                        </p>

                        <p className="text-base text-gray-600 mt-6 leading-relaxed">
                            Trusted by startups, enterprises, and public sector organizations, we deliver secure, scalable, and efficient cloud solutions. Our clients depend on us for not only <span className="font-semibold text-gray-800">world-class training</span> but also <span className="font-semibold text-gray-800">expert cloud migration and resilience consulting</span>.
                        </p>
                    </div>
                </div>


                <div>
                    <img
                        src={heroImage}
                        alt="Hero"
                        className="rounded-xl shadow-lg object-cover w-full h-[400px]"
                    />
                </div>
            </section>

            {/* More About Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-100">
                <MoreAbout />
            </section>

            {/* Mission & Services */}
            <section className="px-4 sm:px-6 lg:px-8 py-14 bg-gray-100">
                <div className="container mx-auto grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white shadow-lg rounded-xl p-8"
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            Mission Statement – Cloud Sentrics
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            At Cloud Sentrics, our mission is to empower individuals and
                            businesses with the skills, knowledge, and solutions needed to
                            excel in the ever-evolving world of Cloud Security, DevSecOps,
                            and Cloud Engineering.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Through cutting-edge training, hands-on experience, and
                            industry-driven expertise, we bridge the gap between learning and
                            real-world application.
                        </p>
                        <img
                            src={consultingImage}
                            alt="Consulting"
                            className="rounded-lg mt-6 w-full h-[280px] object-cover"
                        />
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white shadow-lg rounded-xl p-8"
                    >
                        <h3 className="text-2xl font-bold text-center mb-4">Our Services</h3>
                        <p className="text-center text-gray-700 mb-8">
                            Beyond training, Cloud Sentrics partners with businesses to
                            optimize cloud operations.
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Cloud Migration",
                                    description: "Transition workloads to AWS smoothly.",
                                },
                                {
                                    title: "Cloud Security",
                                    description:
                                        "Ensure top-tier protection for your cloud infrastructure.",
                                },
                                {
                                    title: "DevSecOps",
                                    description: "Automate security within CI/CD pipelines.",
                                },
                                {
                                    title: "Infrastructure as Code",
                                    description: "Build scalable cloud solutions.",
                                },
                                {
                                    title: "Staff Augmentation",
                                    description: "Hire skilled cloud professionals.",
                                },
                            ].map((service, i) => (
                                <div
                                    key={i}
                                    className="flex items-start bg-gray-50 p-4 rounded-md shadow hover:shadow-md transition"
                                >
                                    <span className="text-blue-600 text-xl mr-3 mt-1">✅</span>
                                    <p>
                                        <strong>{service.title}</strong> – {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How We Get You to Competence */}
            <section className="bg-[#1e4272] text-white py-16 px-4 lg:px-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
                        How We Get Your Business to Cloud Competence
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: <AiOutlineCloud />,
                                title: "Tailored Cloud Solutions",
                                desc: "Customized architectures aligned to your business needs.",
                            },
                            {
                                icon: <AiOutlineUser />,
                                title: "Expert-Led Implementation",
                                desc: "Secure, scalable deployment by certified engineers.",
                            },
                            {
                                icon: <AiOutlineTeam />,
                                title: "Collaborative Training",
                                desc: "Empower teams with hands-on, job-ready cloud skills.",
                            },
                            {
                                icon: <AiOutlineTrophy />,
                                title: "Ongoing Support & Optimization",
                                desc: "Post-deployment support to keep systems at peak.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className="bg-[#1e4272] bg-opacity-70 p-6 rounded-xl text-center hover:bg-opacity-90 transition"
                            >
                                <div className="bg-yellow-400 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 text-black text-2xl">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutCloud;
