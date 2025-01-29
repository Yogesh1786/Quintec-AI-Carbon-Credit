import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden h-4">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 md:h-20 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex items-center justify-between h-full">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src="/src/assets/logo_1.png"
                alt="Logo"
                className="h-10 w-12 sm:h-14 sm:w-14 rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wider text-gray-700">
              Quintessence <br /> Technologies
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden gap-12 md:flex items-center space-x-6 lg:space-x-8 text-lg font-bold text-slate-700">
            <Link to="/" className="hover:text-slate-600 transition-all duration-300">
              Home
            </Link>
            <Link to="/research" className="hover:text-slate-600 transition-all duration-300">
              Research
            </Link>
            <Link to="/cart" className="hover:text-slate-600 transition-all duration-300">
              Cart
            </Link>
            <Link to="/joinus" className="hover:text-slate-600 transition-all duration-300">
              Join Us
            </Link>

            {/* Login/Signup Icon */}
            <Link to="/login" className="ml-4 text-gray-700 hover:text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A10.97 10.97 0 0112 15c2.482 0 4.774.81 6.879 2.196M15 11h.01M9 11h.01M12 12v2m-7 6a10.97 10.97 0 0014 0M12 5a3 3 0 110 6 3 3 0 010-6z"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40">
            <ul className="flex flex-col items-center space-y-4 py-6 font-bold text-gray-700">
              <Link to="/" className="hover:text-slate-600 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/research" className="hover:text-slate-600 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Research
              </Link>
              <Link to="/cart" className="hover:text-slate-600 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Cart
              </Link>
              <Link to="/joinus" className="hover:text-slate-600 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Join Us
              </Link>
              <Link to="/login" className="hover:text-slate-600 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
