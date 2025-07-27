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
  FaTimes,
  FaHome,
  FaCog,
  FaSignOutAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isSidebarOpen &&
        !e.target.closest(".sidebar") &&
        !e.target.closest(".sidebar-toggle")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Navigation items
  const navItems = [
    { icon: <FaHome className="text-xl" />, label: "Dashboard", link: "#" },
    {
      icon: <FaCalendarAlt className="text-xl" />,
      label: "Calendar",
      link: "#",
    },
    { icon: <FaComments className="text-xl" />, label: "Messages", link: "#" },
    { icon: <FaCog className="text-xl" />, label: "Settings", link: "#" },
  ];

  return (
    <div
      className="min-h-screen font-sans relative"
      style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="sidebar-toggle fixed top-4 left-4 z-50 p-2 rounded-lg md:hidden transition-all duration-300 transform hover:scale-105"
        style={{
          background: "var(--color-primary)",
          color: "var(--color-bg)",
          boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
        }}
      >
        {isSidebarOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </button>

      {/* Mobile Sidebar */}
      <div
        className={`sidebar fixed md:hidden top-0 left-0 h-full w-64 z-40 transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "var(--color-bg)",
          borderRight: "1px solid var(--color-secondary)",
          boxShadow: "2px 0 4px rgba(var(--color-primary), 0.1)",
        }}
      >
        <div className="p-4">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8 pt-12">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Mentor"
                className="w-20 h-20 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
                style={{
                  border: "4px solid var(--color-primary)",
                  boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 w-4 h-4 rounded-full"
                style={{
                  background: "var(--color-accent)",
                  border: "2px solid var(--color-bg)",
                }}
              ></div>
            </div>
            <h2
              className="mt-3 text-lg font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Hardik Singh
            </h2>
            <p className="text-sm" style={{ color: "var(--color-secondary)" }}>
              Mentor
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-secondary)",
                  color: "var(--color-text)",
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] mt-4 w-full text-left"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
              }}
            >
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Top Navbar */}
      <div
        className="sticky top-0 z-30 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center shadow-lg"
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-secondary)",
          color: "var(--color-text)",
        }}
      >
        <h1
          className="text-lg sm:text-2xl font-bold ml-12 md:ml-0"
          style={{ color: "var(--color-primary)" }}
        >
          NaviQuest
        </h1>
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
      <div className="p-4 sm:p-6 lg:p-8 md:ml-0">
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
              <span style={{ color: "var(--color-primary)" }}>Mentor</span>
            </h2>
            <p style={{ color: "var(--color-text)" }}>
              Manage all sessions, track conversations and explore new
              recommendations from here.
            </p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/mentor-guiding-students-5679461-4753786.png"
            alt="Mentor"
            className="w-24 sm:w-32 transition-transform duration-300 transform hover:scale-110"
          />
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

        {/* Pinned Conversations */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-4">
            <FaComments
              className="text-lg"
              style={{ color: "var(--color-primary)" }}
            />
            <h3
              className="text-lg sm:text-xl font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Pinned Conversations
            </h3>
          </div>
          <div
            className="rounded-xl p-4 shadow-lg transition-all duration-300"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
            }}
          >
            {[
              {
                name: "Muskan Agarwal",
                message: "I wanna know more about filmmaking.",
                time: "Today",
              },
              {
                name: "Karan Grover",
                message: "Interested in learning about animation.",
                time: "Today",
              },
              {
                name: "Yvonne",
                message: "Switching career path soon.",
                time: "Yesterday",
              },
              {
                name: "Tom Hanks",
                message: "I'm your professor, see you!",
                time: "07/06/2021",
              },
            ].map((conv, idx) => (
              <div
                key={idx}
                className="py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 transition-all duration-300 hover:opacity-80 cursor-pointer"
                style={{
                  borderTop:
                    idx !== 0 ? `1px solid var(--color-secondary)` : "none",
                }}
              >
                <div>
                  <p
                    className="font-medium"
                    style={{ color: "var(--color-text)" }}
                  >
                    {conv.name}
                  </p>
                  <p
                    style={{ color: "var(--color-secondary)" }}
                    className="text-sm"
                  >
                    {conv.message}
                  </p>
                </div>
                <p className="text-xs" style={{ color: "var(--color-accent)" }}>
                  {conv.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaLightbulb
              className="text-lg"
              style={{ color: "var(--color-primary)" }}
            />
            <h3
              className="text-lg sm:text-xl font-semibold"
              style={{ color: "var(--color-text)" }}
            >
              Your Recommendations
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center font-medium">
            {[
              {
                icon: <FaBook className="text-2xl sm:text-3xl mb-2" />,
                title: "Books",
              },
              {
                icon: <FaVideo className="text-2xl sm:text-3xl mb-2" />,
                title: "Videos",
              },
              {
                icon: (
                  <FaChalkboardTeacher className="text-2xl sm:text-3xl mb-2" />
                ),
                title: "Courses",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-xl flex flex-col items-center justify-center shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                  boxShadow: "0 4px 6px rgba(var(--color-primary), 0.2)",
                }}
              >
                {React.cloneElement(item.icon, {
                  style: { color: "var(--color-bg)" },
                })}
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Dashboard;
