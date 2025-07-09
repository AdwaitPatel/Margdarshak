import React from 'react';

const FactsSection = () => {
  const facts = [
    {
      number: "50,000+",
      description: "Students guided successfully towards their dream careers across various fields and industries.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      number: "500+",
      description: "Expert mentors and career counselors available to provide personalized guidance and support.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      number: "200+",
      description: "Different career paths covered across all major streams and emerging industries.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 bg-slate-900/80">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          What We've Done So Far
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 border border-white/10 backdrop-blur-sm group"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-400/50 group-hover:border-blue-400 transition-all duration-300">
                <img 
                  src={fact.image} 
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Number */}
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {fact.number}
              </h3>
              
              {/* Description */}
              <p className="text-slate-300 leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;