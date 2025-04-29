import { motion } from "framer-motion";
import { FaHospital, FaIndustry, FaBuilding, FaUniversity, FaMoneyBillWave } from "react-icons/fa"; // Added icons

const primaryColor = "#00AEEF"; // Your primary color

export default function WhyChooseSection() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center">
        Why Choose <span style={{ color: primaryColor }}>Cloud Sentrics?</span>
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed">
        Our cloud solutions are tailored to transform industries, enhance efficiency, and drive innovation securely.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Healthcare */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
          className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
        >
          <div className="flex justify-center">
            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
              <FaHospital className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
            Healthcare
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
            Transform Healthcare Delivery with Cloud Sentrics - Secure, Scalable Cloud Solutions Built to Enhance Patient Care and Operational Efficiency.
          </p>
        </motion.div>

        {/* Manufacturing */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
          className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
        >
          <div className="flex justify-center">
            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
              <FaIndustry className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
            Manufacturing
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
            Revolutionize Manufacturing with Cloud Sentrics - Empower Real-Time Collaboration, Automation, and Customer Engagement Across Every Touchpoint.
          </p>
        </motion.div>

        {/* Real Estate */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
          className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
        >
          <div className="flex justify-center">
            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
              <FaBuilding className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
            Real Estate
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
            Drive Real Estate Success with Cloud Sentrics - Modern Cloud Solutions for Smarter Property Management, Client Engagement, and Growth.
          </p>
        </motion.div>

        {/* Financial Services */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
          className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
        >
          <div className="flex justify-center">
            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
              <FaMoneyBillWave className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
            Financial Services
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
            Secure the Future of Finance with Cloud Sentrics - Innovative, Compliant Cloud Platforms Where Efficiency, Trust, and Excellence Converge.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
          className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
        >
          <div className="flex justify-center">
            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
              <FaUniversity className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
            Education
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
            Elevate Education with Cloud Sentrics - Transform Student and Faculty Experiences Through Seamless, Scalable Cloud-Based Learning Solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

