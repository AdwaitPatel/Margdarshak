import React, { useState } from 'react';
import Navbar from '../components/StudentDashboard/Navbar';
import Sidebarmenu from '../components/StudentDashboard/Sidebarmenu';
import Mainbodysection from '../components/StudentDashboard/Mainbodysection';

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('Dashboard');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebarmenu 
        sidebarOpen={sidebarOpen}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Navbar */}
        <Navbar 
          profileDropdownOpen={profileDropdownOpen}
          setProfileDropdownOpen={setProfileDropdownOpen}
        />
        
        {/* Main Body Section - Added proper scrolling */}
        <div className="flex-1 overflow-y-auto">
          <Mainbodysection 
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            selectedTab={selectedTab}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
