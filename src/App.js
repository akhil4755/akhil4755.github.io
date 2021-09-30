import React from 'react';
import './App.css';
import me from './assets/me.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import achievments from './components/achievments';
import projects from './components/project';



function App() {
  return (
    <Router>
    <div className="App">
      <img src={me} alt="Personal" ></img>
      <div className="details">
        <div>
        <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/achievments">Achievments</Link>
              </li>
              <li>
                <Link to="/experience">Experiences</Link>
              </li>
        </div>
        <h3>Hello I'm</h3>
        <div className="name">Akhil D</div>
        <h2>Assistant System Engineer</h2>
        <h2>Developer at TATA Consultancy Services.</h2>
        <p></p>
      </div>
      <Switch>
              {/* <Route exact path='/' component={Home}></Route> */}
              <Route exact path='/projects' component={projects}></Route>
              <Route exact path='/achievments' component={achievments}></Route>
              {/* <Route exact path='/experience' component={Experiences}></Route> */}
            </Switch>
    </div>
    </Router>

  );
}

export default App;
