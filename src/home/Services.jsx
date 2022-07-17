import React from "react";
import "./css/Services.css";
import SourceCode from "./images/SourceCode.svg";
import GitHub from "./images/GitHub.png";
import CodeBug from "./images/CodeBug.png";

const Services = () => {
  return (
    <div className="Xyshma-Services container-fluid">
      <h1 className="Xyshma-Services-Header">
        Choose the Service that matter to you
      </h1>
      <div className="Xyshma-Services-Cards row">
        <div className="col-md-3 mb-4">
          <div className="x-card Xyshma-Services-Card">
            <div className="x-card-body">
              <img
                src={GitHub}
                alt="Xyshma-Code-Logo"
                className="Xyshma-Services-Cards-I"
              />
              <h3 className="x-card-title Xyshma-Services-Cards-H3">
                Open-Source
              </h3>
              <p className="Xyshma-Services-Cards-P">
                Contribute to an open-source projects, gain knowledge and make
                friends.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="x-card Xyshma-Services-Card">
            <div className="x-card-body">
              <img
                src={CodeBug}
                alt="Xyshma-Code-Logo"
                className="Xyshma-Services-Cards-I"
              />
              <h3 className="x-card-title Xyshma-Services-Cards-H3">
                Bug-Based
              </h3>
              <p className="Xyshma-Services-Cards-P">
                Strenghten your problem-solving skills, by solving bug-based
                projects.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="x-card Xyshma-Services-Card">
            <div className="x-card-body">
              <img
                src={SourceCode}
                alt="Xyshma-Code-Logo"
                className="Xyshma-Services-Cards-I"
              />
              <h3 className="x-card-title Xyshma-Services-Cards-H3">
                Soure-Code
              </h3>
              <p className="Xyshma-Services-Cards-P">
                Fork a project, make changes and submit it through github pull
                request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
