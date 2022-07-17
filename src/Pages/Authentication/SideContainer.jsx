import React, { Component } from "react";

import LoginSVG from "./images/undraw_secure_login_pdn4.svg";
import RegisterSVG from "./images/undraw_welcome_cats_thqn.svg";
import ForgotPasswordSVG from "./images/undraw_forgot_password_re_hxwm.svg";

const SideContainer = () => {
  return (
    <div className="col-xl-6 col-lg-12 col-md-9 auth-cover-background">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-xl-10 col-lg-12 col-md-9 text-center">
          <img src={LoginSVG} className="auth-illustration"></img>
          <div className="capitalfx-logo">
            <span className="text-dark-blue">
              Capital<span className="text-sky-blue">FX</span>
            </span>
          </div>
          {/* <p className="auth-side-description text-dark-blue">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SideContainer;
