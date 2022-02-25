import React, { useState } from "react";
import Modal from "../Modal";

///import photo from "../../assets/small/commercial/0.jpg";
// pass in the props and deconstruct out category
function Portfolio({ category }) {
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
      description: "This project provides a backend for an ecommerce website.",
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
      name: "Team Tracker",
      category: "JS, NODE",
      description:
        "Team tracker is a node.js  command-line application that will take in input and generate cards for each team member on a development team.  I designed this app using an Employee class from which Manager, Engineer, and Intern classes inherit.  These classes have both properties and methods.  Each employee card lists the employee ID and their email.  The email is clickable and will open  your email app when clicked.  Depending on the job role it also displays different information.  The manager displays his/her office number.  The engineers also display a clickable link that will take you to their github page in another tab. And lastly interns display the school that they are attending.",
    },
    {
      name: "Password Generator",
      category: "JS",
      description:
        "A website that offers to create a custom password for the user.",
    },
    {
      name: "Challenge-1",
      category: "SEO HTML",
      description:
        "I was given the task of taking an index.html and a style.css which created a functional website for a company called Horiseon. The website was pleasing to look at but was lacking in how the html and css was structured for both readability and for accessibity. I replaced many of the non-semantic elements with semantic ones and added other elements to make the website more accessible for users who would be using a reader to access the site. In addition to this I reorganized the html and css to be in a more logical order as well as be more efficient by consolodating classes that were reusing code.",
    },
    {
      name: "Git-it-Done",
      category: "JS HTML",
      description:
        "A website allows the user to search for open issues either for an individual user on github, or to search by three popular languages.",
    },
  ]);
  // // select only the current category
  // const currentProjects = projects.filter(
  //   (project) => project.category === category
  // );
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
        <h1>Portfolio Page</h1>
      </div>
    </div>
  );
}

export default Portfolio;
