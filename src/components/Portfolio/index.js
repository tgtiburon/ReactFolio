import React, { useState } from "react";
//import Modal from "../Modal";
import Project from "../Project";

///import photo from "../../assets/small/commercial/0.jpg";
// pass in the props and deconstruct out category
function Portfolio({}) {
  // Start the app with the modal closed
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const [currentProject, setCurrentProject] = useState();

  // // select only the current category
  // const currentProjects = projects.filter(
  //   (project) => project.category === category
  // );
  // We are going to map this new array below to create in index of the
  // photos that match

  // const toggleModal = (image, i) => {
  //   // current photo
  //   // Used ... to add the index: i key value pair
  //   setCurrentProject({ ...image, index: i });
  //   // alternate t/f
  //   setIsModalOpen(!isModalOpen);
  // };
  return (
    <div>
      <div className="flex-row">
        <Project></Project>
        {/* {projects.map((project, i) => (
          <div>
            <Project></Project>
            <p> {project.name}</p>
            <img
              src={require(`../../assets/project-screen-shots/${project.screen}`)}
              height="256"
              width="256"
              alt={project.name}
              className="my-2 mx-2"
              key={project.name}
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Portfolio;
