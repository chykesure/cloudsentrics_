import React, { useState } from "react";
import { FiCheckSquare } from "react-icons/fi";

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

const CloudSentricsFeatures = () => {


  return (
    <>
      <section className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] opacity-50 translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* === LEFT COLUMN: Content === */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                Get a closer look
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                I am interested in a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Cloudsentrics Demo
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                See our platform in action. Fill out the form to schedule a personalized walkthrough with our solutions team. We'll show you how to secure your cloud infrastructure effectively.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 class="font-bold text-slate-900">30-Minute Walkthrough</h4>
                    <p class="text-slate-500 text-sm">A focused tour of the features that matter most to you.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <h4 class="font-bold text-slate-900">Expert Q&A</h4>
                    <p class="text-slate-500 text-sm">Get your specific security questions answered by our engineers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* === RIGHT COLUMN: The Form (Complete Fields) === */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                {/* Row 1: Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="demo-firstName" className="text-xs font-bold uppercase tracking-wider text-slate-500">First Name</label>
                    <input type="text" id="demo-firstName" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="demo-lastName" className="text-xs font-bold uppercase tracking-wider text-slate-500">Last Name</label>
                    <input type="text" id="demo-lastName" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Doe" />
                  </div>
                </div>

                {/* Row 2: Email & Job Title */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="demo-email" className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Email</label>
                    <input type="email" id="demo-email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="jane@company.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="demo-jobTitle" className="text-xs font-bold uppercase tracking-wider text-slate-500">Job Title</label>
                    <input type="text" id="demo-jobTitle" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="e.g. CTO" />
                  </div>
                </div>

                {/* Row 3: Company & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="demo-company" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company</label>
                    <input type="text" id="demo-company" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Company Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="demo-phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                    <input type="tel" id="demo-phone" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                {/* Row 4: Size & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="demo-size" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Size</label>
                    <div className="relative">
                      <select id="demo-size" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Select size...</option>
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
                      <select id="demo-country" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Select country...</option>
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

                {/* Row 5: Preferred Time 1 & 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="demo-time1" className="text-xs font-bold uppercase tracking-wider text-slate-500">Preferred Day/Time</label>
                    <div className="relative">
                      <select id="demo-time1" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Select a time...</option>
                        <option>Weekday Morning</option>
                        <option>Weekday Afternoon</option>
                        <option>Weekday Evening</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="demo-time2" className="text-xs font-bold uppercase tracking-wider text-slate-500">Second Preferred Day/Time</label>
                    <div className="relative">
                      <select id="demo-time2" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Select a time...</option>
                        <option>Weekday Morning</option>
                        <option>Weekday Afternoon</option>
                        <option>Weekday Evening</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How did you hear about us */}
                <div className="space-y-1.5">
                  <label htmlFor="demo-source" className="text-xs font-bold uppercase tracking-wider text-slate-500">How did you first hear about Cloudsentrics?</label>
                  <div className="relative">
                    <select id="demo-source" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                      <option>Select an option...</option>
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

                {/* Comments */}
                <div className="space-y-1.5">
                  <label htmlFor="demo-comments" className="text-xs font-bold uppercase tracking-wider text-slate-500">Comments</label>
                  <textarea id="demo-comments" rows="4" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="Tell us about your project or requirements..."></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* === LEFT COLUMN: Content === */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                Contact Us
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                I have a general <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  contact inquiry
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you have questions about our services, need support, or want to explore partnership opportunities, our team is here to help.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Other ways to reach us</h4>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span>support@cloudsentrics.com</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>

            {/* === RIGHT COLUMN: The Form === */}
            <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-100">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                {/* Row 1: Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-firstName" className="text-xs font-bold uppercase tracking-wider text-slate-500">First Name</label>
                    <input type="text" id="contact-firstName" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-lastName" className="text-xs font-bold uppercase tracking-wider text-slate-500">Last Name</label>
                    <input type="text" id="contact-lastName" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Doe" />
                  </div>
                </div>

                {/* Row 2: Company & Job Title */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Name</label>
                    <input type="text" id="contact-company" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="Your Company" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-jobTitle" className="text-xs font-bold uppercase tracking-wider text-slate-500">Job Title</label>
                    <input type="text" id="contact-jobTitle" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="e.g. Manager" />
                  </div>
                </div>

                {/* Row 3: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Email</label>
                    <input type="email" id="contact-email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="jane@company.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                    <input type="tel" id="contact-phone" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                {/* Row 4: Size & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-size" className="text-xs font-bold uppercase tracking-wider text-slate-500">Company Size</label>
                    <div className="relative">
                      <select id="contact-size" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Select size...</option>
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
                      <select id="contact-country" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Select country...</option>
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

                {/* How did you hear about us */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-source" className="text-xs font-bold uppercase tracking-wider text-slate-500">How did you first hear about Cloudsentrics?</label>
                  <div className="relative">
                    <select id="contact-source" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                      <option>Select an option...</option>
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

                {/* Comments */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-comments" className="text-xs font-bold uppercase tracking-wider text-slate-500">Comments</label>
                  <textarea id="contact-comments" rows="5" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
  {/* Background Glow Effect */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 relative z-10">
    
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        Documentation
      </h2>
      <p className="text-lg text-slate-300 leading-relaxed">
        Get up and running quickly with our comprehensive guides. From initial setup and configuration to daily operations and compliance, we provide step-by-step instructions to ensure a smooth deployment.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {/* Card 1: Setup */}
      <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Quick Start Guides</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Step-by-step tutorials to help you integrate Cloud Sentrics into your existing infrastructure in minutes.
        </p>
      </div>

      {/* Card 2: Configuration */}
      <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Configuration</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Detailed reference material for configuring policies, alerts, and automated workflows to suit your needs.
        </p>
      </div>

      {/* Card 3: Security */}
      <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
        <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Security & Compliance</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Understand how we protect your data and ensure compliance with industry standards like GDPR, HIPAA, and SOC2.
        </p>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center">
      <a
        href="https://cloud-sentrics-limited.gitbook.io/cloudsentricsorg"
        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-blue-950"
      >
        Get docs here
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>

  </div>
</section>

    </>
  );
};

export default CloudSentricsFeatures;
