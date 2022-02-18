import React, { useState } from "react";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
//import ProjectList from "./components/Projectlist";

function App() {
  const [categories] = useState([
    {
      name: "Featured",
      description: "Projects I featured",
    },
    {
      name: "Express",
      description: "Projects with express",
    },
    {
      name: "MySQL",
      description: "Projects with MySQL",
    },
    {
      name: "MongoDB",
      description: "Projects with MongoDB",
    },
    {
      name: "React",
      description: "Projects with React",
    },
  ]);

  const [contactSelected, setContactSelected] = useState(false);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        {!contactSelected ? (
          <>
            <Project currentCategory={currentCategory}></Project>
          </>
        ) : (
          <ContactForm> </ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
