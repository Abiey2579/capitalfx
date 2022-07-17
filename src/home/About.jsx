import React from "react";
import { Link } from "react-router-dom";
import About1 from "./images/About-1.jpg";
import About2 from "./images/About-2.svg";
import "./css/About.css";

const About = () => {
  return (
    <div className="Xyshma-About">
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4">
            <div className="x-card About-Card">
              <img src={About1} className="x-card-img" alt="About Author" />
              <div className="x-card-body About-Card-Body">
                <h4 className="x-card-title About-Card-Header">Founder</h4>
                <p className="x-card-description">
                  I am a qualified Web Developer mostly deals with Frontend Web
                  Development, with 5 years experience.
                </p>
                <Link to="/about" className="x-card-follow About-Card-Link">
                  About Founder
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="x-card About-Card">
              <img src={About2} className="x-card-img" alt="About Author" />
              <div className="x-card-body">
                <h4 className="x-card-title">Xyshma</h4>
                <p className="x-card-description">
                  Discover the colorful world, Build your dream, and earn a
                  certificate just by contributing.
                </p>
                <Link to="/about" className="x-card-follow About-Card-Link">
                  About Xyshma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
