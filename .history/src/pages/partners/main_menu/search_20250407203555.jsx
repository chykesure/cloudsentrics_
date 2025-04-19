import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const allArticles = [
  { title: "Cloud Migration: A 5 Step Guide", link: "#" },
  { title: "Making Sense of the AI Chatbot Market", link: "#" },
  { title: "Guide to Microsoft Windows 11 Migration", link: "#" },
  { title: "VMware Optimization Tips for 2025", link: "#" },
  { title: "How AI is Transforming DevOps", link: "#" },
  { title: "Maximizing ROI from Cloud Services", link: "#" },
  { title: "The Future of Work with Hybrid Teams", link: "#" },
  { title: "Security Challenges in Multi-Cloud Environments", link: "#" },
  { title: "AI-Augmented Agents in Customer Support", link: "#" },
  { title: "Modernizing Legacy Systems with Microservices", link: "#" },
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
            className="w-full py-2 pl-10 pr-4 bg-white text border border-gray-300 rounded-full shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Search Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div key={index} className="bg-purple-900 text-white p-6 rounded shadow">
              <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
              <a href={article.link} className="flex items-center gap-1 text-white hover:underline">
                <span>Read the article</span>
                <span>→</span>
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No articles found.</p>
        )}
      </div>
    </section>
  );
};

export default SearchArticles;
