import MentorsPage from "../components/MentorsPage";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

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
