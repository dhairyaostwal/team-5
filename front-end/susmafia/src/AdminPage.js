import React,{useState, useEffect} from 'react'

function AdminPage() {


    const [users,setUsers] = useState([])


    useEffect(()=>{
        const url = 'http://localhost:8000/api/admin/'
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        console.log(data)})  
        .catch(err=>console.log(err))
    },[])


    const handleAdmit = (id) => {
        const url = `http://localhost:8000/api/admin/admit-user/${id}`
        fetch(url,{
            method:'POST'
        })
        .then(res=>res.json())
        .then(data=>setUsers(data))  
        .catch(err=>console.log(err))
    }


    const handleDelete = (id) => {
        const url = `http://localhost:8000/api/admin/reject-user/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>setUsers(data))  
        .catch(err=>console.log(err))
    }


  return (
    <div>
        <h1>Admin Page</h1>
        {users.map((user)=>{
            return(
            <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <button onClick={()=>handleAdmit(user._id)}>Admit</button>
                <button onClick={()=>handleDelete(user._id)}>Delete</button>
            </div>
            )
        })}

    </div>
  )
}

export default AdminPage