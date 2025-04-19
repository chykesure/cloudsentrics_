import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
const ai_trainning = "/assets/ai_trainning.jpg";
const ai_conversation = "/assets/ai_conversation.jpg";
const ai_ops = "/assets/ai_ops.jpg";
const bpa = "/assets/bpa.jpg";

const RelatedServices = () => {
  const [activeModal, setActiveModal] = useState(null);

  const services = [
    {
      title: "Conversational AI",
      description:
        "Enhance customer interactions and streamline support with next-gen, AI-powered conversations that drive engagement and boost productivity.",
      image: ai_conversation,
      content: `Security is seamlessly integrated into every conversational interface to protect user 
data and privacy at all interaction points. 

Enhance how you interact with customers and teams using intelligent chatbots and 
voice assistants. Powered by natural language processing, our Conversational AI 
solutions create seamless, human-like interactions that are always available, 
personalized, and consistent. 

What You Can Expect:
• 24/7 multilingual support for customers and employees
• Automated workflows that reduce response time and boost satisfaction
• Integration across messaging apps, web, and voice platforms
• Smart escalation to human agents when needed

We help you increase engagement while improving efficiency across customer service, 
HR, and internal support functions.`,
    },
    {
      title: "AI Ops",
      description:
        "Ensure operational resilience and proactively prevent, detect, and resolve incidents using intelligent automation and real-time analytics powered by AIOps.",
      image: ai_ops,
      content: `Our AI Ops service transforms traditional IT management by using machine learning 
to automate operations and anticipate issues. With real-time monitoring, analytics, and 
built-in security protocols, your systems become more resilient—minimizing 
vulnerabilities, reducing downtime, and ensuring safer automation with minimal 
manual intervention.

How It Integrates:
AI Ops seamlessly integrates into your existing IT infrastructure by leveraging APIs to 
connect with monitoring systems, logging tools, configuration databases, and incident 
management platforms. It collects and analyzes large volumes of data from across your 
ecosystem to detect patterns, predict failures, and automate responses without disrupting your workflows.

Whether you're managing cloud-native apps or hybrid environments, AI Ops acts as 
an intelligent layer across tools like ServiceNow, Datadog, Splunk, and AWS 
CloudWatch to improve observability and reduce human error.

Benefits:
• Early detection of anomalies
• Intelligent root cause analysis
• Predictive alerts for potential failures
• Reduced operational costs and faster resolution`,
    },
    {
      title: "Business Process Automation",
      description:
        "Streamline operations, reduce manual tasks, and drive faster, smarter workflows to maximize digital efficiency.",
      image: bpa,
      content: `Security is embedded into every automated workflow to protect sensitive data and 
maintain compliance.

Redesign how your business runs by eliminating repetitive tasks through smart 
automation. From HR to finance and customer onboarding, our Business Process 
Automation tools reduce delays and improve consistency.

Key Features:
• Automated workflows and approval chains
• Integration with cloud and legacy systems
• Enhanced data accuracy and reporting
• Scalable automation for growing operations`,
    },
    {
      title: "AI Training",
      description:
        "Unlock the full potential of artificial intelligence with hands-on training that delivers real business impact.",
      image: ai_trainning,
      content: `Our training programs emphasize secure development practices and ethical AI 
implementation.

Upskill your team with practical, hands-on AI training. We offer comprehensive 
learning paths in machine learning, data science, and AI application development 
tailored to tech professionals, managers, and beginners alike.

Training Focus Areas:
• AI & ML fundamentals
• Real-world project simulations
• Cloud-based AI tools (AWS, Azure)
• Ethical and responsible AI use`,
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Services</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden min-h-[400px] cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              onClick={() => setActiveModal(index)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              className="bg-white rounded-xl w-full max-w-3xl max-h-[80vh] overflow-y-auto p-0 shadow-lg text-left relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-blue-600 text-white py-4 px-6 rounded-t-xl flex items-center justify-between">
                <h3 className="text-xl font-semibold">{services[activeModal].title}</h3>
                <button
                  className="text-white font-bold text-lg"
                  onClick={() => setActiveModal(null)}
                >
                  &times;
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <img
                  src={services[activeModal].image}
                  alt={services[activeModal].title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl mb-6"
                />
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {services[activeModal].content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RelatedServices;
