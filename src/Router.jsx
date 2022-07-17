import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// HOME PAGE COMPONENT
import Authentication from "./Pages/Authentication/Index";

const CapitalFX = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CapitalFX;
