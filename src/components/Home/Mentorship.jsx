import React from "react";

const MentorCard = ({ image, name, expertise, experience, connectLink }) => (
  <div
    className="bg-bg rounded-lg p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all relative overflow-hidden group duration-1000 dark:shadow-gray-800 flex flex-col h-[370px] gap-2.5 md:h-full"
    data-aos="fade-up"
  >
    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity z-0"></div>
    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/30">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 relative z-10">
      {name}
    </h3>
    <p className="text-text opacity-80 mb-2 text-sm sm:text-base relative z-10">
      {expertise}
    </p>
    <p className="text-text opacity-80 mb-4 text-sm sm:text-base relative z-10 flex-grow">
      {experience}
    </p>
    <a
      href={connectLink}
      className="mt-auto cursor-pointer px-4 py-2 bg-primary text-white rounded-full hover:bg-accent transition-colors relative z-10 w-25 mx-auto"
    >
      Connect
    </a>
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
      className="min-h-screen dark:text-white py-12 sm:py-20 bg-bg transition-all duration-1000"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 relative after:content-[''] after:absolute after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-primary after:rounded-full">
          Get 1:1 MargDarshan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
