import React from 'react';
import './Assets/css/style.css';
import './Assets/css/nav.css';

function App() {
  return (
    <div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">signup</a>
      </nav>

      
       

        <div className="wrapper">
          <div className="title-text">
            <div className="title login">
              LOGIN FORM
            </div>
          </div>
          <div className="form-container">
            <div className="form-inner">
              <form action="#" className="login">
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Login" />
                </div>
                <div className="signup-link">
                  Not a member? <a href="">Signup now</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default App;
