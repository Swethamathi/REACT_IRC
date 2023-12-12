
import React from 'react';
import './Assets/css/style.css';
; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  );
};
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>                                             &copy; 2023 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <h1>WELCOME TO THE WEBSITE</h1>
        <p>This is the main content of your website.</p>
      </div>
      <Footer />
    </div>
    
    
  );
};

export default App;
import React from 'react';
import './CodePenEffect.css'; // Import your CSS file if you have one

class CodePenEffect extends App {
  render() {
    return (
      <div className="codepen-effect">
        {
          <div class="fire-wrapper">
  <img class="fire" src="https://www.stivaliserna.com/assets/rocket/fire.svg" />
</div>

<div class="rain rain1"></div>
<div class="rain rain2">
  <div class="drop drop2"></div>
</div>
<div class="rain rain3"></div>
<div class="rain rain4"></div>
<div class="rain rain5">
  <div class="drop drop5"></div>
</div>
<div class="rain rain6"></div>
<div class="rain rain7"></div>
<div class="rain rain8">
  <div class="drop drop8"></div>
</div>
<div class="rain rain9"></div>
<div class="rain rain10"></div>
<div class="drop drop11"></div>
<div class="drop drop12"></div>
<div id="canvas"></div>
}
      </div>
    );
  }
}

export default CodePenEffect;