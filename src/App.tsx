import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Classes } from './components/Classes';

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <main className="flex h-screen overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "Dashboard" && <Dashboard />}
      {activeTab === "Classes" && <Classes />}

    </main>

  )
}

export default App
