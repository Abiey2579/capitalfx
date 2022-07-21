import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideContainer from "./SideContainer";

class ForgotPassword extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <SideContainer />
        <div className="col-xl-6 col-lg-12 col-md-9">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-8 col-lg-12 col-md-9">
              <div className="text-center">
                <h1 className="h3 text-dark-blue mb-4">Forgot Password</h1>
              </div>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address..."
                  />
                </div>
                <button className="btn bg-dark-blue text-white btn-block">
                  Reset
                </button>
              </form>
              <hr />
              <div className="text-center">
                <Link to="/" className="small text-blue">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
