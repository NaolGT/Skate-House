import React from "react";
import { useEffect,useState } from "react";
import "./Footer.css";
import Facebook from "../../assets/Facebook_icon.png";
import Telegram from "../../assets//telegram_img.png";
import Tiktok from "../../assets/tiktok_img.png";

const Footer = () => {
  const [footer, setFooter] = useState({
       socialLinks:{ 
        facebook: "", 
        tiktok:"" ,
        telegram:""}
      });
    
  useEffect(()=>{
    fetch("http://localhost:5000/api/footer")
      .then((res)=>res.json())
      .then((data)=>{
      if (Array.isArray(data)&&data.length>0){
        setFooter(data[0]);
      }else{
        setFooter(data);
      }
    });
  },[]);
  return (
    <div id="footer">
      <div className="LSQ">
        <h1>Super skate</h1>
        <div className="socials">
          <a  href={footer.socialLinks.facebook}>
            <img src={Facebook} alt="" className="facebook" />
          </a>
          <a  href={footer.socialLinks.telegram}>
            <img src={Telegram} alt="" className="telegram" />
          </a>
          <a
             href={footer.socialLinks.tiktok}
          >
            <img src={Tiktok} alt="" className="tiktok" />
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
