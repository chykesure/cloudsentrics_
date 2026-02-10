import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/cloudwebpage/Homepage/Home/HomePage.jsx";
import PricePage from "./pages/cloudwebpage/Pricepage/Price/PricePage.jsx";
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
import EducationPage from "./pages/cloudwebpage/Educationpage/Education/EducationPage.jsx";
import HospitalPage from "./pages/cloudwebpage/Hospitalpage/Hopistal/HospitalPage.jsx";
import LaboratoryPage from "./pages/cloudwebpage/Laboratorypage/Laboratory/LaboratoryPage.jsx";
import LawPage from "./pages/cloudwebpage/Lawpage/Law/LawPage.jsx";
import ManufacturingPage from "./pages/cloudwebpage/Manufacturingpage/Manufacturing/ManufacturingPage.jsx";
import RealEstatePage from "./pages/cloudwebpage/RealEstatepage/RealEstate/RealEstatePage.jsx";
import FinancePage from "./pages/cloudwebpage/Financepage/Finance/FinancePage.jsx";
import IndustriesPage from "./pages/cloudwebpage/Industriespage/Industries/IndustriesPage.jsx";
import FileSharingPage from "./pages/cloudwebpage/Filesharingpage/Filesharing/FilesharingPage.jsx";
import NdpcPage from "./pages/cloudwebpage/Ndpcpage/Ndpc/NdpcPage.jsx";
import SecurityPage from "./pages/cloudwebpage/Securitypage/Security/SecurityPage.jsx";
import Mynewspage from "./pages/cloudwebpage/Mynewspage/News/NewsPage.jsx";
import ReadmorePage from "./pages/cloudwebpage/Readmorepage/Readmore/ReadmorePage.jsx";
import WhycloudsentricsPage from "./pages/cloudwebpage/Whycloudsentrics/Whycloud/WhycloudsentricsPage.jsx";
import CustomerPage from "./pages/cloudwebpage/Customerpage/Customer/CustomerPage.jsx";
import CompanyPage from "./pages/cloudwebpage/Companypage/Company/CompanyPage.jsx";
import CareerPage from "./pages/cloudwebpage/Careerpage/Career/CareerPage.jsx";
import GetstartedPage from "./pages/cloudwebpage/Getstartedpage/Getstarted/GetstartedPage.jsx";

// Wrapper to conditionally render floating buttons
const FloatingButtonsWrapper = () => {
  const location = useLocation();

  // Updated list of paths where the button should be hidden
  const hideOnPaths = [
    "/",
    "/pricing",
    "/solutions/education",
    "/solutions/hospitals",
    "/solutions/laboratories",
    "/solutions/law-firms",
    "/solutions/manufacturing",
    "/solutions/real-estate",
    "/solutions/financial",
    "/solutions/other",
    "/solutions/filesharing",
    "/solutions/ndpc",
    "/security",
    "/news-page/news", // Using startsWith below handles the :slug dynamic route automatically
    "/why-cloud-sentrics",
    "/customers",
    "/company",
    "/careers",
    "/get-started"
  ];

  // Check if the current path starts with any of the hidden paths
  // This ensures dynamic routes (like /news-page/news/some-article) are also hidden
  const shouldShow = !hideOnPaths.some(path => location.pathname.startsWith(path));

  return shouldShow ? <FloatsButtons /> : null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Floating buttons – hidden on the paths listed in FloatingButtonsWrapper */}
        <FloatingButtonsWrapper />

        <div className="flex-grow pt-20">
          <Routes>
            {/* Main product site */}
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricePage />} />
            <Route path="/solutions/education" element={<EducationPage />} />
            <Route path="/solutions/hospitals" element={<HospitalPage />} />
            <Route path="solutions/laboratories" element={<LaboratoryPage />} />
            <Route path="solutions/law-firms" element={<LawPage />} />
            <Route path="/solutions/manufacturing" element={<ManufacturingPage />} />
            <Route path="/solutions/real-estate" element={<RealEstatePage />} />
            <Route path="/solutions/financial" element={<FinancePage />} />
            <Route path="/solutions/other" element={<IndustriesPage />} />
            <Route path="/solutions/filesharing" element={<FileSharingPage />} />
            <Route path="/solutions/ndpc" element={<NdpcPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/news-page/news" element={<Mynewspage />} />
            <Route path="/news-page/news/:slug" element={<ReadmorePage />} />
            <Route path="/why-cloud-sentrics" element={<WhycloudsentricsPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/get-started" element={<GetstartedPage />} />

            {/* Old training/landing */}
            <Route path="/students" element={<LandingPage />} />

            {/* Student routes */}
            <Route path="/StudentPage" element={<StudentPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/more" element={<More />} />
            <Route path="/courses/aws" element={<AWS />} />
            <Route path="/courses/azure" element={<AZURE />} />
            <Route path="/courses/devsecops" element={<DevSecOps />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/events" element={<EventsPage />} />

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