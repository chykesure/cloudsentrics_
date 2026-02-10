// pages/cloudwebpage/Readmorepage/Readmore/ReadmorePage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const newsArticles = [
  {
    slug: "launch-nigeria-2026",
    title:
      "Cloud Sentrics Officially Launches Operations in Nigeria, Expanding Secure Cloud Storage and Data Protection Services Across Africa",
    image: "/news4.png",
    date: "January 14, 2026",
    location: "Ibadan, Oyo State, Nigeria",
    fullContent: (
      <>
        <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
          Ibadan, Oyo State, Nigeria on January 14, 2026 Cloud Sentrics, a U.S.-based cloud solutions and training company, has officially launched its operations in Nigeria, with its Nigerian office located in Ibadan, Oyo State. The launch marks a major milestone in the company’s expansion across Africa and reinforces its commitment to delivering secure cloud storage, data protection, and secure file sharing solutions to organizations operating in regulated environments.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-[#14224a] mt-10 mb-6">
          Full Compliance with Nigerian Regulatory Standards
        </h2>

        <p className="mb-6 text-lg leading-relaxed text-gray-800">
          Cloud Sentrics is fully registered with the Corporate Affairs Commission (CAC) in Nigeria and operates in alignment with the Nigerian Data Protection Commission (NDPC) requirements. This ensures that all services provided within Nigeria meet national data protection, privacy, and governance standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <img
            src="/read1.png"
            alt="CAC Registration & Compliance Illustration"
            className="w-full rounded-xl shadow-lg object-cover"
          />
          <img
            src="/read2.png"
            alt="NDPC Data Protection Standards"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#14224a] mt-12 mb-6">
          Official Launch: Prioritizing Security, Compliance, and Trust
        </h2>

        <p className="mb-6 text-lg leading-relaxed text-gray-800">
          The official launch event, held on January 14, 2026, highlights Cloud Sentrics’ focus on enabling digital transformation while prioritizing security, compliance, and trust. By leveraging secure cloud infrastructure hosted within the African region, Cloud Sentrics allows organizations to store, manage, and share sensitive data confidently while maintaining compliance with local and international data protection regulations.
        </p>

        <div className="my-10">
          <img
            src="/read3.png"
            alt="Secure Cloud Infrastructure for Africa – Data Protection & Trust"
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
          <p className="text-center text-gray-600 mt-3 italic text-base">
            Empowering secure, compliant cloud solutions across the continent
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 my-12">
          <h3 className="text-xl font-semibold text-[#14224a] mb-4">
            Key Benefits for Organizations in Nigeria & Africa
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-800 text-lg">
            <li>Localized secure cloud storage with low latency</li>
            <li>Full alignment with CAC registration and NDPC data protection rules</li>
            <li>Enterprise-grade encryption and secure file sharing</li>
            <li>Support for regulated sectors (finance, healthcare, education, etc.)</li>
            <li>Confidence in data sovereignty and international compliance</li>
          </ul>
        </div>

        <p className="text-center text-xl font-medium text-gray-800 mt-12">
          Cloud Sentrics is ready to support your organization's secure digital journey in Nigeria and beyond.
        </p>
      </>
    ),
  },

  {
    slug: "founder-oluwadamilare-odo",
    title: "Meet the Founder: Oluwadamilare Odo, Driving Secure Cloud Innovation",
    image: "/news1.png",
    fullContent: (
      <>
        <p className="mb-8 text-lg md:text-xl leading-relaxed text-gray-800">
          Cloud Sentrics was founded by Oluwadamilare Odo, a cloud security and DevSecOps professional whose career journey was shaped by real-world problem solving and hands-on experience with complex cloud environments. Without a traditional roadmap, he built expertise across cloud engineering, security, and infrastructure automation.
        </p>

        <div className="my-12 bg-blue-50 border-l-4 border-[#14224a] p-8 rounded-xl shadow-md max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl italic font-medium text-[#14224a] text-center leading-relaxed">
            “Cloud Sentrics was created to help individuals and organizations adopt cloud technologies without compromising security or compliance. Our focus is simple: protect data, enable secure collaboration, and build systems people can trust.”
          </blockquote>
          <p className="text-right mt-4 font-semibold text-gray-700">— Oluwadamilare Odo, Founder</p>
        </div>

        <p className="mb-10 text-lg leading-relaxed text-gray-800">
          This vision continues to guide Cloud Sentrics’ approach to cloud storage, data protection, and secure file sharing.
        </p>

        <h3 className="text-2xl font-bold text-[#14224a] mt-12 mb-6 text-center">
          Driving Secure Cloud Innovation
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/read1.png"
              alt="Oluwadamilare Odo in a professional tech setting"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center text-gray-600 mt-2 text-sm italic">Founder in action: Building secure solutions</p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/read2.png"
              alt="Digital shield representing data protection"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center text-gray-600 mt-2 text-sm italic">Protecting data with trust and compliance</p>
          </div>

          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="/read3.png"
              alt="Secure collaboration and infrastructure automation"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <p className="text-center text-gray-600 mt-2 text-sm italic">Enabling secure, scalable cloud environments</p>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-lg text-gray-700 mb-4">
            Inspired by real-world expertise ready to secure your cloud journey?
          </p>
          <Link
            to="/contact-us"
            className="inline-block bg-[#14224a] text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-900 transition text-lg"
          >
            Connect with Us
          </Link>
        </div>
      </>
    ),
  },

  {
    slug: "education-enterprise-impact",
    title: "Expanding Impact Through Education and Enterprise Cloud Solutions",
    image: "/news13.png",
    fullContent: (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg prose-gray max-w-none text-gray-800 leading-relaxed tracking-[-0.01em]">
          <p className="mb-8 text-xl">
            Cloud Sentrics was founded to address a growing need for secure, practical, and compliance-focused cloud adoption. Since its inception, the company has evolved into delivering enterprise-grade cloud solutions designed for organizations handling sensitive real-world data.
          </p>

          <p className="mb-8 text-xl">
            Through hands-on training and real-world case studies, Cloud Sentrics has trained and supported professionals across cloud engineering, cybersecurity, and DevSecOps. These programs emphasize secure system design, data protection, access control, and compliance-aligned cloud operations.
          </p>

          <p className="mb-8 text-xl">
            Building on this strong foundation, Cloud Sentrics now provides organizations with secure cloud storage and controlled file-sharing solutions. Our platform is specifically designed to help schools, clinics, laboratories, and enterprises protect sensitive information, maintain auditability, and operate confidently in security-conscious environments.
          </p>

          <p className="mb-10 text-2xl font-semibold text-gray-900 border-t border-gray-200 pt-10">
            By combining practical cloud expertise with enterprise-focused education, Cloud Sentrics helps organizations and professionals operate securely, responsibly, and at scale.
          </p>
        </article>

        <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/read4.png"
            alt="Diverse team of professionals collaborating and pointing at work on cloud education and solutions"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    ),
  },

  {
    slug: "trusted-compliant-partner",
    title: "Cloud Sentrics: A Trusted Partner for Secure, Compliant Cloud Services",
    image: "/news14.png",
    fullContent: (
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 md:py-16">
        {/* Main description paragraphs */}
        <article className="prose prose-lg md:prose-xl prose-gray max-w-none text-gray-800 leading-relaxed">
          <p className="mb-8 text-xl md:text-2xl">
            Cloud Sentrics provides enterprise-grade cloud solutions designed to help organizations securely store, protect, and share sensitive information in compliance-focused environments.
          </p>

          <p className="mb-8 text-xl md:text-2xl">
            Our core offering is a secure cloud storage and controlled file-sharing platform that enables organizations to separate sensitive data from core systems, enforce access controls, and maintain full audit visibility over how files are accessed and delivered.
          </p>

          <p className="mb-10 text-xl md:text-2xl">
            Our solutions support:
          </p>

          {/* Bullet list – styled for clarity and emphasis */}
          <ul className="list-none space-y-5 text-lg md:text-xl text-gray-800 mb-12 pl-0">
            <li className="flex items-start gap-4">
              <span className="text-[#14224a] text-2xl font-bold mt-1">•</span>
              <span>Secure cloud storage for sensitive organizational data </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#14224a] text-2xl font-bold mt-1">•</span>
              <span>Controlled file sharing with OTP-based access verification </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#14224a] text-2xl font-bold mt-1">•</span>
              <span>Data protection and compliance alignment (NDPC, GDPR-aligned, HIPAA-ready)</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#14224a] text-2xl font-bold mt-1">•</span>
              <span>Detailed audit logs and delivery records for accountability </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#14224a] text-2xl font-bold mt-1">•</span>
              <span>Advisory support for secure cloud and data protection best practices</span>
            </li>
          </ul>

          <p className="mb-12 md:mb-16 text-xl md:text-2xl">
            With our Nigerian office in Ibadan, Oyo State, Cloud Sentrics is well positioned to support schools, laboratories, clinics, and regulated organizations across Nigeria and Africa with cloud solutions that meet both local and global compliance expectations
          </p>
        </article>

        {/* Full-width team/group photo at the bottom */}
        <div className="overflow-hidden rounded-2xl shadow-2xl -mx-5 sm:-mx-8 md:mx-0">
          <img
            src="/read5.png"  // ← replace with your actual team photo path if different
            alt="Cloud Sentrics team – professionals collaborating in a modern tech environment"
            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
            loading="lazy"
          />
        </div>
      </div>
    ),
  },
];

export default function ReadmorePage() {
  const { slug } = useParams();

  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-6 max-w-lg">
          <h1 className="text-5xl font-bold text-[#14224a] mb-6">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Article not found</p>
          <Link
            to="/news-page/news"
            className="inline-flex items-center gap-2 bg-[#14224a] text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition font-medium text-lg"
          >
            <FiArrowLeft className="w-5 h-5" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        {/* Back button */}
        <Link
          to="/news-page/news"
          className="inline-flex items-center gap-2 text-[#14224a] hover:text-blue-800 mb-10 text-lg font-medium transition"
        >
          <FiArrowLeft className="w-5 h-5" />
          Back to News
        </Link>

        {/* Featured Image + Overlaid Title Bar (preferred style) */}
        <div className="mb-12 relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 sm:h-80 md:h-[500px] lg:h-[600px] object-cover"
          />
          {/* Solid dark blue bar with title */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#14224a] py-6 px-6 md:py-8 md:px-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-center">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Meta (date/location) */}
        <div className="mb-8">
          {article.date && (
            <p className="text-gray-600 text-lg mb-2">
              {article.date} {article.location && ` • ${article.location}`}
            </p>
          )}
        </div>

        {/* Main Content */}
        <div className="prose prose-lg md:prose-xl max-w-none text-gray-800 leading-relaxed">
          {article.fullContent}
        </div>
      </div>
    </div>
  );
}