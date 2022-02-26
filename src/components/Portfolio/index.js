import React, { useState } from "react";
//import Modal from "../Modal";
import Project from "../Project";

function Portfolio({}) {
  const [projects] = useState([
    {
      // 1
      name: "Critique Code",
      github: "https://github.com/tgtiburon/budget_anywhere",
      deployed: "https://tgtiburon-budget-anywhere.herokuapp.com/",
      category: "MySQL",
      screen: "critique-code.PNG",
      description:
        "We're Not Stack Overflow. Welcome to Reddit uhh I mean Welcome to Critique Code. Are you tired of getting incessantly cyber-bullied on Stack Overflow? Are you tired of feeling like a terrible coder who has no business opening up their IDE everyday? Welcome to Reddit dot com Here you can write the worst code imaginable and post it for a laugh, or if that terrible code was an accident, then you can look for feed back. Are you a great coder looking to help others learn? Are you a bad coder looking to learn? Or Are you painfully average and just looking to share the dumbest for loop you could think of writing?",
    },
    {
      // 2
      name: "Budget Anywhere",
      github: "https://github.com/tgtiburon/budget_anywhere",
      deployed: "https://tgtiburon-budget-anywhere.herokuapp.com/",
      category: "React",
      screen: "budget_anywhere.PNG",
      description:
        "This is both a website and a PWA (Progressive Web App) which allows the user to track their budget. This app integrates the ability to do transactions when you are connected with the internet, but also when you are offline. It utilizes a service worker and IndexedDb to allow for this offline functionality. In addition, you can install this app on your mobile device or desktop by clicking the symbol in the address bar.",
    },
    {
      // 3
      name: "Nerd News",
      github: "https://github.com/tgtiburon/NerdNews",
      deployed: "https://tgtiburon-nerdnews.herokuapp.com/",
      category: "MySQL",
      screen: "nerdnews.PNG",
      description:
        "This app is designed to be used as a blogging site.  It allows for users to create accounts and then write their own posts, as well as comment on other's posts.",
    },
    {
      // 4
      name: "Idea Cache",
      github: "https://github.com/tgtiburon/idea_cache",
      deployed: "https://idea-cache-tgtiburon.herokuapp.com/",
      category: "Node Express",
      screen: "idea_cache_scn2.png",
      description:
        "Idea Cache allows the user to store their ideas on an express server.  It demonstrates the use of node.js, express server, as well as overall quality programing practices.",
    },
    {
      // 5
      name: "Web Security",
      github: "https://github.com/tgtiburon/Web_Security",
      deployed: "https://tgtiburon.github.io/Web_Security/",
      category: "JS, JQUERY",
      screen: "Web_Security.PNG",
      description:
        "As beginning web developers we find ourself using the internet to help us solve all sorts of issues related to creating the perfect (we hope) websites. Keeping up on the latest technology news and being able to scan a website we have never heard of that shows up on our searches for help, both seem very valuable to us.",
    },

    {
      // 6
      name: "Weather Watcher",
      github: "https://github.com/tgtiburon/Weather_Watcher",
      deployed: "https://tgtiburon.github.io/Weather_Watcher/",
      category: "JS, JQuery, Bootstrap",
      screen: "Weather_Watcher.PNG",
      description:
        "A weather website that lets the user search for any city in the world's weather.  It also stores the last 8 searches to make rescanning your favorite cities easier.",
    },
    {
      //7
      name: "Digital DB",
      github: "https://github.com/tgtiburon/budget_anywhere",
      deployed: "https://tgtiburon-budget-anywhere.herokuapp.com/",
      category: "MySQL",
      screen: "digital_db.PNG",
      description: "This project provides a backend for an e-commerce website.",
    },
    {
      name: "Readme Architect",
      github: "https://github.com/tgtiburon/ReadME_Architect",
      deployed:
        "https://drive.google.com/file/d/1soa3qjEEMhE1Rb5K3XjW1956j46D0z1M/preview",
      category: "Node",
      screen: "ReadMe_Architect.PNG",
      description:
        "This application allows the user to create a professional Readme markdown file for any type of project. ",
    },
    {
      name: "Learn Regex",
      github:
        "https://gist.github.com/tgtiburon/6e6039ae8d8994344a1f89caf141f4a9",
      deployed:
        "https://gist.github.com/tgtiburon/6e6039ae8d8994344a1f89caf141f4a9",
      category: "Regex",
      screen: "learn_regex.PNG",
      description:
        "I am writing the Regular Expression tutorial to help new or seasoned developers who may have questions about what exactly a Regular Expression is, and how they might use it.  This paper will cover what Regex is, and some cases of how it might be used.",
    },

    {
      name: "Train of Thought",
      github: "https://github.com/tgtiburon/train-of-thought",
      deployed: "https://watch.screencastify.com/v/FfuMSsactjQknrvWWpu0",
      category: "MongoDB",
      screen: "trainofthought.PNG",
      description:
        "This is a social media API app.  It uses MongoDB and Mongoose to accomplish this goal.",
    },

    {
      name: "Work Day Scheduler",
      github: "https://github.com/tgtiburon/Work_Day_Scheduler",
      deployed: "https://tgtiburon.github.io/Work_Day_Scheduler/",
      category: "JS, JQuery",
      screen: "Work_day_Scheduler_scrn.PNG",
      description:
        "A website that allows the user to schedule events for each hour of the work day. It will dynamically update the events and color code them realtive to when they are due. Red means that the item is due right now. Green means it is in the future, and grey means it is in the past.",
    },

    {
      name: "Staff Examiner",
      github: "https://github.com/tgtiburon/Staff_Examiner",
      deployed:
        "https://drive.google.com/file/d/19d6mD_hSiJjDhNIyAWiAuTTeDbIplO7b/view",
      category: "MYSQL, NODE",
      screen: "staff_examiner.PNG",
      description:
        "This project allows a small company to use a MySQL Database to keep track of their staff.  It uses MySQL2, Inquirer, and Console.table to function.  It demonstrates the management of a Database from setting up of the db, its schema, and its seeding.",
    },
    {
      name: "Team Tracker",
      github: "https://github.com/tgtiburon/Team_Tracker",
      deployed:
        "https://drive.google.com/file/d/1Ioo038Y2-HMVUMeJm_OD1cpGjHMahOiE/view?usp=sharing",
      category: "JS, NODE",
      screen: "team_tracker_scrn.png",
      description:
        "Team tracker is a node.js  command-line application that will take in input and generate cards for each team member on a development team.  I designed this app using an Employee class from which Manager, Engineer, and Intern classes inherit.  These classes have both properties and methods.  Each employee card lists the employee ID and their email.  The email is clickable and will open  your email app when clicked.  Depending on the job role it also displays different information.  The manager displays his/her office number.  The engineers also display a clickable link that will take you to their github page in another tab. And lastly interns display the school that they are attending.",
    },
    {
      name: "Password Generator",
      github: "https://github.com/tgtiburon/Password_Generator",
      deployed: "https://tgtiburon.github.io/Password_Generator/",
      category: "JS",
      screen: "Password.PNG",
      description:
        "A website that offers to create a custom password for the user.",
    },
    {
      name: "Challenge-1",
      github: "https://github.com/tgtiburon/challenge-1",
      deployed: "https://tgtiburon.github.io/challenge-1/",
      category: "SEO HTML",
      screen: "horiseon.png",
      description:
        "I was given the task of taking an index.html and a style.css which created a functional website for a company called Horiseon. The website was pleasing to look at but was lacking in how the html and css was structured for both readability and for accessibity. I replaced many of the non-semantic elements with semantic ones and added other elements to make the website more accessible for users who would be using a reader to access the site. In addition to this I reorganized the html and css to be in a more logical order as well as be more efficient by consolodating classes that were reusing code.",
    },
    {
      name: "Git-it-Done",
      github: "https://github.com/tgtiburon/git-it-done",
      deployed: "https://tgtiburon.github.io/git-it-done/",
      category: "JS HTML",
      screen: "git-it-done-screen.PNG",
      description:
        "A website allows the user to search for open issues either for an individual user on github, or to search by three popular languages.",
    },
    {
      name: "Web-APIs-Challenge-Code-Quiz",
      github: "https://github.com/tgtiburon/Web-APIs-Challenge-Code-Quiz",
      deployed: "https://tgtiburon.github.io/Web-APIs-Challenge-Code-Quiz/",
      category: "JS HTML",
      screen: "WebAPISCRN.PNG",
      description:
        "A website allows the user to search for open issues either for an individual user on github, or to search by three popular languages.",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((projectInfo, i) => (
          <Project projectInfo={projectInfo} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
