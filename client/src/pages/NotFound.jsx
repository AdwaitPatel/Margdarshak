import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Auto redirect countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--color-bg)", color: "var(--color-text)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[80px] animate-pulse"
          style={{ background: "var(--color-primary)" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[60px] animate-pulse"
          style={{ background: "var(--color-secondary)" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-[100px] animate-pulse"
          style={{ background: "var(--color-accent)" }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full opacity-30 animate-float"
            style={{
              background: "var(--color-primary)",
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 Number with glow effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black mb-4 relative z-10 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div
            className="absolute inset-0 text-9xl md:text-[12rem] font-black blur-lg opacity-20"
            style={{ color: "var(--color-primary)" }}
          >
            404
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2
            className="text-2xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Oops! Page Not Found
          </h2>
          <p
            className="text-lg md:text-xl mb-2 opacity-80"
            style={{ color: "var(--color-text)" }}
          >
            The page you're looking for seems to have wandered off into the
            digital void.
          </p>
          <p
            className="text-base opacity-60"
            style={{ color: "var(--color-secondary)" }}
          >
            Don't worry, even the best explorers sometimes take a wrong turn!
          </p>
        </div>

        {/* Countdown timer */}
        <div
          className="mb-8 p-4 rounded-xl backdrop-blur-sm border border-opacity-20 shadow-lg"
          style={{
            background: "rgba(var(--color-primary-rgb), 0.1)",
            borderColor: "var(--color-primary)",
          }}
        >
          <p
            className="text-sm mb-2 opacity-80"
            style={{ color: "var(--color-text)" }}
          >
            Redirecting to home in
          </p>
          <div
            className="text-3xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            {countdown}s
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group relative px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-bg)",
              boxShadow: "0 4px 20px rgba(var(--color-primary-rgb), 0.3)",
            }}
          >
            <span className="relative z-10">Take Me Home</span>
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
              style={{ background: "var(--color-primary)" }}
            ></div>
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="group relative px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 border-2"
            style={{
              background: "transparent",
              color: "var(--color-primary)",
              borderColor: "var(--color-primary)",
            }}
          >
            <span className="relative z-10">↶ Go Back</span>
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ background: "var(--color-primary)" }}
            ></div>
          </button>
        </div>

        {/* Additional helpful links */}
        <div
          className="mt-12 pt-8 border-t border-opacity-20"
          style={{ borderColor: "var(--color-secondary)" }}
        >
          <p
            className="text-sm mb-4 opacity-60"
            style={{ color: "var(--color-text)" }}
          >
            Looking for something specific? Try these popular pages:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              to="/career-quiz"
              className="hover:underline transition-colors duration-300"
              style={{ color: "var(--color-secondary)" }}
            >
              Career Quiz
            </Link>
            <Link
              to="/Mentors"
              className="hover:underline transition-colors duration-300"
              style={{ color: "var(--color-secondary)" }}
            >
              Find Mentors
            </Link>
            <Link
              to="/contact"
              className="hover:underline transition-colors duration-300"
              style={{ color: "var(--color-secondary)" }}
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="hover:underline transition-colors duration-300"
              style={{ color: "var(--color-secondary)" }}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .particle {
            width: 3px !important;
            height: 3px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
