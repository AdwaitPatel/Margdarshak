import React from 'react';
import { motion } from 'framer-motion';

const MentorProfile = ({ mentor, onBackToList }) => {
  if (!mentor) {
    return (
      <div className="flex justify-center items-center h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <p>No mentor selected.</p>
        <button
          onClick={onBackToList}
          className="ml-4 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
        >
          Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] py-10 px-4 sm:px-6 lg:px-8 transition-all duration-1000 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-[var(--color-primary)]/30 to-[var(--color-secondary)]/40 rounded-full opacity-40"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-tr from-[var(--color-primary)]/25 to-[var(--color-secondary)]/35 rounded-full opacity-40"></div>
      
      <div className="container mx-auto max-w-4xl relative">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBackToList}
          className="mb-8 flex items-center text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Mentors
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--color-bg)] rounded-xl p-8 md:p-12 relative overflow-hidden group transition-all duration-1000 before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-[var(--color-primary)]/20 before:transition-all before:duration-300 hover:before:border-[var(--color-primary)] hover:before:shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)] dark:hover:before:shadow-[0_0_15px_rgba(var(--color-primary-dark-rgb),0.5)]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-primary)] opacity-20"></div>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Mentor Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[var(--color-primary)]/30 relative group-hover:border-[var(--color-primary)] transition-all duration-300">
                <img
                  src={mentor.profileImageUrl || mentor.imageUrl}
                  alt={mentor.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/200x200/6B7280/ffffff?text=${mentor.name.split(' ').map(n => n[0]).join('')}`; }}
                />
              </div>
            </motion.div>

            {/* Mentor Details */}
            <div className="flex-grow text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-[var(--color-primary)] mb-3"
              >
                {mentor.name}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl mb-4 text-[var(--color-primary)]/80"
              >
                {mentor.subject}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg mb-4"
              >
                <span className="font-semibold">Experience:</span> {mentor.experience}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[var(--color-text)]/80 text-lg leading-relaxed mb-8"
              >
                {mentor.bio || mentor.description}
              </motion.p>

              {mentor.availableTimes && mentor.availableTimes.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-8 p-6 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10"
                >
                  <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">Available Times</h3>
                  <ul className="space-y-2">
                    {mentor.availableTimes.map((time, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {time}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full md:w-auto px-8 py-3 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule a Meeting
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MentorProfile;