import React from "react";

const MentorCard = ({ image, name, expertise, experience, connectLink }) => (
  <div
    className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-lg text-white group duration-700 ease-in-out touch-none"
    data-aos="fade-up"
  >
    {/* Background Image */}
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1 sm:group-hover:scale-110 sm:group-hover:rotate-1"
      style={{ backgroundImage: `url(${image})` }}
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95 sm:via-black/20 sm:to-black/95 sm:group-hover:via-black/40 sm:group-hover:to-black/90 transition-all duration-700 ease-in-out" />

    {/* Content */}
    <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 transition-transform duration-700 ease-in-out">
      <div className="transform transition-transform duration-500 sm:translate-y-8 sm:group-hover:translate-y-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl sm:text-2xl font-bold">{name}</h3>
        </div>
        <p className="text-[var(--color-primary)] font-semibold mb-2 sm:mb-4 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100">
          {expertise}
        </p>
        <p className="text-gray-200 mb-4 sm:mb-8 sm:opacity-0 transition-opacity duration-300 sm:group-hover:opacity-100">
          {experience}
        </p>
        <a
          href={connectLink}
          className="inline-block py-2 px-4 sm:px-6 bg-[var(--color-primary)] text-white rounded-full transform sm:-translate-y-8 sm:opacity-0 transition-all duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 hover:bg-[var(--color-secondary)] hover:shadow-lg active:scale-95 touch-none"
        >
          Connect
        </a>
      </div>
    </div>
  </div>
);

const Mentorship = () => {
  const mentors = [
    {
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Dr. Rajesh Singh",
      expertise: "Specializes in engineering & technology",
      experience: "15+ years experience in career counseling",
      connectLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      name: "Dr. Priya Sharma",
      expertise: "Medical expert & life coach",
      experience: "Helps students explore healthcare & medical fields",
      connectLink: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      name: "Prof. Amit Kumar",
      expertise: "Business, finance & entrepreneurship mentor",
      experience: "Extensive industry experience",
      connectLink: "#",
    },
  ];

  return (
    <section
      className="min-h-screen dark:text-white py-8 sm:py-12 md:py-20 bg-bg transition-all duration-1000"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 relative after:content-[''] after:absolute after:bottom-[-15px] sm:after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full">
          Get 1:1 MargDarshan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
