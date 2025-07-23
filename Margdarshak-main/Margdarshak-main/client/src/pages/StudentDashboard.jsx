import React, { useState } from 'react';
import Sidebar from '../components/Dashboard/Student/Sidebar';
import StudentDashboard from '../components/Dashboard/Student/StudentDashboard';

const StudentDashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Dashboard');

  return (
    <div className="h-screen w-screen flex bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        sidebarOpen={sidebarOpen}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Main Body Section - Added proper scrolling */}
        <div className="flex-1 overflow-y-auto">
          <StudentDashboard 
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            selectedTab={selectedTab}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardPage;