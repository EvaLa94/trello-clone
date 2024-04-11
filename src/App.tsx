import { useState } from 'react';
import { useAppSelector } from './app/hooks';
import { Dashboard } from './features/dashboard/Dashboard';
import { selectDashboard } from './features/dashboard/dashboardSlice';
import './App.css';

import '@fortawesome/fontawesome-free/css/all.css';
import { Sidebar } from './features/shared/Sidebar';

function App() {
  const dashboards = useAppSelector(selectDashboard);
  const [currentDashboardId, setCurrentDashboardId] = useState(
    dashboards[0].dashboardId
  );

  return (
    <>
      <div className="app">
        <Sidebar setCurrentDashboardId={setCurrentDashboardId} />

        <div className="current-dashboard-container">
          <Dashboard dashboardId={currentDashboardId} />
        </div>
      </div>
    </>
  );
}

export default App;
