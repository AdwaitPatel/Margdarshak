import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, User, MessageSquare, Send, Moon, Sun } from "lucide-react";
import Navbar from "../Common/Navbar";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)] font-poppins relative overflow-hidden transition-all duration-1000">
        {/* Animated Background */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] opacity-20 animate-gradient bg-gradient-size"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 animate-pan-overlay"></div>
          
          {/* Animated Orbs */}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-[var(--color-primary)] opacity-20 blur-[100px] animate-blob1"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-[var(--color-secondary)] opacity-20 blur-[100px] animate-blob2"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 pt-20">
          {/* Hero Section */}
          <section className="px-4 sm:px-6 py-16">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-sm font-medium mb-4 text-[var(--color-text)]/70 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                GET IN TOUCH
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[var(--color-text)] animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                We've been waiting
                <br />
                <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text">
                  for you.
                </span>
              </h1>
              <p className="text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                We want to hear from you. Let us know how we can help you on your career journey.
              </p>
            </div>

            {/* Contact Form & Info Grid */}
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="relative group animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-[var(--color-bg)]/30 backdrop-blur-xl rounded-2xl p-8 border border-[var(--color-text)]/10">
                  <h2 className="text-2xl font-bold text-[var(--color-text)] mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-text)]/40 transition-colors duration-300 group-focus-within:text-[var(--color-primary)]" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--color-bg)]/5 border border-[var(--color-text)]/10 text-[var(--color-text)] placeholder-[var(--color-text)]/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--color-text)]/40 transition-colors duration-300 group-focus-within:text-[var(--color-primary)]" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--color-bg)]/5 border border-[var(--color-text)]/10 text-[var(--color-text)] placeholder-[var(--color-text)]/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all duration-300"
                        required
                      />
                    </div>

                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[var(--color-text)]/40 transition-colors duration-300 group-focus-within:text-[var(--color-primary)]" />
                      <textarea
                        name="message"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--color-bg)]/5 border border-[var(--color-text)]/10 text-[var(--color-text)] placeholder-[var(--color-text)]/40 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 transition-all duration-300 resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+1 (555) 123-4567",
                    delay: 200,
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    value: "hello@margdarshak.com",
                    delay: 400,
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Mumbai, India",
                    delay: 600,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{ animationDelay: `${item.delay}ms` }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-[var(--color-bg)]/30 backdrop-blur-xl rounded-2xl p-6 border border-[var(--color-text)]/10 flex items-center gap-6 transform hover:scale-[1.02] transition-all duration-300">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[var(--color-text)]/70 text-sm mb-1">{item.title}</h3>
                        <p className="text-[var(--color-text)] font-semibold text-lg">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
