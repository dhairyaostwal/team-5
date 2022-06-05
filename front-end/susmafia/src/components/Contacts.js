import React, { useState,useEffect } from 'react';
import './Leaderboard.css';
import NavbarComponent from './NavbarComponent';

const Contacts = () => {
  const [allUserData, setAllUserData] = useState([])

  // useEffect(() => {
  //   const url = 'http://localhost:8000/api/user/'
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => setAllUserData(data))
  //     .catch(err => console.log(err))
  // }, [])

  useEffect(() => {
    const constGetAllUserData = async()=>{
      await fetch("http://localhost:8000/api/user/")
        .then ((response) => response.json())
        .then (data=>{
            setAllUserData(data);
            console.log(allUserData);
        })
    }
    constGetAllUserData();
  }, [allUserData])


  return (
    <div className="m-5 text-center">
      <NavbarComponent />
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
            {/* <th scope="col">Points</th> */}
            <th scope="col">Field</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
        {allUserData.map((user, index)=>{
          return(
<tr class="">
          <th scope="row">{ index+1 }</th>
          <td>{ user.name }</td>
          <td>Technology</td>
          <td><button>Profile</button></td>
        </tr>

          )
          

        })}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
