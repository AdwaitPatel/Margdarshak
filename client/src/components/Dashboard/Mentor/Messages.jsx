import React from "react";
import { FaCommentDots, FaBars } from "react-icons/fa";

const messages = [
  {
    name: "Muskan Agarwal",
    message: "I wanna know more about filmmaking.",
    date: "Today",
  },
  {
    name: "Karan Grover",
    message: "Interested in learning about animation.",
    date: "Today",
  },
  {
    name: "Yvonne",
    message: "Switching career path soon.",
    date: "Yesterday",
  },
  {
    name: "Tom Hanks",
    message: "I'm your professor, see you!",
    date: "07/06/2021",
  },
];

const Messages = ({ mentorName, profile, toggleSidebar }) => {
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
            <FaCommentDots />
            Messages
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div
          className="rounded-xl shadow-lg p-6 transition-all duration-300"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-secondary)",
            boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
          }}
        >
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Pinned Conversations
          </h2>

          {messages.map((msg, index) => (
            <div
              key={index}
              className="flex justify-between items-start rounded-lg p-4 mb-3 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
              style={{
                background: "var(--color-bg)",
                border: "1px solid var(--color-secondary)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(var(--color-primary-rgb), 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 2px 4px rgba(var(--color-primary-rgb), 0.05)";
              }}
            >
              <div>
                <p
                  className="font-semibold text-lg"
                  style={{ color: "var(--color-text)" }}
                >
                  {msg.name}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {msg.message}
                </p>
              </div>
              <span
                className="text-sm"
                style={{ color: "var(--color-accent)" }}
              >
                {msg.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
