import React from "react";

import coverImage from "../../assets/bubble_framed_pike_pic.png";


function About() {
  // Return about HTML
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        alt="Tony holding up a large northern pike"
        height="256"
        width="256"
      />
      <p>
        Highly effective educator with more than 25 years of experience teaching
        science and developing meaningful relationships with students. Tenacious
        problem solver and creative thinker who will help you reach your
        full-stack web development goals.
      </p>
    </section>
  );
}

export default About;
