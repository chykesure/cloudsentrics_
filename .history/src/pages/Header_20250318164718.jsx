import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Ensure you are using React Router

const logo = "/assets/logo.jpg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const menuItems = [
        { label: "Home" },
        { label: "About Us" },
        /* {
            label: "Courses",
            options: ["Beginner Course", "Comprehensive Course", "Advanced Course"]
        }, */
        { label: "Blog" },
        { label: "Events" },
        { label: "Career" },
        { label: "Contact Us" }
    ];

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
            {/* Logo with spacing */}
            <div className="flex items-center pl-4 md:pl-6 lg:pl-8">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Cloudsentrics Logo"
                        className="h-20 md:h-28 lg:h-34 w-auto transition-all duration-300"
                    />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 font-semibold text-xl"> {/* Increased font size from text-lg to text-xl */}
                {menuItems.map((menu, index) => (
                    <div key={index} className="relative group">
                        <button
                            onClick={() => menu.options && toggleDropdown(index)}
                            className="px-5 py-3 nav-link relative transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-[#1e4272] text-2xl" // Increased font size
                        >
                            {menu.label} {menu.options && "▼"}
                            {/* 🔥 SWIPING UNDERLINE */}
                            <span
                                className="absolute left-0 bottom-0 h-[3px] bg-[#1e4272] transition-all duration-300 ease-in-out w-0 group-hover:w-full"
                            />
                        </button>

                        {/* Dropdown for "Courses" */}
                        {menu.options && dropdownOpen === index && (
                            <div className="absolute left-0 top-full bg-white shadow-lg w-80 rounded-md z-50 mt-1 border border-gray-200 sub-menu">
                                {menu.options.map((option, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="block px-5 py-3 text-xl hover:bg-[#1e4272] hover:text-white transition-all duration-300 rounded-md" // Increased font size
                                    >
                                        {option}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>


            {/* Search Bar - Extreme Left using Negative Margin */}
            <div className="hidden lg:flex items-center border rounded-md overflow-hidden -ml-8">
                <input
                    type="text"
                    placeholder="Search The Site"
                    className="px-3 py-2 outline-none text-gray-700 w-64 lg:w-72"
                />
                <button className="bg-blue-900 text-white p-3 hover:bg-blue-700">
                    <FaSearch />
                </button>
            </div>


            {/* Mobile Menu Button */}
            <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="fixed top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center gap-4 animate-slideIn">
                    {menuItems.map((item, i) => (
                        <div key={i} className="w-full text-center relative group">
                            <a href="#" className="block py-2 nav-link relative">
                                {item.label}
                                {/* 🔥 SWIPING UNDERLINE ON MOBILE */}
                                <span
                                    className="absolute left-0 bottom-0 h-[3px] bg-[#1e4272] transition-all duration-300 ease-in-out w-0 group-hover:w-full"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
