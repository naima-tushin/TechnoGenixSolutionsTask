import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import Chart from './Components/Chart/Chart';
import Analytics from './Components/Analytics/Analytics';
import ActivityStatus from './Components/ActivityStatus/ActivityStatus';

function App() {
  const [isDashboardOpen, setIsDashboardOpen] = React.useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div className="flex h-[100vh] md:h-full flex-col md:flex-row">
      <div className={`absolute lg:relative md:relative md:block ${isDashboardOpen ? 'block' : 'hidden'} z-10 w-[70%] md:w-[25%] lg:w-[15%] bg-gray-800`}>
        <Dashboard toggleDashboard={toggleDashboard} />
      </div>
      <div className="w-full md:w-5/6 lg:w-11/12 flex flex-col bg-slate-950">
        <Navbar toggleDashboard={toggleDashboard} />
        <Chart></Chart>
        <Analytics></Analytics>
        <ActivityStatus></ActivityStatus>
      </div>
    </div>
  );
}

export default App;