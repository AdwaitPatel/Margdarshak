import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MentorsProfile from './Home/MentorsProfile';

// Removed import for CinematicSlider and HeroSection as they are no longer used here.
// import CinematicSlider from './CinematicSlider.jsx';
// import HeroSection from './HeroSection.jsx';

const mentorsData = [
  {
    id: '1',
    name: 'Dr. Rajesh Singh',
    subject: 'Computer Science',
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
    subject: 'Biology',
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
    subject: 'Marketing and Business',
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

// Mentor Card Component
const MentorCard = ({ mentor, onViewProfile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-lg overflow-hidden shadow-lg bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-primary)]/20"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <motion.img
            src={mentor.imageUrl}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[var(--color-primary)]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/6B7280/ffffff?text=${mentor.name.split(' ').map(n => n[0]).join('')}`; }}
          />
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">
              {mentor.name}
            </h3>
            <p className="text-sm text-[var(--color-accent)]">
              {mentor.subject}
            </p>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-[var(--color-secondary)]/20">
          <p className="text-sm text-[var(--color-text)]">
            <span className="font-medium text-[var(--color-primary)]">Experience:</span> {mentor.experience}
          </p>
          <div className="flex justify-between items-center mt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-2 px-4 rounded-lg font-medium bg-[var(--color-primary)] text-white hover:bg-[var(--color-accent)] transition-colors"
              onClick={() => onViewProfile(mentor)}
            >
              View Profile
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors"
              onClick={() => onViewProfile(mentor)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// Main App Component
function App() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [filteredMentors, setFilteredMentors] = useState(mentorsData);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const results = mentorsData.filter(mentor =>
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMentors(results);
  }, [searchQuery]);

  const handleViewProfile = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleBackToList = () => {
    setSelectedMentor(null);
  };

  return (
    // Applied hero-bg and circular decorations to the main app container
    // Changed bg-gray-900 to var(--color-bg) for consistency with theme
    <div className="min-h-screen relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)] duration-1000">
      {/* Top Right Circle */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-purple-400/30 to-purple-600/40 rounded-full opacity-40"></div>

      {/* Bottom Left Circle */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-purple-300/25 to-purple-500/35 rounded-full opacity-40"></div>

      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-primary)]/15 rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-primary)]/15 rounded-full -z-10"></div>

      {selectedMentor ? (
        <MentorsProfile mentor={selectedMentor} onBackToList={handleBackToList} />
      ) : (
        <main className="flex-1 p-6 md:p-8 max-w-6xl mx-auto w-full min-h-screen relative z-10"> {/* Added relative z-10 to ensure content is above circles */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">Find Your Mentor</h2>
            <p className="text-[var(--color-text)] mt-2">Connect with experienced professionals in your field</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search mentors by name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-[var(--color-secondary)] bg-[var(--color-secondary)]/20 text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent placeholder-[var(--color-accent)]"
            />
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="rounded-lg overflow-hidden bg-[var(--color-bg)] p-6 border border-[var(--color-primary)]/20"
                >
                  <div className="animate-pulse">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)]/50 mr-4"></div>
                      <div>
                        <div className="h-4 w-32 bg-[var(--color-secondary)]/50 rounded mb-2"></div>
                        <div className="h-3 w-24 bg-[var(--color-secondary)]/50 rounded"></div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-[var(--color-secondary)]/30">
                      <div className="h-3 w-3/4 bg-[var(--color-secondary)]/50 rounded mb-4"></div>
                      <div className="flex justify-between">
                        <div className="h-8 w-24 bg-[var(--color-secondary)]/50 rounded"></div>
                        <div className="h-8 w-8 bg-[var(--color-secondary)]/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : filteredMentors.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-lg text-center bg-[var(--color-bg)] border border-[var(--color-primary)]/20"
            >
              <p className="text-[var(--color-text)]">No mentors found matching your search.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredMentors.map((mentor) => (
                  <MentorCard key={mentor.id} mentor={mentor} onViewProfile={handleViewProfile} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;