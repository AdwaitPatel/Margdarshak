import React, { useState } from "react";
import {
  X,
  GraduationCap,
  DollarSign,
  MapPin,
  Calendar,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import streamData from "../../data/StreamData";

function CareerScopes({ stream = "PCM" }) {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const careerData = streamData[stream] || streamData.PCM;

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

  return (
    <div className="min-h-screen bg-primary-bg font-poppins">
      {/* Header */}
      <div className="pt-16 pb-12 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-4 tracking-tight">
          Career Scopes for {stream}
        </h1>
        <p className="text-xl text-secondary-text max-w-3xl mx-auto leading-relaxed">
          Explore diverse career paths for {getStreamFullName(stream)} students
        </p>
      </div>

      {/* Cards Grid */}
      <div className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {careerData.map((domain) => (
              <div
                key={domain.id}
                onClick={() => openModal(domain)}
                className="group relative bg-card-bg backdrop-blur-sm rounded-2xl p-8 border border-border-light cursor-pointer transform transition-all duration-500 hover:scale-105 hover:bg-accent-bg hover:border-border-medium hover:shadow-2xl hover:shadow-highlight/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-highlight-alt/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-primary-text mb-4 group-hover:text-highlight transition-colors duration-300">
                    {domain.title}
                  </h3>
                  <p className="text-secondary-text text-base leading-relaxed group-hover:text-primary-text transition-colors duration-300">
                    {domain.description}
                  </p>
                  <div className="mt-6 flex items-center text-highlight font-medium group-hover:text-highlight-alt transition-colors duration-300">
                    <span>Explore Career Path</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDomain && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-secondary-bg rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-border-medium shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-highlight to-highlight-alt p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">
                {selectedDomain.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Modal Content */}
              <div className="p-6">
                <p className="text-lg text-secondary-text mb-8 leading-relaxed">
                  {selectedDomain.description}
                </p>

                {/* Colleges Section */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-primary-text mb-6 flex items-center">
                    <GraduationCap className="mr-3 text-highlight" size={24} />
                    Top Colleges & Institutions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedDomain.colleges.map((college, index) => (
                      <div
                        key={index}
                        className="bg-card-bg rounded-xl p-6 border border-border-light hover:border-border-medium transition-colors duration-300"
                      >
                        <h4 className="text-xl font-bold text-primary-text mb-3">
                          {college.name}
                        </h4>
                        <div className="space-y-2 text-secondary-text">
                          <div className="flex items-center">
                            <MapPin className="mr-2 text-highlight" size={16} />
                            <span>{college.location}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign
                              className="mr-2 text-highlight"
                              size={16}
                            />
                            <span className="font-semibold text-highlight">
                              {college.avgPackage}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar
                              className="mr-2 text-highlight"
                              size={16}
                            />
                            <span>{college.duration}</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-secondary-text mb-2">
                            Specializations:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {college.specialization.map((spec, specIndex) => (
                              <span
                                key={specIndex}
                                className="px-3 py-1 bg-highlight/10 text-highlight text-sm rounded-full border border-highlight/20"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Roadmap Section */}
                <div>
                  <h3 className="text-2xl font-bold text-primary-text mb-6 flex items-center">
                    <TrendingUp className="mr-3 text-highlight" size={24} />
                    Career Roadmap
                  </h3>
                  <div className="space-y-4">
                    {selectedDomain.roadmap.map((step, index) => (
                      <div
                        key={index}
                        className="flex items-start bg-card-bg rounded-lg p-4 border border-border-light hover:border-border-medium transition-colors duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 bg-highlight rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                          {index + 1}
                        </div>
                        <p className="text-secondary-text text-lg leading-relaxed">
                          {step}
                        </p>
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
