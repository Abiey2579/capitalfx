import React from "react";
import "./../assets/css/Xyshma-Defaults.css";

// CUSTOM COMPONENTS
import Navigation from "./Navigation";
import NavigationSideDrawer from "./NavigationSideDrawer";

class MainNav extends React.Component {
  state = {
    SideDrawer: 0,
    ToggleControl: undefined,
  };

  render() {
    const { SideDrawer, ToggleControl } = this.state;

    const NavBarLinks = [
      { ItemLink: "/", Item: "Home", Icon: "fi fi-home fi-fw" },
      { ItemLink: "/about", Item: "About", Icon: "fi fi-person fi-fw" },
      {
        ItemLink: "/projects",
        Item: "Projects",
        Icon: "fa fa-laptop-code fa-fw",
      },
    ];

    const ShowSideDrawer = () => {
      this.setState({ SideDrawer: 1, ToggleControl: "Show" });
    };

    const HideSideDrawer = () => {
      this.setState({ SideDrawer: 0, ToggleControl: "Hide" });
    };

    const AnimatedHideSideDrawer = () => {
      this.setState({ ToggleControl: "Hide" });
      setTimeout(HideSideDrawer, 300);
    };

    return (
      <React.Fragment>
        <Navigation NavBarLinks={NavBarLinks} ShowSideDrawer={ShowSideDrawer} />
        {SideDrawer === 1 && (
          <NavigationSideDrawer
            SideDrawerItems={NavBarLinks}
            SideDrawerToggle={ToggleControl}
            HideSideDrawer={AnimatedHideSideDrawer}
          />
        )}
      </React.Fragment>
    );
  }
}

export default MainNav;
