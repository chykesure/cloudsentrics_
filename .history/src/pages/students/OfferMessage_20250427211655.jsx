import React from "react";

const OfferMessage = () => {
  return (
    <div className="bg-[#00008B] text-white py-20 px-8 md:px-16 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12">
        Learn Cloud By Doing Cloud
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl w-full">
        {/* Guide to Cloud DevSecOps */}
        <div className="bg-[#1E2A78] p-10 rounded-2xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Guide to Cloud DevSecOps</h3>
          <p className="text-lg mb-6">
            This course is tailored to help understand the fundamentals and expert level of cloud computing and DevSecOps practices.
          </p>
          <ul className="text-lg space-y-3 text-left">
            <li>✅ Understand the basics of cloud computing and its benefits.</li>
            <li>✅ Gain hands-on experience with essential tools and techniques used in Cloud DevSecOps environments.</li>
            <li>✅ Develop a foundation for further learning in advanced Cloud DevSecOps practices.</li>
            <li>✅ Explore advanced cloud security strategies and container securities.</li>
            <li>✅ Design and implement complex cloud-based microservices architectures.</li>
            <li>✅ Gain proficiency in automating advanced DevSecOps workflows and continuous monitoring.</li>
          </ul>
        </div>

        {/* Comprehensive Cloud DevSecOps Course */}
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
        </div>
      </div>
    </div>
  );
};

export default OfferMessage;
