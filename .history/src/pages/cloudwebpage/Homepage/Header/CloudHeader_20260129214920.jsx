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
    if (!isMobile) {
      // DESKTOP TABLE VIEW
      return (
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left pb-2 font-semibold text-slate-800 w-1/2">Industries</th>
              <th className="text-left pb-2 font-semibold text-slate-800 w-1/2">Use Case</th>
            </tr>
          </thead>
          <tbody>
            {solutionItems.map((item) => {
              const active = currentPath === item.href;
              return (
                <tr key={item.industry}>
                  <td className="py-2 pr-4">
                    <a
                      href={item.href}
                      onClick={closeAll}
                      className={`block px-2 py-1 rounded transition ${
                        active
                          ? 'bg-[#04D1FF] text-white'
                          : 'hover:bg-[#07154C] hover:text-white'
                      }`}
                    >
                      {item.industry}
                    </a>
                  </td>
                  <td className="py-2">
                    {item.useCase ? (
                      <a
                        href={item.href}
                        onClick={closeAll}
                        className={`block px-2 py-1 rounded transition ${
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
      );
    }

    // MOBILE CARD VIEW
    return (
      <div className="space-y-3 mt-2">
        {solutionItems.map((item) => (
          <a
            key={item.industry}
            href={item.href}
            onClick={closeAll}
            className="block bg-slate-800 rounded-xl p-4 hover:bg-slate-700 transition"
          >
            <div className="text-white font-medium">{item.industry}</div>
            {item.useCase && <div className="text-slate-400 text-sm mt-1">{item.useCase}</div>}
          </a>
        ))}
      </div>
    );
  };

  const renderSubMenu = (submenu, label, isMobile = false) => {
    if (label === 'Solution') return renderSolutionSubMenu(isMobile);

    return (
      <div className="space-y-2 mt-2">
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
      {/* DESKTOP HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/cloud.png" alt="Cloud Sentrics" className="h-12" />

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
                  className="flex items-center text-slate-300 hover:text-[#04D1FF]"
                >
                  {link.label}
                  {link.submenu && <FaChevronDown className="ml-1 text-xs" />}
                </a>

                {(activeDropdown === link.label || lockedDropdown === link.label) &&
                  link.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 top-full mt-4 w-[520px] bg-white rounded-xl shadow-xl p-5"
                    >
                      {renderSubMenu(link.submenu, link.label)}
                    </motion.div>
                  )}
              </div>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(true)}
          >
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
              <div key={link.label} className="mb-2">
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
