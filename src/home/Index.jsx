import React from "react";
import "./../assets/css/Xyshma-Defaults.css";

// CUSTOM COMPONENTS
import MainNav from "./../Navigator/Index";
import Header from "./Header";
import About from "./About";
import Services from "./Services";
import XyshmaProjects from "./Projects";
import Footer from "./../Footer/Footer";

class XyshmaHome extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <MainNav />
        <Header />
        <About />
        <Services />
        <XyshmaProjects />
        <Footer />
      </React.Fragment>
    );
  }
}

export default XyshmaHome;
