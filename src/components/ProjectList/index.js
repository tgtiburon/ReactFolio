import React, { useState } from "react";
import Modal from "../Modal";

///import photo from "../../assets/small/commercial/0.jpg";
// pass in the props and deconstruct out category
function ProjectList({ category }) {
  // Start the app with the modal closed
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: "Budget Anywhere",
      //category: "PWA",
      category: "React",
      description:
        "This is both a website and a PWA (Progressive Web App) which allows the user to track their budget. This app integrates the ability to do transactions when you are connected with the internet, but also when you are offline. It utilizes a service worker and IndexedDb to allow for this offline functionality. In addition, you can install this app on your mobile device or desktop by clicking the symbol in the address bar.",
    },
    {
      name: "Readme Architect",
      category: "Node",
      description:
        "This application allows the user to create a professional Readme markdown file for any type of project. ",
    },
    {
      name: "Learn Regex",
      category: "Regex",
      description:
        "I am writing the Regular Expression tutorial to help new or seasoned developers who may have questions about what exactly a Regular Expression is, and how they might use it.  This paper will cover what Regex is, and some cases of how it might be used.",
    },
    {
      name: "Digital DB",
      category: "MySQL",
      description:
        "This project provides a backend for an ecommerce website.",
    },
    {
      name: "Train of Thought",
      category: "MongoDB",
      description:
        "This is a social media API app.  It uses MongoDB and Mongoose to accomplish this goal.",
    },
    {
      name: "Nerd News",
      category: "MySQL",
      description:
        "This app is designed to be used as a blogging site.  It allows for users to create accounts and then write their own posts, as well as comment on other's posts.",
    },
    {
      name: "Critique Code",
      category: "MySQL",
      description:
        "We're Not Stack Overflow. Welcome to Reddit uhh I mean Welcome to Critique Code. Are you tired of getting incessantly cyber-bullied on Stack Overflow? Are you tired of feeling like a terrible coder who has no business opening up their IDE everyday? Welcome to Reddit dot com Here you can write the worst code imaginable and post it for a laugh, or if that terrible code was an accident, then you can look for feed back. Are you a great coder looking to help others learn? Are you a bad coder looking to learn? Or Are you painfully average and just looking to share the dumbest for loop you could think of writing?",
    },
    {
      name: "Idea Cache",
      category: "Node Express",
      description:
        "Idea Cache allows the user to store their ideas on an express server.  It demonstrates the use of node.js, express server, as well as overall quality programing practices.",
    },
    {
      name: "Work Day Scheduler",
      category: "JS, JQuery",
      description:
        "A website that allows the user to schedule events for each hour of the work day. It will dynamically update the events and color code them realtive to when they are due. Red means that the item is due right now. Green means it is in the future, and grey means it is in the past.",
    },
    {
      name: "Web Security",
      category: "JS, JQUERY",
      description:
        "As beginning web developers we find ourself using the internet to help us solve all sorts of issues related to creating the perfect (we hope) websites. Keeping up on the latest technology news and being able to scan a website we have never heard of that shows up on our searches for help, both seem very valuable to us.",
    },
    {
      name: "Weather Watcher",
      category: "JS, JQuery, Bootstrap",
      description:
        "A weather website that lets the user search for any city in the world's weather.  It also stores the last 8 searches to make rescanning your favorite cities easier.",
    },
    {
      name: "Staff Examiner",
      category: "MYSQL, NODE",
      description:
        "This project allows a small company to use a MySQL Database to keep track of their staff.  It uses MySQL2, Inquirer, and Console.table to function.  It demonstrates the management of a Database from setting up of the db, its schema, and its seeding.",
    },
    {
      name: "",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "",
      category: "food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Green river",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Docks",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Panoramic village by sea",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Domestic landscape",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "Park bench",
      category: "landscape",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);
  // select only the current category
  const currentProjectss = projects.filter(
    (project) => project.category === category
  );
  // We are going to map this new array below to create in index of the
  // photos that match

  const toggleModal = (image, i) => {
    // current photo
    // Used ... to add the index: i key value pair
    setCurrentProject({ ...image, index: i });
    // alternate t/f
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      {/* If modal is open use modal */}
      {isModalOpen && (
        <Modal setCurrentProject={currentProject} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {/* {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))} */}
      </div>
    </div>
  );
}

export default ProjectList;
