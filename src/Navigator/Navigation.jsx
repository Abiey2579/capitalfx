import React from "react";
import { Link } from "react-router-dom";
import XyshmaLogo from "./../assets/images/Xyshma-Logo.svg";
import "./css/Navigation.css";

const Navigation = (props) => {
  return (
    <nav className="NavBar">
      <div className="NavBar-Container">
        <div className="NavBar-Brand">
          <button className="SideDrawer-Toggle" onClick={props.ShowSideDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <img src={XyshmaLogo} className="Xyshma-Logo" alt="Xyshma-Logo" />
          <span className="Xyshma-Brand">Xyshma</span>
        </div>
        <div className="NavBar-Collapse">
          <ul className="NavBar-Navigation">
            {props.NavBarLinks.map((MappedItem) => (
              <li className="NavBar-Item" key={MappedItem.Item}>
                <Link to={MappedItem.ItemLink} className="NavBar-Link">
                  {MappedItem.Item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
