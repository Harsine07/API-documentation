import React, { useState } from 'react';
import { Search, List, FileText, Settings } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const navigationItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'bank-verification', title: 'Bank Verification', badge: 'Post' },
  { id: 'pan-verification', title: 'PAN Verification', badge: 'Post' },
  { id: 'passport-verification', title: 'Passport Verification', badge: 'Post' },
  { id: 'aadhaar-verification', title: 'Aadhaar Verification', badge: 'Post' },
  { id: 'dl-verification', title: 'DL Verification', badge: 'Post' },
  { id: 'face-match', title: 'Face Match', badge: 'Post' },
  { id: 'face-liveness', title: 'Face Liveness', badge: 'Post' },
  { id: 'pan-ocr', title: 'PAN OCR', badge: 'Post' },
  { id: 'aadhaar-ocr', title: 'Aadhaar OCR', badge: 'Post' },
  { id: 'dl-ocr', title: 'DL OCR', badge: 'Post' },
  { id: 'aadhaar-masking', title: 'Aadhaar Masking', badge: 'Post' },
  { id: 'vehicle-rc', title: 'Vehicle RC', badge: 'Post' },
  { id: 'e-aadhaar', title: 'E-Aadhaar', badge: 'Post' },
  { id: 'e-aadhaar-download', title: 'E-Aadhaar Download', badge: 'Post' },
];

const sidebarMenuItems = [
  { id: 'list-apis', title: 'List of APIs', icon: List },
  { id: 'api-documentation', title: 'API Documentation', icon: FileText, active: true },
  { id: 'api-usage', title: 'API Usage', icon: FileText },
  { id: 'credentials', title: 'Credentials', icon: Settings },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavClick = (itemId: string) => {
    onSectionChange(itemId);
  };

  const filteredItems = navigationItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Sidebar Menu */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <nav className="space-y-1">
          {sidebarMenuItems.map(item => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                  item.active 
                    ? 'bg-red-50 text-red-700 border border-red-200' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{item.title}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Navigation - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-1">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`flex items-center justify-between py-2 px-3 cursor-pointer rounded-lg transition-colors duration-200 ${
                activeSection === item.id ? 'bg-red-50 text-red-700' : 'hover:bg-gray-50 text-gray-700'
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="text-sm font-medium">{item.title}</span>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs font-medium bg-orange-200 text-orange-800 rounded">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-600">N</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-800">Nivash Thangaraju</div>
            <div className="text-xs text-gray-500">nivashthangarju@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}