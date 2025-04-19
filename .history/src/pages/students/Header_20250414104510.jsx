import { useState } from "react";
import { Link } from "react-router-dom"; // Ensure you are using React Router
import { FaBars, FaTimes } from "react-icons/fa";
import { Cloud, ShieldCheck, Server } from "lucide-react"; // Alternative icons
import EnrollModal from "../EnrollModal"; // adjust path if necessary



const logo = "/assets/logo.jpg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const menuItems = [
        { label: "Home", path: "/StudentPage" },
        { label: "About Us", path: "/about" },
        {
            label: "Courses",
            options: [
                { label: "AWS", path: "/courses/AWS", icon: <Cloud className="inline-block text-yellow-500" /> },
                { label: "Azure", path: "/courses/Azure", icon: <Server className="inline-block text-blue-600" /> },
                { label: "DevSecOps", path: "/courses/DevSecOps", icon: <ShieldCheck className="inline-block text-red-500" /> }
            ]
        },
        { label: "Blog", path: "/blog" },
        { label: "Events", path: "/events" }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50">
            {/* Logo */}
            <div className="flex items-center pl-4 md:pl-6 lg:pl-8">
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
                        {menu.options ? (
                            <>
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="px-5 py-3 nav-link relative transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-[#1e4272] text-2xl"
                                >
                                    {menu.label} ▼
                                    <span className="absolute left-0 bottom-0 h-[3px] bg-[#1e4272] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                                </button>
                                {/* Dropdown for Courses with Icons */}
                                {dropdownOpen === index && (
                                    <div className="absolute left-0 top-full bg-white shadow-lg w-80 rounded-md z-50 mt-1 border border-gray-200 sub-menu">
                                        {menu.options.map((option, i) => (
                                            <Link
                                                key={i}
                                                to={option.path}
                                                className="flex items-center gap-3 px-5 py-3 text-xl hover:bg-[#1e4272] hover:text-white transition-all duration-300 rounded-md"
                                            >
                                                {option.icon} {/* Icon added here */}
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

            {/* Enroll Button */}
            <button
                onClick={handleOpenModal}
                className="mt-6 bg-[#1e4272] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-300"
            >
                ENROLL NOW
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="fixed top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center gap-4 animate-slideIn">
                    {menuItems.map((menu, i) => (
                        <div key={i} className="w-full text-center relative group">
                            {menu.options ? (
                                <div className="relative">
                                    <button
                                        onClick={() => toggleDropdown(i)}
                                        className="block py-2 nav-link relative w-full"
                                    >
                                        {menu.label} ▼
                                        <span className="absolute left-0 bottom-0 h-[3px] bg-[#1e4272] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                                    </button>
                                    {dropdownOpen === i && (
                                        <div className="absolute left-0 top-full bg-white shadow-md rounded-md w-full">
                                            {menu.options.map((option, j) => (
                                                <Link
                                                    key={j}
                                                    to={option.path}
                                                    className="flex items-center gap-3 px-5 py-3 text-xl hover:bg-[#1e4272] hover:text-white transition-all duration-300 rounded-md"
                                                >
                                                    {option.icon} {/* Icon added here */}
                                                    {option.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to={menu.path} className="block py-2 nav-link relative">
                                    {menu.label}
                                    <span className="absolute left-0 bottom-0 h-[3px] bg-[#1e4272] transition-all duration-300 ease-in-out w-0 group-hover:w-full" />
                                </Link>
                            )}
                        </div>
                        <Enro
                    ))}
                </div>

                
            )}
        </header>
    );
};

export default Header;
