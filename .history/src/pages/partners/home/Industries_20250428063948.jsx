<section className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 bg-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center">
                    Why Choose <span style={{ color: primaryColor }}>Cloud Sentrics?</span>
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 text-center mt-4 sm:mt-6 max-w-4xl mx-auto leading-relaxed">
                Our program is designed to provide hands-on, practical training that helps you transition into Cloud and DevSecOps roles with confidence.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaGlobe className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            No Prior Tech Experience Required
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Whether you're new to tech or switching careers, Cloud Sentrics provides structured learning from fundamentals
                            to advanced Cloud & DevSecOps practices.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaChartLine className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            High Demand & Global Job Market
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Cloud computing and DevSecOps are among the top 5 most sought-after tech skills globally.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 200 } }}
                        className="bg-white p-6 sm:p-8 shadow-lg rounded-xl text-center"
                    >
                        <div className="flex justify-center">
                            <div className="p-4 sm:p-5 rounded-full" style={{ backgroundColor: "#e1ecf4" }}>
                                <FaRocket className="text-3xl sm:text-4xl md:text-5xl" style={{ color: primaryColor }} />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mt-4 sm:mt-6">
                            Access to Real-world Projects
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
                            Our curriculum includes hands-on projects and industry case studies, ensuring you apply your skills to real-world problems.
                        </p>
                    </motion.div>
                </div>

            </section>
