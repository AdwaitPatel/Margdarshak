import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import 'animate.css';

const Hero = ({ children }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#1a1a1a] text-white' : 'bg-[#f5f5f5] text-[#2C2C2C]'} overflow-x-hidden`}>
      <div className={`min-h-screen bg-gradient-to-br ${isDarkMode ? 'from-[#1a1a1a] via-[#9D4EDD]/20 to-[#7B2CBF]/10' : 'from-[#f5f5f5] via-[#9D4EDD]/10 to-[#7B2CBF]/5'} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${isDarkMode ? 'bg-[#A259FF]' : 'bg-[#9D4EDD]'} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 ${isDarkMode ? 'bg-[#7B2CBF]' : 'bg-[#7B2CBF]'} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
        </div>
        <div className="relative z-10 px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className={`w-full ${isDarkMode ? 'bg-[#A259FF]/10' : 'bg-[#9D4EDD]/10'} rounded-full h-3 p-0.5 backdrop-blur-sm border ${isDarkMode ? 'border-[#A259FF]/20' : 'border-[#9D4EDD]/20'}`}>
        <div
          className={`h-full bg-gradient-to-r ${isDarkMode ? 'from-[#A259FF] to-[#7B2CBF]' : 'from-[#9D4EDD] to-[#7B2CBF]'} rounded-full transition-all duration-500 ease-out relative overflow-hidden`}
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
      <div className={`text-center mt-3 ${isDarkMode ? 'text-white/70' : 'text-[#2C2C2C]/70'} text-xs font-mono`}>
        Question {Math.min(Math.floor(progress / 10) + 1, 10)} of 10
      </div>
    </div>
  );
};

const QuestionCard = ({ question, options, onAnswer, index }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${isDarkMode ? 'bg-[#A259FF]/10' : 'bg-[#9D4EDD]/5'} backdrop-blur-lg rounded-xl p-6 md:p-8 mb-8 border ${isDarkMode ? 'border-[#A259FF]/20' : 'border-[#9D4EDD]/10'} shadow-lg ${isDarkMode ? 'hover:shadow-[#A259FF]/10' : 'hover:shadow-[#9D4EDD]/20'} transition-all duration-300 hover:-translate-y-1 min-h-[400px] flex flex-col justify-center animate__animated animate__fadeIn`}
    >
      <h3 className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-[#7B2CBF]' : 'text-[#9D4EDD]'} mb-6 font-sans`}>
        <span className={isDarkMode ? 'text-[#A259FF]' : 'text-[#7B2CBF]'}>Q{index + 1}:</span> {question}
      </h3>
      <ul className="space-y-2">
        {options.map((option, idx) => (
          <li
            key={idx}
            className={`flex items-center p-3 ${isDarkMode ? 'bg-[#A259FF]/10 hover:bg-[#A259FF]/20' : 'bg-[#9D4EDD]/5 hover:bg-[#9D4EDD]/10'} rounded-lg transition-all duration-300 cursor-pointer hover:border-l-4 ${isDarkMode ? 'hover:border-[#7B2CBF]' : 'hover:border-[#9D4EDD]'} ${isDarkMode ? 'text-white' : 'text-[#2C2C2C]'} hover:text-current group`}
            onClick={() => onAnswer(option)}
          >
            <span className={`mr-3 ${isDarkMode ? 'text-[#A259FF]' : 'text-[#9D4EDD]'} text-lg group-hover:scale-110 transition-transform duration-300`}>
              {String.fromCharCode(97 + idx)}.
            </span>
            <span className={`group-hover:${isDarkMode ? 'text-[#7B2CBF]' : 'text-[#9D4EDD]'} transition-colors duration-300`}>
              {option}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ResultCard = ({ career }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`${isDarkMode ? 'bg-[#A259FF]/10' : 'bg-[#9D4EDD]/5'} backdrop-blur-lg rounded-xl p-6 md:p-8 mb-8 border ${isDarkMode ? 'border-[#A259FF]/20' : 'border-[#9D4EDD]/10'} shadow-lg ${isDarkMode ? 'hover:shadow-[#A259FF]/10' : 'hover:shadow-[#9D4EDD]/20'} transition-all duration-300 hover:-translate-y-1 min-h-[400px] flex flex-col justify-center items-center text-center animate__animated animate__fadeIn`}
    >
      <div className={`mb-6 p-4 bg-gradient-to-r ${isDarkMode ? 'from-[#A259FF] to-[#7B2CBF]' : 'from-[#9D4EDD] to-[#7B2CBF]'} rounded-full`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-[#2C2C2C]'} mb-4`}>
        Your Recommended Career Path
      </h3>
      <p className={`text-lg ${isDarkMode ? 'text-white/80' : 'text-[#2C2C2C]/80'} mb-6`}>
        Based on your answers, a career in <span className={`font-bold ${isDarkMode ? 'text-[#7B2CBF]' : 'text-[#9D4EDD]'}`}>{career}</span> could be a great fit!
      </p>
      <p className={`${isDarkMode ? 'text-white/60' : 'text-[#2C2C2C]/60'} italic mb-6`}>
        "Choose a job you love, and you will never have to work a day in your life."
      </p>
    </div>
  );
};

const CTAButton = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="text-center mt-8">
      <div className="relative inline-block group">
        <Link
          to="/login"
          className={`relative bg-gradient-to-r ${isDarkMode ? 'from-[#A259FF] to-[#7B2CBF]' : 'from-[#9D4EDD] to-[#7B2CBF]'} text-white px-8 py-3 rounded-lg font-bold text-md shadow-lg hover:shadow-[#7B2CBF]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
        >
          <span className="relative z-10">Explore Career Options</span>
          <span className={`absolute inset-0 bg-gradient-to-r ${isDarkMode ? 'from-[#A259FF]/90 to-[#7B2CBF]/90' : 'from-[#9D4EDD]/90 to-[#7B2CBF]/90'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
        </Link>
        <div className={`absolute -bottom-1 left-0 right-0 h-1 ${isDarkMode ? 'bg-[#7B2CBF]/50' : 'bg-[#9D4EDD]/50'} rounded-b-lg scale-x-75 group-hover:scale-x-100 origin-bottom transition-transform duration-300`}></div>
      </div>
    </div>
  );
};

const TypingAnimation = ({ text }) => {
  const { isDarkMode } = useTheme();
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    setDisplayedText('');
    setIsTypingComplete(false);
    let timeoutId;

    const typeText = (index = 0) => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        timeoutId = setTimeout(() => {
          typeText(index + 1);
        }, 100);
      } else {
        setIsTypingComplete(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          typeText();
        }
      },
      { threshold: 0.1 }
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (typingRef.current) observer.unobserve(typingRef.current);
      observer.disconnect();
    };
  }, [text]);

  return (
    <h1 
      ref={typingRef}
      className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${isDarkMode ? 'from-white via-[#A259FF] to-[#7B2CBF]' : 'from-[#2C2C2C] via-[#9D4EDD] to-[#7B2CBF]'} bg-clip-text text-transparent leading-tight`}
    >
      {displayedText}
      {!isTypingComplete && (
        <span className={`inline-block w-[3px] h-[1em] ${isDarkMode ? 'bg-[#A259FF]' : 'bg-[#9D4EDD]'} ml-1 animate-pulse`}></span>
      )}
    </h1>
  );
};

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
    {
      id: 6,
      question: 'How comfortable are you with technology?',
      options: ['Very Comfortable', 'Somewhat Comfortable', 'Neutral', 'Not Very Comfortable', 'Not Comfortable'],
    },
    {
      id: 7,
      question: 'Which activity do you enjoy the most?',
      options: ['Building or Coding', 'Helping Others', 'Designing or Creating', 'Analyzing Data', 'Managing Projects'],
    },
    {
      id: 8,
      question: 'What is your preferred work pace?',
      options: ['Fast-Paced and Dynamic', 'Steady and Structured', 'Flexible and Creative', 'Methodical and Detailed', 'Collaborative and Team-Oriented'],
    },
    {
      id: 9,
      question: 'Which field interests you the most?',
      options: ['Engineering and Technology', 'Medicine and Healthcare', 'Arts and Media', 'Business and Finance', 'Social Work or Education'],
    },
    {
      id: 10,
      question: 'What is your long-term goal?',
      options: ['Lead Innovations', 'Make a Social Impact', 'Express Creativity', 'Build Wealth', 'Advance Knowledge'],
    },
  ];

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate career based on answers
      const careerMap = {
        'Mathematics and Physics': 'Engineering',
        'Biology and Chemistry': 'Medicine',
        'Economics and Business Studies': 'Business',
        'Literature and History': 'Arts',
        'Art and Design': 'Arts',
        'Laboratory or Research Facility': 'Engineering',
        'Corporate Office': 'Business',
        'Creative Studio': 'Arts',
        'Outdoor Fieldwork': 'Science',
        'Hospital or Clinic': 'Medicine',
        'Problem-Solving': 'Engineering',
        'Creativity': 'Arts',
        'Communication': 'Business',
        'Leadership': 'Business',
        'Analytical Thinking': 'Science',
        'Innovate Technology': 'Engineering',
        'Improve Healthcare': 'Medicine',
        'Create Art or Media': 'Arts',
        'Drive Business Growth': 'Business',
        'Serve the Community': 'Social Work',
        'Very Comfortable': 'Engineering',
        'Building or Coding': 'Engineering',
        'Helping Others': 'Medicine',
        'Designing or Creating': 'Arts',
        'Analyzing Data': 'Science',
        'Managing Projects': 'Business',
        'Fast-Paced and Dynamic': 'Business',
        'Flexible and Creative': 'Arts',
        'Methodical and Detailed': 'Science',
        'Engineering and Technology': 'Engineering',
        'Medicine and Healthcare': 'Medicine',
        'Arts and Media': 'Arts',
        'Business and Finance': 'Business',
        'Social Work or Education': 'Social Work',
        'Lead Innovations': 'Engineering',
        'Make a Social Impact': 'Social Work',
        'Express Creativity': 'Arts',
        'Build Wealth': 'Business',
        'Advance Knowledge': 'Science',
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
    }
  };

   useEffect(() => {
    const questionCard = document.querySelector('.animate__animated');
    if (questionCard) {
      questionCard.classList.remove('animate__fadeIn');
      void questionCard.offsetWidth;
      questionCard.classList.add('animate__fadeIn');
    }
  }, [currentQuestion]);

  return (
    <Hero>
      <TypingAnimation text="Discover Your Perfect Career Path ✨" />
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
      <CTAButton />
    </Hero>
  );
};

export default CareerQuiz;