import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "./Modal"; // We'll define this below

// Image imports
const ai_trainning = "/assets/ai_trainning.jpg";
const ai_conversation = "/assets/ai_conversation.jpg";
const ai_ops = "/assets/ai_ops.jpg";

// All articles
const allArticles = [
  {
    id: 1,
    title: "Cloud Sentrics: Empowering Cloud Experts of Tomorrow",
    image: ai_trainning,
    description: "Cloud Sentrics Rises as the No. 1 U.S.-Based Cloud Solution Provider",
    highlight: true,
    content: `Since its inception in July 2023, Cloud Sentrics has quickly become a leading name in the cloud education space. As a U.S.-based cloud training and consulting provider, Cloud Sentrics has trained over 100 students globally, many of whom have landed promising roles in cloud engineering, security, and DevSecOps.

What sets Cloud Sentrics apart? It’s the company’s commitment to hands-on training and real-world cloud problem-solving scenarios that prepare students for the competitive tech market. Each course is built with practical applications in mind, offering students access to cloud labs, real-time simulations, and mentorship from seasoned professionals.

Two graduates shared powerful testimonials on how Cloud Sentrics transformed their careers:

"Cloud_Sentrics enhanced my entire knowledge base in tech. The lectures simulate real-life scenarios, which helped me better comprehend how to navigate AWS resources. Overall, the tutor did an amazing job in thoroughly addressing all of my major concerns, providing me the comfort I need to succeed in the cloud security space." — Leslie E. Tetteh

"Cloud Sentrics didn’t just teach me cloud engineering—it empowered me. Through expert-led training and hands-on experience, I gained not only technical mastery but also the confidence to apply it in real-world scenarios..." — Thomas Idowu Lawrence

With enrollment now open for Batch 7 starting on May 24th, 2025, Cloud Sentrics is inviting new students to embark on their transformative tech journey.`,
  },
  {
    id: 2,
    title: "Meet the Visionary - Oluwadare Odo, Founder of Cloud Sentrics",
    image: ai_conversation,
    description: "From Personal Struggles to a Mission to Empower",
    highlight: true,
    content: `Oluwadare Odo didn’t have a roadmap when he started his journey into Cloud DevSecOps. He learned on the job, navigating complex systems while trying to build a meaningful career in the tech industry. It was a journey filled with late nights, trial and error, and moments of overwhelming self-doubt.

"At times, I felt like giving up," he shared. "But I knew I needed a structured program - one that provided guidance, collaboration, and a learning community."

That vision led to the creation of Cloud Sentrics—a platform built to provide aspiring cloud engineers with exactly what Oludare once wished for: hands-on guidance, collaborative learning, and expert mentorship.

His mission remains clear: to help others break into the tech industry, even without a traditional IT background. Cloud Sentrics is not just about training, it’s about transforming lives.`,
  },
  {
    id: 3,
    title: "Cloud Sentrics - Your Trusted Partner in Cloud Solutions",
    image: ai_ops,
    description: "More Than Just Training: How Cloud Sentrics Delivers for Clients",
    highlight: false,
    content: `While Cloud Sentrics is celebrated for empowering individuals through training, the company’s impact extends far beyond classrooms. Cloud Sentrics also provides cloud consulting services for organizations seeking tailored solutions in Cloud Engineering, DevSecOps, and Security.

From cloud migration and infrastructure automation to security audits and workforce training, Cloud Sentrics collaborates with enterprises to build scalable, secure, and cost-efficient cloud environments.

What makes their approach unique? It’s the same value they bring to students—real-world expertise. Whether it's supporting a U.S.-based fintech firm with AWS security or helping a Nigerian startup move workloads to Azure, Cloud Sentrics delivers excellence with measurable impact.

Businesses ready to future-proof their operations now have a trusted partner in Cloud Sentrics—where excellence meets execution.`,
  },
];


const NewsArticles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

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
          .map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-md"
            >
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
          .map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="rounded-lg overflow-hidden shadow-md cursor-pointer bg-white"
            >
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4 flex flex-col justify-between h-full">
                <h4 className="text-base font-semibold mb-2">{article.title}</h4>
                <span className="text-sm text-blue-300 hover:underline mt-auto">
                  Read the article →
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {selectedArticle && (
        <Modal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
    </section>
  );
};

export default NewsArticles;
