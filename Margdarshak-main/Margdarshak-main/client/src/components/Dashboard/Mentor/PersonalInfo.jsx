import React from "react";

function PersonalInfo() {
  return (
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold text-[#64b5f6] mb-4">👤 Personal Info</h1>
      <p className="text-gray-400 mb-6">
        View and edit your basic details to keep your profile up to date.
      </p>

      <div className="bg-[#1e293b] p-6 rounded-xl shadow-md border border-gray-700 space-y-6">
        <div>
          <label className="block text-sm mb-1 text-gray-400">Full Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white"
            defaultValue="Hardik Singh"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-400">Phone Number</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white"
            defaultValue="+91 9876543210"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-400">Profession</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-[#0f172a] border border-gray-600 text-white"
            defaultValue="Career Mentor"
          />
        </div>

        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;
