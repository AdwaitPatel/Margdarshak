import TermsCon from "../components/TermsAndConditions";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Termscon from "../components/TermsAndConditions";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="mt-15">
        <Termscon />
      </div>
      <Footer />
    </>
  );
};

export default Terms;
