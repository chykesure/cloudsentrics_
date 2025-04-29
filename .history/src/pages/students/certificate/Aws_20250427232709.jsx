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
        <div className="p-8 bg-white relative">
            <h2 className="relative z-10 text-5xl md:text-6xl font-extrabold text-gray-900 mb-12">
                Testimonial
            </h2>
            p
            <div className="marquee-container">
                <div className="animate-scroll">
                    {Object.values(badges).flat().map((badge, idx) => (
                        <div key={idx} className="badge-item animate-fade">
                            <img
                                src={badge.img}
                                alt={badge.title}
                                className="w-28 h-28 object-cover clip-badge shadow-lg"
                            />
                            <span className="text-xs mt-2 text-center">{badge.title}</span>
                        </div>
                    ))}
                    {/* Repeat badges again to ensure smooth looping */}
                    {Object.values(badges).flat().map((badge, idx) => (
                        <div key={idx + 1000} className="badge-item animate-fade">
                            <img
                                src={badge.img}
                                alt={badge.title}
                                className="w-28 h-28 object-cover clip-badge shadow-lg"
                            />
                            <span className="text-xs mt-2 text-center">{badge.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AwsCertification;
