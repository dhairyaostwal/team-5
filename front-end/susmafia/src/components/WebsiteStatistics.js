import React from 'react';
import ResourceChart from '../ResourceChart';
import './WebsiteStatistics.css';

const WebsiteStatistics = () => {
  return (
    <div className="WebsiteStatistics--container">
      <div style={{ backgroundColor: 'black', padding: '1% 3%' }}>
        <h2 style={{ fontWeight: 600 }}>Total Users: 576 </h2>
        <h2>
          Change in User Growth:{' '}
          <span style={{ fontWeight: 600, color: '#00ff00' }}>50% +</span>
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
