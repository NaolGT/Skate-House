import React from "react";
import "./Contact.css";
import Title from "../SubComponents/Title/Title";
import facebook from "../../assets/Facebook_icon.png";
import telegram from "../../assets/telegram_img.png";
import tiktok from "../../assets/tiktok_img.png";
import location from "../../assets/location Icon.png";

const Contact = () => {
  return (
    <div id="contact" className="sections">
      <Title title={"Contact and location"} />
      <div className="location_contactContainer">
        <div className="contactDiv">
          <h1>Contacts us on</h1>
          <div className="socialMedia">
            <img src={facebook} alt="" className="facebook" />
            <p> facebook.com</p>
          </div>
          <div className="socialMedia">
            <img src={telegram} alt="" className="telegram" />
            <p>telegram.com</p>
          </div>
          <div className="socialMedia">
            <img src={tiktok} alt="" className="tiktok" />
            <a
              href="https://www.tiktok.com/@super_skate_hawassa?is_from_webapp=1&sender_device=pc"
              target="blank"
            >
              <p>super_skate_hawassa</p>
            </a>
          </div>
          <p>Tel: +251 91234 5678 99</p>
        </div>
        <div className="locationDiv">
          <h1>location</h1>
          <div className="mapDiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1036.1877953149663!2d38.47436518775507!3d7.051782710369196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b145004701a879%3A0x7fc34410341dc52e!2sSuper%20skate%20hawassa!5e0!3m2!1sen!2set!4v1770578166206!5m2!1sen!2set"
              width="50%"
              max-width="90%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="locationTextDiv">
            <img src={location} alt="" className="location" />
            <p>Hawassa-Piassa, Hayk BLDG.-5th Floor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
