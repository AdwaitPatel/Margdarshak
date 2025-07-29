import React from "react";
import { FaLock, FaShieldAlt, FaKey, FaEnvelope, FaBars } from "react-icons/fa";

function LoginSecurity({ mentorName, profile, toggleSidebar }) {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
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
            className="text-lg sm:text-2xl font-bold flex items-center gap-2"
            style={{ color: "var(--color-primary)" }}
          >
            <FaLock />
            Login & Security
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <p className="mb-6" style={{ color: "var(--color-secondary)" }}>
          Manage your account credentials, password settings and secure access
          controls.
        </p>

        <div className="space-y-6">
          {/* Email Address Section */}
          <div
            className="p-6 rounded-xl shadow-lg transition-all duration-300"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope style={{ color: "var(--color-primary)" }} />
              <h2
                className="text-lg font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Email Address
              </h2>
            </div>
            <p className="mb-4" style={{ color: "var(--color-secondary)" }}>
              {profile?.email || "Loading..."}
            </p>
            <button
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-primary)",
                color: "var(--color-primary)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.1)",
              }}
            >
              Update Email
            </button>
          </div>

          {/* Change Password Section */}
          <div
            className="p-6 rounded-xl shadow-lg transition-all duration-300"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaKey style={{ color: "var(--color-primary)" }} />
              <h2
                className="text-lg font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                Change Password
              </h2>
            </div>
            <p className="mb-4" style={{ color: "var(--color-secondary)" }}>
              Update your password to keep your account secure.
            </p>
            <button
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-bg)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.2)",
              }}
            >
              Update Password
            </button>
          </div>

          {/* 2FA Section */}
          <div
            className="p-6 rounded-xl shadow-lg transition-all duration-300"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaShieldAlt style={{ color: "var(--color-primary)" }} />
              <h2
                className="text-lg font-semibold"
                style={{ color: "var(--color-text)" }}
              >
                2-Factor Authentication
              </h2>
            </div>
            <p className="mb-2" style={{ color: "var(--color-secondary)" }}>
              Currently:{" "}
              <span style={{ color: "var(--color-accent)" }}>Enabled</span>
            </p>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Add an extra layer of security to your account with 2FA.
            </p>
            <button
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.1)",
              }}
            >
              Manage 2FA
            </button>
          </div>

          {/* Account Security Tips */}
          <div
            className="p-6 rounded-xl shadow-lg transition-all duration-300"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
            }}
          >
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Security Tips
            </h3>
            <ul className="space-y-2">
              <li
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--color-secondary)" }}
              >
                <span style={{ color: "var(--color-primary)" }}>•</span>
                Use a strong, unique password for your account
              </li>
              <li
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--color-secondary)" }}
              >
                <span style={{ color: "var(--color-primary)" }}>•</span>
                Enable 2-factor authentication for extra security
              </li>
              <li
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--color-secondary)" }}
              >
                <span style={{ color: "var(--color-primary)" }}>•</span>
                Regularly review your account activity
              </li>
              <li
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--color-secondary)" }}
              >
                <span style={{ color: "var(--color-primary)" }}>•</span>
                Never share your login credentials with others
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSecurity;
