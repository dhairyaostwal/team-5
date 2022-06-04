import React from 'react';
import ResourceChart from '../ResourceChart';
import './WebsiteStatistics.css';

const WebsiteStatistics = () => {
  return (
    <div className="WebsiteStatistics--container">
      <div style={{ backgroundColor: 'grey', padding: '1% 3%' }}>
        <h2>Total Users: 576 </h2>
        <h2>
          Change in User Growth: <span style={{ color: '#00ff00' }}>50% </span>
          <i class="fa-solid fa-triangle" />
        </h2>
      </div>

      <div style={{ backgroundColor: '#f1f1f1', padding: '2% 1%' }}>
        {/* Chalsie Task */}
        <ResourceChart />
        {/* Add Chart.js line chart showing resources shared */}
      </div>
    </div>
  );
};

export default WebsiteStatistics;
