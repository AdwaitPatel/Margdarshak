import CareerQuiz from "../components/CareerQuiz/CareerQuiz";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

const CareerQuizPage = () => {
  return (
    <>
      <Navbar />
      <div className="mt-15">
        <CareerQuiz />
      </div>
      <Footer />
    </>
  );
};

export default CareerQuizPage;
