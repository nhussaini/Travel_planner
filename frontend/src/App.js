import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import "./styles/app.scss";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import LocationDetail from "./components/LocationDetail";

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }

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
            <LocationDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
