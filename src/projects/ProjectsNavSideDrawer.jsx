import React from "react";
import XyshmaLogo from "./../assets/images/Xyshma-Logo.svg";

const ProjectNavigationSideDrawer = (props) => {
  return (
    <React.Fragment>
      <div className={"SideDrawer " + props.SideDrawerToggle + "-SideDrawer"}>
        <header className="SideDrawer-Head">
          <div className="Xyshma-Logo-Brand-Wrapper">
            <img
              src={XyshmaLogo}
              className="SideDrawer-Xyshma-Logo"
              alt="Xyshma-Logo"
            />
            <span className="SideDrawer-Xyshma-Brand">Xyshma</span>
          </div>
          <div className="SideDrawer-Close" onClick={props.HideSideDrawer}>
            <span></span>
          </div>
        </header>
        <ul className="SideDrawer-Item-Container">
          {props.SideDrawerItems.map((MappedItem) => (
            <li className="SideDrawer-Item" key={MappedItem.Item}>
              <a href={MappedItem.ItemLink} className="SideDrawer-Link">
                <i className={"SideDrawer-Icon " + MappedItem.Icon}></i>
                <span className="SideDrawer-Item-Label">{MappedItem.Item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={"SideDrawer-Overlay " + props.SideDrawerToggle + "-Overlay"}
        onClick={props.HideSideDrawer}
      ></div>
    </React.Fragment>
  );
};

export default ProjectNavigationSideDrawer;
