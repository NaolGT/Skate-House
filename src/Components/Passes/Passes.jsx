import React from "react";
import { useEffect,useState } from "react";
import "./Passes.css";
import Title from "../SubComponents/Title/Title";
import PassCards from "../SubComponents/PassCards/PassCards";

const Passes = () => {
  const [passes,setPasses]=useState({
    basic:{ title: "", body:"" ,price:""},
	  premium:{ title: "", body:"" ,price:""},
	  family:{ title: "", body:"" ,price:""}
    });
  
    useEffect(()=>{
      fetch("http://localhost:5000/api/pricing")
      .then((res)=>res.json())
      .then((data)=>{
       if (Array.isArray(data)&&data.length>0){
        setPasses(data[0]);
       }else{
        setPasses(data);
       }
    })
    .catch(error=>console.error(error));
    },[]);
   
  return (
    <div id="passes" className="sections">
      <Title title={"skate passes"} bottomSpace="90px" />
      <div className="passCardsContainer" >
        <PassCards 
          duration={passes.basic.title}
          detail={passes.basic.body}
          price={passes.basic.price+"ETB"}
          cardScale={1.1}
        />
        <div className="second" >
          <PassCards 
            duration={passes.premium.title}
            detail={passes.premium.body}
            price={passes.premium.price + "ETB"}
            cardScale={1.3}
          />
        </div>
        <PassCards 
          duration={passes.family.title}
          detail={passes.family.body}
          price={passes.family.price +"ETB"}
          cardScale={1.1}
        />
      </div>
    </div>
  );
};

export default Passes;
