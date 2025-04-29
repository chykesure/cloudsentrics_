import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudentPage from "./pages/students/StudentPage";
import AboutUs from "./pages/students/AboutUs/AboutUs";
import "./App.css";
import AWS from "./pages/students/courses/AWS";
import DevSecOps from "./pages/students/courses/DevSecOps";
import AZURE from "./pages/students/courses/AZURE";
import Blogs from "./pages/students/blogs/Blogs";
import EventsPage from "./pages/students/events/EventsPage";
import FloatsButtons from "./pages/FloatsButtons";
import PartnerPage from "./pages/partners/home/PartnerPage";
import Ai from "./pages/partners/menu/ai";
import CloudSecurity from "./pages/partners/menu/cloudsecurity";
import IOT from "./pages/partners/menu/iot";
import Technology from "./pages/partners/menu/technology";
import Workplace from "./pages/partners/menu/workplace";
import InsightMenu from "./pages/partners/main_menu/insight";
import NewsPage from "./pages/partners/main_menu/news";
import CaseStudy from "./pages/partners/main_menu/casestudy";
import AboutCloud from "./pages/partners/main_menu/aboutus";
import Careers from "./pages/partners/main_menu/careers";
import ContactUs from "./pages/partners/main_menu/contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Floating Buttons will always be visible */}
        <FloatsButtons />

        <div className="flex-grow pt-20"> {/* Adjust padding-top based on header height */}
          <Routes>

            {/* Student Section */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/StudentPage" element={<StudentPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/courses/AWS" element={<AWS />} />
            <Route path="/courses/Azure" element={<AZURE />} />
            <Route path="/courses/DevSecOps" element={<DevSecOps />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/events" element={<EventsPage />} />

            {/* The Partner Section */}
            <Route path="/PartnerPage" element={<PartnerPage />} />
            <Route path="/ai" element={<Ai />} />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/iot" element={<IOT />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/modern-workplace" element={<Workplace />} />
            <Route path="/insights" element={<InsightMenu />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/case-studies" element={<CaseStudy />} />
            <Route path="/about-us" element={<AboutCloud />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


<section className="px-4 sm:px-6 md:px-6 lg:px-8 py-8 bg-gray-100">
  <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
    {/* Our Mission */}
    <div className="bg-white shadow-xl rounded-lg p-10 md:p-16 lg:p-20 flex flex-col items-stretch transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <h4 className="text-2xl font-bold text-gray-900">Mission Statement – Cloud Sentrics</h4>
      <p className="text-gray-700 mt-6 text-lg leading-relaxed">
        At Cloud Sentrics, our mission is to empower individuals and businesses with the skills,
        knowledge, and solutions needed to excel in the ever-evolving world of Cloud Security,
        DevSecOps, and Cloud Engineering. Through cutting-edge training, hands-on experience,
        and industry-driven expertise, we bridge the gap between learning and real-world application.
      </p>
      <p className="text-gray-700 mt-4 text-lg leading-relaxed">
        We are committed to fostering a global community of cloud professionals, equipping them
        with job-ready skills, industry certifications, and innovative cloud solutions to drive
        transformation and success in the digital era.
      </p>
      <img
        src={consultingImage}
        className="w-full max-w-full h-96 md:h-[350px] lg:h-[500px] xl:h-[500px] object-cover rounded-lg shadow-md mt-6 hover:scale-105 transition-transform duration-300"
        alt="Our Mission"
      />
    </div>


    {/* Our Services */}
    <div className="bg-white shadow-xl rounded-lg p-10 md:p-16 lg:p-20 flex flex-col items-stretch transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <h4 className="text-2xl font-bold text-gray-900 text-left md:text-center">Our Services</h4>
      <p className="text-gray-700 mt-6 text-lg text-left md:text-center">
        At Cloud Sentrics, we’re more than just a training platform, we’re your launchpad into a high-paying tech career. Our programs are designed to equip you with the skills that top employers are hiring for today.

      </p>
      <div className="grid gap-6 mt-8 text-gray-800 text-lg">
        {[
          { title: "Cloud Migration Skills", description: "Learn how to move applications and workloads securely to AWS and Azure." },
          { title: "Cloud Security Expertise", description: "Master real-world cloud protection strategies to keep infrastructure safe from threats." },
          { title: "DevSecOps Knowledge", description: "Understand how to automate security inside CI/CD pipelines and streamline secure software delivery." },
          { title: "Infrastructure as Code (IaC)", description: "Gain hands-on experience using tools like Terraform and AWS CloudFormation to build scalable environments." },
          { title: "Career Opportunities", description: "Get access to career support, LinkedIn optimization, resume building, and direct referrals to companies hiring cloud talent." },
        ].map((service, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span className="text-blue-600 text-2xl">✅</span>
            <p>
              <strong>{service.title}</strong> – {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
