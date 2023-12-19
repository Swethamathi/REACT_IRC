import React from 'react';
import Navbar from './Components/nav.js';
import Home from './Components/Home.js';
import Log from './Components/Log.js';
import Register from './Components/Register.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './Assets/css//nav.css';  // Corrected import statement

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
