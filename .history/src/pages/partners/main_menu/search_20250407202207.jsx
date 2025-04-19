import React from "react";

const services = [
  {
    title: "Why It’s Time To Optimise Your VMware Environment",
    subtitle: "Optimise your VMware environment",
    image: "/assets/workplace.jpg",
  },
  {
    title: "AI-Augmented Agents: The Next Evolution In Customer Service",
    subtitle: "Driving innovation and a positive customer experience with AI",
    image: "/assets/ai.jpg",
  },
];

const articles = [
  {
    title: "Cloud Migration a 5 Step Guide",
    link: "#",
  },
  {
    title: "Making Sense of the AI Chatbot Market",
    link: "#",
  },
  {
    title: "Guide to Microsoft Windows 11 Migration",
    link: "#",
  },
];

const ServicesPage = () => {
  return (
    <section className="px-6 py-8 bg-white">
      {/* Search */}
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="INSIGHTS SEARCH"
          className="border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
      </div>

      {/* Featured Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md">
            <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {articles.map((article, index) => (
          <div key={index} className="bg-purple-900 text-white p-6">
            <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
            <a href={article.link} className="flex items-center gap-1 text-white hover:underline">
              <span>Read the article</span>
              <span>→</span>
            </a>
          </div>
        ))}
      </div>

      {/* Broadcom Section */}
      <div className="bg-white shadow-lg p-8 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-2/3">
          <h2 className="text-xl font-bold mb-2">
            Broadcom’s VMware acquisition: what it means for your business
          </h2>
          <p className="text-sm text-gray-700 mb-2">
            If you’re wondering what to do next, our specialist teams are on hand to help evaluate y…
          </p>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Read the article
          </a>
        </div>
        <div className="md:w-1/3 flex justify-end mt-4 md:mt-0">
          <img src="/assets/vmware.png" alt="VMware by Broadcom" className="h-12 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
