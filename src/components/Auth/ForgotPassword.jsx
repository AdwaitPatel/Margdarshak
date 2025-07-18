import { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--color-primary)] text-[var(--color-text)] p-4">
    <div className="w-full max-w-[550px] bg-transparent md:bg-[var(--color-bg)] border-0 md:border md:border-[var(--color-accent)] rounded-[1.2rem] p-8 sm:p-12 shadow-2xl">
      {children}
    </div>
  </div>
);

const Title = () => (
  <h2 className="text-center mb-10 font-semibold text-2xl">Forgot Password</h2>
);

const Confirmation = ({ message }) =>
  message && (
    <div className="my-8 bg-[var(--color-bg)] border border-[var(--color-accent)] rounded-[0.7rem] p-5 text-light text-center font-medium text-base">
      {message.text && message.email ? (
        <>
          {message.text.before}
          <span className="text-[var(--color-primary)] font-semibold">
            {message.email}
          </span>
          {message.text.after}
        </>
      ) : (
        message
      )}
    </div>
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your registered email"
        required
        className="w-full p-3.5 bg-[var(--color-bg)] border border-[var(--color-accent)] rounded-[0.7rem] text-[var(--color-text)] text-[1.1rem] placeholder-gray-500 placeholder:text-base focus:outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/20"
      />
      <button
        type="submit"
        className="w-full py-3.5 bg-[var(--color-primary)] border-none rounded-[0.7rem] text-white font-semibold text-[1.05rem] hover:bg-[var(--color-secondary)] transition-colors"
      >
        Send Reset Link
      </button>
    </form>
  );
};

const LoginLink = () => (
  <div className="mt-8 text-center text-base text-[var(--color-text)] opacity-70">
    Back to{" "}
    <Link to="/login">
      <span className="text-[var(--color-primary)] font-medium hover:underline">
        Login
      </span>
    </Link>
  </div>
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
