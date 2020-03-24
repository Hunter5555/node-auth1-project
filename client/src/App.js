import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Users from "./components/Users.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Works!</h1>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </div>
    );
  }
}

export default App;