import React from "react";
import { FaBullhorn } from "react-icons/fa";

function InfoSession() {
  const sessions = [
    { title: "Resume Building Workshop", daysLeft: "2 Days Left" },
    { title: "Career in Web Development", daysLeft: "5 Days Left" },
    { title: "Mock Interviews & Tips", daysLeft: "7 Days Left" },
  ];

  return (
    <div className="text-white p-6 min-h-screen bg-[#0f172a]">
      <h1 className="text-3xl font-bold text-[#64b5f6] mb-4 flex items-center gap-2">
        <FaBullhorn />
        Info Sessions
      </h1>
      <p className="text-gray-400 mb-6">
        Here are the upcoming info sessions to attend and guide students through their career.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sessions.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] p-4 rounded-xl shadow-md border border-gray-700 hover:bg-[#1a1a2e] transition"
          >
            <p className="text-sm text-red-400 mb-1">{item.daysLeft}</p>
            <h4 className="font-medium text-white mb-3">{item.title}</h4>
            <button className="text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700">
              Attend
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSession;
