import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ChapterItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="chapter-item mb-4"
    >
      <button 
        className="chapter-btn w-full text-left px-6 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg hover:bg-[var(--color-primary)]/10 dark:hover:bg-[var(--color-primary)]/10 flex justify-between items-center transition-all duration-300 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)]">{title}</span>
        <svg 
          className={`w-5 h-5 text-[var(--color-primary)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="chapter-content p-6 mt-2 rounded-lg bg-white/30 dark:bg-white/5 backdrop-blur-sm">
          {content}
        </div>
      </motion.div>
    </motion.li>
  );
};

const SubjectTab = ({ name, isActive, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`subject-tab px-6 py-3 rounded-full cursor-pointer font-medium whitespace-nowrap transition-all duration-300 ${
      isActive 
        ? 'bg-[var(--color-primary)] text-white shadow-lg' 
        : 'bg-white/50 dark:bg-white/5 text-[var(--color-text)] hover:bg-[var(--color-primary)]/10'
    }`}
    onClick={onClick}
  >
    {name}
  </motion.div>
);

const CoreSubjects = () => {
  const [activeSubject, setActiveSubject] = useState('science');

  const subjects = {
    science: {
      title: 'Science - Class 10',
      chapters: [
        { title: 'Light - Reflection and Refraction', content: (
          <>
            <p className="text-[var(--color-text)] mb-4">Understanding how light behaves when it reflects off surfaces or passes through different mediums.</p>
            <div className="content-highlight p-4 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <h4 className="text-[var(--color-primary)] font-semibold mb-3">Key Concepts:</h4>
              <ul className="space-y-2 text-[var(--color-text)]">
                <li>• Laws of Reflection</li>
                <li>• Spherical Mirrors (Concave & Convex)</li>
                <li>• Refraction through Lenses</li>
                <li>• Lens Formula and Magnification</li>
              </ul>
              <p className="mt-4 text-[var(--color-text)]">
                <span className="text-[var(--color-primary)] font-semibold">Important Formulas:</span> 1/f = 1/v - 1/u (Mirror Formula), m = h'/h = -v/u
              </p>
            </div>
          </>
        )},
        { title: 'Human Eye and Colorful World', content: (
          <>
            <p className="text-[var(--color-text)] mb-4">Exploring the human eye structure and various optical phenomena.</p>
            <div className="content-highlight p-4 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <h4 className="text-[var(--color-primary)] font-semibold mb-3">Key Concepts:</h4>
              <ul className="space-y-2 text-[var(--color-text)]">
                <li>• Structure of Human Eye</li>
                <li>• Defects of Vision</li>
                <li>• Atmospheric Refraction</li>
                <li>• Scattering of Light</li>
              </ul>
            </div>
          </>
        )},
        { title: 'Electricity', content: (
          <>
            <p className="text-[var(--color-text)] mb-4">Understanding electric current, potential difference, and related concepts.</p>
            <div className="content-highlight p-4 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <h4 className="text-[var(--color-primary)] font-semibold mb-3">Key Concepts:</h4>
              <ul className="space-y-2 text-[var(--color-text)]">
                <li>• Electric Current and Circuit</li>
                <li>• Ohm's Law</li>
                <li>• Resistance in Series and Parallel</li>
                <li>• Heating Effect of Current</li>
              </ul>
              <p className="mt-4 text-[var(--color-text)]">
                <span className="text-[var(--color-primary)] font-semibold">Important Formulas:</span> V = IR, P = VI, H = I²Rt
              </p>
            </div>
          </>
        )},
      ],
    },
    maths: { 
      title: 'Mathematics - Class 10',
      chapters: [
        { title: 'Real Numbers', content: (
          <>
            <p className="text-[var(--color-text)] mb-4">Understanding properties of real numbers, rational numbers, and irrational numbers.</p>
            <div className="content-highlight p-4 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <h4 className="text-[var(--color-primary)] font-semibold mb-3">Key Concepts:</h4>
              <ul className="space-y-2 text-[var(--color-text)]">
                <li>• Euclid's Division Lemma</li>
                <li>• Fundamental Theorem of Arithmetic</li>
                <li>• Irrational Numbers</li>
                <li>• Rational Numbers and Their Decimal Expansions</li>
              </ul>
            </div>
          </>
        )}
      ]
    },
    english: { 
      title: 'English - Class 10',
      chapters: [
        { title: 'Reading Comprehension', content: (
          <>
            <p className="text-[var(--color-text)] mb-4">Techniques and strategies for effective reading comprehension.</p>
            <div className="content-highlight p-4 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <h4 className="text-[var(--color-primary)] font-semibold mb-3">Key Concepts:</h4>
              <ul className="space-y-2 text-[var(--color-text)]">
                <li>• Identifying Main Ideas</li>
                <li>• Understanding Context</li>
                <li>• Inferring Meaning</li>
                <li>• Critical Analysis</li>
              </ul>
            </div>
          </>
        )}
      ]
    },
    social: { 
      title: 'Social Studies - Class 10',
      chapters: [
        { title: 'Nationalism in India', content: (
          <>
            <p className="text-[var(--color-text)] mb-4">The rise of nationalism during the Indian independence movement.</p>
            <div className="content-highlight p-4 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <h4 className="text-[var(--color-primary)] font-semibold mb-3">Key Concepts:</h4>
              <ul className="space-y-2 text-[var(--color-text)]">
                <li>• Non-Cooperation Movement</li>
                <li>• Civil Disobedience Movement</li>
                <li>• Quit India Movement</li>
                <li>• Role of Mahatma Gandhi</li>
              </ul>
            </div>
          </>
        )}
      ]
    },
    hindi: { 
      title: 'Hindi - Class 10',
      chapters: [
        { title: 'कबीर (Kabir)', content: (
          <>
            <p className="text-[var(--color-text)] mb-4">कबीर के दोहे और उनका महत्व।</p>
            <div className="content-highlight p-4 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
              <h4 className="text-[var(--color-primary)] font-semibold mb-3">मुख्य विषय:</h4>
              <ul className="space-y-2 text-[var(--color-text)]">
                <li>• कविता का सारांश</li>
                <li>• काव्य सौंदर्य</li>
                <li>• मुख्य विचार</li>
                <li>• प्रश्न-उत्तर</li>
              </ul>
            </div>
          </>
        )}
      ]
    },
  };

  return (
    <section className="relative min-h-screen py-20 bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden transition-all duration-1000">
      {/* Background Decorations */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/40 rounded-full opacity-40"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-[var(--color-primary)]/25 to-[var(--color-secondary)]/35 rounded-full opacity-40"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Core Subjects</h2>
          <p className="text-lg text-[var(--color-text)]/80 max-w-2xl mx-auto">
            Comprehensive chapter-wise resources for all subjects. Click on any chapter to view detailed content.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {Object.keys(subjects).map((subject) => (
              <SubjectTab
                key={subject}
                name={subject.charAt(0).toUpperCase() + subject.slice(1)}
                isActive={activeSubject === subject}
                onClick={() => setActiveSubject(subject)}
              />
            ))}
          </div>

          {Object.keys(subjects).map((subject) => (
            <motion.div
              key={subject}
              initial={false}
              animate={{ 
                height: activeSubject === subject ? 'auto' : 0,
                opacity: activeSubject === subject ? 1 : 0
              }}
              className={`overflow-hidden`}
            >
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                {subjects[subject].title}
              </h3>
              <ul className="space-y-4">
                {subjects[subject].chapters.map((chapter, index) => (
                  <ChapterItem key={index} title={chapter.title} content={chapter.content} />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSubjects;