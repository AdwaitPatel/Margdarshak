import React, { useState } from "react";
import {
  Search,
  Home,
  Calendar,
  Compass,
  Brain,
  X,
  User,
  BookOpen,
  TrendingUp,
  Award,
} from "lucide-react";

const Sidebar = ({
  sidebarOpen,
  selectedTab,
  setSelectedTab,
  setSidebarOpen,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [user, setUser] = useState(null);

  // Get user data from localStorage
  React.useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const sidebarItems = [
    {
      name: "Dashboard",
      icon: Home,
      description: "Overview & Analytics",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Meetings",
      icon: Calendar,
      description: "Schedule & Sessions",
      color: "from-green-500 to-green-600",
    },
  ];

  const quickStats = [
    { label: "Sessions", value: "12", icon: BookOpen },
    { label: "Progress", value: "85%", icon: TrendingUp },
    { label: "Achievements", value: "7", icon: Award },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } transition-transform duration-300 ease-in-out lg:transition-none w-80 lg:w-72`}
        style={{
          background: "var(--color-bg)",
          borderRight: "1px solid var(--color-secondary)",
          boxShadow: "4px 0 20px rgba(var(--color-primary-rgb), 0.1)",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="p-6 lg:p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                  }}
                >
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <div>
                  <h1
                    className="text-lg font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    NaviQuest
                  </h1>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                style={{ color: "var(--color-text)" }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex-1 px-6 lg:px-4">
            <nav className="space-y-2">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-4 px-2"
                style={{ color: "var(--color-secondary)" }}
              >
                Navigation
              </p>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedTab === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setSelectedTab(item.name);
                      // Close sidebar on mobile after selection
                      if (window.innerWidth < 1024) {
                        setSidebarOpen(false);
                      }
                    }}
                    className={`group w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-4 transform hover:scale-[1.02] relative overflow-hidden ${
                      isSelected ? "shadow-lg" : "hover:shadow-md"
                    }`}
                    style={{
                      background: isSelected
                        ? "var(--color-primary)"
                        : "transparent",
                      color: isSelected
                        ? "var(--color-bg)"
                        : "var(--color-text)",
                      border: `1px solid ${
                        isSelected ? "var(--color-primary)" : "transparent"
                      }`,
                      boxShadow: isSelected
                        ? "0 4px 20px rgba(var(--color-primary-rgb), 0.3)"
                        : "none",
                    }}
                  >
                    {/* Background gradient for hover effect */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                        isSelected ? "hidden" : ""
                      }`}
                      style={{
                        background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                      }}
                    />

                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-white/20"
                          : "bg-gray-100 dark:bg-gray-800"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected
                            ? "text-white"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-sm block">
                        {item.name}
                      </span>
                      <span
                        className={`text-xs ${
                          isSelected
                            ? "text-white/80"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {item.description}
                      </span>
                    </div>
                    {isSelected && (
                      <div className="w-2 h-2 rounded-full bg-white/80" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
