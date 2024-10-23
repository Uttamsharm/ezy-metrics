import React from 'react';
import DashboardWidgets from './DashboardWidgets';
import LeadList from '../LeadList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="content">
      <h1>Dashboard</h1>
      <div className="dashboard-widgets">
      <DashboardWidgets />
      <div className="lead-list">
        <LeadList />
      </div>
     
      </div>
    </div>
  );
};

export default Dashboard;







/*import React from 'react';
import DashboardWidgets from './DashboardWidgets';
import LeadList from '../LeadList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="content">
      <h1>Dashboard</h1>
      <LeadList />
       
      <DashboardWidgets />
      
     
    </div>
  );
};

export default Dashboard;

*/
