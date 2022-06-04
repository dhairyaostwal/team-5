import React from 'react';
import FinancialNews from './components/FinancialNews';
import NeedHelp from './components/NeedHelp';
import WebsiteStatistics from './components/WebsiteStatistics';
import './Landing.css';

const Landing = () => {
  return (
    <div>
      <div className="Landing--container1">
        <FinancialNews />
        <NeedHelp />
      </div>
      <WebsiteStatistics />
    </div>
  );
};

export default Landing;
