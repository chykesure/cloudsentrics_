import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you are using React Router
import { FaBars, FaTimes } from "react-icons/fa";
import { Cloud, ShieldCheck, Server } from "lucide-react"; // Alternative icons


const logo = "/assets/logo.jpg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const menuItems = [
        { label: "About Us", path: "/about" },
        { label: "Blog", path: "/blog" },
        { label: "Events", path: "/events" },
        { label: "Career", path: "/events" },
        { label: "Career", path: "/about" },
    ];



    return (
        <header className="flex items-center justify-center px-6 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50 h-[140px]">
            {/* Logo - Positioned on the left */}
            <div className="absolute left-6 flex items-center">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Cloudsentrics Logo"
                        className="h-20 md:h-28 lg:h-34 w-auto transition-all duration-300 cursor-pointer"
                    />
                </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex gap-6 font-semibold text-xl">
                {menuItems.map((menu, index) => (
                    <div key={index} className="relative group flex items-center">
                        {menu.options ? (
                            <>
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="px-5 py-3 nav-link relative transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-[#1e4272] text-2xl"
                                >
                                    {menu.label} ▼
                                    <span className="absolute left-0 bottom-0 h-[3px] bg-[#1e4272] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                                </button>
                                {dropdownOpen === index && (
                                    <div className="absolute left-0 top-full bg-white shadow-lg w-80 rounded-md z-50 mt-1 border border-gray-200 sub-menu">
                                        {menu.options.map((option, i) => (
                                            <Link
                                                key={i}
                                                to={option.path}
                                                className="flex items-center gap-3 px-5 py-3 text-xl hover:bg-[#1e4272] hover:text-white transition-all duration-300 rounded-md"
                                            >
                                                {option.icon}
                                                {option.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link
                                to={menu.path}
                                className="px-5 py-3 nav-link relative transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-[#1e4272] text-2xl"
                            >
                                {menu.label}
                                <span className="absolute left-0 bottom-0 h-[3px] bg-[#1e4272] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                            </Link>
                        )}
                    </div>
                ))}
            </nav>

            {/* Hamburger Icon (optional for mobile) */}
            <div className="absolute right-6 lg:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
