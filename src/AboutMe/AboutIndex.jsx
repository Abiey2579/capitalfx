import React from "react";

import MainNav from "../Navigator/Index";
import AboutHeader from "./AboutHeader";
import AboutYahaya from "./AboutYahaya";
import AboutSkills from "./AboutSkills";
import Footer from "../Footer/Footer";

const AboutYahayaIndex = () => {
  return (
    <React.Fragment>
      <MainNav />
      <AboutHeader />
      <AboutYahaya />
      <AboutSkills />
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default AboutYahayaIndex;
