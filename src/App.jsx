import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CareerQuizPage from "./pages/CareerQuiz";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import ForgotPasswordPage from "./pages/ForgotPassword";
import CareerDomainsPage from "./pages/CareerDomains";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career-quiz" element={<CareerQuizPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

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
}

export default App;
