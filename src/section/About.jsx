import React from 'react';
import img from '../../assets/me.jpg';

import './About.css';

const About = () => {
  return (
    <div className="wrapper-about" id="wrapper-about">
      <div className="about">
        <div className="desc">
          <h1 style={{ color: '#e41749' }}>
            Hi There !
            <hr />
          </h1>
          <p>
            My Name is Muhammad Rayhan Hamada Budiman, an ordinary teenager who
            enjoyed and passionate to code and learning CS stuff. I also working
            on several solo projects.
          </p>
          <br />
          <p>
            I'm also a self-taught programmer, i started to code when i like,
            probably 14, and the first programming language i lay my hands on is
            html, and then move to python which is a very friendly language in
            my opinion. From there i move to Java and C++, this is where i
            thought i'm getting serious to learn many interesting stuff on
            Computer Science, and make some small projects along the way.
          </p>
          <br />
          <p>
            Currently i'm trying to finish my Bachelor degree at Gunadarma
            University.
          </p>
        </div>
        <div className="my-image">
          <img
            className="my-img"
            src={img}
            alt="my profile picture"
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
