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
    <div>ViewUsers</div>
  )
}

export default ViewUsers