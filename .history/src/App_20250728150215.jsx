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
import ScrollToTop from "./components/ScrollToTop"; // <- Add this line

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
