import React, { useEffect, useRef, useState } from 'react';

const StatCard = ({ endValue, label }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000;
        const increment = endValue / (duration / 30);
        const timer = setInterval(() => {
          start += increment;
          if (start >= endValue) {
            setCount(endValue);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 30);
        observer.unobserve(ref.current);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endValue]);

  return (
    <div ref={ref} className="text-center p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:-translate-y-4 hover:scale-105 hover:bg-white/15 transition-all duration-500 border border-white/10">
      <div className="text-5xl font-bold text-accent mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">{count.toLocaleString()}+</div>
      <div className="text-lg uppercase tracking-wide text-white">{label}</div>
    </div>
  );
};

const Stats = () => {
  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.to('.parallax-bg', {
        y: 100,
        scrollTrigger: {
          trigger: '.parallax-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  const stats = [
    { endValue: 1000, label: "Students guided" },
    { endValue: 50, label: "Expert mentors available" },
    { endValue: 20, label: "Career paths covered" },
  ];

  return (
    <section className="parallax-section py-20 bg-accent text-white relative overflow-hidden transition-all duration-1000" data-aos="fade-up">
      <div className="parallax-bg absolute inset-0 bg-[linear-gradient(rgba(44,44,44,0.8),rgba(123,44,191,0.6)),url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center bg-fixed z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full">What we have done so far</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => <StatCard key={index} {...stat} />)}
        </div>
      </div>
    </section>
  );
};

export default Stats;