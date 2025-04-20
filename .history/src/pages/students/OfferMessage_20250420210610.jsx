import React from "react";

const OfferMessage = () => {
  return (
    <div className="bg-[#00008B] text-white py-20 px-8 md:px-16 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12">
        Learn Cloud By Doing Cloud
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Beginners Guide */}
        <div className="bg-[#1E2A78] p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Beginners Guide to Cloud DevSecOps</h3>
          <p className="text-lg mb-6">
            Introduction to the world of Cloud DevSecOps, helping beginners understand
            the fundamentals of cloud computing and DevSecOps practices.
          </p>
          <ul className="text-lg space-y-3 text-left">
            <li>✅ Understand the basics of cloud computing and its benefits.</li>
            <li>✅ Gain hands-on experience with essential tools and techniques used in Cloud DevSecOps environments.</li>
            <li>✅ Develop a foundation for further learning in advanced Cloud DevSecOps practices.</li>
          </ul>
          {/* <button className="mt-6 bg-transparent border-2 border-white text-white text-lg py-3 px-6 rounded-xl hover:bg-white hover:text-black transition-all">
            Learn more
          </button> */}
        </div>

        {/* Comprehensive Cloud DevSecOps */}
        <div className="bg-yellow-400 text-black p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Comprehensive Cloud DevSecOps Course</h3>
          <p className="text-lg mb-6">
            An in-depth exploration of Cloud DevSecOps for individuals seeking an extensive
            understanding of cloud technologies and DevSecOps methodologies.
          </p>
          <ul className="text-lg space-y-3 text-left">
            <li>✅ Master the principles of cloud computing and its various service models.</li>
            <li>✅ Design and build end-to-end DevSecOps pipelines using cloud resources and tools.</li>
            <li>✅ Develop the skills to manage complex Cloud DevSecOps environments while ensuring security and reliability.</li>
          </ul>
          {/* <button className="mt-6 bg-black text-white text-lg py-3 px-6 rounded-xl hover:bg-gray-800 transition-all">
            Learn more
          </button> */}
        </div>

        {/* Advanced Cloud DevSecOps */}
        <div className="bg-[#1E2A78] p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Advanced Cloud DevSecOps Course</h3>
          <p className="text-lg mb-6">
            This advanced course is tailored to experienced Cloud DevSecOps practitioners
            looking to elevate their expertise.
          </p>
          <ul className="text-lg space-y-3 text-left">
            <li>✅ Explore advanced cloud security strategies and container technologies.</li>
            <li>✅ Design and implement complex cloud-based microservices architectures.</li>
            <li>✅ Gain proficiency in automating advanced DevSecOps workflows and continuous monitoring.</li>
          </ul>
          <button className="mt-6 bg-transparent border-2 border-white text-white text-lg py-3 px-6 rounded-xl hover:bg-white hover:text-black transition-all">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferMessage;
