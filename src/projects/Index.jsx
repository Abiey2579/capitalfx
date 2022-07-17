import React from "react";
import "./../assets/css/Xyshma-Defaults.css";

import MainNav from "./../Navigator/Index";
import Projects from "./Projects";
import Footer from "./../Footer/Footer";

class XyshmaProjects extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <MainNav />
        <Projects />
        <Footer />
      </React.Fragment>
    );
  }
}

export default XyshmaProjects;
