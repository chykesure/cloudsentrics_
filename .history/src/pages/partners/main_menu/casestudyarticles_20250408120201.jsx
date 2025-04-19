import React from "react";

const articles = [
  {
    title: "Putting people and the planet first at Balfour Beatty",
    description:
      "Bell Integration helps Balfour Beatty execute a major desktop refresh programme designed w...",
    image: "/assets/technology.jpg",
  },
  {
    title: "Making food storage smarter and safer with IoT monitoring",
    description:
      "Bell Integration helps a global catering supplier implement a scalable and sophisticated I...",
    image: "/assets/iot_solution.jpg",
  },
  {
    title: "Data Centre Consolidation Generates Big Gains For UK Telco",
    image: "/assets/cds4.jpg",
  },
  {
    title: "ARM Takes To The Cloud With Bell Integration",
    image: "/assets/App_trans.jpg",
  },
  {
    title: "Global Bank Executes A Seamless Data Centre Migration",
    image: "/assets/cloud_integrations.jpg",
  },
  {
    title: "Cloud Migration For A Global Charity",
    image: "/assets/cld.jpg",
  },
  {
    title: "Staying Connected Is Plain Sailing For This British Cruise Operator",
    image: "/assets/event2.jpg",
  },
  {
    title: "Cloud Migration For Peters & May",
    image: "/assets/comu2.jpg",
  },
];

const CaseArticles = () => {
  return (
    <section className="bg-white text-black px-2 md:px-6 py-10">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-sm text-gray-600">Case studies</h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Data Centre Migration for a Global Bank
          </h1>
          <div className="w-full max-h-[400px] flex justify-center items-center overflow-hidden rounded-lg bg-gray-100">
            <img
              src="/assets/end-user.jpg"
              alt="Server Closeup"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {articles.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.slice(2).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="text-base font-semibold">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseArticles;
