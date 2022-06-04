import React from 'react';
import './WebsiteStatistics.css';

const WebsiteStatistics = () => {
  return (
    <div className="WebsiteStatistics--container">
      <div style={{ backgroundColor: '#000', padding: '1% 3%' }}>
        <h2>Total Users: 576 </h2>
        <h2>
          Change in User Growth: <span style={{ color: '#00ff00' }}>50% </span>
          <i class="fa-solid fa-triangle" />
        </h2>
      </div>

      <div style={{ backgroundColor: '#000', padding: '1% 3%' }}>
        {/* Chalsie Task */}

        {/* Add Chart.js line chart showing resources shared */}
      </div>
    </div>
  );
};

export default WebsiteStatistics;
