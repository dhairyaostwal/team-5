import React, { useState, useEffect } from "react";
import "./Signup.css";


const Signup = () => {

    
  

  const inputs = [
    {
      id: "user_name",
      icon: "fa-solid fa-user",
      name: "name",
      type: "text",
      placeholder: "Username",
    },
    {
      id: "user_email",
      icon: "fa-solid fa-envelope",
      name: "email",
      type: "email",
      placeholder: "Your Email",
    },
    {
      id: "user_contact",
      icon: "fa-solid fa-phone",
      name: "contact_no",
      type: "tel",
      placeholder: "Your Contact Number",
      
      
    },
    {
      id: "user_pass",
      icon: "fa-solid fa-lock",
      name: "password",
      type: "password",
      placeholder: "New Password",
      
      
    },
    {
      id: "user_cpass",
      icon: "fa-solid fa-lock",
      name: "link",
      type: "url",
      placeholder: "LinkedIn url",
     
     
    },
  ];
  

  





 

  return (
    <>
    
      <section className="register">
        {/* <div className='container'> */}
        <div className="signup-image">
          <img src="https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=2000" alt="registration pic" />
        </div>
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form method="POST" className="form-content" id="register-form">
              {inputs.map((input) => (
                <div className="form-group" key={input.id}>
                <i class={input.icon}></i>
                <input className="register-form-input"
                  {...input}
                
                  autoCapitalize="off"
                  
                  autoComplete="off"
                  
                />
            
            
              </div>
                
              ))}

              
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
        
                  
                />
              </div>
              <div className="form-group">
                <p>
                  Already have an account?<a href="./Login">Login</a> 
                </p>
              </div>
            </form>
          </div>
        </div>

      </section>
    </>
  );
};

export default Signup;