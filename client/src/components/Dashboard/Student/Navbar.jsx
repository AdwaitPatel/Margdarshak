import React from 'react';
import { User } from 'lucide-react';

const Navbar = ({ profileDropdownOpen, setProfileDropdownOpen }) => {
  const profileMenuItems = ['My Profile', 'Settings', 'Logout'];

  return (
    <nav className="px-6 py-4 border-b border-gray-200/10 bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-200">
          Margdarshak
        </div>
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-80 bg-blue-900"
          >
            <User className="w-5 h-5 text-gray-400" />
          </button>
          
          {profileDropdownOpen && (
            <div 
              className="absolute right-0 mt-2 w-64 border rounded-lg shadow-lg z-50 bg-gray-800 border-gray-200/10"
            >
              <div className="py-2">
                {profileMenuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      console.log('Clicked:', item);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      item === 'Logout' 
                        ? 'hover:bg-red-900/20 text-red-500' 
                        : 'hover:bg-blue-900 text-gray-400'
                    }`}
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