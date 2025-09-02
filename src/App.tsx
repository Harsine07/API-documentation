import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";

function App() {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Right Side (Header + MainContent in one flow) */}
      <div className="flex-1 min-h-screen overflow-y-auto">
        <div className="p-6">
          <Header /> {/* Logo stays on top */}
          <MainContent activeSection={activeSection} /> {/* Content fills rest */}
        </div>
      </div>
    </div>
  );
}

export default App;
