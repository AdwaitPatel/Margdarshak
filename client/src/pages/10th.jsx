import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import Footer from "../components/Common/Footer";
import CoreSubjects from "../components/CourseCore/CoreSubjects";
import CareerOptions from "../components/CourseCore/CareerOptions";

const Tenth = () => {
  return (
    <div>
      <Navbar />
      <HeroSection
        title="10th Core Curriculum"
        description="Comprehensive guide to 10th grade subjects, syllabus, and career opportunities after completion."
        buttonText="Core Subjects"
        buttonLink="#"
        slides={[
          {
            image:
              "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Personalized Career Guidance",
            description:
              "Get tailored advice based on your skills, interests, and aspirations",
          },
          {
            image:
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Expert Mentorship",
            description:
              "Connect with industry professionals who can guide your career journey",
          },
          {
            image:
              "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Comprehensive Assessments",
            description:
              "Discover your strengths and find careers that match your personality",
          },
        ]}
      />
	  <CoreSubjects />
	  <CareerOptions />
      <Footer />
    </div>
  );
};

export default Tenth;
