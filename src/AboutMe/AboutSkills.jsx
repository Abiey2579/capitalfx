import React from "react";
import "./css/AboutSkills.css";

import AboutSkillsFrontend from "./components/AboutSkills-Frontend";

const AboutSkills = () => {
  return (
    <div className="AboutSkills">
      <h1 className="AboutSkills-Header">My Skills</h1>
      <div className="AboutSkills-Container">
        <div className="AboutSkills-Tabs">
          <input
            type="radio"
            id="radio-1"
            name="tabs"
            data-section="Frontend"
            checked
          ></input>
          <label className="AboutSkills-Tab" for="radio-1">
            Frontend
          </label>

          <input
            type="radio"
            id="radio-2"
            name="tabs"
            data-section="Backend"
          ></input>
          <label className="AboutSkills-Tab" for="radio-2">
            Backend
          </label>

          <input
            type="radio"
            id="radio-3"
            name="tabs"
            data-section="UIUXDesign"
          ></input>
          <label className="AboutSkills-Tab" for="radio-3">
            UI/UX Design
          </label>

          <input
            type="radio"
            id="radio-4"
            name="tabs"
            data-section="DataAnalysis"
          ></input>
          <label className="AboutSkills-Tab" for="radio-4">
            Data Analysis
          </label>

          <input
            type="radio"
            id="radio-5"
            name="tabs"
            data-section="Automation"
          ></input>
          <label className="AboutSkills-Tab" for="radio-5">
            Automation
          </label>

          <input
            type="radio"
            id="radio-6"
            name="tabs"
            data-section="GraphicDesign"
          ></input>
          <label className="AboutSkills-Tab" for="radio-6">
            Graphic Design
          </label>

          <input
            type="radio"
            id="radio-7"
            name="tabs"
            data-section="SEO"
          ></input>
          <label className="AboutSkills-Tab" for="radio-7">
            SEO
          </label>
        </div>

        <div className="divider"></div>

        <div id="Frontend" className="AboutSkills-Card is-active">
          <AboutSkillsFrontend />
        </div>

        <div id="Backend" className="AboutSkills-Card">
          <h1>Back end</h1>
        </div>

        <div id="UIUXDesign" className="AboutSkills-Card">
          <h1>UI Design</h1>
        </div>

        <div id="DataAnalysis" className="AboutSkills-Card">
          <h1>Data Analysis</h1>
        </div>

        <div id="Automation" className="AboutSkills-Card">
          <h1>Automation</h1>
        </div>

        <div id="GraphicDesign" className="AboutSkills-Card">
          <h1>Graphic Design </h1>
        </div>

        <div id="SEO" className="AboutSkills-Card">
          <h1>SEO</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
