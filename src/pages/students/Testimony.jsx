import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const rev1 = "/assets/review1.mp4";
const rev2 = "/assets/review2.mp4";
const rev3 = "/assets/review3.mp4";
const rev4 = "/assets/testi1.mp4";

const testimonials = [
    {
        id: 1,
        url: rev1,
        title: "John",
        subtitle: "Cloud Security Student",
        description: "“The practical approach to cloud services taught me the real-world skills I need to succeed.”"
    },
    {
        id: 2,
        url: rev2,
        title: "Shefiu",
        subtitle: "Cloud Security Engineer",
        description: "“I gained hands-on experience and now I’m working as a Cloud Security Engineer thanks to the mentorship.”"
    },
    {
        id: 3,
        url: rev3,
        title: "Chinedu",
        subtitle: "Cloud Security Engineer",
        description: "“The structured learning path gave me the confidence to specialize in cloud security.”"
    },
    {
        id: 4,
        url: rev4,
        title: "Seun Ogunkoya",
        subtitle: "Cloud Security Engineer",
        description: "“The structured path built my confidence to focus on cloud security.”"
    }
];



const TestimonialSlider = () => {
    const swiperRef = useRef(null);
    const videoRefs = useRef([]); // Store multiple video refs
    const modalVideoRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    useEffect(() => {
        videoRefs.current.forEach((video) => {
            if (video) {
                video.addEventListener("play", handleVideoPlay);
                video.addEventListener("pause", handleVideoPause);
                video.addEventListener("ended", handleVideoPause);
            }
        });

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) {
                    video.removeEventListener("play", handleVideoPlay);
                    video.removeEventListener("pause", handleVideoPause);
                    video.removeEventListener("ended", handleVideoPause);
                }
            });
        };
    }, []);

    const openModal = (url) => {
        setCurrentVideo(url);
        setModalOpen(true);
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const closeModal = () => {
        if (modalVideoRef.current) {
            modalVideoRef.current.pause();
            modalVideoRef.current.currentTime = 0;
        }
        setModalOpen(false);
        setCurrentVideo("");
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    const handleVideoPlay = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleVideoPause = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-6 md:mb-12">
                
            </h2>

            {/* Swiper Slider */}
            <div className="relative flex justify-center items-center w-full">
                <Swiper
                    ref={swiperRef}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ el: ".custom-pagination", clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop
                    className="w-full max-w-4xl"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={testimonial.id} className="flex justify-center">
                            <div className="w-full text-center px-4 md:px-8">
                                <div className="cursor-pointer" onClick={() => openModal(testimonial.url)}>
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        className="w-full h-auto aspect-video object-contain rounded-lg shadow-lg mx-auto"
                                        src={testimonial.url}
                                        controls
                                    />
                                    {/* Display student name and course/role */}
                                    <p className="text-center mt-2 md:mt-4 text-lg md:text-2xl font-semibold text-gray-800">
                                        {testimonial.title}
                                    </p>
                                    <p className="text-center mt-1 text-sm font-medium text-gray-600">
                                        {testimonial.subtitle} {/* Display subtitle like role or course */}
                                    </p>
                                    {/* Display the testimonial description */}
                                    <p className="text-center mt-2 md:mt-4 text-base text-gray-600 italic">
                                        {testimonial.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

            {/* Video Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-[90%] md:max-w-[75%] lg:max-w-[60%] max-h-[90vh] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-600 text-2xl md:text-4xl font-bold cursor-pointer z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeModal();
                            }}
                        >
                            ✖
                        </button>

                        {/* Video Player */}
                        <video
                            ref={modalVideoRef}
                            className="w-full h-auto aspect-video object-contain rounded-lg"
                            src={currentVideo}
                            controls
                            autoPlay
                            onPlay={handleVideoPlay}
                            onEnded={handleVideoPause}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialSlider;