import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import React from "react";

const About = () => {
  // Bubble animation logic (copied from TermsAndConditions)
  const bubbleColors = [
    'var(--color-primary, #A259FF)',
    'var(--color-accent, #7B2CBF)',
    'var(--color-secondary, #9D4EDD)'
  ];
  const bubbles = Array.from({ length: 38 }).map((_, i) => {
    const size = Math.floor(Math.random() * 60) + 60;
    const top = Math.random() * 90;
    const left = Math.random() * 90;
    const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
    const duration = Math.floor(Math.random() * 20) + 18;
    const keyframe = `bubbleMove${(i % 8) + 1}`;
    const opacity = 0.08 + Math.random() * 0.12;
    return (
      <div
        key={i}
        className="bubble-animation absolute rounded-full pointer-events-none"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle at 50% 50%, ${color} 60%, transparent 100%)`,
          top: `${top}%`,
          left: `${left}%`,
          opacity,
          animation: `${keyframe} ${duration}s linear infinite`,
          zIndex: 30
        }}
      />
    );
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)] duration-1000">
      <Navbar />
      {/* Animated Bubbles */}
      <div className="absolute inset-0 w-full h-full z-30 pointer-events-none">
        {bubbles}
      </div>
      <style>{`
        @keyframes bubbleMove1 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(40vh) translateX(20vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove2 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30vh) translateX(-30vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove3 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20vh) translateX(25vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove4 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(30vh) translateX(-15vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove5 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25vh) translateX(10vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove6 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15vh) translateX(-20vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove7 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10vh) translateX(30vw); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes bubbleMove8 {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20vh) translateX(-10vw); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
      {/* Top Right Circle */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-purple-400/30 to-purple-600/40 rounded-full opacity-40"></div>
      {/* Bottom Left Circle */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-purple-300/25 to-purple-500/35 rounded-full opacity-40"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/15 rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-primary)]/15 rounded-full -z-10"></div>
      <section className="mt-15 py-16 px-4 sm:px-8 md:px-16 lg:px-32 max-w-4xl mx-auto animate-fade-in-up transition-all duration-1000 relative z-40">
        <div className="bg-white/80 dark:bg-[var(--color-bg)]/80 rounded-2xl shadow-2xl border border-[var(--color-primary)]/20 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4 text-center drop-shadow-lg">NaviQuest</h1>
          <h2 className="text-2xl font-semibold text-[var(--color-accent)] mb-6 text-center">The Process of Finding Your Path</h2>
          <p className="text-lg mb-8 text-center">(We guide students from Class 10 to 12 in discovering the right stream, exploring career options, and choosing a future path that suits their personality, passion, and potential.)</p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 mt-8">What Makes Us Different?</h3>
          <p className="mb-6 text-base">
            At NaviQuest, we offer a unique approach to career guidance for students from Class 10 to 12. For Class 10, we help students understand the differences between PCM, PCB, Commerce, and Arts, guiding them to discover which stream aligns with their strengths and future aspirations. Even before a stream is chosen, we encourage exploration of future careers. For students in Classes 11 and 12, our guidance is stream-specific, providing insights into fields like Engineering, Medical, Design, Law, CA, Civil Services, and more. We cover essential information about exams, skillsets, backup options, and career combinations, all crafted for real-world awareness rather than just textbook knowledge. After 12th, our 1-on-1 mentorship connects students with real mentors from diverse fields, offering personalized advice and helping them discover emerging careers such as UI/UX, AI, Digital Marketing, and Game Development.
          </p>
          <hr className="my-8 border-[var(--color-primary)]/20" />
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">What You’ll Learn on NaviQuest</h3>
          <p className="mb-6 text-base">
            NaviQuest covers a wide range of topics to ensure students are well-informed and confident in their choices. We explain the core aspects of Science, Commerce, and Arts streams, helping students understand what each stream offers and who it is best suited for. Our platform explores both traditional and modern career paths, provides detailed information about major entrance exams like JEE, NEET, CUET, CLAT, NIFT, and NDA, and offers tools and tips for self-discovery. Through real-life mentorship, we provide practical advice, roadmaps, and motivation to help students navigate their journey.
          </p>
          <hr className="my-8 border-[var(--color-primary)]/20" />
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Our Mission</h3>
          <p className="mb-6 text-base">
            Our mission is to make career clarity accessible to every student, especially during the most confusing years from 10th to 12th. We achieve this by providing real information, engaging visuals, honest mentorship, and modern tech tools, ensuring that every student can make informed decisions about their future.
          </p>
          <hr className="my-8 border-[var(--color-primary)]/20" />
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Fun Fact</h3>
          <p className="mb-8 text-base">
            Did you know? The average person changes their career 5-7 times in life. At NaviQuest, we aim to help you make the right choice from the very beginning, setting you on a path to long-term satisfaction and success.
          </p>
          <hr className="my-8 border-[var(--color-primary)]/20" />
          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">Vision</h3>
          <p className="mb-2 text-base">
            Our vision is to become India’s most student-trusted career guidance platform, helping millions of students find their path with confidence, clarity, and curiosity. We are dedicated to supporting students at every step, empowering them to pursue their passions and realize their full potential.
          </p>
          <div className="text-center mt-8">
            <span className="text-2xl font-bold text-[var(--color-accent)] tracking-widest">Marghdarshak</span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About; 