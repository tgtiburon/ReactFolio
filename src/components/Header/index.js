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
    <header className="header">
      <div className="">
        <a
          className="flex-row justify-center align-center "
          data-testid="link"
          href="/"
        >
          <img
            className="nameLogo"
            src={require(`../../assets/Shark_Logo_Bloody_Text_FINAL.png`)}
            height="90"
            width="180"
          />
          <h3 className="navText px-2">Portfolio</h3>
        </a>
      </div>
      <nav>
        <ul className="navText flex-row justify-center">
          {menuItems.map((menuItem) => (
            <li
              className={`mx-5 ${
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
