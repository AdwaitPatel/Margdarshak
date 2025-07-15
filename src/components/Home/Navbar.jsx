import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900" : "bg-slate-900"
      } border-b border-white/10`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent"
          >
            Margdarshak
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-slate-100 hover:text-blue-400 font-medium transition-all duration-300 hover:-translate-y-0.5 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/career-quiz"
                className={`font-medium transition-all duration-300 hover:-translate-y-0.5 relative group ${
                  location.pathname === "/career-quiz"
                    ? "text-blue-400"
                    : "text-slate-100 hover:text-blue-400"
                }`}
              >
                Career Path
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`font-medium transition-all duration-300 hover:-translate-y-0.5 relative group ${
                  location.pathname === "/contact"
                    ? "text-blue-400"
                    : "text-slate-100 hover:text-blue-400"
                }`}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/Mentors"
                className="text-slate-100 hover:text-blue-400 font-medium transition-all duration-300 hover:-translate-y-0.5 relative group"
              >
                Mentors
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-slate-100 hover:text-blue-400 font-medium transition-all duration-300 hover:-translate-y-0.5 relative group"
              >
                Login
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-slate-100 hover:text-blue-400 font-medium transition-all duration-300 hover:-translate-y-0.5 relative group"
              >
                SignUp
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50 relative focus:outline-none group"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 bg-slate-100 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "rotate-45 translate-y-2 bg-white"
                    : "group-hover:bg-blue-400"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-slate-100 transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0 scale-0" : "group-hover:bg-blue-400"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-slate-100 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-white"
                    : "group-hover:bg-blue-400"
                }`}
              ></span>
              
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900 border-l border-white/10 z-50 transform transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-end items-end p-6 border-b border-white/10">
            {/* <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Menu
            </span> */}
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-slate-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col py-6">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-slate-100 hover:text-blue-400 hover:bg-blue-400/10 text-lg font-medium transition-all duration-200 px-6 py-4 border-b border-white/5 relative group"
            >
              <span className="flex items-center justify-between">
                Home
                <svg
                  className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link
              to="/career-quiz"
              onClick={closeMenu}
              className={`hover:bg-blue-400/10 text-lg font-medium transition-all duration-200 px-6 py-4 border-b border-white/5 relative group ${
                location.pathname === "/career-quiz"
                  ? "text-blue-400"
                  : "text-slate-100 hover:text-blue-400"
              }`}
            >
              <span className="flex items-center justify-between">
                Career Path
                <svg
                  className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`hover:bg-blue-400/10 text-lg font-medium transition-all duration-200 px-6 py-4 border-b border-white/5 relative group ${
                location.pathname === "/contact"
                  ? "text-blue-400"
                  : "text-slate-100 hover:text-blue-400"
              }`}
            >
              <span className="flex items-center justify-between">
                Contact
                <svg
                  className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
            <Link
              to="/Mentors"
              onClick={closeMenu}
              className={`hover:bg-blue-400/10 text-lg font-medium transition-all duration-200 px-6 py-4 border-b border-white/5 relative group ${
                location.pathname === "/contact"
                  ? "text-blue-400"
                  : "text-slate-100 hover:text-blue-400"
              }`}
            >
              <span className="flex items-center justify-between">
                Mentors
                <svg
                  className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

            {/* Action Buttons */}
            <div className="px-6 pt-6 space-y-3">
              <Link   
                to="/login"
                onClick={closeMenu}
                className="block w-full text-center px-6 py-3 text-slate-100 border border-blue-400/30 rounded-lg hover:border-blue-400 hover:bg-blue-400/10 font-medium transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
