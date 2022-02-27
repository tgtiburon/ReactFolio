import React from "react";
//import coverImage from "../../assets/cover/cover-image.jpg";
// Images
//import coverImage from "../../assets/bubble_framed_pike_pic.png";

function Resume() {
  return (
    <div className="flex-column">
      <div className="my-2">
        <a href="https://docs.google.com/document/d/1BzxUzS_MxynjQ-_6phnNx_YTPQBjXK9w/edit?usp=sharing&amp;ouid=107744458098251183433&amp;rtpof=true&amp;sd=true">
          Download my Resume!
        </a>
      </div>

      <div className="frontend">
        <p>Front End Skills</p>
        <ul className="flex-column">
          <il>ReactJS</il>
          <il>HTML</il>
          <il>CSS</il>
          <il>Bootstrap</il>
          <il>JQUERY</il>
          <il>JavaScript</il>
          <il>SEO</il>
          <il>Git</il>
          <il>Github</il>
          <il>WPO</il>
        </ul>
      </div>
      <div className="backend"></div>
      <p>Back End Skills</p>
      <ul className="flex-column">
        <il>NODE</il>
        <il>Express</il>
        <il>MySQL</il>
        <il>Sequelize</il>
        <il>MongoDB</il>
        <il>Mongoose</il>
        <il>RESTful APIs</il>
        <il>GraphQL</il>
        <il>Apollo</il>
        <il></il>
      </ul>
    </div>
  );
}

export default Resume;
