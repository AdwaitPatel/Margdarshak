import React, { useState, useEffect } from "react";
import {
  Calendar,
  Menu,
  Moon,
  Sun,
  User,
  LogOut,
  Settings,
  UserCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Dashboard Content Component
const DashboardContent = ({ user }) => {
  return (
    <div className="h-full p-4 lg:p-6 space-y-6 lg:space-y-8">
      {/* Welcome Section */}
      <div className="mb-6 lg:mb-8">
        <h1
          className="text-2xl lg:text-3xl font-bold mb-2"
          style={{ color: "var(--color-primary)" }}
        >
          Welcome back, {user?.fullName || "Student"}!
        </h1>
        <p
          className="text-sm lg:text-base"
          style={{ color: "var(--color-secondary)" }}
        >
          Track your progress and upcoming sessions
        </p>
      </div>

      {/* Your Appointments Section */}
      <div className="mb-6 lg:mb-8">
        <h2
          className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6"
          style={{ color: "var(--color-primary)" }}
        >
          Your appointments
        </h2>
        <div
          className="rounded-xl p-4 lg:p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-secondary)",
            boxShadow: "0 8px 32px rgba(var(--color-primary-rgb), 0.1)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <Calendar
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  style={{ color: "var(--color-primary)" }}
                />
                <span
                  className="text-base lg:text-lg font-medium"
                  style={{ color: "var(--color-text)" }}
                >
                  Career Guidance Session
                </span>
              </div>
              <p
                className="text-sm lg:text-base mb-2"
                style={{ color: "var(--color-text)" }}
              >
                📅 July 23rd, 2024 • ⏰ 2:00 PM - 3:00 PM
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--color-secondary)" }}
              >
                Meeting with Dr. Sarah Johnson to discuss your career path in
                technology
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                  boxShadow: "0 4px 12px rgba(var(--color-primary-rgb), 0.3)",
                }}
              >
                Join Meeting
              </button>
              <button
                className="px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105"
                style={{
                  background: "transparent",
                  color: "var(--color-primary)",
                  border: "1px solid var(--color-primary)",
                }}
              >
                Reschedule
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Sessions Section */}
      <div>
        <h2
          className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6"
          style={{ color: "var(--color-primary)" }}
        >
          Recent Counselling Sessions
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
          {/* Career Guidance Session */}
          <div
            className="rounded-xl p-4 lg:p-6 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 8px 32px rgba(var(--color-primary-rgb), 0.1)",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3
                  className="text-lg lg:text-xl font-semibold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  Career Guidance Session
                </h3>
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-medium">SJ</span>
                  </div>
                  <p
                    className="text-sm lg:text-base"
                    style={{ color: "var(--color-text)" }}
                  >
                    Dr. Sarah Johnson
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className="text-sm lg:text-base font-medium"
                  style={{ color: "var(--color-text)" }}
                >
                  July 15, 2024
                </p>
                <p
                  className="text-xs lg:text-sm"
                  style={{ color: "var(--color-secondary)" }}
                >
                  2:00 PM - 3:00 PM
                </p>
              </div>
            </div>
            <p
              className="text-sm lg:text-base mb-4 line-clamp-2"
              style={{ color: "var(--color-secondary)" }}
            >
              Discussed career options in technology sector, identified
              strengths and interests, and created a roadmap for skill
              development.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <div className="flex gap-2">
                <button
                  className="text-xs lg:text-sm px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: "transparent",
                    color: "var(--color-primary)",
                    border: "1px solid var(--color-primary)",
                  }}
                >
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Meetings Content Component
const MeetingsContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex items-start justify-center pt-8">
        <div className="w-full max-w-4xl">
          <div
            className="rounded-lg p-8 shadow-lg transition-all duration-300"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
            }}
          >
            <h3
              className="text-2xl font-medium mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Upcoming Meetings
            </h3>
            <div className="space-y-4">
              <div
                className="flex items-center justify-between p-4 rounded-lg transition-all duration-300"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-primary)",
                  boxShadow: "0 2px 4px rgba(var(--color-primary), 0.1)",
                }}
              >
                <div className="flex items-center space-x-4">
                  <Calendar
                    className="w-6 h-6"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <div>
                    <p
                      className="text-lg"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Career Counseling Session
                    </p>
                    <p style={{ color: "var(--color-secondary)" }}>
                      July 23, 2024 at 2:00 PM
                    </p>
                  </div>
                </div>
                <button
                  className="px-6 py-2 rounded-lg transition-all duration-300"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-bg)",
                    ":hover": { opacity: 0.9 },
                  }}
                >
                  Join Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentDashboard = ({ sidebarOpen, setSidebarOpen, selectedTab }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }

    // Click outside handler for dropdown
    const handleClickOutside = (event) => {
      if (
        profileDropdownOpen &&
        !event.target.closest(".profile-dropdown-container")
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropdownOpen]);

  const handleProfileMenuClick = (item) => {
    setProfileDropdownOpen(false);

    if (item === "logout") {
      // Clear any stored authentication data
      localStorage.removeItem("authToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      navigate("/");
    } else if (item === "profile") {
      // Navigate to profile page or show profile modal
      console.log("Navigate to profile");
    } else if (item === "settings") {
      // Navigate to settings page
      console.log("Navigate to settings");
    }
  };

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

  const renderContent = () => {
    switch (selectedTab) {
      case "Dashboard":
        return <DashboardContent user={user} />;
      case "Meetings":
        return <MeetingsContent />;
      default:
        return <DashboardContent user={user} />;
    }
  };

  return (
    <div
      className="flex-1 flex flex-col h-full"
      style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* Enhanced Navigation Bar */}
      <div
        className="sticky top-0 z-30 px-4 lg:px-6 py-3 lg:py-4 flex justify-between items-center backdrop-blur-md"
        style={{
          background: "rgba(var(--color-bg-rgb), 0.95)",
          borderBottom: "1px solid var(--color-secondary)",
          boxShadow: "0 4px 20px rgba(var(--color-primary-rgb), 0.1)",
        }}
      >
        {/* Left Section - Hamburger Menu & Welcome */}
        <div className="flex items-center gap-3 lg:gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 lg:p-3 rounded-xl transition-all duration-300 transform hover:scale-105 lg:hidden"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 4px 12px rgba(var(--color-primary-rgb), 0.3)",
            }}
          >
            <Menu className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          <div className="lg:hidden">
            <h1
              className="text-lg font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              NaviQuest
            </h1>
          </div>
        </div>

        {/* Right Section - Theme Toggle and Enhanced Profile Dropdown */}
        <div className="flex items-center gap-2 lg:gap-4 relative profile-dropdown-container">
          <button
            onClick={toggleTheme}
            className="p-2 lg:p-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 4px 12px rgba(var(--color-primary-rgb), 0.3)",
            }}
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 lg:w-5 lg:h-5" />
            ) : (
              <Moon className="w-4 h-4 lg:w-5 lg:h-5" />
            )}
          </button>

          {/* Enhanced Profile Button */}
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-bg)",
              border: "2px solid var(--color-primary)",
              boxShadow: "0 4px 12px rgba(var(--color-primary-rgb), 0.2)",
            }}
          >
            {user?.profilePicture ? (
              <img
                src={user.profilePicture}
                alt={user.fullName || "Profile"}
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
              />
            ) : (
              <div
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-sm lg:text-base font-semibold"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                }}
              >
                {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}
            <div className="hidden lg:block text-left">
              <p
                className="text-sm font-medium leading-tight"
                style={{ color: "var(--color-text)" }}
              >
                {user?.fullName || "Student"}
              </p>
              <p
                className="text-xs leading-tight"
                style={{ color: "var(--color-secondary)" }}
              >
                {user?.email || "student@example.com"}
              </p>
            </div>
          </button>

          {/* Enhanced Profile Dropdown */}
          {profileDropdownOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-64 lg:w-80 rounded-xl shadow-2xl z-50 transition-all duration-300 transform origin-top-right"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                boxShadow: "0 20px 60px rgba(var(--color-primary-rgb), 0.15)",
              }}
            >
              {/* User Info Header */}
              <div
                className="p-4 lg:p-6 border-b"
                style={{ borderColor: "var(--color-secondary)" }}
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  {user?.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt={user.fullName || "Profile"}
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-2"
                      style={{ borderColor: "var(--color-primary)" }}
                    />
                  ) : (
                    <div
                      className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-xl lg:text-2xl font-bold border-2"
                      style={{
                        background: "var(--color-primary)",
                        color: "var(--color-bg)",
                        borderColor: "var(--color-primary)",
                      }}
                    >
                      {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-semibold text-base lg:text-lg truncate"
                      style={{ color: "var(--color-text)" }}
                    >
                      {user?.fullName || "Student Name"}
                    </h3>
                    <p
                      className="text-sm truncate"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {user?.email || "student@example.com"}
                    </p>
                    <span
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1"
                      style={{
                        background: "var(--color-accent)",
                        color: "var(--color-bg)",
                      }}
                    >
                      {user?.role || "Student"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-2">
                <button
                  onClick={() => handleProfileMenuClick("profile")}
                  className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-left transition-all duration-300 hover:opacity-80"
                  style={{ color: "var(--color-text)" }}
                >
                  <UserCircle
                    className="w-5 h-5"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <span className="text-sm lg:text-base">My Profile</span>
                </button>
                <button
                  onClick={() => handleProfileMenuClick("settings")}
                  className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-left transition-all duration-300 hover:opacity-80"
                  style={{ color: "var(--color-text)" }}
                >
                  <Settings
                    className="w-5 h-5"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <span className="text-sm lg:text-base">Settings</span>
                </button>
                <hr
                  style={{ borderColor: "var(--color-secondary)" }}
                  className="my-2"
                />
                <button
                  onClick={() => handleProfileMenuClick("logout")}
                  className="w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-left transition-all duration-300 hover:opacity-80"
                  style={{ color: "var(--color-accent)" }}
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm lg:text-base">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Content - Takes remaining space */}
      <div className="flex-1 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default StudentDashboard;
