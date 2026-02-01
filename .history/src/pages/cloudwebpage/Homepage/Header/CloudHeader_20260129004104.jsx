// src/pages/cloudwebpage/Homepage/Header/CloudHeader.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const CloudHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { label: 'Home', href: '/', submenu: null },
    {
      label: 'Product',
      href: '/product', // CHANGED: From #product to /product
      submenu: [
        { label: 'Onboard with us', href: '/onboard' },
        { label: 'Training', href: '/training' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      label: 'Solution',
      href: '/solution', // CHANGED: From #solution to /solution
      submenu: [
        { label: 'Secure Storage', href: '/solution/storage' },
        { label: 'File Sharing', href: '/solution/sharing' },
        { label: 'Compliance Tools', href: '/solution/compliance' },
      ],
    },
    {
      label: 'Resources',
      href: '/resources', // CHANGED
      submenu: [
        { label: 'Blog', href: '/blog' },
        { label: 'Help Center', href: '/help' },
        { label: 'Documentation', href: '/docs' },
      ],
    },
    { label: 'Security & Trust', href: '/security', submenu: null }, // CHANGED
    {
      label: 'About us',
      href: '/about', // CHANGED
      submenu: [
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  // Logic to determine if a link is active
  const isActive = (link) => {
    // Exact match for Home
    if (link.href === '/') {
      return currentPath === '/' || currentPath === '';
    }

    // If the path is exactly the link (e.g. /about)
    if (currentPath === link.href) return true;

    // If the path is inside a submenu (e.g. /pricing is inside Product)
    if (link.submenu) {
      return link.submenu.some((sub) => currentPath.startsWith(sub.href));
    }

    return false;
  };

  const activeColorClass = 'text-[#04D1FF]'; // Cyan
  const inactiveColorClass = 'text-slate-300';
  const hoverColorClass = 'hover:text-[#04D1FF]';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src="/cloud.png"
              alt="Cloud Sentrics Logo"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain drop-shadow-lg brightness-110 cursor-pointer"
              loading="eager"
            />
          </Link>
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
              {/* Replaced motion.a with Link */}
              <Link
                to={link.href}
                className={`flex items-center text-base font-medium transition-all duration-200 ${
                  isActive(link)
                    ? activeColorClass
                    : `${inactiveColorClass} ${hoverColorClass}`
                }`}
              >
                <span className={`transition-transform duration-200 ${isActive(link) ? 'scale-105' : 'group-hover:scale-105'}`}>
                  {link.label}
                </span>
                {link.submenu && (
                  <FaChevronDown className="ml-1 text-xs transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown Submenu */}
              {link.submenu && activeDropdown === link.label && (
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
                        <Link
                          to={sub.href}
                          className={`block px-5 py-3 text-sm transition-colors duration-150 ${
                            currentPath === sub.href
                              ? 'text-[#04D1FF] bg-blue-900/40' // Active submenu
                              : `text-slate-300 hover:bg-blue-900/60 hover:text-[#04D1FF]`
                          }`}
                        >
                          {sub.label}
                        </Link>
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
                  <Link
                    to={link.href}
                    className={`flex items-center justify-between text-lg font-medium transition-colors ${
                      isActive(link)
                        ? activeColorClass
                        : `${inactiveColorClass} ${hoverColorClass}`
                    }`}
                    onClick={() => !link.submenu && setIsOpen(false)}
                  >
                    {link.label}
                    {link.submenu && <FaChevronDown className="text-sm" />}
                  </Link>

                  {link.submenu && (
                    <div className="ml-6 mt-3 space-y-3 border-l-2 border-slate-700 pl-4">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className={`block text-base transition-colors ${
                            currentPath === sub.href
                              ? 'text-[#04D1FF]'
                              : `text-slate-400 hover:text-[#04D1FF]`
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
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