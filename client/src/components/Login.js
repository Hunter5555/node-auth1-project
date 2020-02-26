
import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleLoginChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    const loggedUser = {
      username: this.state.credentials.username,
      password: this.state.credentials.password
    };

    axios
      .post("http://localhost:5000/api/login", loggedUser)
      .then(res => {
        localStorage.setItem("auth", `${this.state.credentials.username}`);
        this.props.history.push("/users");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="login">
        <h1>Welcome back</h1>
        <form className="login-form" onSubmit={this.login}>
          <input
            className="login-username"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleLoginChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          <input
            className="login-password"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleLoginChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          <button>SIGN IN</button>
        </form>
      </div>
    );
  }
}

export default Login;