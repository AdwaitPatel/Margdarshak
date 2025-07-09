import "../../index.css";
import { Link } from "react-router-dom";

const Card = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-primary-bg)] to-[var(--color-secondary-bg)] text-[var(--color-primary-text)]">
    <div className="w-full max-w-md bg-transparent md:bg-[var(--color-secondary-bg)] border-0 md:border md:border-[var(--color-border-light)] rounded-xl p-8 md:shadow-xl">
      {children}
    </div>
  </div>
);

const Title = () => (
  <h2 className="text-center mb-6 font-bold text-2xl bg-gradient-to-r from-white to-[var(--color-highlight)] bg-clip-text text-transparent">
    Login to Margdarshak
  </h2>
);

const GoogleButton = () => (
  <button className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-card-bg)] backdrop-blur-sm border border-[var(--color-border-medium)] rounded-lg text-[var(--color-primary-text)] text-base hover:bg-[var(--color-accent-bg)] transition-colors">
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google icon"
      className="w-5 h-5"
    />
    Continue with Google
  </button>
);

const Divider = () => (
  <div className="relative text-center my-8 text-[var(--color-secondary-text)]">
    or
    <div className="absolute left-0 top-1/2 w-[42%] h-px bg-[var(--color-border-medium)]"></div>
    <div className="absolute right-0 top-1/2 w-[42%] h-px bg-[var(--color-border-medium)]"></div>
  </div>
);

const LoginForm = () => (
  <form action="/login" method="POST" className="flex flex-col gap-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="w-full p-3 bg-[var(--color-card-bg)] border border-[var(--color-border-light)] rounded-lg text-[var(--color-primary-text)] text-base placeholder-[var(--color-secondary-text)] focus:outline-none focus:border-[var(--color-highlight)] focus:ring-4 focus:ring-[var(--color-highlight)]/15"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      required
      className="w-full p-3 bg-[var(--color-card-bg)] border border-[var(--color-border-light)] rounded-lg text-[var(--color-primary-text)] text-base placeholder-[var(--color-secondary-text)] focus:outline-none focus:border-[var(--color-highlight)] focus:ring-4 focus:ring-[var(--color-highlight)]/15"
    />
    <div className="flex justify-between items-center text-sm">
      <label className="flex items-center gap-1 cursor-pointer">
        <input
          type="checkbox"
          name="remember"
          className="text-[var(--color-highlight)]"
        />
        Remember me
      </label>
      <Link to="/forgot-password">
        <span className="text-[var(--color-highlight)] font-medium hover:underline">
          Forgot Password?
        </span>
      </Link>
    </div>
    <button
      type="submit"
      className="w-full py-3 bg-[var(--color-highlight)] border-none rounded-lg text-white font-medium text-base hover:bg-[var(--color-highlight-alt)] transition-colors"
    >
      Login
    </button>
  </form>
);

const LoginLink = () => (
  <div className="mt-6 text-center text-sm text-[var(--color-secondary-text)]">
    Don't have an account?{" "}
    <Link to="/signup">
      <span className="text-[var(--color-highlight)] font-medium hover:underline">
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
