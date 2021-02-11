import React from 'react';
import './Login.css';
// import Register from "./Register";
// import { Link } from "react-router-dom";



function Login() {
    return (
        <div className="login">
            <form className="form">
               <label>
                 Email
               </label>
               <input type="email" name="email" placeholder="Enter email" />
               <label>
                 Password
               </label>
               <input type="password" name="password" placeholder="Enter password" />
               {/* <Link to="/"> */}
               <button>Sign In</button>
               <p>Dont have an account? 
                  <a href="#"> Sign Up</a>
               </p>
               {/* </Link> */}
                 
            </form>
        </div>
    )
}

export default Login;
