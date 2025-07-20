import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MentorsProfile from '../Home/MentorsProfile';  


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
      whileHover={{ scale: 1.02 }}
      className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-center gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-primary)]/30"
        >
          <img
            src={mentor.imageUrl}
            alt={mentor.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/6B7280/ffffff?text=${mentor.name.split(' ').map(n => n[0]).join('')}`; }}
          />
        </motion.div>
        
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-[var(--color-text)]">
            {mentor.name}
          </h3>
          <p className="text-[var(--color-primary)] text-sm">
            {mentor.subject}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-[var(--color-text)]/70 text-sm">
          <span className="text-[var(--color-primary)]">Experience:</span> {mentor.experience}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
          onClick={() => onViewProfile(mentor)}
        >
          View Profile
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
          onClick={() => onViewProfile(mentor)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
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
    <div className="min-h-screen bg-[var(--color-bg)] transition-all duration-1000 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/40 rounded-full opacity-40"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-[var(--color-primary)]/25 to-[var(--color-secondary)]/35 rounded-full opacity-40"></div>

      {selectedMentor ? (
        <MentorsProfile mentor={selectedMentor} onBackToList={handleBackToList} />
      ) : (
        <main className="flex-1 p-6 md:p-8 max-w-6xl mx-auto w-full min-h-screen relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Find Your Mentor</h2>
            <p className="text-[var(--color-text)] opacity-80">Connect with experienced professionals in your field</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-12 max-w-2xl mx-auto"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search mentors by name or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-[var(--color-primary)]/20 bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-all duration-300 placeholder-[var(--color-text)]/50"
            />
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="rounded-lg p-6 bg-[var(--color-bg)] shadow-lg"
                >
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-[var(--color-primary)]/20 mb-6"></div>
                    <div className="h-4 w-32 bg-[var(--color-primary)]/20 rounded mb-3"></div>
                    <div className="h-3 w-24 bg-[var(--color-primary)]/20 rounded mb-3"></div>
                    <div className="h-3 w-36 bg-[var(--color-primary)]/20 rounded mb-6"></div>
                    <div className="h-10 w-full bg-[var(--color-primary)]/20 rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : filteredMentors.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8"
            >
              <p className="text-[var(--color-text)] opacity-80 text-lg">No mentors found matching your search.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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