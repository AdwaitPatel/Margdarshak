import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    // Add your form submission logic here
    alert("Message sent successfully!");
  };

  return (
    <main className="pt-20 sm:pt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <p
              className="text-sm font-medium mb-4 transition-all duration-700"
              style={{
                color: "#b0bec5",
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: "200ms",
              }}
            >
              GET IN TOUCH
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700"
              style={{
                color: "#e0e6ed",
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: "400ms",
              }}
            >
              We've been waiting
              <br />
              for you.
            </h1>
            <p
              className="text-base sm:text-lg mb-8 sm:mb-16 px-4 transition-all duration-700"
              style={{
                color: "#b0bec5",
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: "600ms",
              }}
            >
              We want to hear from you. Let us know how we can help you on your
              career journey.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-lg mx-auto px-4">
            <div className="p-6 sm:p-8 md:p-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center text-white">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300 group-focus-within:text-blue-400 z-10" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-lg text-base outline-none transition-all duration-300 bg-slate-800 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-400/20"
                    required
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-all duration-300 group-focus-within:text-blue-400 z-10" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-lg text-base outline-none transition-all duration-300 bg-slate-800 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-400/20"
                    required
                  />
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 transition-all duration-300 group-focus-within:text-blue-400 z-10" />
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-lg text-base outline-none transition-all duration-300 bg-slate-800 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-400/20 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 rounded-lg font-medium text-base transition-all duration-300 hover:scale-105 active:scale-95 bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "#b0bec5",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: "1600ms",
              }}
            >
              CONTACT INFORMATION
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
              style={{
                color: "#e0e6ed",
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: "1800ms",
              }}
            >
              Get in touch with us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                IconComponent: Phone,
                text: "+1 (555) 123-4567",
                delay: "2000ms",
              },
              {
                IconComponent: Mail,
                text: "hello@margdarshak.com",
                delay: "2200ms",
              },
              {
                IconComponent: MapPin,
                text: "Mumbai, India",
                delay: "2400ms",
              },
            ].map((item, index) => {
              const { IconComponent, text, delay } = item;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-2xl text-center transition-all duration-700 hover:scale-105 hover:-translate-y-2 group cursor-pointer"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100px)",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: delay,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor =
                      "rgba(255, 255, 255, 0.08)";
                    e.target.style.borderColor = "rgba(100, 181, 246, 0.3)";
                    e.target.style.boxShadow =
                      "0 20px 40px rgba(100, 181, 246, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      "rgba(255, 255, 255, 0.05)";
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 bg-slate-800">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400" />
                  </div>
                  <p
                    className="text-base sm:text-lg font-semibold transition-all duration-300 group-hover:scale-105"
                    style={{ color: "#e0e6ed" }}
                  >
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
