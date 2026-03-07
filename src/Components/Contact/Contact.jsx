import React, { useEffect, useState } from "react";
import "./Contact.css";
import Title from "../SubComponents/Title/Title";
import facebook from "../../assets/Facebook_icon.png";
import telegram from "../../assets/telegram_img.png";
import tiktok from "../../assets/tiktok_img.png";
import location from "../../assets/location Icon.png";

const Contact = () => {
  const [contact, setContact] = useState({
    socialLinks: { facebook: "", tiktok: "", telegram: "" },
    contactAddress: { phone: "", address: "", googleMapLink: "" },
  });
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => {
        // If the response is not OK or not JSON, avoid parsing and mark error
        const contentType = res.headers.get("content-type") || "";
        if (!res.ok || !contentType.includes("application/json")) {
          throw new Error("Invalid contact API response");
        }
        return res.json();
      })
      .then((data) => {
        const contactData = Array.isArray(data) && data.length > 0 ? data[0] : data;

        setContact({
          socialLinks: {
            facebook: contactData?.socialLinks?.facebook || "",
            tiktok: contactData?.socialLinks?.tiktok || "",
            telegram: contactData?.socialLinks?.telegram || "",
          },
          contactAddress: {
            phone: contactData?.contactAddress?.phone || "",
            address: contactData?.contactAddress?.address || "",
            googleMapLink: contactData?.contactAddress?.googleMapLink || "",
          },
        });
        setHasError(false);
      })
      .catch((error) => {
        console.error("Failed to load contact info:", error);
        setHasError(true);
      });
  }, []);
  return (
    <div id="contact" className="sections">
      <Title title={"Contact and location"} />
      <div className="location_contactContainer">
        <div className="contactDiv">
          <h1>Contacts us on</h1>
          <div className="socialMedia">
            <img src={facebook} alt="" className="facebook" />
             <a href={contact.socialLinks.facebook || "#"}>
              <p> facebook.com</p>
            </a>
          </div>
          <div className="socialMedia">
            <img src={telegram} alt="" className="telegram" />
            <a href={contact.socialLinks.telegram || "#"}>
              <p>telegram.com</p>
            </a>
          </div>
          <div className="socialMedia">
            {/* href="https://www.tiktok.com/@super_skate_hawassa?is_from_webapp=1&sender_device=pc" */}
            <img src={tiktok} alt="" className="tiktok" />
            <a href={contact.socialLinks.tiktok || "#"}>
              <p>super_skate_hawassa</p>
            </a>
          </div>
          <p>{"Tel: " + (contact?.contactAddress?.phone || "Not available")}</p>
        </div>
        <div className="locationDiv">
          <h1>location</h1>
          <div className="mapDiv">
            <iframe
              src={contact?.contactAddress?.googleMapLink || null}
              width="90%"
              max-width="90%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
          <div className="locationTextDiv">
            <img src={location} alt="" className="location" />
            <p>{contact?.contactAddress?.address || (hasError ? "Location not available" : "")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
