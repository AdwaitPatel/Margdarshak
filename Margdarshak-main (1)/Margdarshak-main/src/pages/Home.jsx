
import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import SuccessStories from "../components/Home/SuccessStories";
import Mentorship from "../components/Home/Mentorship";
import Stats from "../components/Home/Stats";
import Streams from "../components/Home/Streams";
import FAQ from "../components/Home/FAQ";
import Footer from "../components/Common/Footer";

const Home = () => {
  return (
    <div className="duration-1000">
      <Navbar />
      <HeroSection />
      <SuccessStories />
      <Mentorship />
      <Stats />
      <Streams />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
