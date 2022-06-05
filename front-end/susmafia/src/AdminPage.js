import React,{useState, useEffect} from 'react'

import './AdminPage.css'

function AdminPage() {

    const [users,setUsers] = useState([])

    const callAPI = ()=>{
        const url = 'http://localhost:8000/api/admin/'
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


    const handleAdmit = (id) => {
        const url = `http://localhost:8000/api/admin/admit-user/${id}`
        fetch(url,{
            method:'POST'
        })
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
            })  
        .catch(err=>console.log(err))

        
    }


    const handleDelete = (id) => {
        const url = `http://localhost:8000/api/admin/reject-user/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
            })  
        .catch(err=>console.log(err))

    }


  return (
    <div class="quiz-window">
        <div class="quiz-window-header">
            <div class="quiz-window-title">Admin portal</div>
            <button class="quiz-window-close">&times;</button>
        </div>
        <div class="quiz-window-body">
            <div class="gui-window-awards">
                <ul class="guiz-awards-row guiz-awards-header">
                    <li class="guiz-awards-header-star">&nbsp;</li>
                    <li class="guiz-awards-header-title">UserName</li>
                    <li class="guiz-awards-header-track">Add</li>
                    <li class="guiz-awards-header-time">Remove</li>
                </ul>

                {
                    users?.map((user)=>{
                        return(
                        <ul class="guiz-awards-row guiz-awards-row-even">
                            <li class="guiz-awards-star"><span class="star goldstar"></span></li>
                            <li class="guiz-awards-title">{user.name}
                                <div class="guiz-awards-subtitle">{user.email}</div>
                            </li>

                            <li class="guiz-awards-track"><button class="button-33" role="button" onClick= {()=>handleAdmit(user._id)}>Add</button></li>
                            <li class="guiz-awards-time"><button class="button-45" role="button" onClick= {()=>handleDelete(user._id)}>Remove</button></li>
                        </ul>
                        )
                    })
                }   
            </div>
        </div>
    </div>
  )
}

export default AdminPage