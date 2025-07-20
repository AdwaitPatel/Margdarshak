import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ children }) => (
  <div className="min-h-screen bg-[var(--color-bg)] py-20 px-4 relative overflow-hidden transition-all duration-1000">
    {/* Background Decorations */}
    <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-purple-400/30 to-purple-600/40 rounded-full opacity-40"></div>
    <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-purple-300/25 to-purple-500/35 rounded-full opacity-40"></div>
    
    <div className="container mx-auto max-w-4xl relative">
      {children}
    </div>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full h-2 bg-purple-200 dark:bg-purple-900/30 rounded-full mb-8 overflow-hidden">
    <div 
      className="h-full bg-purple-600 dark:bg-purple-500 transition-all duration-500 ease-out rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const QuestionCard = ({ question, options, onAnswer, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg relative overflow-hidden group transition-all duration-300"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 opacity-20"></div>
    
    <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">
      Question {index + 1}: {question}
    </h3>
    
    <div className="space-y-4">
      {options.map((option, idx) => (
        <motion.button
          key={idx}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAnswer(option)}
          className="w-full p-4 text-left bg-purple-50 dark:bg-gray-700/50 hover:bg-purple-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-lg border-2 border-purple-200 dark:border-purple-500/30 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300"
        >
          <span className="relative z-10">{option}</span>
        </motion.button>
      ))}
    </div>
  </motion.div>
);

const ResultCard = ({ career }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center relative overflow-hidden group transition-all duration-300"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 opacity-20"></div>
    
    <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
      Your Recommended Career Path
    </h3>
    
    <p className="text-xl mb-6 text-gray-800 dark:text-white">
      Based on your answers, a career in{" "}
      <span className="font-bold text-purple-600 dark:text-purple-400">{career}</span>{" "}
      could be a great fit!
    </p>
    
    <p className="text-gray-600 dark:text-gray-300 italic">
      Explore this field further to discover exciting opportunities.
    </p>
  </motion.div>
);

const CTAButton = () => (
  <div className="text-center mt-8">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Know More About This Field
    </motion.button>
  </div>
);

const CareerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [career, setCareer] = useState('');

  const questions = [
    {
      id: 1,
      question: 'Which standard are you currently in?',
      options: ['10th', '11th', '12th'],
    },
    {
      id: 2,
      question: 'Which subjects do you enjoy the most?',
      options: answers[0] === '10th'
        ? ['Mathematics', 'Science', 'Social Studies', 'English', 'Art']
        : ['Mathematics and Physics', 'Biology and Chemistry', 'Economics and Business Studies', 'Literature and History', 'Art and Design'],
    },
    {
      id: 3,
      question: 'What type of work environment appeals to you?',
      options: ['Laboratory or Research Facility', 'Corporate Office', 'Creative Studio', 'Outdoor Fieldwork', 'Hospital or Clinic'],
    },
    {
      id: 4,
      question: 'Which skill do you excel at?',
      options: ['Problem-Solving', 'Creativity', 'Communication', 'Leadership', 'Analytical Thinking'],
    },
    {
      id: 5,
      question: 'What kind of impact do you want to make?',
      options: ['Innovate Technology', 'Improve Healthcare', 'Create Art or Media', 'Drive Business Growth', 'Serve the Community'],
    },
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (newAnswers.length === questions.length) {
      // Simple career mapping logic
      const careerMap = {
        'Mathematics': 'Engineering',
        'Science': 'Science',
        'Laboratory or Research Facility': 'Research',
        'Hospital or Clinic': 'Medicine',
        'Creative Studio': 'Arts',
        'Corporate Office': 'Business',
        'Problem-Solving': 'Engineering',
        'Creativity': 'Arts',
        'Communication': 'Business',
        'Leadership': 'Management',
        'Analytical Thinking': 'Research',
        'Innovate Technology': 'Engineering',
        'Improve Healthcare': 'Medicine',
        'Create Art or Media': 'Arts',
        'Drive Business Growth': 'Business',
        'Serve the Community': 'Social Work',
      };

      const careerCounts = newAnswers.reduce((acc, answer) => {
        const career = careerMap[answer] || 'General';
        acc[career] = (acc[career] || 0) + 1;
        return acc;
      }, {});

      const recommendedCareer = Object.keys(careerCounts).reduce((a, b) =>
        careerCounts[a] > careerCounts[b] ? a : b,
        'General'
      );
      setCareer(recommendedCareer);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <Hero>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8 text-purple-600 dark:text-purple-400"
      >
        Discover Your Career Path
      </motion.h1>
      
      <ProgressBar progress={(currentQuestion / questions.length) * 100} />
      
      {career ? (
        <ResultCard career={career} />
      ) : (
        <QuestionCard
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          index={currentQuestion}
        />
      )}
      
      {career && <CTAButton />}
    </Hero>
  );
};

export default CareerQuiz; 