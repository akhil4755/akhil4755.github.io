import React from "react";
import "./App.css";
import me from "./assets/me.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Achievments from "./components/achievments";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
      <div className="imgDP">
        <img src={me} alt="dp" />
      </div>
      <div className="details">
        <div>
          <ul>
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
          </ul>
        </div>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          {/* <Route exact path='/projects' component={Projects}></Route> */}
          <Route exact path="/achievments" component={Achievments}></Route>
          {/* <Route exact path='/experience' component={Experiences}></Route> */}
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
