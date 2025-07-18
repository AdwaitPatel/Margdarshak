import { Link } from "react-router-dom";
import { useState } from "react";

const Card = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-text)]">
    <div className="w-full max-w-md bg-transparent md:bg-[var(--color-bg)] border-0 md:border md:border-[var(--color-accent)] rounded-xl p-8 md:shadow-xl">
      {children}
    </div>
  </div>
);

const Title = () => (
  <h2 className="text-center mb-6 font-bold text-2xl bg-gradient-to-r from-[var(--color-text)] to-[var(--color-primary)] bg-clip-text text-transparent">
    SignUp to Margdarshak
  </h2>
);

const GoogleButton = () => (
  <button className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-bg)] backdrop-blur-sm border border-[var(--color-accent)] rounded-lg text-[var(--color-text)] text-base hover:bg-[var(--color-secondary)] hover:text-white transition-colors">
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google icon"
      className="w-5 h-5"
    />
    Signup with Google
  </button>
);

const Divider = () => (
  <div className="relative text-center my-8 text-[var(--color-text)] opacity-70">
    or
    <div className="absolute left-0 top-1/2 w-[42%] h-px bg-[var(--color-accent)]"></div>
    <div className="absolute right-0 top-1/2 w-[42%] h-px bg-[var(--color-accent)]"></div>
  </div>
);

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-3 bg-[var(--color-bg)] border border-[var(--color-accent)] rounded-lg text-[var(--color-text)] text-base placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/15"
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          required
          className="w-full p-3 pr-12 bg-[var(--color-bg)] border border-[var(--color-accent)] rounded-lg text-[var(--color-text)] text-base placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/15"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text)] opacity-70 hover:opacity-100 transition-opacity"
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
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirm-password"
          placeholder="Confirm Password"
          required
          className="w-full p-3 pr-12 bg-[var(--color-bg)] border border-[var(--color-accent)] rounded-lg text-[var(--color-text)] text-base placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/15"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text)] opacity-70 hover:opacity-100 transition-opacity"
        >
          {showConfirmPassword ? (
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
      <button
        type="submit"
        className="w-full py-3 bg-[var(--color-primary)] border-none rounded-lg text-white font-medium text-base hover:bg-[var(--color-secondary)] transition-colors"
      >
        SignUp
      </button>
    </form>
  );
};

const LoginLink = () => (
  <div className="mt-6 text-center text-sm text-[var(--color-text)] opacity-70">
    Already have an account?{" "}
    <Link to="/login">
      <span className="text-[var(--color-primary)] font-medium hover:underline">
        Login
      </span>
    </Link>
  </div>
);

const Signup = () => (
  <Card>
    <Title />
    <GoogleButton />
    <Divider />
    <SignupForm />
    <LoginLink />
  </Card>
);

export default Signup;
