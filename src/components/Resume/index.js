import React from "react";

function Resume() {
  // Return Resume HTML
  return (
    <div className="flex-column">
      <div className="my-2">
        <a
          className="dlText"
          href="https://drive.google.com/file/d/1-DN7nXImmoc8j5KA_toGvw4lVGEjRvZ4/view?usp=sharing"
          //href="../../assets/TonyGendreau2022Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download my Resume!
        </a>
      </div>

      <div className="frontend">
        <p className="skillTitle">Front End Skills</p>
        <ul className="flex-column frontEndSkills">
          <li>ReactJS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JQUERY</li>
          <li>JavaScript</li>
          <li>SEO</li>
          <li>Git</li>
          <li>Github</li>
          <li>WPO</li>
        </ul>
      </div>
      <div className="backend"></div>
      <p className="skillTitle">Back End Skills</p>
      <ul className="flex-column backEndSkills">
        <li>NODE</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>RESTful APIs</li>
        <li>GraphQL</li>
        <li>Apollo</li>
      </ul>
    </div>
  );
}

export default Resume;
