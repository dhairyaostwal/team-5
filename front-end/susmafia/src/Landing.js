import React from 'react';
import Advertisement from './components/Advertisement';
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
      <div className="Landing--container2">
        <WebsiteStatistics />
        <Advertisement />
        <Advertisement />
      </div>
    </div>
  );
};

export default Landing;
