import React, { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/* ======================== */
/* Reusable Check Item      */
/* ======================== */
const CheckItem = ({ children }) => (
  <div className="flex items-start gap-3">
    <FiCheckSquare className="mt-[3px] text-[#14224a] w-[18px] h-[18px]" />
    <p className="text-[#1f1f1f] text-[17px] leading-[28px]">
      {children}
    </p>
  </div>
);

/* ======================== */
/* Form Status Message      */
/* ======================== */
const FormStatus = ({ status }) => {
  if (!status) return null;
  return (
    <div
      className={`p-4 rounded-xl text-center ${status.type === "success"
        ? "bg-green-100 text-green-800 border border-green-200"
        : "bg-red-100 text-red-800 border border-red-200"
        }`}
    >
      {status.msg}
    </div>
  );
};

/* ======================== */
/* Main Component           */
/* ======================== */
const CloudSentricsFeatures = () => {
  const SCRIPT_URL =
    //"https://script.google.com/macros/s/AKfycbwiQKXzJPspOIVN-xvKf7gwfZGNn9RNCzO-0T1yX0WZHjYAfetJK-iceIzQ-S22xPEw/exec";
    "https://script.google.com/macros/s/AKfycbxSE_xIFvjzZyM846MLc14ZtEYoKbzXCASIMhLptAzfzgXN43X6IL5RiR5FLZZHvEy-/exec";

  // ── Accordion State ──
  const [activeSection, setActiveSection] = useState(-1); // -1 = none, 0 = Demo, 1 = Contact

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? -1 : index);
  };

  // ── Demo Form State ──
  const [demoForm, setDemoForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    company: "",
    phone: "",
    companySize: "",
    country: "",
    source: "",
    comments: "",
    preferredDateTime1: null,
    preferredDateTime2: null,
  });

  const [demoLoading, setDemoLoading] = useState(false);
  const [demoStatus, setDemoStatus] = useState(null);

  // ── Contact Form State ──
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    companySize: "",
    country: "",
    source: "",
    comments: "",
  });

  const [contactLoading, setContactLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState(null);

  const handleChange = (e, formType) => {
    const { id, value } = e.target;
    const field = id.replace(/^(demo|contact)-/, "");

    if (formType === "demo") {
      setDemoForm((prev) => ({ ...prev, [field]: value }));
    } else {
      setContactForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleDateChange = (date, field) => {
    setDemoForm((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();

    const isDemo = formType === "demo";
    let formData = isDemo ? { ...demoForm } : { ...contactForm };
    const setLoading = isDemo ? setDemoLoading : setContactLoading;
    const setStatus = isDemo ? setDemoStatus : setContactStatus;

    setLoading(true);
    setStatus(null);

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.company) {
      setStatus({
        type: "error",
        msg: "Please fill in First Name, Business Email, and Company",
      });
      setLoading(false);
      return;
    }

    // Convert dates to strings for submission
    if (isDemo) {
      if (formData.preferredDateTime1) {
        formData.preferredDateTime1 = formData.preferredDateTime1.toLocaleString("en-US", {
          dateStyle: "long",
          timeStyle: "short",
        });
      }
      if (formData.preferredDateTime2) {
        formData.preferredDateTime2 = formData.preferredDateTime2.toLocaleString("en-US", {
          dateStyle: "long",
          timeStyle: "short",
        });
      }
    }

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      setStatus({
        type: "success",
        msg: "Thank you! Your submission has been received. We'll get back to you soon.",
      });

      // Reset form
      const emptyForm = {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        company: "",
        phone: "",
        companySize: "",
        country: "",
        source: "",
        comments: "",
        preferredDateTime1: null,
        preferredDateTime2: null,
      };

      if (isDemo) {
        setDemoForm(emptyForm);
      } else {
        setContactForm(emptyForm);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        type: "error",
        msg: "Something went wrong. Please try again or contact support.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ======================== */}
      {/* Accordion Selection Menu  */}
      {/* ======================== */}
      <section className="bg-gray-50/70 py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-10">
            How can we help you today?
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Demo Accordion Item */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200">
              <button
                onClick={() => toggleSection(0)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={activeSection === 0}
              >
                <span className="text-xl font-semibold text-slate-900">
                  Request a Demo
                </span>
                <FaChevronDown
                  className={`text-blue-600 text-xl transition-transform duration-300 ${activeSection === 0 ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>

            {/* Contact Accordion Item */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200">
              <button
                onClick={() => toggleSection(1)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={activeSection === 1}
              >
                <span className="text-xl font-semibold text-slate-900">
                  General Contact / Inquiry
                </span>
                <FaChevronDown
                  className={`text-blue-600 text-xl transition-transform duration-300 ${activeSection === 1 ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== */}
      {/* Demo Section (conditional) */}
      {/* ======================== */}
      {activeSection === 0 && (
        <section className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] opacity-50 translate-x-1/2 translate-y-1/2"></div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left column - description */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-2xl font-bold uppercase tracking-wider">
                  Get a Closer Look
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                  I am interested in a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Cloud Sentrics Demo
                  </span>
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  See how Cloud Sentrics helps organizations protect, control, and securely manage sensitive files without replacing existing systems.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Schedule a personalized walkthrough to understand how we secure documents after they are generated ensuring controlled access, accountability, and long-term data protection for schools, hospitals, laboratories, and other regulated organizations.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xl font-bold uppercase tracking-wider">
                    What to Expect
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-slate-900 text-xl">30-Minute Guided Walkthrough</h4>
                      <p className="text-slate-500 text-xl">A focused demonstration of how Cloud Sentrics protects sensitive records, controls access, and prevents data loss across your organization.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-slate-900 text-xl">Expert Q&A</h4>
                      <p className="text-slate-500 text-xl">Speak directly with our engineers about data protection, secure file sharing, access controls, and compliance requirements specific to your organization.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DEMO FORM */}
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100">
                <form className="space-y-5" onSubmit={(e) => handleSubmit(e, "demo")}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="demo-firstName" className="text-xs font-bold uppercase tracking-wider text-slate-500">First Name *</label>
                      <input
                        type="text"
                        id="demo-firstName"
                        value={demoForm.firstName}
                        onChange={(e) => handleChange(e, "demo")}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="demo-lastName" className="text-xs font-bold uppercase tracking-wider text-slate-500">Last Name</label>
                      <input
                        type="text"
                        id="demo-lastName"
                        value={demoForm.lastName}
                        onChange={(e) => handleChange(e, "demo")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="demo-email" className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Email *</label>
                      <input
                        type="email"
                        id="demo-email"
                        value={demoForm.email}
                        onChange={(e) => handleChange(e, "demo")}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="demo-jobTitle" className="text-xs font-bold uppercase tracking-wider text-slate-500">Job Title</label>
                      <input
                        type="text"
                        id="demo-jobTitle"
                        value={demoForm.jobTitle}
                        onChange={(e) => handleChange(e, "demo")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="e.g. CTO"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="demo-company" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company *</label>
                      <input
                        type="text"
                        id="demo-company"
                        value={demoForm.company}
                        onChange={(e) => handleChange(e, "demo")}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="demo-phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                      <input
                        type="tel"
                        id="demo-phone"
                        value={demoForm.phone}
                        onChange={(e) => handleChange(e, "demo")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="demo-companySize" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Size</label>
                      <div className="relative">
                        <select
                          id="demo-companySize"
                          value={demoForm.companySize}
                          onChange={(e) => handleChange(e, "demo")}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select size...</option>
                          <option>1 - 50 Employees</option>
                          <option>51 - 200 Employees</option>
                          <option>201 - 500 Employees</option>
                          <option>500+ Employees</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="demo-country" className="text-xs font-bold uppercase tracking-wider text-slate-500">Country</label>
                      <div className="relative">
                        <select
                          id="demo-country"
                          value={demoForm.country}
                          onChange={(e) => handleChange(e, "demo")}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select country...</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Nigeria</option>
                          <option>Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="demo-preferredDateTime1"
                        className="text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        Preferred Date & Time
                      </label>
                      <DatePicker
                        id="demo-preferredDateTime1"
                        selected={demoForm.preferredDateTime1}
                        onChange={(date) => handleDateChange(date, "preferredDateTime1")}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        minDate={new Date()}
                        placeholderText="Select date and time..."
                        className="block w-full px-4 py-3 text-base text-slate-900 bg-white border border-slate-300 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                        calendarClassName="border border-slate-200 rounded-xl shadow-lg"
                        popperClassName="z-[100] !important"
                        popperPlacement="bottom-start"
                        withPortal
                        popperModifiers={[
                          { name: 'preventOverflow', options: { boundary: 'viewport', padding: 16 } },
                          { name: 'flip', options: { fallbackPlacements: ['top-start', 'bottom-start', 'top-end'], padding: 8 } },
                          { name: 'offset', options: { offset: [0, 8] } },
                        ]}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="demo-preferredDateTime2"
                        className="text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        Second Preferred Date & Time
                      </label>
                      <DatePicker
                        id="demo-preferredDateTime2"
                        selected={demoForm.preferredDateTime2}
                        onChange={(date) => handleDateChange(date, "preferredDateTime2")}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                        minDate={new Date()}
                        placeholderText="Select date and time..."
                        className="block w-full px-4 py-3 text-base text-slate-900 bg-white border border-slate-300 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                        calendarClassName="border border-slate-200 rounded-xl shadow-lg"
                        popperClassName="z-[100] !important"
                        popperPlacement="bottom-start"
                        withPortal
                        popperModifiers={[
                          { name: 'preventOverflow', options: { boundary: 'viewport', padding: 16 } },
                          { name: 'flip', options: { fallbackPlacements: ['top-start', 'bottom-start', 'top-end'], padding: 8 } },
                          { name: 'offset', options: { offset: [0, 8] } },
                        ]}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="demo-source" className="text-xs font-bold uppercase tracking-wider text-slate-500">How did you first hear about Cloud Sentrics?</label>
                    <div className="relative">
                      <select
                        id="demo-source"
                        value={demoForm.source}
                        onChange={(e) => handleChange(e, "demo")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select an option...</option>
                        <option>Search Engine (Google, etc.)</option>
                        <option>Social Media (LinkedIn, Twitter)</option>
                        <option>Referral / Colleague</option>
                        <option>Event / Conference</option>
                        <option>Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="demo-comments" className="text-xs font-bold uppercase tracking-wider text-slate-500">Comments</label>
                    <textarea
                      id="demo-comments"
                      rows="4"
                      value={demoForm.comments}
                      onChange={(e) => handleChange(e, "demo")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <FormStatus status={demoStatus} />

                  <button
                    type="submit"
                    disabled={demoLoading}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${demoLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    {demoLoading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ======================== */}
      {/* Contact Section (conditional) */}
      {/* ======================== */}
      {activeSection === 1 && (
        <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left column */}
              <div className="space-y-8 lg:sticky lg:top-32">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-2xl font-bold uppercase tracking-wider">
                  Contact Us
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  I have a general <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                    contact inquiry
                  </span>
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Whether you have questions about protecting sensitive data, securing files, exploring our solutions, or understanding how Cloud Sentrics fits into your organization, our team is here to help.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Reach out to discuss secure storage, controlled access, compliance needs, or partnership opportunities and we’ll guide you in the right direction.
                </p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4">Other ways to reach us</h4>
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-center text-slate-600">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href="mailto:info@cloudsentrics.org"
                        className="hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        info@cloudsentrics.org
                      </a>
                    </div>

                    {/* WhatsApp – now with uniform blue color */}
                    <div className="flex items-center text-slate-600">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"  // ← added text-blue-500 + mr-3 for spacing consistency
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                      <a
                        href="https://wa.me/2348144573546"  // changed to wa.me link (better UX for WhatsApp)
                        className="hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        +234 814 457 3546
                      </a>
                    </div>

                    {/* Phone 1 */}
                    <div className="flex items-center text-slate-600">
                      <svg
                        className="w-5 h-5 mr-3 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <a
                        href="tel:+2347056639388"
                        className="hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        +234 705 663 9388
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100">
                <form className="space-y-5" onSubmit={(e) => handleSubmit(e, "contact")}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-firstName" className="text-xs font-bold uppercase tracking-wider text-slate-500">First Name *</label>
                      <input
                        type="text"
                        id="contact-firstName"
                        value={contactForm.firstName}
                        onChange={(e) => handleChange(e, "contact")}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-lastName" className="text-xs font-bold uppercase tracking-wider text-slate-500">Last Name</label>
                      <input
                        type="text"
                        id="contact-lastName"
                        value={contactForm.lastName}
                        onChange={(e) => handleChange(e, "contact")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-company" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Name *</label>
                      <input
                        type="text"
                        id="contact-company"
                        value={contactForm.company}
                        onChange={(e) => handleChange(e, "contact")}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-jobTitle" className="text-xs font-bold uppercase tracking-wider text-slate-500">Job Title</label>
                      <input
                        type="text"
                        id="contact-jobTitle"
                        value={contactForm.jobTitle}
                        onChange={(e) => handleChange(e, "contact")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="e.g. Manager"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Email *</label>
                      <input
                        type="email"
                        id="contact-email"
                        value={contactForm.email}
                        onChange={(e) => handleChange(e, "contact")}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={contactForm.phone}
                        onChange={(e) => handleChange(e, "contact")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-companySize" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Size</label>
                      <div className="relative">
                        <select
                          id="contact-companySize"
                          value={contactForm.companySize}
                          onChange={(e) => handleChange(e, "contact")}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select size...</option>
                          <option>1 - 50 Employees</option>
                          <option>51 - 200 Employees</option>
                          <option>201 - 500 Employees</option>
                          <option>500+ Employees</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-country" className="text-xs font-bold uppercase tracking-wider text-slate-500">Country</label>
                      <div className="relative">
                        <select
                          id="contact-country"
                          value={contactForm.country}
                          onChange={(e) => handleChange(e, "contact")}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select country...</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Nigeria</option>
                          <option>Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-source" className="text-xs font-bold uppercase tracking-wider text-slate-500">How did you first hear about Cloud Sentrics?</label>
                    <div className="relative">
                      <select
                        id="contact-source"
                        value={contactForm.source}
                        onChange={(e) => handleChange(e, "contact")}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select an option...</option>
                        <option>Search Engine</option>
                        <option>Social Media</option>
                        <option>Referral</option>
                        <option>Advertisement</option>
                        <option>Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-comments" className="text-xs font-bold uppercase tracking-wider text-slate-500">Comments</label>
                    <textarea
                      id="contact-comments"
                      rows="5"
                      value={contactForm.comments}
                      onChange={(e) => handleChange(e, "contact")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <FormStatus status={contactStatus} />

                  <button
                    type="submit"
                    disabled={contactLoading}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 ${contactLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    {contactLoading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ======================== */}
      {/* Documentation Section    */}
      {/* ======================== */}
      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Documentation
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Get up and running quickly with our comprehensive guides. From initial setup and configuration to daily operations and compliance, we provide step-by-step instructions to ensure a smooth deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Quick Start Guides</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Step-by-step tutorials to help you integrate Cloud Sentrics into your existing infrastructure in minutes.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Configuration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Detailed reference material for configuring policies, alerts, and automated workflows to suit your needs.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Security & Compliance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Understand how we protect your data and ensure compliance with industry standards like GDPR, HIPAA, and SOC2.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://cloud-sentrics-limited.gitbook.io/cloudsentricsorg"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-blue-950"
            >
              Get docs here
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudSentricsFeatures;