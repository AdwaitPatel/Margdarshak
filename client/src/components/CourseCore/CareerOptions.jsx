import React from "react";
import { motion } from "framer-motion";
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
    <section className="relative min-h-screen py-20 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden transition-all duration-1000">
      {/* Background Decorations */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/40 rounded-full opacity-40"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-[var(--color-primary)]/25 to-[var(--color-secondary)]/35 rounded-full opacity-40"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Career Options After 10th</h2>
          <p className="text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto">
            Explore diverse career paths and educational opportunities after completing 10th grade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {streams.map((stream, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-[320px] p-8 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-[var(--color-primary)]/20 before:transition-all before:duration-300 hover:before:border-[var(--color-primary)] hover:before:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)] dark:hover:before:shadow-[0_0_15px_rgba(var(--color-primary-dark-rgb),0.5)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)] opacity-20"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="text-5xl text-[var(--color-primary)] mb-6 transition-transform duration-300 group-hover:scale-110">
                  <FontAwesomeIcon icon={stream.icon} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-text)]">
                  {stream.title}
                </h3>
                <p className="text-[var(--color-text)]/70">
                  {stream.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOptions;
