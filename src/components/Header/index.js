import React, { useEffect } from "react";

function Header(props) {
  //   const {
  //     categories = [],
  //     setCurrentCategory,
  //     contactSelected,
  //     aboutSelected,
  //     currentCategory,
  //     setContactSelected,
  //     setAboutSelected,
  //   } = props;

  //   useEffect(() => {
  //     document.title = currentCategory.name;
  //   }, [currentCategory]);

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
          <li className={`mx-2`}>About Me</li>
          <li className={`mx-2`}>Portfolio</li>
          <li className={`mx-2`}>Contact Me</li>
          <li className={`mx-2`}>Resume</li>
        </ul>
      </nav>
    </header>
  );

}

export default Header;
