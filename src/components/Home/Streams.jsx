import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faHeartbeat,
  faBriefcase,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const StreamCard = ({ icon, title, description, exploreLink }) => (
  <div
    className="bg-bg dark:shadow-gray-800 mx-7 sm:mx-auto rounded-lg p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group transition-all duration-1000"
    data-aos="fade-up"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-primary transition-all"></div>
    <FontAwesomeIcon
      icon={icon}
      className="text-5xl text-primary my-6 transition-transform duration-300 group-hover:scale-110"
    />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-text opacity-80 mb-6 min-h-[50px]">{description}</p>
    <Link
      to={exploreLink}
      className="px-4 py-2 rounded-full hover:bg-accent transition-colors border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
    >
      Explore
    </Link>
  </div>
);

const Streams = () => {
  const streams = [
    {
      icon: faCalculator,
      title: "Maths",
      description: "Engineering, Data Science, Technology",
      exploreLink: "/careers/PCM",
    },
    {
      icon: faHeartbeat,
      title: "Bio",
      description: "Medicine, Healthcare, Biotech, Research",
      exploreLink: "/careers/PCB",
    },
    {
      icon: faBriefcase,
      title: "Commerce",
      description: "Business, Finance, Accounting, Marketing",
      exploreLink: "/careers/Commerce",
    },
    {
      icon: faPaintBrush,
      title: "Arts",
      description: "Creative fields, Literature, Media, Design",
      exploreLink: "/careers/Arts",
    },
  ];

  return (
    <section
      className="dark:text-white py-20 bg-bg transition-all duration-1000"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full">
          Choose Your Stream
        </h2>
        <div className="grid grid-cols-1 mt-15 md:grid-cols-4 gap-8">
          {streams.map((stream, index) => (
            <StreamCard key={index} {...stream} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Streams;
