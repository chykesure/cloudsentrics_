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
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

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
    
    // Desktop behavior
    if (window.innerWidth >= 768) {
      setLockedDropdown(lockedDropdown === label ? null : label);
    } else {
      // Mobile behavior
      if (mobileSubMenu === label) {
        setMobileSubMenu(null);
      } else {
        setMobileSubMenu(label);
      }
    }
  };

  const handleSubmenuClick = (label) => {
    setActiveMenu(label);
    setActiveDropdown(null);
    setLockedDropdown(null);
    setMobileSubMenu(null);
    setIsOpen(false); // Close mobile menu after selection
  };

  const renderSolutionSubMenu = (isMobile = false) => (
    <div className={`w-full ${isMobile ? 'bg-white rounded-lg p-4' : 'bg-white rounded-xl p-5'}`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left pb-2 font-semibold text-slate-800 w-1/2">
                Industries
              </th>
              <th className="text-left pb-2 font-semibold text-slate-800 w-1/2">
                Use Case
              </th>
            </tr>
          </thead>
          <tbody>
            {solutionItems.map((item) => {
              const active = currentPath === item.href;
              return (
                <tr key={item.industry} className="border-b border-slate-100 last:border-b-0">
                  {/* Industry */}
                  <td className="py-3 pr-2">
                    <a
                      href={item.href}
                      onClick={() => handleSubmenuClick(item.label)}
                      className={`block w-full px-3 py-2 rounded transition text-sm ${
                        active
                          ? 'bg-[#04D1FF] text-white'
                          : 'text-slate-700 hover:bg-[#07154C] hover:text-white'
                      }`}
                    >
                      {item.industry}
                    </a>
                  </td>
                  
                  {/* Use Case */}
                  <td className="py-3">
                    {item.useCase ? (
                      <a
                        href={item.href}
                        onClick={() => handleSubmenuClick(item.label)}
                        className={`block w-full px-3 py-2 rounded transition text-sm ${
                          active
                            ? 'bg-[#04D1FF] text-white'
                            : 'text-slate-700 hover:bg-[#07154C] hover:text-white'
                        }`}
                      >
                        {item.useCase}
                      </a>
                    ) : (
                      <span className="text-slate-400 text-xs italic">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSubMenu = (submenu, label, isMobile = false) => {
    if (label === 'Solution') {
      return renderSolutionSubMenu(isMobile);
    }

    return (
      <div className={`w-full ${isMobile ? 'space-y-2' : 'space-y-0'}`}>
        {submenu.map((sub) => (
          <a
            key={sub.label}
            href={sub.href}
            onClick={() => handleSubmenuClick(sub.label)}
            className={`block ${
              isMobile 
                ? 'px-4 py-3 rounded-lg hover:bg-[#07154C] hover:text-white transition text-sm' 
                : 'px-4 py-3 rounded hover:bg-[#07154C] hover:text-white transition'
            }`}
          >
            {sub.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Desktop Header */}
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
                      {renderSubMenu(link.submenu, link.label)}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-0 right-0 h-full w-80 bg-slate-900 border-l border-slate-800 z-50 overflow-y-auto"
          >
            {/* Mobile Logo/Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <img
                src="/cloud.png"
                alt="Cloud Sentrics Logo"
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label} className="w-full">
                  <button
                    onClick={(e) => handleMenuClick(e, link.label)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition text-left text-slate-300 hover:text-[#04D1FF] hover:bg-slate-800 ${
                      activeMenu === link.label ? 'bg-slate-800 text-[#04D1FF]' : ''
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.submenu && (
                      <FaChevronDown 
                        className={`text-xs transition-transform ${
                          mobileSubMenu === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {mobileSubMenu === link.label && link.submenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden ml-4 mt-2 border-l-2 border-[#04D1FF]/30"
                      >
                        {renderSubMenu(link.submenu, link.label, true)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 border-t border-slate-800 mt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
                Get started
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default CloudHeader;