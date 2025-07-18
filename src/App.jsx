import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/student-dashboard" />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;


