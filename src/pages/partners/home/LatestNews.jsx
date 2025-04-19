import React from "react";

const newz = "/assets/news.jpg";

const LatestNews = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-[#1e4272]">Latest news</h2>
        
        {/* Main News Item */}
        <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-2">Cloud Sentrics Integration breaks £1Billion Revenue Barrier</h3>
            <p className="text-gray-700 mb-4">
              Cloud Sentrics Integration has broken the £1Billion revenue barrier up to March 2024 thanks to a period of rapid, organic growth in the last five years.
            </p>
            <a href="#" className="text-blue-600 font-semibold">Read the article →</a>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            <img src={newz} alt="Cloud Sentrics Integration" className="w-full rounded-lg" />
          </div>
        </div>
        
        {/* Other News Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-purple-900 text-white p-6 rounded-lg">
            <h4 className="text-lg font-semibold">IT Channel Oxygen - Cloud Sentrics placed 6th in its UK top 250 resellers and MSPs</h4>
            <a href="#" className="text-blue-300 mt-2 block">Read the article →</a>
          </div>
          <div className="bg-blue-700 text-white p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Cloud Sentrics Integration announces partnership with Starburst</h4>
            <a href="#" className="text-blue-300 mt-2 block">Read the article →</a>
          </div>
          <div className="bg-purple-900 text-white p-6 rounded-lg">
            <h4 className="text-lg font-semibold">Cloud Sentrics partners with NICE to be the preferred European delivery partner for the NICE CXOne Suite.</h4>
            <a href="#" className="text-blue-300 mt-2 block">Read the article →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;