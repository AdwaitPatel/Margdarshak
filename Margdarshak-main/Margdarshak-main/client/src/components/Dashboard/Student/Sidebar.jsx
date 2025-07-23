import React, { useState } from 'react';
import { Search, Home, Calendar, Compass, Brain } from 'lucide-react';

const Sidebar = ({ sidebarOpen, selectedTab, setSelectedTab }) => {
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
      } transition-all duration-300 ease-in-out overflow-hidden font-sans`}
      style={{ 
        background: 'var(--color-bg)',
        borderRight: '1px solid var(--color-secondary)',
        boxShadow: '2px 0 4px rgba(var(--color-primary), 0.1)'
      }}
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
              className="w-full pl-10 pr-4 py-2 rounded transition-all duration-300"
              style={{ 
                background: 'var(--color-bg)',
                color: 'var(--color-text)',
                border: `2px solid ${searchFocused ? 'var(--color-primary)' : 'var(--color-secondary)'}`,
                boxShadow: searchFocused ? '0 0 0 2px rgba(var(--color-primary), 0.1)' : 'none'
              }}
            />
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300"
              onClick={() => {
                console.log('Search clicked:', searchQuery);
              }}
              style={{ 
                color: searchFocused ? 'var(--color-primary)' : 'var(--color-secondary)'
              }}
            >
              <Search className="w-4 h-4" />
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
                className={`w-full text-left px-4 py-3 rounded transition-all duration-300 flex items-center space-x-3 transform hover:scale-[1.02] ${
                  isSelected ? 'shadow-md' : ''
                }`}
                style={{ 
                  background: isSelected ? 'var(--color-primary)' : 'var(--color-bg)',
                  color: isSelected ? 'var(--color-bg)' : 'var(--color-text)',
                  border: `1px solid ${isSelected ? 'var(--color-primary)' : 'var(--color-secondary)'}`,
                  boxShadow: isSelected ? '0 2px 4px rgba(var(--color-primary), 0.2)' : 'none'
                }}
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

export default Sidebar;