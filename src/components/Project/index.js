import React, { useState } from "react";


function Project({ projectInfo }) {
  console.log("ProjectINfo", projectInfo);
  return (
    <div>
      <div className="flex-row">
        <div>
          <p> {projectInfo.name}</p>
          <img
            src={require(`../../assets/project-screen-shots/${projectInfo.screen}`)}
            height="256"
            width="256"
            alt={projectInfo.name}
            className="my-2 mx-2"
            key={projectInfo.name}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;

