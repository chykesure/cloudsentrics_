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

  // Solutions Data (kept as table)
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
      submenu: [{ label: 'View Solutions', href: '#' }], // dummy for chevron
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
                      activeDropdown === link.label || lockedDropdown === link.label
                        ? 'rotate-180'
                        : 'group-hover:rotate-180'
                    }`}
                  />
                )}
              </motion.a>

              {/* Unified Dropdown for ALL menus */}
              <AnimatePresence>
                {(activeDropdown === link.label || lockedDropdown === link.label) && link.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute left-0 top-full mt-3 ${
                      link.label === 'Solution' ? 'w-[480px]' : 'w-72'
                    } bg-white border border-slate-200 rounded-xl shadow-2xl py-5 px-6 z-50 text-sm overflow-hidden`}
                  >
                    {link.label === 'Solution' ? (
                      // Solutions Table - remains special
                      <div className="w-full">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-slate-200">
                              <th className="text-left pb-4 font-semibold text-slate-800">Industries</th>
                              <th className="text-left pb-4 font-semibold text-slate-800">Use Case</th>
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
                                  <td className="py-3 pr-10 align-middle">
                                    <a
                                      href={item.href}
                                      className={`block w-full h-full ${
                                        isItemActive ? 'text-white' : 'hover:text-[#04D1FF] hover:underline'
                                      }`}
                                      onClick={() => {
                                        handleSubmenuClick(link.label);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      {item.industry}
                                    </a>
                                  </td>
                                  <td className="py-3 align-middle">
                                    {item.useCase ? (
                                      <a
                                        href={item.href}
                                        className={`block w-full h-full ${
                                          isItemActive ? 'text-white' : 'hover:text-[#04D1FF]'
                                        }`}
                                        onClick={() => {
                                          handleSubmenuClick(link.label);
                                          setActiveDropdown(null);
                                        }}
                                      >
                                        {item.useCase}
                                      </a>
                                    ) : (
                                      <span className="block text-slate-400">-</span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      // Beautiful consistent list for Product / Resources / About us
                      <div className="flex flex-col gap-2">
                        {link.submenu.map((sub) => {
                          const isActiveSub = currentPath === sub.href;
                          return (
                            <motion.a
                              key={sub.label}
                              href={sub.href}
                              onClick={() => {
                                handleSubmenuClick(link.label);
                                setActiveDropdown(null);
                              }}
                              className={`flex items-center justify-between px-5 py-3.5 rounded-lg transition-all duration-200 ${
                                isActiveSub
                                  ? 'bg-[#07154C] text-white font-medium shadow-sm'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-[#04D1FF]'
                              }`}
                              whileHover={{ x: 6, transition: { duration: 0.2 } }}
                            >
                              {sub.label}
                              {isActiveSub && <span className="ml-auto text-xs opacity-90">✓</span>}
                            </motion.a>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
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

      {/* Mobile Menu (kept simpler but consistent) */}
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