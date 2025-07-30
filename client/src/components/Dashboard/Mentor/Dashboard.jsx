import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaBook,
  FaVideo,
  FaChalkboardTeacher,
  FaComments,
  FaLightbulb,
  FaBars,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";

function Dashboard({ mentorName, toggleSidebar }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data from localStorage
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");

    // Navigate to main landing page
    navigate("/");
  };

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className="min-h-screen font-sans"
      style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* Top Navbar */}
      <div
        className="sticky top-0 z-30 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center shadow-lg"
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-secondary)",
          color: "var(--color-text)",
        }}
      >
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
            }}
          >
            <FaBars className="text-lg" />
          </button>

          <h1
            className="text-lg sm:text-2xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            NaviQuest
          </h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
            }}
          >
            {isDarkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button>

          {/* Profile Button */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-primary)",
                border: "2px solid var(--color-accent)",
              }}
            >
              <FiUser
                className="text-base sm:text-xl"
                style={{ color: "var(--color-bg)" }}
              />
            </button>
            {isProfileOpen && (
              <div
                className="absolute right-0 mt-2 w-48 sm:w-56 rounded-lg shadow-lg transition-all duration-300"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-secondary)",
                  boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
                }}
              >
                <a
                  href="#profile"
                  className="block px-4 py-2 hover:opacity-80 rounded-t"
                  style={{ color: "var(--color-text)" }}
                >
                  Profile
                </a>
                <a
                  href="#settings"
                  className="block px-4 py-2 hover:opacity-80"
                  style={{ color: "var(--color-text)" }}
                >
                  Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:opacity-80 rounded-b"
                  style={{
                    color: "var(--color-accent)",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Welcome Section */}
        <div
          className="rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 flex flex-col lg:flex-row justify-between items-center shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-secondary)",
            boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
          }}
        >
          <div className="text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Welcome Back,{" "}
              <span style={{ color: "var(--color-primary)" }}>
                {mentorName?.split(" ")[0]}
              </span>
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Manage all sessions, track conversations and explore new
              recommendations from here.
            </p>
          </div>
        </div>

        {/* Info Sessions */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FaCalendarAlt
              className="text-lg"
              style={{ color: "var(--color-primary)" }}
            />
            <h3
              className="text-lg sm:text-xl font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Ongoing Info Sessions
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Typing: Improve your speed", daysLeft: "1 Day Left" },
              { title: "Exceptional Product Manager", daysLeft: "4 Days Left" },
              {
                title: "Design Thinking for Innovation",
                daysLeft: "6 Days Left",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-secondary)",
                  boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
                }}
              >
                <p
                  className="text-sm mb-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  {item.daysLeft}
                </p>
                <h4
                  className="font-medium mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.title}
                </h4>
                <button
                  className="w-full sm:w-auto text-sm px-4 py-1 rounded transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-bg)",
                    boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
                  }}
                >
                  Attend
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
