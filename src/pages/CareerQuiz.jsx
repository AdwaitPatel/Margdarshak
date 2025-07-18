import CareerQuiz from "../components/CareerQuiz/CareerQuiz";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

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
