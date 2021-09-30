import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={me}></img>
      <div className="details">
        <h3>PROJECTS</h3>
            <ul>
                <li>Worked on a Data Migration Project from Teradata to Google BigQuery in TCS</li>
                <li>On-going project on a Simple CashFlow Management , App as a Self-study on React Native</li>
                <li>Created the algorithm for Project on Web-Based OnPage SEO Tool , as the Final Year Project, BCA</li>
                <li>Co-founder and Full-stack developer at vieww.me</li>
                <p>Vieww.me is a react-node project which uses the following stacks:-
i. React ii. Redux iii. Express iv. Bootstrap, v. Draft, vi. EJS, etc</p>
            </ul> 
        
       
      </div>
    </div>

  );
}

export default App;