// src/pages/cloudwebpage/Homepage/Header/CloudHeader.jsx
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

  // Define the specific Solutions Data for the Table
  const solutionItems = [
    { 
      industry: 'Education', 
      useCase: 'Secure Storage and File Sharing', 
      href: '/solutions/education' 
    },
    { 
      industry: 'Hospitals', 
      useCase: '', 
      href: '/solutions/hospitals' 
    },
    { 
      industry: 'Laboratories & Diagnostics Centre', 
      useCase: '', 
      href: '/solutions/laboratories' 
    },
    { 
      industry: 'Law Firms', 
      useCase: '', 
      href: '/solutions/law-firms' 
    },
    { 
      industry: 'Manufacturing', 
      useCase: '', 
      href: '/solutions/manufacturing' 
    },
    { 
      industry: 'Real Estate', 
      useCase: '', 
      href: '/solutions/real-estate' 
    },
    { 
      industry: 'Financial Institutions', 
      useCase: 'NDPC Compliance', 
      href: '/solutions/financial' 
    },
    { 
      industry: 'Other Industries', 
      useCase: '', 
      href: '/solutions/other' 
    },
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
      // We keep a dummy entry here so the chevron logic works, 
      // but we override rendering completely below
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

  const isActive = (link) => activeMenu === link.label;

  const handleMenuClick = (e, label) => {
    e.preventDefault();
    setActiveMenu(label);
    setLockedDropdown(lockedDropdown === label ? null : label);
  };

  const handleSubmenuClick = (parentLabel) => {
    setActiveMenu(parentLabel);
  };

  const activeColorClass = 'text-[#04D1FF]';
  const inactiveColorClass = 'text-slate-300';
  const hoverColorClass = 'hover:text-[#04D1FF]';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/cloud.png"
            alt="Cloud Sentrics Logo"
            className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-lg brightness-110"
            loading="eager"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.a
                href={link.href}
                onClick={(e) => handleMenuClick(e, link.label)}
                className={`flex items-center text-base font-medium transition-all duration-200 ${
                  isActive(link)
                    ? activeColorClass
                    : `${inactiveColorClass} ${hoverColorClass}`
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
                {link.submenu && (
                  <FaChevronDown
                    className={`ml-1 text-xs transition-transform ${
                      (activeDropdown === link.label || lockedDropdown === link.label)
                        ? 'rotate-180'
                        : 'group-hover:rotate-180'
                    }`}
                  />
                )}
              </motion.a>

              {/* Dropdown Content */}
              {(activeDropdown === link.label || lockedDropdown === link.label) && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute left-0 top-full mt-3 ${
                      link.label === 'Solution' ? 'w-[480px]' : 'w-64'
                    } bg-white border border-slate-200 rounded-xl shadow-2xl py-4 px-6 overflow-hidden z-50 text-sm`}
                  >
                    {link.label === 'Solution' ? (
                      // --- UPDATED SOLUTION DROPDOWN (TABLE OF LINKS) ---
                      <div className="w-full">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-slate-300">
                              <th className="text-left pb-3 font-semibold text-slate-800">Industries</th>
                              <th className="text-left pb-3 font-semibold text-slate-800">Use Case</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {solutionItems.map((item) => {
                              const isItemActive = currentPath === item.href;
                              return (
                                <tr 
                                  key={item.industry}
                                  className={`transition-colors duration-200 ${
                                    isItemActive 
                                      ? 'bg-[#07154C] text-white font-medium' 
                                      : 'text-slate-700 hover:bg-slate-50'
                                  }`}
                                >
                                  <td className="py-2 pr-8 align-middle">
                                    <a 
                                      href={item.href}
                                      className={`block w-full h-full ${isItemActive ? 'text-white' : 'hover:text-[#04D1FF] hover:underline'}`}
                                      onClick={() => {
                                        handleSubmenuClick(link.label);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      {item.industry}
                                    </a>
                                  </td>
                                  <td className="py-2 align-middle">
                                    {item.useCase ? (
                                      <a 
                                        href={item.href}
                                        className={`block w-full h-full ${isItemActive ? 'text-white' : 'hover:text-[#04D1FF]'}`}
                                        onClick={() => {
                                          handleSubmenuClick(link.label);
                                          setActiveDropdown(null);
                                        }}
                                      >
                                        {item.useCase}
                                      </a>
                                    ) : (
                                      <span className="block opacity-50">-</span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      // Normal list for all other submenus
                      link.submenu.map((sub, idx) => (
                        <React.Fragment key={sub.label}>
                          <motion.a
                            href={sub.href}
                            onClick={() => handleSubmenuClick(link.label)}
                            className={`block px-5 py-3 transition-colors duration-150 ${
                              currentPath === sub.href
                                ? 'bg-[#04D1FF] text-white font-medium'
                                : 'text-slate-700 hover:bg-[#07154C] hover:text-white'
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            {sub.label}
                          </motion.a>
                          {idx < link.submenu.length - 1 && (
                            <div className="h-px bg-slate-100 mx-4" />
                          )}
                        </React.Fragment>
                      ))
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button – Desktop */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition hidden sm:block shadow-md"
        >
          Get started
        </motion.button>

        {/* Hamburger – Mobile */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu – Enhanced to support Solutions list */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      handleMenuClick(e, link.label);
                      if (!link.submenu) setIsOpen(false);
                    }}
                    className={`flex items-center justify-between text-lg font-medium transition-colors ${
                      isActive(link)
                        ? activeColorClass
                        : `${inactiveColorClass} ${hoverColorClass}`
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {link.label}
                    {link.submenu && <FaChevronDown className="text-sm" />}
                  </motion.a>

                  {link.submenu && (activeDropdown === link.label || lockedDropdown === link.label) && (
                    <div className="ml-6 mt-3 space-y-3 border-l-2 border-slate-700 pl-4">
                      {/* Special handling for Solutions in Mobile */}
                      {link.label === 'Solution' ? (
                        solutionItems.map((item) => (
                          <motion.a
                            key={item.industry}
                            href={item.href}
                            onClick={() => {
                              handleSubmenuClick(link.label);
                              setIsOpen(false);
                            }}
                            className={`block text-base transition-colors ${
                              currentPath === item.href
                                ? 'text-[#04D1FF] font-medium'
                                : 'text-slate-400 hover:bg-gray-800 hover:text-white px-2 py-1 rounded'
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            {item.industry}
                          </motion.a>
                        ))
                      ) : (
                        // Standard Mobile Submenu
                        link.submenu.map((sub) => (
                          <motion.a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => {
                              handleSubmenuClick(link.label);
                              setIsOpen(false);
                            }}
                            className={`block text-base transition-colors ${
                              currentPath === sub.href
                                ? 'text-[#04D1FF] font-medium'
                                : 'text-slate-400 hover:bg-gray-800 hover:text-white px-2 py-1 rounded'
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            {sub.label}
                          </motion.a>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get started
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default CloudHeader;