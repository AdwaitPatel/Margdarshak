import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Tenth from "./pages/10th.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact";
import CareerQuizPage from "./pages/CareerQuiz";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import ForgotPasswordPage from "./pages/ForgotPassword";
import CareerDomainsPage from "./pages/CareerDomains";
import ScrollToTop from "./components/ScrollToTop";
import MentorsPage from './pages/Mentors';


const App = () => {
  return (
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

        {/* Explore pages */}
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


      </Routes>
    </Router>
  );
};

export default App;
