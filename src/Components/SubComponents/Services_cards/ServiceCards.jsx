import React from "react";
import "./ServiceCards.css";

const ServiceCards = ({ image, service, description, imagewidth }) => {
  return (
    <div className="serviceCard">
      <div className="cardInfo">
        <div className="imgdiv">
          <img
            src={image}
            alt=""
            className="card-image"
            style={{ width: imagewidth }}
          />
        </div>
        <div className="cardText">
          <h3>{service}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
