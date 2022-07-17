import React from "react";
// import XyshmaLogo from "../assets/images/Xyshma-Logo.jpg";
// import "./css/SignIn.css";
// import "../assets/css/Style.css";

const XyshmaSignIn = () => {
  const Auths = [
    {
      Id: "Google",
      Name: "Google",
      Icon: "GoogleIcon",
      Link: "",
    },
    {
      Id: "Facebook",
      Name: "Facebook",
      Icon: "FacebookIcon",
      Link: "",
    },
    {
      Id: "Twitter",
      Name: "Twitter",
      Icon: "TwitterIcon",
      Link: "",
    },
    {
      Id: "GitHub",
      Name: "GitHub",
      Icon: "GitHubIcon",
      Link: "",
    },
    {
      Id: "LinkedIn",
      Name: "LinkedIn",
      Icon: "LinkedInIcon",
      Link: "",
    },
  ];
  return (
    <div className="Xyshma-SignIn">
      <header className="Xyshma-SignIn-Header">
        {/* <img src={XyshmaLogo} alt="Xyshma Logo" className="Xyshma-Logo" /> */}
        <span className="Xyshma-Brand">Sign In</span>
      </header>
      <div className="Xyshma-SignIn-Auth">
        {Auths.map((AuthVia) => (
          <div key={AuthVia.Id} className="AuthLink">
            <span className={AuthVia.Icon + " AuthIcon"}></span>
            <a href="" className="AuthName">
              {AuthVia.Name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XyshmaSignIn;
