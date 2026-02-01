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

  const solutionItems = [
    { industry: 'Education', useCase: 'Secure Storage and File Sharing', href: '/solutions/education' },
    { industry: 'Hospitals', useCase: 'NDPC Compliance', href: '/solutions/hospitals' },
    { industry: 'Laboratories & Diagnostics Centre', useCase: 'Data Protection & Archiving', href: '/solutions/laboratories' },
    { industry: 'Law Firms', useCase: 'Secure Legal Records', href: '/solutions/law-firms' },
    { industry: 'Manufacturing', useCase: 'Operational Data Security', href: '/solutions/manufacturing' },
    { industry: 'Real Estate', useCase: 'Property Document Management', href: '/solutions/real-estate' },
    { industry: 'Financial Institutions', useCase: 'Regulatory Compliance & Security', href: '/solutions/financial' },
    { industry: 'Other Industries', useCase: 'Custom Cloud Solutions', href: '/solutions/other' },
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
      submenu: [{ label: 'Solutions', href: '#' }],
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

  const closeAll = () => {
    setIsOpen(false);
    setMobileSubMenu(null);
    setActiveDropdown(null);
    setLockedDropdown(null);
  };

  /* ---------- SUBMENUS ---------- */

  const renderSolutionSubMenu = (isMobile = false) => {
    // DESKTOP (MEGA MENU)
    if (!isMobile) {
      return (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Industries</h4>
            {solutionItems.map((item) => (
              <a
                key={item.industry}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm hover:bg-[#07154C] hover:text-white transition"
              >
                {item.industry}
              </a>
            ))}
          </div>

          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Use Case</h4>
            {solutionItems.map((item) => (
              <a
                key={item.useCase}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm hover:bg-[#07154C] hover:text-white transition"
              >
                {item.useCase}
              </a>
            ))}
          </div>
        </div>
      );
    }

    // MOBILE (CARD LAYOUT)
    return (
      <div className="space-y-3 mt-3">
        {solutionItems.map((item) => (
          <a
            key={item.industry}
            href={item.href}
            onClick={closeAll}
            className="block bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >
            <div className="text-white font-medium">{item.industry}</div>
            <div className="text-slate-400 text-sm mt-1">{item.useCase}</div>
          </a>
        ))}
      </div>
    );
  };

  const renderSubMenu = (submenu, label, isMobile = false) => {
    if (label === 'Solution') {
      return renderSolutionSubMenu(isMobile);
    }

    return (
      <div className="space-y-2">
        {submenu.map((sub) => (
          <a
            key={sub.label}
            href={sub.href}
            onClick={closeAll}
            className="block px-4 py-3 rounded-lg text-sm hover:bg-[#07154C] hover:text-white transition"
          >
            {sub.label}
          </a>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/cloud.png" alt="Cloud Sentrics" className="h-12" />

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8">
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
                  className="flex items-center text-slate-300 hover:text-[#04D1FF]"
                >
                  {link.label}
                  {link.submenu && <FaChevronDown className="ml-1 text-xs" />}
                </a>

                {(activeDropdown === link.label || lockedDropdown === link.label) && link.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full mt-4 w-[520px] bg-white rounded-xl shadow-xl p-6"
                  >
                    {renderSubMenu(link.submenu, link.label)}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(true)}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 z-50 bg-slate-900 p-4 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <img src="/cloud.png" className="h-10" />
              <button onClick={closeAll} className="text-white text-xl">
                <FaTimes />
              </button>
            </div>

            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={(e) => handleMenuClick(e, link.label)}
                  className="w-full flex justify-between items-center py-3 text-slate-300"
                >
                  {link.label}
                  {link.submenu && (
                    <FaChevronDown
                      className={`transition ${
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
                      className="pl-2"
                    >
                      {renderSubMenu(link.submenu, link.label, true)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CloudHeader;
