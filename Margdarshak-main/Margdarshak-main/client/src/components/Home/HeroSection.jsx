import React, { useEffect } from "react";
import CinematicSlider from "./CinematicSlider.jsx";

const HeroSection = ({
  title = "Quest On Confusion Off",
  description = "Discover your strengths, explore career options, and get personalized guidance from expert mentors to build a successful future.",
  buttonText = "Find Career Path",
  buttonLink = "/career-quiz",
  slides = [
    {
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Personalized Career Guidance",
      description:
        "Get tailored advice based on your skills, interests, and aspirations",
      buttonText: "Learn More",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Expert Mentorship",
      description:
        "Connect with industry professionals who can guide your career journey",
      buttonText: "Find a Mentor",
      buttonLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Comprehensive Assessments",
      description:
        "Discover your strengths and find careers that match your personality",
      buttonText: "Take Assessment",
      buttonLink: "#",
    },
  ],
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        document.querySelector(".hero-bg").style.backgroundPositionY = `${
          scrollPosition * 0.5
        }px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-bg min-h-screen flex items-center py-20 bg-[var(--color-bg)] relative overflow-hidden duration-1000">
      {/* Top Right Circle */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-purple-400/30 to-purple-600/40 rounded-full opacity-40"></div>

      {/* Bottom Left Circle */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-purple-300/25 to-purple-500/35 rounded-full opacity-40"></div>

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/15 rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-primary)]/15 rounded-full -z-10"></div>
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:mx-30">
        <div className="flex-1 text-center md:text-left mt-20 md:mt-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-6">
            {title}
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-[600px] mx-auto md:mx-0 dark:text-white">
            {description}
          </p>
          <a
            href={buttonLink}
            className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-accent)] transition-colors cursor-pointer"
          >
            {buttonText}
          </a>
        </div>
        <CinematicSlider slides={slides} />
      </div>
    </section>
  );
};

export default HeroSection;
