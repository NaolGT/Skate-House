import React from "react";
import "./Footer.css";
import facebook from "../../assets/Facebook_icon.png";
import telegram from "../../assets//telegram_img.png";
import tiktok from "../../assets/tiktok_img.png";

const Footer = () => {
  return (
    <div id="footer">
      <div className="LSQ">
        <h1>Super skate</h1>
        <div className="socials">
          <a href="">
            <img src={facebook} alt="" className="facebook" />
          </a>
          <a href="">
            <img src={telegram} alt="" className="telegram" />
          </a>
          <a
            href="https://www.tiktok.com/@super_skate_hawassa?is_from_webapp=1&sender_device=pc"
            target="blank"
          >
            <img src={tiktok} alt="" className="tiktok" />
          </a>
        </div>
        <div className="quickLinks">
          <a href="#hero">
            <p>Home</p>
          </a>
          <a href="#services">
            <p>services</p>
          </a>
          <a href="#about">
            <p>about</p>
          </a>
          <a href="#sessions">
            <p>Sakte sessions</p>
          </a>
          <a href="#passes">
            <p>Pricing</p>
          </a>
          <a href="#gallery">
            <p>gallery</p>
          </a>
          <a href="#contact">
            <p>contact</p>
          </a>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2026 Super-Skate Hawassa. All rights reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
