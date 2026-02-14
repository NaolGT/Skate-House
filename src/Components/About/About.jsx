import React from "react";
import "./About.css";
import Title from "../SubComponents/Title/Title";
import kids from "../../assets/friends-having-fun-while-skating_23-2150880818.png";

const About = () => {
  return (
    <div id="about" className="sections">
      <Title title={"About / our story"} />
      <div className="aboutdiv">
        <img src={kids} alt="" />
        <div className="aboutText">
          <p>
            we're all about roller skating- the movement, the culture, and the
            freedom. built for skaters of all levels, we exist to support style,
            confidence , and community on every ride
          </p>
          <button>read our story</button>
        </div>
      </div>
    </div>
  );
};

export default About;
