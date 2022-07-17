import React from "react";
import "./css/AboutHeader.css";

const AboutHeader = () => {
  return (
    <header className="About-Header">
      <div className="About-Header-Overlay">
        <h2 className="About-Yahaya-Name">Yahaya Muhammad Bello</h2>
        <h5 className="About-Yahaya-Profession">
          A Creative Freelancer & Full-Stack Developer
        </h5>
        <button className="About-Yahaya-Hire-Me x-btn x-btn-warning">
          Hire Me
        </button>
      </div>
    </header>
  );
};

export default AboutHeader;
