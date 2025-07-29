import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaBars,
  FaUsers,
  FaUserGraduate,
  FaChartLine,
} from "react-icons/fa";
import api from "../../../api";
import HeaderActions from "../../Common/HeaderActions";

function Dashboard({
  adminName,
  profile,
  toggleSidebar,
  refreshTrigger,
  onDataChange,
}) {
  const [stats, setStats] = useState([
    {
      title: "Total Mentors",
      value: "Loading...",
      icon: FaUsers,
      color: "var(--color-primary)",
    },
    {
      title: "Total Students",
      value: "Loading...",
      icon: FaUserGraduate,
      color: "var(--color-accent)",
    },
    {
      title: "Active Sessions",
      value: "12",
      icon: FaChartLine,
      color: "var(--color-primary)",
    },
  ]);

  useEffect(() => {
    fetchStats();
  }, [refreshTrigger]); // Re-fetch stats when refreshTrigger changes

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("authToken");

      // Fetch stats from dedicated endpoint
      const statsResponse = await api.get("/user/admin/getStats", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (statsResponse.data.success) {
        const { totalMentors, totalStudents, activeSessions } =
          statsResponse.data.data;

        setStats([
          {
            title: "Total Mentors",
            value: totalMentors.toString(),
            icon: FaUsers,
            color: "var(--color-primary)",
          },
          {
            title: "Total Students",
            value: totalStudents.toString(),
            icon: FaUserGraduate,
            color: "var(--color-accent)",
          },
          {
            title: "Active Sessions",
            value: activeSessions.toString(),
            icon: FaChartLine,
            color: "var(--color-primary)",
          },
        ]);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
      // Set error state or keep loading state
      setStats([
        {
          title: "Total Mentors",
          value: "Error",
          icon: FaUsers,
          color: "var(--color-primary)",
        },
        {
          title: "Total Students",
          value: "Error",
          icon: FaUserGraduate,
          color: "var(--color-accent)",
        },
        {
          title: "Active Sessions",
          value: "Error",
          icon: FaChartLine,
          color: "var(--color-primary)",
        },
      ]);
    }
  };

  return (
    <div
      className="h-full flex flex-col"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* Top Navbar */}
      <div
        className="flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center shadow-lg"
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-secondary)",
          color: "var(--color-text)",
        }}
      >
        <div className="flex items-center gap-4">
          {/* Hamburger Menu Button for Mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 2px 4px rgba(var(--color-primary), 0.2)",
            }}
          >
            <FaBars className="text-lg" />
          </button>

          <h1
            className="text-lg sm:text-2xl font-bold flex items-center gap-2"
            style={{ color: "var(--color-primary)" }}
          >
            <FaTachometerAlt />
            Admin Dashboard
          </h1>
        </div>

        {/* Header Actions */}
        <HeaderActions />
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            Welcome back, {adminName || "Admin"}!
          </h2>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--color-secondary)" }}
          >
            Manage your platform's mentors, students, and monitor system
            performance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
                style={{
                  background: "var(--color-bg)",
                  border: "1px solid var(--color-secondary)",
                  boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(var(--color-primary-rgb), 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(var(--color-primary-rgb), 0.1)";
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {stat.title}
                    </p>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-lg"
                    style={{ background: stat.color, opacity: 0.1 }}
                  >
                    <Icon className="text-2xl" style={{ color: stat.color }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div
          className="p-6 rounded-xl shadow-lg"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-secondary)",
            boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
          }}
        >
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              className="p-4 rounded-lg text-left transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-bg)",
                boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.2)",
              }}
            >
              <FaUsers className="text-lg mb-2" />
              <p className="font-medium">Manage Mentors</p>
              <p className="text-sm opacity-80">Add, edit, or remove mentors</p>
            </button>

            <button
              className="p-4 rounded-lg text-left transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-bg)",
                boxShadow: "0 2px 4px rgba(var(--color-accent-rgb), 0.2)",
              }}
            >
              <FaUserGraduate className="text-lg mb-2" />
              <p className="font-medium">Manage Students</p>
              <p className="text-sm opacity-80">
                View and manage student accounts
              </p>
            </button>

            <button
              className="p-4 rounded-lg text-left transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-secondary)",
                color: "var(--color-text)",
                boxShadow: "0 2px 4px rgba(var(--color-secondary-rgb), 0.2)",
              }}
            >
              <FaChartLine className="text-lg mb-2" />
              <p className="font-medium">View Analytics</p>
              <p className="text-sm opacity-80">Monitor platform performance</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
