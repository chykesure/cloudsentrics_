import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/cloudwebpage/Homepage/Home/HomePage.jsx";
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
import ScrollToTop from "./pages/ScrollToTop";
import More from "./pages/students/AboutUs/More";

// Helper component to conditionally show FloatsButtons
const FloatingButtonsWrapper = () => {
  const location = useLocation();
  
  // Hide on homepage ("/") only
  const showFloats = location.pathname !== "/";

  return showFloats ? <FloatsButtons /> : null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Floating buttons - only shown on pages EXCEPT homepage */}
        <FloatingButtonsWrapper />

        <div className="flex-grow pt-20">
          <Routes>
            {/* Main product site */}
            <Route path="/" element={<HomePage />} />

            {/* Old training/landing moved here */}
            <Route path="/students" element={<LandingPage />} />

            {/* Student routes – nested */}
            <Route path="/students/student-page" element={<StudentPage />} />
            <Route path="/students/about-us" element={<AboutUs />} />
            <Route path="/students/more" element={<More />} />
            <Route path="/students/courses/aws" element={<AWS />} />
            <Route path="/students/courses/azure" element={<AZURE />} />
            <Route path="/students/courses/devsecops" element={<DevSecOps />} />
            <Route path="/students/blog" element={<Blogs />} />
            <Route path="/students/events" element={<EventsPage />} />

            {/* Partner routes */}
            <Route path="/partner" element={<PartnerPage />} />
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

            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold mb-4">404</h1>
                    <p className="text-2xl mb-6">Page Not Found</p>
                    <a href="/" className="text-blue-400 hover:underline text-xl">
                      Go back to Home
                    </a>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;