import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
            className={`particle absolute bg-white/30 rounded-full animate-float-${
              i % 5
            }`}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
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
  <h2 className="text-center mb-6 font-bold text-3xl bg-gradient-to-r from-white to-[var(--color-primary)] bg-clip-text text-transparent">
    Login to Margdarshak
  </h2>
);

const GoogleButton = () => (
  <button className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white text-base hover:bg-white/20 transition-all duration-300 shadow-lg">
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google icon"
      className="w-5 h-5"
    />
    Continue with Google
  </button>
);

const Divider = () => (
  <div className="relative text-center my-8 text-white/70">
    or
    <div className="absolute left-0 top-1/2 w-[42%] h-px bg-white/20"></div>
    <div className="absolute right-0 top-1/2 w-[42%] h-px bg-white/20"></div>
  </div>
);

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // TODO : Here we'll validate credentials with our backend

    if (email && password) {
      navigate("/student/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white text-base placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/10 transition-all duration-300"
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          required
          className="w-full p-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white text-base placeholder-white/50 focus:outline-none focus:border-white/40 focus:ring-4 focus:ring-white/10 transition-all duration-300"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-opacity"
        >
          {showPassword ? (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center gap-1 cursor-pointer text-white/70 hover:text-white transition-colors">
          <input
            type="checkbox"
            name="remember"
            className="rounded border-white/20 bg-white/10 text-[var(--color-primary)]"
          />
          Remember me
        </label>
        <Link to="/forgot-password">
          <span className="text-white/70 font-medium hover:text-white transition-colors">
            Forgot Password?
          </span>
        </Link>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] border-none rounded-lg text-white font-medium text-base hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/20"
      >
        Login
      </button>
    </form>
  );
};

const LoginLink = () => (
  <div className="mt-6 text-center text-sm text-white/70">
    Don't have an account?{" "}
    <Link to="/signup">
      <span className="text-white font-medium hover:text-[var(--color-primary)] transition-colors">
        Sign Up
      </span>
    </Link>
  </div>
);

const Login = () => (
  <Card>
    <Title />
    <GoogleButton />
    <Divider />
    <LoginForm />
    <LoginLink />
  </Card>
);

export default Login;
