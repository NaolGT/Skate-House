import React from "react";
import Title from "../SubComponents/Title/Title";
import ServiceCards from "../SubComponents/Services_cards/ServiceCards";
import skate_shoe from "../../assets/skate-shoe.png";
import learn_skate from "../../assets/Learn-skate.png";
import community from "../../assets/community.png";
import "./Services.css";

const Services = () => {
  return (
    <div id="services">
      <Title title={"What we Offer"} />
      <div className="serviceCardsContainer">
        <ServiceCards
          image={skate_shoe}
          service={"Skates and Gears"}
          description={"quality skates and accessories for every style"}
        />
        <ServiceCards
          image={learn_skate}
          service={"learn to skate"}
          description={"tips, guides, and beginner-friendly titorials"}
          imagewidth="70px"
        />
        <ServiceCards
          image={community}
          service={"community"}
          description={"events, stories, and skate culture"}
        />
        <ServiceCards
          image={community}
          service={"Skates and Gears"}
          description={"quality skates and accessories for every style"}
        />
      </div>
    </div>
  );
};

export default Services;
