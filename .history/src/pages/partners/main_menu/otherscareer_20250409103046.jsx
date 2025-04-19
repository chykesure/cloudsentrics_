import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

// Images
const ai_trainning = "/assets/ai_trainning.jpg";
const ai_conversation = "/assets/ai_conversation.jpg";
const ai_ops = "/assets/ai_ops.jpg";
const bpa = "/assets/bpa.jpg";
const iot1 = "/assets/iot1.jpg";
const iot_data = "/assets/iot_data.jpg";
const iot_solution = "/assets/iot_solution.jpg";
const cloudchip = "/assets/cloud-chip.jpg";
const aibg = "/assets/ai.jpg";
const security = "/assets/cloud-security.jpg";
const data = "/assets/data-trans.jpg";

const allArticles = [
  {
    title: "Cloud Migration: A 5 Step Guide",
    link: "#",
    image: ai_trainning,
  },
  {
    title: "Making Sense of the AI Chatbot Market",
    link: "#",
    image: ai_conversation,
  },
  {
    title: "Guide to Microsoft Windows 11 Migration",
    link: "#",
    image: ai_ops,
  },
  {
    title: "VMware Optimization Tips for 2025",
    link: "#",
    image: bpa,
  },
  {
    title: "How AI is Transforming DevOps",
    link: "#",
    image: iot1,
  },
  {
    title: "Maximizing ROI from Cloud Services",
    link: "#",
    image: iot_data,
  },
  {
    title: "The Future of Work with Hybrid Teams",
    link: "#",
    image: iot_solution,
  },
  {
    title: "Security Challenges in Multi-Cloud Environments",
    link: "#",
    image: cloudchip,
  },
  {
    title: "AI-Augmented Agents in Customer Support",
    link: "#",
    image: aibg,
  },
  {
    title: "Modernizing Legacy Systems with Microservices",
    link: "#",
    image: data,
  },
];

const OtherCareer = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = allArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="px-6 py-8 bg-white">
      {/* Search Box with Motion */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="INSIGHTS SEARCH"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-10 pr-4 bg-white text-black border border-gray-300 rounded-full shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </motion.div>

      {/* Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-purple-900 text-white rounded-lg shadow overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                <a
                  href={article.link}
                  className="flex items-center gap-1 text-white hover:underline"
                >
                  <span>Read the article</span>
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-center text-gray-500 col-span-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            No articles found.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default OtherCareer;
