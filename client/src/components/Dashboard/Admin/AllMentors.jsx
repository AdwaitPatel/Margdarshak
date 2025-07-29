import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaBars,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";
import api from "../../../api";
import HeaderActions from "../../Common/HeaderActions";

function AllMentors({ adminName, profile, toggleSidebar, onDataChange }) {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await api.get("/user/admin/getAllMentors", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        const data = response.data;
        setMentors(data.data || []);
      } else {
        console.error("Failed to fetch mentors");
      }
    } catch (error) {
      console.error("Error fetching mentors:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMentor = () => {
    setShowAddModal(true);
  };

  const handleDeleteMentor = async (mentorId) => {
    if (window.confirm("Are you sure you want to delete this mentor?")) {
      try {
        const token = localStorage.getItem("authToken");
        const response = await api.delete(
          `/user/admin/deleteMentor/${mentorId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          fetchMentors(); // Refresh the list
          onDataChange && onDataChange(); // Trigger dashboard refresh
        } else {
          console.error("Failed to delete mentor");
        }
      } catch (error) {
        console.error("Error deleting mentor:", error);
      }
    }
  };

  if (loading) {
    return (
      <div
        className="h-full flex flex-col"
        style={{
          background: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p style={{ color: "var(--color-text)" }}>Loading mentors...</p>
          </div>
        </div>
      </div>
    );
  }

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
            <FaUsers />
            All Mentors ({mentors.length})
          </h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Add Mentor Button */}
          <button
            onClick={handleAddMentor}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 2px 4px rgba(var(--color-primary-rgb), 0.2)",
            }}
          >
            <FaPlus />
            <span className="hidden sm:inline">Add Mentor</span>
          </button>

          {/* Header Actions */}
          <HeaderActions />
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-6">
        <p className="mb-6" style={{ color: "var(--color-secondary)" }}>
          Manage all mentors on the platform. Add new mentors, edit their
          profiles, or remove them.
        </p>

        {/* Mentors Grid */}
        {mentors.length === 0 ? (
          <div
            className="text-center py-12"
            style={{ color: "var(--color-secondary)" }}
          >
            <FaUsers className="text-6xl mx-auto mb-4 opacity-50" />
            <p className="text-xl mb-2">No mentors found</p>
            <p className="mb-4">
              Start by adding your first mentor to the platform.
            </p>
            <button
              onClick={handleAddMentor}
              className="px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{
                background: "var(--color-primary)",
                color: "var(--color-bg)",
              }}
            >
              Add First Mentor
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => (
              <div
                key={mentor._id}
                className="p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
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
                {/* Mentor Avatar */}
                <div className="flex items-center mb-4">
                  <img
                    src={
                      mentor.profilePicture ||
                      "https://randomuser.me/api/portraits/men/75.jpg"
                    }
                    alt={mentor.fullName}
                    className="w-16 h-16 rounded-full border-4"
                    style={{ borderColor: "var(--color-primary)" }}
                  />
                  <div className="ml-4">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {mentor.fullName}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {mentor.email}
                    </p>
                  </div>
                </div>

                {/* Mentor Details */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      Expertise:
                    </span>{" "}
                    {mentor.expertise || "Not specified"}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      Experience:
                    </span>{" "}
                    {mentor.experience || "Not specified"}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      Phone:
                    </span>{" "}
                    {mentor.phoneNumber || "Not provided"}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded text-sm transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: "var(--color-primary)",
                      color: "var(--color-bg)",
                      boxShadow:
                        "0 2px 4px rgba(var(--color-primary-rgb), 0.2)",
                    }}
                  >
                    <FaEye />
                    View
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded text-sm transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: "var(--color-accent)",
                      color: "var(--color-bg)",
                      boxShadow: "0 2px 4px rgba(var(--color-accent-rgb), 0.2)",
                    }}
                  >
                    <FaEdit />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMentor(mentor._id)}
                    className="flex-1 flex items-center justify-center gap-1 py-2 px-3 rounded text-sm transition-all duration-300 transform hover:scale-105"
                    style={{
                      background: "#ef4444",
                      color: "white",
                      boxShadow: "0 2px 4px rgba(239, 68, 68, 0.2)",
                    }}
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Mentor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="w-full max-w-md mx-4 p-6 rounded-xl shadow-xl"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
            }}
          >
            <h2
              className="text-xl font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Add New Mentor
            </h2>
            <p className="mb-4" style={{ color: "var(--color-secondary)" }}>
              Add mentor functionality will be implemented here.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-2 px-4 rounded transition-all duration-300"
                style={{
                  background: "var(--color-secondary)",
                  color: "var(--color-text)",
                }}
              >
                Cancel
              </button>
              <button
                className="flex-1 py-2 px-4 rounded transition-all duration-300"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                }}
              >
                Add Mentor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllMentors;
