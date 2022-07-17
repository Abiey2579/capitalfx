import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="col-xl-6 col-lg-12 col-md-9">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-12 col-md-9">
            <div className="text-center">
              <h1 className="h3 text-dark-blue mb-4">Welcome to Back!</h1>
            </div>
            <form className="user" method="post" id="CapitalFX-Login-Form">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address..."
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-user"
                  id="exampleInputPassword"
                  placeholder="Password"
                ></input>
              </div>
              <button className="btn bg-dark-blue btn-user btn-block text-white">
                Log In
              </button>
            </form>
            <hr></hr>
            <div className="text-center">
              <a className="small text-blue" href="forgot-password.html">
                Forgot Password
              </a>
            </div>
            <div className="text-center">
              <a className="small text-blue" href="register.html">
                Create an account
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
