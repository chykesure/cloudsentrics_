import { useState, useEffect } from "react";
import { FaSearch, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    <header className="bg-[#1e4272] text-white flex items-center justify-between px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Phone & Search (Now on the left) */}
      <div className="hidden lg:flex items-center gap-4">
        <a
          href="tel:+442392825925"
          className="flex items-center gap-1 text-sm font-semibold transition-all duration-300 hover:text-gray-300"
        >
          <FaPhone /> +1 346-399-8985
        </a>
        <button className="text-white transition-all duration-300 hover:text-gray-300">
          <FaSearch />
        </button>
      </div>

      {/* Navigation Menu (Moved to the right) */}
      <motion.div
        className="hidden lg:flex ml-auto items-center space-x-6 lg:space-x-10 text-lg lg:text-xl font-semibold tracking-wide h-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {[ 
          { label: "INSIGHTS", path: "/insights" },
          { label: "NEWS", path: "/news" },
          { label: "CASE STUDIES", path: "/case-studies" },
          { label: "ABOUT CLOUD-SENTRICS", path: "/about-cloudsentrics" },
          { label: "CAREERS", path: "/careers" },
          { label: "CONTACT", path: "/contact" },
        ].map((item, index) => (
          <Link key={index} to={item.path}>
            <motion.span
              className="relative cursor-pointer transition-all duration-300 group hover:text-blue-400 whitespace-nowrap"
              whileHover={{ scale: 1.1 }}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </motion.span>
          </Link>
        ))}
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-xl transition-transform transform hover:scale-110 ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <div
  className={`fixed top-14 left-0 w-full bg-[#1e4272] shadow-md p-4 flex flex-col items-center gap-4 text-sm transform transition-transform duration-500 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {[ 
    { label: "INSIGHTS", path: "/insights" },
    { label: "NEWS", path: "/news" },
    { label: "CASE STUDIES", path: "/case-studies" },
    { label: "ABOUT CLOUD-SENTRICS", path: "/about-cloudsentrics" },
    { label: "CAREERS", path: "/careers" },
    { label: "CONTACT", path: "/contact" },
  ].map((item, index) => (
    <a key={index} href={item.path} className="text-3xl font-semibold transition-all duration-300 hover:scale-110">
      {item.label}
    </a>
  ))}
  <a href="tel:+442392825925" className="flex items-center gap-1 text-sm font-semibold">
    <FaPhone /> +1 346-399-8985
  </a>
  <button className="text-white transition-all duration-300 hover:text-gray-300">
    <FaSearch />
  </button>
</div>

    </header>
  );
};

export default Header;
