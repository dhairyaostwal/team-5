import React from 'react';
import './Leaderboard.css';
const Contacts = () => {
  return (
    <div className="m-5 text-center">
      <div>
        Search for help among list of Entrepreneurs
        <form>
          <input type="search" placeholder="Search..." />
        </form>
      </div>
      <table className="table text-center border border-secondary">
        <thead class="thead-dark">
          <tr style={{ backgroundColor: '#202020', color: '#fff' }}>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Points</th>
            <th scope="col">Field</th>
          </tr>
        </thead>
        <tbody>
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
    </div>
  );
};

export default Contacts;
