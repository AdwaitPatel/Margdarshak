import React, { useState } from 'react';
import { Search, Home, Calendar, Compass, Brain } from 'lucide-react';

const Sidebarmenu = ({ sidebarOpen, selectedTab, setSelectedTab }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const sidebarItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Meetings', icon: Calendar },
    { name: 'Explore', icon: Compass },
    { name: 'Career Quiz', icon: Brain },
  ];

  return (
    <div
      className={`${
        sidebarOpen ? 'w-64' : 'w-0'
      } transition-all duration-300 ease-in-out overflow-hidden border-r border-gray-200/10 bg-gray-900 text-white font-sans`}
    >
      <div className="w-64 p-4">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className={`w-full pl-10 pr-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                searchFocused ? 'border-blue-600' : 'border-gray-200/10'
              }`}
            />
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
              onClick={() => {
                console.log('Search clicked:', searchQuery);
              }}
            >
              <Search
                className={`w-4 h-4 ${searchFocused ? 'text-blue-500' : 'text-gray-400'}`}
              />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setSelectedTab(item.name)}
                className={`w-full text-left px-4 py-3 rounded transition-colors flex items-center space-x-3 ${
                  isSelected
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebarmenu;
