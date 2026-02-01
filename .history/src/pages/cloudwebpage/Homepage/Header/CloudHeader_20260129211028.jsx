import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const CloudHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [lockedDropdown, setLockedDropdown] = useState(null);
  const [activeMenu, setActiveMenu] = useState('Home');

  const solutionItems = [
    { industry: 'Education', useCase: 'Secure Storage and File Sharing', href: '/solutions/education' },
    { industry: 'Hospitals', useCase: 'NDPC Compliance', href: '/solutions/hospitals' },
    { industry: 'Laboratories & Diagnostics Centre', useCase: '', href: '/solutions/laboratories' },
    { industry: 'Law Firms', useCase: '', href: '/solutions/law-firms' },
    { industry: 'Manufacturing', useCase: '', href: '/solutions/manufacturing' },
    { industry: 'Real Estate', useCase: '', href: '/solutions/real-estate' },
    { industry: 'Financial Institutions', useCase: '', href: '/solutions/financial' },
    { industry: 'Other Industries', useCase: '', href: '/solutions/other' },
  ];

  const navLinks = [
    { label: 'Home', href: '/', submenu: null },
    {
      label: 'Product',
      href: '#product',
      submenu: [
        { label: 'Onboard with us', href: '/onboard' },
        { label: 'Training', href: '/training' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      label: 'Solution',
      href: '#solution',
      submenu: [{ label: 'View Solutions', href: '#' }],
    },
    {
      label: 'Resources',
      href: '#resources',
      submenu: [
        { label: 'Blog', href: '/blog' },
        { label: 'Help Center', href: '/help' },
        { label: 'Documentation', href: '/docs' },
      ],
    },
    { label: 'Security & Trust', href: '#security', submenu: null },
    {
      label: 'About us',
      href: '#about',
      submenu: [
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  const handleMenuClick = (e, label) => {
    e.preventDefault();
    setActiveMenu(label);
    setLockedDropdown(lockedDropdown === label ? null : label);
  };

  const handleSubmenuClick = (label) => {
    setActiveMenu(label);
    setActiveDropdown(null);
    setLockedDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <img
          src="/cloud.png"
          alt="Cloud Sentrics Logo"
          className="h-14 w-auto object-contain"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 relative">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                onClick={(e) => handleMenuClick(e, link.label)}
                className="flex items-center text-slate-300 hover:text-[#04D1FF] transition"
              >
                {link.label}
                {link.submenu && <FaChevronDown className="ml-1 text-xs" />}
              </a>

              {(activeDropdown === link.label || lockedDropdown === link.label) && link.submenu && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute left-0 top-full mt-3 ${
                      link.label === 'Solution' ? 'w-[520px]' : 'w-64'
                    } bg-white text-black rounded-xl shadow-xl p-5 z-50`}
                  >

                    {/* SOLUTION SUB-MENU */}
                    {link.label === 'Solution' ? (
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr>
                            <th className="text-left pb-2 font-semibold text-slate-800">
                              Industries
                            </th>
                            <th className="text-left pb-2 font-semibold text-slate-800">
                              Use Case
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {solutionItems.map((item) => {
                            const active = currentPath === item.href;

                            return (
                              <tr key={item.industry}>
                                {/* Industry */}
                                <td className="py-2 pr-6">
                                  <a
                                    href={item.href}
                                    onClick={() => handleSubmenuClick(link.label)}
                                    className={`block px-2 py-1 rounded transition
                                      ${
                                        active
                                          ? 'bg-[#04D1FF] text-white'
                                          : 'hover:bg-[#07154C] hover:text-white'
                                      }`}
                                  >
                                    {item.industry}
                                  </a>
                                </td>

                                {/* Use Case */}
                                <td className="py-2">
                                  {item.useCase ? (
                                    <a
                                      href={item.href}
                                      onClick={() => handleSubmenuClick(link.label)}
                                      className={`block px-2 py-1 rounded transition
                                        ${
                                          active
                                            ? 'bg-[#04D1FF] text-white'
                                            : 'hover:bg-[#07154C] hover:text-white'
                                        }`}
                                    >
                                      {item.useCase}
                                    </a>
                                  ) : null}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      /* OTHER DROPDOWNS */
                      link.submenu.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => handleSubmenuClick(link.label)}
                          className="block px-4 py-3 rounded hover:bg-[#07154C] hover:text-white transition"
                        >
                          {sub.label}
                        </a>
                      ))
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
          Get started
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default CloudHeader;
