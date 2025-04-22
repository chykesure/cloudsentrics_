import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Cloud, ShieldCheck, Server } from "lucide-react"; // optional icons

const logo = "/assets/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Events", path: "/events" },
  ];

  return (
    <header className="flex items-center justify-center px-6 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50 h-[140px]">
      {/* Logo */}
      <div className="absolute left-6 flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Cloudsentrics Logo"
            className="h-20 md:h-28 lg:h-34 w-auto transition-all duration-300 cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6 font-semibold text-xl">
        {menuItems.map((menu, index) => (
          <div key={index} className="relative group flex items-center">
            <Link
              to={menu.path}
              className="px-5 py-3 nav-link relative transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-[#1e4272] text-2xl"
            >
              {menu.label}
              <span className="absolute left-0 bottom-0 h-[3px] bg-[#1e4272] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
            </Link>
          </div>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <div className="absolute right-6 lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-[140px] left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 z-40 lg:hidden">
          {menuItems.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              onClick={() => setMenuOpen(false)}
              className="text-xl font-medium text-gray-800 hover:text-[#1e4272] transition-colors"
            >
              {menu.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
