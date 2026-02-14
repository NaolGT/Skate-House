import React, { useEffect, useState } from "react";
import hero_skate from "../../assets/Hero-skate.png";
import "./Hero.css";
import Services from "../Services/Services";
import menu from "../../assets/Hamburger-menu_-_Delapouite_-_white_-_game-icons.svg.png";

const Hero = () => {
  // const drop = document.querySelector(".menu");
  // const dropList = document.querySelector(".uldiv");

  // drop.addEventListener("click", () => {
  //   dropList.classList.toggle("show");
  // });

  const [show, setshow] = useState(false);

  useEffect(() => {
    if (show) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const closeMenu = () => {
    setshow(false);
  };

  return (
    <div id="hero">
      <section class="hero">
        <nav class="navbar">
          <h1>Super Skate</h1>
          <img
            src={menu}
            alt=""
            className="menu"
            onClick={() => {
              setshow(!show);
            }}
          />
          <div className={`uldiv ${show ? "show" : ""}`}>
            <ul className="navbar-ul">
              <li onClick={closeMenu}>
                <a href="#services">Services</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#about">About</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#sessions">Sessions</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#passes">Pricing</a>
              </li>
              <li onClick={closeMenu}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="header-text">
          <h1>
            Lace Up. <br />
            Step Out. <br />
            Roller Skate.
          </h1>
          <p>
            Roll into the thrill of roller skating — gear up, hit the streets,
            and join a community that lives for style, movement, and fun.
          </p>
          <a href="#services">
            <button>Learn More</button>
          </a>
        </div>
        <img src={hero_skate} alt="" class="skate" />
      </section>
    </div>
  );
};

export default Hero;
