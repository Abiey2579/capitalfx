import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// AUTHENTICATION STYLINGS
import "./Pages/Authentication/css/AuthenticationStyle.css";

// AUTHENTICATION PARENT COMPONENT
import Authentication from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <Authentication />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
