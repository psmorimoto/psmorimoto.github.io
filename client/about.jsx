import React from 'react';

const About = (props) => {
  return (
    <div>
      <section id="about">
        <h4>About Me</h4>
        <p>Some photo will go here</p>
        <p>Information about me will go here</p>
      </section>
      <article>
        <h3>Technical Skills</h3>
        <div>Front-End: Javascript, React, Git, HTML/CSS, jQuery</div>
        <div>Back-End: MySQL, MongoDB/Mongoose.js, AWS EC2, Docker, Node.js/Express</div>
      </article>
    </div>
  )
}

export default About;