import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-sm hover:shadow-lg shadow-gray-700 transition-all duration-300 border-primary overflow-hidden border-t-8 hover:-translate-y-2">
      <button
        className="w-full p-6 text-left flex justify-between items-center transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium text-primary pr-4">
          {question}
        </h3>
        <FontAwesomeIcon
          icon={isOpen ? faMinus : faPlus}
          className="text-primary transition-transform duration-300 flex-shrink-0"
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-6 pt-0 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does career guidance work?",
      answer:
        "Our career guidance process involves a comprehensive assessment of your skills, interests, and aptitudes. We then match you with suitable career options and provide personalized mentorship to help you make informed decisions.",
    },
    {
      question: "Is the mentorship service free?",
      answer:
        "We offer both free and premium mentorship services. Basic career guidance is available for free, while personalized 1:1 mentorship with industry experts comes with our premium plans at affordable rates.",
    },
    {
      question: "How long does it take to find the right career path?",
      answer:
        "The timeline varies for each individual. Some students find clarity within a few sessions, while others may take a few months of exploration. Our mentors work at your pace to ensure you make the right decision without rushing.",
    },
    {
      question: "Do you provide career guidance for all streams?",
      answer:
        "Yes, we cover all major educational streams including Science, Commerce, Arts, and various specialized fields. Our mentor network includes experts from diverse professional backgrounds to provide guidance across all career paths.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-20 bg-bg transition-all duration-1000"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
