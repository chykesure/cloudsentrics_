import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const rev1 = "https://www.youtube.com/watch?v=BdCh_wmYOxQ";
const rev2 = "https://www.youtube.com/watch?v=BdCh_wmYOxQ";
const rev3 = "https://www.youtube.com/watch?v=BdCh_wmYOxQ";

// Testimonial data
const testimonials = [
    { id: 1, url: rev1, title: "Don’t Just Relocate—Get Skills That Pay! 🚀" },
    { id: 2, url: rev2, title: "Become a Cloud Security Engineer Today with Cloud Sentrics" },
    { id: 3, url: rev3, title: "Become a Cloud Security Engineer Today with Cloud Sentrics" }
];

const TestimonialLanding = () => {
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

    // Function to extract video ID from YouTube URL
    const extractVideoId = (url) => {
        const videoId = url.split("v=")[1];
        return videoId ? videoId : "";
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-6 md:mb-12">
                Students Review
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
                                    {/* Video Thumbnail Preview */}
                                    <img
                                        src={`https://img.youtube.com/vi/${extractVideoId(testimonial.url)}/hqdefault.jpg`}
                                        alt="Video Preview"
                                        className="w-full h-auto aspect-video object-cover rounded-lg shadow-lg mx-auto"
                                    />
                                    <p className="text-center mt-2 md:mt-4 text-lg md:text-2xl font-semibold text-gray-800">
                                        {testimonial.title}
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

                        {/* YouTube Embed Video */}
                        <iframe
                            ref={modalVideoRef}
                            className="w-full h-full aspect-video object-cover rounded-lg"
                            src={`https://www.youtube.com/embed/${extractVideoId(currentVideo)}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestimonialLanding;
