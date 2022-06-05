import React, { useState, useEffect } from 'react';
import { GiRank3, GiRank2, GiRank1 } from 'react-icons/gi';

import {Link} from 'react-router-dom';

import './Leaderboard.css';

const Leaderboard = () => {

  const [leadingEntrepreneurs, setLeadingEntrepreneurs] = useState([])

  useEffect(() => {
    const url = 'http://localhost:8000/api/incentives/leaderboard'
    fetch(url)
      .then(res => res.json())
      .then(data => setLeadingEntrepreneurs(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="m-5 text-center">
      <table className="table text-center border border-secondary">
        <thead class="thead-dark">
          <tr style={{ backgroundColor: '#202020', color: '#fff' }}>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
            <th scope="col">Field</th>
          </tr>
        </thead>
        <tbody>
          {leadingEntrepreneurs.map((leadingEntrepreneur, index) => {
            return (
              <tr class="">
              <th scope="row">{ index + 1 }</th>
              <td>{ leadingEntrepreneur.name }</td>
              <td>{ leadingEntrepreneur.points }</td>
              <td>Technology</td>
            </tr>
            )
           
          })}
          
        </tbody>
      </table>
      <Link to="/viewusers"
        style={{
          backgroundColor: 'purple',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          padding: '1% 3%',
          fontWeight: '600',
        }}
      >
        See More...
      </Link>
    </div>
  );
};

export default Leaderboard;
