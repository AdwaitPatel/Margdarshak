import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <input 
        type="text" 
        placeholder="Search..." 
        className="w-full px-4 py-3 rounded border border-border-medium bg-accent-bg text-primary-text outline-none focus:ring-2 focus:ring-highlight"
      />
    </div>
  );
};

export default SearchBar;