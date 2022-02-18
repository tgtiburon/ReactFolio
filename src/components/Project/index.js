import React from "react";
import ProjectList from "../ProjectList";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;

  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>

      <ProjectList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;
// Was used to pass in the prop. We pass currentCategory.name into the PhotoList
//   <PhotoList category={currentCategory.name} />
