import React,{useState, useEffect} from 'react'

import {Link} from 'react-router-dom';

import './NeedsHelp.css';

const NeedHelp = () => {

  const [posts,setPosts] = useState([])


    useEffect(()=>{
        const url = 'http://localhost:8000/api/post/get-3-posts'
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
          setPosts(data)
          console.log(data)
        })  
        .catch(err=>console.log(err))
    },[])


  return (
    <div className="NeedsHelp--Container">
      <h1>Helpdesk</h1>
      {posts.map((post)=>{
        return(
      <p>
        
        <h3>
          <a href="">Rahul</a> {post.title}
        </h3>
        <br />
        {/* <h3>
          <a href="">Arjun</a> needs help in the ML field
        </h3>
        <br />
        <h3>
          <a href="">Jack</a> is looking for employes in React feild
        </h3>
        <br /> */}
      </p>
        )
      })}
      <center>
        <Link
          style={{
            backgroundColor: 'purple',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.2rem',
            padding: '1% 3%',
            fontWeight: '600',
          }}
        >
          See More...
        </Link>
      </center>
    </div>
  );
};

export default NeedHelp;
