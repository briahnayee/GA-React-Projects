import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './Home';
import Procedure from './Procedure';
import Procedures from './Procedures';
import Contact from './Contact';

const PROCEDURES = [
  {
    title: 'Teeth Cleaning',
    description: 'Shiny and clean'
  },
  {
    title: 'Cavity Filling',
    description: 'Lasts for 10 years'
  },
  {
    title: 'Root Canals',
    description: 'Fun with Nitrous Oxide'
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        {/* Notice the two different kinds of whitespace */}
        <nav>
          <Link to="/">Home</Link>
          &nbsp;
          <Link to="/procedures">Procedures</Link>
          {' '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Switch>
          <Route path="/procedures/:id" render={ (props) => 
            <Procedure procedures={PROCEDURES} {...props} /> 
            } />
          <Route path="/procedures" render={ (props) => 
              <Procedures procedures={PROCEDURES} {...props} />
            } />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
