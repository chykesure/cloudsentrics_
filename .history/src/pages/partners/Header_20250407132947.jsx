import { useState, useEffect } from "react";
import { FaSearch, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { SiWindows } from "react-icons/si";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expiry, setExpiry] = useState({ days: 203, hours: 2, minutes: 43, seconds: 8 });

  useEffect(() => {
    const timer = setInterval(() => {
      setExpiry((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="bg-teal-600 text-white flex items-center justify-between px-4 py-2 fixed top-0 left-0 w-full z-50 text-sm font-semibold">
      {/* Left Section: Windows 10 Expiry */}
      <div className="flex items-center gap-3">
        <SiWindows className="text-xl" />
        <span>Windows 10</span>
        <span>Expiry</span>
        <div className="flex gap-2 ml-2">
          <span>{String(expiry.days).padStart(3, "0")} <span className="text-xs">DAYS</span></span>
          <span>{String(expiry.hours).padStart(2, "0")} <span className="text-xs">HOURS</span></span>
          <span>{String(expiry.minutes).padStart(2, "0")} <span className="text-xs">MINS</span></span>
          <span>{String(expiry.seconds).padStart(2, "0")} <span className="text-xs">SEC</span></span>
        </div>
      </div>

      {/* Center Nav Links */}
      <nav className="hidden md:flex gap-6">
        {["INSIGHTS", "NEWS", "CASE STUDIES", "ABOUT BELL", "CAREERS", "CONTACT"].map((item, index) => (
          <a key={index} href="#" className="hover:underline">
            {item}
          </a>
        ))}
      </nav>

      {/* Right Section: Phone + Search */}
      <div className="hidden md:flex items-center gap-4">
        <a href="tel:+442392825925" className="flex items-center gap-1 hover:underline">
          <FaPhone /> +44 2392 825925
        </a>
        <button className="hover:text-gray-300">
          <FaSearch />
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-lg ml-4">
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-teal-600 flex flex-col items-start gap-2 p-4 text-sm z-40">
          {["INSIGHTS", "NEWS", "CASE STUDIES", "ABOUT BELL", "CAREERS", "CONTACT"].map((item, index) => (
            <a key={index} href="#" className="w-full py-1 border-b border-white/20">
              {item}
            </a>
          ))}
          <a href="tel:+442392825925" className="flex items-center gap-2 py-1">
            <FaPhone /> +44 2392 825925
          </a>
          <button className="text-white py-1">
            <FaSearch />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
