import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [isDashboardOpen, setIsDashboardOpen] = React.useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div className="flex h-[100vh] md:h-full flex-col md:flex-row">
      <div className={`md:block ${isDashboardOpen ? 'block' : 'hidden'} w-full md:w-[25%] lg:w-[15%] bg-gray-800`}>
        <Dashboard toggleDashboard={toggleDashboard} />
      </div>
      <div className="w-full md:w-5/6 lg:w-11/12 bg-gray-100 flex flex-col">
        <Navbar toggleDashboard={toggleDashboard} />
        <div className="flex-grow p-4">
          <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
          <p>This is the main content area.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
