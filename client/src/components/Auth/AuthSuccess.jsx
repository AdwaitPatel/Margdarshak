import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleAuthSuccess = () => {
      try {
        // Get parameters from URL
        const token = searchParams.get("token");
        const refreshToken = searchParams.get("refreshToken");
        const userParam = searchParams.get("user");
        const error = searchParams.get("error");

        if (error) {
          console.error("Auth error:", error);
          alert("Authentication failed. Please try again.");
          navigate("/login");
          return;
        }

        if (token && refreshToken && userParam) {
          // Parse user data
          const user = JSON.parse(decodeURIComponent(userParam));

          // Store tokens and user data
          localStorage.setItem("authToken", token);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("user", JSON.stringify(user));

          // Navigate based on user role
          switch (user.role) {
            case "admin":
              navigate("/admin/dashboard");
              break;
            case "mentor":
              navigate("/mentor/dashboard");
              break;
            case "student":
            default:
              navigate("/student/dashboard");
              break;
          }
        } else {
          console.error("Missing authentication data");
          alert("Authentication data is incomplete. Please try again.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth success handling error:", error);
        alert("Failed to process authentication. Please try again.");
        navigate("/login");
      }
    };

    handleAuthSuccess();
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--color-primary)] mx-auto mb-4"></div>
        <p className="text-white text-lg">Completing authentication...</p>
        <p className="text-white/70 text-sm mt-2">
          Please wait while we log you in
        </p>
      </div>
    </div>
  );
};

export default AuthSuccess;
