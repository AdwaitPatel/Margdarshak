import React, { useState, useEffect } from "react";
import { Calendar, Menu, Moon, Sun, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Session Card Component
const SessionCard = ({ title, counselor, date, time, description }) => {
  return (
    <div
      className="border border-gray-200/10 rounded-lg p-6"
      style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3
            className="text-lg font-medium mb-1"
            style={{ color: "var(--color-primary)" }}
          >
            {title}
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text)" }}>
            {counselor}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm" style={{ color: "var(--color-text)" }}>
            {date}
          </p>
          <p className="text-xs" style={{ color: "var(--color-secondary)" }}>
            {time}
          </p>
        </div>
      </div>
      <p className="text-sm mb-3" style={{ color: "var(--color-text)" }}>
        {description}
      </p>
      <div className="flex justify-between items-center">
        <span
          className="text-xs px-2 py-1 rounded"
          style={{
            background: "var(--color-accent)",
            color: "var(--color-bg)",
          }}
        >
          Completed
        </span>
        <button
          className="text-sm px-3 py-1 rounded transition-colors"
          style={{
            border: "1px solid var(--color-primary)",
            color: "var(--color-primary)",
            ":hover": {
              background: "var(--color-primary)",
              color: "var(--color-bg)",
            },
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

// Dashboard Content Component
const DashboardContent = () => {
  return (
    <div className="h-full p-4 sm:p-6">
      {/* Your Appointments Section */}
      <div className="mb-8">
        <h2
          className="text-lg sm:text-xl mb-4"
          style={{ color: "var(--color-primary)" }}
        >
          Your appointments
        </h2>
        <div
          className="rounded-lg p-4 sm:p-6 shadow-lg transition-all duration-300"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-secondary)",
            boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
          }}
        >
          <div className="flex items-center mb-2">
            <Calendar
              className="w-4 h-4 mr-2"
              style={{ color: "var(--color-primary)" }}
            />
            <span className="text-sm" style={{ color: "var(--color-text)" }}>
              Meeting at 23rd of July
            </span>
          </div>
          <p
            className="text-sm mb-4"
            style={{ color: "var(--color-secondary)" }}
          >
            Some details about meeting
          </p>
          <button
            className="w-full sm:w-auto px-4 py-2 rounded text-sm transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
            }}
          >
            Upcoming
          </button>
        </div>
      </div>

      {/* Previous Sessions Section */}
      <div>
        <h2
          className="text-lg sm:text-xl mb-4 sm:mb-6"
          style={{ color: "var(--color-primary)" }}
        >
          My Previous Counselling Sessions
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Career Guidance Session */}
          <div
            className="rounded-lg p-4 sm:p-6 transition-all duration-300 transform hover:scale-[1.02]"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="mb-2 sm:mb-0">
                <h3
                  className="text-base sm:text-lg font-medium mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  Career Guidance Session
                </h3>
                <p className="text-sm" style={{ color: "var(--color-text)" }}>
                  Dr. Sarah Johnson
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm" style={{ color: "var(--color-text)" }}>
                  15th July, 2024
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-secondary)" }}
                >
                  2:00 PM - 3:00 PM
                </p>
              </div>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Discussed career options in technology sector, identified
              strengths and interests.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <span
                className="text-xs px-3 py-1 rounded-full w-full sm:w-auto text-center"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-bg)",
                }}
              >
                Completed
              </span>
              <button
                className="text-sm px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                  boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
                }}
              >
                View Details
              </button>
            </div>
          </div>

          {/* Skills Assessment */}
          <div
            className="rounded-lg p-4 sm:p-6 transition-all duration-300 transform hover:scale-[1.02]"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="mb-2 sm:mb-0">
                <h3
                  className="text-base sm:text-lg font-medium mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  Skills Assessment
                </h3>
                <p className="text-sm" style={{ color: "var(--color-text)" }}>
                  Dr. Michael Chen
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm" style={{ color: "var(--color-text)" }}>
                  8th July, 2024
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-secondary)" }}
                >
                  10:00 AM - 11:30 AM
                </p>
              </div>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Comprehensive skills evaluation and personality assessment for
              career planning.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <span
                className="text-xs px-3 py-1 rounded-full w-full sm:w-auto text-center"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-bg)",
                }}
              >
                Completed
              </span>
              <button
                className="text-sm px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                  boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
                }}
              >
                View Details
              </button>
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

// Explore Content Component
const ExploreContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            {
              title: "Career Paths",
              description:
                "Explore different career opportunities and find the path that suits you best",
              icon: "🎯",
            },
            {
              title: "Skill Development",
              description:
                "Learn new skills and enhance your capabilities for future success",
              icon: "📚",
            },
            {
              title: "Industry Insights",
              description:
                "Get valuable insights about different industries and market trends",
              icon: "💡",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-8 transition-all duration-300 cursor-pointer transform hover:scale-105"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
              }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3
                className="text-xl font-medium mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                {item.title}
              </h3>
              <p style={{ color: "var(--color-secondary)" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Career Quiz Content Component
const CareerQuizContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div
        className="rounded-lg p-6 flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full transition-all duration-300"
        style={{
          background: "var(--color-bg)",
          border: "1px solid var(--color-secondary)",
          boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
        }}
      >
        <div className="text-center">
          <h3
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Career Assessment Quiz
          </h3>
          <p
            className="mb-8 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-secondary)" }}
          >
            Take our comprehensive career assessment to discover your ideal
            career path based on your interests, skills, and personality.
          </p>
          <button
            className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 4px 6px rgba(var(--color-primary), 0.2)",
            }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

const profileMenuItems = ["My Profile", "Settings", "Logout"];

const StudentDashboard = ({ sidebarOpen, setSidebarOpen, selectedTab }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleProfileMenuClick = (item) => {
    setProfileDropdownOpen(false);

    if (item === "Logout") {
      // Clear any stored authentication data
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      navigate("/");
    }
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

  const renderContent = () => {
    switch (selectedTab) {
      case "Dashboard":
        return <DashboardContent />;
      case "Meetings":
        return <MeetingsContent />;
      case "Explore":
        return <ExploreContent />;
      case "Career Quiz":
        return <CareerQuizContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div
      className="flex-1 flex flex-col h-full"
      style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* Unified Navigation Bar */}
      <div
        className="sticky top-0 z-30 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center shadow-lg"
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-secondary)",
          boxShadow: "0 2px 4px rgba(var(--color-primary), 0.1)",
        }}
      >
        {/* Left Section - Hamburger Menu */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
          style={{
            background: "var(--color-primary)",
            color: "var(--color-bg)",
            boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
          }}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Center Section - NaviQuest Logo */}
        <h1
          className="text-lg sm:text-2xl font-bold"
          style={{ color: "var(--color-primary)" }}
        >
          NaviQuest
        </h1>

        {/* Right Section - Theme Toggle and Profile Dropdown */}
        <div className="flex items-center gap-2 sm:gap-4 relative">
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
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              border: "2px solid var(--color-accent)",
            }}
          >
            <User className="w-5 h-5" style={{ color: "var(--color-bg)" }} />
          </button>
          {profileDropdownOpen && (
            <div
              className="absolute right-0 mt-40 w-64 rounded-lg shadow-lg z-50 transition-all duration-300"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                boxShadow: "0 4px 6px rgba(var(--color-primary), 0.1)",
              }}
            >
              <div className="py-2">
                {profileMenuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleProfileMenuClick(item)}
                    className={`w-full text-left px-4 py-2 text-sm transition-all duration-300 hover:opacity-80 ${
                      item === "Logout" ? "rounded-b" : ""
                    }`}
                    style={{
                      color:
                        item === "Logout"
                          ? "var(--color-accent)"
                          : "var(--color-text)",
                      background: "var(--color-bg)",
                    }}
                  >
                    {item}
                  </button>
                ))}
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
