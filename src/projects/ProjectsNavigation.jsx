import React from "react";
import XyshmaLogo from "./../assets/images/Xyshma-Logo.svg";

const ProjectNavigation = (props) => {
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
                <a href={MappedItem.ItemLink} className="NavBar-Link">
                  {MappedItem.Item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavigation;
