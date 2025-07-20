import React from 'react';
import { Calendar, Menu } from 'lucide-react';

// Session Card Component
const SessionCard = ({ title, counselor, date, time, description }) => {
  return (
    <div className="border border-gray-200/10 rounded-lg p-6 bg-gray-800/50">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-medium mb-1 text-gray-200">{title}</h3>
          <p className="text-sm text-gray-400">{counselor}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">{date}</p>
          <p className="text-xs text-gray-400/75">{time}</p>
        </div>
      </div>
      <p className="text-sm mb-3 text-gray-400">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs px-2 py-1 rounded text-white bg-blue-500">Completed</span>
        <button className="text-sm px-3 py-1 rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
};

// Dashboard Content Component
const DashboardContent = () => {
  return (
    <div className="h-full">
      {/* Your Appointments Section */}
      <div className="mb-8">
        <h2 className="text-xl mb-4 text-gray-200">Your appointments</h2>
        <div className="border border-gray-200/10 rounded-lg p-6 bg-gray-800/50">
          <div className="flex items-center mb-2">
            <Calendar className="w-4 h-4 mr-2 text-gray-400" />
            <span className="text-sm text-gray-400">Meeting at 23rd of July</span>
          </div>
          <p className="text-sm mb-4 text-gray-400">Some details about meeting</p>
          <button className="px-4 py-2 rounded text-sm text-white bg-blue-500 hover:opacity-90 transition-colors">
            Upcoming
          </button>
        </div>
      </div>

      {/* Previous Sessions Section */}
      <div>
        <h2 className="text-xl mb-4 text-gray-200">My Previous Counselling Sessions</h2>
        <div className="space-y-4 max-w-3xl">
          <SessionCard
            title="Career Guidance Session"
            counselor="Dr. Sarah Johnson"
            date="15th July, 2024"
            time="2:00 PM - 3:00 PM"
            description="Discussed career options in technology sector, identified strengths and interests."
          />
          <SessionCard
            title="Skills Assessment"
            counselor="Dr. Michael Chen"
            date="8th July, 2024"
            time="10:00 AM - 11:30 AM"
            description="Comprehensive skills evaluation and personality assessment for career planning."
          />
        </div>
      </div>
    </div>
  );
};

// Meetings Content Component
const MeetingsContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex items-start justify-center pt-8">
        <div className="w-full max-w-4xl">
          <div className="border border-gray-200/10 rounded-lg p-8 bg-gray-800/50">
            <h3 className="text-2xl font-medium mb-6 text-gray-200">Upcoming Meetings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-blue-900/30 border border-blue-500/20">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-lg text-gray-200">Career Counseling Session</p>
                    <p className="text-gray-400">July 23, 2024 at 2:00 PM</p>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors">
                  Join Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Explore Content Component
const ExploreContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="border border-gray-200/10 rounded-lg p-8 bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer">
            <h3 className="text-xl font-medium mb-4 text-gray-200">Career Paths</h3>
            <p className="text-gray-400">Explore different career opportunities and find the path that suits you best</p>
          </div>
          <div className="border border-gray-200/10 rounded-lg p-8 bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer">
            <h3 className="text-xl font-medium mb-4 text-gray-200">Skill Development</h3>
            <p className="text-gray-400">Learn new skills and enhance your capabilities for future success</p>
          </div>
          <div className="border border-gray-200/10 rounded-lg p-8 bg-gray-800/50 hover:bg-gray-800/70 transition-colors cursor-pointer">
            <h3 className="text-xl font-medium mb-4 text-gray-200">Industry Insights</h3>
            <p className="text-gray-400">Get valuable insights about different industries and market trends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Career Quiz Content Component
const CareerQuizContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="border border-gray-200/10 rounded-lg p-6 bg-gray-800/50 flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-200">Career Assessment Quiz</h3>
          <p className="mb-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Take our comprehensive career assessment to discover your ideal career path based on your interests, skills, and personality.
          </p>
          <button className="px-8 py-4 rounded-lg text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Body Section Component
const StudentDashboard = ({ sidebarOpen, setSidebarOpen, selectedTab }) => {
  const renderContent = () => {
    switch (selectedTab) {
      case 'Dashboard':
        return <DashboardContent />;
      case 'Meetings':
        return <MeetingsContent />;
      case 'Explore':
        return <ExploreContent />;
      case 'Career Quiz':
        return <CareerQuizContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-900 h-full">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200/10">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded hover:bg-gray-800 text-gray-400"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-200">{selectedTab}</h1>
        </div>
      </div>

      {/* Dynamic Content - Takes remaining space */}
      <div className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default StudentDashboard;