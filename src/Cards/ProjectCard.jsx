import React from "react";
import "./css/ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="x-card Project-Card">
      <div className="x-card-body Project-Card-Body">
        <div className="card-title-wrapper">
          <a
            href={props.CardFollow}
            className="x-card-follow x-card-title"
            target="_blank"
            rel="noreferrer"
          >
            {props.CardTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
