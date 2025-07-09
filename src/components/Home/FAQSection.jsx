import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does career guidance work?",
      answer: "Our career guidance process involves personality assessment, skill evaluation, and one-on-one mentoring sessions to help you discover the best career path suited to your interests and abilities."
    },
    {
      question: "Is the mentorship service free?",
      answer: "We offer both free and premium mentorship services. Basic career guidance is free, while specialized one-on-one mentoring sessions are available through our premium plans."
    },
    {
      question: "How long does it take to find the right career path?",
      answer: "The timeline varies for each individual. Some students find clarity within a few sessions, while others may need more time for exploration. Our mentors work at your pace to ensure you make informed decisions."
    },
    {
      question: "Do you provide career guidance for all streams?",
      answer: "Yes, we provide comprehensive career guidance for all major streams including Science (Math/Bio), Commerce, Arts, and emerging interdisciplinary fields."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              <button
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-400 pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-2xl font-bold text-blue-400 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <p className="text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;