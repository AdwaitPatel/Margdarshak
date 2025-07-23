
import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import SuccessStories from "../components/Home/SuccessStories";
import Mentorship from "../components/Home/Mentorship";
import Stats from "../components/Home/Stats";
import Streams from "../components/Home/Streams";
import FAQ from "../components/Home/FAQ";
import Footer from "../components/Common/Footer";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [floatExpanded, setFloatExpanded] = useState(false);
  useEffect(() => {
    if (floatExpanded) return; // Don't auto-animate if hovered
    const interval = setInterval(() => {
      setFloatExpanded(true);
      setTimeout(() => setFloatExpanded(false), 1200);
    }, 2000);
    return () => clearInterval(interval);
  }, [floatExpanded]);
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
  return (
    <div className="duration-1000">
      <Navbar />
      <HeroSection />
      <SuccessStories />
      <Mentorship />
      <Stats />
      <Streams />
      <FAQ />
      <Footer />
      {/* Floating 1:1 Margdarshak Button */}
      <a
        href="/Mentors"
        className={`fixed right-4 bottom-24 z-50 flex items-center gap-2 px-0 py-0 rounded-full shadow-xl font-semibold text-base md:text-lg transition-all duration-300
          bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)]
          dark:bg-[var(--color-accent)] dark:text-white dark:hover:bg-[var(--color-primary)]
          border-2 border-[var(--color-primary)] dark:border-[var(--color-accent)]
          animate-float animate-blink-glow
          ${floatExpanded ? 'w-auto px-5 py-3' : 'w-14 h-14 justify-center'}
        `}
        style={{
          boxShadow: '0 4px 24px 0 rgba(123,44,191,0.15)',
          writingMode: 'horizontal-tb',
          minWidth: 'auto',
          overflow: 'hidden',
          transitionProperty: 'width,background,padding',
        }}
        onMouseEnter={() => setFloatExpanded(true)}
        onMouseLeave={() => setFloatExpanded(false)}
        onTouchStart={() => setFloatExpanded(true)}
        onTouchEnd={() => setFloatExpanded(false)}
      >
        <span className="absolute -inset-1 rounded-full pointer-events-none animate-glow-effect" aria-hidden="true"></span>
        <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm-6 8v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
        </svg>
        <span className={`relative z-10 ml-2 transition-all duration-300 ${floatExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'} whitespace-nowrap`}>1:1 Margdarshak</span>
      </a>
      <style>{`
        @media (max-width: 640px) {
          .animate-float {
            right: 1rem;
            bottom: 5rem;
            font-size: 1rem;
            padding: 0.75rem 1.25rem;
          }
        }
        .animate-float {
          animation: floatBtn 2.5s ease-in-out infinite;
        }
        @keyframes floatBtn {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blink-glow {
          animation: blinkGlow 1.5s infinite alternate;
        }
        @keyframes blinkGlow {
          0% { filter: brightness(1) drop-shadow(0 0 0px var(--color-primary)); }
          50% { filter: brightness(1.2) drop-shadow(0 0 16px var(--color-primary)); }
          100% { filter: brightness(1) drop-shadow(0 0 0px var(--color-primary)); }
        }
        .dark .animate-blink-glow {
          animation: blinkGlowDark 1.5s infinite alternate;
        }
        @keyframes blinkGlowDark {
          0% { filter: brightness(1) drop-shadow(0 0 0px var(--color-accent)); }
          50% { filter: brightness(1.2) drop-shadow(0 0 18px var(--color-accent)); }
          100% { filter: brightness(1) drop-shadow(0 0 0px var(--color-accent)); }
        }
        .animate-glow-effect {
          z-index: 0;
          background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
          opacity: 0.4;
          filter: blur(8px);
          transition: background 0.3s;
        }
        .dark .animate-glow-effect {
          background: radial-gradient(circle, var(--color-accent) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};

export default Home;
