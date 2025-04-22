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
    highlight: true,
    content: `Since its inception in July 2023, Cloud Sentrics has quickly become a leading name in the cloud education space. As a U.S.-based cloud training and consulting provider, Cloud Sentrics has trained over 100 students globally, many of whom have landed promising roles in cloud engineering, security, and DevSecOps.

What sets Cloud Sentrics apart? It’s the company’s commitment to hands-on training and real-world cloud problem-solving scenarios that prepare students for the competitive tech market. Each course is built with practical applications in mind, offering students access to cloud labs, real-time simulations, and mentorship from seasoned professionals.

Two graduates shared powerful testimonials on how Cloud Sentrics transformed their careers:

"Cloud_Sentrics enhanced my entire knowledge base in tech. The lectures simulate real-life scenarios, which helped me better comprehend how to navigate AWS resources. Overall, the tutor did an amazing job in thoroughly addressing all of my major concerns, providing me the comfort I need to succeed in the cloud security space." — Leslie E. Tetteh

"Cloud Sentrics didn’t just teach me cloud engineering—it empowered me. Through expert-led training and hands-on experience, I gained not only technical mastery but also the confidence to apply it in real-world scenarios..." — Thomas Idowu Lawrence

With enrollment now open for Batch 7 starting on May 24th, 2025, Cloud Sentrics is inviting new students to embark on their transformative tech journey.`
  },
  {
    id: 2,
    title: "Meet the Visionary - Oludare Odo, Founder of Cloud Sentrics",
    image: ai_conversation,
    description: "From Personal Struggles to a Mission to Empower",
    highlight: true,
    content: `Oludare Odo didn’t have a roadmap when he started his journey into Cloud DevSecOps. He learned on the job, navigating complex systems while trying to build a meaningful career in the tech industry. It was a journey filled with late nights, trial and error, and moments of overwhelming self-doubt.

"At times, I felt like giving up," he shared. "But I knew I needed a structured program - one that provided guidance, collaboration, and a learning community."

That vision led to the creation of Cloud Sentrics—a platform built to provide aspiring cloud engineers with exactly what Oludare once wished for: hands-on guidance, collaborative learning, and expert mentorship.

His mission remains clear: to help others break into the tech industry, even without a traditional IT background. Cloud Sentrics is not just about training, it’s about transforming lives.`
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

Businesses ready to future-proof their operations now have a trusted partner in Cloud Sentrics—where excellence meets execution.`
  }
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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-3xl font-bold z-10"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Article Image */}
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#1e4272] mb-4">
              {selectedArticle.title}
            </h3>

            {/* Content */}
            <p className="text-gray-800 whitespace-pre-line">
              {selectedArticle.content}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

export default LatestNews;
