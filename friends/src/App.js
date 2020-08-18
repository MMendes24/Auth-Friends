import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import FriendForm from './components/FriendForm'
import PrivateRoute from './components/PrivateRoute'



import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <PrivateRoute exact path="/friends" component={FriendsList} />
      <PrivateRoute exact path="/friendform" component={FriendForm} />
      <Route path="/login" component={Login} />
        <Route>
          <Login />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
