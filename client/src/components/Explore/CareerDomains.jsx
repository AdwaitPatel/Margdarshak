import React, { useState, useRef } from "react";
import {
  X,
  GraduationCap,
  DollarSign,
  MapPin,
  Calendar,
  BookOpen,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import streamData from "../../data/StreamData";
import gsap from 'gsap';

function CareerScopes({ stream = "PCM" }) {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideContainerRef = useRef(null);
  const progressRef = useRef(null);

  const careerData = streamData[stream] || streamData.PCM;

  const handlePrev = () => {
    if (isAnimating) return;
    const newIndex = (currentIndex - 1 + careerData.length) % careerData.length;
    animateSlide('prev', newIndex);
  };

  const handleNext = () => {
    if (isAnimating) return;
    const newIndex = (currentIndex + 1) % careerData.length;
    animateSlide('next', newIndex);
  };

  const animateSlide = (direction, newIndex) => {
    setIsAnimating(true);

    const slideContainer = slideContainerRef.current;
    const currentSlide = slideContainer.children[currentIndex];
    const nextSlide = slideContainer.children[newIndex];
    const duration = 0.8;
    const ease = "power2.inOut";

    // Set initial positions
    gsap.set(nextSlide, {
      xPercent: direction === 'next' ? 100 : -100,
      opacity: 1,
      visibility: 'visible'
    });

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setCurrentIndex(newIndex);
      }
    });

    // Animate slides
    tl.to(currentSlide, {
      xPercent: direction === 'next' ? -100 : 100,
      opacity: 0,
      duration: duration,
      ease: ease,
      force3D: true
    })
    .to(nextSlide, {
      xPercent: 0,
      duration: duration,
      ease: ease,
      force3D: true
    }, "<");

    // Update progress bar
    gsap.to(progressRef.current, {
      width: `${((newIndex + 1) / careerData.length) * 100}%`,
      duration: duration,
      ease: ease
    });
  };

  const openModal = (domain) => {
    setSelectedDomain(domain);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDomain(null);
  };

  const getStreamFullName = (streamCode) => {
    const streamNames = {
      PCM: "Physics, Chemistry & Mathematics",
      PCB: "Physics, Chemistry & Biology",
      Arts: "Arts & Humanities",
      Commerce: "Commerce & Business Studies",
    };
    return streamNames[streamCode] || streamCode;
  };

  // Add image error handling
  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.style.backgroundColor = '#0a0a0a';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-poppins relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] opacity-20 animate-gradient bg-gradient-size"></div>
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-pan-overlay"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xl font-semibold">Career Explorer</span>
          </div>
        </nav>

        {/* Progress Indicator */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-primary)]/20 z-[60]">
          <div 
            ref={progressRef}
            className="h-full bg-[var(--color-primary)] transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / careerData.length) * 100}%` }}
          ></div>
        </div>

        {/* Slides Container */}
        <div ref={slideContainerRef} className="relative h-screen">
          {careerData.map((domain, index) => (
            <div
              key={domain.id}
              className={`absolute inset-0 ${index === currentIndex ? 'visible' : 'invisible'}`}
              style={{
                transform: `translateX(${index === currentIndex ? '0%' : '100%'})`,
              }}
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-800"
                style={{ 
                  backgroundImage: `url("${domain.image}")`,
                  backgroundColor: '#0a0a0a', // Fallback color
                }}
                onError={handleImageError}
              >
                {/* Enhanced gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 backdrop-blur-[1px]"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-16">
                  <div className="max-w-2xl">
                    <div className="overflow-hidden">
                      <div className="text-white/80 text-xl mb-4 transform transition-transform duration-800">
                        {domain.category}
                      </div>
                    </div>
                    <div className="overflow-hidden">
                      <h2 className="text-6xl font-bold text-white mb-6 font-display transform transition-transform duration-800">
                        {domain.title}
                      </h2>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-white/70 text-lg mb-8 leading-relaxed transform transition-transform duration-800">
                        {domain.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 transform transition-transform duration-800">
                      <button
                        onClick={() => openModal(domain)}
                        className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-secondary)] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        Explore Path
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-16 bottom-16 z-30 flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-white/40"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-white/40"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Slide Counter */}
          <div className="text-white/70 font-mono">
            <span className="text-white font-bold">{currentIndex + 1}</span>
            <span className="mx-2">/</span>
            <span>{careerData.length}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDomain && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
            <div 
              className="bg-[#0a0a0a]/90 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-white/10 shadow-2xl animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-6 flex justify-between items-center relative overflow-hidden">
                {/* Animated background lines */}
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-pan-overlay"></div>
                
                <h2 className="text-3xl font-bold text-white relative z-10">
                  {selectedDomain.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded-lg relative z-10"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[calc(90vh-120px)] custom-scrollbar">
                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  <p className="text-lg text-white/70 leading-relaxed">
                    {selectedDomain.description}
                  </p>

                  {/* Colleges Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <GraduationCap className="mr-3 text-[var(--color-primary)]" size={24} />
                      Top Colleges & Institutions
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedDomain.colleges.map((college, index) => (
                        <div
                          key={index}
                          className="group relative"
                        >
                          {/* Card Background */}
                          <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10"></div>
                          
                          {/* Content */}
                          <div className="relative p-6">
                            <h4 className="text-xl font-bold text-white mb-3">
                              {college.name}
                            </h4>
                            <div className="space-y-2 text-white/70">
                              <div className="flex items-center">
                                <MapPin className="mr-2 text-[var(--color-primary)]" size={16} />
                                <span>{college.location}</span>
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="mr-2 text-[var(--color-primary)]" size={16} />
                                <span className="font-semibold text-[var(--color-primary)]">
                                  {college.avgPackage}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="mr-2 text-[var(--color-primary)]" size={16} />
                                <span>{college.duration}</span>
                              </div>
                            </div>
                            <div className="mt-4">
                              <p className="text-sm text-white/70 mb-2">
                                Specializations:
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {college.specialization.map((spec, specIndex) => (
                                  <span
                                    key={specIndex}
                                    className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm rounded-full border border-[var(--color-primary)]/20 transition-colors duration-300 hover:bg-[var(--color-primary)]/20"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Roadmap Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <TrendingUp className="mr-3 text-[var(--color-primary)]" size={24} />
                      Career Roadmap
                    </h3>
                    <div className="space-y-4">
                      {selectedDomain.roadmap.map((step, index) => (
                        <div
                          key={index}
                          className="group relative flex items-start"
                        >
                          {/* Step number */}
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1 relative z-10">
                            {index + 1}
                          </div>
                          
                          {/* Step content */}
                          <div className="flex-grow relative">
                            <div className="absolute inset-0 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10"></div>
                            <p className="relative p-4 text-white/70 text-lg leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                              {step}
                            </p>
                          </div>
                          
                          {/* Connecting line */}
                          {index < selectedDomain.roadmap.length - 1 && (
                            <div className="absolute left-4 top-12 w-[2px] h-[calc(100%+1rem)] bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] opacity-20"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default CareerScopes;
