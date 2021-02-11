import React from 'react';
import './Register.css';

function Register() {
    return (
        <div className="register">
            <form className="form">
              <label>
                 Username
               </label>
               <input type="text" name="name" placeholder="Create username"/>
               <label>
                 Email
               </label>
               <input type="email" name="email" placeholder="Enter email" />
               <label>
                 Password
               </label>
               <input type="password" name="password" placeholder="Create password" />
               <label>
               Confirm password
               </label>
               <input type="password" name="   password" placeholder="Confirm password" />
                 <input className="submit" type="submit" value="Sign Up" />
                 <p>ALready have an account?
                 <a href="#"> Sign In</a>
                 </p>
            </form>
        </div>
    )
}

export default Register
