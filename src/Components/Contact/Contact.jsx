import React, { use, useEffect, useState } from "react";
import "./Contact.css";
import Title from "../SubComponents/Title/Title";
import facebook from "../../assets/Facebook_icon.png";
import telegram from "../../assets/telegram_img.png";
import tiktok from "../../assets/tiktok_img.png";
import location from "../../assets/location Icon.png";

const Contact = () => {
  const [contacts,setContacts]=useState([]);
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  });
  useEffect(()=>{
    fetch("http://localhost:5000/api/contact")
    .then(res=>res.json())
    .then(data=>setContacts(data))
    .catch(err=>console.error("Error fetching contacts:",err));
  },[]);
  const handlechange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response=await
      fetch("http://localhost:5000/api/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
      });
      const data=await response.json();
      console.log("message saved:",data);
      setFormData({
        name:"",
        email:"",
        message:""
      });
    }catch(error){
      console.error("Error submitting form:",error);
    }
  };
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
            <p>Hayk BLDG. 5th Floor, Hawassa, Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
