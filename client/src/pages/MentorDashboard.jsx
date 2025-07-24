import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/Dashboard/Mentor/Sidebar";
import Dashboard from "../components/Dashboard/Mentor/Dashboard";
import Messages from "../components/Dashboard/Mentor/Messages";
import Calendar from "../components/Dashboard/Mentor/Calendar";
import InfoSession from "../components/Dashboard/Mentor/InfoSession";
import PersonalInfo from "../components/Dashboard/Mentor/PersonalInfo";
import LoginSecurity from "../components/Dashboard/Mentor/LoginSecurity";

function MentorDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#0f172a] min-h-screen p-0">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/info-session" element={<InfoSession />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/login-security" element={<LoginSecurity />} />
        </Routes>
      </div>
    </div>
  );
}

export default MentorDashboard;
