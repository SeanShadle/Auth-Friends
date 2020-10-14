import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Login from './components/Login';
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'
import Friend from './components/Friend'


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Protected Page</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <PrivateRoute exact path="/friends" component={Friends}/>
        <PrivateRoute exact path="/friends/:id" component={Friend}/>
        <Route path="/login" component={Login}/>
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
