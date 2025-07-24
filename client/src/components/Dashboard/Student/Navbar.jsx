import React from 'react';
import { User } from 'lucide-react';

const Navbar = ({ profileDropdownOpen, setProfileDropdownOpen }) => {
  const profileMenuItems = ['My Profile', 'Settings', 'Logout'];

  return (
    <nav className="px-6 py-4" style={{ 
      background: 'var(--color-bg)',
      borderBottom: '1px solid var(--color-secondary)',
      boxShadow: '0 2px 4px rgba(var(--color-primary), 0.1)'
    }}>
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold" style={{ color: 'var(--color-primary)' }}>
          NaviQuest
        </div>
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-105"
            style={{ 
              background: 'var(--color-primary)',
              border: '2px solid var(--color-accent)'
            }}
          >
            <User className="w-5 h-5" style={{ color: 'var(--color-bg)' }} />
          </button>
          
          {profileDropdownOpen && (
            <div 
              className="absolute right-0 mt-2 w-64 rounded-lg shadow-lg z-50 transition-all duration-300"
              style={{ 
                background: 'var(--color-bg)',
                border: '1px solid var(--color-secondary)',
                boxShadow: '0 4px 6px rgba(var(--color-primary), 0.1)'
              }}
            >
              <div className="py-2">
                {profileMenuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      console.log('Clicked:', item);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-all duration-300 hover:opacity-80 ${
                      item === 'Logout' ? 'rounded-b' : ''
                    }`}
                    style={{ 
                      color: item === 'Logout' ? 'var(--color-accent)' : 'var(--color-text)',
                      background: 'var(--color-bg)'
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;