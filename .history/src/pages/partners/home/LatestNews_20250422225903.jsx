import React, { useState } from "react";

const newz = "/assets/news.jpg";
const ai_trainning = "/assets/ai_trainning.jpg";
const ai_conversation = "/assets/ai_conversation.jpg";
const ai_ops = "/assets/ai_ops.jpg";

// Dynamic article list with full content
const allArticles = [
  {
    id: 1,
    title: "Cloud Sentrics: Empowering Cloud Experts of Tomorrow",
    image: ai_trainning,
    description: "Cloud Sentrics Rises as the No. 1 U.S.-Based Cloud Solution Provider",
    content: `Since its inception in July 2023, Cloud Sentrics has quickly become...`, // shortened for clarity
  },
  {
    id: 2,
    title: "Meet the Visionary - Oludare Odo, Founder of Cloud Sentrics",
    image: ai_conversation,
    description: "From Personal Struggles to a Mission to Empower",
    content: `Oludare Odo didn’t have a roadmap when he started his journey...`, // shortened
  },
  {
    id: 3,
    title: "Cloud Sentrics - Your Trusted Partner in Cloud Solutions",
    image: ai_ops,
    description: "More Than Just Training: How Cloud Sentrics Delivers for Clients",
    content: `While Cloud Sentrics is celebrated for empowering individuals...`, // shortened
  },
];

const LatestNews = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="bg-gray-100 py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#1e4272]">Latest news</h2>

        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-2">Cloud Sentrics Integration breaks £1Billion Revenue Barrier</h3>
            <p className="text-gray-700 mb-4">
              Cloud Sentrics Integration has broken the £1Billion revenue barrier up to March 2024 thanks to a period of rapid, organic growth.
            </p>
            <a href="#" className="text-blue-600 font-semibold">Read the article →</a>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            <img src={newz} alt="Cloud Sentrics Integration" className="w-full rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {allArticles.map(article => (
            <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h4 className="text-lg font-semibold text-[#1e4272] mb-2">{article.title}</h4>
              <p className="text-gray-700 mb-2">{article.description}</p>
              <button
                onClick={() => handleOpenModal(article)}
                className="text-blue-600 font-medium"
              >
                Read the article →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white max-w-2xl p-6 rounded-lg shadow-xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-[#1e4272] mb-4">{selectedArticle.title}</h3>
            <p className="text-gray-800 whitespace-pre-line">{selectedArticle.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestNews;
