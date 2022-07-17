import React from "react";
import "./css/Projects.css";
import ProjectCard from "../Cards/ProjectCard";
import GitHubJSON from "./../projects/Git.json";

class XyshmaProjects extends React.Component {
  state = {
    GitHub: "",
  };

  componentDidMount() {
    fetch("https://api.github.com/users/Abiey2579/repos")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          this.setState({ GitHub: data });
        }
      })
      .catch((rejected) => {
        // alert(rejected);
        this.setState({ GitHub: GitHubJSON });
      });
  }

  render() {
    return (
      <div className="Xyshma-Projects">
        <h1 className="Xyshma-Projects-Header">
          Explore in-depth with Xyshma Projects
        </h1>
        <div className="Xyshma-Projects-Container row">
          {this.state.GitHub === ""
            ? ""
            : this.state.GitHub.map((CardItems) => (
                <div className="col-md-4 mb-5" key={CardItems.id}>
                  <ProjectCard
                    CardTitle={CardItems.name}
                    CardDescription={CardItems.description}
                    CardFollow={CardItems.html_url}
                    CardBugBased={CardItems.license}
                  />
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default XyshmaProjects;
