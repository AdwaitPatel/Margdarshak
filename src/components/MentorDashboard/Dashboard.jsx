import React from "react";
import {
  FaCalendarAlt,
  FaBook,
  FaVideo,
  FaChalkboardTeacher,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";

function Dashboard() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-white font-sans">
      
      {/* Top Navbar */}
      <div className="sticky top-0 z-50 bg-[#1e293b] px-6 py-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold text-[#64b5f6]">Margdarshak</h1>
        <div className="relative group">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer ring-2 ring-blue-400">
            <FiUser className="text-white text-xl" />
          </div>
          <div className="absolute right-0 mt-2 w-48 bg-[#334155] rounded-lg shadow-lg hidden group-hover:block">
            <a href="#profile" className="block px-4 py-2 hover:bg-[#475569] rounded-t">Profile</a>
            <a href="#settings" className="block px-4 py-2 hover:bg-[#475569]">Settings</a>
            <a href="#logout" className="block px-4 py-2 hover:bg-[#475569] text-red-400 rounded-b">Logout</a>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="px-6 py-10">

        {/* Welcome Section */}
        <div className="bg-[#1e293b] rounded-2xl p-6 mb-10 flex flex-col lg:flex-row justify-between items-center shadow-lg">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome Back, <span className="text-[#64b5f6]">Mentor</span></h2>
            <p className="text-gray-400">Manage all sessions, track conversations and explore new recommendations from here.</p>
          </div>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/mentor-guiding-students-5679461-4753786.png"
            alt="Mentor"
            className="w-32 mt-4 lg:mt-0"
          />
        </div>

        {/* Info Sessions */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FaCalendarAlt className="text-lg text-[#64b5f6]" />
            <h3 className="text-xl font-semibold">Ongoing Info Sessions</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Typing: Improve your speed", daysLeft: "1 Day Left" },
              { title: "Exceptional Product Manager", daysLeft: "4 Days Left" },
              { title: "Design Thinking for Innovation", daysLeft: "6 Days Left" },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#1e293b] p-4 rounded-xl shadow-md hover:shadow-lg transition border border-gray-700">
                <p className="text-sm text-red-400 mb-1">{item.daysLeft}</p>
                <h4 className="font-medium text-white mb-3">{item.title}</h4>
                <button className="text-sm text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700">Attend</button>
              </div>
            ))}
          </div>
        </div>

        {/* Pinned Conversations */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <FaComments className="text-lg text-[#64b5f6]" />
            <h3 className="text-xl font-semibold">Pinned Conversations</h3>
          </div>
          <div className="bg-[#1e293b] rounded-xl p-4 shadow divide-y divide-gray-600">
            {[
              { name: "Muskan Agarwal", message: "I wanna know more about filmmaking.", time: "Today" },
              { name: "Karan Grover", message: "Interested in learning about animation.", time: "Today" },
              { name: "Yvonne", message: "Switching career path soon.", time: "Yesterday" },
              { name: "Tom Hanks", message: "I’m your professor, see you!", time: "07/06/2021" },
            ].map((conv, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">{conv.name}</p>
                  <p className="text-gray-400 text-sm">{conv.message}</p>
                </div>
                <p className="text-xs text-gray-500">{conv.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        {/* <div>
          <div className="flex items-center gap-2 mb-4">
            <FaLightbulb className="text-lg text-[#64b5f6]" />
            <h3 className="text-xl font-semibold">Your Recommendations</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white text-center font-medium">
            <div className="bg-red-500 p-6 rounded-xl flex flex-col items-center justify-center shadow-md">
              <FaBook className="text-3xl mb-2" />
              Books
            </div>
            <div className="bg-blue-500 p-6 rounded-xl flex flex-col items-center justify-center shadow-md">
              <FaVideo className="text-3xl mb-2" />
              Videos
            </div>
            <div className="bg-green-500 p-6 rounded-xl flex flex-col items-center justify-center shadow-md">
              <FaChalkboardTeacher className="text-3xl mb-2" />
              Courses
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default Dashboard;
