import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpenedByClick, setDropdownOpenedByClick] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      // Close mobile menu when clicking outside
      if (isMobileMenuOpen && !e.target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
    // Only handle hover on desktop and if not opened by click
    if (window.innerWidth >= 768 && !dropdownOpenedByClick) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      dropdownTimeoutRef.current = setTimeout(() => {
        setShowDropdown(true);
      }, 200);
    }
  };

  const handleMouseLeave = () => {
    // Only handle hover on desktop and if not opened by click
    if (window.innerWidth >= 768 && !dropdownOpenedByClick) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      dropdownTimeoutRef.current = setTimeout(() => {
        setShowDropdown(false);
      }, 200);
    }
  };

  const handleDropdownClick = () => {
    // Only handle click on mobile
    if (window.innerWidth < 768) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }

      // Toggle dropdown and mark as opened by click
      const newShowDropdown = !showDropdown;
      setShowDropdown(newShowDropdown);
      setDropdownOpenedByClick(newShowDropdown);

      // If closing dropdown, reset click state after a short delay
      if (!newShowDropdown) {
        setTimeout(() => {
          setDropdownOpenedByClick(false);
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[var(--color-bg)] p-4 border-b border-[var(--color-accent)] duration-1000">
      {/* Mobile Layout */}
      <div className="flex justify-between items-center md:hidden">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-[var(--color-accent)]">
          <span className="text-[var(--color-primary)]">Navi</span>Quest
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 rounded-md p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div
                className={`w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="relative w-10 h-5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50"
            style={{
              backgroundColor: isDarkMode
                ? "var(--color-accent)"
                : "var(--color-secondary)",
            }}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
                isDarkMode ? "translate-x-5" : "translate-x-0"
              }`}
            >
              {isDarkMode ? (
                <svg
                  className="w-2.5 h-2.5 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  className="w-2.5 h-2.5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Desktop Layout - Three Sections */}
      <div className="hidden md:flex justify-around items-center">
        {/* Section 1: Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold text-[var(--color-accent)]"
        >
          <span className="text-[var(--color-primary)]">Navi</span>Quest
        </Link>

        {/* Section 2: Navigation Links */}
        <div className="">
          <ul className="flex-center gap-6">
            <li
              className="relative font-semibold cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="bg-[var(--color-accent)] text-white p-2 rounded-full flex items-center gap-2 focus:outline-none">
                <FontAwesomeIcon icon={faBookOpen} />
                Course Core
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && (
                <ul className="absolute left-0 mt-2 w-40 bg-[var(--color-bg)] text-[var(--color-text)] rounded-lg shadow-lg transition-all duration-300">
                  <Link to="/course-core/10th">
                    <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white">
                      10th
                    </li>
                  </Link>
				  <Link to="/course-core/11th">
                  <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white">
                    11th
                  </li>
				  </Link>
                  <Link to="/course-core/12th">
                    <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white">
                      12th
                    </li>
				  </Link>
                </ul>
              )}
            </li>
            <li className="relative group overflow-hidden">
              <a
                href=""
                className="inline-block relative text-[var(--color-text)] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li className="relative group overflow-hidden">
              <a
                href=""
                className="inline-block relative text-[var(--color-text)] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Mentors
              </a>
            </li>
            <li className="relative group overflow-hidden">
              <a
                href=""
                className="inline-block relative text-[var(--color-text)] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Career Path
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Auth buttons & Theme Toggle */}
        <div className="flex-center gap-3">
          <a
            href=""
            className="bg-[var(--color-accent)] px-4 py-2 rounded-full text-white"
          >
            Login
          </a>
          <a
            href=""
            className="bg-[var(--color-bg)] text-[var(--color-text)] px-3 py-2 rounded-full border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:border-white hover:translate-y-[-2px] transition-all duration-300"
          >
            Signup
          </a>
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-50 cursor-pointer"
            style={{
              backgroundColor: isDarkMode
                ? "var(--color-accent)"
                : "var(--color-secondary)",
            }}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 flex items-center justify-center ${
                isDarkMode ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {isDarkMode ? (
                <svg
                  className="w-3 h-3 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="space-y-2">
            <li
              className="relative font-semibold cursor-pointer"
              onClick={handleDropdownClick}
            >
              <button className="w-full text-left bg-[var(--color-accent)] text-white p-2 rounded-full flex items-center justify-between focus:outline-none">
                Course Core
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && (
                <ul className="mt-2 space-y-1 bg-[var(--color-bg)] text-[var(--color-text)] rounded-lg shadow-lg">
				  <Link to="/course-core/10th">
                  <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white">
                    10th
                  </li>
				  </Link>
				  <Link to="/course-core/11th">
                  <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white">
                    11th
                  </li>
				  </Link>
				  <Link to="/course-core/12th">
                  <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white">
                    12th
                  </li>
				  </Link>
                </ul>
              )}
            </li>
            <li className="px-4 py-2 text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white rounded-md">
              <a href="">Home</a>
            </li>
            <li className="px-4 py-2 text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white rounded-md">
              <a href="">Mentors</a>
            </li>
            <li className="px-4 py-2 text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-white rounded-md">
              <a href="">Career Path</a>
            </li>
          </ul>
          <div className="flex flex-col gap-3 pt-4">
            <a
              href=""
              className="bg-[var(--color-accent)] px-4 py-2 rounded-full text-white text-center"
            >
              Login
            </a>
            <a
              href=""
              className="bg-[var(--color-bg)] text-[var(--color-text)] px-3 py-2 rounded-full border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:border-white transition-all duration-300 text-center"
            >
              Signup
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
