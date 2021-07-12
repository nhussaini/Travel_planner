import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import "./styles/app.scss";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import CityDetail from "./components/city/CityDetail";
import UserProfile from "./components/UserProfile";
import TripPlanner from "./components/TripPlanner";
import Error404 from "./components/Error404";

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
          <Route path="/trip/:city/new">
            <TripPlanner />
          </Route>
          <Route path="/:id">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
