import React, { useState, useEffect } from "react";

const CinematicSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full md:w-1/2 h-[500px] rounded-lg overflow-hidden shadow-2xl">
      <div
        className="flex h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover ${
                currentSlide === index ? "scale-105" : ""
              } transition-transform duration-[1200ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 text-white">
              <h3
                className={`text-2xl font-bold mb-2 ${
                  currentSlide === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[30px] opacity-0"
                } transition-all duration-[800ms] ease-[cubic-bezier(0.215,0.61,0.355,1)]`}
              >
                {slide.title}
              </h3>
              <p
                className={`text-lg mb-4 ${
                  currentSlide === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[30px] opacity-0"
                } transition-all duration-[800ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-100`}
              >
                {slide.description}
              </p>
              {slide.buttonText && slide.buttonLink && (
                <a
                  href={slide.buttonLink}
                  className={`px-4 py-2 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-accent)] transition-colors self-start ${
                    currentSlide === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[30px] opacity-0"
                  } transition-all duration-[800ms] ease-[cubic-bezier(0.215,0.61,0.355,1)] delay-200`}
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? "bg-[var(--color-primary)] scale-125"
                : "bg-white/50"
            } transition-all duration-300`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CinematicSlider;
