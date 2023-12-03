import React from 'react';
import DashboardLogo from "./../../assets/Dashboard.webp";
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard-container">
      <img src={DashboardLogo} alt="Dashboard Picture" style={{width: '847px', height: '529px'}} />
    </div>
  )
}

export default Dashboard
