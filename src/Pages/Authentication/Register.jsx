import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideContainer from "./SideContainer";

class Register extends Component {
  state = {
    UserEmail: "",
    UserPassword: "",
    UserRetypePassword: "",
    RegisterStatus: {},
  };

  HandleRegisterRequest = (e) => {
    e.preventDefault();
    const { UserEmail, UserPassword, UserRetypePassword } = this.state;
    const URL_REGISTER = "http://localhost/php-auth-api/register.php";
    axios({
      method: "post",
      url: URL_REGISTER,
      data: {
        email: UserEmail,
        password: UserPassword,
        retypepassword: UserRetypePassword,
      },
    })
      .then((response) => {
        this.setState({ RegisterStatus: response.data });
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  HandleRegisterInput(Input) {
    let InputName = Input.target.name;
    return this.setState({ [InputName]: Input.target.value });
  }

  ResponseMessage() {
    const { RegisterStatus } = this.state;
    return RegisterStatus.success === 1 ? (
      <div class="alert alert-success mt-3" role="alert">
        {RegisterStatus.message}
      </div>
    ) : (
      <div class="alert alert-danger mt-3" role="alert">
        {RegisterStatus.message}
      </div>
    );
  }

  render() {
    const { RegisterStatus } = this.state;
    return (
      <div className="row">
        <SideContainer />
        <div className="col-xl-6 col-lg-12 col-md-9">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-8 col-lg-12 col-md-9">
              <div className="text-center">
                <h1 className="h3 text-dark-blue mb-4">Welcome to CapitalFX</h1>
              </div>
              <form onSubmit={this.HandleRegisterRequest}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email Address..."
                    name="UserEmail"
                    onChange={(InputValue) =>
                      this.HandleRegisterInput(InputValue)
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="UserPassword"
                    onChange={(InputValue) =>
                      this.HandleRegisterInput(InputValue)
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-type Password"
                    name="UserRetypePassword"
                    onChange={(InputValue) =>
                      this.HandleRegisterInput(InputValue)
                    }
                  />
                </div>
                <button className="btn bg-dark-blue text-white btn-block">
                  Create an account
                </button>
                {RegisterStatus.hasOwnProperty("success") &&
                  this.ResponseMessage()}
              </form>
              <hr />
              <div className="text-center">
                <Link to="/" className="small">
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

export default Register;
