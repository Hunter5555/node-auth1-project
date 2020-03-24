import React, { Component } from "react";
import Axios from "axios";

export class Users extends Component {
  state = {};

  componentDidMount = () => {
    Axios.get("http://localhost:5000/api/restricted/users")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
      </div>
    );
  }
}

export default Users;