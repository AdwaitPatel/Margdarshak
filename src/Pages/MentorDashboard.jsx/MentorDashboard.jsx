import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/MentorDashboard/Sidebar";
import Dashboard from "../components/MentorDashboard/Dashboard";
import Messages from "../components/MentorDashboard/Messages";
import Calendar from "../components/MentorDashboard/Calendar";
import InfoSession from "../components/MentorDashboard/InfoSession";
import PersonalInfo from "../components/MentorDashboard/PersonalInfo";
import LoginSecurity from "../components/MentorDashboard/LoginSecurity";

function MentorDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#0f172a] min-h-screen p-4">
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
