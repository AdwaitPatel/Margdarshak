import CareerScopes from "../components/Explore/CareerDomains";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

const CareerDomainsPage = ({ stream }) => {
  return (
    <>
      <Navbar />
      <div className="mt-15">
        <CareerScopes stream={stream} />
      </div>
      <Footer />
    </>
  );
};

export default CareerDomainsPage;
