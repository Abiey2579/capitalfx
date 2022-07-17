import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="Xyshma-Footer">
      <div className="row container-fluid Xyshma-Footer-Content">
        <div className="col-md-5 Copyright-Container">
          <p>
            Copyright &copy; 2022 All Rights Reserved | Developed by
            <Link to="/about"> Abiey</Link>
          </p>
        </div>
        <div className="col-md-3 Social-Icon-Container">
          <Link to="/about" className="Whatsapp-Icon Social-Icon"></Link>
          <Link to="/about" className="Google-Icon Social-Icon"></Link>
          <a
            href="https://github.com/Abiey2579"
            target="_blank"
            rel="noreferrer"
            className="GitHub-Icon Social-Icon"
          ></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
