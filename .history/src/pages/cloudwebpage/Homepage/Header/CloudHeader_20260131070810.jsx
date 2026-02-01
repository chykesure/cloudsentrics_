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
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  // ────────────────────────────────────────────────
  // Shared typography styles (applied everywhere)
  // ────────────────────────────────────────────────
  const fontStyle = {
    fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
    fontWeight: 500,
    fontSize: '15px',           // uniform base size – change to 16px if preferred
    lineHeight: '1.4',
    letterSpacing: '0%',
  };

  const headerFontStyle = {
    ...fontStyle,
    fontWeight: 600,            // slightly bolder for table headers
    fontSize: '16px',
  };

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
      href: '#',
      submenu: [
        { label: 'Onboard with us', href: '/onboard' },
        { label: 'Training', href: '/training' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      label: 'Solution',
      href: '#',
      submenu: [{ label: 'View Solutions', href: '#' }],
    },
    {
      label: 'Resources',
      href: '#',
      submenu: [
        { label: 'Blog', href: '/blog' },
        { label: 'Help Center', href: '/help' },
        { label: 'Documentation', href: '/docs' },
      ],
    },
    { label: 'Security & Trust', href: '/security', submenu: null },
    {
      label: 'About us',
      href: '#',
      submenu: [
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  const handleMenuClick = (e, label) => {
    e.preventDefault();
    if (window.innerWidth >= 768) {
      setLockedDropdown(lockedDropdown === label ? null : label);
    } else {
      setMobileSubMenu(mobileSubMenu === label ? null : label);
    }
  };

  const handleSubmenuClick = () => {
    setActiveDropdown(null);
    setLockedDropdown(null);
    setMobileSubMenu(null);
    setIsOpen(false);
  };

  const renderSolutionSubMenu = (isMobile = false) => {
    if (!isMobile) {
      return (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left pb-4 w-1/2">
                <span
                  className="inline-block border-b-2 border-slate-400 pb-1.5"
                  style={headerFontStyle}
                >
                  Industries
                </span>
              </th>
              <th className="text-left pb-4 w-1/2">
                <span
                  className="inline-block border-b-2 border-slate-400 pb-1.5"
                  style={headerFontStyle}
                >
                  Use Case
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {solutionItems.map((item) => {
              const active = currentPath === item.href;

              return (
                <tr key={item.industry}>
                  <td className="py-2 pr-6">
                    <a
                      href={item.href}
                      onClick={handleSubmenuClick}
                      className={`block px-3 py-2 rounded transition-colors duration-150 ${
                        active
                          ? 'bg-[#04D1FF] text-white font-semibold'
                          : 'hover:bg-[#07154C] hover:text-white'
                      }`}
                      style={fontStyle}
                    >
                      {item.industry}
                    </a>
                  </td>
                  <td className="py-2">
                    {item.useCase ? (
                      <a
                        href={item.href}
                        onClick={handleSubmenuClick}
                        className={`block px-3 py-2 rounded transition-colors duration-150 ${
                          active
                            ? 'bg-[#04D1FF] text-white font-semibold'
                            : 'hover:bg-[#07154C] hover:text-white'
                        }`}
                        style={fontStyle}
                      >
                        {item.useCase}
                      </a>
                    ) : (
                      <div className="px-3 py-2 invisible" style={fontStyle}>
                        Placeholder
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }

    // Mobile version
    return (
      <div className="space-y-3 mt-2">
        {solutionItems.map((item) => (
          <a
            key={item.industry}
            href={item.href}
            onClick={handleSubmenuClick}
            className="block bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
            style={fontStyle}
          >
            <div className="text-white font-semibold">{item.industry}</div>
            {item.useCase && (
              <div className="text-slate-300 text-sm mt-1">{item.useCase}</div>
            )}
          </a>
        ))}
      </div>
    );
  };

  const renderSubMenu = (submenu, label, isMobile = false) => {
    if (label === 'Solution') return renderSolutionSubMenu(isMobile);

    return (
      <div className="space-y-1 mt-2">
        {submenu.map((sub) => (
          <a
            key={sub.label}
            href={sub.href}
            onClick={handleSubmenuClick}
            className="block px-4 py-2.5 rounded-lg hover:bg-[#07154C] hover:text-white transition"
            style={fontStyle}
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
          <img src="/cloud.png" alt="Cloud Sentrics Logo" className="h-14 w-auto object-contain" />

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
                  style={fontStyle}
                >
                  {link.label}
                  {link.submenu && <FaChevronDown className="ml-1.5 text-xs opacity-70" />}
                </a>

                {(activeDropdown === link.label || lockedDropdown === link.label) &&
                  link.submenu && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
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
          <button
            className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            style={fontStyle}
          >
            Get started
          </button>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(true)}>
            <FaBars />
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
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <img src="/cloud.png" className="h-10 w-auto object-contain" />
              <button onClick={() => setIsOpen(false)} className="text-white text-xl">
                <FaTimes />
              </button>
            </div>

            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <button
                    onClick={(e) => handleMenuClick(e, link.label)}
                    className={`w-full flex justify-between items-center py-3 px-4 text-slate-300 hover:text-[#04D1FF] hover:bg-slate-800 rounded-lg transition`}
                    style={fontStyle}
                  >
                    {link.label}
                    {link.submenu && (
                      <FaChevronDown
                        className={`text-xs transition-transform ${
                          mobileSubMenu === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {mobileSubMenu === link.label && link.submenu && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-2 mt-2"
                      >
                        {renderSubMenu(link.submenu, link.label, true)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-800 mt-4">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                style={fontStyle}
              >
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