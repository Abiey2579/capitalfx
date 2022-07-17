import React from "react";
import "./css/AboutYahaya.css";
import AboutYahayaPicture44 from "./image/About-Yahaya-Picture-4-4.jpg";

const AboutYahaya = () => {
  return (
    <div className="About-Yahaya-Section container row">
      <div className="About-Yahaya-Image-Container col-md-4">
        <img
          src={AboutYahayaPicture44}
          className="About-Yahaya-Image"
          alt="About Yahaya Image"
        />
      </div>
      <div className="About-Yahaya-Info-Container col-md-6">
        <h2 className="About-Yahaya-Info-Head">Hi there, I'm Yahaya</h2>
        <h2 className="About-Yahaya-Info-SubHead">Full-stack Web Developer</h2>
        <p className="About-Yahaya-Info-Preamble">
          I'm an expert developer, with 5+ years experience in designing and
          developing user interface, testing, debugging and tracing staff within
          e-commerce technologies. Proven ability in optimizing web performance
          and functionalities that improve data retrieval and workflow
          efficiencies.
        </p>
        <a href="" className="x-btn x-btn-warning mr-2">
          My Resume
        </a>
        <a href="" className="x-btn x-btn-warning">
          My Psychometic
        </a>
      </div>
    </div>
  );
};

export default AboutYahaya;
