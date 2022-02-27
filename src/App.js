import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  // Start off with about tab selected
  const [menuItems] = useState([
    {
      name: "About",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);
  const [currentMenuItem, setCurrentMenuItem] = useState(menuItems[0]);

  return (
    <div>
      <Header
        menuItems={menuItems}
        setCurrentMenuItem={setCurrentMenuItem}
        currentMenuItem={currentMenuItem}
      ></Header>

      <main>
        {currentMenuItem.name === "About" && <About></About>}
        {currentMenuItem.name === "Portfolio" && <Portfolio></Portfolio>}
        {currentMenuItem.name === "Contact" && <ContactForm> </ContactForm>}
        {currentMenuItem.name === "Resume" && <Resume></Resume>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
