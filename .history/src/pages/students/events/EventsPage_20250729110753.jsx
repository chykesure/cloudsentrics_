import React, { useState } from "react";
import Headers from "../../../pages/Header";
import { motion } from "framer-motion";
import FooterPage from "../../Footer";
import { FaTimes } from "react-icons/fa";
import Join from "../Join";

const eventBanner = "/assets/event2.jpg";
const speaker1 = "/assets/event3.jpg";
const speaker2 = "/assets/event4.jpg";
const speaker3 = "/assets/event5.jpg";

const floatingButtonAnimation = {
  y: [0, -6, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  },
};

const EventsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Headers />

      {/* Hero Section */}
      <motion.div
        className="relative w-full min-h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${eventBanner})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 opacity-70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-20 lg:px-32 py-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Join the <span className="text-white">Cloud Security Summit 2025</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed drop-shadow-sm">
            A premier event for cloud professionals, IT experts, and beginners eager to explore AWS security trends, best practices, and innovations.
          </p>
          <p className="mt-3 text-xl font-medium">📅 <b>Event Coming Soon</b> | 📍 Join Online or Onsite</p>
        </div>
      </motion.div>

      {/* Why Attend Section */}
      <section className="py-20 px-6 md:px-20 lg:px-32 bg-white">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">Why Attend?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              icon: "🔍",
              title: "Expert Insights",
              desc: "Gain knowledge from top cloud security professionals.",
            },
            {
              icon: "🌐",
              title: "Networking",
              desc: "Connect with industry leaders and peers across domains.",
            },
            {
              icon: "🚀",
              title: "Hands-on Sessions",
              desc: "Build practical skills with interactive labs & demos.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center border border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900">Don't Miss Out!</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Reserve your spot today and take your cloud security skills to the next level.
        </p>

        <motion.button
          className="mt-8 bg-[#1e4272] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#17365b] transition"
          animate={floatingButtonAnimation}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenModal}
        >
          Register Now
        </motion.button>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4 p-6 md:p-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500 text-2xl"
            >
              <FaTimes />
            </button>
            <Join onClose={handleCloseModal} />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1e4272] text-white py-10 px-6 text-center">
        <p className="text-lg font-medium">© 2025 Cloud & Co. All Rights Reserved.</p>
        <div className="mt-4">
          <FooterPage />
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;
