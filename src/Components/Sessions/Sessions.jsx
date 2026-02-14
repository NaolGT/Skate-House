import React from "react";
import Title from "../SubComponents/Title/Title";
import "./Session.css";
import clock from "../../assets/clock.png";

const Sessions = () => {
  return (
    <div id="sessions" className="sections">
      <Title title={"skate sessions"} />
      <div className="SessionDiv">
        <img src={clock} alt="" />
        <h1 className="openDays">Monday - sunday</h1>
        <p className="openHours">7:00 am - 6:00 pm</p>
      </div>
    </div>
  );
};

export default Sessions;
