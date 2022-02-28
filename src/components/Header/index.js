import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  // Pass props on futher to the Navigation component

  return (
    <header className="header">
      <Navigation headerProps={props} />
    </header>
  );
}

export default Header;
