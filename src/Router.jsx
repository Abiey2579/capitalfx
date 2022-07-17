import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME PAGE COMPONENT
import XyshmaHome from "./home/Index";

// PROJECTS COMPONENT
import XyshmaProjects from "./projects/Index";

// ABOUT COMPONENT
import AboutYahayaIndex from "./AboutMe/AboutIndex";

const Xyshma = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<XyshmaHome />} />
        <Route path="/projects" element={<XyshmaProjects />} />
        <Route path="/about" element={<AboutYahayaIndex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Xyshma;
