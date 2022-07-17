import React, { Component } from "react";

class ForgotPassword extends Component {
  state = {};
  render() {
    return (
      <div className="col-xl-6 col-lg-12 col-md-9">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-8 col-lg-12 col-md-9">
            <div className="text-center">
              <h1 className="h3 text-dark-blue mb-4">Forgot Password</h1>
            </div>
            <form className="user">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address..."
                ></input>
              </div>
              <a
                href="login.html"
                className="btn bg-dark-blue text-white btn-user btn-block"
              >
                Reset
              </a>
            </form>
            <hr></hr>
            <div className="text-center">
              <a className="small text-blue" href="index.html">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
