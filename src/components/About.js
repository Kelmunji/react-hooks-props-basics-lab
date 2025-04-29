import React from "react";
import Links from "./Links"; // Assuming you have a Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* only show <p> if bio exists and is not empty */}
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {/* add Links component and pass props */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;