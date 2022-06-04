import React from 'react';
import { ReactDOM } from 'react';
import Advertisement from './components/Advertisement';
import FinancialNews from './components/FinancialNews';
import Leaderboard from './components/Leaderboard';
import NavbarComponent from './components/NavbarComponent';
import NeedHelp from './components/NeedHelp';
import WebsiteStatistics from './components/WebsiteStatistics';
import './Landing.css';
import ResourceChart from './ResourceChart';

const Landing = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="Landing--container1">
        <FinancialNews />
        <NeedHelp />
      </div>
      <div className="Landing--container2">
        <WebsiteStatistics />
        <Advertisement />
        <Advertisement />
      </div>
      <Leaderboard />
    </div>
  );
};

export default Landing;
