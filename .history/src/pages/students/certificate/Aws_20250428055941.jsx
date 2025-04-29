import React from 'react';
import './AwsCertification.css';  // Ensure you import the CSS here

const badges = {
    foundational: [
        { title: '', img: "/assets/AW1.png" },
        { title: '', img: "/assets/AW2.png" },
    ],
    associate: [
        { title: '', img: "/assets/AW3.png" },
        { title: '', img: "/assets/AW4.png" },
        { title: '', img: "/assets/AW5.png" },
        { title: '', img: "/assets/AW6.png" },
        { title: '', img: "/assets/AW7.png" },
    ],
    professional: [
        { title: '', img: "/assets/AW8.png" },
        { title: '', img: "/assets/AW9.png" },
    ],
    specialty: [
        { title: '', img: "/assets/AW10.png" },
        { title: '', img: "/assets/AW11.png" },
        { title: '', img: "/assets/AW12.png" },
    ],
};

const AwsCertification = () => {
    return (
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
    );
};

export default AwsCertification;
