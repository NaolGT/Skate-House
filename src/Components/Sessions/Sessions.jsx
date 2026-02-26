import React from "react";
import { useEffect,useState } from "react";
import Title from "../SubComponents/Title/Title";
import "./Session.css";
import clock from "../../assets/clock.png";

const Sessions = () => {
  const [session,setSession]=useState({
    title:"",
    content:""
  });

  useEffect(()=>{
    fetch("http://localhost:5000/api/session")
    .then((res)=>res.json())
    .then((data)=>{
     if (Array.isArray(data)&&data.length>0){
      setSession(data[0]);
     }else{
      setSession(data);
     }
  });
  },[]);
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setSession((prev)=>({
      ...prev,
      [name]:value
    }));
  };
  return (
    <div id="sessions" className="sections">
      <Title title={"skate sessions"} />
      <div className="SessionDiv">
        <img src={clock} alt="" />
        <h1 className="openDays" onChange={handleChange}>{session.title}</h1>
        <p className="openHours" onChange={handleChange}>{session.content}</p>
      </div>
    </div>
  );
};

export default Sessions;
