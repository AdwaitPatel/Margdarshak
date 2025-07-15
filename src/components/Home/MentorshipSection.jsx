import React, { useState } from 'react';
// Import the MentorProfile component
import MentorsProfile from './MentorsProfile'; // Adjust path if MentorProfile.js is elsewhere

// Updated Mock Data for Mentors with direct image URLs
// This data is consistent with what MentorProfile expects
const detailedMentorsData = [
  {
    id: '1',
    name: 'Dr. Rajesh Singh',
    subject: 'Computer Science', // Added subject for consistency
    experience: '15 years+',
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    profileImageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: 500,
    availableTimes: [
      'Monday: 10:00 AM - 12:00 PM',
      'Wednesday: 02:00 PM - 04:00 PM',
      'Friday: 11:00 AM - 01:00 PM',
    ],
    bio: 'Dr. Rajesh Singh is a seasoned professional in Computer Science with extensive experience in software development and artificial intelligence. He has mentored numerous students and professionals, guiding them through complex technical challenges and career paths.',
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    subject: 'Biology', // Added subject
    experience: '12 years',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    profileImageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 600,
    availableTimes: [
      'Tuesday: 09:00 AM - 11:00 AM',
      'Thursday: 03:00 PM - 05:00 PM',
    ],
    bio: 'Dr. Priya Sharma specializes in molecular biology and genetics. Her research has been published in several prestigious journals, and she is passionate about educating the next generation of scientists.',
  },
  {
    id: '3',
    name: 'Prof. Amit Kumar',
    subject: 'Marketing and Business', // Added subject
    experience: '10 years',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    profileImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 450,
    availableTimes: [
      'Monday: 01:00 PM - 03:00 PM',
      'Wednesday: 10:00 AM - 12:00 PM',
      'Friday: 09:00 AM - 11:00 AM',
    ],
    bio: 'Prof. Amit Kumar is an expert in digital marketing strategies and business development. He provides practical insights and real-world case studies to help aspiring entrepreneurs and marketing professionals.',
  },
   {
    id: '4',
    name: 'Prof. Saurav Kumar',
    subject: 'Arts',
    experience: '18 years',
    imageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    profileImageUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
    price: 550,
    availableTimes: [
      'Tuesday: 10:00 AM - 12:00 PM',
      'Thursday: 01:00 PM - 03:00 PM',
    ],
    bio: 'Prof. Saurav Kumar is a renowned artist and art historian. With nearly two decades of experience, he offers unique perspectives on creative expression and the evolution of art forms.',
  },
];


const MentorshipSection = () => {
  // Use state to manage which mentor's profile is open
  const [selectedMentor, setSelectedMentor] = useState(null);

  // Function to handle clicking on a mentor card
  const handleCardClick = (mentor) => {
    setSelectedMentor(mentor);
  };

  // Function to go back to the mentor list
  const handleBackToList = () => {
    setSelectedMentor(null);
  };

  // If a mentor is selected, render their profile
  if (selectedMentor) {
    return <MentorsProfile mentor={selectedMentor} onBackToList={handleBackToList} />;
  }

  // Otherwise, render the list of mentor cards
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Get 1:1 MargDarshan
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedMentorsData.map((mentor) => ( // Use detailedMentorsData here
            <div
              key={mentor.id} // Use mentor.id as key for better practice
              className="bg-white/5 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/10 backdrop-blur-sm group cursor-pointer"
              onClick={() => handleCardClick(mentor)} // Add onClick to the entire card
            >
              {/* Mentor Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-blue-600 p-1">
                  <img
                    src={mentor.imageUrl} // Use imageUrl
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
                {mentor.bio} {/* Use bio here for more detailed description */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;