import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import Chart from './Components/Chart/Chart';

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
      <div className="w-full md:w-5/6 lg:w-11/12 flex flex-col bg-slate-950">
        <Navbar toggleDashboard={toggleDashboard} />
        <Chart></Chart>
      </div>
    </div>
  );
}

export default App;
