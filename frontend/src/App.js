import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import "./styles/app.scss";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import CityDetail from "./components/CityDetail";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/cities/:id">
            <CityDetail />
          </Route>
          <Route path="/users/:id">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
