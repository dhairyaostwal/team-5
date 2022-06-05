import React,{useState, useEffect} from 'react'

import './ViewUsers.css'

function ViewUsers() {

  const [users,setUsers] = useState([])

  const callAPI = ()=>{
      const url = 'http://localhost:8000/api/incentives/all-users'
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
          setUsers(data)
      console.log(data)})  
      .catch(err=>console.log(err))
  }

  useEffect(()=>{
      callAPI()
  },[])
  return (
    <div>
      {
        users.map((user)=>{
          <ul class="guiz-awards-row guiz-awards-row-even">
              <li class="guiz-awards-star"><span class="star goldstar"></span></li>
              <li class="guiz-awards-title">{user.name}
                  <div class="guiz-awards-subtitle">{user.email}</div>
              </li>

              <li class="guiz-awards-track"><button class="button-33" role="button">Add</button></li>
              <li class="guiz-awards-time"><button class="button-45" role="button">Remove</button></li>
          </ul>
      })
      }
      ViewUsers
    </div>
    
  )
}

export default ViewUsers