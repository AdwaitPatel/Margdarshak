import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Calendar() {
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
    <div className="text-white p-6 min-h-screen bg-[#0f172a]">
      <h1 className="text-3xl font-bold text-[#64b5f6] mb-2 flex items-center gap-2">
        <FaCalendarAlt />
        Calendar
      </h1>
      <p className="text-gray-400 mb-6">
        View and manage your upcoming meetings, sessions, and important dates.
      </p>

      <div className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>

        <ul className="space-y-4">
          {events.map((event, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-[#0f172a] hover:bg-[#1a1a2e] transition rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <div>
                  <p className="text-base font-semibold">{event.title}</p>
                  <p className="text-sm text-gray-400">{event.date}</p>
                </div>
              </div>
              <button className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 text-sm">
                View
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calendar;
