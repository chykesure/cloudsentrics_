import React from 'react';
import { motion } from 'framer-motion';

const MainBody = () => {
  const features = [
    { num: "1", title: "Security First. Always.", desc: "End-to-end encryption and advanced threat protection from day one." },
    { num: "2", title: "Compliance You Can Trust", desc: "NDPC-registered, GDPR, HIPAA, and ISO-compliant solutions." },
    { num: "3", title: "Data Control & Ownership", desc: "You retain full ownership and control with detailed audit trails." },
    { num: "4", title: "Secure Collaboration", desc: "Share files safely with granular permissions and OTP verification." },
  ];

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Cloud Sentrics?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-slate-800/70 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all text-center"
            >
              <div className="text-6xl font-black text-blue-500 mb-4">{feature.num}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* You can add more sections here later: compliance badges, testimonials, etc. */}
      </div>
    </section>
  );
};

export default MainBody;