import React from "react";
import { FaCommentDots } from "react-icons/fa";

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

const Messages = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaCommentDots className="text-blue-400" />
        Messages
      </h1>

      <div className="bg-[#1e293b] rounded-xl shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Pinned Conversations</h2>

        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex justify-between items-start bg-[#334155] hover:bg-[#475569] transition-colors rounded-lg p-4 mb-3"
          >
            <div>
              <p className="font-semibold text-lg">{msg.name}</p>
              <p className="text-sm text-gray-300">{msg.message}</p>
            </div>
            <span className="text-sm text-gray-400">{msg.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
