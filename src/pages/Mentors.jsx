import MentorsPage from "../components/MentorsPage";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const Mentors = () => {
  return (
    <>
      <Navbar />
      <div className="mt-15">
        <MentorsPage />
      </div>
      <Footer />
    </>
  );
};

export default Mentors;
