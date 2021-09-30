import React from 'react';
import './App.css';
import me from './assets/me.jpg';

function App() {
  return (
    <div className="App">
      <div className="imgDP"><img src={me} alt="profile picture" /></div>
      <div className="details">
        <h3>Hello I'm</h3>
        <div className="name">Akhil D</div>
        <h2>Assistant System Engineer</h2>
        <h2>Developer at TATA Consultancy Services.</h2>
        <p></p>
      </div>
    </div>

  );
}

export default App;
