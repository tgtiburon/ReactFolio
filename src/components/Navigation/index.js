import React, { useEffect } from "react";

function Navigation(props) {
  // "Lifting the state to the parent component App.js"
  const {
    menuItems = [],
    setCurrentMenuItem,
    currentMenuItem,
  } = props.headerProps;

 
  //console.log("props from Nav = ", props);
  //console.log("menuitems", props.headerProps.menuItems);
 // console.log("setCurrentMenuItem", props.headerProps.setCurrentMenuItem);
 // console.log("currentMenuItem", props.headerProps.currentMenuItem);

  //Change the title of the page
    useEffect(() => {
      document.title = currentMenuItem.name;
    }, [currentMenuItem]);

  return (
    <div className="header">
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
    </div>
  );
}

export default Navigation;
