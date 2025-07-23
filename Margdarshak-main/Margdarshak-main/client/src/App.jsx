import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Tenth from "./pages/10th.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact";
import CareerQuizPage from "./pages/CareerQuiz";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import ForgotPasswordPage from "./pages/ForgotPassword";
import CareerDomainsPage from "./pages/CareerDomains";
import ScrollToTop from "./components/Common/ScrollToTop.jsx";
import MentorsPage from "./pages/Mentors";
import Terms from "./pages/Terms";
import StudentDashboard from "./pages/StudentDashboard";
import MentorDashboard from "./pages/MentorDashboard.jsx";
import ScheduleMeeting from "./pages/ScheduleMeeting";
import About from "./pages/About";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="course-core/10th" element={<Tenth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career-quiz" element={<CareerQuizPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/Mentors" element={<MentorsPage />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
		  <Route path="/mentor/dashboard" element={<MentorDashboard />}/>
          <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
          <Route path="/about" element={<About />} />

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
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
