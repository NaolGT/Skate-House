import React, { useEffect, useState } from "react";
import hero_skate from "../../assets/Hero-skate.webp";
import "./Hero.css";
import Services from "../Services/Services";
import menu from "../../assets/Hamburger-menu_-_Delapouite_-_white_-_game-icons.svg.png";
import logo from "../../assets/logo.webp";

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
  const [hero, setHero] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/hero")
      .then((res) => {
        const contentType = res.headers.get("content-type") || "";
        if (!res.ok || !contentType.includes("application/json")) {
          throw new Error("Invalid hero API response");
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setHero(data[0]);
        } else {
          setHero(data);
        }
      })
      .catch((error) => {
        console.error("Failed to load hero:", error);
      });
  }, []);

  return (
    <div id="hero">
      <section className="hero">
        <nav className="navbar">
          <img src={logo} alt="" width={160} className="logo" />
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
        <div className="header-text">
          <h1>{hero.title}</h1>
          <p>{hero.content}</p>
          <a href="#services">
            <button>Learn More</button>
          </a>
        </div>
        <img src={hero_skate} alt="" className="skate" />
      </section>
    </div>
  );
};

export default Hero;
