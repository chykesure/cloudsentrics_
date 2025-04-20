import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUsers, FaChartLine } from "react-icons/fa";

const testimonials = [
    {
        "quote": "The DTS support staff is always there – we always get a ‘live’, competent and quality tech to assist us. They are true general DASD experts – they frequently provide DASD-related assistance beyond the scope of their products.",
        "name": "Dave Cebell",
        "title": "The Dallas Morning News"
    },
    {
        "quote": "The service we have received from DTS Software, today, has been above and beyond any expectations we could have had for a vendor. From the materials provided this morning, to the conference call, to the FAX – and the many, e-mails in between – thank you all so much for setting the standard.",
        "name": "Rick Hodges",
        "title": "Project Manager, Texas Health"
    },
    {
        "quote": "Our business transformed with Cloud Sentrics Integration, making cloud migration seamless and efficient.",
        "name": "Dare",
        "title": "CEO, InnovateX"
    }
];


const CustomerPage = () => {
    const navigate = useNavigate();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-gray-100 py-12 px-4 md:px-16">
            <h2 className="text-3xl font-bold text-[#1e4272] text-center mb-8">Customer Success</h2>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Customer Success Stories */}
                <div className="space-y-6">
                    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="/assets/data-trans.jpg"
                            alt="Cloud Migration"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl text-black font-semibold">ARM Takes to the Cloud with Sentrics Integration</h3>
                            <p className="text-gray-600 mt-2">
                                Cloud Sentrics architects a cloud-driven IT ecosystem, delivering seamless connectivity and a comprehensive Modern Workplace Solution powered by AI and automation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="bg-blue-900 text-white p-6 rounded-lg flex flex-col justify-between relative shadow-lg h-auto pb-12">

                    {/* User Info */}
                    <div className="text-center space-y-0 pt-0 mt-0">
                        <FaUsers className="mx-auto text-4xl" />
                        <h4 className="font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-sm opacity-75">{testimonials[currentTestimonial].title}</p>
                    </div>

                    <blockquote className="text-lg italic transition-opacity duration-500 text-center mt-8">
                        "{testimonials[currentTestimonial].quote}"
                    </blockquote>



                    {/* Navigation Buttons (Fixed & No Overlap) */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-white text-black px-4 py-2 rounded-full shadow-md">
                        <button onClick={prevTestimonial} className="p-2 text-gray-700 hover:text-black">
                            <FaChevronLeft />
                        </button>
                        <span className="text-sm">{`${currentTestimonial + 1}/${testimonials.length}`}</span>
                        <button onClick={nextTestimonial} className="p-2 text-gray-700 hover:text-black">
                            <FaChevronRight />
                        </button>
                    </div>

                </div>


                {/* Call-to-Action Section (Newly Added) */}
                <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col justify-center items-center">
                    <FaChartLine className="text-5xl text-blue-700 mb-4" />
                    <h3 className="text-xl font-bold">Join 10,000+ Satisfied Clients</h3>
                    <p className="text-gray-600 mt-2">Boost your IT capabilities with cutting-edge solutions.</p>
                    <button
                        onClick={() => navigate('/technology')} // or whatever your route is
                        className="mt-4 bg-blue-700 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-800 transition"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerPage;
