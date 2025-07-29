import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaBars } from "react-icons/fa";

function Calendar({ mentorName, profile, toggleSidebar }) {
  const events = [
    {
      date: "15 July 2025",
      title: "Career Guidance Session",
    },
    {
      date: "18 July 2025",
      title: "Resume Workshop",
    },
    {
      date: "21 July 2025",
      title: "1-on-1 Mentoring",
    },
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
            <FaCalendarAlt />
            Calendar
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <p className="mb-6" style={{ color: "var(--color-secondary)" }}>
          View and manage your upcoming meetings, sessions, and important dates.
        </p>

        <div
          className="p-6 rounded-xl shadow-lg transition-all duration-300"
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
            Upcoming Events
          </h2>

          <ul className="space-y-4">
            {events.map((event, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center rounded-lg p-4 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
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
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt
                    className="mt-1"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <div>
                    <p
                      className="text-base font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {event.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {event.date}
                    </p>
                  </div>
                </div>
                <button
                  className="px-4 py-2 rounded text-sm transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-bg)",
                    boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.2)",
                  }}
                >
                  View
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Calendar;
