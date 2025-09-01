import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

function App() {
  const [activeSection, setActiveSection] = useState<string>('introduction');

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
}

export default App;