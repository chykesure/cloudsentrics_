import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    const settings = {
        infinite: true,  // Loop continuously
        speed: 800,  // Increased slide transition speed for smoother motion
        slidesToShow: 5,  // Number of images visible at once
        slidesToScroll: 1,  // Number of images to slide per scroll
        autoplay: true,  // Auto play the slides
        autoplaySpeed: 2000,  // Time between slides
        easing: "ease-in-out", // Easing function for smoother transitions
        cssEase: "ease-in-out", // Apply ease-in-out to CSS transitions
    };

    return (
        <div className="p-8 bg-white relative">
            <Slider {...settings}>
                {Object.values(badges).flat().map((badge, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img
                            src={badge.img}
                            alt={badge.title}
                            className="w-28 h-28 object-cover clip-badge shadow-lg"
                        />
                        <span className="text-xs mt-2 text-center">{badge.title}</span>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AwsCertification;
