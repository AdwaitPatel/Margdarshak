import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUserTie,
  FaCalendarAlt,
  FaComments,
  FaEnvelope,
  FaLock,
  FaUserCog,
  FaBars,
} from "react-icons/fa";

const sections = [
  {
    heading: null, // For Dashboard at the top (no heading)
    items: [
      { path: "/", icon: <FaUserTie />, label: "Dashboard" },
    ],
  },
  {
    heading: "My Activities",
    items: [
      { path: "/messages", icon: <FaEnvelope />, label: "Messages" },
      { path: "/calendar", icon: <FaCalendarAlt />, label: "Calendar" },
      { path: "/info-session", icon: <FaComments />, label: "Info Session" },
    ],
  },
  {
    heading: "Account Settings",
    items: [
      { path: "/personal-info", icon: <FaUserCog />, label: "Personal Info" },
      { path: "/login-security", icon: <FaLock />, label: "Login & Security" },
    ],
  },
];

function Sidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#1e293b] text-white p-2 rounded"
      >
        <FaBars className="text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 min-h-screen w-64 bg-[#0f172a] text-white p-6 z-40 shadow-lg transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setOpen(false)} className="text-white text-xl mb-4">
            <FaBars />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Mentor"
            className="w-20 h-20 rounded-full border-4 border-[#64b5f6] shadow-lg"
          />
          <h2 className="mt-3 text-lg font-semibold text-white">Hardik Singh</h2>
          <p className="text-sm text-gray-400">Mentor</p>
        </div>

        {/* Grouped Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            {section.heading && (
              <h4 className="text-gray-400 uppercase text-xs font-semibold px-2 mb-2">
                {section.heading}
              </h4>
            )}
            <ul className="space-y-2">
              {section.items.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-4 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                        isActive
                          ? "bg-[#1e293b] text-[#64b5f6]"
                          : "hover:bg-[#1e293b] text-white"
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
