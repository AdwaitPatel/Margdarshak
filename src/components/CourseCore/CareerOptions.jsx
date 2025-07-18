import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faTools,
  faBriefcase,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

const CareerOptions = () => {
  const streams = [
    {
      icon: faGraduationCap,
      title: "Continue 11th & 12th",
      description:
        "Choose between Science, Commerce, or Arts streams for higher secondary education",
    },
    {
      icon: faTools,
      title: "Polytechnic Courses",
      description:
        "Diploma in Engineering, Architecture, or other technical fields (3-year programs)",
    },
    {
      icon: faBriefcase,
      title: "Vocational Courses",
      description:
        "ITI courses, Hospitality, Healthcare, and other skill-based programs",
    },
    {
      icon: faPaintBrush,
      title: "Creative Fields",
      description:
        "Animation, Design, Fine Arts, Photography, and other creative careers",
    },
  ];

  return (
    <section className="career-options py-10 md:py-20 bg-purple-50 dark:bg-gray-900">
      <div className="container mx-auto px-5">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-8 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-purple-600 after:rounded-full">
          Career Options After 10th
        </h2>
        <div className="stream-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {streams.map((stream, index) => (
            <div
              key={index}
              className="stream-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="stream-icon text-3xl text-purple-600 mb-4">
                <FontAwesomeIcon icon={stream.icon} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{stream.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {stream.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOptions;
