import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Tenth from "./pages/10th.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact";
import CareerQuizPage from "./pages/CareerQuiz";
import SignupPage from "./pages/Auth/Signup.jsx";
import LoginPage from "./pages/Auth/Login.jsx";
import ForgotPasswordPage from "./pages/Auth/ForgotPassword.jsx";
import CareerDomainsPage from "./pages/CareerDomains";
import ScrollToTop from "./components/Common/ScrollToTop.jsx";
import MentorsPage from "./pages/Mentors";
import Terms from "./pages/Terms";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard.jsx";
import ScheduleMeeting from "./pages/ScheduleMeeting";
import About from "./pages/About";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import AIAssistant from "./components/AI/AIAssistant.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="course-core/10th" element={<Tenth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career-quiz" element={<CareerQuizPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/Mentors" element={<MentorsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Routes */}
          <Route
            path="/student/dashboard/*"
            element={
              <ProtectedRoute allowedRoles={["student", "admin"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mentor/dashboard/*"
            element={
              <ProtectedRoute allowedRoles={["mentor", "admin"]}>
                <MentorDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/schedule-meeting/*"
            element={
              <ProtectedRoute allowedRoles={["student", "mentor", "admin"]}>
                <ScheduleMeeting />
              </ProtectedRoute>
            }
          />

          {/* Career Domain Routes (Public) */}
          <Route
            path="/careers/PCM"
            element={<CareerDomainsPage stream="PCM" />}
          />
          <Route
            path="/careers/PCB"
            element={<CareerDomainsPage stream="PCB" />}
          />
          <Route
            path="/careers/Arts"
            element={<CareerDomainsPage stream="Arts" />}
          />
          <Route
            path="/careers/Commerce"
            element={<CareerDomainsPage stream="Commerce" />}
          />

          {/* 404 Catch-all Route - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* AI Assistant - Available on all pages */}
        <AIAssistant />
      </Router>
    </ThemeProvider>
  );
};

export default App;
