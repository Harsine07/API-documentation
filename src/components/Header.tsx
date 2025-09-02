import React from 'react';
import { ArrowLeft } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center flex-shrink-0">
      {/* Left side - Navigation */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">API Documentations</h1>
            <p className="text-sm text-gray-600">Manage your API keys and encryption settings</p>
          </div>
        </div>
      </div>

      {/* Right side - Environment and Credits */}
      <div className="flex items-center gap-6">
        {/* Environment Toggles */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-red-500 rounded"></div>
            </div>
            <span className="text-sm text-gray-600">Sandbox</span>
            <span className="text-sm font-semibold text-gray-800">₹50,000.00</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded"></div>
            </div>
            <span className="text-sm text-gray-600">Production</span>
            <span className="text-sm font-semibold text-gray-800">₹50,000.00</span>
          </div>
        </div>

        {/* Buy Credits Button */}
        <button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors">
          Buy credits
        </button>

        {/* FastKYC Logo */}
        <div className="flex items-center">
          <img 
            src="/image copy.png" 
            alt="FastKYC Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
}