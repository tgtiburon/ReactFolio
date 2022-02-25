import React from "react";
//import coverImage from "../../assets/cover/cover-image.jpg";
// Images
import coverImage from "../../assets/bubble_framed_pike_pic.png";


function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        //src="../../assets/bubble_framed_pike_pic.png"
        alt="Tony holding up a large norther pike"
        height="192"
        width="192"
      />
      <p>
        Highly effective educator with more than 25 years of experience teaching
        science and developing meaningful relationships with students. Tenacious
        problem solver and creative thinker who will help you reach your
        full-stack web development goals.
      </p>
      {/* <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      /> */}
    </section>
  );
}

export default About;
