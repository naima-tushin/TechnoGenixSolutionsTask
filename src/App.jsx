import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="flex h-screen">
      <Dashboard />
      <div className="w-3/4 bg-gray-100 p-4">
        <Navbar />
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
