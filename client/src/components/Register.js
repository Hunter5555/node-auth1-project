import React, { Component } from "react";
import axios from "axios";

export class Register extends Component {
  state = {
    registration: {
      username: "",
      password: ""
    }
  };

  handleRegChanges = e => {
    this.setState({
      registration: {
        ...this.state.registration,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    let newUser = {
      username: this.state.registration.username,
      password: this.state.registration.password
    };

    const newLogin = {
      username: this.state.registration.username,
      password: this.state.registration.password
    };

    axios
      .post("http://localhost:5000/api/register", newUser)
      .then(() => this.props.history.push("/users"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Join Now and Get Your Free Score!</h2>
        <form className="form" onSubmit={this.register}>
          <input
            className="reg-username"
            type="type"
            name="username"
            value={this.state.registration.username}
            onChange={this.handleRegChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          <input
            className="reg-password"
            type="password"
            name="password"
            value={this.state.registration.password}
            onChange={this.handleRegChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          <button>Register Now</button>
        </form>
        <p className="terms">
          By using LifeGPA you agree to the <b>Terms of Service</b> and{" "}
          <b>Privacy Policy</b>
        </p>
      </div>
    );
  }
}

export default Register;