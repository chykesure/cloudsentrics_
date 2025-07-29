import React, { useState } from 'react';

const MoreAbout = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    {
      title: "Executive Team",
      image: "/assets/comu2.jpg",
      content: `
        <p>Cloud Sentrics is led by a diverse and accomplished executive team that brings together 
        decades of expertise in cloud engineering, cybersecurity, enterprise IT consulting, and 
        educational leadership. Our leadership is united by a passion for innovation, a dedication 
        to excellence, and a shared mission to democratize access to cloud technologies while 
        prioritizing security at every level. Together, they drive the strategic vision and operational 
        excellence that fuels Cloud Sentrics’ continued success across the globe.</p>
      `
    },
    {
      title: "Our Vision And Values",
      image: "/assets/vision.jpg",
      content: `
        <p><strong>Vision:</strong><br/>
        To be the world’s most trusted provider of cloud education and secure cloud 
        transformation services—empowering professionals and organizations with the 
        knowledge, tools, and confidence to succeed in a digital-first world.</p>

        <p><strong>Core Values:</strong></p>
        <ul>
          <li>Empowerment Through Knowledge – We believe education is the foundation of transformation.</li>
          <li>Integrity and Accountability – We maintain the highest standards of transparency and professionalism.</li>
          <li>Innovation for Impact – We continuously evolve our offerings to meet modern cloud challenges.</li>
          <li>Security First – Every solution and service is built with a secure-by-design approach.</li>
          <li>Inclusive Community – We champion diversity, inclusion, and collaboration in all our engagements.</li>
        </ul>
      `
    },
    {
      title: "Certifications & Accreditations",
      image: "/assets/cert.jpg",
      content: `
        <p>We maintain and make available all essential documents that govern our operations and 
        outline our ethical standards:</p>
        <ul>
          <li>Code of Ethics</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Cookie Policy</li>
          <li>Anti-Slavery and Human Trafficking Policy</li>
          <li>Environmental, Social, and Governance (ESG) Statement</li>
        </ul>
        <p>These documents reflect our commitment to lawful, ethical, and secure business practices.</p>
      `
    },
    {
      title: "Partners",
      image: "/assets/partner.jpg",
      content: `
        <p>We partner with leading organizations in the cloud and tech industries to drive innovation and offer 
        the best solutions. These partnerships help us provide top-tier services and support to our clients, 
        ensuring they have access to the latest technologies and expertise in the cloud domain.</p>
      `
    },
    {
      title: "Corporate Documents",
      image: "/assets/document.jpg",
      content: `
        <p>We maintain and make available all essential documents that govern our operations and outline our ethical standards:</p>
        <ul>
          <li>Code of Ethics</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Cookie Policy</li>
          <li>Anti-Slavery and Human Trafficking Policy</li>
          <li>Environmental, Social, and Governance (ESG) Statement</li>
        </ul>
      `
    },
    {
      title: "Corporate Responsibility",
      image: "/assets/responsibility.jpg",
      content: `
        <p>As a responsible corporate citizen, Cloud Sentrics invests in initiatives that promote 
        digital inclusion, sustainability, and career empowerment. Our efforts include:</p>
        <ul>
          <li>Cloud scholarships for underserved populations</li>
          <li>University campus engagement programs</li>
          <li>Remote mentorship for aspiring IT professionals</li>
          <li>Hosting free knowledge-sharing events for the global tech community</li>
        </ul>
        <p>Our initiatives are rooted in our belief that access to secure cloud education can change 
        lives and drive positive global impact.</p>
      `
    },
    {
      title: "Careers",
      image: "/assets/comu4.jpg",
      content: `
        <p>At Cloud Sentrics, we are on a mission to build a future-ready workforce. We are always 
        looking for dedicated professionals who share our passion for cloud innovation and 
        education. We offer roles across:</p>
        <ul>
          <li>Cloud Training & Certification Delivery</li>
          <li>Curriculum Design</li>
          <li>DevSecOps and Infrastructure Consulting</li>
          <li>Student and Client Support</li>
          <li>Marketing and Operations</li>
        </ul>
        <p>Join our growing team to work in a dynamic environment that fosters learning, 
        collaboration, and impact.</p>
      `
    },
    {
      title: "History Of Cloud Sentrics",
      image: "/assets/history.jpg",
      content: `
        <p>Founded in 2021 by Oluwadamilare Odo, Cloud Sentrics was born out of a personal journey 
        of transitioning into cloud DevSecOps without structured support. Recognizing the 
        challenges faced by newcomers, Mr. Oluwadamilare Odo built Cloud Sentrics as a support-driven 
        platform focused on mentorship, hands-on learning, and security-centric cloud training. 
        Today, Cloud Sentrics has impacted over 100 learners across the U.S., U.K., Canada, and 
        Nigeria, helping them launch careers in cloud engineering, security, and DevSecOps. We 
        continue to grow through our commitment to accessible education, technical excellence, 
        and secure transformation services.</p>
      `
    },
    {
      title: "Sustainability Statement",
      image: "/assets/statement.jpg",
      content: `
        <p>Cloud Sentrics is dedicated to a sustainable future. We operate with a digital-first model 
        to reduce carbon emissions and promote responsible technology usage. Our sustainability 
        efforts include:</p>
        <ul>
          <li>Fully remote training programs to reduce environmental impact</li>
          <li>Encouraging green IT practices among clients and students</li>
          <li>Offering sustainability-themed tech talks and webinars</li>
          <li>Minimizing resource use through digital materials and operations</li>
        </ul>
        <p>Security is foundational in all our efforts—from training individuals to supporting 
        organizations in securely migrating to and operating in the cloud. We ensure that our 
        services not only transform but also protect the future of digital business.</p>
      `
    }
  ];

  return (
    <section className="bg-gray-100 py-10 px-4">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Find out more about Cloud Sentrics Integration
      </h2>

      {selectedSection ? (
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-6">
            <h3 className="text-2xl font-semibold mb-4">{selectedSection.title}</h3>
            <img
              src={selectedSection.image}
              alt={selectedSection.title}
              className="w-full h-96 object-cover mb-6 rounded-md"
            />
            <div
              className="prose max-w-none text-left text-gray-700"
              dangerouslySetInnerHTML={{ __html: selectedSection.content }}
            />
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
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer hover:shadow-xl transition"
              onClick={() => setSelectedSection(item)}
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left py-4 px-3 bg-white">
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MoreAbout;
