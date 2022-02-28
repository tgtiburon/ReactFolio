import React, { useEffect } from "react";

function Header(props) {
  // "Lifting the state to the parent component App.js"
  const { menuItems = [], setCurrentMenuItem, currentMenuItem } = props;

  // Change the title of the page
  useEffect(() => {
    document.title = currentMenuItem.name;
  }, [currentMenuItem]);

  return (
    <header className="header">
      <div>
        <a
          className="pageTitle flex-row justify-center align-center "
          data-testid="link"
          href="/"
        >
          <img
            className="nameLogo"
            src={require(`../../assets/Shark_Logo_Bloody_Text_FINAL.png`)}
            height="90"
            width="180"
            alt=""
          />
          <h3 className="navTitle px-2">Portfolio</h3>
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
