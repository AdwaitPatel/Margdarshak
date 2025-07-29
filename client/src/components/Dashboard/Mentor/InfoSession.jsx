import React from "react";
import { FaBullhorn, FaBars } from "react-icons/fa";

function InfoSession({ mentorName, profile, toggleSidebar }) {
  const sessions = [
    { title: "Resume Building Workshop", daysLeft: "2 Days Left" },
    { title: "Career in Web Development", daysLeft: "5 Days Left" },
    { title: "Mock Interviews & Tips", daysLeft: "7 Days Left" },
  ];

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
            <FaBullhorn />
            Info Sessions
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <p className="mb-6" style={{ color: "var(--color-secondary)" }}>
          Here are the upcoming info sessions to attend and guide students
          through their career.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sessions.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(var(--color-primary-rgb), 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(var(--color-primary-rgb), 0.1)";
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
                className="text-sm px-4 py-2 rounded transition-all duration-300 transform hover:scale-105"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                  boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.2)",
                }}
              >
                Attend
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoSession;
