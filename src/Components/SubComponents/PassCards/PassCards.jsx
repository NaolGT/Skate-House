import React from "react";
import "./PassCards.css";

const PassCards = ({ duration, detail, price, cardScale }) => {
  return (
    <div className="passCards" style={{ scale: cardScale }}>
      <h2 className="duration">{duration}</h2>
      <h3 className="detail">{detail}</h3>
      <h1 className="price">{price}</h1>
      <button>get pass</button>
    </div>
  );
};

export default PassCards;
