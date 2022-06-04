import React, { useState, useEffect } from "react";
import "./Login.css";

export default function Login() {

    
  return (
    <>
      <section className="login">
       

        <div className="login-content">
          
          <div className="login-form">
            <h2 className="form-title">Log in</h2>
            <form className="form-content" id="register-form" >
              <div className="form-group">
                <i class="fa-solid fa-user"></i>
                <input
                  type="mail"
                  name="email"
                  id="email"
                  required
                  autoCapitalize="off"
                
                
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
                />
              </div>
              <div className="form-group">
                <p>
                  Forgot password?
                </p>
              </div>
              <div className="form-group">
                <p>
                  Don't have an account?<a href="./Signup">Register</a>
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