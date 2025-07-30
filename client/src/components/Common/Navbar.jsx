import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <img
      src="/logo.png"
      alt="NaviQuest Logo"
      className="h-16 w-auto dark:brightness-0 dark:invert transition-all duration-300"
    />
  </Link>
);

const Navbar = () => {
  const location = useLocation();
  const isCareerQuizPage = location.pathname === "/career-quiz";
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpenedByClick, setDropdownOpenedByClick] = useState(false);
  const [mobileCourseCoreOpen, setMobileCourseCoreOpen] = useState(false);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null); // '11' or '12' or null
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
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-lg transition-all duration-300"
      style={{
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-secondary)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      {/* Mobile Layout */}
      <div className="flex justify-between items-center md:hidden px-4">
        {/* Logo */}
        <Logo />

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none rounded-md p-2 transition-all duration-300"
            style={{
              color: "var(--color-text)",
              ":focus": {
                boxShadow: "0 0 0 2px var(--color-primary)",
              },
            }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
                style={{ background: "var(--color-text)" }}
              ></div>
              <div
                className={`w-6 h-0.5 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
                style={{ background: "var(--color-text)" }}
              ></div>
              <div
                className={`w-6 h-0.5 transition-all duration-300 mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
                style={{ background: "var(--color-text)" }}
              ></div>
            </div>
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop Layout - Three Sections */}
      <div className="hidden md:flex justify-around items-center">
        {/* Section 1: Logo */}
        <Logo />

        {/* Section 2: Navigation Links */}
        <div className="">
          <ul className="flex-center gap-6">
            <li
              className="relative font-semibold cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="p-2 rounded-full flex items-center gap-2 transition-all duration-300"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-bg)",
                }}
              >
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
                <ul
                  className="absolute left-0 mt-2 w-40 rounded-lg shadow-lg transition-all duration-300"
                  style={{
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-secondary)",
                    boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
                  }}
                >
                  <Link to="/course-core/10th">
                    <li
                      className="px-4 py-2 transition-all duration-300 hover:opacity-90 first:rounded-t-lg"
                      style={{
                        color: "var(--color-text)",
                        ":hover": {
                          background: "var(--color-primary)",
                          color: "var(--color-bg)",
                        },
                      }}
                    >
                      10th
                    </li>
                  </Link>
                  {/* 11th with sub-dropdown */}
                  <li
                    className="relative group md:group-hover:block"
                    onClick={() => {
                      if (window.innerWidth < 768)
                        setMobileSubDropdown(
                          mobileSubDropdown === "11" ? null : "11"
                        );
                    }}
                  >
                    <Link to="/course-core/11th">
                      <div
                        className="px-4 py-2 flex justify-between items-center cursor-pointer transition-all duration-300 hover:opacity-90"
                        style={{ color: "var(--color-text)" }}
                      >
                        11th
                        <svg
                          className="w-3 h-3 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                    <ul
                      className={`absolute left-full top-0 mt-0 w-40 rounded-lg shadow-lg bg-[var(--color-bg)] dark:bg-[var(--color-bg)] border border-[var(--color-secondary)] dark:border-[var(--color-secondary)] z-50 transition-all duration-300 ${
                        window.innerWidth < 768
                          ? mobileSubDropdown === "11"
                            ? "block"
                            : "hidden"
                          : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                      }`}
                    >
                      <Link to="/careers/PCM">
                        <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 dark:text-[var(--color-text)]">
                          Math
                        </li>
                      </Link>
                      <Link to="/careers/PCB">
                        <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 dark:text-[var(--color-text)]">
                          Bio
                        </li>
                      </Link>
                      <Link to="/careers/Commerce">
                        <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 dark:text-[var(--color-text)]">
                          Commerce
                        </li>
                      </Link>
                      <Link to="/careers/Arts">
                        <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 dark:text-[var(--color-text)]">
                          Arts
                        </li>
                      </Link>
                    </ul>
                  </li>
                  {/* 12th with sub-dropdown */}
                  <li
                    className="relative group md:group-hover:block"
                    onClick={() => {
                      if (window.innerWidth < 768)
                        setMobileSubDropdown(
                          mobileSubDropdown === "12" ? null : "12"
                        );
                    }}
                  >
                    <Link to="/course-core/12th">
                      <div
                        className="px-4 py-2 flex justify-between items-center cursor-pointer transition-all duration-300 hover:opacity-90"
                        style={{ color: "var(--color-text)" }}
                      >
                        12th
                        <svg
                          className="w-3 h-3 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                    <ul
                      className={`absolute left-full top-0 mt-0 w-40 rounded-lg shadow-lg bg-[var(--color-bg)] dark:bg-[var(--color-bg)] border border-[var(--color-secondary)] dark:border-[var(--color-secondary)] z-50 transition-all duration-300 ${
                        window.innerWidth < 768
                          ? mobileSubDropdown === "12"
                            ? "block"
                            : "hidden"
                          : "opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
                      }`}
                    >
                      <Link to="/careers/PCM">
                        <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 dark:text-[var(--color-text)]">
                          Math
                        </li>
                      </Link>
                      <Link to="/careers/PCB">
                        <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 dark:text-[var(--color-text)]">
                          Bio
                        </li>
                      </Link>
                      <Link to="/careers/Commerce">
                        <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 dark:text-[var(--color-text)]">
                          Commerce
                        </li>
                      </Link>
                      <Link to="/careers/Arts">
                        <li className="px-4 py-2 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 dark:text-[var(--color-text)]">
                          Arts
                        </li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative group overflow-hidden">
              <Link
                to="/"
                className="inline-block relative transition-all duration-300"
                style={{
                  color: "var(--color-text)",
                  ":after": {
                    content: '""',
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    width: "0",
                    height: "2px",
                    background: "var(--color-primary)",
                    transition: "all 0.3s",
                  },
                  ":hover:after": {
                    width: "100%",
                  },
                }}
              >
                Home
              </Link>
            </li>
            <li className="relative group overflow-hidden">
              <Link
                to="/mentors"
                className="inline-block relative transition-all duration-300"
                style={{
                  color: "var(--color-text)",
                  ":after": {
                    content: '""',
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    width: "0",
                    height: "2px",
                    background: "var(--color-primary)",
                    transition: "all 0.3s",
                  },
                  ":hover:after": {
                    width: "100%",
                  },
                }}
              >
                Mentors
              </Link>
            </li>
            <li className="relative group overflow-hidden">
              <Link
                to="/career-quiz"
                className="inline-block relative transition-all duration-300"
                style={{
                  color: "var(--color-text)",
                  ":after": {
                    content: '""',
                    position: "absolute",
                    left: "0",
                    bottom: "0",
                    width: "0",
                    height: "2px",
                    background: "var(--color-primary)",
                    transition: "all 0.3s",
                  },
                  ":hover:after": {
                    width: "100%",
                  },
                }}
              >
                Career Path
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Auth buttons & Theme Toggle */}
        <div className="flex-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              boxShadow: "0 2px 4px rgba(var(--color-accent), 0.2)",
            }}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
            style={{
              background: "var(--color-bg)",
              color: "var(--color-text)",
              border: "1px solid var(--color-accent)",
              ":hover": {
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                borderColor: "var(--color-bg)",
              },
            }}
          >
            Signup
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Dropdown for Course Core */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden transition-all duration-300 px-4 py-4 space-y-4"
          style={{
            background: "var(--color-bg)",
            borderTop: "1px solid var(--color-secondary)",
          }}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <button
                className="block w-full text-left py-2 text-lg font-semibold flex items-center justify-between"
                style={{ color: "var(--color-text)" }}
                onClick={() => setMobileCourseCoreOpen(!mobileCourseCoreOpen)}
              >
                Course Core
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    mobileCourseCoreOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {mobileCourseCoreOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/course-core/10th"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-base font-medium"
                      style={{ color: "var(--color-text)" }}
                    >
                      10th
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <Link
                        to="#"
                        className="block py-2 text-base font-medium flex-1"
                        style={{ color: "var(--color-text)" }}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileSubDropdown(
                            mobileSubDropdown === "11" ? null : "11"
                          );
                        }}
                      >
                        11th
                      </Link>
                      <button
                        className="ml-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileSubDropdown(
                            mobileSubDropdown === "11" ? null : "11"
                          );
                        }}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            mobileSubDropdown === "11" ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    {mobileSubDropdown === "11" && (
                      <ul className="ml-4 mt-2 space-y-2">
                        <li>
                          <Link
                            to="/careers/PCM"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-medium"
                            style={{ color: "var(--color-text)" }}
                          >
                            Math
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/careers/PCB"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-medium"
                            style={{ color: "var(--color-text)" }}
                          >
                            Bio
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/careers/Commerce"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-medium"
                            style={{ color: "var(--color-text)" }}
                          >
                            Commerce
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/careers/Arts"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-medium"
                            style={{ color: "var(--color-text)" }}
                          >
                            Arts
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div className="flex items-center justify-between">
                      <Link
                        to="#"
                        className="block py-2 text-base font-medium flex-1"
                        style={{ color: "var(--color-text)" }}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileSubDropdown(
                            mobileSubDropdown === "12" ? null : "12"
                          );
                        }}
                      >
                        12th
                      </Link>
                      <button
                        className="ml-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileSubDropdown(
                            mobileSubDropdown === "12" ? null : "12"
                          );
                        }}
                      >
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            mobileSubDropdown === "12" ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    {mobileSubDropdown === "12" && (
                      <ul className="ml-4 mt-2 space-y-2">
                        <li>
                          <Link
                            to="/careers/PCM"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-medium"
                            style={{ color: "var(--color-text)" }}
                          >
                            Math
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/careers/PCB"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-medium"
                            style={{ color: "var(--color-text)" }}
                          >
                            Bio
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/careers/Commerce"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-medium"
                            style={{ color: "var(--color-text)" }}
                          >
                            Commerce
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/careers/Arts"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-base font-medium"
                            style={{ color: "var(--color-text)" }}
                          >
                            Arts
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            {/* Other nav links */}
            <li>
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-lg font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/mentors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-lg font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Mentors
              </Link>
            </li>
            <li>
              <Link
                to="/career-quiz"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-lg font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Career Path
              </Link>
            </li>
          </ul>

          {/* Auth buttons for mobile */}
          <div className="pt-4 space-y-3">
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                boxShadow: "0 2px 4px rgba(var(--color-accent), 0.2)",
              }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                border: "1px solid var(--color-accent)",
              }}
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
