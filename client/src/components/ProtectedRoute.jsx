import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  // Check if user is authenticated
  const token = localStorage.getItem("authToken");

  if (!token) {
    // No token = not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  try {
    // Decode token to get user info
    const decodedToken = jwtDecode(token);

    // Check if token is expired
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      // Token expired, clear storage and redirect to login
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      return <Navigate to="/login" replace />;
    }

    // Check role-based access
    if (allowedRoles.length > 0 && !allowedRoles.includes(decodedToken.role)) {
      // User has wrong role, redirect to unauthorized page
      return <Navigate to="/unauthorized" replace />;
    }

    // All checks passed, render the protected component
    return children;
  } catch (error) {
    // Token is invalid, clear storage and redirect to login
    console.error("Token validation error:", error);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
