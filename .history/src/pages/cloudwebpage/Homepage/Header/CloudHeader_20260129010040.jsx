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
      submenu: [
        { label: 'Secure Storage', href: '/solution/storage' },
        { label: 'File Sharing', href: '/solution/sharing' },
        { label: 'Compliance Tools', href: '/solution/compliance' },
      ],
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

  const isActive = (link) => {
    return activeMenu === link.label;
  };

  const handleMenuClick = (e, label) => {
    e.preventDefault();
    setActiveMenu(label);

    if (lockedDropdown === label) {
      setLockedDropdown(null);
    } else {
      setLockedDropdown(label);
    }
  };

  const handleSubmenuClick = (parentLabel) => {
    setActiveMenu(parentLabel);
  };

  const activeColorClass = 'text-[#04D1FF]';
  const inactiveColorClass = 'text-slate-300';

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
              onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.a
                href={link.href}
                onClick={(e) => handleMenuClick(e, link.label)}
                // UPDATED CLASSES HERE:
                // Added px-3 py-1 and rounded-lg for the pill shape
                // Added hover:bg-white hover:text-slate-900 for the white effect
                className={`flex items-center px-3 py-1 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(link)
                    ? activeColorClass
                    : `${inactiveColorClass} hover:bg-white hover:text-slate-900`
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

              {/* Dropdown Submenu */}
              {link.submenu && (activeDropdown === link.label || lockedDropdown === link.label) && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full mt-3 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-3 overflow-hidden z-50"
                  >
                    {link.submenu.map((sub, idx) => (
                      <React.Fragment key={sub.label}>
                        <motion.a
                          href={sub.href}
                          onClick={() => handleSubmenuClick(link.label)}
                          className={`block px-5 py-3 text-sm transition-colors duration-150 ${
                            currentPath === sub.href
                              ? 'bg-white text-slate-900' 
                              : 'text-slate-300 hover:bg-white hover:text-slate-900'
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          {sub.label}
                        </motion.a>
                        {idx < link.submenu.length - 1 && (
                          <div className="h-px bg-slate-700 mx-4" />
                        )}
                      </React.Fragment>
                    ))}
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

      {/* Mobile Menu */}
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
                    // Mobile styling also updated with white hover
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-lg font-medium transition-colors ${
                      isActive(link)
                        ? activeColorClass
                        : `${inactiveColorClass} hover:bg-white hover:text-slate-900`
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {link.label}
                    {link.submenu && <FaChevronDown className="text-sm" />}
                  </motion.a>

                  {/* Mobile Submenu */}
                  {link.submenu && (activeDropdown === link.label || lockedDropdown === link.label) && (
                    <div className="ml-6 mt-3 space-y-3 border-l-2 border-slate-700 pl-4">
                      {link.submenu.map((sub) => (
                        <motion.a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => {
                            handleSubmenuClick(link.label);
                            setIsOpen(false);
                          }}
                          className={`block text-base transition-colors ${
                            currentPath === sub.href
                              ? 'text-[#04D1FF]'
                              : 'text-slate-400 hover:bg-white hover:text-slate-900 px-2 py-1 rounded'
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          {sub.label}
                        </motion.a>
                      ))}
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