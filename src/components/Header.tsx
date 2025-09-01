import React from 'react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center flex-shrink-0">
      <div className="flex-1"></div>
      {/* FastKYC Logo in top right */}
      <div className="flex items-center">
        <img 
          src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=200&h=60&fit=crop" 
          alt="FastKYC Logo" 
          className="h-12 w-auto object-contain"
        />
      </div>
    </header>
  );
}