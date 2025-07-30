import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaBars,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaGraduationCap,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import api from "../../../api";
import HeaderActions from "../../Common/HeaderActions";

// Custom Toast Component
const Toast = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-[9999] transform transition-all duration-500 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className="flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border max-w-md"
        style={{
          background:
            type === "success"
              ? "linear-gradient(135deg, rgba(34, 197, 94, 0.95), rgba(22, 163, 74, 0.95))"
              : "linear-gradient(135deg, rgba(239, 68, 68, 0.95), rgba(220, 38, 38, 0.95))",
          borderColor:
            type === "success"
              ? "rgba(34, 197, 94, 0.3)"
              : "rgba(239, 68, 68, 0.3)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="flex-shrink-0">
          {type === "success" ? (
            <FaCheckCircle className="text-white text-xl" />
          ) : (
            <FaExclamationTriangle className="text-white text-xl" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-medium text-sm leading-tight">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-white hover:text-gray-200 transition-colors duration-200"
        >
          <FaTimes className="text-sm" />
        </button>
      </div>
    </div>
  );
};

function AllMentors({ toggleSidebar, onDataChange }) {
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    type: "",
    isVisible: false,
  });

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    specialization: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email format is invalid";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      errors.phone = "Phone number format is invalid";
    }

    if (!formData.specialization.trim()) {
      errors.specialization = "Specialization is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmitMentor = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setFormLoading(true);

    try {
      const token = localStorage.getItem("authToken");
      const response = await api.post("/user/admin/addMentor", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        showToast(response.data.message, "success");
        setShowAddModal(false);
        setFormData({
          fullName: "",
          email: "",
          password: "",
          phone: "",
          specialization: "",
        });
        setFormErrors({});
        fetchMentors(); // Refresh the list
        onDataChange && onDataChange(); // Trigger dashboard refresh
      } else {
        showToast(response.data.message || "Failed to add mentor", "error");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Error adding mentor. Please try again.";
      showToast(errorMessage, "error");
      console.error("Error adding mentor:", error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleAddMentor = () => {
    setShowAddModal(true);
    setFormData({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      specialization: "",
    });
    setFormErrors({});
  };

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
          showToast(
            response.data.message || "Mentor deleted successfully",
            "success"
          );
          fetchMentors(); // Refresh the list
          onDataChange && onDataChange(); // Trigger dashboard refresh
        } else {
          showToast(
            response.data.message || "Failed to delete mentor",
            "error"
          );
        }
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ||
          error.response?.data?.error ||
          "Error deleting mentor. Please try again.";
        showToast(errorMessage, "error");
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
                      Specialization:
                    </span>{" "}
                    {mentor.specialization || "Not specified"}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      Experience:
                    </span>{" "}
                    {mentor.experience
                      ? `${mentor.experience} years`
                      : "Not specified"}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-secondary)" }}>
                      Phone:
                    </span>{" "}
                    {mentor.phone || "Not provided"}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transform transition-all duration-300 scale-100"
            style={{
              background: "var(--color-bg)",
              border: "1px solid var(--color-secondary)",
              boxShadow: "0 25px 50px rgba(var(--color-primary-rgb), 0.3)",
            }}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{ borderColor: "var(--color-secondary)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                  }}
                >
                  <FaUser className="text-white text-xl" />
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Add New Mentor
                  </h2>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Fill in the details to add a new mentor to the platform
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{
                  color: "var(--color-secondary)",
                  background: "transparent",
                }}
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmitMentor} className="p-6 space-y-6">
              {/* Full Name Field */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  <FaUser className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter mentor's full name"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:scale-[1.02]"
                  style={{
                    background: "var(--color-bg)",
                    color: "var(--color-text)",
                    border: `2px solid ${
                      formErrors.fullName ? "#ef4444" : "var(--color-secondary)"
                    }`,
                    boxShadow: formErrors.fullName
                      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                      : "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--color-primary)";
                    e.target.style.boxShadow =
                      "0 0 0 4px rgba(var(--color-primary-rgb), 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = formErrors.fullName
                      ? "#ef4444"
                      : "var(--color-secondary)";
                    e.target.style.boxShadow = formErrors.fullName
                      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                      : "none";
                  }}
                />
                {formErrors.fullName && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FaExclamationTriangle />
                    {formErrors.fullName}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  <FaEnvelope className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter mentor's email address"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:scale-[1.02]"
                  style={{
                    background: "var(--color-bg)",
                    color: "var(--color-text)",
                    border: `2px solid ${
                      formErrors.email ? "#ef4444" : "var(--color-secondary)"
                    }`,
                    boxShadow: formErrors.email
                      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                      : "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--color-primary)";
                    e.target.style.boxShadow =
                      "0 0 0 4px rgba(var(--color-primary-rgb), 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = formErrors.email
                      ? "#ef4444"
                      : "var(--color-secondary)";
                    e.target.style.boxShadow = formErrors.email
                      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                      : "none";
                  }}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FaExclamationTriangle />
                    {formErrors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  <FaLock className="inline mr-2" />
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter temporary password"
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:scale-[1.02]"
                  style={{
                    background: "var(--color-bg)",
                    color: "var(--color-text)",
                    border: `2px solid ${
                      formErrors.password ? "#ef4444" : "var(--color-secondary)"
                    }`,
                    boxShadow: formErrors.password
                      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                      : "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--color-primary)";
                    e.target.style.boxShadow =
                      "0 0 0 4px rgba(var(--color-primary-rgb), 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = formErrors.password
                      ? "#ef4444"
                      : "var(--color-secondary)";
                    e.target.style.boxShadow = formErrors.password
                      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                      : "none";
                  }}
                />
                {formErrors.password && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <FaExclamationTriangle />
                    {formErrors.password}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    <FaPhone className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--color-bg)",
                      color: "var(--color-text)",
                      border: `2px solid ${
                        formErrors.phone ? "#ef4444" : "var(--color-secondary)"
                      }`,
                      boxShadow: formErrors.phone
                        ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                        : "none",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-primary)";
                      e.target.style.boxShadow =
                        "0 0 0 4px rgba(var(--color-primary-rgb), 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = formErrors.phone
                        ? "#ef4444"
                        : "var(--color-secondary)";
                      e.target.style.boxShadow = formErrors.phone
                        ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                        : "none";
                    }}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <FaExclamationTriangle />
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Specialization Field */}
                <div>
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    <FaGraduationCap className="inline mr-2" />
                    Specialization *
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    placeholder="e.g., Career Counseling, Psychology"
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:scale-[1.02]"
                    style={{
                      background: "var(--color-bg)",
                      color: "var(--color-text)",
                      border: `2px solid ${
                        formErrors.specialization
                          ? "#ef4444"
                          : "var(--color-secondary)"
                      }`,
                      boxShadow: formErrors.specialization
                        ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                        : "none",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--color-primary)";
                      e.target.style.boxShadow =
                        "0 0 0 4px rgba(var(--color-primary-rgb), 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = formErrors.specialization
                        ? "#ef4444"
                        : "var(--color-secondary)";
                      e.target.style.boxShadow = formErrors.specialization
                        ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                        : "none";
                    }}
                  />
                  {formErrors.specialization && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <FaExclamationTriangle />
                      {formErrors.specialization}
                    </p>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  style={{
                    background: "var(--color-secondary)",
                    color: "var(--color-text)",
                    border: "1px solid var(--color-secondary)",
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: formLoading
                      ? "var(--color-secondary)"
                      : "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                    color: "var(--color-bg)",
                    boxShadow: "0 4px 15px rgba(var(--color-primary-rgb), 0.3)",
                  }}
                >
                  {formLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <FaPlus />
                      Add Mentor
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
}

export default AllMentors;
