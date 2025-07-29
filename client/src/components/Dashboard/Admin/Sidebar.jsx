import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserGraduate,
  FaBars,
  FaTimes,
  FaUserShield,
} from "react-icons/fa";
import Dashboard from "./Dashboard";
import AllMentors from "./AllMentors";
import AllStudents from "./AllStudents";
import HeaderActions from "../../Common/HeaderActions";

function Sidebar() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    // Get admin profile data
    const adminData = JSON.parse(localStorage.getItem("user") || "{}");
    setProfile(adminData);
  }, []);

  const triggerRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const sections = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: FaTachometerAlt,
      component: Dashboard,
    },
    {
      id: "mentors",
      title: "All Mentors",
      icon: FaUsers,
      component: AllMentors,
    },
    {
      id: "students",
      title: "All Students",
      icon: FaUserGraduate,
      component: AllStudents,
    },
  ];

  const toggleSidebar = () => setOpen(!open);

  const renderActiveComponent = () => {
    const activeItem = sections.find((item) => item.id === activeSection);
    const ComponentToRender = activeItem?.component;

    // Pass profile data as props to all components
    const commonProps = {
      adminName: profile?.fullName,
      profile: profile,
      toggleSidebar: () => setOpen(!open),
      isSidebarOpen: open,
      refreshTrigger: refreshTrigger,
      onDataChange: triggerRefresh,
    };

    return ComponentToRender ? (
      <ComponentToRender {...commonProps} />
    ) : (
      <Dashboard {...commonProps} />
    );
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{
        background: "var(--color-bg)",
        fontFamily: "var(--font-primary)",
      }}
    >
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 flex flex-col shadow-xl`}
        style={{
          background: "var(--color-bg)",
          borderRight: "1px solid var(--color-secondary)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b"
          style={{ borderColor: "var(--color-secondary)" }}
        >
          <div className="flex items-center space-x-2">
            
            <h1
              className="text-lg font-bold"
              style={{ color: "var(--color-text)" }}
            >
              Admin Panel
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <HeaderActions />
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-lg transition-all duration-300"
              style={{ color: "var(--color-primary)" }}
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 mt-6">
          <div className="relative">
            <img
              src={
                profile?.profilePicture ||
                "https://randomuser.me/api/portraits/men/75.jpg"
              }
              alt="Admin"
              className="w-20 h-20 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
              style={{
                border: "4px solid var(--color-primary)",
                boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-4 h-4 rounded-full"
              style={{
                background: "var(--color-accent)",
                border: "2px solid var(--color-bg)",
              }}
            ></div>
          </div>
          <h2
            className="mt-3 text-lg font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            {profile?.fullName || "Admin"}
          </h2>
          <p className="text-sm" style={{ color: "var(--color-secondary)" }}>
            System Administrator
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {sections.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveSection(item.id);
                  setOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isActive ? "shadow-lg" : ""
                }`}
                style={{
                  background: isActive ? "var(--color-primary)" : "transparent",
                  color: isActive ? "var(--color-bg)" : "var(--color-text)",
                  boxShadow: isActive
                    ? "0 4px 8px rgba(var(--color-primary-rgb), 0.3)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "var(--color-secondary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                <Icon className="text-lg" />
                <span className="font-medium">{item.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div
          className="p-4 border-t"
          style={{ borderColor: "var(--color-secondary)" }}
        >
          <p
            className="text-xs text-center"
            style={{ color: "var(--color-secondary)" }}
          >
            Margdarshak Admin Panel
          </p>
        </div>
      </div>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto">{renderActiveComponent()}</div>
      </div>
    </div>
  );
}

export default Sidebar;
