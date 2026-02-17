import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const CloudHeader = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [lockedDropdown, setLockedDropdown] = useState(null);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const fontStyle = {
    fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '1.45',
    letterSpacing: '-0.01em',
  };

  const headerFontStyle = {
    ...fontStyle,
    fontWeight: 600,
    fontSize: '17px',
  };

  const industries = [
    { label: 'Education', href: '/solutions/education' },
    { label: 'Hospitals', href: '/solutions/hospitals' },
    { label: 'Laboratories & Diagnostics Centre', href: '/solutions/laboratories' },
    { label: 'Law Firms', href: '/solutions/law-firms' },
    { label: 'Manufacturing', href: '/solutions/manufacturing' },
    { label: 'Real Estate', href: '/solutions/real-estate' },
    { label: 'Financial Institutions', href: '/solutions/financial' },
    { label: 'Other Industries', href: '/solutions/other' },
  ];

  const useCases = [
    { label: 'Secure Storage and File Sharing', href: '/solutions/filesharing' },
    { label: 'NDPC Compliance', href: '/solutions/ndpc' },
  ];

  const navLinks = [
    { label: 'Home', href: '/', submenu: null },
    {
      label: 'Product',
      href: '#',
      submenu: [
        { label: 'Onboard with us', href: 'https://onboardingportal.cloudsentrics.org/', external: true },
        { label: 'Training', href: '/students' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    { label: 'Solution', href: '#', submenu: [] },
    {
      label: 'Resources',
      href: '#',
      submenu: [{ label: 'Docs & Guide', href: 'https://cloud-sentrics-limited.gitbook.io/cloudsentricsorg' }],
    },
    { label: 'Security & Trust', href: '/security', submenu: null },
    {
      label: 'About us',
      href: '#',
      submenu: [
        { label: 'News', href: '/news-page/news' },
        { label: 'Company', href: '/company' },
        { label: 'Careers', href: '/careers' },
        { label: 'Why Cloud Sentrics', href: '/why-cloud-sentrics' },
        { label: 'Customers', href: '/customers' },
      ],
    },
  ];

  const handleMenuClick = (e, link) => {
    if (link.submenu !== null) {
      e.preventDefault();
    }

    if (window.innerWidth >= 768) {
      setLockedDropdown(lockedDropdown === link.label ? null : link.label);
    } else {
      setMobileSubMenu(mobileSubMenu === link.label ? null : link.label);
    }
  };

  const handleSubmenuClick = () => {
    setActiveDropdown(null);
    setLockedDropdown(null);
    setMobileSubMenu(null);
    setIsOpen(false);
    document.body.style.overflow = ''; 
  };

  const DesktopMenuItem = ({ children, href, external = false }) => (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={handleSubmenuClick}
      className="block px-5 py-3 rounded-lg transition-all duration-200 font-medium hover:bg-[#07154C] hover:text-white text-slate-800"
      style={fontStyle}
    >
      {children}
    </a>
  );

  const renderSolutionSubMenu = () => (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="text-left pb-3 w-1/2">
            <span className="inline-block border-b-2 border-slate-400 pb-1 px-3 min-w-[215px]" style={headerFontStyle}>
              Industries
            </span>
          </th>
          <th className="text-left pb-3 w-1/2">
            <span className="inline-block border-b-2 border-slate-400 pb-1 px-3 min-w-[205px]" style={headerFontStyle}>
              Use Case
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: Math.max(industries.length, useCases.length) }).map((_, index) => (
          <tr key={index}>
            <td className="py-1.5 pr-6">
              {index < industries.length ? (
                <DesktopMenuItem href={industries[index].href}>
                  {industries[index].label}
                </DesktopMenuItem>
              ) : (
                <div className="px-5 py-3 invisible" style={fontStyle}>Placeholder</div>
              )}
            </td>
            <td className="py-1.5">
              {index < useCases.length ? (
                <DesktopMenuItem href={useCases[index].href}>
                  {useCases[index].label}
                </DesktopMenuItem>
              ) : (
                <div className="px-5 py-3 invisible" style={fontStyle}>Placeholder</div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderNormalSubMenu = (submenu) => (
    <div className="space-y-1.5">
      {submenu.map((sub) => (
        <DesktopMenuItem key={sub.label} href={sub.href} external={sub.external}>
          {sub.label}
        </DesktopMenuItem>
      ))}
    </div>
  );

  const renderSubMenu = (submenu, label, isMobile = false) => {
    if (isMobile) {
      if (label === 'Solution') {
        return (
          <div className="mt-3 space-y-6 px-2">
            <div>
              <div className="px-4 py-2 text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Industries
              </div>
              <div className="space-y-1">
                {industries.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleSubmenuClick}
                    className="block pl-8 pr-5 py-3.5 rounded-lg hover:bg-slate-800/70 active:bg-slate-700/90 transition-colors text-[15.5px] text-slate-300"
                    style={fontStyle}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="px-4 py-2 text-sm font-semibold text-slate-400 uppercase tracking-wide">
                Use Cases
              </div>
              <div className="space-y-1">
                {useCases.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleSubmenuClick}
                    className="block pl-8 pr-5 py-3.5 rounded-lg hover:bg-slate-800/70 active:bg-slate-700/90 transition-colors text-[15.5px] text-slate-300"
                    style={fontStyle}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="space-y-1 mt-2">
          {submenu.map((sub) => (
            <a
              key={sub.label}
              href={sub.href}
              target={sub.external ? '_blank' : undefined}
              rel={sub.external ? 'noopener noreferrer' : undefined}
              onClick={handleSubmenuClick}
              className="block pl-8 pr-5 py-3.5 rounded-lg hover:bg-slate-800/70 active:bg-slate-700/90 transition-colors text-[15.5px] text-slate-300"
              style={fontStyle}
            >
              {sub.label}
            </a>
          ))}
        </div>
      );
    }

    return label === 'Solution' ? renderSolutionSubMenu() : renderNormalSubMenu(submenu);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/60 shadow-sm transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex-shrink-0 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#04D1FF]/50 rounded-lg"
          >
            <img
              src="/cloud-logo.png"
              alt="Cloud Sentrics Logo"
              className="h-20 md:h-23 lg:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 relative items-center">
            {navLinks.map((link) => {
              const hasSubmenu = link.submenu !== null;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setLockedDropdown(null);
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (hasSubmenu && link.href === '#') {
                        e.preventDefault();
                      }
                      if (hasSubmenu) {
                        setLockedDropdown(lockedDropdown === link.label ? null : link.label);
                      }
                    }}
                    className={`
                      flex items-center px-3 py-2 rounded-md text-slate-200 
                      hover:text-[#04D1FF] hover:bg-slate-800/40 transition-colors duration-200
                      ${activeDropdown === link.label || lockedDropdown === link.label
                        ? 'text-[#04D1FF] bg-slate-800/30'
                        : ''
                      }
                    `}
                    style={fontStyle}
                  >
                    {link.label}
                    {hasSubmenu && (
                      <FaChevronDown className="ml-1.5 text-xs opacity-70 transition-transform" />
                    )}
                  </a>

                  <AnimatePresence>
                    {(activeDropdown === link.label || lockedDropdown === link.label) && hasSubmenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className={`
                          absolute top-full left-1/2 -translate-x-1/2 mt-3
                          ${link.label === 'Solution' ? 'w-[580px]' : 'w-72'}
                          bg-white text-black rounded-xl shadow-2xl 
                          ${link.label === 'Solution' ? 'p-5 lg:p-6' : 'p-6 lg:p-7'} 
                          z-50 border border-slate-200/80
                        `}
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onMouseLeave={() => {
                          setActiveDropdown(null);
                          setLockedDropdown(null);
                        }}
                      >
                        {renderSubMenu(link.submenu, link.label)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          <Link
            to="/get-started"
            className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md"
            style={fontStyle}
          >
            Get started
          </Link>

          <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(true)}>
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 h-full w-[85vw] max-w-[340px] bg-slate-950/95 backdrop-blur-xl border-l border-slate-700 z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-end p-5 border-b border-slate-800">
                <button onClick={() => setIsOpen(false)} className="text-white text-2xl p-2">
                  <FaTimes />
                </button>
              </div>

              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.submenu !== null ? (
                      <button
                        onClick={(e) => handleMenuClick(e, link)}
                        className="w-full flex justify-between items-center py-4 px-5 text-slate-200 hover:text-[#04D1FF] hover:bg-slate-800/70 rounded-xl transition min-h-[52px]"
                        style={fontStyle}
                      >
                        {link.label}
                        <FaChevronDown
                          className={`text-sm transition-transform ${mobileSubMenu === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => {
                          setIsOpen(false);
                          setMobileSubMenu(null);
                          document.body.style.overflow = '';
                        }}
                        className="block py-4 px-5 text-slate-200 hover:text-[#04D1FF] hover:bg-slate-800/70 rounded-xl transition min-h-[52px]"
                        style={fontStyle}
                      >
                        {link.label}
                      </Link>
                    )}

                    <AnimatePresence>
                      {mobileSubMenu === link.label && link.submenu !== null && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          {renderSubMenu(link.submenu, link.label, true)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-slate-800 mt-4">
                <Link
                  to="/get-started"
                  onClick={() => {
                    setIsOpen(false);
                    document.body.style.overflow = '';
                  }}
                  className="w-full block bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl transition text-base font-medium text-center"
                  style={fontStyle}
                >
                  Get started
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CloudHeader;