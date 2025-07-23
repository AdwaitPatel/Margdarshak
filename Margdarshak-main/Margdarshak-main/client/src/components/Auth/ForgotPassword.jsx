import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] opacity-50 animate-gradient"></div>
    
    {/* Animated circles */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)] blur-[80px] opacity-20 animate-blob1"></div>
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-secondary)] blur-[80px] opacity-20 animate-blob2"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-primary)] blur-[80px] opacity-10 animate-pulse"></div>
    
    {/* Cinematic lines */}
    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20 animate-pan-overlay"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(0,0,0,0.8)_100%)]"></div>
    
    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="particle-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={`particle absolute bg-white/30 rounded-full animate-float-${i % 5}`}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>

    {/* Main content card */}
    <div className="w-full max-w-md backdrop-blur-xl bg-black/30 border border-white/10 rounded-xl p-8 shadow-2xl relative z-10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.3)] hover:border-white/20 hover:translate-y-[-2px]">
      {children}
    </div>
  </div>
);

const Title = () => (
  <motion.h2 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-6 font-bold text-3xl bg-gradient-to-r from-white to-[var(--color-primary)] bg-clip-text text-transparent"
  >
    Reset Password
  </motion.h2>
);

const Confirmation = ({ message }) =>
  message && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="my-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 text-center"
    >
      {message.text && message.email ? (
        <p className="text-white/90">
          {message.text.before}
          <span className="text-[var(--color-primary)] font-semibold">
            {message.email}
          </span>
          {message.text.after}
        </p>
      ) : (
        <p className="text-white/90">{message}</p>
      )}
    </motion.div>
  );

const ForgotPasswordForm = ({ setConfirmationMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    if (email.trim() !== "") {
      setConfirmationMessage({
        text: {
          before: "A password reset link has been sent to ",
          after: ". Please check your inbox.",
        },
        email: email,
      });
    }
    event.target.reset();
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      onSubmit={handleSubmit} 
      className="flex flex-col gap-6"
    >
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your registered email"
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white text-base placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/10 transition-all duration-300"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] border-none rounded-lg text-white font-medium text-base hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/20"
      >
        Send Reset Link
      </motion.button>
    </motion.form>
  );
};

const LoginLink = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="mt-6 text-center text-sm text-white/70"
  >
    Back to{" "}
    <Link to="/login">
      <span className="text-white font-medium hover:text-[var(--color-primary)] transition-colors">
        Login
      </span>
    </Link>
  </motion.div>
);

const ForgotPassword = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  return (
    <Card>
      <Title />
      <Confirmation message={confirmationMessage} />
      <ForgotPasswordForm setConfirmationMessage={setConfirmationMessage} />
      <LoginLink />
    </Card>
  );
};

export default ForgotPassword;
