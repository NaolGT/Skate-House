import React from "react";
import { useState } from "react";
import "./ImageSlider.css";
import arrow from "../../../assets/white-arrow-png-41944.png";

const ImageSlider = ({ images }) => {
  const [Index, setIndex] = useState(0);

  const next = () => {
    if (Index == images.length - 1) {
      setIndex(0);
    } else {
      setIndex(Index + 1);
    }
  };
  const prev = () => {
    if (Index == 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(Index - 1);
    }
  };
  return (
    <div className="slider">
      <img src="" alt="" />
      <img src={arrow} alt="" className="leftArrow arrow" onClick={prev} />
      <div className="imgDiv">
        <img src={images[Index]} alt="" />
      </div>
      <img src={arrow} alt="" className="rightArrow arrow" onClick={next} />
    </div>
  );
};

export default ImageSlider;
