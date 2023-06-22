import React from 'react'

const Login = () => {
  return (
    <div class="outer-box">
    <div class="inner-box">
          <header class="signup-header">
           
           <h2>Login</h2>
          </header>
          <main class="signup-body">
            <p> 
                <label for="name">Name</label>
                <input type="text" id="name"  placeholder="name" required/>
            </p>
            <p>
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="password" required/>
            </p>
            <p>
                <input type="submit" id="submit" value="Sign in" required/>
            </p>
          </main>
          <footer class="signup-footer">
             <p>Don't have a Account ? <a href="#">Register</a></p>
          </footer>
    </div>
    <div class="circle c1"></div>
    <div class="circle c2"></div>
</div>
  )
}

export default Login
