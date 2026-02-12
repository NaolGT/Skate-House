import React from "react";
import "./Passes.css";
import Title from "../SubComponents/Title/Title";
import PassCards from "../SubComponents/PassCards/PassCards";

const Passes = () => {
  return (
    <div id="passes">
      <Title title={"skate passes"} bottomSpace="90px" />
      <div className="passCardsContainer">
        <PassCards
          duration={"1 hour pass"}
          detail={"Skate access + music"}
          price={"200 etb"}
          cardScale={1.1}
        />
        <PassCards
          duration={"monthly pass"}
          detail={"Skate access + music"}
          price={"3200 etb"}
          cardScale={1.3}
        />
        <PassCards
          duration={"private session"}
          detail={"Skate access + music"}
          price={"300 etb"}
          cardScale={1.1}
        />
      </div>
    </div>
  );
};

export default Passes;
