import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AUTHENTICATION PAGE COMPONENT
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import SignInSide from "./Pages/Authentication/SignIn";

const CapitalFX = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CapitalFX;
