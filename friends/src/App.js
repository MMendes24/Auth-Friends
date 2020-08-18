import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login'

import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route>
          <Login />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
