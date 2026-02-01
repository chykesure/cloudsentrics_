import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const CloudHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // States
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(null); // Mouse hover
  const [lockedDropdown, setLockedDropdown] = useState(null); // Click lock
  const [mobileDropdown, setMobileDropdown] = useState(null); // Mobile accordion

  const activeDropdown = lockedDropdown || hoverDropdown; // Logic to show dropdown if hovered OR locked

  const solutionItems = [
    { industry: 'Education', useCase: 'Secure Storage and File Sharing', href: '/solutions/education' },
    { industry: 'Hospitals', useCase: 'NDPC Compliance', href: '/solutions/hospitals' },
    { industry: 'Laboratories', useCase: 'Diagnostics Data Security', href: '/solutions/laboratories' },
    { industry: 'Law Firms', useCase: 'Case File Management', href: '/solutions/law-firms' },
    { industry: 'Manufacturing', useCase: 'IP Protection', href: '/solutions/manufacturing' },
    { industry: 'Real Estate', useCase: 'Document Archiving', href: '/solutions/real-estate' },
    { industry: 'Financial Institutions', useCase: 'Secure Transactions', href: '/solutions/financial' },
    { industry: 'Other Industries', useCase: 'General Cloud Storage', href: '/solutions/other' },
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
      isSolutions: true, // Special flag for layout
      submenu: solutionItems,
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  const handleMenuClick = (e, label) => {
    if (window.innerWidth >= 1024) {
      // Desktop: Lock the menu on click so user can interact
      e.preventDefault();
      setLockedDropdown(lockedDropdown === label ? null : label);
    } else {
      // Mobile: Toggle accordion
      setMobileDropdown(mobileDropdown === label ? null : label);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121]/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="/">
            <img src="/cloud.png" alt="Cloud Logo" className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative h-20 flex items-center"
                onMouseEnter={() => setHoverDropdown(link.label)}
                onMouseLeave={() => setHoverDropdown(null)}
              >
                <button
                  onClick={(e) => handleMenuClick(e, link.label)}
                  className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPath === link.href 
                      ? 'text-[#04D1FF]' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {link.submenu && (
                    <FaChevronDown 
                      className={`ml-2 text-xs transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === link.label && link.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      // Large width for Solutions, standard for others
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-full max-w-lg ${
                        link.isSolutions ? 'max-w-2xl' : 'w-48'
                      }`}
                    >
                      <div className="bg-[#151e32] border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                        
                        {/* SOLUTIONS MENU (Structured Grid) */}
                        {link.isSolutions ? (
                          <div className="p-0">
                            {/* Header Row */}
                            <div className="grid grid-cols-5 gap-4 px-6 py-3 bg-slate-800/50 border-b border-slate-700">
                              <div className="col-span-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Industry</div>
                              <div className="col-span-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Use Case</div>
                            </div>
                            
                            {/* Items */}
                            {link.submenu.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-[#04D1FF]/10 border-b border-slate-700/50 last:border-0 transition-colors group"
                              >
                                <div className="col-span-2 text-sm font-semibold text-slate-200 group-hover:text-[#04D1FF]">
                                  {item.industry}
                                </div>
                                <div className="col-span-3 text-sm text-slate-400">
                                  {item.useCase}
                                </div>
                              </a>
                            ))}
                          </div>
                        ) : (
                          /* STANDARD MENU (Simple List) */
                          <div className="py-2">
                            {link.submenu.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="block px-6 py-3 text-sm text-slate-300 hover:bg-[#04D1FF] hover:text-black transition-colors"
                              >
                                {sub.label}
                              </a>
                            ))}
                          </div>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className="bg-[#04D1FF] hover:bg-[#3bb8e0] text-black font-bold px-6 py-2.5 rounded-lg transition-colors text-sm">
              Get started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[#0B1121] z-40 lg:hidden overflow-y-auto"
          >
            <div className="pt-24 px-6 pb-10">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-slate-800 last:border-0">
                    {/* Mobile Menu Item Header */}
                    <div
                      className="flex justify-between items-center py-4 cursor-pointer"
                      onClick={() => link.submenu && handleMenuClick(null, link.label)}
                    >
                      <a 
                        href={link.href}
                        onClick={(e) => {
                          if(link.submenu) e.preventDefault();
                          else closeMobileMenu();
                        }}
                        className={`text-lg font-medium ${
                          currentPath === link.href ? 'text-[#04D1FF]' : 'text-white'
                        }`}
                      >
                        {link.label}
                      </a>
                      {link.submenu && (
                        <FaChevronRight 
                          className={`text-slate-500 transition-transform ${
                            mobileDropdown === link.label ? 'rotate-90' : ''
                          }`} 
                        />
                      )}
                    </div>

                    {/* Mobile Submenu Accordion */}
                    <AnimatePresence>
                      {mobileDropdown === link.label && link.submenu && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 pb-4"
                        >
                          {link.isSolutions ? (
                            // Mobile Solutions List (Clean Vertical Stack)
                            <div className="space-y-4">
                              {link.submenu.map((item, idx) => (
                                <a
                                  key={idx}
                                  href={item.href}
                                  onClick={closeMobileMenu}
                                  className="block group"
                                >
                                  <div className="text-white font-medium text-sm group-hover:text-[#04D1FF] transition-colors">
                                    {item.industry}
                                  </div>
                                  {item.useCase && (
                                    <div className="text-slate-400 text-xs mt-1">
                                      {item.useCase}
                                    </div>
                                  )}
                                </a>
                              ))}
                            </div>
                          ) : (
                            // Standard Submenu
                            <div className="space-y-3">
                              {link.submenu.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={closeMobileMenu}
                                  className="block text-slate-300 hover:text-white text-sm"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="w-full bg-[#04D1FF] text-black font-bold py-3 rounded-lg text-lg">
                  Get started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CloudHeader;