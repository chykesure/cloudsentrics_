import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const CloudHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // --- States ---
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // For Desktop Hover
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null); // For Mobile Accordion

  // --- Data ---
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
      isMegaMenu: true,
      submenu: solutionItems, // Using the specific solution items array
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

  // --- Effects ---
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  // --- Handlers ---
  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  
  const toggleMobileSubmenu = (label) => {
    setMobileActiveMenu(mobileActiveMenu === label ? null : label);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setMobileActiveMenu(null);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1c]/95 backdrop-blur-md border-b border-slate-800/50">
        {/* Top Accent Line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#04D1FF] to-blue-600"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            {/* Ensure your logo path is correct */}
            <img
              src="/cloud.png"
              alt="Cloud Sentrics Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group py-6"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`flex items-center text-sm font-medium transition-colors duration-200 ${
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
                </a>

                {/* Dropdown Content */}
                <AnimatePresence>
                  {activeDropdown === link.label && link.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-full max-w-screen-sm"
                    >
                      <div className="bg-slate-900 border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden p-6">
                        
                        {/* MEGA MENU (Solutions) */}
                        {link.isMegaMenu ? (
                          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                            {/* Header Row */}
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 col-span-1">Industry</div>
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 col-span-1">Use Case</div>
                            
                            {/* Items */}
                            {link.submenu.map((item, idx) => (
                              <React.Fragment key={idx}>
                                <a
                                  href={item.href}
                                  className="text-slate-300 hover:text-[#04D1FF] py-2 block text-sm transition-colors border-b border-slate-800/50 last:border-0"
                                >
                                  {item.industry}
                                </a>
                                <a
                                  href={item.href}
                                  className="text-slate-400 hover:text-white py-2 block text-sm transition-colors border-b border-slate-800/50 last:border-0"
                                >
                                  {item.useCase || <span className="opacity-30">General use</span>}
                                </a>
                              </React.Fragment>
                            ))}
                          </div>
                        ) : (
                          /* STANDARD DROPDOWN */
                          <div className="flex flex-col space-y-1">
                            {link.submenu.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-[#07154C] hover:text-white transition-all text-sm"
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

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-[#04D1FF] to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">
              Get started
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-md bg-[#0f172a] z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-8">
                  <img src="/cloud.png" alt="Logo" className="h-8" />
                  <button onClick={closeMobileMenu} className="text-slate-400 hover:text-white">
                    <FaTimes className="text-xl" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      {/* Main Link Item */}
                      <div
                        className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-colors ${
                          currentPath === link.href 
                            ? 'bg-[#07154C]/50 text-[#04D1FF]' 
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                        onClick={() => {
                          if (link.submenu) {
                            toggleMobileSubmenu(link.label);
                          } else {
                            closeMobileMenu();
                          }
                        }}
                      >
                        <a 
                          href={link.href} 
                          className="flex-1 font-medium"
                          onClick={(e) => link.submenu && e.preventDefault()}
                        >
                          {link.label}
                        </a>
                        {link.submenu && (
                          <FaChevronRight 
                            className={`text-xs transition-transform duration-200 ${
                              mobileActiveMenu === link.label ? 'rotate-90 text-[#04D1FF]' : ''
                            }`} 
                          />
                        )}
                      </div>

                      {/* Submenu (Accordion) */}
                      <AnimatePresence>
                        {mobileActiveMenu === link.label && link.submenu && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            <div className="py-2 space-y-1 border-l-2 border-slate-700 ml-4">
                              {link.isMegaMenu ? (
                                // Render mega menu items for mobile
                                link.submenu.map((item, idx) => (
                                  <a
                                    key={idx}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="block p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md text-sm"
                                  >
                                    <span className="block font-medium text-slate-200">{item.industry}</span>
                                    {item.useCase && <span className="text-xs mt-1 block">{item.useCase}</span>}
                                  </a>
                                ))
                              ) : (
                                // Standard submenu items
                                link.submenu.map((sub) => (
                                  <a
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={closeMobileMenu}
                                    className="block p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-md text-sm"
                                  >
                                    {sub.label}
                                  </a>
                                ))
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8">
                  <button className="w-full bg-[#04D1FF] hover:bg-blue-500 text-white py-3 rounded-lg font-medium shadow-lg transition-all">
                    Get started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CloudHeader;