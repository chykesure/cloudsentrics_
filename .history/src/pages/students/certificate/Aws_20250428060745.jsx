import React from 'react';
import './AwsCertification.css'; // You can still keep your custom CSS if needed

const badges = {
    foundational: [
        { title: 'Badge 1', img: "/assets/AW1.png" },
        { title: 'Badge 2', img: "/assets/AW2.png" },
    ],
    associate: [
        { title: 'Badge 3', img: "/assets/AW3.png" },
        { title: 'Badge 4', img: "/assets/AW4.png" },
        { title: 'Badge 5', img: "/assets/AW5.png" },
        { title: 'Badge 6', img: "/assets/AW6.png" },
        { title: 'Badge 7', img: "/assets/AW7.png" },
    ],
    professional: [
        { title: 'Badge 8', img: "/assets/AW8.png" },
        { title: 'Badge 9', img: "/assets/AW9.png" },
    ],
    specialty: [
        { title: 'Badge 10', img: "/assets/AW10.png" },
    ],
};

// Combine all badges into a single array
const allBadges = [
    ...badges.foundational,
    ...badges.associate,
    ...badges.professional,
    ...badges.specialty,
];

const AwsCertification = () => {
    return (
        <section className="bg-[#1e4272] text-white py-16 px-6 sm:px-12 lg:px-20 shadow-2xl shadow-gray-900">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold">
                Leading Cloud Security  <span className="text-yellow-400">Competent</span> Team Members
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white-700">
                We have garnered over 10+ AWS and Azure Certifications, showcasing our expertise in various areas of AWS and Azure ecosystem.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="overflow-hidden whitespace-nowrap relative w-full">
                <div className="flex animate-scroll gap-20">
                    {/* Duplicate images for seamless scrolling */}
                    {[...allBadges, ...allBadges].map((badge, index) => (
                        <div
                            key={index}
                            className="text-center flex-shrink-0 flex flex-col items-center transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        >
                            <img
                                src={badge.img}
                                alt={badge.title}
                                className="w-32 h-32 object-contain animate-fade"
                            />
                            <h3 className="text-2xl font-bold mt-3 animate-fade">{badge.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind CSS Animation */}
            <style>
                {`
                    @keyframes scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                    
                    .animate-scroll {
                        display: flex;
                        width: max-content;
                        animation: scroll 30s linear infinite;
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
