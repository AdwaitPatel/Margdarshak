import React from "react";
import { FaSun, FaMoon, FaSignOutAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

function HeaderActions() {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all stored authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    localStorage.removeItem("refreshToken");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
        style={{
          background: "var(--color-secondary)",
          color: "var(--color-text)",
          boxShadow: "0 2px 4px rgba(var(--color-secondary-rgb), 0.2)",
        }}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? (
          <FaSun className="text-lg" />
        ) : (
          <FaMoon className="text-lg" />
        )}
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="p-2 rounded-lg transition-all duration-300 transform hover:scale-105"
        style={{
          background: "#ef4444",
          color: "white",
          boxShadow: "0 2px 4px rgba(239, 68, 68, 0.2)",
        }}
        title="Logout"
      >
        <FaSignOutAlt className="text-lg" />
      </button>
    </div>
  );
}

export default HeaderActions;
