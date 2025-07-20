import CareerQuiz from "../components/CareerQuiz/CareerQuiz";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ThemeToggle from "../components/Common/ThemeToggle";

const CareerQuizPage = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] transition-all duration-1000">
      <div className="fixed top-4 md:right-8 right-16 z-[60]">
        <ThemeToggle className="shadow-lg hover:shadow-xl transition-shadow duration-300" />
      </div>
      <Navbar />
      <div className="relative pt-20 pb-12">
        <CareerQuiz />
      </div>
      <Footer />
    </div>
  );
};

export default CareerQuizPage;
