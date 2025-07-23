import CareerQuiz from "../components/CareerQuiz/CareerQuiz";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ThemeToggle from "../components/Common/ThemeToggle";

const CareerQuizPage = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-all duration-1000">
      <Navbar />
      <div className="relative">
        <CareerQuiz />
      </div>
      <Footer />
    </div>
  );
};

export default CareerQuizPage;
