import React, { useState, useEffect } from "react";

import {Link} from 'react-router-dom';
import "./Login.css";

export default function Login() {


  let history = useHistory()
  
  const [login,setLogin] = useState({})

  const [token,setToken] = useState({})

  const handleChange = (e)=>{
      const {name,value} = e.target

      setLogin({
          ...login,
          [name]:value
      })

  }

  const handleSubmit = (e)=>{

      e.preventDefault()

      const url = 'http://127.0.0.1:8000/api/auth/'
      fetch(url,{
          method:'POST',
          headers:{
              'Content-type':'application/json',
          },
          body:JSON.stringify(login)
      })
      .then((response)=>response.json())
      .then((data)=>{

          console.log(data)

          setToken(data)
          if(token.token!=="")
          {
              handleLogin(data)
              history.push("/profile")
          }
          else
          {
              setMsgs(data.msg)
              console.log("HERE")
          }
      })
      .catch(function(error){
          console.log('ERROR:',error)
      })

      // localStorage.getItem("token")
  }
    

    
  return (
    <>
      <section className="login">
       

        <div className="login-content">
          
          <div className="login-form">
            <h2 className="form-title">Log in</h2>
            <form className="form-content" id="register-form">
              <div className="form-group">
                <i class="fa-solid fa-user"></i>
                <input
                  type="mail"
                  name="email"
                  id="email"
                  required
                  autoCapitalize="off"
                  onChange={handleChange}
                
                  placeholder="Enter Email"
                />
              </div>
              

              <div className="form-group">
                <i class="fa-solid fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  id="pass"
                  autoCapitalize="off"
                  onChange={handleChange}
                  
                  placeholder="Enter Password"
                  required
                />
              </div>
              

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Login"
                  onSubmit={handleSubmit}
                />
              </div>
              <div className="form-group">
                <p>
                  Forgot password?
                </p>
              </div>
              <div className="form-group">
                <p>
                  Don't have an account?<Link to="/signup">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="login-image">
          <img src="https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=2000" alt="registration pic" />
        </div>

        {/* </div> */}
      </section>
    </>
  );
}