import React, { Component } from "react";

import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import SideContainer from "./SideContainer";

class Authentication extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <SideContainer />
        <Login />
        <Register />
        <ForgotPassword />
      </div>
    );
  }
}

export default Authentication;
