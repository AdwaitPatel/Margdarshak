// MentorProfile.js (or wherever you want to define this component)
import React from 'react';

const MentorProfile = ({ mentor, onBackToList }) => {
  if (!mentor) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <p>No mentor selected.</p>
        <button
            onClick={onBackToList}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Back to List
          </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12 max-w-4xl">
        <button
          onClick={onBackToList}
          className="mb-6 flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          Back to Mentors
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          {/* Mentor Image Section */}
          <div className="flex-shrink-0">
            <img
              src={mentor.profileImageUrl || mentor.imageUrl} // Use profileImageUrl if available, fallback to imageUrl
              alt={mentor.name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-blue-500 shadow-xl"
              onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/200x200/6B7280/ffffff?text=${mentor.name.split(' ').map(n => n[0]).join('')}`; }}
            />
          </div>

          {/* Mentor Details Section */}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-white mb-2">{mentor.name}</h1>
            <p className="text-blue-400 text-xl mb-4">{mentor.subject || mentor.description}</p> {/* Use subject or description */}
            <p className="text-gray-300 text-lg mb-4">
              <span className="font-semibold">Experience:</span> {mentor.experience || 'Not specified'}
            </p>
            <p className="text-gray-200 text-md leading-relaxed mb-6">{mentor.bio || mentor.description}</p> {/* Use bio or description */}

            {/* Price section commented out in previous code, keeping it commented */}
            {/* <div className="bg-gray-700 rounded-lg p-4 mb-6 shadow-inner">
              <p className="text-blue-300 text-lg font-semibold">One-on-One Advisory Fees:</p>
              <p className="text-white text-2xl font-bold">{mentor.price} rupees</p>
            </div> */}

            {mentor.availableTimes && mentor.availableTimes.length > 0 && ( // Only show if availableTimes exist
              <div className="bg-gray-700 rounded-lg p-4 mb-6 shadow-inner">
                <p className="text-blue-300 text-lg font-semibold mb-2">Available Times:</p>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {mentor.availableTimes.map((time, index) => (
                    <li key={index}>{time}</li>
                  ))}
                </ul>
              </div>
            )}

            <button
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Do a meeting with this mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;