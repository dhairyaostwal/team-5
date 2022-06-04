import React,{useState, useEffect} from 'react'

function AdminPage() {


    const [users,setUsers] = useState({})


    useEffect(()=>{
        const url = 'http://localhost:8000/api/admin/'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUsers(data))  
        .catch(err=>console.log(err))
    },[users])


    const handleClick = (id) => {
        const url = `http://localhost:8000/api/admin/admit-user/${id}`
        fetch(url,{
            method:'POST'
        })
        .then(res=>res.json())
        .then(data=>setUsers(data))  
        .catch(err=>console.log(err))
    }


  return (
    <div>
        <h1>Admin Page</h1>
        {users.map((user)=>{
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <button onClick={()=>handleClick(user._id)}>Admit</button>
            </div>

        })}

    </div>
  )
}

export default AdminPage