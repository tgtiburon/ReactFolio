import React, { useState } from "react";

function Project({ projectInfo }) {
  console.log("ProjectINfo", projectInfo);
  return (
    <div>
      <div className="flex-row">
        <div>
          <p className="projectName  justify-center"> {projectInfo.name}</p>
          <div className="flex-row space-evenly">
            <a
              href={projectInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Link
            </a>
            <a
              href={projectInfo.deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Link
            </a>
          </div>
          <img
            src={require(`../../assets/project-screen-shots/${projectInfo.screen}`)}
            height="404"
            width="720"
            alt={projectInfo.name}
            className="projectImage my-2 mx-2"
            key={projectInfo.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;

/*
  <a
              href="https://www.linkedin.com/in/tony-gendreau-503309223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIcon} height="30" width="30" />
              <span p> Linkedin </span>
            </a>





*/
