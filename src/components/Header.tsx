import React from 'react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center flex-shrink-0">
      <div className="flex-1"></div>
      {/* FastKYC Logo in top right */}
      <div className="flex items-center">
        <img 
          src="public\logo.jpg" 
          alt="FastKYC Logo" 
          className="h-12 w-auto object-contain"
        />
      </div>
    </header>
  );
}