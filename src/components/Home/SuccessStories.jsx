import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SuccessSlide = ({ image, title, description }) => (
  <div className="min-w-[33.333%] relative overflow-hidden h-[500px]">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
      <h2 className="text-3xl font-bold text-shadow-md">{title}</h2>
      <p className="text-lg opacity-90 mb-10">{description}</p>
    </div>
  </div>
);

const SuccessStories = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Rahul's Journey",
      description: "From confused student to successful software engineer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Priya's Story",
      description: "Found her passion in architecture after career counseling",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Amit's Success",
      description: "From average student to top medical college",
    },
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setSlideIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="py-20 bg-bg relative overflow-hidden transition-all duration-1000"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold dark:text-white text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full">
        Success Stories
      </h2>
      <div className="max-w-4xl mx-6 sm:mx-auto relative overflow-hidden rounded-xl shadow-2xl">
        <div
          className="flex w-[300%] h-[500px] transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${slideIndex * 33.333}%)` }}
        >
          {slides.map((slide, index) => (
            <SuccessSlide key={index} {...slide} />
          ))}
        </div>
        <div className="absolute bottom-5 left-0 w-full flex justify-between px-5 items-center">
          <button
            className="w-10 h-10 bg-accent/70 text-white rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
            onClick={() =>
              setSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))
            }
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  slideIndex === index ? "bg-primary scale-125" : "bg-white/50"
                } transition-all duration-300`}
                onClick={() => setSlideIndex(index)}
              ></button>
            ))}
          </div>
          <button
            className="w-10 h-10 bg-accent/70 text-white rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
            onClick={() =>
              setSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))
            }
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
