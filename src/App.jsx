import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tenth from "./pages/10th.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course-core/10th" element={<Tenth />} />
      </Routes>
    </Router>
  );
};

export default App;
