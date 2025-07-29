import React, { useState, useEffect } from "react";
import { FaUserGraduate, FaBars, FaEye, FaEdit, FaTrash } from "react-icons/fa";
import api from "../../../api";
import HeaderActions from "../../Common/HeaderActions";

function AllStudents({ adminName, profile, toggleSidebar, onDataChange }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await api.get("/user/admin/getAllStudents", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        const data = response.data;
        setStudents(data.data || []);
      } else {
        console.error("Failed to fetch students");
      }
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        const token = localStorage.getItem("authToken");
        const response = await api.delete(
          `/user/admin/deleteStudent/${studentId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          fetchStudents(); // Refresh the list
          onDataChange && onDataChange(); // Trigger dashboard refresh
        } else {
          console.error("Failed to delete student");
        }
      } catch (error) {
        console.error("Error deleting student:", error);
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
            <p style={{ color: "var(--color-text)" }}>Loading students...</p>
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
            <FaUserGraduate />
            All Students ({students.length})
          </h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Header Actions */}
          <HeaderActions />
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-6">
        <p className="mb-6" style={{ color: "var(--color-secondary)" }}>
          View and manage all students registered on the platform.
        </p>

        {/* Students Grid */}
        {students.length === 0 ? (
          <div
            className="text-center py-12"
            style={{ color: "var(--color-secondary)" }}
          >
            <FaUserGraduate className="text-6xl mx-auto mb-4 opacity-50" />
            <p className="text-xl mb-2">No students found</p>
            <p>Students will appear here once they register on the platform.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <div
                key={student._id}
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
                {/* Student Avatar */}
                <div className="flex items-center mb-4">
                  <img
                    src={
                      student.profilePicture ||
                      "https://randomuser.me/api/portraits/women/75.jpg"
                    }
                    alt={student.fullName}
                    className="w-16 h-16 rounded-full border-4"
                    style={{ borderColor: "var(--color-accent)" }}
                  />
                  <div className="ml-4">
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {student.fullName}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {student.email}
                    </p>
                  </div>
                </div>

                {/* Student Details */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      Grade:
                    </span>{" "}
                    {student.grade || "Not specified"}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      School:
                    </span>{" "}
                    {student.school || "Not specified"}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      Phone:
                    </span>{" "}
                    {student.phoneNumber || "Not provided"}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      Joined:
                    </span>{" "}
                    {new Date(student.createdAt).toLocaleDateString() ||
                      "Unknown"}
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
                    onClick={() => handleDeleteStudent(student._id)}
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
    </div>
  );
}

export default AllStudents;
