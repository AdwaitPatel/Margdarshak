import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <img 
      src="/Screenshot_2025-07-17_123403-removebg-preview.png" 
      alt="NaviQuest Logo" 
      className="h-16 w-auto dark:brightness-0 dark:invert transition-all duration-300"
    />
  </Link>
);

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpenedByClick, setDropdownOpenedByClick] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = () => {
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
    if (window.innerWidth < 768) {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }

      const newShowDropdown = !showDropdown;
      setShowDropdown(newShowDropdown);
      setDropdownOpenedByClick(newShowDropdown);

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
        <Logo />
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
          <ThemeToggle className="w-10 h-5" />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-around items-center">
        <Logo />
        <div className="">
          <ul className="flex-center gap-6">
            {/* ... existing navigation items ... */}
          </ul>
        </div>
        <div className="flex-center gap-3">
          <Link
            to="/login"
            className="bg-[var(--color-accent)] px-4 py-2 rounded-full text-white"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[var(--color-bg)] text-[var(--color-text)] px-3 py-2 rounded-full border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:border-white hover:translate-y-[-2px] transition-all duration-300"
          >
            Signup
          </Link>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          {/* ... existing mobile menu items ... */}
        </div>
      )}
    </nav>
  );
};

export default Navbar; 