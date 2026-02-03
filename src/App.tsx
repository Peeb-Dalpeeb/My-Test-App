import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Classes } from './components/Classes';

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex h-screen overflow-hidden">
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Page Logic */}
      {activeTab === "Dashboard" && <Dashboard />}
      {activeTab === "Classes" && <Classes />}

      {/* CHANGE 2: The "Catch-All" for pages you haven't built yet */}
      {activeTab !== "Dashboard" && activeTab !== "Classes" && (
        <main className="flex-1 flex items-center justify-center bg-gray-50 text-muted">
           <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-300">{activeTab}</h2>
              <p>Coming Soon</p>
           </div>
        </main>
      )}

    </div>
  )
}

export default App
