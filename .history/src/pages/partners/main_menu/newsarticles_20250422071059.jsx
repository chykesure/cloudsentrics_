import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Image imports
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

// All articles
const allArticles = [
  {
    title: "Cloud Sentrics & Pure Storage Unveil AI Innovation",
    image: ai_trainning,
    description: "Cloud Sentrics and Pure Storage showcase ‘Nature in the Age of AI’",
    highlight: true,
  },
  {
    title: "Cloud Sentrics CEO On Procurement Spin Off",
    image: ai_conversation,
    description: "And how AI at scale makes us quite different",
    highlight: true,
  },
  {
    title: "Cloud Migration: A 5 Step Guide",
    image: ai_ops,
  },
];


const NewsArticles = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = allArticles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="px-4 py-8 bg-white text-black">
      {/* Filter Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {["Blog", "Company News", "Press Releases", "Webinars & Video", "White Papers"].map((filter, index) => (
            <button
              key={index}
              className="px-4 py-1.5 bg-gray-200 text-sm text-gray-700 rounded-full hover:bg-gray-300"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="NEWS SEARCH"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-10 pr-4 bg-white text-black border border-gray-300 rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Highlight Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {filteredArticles
          .filter((item) => item.highlight)
          .map((article, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
              <img src={article.image} alt={article.title} className="w-full h-60 object-cover" />
              <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-sm">{article.description}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredArticles
          .filter((item) => !item.highlight)
          .map((article, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md ${
                article.image ? "bg-white" : article.bgColor || "bg-gray-200 text-black"
              }`}
            >
              {article.image && (
                <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-4 flex flex-col justify-between h-full">
                <h4 className="text-base font-semibold mb-2">{article.title}</h4>
                <a href={article.link || "#"} className="text-sm text-blue-300 hover:underline mt-auto">
                  Read the article →
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default NewsArticles;
