import React from 'react'
import Add from '../img/avatar.svg'

const Register = () => {
  return (
   
          <div class="outer-box">
        <div class="inner-box">
              <header class="signup-header">
               <h1>Connecting People</h1>
               
               <h2>Register</h2>
              </header>
              <main class="signup-body">
                <p> 
                    <label for="name">Name</label>
                    <input type="text" id="name"  placeholder="name" required/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="email" required/>
                </p>
                <p>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="password" required/>
                </p>
                <p>
                    <label htmlFor="file">
                    <img style={{height:"2rem", width:"2rem"}} src={Add} alt='' />
                    <span className='avt'>Add an avatar</span>
                    </label>
                    <input style={{display:"none"}} type="file" id="file" placeholder="file" required/>
                </p>
                <p>
                    <input type="submit" id="submit" value="Create Account" required/>
                </p>
              </main>
              <footer class="signup-footer">
                 <p>Already have a Account? <a href="#">Sign In</a></p>
              </footer>
        </div>
        <div class="circle c1"></div>
        <div class="circle c2"></div>
    </div>
  )
}

export default Register
