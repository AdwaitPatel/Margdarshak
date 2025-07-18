import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer
    className="bg-[var(--color-accent)] text-white py-12 transition-all duration-1000"
    data-aos="fade-up"
  >
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="text-center md:text-left">
        <Link to="/" className="text-3xl font-extrabold text-white">
          <span className="text-[var(--color-primary)] dark:text-[var(--color-secondary)]">
            Navi
          </span>
          Quest
        </Link>
        <p className="opacity-80 max-w-[300px] mx-auto md:mx-0 mt-5">
          From career guidance to personalized mentorship
        </p>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0 after:w-12 after:h-0.5 after:bg-primary">
          Resources
        </h3>
        <ul>
          {[
            {name: "Career Guidance", link: "/career-guidance"},
            {name: "Mentorship", link: "/mentorship"},
            {name: "Career Quiz", link: "/career-quiz"},
            {name: "User Strategy", link: "/user-strategy"},
            {name: "About", link: "/about"},
          ].map(({ name, link }) => (
            <li key={name} className="mb-[12.8px]">
              <Link
                to={link}
                className="hover:text-primary dark:hover:text-[var(--color-secondary)] hover:pl-1 transition-all"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0 after:w-12 after:h-0.5 after:bg-primary">
          Company
        </h3>
        <ul>
          {[
            {name: "About Margdarshak", link: "/"},
            {name: "Contact & Support", link: "/contact"},
            {name: "Success Stories", link: "/"},
            {name: "Privacy Policy", link: "/"},
            {name: "Terms of Service", link: "/"},
          ].map(({ name, link }) => (
            <li key={name} className="mb-[12.8px]">
              <Link
                to={link}
                className="hover:text-primary dark:hover:text-[var(--color-secondary)] hover:pl-1 transition-all"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 md:after:left-0 md:after:translate-x-0 after:w-12 after:h-0.5 after:bg-primary">
          Contact Us
        </h3>
        <p className="flex justify-center md:justify-start items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-primary text-white" />{" "}
          info@margdarshak.com
        </p>
        <p className="flex justify-center md:justify-start items-center mb-4 ">
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-primary text-white" /> +91
          98765432xx
        </p>
        <div className="flex justify-center items-center md:justify-start space-x-4 gap-1">
          <p>Follow us on:</p>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:-translate-y-1 transition-all"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:-translate-y-1 transition-all"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:-translate-y-1 transition-all"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-8 border-t border-white pt-4 mx-24">
      <p>© 2025 NaviQuest. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
