import React from "react";
import { FaUserCog, FaBars } from "react-icons/fa";

function PersonalInfo({ mentorName, profile, toggleSidebar }) {
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
            <FaUserCog />
            Personal Info
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <p className="mb-6" style={{ color: "var(--color-secondary)" }}>
          View and edit your basic details to keep your profile up to date.
        </p>

        <div
          className="p-6 rounded-xl shadow-lg space-y-6 transition-all duration-300"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-secondary)",
            boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
          }}
        >
          <div>
            <label
              className="block text-sm mb-2 font-medium"
              style={{ color: "var(--color-secondary)" }}
            >
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg transition-all duration-300 focus:outline-none focus:scale-[1.02]"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                color: "var(--color-text)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.05)",
              }}
              defaultValue={profile?.fullName || mentorName || "Loading..."}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--color-primary)";
                e.target.style.boxShadow =
                  "0 4px 8px rgba(var(--color-primary-rgb), 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--color-secondary)";
                e.target.style.boxShadow =
                  "0 2px 4px rgba(var(--color-primary-rgb), 0.05)";
              }}
            />
          </div>

          <div>
            <label
              className="block text-sm mb-2 font-medium"
              style={{ color: "var(--color-secondary)" }}
            >
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg transition-all duration-300 focus:outline-none focus:scale-[1.02]"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                color: "var(--color-text)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.05)",
              }}
              defaultValue={profile?.email || "Loading..."}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--color-primary)";
                e.target.style.boxShadow =
                  "0 4px 8px rgba(var(--color-primary-rgb), 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--color-secondary)";
                e.target.style.boxShadow =
                  "0 2px 4px rgba(var(--color-primary-rgb), 0.05)";
              }}
            />
          </div>

          <div>
            <label
              className="block text-sm mb-2 font-medium"
              style={{ color: "var(--color-secondary)" }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-3 rounded-lg transition-all duration-300 focus:outline-none focus:scale-[1.02]"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                color: "var(--color-text)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.05)",
              }}
              defaultValue={profile?.phone || "Not provided"}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--color-primary)";
                e.target.style.boxShadow =
                  "0 4px 8px rgba(var(--color-primary-rgb), 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--color-secondary)";
                e.target.style.boxShadow =
                  "0 2px 4px rgba(var(--color-primary-rgb), 0.05)";
              }}
            />
          </div>

          <div>
            <label
              className="block text-sm mb-2 font-medium"
              style={{ color: "var(--color-secondary)" }}
            >
              Specialization
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg transition-all duration-300 focus:outline-none focus:scale-[1.02]"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                color: "var(--color-text)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.05)",
              }}
              defaultValue={profile?.specialization || "Career Mentor"}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--color-primary)";
                e.target.style.boxShadow =
                  "0 4px 8px rgba(var(--color-primary-rgb), 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--color-secondary)";
                e.target.style.boxShadow =
                  "0 2px 4px rgba(var(--color-primary-rgb), 0.05)";
              }}
            />
          </div>

          <button
            className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.2)",
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
