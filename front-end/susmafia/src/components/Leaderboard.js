import React, { useState, useEffect } from 'react';
import { GiRank3, GiRank2, GiRank1 } from 'react-icons/gi';
import './Leaderboard.css';

const Leaderboard = () => {

  const [leadingEntrepreneurs, setLeadingEntrepreneurs] = useState({})

  useEffect(() => {
    const url = 'http://localhost:8000/api/incentives/leaderboard'
    fetch(url)
      .then(res => res.json())
      .then(data => setLeadingEntrepreneurs(data))
      .catch(err => console.log(err))
  }, [leadingEntrepreneurs])

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
          {leadingEntrepreneurs.map(leadingEntrepreneur => {
            <tr class="">
              <th scope="row">{/* <GiRank3 size={40} /> */}1</th>
              <td>{ leadingEntrepreneur.name }</td>
              <td>{ leadingEntrepreneur.points }</td>
              <td>Technology</td>
            </tr>
          })}
          <tr class="">
            <th scope="row">{/* <GiRank3 size={40} /> */}1</th>
            <td>Ram</td>
            <td>40</td>
            <td>Technology</td>
          </tr>
          <tr class="">
            <th scope="row">{/* <GiRank2 size={40} /> */}2</th>
            <td>Jacob</td>
            <td>30</td>
            <td>Energy</td>
          </tr>
          <tr class="">
            <th scope="row">{/* <GiRank1 size={40} /> */}3</th>
            <td>Larry</td>
            <td>26</td>
            <td>Technology</td>
          </tr>
          <tr>
            <th scope="row" className="">
              4
            </th>
            <td>Larry</td>
            <td>26</td>
            <td>Technology</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>26</td>
            <td>Solar Energy</td>
          </tr>
        </tbody>
      </table>
      <button
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
      </button>
    </div>
  );
};

export default Leaderboard;
