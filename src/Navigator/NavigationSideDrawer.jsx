import React from "react";
import { Link } from "react-router-dom";
import XyshmaLogo from "./../assets/images/Xyshma-Logo.svg";
import "./css/NavigationSideDrawer.css";

const NavigationSideDrawer = (props) => {
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
              <Link to={MappedItem.ItemLink} className="SideDrawer-Link">
                <i className={"SideDrawer-Icon " + MappedItem.Icon}></i>
                <span className="SideDrawer-Item-Label">{MappedItem.Item}</span>
              </Link>
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

export default NavigationSideDrawer;
