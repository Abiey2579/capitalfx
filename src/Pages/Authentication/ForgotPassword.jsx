import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideContainer from "./SideContainer";

class ForgotPassword extends Component {
  state = {
    UserEmail: "",
    UserPassword: "",
    ForgotPasswordStatus: {},
  };

  HandleForgotPasswordRequest = (e) => {
    e.preventDefault();
    const { UserEmail } = this.state;
    const URL_FORGOT_PASSWORD =
      "http://localhost/php-auth-api/forgot-password.php";
    axios({
      method: "post",
      url: URL_FORGOT_PASSWORD,
      data: {
        email: UserEmail,
      },
    })
      .then((response) => {
        this.setState({ ForgotPasswordStatus: response.data });
      })
      .catch((error) => console.log(error));
  };

  HandleForgotPasswordInput(Input) {
    let InputName = Input.target.name;
    return this.setState({ [InputName]: Input.target.value });
  }

  ResponseMessage() {
    const { ForgotPasswordStatus } = this.state;
    return ForgotPasswordStatus.success === 1 ? (
      <div class="alert alert-success mt-3" role="alert">
        {ForgotPasswordStatus.message}
      </div>
    ) : (
      <div class="alert alert-danger mt-3" role="alert">
        {ForgotPasswordStatus.message}
      </div>
    );
  }

  render() {
    const { ForgotPasswordStatus } = this.state;
    return (
      <div className="row">
        <SideContainer />
        <div className="col-xl-6 col-lg-12 col-md-9">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-8 col-lg-12 col-md-9">
              <div className="text-center">
                <h1 className="h3 text-dark-blue mb-4">Forgot Password</h1>
              </div>
              <form onSubmit={this.HandleForgotPasswordRequest}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address..."
                    name="UserEmail"
                    onChange={(InputValue) =>
                      this.HandleForgotPasswordInput(InputValue)
                    }
                  />
                </div>
                <button className="btn bg-dark-blue text-white btn-block">
                  Reset
                </button>
                {ForgotPasswordStatus.hasOwnProperty("success") &&
                  this.ResponseMessage()}
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
