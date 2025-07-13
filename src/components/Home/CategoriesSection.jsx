import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const categories = [
    {
      title: "Maths",
      stream: "PCM",
      description: "Engineering, Technology, Research, Data Science, and more mathematical career paths.",
      bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Bio",
      stream: "PCB",
      description: "Medicine, Healthcare, Biotechnology, Research, and life science careers.",
      bgImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Commerce",
      stream: "Commerce",
      description: "Business, Finance, Accounting, Marketing, and commercial career opportunities.",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Arts",
      stream: "Arts",
      description: "Creative fields, Literature, Design, Media, and artistic career paths.",
      bgImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Choose Your Stream
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white/5 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:bg-white/10 border border-white/10 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundImage: `url(${category.bgImage})` }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <Link to={`/careers/${category.stream}`} className="px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-400 hover:text-white transition-all duration-300 hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-blue-400/25">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;