import React, { useState } from "react";

const CareerQuizHero = () => {
  const [progressWidth, setProgressWidth] = useState(30);

  const sampleQuestions = [
    {
      id: 1,
      question: "What subjects do you enjoy the most?",
      options: [
        "Mathematics and Physics",
        "Biology and Chemistry",
        "Economics and Business Studies",
        "Literature and History",
        "Art and Design",
      ],
    },
    {
      id: 2,
      question: "What type of work environment appeals to you?",
      options: [
        "Laboratory or Research facility",
        "Corporate office",
        "Creative studio",
        "Outdoor fieldwork",
        "Hospital or clinic",
      ],
    },
  ];

  return (
    // <Navbar />
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ backgroundColor: "#0f0f23", color: "#e0e6ed" }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Quiz Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight">
              To know your career path answer some of the questions
            </h1>

            {/* Progress Container */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="w-full bg-slate-700/30 rounded-full h-4 p-1 backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
                  style={{ width: `${progressWidth}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              <div className="text-center mt-4 text-slate-300 text-sm">
                Question 1 of 10 - Getting Started
              </div>
            </div>

            {/* Questionnaire Box */}
            <div className="bg-slate-800/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-8 border border-slate-700/30 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 min-h-[500px] flex flex-col justify-center">
              <div className="space-y-8">
                {sampleQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="bg-blue-500/10 rounded-2xl p-6 md:p-8 border-l-4 border-blue-500"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-6">
                      Question {q.id}: {q.question}
                    </h3>
                    <ul className="space-y-3">
                      {q.options.map((option, index) => (
                        <li
                          key={index}
                          className="flex items-center p-3 border-b border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:pl-6 text-slate-300 hover:text-blue-400 group"
                        >
                          <span className="mr-4 text-blue-400 text-lg group-hover:scale-125 transition-transform duration-300">
                            ○
                          </span>
                          <span className="group-hover:text-blue-300 transition-colors duration-300">
                            {option}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="text-center mt-8">
                  <p className="text-slate-400 italic text-lg leading-relaxed">
                    Complete the quiz to get personalized career recommendations
                    based on your interests and skills.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button with Tooltip */}
            <div className="text-center">
              <div className="relative inline-block group">
                <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 border-none cursor-pointer">
                  Know more about this field
                </button>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-slate-900 text-blue-400 px-4 py-2 rounded-lg text-sm whitespace-nowrap border border-slate-700">
                    Please login to view detailed career recommendations
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuizHero;
