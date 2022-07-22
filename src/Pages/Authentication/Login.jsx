import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideContainer from "./SideContainer";

class Login extends Component {
  state = {
    UserEmail: "",
    UserPassword: "",
    LoginStatus: {},
  };

  HandleLoginRequest = (e) => {
    e.preventDefault();
    const { UserEmail, UserPassword } = this.state;
    const URL_LOGIN = "http://localhost/php-auth-api/login.php";
    axios({
      method: "post",
      url: URL_LOGIN,
      data: {
        email: UserEmail,
        password: UserPassword,
      },
    })
      .then((response) => {
        this.setState({ LoginStatus: response.data });
      })
      .catch((error) => console.log(error));
  };

  HandleLoginInput(Input) {
    let InputName = Input.target.name;
    return this.setState({ [InputName]: Input.target.value });
  }

  ResponseMessage() {
    const { LoginStatus } = this.state;
    return LoginStatus.success === 1 ? (
      <div class="alert alert-success mt-3" role="alert">
        {LoginStatus.message}
      </div>
    ) : (
      <div class="alert alert-danger mt-3" role="alert">
        {LoginStatus.message}
      </div>
    );
  }

  render() {
    const { LoginStatus } = this.state;
    return (
      <div className="row">
        <SideContainer />
        <div className="col-xl-6 col-lg-12 col-md-9">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-8 col-lg-12 col-md-9">
              <div className="text-center">
                <h1 className="h3 text-dark-blue mb-4">Welcome to Back!</h1>
              </div>
              <form onSubmit={this.HandleLoginRequest}>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Email Address..."
                    name="UserEmail"
                    onChange={(InputValue) => this.HandleLoginInput(InputValue)}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="UserPassword"
                    onChange={(InputValue) => this.HandleLoginInput(InputValue)}
                  />
                </div>
                <button className="btn bg-dark-blue w-100 text-white">
                  Log In
                </button>
                {LoginStatus.hasOwnProperty("success") &&
                  this.ResponseMessage()}
              </form>
              <hr />
              <div className="text-center">
                <Link to="/forgot-password" className="small text-blue">
                  Forgot Password
                </Link>
              </div>
              <div className="text-center">
                <Link to="/register" className="small text-blue">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
