import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
  badge?: string;
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
  { id: 'liveliness-check', title: 'Liveliness Check' },
];

const contentSections = {
  introduction: {
    title: 'Introduction',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Welcome to the FastKYC API documentation. Our comprehensive KYC (Know Your Customer) verification APIs help you streamline customer onboarding and compliance processes.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">Getting Started</h4>
          <p className="text-blue-700">
            To begin using our APIs, you'll need to obtain an API key from your dashboard and follow our authentication guidelines.
          </p>
        </div>
      </div>
    )
  },
  'bank-verification': {
    title: 'Bank Verification',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Our Bank Verification API allows you to verify bank account details in real-time, ensuring accurate financial information during customer onboarding.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">Key Features</h4>
          <ul className="text-green-700 space-y-1">
            <li>• Real-time bank account verification</li>
            <li>• Support for major Indian banks</li>
            <li>• Account holder name validation</li>
            <li>• IFSC code verification</li>
          </ul>
        </div>
      </div>
    )
  },
  'pan-verification': {
    title: 'PAN Verification',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Comprehensive PAN (Permanent Account Number) verification services with multiple verification levels to suit different business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Basic Verification</h4>
            <p className="text-purple-700 text-sm">PAN Lite for quick validation</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Advanced Verification</h4>
            <p className="text-purple-700 text-sm">Comprehensive data extraction</p>
          </div>
        </div>
      </div>
    )
  },
  'liveliness-check': {
    title: 'Liveliness Check',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          Advanced biometric verification to ensure the authenticity of identity documents and prevent fraud through liveliness detection.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">Security Features</h4>
          <ul className="text-red-700 space-y-1">
            <li>• Real-time face detection</li>
            <li>• Anti-spoofing technology</li>
            <li>• Document authenticity verification</li>
            <li>• Biometric matching</li>
          </ul>
        </div>
      </div>
    )
  }
};

const defaultContent = {
  title: 'Common Use Cases',
  content: (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Common Use Cases</h2>
        <div className="space-y-4">
          <p className="text-gray-600">KYC verification during customer onboarding for banks, insurance companies, and fintech applications</p>
          <p className="text-gray-600">Identity verification for loan applications and credit card issuance</p>
          <p className="text-gray-600">Automated customer data capture for investment accounts and mutual funds</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Integration Considerations</h2>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Best Practices</h3>
          <div className="space-y-3 text-gray-600">
            <p>Implement proper error handling to manage cases where image quality is insufficient</p>
            <p>Store extracted data securely in compliance with data protection regulations</p>
            <p>Implement retry mechanisms for failed extractions with different image processing parameters</p>
            <p>Consider implementing a human review process for low-confidence extractions</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Important Limitations</h3>
            <div className="mt-2 text-sm text-red-700 space-y-1">
              <p>Image quality significantly impacts extraction accuracy; blurry, low-resolution, or poorly lit images may yield inaccurate results</p>
              <p>Variations in ID card formats across states/countries may lead to inconsistent extraction</p>
              <p>Handwritten text or signatures may not be recognized accurately</p>
              <p>Glare, shadows, or cropped edges can cause OCR misinterpretation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

function App() {
  const [activeSection, setActiveSection] = useState<string>('default');
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
    setActiveSection(itemId);
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

  const getCurrentContent = () => {
    return contentSections[activeSection as keyof typeof contentSections] || defaultContent;
  };

  const currentContent = getCurrentContent();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">API Documentations</h1>
          <p className="text-sm text-gray-600 mt-1">Manage your API keys and encryption settings</p>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
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

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-4 space-y-1">
            {navigationItems.map(item => renderNavItem(item))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header with Logo */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <div className="flex-1"></div>
          {/* FastKYC Logo in top right */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <div className="relative">
                  {/* Fingerprint icon representation */}
                  <div className="w-6 h-6 border-2 border-white rounded-full relative">
                    <div className="absolute inset-1 border border-white rounded-full"></div>
                    <div className="absolute inset-2 border border-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-black">FastKYC</span>
                <span className="text-sm text-black">®</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{currentContent.title}</h1>
            {currentContent.content}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;