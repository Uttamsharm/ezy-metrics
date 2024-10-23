import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>EzyMetrics</h2>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/leadList">LeadList</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
