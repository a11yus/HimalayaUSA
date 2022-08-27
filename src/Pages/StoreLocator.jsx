import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./StoreLocatorStyle.module.css";
import {FaSearchLocation} from "react-icons/fa"

const StoreLocator = () => {
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    setCity(text);
    setText("")
  };

  function getlocation() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      let crd = position.coords;
      setLatitude(crd.latitude);
      setLongitude(crd.longitude);
    }
  }
  getlocation();

  function getDataLocation(latitude, longitude) {
    // console.log(latitude, longitude);
    axios
      .get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=6b84dcc2fc3441b19d2cb5a22499c07e`
      )
      .then((res) => {
        // console.log(res);
        // console.log(res.data.features[0].properties.city);
        setCity(res.data.features[0].properties.city);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }

  useEffect(() => {
    getDataLocation(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div class={style.StoreLocatorContainer} style={{color:"black"}}>
      <div className={style.StoreLocatorHeading}>
        <h1>Store Locator</h1>
      </div>
      <div className={style.searchContainer} >
       

<div  className={style.searchContainer1}>
       <input
          placeholder="Enter Your City"
          type="text"
          value={text}
          onChange={handleChange}
          className={style.mapSearch}
        />
       </div>
        
        <div className={style.searchContainer2}>
        <button  className={style.SearchLogo} onClick={handleClick} style={{paddingTop:"15px"}}><  FaSearchLocation /></button>
        </div>

       
      </div>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe
            style={{ marginLeft: "30%" }}
            width="850"
            height="500"
            id="gmap_canvas"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src={!city ? "https://i.pinimg.com/originals/b4/4e/22/b44e229598a8bdb7f2f432f246fb0813.gif":`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
