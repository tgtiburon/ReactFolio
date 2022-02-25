import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  // Start off with about tab selected
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header
      // categories={categories}
      // setCurrentCategory={setCurrentCategory}
      // currentCategory={currentCategory}
      // contactSelected={contactSelected}
      // setContactSelected={setContactSelected}
      // aboutSelected={aboutSelected}
      // setAboutSelected={setAboutSelected}
      ></Header>

      <main>
        {aboutSelected && <About></About>}
        {portfolioSelected && <Portfolio></Portfolio>}
        {contactSelected && <ContactForm> </ContactForm>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
