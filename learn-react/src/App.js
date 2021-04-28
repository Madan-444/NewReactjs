import React from "react";
import "./App.css";

function App() {
  return <div className='pa-container'>
    <div className="cursor"></div>
    <nav>
      <h1>Ma Dan</h1>
      <ul className='nav-links'>
        <li>Home</li>
        <li>Contacts</li>
        <li>Services</li>
      </ul>
    </nav>
    <div className="box-container">
    <div className="box">
      <p>Container</p>
    </div>
    </div>
  </div>
}

export default App;
