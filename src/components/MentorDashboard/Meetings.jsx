import React from "react";
import { FaUser, FaCalendarAlt, FaBullseye } from "react-icons/fa";

function Meetings() {
  const meetings = [
    {
      student: "Rohan Kumar",
      date: "25 July 2025",
      topic: "Resume Feedback",
    },
    // Add more meetings as needed
  ];

  return (
    <div className="p-6 bg-[#0f172a] min-h-screen text-white">
      <h1 className="text-3xl font-semibold mb-2 flex items-center gap-2">
        <FaCalendarAlt className="text-teal-400" /> Upcoming Meetings
      </h1>
      <p className="text-gray-400 mb-6 text-sm">
        Here are your scheduled sessions with students.
      </p>

      <div className="space-y-4">
        {meetings.map((meeting, index) => (
          <div
            key={index}
            className="bg-[#1e293b] border border-gray-700 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-lg font-medium mb-2 text-teal-400 flex items-center gap-2">
              <FaUser /> {meeting.student}
            </div>
            <div className="text-sm text-gray-300 flex items-center gap-2">
              <FaCalendarAlt className="text-gray-400" />
              <span>
                <span className="font-semibold">Date:</span> {meeting.date}
              </span>
            </div>
            <div className="text-sm text-gray-300 mt-1 flex items-center gap-2">
              <FaBullseye className="text-gray-400" />
              <span>
                <span className="font-semibold">Topic:</span> {meeting.topic}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meetings;
