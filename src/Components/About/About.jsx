import React from "react";
import { useEffect,useState } from "react";
import "./About.css";
import Title from "../SubComponents/Title/Title";
import kids from "../../assets/friends-having-fun-while-skating_23-2150880818.png";

const About = () => {
  const [about, setAbout] = useState({
      content:""
    });
  
     useEffect(()=>{
      fetch("http://localhost:5000/api/about")
      .then((res)=>res.json())
      .then((data)=>{
       if (Array.isArray(data)&&data.length>0){
        setAbout(data[0]);
       }else{
        setAbout(data);
       }
    });
    },[]);

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setshow((prev)={
        ...prev,
        [name]:value
      });
    };
  return (
    <div id="about" className="sections">
      <Title title={"About / our story"} />
      <div className="aboutdiv">
        <img src={kids} alt="" />
        <div className="aboutText">
          <p onChange={handleChange}>
          {about.content}
          </p>
          <button>read our story</button>
        </div>
      </div>
    </div>
  );
};

export default About;
