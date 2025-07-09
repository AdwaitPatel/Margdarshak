import React from 'react';

const MentorshipSection = () => {
  const mentors = [
    {
      name: "Dr. Rajesh Singh",
      description: "Career Counselor with 15+ years of experience in guiding students towards their ideal career paths. Specializes in engineering and technology careers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Dr. Priya Sharma",
      description: "Medical career expert and life coach. Helps students navigate healthcare and medical career options with personalized guidance and support.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      name: "Prof. Amit Kumar",
      description: "Business and commerce mentor with extensive industry experience. Guides students in finance, business, and entrepreneurship careers.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Get 1:1 MargDarshan
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/10 backdrop-blur-sm group"
            >
              {/* Mentor Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-blue-600 p-1">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Mentor Details */}
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                {mentor.name}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {mentor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;