import React, { useState, useEffect } from "react";
import {
  FaUserCog,
  FaBars,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCamera,
  FaSave,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";
import api from "../../../api";

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

function PersonalInfo({ toggleSidebar }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState({
    message: "",
    type: "",
    isVisible: false,
  });
  const [formErrors, setFormErrors] = useState({});

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profilePicture: "",
  });

  const showToast = (message, type) => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  // Fetch student profile data
  const fetchProfile = React.useCallback(async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await api.get("/user/student/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        const studentData = response.data.data;
        setProfile(studentData);
        setFormData({
          fullName: studentData.fullName || "",
          email: studentData.email || "",
          phone: studentData.phone || "",
          profilePicture: studentData.profilePicture || "",
        });
      } else {
        showToast("Failed to fetch profile data", "error");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      showToast("Error loading profile data", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

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

    if (formData.phone && !/^\+?[\d\s-()]{10,}$/.test(formData.phone)) {
      errors.phone = "Phone number format is invalid";
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

  const handleSave = async () => {
    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setSaving(true);

    try {
      const token = localStorage.getItem("authToken");
      const response = await api.put("/user/student/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        showToast(
          response.data.message || "Profile updated successfully!",
          "success"
        );
        setProfile(response.data.data);
      } else {
        showToast(response.data.message || "Failed to update profile", "error");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Error updating profile. Please try again.";
      showToast(errorMessage, "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "var(--color-bg)",
          color: "var(--color-text)",
        }}
      >
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-16 w-16 border-b-2 mx-auto mb-4"
            style={{ borderColor: "var(--color-primary)" }}
          ></div>
          <p style={{ color: "var(--color-text)" }}>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* Top Navbar */}
      <div
        className="sticky top-0 z-30 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center shadow-lg"
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
            <FaUserCog />
            Personal Information
          </h1>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background: saving
              ? "var(--color-secondary)"
              : "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
            color: "var(--color-bg)",
            boxShadow: "0 4px 15px rgba(var(--color-primary-rgb), 0.3)",
          }}
        >
          {saving ? (
            <>
              <FaSpinner className="animate-spin" />
              <span className="hidden sm:inline">Saving...</span>
            </>
          ) : (
            <>
              <FaSave />
              <span className="hidden sm:inline">Save Changes</span>
            </>
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Profile Picture Section */}
        <div
          className="p-6 rounded-xl shadow-lg mb-6 transition-all duration-300"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-secondary)",
            boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={
                  formData.profilePicture ||
                  profile?.profilePicture ||
                  "https://cdn-icons-png.freepik.com/512/3135/3135755.png"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4"
                style={{ borderColor: "var(--color-primary)" }}
              />
              <button
                className="absolute bottom-0 right-0 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                style={{
                  background: "var(--color-primary)",
                  color: "var(--color-bg)",
                  boxShadow: "0 4px 12px rgba(var(--color-primary-rgb), 0.3)",
                }}
              >
                <FaCamera />
              </button>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                {formData.fullName || "Student Name"}
              </h2>
              <p
                className="text-lg mb-1"
                style={{ color: "var(--color-secondary)" }}
              >
                Student
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--color-secondary)" }}
              >
                {formData.email || "Email not specified"}
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information Form */}
        <div
          className="p-6 rounded-xl shadow-lg space-y-6 transition-all duration-300"
          style={{
            background: "var(--color-bg)",
            border: "1px solid var(--color-secondary)",
            boxShadow: "0 4px 6px rgba(var(--color-primary-rgb), 0.1)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name Field */}
            <div>
              <label
                className="flex items-center gap-2 text-sm mb-2 font-medium"
                style={{ color: "var(--color-secondary)" }}
              >
                <FaUser />
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg transition-all duration-300 focus:outline-none focus:scale-[1.02]"
                style={{
                  background: "var(--color-bg)",
                  border: `2px solid ${
                    formErrors.fullName ? "#ef4444" : "var(--color-secondary)"
                  }`,
                  color: "var(--color-text)",
                  boxShadow: formErrors.fullName
                    ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                    : "0 2px 4px rgba(var(--color-primary-rgb), 0.05)",
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
                    : "0 2px 4px rgba(var(--color-primary-rgb), 0.05)";
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
                className="flex items-center gap-2 text-sm mb-2 font-medium"
                style={{ color: "var(--color-secondary)" }}
              >
                <FaEnvelope />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full p-3 rounded-lg transition-all duration-300 focus:outline-none focus:scale-[1.02]"
                style={{
                  background: "var(--color-bg)",
                  border: `2px solid ${
                    formErrors.email ? "#ef4444" : "var(--color-secondary)"
                  }`,
                  color: "var(--color-text)",
                  boxShadow: formErrors.email
                    ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                    : "0 2px 4px rgba(var(--color-primary-rgb), 0.05)",
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
                    : "0 2px 4px rgba(var(--color-primary-rgb), 0.05)";
                }}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationTriangle />
                  {formErrors.email}
                </p>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="md:col-span-2">
              <label
                className="flex items-center gap-2 text-sm mb-2 font-medium"
                style={{ color: "var(--color-secondary)" }}
              >
                <FaPhone />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-lg transition-all duration-300 focus:outline-none focus:scale-[1.02]"
                style={{
                  background: "var(--color-bg)",
                  border: `2px solid ${
                    formErrors.phone ? "#ef4444" : "var(--color-secondary)"
                  }`,
                  color: "var(--color-text)",
                  boxShadow: formErrors.phone
                    ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                    : "0 2px 4px rgba(var(--color-primary-rgb), 0.05)",
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
                    : "0 2px 4px rgba(var(--color-primary-rgb), 0.05)";
                }}
              />
              {formErrors.phone && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <FaExclamationTriangle />
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Save Button (Mobile) */}
          <div className="sm:hidden">
            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: saving
                  ? "var(--color-secondary)"
                  : "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                color: "var(--color-bg)",
                boxShadow: "0 4px 15px rgba(var(--color-primary-rgb), 0.3)",
              }}
            >
              {saving ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Saving Changes...
                </>
              ) : (
                <>
                  <FaSave />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>

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

export default PersonalInfo;
