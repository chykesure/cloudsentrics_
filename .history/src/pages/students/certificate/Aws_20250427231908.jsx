import React from 'react';
import './AwsCertification.css';  // Ensure you import the CSS here

const badges = {
    foundational: [
        { title: 'Cloud Practitioner', img: "/assets/AW2.png" },
        { title: 'AI Practitioner', img: "/assets/AW3.png" },
    ],
    associate: [
        { title: 'SysOps Administrator', img: "/assets/AW4.png" },
        { title: 'Developer', img: "/assets/AW5.png" },
        { title: 'Solutions Architect', img: "/assets/AW6.png" },
        { title: 'Data Engineer', img: "/assets/AW7.png" },
        { title: 'Machine Learning Engineer', img: "/assets/AW8.png" },
    ],
    professional: [
        { title: 'Solutions Architect', img: "/assets/AW9.png" },
        { title: 'DevOps Engineer', img: "/assets/AW10.png" },
    ],
    specialty: [
        { title: 'Advanced Networking', img: "/assets/AW2.png" },
        { title: 'Machine Learning', img: "/assets/AW3.png" },
        { title: 'Security', img: "/assets/AW4.png" },
    ],
};

const AwsCertification = () => {
    return (
        <div className="p-8 bg-white relative">
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
                    {/* Repeat badges again for seamless scroll */}
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
