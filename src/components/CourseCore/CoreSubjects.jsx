import React, { useState } from 'react';

const ChapterItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="chapter-item">
      <button className="chapter-btn w-full text-left px-5 py-3.5 bg-[var(--color-bg)] border-l-4 border-[var(--color-primary)] hover:bg-[#e8e0f5] dark:bg-[#3a3a3a] dark:hover:bg-[#4a4a4a] dark:border-[var(--accent-dark)] flex justify-between items-center rounded-md transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`chapter-content p-0 max-h-0 overflow-hidden transition-all duration-300 ${isOpen ? 'p-5 max-h-[1000px] border-l-4 border-[var(--color-primary)] bg-[#fcfaff] dark:bg-[#4a4a4a] dark:border-[var(--accent-dark)]' : ''}`}>
        {content}
      </div>
    </li>
  );
};

const CoreSubjects = () => {
  const [activeSubject, setActiveSubject] = useState('science');

  const subjects = {
    science: {
      title: 'Science - Class 10',
      chapters: [
        { title: 'Light - Reflection and Refraction', content: (
          <>
            <p>Understanding how light behaves when it reflects off surfaces or passes through different mediums.</p>
            <div className="content-highlight mt-4 p-3.5 bg-[#f0e5ff] rounded-md dark:bg-[#4a4a4a]">
              <h4 className="text-[var(--color-accent)] mb-2.5">Key Concepts:</h4>
              <ul className="pl-5 mb-3.5">
                <li>Laws of Reflection</li>
                <li>Spherical Mirrors (Concave & Convex)</li>
                <li>Refraction through Lenses</li>
                <li>Lens Formula and Magnification</li>
              </ul>
              <p><strong className="text-[var(--color-accent)]">Important Formulas:</strong> 1/f = 1/v - 1/u (Mirror Formula), m = h'/h = -v/u</p>
            </div>
          </>
        )},
        { title: 'Human Eye and Colorful World', content: (
          <>
            <p>Exploring the human eye structure and various optical phenomena.</p>
            <div className="content-highlight mt-4 p-3.5 bg-[#f0e5ff] rounded-md dark:bg-[#4a4a4a]">
              <h4 className="text-[var(--color-accent)] mb-2.5">Key Concepts:</h4>
              <ul className="pl-5 mb-3.5">
                <li>Structure of Human Eye</li>
                <li>Defects of Vision</li>
                <li>Atmospheric Refraction</li>
                <li>Scattering of Light</li>
              </ul>
            </div>
          </>
        )},
        { title: 'Electricity', content: (
          <>
            <p>Understanding electric current, potential difference, and related concepts.</p>
            <div className="content-highlight mt-4 p-3.5 bg-[#f0e5ff] rounded-md dark:bg-[#4a4a4a]">
              <h4 className="text-[var(--color-accent)] mb-2.5">Key Concepts:</h4>
              <ul className="pl-5 mb-3.5">
                <li>Electric Current and Circuit</li>
                <li>Ohm's Law</li>
                <li>Resistance in Series and Parallel</li>
                <li>Heating Effect of Current</li>
              </ul>
              <p><strong className="text-[var(--color-accent)]">Important Formulas:</strong> V = IR, P = VI, H = I²Rt</p>
            </div>
          </>
        )},
      ],
    },
    maths: { title: 'Mathematics - Class 10', chapters: [{ title: 'Real Numbers', content: (
      <>
        <p>Understanding properties of real numbers, rational numbers, and irrational numbers.</p>
        <div className="content-highlight mt-4 p-3.5 bg-[#f0e5ff] rounded-md dark:bg-[#4a4a4a]">
          <h4 className="text-[var(--color-accent)] mb-2.5">Key Concepts:</h4>
          <ul className="pl-5 mb-3.5">
            <li>Euclid's Division Lemma</li>
            <li>Fundamental Theorem of Arithmetic</li>
            <li>Irrational Numbers</li>
            <li>Rational Numbers and Their Decimal Expansions</li>
          </ul>
        </div>
      </>
    )} ]},
    english: { title: 'English - Class 10', chapters: [{ title: 'Reading Comprehension', content: (
      <>
        <p>Techniques and strategies for effective reading comprehension.</p>
        <div className="content-highlight mt-4 p-3.5 bg-[#f0e5ff] rounded-md dark:bg-[#4a4a4a]">
          <h4 className="text-[var(--color-accent)] mb-2.5">Key Concepts:</h4>
          <ul className="pl-5 mb-3.5">
            <li>Identifying Main Ideas</li>
            <li>Understanding Context</li>
            <li>Inferring Meaning</li>
            <li>Critical Analysis</li>
          </ul>
        </div>
      </>
    )} ]},
    social: { title: 'Social Studies - Class 10', chapters: [{ title: 'Nationalism in India', content: (
      <>
        <p>The rise of nationalism during the Indian independence movement.</p>
        <div className="content-highlight mt-4 p-3.5 bg-[#f0e5ff] rounded-md dark:bg-[#4a4a4a]">
          <h4 className="text-[var(--color-accent)] mb-2.5">Key Concepts:</h4>
          <ul className="pl-5 mb-3.5">
            <li>Non-Cooperation Movement</li>
            <li>Civil Disobedience Movement</li>
            <li>Quit India Movement</li>
            <li>Role of Mahatma Gandhi</li>
          </ul>
        </div>
      </>
    )} ]},
    hindi: { title: 'Hindi - Class 10', chapters: [{ title: 'कबीर (Kabir)', content: (
      <>
        <p>कबीर के दोहे और उनका महत्व।</p>
        <div className="content-highlight mt-4 p-3.5 bg-[#f0e5ff] rounded-md dark:bg-[#4a4a4a]">
          <h4 className="text-[var(--color-accent)] mb-2.5">मुख्य विषय:</h4>
          <ul className="pl-5 mb-3.5">
            <li>कविता का सारांश</li>
            <li>काव्य सौंदर्य</li>
            <li>मुख्य विचार</li>
            <li>प्रश्न-उत्तर</li>
          </ul>
        </div>
      </>
    )} ]},
  };

  return (
    <section id="core-subject" className="core-subjects py-10 md:py-20 bg-[var(--color-bg)] dark:text-white">
      <div className="container mx-auto px-5">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-8 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[var(--color-accent)] after:rounded-full">Core Subjects</h2>
        <div className="study-materials-container max-w-[1200px] mx-auto px-5">
          <p className="mb-8 text-lg">Comprehensive chapter-wise resources for all subjects. Click on any chapter to view detailed content.</p>
          <div className="subject-tabs flex gap-2.5 md:gap-2.5 mb-8 overflow-x-auto pb-2.5">
            {Object.keys(subjects).map((subject) => (
              <div
                key={subject}
                className={`subject-tab px-5 py-3 bg-[#f0f0f0] dark:bg-[#3a3a3a] rounded-[30px] cursor-pointer font-medium whitespace-nowrap transition-all duration-300 ${activeSubject === subject ? 'bg-[var(--color-accent)] text-white' : 'text-[var(--dark-1)] dark:text-[#f0f0f0]'}`}
                onClick={() => setActiveSubject(subject)}
              >
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </div>
            ))}
          </div>
          {Object.keys(subjects).map((subject) => (
            <div key={subject} className={`chapters-container ${activeSubject === subject ? 'active' : ''}`} id={subject}>
              <h3 className="class-heading text-[var(--color-accent)] dark:text-[var(--accent-dark)] mt-6 mb-4 pb-1.25 border-b-2 border-[var(--color-accent)] dark:border-[var(--accent-dark)] inline-block">
                {subjects[subject].title}
              </h3>
              <ul className="chapter-list">
                {subjects[subject].chapters.map((chapter, index) => (
                  <ChapterItem key={index} title={chapter.title} content={chapter.content} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSubjects;