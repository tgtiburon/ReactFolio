import React, { useEffect, useState } from "react";

function Header(props) {
  // "Lifting the state to the parent component App.js"
  const { menuItems = [], setCurrentMenuItem, currentMenuItem } = props;

  useEffect(() => {
    document.title = currentMenuItem.name;
  }, [currentMenuItem]);
  // Which menu item was selected
  // function menuSelected(menuItem) {
  //   console.log(menuItem);
  //   //console.log("menuItem");
  // }

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Tony's Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {menuItems.map((menuItem) => (
            <li
              className={`mx-2 ${
                currentMenuItem.name === menuItem.name && "navActive"
              }`}
              key={menuItem.name}
            >
              <span onClick={() => setCurrentMenuItem(menuItem)}>
                {menuItem.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
