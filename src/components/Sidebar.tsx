import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
  badge?: string;
}

interface SidebarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const navigationItems: NavItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'bank-verification', title: 'Bank Verification' },
  {
    id: 'pan-verification',
    title: 'PAN Verification',
    children: [
      { id: 'pan-lite', title: 'PAN Lite', badge: 'POST' },
      { id: 'pan-comprehensive', title: 'PAN Comprehensive', badge: 'POST' },
      { id: 'pan-comprehensive-plus', title: 'PAN Comprehensive Plus', badge: 'POST' },
      { id: 'pan-advanced', title: 'PAN Advanced', badge: 'POST' },
      { id: 'pan-advanced-v2', title: 'PAN Advanced V2', badge: 'POST' },
      { id: 'pan-advanced-v3', title: 'PAN Advanced V3', badge: 'POST' },
      { id: 'pan-with-details-v2', title: 'PAN With Details V2', badge: 'POST' },
      { id: 'pan-with-details-v3', title: 'PAN With Details V3', badge: 'POST' },
      { id: 'pan-to-aadhaar', title: 'PAN To Aadhaar', badge: 'POST' },
      { id: 'pan-to-father-name', title: 'PAN To Father Name', badge: 'POST' },
    ]
  },
  { id: 'passport-verification', title: 'Passport Verification' },
  { id: 'aadhaar-verification', title: 'Aadhaar Verification' },
  { id: 'dl-verification', title: 'DL Verification' },
  { id: 'face-match', title: 'Face Match' },
  { id: 'face-liveness', title: 'Face Liveness' },
  { id: 'pan-ocr', title: 'PAN OCR' },
  { id: 'aadhaar-ocr', title: 'Aadhaar OCR' },
  { id: 'dl-ocr', title: 'DL OCR' },
  { id: 'aadhaar-masking', title: 'Aadhaar Masking' },
  { id: 'vehicle-rc', title: 'Vehicle RC' },
  { id: 'e-aadhaar', title: 'E-Aadhaar' },
  { id: 'e-aadhaar-download', title: 'E-Aadhaar Download' },
  { id: 'employment-verification', title: 'Employment Verification' },
];

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['pan-verification']);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleNavClick = (itemId: string) => {
    onSectionChange(itemId);
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const isActive = activeSection === item.id;

    if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return null;
    }

    return (
      <div key={item.id}>
        <div 
          className={`flex items-center justify-between py-2 px-3 cursor-pointer rounded-lg transition-colors duration-200 ${
            isActive ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
          }`}
          style={{ paddingLeft: `${12 + level * 16}px` }}
          onClick={() => handleNavClick(item.id)}
        >
          <div className="flex items-center gap-2 flex-1">
            <span className="text-sm font-medium">{item.title}</span>
            {item.badge && (
              <span className="px-2 py-0.5 text-xs font-medium bg-yellow-200 text-yellow-800 rounded">
                {item.badge}
              </span>
            )}
          </div>
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleExpanded(item.id);
              }}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children?.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <h1 className="text-xl font-bold text-gray-800">API Documentations</h1>
        <p className="text-sm text-gray-600 mt-1">Manage your API keys and encryption settings</p>
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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Navigation - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-1">
          {navigationItems.map(item => renderNavItem(item))}
        </nav>
      </div>
    </div>
  );
}