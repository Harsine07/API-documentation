import React from 'react';
import { ArrowLeft, Package, Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center flex-shrink-0">
      {/* Top Header with Logo and Environment */}
      <div className="w-full flex justify-between items-center mb-4">
        {/* FastKYC Logo */}
        <div className="flex items-center">
          <img 
            src="/image copy.png" 
            alt="FastKYC Logo" 
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Environment and Credits */}
        <div className="flex items-center gap-6">
          {/* Environment Toggles */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-lg">
              <Package className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-700 font-medium">Sandbox</span>
              <span className="text-sm font-semibold text-gray-800">₹50,000.00</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-lg">
              <Zap className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-700 font-medium">Production</span>
              <span className="text-sm font-semibold text-gray-800">₹50,000.00</span>
            </div>
          </div>

          {/* Buy Credits Button */}
          <button className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 transition-colors">
            Buy credits
          </button>
        </div>
      </div>

      {/* API Documentation Title */}
      <div className="flex items-center gap-4">
        <ArrowLeft className="w-5 h-5 text-gray-600" />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">API Documentations</h1>
          <p className="text-sm text-gray-600">Manage your API keys and encryption settings</p>
        </div>
      </div>
    </header>
  );
}