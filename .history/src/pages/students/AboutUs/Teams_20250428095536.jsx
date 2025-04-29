import React, { useState } from "react";
import { motion } from "framer-motion";

// Full content for each section
const sections = [
  {
    title: "Executive Team",
    image: "/assets/comu2.jpg",
    content: `
      Cloud Sentrics is led by a diverse and accomplished executive team that brings together 
      decades of expertise in cloud engineering, cybersecurity, enterprise IT consulting, and 
      educational leadership. Our leadership is united by a passion for innovation, a dedication 
      to excellence, and a shared mission to democratize access to cloud technologies while 
      prioritizing security at every level. Together, they drive the strategic vision and operational 
      excellence that fuels Cloud Sentrics’ continued success across the globe.
    `
  },
  {
    title: "Our Vision And Values",
    image: "/assets/vision.jpg",
    content: `
      Vision:
      To be the world’s most trusted provider of cloud education and secure cloud 
      transformation services—empowering professionals and organizations with the 
      knowledge, tools, and confidence to succeed in a digital-first world.

      Core Values:
      • Empowerment Through Knowledge – We believe education is the foundation of 
      transformation.
      • Integrity and Accountability – We maintain the highest standards of 
      transparency and professionalism.
      • Innovation for Impact – We continuously evolve our offerings to meet modern 
      cloud challenges.
      • Security First – Every solution and service is built with a secure-by-design 
      approach.
      • Inclusive Community – We champion diversity, inclusion, and collaboration in all 
      our engagements.
    `
  },
  {
    title: "Certifications & Accreditations",
    image: "/assets/cert.jpg",
    content: `
      We maintain and make available all essential documents that govern our operations and 
      outline our ethical standards:
      • Code of Ethics 
      • Privacy Policy 
      • Terms and Conditions 
      • Cookie Policy 
      • Anti-Slavery and Human Trafficking Policy 
      • Environmental, Social, and Governance (ESG) Statement 

      These documents reflect our commitment to lawful, ethical, and secure business 
      practices.
    `
  },
  {
    title: "Partners",
    image: "/assets/partner.jpg",
    content: `
      We partner with leading organizations in the cloud and tech industries to drive innovation and offer 
      the best solutions. These partnerships help us provide top-tier services and support to our clients, 
      ensuring they have access to the latest technologies and expertise in the cloud domain.
    `
  },
  {
    title: "Corporate Documents",
    image: "/assets/document.jpg",
    content: `
      We maintain and make available all essential documents that govern our operations and outline our ethical standards:
      • Code of Ethics 
      • Privacy Policy 
      • Terms and Conditions 
      • Cookie Policy 
      • Anti-Slavery and Human Trafficking Policy 
      • Environmental, Social, and Governance (ESG) Statement 
    `
  },
  {
    title: "Corporate Responsibility",
    image: "/assets/responsibility.jpg",
    content: `
      As a responsible corporate citizen, Cloud Sentrics invests in initiatives that promote 
      digital inclusion, sustainability, and career empowerment. Our efforts include:
      • Cloud scholarships for underserved populations 
      • University campus engagement programs 
      • Remote mentorship for aspiring IT professionals 
      • Hosting free knowledge-sharing events for the global tech community 

      Our initiatives are rooted in our belief that access to secure cloud education can change 
      lives and drive positive global impact.
    `
  },
  {
    title: "Careers",
    image: "/assets/comu4.jpg",
    content: `
      At Cloud Sentrics, we are on a mission to build a future-ready workforce. We are always 
      looking for dedicated professionals who share our passion for cloud innovation and 
      education. We offer roles across:
      • Cloud Training & Certification Delivery 
      • Curriculum Design 
      • DevSecOps and Infrastructure Consulting 
      • Student and Client Support 
      • Marketing and Operations 

      Join our growing team to work in a dynamic environment that fosters learning, 
      collaboration, and impact.
    `
  },
  {
    title: "History Of Cloud Sentrics",
    image: "/assets/history.jpg",
    content: `
      Founded in 2021 by Oluwadamilare Odo, Cloud Sentrics was born out of a personal journey 
      of transitioning into cloud DevSecOps without structured support. Recognizing the 
      challenges faced by newcomers, Mr. Oluwadamilare Odo built Cloud Sentrics as a support-driven 
      platform focused on mentorship, hands-on learning, and security-centric cloud training. 
      Today, Cloud Sentrics has impacted over 100 learners across the U.S., U.K., Canada, and 
      Nigeria, helping them launch careers in cloud engineering, security, and DevSecOps. We 
      continue to grow through our commitment to accessible education, technical excellence, 
      and secure transformation services.
    `
  },
  {
    title: "Sustainability Statement",
    image: "/assets/statement.jpg",
    content: `
      Cloud Sentrics is dedicated to a sustainable future. We operate with a digital-first model 
      to reduce carbon emissions and promote responsible technology usage. Our sustainability 
      efforts include:
      • Fully remote training programs to reduce environmental impact 
      • Encouraging green IT practices among clients and students 
      • Offering sustainability-themed tech talks and webinars 
      • Minimizing resource use through digital materials and operations 

      Security is foundational in all our efforts—from training individuals to supporting 
      organizations in securely migrating to and operating in the cloud. We ensure that our 
      services not only transform but also protect the future of digital business.
    `
  }
];

const Team = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Find out more about Cloud Sentrics Integration
      </h2>

      {selectedSection ? (
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold">{selectedSection.title}</h3>
            <img
              src={selectedSection.image}
              alt={selectedSection.title}
              className="w-full h-124 object-cover mt-4"
            />
            <p className="mt-4 text-gray-700">{selectedSection.content}</p>
          </div>
          <button
            onClick={() => setSelectedSection(null)}
            className="block mx-auto mt-6 px-6 py-2 bg-[#1e4272] text-white rounded-md"
          >
            Back to sections
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sections.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
              viewport={{ once: true }}
              onClick={() => handleClick(item)} // Handle section click
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <div className="text-center py-4 px-3 bg-white">
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Team;

