import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ai_trainning = "/assets/ai_trainning.jpg";
const ai_conversation = "/assets/ai_conversation.jpg";
const ai_ops = "/assets/ai_ops.jpg";
const bpa = "/assets/bpa.jpg";
const iot1 = "/assets/iot1.jpg";
const iot_data = "/assets/iot_data.jpg";
const iot_solution = "/assets/iot_solution.jpg";
const cloudchip = "/assets/cloud-chip.jpg";
const aibg = "/assets/ai.jpg";

const allArticles = [
  {
    title: "Cloud Migration: A 5 Step Guide",
    link: "#",
    image: ai,
  },
  {
    title: "Making Sense of the AI Chatbot Market",
    link: "#",
    image: "/assets/ai-chatbot.jpg",
  },
  {
    title: "Guide to Microsoft Windows 11 Migration",
    link: "#",
    image: "/assets/windows11.jpg",
  },
  {
    title: "VMware Optimization Tips for 2025",
    link: "#",
    image: "/assets/vmware.jpg",
  },
  {
    title: "How AI is Transforming DevOps",
    link: "#",
    image: "/assets/ai-devops.jpg",
  },
  {
    title: "Maximizing ROI from Cloud Services",
    link: "#",
    image: "/assets/cloud-roi.jpg",
  },
  {
    title: "The Future of Work with Hybrid Teams",
    link: "#",
    image: "/assets/hybrid-work.jpg",
  },
  {
    title: "Security Challenges in Multi-Cloud Environments",
    link: "#",
    image: "/assets/multicloud-security.jpg",
  },
  {
    title: "AI-Augmented Agents in Customer Support",
    link: "#",
    image: "/assets/ai-agents.jpg",
  },
  {
    title: "Modernizing Legacy Systems with Microservices",
    link: "#",
    image: "/assets/microservices.jpg",
  },
];

const SearchArticles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = allArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="px-6 py-8 bg-white">
      {/* Search Box */}
      <div className="flex justify-center mb-8">
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
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-purple-900 text-white rounded-lg shadow overflow-hidden"
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
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No articles found.
          </p>
        )}
      </div>
    </section>
  );
};

export default SearchArticles;
