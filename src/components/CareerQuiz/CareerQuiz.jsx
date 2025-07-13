import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Hero = ({ children }) => (
  <div className="min-h-screen bg-[var(--color-primary-bg)] text-[var(--color-primary-text)] overflow-x-hidden">
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-primary-bg)] via-[var(--color-secondary-bg)] to-[var(--color-accent-bg)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-highlight)] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[var(--color-highlight-alt)] rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="max-w-2xl mx-auto mb-8">
    <div className="w-full bg-[var(--color-card-bg)] rounded-full h-4 p-1 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-highlight-alt)] rounded-full transition-all duration-300 ease-out relative overflow-hidden"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
      </div>
    </div>
    <div className="text-center mt-4 text-[var(--color-secondary-text)] text-sm">
      Question {Math.min(Math.floor(progress / 10) + 1, 10)} of 10
    </div>
  </div>
);

const QuestionCard = ({ question, options, onAnswer, index }) => (
  <div
    className="bg-[var(--color-card-bg)] backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-8 border border-[var(--color-border-medium)] shadow-2xl hover:shadow-[var(--color-highlight)]/20 transition-all duration-300 hover:-translate-y-2 min-h-[400px] flex flex-col justify-center animate__animated animate__fadeIn"
  >
    <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-highlight)] mb-6">
      Question {index + 1}: {question}
    </h3>
    <ul className="space-y-3">
      {options.map((option, idx) => (
        <li
          key={idx}
          className="flex items-center p-3 border-b border-[var(--color-border-light)] hover:border-[var(--color-highlight)]/50 transition-all duration-300 cursor-pointer hover:pl-6 text-[var(--color-primary-text)] hover:text-[var(--color-highlight)] group"
          onClick={() => onAnswer(option)}
        >
          <span className="mr-4 text-[var(--color-highlight)] text-lg group-hover:scale-125 transition-transform duration-300">
            ○
          </span>
          <span className="group-hover:text-[var(--color-highlight-alt)] transition-colors duration-300">
            {option}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const ResultCard = ({ career }) => (
  <div
    className="bg-[var(--color-card-bg)] backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-8 border border-[var(--color-border-medium)] shadow-2xl hover:shadow-[var(--color-highlight)]/20 transition-all duration-300 hover:-translate-y-2 min-h-[400px] flex flex-col justify-center items-center text-center animate__animated animate__bounceIn"
  >
    <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-highlight)] mb-4">
      Your Recommended Career Path
    </h3>
    <p className="text-lg text-[var(--color-primary-text)] mb-6">
      Based on your answers, a career in <span className="font-bold text-[var(--color-highlight-alt)]">{career}</span> could be a great fit!
    </p>
    <p className="text-[var(--color-secondary-text)] italic">
      Explore this field further to discover exciting opportunities.
    </p>
  </div>
);

const CTAButton = () => (
  <div className="text-center">
    <div className="relative inline-block group">
      <Link
        to="/login"
        className="bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-highlight-alt)] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-[var(--color-highlight)]/40 transition-all duration-300 hover:-translate-y-1 border-none"
      >
        Know More About This Field
      </Link>
    </div>
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
    // Reset animation on question change
    const questionCard = document.querySelector('.animate__animated');
    if (questionCard) {
      questionCard.classList.remove('animate__fadeIn');
      void questionCard.offsetWidth; // Trigger reflow
      questionCard.classList.add('animate__fadeIn');
    }
  }, [currentQuestion]);

  return (
    <Hero>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-[var(--color-highlight)] bg-clip-text text-transparent leading-tight">
        Discover Your Career Path
      </h1>
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