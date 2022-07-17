import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  return (
    <header className="Xyshma-Header">
      <div className="Xyshma-Header-Description">
        <p className="Mini-Header">Discover the colorful world</p>
        <h1 className="Welcome-Title">Build your dream</h1>
        <Link to="/projects" className="x-btn x-btn-warning">
          Explore Projects
        </Link>
      </div>
    </header>
  );
};

export default Header;
