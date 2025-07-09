import React from "react";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import CategoriesSection from "../components/Home/CategoriesSection";
import MentorshipSection from "../components/Home/MentorshipSection";
import FactsSection from "../components/Home/FactsSection";
import FAQSection from "../components/Home/FAQSection";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <MentorshipSection />
      <FactsSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Home;
