import { useState } from 'react';
import './ResourceChart.css';
import LineChart from './components/LineChart';
import { UserData } from './Data';

function ResourceChart() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Entrepreneurs Onboarded',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="ResourceChart">
      <div className="ResourceChart--container">
        <LineChart chartData={userData} />
      </div>
    </div>
  );
}

export default ResourceChart;
